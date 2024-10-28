---
sidebar_label: Pre Installation Checklist
---

# Pre Installation Checklist

:::warning

This checklist is currently really **work in progress and incomplete**.

:::

This list describes some aspects (without claiming to be exhaustive) that should be clarified before a pilot and at least before production installation.

The aim of this list is to reduce:

- projects that could be more successful
- long project waiting/implementation times
- unexpected errors or difficulties
- major restructuring work soon after the system was initially put into operation
- unexpected issues that have a major impact on costs.

For reasons of clarity, most of the topics are not described in such detail that readers who are new to this
environment can easily understand the context of the question. Rather, this list should be seen as a catalog
of questions or a task list that should be discussed, clarified and processed in the run-up to a project.

_Opensource benefits from the collaboration of its users and its developers._

For this reason, we are collecting questions, important topics to be clarified and hints to make it easier for users of the Sovereign Cloud Stack to increase the success with it.
Therefore we would be very pleased if specific experiences from users, implementers and operators [were contributed](https://github.com/SovereignCloudStack/docs/docs/01-getting-started/preinstall-checklist.md) to this list.

## General

### Availability and Support

- What requirements do you have for the availability of the system?
  - How much downtime is acceptable for mainetenance tasks?
  - What are your expectations in terms of downtimes or what downtime is just within the tolerable range for you?
    (as you probably know, this has a significant impact on the hardware and personnel requirements)
- What gradation or requirements are there for the elimination of problems with regard to the different types of problems?
- Examples problem scenarios:
  - complete cloud service outage or downtime
  - performance problems
  - application problems
  - ....
- Where should rollouts and changes to the system be tested or prepared, or does a dedicated environment make sense for

### Hardware Definition

- Are there defined hardware standards for the target data center and what are the general conditions?
- How should the systems be provisioned with an operating system?
- Decide which base operating system is used (e.g. RHEL or Ubuntu) and whether this fits the hardware support, strategy, upgrade support and cost structure.
- How many failure domains, environments, availability zones are required?

### Required IP Networks

Estimate the expected number of IP addresses and plan sufficient reserves so that no adjustments to the networks will be necessary at a later date.
The installation can be carried out via IPv4 or IPv6 as well as hybrid.

- Provider Networks: One or more dedicated public IP networks for services published by the cloud platform and its users
  - this is in most cases a public IPv4 network
  - at least TCP port 443 should be accessible for all addresses of this network from other networks (i.e. internet)
- Openstack Node Communication: A dedicated private IP adress space / network for the internal communication between the nodes
  - every node needs a dedicated IP
  - a DHCP range for for performing node installations might be useful, but not mandatory
  - all nodes in this network should have access to the NTP server
  - all nodes should have access to public DNS servers and HTTP/HTTPS servers
  - In some cases, it may make sense to operate Ceph in a dedicated network or multiple dedicated networks (public, cluster).
    Methods for high-performance and scalable access to the storage:
    - very high-performance routing (layer 3), for example via switch infrastructure
    - Dedicated network adapters in the compute nodes for direct access to the storage network
- Ceph Node Communication: A dedicated private IP adress space / network for the internal communication between the ceph nodes
- Management: A private IP adress space / network for the hardware out of out band management of the nodes
  - every node needs a dedicated management IP
  - a DHCP range for installation might be useful, but not mandatory
- Manager Access: Dedicated IP adresses for the access of the manager nodes
  - Every manager gets a dedicated external address for SSH and Wireguard Access
  - The IP adresses should not be part of the "Frontend Access" network
  - At least Port 443/TCP and 51820/UDP should be reachable from external networks

### Identity Management of the Platform

How should access to the administration of the environment (e.g. Openstack) be managed?

Should there only be local access or should the system be linked to one or more identity providers via OIDC or SAML (identity brokering)?

### Network configuration of nodes and tenant networks

TBD:

- It must be decided how the networks of the tenants should be separated in Openstack (Neutron)
- It must be decided how the underlay network of the cloud platform should be designed.
  (e.g. native Layer2, Layer2 underlay with Tenant VLANs, Layer3 underlay)
- Layer 3 Underlay
  - FRR Routing on the Nodes?
  - ASN nameing scheme

### Domains and Hosts

- Cloud Domain: A dedicated subdomain used for the cloud environment
  (i.e. `*.zone1.landscape.scs.community`)
- Internal API endpoint: A hostname for the internal api endpoint which points to address to the "Node Communication" network
  (i.e. `api-internal.zone1.landscape.scs.community`)
- External API endpoint: A hostname for the external api endpoint which points to address to the "Frontend Access" network
  (i.e. `api.zone1.landscape.scs.community`)

### TLS Certificates

Since not all domains that are used for the environment will be publicly accessible and therefore the use of "Let's Encrypt" certificates
is not generally possible without problems, we recommend that official TLS certificates are available for at least the two API endpoints.
Either a multi-domain certificate (with SANs) or a wildcard certificate (wildcard on the first level of the cloud domain) can be used for this.

### Access to installation resources

For the download of installation data such as container images, operating system packages, etc.,
either access to publicly accessible networks must be provided or a caching proxy or a dedicated
repository server must be provided directly from the network for "Node communication".

The [Configuration Guide](https://docs.scs.community/docs/iaas/guides/configuration-guide/proxy) provides more detailed information on how this can be configured.

TBD:

- Proxy requirements
- Are authenticated proxies possible?

### Git Repository

- A private Git Repository for the [configuration repository](https://osism.tech/docs/guides/configuration-guide/configuration-repository)

### Access managment

- What requirments are neede or defined for the administration of the system
- The public Keys of all administrators

### Monitoring and On-Call/On-Duty

- Connection and integration into existing operational monitoring
- What kind of On-Call/On-Duty do you need?
  - How quickly should the solution to a problem be started?
  - What downtimes are tolerable in extreme cases?
- Does a log aggregation system already exist and does it make sense to use it for the new environment?

## NTP Infrastructure

- The deployed nodes should have permanent access to at least 3 ntp servers
- It has turned out to be advantageous that the 3 control nodes have access to NTP servers
  and provide NTP servers for the other nodes of the SCS installation.
- The NTP servers used, should not run on virtual hardware
  (Depending on the architecture and the virtualization platform, this can otherwise cause minor or major problems in special situations.)

## Openstack

### Hardware Concept

TBD:

- How many compute nodes are needed?
- Are local NVMe needed?
- Are GPUs needed?

## Ceph Storage

### General

TBD:

- Amount of usable storage
- External Ceph storage installation?
- What is the purpose of your storage?
  - Fast NVMe disks?
  - More read/write intensive workloads or mixed?
  - Huge amounts of data, but perfomance is a second level requirement?
  - Object Storage?
  - ...
- What kind of network storage is needed?
  - Spinners
  - NVMe/SSD
- Dedicated ceph environment or hyperconverged setup?
- Crush / Failure domain properies
  - Failure domains?
  - Erasure encoded?
  - Inter datacenter replication?
  - ...

### Disk Storage

- What use cases can be expected and on what scale?

### Object Storage

- Rados Gateway Setup
