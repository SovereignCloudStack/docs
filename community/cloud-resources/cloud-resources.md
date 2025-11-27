# Test and development cloud resources

This document gives an overview of the test and development cloud resources currently provided by our partners.

## How to request cloud resources

To request access to an existing project, please contact the responsible community member. To apply for a new project, please create a pull request against this document (leave `Unique Identifier` blank) and assign it to the particular CSP team (e.g. @SovereignCloudStack/plusserver, @SovereignCloudStack/wavecon, ...)

## plusserver (SCS2)

SCS2 is the successor to gx-scs (or SCS1), which no longer exists.

### SCS2 Usage

A brief guide on how to use the resources provided by plusserver GmbH can be found [here](plusserver-gx-scs.md)

### SCS2 Users

As suggested in [#155](https://github.com/SovereignCloudStack/standards/issues/155) the username for non-"service users" will contain the users github handle and are prefixed with a plusserver default.
`prefix-<$github handle>`

> **Note**
> ATM this is not directly connected to the SovereignCloudStack github org membership, accounts will be created manually for now.

<!-- markdownlint-disable search-replace -->

Example:

| github handle |  plusserver login   |
| :-----------: | :-----------------: |
|  frosty-geek  | u500924-frosty-geek |
|      fkr      |     u500924-fkr     |
|               |                     |

### SCS2 Service Users

Service users will have their default_project_id set to a specific project and will NOT be granted full access to other projects by default.

|        Unique Identifier         | Service User Name          | Full Access on            | Community Contact        | Description                                   | Needed until |
| :------------------------------: | -------------------------- | ------------------------- | ------------------------ | --------------------------------------------- | :----------: |
| 9a1576af59644a2dbbace773ad17158d | u500924-svc-sig-monitoring | p500924-sig-monitoring1   | fkr                      | Service User - SIG Monitoring                 |  31.12.2023  |
| 4925967416894fd78be6701689059653 | u500924-svc-cloudmon       | p500924-cloudmon-target   | Erik-Kostelansky-dNation | Service User - VP12 Test Project              |  31.12.2024  |
| f89b3d64ddff4d9d8cadb5e06fa22299 | u500924-svc-healthmonitor  | p500924-scs-healthmonitor | garloff                  | Service User - SCS Health Monitor             |      ∞       |
| 49cc3d72fbdf41fe8dc407f57f026dbf | u500924-svc-standards      | p500924-scs-healthmonitor | garloff                  | Service User - SCS Standards Compliance Check |      ∞       |
| 1b6bb583fc5e40e49f2a7e9b4301de65 | u500924-svc-zuul           | p500924-scs-zuul          | o-otte                   | Service User - SCS Zuul                       |  30.11.2024  |
|                                  |                            |                           |                          |                                               |              |

### SCS2 Projects

|        Unique Identifier         | Project Name                | Community Contact | Description                       | Needed until |
| :------------------------------: | --------------------------- | ----------------- | --------------------------------- | :----------: |
| 9c482c928d68470ea35a764e1ba9211a | p500924-compliance-monitor  | mbuechse          | SCS Compliance Monitor Deployment |      ∞       |
| fe66fd7655814078924155876562dd3d | p500924-scs-community       | fkr               | SCS Community Project             |      ∞       |
|                                  | p500924-compliance-monitor  | depressiveRobot   | SCS Compliance Monitor Deployment |      ∞       |
| 4a8829a5ecad480d8dde1e46a9c5284b | p500924-health-monitor      | garloff           | SCS Health Monitor                |      ∞       |
| 34d3d89fc74e4db5a6df1c9ebf2f3a2a | p500924-scs-zuul            | garloff           | SCS Zuul                          |      ∞       |
| 293b765e3492413ba8b0067b7edcb3a3 | p500924-monitoring          | garloff           | SCS Monitoring                    |      ∞       |
| f2eccb67b16f4430b6d5e70afb515f9d | p500924-harbor              | chess-knight      | SCS Registry (Harbor)             |      ∞       |
| 45b5e27a5fe3431083e450cf2d13e71b | p500924-kaas-playground1    | jschoone          | Playground1 for Hackathon         |  30.09.2025  |
| ef12fed77f114eb4a20068f0422a8109 | p500924-kaas-playground2    | jschoone          | Playground2 for Hackathon         |  30.09.2025  |
| bf8d511728a44072b7c97b1fe00947b8 | p500924-kaas-playground3    | jschoone          | Moin Cluster                      |      ∞       |
| 61b315797c75431787dc20a61cbaf052 | p500924-kaas-playground4    | jschoone          | Playground4 for Hackathon         |  30.09.2025  |
| 94f7c7507be1484a9ce6aba20d19d1c6 | p500924-kaas-playground5    | jschoone          | Playground5 for Hackathon         |  30.09.2025  |
|                                  | p500924-openDesk-playground | gerbsen           | Playground for openDesk           |  30.11.2025  |

## Wavecon

### Wavestack Service Users

|        Unique Identifier         | Service User Name | Full Access on | Community Contact | Description                                   | Needed until |
| :------------------------------: | ----------------- | -------------- | ----------------- | --------------------------------------------- | :----------: |
| df4af5376bbd4de587c4335622149be7 | scs-standards     | scs-standards  | itrich            | Service User - SCS Standards Compliance Check |      ∞       |

### Wavestack Projects

|        Unique Identifier         | Project Name       | Community Contact | Description        | Needed until |
| :------------------------------: | ------------------ | ----------------- | ------------------ | :----------: |
| 718964b4b87446688ac04b151519fb51 | scs                | garloff           | SCS Health Monitor |      ∞       |
| c46ccc9e695c4b23bacee2ad11145d9a | scs-health-monitor | garloff           | SCS Health Monitor |      ∞       |
| 00de553df86949b49365baee6375fb5a | scs-standards      | itrich            | SCS Health Monitor |      ∞       |

<!-- markdownlint-enable search-replace -->
