"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61238],{5678:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"container/components/container-registry/docs/quickstart","title":"Quickstart","description":"This guide shows you how to set up a working Harbor Container Registry that utilizes a Kubernetes cluster.","source":"@site/docs/03-container/components/container-registry/docs/quickstart.md","sourceDirName":"03-container/components/container-registry/docs","slug":"/container/components/container-registry/docs/quickstart","permalink":"/docs/container/components/container-registry/docs/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/container-registry/docs/quickstart.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Container Registry","permalink":"/docs/category/container-registry"},"next":{"title":"SCS deployment","permalink":"/docs/container/components/container-registry/docs/scs-deployment"}}');var t=s(74848),i=s(28453);const c={},o="Quickstart",a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Harbor container registry",id:"install-harbor-container-registry",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,t.jsx)(n.p,{children:"This guide shows you how to set up a working Harbor Container Registry that utilizes a Kubernetes cluster."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Kubernetes cluster v1.20+","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use existing cluster","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export KUBECONFIG=/path/to/kubeconfig\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Alternatively, spawn some dev cluster, e.g. using ",(0,t.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/",children:"KinD"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kind create cluster\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Flux CLI","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Installation documentation: ",(0,t.jsx)(n.a,{href:"https://fluxcd.io/flux/installation/#install-the-flux-cli",children:"https://fluxcd.io/flux/installation/#install-the-flux-cli"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -s https://fluxcd.io/install.sh | sudo FLUX_VERSION=2.2.3 bash\nflux install\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-harbor-container-registry",children:"Install Harbor container registry"}),"\n",(0,t.jsxs)(n.p,{children:["Apply kustomization manifest in ",(0,t.jsx)(n.code,{children:"envs/dev"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -k envs/dev/\n"})}),"\n",(0,t.jsx)(n.p,{children:"Port-forward the Harbor container registry service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/harbor 8080:80\n"})}),"\n",(0,t.jsx)(n.p,{children:"Access the Harbor container registry UI and use Harbor's default credentials"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["username: ",(0,t.jsx)(n.code,{children:"admin"})]}),"\n",(0,t.jsxs)(n.li,{children:["password: ",(0,t.jsx)(n.code,{children:"Harbor12345"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://localhost:8080\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);