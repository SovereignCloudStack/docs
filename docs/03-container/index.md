# Container Layer Introduction

The container layer within the Sovereign Cloud Stack (SCS) offers a robust solution for managing container workloads on a Kubernetes infrastructure. It facilitates the on-demand creation and scaling of Kubernetes clusters, catering to various needs across development, testing, deployment, and operation of services and applications. While the container layer is versatile for a range of use cases, the most common ones include:

- Self-Service: Here, entities can empower their development teams with the autonomy to spawn and manage their clusters on demand, fostering a more agile and responsive development environment.
- KaaS (Kubernetes as a Service): In this model, an SCS Cloud provider can offer their customers a managed Kubernetes service, abstracting much of the underlying operational complexity from their customers.

## Target groups

- DevOps/SysOps Teams: They are the primary beneficiaries as the container layer promotes flexible, on-demand operations helpful for continuous development, testing, deployment, and service management.
- Cloud Service Providers: By delivering a standardized container orchestration platform, they can provide more reliable and robust services to their customers, enhancing their product portfolio.

## What is it not

- The container layer is not an alternative to Infrastructure as a Service (IaaS) but rather an extension that allows for more streamlined operation and management of containerized applications.
- Although the container layer doesn't directly support Serverless Containers or Functions as a Service, these can be run on a Kubernetes cluster. However, as of now, the SCS container layer doesn't offer specialized tools for these use cases.

### Prerequisites and Requirements

- Knowledge: Familiarity with Kubernetes, container orchestration, and basic cloud infrastructure principles is pivotal.
- Software: The core software component is the K8s Cluster API Provider, crafted to function optimally on OpenStack environments. Although designed to run on the SCS IaaS layer, with minor configuration adjustments, it can operate on any OpenStack environment.
- Hardware: Virtualization-enabled hardware capable of running OpenStack is essential if hosting the IaaS layer independently. For further details, refer to the IaaS layer documentation.

### Features

- Automated Cluster Management: The K8s Cluster API Provider automates the process of creating, scaling, managing and updating Kubernetes clusters, thus significantly reducing the operational overhead.
- Standardized Operations: Upholding SCS standards across various clusters ensures operational consistency and reliability.
- Integration with OpenStack: The K8s Cluster API Provider is tailored to work seamlessly with SCS IaaS (OpenStack), thus offering a unified platform for managing both containers and the underlying infrastructure.
- Container Registry Integration: The container layer has an integrated container registry, facilitating easy management and deployment of container images.
- Certificate Managment: The kubernetes clusters can optionaly include a certbot allowing for ease of deployment of public facing services out of the box.
- Preconfigured ingress: Certificate Management: Optional inclusion of Certbot in Kubernetes clusters facilitates straightforward deployment of publicly accessible services.
  Preconfigured Ingress: Kubernetes clusters come with a preconfigured Nginx ingress, designed with OpenStack in mind, providing a ready-to-use ingress solution with enhancements like out-of-the-box client source IP visibility.

### Limitations

- OpenStack Dependency: The current design primarily supports OpenStack environments, which could be a limitation for other infrastructure setups.
- Serverless/Functions as a Service Support: Lack of direct support for serverless containers and Functions as a Service (FaaS) might require additional tools or platforms.

### Current state and future Outlook

The container layer has matured with multiple cloud providers now offering Kubernetes as a Service using this layer to manage a multitude of clusters. It follows a half-yearly release schedule to ensure security and up-to-date Kubernetes clusters, alongside providing backports for significant features into older versions.

Looking ahead, a new version based on ClusterStacks is in the pipeline, currently in its Alpha state. This upcoming release aims to be backward compatible, facilitating smooth migration from existing setups, and further extending the capabilities of the SCS container layer.
