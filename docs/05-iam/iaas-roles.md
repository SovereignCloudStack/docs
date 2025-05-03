# IaaS Roles

An SCS-compliant cloud offers the following roles on the Infrastructure as a Service (IaaS) layer:

| Role | Scope | Description |
|---|---|---|
| reader | All OpenStack APIs | Role with read-only access within authentication scope. |
| member | All OpenStack APIs | Role with read-write access within authentication scope. |
| manager | Identity API | Role with self-service capabilites for the Identity API in domain scope. |
| admin | All OpenStack APIs | Most privileged role, reserved for CSP personnel, to administer the OpenStack cloud |

:::info Role Inheritance

The OpenStack Identity API implements automatic role inheritance between admin, manager, member and reader roles where a role with higher privileges inherits all lesser roles automatically.

This means:

- `admin` inherits `manager`, `member` and `reader`
- `manager` inherits `member` and `reader`
- `member` inherits `reader`

:::

## Role Assignment

### Scopes & Targets

Roles can be assigned in different scopes and either to users or groups.
This leads to the following role assignment matrix:

| | User | Group |
|---|---|---|
| Project | single user, permissions in project | all users of group, permissions in project |
| Domain | single user, permissions in domain | all users of group, permissions in domain |
| System | single user, permissions in whole cloud | all users of group, permissions in whole cloud |

(rows are the scopes and columns are the role assignment target entities)

### Assignment Procedure

Roles are assigned to users or groups by administrative personnel.
In most cases, this is either:

- a cloud operator with the admin role, belonging to the provider
- a domain manager with the manager role in domain scope, belonging to the provider or a tenant

A domain manager can only assign and revoke roles within their own domain and is restricted to a specific subset of available roles to prevent privilege escalation.
