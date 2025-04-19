"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88142],{5874:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"container/components/cluster-stacks/components/csctl/developing-and-testing-csctl","title":"Developing and Testing csctl","description":"Clone the Repo","source":"@site/docs/03-container/components/cluster-stacks/components/csctl/developing-and-testing-csctl.md","sourceDirName":"03-container/components/cluster-stacks/components/csctl","slug":"/container/components/cluster-stacks/components/csctl/developing-and-testing-csctl","permalink":"/docs/container/components/cluster-stacks/components/csctl/developing-and-testing-csctl","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/cluster-stacks/components/csctl/developing-and-testing-csctl.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Getting started","permalink":"/docs/container/components/cluster-stacks/components/csctl/getting_started"},"next":{"title":"Quickstart","permalink":"/docs/container/components/cluster-stacks/components/cluster-stacks/providers/openstack/quickstart"}}');var s=n(74848),o=n(28453);const l={},r="Developing and Testing csctl",i={},a=[{value:"Clone the Repo",id:"clone-the-repo",level:2},{value:"Makefile",id:"makefile",level:2},{value:"make build",id:"make-build",level:2},{value:"csctl --help",id:"csctl---help",level:2},{value:"go run main.go ...",id:"go-run-maingo-",level:2},{value:"Create Docker Cluster Stack",id:"create-docker-cluster-stack",level:2}];function d(e){const c={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.header,{children:(0,s.jsx)(c.h1,{id:"developing-and-testing-csctl",children:"Developing and Testing csctl"})}),"\n",(0,s.jsx)(c.h2,{id:"clone-the-repo",children:"Clone the Repo"}),"\n",(0,s.jsxs)(c.p,{children:["Go to ",(0,s.jsx)(c.a,{href:"https://github.com/SovereignCloudStack/csctl/",children:"csctl at Github"})," and clone the repository to your local device:"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-shell",children:"git clone git@github.com:SovereignCloudStack/csctl.git\n"})}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-shell",children:"cd csctl\n"})}),"\n",(0,s.jsx)(c.h2,{id:"makefile",children:"Makefile"}),"\n",(0,s.jsxs)(c.p,{children:["We use a ",(0,s.jsx)(c.code,{children:"Makefile"})," to building the binary."]}),"\n",(0,s.jsxs)(c.p,{children:["You can see the available build targets with ",(0,s.jsx)(c.code,{children:"make help"}),"."]}),"\n",(0,s.jsx)(c.h2,{id:"make-build",children:"make build"}),"\n",(0,s.jsxs)(c.p,{children:["With ",(0,s.jsx)(c.code,{children:"make build"})," you create the executable."]}),"\n",(0,s.jsx)(c.h2,{id:"csctl---help",children:"csctl --help"}),"\n",(0,s.jsxs)(c.p,{children:["With ",(0,s.jsx)(c.code,{children:"./csctl --help"})," you can see the available sub-commands."]}),"\n",(0,s.jsxs)(c.p,{children:["BTW: Be sure to use ",(0,s.jsx)(c.code,{children:"./"}),", so that you don't accidentally use a different ",(0,s.jsx)(c.code,{children:"csctl"})," from your ",(0,s.jsx)(c.code,{children:"$PATH"}),"."]}),"\n",(0,s.jsxs)(c.p,{children:["Up to now only ",(0,s.jsx)(c.code,{children:"create"})," is a feasible sub-command."]}),"\n",(0,s.jsx)(c.h2,{id:"go-run-maingo-",children:"go run main.go ..."}),"\n",(0,s.jsxs)(c.p,{children:["If you modify the source of ",(0,s.jsx)(c.code,{children:"csctl"}),", you can skip the build step by using ",(0,s.jsx)(c.code,{children:"go run"}),":"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-shell",children:"go run main.go create --help\n"})}),"\n",(0,s.jsx)(c.h2,{id:"create-docker-cluster-stack",children:"Create Docker Cluster Stack"}),"\n",(0,s.jsxs)(c.p,{children:["In the ",(0,s.jsx)(c.code,{children:"tests"})," directory is a cluster stack for the docker provider."]}),"\n",(0,s.jsx)(c.p,{children:"You can create the cluster stack like this:"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-shell",children:"\u276f go run main.go create tests/cluster-stacks/docker/ferrol -m hash                                                                                                                  \nCreated releases/docker-ferrol-1-27-v0-sha-7ff9188\n"})})]})}function h(e={}){const{wrapper:c}={...(0,o.R)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,c,n)=>{n.d(c,{R:()=>l,x:()=>r});var t=n(96540);const s={},o=t.createContext(s);function l(e){const c=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function r(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:c},e.children)}}}]);