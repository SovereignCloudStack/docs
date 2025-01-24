"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50640],{76060:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"container/components/cluster-stacks/components/cluster-stack-operator/architecture/overview","title":"Overview","description":"Architecture","source":"@site/docs/03-container/components/cluster-stacks/components/cluster-stack-operator/architecture/overview.md","sourceDirName":"03-container/components/cluster-stacks/components/cluster-stack-operator/architecture","slug":"/container/components/cluster-stacks/components/cluster-stack-operator/architecture/overview","permalink":"/docs/container/components/cluster-stacks/components/cluster-stack-operator/architecture/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/cluster-stacks/components/cluster-stack-operator/architecture/overview.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/container/components/cluster-stacks/components/cluster-stacks/overview"},"next":{"title":"Getting Started","permalink":"/docs/container/components/cluster-stacks/components/cluster-stack-operator/topics/quickstart"}}');var n=s(74848),o=s(28453);const a={},c="Overview",i={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Cluster stacks",id:"cluster-stacks",level:2},{value:"Cluster Stack Operator",id:"cluster-stack-operator",level:2},{value:"Cluster Stack Provider Integrations",id:"cluster-stack-provider-integrations",level:2},{value:"Steps to make cluster stacks ready to use",id:"steps-to-make-cluster-stacks-ready-to-use",level:2},{value:"Defining a cluster stack",id:"defining-a-cluster-stack",level:3},{value:"Implementing a cluster stack",id:"implementing-a-cluster-stack",level:3},{value:"Implementing a Cluster Stack Provider Integration",id:"implementing-a-cluster-stack-provider-integration",level:3},{value:"Using everything",id:"using-everything",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,n.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cluster Stacks",src:s(29320).A+"",width:"1718",height:"1024"})}),"\n",(0,n.jsx)(t.h2,{id:"cluster-stacks",children:"Cluster stacks"}),"\n",(0,n.jsx)(t.p,{children:"The cluster stacks are opinionated templates of clusters in which all configuration and all core components are defined. They can be implemented on any provider."}),"\n",(0,n.jsx)(t.p,{children:"There can be multiple cluster stacks that acknowledge the many ways in which a cluster can be set up. There is no right or wrong and cluster stacks make sure that the flexibility is not lost."}),"\n",(0,n.jsx)(t.p,{children:"At the same time, they offer ready-made templates for users, who do not have to spend a lot of thought on how to build clusters so that everything works well together."}),"\n",(0,n.jsx)(t.p,{children:"Cluster stacks are implemented by two Helm charts. The first one contains all Cluster API objects and is applied in the management cluster. The second Helm chart contains the cluster addons, i.e. the core components every cluster needs, and is installed in the workload clusters."}),"\n",(0,n.jsx)(t.p,{children:"Furthermore, there are node images that can look quite different depending on the provider."}),"\n",(0,n.jsx)(t.p,{children:"To sum up, there are three components of a cluster stack:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Cluster addons: The cluster addons (CNI, CSI, CCM) have to be applied in each workload cluster that the user starts"}),"\n",(0,n.jsxs)(t.li,{children:["Cluster API objects: The ",(0,n.jsx)(t.code,{children:"ClusterClass"})," object makes it easier to use Cluster-API. The cluster stack contains a ",(0,n.jsx)(t.code,{children:"ClusterClass"})," object and other Cluster-API objects that are necessary in order to use the ",(0,n.jsx)(t.code,{children:"ClusterClass"}),". These objects have to be applied in the management cluster."]}),"\n",(0,n.jsx)(t.li,{children:"Node images: Node images can be provided to the user in different form. They are released and tested together with the other two components of the cluster stack."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["More information about cluster stacks and their three parts can be found in ",(0,n.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/cluster-stacks/blob/main/README.md",children:"https://github.com/SovereignCloudStack/cluster-stacks/blob/main/README.md"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"cluster-stack-operator",children:"Cluster Stack Operator"}),"\n",(0,n.jsx)(t.p,{children:"The Cluster Stack Operator takes care of all steps that have to be done in order to use a certain cluster stack implementation."}),"\n",(0,n.jsx)(t.p,{children:"It has to be installed in the management cluster and can be interacted with by applying custom resources. It extends the functionality of the Cluster API operators."}),"\n",(0,n.jsx)(t.p,{children:"The Cluster Stack Operator mainly applies the two Helm charts from a cluster stack implementation. It is also able to automatically fetch a remote Github repository to see whether there are new releases of a certain cluster stack."}),"\n",(0,n.jsx)(t.p,{children:"The first and second component of a cluster stack are handled by the Cluster Stack Operator."}),"\n",(0,n.jsxs)(t.p,{children:["The node images, on the other hand, have to be handled by separate provider integrations, similar to the ones that ",(0,n.jsx)(t.a,{href:"https://cluster-api.sigs.k8s.io/developer/providers/implementers-guide/overview",children:"Cluster-API uses"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"cluster-stack-provider-integrations",children:"Cluster Stack Provider Integrations"}),"\n",(0,n.jsxs)(t.p,{children:["The Cluster Stack Operator is accompanied by Cluster Stack Provider Integrations. A provider integration is also an operator that works together with the Cluster Stack Operator in a specific way, which is described in the docs about building ",(0,n.jsx)(t.a,{href:"/docs/container/components/cluster-stacks/components/cluster-stack-operator/develop/provider-integration",children:"provider integrations"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A provider integration makes sure that the node images are taken care of and made available to the user."}),"\n",(0,n.jsxs)(t.p,{children:["If there is no work to be done for node images, then the Cluster Stack Operator can work in ",(0,n.jsx)(t.code,{children:"noProvider"})," mode and this Cluster Stack Provider Integration can be omitted."]}),"\n",(0,n.jsx)(t.h2,{id:"steps-to-make-cluster-stacks-ready-to-use",children:"Steps to make cluster stacks ready to use"}),"\n",(0,n.jsx)(t.p,{children:"There are many steps that are needed in order to make cluster stacks ready to use. In order to understand the full flow better and to get an idea of how much work there is and how many personas are involved, we will give an overview of how to start from scratch with a new cluster stack and provider."}),"\n",(0,n.jsx)(t.p,{children:"We will assume that this operator exists, but that you want to use a new cluster stack and provider."}),"\n",(0,n.jsx)(t.h3,{id:"defining-a-cluster-stack",children:"Defining a cluster stack"}),"\n",(0,n.jsx)(t.p,{children:"First, you need to define your cluster stack. Which cluster addons do you need? How do your node images look like? You need to take these decisions and write them down."}),"\n",(0,n.jsx)(t.h3,{id:"implementing-a-cluster-stack",children:"Implementing a cluster stack"}),"\n",(0,n.jsx)(t.p,{children:"The next step is to implement your cluster stack for your provider. You can take existing implementations as reference, but need to think of how the provider-specific custom resources are called and how the respective Cluster API Provider Integration works."}),"\n",(0,n.jsx)(t.h3,{id:"implementing-a-cluster-stack-provider-integration",children:"Implementing a Cluster Stack Provider Integration"}),"\n",(0,n.jsx)(t.p,{children:"We assume that you need to do some manual tasks in order to make node images accessible on your provider. These steps should be implemented in a Cluster Stack Provider Integration, which of course has to work together with the details of how you implemented your cluster stack."}),"\n",(0,n.jsx)(t.h3,{id:"using-everything",children:"Using everything"}),"\n",(0,n.jsx)(t.p,{children:"Finally, you can use the new cluster stack you defined and implemented on the infrastructure of your provider. Enjoy!"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},29320:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/syself-cluster-stacks-web-61b777e4fdfc3357ad1f7f8e4b6e1864.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var r=s(96540);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);