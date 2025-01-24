"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6934],{63158:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>i});const o=JSON.parse('{"id":"container/components/cluster-stacks/components/cluster-stack-operator/develop/develop","title":"Contributing","description":"Develop Cluster Stack Operator","source":"@site/docs/03-container/components/cluster-stacks/components/cluster-stack-operator/develop/develop.md","sourceDirName":"03-container/components/cluster-stacks/components/cluster-stack-operator/develop","slug":"/container/components/cluster-stacks/components/cluster-stack-operator/develop/","permalink":"/docs/container/components/cluster-stacks/components/cluster-stack-operator/develop/","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/cluster-stacks/components/cluster-stack-operator/develop/develop.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Troubleshooting","permalink":"/docs/container/components/cluster-stacks/components/cluster-stack-operator/topics/troubleshoot"},"next":{"title":"Overview","permalink":"/docs/container/components/cluster-stacks/components/cluster-stack-provider-openstack/docs/overview"}}');var n=s(74848),r=s(28453);const c={},l="Contributing",a={},i=[{value:"Develop Cluster Stack Operator",id:"develop-cluster-stack-operator",level:2},{value:"Setting Tilt up",id:"setting-tilt-up",level:2},{value:"Developing with Tilt",id:"developing-with-tilt",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"contributing",children:"Contributing"})}),"\n",(0,n.jsx)(t.h2,{id:"develop-cluster-stack-operator",children:"Develop Cluster Stack Operator"}),"\n",(0,n.jsx)(t.p,{children:"Developing our operator is quite easy. First, you need to install some base requirements: Docker and Go. Second, you need to configure your environment variables. Then you can start developing with the local Kind cluster and the Tilt UI to create a workload cluster that is already pre-configured."}),"\n",(0,n.jsx)(t.h2,{id:"setting-tilt-up",children:"Setting Tilt up"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Install Docker and Go. We expect you to run on a Linux OS."}),"\n",(0,n.jsxs)(t.li,{children:["Create an ",(0,n.jsx)(t.code,{children:".envrc"})," file and specify the values you need. See the .envrc.sample for details."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"developing-with-tilt",children:"Developing with Tilt"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Tilt",src:s(26737).A+"",width:"2550",height:"1327"})}),"\n",(0,n.jsx)(t.p,{children:"Operator development requires a lot of iteration, and the \u201cbuild, tag, push, update deployment\u201d workflow can be very tedious. Tilt makes this process much simpler by watching for updates and automatically building and deploying them. To build a kind cluster and to start Tilt, run:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"make tilt-up\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["To access the Tilt UI please go to: ",(0,n.jsx)(t.code,{children:"http://localhost:10351"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You should make sure that everything in the UI looks green. If not, e.g. if the clusterstack has not been synced, you can trigger the Tilt workflow again. In case of the clusterstack button this might be necessary, as it cannot be applied right after startup of the cluster and fails. Tilt unfortunately does not include a waiting period."}),"\n",(0,n.jsx)(t.p,{children:"If everything is green, then you can already check for your clusterstack that has been deployed. You can use a tool like k9s to have a look at the management cluster and its custom resources."}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"\u276f kubectl get clusterstacks -A\nNAMESPACE   NAME           PROVIDER   CLUSTERSTACK   K8S    CHANNEL   AUTOSUBSCRIBE   USABLE   LATEST                            AGE     REASON   MESSAGE\ncluster     clusterstack   docker     ferrol         1.27   stable    false           v2       docker-ferrol-1-27-v2 | v1.27.3   4m52s\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"\u276f kubectl get clusterstackreleases.clusterstack.x-k8s.io -A\nNAMESPACE   NAME                    K8S VERSION   READY   AGE     REASON   MESSAGE\ncluster     docker-ferrol-1-27-v2   v1.27.3       true    7m51s\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The above cluster stack was downloaded from ",(0,n.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/cluster-stacks/releases",children:"SovereignCloudStack/cluster-stacks"})]}),"\n",(0,n.jsxs)(t.p,{children:['In case your clusterstack shows that it is ready, you can deploy a workload cluster. This could be done through the Tilt UI, by pressing the button in the top right corner "Create Workload Cluster". This triggers the ',(0,n.jsx)(t.code,{children:"make create-workload-cluster-docker"}),", which uses the environment variables and the cluster-template."]}),"\n",(0,n.jsx)(t.p,{children:"In case you want to change some code, you can do so and see that Tilt triggers on save. It will update the container of the operator automatically."}),"\n",(0,n.jsxs)(t.p,{children:["If you want to change something in your ClusterStack or Cluster custom resources, you can have a look at ",(0,n.jsx)(t.code,{children:".cluster.yaml"})," and ",(0,n.jsx)(t.code,{children:".clusterstack.yaml"}),", which Tilt uses."]}),"\n",(0,n.jsx)(t.p,{children:'To tear down the workload cluster press the "Delete Workload Cluster" button. After a few minutes the resources should be deleted.'}),"\n",(0,n.jsx)(t.p,{children:"To tear down the kind cluster, use:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ make delete-bootstrap-cluster\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you have any trouble finding the right command, then you can use ",(0,n.jsx)(t.code,{children:"make help"})," to get a list of all available make targets."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},26737:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/tilt-5733a9f1bf4409991abcf6d96d8a13bd.png"},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>l});var o=s(96540);const n={},r=o.createContext(n);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);