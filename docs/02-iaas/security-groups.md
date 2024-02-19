# Best Practise: How to configure and use security groups

Security groups in OpenStack are part of the security mechanisms rpovided for the users.
They are grouping IP-table rules that then are used at the port connecting a VM to a network.
Usually security groups are assigned, when a VM is created, but they can also be assigned later on.
There can be multiple groups assigned to a VM or Port and they will act together as the union of all their rules.

## How to create security groups

Security groups are managed within a project.
So every project will have a different set of security groups.
They can be added dynamically to each VM, while creation or afterwards.

Every project has its own default security group, which rules can be edited.
Additionally other security groups can be added until the quota is fully used.
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

The default security group is used for all VMs and Ports to VMs, that are created when there was no security group explicitly assigned to them.
To use any but the default security group it is just necessary to mention them in the creation process.

To see, what rules are set in the security group, the following command can be used:

```bash
openstack security group show default
```

### Recommended security groups

While projects can use very different aspects in security group rules and thus the security groups will always differ between projects, there are some security groups that are widely used.
Through the nature of security groups being seen as a set of rules that can be brought together, having some basic security groups that allow basic protocols is a commonly used setup.
This section will show, how to create some of those groups.

1. A security groups, that allows incoming ssh traffic:

```bash
openstack security group create ssh
openstack security group rule create --ingress --protocol tcp --dst-port 22 ssh
```

2. A security group, that allows incoming http requests:

```bash
openstack security group create http
openstack security group rule create --ingress --protocol tcp --dst-port 80 http
```

3. A security group, that allows incoming https requests:

```bash
openstack security group create http
openstack security group rule create --ingress --protocol tcp --dst-port 443 https
```

3. A security group, that allows incoming icmp requests:

```bash
openstack security group create http
openstack security group rule create --protocol icmp icmp
```

## How to use security groups

Usually security groups are added at the time of the creation of a VM.
There can be multiple security groups added at the same time:

```bash
openstack server create [...] --security-group $SECURITY_GROUP_1 --security-group $SECURITY_GROUP_2 $SERVER_NAME
```

To add security groups to an already running VM, the following command can be used:

```bash
openstack server add security group $SERVER_NAME $SECURITY_GROUP 
```

To remove security groups from a VM, the following command can be used:

```bash
openstack server remove security group $SERVER_NAME $SECURITY_GROUP 
```
