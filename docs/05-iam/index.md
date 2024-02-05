# Introduction on Identity Management and Federation in SCS

Sovereign Cloud Stack wants to make it possible for operators to delegate
administration of user identities to the organizational entities that the
users are part of. Usually that's customer organizations but it could also
be the operator itself. Federation protocols like OpenID Connect can be used
to achieve that goal. To simplify connecting the different parts of SCS
to customer owned IAM solutions, the SCS reference implementation offers
Keycloak as central Identity Provider (IdP) service.

## Deployment

Keycloak can be deployed by running

```
osism apply keycloak
```

The required Keycloak client configuration that allows Keystone to obtain
OIDC token from Keycloak needs to be deployed by running

```
osism apply keycloak-oidc-client-config
```

After these steps Keystone should be able to obtain token using the
Device Authorization Grant with PKCE, which is configured by default in the
`wsgi-keystone.conf` deployed in SCS.

## Accessing Keycloak

Currently deployed on the manager node, by default under `https://keycloak.<yourdomain>`.
Details TODO.

## Identity Mapping

The idea is that customer can create groups with specific names in their own IAM.
These shall be mapped to a claim `groups` to be included in the OIDC token.
Via the Keystone [mapping](https://docs.openstack.org/keystone/latest/admin/federation/mapping_combinations.html)
they shall be mapped to roles on OpenStack projects.
[The corresponding section for Developers](https://docs.scs.community/dev-docs/operations/iam/identity-federation-in-scs) may be interesting for more technical details.
Please be aware that currently there are still some technical challenges to be solved
within the OpenStack Keystone mapping engine and the mapping rules to make this work
seamlessly.

## SCS to SCS federation

Federation between separate deployments of SCS is possible via the IdP by
means of OpenID Connect.
The section on [inter SCS federation setup](https://docs.scs.community/docs/iam/intra-SCS-federation-setup-description-for-osism-doc-operations) explains the required steps in some detail.

### Prerequisites and Requirements

- Knowledge: Familiarity with Keycloak, OIDC federation, and basic SSL and web security principles is pivotal.
- Software: The core software component is the OpenID-Connect identity provider, configured to function optimally with OpenStack environments. While the SCS reference implementation focusses on Keycloak as IdP, with appropriate configuration adjustments any OAuth 2.0 compliant IdP should be suitable as an alternative. Each implemntation may have its own pros and cons.

### Features

- Horizon Web SSO
- OpenStack CLI use via the Device Authorization Grant

### Limitations

- Keystone currently still has limitations in its mapping engine, which are addressed by the SCS development team as we
  see possibilities and alignement with upstream OpenDev development plans. Automatically creating `ephemeral` users in
  their specific OpenStack domains, as specified in their OIDC token is one example, currently beeing worked on. Please
  check carefully if the technical results meet the security demands of your specific environment.
- Keystone currently has another limitation. This is limitation is also being addressed by the SCS development team aligned
  with upstream OpenDev development plans. The roles for federated users are stored on the database for the `ephemeral` users 
  created during a federated login. This also limits the ability to modify users roles from the identity source directly, as roles of
  the `epehemeral` users do not get cleaned up or updated based on changes in the claims contained in the  OpenID-Connect token.

### Current state and future Outlook

Currently SCS exemplifies deploying Keycloak on the management plane. This shall be moved to a Kubernetes based
management plane to improve scalability and architecture.

In the near future, the Container layer shall be able to make use of the IdP to allow federated users to access Kubernetes.
In the mid term, workloads on Kubernetes shall be able to make use of OAuth tokens to access resources on the IaaS layer.
