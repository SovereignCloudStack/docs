---
slug: introducing_new_blog
title: Introducing A New Blog Site On Our Docs Page
authors: [garloff]
tags: [docusaurus, scs, blog]
---

## Evolution of SCS activities

Previously, we had [a project web site](https://scs.community/) that covered many
areas of work that was done in the SCS project until it was successfully completed
at the end of 2024. It covered the standardization work as well as the development
of the reference implementation and also had a vast collection of links and technical
content, most of which was related to the reference implementation. For newcomers,
it was somewhat hard to distill the various aspects and goals.

With the end of the funded project, we split the activities into different organizations
with distinct goals:

1. The [Forum SCS Standards](https://sovereigncloudstack.org/en/about-scs/network/) is
   responsible for governing the standardization process. While it pull significant input
   from the various software projects that belong to the SCS universe, it is neutral towards
   them beyond the preference for standards compliance. This reflects that there can and
   ideally should be several implementations for a standard.
   The [new website](https://sovereigncloudstack.org/) focuses on the standardization.
2. The SCS community consists of individuals and organizations that develop, support,
   test, use, or otherwise contribute to the software and standards that implement and
   codify SCS. The community elects a [project board](https://docs.scs.community/standards/scs-0005-v2-project-governance)
   that organizes and motivates contributions.

## Blog articles

Blog articles with technical content relating to a specific implementation (or a set
of implmentations) are not a great fit for Forum's web site.
The good news is that the SCS project also has a rich
[Documentation site](https://docs.scs.community/) which is architected in a way that
it assembles documentation from various places. Unlike the Forum, it does not need
to prioritize neutrality as top priority, but benefits and prefers those projects
that contribute useful content to it.

We have decided to use docusaurus' blog feature to publish blog articles here.
