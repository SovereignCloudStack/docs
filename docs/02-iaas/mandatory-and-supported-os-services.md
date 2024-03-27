# SCS mandatory and supported OpenStack services

There are many OpenStack services that can be applied on IaaS-Level.
Those services have differences in the quality of their implementation and liveness and some of them may be easily omitted when creating an IaaS-Deployment.
To fulfill all SCS-provided standards there are only some of those services required.
More but not all OpenStack services are tested or integrated in the reference implementation.
This document will give readers insight about how the SCS looks at all the OpenStack services.
If a cloud consists of all mandatory and maybe some supported OpenStack services it can be tested for SCS-compliance.
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
| **OpenstackSDK** | Multi-cloud Python SDK and CLI for End Users |
| **Oslo** | Common libraries |
| **Placement** | Hardware Describing Service for Nova |

## Supported OpenStack services

The following services MAY be present in SCS-compliant IaaS-Deployment and their integration had been tested by the SCS:

| OpenStack Service | description | comment |
|-----|-----|-------|
| **Barbican** | Key Manager service | maybe a future mandatory service |
| **Ceilometer** | Telemetry service | |
| **Designate** | DNS service | |
| **Gnocchi** | Time Series Database service | needed for Ceilometer |
| **Heat** | Orchestration service | **maybe unsupported?** |
| **Horizon** | Dashboard | |
| **Ironic** | Bare Metal libraries | |
| **Octavia** | Load-balancer service | |
| **Swift** | Object Storage service | if not used, move to unsupported |
| **Skyline** | Dashboard | if not used, move to unsupported |

## Unsupported OpenStack services

All other OpenStack services that are not mentioned in the mandatory or supported lists are not tested for their integration and behavior by the SCS.
Those services MAY be used in IaaS-Deployments but the SCS will not assume they are present and potential issues that occur during the deploying or usage have to be handled by the CSP alone.

There are still some notable services, that might come into the supported list, when there will be enough CSPs wanting this.
This list is not exhaustive:

| OpenStack Service | description | comment |
|-----|-----|-------|
| **Cloudkitty** | Rating/Billing service | was requested once but not seen in production |
| **Magnum** | Container Infrastructure Management service | |
| **Manila** | Shared File Systems service | sometimes requestes |
| **Freezer** | Backup, Restore, and Disaster Recovery service | interesting service, that some people on upstream want to revive |
