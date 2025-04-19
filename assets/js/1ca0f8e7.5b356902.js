"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37810],{93817:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"container/components/container-registry/docs/scs-deployment","title":"SCS deployment","description":"The following steps were utilized for deploying the SCS reference installation of the Harbor container registry,","source":"@site/docs/03-container/components/container-registry/docs/scs-deployment.md","sourceDirName":"03-container/components/container-registry/docs","slug":"/container/components/container-registry/docs/scs-deployment","permalink":"/docs/container/components/container-registry/docs/scs-deployment","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/container-registry/docs/scs-deployment.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Quickstart","permalink":"/docs/container/components/container-registry/docs/quickstart"},"next":{"title":"Rate limit","permalink":"/docs/container/components/container-registry/docs/rate_limit"}}');var r=s(74848),i=s(28453);const c={},o="SCS deployment",l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Harbor",id:"install-harbor",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"scs-deployment",children:"SCS deployment"})}),"\n",(0,r.jsxs)(n.p,{children:["The following steps were utilized for deploying the SCS reference installation of the Harbor container registry,\nwhich is available at ",(0,r.jsx)(n.a,{href:"https://registry.scs.community",children:"https://registry.scs.community"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Kubernetes cluster v1.20+","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We used the R5 version of SCS KaaS V1, which includes an ingress controller and cert manager","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export KUBECONFIG=/path/to/kubeconfig\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Flux CLI (it is part of SCS KaaS V1)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Installation documentation: ",(0,r.jsx)(n.a,{href:"https://fluxcd.io/flux/installation/#install-the-flux-cli",children:"https://fluxcd.io/flux/installation/#install-the-flux-cli"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s https://fluxcd.io/install.sh | sudo FLUX_VERSION=2.2.3 bash\nflux install\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubectl/",children:"kubectl"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install-harbor",children:"Install Harbor"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Take ",(0,r.jsx)(n.em,{children:"ingress-nginx-controller"})," LoadBalancer IP address and create DNS record for Harbor."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl get svc -n ingress-nginx\nNAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)                      AGE\ningress-nginx-controller             LoadBalancer   100.92.14.168   81.163.194.219   80:30799/TCP,443:32482/TCP   2m51s\ningress-nginx-controller-admission   ClusterIP      100.88.40.231   <none>           443/TCP                      2m51s\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Generate secrets and install Harbor:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"base/harbor-secrets.bash # pwgen and htpasswd need to be installed\nenvs/public/s3-credentials.bash <accesskey> <secretkey>\nkubectl apply -k envs/public/\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);