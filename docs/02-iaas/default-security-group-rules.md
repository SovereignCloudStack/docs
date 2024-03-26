# Guide: How to handle default Security Group Rules

Security Groups in OpenStack are part of the network security mechanisms and resemble sets of firewall rules.
Every newly created Security Group may already have a few rules applied to it.
Those rules are managed under the `default Security Group Rules` endpoint of OpenStack and they can be configured by an administrator.

## How to comply to the standard for default Security Group Rules

The standard for default Security Group Rules does not allow any ingress traffic rules, but keeps egress rules as optional.

To test what default Security Group rules are currently in place this command can be used:

```bash
openstack default security group rule list
```

If there are any ingress rules in this set of rules, administrators MUST delete them with the following command:

```bash
openstack default security group rule delete $DEFAULT_SG_RULE_ID
```

Egress rules can also be deleted this way, if security guidelines specify it.

### Example of a conform set of default Security Group Rules

This is an exapmle how a table with default Security Group Rules may look like:

```bash
$ openstack default security group rule list
+--------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+--------------------------------+-------------------------------+
| ID                       | IP Protocol | Ethertype | IP Range  | Port Range | Direction | Remote Security Group | Remote Address Group | Used in default Security Group | Used in custom Security Group |
+--------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+--------------------------------+-------------------------------+
| 47b929fd-9b39-4f22-abc5- | None        | IPv6      | ::/0      |            | egress    | None                  | None                 | True                           | True                          |
| 7d4f64d10909             |             |           |           |            |           |                       |                      |                                |                               |
| 92a79600-5358-4fef-a390- | None        | IPv4      | 0.0.0.0/0 |            | egress    | None                  | None                 | True                           | True                          |
| 822665f46070             |             |           |           |            |           |                       |                      |                                |                               |
+--------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+--------------------------------+-------------------------------+
```

## Other possible configuration options with default Security Group Rules

:::tip

Creating default Security Group Rules works in a similiar way as creating rules for one Security Group.
The parameters that can be used to describe rules are mostly the same.

:::

The default security Group Rules can differ between default Security Groups and all other Security Groups - called `custom Security Group`.
So it is possible as an administrator to define rules only for one of those groups of Security Groups.
To only define a default rule for the default Security Groups, the following command can be used:


```bash
openstack default security group rule create --for-default-sg [...]
```

To only define a default rule for the custom Security Groups, the following command can be used:

```bash
openstack default security group rule create --for-custom-sg [...]
```

To define a default rule for both default and custom Security Groups both parameters have to be mentioned.

### Example of how to create a default Security Rule

This command will create a default rule to allow all egress traffic for both default an custom security Groups:

```bash
openstack default security group rule create --egress --ethertype IPv4 --for-default-sg --for-custom-sg
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| description             |                                      |
| direction               | egress                               |
| ether_type              | IPv4                                 |
| id                      | d6d8b677-fead-45fe-9bfd-ffcb4c51acfd |
| port_range_max          | None                                 |
| port_range_min          | None                                 |
| protocol                | None                                 |
| remote_address_group_id | None                                 |
| remote_group_id         | None                                 |
| remote_ip_prefix        | 0.0.0.0/0                            |
| used_in_default_sg      | True                                 |
| used_in_non_default_sg  | True                                 |
+-------------------------+--------------------------------------+
```
