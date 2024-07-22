# Example setup configuration in SCS deployment explained

The following document explains the idea behind the example configuration is done.
The playbook creates a proxy realm used to connect with `Keystone`, a customer realm, the clients needed to connect the realms, the identity brokering for the customer realm, a login flow
to be able to use the `home-IdP-discovery` plugin to redirect to the correct customer realm and an example user.
SCS operators can find the playbook that creates the setup [here](https://github.com/osism/ansible-playbooks/blob/main/playbooks/infrastructure/keycloak-oidc-client-config.yml).

1. In the first place a proxy realm called `osism` on the example deployment. That realm will
   become the realm that will be conected to `Keystone`

2. A customer realm called `CustomerA` is created. On that realm a `OIDC` client is created to hook
   up the realm to the proxy realm. This is done via `Identity Brokering` in the proxy realm.

3. An `Identity provider` is configured in the `osism` realm, this is configured to be connected to
   the `CustomerA` realm. For that, a set of mappers are created, the default ones are a `hardcoded-attribute`
   that sets the domain where the user came from, and an `attribute-importer` mapper for the `openstack-default-project` that comes
   in the `OIDC` claim from the customer realm.

4. A new login flow has been created in the `osism` realm, this login flow is needed to use the `home-IdP-discovery` plugin.

5. Creation of an example user called `Alice`.
