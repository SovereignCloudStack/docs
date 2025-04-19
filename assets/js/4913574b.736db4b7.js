"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99084],{27795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"operating-scs/components/status-page-deployment/docs/overview","title":"Overview","description":"The status page needs some components additional to the API server to be usable by operators and customers. As the API server does not implement any kind of authorization or authentication some components need to be deployed to protect the write operations of the API from unauthorized access.","source":"@site/docs/04-operating-scs/components/status-page-deployment/docs/overview.md","sourceDirName":"04-operating-scs/components/status-page-deployment/docs","slug":"/operating-scs/components/status-page-deployment/docs/overview","permalink":"/docs/operating-scs/components/status-page-deployment/docs/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/04-operating-scs/components/status-page-deployment/docs/overview.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Deployment","permalink":"/docs/category/deployment"},"next":{"title":"Requirements","permalink":"/docs/operating-scs/components/status-page-deployment/docs/requirements"}}');var s=n(74848),a=n(28453);const r={},i="Overview",d={},c=[{value:"Components",id:"components",level:2},{value:"Component overview",id:"component-overview",level:3},{value:"Deployment repository",id:"deployment-repository",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",section:"section",sup:"sup",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,s.jsxs)(t.p,{children:["The status page needs some components additional to the ",(0,s.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/status-page-api",children:"API server"})," to be usable by operators and customers. As the API server ",(0,s.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0402-v1-status-page-openapi-spec-decision.md#authentication-and-authorization",children:"does not implement any kind of authorization or authentication"})," some components need to be deployed to protect the write operations of the API from unauthorized access."]}),"\n",(0,s.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,s.jsx)(t.p,{children:"These components are picked as examples and can be exchanged with any technology that is fitting the use case."}),"\n",(0,s.jsxs)(t.p,{children:["The used components are ",(0,s.jsx)(t.a,{href:"https://www.ory.sh/docs/oathkeeper",children:"Oathkeeper"})," and ",(0,s.jsx)(t.a,{href:"https://dexidp.io/",children:"Dex"})," to implement AuthN",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," and AuthZ",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),". Oathkeeper is a proxy that handles incoming requests and authorization, while Dex is used as an identity broker, used for authentication, to be used in conjunction with Oathkeeper to secure the API server."]}),"\n",(0,s.jsxs)(t.p,{children:["Furthermore the API server needs a running database, for this ",(0,s.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0401-v1-status-page-reference-implementation-decision.md#database",children:"PostgreSQL is used"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Last but not least the the status page is completed by a web front. For this the reference implementation from the ",(0,s.jsxs)(t.a,{href:"https://github.com/SovereignCloudStack/status-page-web",children:[(0,s.jsx)(t.code,{children:"status-page-web"})," repository"]}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Some deployments use reverse proxies, ingress controllers or can even use the gateway API. These are deployment specific and can be used as the use case requires."}),"\n",(0,s.jsx)(t.h3,{id:"component-overview",children:"Component overview"}),"\n",(0,s.jsx)(t.mermaid,{value:'    C4Container\n    title Component overview status page\n\n    Person(user, User, "A user who wants to know about the status.")\n    Person(admin, Admin, "An administrator who can update the status.")\n\n    Container_Boundary(status-page, "Status Page") {\n        Container(web, "Web Frontend", "JavaScript, Angular", "Provides all the status page functionality to persons via their web browser")\n        Container(dex, "Dex IdP", "", "Intermediate IdP to retrieve user data.")\n        Container(api, "API Server", "Go", "Delivers data to the Web Frontend")\n        ContainerDb(api-db, "API Database", "SQL Database", "Stores components, incidents, severities, phases, etc.")\n        Container(oathkeeper, "Oathkeeper", "AuthN, AuthZ", "Authentication proxy for write operations on the API Server.")\n\n        Rel(api, api-db, "Request data")\n        Rel(web, oathkeeper, "Request data", "Unauthenticated read, authenticated write")\n        Rel(oathkeeper, api, "Proxy and protect",)\n        Rel(web, dex, "Authentication")\n        Rel(oathkeeper, dex, "Authenticate user requests")\n    }\n\n    Rel(user, web, "Reads status")\n    Rel(admin, web, "Writes status")\n    Rel(admin, dex, "Authenticate")'}),"\n",(0,s.jsx)(t.h2,{id:"deployment-repository",children:"Deployment repository"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/status-page-deployment",children:"deployment repository"})," contains a ",(0,s.jsxs)(t.a,{href:"/docs/operating-scs/components/status-page-deployment/docs/kind",children:["local development environment using ",(0,s.jsx)(t.code,{children:"KinD"})]}),", templates for other deployments, in ",(0,s.jsx)(t.a,{href:"/docs/operating-scs/components/status-page-deployment/docs/k3s",children:"example using k3s"})," and the skeleton of the deployment for the ",(0,s.jsx)(t.a,{href:"/docs/operating-scs/components/status-page-deployment/docs/scs-public",children:"public SCS cluster"}),"."]}),"\n","\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:["Authentication ",(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(t.p,{children:["Authorization ",(0,s.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);