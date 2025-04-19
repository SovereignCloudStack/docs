"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67768],{60210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"operating-scs/components/status-page-deployment/docs/admin-authentication","title":"Admin authentication","description":"As the write operations of the API server are protected by Oathkeeper and use identities provided by Dex an Administrator is considered to be a person that can authenticate on Dex.","source":"@site/docs/04-operating-scs/components/status-page-deployment/docs/admin-authentication.md","sourceDirName":"04-operating-scs/components/status-page-deployment/docs","slug":"/operating-scs/components/status-page-deployment/docs/admin-authentication","permalink":"/docs/operating-scs/components/status-page-deployment/docs/admin-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/04-operating-scs/components/status-page-deployment/docs/admin-authentication.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Contribute","permalink":"/docs/operating-scs/components/status-page-deployment/docs/contribute"},"next":{"title":"FAQ","permalink":"/docs/operating-scs/components/status-page-deployment/docs/faq"}}');var s=n(74848),i=n(28453);const o={},r="Admin authentication",d={},p=[];function c(e){const t={a:"a",h1:"h1",header:"header",mermaid:"mermaid",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"admin-authentication",children:"Admin authentication"})}),"\n",(0,s.jsxs)(t.p,{children:["As the write operations of the ",(0,s.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/status-page-api",children:"API server"})," are protected by ",(0,s.jsx)(t.a,{href:"https://www.ory.sh/docs/oathkeeper",children:"Oathkeeper"})," and use identities provided by ",(0,s.jsx)(t.a,{href:"https://dexidp.io/",children:"Dex"})," an Administrator is considered to be a person that can authenticate on Dex."]}),"\n",(0,s.jsx)(t.p,{children:"On the public SCS deployment, these persons are members of the SovereignCloudStack organization."}),"\n",(0,s.jsx)(t.p,{children:"This sequence diagram displays a simplified flow how an administrator authenticates himself with Dex and GitHub, to authorize using the write operations."}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\nactor admin as Admin\nparticipant useragent as User Agent\nparticipant web as Web Frontend\nparticipant dex as Dex IdP\nparticipant idp as Upstream IdP\nparticipant oathkeeper as Oathkeeper\nparticipant api as API Server\nparticipant db as API Database\n\nadmin->>useragent: enters status page url\nuseragent->>web: request status page\nnote over web: simplified\nweb--\x3e>useragent: app view\nuseragent--\x3e>admin: presents app view\n\nrect rgba(0,127,255,0.8)\n    note right of admin: Login\n    admin->>useragent: enters login flow\n    useragent->>web: login request\n    web->>dex: login request\n    dex->>idp: actual login\n    idp--\x3e>dex: user info\n    dex--\x3e>web: id-token\n    web--\x3e>useragent: login successful\n    useragent--\x3e>admin: login successful\nend\n\nrect rgba(64,127,0, 0.8)\n    note right of admin: Authenticated Request\n    admin->>useragent: enters operation\n    useragent->>web: operation request\n    web->>+oathkeeper: operation request with id-token\n    oathkeeper->>dex: id-token verification\n    dex--\x3e>oathkeeper: verified\n    oathkeeper->>api: proxy operation request\n    api->>db: request data\n    db--\x3e>api: data\n    api--\x3e>oathkeeper: data\n    oathkeeper--\x3e>-web: data\n    web--\x3e>useragent: data\n    useragent--\x3e>admin: presents new data\nend"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);