# Getting SCS-compatible certification (for operators)

## Process overview

The SCS Certification is a technical certification:
The Operator needs to fulfill technical requirements, such as providing certain
APIs and guaranteeing certain platform behavior in order to be certifiable.

These requirements are meant to provide guarantees to their customers, allowing
them to rely on certain features to be available and on certain system behavior
that lets their applications run in a reliable way.

The SCS certification process typically consists of a few simple steps:

1. Running the SCS compliance testsuite and adjusting the infrastructure until it passes.
2. Any additional declarations (for non-testable aspects) are written and passed to the SCS Forum.
3. The operator must be a member ("shaper" or "advisor" level) of the Forum SCS-Standards in the
   OSB Alliance (a non-profit) and pay the respective membership fees. Alternatively fees can
   be paid without becoming a member.
4. The cloud can be listed on the SCS pages as SCS-compatible with a compatibility status that is
   updated on a daily basis. SCS then tests the infrastructure on a daily basis.

## Self-testing and technical adjustments

Get the testsuite by cloning <https://github.com/SovereignCloudStack/standards/>.
In order to run the tests, you need to have normal customer (tenant) access to the cloud or
container infrastructure that you want to test. (This is by design; we explicitly do not
require nor recommend admin level access for compliance testing.)

You can run the testsuite from any machine that has a working `python3-openstacksdk` (for the
IaaS tests) or working `python3`, `kubectl` and `helm` (for the KaaS tests). Go to the
checked out tree into the `Tests/` directory to run tests.

Let's do a run
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

With option `-v`, we can make the testsuite more verbose to e.g. see that we pass the flavor naming test,
the entropy test and the image metadata test.

To fix the failures, we will thus need to:
* Add properties to the two flavors where they are missing.
* Register the `Ubuntu 22.04` image (with the appropriate metadata).

Neither is difficult to do manually, but a more systematic and automated process is preferrable.
For the first issue, there is a [blog article on flavor metadata](https://scs.community/de/tech/2024/08/20/flavor-extra-specs-compliance/).
For the image registration, the [OpenStack Image Manager](https://github.com/osism/openstack-image-manager) can be used.

For adjusting the environment, we of course do need admin access to the cloud. 
We use the tools referenced above:

```shell
```


A description how SCS-compatible IaaS compliance can be achieved on environments that use different
OpenStack implementations is described in a blog article
[Cost of making an OpenStack Cluster SCS compliant](https://scs.community/de/2024/05/13/cost-of-making-an-openstack-cluster-scs-compliant/).

## Declarations

For the SCS-compatible IaaS v5 standard, the providers must -- if they implement availbility zones
at all (which is optional) -- guarantee certain levels of independence for these. This can not
be fully tested by an automated test. The process thus envisions that providers must create some
documentation on the physical infrastructure and how it maps to availability zones and declare that
this documentation reflects the truth. SCS will review the docs and judge whether they meet the
criteria. In case of doubt, audits can be performed.

## Forum SCS-Standards @ OSBA

The SCS brand belongs to the Open Source Business Alliance e.V. (OSBA), an non-profit organziation and
association for the Open Source Industry in Germany. The OSBA creates the Forum SCS-Standards
which performs the work to evolve the SCS standards, develops the tests and perform the certification
process.

Members of the OSBA can become also member of the Forum SCS-Standards for an additional membership
fee, providing the financial resources for the Forum to do its work. Membership in the OSBA is
open to any organization that supports the goals of the OSBA.
Alternatively, a certification fee can be paid without any membership; the fee corresponds to the
lower tier membership fee.

## Getting listed and tested

When all tests are passing, all needed declarations are done, fees for the certification or the
membership in the Forum SCS-Standards at the OSBA have been paid, the infrastructure service
can become officially certified. 

The SCS team will add the cloud to the [list of certified clouds](https://docs.scs.community/standards/certification/overview)
on the SCS docs page. This can be used to prove to customers that the cloud is SCS compliant.
Note that there will be a nightly job that tests the cloud for compliance, which will be
triggered by SCS infrastructure (zuul). For this, acccess to a tenant on the cloud needs
to be provided free of charge. (This only requires very low quota, one VM is created for a minute
in one of the tests.)
The list of certified clouds will be replaced by the
[compliance monitor](https://compliance.sovereignit.cloud/page/table) soon.

For clouds not being accessible from the outside, a VPN tunnel or a local monitoring
job (with result upload) can be used.

Next to the addition into the list, we also plan to create an SCS-certified badge that
operators will be allowed to use in their marketing material as long as they fulfill the
certification conditions.

Note that for almost all certified clouds in the list of certified clouds, we also
have a health monitor running (currently still
[openstack-health-monitor](https://github.com/SovereignCloudStack/openstack-health-monitor/),
but soon the new [health-monitor](https://scs.community/de/tech/2024/09/06/vp12-scs-health-monitor-tech-preview/)),
which exposes information on the performance and error rate of each cloud.
This provides some transparency on the state of the clouds by constantly running
scenario tests against them and is tremendously helpful for both the cloud operations
teams and their customers. Strictly speaking, it is *not* a requirement for the
SCS-compatible certification, just best practice. It will be part of an
SCS-sovereign certification though, where transparency on operational aspects
is included.
