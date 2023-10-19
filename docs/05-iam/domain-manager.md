# Domain Manager setup and usage

> **NOTE**  
> The following documentation refers to an SCS standard that is still in draft state.
> It is not meant for productive use yet but CSPs are encouraged to test-drive and provide feedback!

## Preface

SCS defines the **Domain Manager** standard, introducing a special role to the OpenStack Keystone identity manager.
This role offers a properly domain-scoped permission set to manage users, groups, projects and role assignments within a domain.
Its intended use case is to offer extensive identity management self-service capabilities to customers mapped to a domain.

This guide will explain setup, configuration and usage of the SCS Domain Manager standard.

### Warning regarding the exposure of domain names

Due to architectural limitations currently existing in OpenStack Keystone, assigning the Domain Manager role to users will **enable them to see the IDs and names of all existing domains**.
This includes domains other than their own, meaning that other tenant's identities might be exposed depending on the relation between them and the name of their domain.
CSPs aiming to appoint Domain Manager users must be aware of this limitation and should exclusively **use pseudonymized domain names across the whole infrastructure**.
If this is not feasible for the CSP, they may opt to refrain from making use of the Domain Manager functionality at all, i.e. never assign this role to customer users.

## Infrastructure configuration

An initial infrastructure configuration of the Domain Manager role must be completed before it can be used.
This includes adjusting the Keystone API policy configuration and registration of the role.

The following sections describe the configuration to be implemented on the infrastructure-level.
This requires infrastructure access and OpenStack admin rights.
For tasks marked with "(Initial)" the described procedure only has to happen once initially.
For tasks marked with "(Runtime)" the described procedure may be repeated later on to make adjustments.

### (Initial) Keystone API policy adjustments

First, incorporate the Keystone API policy definitions as described in the SCS Domain Manager standard.
This is usually done in "`/etc/keystone/policy.yaml`" of the Keystone API service.
Otherwise, an entry called "`policy_file`" under the "`[oslo_policy]`" section of "`/etc/keystone/keystone.conf`" might exist that points to a different policy file path.
In such case, adjust or create the file at the specified path.

When incorporating the policy definitions from the standard make sure to properly merge it with existing policy definitions, if any exist.
Also choose the definition of manageable roles in the "`is_domain_managed_role`" rule of the policy carefully according to your requirements and environment.
See the standard for more details on this rule.

Depending on the deployment method used, the adjustments may also need to be persisted in the corresponding infrastructure management solution, such as Ansible.

### (Initial) Keystone role creation

The role "`domain-manager`" has to be created in Keystone once.
This can be done with the OpenStackClient using the following command:

```
openstack role create domain-manager
```

### (Runtime) Domain Manager managed role adjustment

The list of roles that a Domain Manager can assign within a domain is configured using the "`is_domain_managed_role`" rule of the policy definitions.
The SCS Domain Manager standard allows flexibility in defining the set of roles a Domain Manager may assign and revoke whithin a domain and enables adjustments at runtime[^1].

The set of roles can be adjusted individually by changing the "`is_domain_managed_role`" line it Keystone's API policy file.
Changes will apply to existing and future Domain Manager users.
This means that changes can be implemented at runtime[^1].

The following example entry adjusts the rule to allow both "`member`" and "`reader`" roles to be managed by Domain Managers:

```yaml
"is_domain_managed_role": "'member':%(target.role.name)s or 'reader':%(target.role.name)s"
```

Refer to the SCS Domain Manager standard for more information.

[^1]: "at runtime" in this context means that the configuration may be changed repeatedly after the initial configuration of Keystone and take effect immediately.
Depending on the infrastructure management solution and high-availability configuration the described adjustments may or may not require a restart of the Keystone API service or lead to a downtime of the service.

## Administrative operation

The following sections describe actions available to CSP operators that possess the "`admin`" role.

### Creating domains

> **NOTE**  
> It is highly recommended to use pseudonymized domain names when creating domains, since Domain Managers will be able to see the names of all existing domains.

For each tenant for which a self-service area (i.e. a domain) is to be established, a domain should be created before creating any users, projects or groups for this tenant:

```
openstack domain create $DOMAIN
```

Any creation of users, projects or group for a tenant should happen strictly within the tenant's domain by passing the "`--domain`" flag to the corresponding creation commands, regardless of whether the commands are executed by an administrator or a Domain Manager.
See the Domain Manager operation section further down for reference.

### Creating a Domain Manager user

> **NOTE**  
> Creating the first Domain Manager users for a domain is an action reserved for CSP administrators.
> Depending on whether the `domain-manager` role has been approved as a domain-managed role in the policy configuration by the CSP, Domain Manager users may be able to appoint further Domain Managers within the domain on their own later on.

First, create the user for the Domain Manager:

```
openstack user create --domain $DOMAIN $USER_NAME
```

Next, assign the `domain-manager` role in a domain-scoped fashion:

```
openstack role add --user $USER_NAME --domain $DOMAIN domain-manager
```

### Assigning the Domain Manager role to an existing user

```
openstack role add --user $USER_NAME --domain $DOMAIN domain-manager
```

### Revoking the Domain Manager role

In case the `domain-manager` role is to be revoked from an existing Domain Manager user, the following command can be used:

```
openstack role remove --user $USER_NAME --domain $DOMAIN domain-manager
```

## Domain Manager operation

The following sections describe actions available to Domain Manager users that possess the "`domain-manager`" role.

### Managing users within a domain

Creating a user within a domain:

```
openstack user create --domain $DOMAIN $USER_NAME
```

Note: the explicit domain-scoping is only required for the creation command, any other user-centric commands like "`user set`" or "`user delete`" do not require the "`--domain`" flag and are automatically scoped to the domain for Domain Managers.

### Managing projects within a domain

Creating a project within a domain:

```
openstack project create --domain $DOMAIN $PROJECT_NAME
```

Note: the explicit domain-scoping is only required for the creation command, any other project-centric commands like "`project set`" or "`project delete`" do not require the "`--domain`" flag and are automatically scoped to the domain for Domain Managers.

### Managing groups within a domain

Creating a group within a domain:

```
openstack group create --domain $DOMAIN $GROUP_NAME
```

Note: the explicit domain-scoping is only required for the creation command, any other group-centric commands like "`group set`" or "`group delete`" do not require the "`--domain`" flag and are automatically scoped to the domain for Domain Managers.

#### Managing group membership

Adding a user to a group:

```
openstack group add user $GROUP $USER
```

Removing a user from a group:

```
openstack group remove user $GROUP $USER
```

### Managing role assignments within a domain

Role assignments managed by a Domain Manager work as usual with the exception that the roles that can be assigned and revoked are limited to a defined set which is explicitly approved for Domain Managers by the CSP.
This may or may not include the `domain-manager` role itself, meaning that Domain Managers may either appoint other Domain Managers by themselves or have to ask the CSP to do so.

#### Managing user role assignments

Assigning a role to a user within a project:

```
openstack role add --project $PROJECT --user $USER $ROLE
```

Assigning a role to a user domain-wide:

```
openstack role add --domain $DOMAIN --user $USER $ROLE
```

Revoking a project-level role assignment from a user:

```
openstack role remove --project $PROJECT --user $USER $ROLE
```

Revoking a domain-wide role assignment from a user:

```
openstack role remove --domain $DOMAIN --user $USER $ROLE
```

#### Managing group role assignments

Assigning a role to a group within a project:

```
openstack role add --project $PROJECT --group $GROUP $ROLE
```

Assigning a role to a group domain-wide:

```
openstack role add --domain $DOMAIN --group $GROUP $ROLE
```

Revoking a project-level role assignment from a group:

```
openstack role remove --project $PROJECT --group $GROUP $ROLE
```

Revoking a domain-wide role assignment from a group:

```
openstack role remove --domain $DOMAIN --group $GROUP $ROLE
```
