"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62350],{76318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"scs-0118-w1-example-impacts-of-failure-scenarios","title":"SCS Taxonomy of Failsafe Levels: Examples of Failure Cases and their impact on IaaS and KaaS resources","description":"Examples of the impact from certain failure scenarios on Cloud Resources","source":"@site/standards/scs-0118-w1-example-impacts-of-failure-scenarios.md","sourceDirName":".","slug":"/scs-0118-w1-example-impacts-of-failure-scenarios","permalink":"/standards/scs-0118-w1-example-impacts-of-failure-scenarios","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SCS Taxonomy of Failsafe Levels: Examples of Failure Cases and their impact on IaaS and KaaS resources","type":"Supplement","track":"IaaS","status":"Draft","supplements":["scs-0118-v1-taxonomy-of-failsafe-levels.md"]},"sidebar":"standards","previous":{"title":"V1","permalink":"/standards/scs-0118-v1-taxonomy-of-failsafe-levels"},"next":{"title":"scs-0119: Replacement of the deprecated ceph-ansible tool","permalink":"/standards/iaas/scs-0119"}}');var n=r(74848),a=r(28453);const d={title:"SCS Taxonomy of Failsafe Levels: Examples of Failure Cases and their impact on IaaS and KaaS resources",type:"Supplement",track:"IaaS",status:"Draft",supplements:["scs-0118-v1-taxonomy-of-failsafe-levels.md"]},o=void 0,c={},i=[{value:"Examples of the impact from certain failure scenarios on Cloud Resources",id:"examples-of-the-impact-from-certain-failure-scenarios-on-cloud-resources",level:2},{value:"Impact on IaaS Resources (IaaS Layer)",id:"impact-on-iaas-resources-iaas-layer",level:3},{value:"Impact on Kubernetes Resources (KaaS layer)",id:"impact-on-kubernetes-resources-kaas-layer",level:3}];function l(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"examples-of-the-impact-from-certain-failure-scenarios-on-cloud-resources",children:"Examples of the impact from certain failure scenarios on Cloud Resources"}),"\n",(0,n.jsx)(t.p,{children:"Failure cases in Cloud deployments can be hardware related, environmental, due to software errors or human interference.\nThe following table summerizes different failure scenarios, that can occur:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Failure Scenario"}),(0,n.jsx)(t.th,{children:"Probability"}),(0,n.jsx)(t.th,{children:"Consequences"}),(0,n.jsx)(t.th,{children:"Failsafe Level Coverage"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Disk Failure"}),(0,n.jsx)(t.td,{children:"High"}),(0,n.jsx)(t.td,{children:"Permanent data loss in this disk. Impact depends on type of lost data (data base, user data)"}),(0,n.jsx)(t.td,{children:"L1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Host Failure (without disks)"}),(0,n.jsx)(t.td,{children:"Medium to High"}),(0,n.jsx)(t.td,{children:"Permanent loss of functionality and connectivity of host (impact depends on type of host)"}),(0,n.jsx)(t.td,{children:"L1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Host Failure"}),(0,n.jsx)(t.td,{children:"Medium to High"}),(0,n.jsx)(t.td,{children:"Data loss in RAM and temporary loss of functionality and connectivity of host (impact depends on type of host)"}),(0,n.jsx)(t.td,{children:"L1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rack Outage"}),(0,n.jsx)(t.td,{children:"Medium"}),(0,n.jsx)(t.td,{children:"Outage of all nodes in rack"}),(0,n.jsx)(t.td,{children:"L2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Network router/switch outage"}),(0,n.jsx)(t.td,{children:"Medium"}),(0,n.jsx)(t.td,{children:"Temporary loss of service, loss of connectivity, network partitioning"}),(0,n.jsx)(t.td,{children:"L2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Loss of network uplink"}),(0,n.jsx)(t.td,{children:"Medium"}),(0,n.jsx)(t.td,{children:"Temporary loss of service, loss of connectivity"}),(0,n.jsx)(t.td,{children:"L3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Power Outage (Data Center supply)"}),(0,n.jsx)(t.td,{children:"Medium"}),(0,n.jsx)(t.td,{children:"Temporary outage of all nodes in all racks"}),(0,n.jsx)(t.td,{children:"L3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Fire"}),(0,n.jsx)(t.td,{children:"Medium"}),(0,n.jsx)(t.td,{children:"permanent Disk and Host loss in the affected zone"}),(0,n.jsx)(t.td,{children:"L3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Flood"}),(0,n.jsx)(t.td,{children:"Low"}),(0,n.jsx)(t.td,{children:"permanent Disk and Host loss in the affected region"}),(0,n.jsx)(t.td,{children:"L4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Earthquake"}),(0,n.jsx)(t.td,{children:"Very Low"}),(0,n.jsx)(t.td,{children:"permanent Disk and Host loss in the affected region"}),(0,n.jsx)(t.td,{children:"L4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storm/Tornado"}),(0,n.jsx)(t.td,{children:"Low"}),(0,n.jsx)(t.td,{children:"permanent Disk and Host loss in the affected region"}),(0,n.jsx)(t.td,{children:"L4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Software bug (major)"}),(0,n.jsx)(t.td,{children:"Low"}),(0,n.jsx)(t.td,{children:"permanent loss or compromise of data that trigger the bug up to data on the whole physical machine"}),(0,n.jsx)(t.td,{children:"L3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Software bug (minor)"}),(0,n.jsx)(t.td,{children:"High"}),(0,n.jsx)(t.td,{children:"temporary or partial loss or compromise of data"}),(0,n.jsx)(t.td,{children:"L1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Minor operating error"}),(0,n.jsx)(t.td,{children:"High"}),(0,n.jsx)(t.td,{children:"Temporary outage"}),(0,n.jsx)(t.td,{children:"L1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Major operating error"}),(0,n.jsx)(t.td,{children:"Low"}),(0,n.jsx)(t.td,{children:"Permanent loss of data"}),(0,n.jsx)(t.td,{children:"L3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Cyber attack (minor)"}),(0,n.jsx)(t.td,{children:"High"}),(0,n.jsx)(t.td,{children:"permanent loss or compromise of data on affected Disk and Host"}),(0,n.jsx)(t.td,{children:"L1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Cyber attack (major)"}),(0,n.jsx)(t.td,{children:"Medium"}),(0,n.jsx)(t.td,{children:"permanent loss or compromise of data on affected Disk and Host"}),(0,n.jsx)(t.td,{children:"L3"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Those failure scenarios can result in either only temporary (T) or permanent (P) loss of IaaS / KaaS resources or data.\nAdditionally, there are a lot of resources in IaaS alone that are more or less affected by these failure scenarios.\nThe following tables shows the impact ",(0,n.jsx)(t.strong,{children:"when no redundancy or failure safety measure is in place"}),", i.e., when\n",(0,n.jsx)(t.strong,{children:"not even failsafe level 1 is fulfilled"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"impact-on-iaas-resources-iaas-layer",children:"Impact on IaaS Resources (IaaS Layer)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Resource"}),(0,n.jsx)(t.th,{children:"Disk Loss"}),(0,n.jsx)(t.th,{children:"Node Loss"}),(0,n.jsx)(t.th,{children:"Rack Loss"}),(0,n.jsx)(t.th,{children:"Power Loss"}),(0,n.jsx)(t.th,{children:"Natural Catastrophy"}),(0,n.jsx)(t.th,{children:"Cyber Threat"}),(0,n.jsx)(t.th,{children:"Software Bug"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Image"}),(0,n.jsxs)(t.td,{children:["P",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,n.jsxs)(t.td,{children:["T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["P (T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),")"]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Volume"}),(0,n.jsxs)(t.td,{children:["P",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,n.jsxs)(t.td,{children:["T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["P (T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),")"]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"User Data on RAM /CPU"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume-based VM"}),(0,n.jsxs)(t.td,{children:["P",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,n.jsxs)(t.td,{children:["T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["P (T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),")"]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ephemeral-based VM"}),(0,n.jsxs)(t.td,{children:["P",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["P (T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),")"]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Ironic-based VM"}),(0,n.jsxs)(t.td,{children:["P",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})]}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["P (T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),")"]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Secret"}),(0,n.jsxs)(t.td,{children:["P",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,n.jsxs)(t.td,{children:["T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["P (T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),")"]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"network configuration (DB objects)"}),(0,n.jsxs)(t.td,{children:["P",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,n.jsxs)(t.td,{children:["T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["P (T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),")"]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"network connectivity (materialization)"}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["P (T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4-8","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),")"]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"T"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"floating IP"}),(0,n.jsxs)(t.td,{children:["P",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,n.jsxs)(t.td,{children:["T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsxs)(t.td,{children:["P (T",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4-9","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),")"]}),(0,n.jsx)(t.td,{children:"T/P"}),(0,n.jsx)(t.td,{children:"T"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"For some cases, this only results in temporary unavailability and cloud infrastructures usually have certain mechanisms in place to avoid data loss, like redundancy in storage backends and databases.\nSo some of these outages are easier to mitigate than others."}),"\n",(0,n.jsx)(t.h3,{id:"impact-on-kubernetes-resources-kaas-layer",children:"Impact on Kubernetes Resources (KaaS layer)"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"In case the KaaS layer runs on top of IaaS layer, the impacts described in the above table apply for the KaaS layer as well."})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Resource"}),(0,n.jsx)(t.th,{children:"Disk Loss"}),(0,n.jsx)(t.th,{children:"Node Loss"}),(0,n.jsx)(t.th,{children:"Rack Loss"}),(0,n.jsx)(t.th,{children:"Power Loss"}),(0,n.jsx)(t.th,{children:"Natural Catastrophy"}),(0,n.jsx)(t.th,{children:"Cyber Threat"}),(0,n.jsx)(t.th,{children:"Software Bug"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Node"}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"T/P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Kubelet"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"T/P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Pod"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"T/P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PVC"}),(0,n.jsx)(t.td,{children:"P"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"API Server"}),(0,n.jsx)(t.td,{children:"T"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"T/P"})]})]})]}),"\n","\n",(0,n.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,n.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,n.jsxs)(t.p,{children:["If the resource is located on that specific disk. ",(0,n.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-1-2","data-footnote-backref":"","aria-label":"Back to reference 1-2",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"2"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-1-3","data-footnote-backref":"","aria-label":"Back to reference 1-3",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"3"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-1-4","data-footnote-backref":"","aria-label":"Back to reference 1-4",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"4"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-1-5","data-footnote-backref":"","aria-label":"Back to reference 1-5",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"5"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-1-6","data-footnote-backref":"","aria-label":"Back to reference 1-6",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"6"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-1-7","data-footnote-backref":"","aria-label":"Back to reference 1-7",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"7"})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-3",children:["\n",(0,n.jsxs)(t.p,{children:["If the resource is located on that specific node. ",(0,n.jsx)(t.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-3-2","data-footnote-backref":"","aria-label":"Back to reference 2-2",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"2"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-3-3","data-footnote-backref":"","aria-label":"Back to reference 2-3",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"3"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-3-4","data-footnote-backref":"","aria-label":"Back to reference 2-4",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"4"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-3-5","data-footnote-backref":"","aria-label":"Back to reference 2-5",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"5"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-3-6","data-footnote-backref":"","aria-label":"Back to reference 2-6",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"6"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-3-7","data-footnote-backref":"","aria-label":"Back to reference 2-7",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"7"})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-4",children:["\n",(0,n.jsxs)(t.p,{children:["In case of disks, nodes or racks are not destroyed, some data could be safed. E.g. when a fire just destroyes the power line. ",(0,n.jsx)(t.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-4-2","data-footnote-backref":"","aria-label":"Back to reference 3-2",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"2"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-4-3","data-footnote-backref":"","aria-label":"Back to reference 3-3",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"3"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-4-4","data-footnote-backref":"","aria-label":"Back to reference 3-4",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"4"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-4-5","data-footnote-backref":"","aria-label":"Back to reference 3-5",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"5"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-4-6","data-footnote-backref":"","aria-label":"Back to reference 3-6",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"6"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-4-7","data-footnote-backref":"","aria-label":"Back to reference 3-7",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"7"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-4-8","data-footnote-backref":"","aria-label":"Back to reference 3-8",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"8"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-4-9","data-footnote-backref":"","aria-label":"Back to reference 3-9",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"9"})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,n.jsxs)(t.p,{children:["Everything located on that specific disk. If more than one disk is used, some data could be recovered. ",(0,n.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var s=r(96540);const n={},a=s.createContext(n);function d(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);