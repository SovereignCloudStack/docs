# Best Practise: How to configure and use security groups

Security groups in OpenStack are part of the network security mechanisms provided for the users.
They resemble sets of simple firewall rules allowing specific network traffic at a Port of a VM that connects it to a network.
The rules allow specific network port numbers and protocols while also differentiating between ingress and egress directions.
Usually security groups are assigned to the Port(s) when a VM is created, but assignments can also be changed at runtime later on.
Multiple security groups can be assigned to a VM or Port simultaneously and in such case they will be combined as the union of all their rules.

:::caution

Security groups are mutable resources.
Their rules can be adjusted at any time after creation.
**Changing the rules of a security group will immediately apply the changes to all Ports or VMs it is assigned to.**
It is advisable to always review resources which use a security group before making changes to it.

:::

## How to create security groups

Security groups are managed within a project.
So every project will have a different set of security groups.
They can be added dynamically to each VM, during their creation or afterwards.
Additionally, they may also be removed from VMs at any point.

Every project has its own default security group, which rules can be edited.
Additionally other security groups can be added until the project's quota is exhausted.
To add a security group, use the following command:

```bash
openstack security group create $SECURITY_GROUP
```

Within every security group rules can be added up unto a defined maximum of rules, that usually is about 100.
Rules can be added to security groups with the following command:

```bash
openstack security group rule create [...] $SECURITY_GROUP
```

To delete rules from a security group, the rule id has to be used.
It is listed in the details of the rules section of the security group.

```bash
openstack security group rule delete $RULE_ID
```

### Default security group

Unless specified otherwise, the default security group is assigned to all VMs or Ports at creation.
To use any other than the default security group at creation it is necessary to specify the desired security group(s) during the creation process.

To review which rules are defined in a security group, the following command can be used:

```bash
openstack security group show default
```

### Recommended security groups

While projects can use very different aspects in security group rules and thus the security groups will always differ between projects, there are some security groups that are widely used.
Through the nature of security groups being seen as a set of rules that can be combined, having some basic security groups that allow basic protocols is a commonly used setup.
This section will demonstrate how to create some security groups for commonly used protocols and ports.

1. A security groups, that allows incoming SSH traffic:

```bash
openstack security group create ssh
openstack security group rule create --ingress --protocol tcp --dst-port 22 ssh
```

1. A security group, that allows incoming HTTP requests:

```bash
openstack security group create http
openstack security group rule create --ingress --protocol tcp --dst-port 80 http
```

1. A security group, that allows incoming HTTPS requests:

```bash
openstack security group create https
openstack security group rule create --ingress --protocol tcp --dst-port 443 https
```

1. A security group, that allows incoming ICMP requests:

```bash
openstack security group create icmp
openstack security group rule create --protocol icmp icmp
```

## How to use security groups

:::info

Security groups can be assigned to multiple resources simultaneously (such as VMs or Ports).
This means that security groups are reusable and don't need to be recreated for each applicable resource individually.

:::

Usually, initial security groups are added at the time of the creation of a VM.
During creation, multiple security groups can also be added at the same time by repeating the `--security-group` argument:

```bash
openstack server create [...] --security-group $SECURITY_GROUP_1 --security-group $SECURITY_GROUP_2 $SERVER_NAME
```

To add a security group to an existing VM, the following command can be used:

```bash
openstack server add security group $SERVER_NAME $SECURITY_GROUP
```

To remove a security group from a VM, the following command can be used:

```bash
openstack server remove security group $SERVER_NAME $SECURITY_GROUP
```
