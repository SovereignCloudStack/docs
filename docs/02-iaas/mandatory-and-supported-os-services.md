# SCS mandatory and supported OpenStack services

There are many OpenStack APIs and their services that can be applied on IaaS-Level.
These services have differences in the quality of their implementation and liveness and some of them may be easily omitted when creating an IaaS-Deployment.
To fulfill all SCS-provided standards there are only some of these APIs required.
More but not all OpenStack services are tested or integrated in the reference implementation.
This document will give readers insight about how the SCS looks at all the OpenStack services.
If a cloud provides all mandatory and maybe some supported OpenStack APIs and implementation of their services it can be tested for SCS-compliance.
Any unsupported services will not be tested.

## Mandatory OpenStack services

The following OpenStack services MUST be present in SCS-compliant IaaS-Deployments:

| OpenStack Service | description |
|-----|-----|
| **Cinder** | Block Storage service |
| **Glance** | Image service |
| **Keystone** | Identity service |
| **Neutron** | Networking service |
| **Nova** | Compute service |
| **Octavia** | Load-balancer service |
| **Placement** | Hardware Describing Service for Nova |
| **S3 API object storage** | No formal standard exists, many implementations: Swift, RadosGW, minio... |

## Supported OpenStack services

The following services MAY be present in SCS-compliant IaaS-Deployment and their integration had been tested by the SCS:

| OpenStack Service | description | comment |
|-----|-----|-------|
| **Barbican** | Key Manager service | maybe a future mandatory service |
| **Cloudkitty** | Rating/Billing service | maybe move to unsupported |
| **Ceilometer** | Telemetry service | |
| **Designate** | DNS service | |
| **Gnocchi** | Time Series Database service | needed for Ceilometer |
| **Heat** | Orchestration service | **maybe unsupported?** |
| **Horizon** | Dashboard | |
| **Ironic** | Bare Metal provisioning service | |
| **Manila** | Shared File Systems service | |
| **Masakari** | Instances High Availability service | |
| **Skyline** | Dashboard | if not used, move to unsupported |

## Unsupported OpenStack services

All other OpenStack services that are not mentioned in the mandatory or supported lists are not tested for their integration and behavior by the SCS community.
Those services may be integrated into IaaS deployments by a CSP on their own responsibility but the SCS will not assume they are present and potential issues that occur during deployment or usage have to be handled by the CSP on their own accord.
The SCS standard offers no guarantees for compatibility or reliability of services categorized as unsupported in conjunction with an SCS-conformant infrastructure.

Some notable but currently unsupported services which address popular use cases are listed below (list not exhaustive):

| OpenStack Service | description | comment |
|-----|-----|-------|
| **Magnum** | Container Infrastructure Management service | |
| **Freezer** | Backup, Restore, and Disaster Recovery service | interesting service, that some people on upstream want to revive |
