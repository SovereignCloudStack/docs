# Domain Manager setup and usage

## Preface

SCS defines the **Domain Manager** standard, introducing a special persona to the OpenStack Keystone identity manager.
This persona offers a properly domain-scoped permission set to manage users, groups, projects and role assignments within a domain.
Its intended use case is to offer extensive identity management self-service capabilities to tenants mapped to a domain.

This guide will explain setup, configuration and usage of the SCS Domain Manager standard.

:::info

The Domain Manager functionality, formerly exclusive to the corresponding SCS standard, will be natively integrated into OpenStack starting with release 2024.2 ("Dalmatian").
When using an OpenStack release equal to 2024.2 or later, you can omit the instructions for Keystone API policy adjustments.

:::

## Infrastructure configuration

An initial infrastructure configuration of the Domain Manager persona must be completed before it can be used.
This includes adjusting the Keystone API policy configuration and the registration of the `manager` role.

The following sections describe the configuration to be implemented on the infrastructure-level.
This requires infrastructure access and OpenStack admin rights.
For tasks marked with "\[Initial\]" the described procedure only has to happen once initially.
For tasks marked with "\[Runtime\]" the described procedure may be repeated later on to make adjustments.

### \[Initial\] Keystone API policy adjustments

First, incorporate the Keystone API policy definitions as described in the SCS Domain Manager standard.
This is usually done in "`/etc/keystone/policy.yaml`" of the Keystone API service.
Otherwise, an entry called "`policy_file`" under the "`[oslo_policy]`" section of "`/etc/keystone/keystone.conf`" might exist that points to a different policy file path.
In such case, adjust or create the file at the specified path.

When incorporating the policy definitions from the standard make sure to properly merge it with existing policy definitions, if any exist.
Also choose the definition of manageable roles in the "`is_domain_managed_role`" rule of the policy carefully according to your requirements and environment.
See the standard for more details on this rule.

Depending on the deployment method used, the adjustments may also need to be persisted in the corresponding infrastructure management solution, such as Ansible.

### \[Initial\] Keystone role creation

The role `manager` has to exist in Keystone.
If the role does not exist, it needs to be created in Keystone once.
This can be done with the OpenStackClient using the following command:

```bash
openstack role create manager
```

### \[Runtime\] Domain Manager managed roles adjustment

The list of roles that a Domain Manager can assign within a domain is configured using the "`is_domain_managed_role`" rule of the policy definitions.
The SCS Domain Manager standard allows flexibility in defining the set of roles a Domain Manager may assign and revoke within a domain and enables adjustments at runtime[^1].

The set of roles can be adjusted independently from the rest of the policy by changing only the "`is_domain_managed_role`" line it Keystone's API policy file.
Changes will apply to existing and future Domain Manager users.
This means that changes can be implemented at runtime[^1].

The following example entry adjusts the rule to allow both `member` and `reader` roles to be managed by Domain Managers:

```yaml
'is_domain_managed_role': "'member':%(target.role.name)s or 'reader':%(target.role.name)s"
```

Refer to the SCS Domain Manager standard for more information.

[^1]:
    "at runtime" in this context means that the configuration may be changed repeatedly after the initial configuration of Keystone and take effect immediately.
    Depending on the infrastructure management solution and high-availability configuration the described adjustments may or may not require a restart of the Keystone API service or lead to a downtime of the service.

## Administrative operation

The following sections describe actions available to CSP operators that possess the `admin` role.

For each tenant for which a self-service area (i.e. a domain) is to be established, a domain should be created before creating any users, projects or groups for this tenant:

```bash
openstack domain create $DOMAIN
```

Any creation of users, projects or group for a tenant should happen strictly within the tenant's domain by passing the "`--domain`" flag to the corresponding creation commands, regardless of whether the commands are executed by an administrator or a Domain Manager.
See the [Domain Manager operation](#domain-manager-operation) section further down for reference.

### Creating a Domain Manager user

:::info

Creating the first Domain Manager users for a domain is an action reserved for CSP administrators.
Depending on whether the `manager` role has been approved as a domain-managed role in the policy configuration by the CSP, Domain Manager users may be able to appoint further Domain Managers within the domain on their own later on.

:::

First, create the user for the Domain Manager.
You may create the Domain Manager user either directly in the target tenant's domain or in a different domain.
The domain a Domain Manager will effectively be able to manage solely depends on where its role assignment of the `manager` role is scoped, not the domain the Domain Manager user was originally created in.

```bash
openstack user create --domain $MANAGER_DOMAIN $USER_NAME
```

:::note

`$MANAGER_DOMAIN` can be the same as the tenant domain `$DOMAIN` or an entirely different one, depending on the desired origin domain of the user.
In the following sections `$DOMAIN` will denote the tenant domain that the user is intended to manage as the Domain Manager persona.

:::

Next, assign the `manager` role in a domain-scoped fashion to the tenant domain:

```bash
openstack role add --user $USER_NAME --domain $DOMAIN manager
```

### Assigning the Domain Manager role to an existing user

```bash
openstack role add --user $USER_NAME --domain $DOMAIN manager
```

### Revoking the Domain Manager role

In case the `manager` role is to be revoked from an existing Domain Manager user, the following command can be used:

```bash
openstack role remove --user $USER_NAME --domain $DOMAIN manager
```

## Domain Manager operation

The following sections describe actions available to Domain Managers that possess the `manager` role.

### Managing users within a domain

Creating a user within a domain:

```bash
openstack user create --domain $DOMAIN $USER_NAME
```

:::note

The explicit domain-scoping is only required for the creation command, any other user-centric commands like "`user set`" or "`user delete`" do not require the "`--domain`" flag and are automatically scoped to the domain for Domain Managers.

:::

### Managing projects within a domain

Creating a project within a domain:

```bash
openstack project create --domain $DOMAIN $PROJECT_NAME
```

:::note

The explicit domain-scoping is only required for the creation command, any other project-centric commands like "`project set`" or "`project delete`" do not require the "`--domain`" flag and are automatically scoped to the domain for Domain Managers.

:::

#### Deleting projects

Note that before deleting projects, make sure that all cloud resources (servers, volumes etc.) belonging to that project have been removed beforehand.
Otherwise such resources might become orphaned and inaccessible without involving the CSP.

### Managing groups within a domain

Creating a group within a domain:

```bash
openstack group create --domain $DOMAIN $GROUP_NAME
```

:::note

The explicit domain-scoping is only required for the creation command, any other group-centric commands like "`group set`" or "`group delete`" do not require the "`--domain`" flag and are automatically scoped to the domain for Domain Managers.

:::

#### Managing group membership

Adding a user to a group:

```bash
openstack group add user $GROUP $USER
```

Removing a user from a group:

```bash
openstack group remove user $GROUP $USER
```

### Managing role assignments within a domain

Role assignments managed by a Domain Manager work as usual with the exception that the roles that can be assigned and revoked are limited to a defined set which is explicitly approved for Domain Managers by the CSP.
This may or may not include the `manager` role itself, meaning that Domain Managers may either be able to appoint other Domain Managers by themselves or have to ask the CSP to do so.

#### Managing user role assignments

Assigning a role to a user within a project:

```bash
openstack role add --project $PROJECT --user $USER $ROLE
```

Assigning a role to a user domain-wide:

```bash
openstack role add --domain $DOMAIN --user $USER $ROLE
```

Revoking a project-level role assignment from a user:

```bash
openstack role remove --project $PROJECT --user $USER $ROLE
```

Revoking a domain-wide role assignment from a user:

```bash
openstack role remove --domain $DOMAIN --user $USER $ROLE
```

#### Managing group role assignments

Assigning a role to a group within a project:

```bash
openstack role add --project $PROJECT --group $GROUP $ROLE
```

Assigning a role to a group domain-wide:

```bash
openstack role add --domain $DOMAIN --group $GROUP $ROLE
```

Revoking a project-level role assignment from a group:

```bash
openstack role remove --project $PROJECT --group $GROUP $ROLE
```

Revoking a domain-wide role assignment from a group:

```bash
openstack role remove --domain $DOMAIN --group $GROUP $ROLE
```
