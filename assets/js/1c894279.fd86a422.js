"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81804],{31490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scs-0001-v1-sovereign-cloud-standards","title":"Sovereign Cloud Standards","description":"SCS-0001 outlines the structure, requirements, and lifecycle of standards, procedural documents, and decision\\nrecords within the Sovereign Cloud Stack (SCS) community, ensuring clarity, organization, and governance in\\nthe development and maintenance of interoperable and transparent cloud infrastructure standards.\\n","source":"@site/standards/scs-0001-v1-sovereign-cloud-standards.md","sourceDirName":".","slug":"/scs-0001-v1-sovereign-cloud-standards","permalink":"/standards/scs-0001-v1-sovereign-cloud-standards","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Sovereign Cloud Standards","type":"Procedural","status":"Stable","track":"Global","stabilized_at":"2022-11-28T00:00:00.000Z","description":"SCS-0001 outlines the structure, requirements, and lifecycle of standards, procedural documents, and decision\\nrecords within the Sovereign Cloud Stack (SCS) community, ensuring clarity, organization, and governance in\\nthe development and maintenance of interoperable and transparent cloud infrastructure standards.\\n"},"sidebar":"standards","previous":{"title":"scs-0001: Sovereign Cloud Standards","permalink":"/standards/global/scs-0001"},"next":{"title":"scs-0002: Standards, Docs and Organisation","permalink":"/standards/global/scs-0002"}}');var s=t(74848),d=t(28453);const r={title:"Sovereign Cloud Standards",type:"Procedural",status:"Stable",track:"Global",stabilized_at:new Date("2022-11-28T00:00:00.000Z"),description:"SCS-0001 outlines the structure, requirements, and lifecycle of standards, procedural documents, and decision\nrecords within the Sovereign Cloud Stack (SCS) community, ensuring clarity, organization, and governance in\nthe development and maintenance of interoperable and transparent cloud infrastructure standards.\n"},a=void 0,o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Sovereign Cloud Standard documents",id:"sovereign-cloud-standard-documents",level:2},{value:"Types of documents",id:"types-of-documents",level:3},{value:"Procedural",id:"procedural",level:4},{value:"Standard",id:"standard",level:4},{value:"Decision Record",id:"decision-record",level:4},{value:"Supplement",id:"supplement",level:4},{value:"Document format",id:"document-format",level:3},{value:"Sections",id:"sections",level:3},{value:"Standard",id:"standard-1",level:4},{value:"Decision Record",id:"decision-record-1",level:4},{value:"Process",id:"process",level:2},{value:"Proposal phase",id:"proposal-phase",level:3},{value:"Proposal of a new document",id:"proposal-of-a-new-document",level:4},{value:"Proposal of a major update to a stable document",id:"proposal-of-a-major-update-to-a-stable-document",level:4},{value:"Development phase (Draft)",id:"development-phase-draft",level:3},{value:"Stabilized phase (Stable)",id:"stabilized-phase-stable",level:3},{value:"Deprecation phase (Deprecated)",id:"deprecation-phase-deprecated",level:3},{value:"Rejection",id:"rejection",level:3},{value:"Open Questions",id:"open-questions",level:2},{value:"Stabilization criteria",id:"stabilization-criteria",level:3},{value:"Breaking change criteria",id:"breaking-change-criteria",level:3},{value:"Design Considerations",id:"design-considerations",level:2},{value:"Versioning",id:"versioning",level:3},{value:"Acknowledgements",id:"acknowledgements",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://scs.community",children:"Sovereign Cloud Stack (SCS)"})," provides standards\nfor a range of cloud infrastructure types.\nIt strives for interoperable and sovereign cloud stacks\nwhich can be deployed and used by a wide range of organizations and individuals.\nWherever feasible,\ntransparency and openness both in respect to the inner workings of the platforms standardised by SCS,\nas well as the SCS organization itself\nare a paradigm we intend to live."]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.p,{children:['The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in ',(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2119",children:"RFC 2119"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'In addition, "FORBIDDEN" is to be interpreted equivalent to "MUST NOT".'}),"\n",(0,s.jsx)(n.h2,{id:"sovereign-cloud-standard-documents",children:"Sovereign Cloud Standard documents"}),"\n",(0,s.jsx)(n.p,{children:"One of the main products of the SCS organisation are Sovereign Cloud Standard documents."}),"\n",(0,s.jsx)(n.h3,{id:"types-of-documents",children:"Types of documents"}),"\n",(0,s.jsx)(n.h4,{id:"procedural",children:"Procedural"}),"\n",(0,s.jsx)(n.p,{children:"A procedural SCS document describes a process, a policy or a guideline\nto which the SCS community adheres."}),"\n",(0,s.jsx)(n.h4,{id:"standard",children:"Standard"}),"\n",(0,s.jsx)(n.p,{children:"A standard SCS document describes a technical standard for SCS compliant clouds.\nNote that it may not be necessary for all clouds to implement all standards."}),"\n",(0,s.jsx)(n.h4,{id:"decision-record",children:"Decision Record"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes during the development of the SCS standard,\na complex technical decision needs to be taken,\nwhich does not directly result in a new standard."}),"\n",(0,s.jsxs)(n.p,{children:["The SCS document format formally integrates\nthe documentation of such decisions\nas documents of type ",(0,s.jsx)(n.code,{children:"Decision Record"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"supplement",children:"Supplement"}),"\n",(0,s.jsx)(n.p,{children:"A supplement extends a Standard with additional information, such as implementation and testing notes,\nthat is merely informative, but not authoritative, and that may be subject to change more frequently\nthan the standard itself."}),"\n",(0,s.jsx)(n.h3,{id:"document-format",children:"Document format"}),"\n",(0,s.jsxs)(n.p,{children:["The SCS documents are provided in GitHub flavored markdown.\nEach document is assigned a unique number.\nTo disambiguate with other organisations using similar schemes\n(such as XEPs, PEPs or IETF RFCs),\nthe numbers are prefixed with ",(0,s.jsx)(n.code,{children:"SCS-"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To allow a concept to evolve while allowing breaking changes,\neach SCS document is associated with a major version number.\nThis major version number is a positive number\nand the numbering starts at one for each document."}),"\n",(0,s.jsx)(n.p,{children:"In order to make organisation of the SCS documents easier,\neach document also has a slugified title.\nThe slugified title MUST NOT be changed after the acceptance of the document into the repository,\nas it is part of its canonical URL.\nIt MUST consist only of lower-case ASCII letters, numbers and hyphens.\nIt MUST NOT start with a hyphen and SHOULD start with a lower-case letter.\nIt SHOULD NOT contain more than one subsequent hyphen."}),"\n",(0,s.jsxs)(n.p,{children:["The file name of an SCS document is formed using the following pattern:\n",(0,s.jsx)(n.code,{children:"scs-XXXX-vN-T.md"}),", where\n",(0,s.jsx)(n.code,{children:"XXXX"})," is replaced with the zero-padded document number,\n",(0,s.jsx)(n.code,{children:"N"})," is replaced with the major version of the document, and\n",(0,s.jsx)(n.code,{children:"T"})," is replaced with the slugified title.\nFor a document with the number 190, with a major version number 2 and a slugified title ",(0,s.jsx)(n.code,{children:"flavor-naming"}),",\nthe resulting file name would be ",(0,s.jsx)(n.code,{children:"scs-0190-v2-flavor-naming.md"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Supplements deviate from this pattern in that they employ a ",(0,s.jsx)(n.code,{children:"w"})," instead of a ",(0,s.jsx)(n.code,{children:"v"})," in front of the version\nnumber, and each supplement uses the same document number as the main document it is extending."]}),"\n",(0,s.jsxs)(n.p,{children:["The second digit in ",(0,s.jsx)(n.code,{children:"XXXX"})," describes the track where the document belongs:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Track"}),(0,s.jsx)(n.th,{children:"Number"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Global"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IaaS"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KaaS"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IAM"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Ops"}),(0,s.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"In addition to the number, each document has the following metadata,\nembedded in the markdown header."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field name"}),(0,s.jsx)(n.th,{children:"Requirement"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsx)(n.td,{children:"REQUIRED"}),(0,s.jsxs)(n.td,{children:["one of ",(0,s.jsx)(n.code,{children:"Procedural"}),", ",(0,s.jsx)(n.code,{children:"Standard"}),", ",(0,s.jsx)(n.code,{children:"Decision Record"}),", or ",(0,s.jsx)(n.code,{children:"Supplement"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"status"})}),(0,s.jsx)(n.td,{children:"REQUIRED"}),(0,s.jsxs)(n.td,{children:["one of ",(0,s.jsx)(n.code,{children:"Draft"}),", ",(0,s.jsx)(n.code,{children:"Stable"}),", ",(0,s.jsx)(n.code,{children:"Deprecated"}),", or ",(0,s.jsx)(n.code,{children:"Rejected"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"track"})}),(0,s.jsx)(n.td,{children:"REQUIRED"}),(0,s.jsxs)(n.td,{children:["one of ",(0,s.jsx)(n.code,{children:"Global"}),", ",(0,s.jsx)(n.code,{children:"IaaS"}),", ",(0,s.jsx)(n.code,{children:"KaaS"}),", ",(0,s.jsx)(n.code,{children:"IAM"}),", ",(0,s.jsx)(n.code,{children:"Ops"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"supplements"})}),(0,s.jsxs)(n.td,{children:["REQUIRED precisely when ",(0,s.jsx)(n.code,{children:"type"})," is ",(0,s.jsx)(n.code,{children:"Supplement"})]}),(0,s.jsx)(n.td,{children:"list of documents that are extended by this document (e.g., multiple major versions)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"deprecated_at"})}),(0,s.jsxs)(n.td,{children:["REQUIRED if ",(0,s.jsx)(n.code,{children:"status"})," is ",(0,s.jsx)(n.code,{children:"Deprecated"})]}),(0,s.jsx)(n.td,{children:"ISO formatted date indicating the date after which the deprecation is in effect"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"stabilized_at"})}),(0,s.jsxs)(n.td,{children:["REQUIRED if ",(0,s.jsx)(n.code,{children:"status"})," was ever ",(0,s.jsx)(n.code,{children:"Stable"})]}),(0,s.jsx)(n.td,{children:"ISO formatted date indicating the date after which the document was considered stable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rejected_at"})}),(0,s.jsxs)(n.td,{children:["REQUIRED if ",(0,s.jsx)(n.code,{children:"status"})," is ",(0,s.jsx)(n.code,{children:"Rejected"})]}),(0,s.jsx)(n.td,{children:"ISO formatted date indicating the date on which the document was rejected"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"replaced_by"})}),(0,s.jsxs)(n.td,{children:["RECOMMENDED if ",(0,s.jsx)(n.code,{children:"status"})," is ",(0,s.jsx)(n.code,{children:"Deprecated"})," or ",(0,s.jsx)(n.code,{children:"Rejected"}),", FORBIDDEN otherwise"]}),(0,s.jsx)(n.td,{children:"List of documents which replace this document."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"replaces"})}),(0,s.jsx)(n.td,{children:"OPTIONAL"}),(0,s.jsx)(n.td,{children:"List of documents which this document replaces."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sections",children:"Sections"}),"\n",(0,s.jsx)(n.h4,{id:"standard-1",children:"Standard"}),"\n",(0,s.jsx)(n.p,{children:"Each Standard document MUST have the following sections:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.em,{children:"Introduction"})," providing context on the document and linking to other relevant materials."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.em,{children:"Motivation"})," section which details why this document or the thing it describes is necessary."]}),"\n",(0,s.jsx)(n.li,{children:"A section containing the actual standardization decision."}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.em,{children:"Conformance Tests"})," section that contains hints on how to validate\nconformance with this spec, ideally links to conformance test cases."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We also RECOMMEND the following sections:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.em,{children:"Terminology"})," section which briefly describes terms used in the document, including possible abbreviations."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In addition, the following OPTIONAL sections should be considered:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.em,{children:"Design Considerations"})," section for Standard type documents,\nwhich details other choices\nwhich have been considered for the specific feature\nbut were ultimately rejected."]}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.em,{children:"Open Questions"}),' section which links to issues\ndetailing any open discussion points with respect to a document.\nThis section is RECOMMENDED during the discussion phase (pre 1.0.0)\nas a "table of contents" of things to work on in that context.']}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.em,{children:"Related Documents"})," section which references related Standards\nor Decisions, both upstream and/or other SCS documents."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"decision-record-1",children:"Decision Record"}),"\n",(0,s.jsx)(n.p,{children:"Each Decision Record document MUST have the following sections:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.em,{children:"Abstract"})," providing a brief introduction on the topic of the document."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.em,{children:"Context"})," section describing the issue relevant for motivating this Decision Record."]}),"\n",(0,s.jsx)(n.li,{children:"A section containing the actual decision that is introduced. The section should also include\nreasoning for this decision."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We also RECOMMEND the following sections:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.em,{children:"Terminology"})," section which shortly describes terms used in the document, including possible abbreviations."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.em,{children:"Related Documents"})," section which references related Standards\nor Decisions, both upstream and/or other SCS documents."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In addition, the following OPTIONAL sections should be considered:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.em,{children:"Consequences"})," section describing outcomes from implementing the changes described."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"process",children:"Process"}),"\n",(0,s.jsx)(n.p,{children:"The lifecycle of an SCS document goes through the following phases:\nDraft, Stable, Deprecated, and Rejected."}),"\n",(0,s.jsx)(n.mermaid,{value:'graph TD\n    A["Draft (Proposal)"] --\x3e|Pull Request| B[Draft]\n    B --\x3e|Pull Request| D[Stable]\n    B --\x3e|Pull Request| E[Rejected]\n    D --\x3e|Pull Request| F[Deprecated]'}),"\n",(0,s.jsxs)(n.p,{children:["All decisions for phase transitions follow loose consensus,\nwhere the group which has to form the consensus depends on the ",(0,s.jsx)(n.code,{children:"track"})," of the document:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"IaaS: The team working on infrastructure-as-a-service topics"}),"\n",(0,s.jsx)(n.li,{children:"KaaS: The team working on Kubernetes-as-a-service topics"}),"\n",(0,s.jsx)(n.li,{children:"Ops: The team working on operations topics"}),"\n",(0,s.jsx)(n.li,{children:"IAM: The team working on identity and access management topics"}),"\n",(0,s.jsx)(n.li,{children:"Global: The entire SCS community"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Supplements may be kept in Draft state, because they are not authoritative."}),"\n",(0,s.jsx)(n.h3,{id:"proposal-phase",children:"Proposal phase"}),"\n",(0,s.jsx)(n.h4,{id:"proposal-of-a-new-document",children:"Proposal of a new document"}),"\n",(0,s.jsxs)(n.p,{children:["To propose a new SCS document,\na community participant creates a pull request on GitHub\nagainst the ",(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards",children:"standards repository in the SovereignCloudStack organisation"}),".\nIn the beginning, the pull request will contain a draft of an SCS document and\nthe community participant should present it to the SCS community.\nThey may refer to the ",(0,s.jsx)(n.a,{href:"https://docs.scs.community/community/",children:"SCS Community page"}),"\nfor an overview of applicable means of communication and online meetings\nto get in touch with the SCS community.\nCommunity participants are encouraged to present their proposal to the SCS community early on.\nNote that the proposal draft's content does not need to be finished in any way at this stage."]}),"\n",(0,s.jsxs)(n.p,{children:["The pull request for the proposal MUST add exactly one SCS document,\nin the ",(0,s.jsx)(n.code,{children:"Standards"})," folder.\nIn the proposal phase,\nthe document number MUST be replaced with ",(0,s.jsx)(n.code,{children:"xxxx"})," in the file name,\nexcept for a Supplement, which uses the document number of the document it refers to.\nThe major version MUST be 1."]}),"\n",(0,s.jsxs)(n.p,{children:["For a document with a slugified title ",(0,s.jsx)(n.code,{children:"flavor-naming"}),",\nthe file name would for instance be ",(0,s.jsx)(n.code,{children:"scs-xxxx-v1-flavor-naming.md"}),";\nfor a Supplement of ",(0,s.jsx)(n.code,{children:"scs-0100-v3-flavor-naming.md"}),",\nthe file name might be ",(0,s.jsx)(n.code,{children:"scs-0100-w1-flavor-naming-implementation-testing.md"})," (note the ",(0,s.jsx)(n.code,{children:"w1"}),"!)."]}),"\n",(0,s.jsxs)(n.p,{children:["The metadata MUST indicate the intended ",(0,s.jsx)(n.code,{children:"track"})," and ",(0,s.jsx)(n.code,{children:"type"})," of the document,\nand the ",(0,s.jsx)(n.code,{children:"status"})," MUST be set to ",(0,s.jsx)(n.code,{children:"Draft"}),";\nfor a Supplement, the ",(0,s.jsx)(n.code,{children:"supplements"})," field MUST be set\nto a list of documents (usually containing one element)."]}),"\n",(0,s.jsxs)(n.p,{children:["Upon acceptance by the group of people identified by the ",(0,s.jsx)(n.code,{children:"track"}),",\na number is assigned\n(the next unused number)\nand the proposer is asked\nto rename the file to replace the ",(0,s.jsx)(n.code,{children:"xxxx"})," with that number\nbefore the merge of the pull request."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),"\nDocuments on the ",(0,s.jsx)(n.code,{children:"Design Record"})," track MAY be proposed or accepted directly into ",(0,s.jsx)(n.code,{children:"Stable"})," state,\nif no further discussion is required."]}),"\n",(0,s.jsxs)(n.p,{children:["Hereafter,\nthe pull request can be merged\nand henceforth the document is an official SCS document in ",(0,s.jsx)(n.code,{children:"Draft"})," state."]}),"\n",(0,s.jsx)(n.h4,{id:"proposal-of-a-major-update-to-a-stable-document",children:"Proposal of a major update to a stable document"}),"\n",(0,s.jsxs)(n.p,{children:["To propose major update to a Stable SCS document,\na community participant creates a pull request on GitHub\nagainst the ",(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards",children:"standards repository in the SovereignCloudStack organisation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The pull request MUST add exactly one SCS document,\nin the ",(0,s.jsx)(n.code,{children:"Standards"})," folder.\nThe document number MUST be the same as the document it is updating,\nand the major version number MUST be incremented by 1.\nThe slugified title MAY be changed."]}),"\n",(0,s.jsxs)(n.p,{children:["It MUST refer to the old document in its ",(0,s.jsx)(n.code,{children:"replaces"})," metadata.\nThe pull request SHOULD NOT modify the previous document;\ndeprecation of the previous document\nas well as adding the ",(0,s.jsx)(n.code,{children:"replaced_by"})," metadata is a separate step,\nand can only be executed once the new document is ",(0,s.jsx)(n.code,{children:"Stable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For a document updating a hypothetical SCS-0390-v3 document,\nthe file name may be ",(0,s.jsx)(n.code,{children:"scs-0390-v4-flavor-naming-this-time-its-serious.md"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Other than the file naming difference,\nthe proposal process is the same as for new documents.\nIn particular, the new document starts out in ",(0,s.jsx)(n.code,{children:"Draft"})," state\nand does not automatically become part of the normative corpus of an SCS release."]}),"\n",(0,s.jsx)(n.h3,{id:"development-phase-draft",children:"Development phase (Draft)"}),"\n",(0,s.jsx)(n.p,{children:"In this phase,\nthe document is developed inside the SCS community."}),"\n",(0,s.jsx)(n.p,{children:"It should not be considered to be normative for any SCS release,\neven if an SCS release happens after the acceptance of the document."}),"\n",(0,s.jsx)(n.p,{children:"Experimental and exploratory implementations are encouraged,\nhowever, implementors must be prepared for breaking changes."}),"\n",(0,s.jsx)(n.p,{children:"Changes to the documents are gated through pull requests."}),"\n",(0,s.jsx)(n.h3,{id:"stabilized-phase-stable",children:"Stabilized phase (Stable)"}),"\n",(0,s.jsxs)(n.p,{children:["Once the document is deemed ready for production use,\nits ",(0,s.jsx)(n.code,{children:"status"})," is changed to ",(0,s.jsx)(n.code,{children:"Stable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the document in question is a ",(0,s.jsx)(n.code,{children:"Standard"}),"\n(and if applicable),\nthe following conditions MUST all be satisfied before stabilizing:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the corresponding conformance tests have been implemented\naccording to the general guidelines,"}),"\n",(0,s.jsx)(n.li,{children:"they have been shown to work with the reference implementation,"}),"\n",(0,s.jsxs)(n.li,{children:["they are documented in the standard or one of its ",(0,s.jsx)(n.code,{children:"Supplement"}),"\ndocuments."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After stabilization,\nchanges to the document which may render existing implementations non-conformant\nMUST NOT be made."}),"\n",(0,s.jsx)(n.p,{children:"If a breaking change to an existing SCS document is deemed necessary,\na new document with a new number shall be created\nand the old document SHOULD be deprecated."}),"\n",(0,s.jsx)(n.h3,{id:"deprecation-phase-deprecated",children:"Deprecation phase (Deprecated)"}),"\n",(0,s.jsx)(n.p,{children:"When a document is no longer deemed fit for production use,\nit can be marked as deprecated."}),"\n",(0,s.jsxs)(n.p,{children:["Deprecations SHOULD be announced ahead of their execution by setting the\n",(0,s.jsx)(n.code,{children:"deprecated_at"})," field to a future date and moving the ",(0,s.jsx)(n.code,{children:"status"})," to ",(0,s.jsx)(n.code,{children:"Deprecated"}),".\nThis signals current and future implementors\nthat the subject of the document\nis not considered necessary or state of the art anymore."]}),"\n",(0,s.jsxs)(n.p,{children:["If one or more replacement documents for the document exists,\nit MUST be listed in the ",(0,s.jsx)(n.code,{children:"replaced_by"})," metadata field."]}),"\n",(0,s.jsx)(n.h3,{id:"rejection",children:"Rejection"}),"\n",(0,s.jsxs)(n.p,{children:["If a document is removed from the normative corpus of SCS standards,\nits status is changed to ",(0,s.jsx)(n.code,{children:"Rejected"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If one or more replacement documents for the document exists,\nit MUST be listed in the ",(0,s.jsx)(n.code,{children:"replaced_by"})," metadata field."]}),"\n",(0,s.jsx)(n.h2,{id:"open-questions",children:"Open Questions"}),"\n",(0,s.jsx)(n.h3,{id:"stabilization-criteria",children:"Stabilization criteria"}),"\n",(0,s.jsx)(n.p,{children:"When should a document be stabilized?\nShould we require at least one public implementation?\nShould we require a minimum experimental time?\nWhat about non-Standard track documents?"}),"\n",(0,s.jsx)(n.h3,{id:"breaking-change-criteria",children:"Breaking change criteria"}),"\n",(0,s.jsx)(n.p,{children:'When is a change breaking and cannot be applied to a Stable document?\nWhat about previously undefined behaviour (uncovered edge case)?\nWhat about ambiguous wording?\nDo we need a separate "Errata" section?'}),"\n",(0,s.jsx)(n.h2,{id:"design-considerations",children:"Design Considerations"}),"\n",(0,s.jsx)(n.h3,{id:"versioning",children:"Versioning"}),"\n",(0,s.jsxs)(n.p,{children:["An alternative to the proposed scheme for stabilization\nis the use of ",(0,s.jsx)(n.a,{href:"https://semver.org/",children:"SemVer-like"})," versioning."]}),"\n",(0,s.jsxs)(n.p,{children:["In that case, one would have an individual version number with each document,\nwhere a major version greater than zero indicates a stable document.\nThe ",(0,s.jsx)(n.code,{children:"Stable"})," state would be merged with ",(0,s.jsx)(n.code,{children:"Draft"})," state into an ",(0,s.jsx)(n.em,{children:"Active"})," state\nand shared between the stabilized and the development phase."]}),"\n",(0,s.jsx)(n.p,{children:"The advantages of such an approach are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It is easy to recognize whether an SCS document has changed between two SCS\nreleases, just by looking at the released version number."}),"\n",(0,s.jsx)(n.li,{children:"It is possible to make breaking changes after stabilization by increasing the\nmajor version number."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The disadvantages of that approach are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It is possible to make breaking changes after stabilization.\nPotentially, a hypothetical SCS-1234 document might refer to something completely different\nin a hypothetical R15 release than what it meant in R5,\nif there have been sufficient, gradual breaking changes to the document."}),"\n",(0,s.jsx)(n.p,{children:"That means that for proper linking,\nit would be required to always include the major version number\nwhen referring to an SCS document."}),"\n",(0,s.jsx)(n.p,{children:'This implies having to keep all former versions around in a canonical, linkable form.\nThis induces non-trivial organizational and editorial overhead\nand raises questions around which changes are acceptable to "archived" versions,\nif any.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It would require a clone of the SemVer spec,\nas that spec is highly specific toward software\nand does not fully\n(at least not in the standard-as-written)\ncover specifics of a standards organisation's use-cases."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,s.jsxs)(n.p,{children:["This document is heavily inspired by ",(0,s.jsx)(n.a,{href:"https://xmpp.org/extensions/xep-0001.html",children:"XEP-0001"}),", as published by the XMPP Standards Foundation."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},d=i.createContext(s);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);