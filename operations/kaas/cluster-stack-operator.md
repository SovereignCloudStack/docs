# Cluster Stack Operator Design Document

## Introduction

This document describes the design of an operator that factilitates using the cluster stacks. The cluster stacks are described in a separate document.

Our cluster stacks, leveraging the capabilities of Cluster-API, provide a significantly enhanced user experience. This enhancement is achieved by packaging together various essential components necessary for effective cluster operation. These components encompass core elements of a cluster, configuration settings, node images, and more.

A key feature we utilize within the Cluster-API is the `ClusterClass`. The `ClusterClass` enables us to curate a comprehensive "cluster bundle". Within this bundle, we encompass all the vital components needed for a fully functional, production-ready cluster. This includes the kubeadm configurations and other crucial applications. Users can effortlessly create a custom cluster by simply referencing the desired `ClusterClass` object to the Cluster.

In order to solve some issues that go beyond core CAPI components, we bundle application configuration, node images, and the `ClusterClasses` to formulate what we term as "cluster stacks".

While the Cluster-API is adept at managing the lifecycle of clusters, there are aspects it doesn't cover. For instance, it doesn't oversee the lifecycle of the Cluster Stack components. For example, when a new Syself Cluster Stack is introduced, the corresponding `ClusterClass` object should be downloaded and implemented, ensuring it's readily accessible to users. Additionally, there are certain tasks that are provider-specific, such as building node images, that the Cluster-API doesn't cater to.

This is where we want to introduce the cluster-stack-operator, which is supposed to handle all of these tasks that would otherwise require manual work of the user when using Cluster-API.


## Motivation

The Cluster Stacks contain the configurations of many different applications, e.g. Cilium. Additionally, they contain a specific node image. This node image can be updated with a new version of a Cluster Stack, but does not have to.

If there is a new version of Cilium, this should be made available for users of any Cluster Stack that contains Cilium. Assuming that there is a `ClusterStackXYZ` with Cilium. After changing the respective versions in the configuration, a new release of `ClusterStackXYZ` will be published. Users that have clusters that point to the `ClusterClass` object of `ClusterStackXYZ` want to update to the latest release. This has to be done by first applying some yaml files in the management cluster (e.g. the `ClusterClass` object). Then, the node image has to be built if it doesn’t exist already.

This process is a) provider-specific and b) contains multiple steps of manual work.

## Proposal

Introducing the cluster-stack-operator: a transformative tool designed to alleviate users from the painstaking manual tasks traditionally associated with the usage of cluster stacks. The primary objective of this operator is to streamline and automate the following pivotal processes:

1. **Proactive Release Monitoring:** The operator will be vigilant, regularly scanning for the newest releases of cluster stacks, ensuring users are always updated with the latest enhancements and features.

2. **Streamlined Release Preparation:** Once a user expresses interest in a particular cluster stack release, the operator jumps into action, preparing the release for smooth deployment and use.

3. **Efficient Clean-Up:** Over time, some cluster stack releases may become obsolete or redundant. The operator will diligently purge unused and outdated releases, ensuring the system remains clutter-free and optimized.

A noteworthy feature of our operator is its modular architecture. Given that some aspects of its operation, such as building node images, are provider-specific, we've strategically adopted the structural framework utilized by the Cluster-API. This means that provider-specific tasks are delegated to a distinct operator. This specialized operator then synergizes with the core operator to prepare cluster stack releases for deployment.

In a bid to offer users an intuitive experience and seamless transition, we've ensured that our object structure mirrors that of the Cluster-API. This alignment not only facilitates user understanding but also fosters a harmonious integration between the two closely related projects.

However, there is a key distinction between our operator and the Cluster-API. Not all providers necessitate provider-specific work. Recognizing this, we've imbued our system with flexibility. There isn’t a compulsory need to construct a provider-specific operator. Instead, users have the autonomy to determine whether they wish to initiate such an operator based on their unique requirements. This approach affirms our commitment to offering a user-centric tool, tailored to meet diverse needs with precision.

## User stories

### User Story 1: Self-service use of SCS cluster stacks by Human Operators

As a human operator, I desire the ability to harness the capabilities of the SCS cluster stacks in a self-service mode. In doing so, I expect the cluster-stack-operator to guarantee the presence and readiness of all vital components within the management cluster. For enhanced user experience, I should receive timely feedback via Custom Resources, apprising me of the readiness status of any specific release version of the cluster stack.

### User Story 2: Intuitive Updates to Clusters via Cluster-API Native Mechanisms

As a user, I expect a seamless and intuitive method to update my Cluster Stack. The ideal process should enable me to merely modify the reference point within the `ClusterClass` of the Cluster object. This is in line with the established protocols of Cluster-API's `ClusterClass`. Once the reference has been adjusted, the cluster-stack-operator should autonomously manage all subsequent steps, ensuring the successful update of the cluster addons within the appropriate workload cluster.

### User Story 3: Effortless Access to the Latest Cluster Stack Versions via Github Integration

I expect the cluster-stack-operator to be endowed with the ability to continuously poll Github releases to identify any new releases that might be available. As a user who values automation, when I activate the "auto-subscribe" functionality, I anticipate the operator to not just detect the latest release but also to execute all requisite steps to make this release fully operational and ready for my use.

### User Story 4: Facilitated Use of Specific, Legacy Versions of Cluster Stacks

As a user with diverse requirements, there might be instances where I might require a specific older version of a cluster stack. For such scenarios, I should be equipped to delineate specific release versions within the objects I deploy. This precision ensures that my desired versions remain accessible for my use, allowing for flexibility and backward compatibility.

### User Story 5: Personalized Configuration of Provider-specific Parameters, such as Node Images

As a discerning user, I wish to define provider-specific configurations to suit my unique needs. Within the framework provided by the API of the respective provider-specific operator, I should have the freedom to stipulate details like the exact node images I prefer. Such control is instrumental in optimizing resources, ensuring I can steer clear of redundant node images, and potentially avoid tasks like unnecessary uploads.

### User Story 6: Local Testing and Building of New Cluster Stacks for Providers

Recognizing the pivotal role of providers, it's essential that they possess the capability to develop and validate their cluster stacks locally. The cluster-stack-operator should be intelligent enough to discern the source of release artifacts. If these are furnished locally, the operator should abstain from downloading them from external sources like Github. Such a feature is paramount for providers—it ensures they can construct, test, and validate their cluster stacks in a local environment, guaranteeing robustness and operational excellence.

## Background

### Understanding the Three Core Components of a Cluster Stack

In the realm of cluster management and orchestration, the cluster stack is designed to seamlessly integrate and operate various functionalities. There are three pivotal components of a cluster stack:


There are three components of a cluster stack:

1. **Cluster Addons:** Cluster addons are a set of essential extensions and tools, including but not limited to the Cluster Network Interface (CNI), Container Storage Interface (CSI), and Cloud Controller Manager (CCM). These addons play a pivotal role in enhancing the functionality and manageability of each workload cluster initiated by the user. It's paramount to ensure that these addons are applied to every single workload cluster upon initiation, thus enabling seamless communication and operational consistency.

2. **Cluster Class:** The `ClusterClass` object acts as a backbone for the Cluster-API. This object simplifies the user's interaction with the Cluster-API by providing a standardized template. Within the cluster stack, the `ClusterClass` object is accompanied by various other Cluster-API objects that are indispensable for leveraging the full potential of the `ClusterClass`. For efficient cluster management and operation, these objects must be duly applied within the management cluster. This step ensures that users experience a standardized and streamlined cluster setup and management process.

3. **Node Images:** Providing users with node images is not a one-size-fits-all proposition. These images can come in diverse formats tailored to specific needs and scenarios. What’s noteworthy is that these node images are meticulously released and tested in conjunction with the above-mentioned components of the cluster stack. This rigorous testing ensures compatibility, performance optimization, and a harmonized working environment between the node images and other stack components.

In essence, the harmony and efficient interplay between these three components are what make the cluster stack a robust and reliable tool in clustered computing environments. Proper understanding and implementation of these components can significantly streamline operations and enhance overall cluster performance.

### Feature Spotlight: The ClusterClass in Cluster-API

Within the ecosystem of Cluster-API, a significant feature known as `ClusterClass` is prominently highlighted. This feature facilitates users in applying Cluster objects. When users engage with this feature, they can reference the Cluster objects directly from the Cluster-API, pointing specifically to the `ClusterClass` object. This streamlines the process, enabling a more efficient and integrated way to manage cluster objects.

### A Comprehensive Guide: Crafting Node Images Across Various Providers

Creating node images tailored for specific requirements becomes pivotal when deploying across different providers. There are primarily three distinct methods to achieve this. Let's delve deeper into each of them:

1. **URL on a Remote Endpoint:** Some providers are equipped with the capability to deploy a Node Image directly from a URL. In such scenarios, the Node Image that is part and parcel of the cluster stack (especially located in the cluster class) would be designated via a URL. This URL acts as a pointer to a pre-built image that's hosted and available on a remote platform. The most striking advantage here is the convenience it offers. The operator essentially has no further tasks. Once the URL is provided, the rest of the process is managed by the system itself.

2. **Utilizing Artifacts:** Certain providers are adept at supporting artifacts. When this is the case, the Node Image is translated into a tangible artifact. A common example is a qcow2 file. Post creation, this artifact is then uploaded onto the provider’s platform. When it comes to node provisioning within the cluster stack, this artifact becomes the reference point. However, this method demands a tad more involvement from the operator. They have to ensure that the artifact is accurately created, uploaded, and then appropriately referenced.

3. **Relying on Build Instructions:** There are situations where providers might neither support the direct URL deployment nor the artifact-based provisioning. It's in such instances that the build instructions housed within a repository become invaluable. These instructions act as a detailed roadmap to build the Node Image. They meticulously outline all the required steps, configurations, tools, and best practices. For the operator, these instructions are paramount. They serve as the guidebook, ensuring that the operator can provide users with node images that adhere to the highest standards and meet specific needs.

In summary, while the first method offers sheer convenience and a hands-off approach for the operator, the subsequent two methods do require a level of engagement. However, all three methods ensure that the end-users receive top-notch node images, tailored to their specific requirements.

## Risks and mitigations

### Challenges in Implementing Cluster Stack Operator Provider Integration

#### Overview:

For providers intending to make the cluster-stack-operator accessible to their clientele, they are tasked with the responsibility of implementing the provider-specific operator. This endeavor, while substantial, is not insurmountable. Let's explore the intricacies and safety measures associated with it.

#### In-depth:
1. **Prerequisite Experience for Providers:**
    - Only those providers that have previously developed a Cluster API Provider Integration are mandated to craft the Cluster Stack Operator Provider Integration.
    - This prerequisite acts as a quality assurance step. By ensuring that only those providers with prior experience in similar integrations take on this responsibility, we can enhance the probability of successful implementations.
    - Providers utilizing a universally accepted framework like OpenStack are spared from this task. Instead, they can capitalize on shared efforts, collaborating with other CSPs that also employ OpenStack or similar technologies.
2. **Exemptions Based on Provider-Specific Work:**
    - In instances where there's no need for provider-specific interventions, like the building or uploading of node images by users, there's no necessity to craft the Cluster Stack Operator Provider Integration.
    - Clarity is paramount here. Users must be well-informed that they can configure their resources in a way that aligns with these exemptions.


### The Potential Overhead of Introducing Another Operator Atop Cluster-API Operators

#### Overview:
For frequent users of Cluster-API, introducing an additional operator may be perceived as redundant overhead, even if it promises an enhanced user experience within Cluster-API.

#### In-depth:
1. **Harmonious Integration with Native Cluster-API Tools:**
    - In our approach, we commit to using all native Cluster-API utilities, even for initiating the operators.
    - The cluster-stack-operator is integrated seamlessly with the cluster-api-operator. This operator is presently the default mode for launching Cluster-API operators.
    - The outcome is that users experience minimal deviation from the native Cluster-API procedures. The familiar workflow remains largely undisturbed, ensuring a smooth transition and minimal learning curve.

### Complexity of Multiple CRDs: A Learning Curve for Users

#### Overview:
Mirroring the Cluster-API (comprising of Machine, MachineSet, MachineDeployment, Cluster, ProviderMachine, ProviderMachineTemplate, etc.), we too shall introduce multiple CRDs. Each CRD serves a distinct purpose in the operator's functionality. However, there's an inherent challenge: for users not inclined towards the technical details, this array of CRDs may appear daunting.

#### In-depth:
1. **Streamlining Information Flow:**
    - As a solution, we aggregate all the pivotal information into two primary user-centric objects:
        - The first is provider-specific and varies based on the chosen provider.
        - The second enables users to detail the specifications of the cluster stack they desire.
2. **Simplifying User Interactions:**
    - Users need only interact with a singular object to specify all their requirements.
    - This object also serves as the primary communication channel, updating users about the status of their cluster stack's release.
    - The net result is a user-centric design where they engage with a minimal number of objects, while still benefiting from the operator's advanced features. The operator's intricate details remain in the background, ensuring users face minimal cognitive load.

## Design details

### Structure of the repository

// TODO

### Deep Dive into Cluster Objects and Their Roles

In the world of Kubernetes and cloud orchestration, understanding the functionalities and nuances of objects is crucial. Among these objects, the `ClusterStack` and `ProviderClusterStackReleaseTemplate` stand out as pivotal components for users to navigate and control their cluster systems. Let's delve deeper into these objects and the layers they encompass:

1. **The Forefront: ClusterStack Object**
Acting as the frontline of user interactions, the `ClusterStack` object is not just the primary interface but the holistic dashboard for users. It is where they input and control the following:
    - **Cluster Stack Name:** Every cluster stack can have a distinct identity, facilitating easy navigation and management.
    - **Service Provider Selection:** Depending on the service requirements, users can select their preferred provider.
    - **Kubernetes Versioning:** Keeping up with the evolving Kubernetes environment, users can dictate the specific version they wish to deploy.
    Beyond this, a significant advantage of the `ClusterStack` object is its real-time status tracking feature. At any moment, users can get an overview of all their releases - those ready to deploy, ones in action, and the ones that are mid-development.

2. **The Specialist: ProviderClusterStackReleaseTemplate Object**
If `ClusterStack` is the generalist, the `ProviderClusterStackReleaseTemplate` is the specialist. Closely mirroring the functionality of Cluster-API's `ProviderMachineTemplate`, it dives into the nitty-gritty. Its realm is the provider-specific landscape, housing intricate details such as:
    - **Node Image Preferences:** Depending on the task, users can specify the node images they want in their cluster, ensuring optimal performance and compatibility.
    - **Provider-Specific Configurations:** Given the unique offerings of each provider, this object offers flexibility for tailored configurations.

The dynamic nature of the `ClusterStack` object is further highlighted in its ability to oversee and manage each release associated with the cluster stack. For every release, be it user-defined or externally sourced, two offspring objects emerge:

- **ClusterStackRelease:** Serving as the universal executor, it handles tasks that are standard across all providers. It ensures a seamless operational flow irrespective of the underlying provider.
- **ProviderClusterStackRelease:** Tailoring to the chosen provider's quirks and features, this object ensures provider-specific tasks are carried out efficiently.

Lastly, the system's intricacy and attention to detail are demonstrated when users activate a `Cluster` object related to the Cluster-API. In response, the system meticulously crafts a `ClusterAddon` object. This new object becomes the central hub, keeping track of every activity and operation related to its parent workload cluster.


### Object Reference Guide

#### ClusterStack

The `ClusterStack` object embodies a set of core properties that facilitate Kubernetes cluster management and deployment. These properties include:

1. **Provider:** This pertains to the platform facilitating the cluster. An example is OpenStack.
2. **Kubernetes Version:** This delineates the version of Kubernetes being implemented.
3. **Name:** A distinct identifier for the `ClusterStack`.

A user engaging with the `ClusterStack` can command several operations, such as:

- **Subscription to Git Repository:** Users have the autonomy to choose if they wish to auto-subscribe to updates of specific Git repositories. Upon this selection, the controller undertakes the responsibility of periodically interfacing with Git. Its aim? To vigilantly ascertain if fresh releases, pertinent to the said `ClusterStack`, have been dispatched. If it discerns any, an automatic download is initiated.
- **Specifying Versions:** Users can enumerate a roster of versions they desire to keep at the ready. A salient feature? Any release cataloged in this list earns immunity from the controller's deletion processes. For instance, consider a scenario where the controller fetched version 5 of a release. Subsequently, version 6 emerges. In this situation, unless a cluster is actively employing version 5, it stands to be removed.
- **Channel Definition:** This encapsulates the release's transmission conduit. By default, the channel is set to 'Stable'. This translates to release versions typified by designations such as `v1`, `v2`, and so on. In contrast, the 'Alpha' channel introduces versions punctuated with tags like `v1-alpha.4`.
- **Provider Configuration:** Should users opt for a provider devoid of a provider-specific operator, they have the flexibility to designate `noProvider: true`. More often than not, this parameter rests at its default setting of `false`. Consequently, users are obligated to refer to the `ProviderClusterStackReleaseTemplate`. This document is a treasure trove, brimming with configurations exclusive to the provider.

To top it off, the status component of the `ClusterStack` furnishes the user with invaluable information. Primarily, it reveals the moniker of the `ClusterClass` object attributed to the most recent ready-to-deploy release. This streamlined approach ensures users can seamlessly duplicate the value and embed it within the `spec.topology.class` of a cluster object. The reward? A cluster fortified with the state-of-the-art cluster stack.

Last but by no means least, an expansive array elucidates comprehensive insights about the statuses of all releases. Whether these were user-manifested through explicit version indications or autonomously fetched by the controller from Github, all details are meticulously chronicled.


```yaml
apiVersion: clusterstack.x-k8s.io/v1alpha1
kind: ClusterStack
metadata:
  name: cs-xyz
  namespace: cluster
spec:
  autoSubscribe: false
  channel: stable
  kubernetesVersion: "1.26"
  name: xyz
  provider: myprovider
  noProvider: false
  providerRef:
    apiVersion: infrastructure.clusterstack.x-k8s.io/v1alpha1
    kind: MyProviderClusterStackReleaseTemplate
    name: myprovider-xyz-template
    namespace: cluster
  versions:
  - v6
status:
  latestRelease: provider-xyz-1-26-v6
  summary:
  - message: ""
    name: v6
    phase: done
    ready: true
```

#### ClusterStackRelease

The specification details of the object include not just the primary attributes, but also a specific reference pointing to the provider-specific object. This reference is instrumental in assessing whether certain tasks aligned with the provider have been completed. It acts as a verification system to ensure the accuracy and completeness of the operations performed. Delving into the status of the object, it's not just a mere update. It presents a set of conditions that furnish a comprehensive, yet succinct, summary of the object's current state.

In addition, one key feature that stands out is the inclusion of the Kubernetes version, complete with its patch version. This feature is especially advantageous for users who are keen on understanding the exact patch version employed. Their knowledge on this would aid in making informed decisions, especially when compatibility or troubleshooting matters are concerned.

Furthermore, there's a boolean indicator, a true or false signal, that communicates the readiness state of the object. This is an instant way for any user or administrator to ascertain whether the object is operational or requires attention. Complementing this, there's a meticulously curated list enumerating all the resources which the object has brought into play. This assimilation of resources is based on the Helm chart, a pivotal component that's delivered within the release artifacts of the cluster stack. Notably, one of the prominent objects that play a crucial role in this assembly is the `ClusterClass`. This entity aids in providing structure and ensuring systematic functioning within the system.

```yaml
apiVersion: clusterstack.x-k8s.io/v1alpha1
kind: ClusterStackRelease
metadata
  name: myprovider-xyz-1-26-v6
  namespace: cluster
  ownerReferences:
  - apiVersion: clusterstack.x-k8s.io/v1alpha1
    kind: ClusterStack
    name: cs-xyz
spec:
  providerRef:
    apiVersion: infrastructure.clusterstack.x-k8s.io/v1alpha1
    kind: ProviderClusterStackRelease
    name: myprovider-xyz-1-26-v6
    namespace: cluster
status:
  conditions:
  - lastTransitionTime: "2023-08-15T16:45:18Z"
    status: "True"
    type: Ready
  - lastTransitionTime: "2023-08-15T16:45:16Z"
    status: "True"
    type: ClusterStackReleaseDownloaded
  - lastTransitionTime: "2023-08-15T16:45:18Z"
    status: "True"
    type: HelmChartApplied
  - lastTransitionTime: "2023-08-15T16:45:18Z"
    status: "True"
    type: ProviderClusterStackReleaseReady
  kubernetesVersion: v1.26.6
  ready: true
  resources:
  - group: cluster.x-k8s.io
    kind: ClusterClass
    name: myprovider-xyz-1-26-v6
    namespace: cluster
    status: synced
    version: v1beta1
  - group: infrastructure.cluster.x-k8s.io
    kind: MyProviderMachineTemplate
    name: myprovider-xyz-1-26-v6-machinetemplate
    namespace: cluster
    status: synced
    version: v1beta1
  - group: infrastructure.cluster.x-k8s.io
    kind: ProviderClusterTemplate
    name: myprovider-xyz-1-26-v6-cluster
    namespace: cluster
    status: synced
    version: v1beta1
  - group: bootstrap.cluster.x-k8s.io
    kind: KubeadmConfigTemplate
    name: myprovider-xyz-1-26-v6-worker-bootstraptemplate
    namespace: cluster
    status: synced
    version: v1beta1
  - group: controlplane.cluster.x-k8s.io
    kind: KubeadmControlPlaneTemplate
    name: myprovider-xyz-1-26-v6-control-plane
    namespace: cluster
    status: synced
    version: v1beta1
```

#### ClusterAddon

The specification of the object includes a reference to the Cluster object. This is subsequently queried in the reconcile loop to ascertain both the status and the associated `ClusterClass` located at spec.topology.class. The clusterStack attribute of the `ClusterAddon` object matches the name of the `ClusterClass` within the Cluster object. The version specifically denotes the version of the cluster addons, which can differ from the cluster stack version.

In the object's status section, conditions are presented that offer a clear snapshot of the object's current state.

Furthermore, a comprehensive list details all the resources that the object has implemented based on the Helm chart found in the cluster stack's release artifacts. An example of such an object would be the metrics-server.

```yaml
apiVersion: clusterstack.x-k8s.io/v1alpha1
kind: ClusterAddon
metadata:
  name: cluster-addon-test-dfkhje
  namespace: cluster
  ownerReferences:
  - apiVersion: cluster.x-k8s.io/v1beta1
    kind: Cluster
    name: testcluster
spec:
  clusterRef:
    apiVersion: cluster.x-k8s.io/v1beta1
    kind: Cluster
    name: testcluster
    namespace: cluster
clusterStack: myprovider-xyz-1-26-v6
version: myprovider-xyz-1-26-v6
status:
  conditions:
  - lastTransitionTime: "2023-08-15T16:45:18Z"
    status: "True"
    type: Ready
  - lastTransitionTime: "2023-08-15T16:45:16Z"
    status: "True"
    type: ClusterStackReleaseDownloaded
  - lastTransitionTime: "2023-08-15T16:45:18Z"
    status: "True"
    type: HelmChartApplied
  resources:
  - group: apps
    kind: Deployment
    name: metrics-server
    namespace: kube-system
    status: synced
    version: v1
```

#### Example for provider-specific objects for OpenStack

```yaml
apiVersion: infrastructure.clusterstack.x-k8s.io/v1alpha1
kind: OpenStackClusterStackReleaseTemplate
metadata:
  name: cs-xyz
  namespace: cluster
spec:
  template:
    spec:
      nodeImages:
      - workeramd64
      - controlplaneamd64
```

```yaml
apiVersion: infrastructure.clusterstack.x-k8s.io/v1alpha1
kind: OpenStackClusterStackRelease
metadata:
  name: cs-xyz
  namespace: cluster
  ownerReferences:
  - apiVersion: clusterstack.x-k8s.io/v1alpha1
    kind: ClusterStack
    name: cs-xyz
- apiVersion: clusterstack.x-k8s.io/v1alpha1
    kind: ClusterStackRelease
    name: myprovider-xyz-1-26-v6
spec:
  nodeImages:
  - workeramd64
  - controlplaneamd64
```

### Webhooks

When developing Kubernetes operators using advanced tools such as Kubebuilder, webhooks emerge as a pivotal component in amplifying the functionality and flexibility of the Kubernetes API. These webhooks are not mere extensions but are essential instruments that permit developers to introduce custom logic when specific lifecycle events of Kubernetes custom resources (CRs) are triggered. Their integration can serve multifaceted purposes, from bolstering system reliability and coherence, to implementing strict policies, and even dynamically transforming data based on specific conditions or requirements.

Kubebuilder, being a comprehensive framework in this domain, facilitates the seamless creation and proficient management of two predominant categories of webhooks, which are:

1. **Mutating Admission Webhooks**:
    - These webhooks are initiated before a request is finally persisted to the Kubernetes API server. However, this action only occurs after the request has been duly authenticated and authorized.
    - They possess the capability to alter or modify the object that's in the process of being created or updated.
    - Potential use cases encompass:
      - Assigning default values to fields within a custom resource.
      - Standardizing data formats or modifying values contained within a resource.
      - Enhancing resource data by drawing from the context or leveraging other available datasets.
2. **Validating Admission Webhooks**:
    - These are also invoked before a request is persisted.
    - They operate on the principle of custom validation logic, determining whether to approve or reject a request.
    - Although they don’t alter the object, they can return an error message if the object falters during validation.
    - Use cases include:
      - Enforcing naming conventions.
      - Ensuring certain fields are set and have valid values.
      - Checking relationships between fields or between multiple resources.

The process of working with webhooks in Kubebuilder typically involves:

1. **Annotation**: You annotate the kind (the API type) that you want the webhook to interact with.
2. **Webhook Configuration**: Kubebuilder generates the necessary code scaffolding and configuration.
3. **Implementation**: You fill in the generated methods with your logic.
4. **Deployment**: Webhooks require a TLS endpoint, so when deploying your operator, you also need to ensure certificates are correctly set up. Fortunately, tools like `cert-manager` make this process more manageable in a Kubernetes environment.

When a user (or a controller) tries to create, update, delete, or connect (in case of webhooks for subresources) a resource, the Kubernetes API server can be configured to send a request to these webhooks. The webhooks then process the request (e.g., modify it or validate it) and return the result to the API server.

In the context of operators and Kubebuilder, webhooks enable advanced and dynamic behaviors. As we intend to use Kubebuilder, webhooks will make sure that the user will not be able to "destroy" the system by involuntarily changing an object that was not supposed to be changed.

The risk cannot be mitigated completely, because some fields have to be changeable, but it can be drastically reduced by the webhooks.

There are also some advanced validation of objects that go beyond kubebuilders capabilities. Here, we can use the webhooks to implement validation in native Go code.

### Conditions

The Cluster API serves as an essential monitoring tool that characterizes the statuses and observations of various resources. Think of these conditions as a real-time health report card for each resource, delineating its present status, potential issues, or progress throughout its lifecycle. Delving deeper, the Cluster API employs a collection of custom resources (CRDs) specifically designed to encapsulate the desired states of clusters, machines, and other related elements. The conditions associated with these resources provide invaluable insights, offering users and controllers a comprehensive view of their real-time status.

Our objective is to harness the capabilities of Cluster-API's conditions to succinctly present the real-time status of our objects to users. This approach will not only streamline information but also bolster the user experience. By ensuring that the custom resources we craft seamlessly align with those of Cluster-API, we're establishing a cohesive and unified interaction landscape for our users.

Diving into the technical depths, the Cluster-API repository is equipped with a suite of utility functions. These tools enable us to ascertain if a specific condition is active or dormant, identify the underlying reason for its status, and so on. Leveraging these utility functions will undoubtedly elevate our code quality, bringing precision and clarity.

An added advantage is the efficiency of integration. We've already incorporated the API and utils package of Cluster-API within our Go modules. Thus, using these tools will not introduce any additional overhead. For those keen on delving into the specifics, the resources can be found at https://pkg.go.dev/sigs.k8s.io/cluster-api@v1.5.0/api/v1beta1#Condition and https://pkg.go.dev/sigs.k8s.io/cluster-api@v1.5.0/util/conditions.

### Events

Kubernetes events provide insight into the behavior of the components within the cluster. They record the changes or significant occurrences associated with objects in the Kubernetes ecosystem. We use them heavily in our controller and for our custom resources.  

Here are some key points about Kubernetes events:

1. **Purpose**: They give a chronological account of what's happening in the system. This can be crucial for debugging purposes, for understanding the lifecycle of resources, or for monitoring.
2. **Scope**: Events can be associated with different types of objects. For instance, you might see events related to a Pod's lifecycle or events showing reasons why a service endpoint was not created.
3. **Viewing Events**: The most common way to view events is by using the `kubectl` command-line tool:
    - `kubectl get events`: Lists all events in the current namespace.
    - `kubectl get events -n <namespace>`: Lists events in the specified namespace.
    - `kubectl describe <resource-type> <resource-name>`: Provides detailed information about a specific resource, including a list of related events.
4. **Event Types**: Kubernetes events can be of different types. Common ones include:
    - **Normal**: Routine events that inform about standard operations.
    - **Warning**: These events indicate something went wrong or might go wrong, and the user should take note.
5. **Event Sources**: The `Source` of an event tells you which component generated the event. This can be a component of the Kubernetes system like `kubelet` or `scheduler`, or it can be the name of a server where an event occurred.
6. **Reason**: Each event provides a `Reason` field which is a short, machine-readable string that gives a unique description of the event.
7. **Message**: Along with the reason, an event contains a `Message` field which gives a human-readable description of the event.
8. **Event Aggregation**: To avoid spamming the event log with the same event, Kubernetes aggregates similar consecutive events. You might see messages like “This event has been seen X times in the last Y minutes” for frequently recurring events.
9. **Event Exporters**: There are tools and systems like Prometheus and Eventrouter that can be set up to scrape or receive these events and use them for monitoring, alerting, or logging purposes.

In practice, Kubernetes events are a vital tool for developers and operators to understand what's going on inside their cluster, diagnose issues, and monitor the health and behavior of their applications and resources.

We believe that events are, together with the conditions in the status of the event, the two sources that users should know in order to understand the system. Events might show some form of development of a certain incident over time, e.g. that the user understands that something has been going wrong 10 minutes ago and that is why the system is still stabilizing, but that the problem is already gone. 

The conditions, on the other hand, should always show the current information that is available to describe the state of a resource.

### Controllers that react immediately on specific etcd events

The `sigs.k8s.io/controller-runtime/pkg/builder` package in the Kubernetes `controller-runtime` library provides a declarative way to watch and reconcile Kubernetes resources. This package lets us define the resources we're interested in and apply specific configurations, including filtering events.

This is how we can use the `builder` package to watch for different events and apply filters:

1. **Watching Additional Resources**: With the builder, we can specify additional resources to watch. This is useful since controller logic depends on changes in resources other than the primary resource.
2. **Event Filtering**: To filter events, we can use predicates. Predicates allow you to handle or ignore specific events based on certain conditions. The `controller-runtime` library provides a `predicate` package where we can find built-in predicates and we can define custom ones.
    - **Built-in Predicates**: There are several ready-to-use predicates, like `resource.CreatePredicate`, `resource.UpdatePredicate`, `resource.DeletePredicate`, and `resource.GenericPredicate`. They filter out events based on create, update, delete, or generic actions on resources.
    - **Custom Predicates**: For more fine-grained control, we can create custom predicates by implementing the `Predicate` interface. This interface defines functions like `Create`, `Update`, `Delete`, and `Generic`, which allow us to specify whether or not to handle respective events.

Using these methods, our controllers get called whenever the events we are interested in (and haven't filtered out) occur, which greatly improves the user experience. As we have dependencies between resources that depend on updates of each other, the builder package makes quick updates of all resources possible. 

### Testing

To ensure the robustness and reliability of our code, it's imperative that we subject it to rigorous testing. Testing controllers, especially those with a reconcile loop initiated by a manager, poses its own set of unique challenges and nuances; it isn't always a straightforward task.

To facilitate this, we'll leverage the capabilities of the envtest package. envtest is an invaluable tool that comes from the Kubernetes controller-runtime project. It is designed to streamline integration tests by furnishing the requisite clientsets, caches, and assorted components necessary for executing a local Kubernetes API server and etcd instances.

What does this mean for us? This functionality paves the way for testing Kubernetes controllers and evaluating their interactions with the Kubernetes API without the prerequisites of a physical cluster. This is a significant advantage as it means we can authenticate the complete functionality of our code, sans the need for an actual cluster. This is applicable both for local testing and within our Continuous Integration (CI) environments.

However, it's essential to be aware that our setup does have multiple external dependencies that need to be addressed to ensure comprehensive testing.

To start with, we require a local kind cluster. This cluster functions as the foundation for our workload during local tests. By utilizing this kind cluster, we are endowed with the ability to emulate the process of applying cluster addons directly to a workload cluster.

Moreover, for our testing regimen, we also have local releases of cluster stacks. These are particularly crucial for unit tests as they negate the need to rely on an external Git repository. In order to check that downloads work from e.g. Github, we add specific dedicated tests to make sure that the download works properly. 

### Repo DevOps: Tools for Efficient Development

#### kubebuilder
Within our project, Kubebuilder stands as a cornerstone, enhancing and simplifying the way we develop and manage our Kubernetes-native application elements. As an SDK tailored for Kubernetes, Kubebuilder effortlessly facilitates the construction of Kubernetes APIs through custom resource definitions (CRDs). Its true strength lies in enabling the creation of controller logic with minimal boilerplate, letting our developers zero in on the core application logic with greater clarity and focus.

1. **Automated CRD Generation:** Developers can define custom types, and Kubebuilder will automatically scaffold the corresponding CRDs.
2. **RBAC Configuration:** Through specially annotated comments, Kubebuilder generates the necessary RBAC roles and role bindings required for the custom controller to access and modify resources.
3. **Testing Tools:** Kubebuilder offers a comprehensive suite of tools and libraries to test the controller’s behavior, ensuring it behaves as expected.
4. **Webhook Integration:** It aids in setting up webhooks for CRDs, allowing for validation and defaulting.
5. **Rich Extensibility:** Kubebuilder supports various plugins and offers a consistent project layout, which makes collaboration and development more streamlined.
6. **Integrated Environment:** Kubebuilder projects come with manager configurations, ensuring that all controllers run within the same process to leverage shared caches.

// TODO: all directories and tools

- generating CRDs
- Tilt
- Makefile
- CI
- E2E test setup
- etc.

#### Linting

Linting is the process of analyzing source code for potential errors, bugs, stylistic issues, and other code-quality concerns. Linting our project can provide several benefits, and when it comes to Go, `golangci-lint` stands out as one of the most comprehensive and customizable linters. Let's dive into the reasons for linting and why `golangci-lint` is a popular choice for Go projects:

#### Why Should You Lint Your Go Project?

1. **Code Quality**: Linting can spot common mistakes and anti-patterns in the code, which might otherwise be missed. This ensures your code remains of high quality.
2. **Consistency**: By enforcing a coding style and guidelines, linting ensures consistency across the codebase, making it easier to read and maintain.
3. **Bug Prevention**: Many linters can catch potential bugs, such as variable shadowing, unused variables, or error values that are being ignored.
4. **Early Feedback**: Linters provide immediate feedback, even before your code is run or tested, speeding up the development process.
5. **Team Collaboration**: When working in a team, having a linting process ensures that everyone's code adheres to the same standards. This minimizes "code churn," where developers adjust each other's styles to match their own preferences.
6. **Refactoring and Maintenance**: A linter can assist in identifying areas of the code that can be refactored or simplified. Clean code is easier to maintain and extend.

#### Why is `golangci-lint` a Good Option?

1. **Comprehensive**: `golangci-lint` is essentially a meta-linter. It runs multiple Go linters concurrently, providing you with a comprehensive analysis of your code.
2. **Performance**: Due to its concurrent execution model and caching mechanisms, `golangci-lint` is one of the fastest Go linters available, especially when running multiple linters.
3. **Configurability**: You can enable or disable specific linters and can configure each linter's settings to fit the needs of your project.
4. **Extensibility**: It supports a wide range of linters out-of-the-box, but you can also integrate custom linters if necessary.
5. **Integrations**: `golangci-lint` integrates smoothly with popular CI/CD tools and platforms, providing feedback directly in merge/pull requests.
6. **Regularly Updated**: `golangci-lint` is actively maintained, ensuring support for the latest Go versions and continual improvements.
7. **Automatic Fixes**: Some issues identified by `golangci-lint` can be automatically fixed using its `-fix` option.

In summary, linting your Go project is a practice that enhances code quality, consistency, and team collaboration. While there are several linters available for Go, `golangci-lint` is widely regarded as a leading tool due to its performance, breadth of analysis, and flexibility. Integrating it into your development workflow can significantly improve the robustness and quality of your Go codebase.

### Drift correction

Drift correction is a fundamental aspect of GitOps tools like ArgoCD. To understand its significance, it's imperative to grasp the concept of "drift" in the context of GitOps. At its core, "drift" denotes the deviation or disparity between the intended state of a system— as delineated in git repositories— and the real-time, current state of that system within its operational environment, such as a Kubernetes cluster.

Let's delve into a practical illustration to shed more light on this. Envision that within your Git repository, you've explicitly designated that a certain Kubernetes Deployment should maintain 3 replicas. Now, suppose an individual, perhaps inadvertently or for testing purposes, manually adjusts the number of replicas in the cluster to 5 without mirroring this change in the Git repository. This results in a situation where the real-world environment, in this case, the Kubernetes cluster, has veered or "drifted" away from its specified or desired state as outlined in the Git repository.

It's precisely this drift that we aim to rectify. By implementing a drift correction mechanism similar to ArgoCD's, we hope to ensure that the desired and the actual states of our systems remain in harmony, preventing unforeseen complications and maintaining the integrity of our deployments. Such corrections are not just about alignment but also about ensuring transparency, consistency, and predictability in our operational environments.

#### Drift Correction in ArgoCD:

ArgoCD constantly monitors and ensures that the actual state of the system matches the desired state defined in Git. When it detects a drift, it can:

1. **Alert**: Notify the user about the discrepancies between the live state and the Git-defined state.
2. **Auto-correct**: Automatically bring the live system back to the desired state defined in Git. In our example, this would mean scaling the replicas back down to 3.

The choice between alerting and auto-correcting can be configured in ArgoCD. Some teams might prefer to only be alerted of drifts, especially in production environments, while others might want automatic correction to maintain strict consistency with the Git repository.

Drift correction, as implemented in tools like ArgoCD, emphasizes the principles of GitOps:

1. **Desired state is source of truth**: Everything about the system should be declared in Git. It serves as the single source of truth for system state.
2. **Immutable infrastructure**: Infrastructure should be consistent and not manually tampered with. Any changes should be made in Git, which then propagates to the live environment.

Correcting drift helps in maintaining a predictable, consistent, and version-controlled state of infrastructure and applications, making operations more transparent, auditable, and less error-prone.

#### Drift correction in cluster-stack-operator

The cluster-stack-operator plays a pivotal role in our infrastructure, taking responsibility for applying multiple objects both in the management cluster and the workload clusters. These objects, intricately interwoven, ensure the seamless and efficient functioning of the system. However, if a user, either inadvertently or intentionally, deletes or alters any of these objects, the resultant effect can be a compromised or non-functional system. This poses significant risks, especially in environments where uptime and stability are paramount.

To fortify the system against such potential vulnerabilities, we are proposing an enhanced monitoring mechanism. This strategy involves conducting regular and rigorous checks on the state of these objects, ensuring that their configuration remains as originally intended. By continuously comparing the live state with the desired state, we can detect and diagnose discrepancies or "drifts" in real-time.

Should the drift correction mechanism identify any such deviations, it becomes imperative to respond with immediacy and precision. This might entail restoring the object to its original state, notifying the relevant stakeholders, or even initiating automated rollback processes to reinstate the system's integrity. By adopting this proactive approach, we aim to bolster the resilience of our infrastructure, reduce system downtime, and provide a consistent and reliable user experience.

## Details about controller reconcile loops

### ClusterStack controller

When the auto-subscribe feature is activated, our system performs an intricate operation to scan Github for any new releases pertaining to the Cluster Stack. This process, though it may sound straightforward, is layered with complexities to ensure precision. The primary objective is to identify and segregate the releases that align with our criteria – that is, having a consistent Kubernetes version, name, and channel as our set standards. This is essential to ensure compatibility and seamless integration with existing systems.

However, in the vast realm of Github releases, numerous variations might not align with our criteria. Hence, we meticulously filter out cluster stacks that bear a distinct Kubernetes version, name, or channel. This filtration process ensures that we're not inundated with irrelevant information or releases. Post this comprehensive filtering, if we stumble upon a release that not only fits our criteria but also surpasses all previously identified versions, or, alternatively, one that the user has explicitly pointed out, our system proceeds to generate a fresh `ClusterStackRelease`. This new creation is symbolic of our commitment to always stay updated and offer the best to our users.

Moving forward, the controller assumes an active role. Its first task is to enumerate all the `ClusterStackReleases`. This list is curated based on a specific criterion: every release must possess an owner reference, or, more aptly put, a controller reference set to the `ClusterStack`. This ensures that there's a structured hierarchy and organized linkage between different releases and their associated cluster stacks.

The controller's role doesn't end with listing. It delves deeper, embarking on an analytical journey to ascertain the relevance and importance of each `ClusterStackRelease`. Several factors influence the controller's judgment:

The controller analyzes whether we want to keep them because

a) they are listed in the versions list in the spec of `ClusterStack`

b) they are currently in use by some `Cluster` objects

c) they are the latest release that is ready to use.

Given the user's proclivity towards having the latest version at their fingertips, it is inherent that such a release would never face automatic obliteration. Yet, the dynamism of the system allows users to modify preferences. For instance, if a user decides to exclude a particular version from the specification list, or if a version, once heralded as the latest, now finds itself overshadowed by newer releases, deletions are in order. The system also accommodates version jumps, seamlessly allowing transitions like moving from version 1 straight to version 3, bypassing the intermediate version 2. This adaptability ensures users have the freedom and flexibility they desire, without compromising system integrity.

To carry out an effective comparison of different versions, we must exercise caution especially with channels other than the stable one. For instance, the version labeled `v1-alpha.5` is chronologically older than both `v2-alpha.4` and `v1-alpha.6`.

To navigate this complexity, it is imperative to incorporate a sophisticated sorting mechanism. This mechanism will be adept at organizing versions in their proper order, eliminating potential errors or oversights in version comparisons.

In the system, the controller is assigned the duty of cycling through all existing releases, as well as those anticipated in the future. During this process, it diligently verifies the presence of both the `ClusterStackRelease` and the `ProviderClusterStackRelease` objects. In the event that either of these objects is missing, it becomes the responsibility of the controller to instantiate them. However, this action is contingent upon the existence of a provider-specific operator. Thus, before the controller proceeds with creation, it needs to first validate the presence of this operator.

An interesting aspect of these objects, namely the `ClusterStackRelease` and the `ProviderClusterStackRelease`, is their naming convention. They both adhere to a consistent format: `<provider>-<name>-<Kubernetes version>-<version>`. This methodical approach ensures that their names are not only easily distinguishable but also intuitively comprehensible. Moreover, it's worth noting that this naming schema directly mirrors that of the associated `ClusterClass` linked with the cluster stack release, further streamlining the system's design and operational clarity.

Creating the `ProviderClusterStackRelease` can be a bit of a challenge, primarily because this Custom Resource Definition (CRD) is unfamiliar to the operator. Interestingly, this is not a unique problem. The Cluster-API faces a similar issue. Fortunately, Cluster-API has addressed this challenge, and their solution can be a guiding light for us. They've encapsulated their solution in a code library, which can be found at sigs.k8s.io/cluster-api/controllers/external. This invaluable library comprises all the essential functions required to construct objects from templates, particularly from the `ProviderClusterStackReleaseTemplate`, even when those objects hail from previously unknown APIs.

A deeper look into their solution reveals that they leverage the unstructured.Unstructured object. This object, which can be explored in detail at https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1/unstructured, will be instrumental for our needs and will find application in numerous instances in our setup. However, for this integration to work seamlessly, there's a prerequisite: the `ProviderClusterStackReleaseTemplate` must have the spec of the `ClusterStackRelease` located under the path spec.template.spec. This ensures that both the controller and the external library can access it, thereby allowing for the creation of `ProviderClusterStackReleases`.

In our workflow, every reconcile loop performs a rigorous check, ensuring that all sub-resources related to `ClusterStack` are present and accounted for. This methodological approach bears a significant advantage: it provides a robust recovery mechanism in the event a user inadvertently deletes a resource. Such checks ensure that even if a mistake occurs, like the accidental deletion of a crucial resource, our system can gracefully handle it and initiate a recovery.

As we reach the culmination of the reconcile loop, our next step is to update the status of the concerned object. Here, we extract details from the `ClusterStackRelease` resource, curate a concise status summary, and append this information to our list. We also make it a point to update the `latestRelease` value to keep our records up-to-date.

Lastly, on the off-chance that a `ClusterStack` object is eliminated, our controller's workload is minimal. Thanks to the judicious setting of owner references on all sub-resources, Kubernetes is designed to automatically handle the deletion of all associated components, ensuring that our intentions are always mirrored in the system's actions.

### ClusterStackRelease controller

Initially, the controller leverages the provider reference to retrieve the `ProviderClusterStackRelease` object. To accomplish this, it relies on the external package. Following this, the controller verifies the readiness of the provider object. To ensure a standardized approach across various platforms, all `ProviderClusterStackRelease` objects, regardless of whether they originate from OpenStack, AWS, Docker, or other sources, must incorporate a boolean in status.ready. This aligns with the requirement for the `ProviderMachines` within the Cluster-API framework.

The primary role of this controller is to patiently await the completion of provider-specific tasks before initiating its own set of operations. This strategic wait is crucial because the controller is responsible for applying the `ClusterClass` object. Once this object is in place, users have the capability to reference it from a Cluster object. However, complications arise if the node images haven't been constructed yet. If this is the case, an attempt to initiate the cluster would result in an error. Such errors are not only unexpected from the user's perspective but also challenging to diagnose and rectify. To avoid such predicaments, the controller's strategy is to delay the application of the `ClusterClass` object until every other requisite component is in a ready state. This ensures that as soon as users initiate the process, it proceeds seamlessly.

Additionally, the controller has the function of downloading essential release artifacts from the Github release. These artifacts, pivotal for the controller's operation, are stored locally within a designated directory of the container. To avoid redundant operations and ensure efficiency, the controller checks for the existence of this directory. If it detects the directory, the assumption made is that the prior download was successful, thereby eliminating the need for repeated downloads.

However, this approach is effective only when combined with rigorous error-handling mechanisms. In instances where the controller encounters a glitch during the download of necessary assets, it takes the corrective action of erasing the entire directory associated with that release. This step ensures that any subsequent reconcile loop starts on a clean slate, without remnants from the flawed attempt.

Lastly, the controller diligently ensures the correct application of objects from the cluster-class helm chart in the cluster. In scenarios where this has been overlooked, the controller undertakes the following steps:

1. **Templating with Helm:** Our first step involves utilizing the helm binary to craft a template from the helm chart. Helm, as you might be aware, serves as a potent package manager for Kubernetes, and its capability to template charts is paramount for our objective.
2. **Applying the Templated Objects:** Post templating, the objects are then methodically applied to the Kubernetes cluster using the client-go library, a standardized Go client for Kubernetes. As each object gets applied, we maintain a meticulous record in the resource status. This record provides clarity on the operational efficacy. If an object application is successful, its status is marked as synced. Conversely, if an object encounters a problem during its application, its status reads not synced. In such cases, we also provide insights into potential reasons for the failure, facilitating easier troubleshooting.

Our approach resonates with methodologies adopted by renowned projects such as Argo-CD. We harness the power of both the helm binary and the Kubernetes Go client, ensuring a blend of robustness and flexibility.

1. **Monitoring Object Application:** It is imperative to continuously monitor the application status of all objects. While occasional hitches that hinder Kubernetes from applying objects are expected, it's unnecessary to reapply all objects in the face of a singular failure. Hence, by documenting the status of each object, we can pinpoint and reapply only those that previously encountered issues, enhancing efficiency.
2. **Drift Correction:** One of the cardinal roles of this provider is to address configuration drift. Suppose a user inadvertently deletes a resource from the cluster that this controller had previously applied. In that case, our controller's intelligence identifies this anomaly and rectifies it. This preemptive measure eliminates user confusion that might arise from unexpected cluster failures.
3. **Status & Communication:** Transparency is vital. Throughout each of the aforementioned steps, we consistently update the status of this object. This ensures that users are always in the loop regarding ongoing operations.
4. **Handling Object Deletion:** If a situation arises where a `ClusterStackRelease` object is deleted, all corresponding resources previously applied by this controller, like the `ClusterClass`, must also be eradicated. To ensure this, we re-invoke the helm template and meticulously traverse all objects, verifying their removal. However, a crucial pre-check involves ascertaining that no existing Cluster is utilizing the `ClusterClass`. If such an association exists, our strategy involves a temporary pause, followed by a subsequent reconciliation to reevaluate the scenario. Once the path is clear, the finalizer from the `ClusterStackRelease` object can be safely removed.

This comprehensive approach not only ensures efficiency and reliability but also minimizes potential errors, offering users a smooth experience.

### ClusterAddonCreate controller

The controller we are discussing holds a pivotal role in orchestrating and managing `ClusterAddon` objects within our Kubernetes infrastructure. To comprehend its significance, let's delve deeper into its core functionalities and the mechanisms it employs:

1. **Role & Responsibility:** At its essence, this controller is the primary agent designated for the generation of `ClusterAddon` objects. The architectural design is such that there exists a one-to-one correspondence between a Cluster and its associated `ClusterAddon` object. This intrinsic relationship ensures that for every individual Cluster that comes into existence, there is a distinct `ClusterAddon` object tailor-made for it.
2. **Reactivity to Events:** One of the defining characteristics of this controller is its responsiveness. Whenever there's a create event for a Cluster, this controller springs into action without delay. It doesn't just passively monitor; it actively engages by fabricating a complementary `ClusterAddon` object. This newly formed object will bear the pertinent owner reference and cluster reference, both pointedly set to align with the originating `Cluster` object. Such responsiveness ensures a streamlined and consistent creation process.
3. **Automating Cluster Addons:** The overarching objective behind this controller's design is automation. By establishing this mechanism, we've paved the way for an automated application of cluster addons to every workload cluster generated by the user. In layman's terms, whenever a user introduces a new workload cluster, our system, thanks to this controller, automatically equips it with the necessary cluster addons. This automation not only enhances user experience by reducing manual interventions but also ensures consistency and uniformity across all clusters.
4. **Enhancing User Experience:** With this automation in place, users are relieved from the repetitive task of manually applying cluster addons for every new cluster they spawn. It simplifies their workflow and ensures that each cluster is immediately equipped with the necessary addons, making it operational without unnecessary delays or additional configurations.

In conclusion, this controller, with its automated functionalities and quick responsiveness, is an integral cog in the wheel of our Kubernetes management system. It guarantees that each Cluster is automatically fortified with its respective `ClusterAddon`, optimizing both efficiency and user experience.


### ClusterAddon controller

The controller, in the vast ecosystem of our Kubernetes management system, plays a pivotal role in coordinating and harmonizing the interplay between `Cluster` and `ClusterClass` objects. Let's delve into a step-by-step breakdown of how this mechanism operates:

1. **Fetching and Verification:** Initially, the controller zeroes in on the Cluster object, which is inherently referenced in the `ClusterClass` spec. This is the foundational step, and upon successful fetching, the controller embarks on its verification mission. The primary objective here is to ascertain the readiness of a cluster. This readiness check is twofold:
    - First, it evaluates whether the kubeconfig secret has been instantiated.
    - Subsequently, leveraging this kubeconfig secret, it attempts to access the Kubernetes API.

A successful API access indicates that the cluster has attained readiness, paving the way for the application of cluster addons.

2. **Delayed Reconciliation:** If the preliminary check reveals that the cluster hasn't reached its operational readiness, the controller doesn't abandon its mission. Instead, it adopts a patient approach, opting for a subsequent reconciliation after a brief interlude. This ensures that the system repeatedly checks the cluster's status, ensuring eventual readiness and subsequent addon application.

3. **Object Application and Differentiation:** Like its counterpart, the clusterstackrelease-controller, this controller is entrusted with the task of object application. However, a notable divergence exists in their operational blueprint. The cluster addons demand periodic updates, especially when there's a shift in the `ClusterClass` referenced by the `Cluster` object. Such update dynamics are absent in the `ClusterStackRelease` objects, wherein any change necessitates the creation of an entirely new release with freshly applied objects.

4. **Comparison and Versioning:** To determine the necessity for updating cluster addons, the controller embarks on a meticulous comparison. It juxtaposes the spec.clusterStack value of `ClusterAddon` against the `ClusterClass` referenced within the `Cluster` object. An essential note here is the intrinsic correspondence between the `ClusterClass` object's name, the `ClusterStackRelease` object, and the actual cluster stack release, which facilitates this comparison.

A divergence in values, say a user-initiated transition from version `v1` to `v2`, nudges the controller towards the next phase of its operation. Nevertheless, before it plunges into applying the cluster addons, a secondary check is imperative. This involves ascertaining if there's been an actual change in the cluster addons' version. Such layered checks ensure that updates are applied only when genuinely required, optimizing efficiency.

Within the intricate framework of Kubernetes management, the versioning and application of cluster addons play a crucial role. Understanding this requires a detailed exploration of the mechanics employed:

1. **Locating the Version:** At the heart of our approach lies the `metadata.yaml` found within the cluster stack release assets. It serves as a beacon, providing vital information about versions. Once identified, this yaml file, which has been previously downloaded alongside other essential assets, is meticulously examined. The primary objective is to match the cluster addon's version delineated in the file against the version specified in the `ClusterAddon` object's spec.
    - **Alignment Scenario:** If these versions resonate perfectly, it implies a state of consistency from release v1 to v2, rendering any further actions redundant.
    - **Discrepancy Scenario:** However, any disparity between the two versions signals a fresh iteration of the cluster addons. This necessitates re-application.

2. **Addon Application Mechanism:** Drawing on the dual-step approach previously elucidated, the addon application process introduces an intermediate step, drawing inspiration from the cluster-api-addon-provider-helm. This step is dedicated to infusing the helm with intricate details about the `Cluster` and the `ProviderCluster`. This can be further explored through this GitHub link.
The inclusion of this step is not merely a formality but a necessity. Conventional templating mechanisms fall short when it comes to injecting values that materialize only at runtime. Yet, these values are paramount for the resources we wish to apply as cluster addons.

3. **Addressing Container Restarts:** The controller's dependency on release assets introduces a peculiar challenge when the container undergoes a restart. In the absence of an external volume, any information retained in memory or within the container is wiped out. The implication? A re-fetch from GitHub becomes indispensable.
While this fetch operation might seem instantaneous, often spanning just a second, it introduces a window of vulnerability. Should a `ClusterAddon` initiate its reconciliation within this brief interval, it will confront an absent file. However, instead of triggering an error cascade, a more elegant solution is adopted: intelligent requeuing. This nuanced approach isn't exclusive to this controller but is echoed across other controllers, wherever deemed necessary.

4. **User Feedback via Intelligent Conditions:** Recognizing the importance of transparency and user awareness, this controller incorporates an advanced feedback mechanism. By embedding intelligent conditions into the object's status, it offers users a lucid insight into ongoing operations. This not only enhances user experience but ensures that they remain abreast of the system's state and progress.

In sum, this controller embodies a fusion of precision, adaptability, and user-centricity. By ensuring meticulous version tracking, adept handling of operational nuances, and continuous user feedback, it exemplifies the pinnacle of Kubernetes management prowess.


### ProviderClusterStackRelease controller - Example

Delving into the intricacies of this provider's operations, let's visualize its underlying processes that seamlessly ensure the user gets the specified node images uploaded as per their requirements.

1. **The Initial Step - Creating ProviderNodeImageRelease Objects:**
The `ProviderClusterStackRelease` plays a foundational role by birthing new `ProviderNodeImageRelease` objects. This creation is not random but carefully aligned with each node image delineated in the spec. It’s like having a dedicated steward for each image the user specifies.

2. **Interlinking Statuses in the Control Loop:**
The control loop is not just about overseeing operations. It actively fetches the status of each `ProviderNodeImageRelease` object. Remember, each of these objects shoulders the responsibility of ensuring a particular node image becomes accessible to the user. The loop captures this status and etches it into the `ProviderClusterStackRelease` object’s status. It’s akin to having an automated status update system ensuring synchronicity across different processes.

3. **The Determination of Readiness:**
Once all node images reach a state of preparedness, the controller makes its proclamation by setting `status.ready: true`. This is the green signal for the clusterstackrelease-controller to swing into action and proceed with its tasks.

4. **Safeguarding Node Images with a Dedicated Controller:**
The `ProviderNodeImageRelease` object doesn't operate in isolation. It has its own guardian angel, a dedicated controller, ensuring that a specific node image is primed for the user. This is no simple task. The path to readiness often involves time-consuming operations, such as the meticulous uploading or intricate building of the node image.

5. **Tackling the Challenge of Long-Running Operations:**
These lengthy operations come with their own set of hurdles. Consider scenarios where the operator's container is abruptly halted by Kubernetes or manually terminated. The solution? A robust map securely stored in memory, vigilantly monitoring all concurrent operations (thankfully, the power of goroutines ensures parallel operations). Handling shutdowns with finesse, especially those triggered by SIGTERM, becomes paramount. The key lies in gracefully stopping all extended operations, potentially leveraging the canceling contexts in Go.

6. **The Intriguing Interplay of ProviderClusterStackRelease and ProviderNodeImageRelease:**
The harmony between `ProviderClusterStackRelease` and `ProviderNodeImageRelease` introduces fascinating possibilities. For instance, node images possess the potential to be repurposed across diverse releases of a cluster stack. Visualize a scenario where no modifications occur in the node images between v1 and v2 of the cluster stack. The result? A blissful status quo where no additional actions are required. This flexibility and efficiency find resonance in our controller and custom resources, embodied through the multiple owner references of `ProviderClusterStackRelease` objects linked to a single `ProviderNodeImageRelease`.

To encapsulate, this provider weaves a meticulous tapestry of processes, ensuring seamless accessibility and updation of node images for users, exemplifying a blend of precision, adaptability, and efficiency.
