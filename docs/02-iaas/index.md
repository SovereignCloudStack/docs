---
title: IaaS Layer
sidebar_position: 1
---

# IaaS Layer

The SCS reference implementation of the Infrastructure-as-a-Service (IaaS) layer
was built with [**OSISM**](https://osism.tech/docs). It builds on
[OpenStack](https://openstack.org/) for compute, network and identity services and
[Ceph](https://www.ceph.io/en/) for storage. The OpenStack deployment is based on
[Kolla](https://opendev.org/openstack/kolla) (container images) and
[kolla-ansible](https://opendev.org/openstack/kolla-ansible), which OSISM wraps with
additional Ansible playbooks and tooling to deploy and operate the whole stack.

OSISM is the reference implementation, but not the only way to build an
SCS-compatible cloud. SCS is a
[modular software stack](https://sovereigncloudstack.org/en/modular-software-stack/):
today, more than one implementation exists to build SCS-compatible clouds, and
compliance is defined by the [standards](/standards) rather than by a single stack.

:::info

OSISM maintains its own, authoritative documentation. Rather than mirroring it
here (and letting the copy drift out of date), this page links directly to the
relevant sections of the official [OSISM documentation](https://osism.tech/docs/).

:::

## OSISM documentation

- [Getting started](https://osism.tech/docs/) — introduction and overview of OSISM.
- [Concepts](https://osism.tech/docs/concepts/) — architecture and core components.
- [Guides](https://osism.tech/docs/guides/) — deployment, configuration, operations,
  upgrade, troubleshooting and user guides.
- [Testbed](https://osism.tech/docs/testbed/) — the fastest way to try SCS: a full
  virtual SCS/OSISM installation you can deploy on top of an existing OpenStack cloud.
- [Release Notes](https://osism.tech/docs/release-notes/) — per-release notes and
  upgrade information.
- [Appendix](https://osism.tech/docs/appendix/) — CLI reference, security advisories
  and supported standards.

## OpenStack tools

As part of the reference implementation, OSISM maintains these tools to meet the
SCS standards for image and flavor management:

- [Image Manager](https://osism.tech/docs/guides/operations-guide/openstack/tools/image-manager)
- [Flavor Manager](https://osism.tech/docs/guides/operations-guide/openstack/tools/flavor-manager)

## In this section

Alongside the OSISM reference, SCS maintains a few IaaS resources of its own:

- **Guides** — SCS user-facing best practices, such as configuring
  [security groups](/docs/iaas/guides/user-guide/security-groups)
  and creating [user data backups](/docs/iaas/guides/user-guide/user-data-backups).
- **Deployment examples** — real-world setups such as the
  [artcodix](/docs/iaas/deployment-examples/artcodix/) production deployment and
  the SCS [turnkey hardware landscape](/docs/turnkey-solution/hardware-landscape/).
