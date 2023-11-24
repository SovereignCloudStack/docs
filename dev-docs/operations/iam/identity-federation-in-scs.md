---
title: Identity Federation in SCS
type:
status: Draft
track: Global
---

SovereignCloudStack wants to make it possible for operators to delegate
administration of user identities to the organizational entities that the
users are part of. Usually that's customer organizations but it could also
be the operator itself. Federation protocols like OpenID Connect can be used
to achieve that goal. To simplify connecting the different parts of SCS
to customer owned IAM solutions, SCS deploys Keycloak as central Identity
Provider (IdP) service.

Currently this is deployed automatically only in the [osism/testbed](https://docs.scs.community/docs/iaas/guides/deploy-guide/examples/testbed/),
which provides [its own documentation for authentication with OIDC](https://docs.scs.community/docs/iaas/guides/deploy-guide/examples/testbed#authentication-with-oidc).

The following sections describe how this is done.

## 1. IaaS / OpenStack

To provide Infrastrucure as a Service SCS builds upon
OpenStack. See section [OpenStack Federation via OpenID-Connect](https://docs.scs.community/dev-docs/operations/iam/openstack-federation-via-oidc)
for more details on identity federation for OpenStack.

## 2. CaaS

To provide Container as a Service SCS builds upon
Kubernetes. There is
[work in progress](https://github.com/SovereignCloudStack/issues/issues/373)
to optionally connect Kubernetes to Keycloak and to
map authorization decisions based on claims via cluster role bindings.
