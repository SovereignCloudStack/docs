# Domain Manager setup and usage

> **NOTE**  
> The following documentation refers to a standard that is still in draft state.
> It is not meant for productive use yet but CSPs are encouraged to test-drive and provide feedback!

## Preface

SCS defines the **Domain Manager** standard, introducing a special role to the OpenStack Keystone identity manager.
This role offers a properly domain-scoped permission set to manage users, groups, projects and role assignments within a domain.
Its intended use case is to offer extensive identity management self-service capabilities to customers mapped to a domain.

This guide will explain setup, configuration and usage of the Domain Manager standard.

### Warning regarding the exposure of domain names

Due to architectural limitations currently existing in OpenStack Keystone, assigning the Domain Manager role to users will **enable them to see the IDs and names of all existing domains**.
This includes domains other than their own, meaning that other tenant's identities might be exposed depending on the relation between them and the name of their domain.
CSPs aiming to appoint Domain Manager users must be aware of this limitation and should exclusively use either anonymized or pseudonymized domain names across the whole infrastructure.
If this is not feasible for the CSP, they may opt to refrain from making use of the Domain Manager functionality at all, i.e. never assign this role to customer users.

## Infrastructure configuration

### Keystone API policy adjustments

TODO

### Keystone role creation

TODO

## Administrative operation

### Registering domains

TODO

### Assigning the Domain Manager role

TODO

### Revoking the Domain Manager role

TODO

## Domain Manager operation

### Managing users within a domain

TODO

### Managing projects within a domain

TODO

### Managing groups within a domain

TODO

### Managing role assignments within a domain

TODO

