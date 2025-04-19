"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46125],{13383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"scs-0214-w1-k8s-node-distribution-implementation-testing","title":"Kubernetes Node Distribution and Availability: Implementation and Testing Notes","description":"Implementation notes","source":"@site/standards/scs-0214-w1-k8s-node-distribution-implementation-testing.md","sourceDirName":".","slug":"/scs-0214-w1-k8s-node-distribution-implementation-testing","permalink":"/standards/scs-0214-w1-k8s-node-distribution-implementation-testing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Kubernetes Node Distribution and Availability: Implementation and Testing Notes","type":"Supplement","track":"KaaS","status":"Draft","supplements":["scs-0214-v1-k8s-node-distribution.md","scs-0214-v2-k8s-node-distribution.md"]},"sidebar":"standards","previous":{"title":"V2","permalink":"/standards/scs-0214-v2-k8s-node-distribution"},"next":{"title":"scs-0215: Robustness features for Kubernetes clusters","permalink":"/standards/kaas/scs-0215"}}');var i=n(74848),o=n(28453);const a={title:"Kubernetes Node Distribution and Availability: Implementation and Testing Notes",type:"Supplement",track:"KaaS",status:"Draft",supplements:["scs-0214-v1-k8s-node-distribution.md","scs-0214-v2-k8s-node-distribution.md"]},r=void 0,d={},l=[{value:"Implementation notes",id:"implementation-notes",level:2},{value:"Automated tests",id:"automated-tests",level:2},{value:"Manual tests",id:"manual-tests",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"implementation-notes",children:"Implementation notes"}),"\n",(0,i.jsx)(t.p,{children:'A Kubernetes clusters control plane must be distributed over multiple physical machines, as well\nas different "failure zones". How these are defined is at the moment up to the CSP.\nWorker nodes can also be distributed over "failure zones", but this isn\'t a requirement.\nDistribution must be shown through labelling, so that users can access these information.'}),"\n",(0,i.jsxs)(t.p,{children:["Node distribution metadata is provided through the usage of the labels\n",(0,i.jsx)(t.code,{children:"topology.kubernetes.io/region"})," and ",(0,i.jsx)(t.code,{children:"topology.kubernetes.io/zone"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"automated-tests",children:"Automated tests"}),"\n",(0,i.jsx)(t.p,{children:"Currently, automated testing is not readily possible because we cannot access information about\nthe underlying host of a node (as opposed to its region and zone). Therefore, the test will only output\na tentative result."}),"\n",(0,i.jsxs)(t.p,{children:["The current implementation can be found in the script ",(0,i.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Tests/kaas/k8s-node-distribution/k8s_node_distribution_check.py",children:(0,i.jsx)(t.code,{children:"k8s_node_distribution_check.py"})}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"manual-tests",children:"Manual tests"}),"\n",(0,i.jsx)(t.p,{children:"None."})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);