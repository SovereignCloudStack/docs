"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65770],{49136:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scs-0113-v1-security-groups-decision-record","title":"Security Groups Decision Record","description":"Introduction","source":"@site/standards/scs-0113-v1-security-groups-decision-record.md","sourceDirName":".","slug":"/scs-0113-v1-security-groups-decision-record","permalink":"/standards/scs-0113-v1-security-groups-decision-record","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Security Groups Decision Record","type":"Decision Record","status":"Draft","track":"IaaS"},"sidebar":"standards","previous":{"title":"scs-0113: Security Groups Decision Record","permalink":"/standards/iaas/scs-0113"},"next":{"title":"scs-0114: SCS Volume Types","permalink":"/standards/iaas/scs-0114"}}');var n=t(74848),o=t(28453);const i={title:"Security Groups Decision Record",type:"Decision Record",status:"Draft",track:"IaaS"},a=void 0,c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Context",id:"context",level:2},{value:"Reasons for and against a standard for security groups",id:"reasons-for-and-against-a-standard-for-security-groups",level:3},{value:"Technical limitations",id:"technical-limitations",level:3},{value:"Option 0: Pre-Requirement: default rules for the (default) security group",id:"option-0-pre-requirement-default-rules-for-the-default-security-group",level:3},{value:"Option 1: operator usage of network rbac",id:"option-1-operator-usage-of-network-rbac",level:3},{value:"Option 2: stay project-scoped",id:"option-2-stay-project-scoped",level:3},{value:"Option 3: security-focused guide",id:"option-3-security-focused-guide",level:3},{value:"Decisions",id:"decisions",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Related Documents",id:"related-documents",level:2}];function u(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(s.p,{children:"Security Groups in IaaS (OpenStack) are sets of ip table rules, that are applied to ports which connect a virtual machine to a network.\nIn contrast to other resources like flavors or volume types that are always publicly accessible, or images that can be both public and private, security groups are always bound to the project level.\nThat creates some difficulties for a possible standard of Security Groups, which are discussed in this document."}),"\n",(0,n.jsx)(s.h2,{id:"terminology",children:"Terminology"}),"\n",(0,n.jsx)(s.p,{children:"Security Group\nA set of iptables rules that is applied to ports connecting a virtual machine and a network."}),"\n",(0,n.jsx)(s.p,{children:"Security Group Rule (abbr. Rule)\nThis references a single rule within a security group."}),"\n",(0,n.jsx)(s.p,{children:"RBAC\nRole Based Access Control used for policies and alike."}),"\n",(0,n.jsx)(s.p,{children:"network rbac / neutron rbac\nThese access controls will let administrators and users share neutron related resources with other projects."}),"\n",(0,n.jsx)(s.p,{children:"admin\nThe most powerful role in OpenStack. Only given to some Operators of the Cloud Infrastructure."}),"\n",(0,n.jsx)(s.h2,{id:"context",children:"Context"}),"\n",(0,n.jsxs)(s.p,{children:["While creating a virtual machine and also later on, one or more security groups can be added to it.\nWhen there is no security group specified the default security group will always be added.\nLike every other security group, the default group is also project bound.\nThat means, it can be edited as required by project members.\nBy design of OpenStack and when not changed, default rules in the default security group block all incoming traffic except from the same Security Group and only allow outgoing traffic",(0,n.jsx)(s.sup,{children:(0,n.jsx)(s.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"reasons-for-and-against-a-standard-for-security-groups",children:"Reasons for and against a standard for security groups"}),"\n",(0,n.jsx)(s.p,{children:"Considering having most likely similar security groups within different projects, it might make sense to standardize a few security groups for often used cases like ssh, http, https and maybe icmp.\nWhat speaks for standardizing a certain set of security groups:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Having a set of correctly configured security groups could reduce misconfiguration from users"}),"\n",(0,n.jsx)(s.li,{children:"Re-using correctly configured security groups saves time for users"}),"\n",(0,n.jsx)(s.li,{children:"Auditing security groups would be way easier for operators when helping customers"}),"\n",(0,n.jsx)(s.li,{children:"The configuration for the Security Groups can be done by networking experts, which may result in a higher security level as when users without expertise configure them"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"What are the downsides of having a set of standardized security groups:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"A bug or misconfiguration is a single point of failure for ALL customers"}),"\n",(0,n.jsx)(s.li,{children:"Users might apply the wrong security group to their port or VM because they lack the domain knowledge, unknowingly opening themselves to attacks"}),"\n",(0,n.jsx)(s.li,{children:"Users will not inspect such default security groups: this may result in applying a wrong group and opening traffic too much"}),"\n",(0,n.jsx)(s.li,{children:"the central authority managing the groups does not necessarily know the use case of the user, the user/operator must know best what kind of security their workload needs. What is a necessary port for 99% of deployments might be a security disaster for my deployment"}),"\n",(0,n.jsx)(s.li,{children:"Providing default groups could have the effect of stopping customers to think about their specific security needs and instead just copying default groups and or rules"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This leads to a conclusion, that a set of default security groups is only more valuable than harmful for users:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"when the rules in those groups are configured correctly"}),"\n",(0,n.jsx)(s.li,{children:"and when the users still have to think about their network security on their own for each VM they start"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"technical-limitations",children:"Technical limitations"}),"\n",(0,n.jsx)(s.p,{children:"As security groups are project bound and there is no native way to them to be shared, we are left with three options:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["To use another endpoint ",(0,n.jsx)(s.code,{children:"network rbac"})," to share security groups among different projects."]}),"\n",(0,n.jsx)(s.li,{children:"To adhere to the project scope of security groups and only give documentation about recommended security groups to users."}),"\n",(0,n.jsx)(s.li,{children:"To only add a tutorial on how to create your own security group in general, how to detect what kind of network permissions your project needs for most frequent (linux) workloads and how to craft your own security groups in a secure way."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"option-0-pre-requirement-default-rules-for-the-default-security-group",children:"Option 0: Pre-Requirement: default rules for the (default) security group"}),"\n",(0,n.jsx)(s.p,{children:"For every project that is created there will also be a project-specific default security group created.\nThe default rules for the default groups and all other newly created groups can be looked up like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"stack@devstack:~/devstack$ openstack default security group rule list\n+------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+--------------------------------+-------------------------------+\n| ID                     | IP Protocol | Ethertype | IP Range  | Port Range | Direction | Remote Security Group | Remote Address Group | Used in default Security Group | Used in custom Security Group |\n+------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+--------------------------------+-------------------------------+\n| 47b929fd-9b39-4f22-    | None        | IPv6      | ::/0      |            | egress    | None                  | None                 | True                           | True                          |\n| abc5-7d4f64d10909      |             |           |           |            |           |                       |                      |                                |                               |\n| 6ace51bb-5258-45ab-    | None        | IPv6      | ::/0      |            | ingress   | PARENT                | None                 | True                           | False                         |\n| 9ba9-1efbebfb086b      |             |           |           |            |           |                       |                      |                                |                               |\n| 92a79600-5358-4fef-    | None        | IPv4      | 0.0.0.0/0 |            | egress    | None                  | None                 | True                           | True                          |\n| a390-822665f46070      |             |           |           |            |           |                       |                      |                                |                               |\n| 997bb0c2-652e-4d1f-    | None        | IPv4      | 0.0.0.0/0 |            | ingress   | PARENT                | None                 | True                           | False                         |\n| b910-e12c89f88b44      |             |           |           |            |           |                       |                      |                                |                               |\n+------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+--------------------------------+-------------------------------+\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Those rules can be edited, which may pose a security risk for customers consuming the default security group.\nThis should be addressed as a pre-requirement ",(0,n.jsx)(s.a,{href:"https://github.com/SovereignCloudStack/standards/issues/521",children:"here"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"option-1-operator-usage-of-network-rbac",children:"Option 1: operator usage of network rbac"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"network rbac"})," endpoint",(0,n.jsx)(s.sup,{children:(0,n.jsx)(s.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," manages the possibility to share and access certain network-specific resources such as security groups.\nFor admins, it is possible to use this endpoint to share a security group with ALL projects within the cloud including ALL projects of ALL domains:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"stack@devstack:~/devstack$ openstack network rbac create --target-all-projects --action access_as_shared --type security_group group-for-everyone\n+-------------------+--------------------------------------+\n| Field             | Value                                |\n+-------------------+--------------------------------------+\n| action            | access_as_shared                     |\n| id                | 394d8e71-143f-4c5b-a72f-cd10af3222df |\n| object_id         | b6a3834a-f89c-47a9-9ed6-ca89e93701c4 |\n| object_type       | security_group                       |\n| project_id        | 15f2ab0eaa5b4372b759bde609e86224     |\n| target_project_id | *                                    |\n+-------------------+--------------------------------------+\n"})}),"\n",(0,n.jsx)(s.p,{children:"This would fulfill our goal to grant access to predefined security groups for all projects and all groups received as shared do not count into the projects quota for security groups.\nBut there are a few downsides to this:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"This should be strictly bound to the admin: no other user should be able to share security groups so to not confuse user."}),"\n",(0,n.jsxs)(s.li,{children:["The managing of those ",(0,n.jsx)(s.code,{children:"network rbac"})," objects can get out of hand pretty quickly, because there neither is an explicit name for such an object nor do the names of the shared objects appear:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"stack@devstack:~/devstack$ openstack network rbac list --long\n+-----------------------------+----------------+-----------------------------+--------------------+\n| ID                          | Object Type    | Object ID                   | Action             |\n+-----------------------------+----------------+-----------------------------+--------------------+\n| 97507e4c-7413-4d61-ab21-    | security_group | 110b1bea-f0e0-4fb7-9fc7-    | access_as_shared   |\n| 047fc23516dd                |                | cda1b6f927b0                |                    |\n| bc22a865-46f9-4cd2-80af-    | security_group | 5f22e42e-95dc-4c0a-8651-    | access_as_shared   |\n| 3c249ba0e010                |                | 57b1dfc8639f                |                    |\n| 2467806f-5428-4506-8e23-    | network        | 02ef8579-9917-4a01-893d-    | access_as_shared   |\n| f4690db04e01                |                | cb2f9f3d5f98                |                    |\n| ed40996e-218d-4daa-b222-    | network        | 73edb86b-d7ab-4db3-82b7-    | access_as_external |\n| f3c603a5b8a6                |                | 25fa8b012e40                |                    |\n| 45e0a707-af82-42a6-b93f-    | subnetpool     | cd7addd1-05d9-48a8-bc38-    | access_as_shared   |\n| efde18216f13                |                | 4a581354983f                |                    |\n| e514c2c8-65ac-4062-8b03-    | subnetpool     | ad1cc1ed-3261-4df2-8c73-    | access_as_shared   |\n| fe24f6fc4656                |                | c3dd72d59061                |                    |\n+-----------------------------+----------------+-----------------------------+--------------------+\nstack@devstack:~/devstack$ openstack network rbac show bc22a865-46f9-4cd2-80af-3c249ba0e010\n+-------------------+--------------------------------------+\n| Field             | Value                                |\n+-------------------+--------------------------------------+\n| action            | access_as_shared                     |\n| id                | bc22a865-46f9-4cd2-80af-3c249ba0e010 |\n| object_id         | 5f22e42e-95dc-4c0a-8651-57b1dfc8639f |\n| object_type       | security_group                       |\n| project_id        | 15f2ab0eaa5b4372b759bde609e86224     |\n| target_project_id | *                                    |\n+-------------------+--------------------------------------+\n"})}),"\n",(0,n.jsx)(s.p,{children:"The biggest downside: As soon as a security group is shared, everyone from every project, can edit the rules of this group."}),"\n",(0,n.jsx)(s.h3,{id:"option-2-stay-project-scoped",children:"Option 2: stay project-scoped"}),"\n",(0,n.jsx)(s.p,{children:"Using and adhering the project scope of the security groups has the consequence, that:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"either an admin has to set up security groups for each project"}),"\n",(0,n.jsx)(s.li,{children:"or the SCS project only provides a guide on how to set up and use some recommended security groups."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"As users are allowed to, will and should edit their security groups, there is no way to ensure, that a certain set of security groups with certain rules is always present in a project.\nSo packing an extra burden on admins is unreasonable.\nThe option to give a guide and recommend a few security groups however is a quite good option."}),"\n",(0,n.jsx)(s.h3,{id:"option-3-security-focused-guide",children:"Option 3: security-focused guide"}),"\n",(0,n.jsx)(s.p,{children:"Instead of providing users with a set of default groups or the knowledge about how to create default groups, there could be a guide created that focuses on the crafting of a security group in a secure way.\nThat would include identifying what kind of network permission a single VM needs and how to proceed after gathering all requirements of the customers workload."}),"\n",(0,n.jsx)(s.h2,{id:"decisions",children:"Decisions"}),"\n",(0,n.jsx)(s.p,{children:"The default Security Group Rules should be standardized as a pre-requirement (Option 0)."}),"\n",(0,n.jsxs)(s.p,{children:["Using the ",(0,n.jsx)(s.code,{children:"network rbac"})," endpoint (Option 1) would not solve the idea of having pre-defined and administrator audited Security Groups, because it is possible for any user to edit the rules of shared Security Groups.\nInstead, the project-scope of the Security Groups should by focused and a guide prepared, that gives insight about creating and using Security Groups with a few examples but with a clear security focus (Mix of Option 2 and 3)."]}),"\n",(0,n.jsx)(s.h2,{id:"consequences",children:"Consequences"}),"\n",(0,n.jsx)(s.p,{children:"Any CSP will have to follow the standard for the default Security Group Rules.\nThere are no consequences regarding Security Groups as it and users stay in full control and responsible for their own Security Groups"}),"\n",(0,n.jsx)(s.h2,{id:"related-documents",children:"Related Documents"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/SovereignCloudStack/standards/pull/525",children:"A PR to standardize default Security Group Rules"}),"\n",(0,n.jsx)(s.a,{href:"https://github.com/SovereignCloudStack/docs/pull/142",children:"A PR to a first draft for a guide for security groups"})]}),"\n","\n",(0,n.jsxs)(s.section,{"data-footnotes":!0,className:"footnotes",children:[(0,n.jsx)(s.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{id:"user-content-fn-1",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/openstack/neutron/blob/master/neutron/db/migration/alembic_migrations/versions/2023.2/expand/c33da356b165_security_group_default_rules.py",children:"Default Security Group Rules"})," ",(0,n.jsx)(s.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{id:"user-content-fn-2",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.openstack.org/neutron/latest/admin/config-rbac.html",children:"Neutron RBAC"})," ",(0,n.jsx)(s.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var r=t(96540);const n={},o=r.createContext(n);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);