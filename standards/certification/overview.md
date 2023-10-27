# Certification

## Scopes and versions

SCS provides a certification framework consisting of six different kinds of certificates of varying scope.
These scopes can be sorted into two dimensions:

1. _certification level_, of which there are three:
   - SCS-compatible
   - SCS-open
   - SCS-sovereign
2. _cloud layer_, of which there are two:
   - infastructure as a service (IaaS)
   - Kubernetes as a service (KaaS)

So, for instance, a certificate can have the scope _SCS-compatible IaaS_ or _SCS-sovereign KaaS_.

Each scope corresponds to a set of standards. As these standards progress, so do the scopes, and we keep track of this by versioning. Each version undergoes a lifecycle of Draft, Stable, and Deprecated, and we aim to keep at most one version stable at the same time, with the exception of a transition period of 4 to 6 weeks.

![Alt text](image.png)

## Becoming certified

In order for a cloud service offering to obtain a certificate, it has to conform to all standards of the respective scope, which will be tested at regular intervals, and the results of these tests will be made available publicly. For more details on how to become certified, please consult the corresponding [document](https://github.com/SovereignCloudStack/standards/blob/issue/337/Standards/scs-xxxx-v1-achieving-certification.md).

## Compliant cloud environments

This is a list of clouds that we test on a nightly basis against the certificate scope _SCS-compatible IaaS_.

| Name                                                                                                           | Description                                       | Operator                      |                                                                 IaaS Compliance Check                                                                 |                                                        HealthMon                                                         |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| [gx-scs](https://github.com/SovereignCloudStack/docs/blob/main/community/cloud-resources/plusserver-gx-scs.md) | Dev environment provided for SCS & GAIA-X context | plusserver GmbH               | ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/SovereignCloudStack/standards/check-gx-scs-v1.yml?label=compliant)   |                                   [HM](https://health.gx-scs.sovereignit.cloud:3000/)                                    |
| [pluscloud open - prod1](https://www.plusserver.com/en/products/pluscloud-open)                                | Public cloud for customers                        | plusserver GmbH               | ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/SovereignCloudStack/standards/check-pco-prod1-v1.yml?label=compliant) |                               [HM](https://health.prod1.plusserver.sovereignit.cloud:3000)                               |
| [pluscloud open - prod2](https://www.plusserver.com/en/products/pluscloud-open)                                | Public cloud for customers                        | plusserver GmbH               | ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/SovereignCloudStack/standards/check-pco-prod2-v1.yml?label=compliant) |                               [HM](https://health.prod1.plusserver.sovereignit.cloud:3000)                               |
| [Wavestack](https://www.noris.de/wavestack-cloud/)                                                             | Public cloud for customers                        | noris network AG/Wavecon GmbH | ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/SovereignCloudStack/standards/check-wavestack-v3.yml?label=compliant) |                                 [HM](https://health.wavestack1.sovereignit.cloud:3000/)                                  |
| [REGIO.cloud](https://regio.digital)                                                                           | Public cloud for customers                        | OSISM GmbH                    | ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/SovereignCloudStack/standards/check-regio-a-v3.yml?label=compliant)  | [Dashboard](https://apimon.services.regio.digital/public-dashboards/17cf094a47404398a5b8e35a4a3968d4?orgId=1&refresh=5m) |
