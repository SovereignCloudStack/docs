---
title: Introduction
sidebar_position: 1
---

## About

The Sovereign Cloud Stack combines the best of Cloud Computing in one unified standard.
SCS is built, backed, and operated by an active open-source community worldwide.

## Architectual Overview

TODO

## Use Cases and Depolyment Examples

### IaaS Layer

#### Quick Start with Cloud-In-A-Box

The fastest way to get in touch with SCS is to deploy a SCS cloud virtually. The Cloud-In-A-Box was built explicitely for this scenario. Check it out [here](/docs/iaas/guides/deploy-guide/examples/cloud-in-a-box)

#### Reference Implementation Testbed

This means that you set up a SCS test installation including all the infrastructure
pieces such as database, message queueing, ceph, monitoring and logging, IAM, the
[OpenStack](https://openstack.org/) core services, and (soon) the Container layer
on top of an existing IaaS platform.

The SCS IaaS reference implementation is based on [OSISM](https://osism.tech/). Read on the
[OSISM testbed docs](https://docs.osism.de/testbed/) to learn how to get the
testbed running. Please read carefully through the
[deployment](https://docs.osism.de/testbed/deployment.html) section of the
manual.

### Container Layer

#### k8s Cluster API Provider

You can easily deploy the container layer on top of the testbed (or a production
SCS cloud of course) checking out the code from
[k8s-cluster-api-provider](https://github.com/SovereignCloudStack/k8s-cluster-api-provider/).

#### Cluster Stacks

TODO

### Public SCS Clouds in production

Find the current number of scs compatible clouds [here](https://docs.scs.community/standards/certification/overview#compliant-cloud-environments)

### Development of SCS

While the SCS projects tracks the efforts across the released in epics and userstories, the work on the code happens upstream - as such these repositories are usually not found in the SCS GitHub organization. Whenever possible SCS works directly in the upstream projects into

- CNCF projects,
- OpenStack,
- kolla-ansible,
- OSISM and others.

### Issues and Bugs

If you can identify the affected component, raise the issue against the relevant repository in the SovereignCloudStack or OSISM space. Otherwise you can use the [issues repository](https://github.com/SovereignCloudStack/issues). We appreciate PRs as well as issues; please don't forget to sign off your contributions see [contributor guide](https://docs.scs.community/community).

### Contribute and Connect

Please see the [SCS contributor guide](https://docs.scs.community/community).

### Releases and Roadmap

See our Release Notes [here](https://docs.scs.community/docs/category/releases)

## Standards, Conformity and Certification

How to get compliant? With what am I compliant then? What are the benefits? What does it involve? What to expect in the future? Link to Standards Section: <https://docs.scs.community/standards>
