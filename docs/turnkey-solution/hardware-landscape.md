---
sidebar_label: Hardware-Landscape
sidebar_position: 99
---

# The SCS Hardware-Landscape

![An image of the SCS hardware landscape rack](images/combined_rack_visual.jpg)

## General information

The general aim of this environment is to install and operate the SCS reference implementation on hardware.
In addition to the classic tasks in the area of quality assurance, the environment is also used to evaluate
new concepts in the underlay/overlay network area, as a test environment for hardware-related developments,
as a demonstration environment for interested parties and as a publicly accessible blueprint for users.
The environment is designed for long-term use which a varying circle of users.

The environment consists of 21 server and 12 switch components. The selection of hardware and the
functions and properties used was designed so that the focus is on generally available or characteristic
functions and dependency on manufacturer-specific functions is avoided. Instead of the x86 servers or SONiC
switches used here, the realised environment could also be realised with hardware from other manufacturers.

From 1 January 2025, the environment will be operated by [forum SCS-Standards](https://scs.community/2024/10/23/osba-forum-scs-standards/)
and the participating companies.

## Tasks and Objectives

The tasks and objectives of the environments can be summarised as follows:

* The division into several environments makes it possible to run a lab as well as to map a productive environment (near-live operation).
* Operation of the compliance monitor (automated test for conformity with the SCS standards)
* Implementation and validation of the developed standards in a reference environment
* Analysis of problems in the interaction with the standards
* Provision of proof-of-concept installations for interested parties who want to use, promote or further develop the project
* The environment can be used by members of the SCS Standards forum and by contributors to the SCS community
  as a development and test environment for open-source development in connection with the further development
  of the SCS standards, SCS reference implementation and other relevant software components ('open-lab'/'near-live laboratory').
* Continuous Integration Environment ('Zuul as a Service') - Operation of non-critical zuul worker instances

## Installation details

The available hardware was divided into two distinct application areas:

* The **lab environment** consists exclusively of switch hardware used to evaluate, test and develop
  concepts in the area of 'Software Defined Networking'. This means that various switch models can be
  used to test and implement development tasks in the area of the open [SONiC](https://sonicfoundation.dev/) NOS
  (a network operating system based on Debian Linux) or provisioning automation tasks in the SONiC environment with the
  open-source system Netbox, a solution that is used primarily for IPAM and DCIM (IP Address Management, Data Center Infrastructure Management).
* The **production environment** is an exemplary installation of the relevant or most reference implementations with regard to an
  SCS system. It follows a configuration or approach that is based on the needs and circumstances of a real and much larger environment.
  To this end, characteristic infrastructure components were automatically installed on the manager nodes used for the installation.

The setup of the entire environment is designed in such a way that it can be reproducibly restored or reset.
Therefore, the Ansible automation available via OSISM was used in many areas.
Areas that could not be usefully automated using Ansible were implemented using a Python command-line tooling stored in the GIT repository.

## Available documentation

The primary point of information and orientation is the [*readme file*](https://github.com/SovereignCloudStack/hardware-landscape?tab=readme-ov-file#references)
which is stored at the top level of the [configuration repository](https://github.com/SovereignCloudStack/hardware-landscape).

The relevant **References** section refers here to the individual documentation areas.

## Specific installation and configuration details

* Processes for access management to the environment (2 VPN gateways, SSH logins, SSH profiles,..) have been implemented
* The production and lab environments have been set up, automated and documented as described above
* The complete environment is managed in a [GIT repository](https://github.com/SovereignCloudStack/hardware-landscape),
  adjustments and further developments are managed via GIT merge requests
* Almost all installation steps are [documented and automated](https://github.com/SovereignCloudStack/hardware-landscape/blob/main/documentation/System_Deployment.md)
  based on a pure rack installation (The setup is extensively documented, in particular the few manual steps)
  * The entire customized setup of the nodes is [implemented by OSISM/Ansible](https://github.com/SovereignCloudStack/hardware-landscape/tree/main/environments/custom)
  * All secrets (e.g. passwords) of the environment are stored and versioned in the encrypted Ansible Vault in i
    the repository (when access is transferred, rekeying can be used to change the access or the rights to it).
  * A far-reaching or in-depth automation has been created that allows the environment to be re-set up or parts of it to
    be re-set up with a reasonable amount of personnel.
  * The setup of the basic environment was implemented appropriately with Ansible and using the OSISM environment (the reference implementation)
  * Python tooling was created that adds areas that are specific to the use case of the environment and provides functions that simplify the operation of the infrastructure
  * Server systems
    * Backup and restore of the hardware configuration
    * Templating of the BMC configuration
    * Automatic installation of the operating system base image via Redfish Virtual Media
    * Control of the server status via command line (to stop and start the system for test, maintenance and energy-saving purposes)
    * Generation of base profiles for the Ansible Inventory based on the hardware key data stored in the documentation
  * Switches
    * Backup and restore of the switch configuration
    * Generation of base profiles for the Ansible Inventory based on the hardware key data stored in the documentation
* Network setup
  * The two management hosts act as redundant VPN gateways, ssh jumphosts, routers and uplink routers
  * The system is deployed with a layer 3 underlay concept
  * An "eBGP router on the host" is implemented for the node-interconnectivity
    (all nodes and all switches are running FRR instances)
  * All Ceph and Openstack nodes of the system do not have a direct upstream routing
    (access is configured and provided by HTTP-, NTP and DNS-proxies)
  * For security reasons, the system itself can only be accessed via VPN.
    The provider network of the production environment is realized with a VXLAN which is terminated on the managers for routing
    ('a virtual provider network')).
  * The basic node installation was realised in such a way that specific [node images](https://github.com/osism/node-image)
    are created for the respective rack, which make the operation or reconfiguration of network equipment for PXE bootstrap
    unnecessary. (Preliminary stage for rollout via OpenStack Ironic)
  * The management of the hardware (BMC and switch management) is implemented with a VLAN
  * Routing, firewalling and NAT is managed by a NFTables Script which adds rules in a idempotent way to the existing rules
    of the manager nodes.
* The [openstack workload generator](https://github.com/SovereignCloudStack/openstack-workload-generator) is used put test workloads
  on the system
  * Automated creation of OpenStack domains, projects, servers, networks, users, etc.
  * Launching test workloads
  * Dismantling test workloads
* An observability stack was built
  * Prometheus for metrics
  * Opensearch for log aggregation
  * Central syslog server for the switches on the managers (recorded via the manager nodes in Opensearch)
* Specific documentation created for the project
  * Details of the hardware installed in the environment
  * The physical structure of the environment was documented in detail (rack installation and cabling)
  * The technical and logical structure of the environment was documented in detail
  * A FAQ for handling the open-source network operating system SONiC was created with relevant topics for the test environment
  * As part of the development, the documentation and implementation of the OSISM reference implementation was significantly improved (essentially resulting from
