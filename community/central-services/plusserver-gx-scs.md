# Central services

This document gives an overview of what SCS central services are deployed and who is responsible for them in plusserver gx-scs infrastructure.

## Project p500924-harbor

### K8s clusters

#### Harbor

Responsibility: [@SovereignCloudStack/vp06c](https://github.com/orgs/SovereignCloudStack/teams/vp06c)

Services:

- [SCS Registry](https://registry.scs.community/)
  - [k8s-harbor](https://github.com/SovereignCloudStack/k8s-harbor/tree/main/envs/public)

Utilization:

- Instances: 7
- VCPUs: 32
- RAM: 64GB

Spec:

- version: v7.0.0 - R6
- management cluster:
  - 1 instance: SCS-2V:4:20
  - image: Ubuntu 22.04 (20230416)
  - k8s: v1.25.3 - KinD
- workload cluster:
  - 6 instances:
    - 3 control-planes: SCS-2V:4:20
    - 3 workers: SCS-8V:16:100
  - image: ubuntu-capi-image-v1.28.7
  - k8s: v1.28.7

## Project p500924-sig-monitoring1

### K8s clusters

#### Monitoring

Responsibility: [@SovereignCloudStack/vp06c](https://github.com/orgs/SovereignCloudStack/teams/vp06c)

Services:

- [k8s-observability](https://github.com/SovereignCloudStack/k8s-observability)

Utilization:

- Instances: 7
- VCPUs: 32
- RAM: 64GB

Spec:

- version: v6.0.0 - R5
- management cluster:
  - 1 instance: SCS-2V:4:20
  - image: Ubuntu 22.04 (20231211)
  - k8s: v1.27.3 - KinD
- workload cluster:
  - 6 instances:
    - 3 control-planes: SCS-2V:4:20
    - 3 workers: SCS-8V:16:100
  - image: ubuntu-capi-image-v1.27.5
  - k8s: v1.27.5
