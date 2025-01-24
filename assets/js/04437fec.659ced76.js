"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59075],{85646:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scs-0114-v1-volume-type-standard","title":"SCS Volume Types","description":"Introduction","source":"@site/standards/scs-0114-v1-volume-type-standard.md","sourceDirName":".","slug":"/scs-0114-v1-volume-type-standard","permalink":"/standards/scs-0114-v1-volume-type-standard","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SCS Volume Types","type":"Standard","status":"Stable","stabilized_at":"2024-11-13T00:00:00.000Z","track":"IaaS"},"sidebar":"standards","previous":{"title":"scs-0114: SCS Volume Types","permalink":"/standards/iaas/scs-0114"},"next":{"title":"scs-0115: Default Rules for Security Groups","permalink":"/standards/iaas/scs-0115"}}');var i=s(74848),o=s(28453);const a={title:"SCS Volume Types",type:"Standard",status:"Stable",stabilized_at:new Date("2024-11-13T00:00:00.000Z"),track:"IaaS"},r=void 0,d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Glossary",id:"glossary",level:3},{value:"Motivation",id:"motivation",level:2},{value:"Design Considerations",id:"design-considerations",level:2},{value:"Systematic Description of Volume Types",id:"systematic-description-of-volume-types",level:3},{value:"Standardized Aspects",id:"standardized-aspects",level:3},{value:"DEFAULT volume type",id:"default-volume-type",level:2},{value:"REQUIRED volume types",id:"required-volume-types",level:2},{value:"RECOMMENDED volume types",id:"recommended-volume-types",level:2},{value:"OPTIONAL volume types",id:"optional-volume-types",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Encryption",id:"encryption",level:3},{value:"Replication",id:"replication",level:3},{value:"Example",id:"example",level:3},{value:"Related Documents",id:"related-documents",level:2},{value:"Conformance Tests",id:"conformance-tests",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"A volume is a virtual drive that is to be used by an instance (i.e., a virtual machine). With OpenStack,\neach volume is created per a type that determines basic features of the volume as provided by the backend,\nsuch as encryption, replication, or quality of service. As of the writing of this document, presence or absence of these\nfeatures can not be discovered with full certainty by non-privileged users via the OpenStack API."}),"\n",(0,i.jsx)(t.h3,{id:"glossary",children:"Glossary"}),"\n",(0,i.jsx)(t.p,{children:"The following special terms are used throughout this standard document:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Term"}),(0,i.jsx)(t.th,{children:"Meaning"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"volume"}),(0,i.jsx)(t.td,{children:"OpenStack resource, virtual drive which usually resides in a network storage backend"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"volume feature"}),(0,i.jsx)(t.td,{children:"A certain feature a volume can possess"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"aspect"}),(0,i.jsx)(t.td,{children:"Part of a volume type that will activate a corresponding feature in a created volume"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AZ"}),(0,i.jsx)(t.td,{children:"Availability Zone"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Volume QoS"}),(0,i.jsx)(t.td,{children:"Quality of Service object for Volumes"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"As an SCS user, I want to be able to create volumes with certain common features, such as encryption or\nreplication, and to do so in a standardized manner as well as programmatically.\nThis standard outlines a way of formally advertising these common aspects for a volume type to\nnon-privileged users, so that the most suitable volume type can be discovered and selected easily \u2014 both by\nthe human user and by a program."}),"\n",(0,i.jsx)(t.h2,{id:"design-considerations",children:"Design Considerations"}),"\n",(0,i.jsxs)(t.p,{children:["All considerations can be looked up in detail in the ",(0,i.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0111-v1-volume-type-decisions.md",children:"Decision Record for the Volume Type Standard."})]}),"\n",(0,i.jsx)(t.h3,{id:"systematic-description-of-volume-types",children:"Systematic Description of Volume Types"}),"\n",(0,i.jsxs)(t.p,{children:["To test whether a deployment has volume types with certain aspects, the discoverability of the parameters in the volume type has to be given. As for the time this standard is created, there is no way for users to discover all aspects through OpenStack commands. Therefore, the aspects, that are fulfilled within a volume type, should be stated in the beginning of the ",(0,i.jsx)(t.strong,{children:"description"})," of a volume type in the following manner:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"[scs:aspect1, aspect2, ..., aspectN]..."})}),"\n",(0,i.jsx)(t.p,{children:"The mentioned aspects MUST be sorted alphabetically and every aspect should only be mentioned to the maximal amount of one."}),"\n",(0,i.jsx)(t.h3,{id:"standardized-aspects",children:"Standardized Aspects"}),"\n",(0,i.jsx)(t.p,{children:"The following table shows which aspects are considered in this standard. The third column shows how the description of the volume type has to be adjusted, if the aspect is fulfilled:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Aspect"}),(0,i.jsx)(t.th,{children:"Requirement"}),(0,i.jsx)(t.th,{children:"standardized description"}),(0,i.jsx)(t.th,{children:"comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Encryption"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Recommended"})}),(0,i.jsx)(t.td,{children:(0,i.jsxs)(t.strong,{children:['"[scs',":encrypted",']"']})}),(0,i.jsx)(t.td,{children:"volume is encrypted"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Replication"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Recommended"})}),(0,i.jsx)(t.td,{children:(0,i.jsxs)(t.strong,{children:['"[scs',":replicated",']"']})}),(0,i.jsx)(t.td,{children:"volume is replicated to avoid data loss in a case of hardware failure"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"It is possible to use multiple of those aspects within one volume type. There don't have to be different volume types for each aspect.\nFor instance, one volume type that uses LUKS-encryption with a ceph storage with inherent replication would fulfill all recommendations of this standard."}),"\n",(0,i.jsx)(t.h2,{id:"default-volume-type",children:"DEFAULT volume type"}),"\n",(0,i.jsxs)(t.p,{children:["There is always a default volume type defined in an OpenStack deployment. This volume type is created in the setup of cinder and will always be present in any OpenStack deployments under the name ",(0,i.jsx)(t.code,{children:"__default__"}),". This standard does not have any requirements about this volume type at this moment, instead deployers are free to choose what fits best in their environment. Conversely, a cloud user can not expect any specific behavior or properties from volume types named ",(0,i.jsx)(t.code,{children:"__default__"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"required-volume-types",children:"REQUIRED volume types"}),"\n",(0,i.jsx)(t.p,{children:"Currently, this standard will not require volume types with certain specification."}),"\n",(0,i.jsx)(t.h2,{id:"recommended-volume-types",children:"RECOMMENDED volume types"}),"\n",(0,i.jsx)(t.p,{children:"This standard recommends to have one or more volume types, that feature encryption and replication."}),"\n",(0,i.jsx)(t.h2,{id:"optional-volume-types",children:"OPTIONAL volume types"}),"\n",(0,i.jsx)(t.p,{children:"Any other aspects of volume types, that can be found in the decision record are OPTIONAL. They SHOULD NOT be referenced in the way this standard describes. Some of them already are natively discoverable by users, while others could be described in the name or description of a volume type. Users should look into the provided volume types of the Cloud Service Providers, if they want to use some of these other aspects."}),"\n",(0,i.jsx)(t.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,i.jsx)(t.h3,{id:"encryption",children:"Encryption"}),"\n",(0,i.jsxs)(t.p,{children:["Encryption for volumes is an option which has to be configured within the volume type. As an admin it is possible to set encryption-provider, key size, cipher and control location. Additionally to be discoverable by users, the description should start with an aspect list such as ",(0,i.jsx)(t.code,{children:"[scs:encrypted]"})," (potentially with additional aspects). It should look like this example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"openstack volume type show LUKS\n+--------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Field              | Value                                                                                                                                                        |\n+--------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| access_project_ids | None                                                                                                                                                         |\n| description        | [scs:encrypted] This volume uses LUKS-encryption                                                                                                             |\n| id                 | d63307fb-167a-4aa0-9066-66595ea9fb21                                                                                                                         |\n| is_public          | True                                                                                                                                                         |\n| name               | LUKS                                                                                                                                                         |\n| qos_specs_id       | None                                                                                                                                                         |\n+--------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(t.h3,{id:"replication",children:"Replication"}),"\n",(0,i.jsx)(t.p,{children:"Replication states whether or not there are multiple replicas of a volume, i.e., whether the data could survive a node outage. Unfortunately, there are two ways replication can be achieved:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"In the configuration of a volume type. It then is visible as extra_spec in the properties of a volume type."}),"\n",(0,i.jsx)(t.li,{children:"Via the used backend. Ceph for example provides automatic replication, that does not need to be specified in the volume type. This is currently not visible for users."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To fulfill this recommendation, the description should start with an aspect list such as ",(0,i.jsx)(t.code,{children:"[scs:replicated]"})," (potentially with additional aspects)."]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"One volume type that is configured as an encrypted volume type in a ceph backend, with automated replication would fit both recommendations and will be enough to comply to this part of the volume type standard."}),"\n",(0,i.jsx)(t.p,{children:"It should look like the following part:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"+--------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Field              | Value                                                                                                                                                        |\n+--------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| access_project_ids | None                                                                                                                                                         |\n| description        | [scs:encrypted, replicated] Content will be replicated three times to ensure consistency and availability for your data. LUKS encryption is used.        |\n| id                 | d63307fb-167a-4aa0-9066-66595ea9fb21                                                                                                                         |\n| is_public          | True                                                                                                                                                         |\n| name               | hdd-three-replicas-LUKS                                                                                                                                      |\n| properties         |                                                                                                                                                              |\n| qos_specs_id       | None                                                                                                                                                         |\n+--------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-documents",children:"Related Documents"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["corresponding ",(0,i.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0111-v1-volume-type-decisions.md",children:"decision record document"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"conformance-tests",children:"Conformance Tests"}),"\n",(0,i.jsxs)(t.p,{children:["The script ",(0,i.jsx)(t.code,{children:"/Tests/iaas/volume-types/volume-types-check.py"})," connects to an OpenStack environment and tests\nthe following:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["for each volume type: if its description starts with ",(0,i.jsx)(t.code,{children:"[scs:....]"}),", then this prefix is a feature list\n(sorted, each entry at most once), and each entry is one of the possible features described here,"]}),"\n",(0,i.jsx)(t.li,{children:"the recommended volume types are present (otherwise, a WARNING is produced)."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The return code is zero precisely when the test could be performed and the conditions are satisfied.\nOtherwise, detailed errors and warnings are output to stderr."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);