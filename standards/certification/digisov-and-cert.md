# Digital Sovereignty and SCS certification

## The taxonomy of digital sovereignty

As published in [DuD](https://rdcu.be/cWdBJ) (German, English version in
[the cloud report](https://the-report.cloud/why-digital-sovereignty-is-more-than-mere-legal-compliance/))
and being summarized nicely in a [cloudahead article](https://www.cloudahead.de/der-freiheitskampf-des-sovereign-cloud-stacks),
we differentiate between several levels of digital sovereignty.
We'll skip stage 0, introduced by Gregor Schuhmacher in his description, which
specifies using a cloud at all as the pre-step to be taken. This has relevance,
as some companies continue to call solutions that are not on-demand, not
self-service API driven, not metered
(see [NIST definition of cloud](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf))
to be (private) clouds. We talk about real clouds, where deployment of infrastructure
is API-driven, unlocking DevOps teams productivity.

The levels as seen by the SCS movement are:

1. Control over data and data sharing and ability to fulfill regulatory requirements (GDPR)
2. Capability to chose between *highly compatible* operators, this way enabling a provider
   switch or using several providers in a federated fashion. This also includes the
   possibility to run your infrastructure in a *highly compatible* manner.
3. Capability to influence and shape the infrastructure, enabling innovation at the
   infrastructure layer.
4. Transparency over operational aspects of running infrastructure, this way supporting
   to overcome a skill gap to being able to operate infrastructure in a highly reliable
   manner.

These aspects of sovereignty drive the work from the SCS team.

Level number 1 is sometimes referred to as "data sovereignty". Achieving it does require
cloud infrastructure and cloud operations that can not be interfered with by actors that
are outside of the respective jurisdiction. For Europeans that need to observe GDPR, this
excludes using US clouds for personally identifiable information, expecting that the
adequacy decisions for the US do not fully address the risks. The SCS project does not
have deep legal expertise and refers to the work from [noyb](https://noyb.eu/)
and [ENISA](https://www.enisa.europa.eu/) here.

In order to achieve level 2,
the SCS community has worked on standards that define the APIs and the infrastructure
behavior, so application developers and application operators can deploy the same application
using the same automation and rely on the same infrastructure behavior to operate the
application in a resilient way. The standards allow for switching providers or to use
several providers in a federated way. Operating own infrastructure according to the same
standards is also possible, allowing for hybrid cloud setups without technical barriers.

Level 3 drives the work on a comprehensive openly developed open source software stack,
allowing operators to use, study, change and redistribute the software according to the
[Four Freedoms](https://en.wikipedia.org/wiki/The_Free_Software_Definition) of free software. We are requiring
a complete stack that uses [OSI](https://opensource.org/)-approved open source licenses
as to ensure that users have the four freedoms, the right to use, study, modify, (re)distribute
the software that drives the cloud stack. To ensure that this does not require extensive
and expensive forking, we further require the [Four Opens](https://openinfra.dev/four-opens/)
of the Open Infra Foundation here. The software can be used to provide cloud services
for others (public cloud) or just for your own community (community cloud) or
internal (private cloud) needs.

Level 4 addresses the skills and transparency aspects. Operating highly dynamic distributed
systems in a reliable manner requires knowledge and experience -- engineers with these skills
are scarce. To address this, the SCS team networks operations staff from providers and helps
to share and distill common knowledge that help everyone to be more successful. SCS has
thus been driving the [Open Operations](https://openoperations.org) initiative.

Levels 2 and 3 are sometimes related to the term "technological sovereignty", indicating
that the ability to control and shape the technology.

## The SCS certification levels

Corresponding to the levels of digital sovereignty in the SCS taxonomy, SCS defines 
SCS certification levels

1. (Defined outside of the SCS scope)
2. SCS-compatible
3. SCS-open
4. SCS-sovereign

### Why no SCS certification for GDPR?

SCS significantly lowers the bar to offer real cloud services. These can be used internally
(private cloud) or to offer services for your community, your region or country. The vision
is to have a network of providers. We expect most if not all of them to be operated in ways
that fulfill the European GDPR regulation; it is also possible to operate clouds that fulfill
special regulation, e.g. in the banking or insurance sector.

SCS is not in a position to judge this and thus defines no own label / certificate to
vouch for regulatory compliance. We typically refer to the ENISA for GDPR considerations
and also recommend to take the Gaia-X labels into account here.

## Status of SCS certification for cloud operators

As of September 2024, we have not yet formalized the requirements for SCS-open and SCS-sovereign
certification.

The technical compatibility validation corresponding to the SCS-compatible certification does
exist since more than a year. There are certificates for two layers of the SCS architecture
stack:
* The virtualization layer: SCS-compatible IaaS
* The container layer: SCS-compatible KaaS

For each of these, technical tests are being run to test service offerings for compliance.
The standards and the corresponding tests are versioned. The SCS-compatible certification
for a specific layer (currently IaaS or KaaS) and version is called a *certification scope*.
Please see [Scopes and Versions](scopes-versions.md) for detailed definitions.

As of September 2024, the latest SCS-compatible certification scope on the IaaS layer is
SCS-compatible IaaS v4. For November 2024, SCS-compatible IaaS v5 and the first Kaas
scope SCS-compatible KaaS v1 are planned.

## Certification for non-operators

Software can deliver infrastructure components for operators to provide SCS-compatible
IaaS or KaaS; it is planned that infrastructure software can also receive SCS certification.

Likewise, applications can be developed in a way that they will work without any changes on
all SCS-compatible IaaS or on all SCS-compatible KaaS (or may require both). It is planned
that such software can also be certified.

Implementation partners from the SCS ecosystem may support operators (CSPs) to build
and operate SCS-compatible infrastructure. A certification program that certifies the
skills and experience of such partners is planned as well.

