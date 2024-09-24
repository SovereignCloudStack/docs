# Example testing and adjustment for SCS IaaS-compatible compliance

## Run the tests

Get the test suite by cloning [the SCS standards repo](https://github.com/SovereignCloudStack/standards/).
In order to run the tests, you need to have normal customer (tenant) access to the cloud or
container infrastructure that you want to test. (This is by design; we explicitly do not
require nor recommend admin level access for normal compliance testing.)

You can run the test suite from any machine that has a working `python3-openstacksdk` (for the
IaaS tests) or working `python3`, `kubectl` and `helm` (for the KaaS tests). Go to the
checked out tree into the `Tests/` directory to run tests. Check that the tooling works,
e.g. by issuing a command like `openstack --os-cloud=MYCLOUD catalog list` or
`KUBECONFIG=~/.kube/MYCLUSTER.yaml kubectl get nodes -o wide`.

Let's do a run against a sample environment:
```bash
garloff@framekurt(//):/casa/src/SCS/standards/Tests [1]$ ./scs-compliance-check.py -V v4 -s CIAB -a os_cloud=ciab-test scs-compatible-iaas.yaml
INFO: module opc-v2022.11 missing checks or test cases
DEBUG: Fetching flavors from cloud 'ciab-test'
DEBUG: Checking 28 flavor specs against 18 flavors
WARNING: Flavor 'SCS-4V-16' found via name only, missing property 'scs:name-v2'
ERROR: Flavor 'SCS-4V-16' violating property constraints: scs:cpu-type: None should be 'shared-core'; scs:name-v1: None should be 'SCS-4V:16'; scs:name-v2: None should be 'SCS-4V-16'
WARNING: Flavor 'SCS-8V-32' found via name only, missing property 'scs:name-v2'
ERROR: Flavor 'SCS-8V-32' violating property constraints: scs:cpu-type: None should be 'shared-core'; scs:name-v1: None should be 'SCS-8V:32'; scs:name-v2: None should be 'SCS-8V-32'
WARNING: Missing recommended flavor 'SCS-1V-4-10'
WARNING: Missing recommended flavor 'SCS-2V-8-20'
WARNING: Missing recommended flavor 'SCS-4V-16-50'
WARNING: Missing recommended flavor 'SCS-8V-32-100'
WARNING: Missing recommended flavor 'SCS-1V-2-5'
WARNING: Missing recommended flavor 'SCS-2V-4-10'
WARNING: Missing recommended flavor 'SCS-4V-8-20'
WARNING: Missing recommended flavor 'SCS-8V-16-50'
WARNING: Missing recommended flavor 'SCS-16V-32-100'
WARNING: Missing recommended flavor 'SCS-1V-8-20'
WARNING: Missing recommended flavor 'SCS-2V-16-50'
WARNING: Missing recommended flavor 'SCS-4V-32-100'
WARNING: Missing recommended flavor 'SCS-1L-1-5'
DEBUG: Total critical / error / info: 0 / 2 / 0
DEBUG: Fetching image list from cloud 'ciab-test'
DEBUG: Images present: Cirros 0.6.1, Cirros 0.6.2, Debian 12, EVIL2, EVIL3, Ubuntu 22.04 Minimal, disk-bf.qcow2, disk-vmdk.vmdk, openSUSE 15.5, openSUSE 15.6
DEBUG: Checking 6 image specs against 10 images
ERROR: Missing mandatory image 'Ubuntu 22.04'
WARNING: Missing recommended image 'ubuntu-capi-image'
DEBUG: Missing optional image 'Ubuntu 20.04'
DEBUG: Missing optional image 'Debian 11'
DEBUG: Missing optional image 'Debian 10'
DEBUG: Total critical / error / warning: 0 / 1 / 1
********************************************************************************
CIAB SCS-compatible IaaS v4 (effective):
- main: FAIL (3 passed, 2 failed)
  - FAILED:
    - standard-flavors-check:
      > Must fulfill all requirements of https://docs.scs.community/standards/scs-0103-v1-standard-flavors
    - standard-images-check:
      > Must fulfill all requirements of https://docs.scs.community/standards/scs-0104-v1-standard-images
```

So we run the SCS-compatible IaaS tests defined in `scs-compatible-iaas.yaml` in version `v4`; without option `-V`,
the latest effective version would have been used. We further define the cloud to be named `CIAB` (short for
Cloud-in-a-Box) in the report. And we set the parameter `os_cloud` to `ciab-test`. This references the
name of the cloud as configured in OpenStack `clouds.yaml` and `secure.yaml` which contain the configuration
and credentials to access the cloud as tenant user via the API (SDK or CLI).

Let's have a look at the results:

* We seem to have all 15 mandatory compute flavors, but two of them miss mandatory properties (`extra_specs`).
  We also receive 13 warnings for not having recommended flavors, we can ignore them for now.
* On the images side, the mandatory image `Ubuntu 22.04` is not registered.
* The end result is that we passed three tests and failed to comply with two specs:
```yaml
    - standard-flavors-check:
      > Must fulfill all requirements of https://docs.scs.community/standards/scs-0103-v1-standard-flavors
    - standard-images-check:
      > Must fulfill all requirements of https://docs.scs.community/standards/scs-0104-v1-standard-images
```

With option `-v`, we can make the test suite more verbose to e.g. see that we pass the flavor naming test,
the entropy test and the image metadata test.

## Address issues

To fix the failures, we will thus need to:
* Add properties to the two flavors where they are missing.
* Register the `Ubuntu 22.04` image (with the appropriate metadata).

Neither is difficult to do manually, but a more systematic and automated process is preferable.
For the first issue, there is a [blog article on flavor metadata](https://scs.community/de/tech/2024/08/20/flavor-extra-specs-compliance/).
For the image registration, the [OpenStack Image Manager](https://github.com/osism/openstack-image-manager) can be used.

For adjusting the environment, we of course do need admin access to the cloud.
We use the tools referenced above:

```shell
garloff@framekurt(//):/casa/src/SCS/standards/Tests [3]$ OS_CLOUD=ciab-admin ./iaas/flavor-naming/flavor-add-extra-specs.py -a apply
INFO: Flavor SCS-8V-32: SET scs:cpu-type=shared-core
INFO: Flavor SCS-8V-32: SET scs:name-v1=SCS-8V:32
INFO: Flavor SCS-8V-32: SET scs:name-v2=SCS-8V-32
INFO: Flavor SCS-4V-16: SET scs:cpu-type=shared-core
INFO: Flavor SCS-4V-16: SET scs:name-v1=SCS-4V:16
INFO: Flavor SCS-4V-16: SET scs:name-v2=SCS-4V-16
INFO: Processed 15 flavors, 6 changes
```
and as this is a OSISM-based SCS system, we can on the manager just run the image manager:
```shell
dragon@manager:~$ osism manage images --cloud admin --filter "Ubuntu 22.04"
2024-09-23 13:21:43 | INFO     | Processing image 'Ubuntu 22.04 (20240705)'
2024-09-23 13:21:43 | INFO     | Tested URL https://swift.services.a.regiocloud.tech/swift/v1/AUTH_b182637428444b9aa302bb8d5a5a418c/openstack-images/ubuntu-22.04/20240705-ubuntu-22.04.qcow2: 200
2024-09-23 13:21:43 | INFO     | Importing image Ubuntu 22.04 (20240705)
2024-09-23 13:21:43 | INFO     | Importing from URL https://swift.services.a.regiocloud.tech/swift/v1/AUTH_b182637428444b9aa302bb8d5a5a418c/openstack-images/ubuntu-22.04/20240705-ubuntu-22.04.qcow2
2024-09-23 13:21:44 | INFO     | Waiting for image to leave queued state...
2024-09-23 13:21:46 | INFO     | Waiting for import to complete...
2024-09-23 13:21:56 | INFO     | Waiting for import to complete...
2024-09-23 13:22:06 | INFO     | Waiting for import to complete...
2024-09-23 13:22:16 | INFO     | Import of 'Ubuntu 22.04 (20240705)' successfully completed, reloading images
2024-09-23 13:22:17 | INFO     | Checking parameters of 'Ubuntu 22.04 (20240705)'
2024-09-23 13:22:17 | INFO     | Setting internal_version = 20240705
2024-09-23 13:22:17 | INFO     | Setting image_original_user = ubuntu
2024-09-23 13:22:17 | INFO     | Adding tag os:ubuntu
2024-09-23 13:22:17 | INFO     | Setting property architecture: x86_64
2024-09-23 13:22:17 | INFO     | Setting property hw_disk_bus: scsi
2024-09-23 13:22:17 | INFO     | Setting property hw_rng_model: virtio
2024-09-23 13:22:17 | INFO     | Setting property hw_scsi_model: virtio-scsi
2024-09-23 13:22:17 | INFO     | Setting property hw_watchdog_action: reset
2024-09-23 13:22:17 | INFO     | Setting property hypervisor_type: qemu
2024-09-23 13:22:17 | INFO     | Setting property os_distro: ubuntu
2024-09-23 13:22:18 | INFO     | Setting property os_version: 22.04
2024-09-23 13:22:18 | INFO     | Setting property replace_frequency: quarterly
2024-09-23 13:22:18 | INFO     | Setting property uuid_validity: last-3
2024-09-23 13:22:18 | INFO     | Setting property provided_until: none
2024-09-23 13:22:18 | INFO     | Setting property image_description: Ubuntu 22.04
2024-09-23 13:22:18 | INFO     | Setting property image_name: Ubuntu 22.04
2024-09-23 13:22:18 | INFO     | Setting property internal_version: 20240705
2024-09-23 13:22:18 | INFO     | Setting property image_original_user: ubuntu
2024-09-23 13:22:18 | INFO     | Setting property image_source: https://cloud-images.ubuntu.com/jammy/20240705/jammy-server-cloudimg-amd64.img
2024-09-23 13:22:18 | INFO     | Setting property image_build_date: 2024-07-05
2024-09-23 13:22:18 | INFO     | Checking status of 'Ubuntu 22.04 (20240705)'
2024-09-23 13:22:18 | INFO     | Checking visibility of 'Ubuntu 22.04 (20240705)'
2024-09-23 13:22:18 | INFO     | Setting visibility of 'Ubuntu 22.04 (20240705)' to 'public'
2024-09-23 13:22:19 | INFO     | Renaming Ubuntu 22.04 (20240705) to Ubuntu 22.04
2024-09-23 13:22:19 | INFO     | Processing image 'Ubuntu 22.04 Minimal (20240701)'
dragon@manager:~$
```

A description how SCS-compatible IaaS compliance can be achieved on environments that use different
OpenStack implementations is written up in a blog article
[Cost of making an OpenStack Cluster SCS compliant](https://scs.community/de/2024/05/13/cost-of-making-an-openstack-cluster-scs-compliant/).


## Rerun tests

We now succeed:
```shell
garloff@framekurt(//):/casa/src/SCS/standards/Tests [130]$ ./scs-compliance-check.py -V v4 -s CIAB -a os_cloud=ciab-test scs-compatible-iaas.yaml
INFO: module opc-v2022.11 missing checks or test cases
CIAB SCS-compatible IaaS v4 (effective):
- main: PASS (5 passed)
```

If you don't pass the tests yet, you'll need further adjustments.
