"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30675],{64680:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"container/components/container-registry/docs/persistence","title":"Persistence","description":"This page briefly describes and provides pointers on how Harbor persists data when it is","source":"@site/docs/03-container/components/container-registry/docs/persistence.md","sourceDirName":"03-container/components/container-registry/docs","slug":"/container/components/container-registry/docs/persistence","permalink":"/docs/container/components/container-registry/docs/persistence","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/container-registry/docs/persistence.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Migration","permalink":"/docs/container/components/container-registry/docs/migration"},"next":{"title":"HA deployment","permalink":"/docs/container/components/container-registry/docs/ha-deployment"}}');var r=n(74848),t=n(28453);const l={},c="Persistence",o={},a=[{value:"Data Access Layer",id:"data-access-layer",level:2},{value:"Redis",id:"redis",level:3},{value:"Database (PostgreSQL)",id:"database-postgresql",level:3},{value:"OCI Distribution Registry",id:"oci-distribution-registry",level:3},{value:"Fundamental Services",id:"fundamental-services",level:2},{value:"Proxy, Core, Web Portal",id:"proxy-core-web-portal",level:3},{value:"Trivy",id:"trivy",level:3},{value:"JobService",id:"jobservice",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"persistence",children:"Persistence"})}),"\n",(0,r.jsxs)(s.p,{children:["This page briefly describes and provides pointers on how Harbor persists data when it is\ndeployed in a Kubernetes cluster environment. It points out the default persistence settings\nof ",(0,r.jsx)(s.a,{href:"https://github.com/goharbor/harbor-helm",children:"Harbor helm chart"})," as well as available options."]}),"\n",(0,r.jsxs)(s.p,{children:["Harbor, by design, consists of multiple (micro)services that could store their data\nvariously, based on the Harbor configuration, see the ",(0,r.jsx)(s.a,{href:"https://github.com/goharbor/harbor/wiki/Architecture-Overview-of-Harbor",children:"Architecture Overview of Harbor"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"data-access-layer",children:"Data Access Layer"}),"\n",(0,r.jsx)(s.h3,{id:"redis",children:"Redis"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Usage","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Key value storage used as a login session cache, a registry manifest cache, and a queue for the jobservice (e.g. see ",(0,r.jsx)(s.a,{href:"#trivy",children:"Trivy"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Default settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['Deployed as an "internal" single node database into the same Kubernetes cluster as Harbor (helm value: ',(0,r.jsx)(s.code,{children:"redis.type.internal"}),")"]}),"\n",(0,r.jsx)(s.li,{children:"Deployed as a StatefulSet with 1 replica"}),"\n",(0,r.jsxs)(s.li,{children:["PV persistence is enabled by default (helm value: ",(0,r.jsx)(s.code,{children:"persistence.enabled.true"}),"), Redis POD mounts PV into the ",(0,r.jsx)(s.code,{children:"/var/lib/redis"})," directory"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Additional settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['Harbor could be pointed to the "external" Redis (or Redis Sentinel) database (helm value: ',(0,r.jsx)(s.code,{children:"redis.type.external"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:['"Internal" Redis could be deployed without any persistence, i.e. it could use ',(0,r.jsx)(s.code,{children:"emptyDir"})," (helm value: ",(0,r.jsx)(s.code,{children:"persistence.enabled.false"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Notes","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/goharbor/harbor/issues/13544",children:"What is the role of Redis in Harbor?"})}),"\n",(0,r.jsxs)(s.li,{children:["Redis data does not need to be backed up, see the ",(0,r.jsx)(s.a,{href:"https://goharbor.io/docs/main/administration/backup-restore/#limitations",children:"Limitations docs"})," for more details of the potential impact"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"database-postgresql",children:"Database (PostgreSQL)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Usage","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Stores the related metadata of Harbor models, like projects, users, roles, replication policies, tag retention policies, scanners, charts, and images"}),"\n",(0,r.jsxs)(s.li,{children:["Could store ",(0,r.jsx)(s.a,{href:"#jobservice",children:"JobService"})," logs (helm value: ",(0,r.jsx)(s.code,{children:"jobservice.jobLoggers.[database]"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Default settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['Deployed as an "internal" single node database into the same Kubernetes cluster as Harbor (helm value: ',(0,r.jsx)(s.code,{children:"database.type.internal"}),")"]}),"\n",(0,r.jsx)(s.li,{children:"Deployed as a StatefulSet with 1 replica"}),"\n",(0,r.jsxs)(s.li,{children:["PV persistence is enabled by default (helm value: ",(0,r.jsx)(s.code,{children:"persistence.enabled.true"}),"), PostgreSQL POD mounts PV into the ",(0,r.jsx)(s.code,{children:"/var/lib/postgresql/data"})," directory"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Additional settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['Harbor could be pointed to the "external" database (PostgreSQL) (helm value: ',(0,r.jsx)(s.code,{children:"database.type.external"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:['"Internal" database could be deployed without any persistence, i.e. it could use ',(0,r.jsx)(s.code,{children:"emptyDir"})," (helm value: ",(0,r.jsx)(s.code,{children:"persistence.enabled.false"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"oci-distribution-registry",children:"OCI Distribution Registry"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Usage","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Backend storage of container images and charts"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Default settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Images and charts are stored in ",(0,r.jsx)(s.code,{children:"registry"})," POD filesystem directory ",(0,r.jsx)(s.code,{children:"/storage"})," (helm value: ",(0,r.jsx)(s.code,{children:"persistence.imageChartStorage.type.filesystem"}),"), this directory is mounted to the PV"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Additional settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['Various object storage backends: "azure", "gcs", "s3", "swift", "oss" (helm value: ',(0,r.jsx)(s.code,{children:"persistence.imageChartStorage.type.<backend>"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:["Backend storage could be",(0,r.jsx)(s.code,{children:"emptyDir"})," (helm value: ",(0,r.jsx)(s.code,{children:"persistence.enabled.false"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"fundamental-services",children:"Fundamental Services"}),"\n",(0,r.jsx)(s.h3,{id:"proxy-core-web-portal",children:"Proxy, Core, Web Portal"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"These Harbor services are stateless"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"trivy",children:"Trivy"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Usage","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A 3rd party vulnerability scanner provided by Aqua Security"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Default settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Deployed as a StatefulSet with 1 replica"}),"\n",(0,r.jsxs)(s.li,{children:["PV persistence is enabled by default (helm value: ",(0,r.jsx)(s.code,{children:"persistence.enabled.true"}),"), Trivy POD mounts PV into the ",(0,r.jsx)(s.code,{children:"/home/scanner/.cache"})," directory"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Additional settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Trivy could be deployed without any persistence, i.e. it could use ",(0,r.jsx)(s.code,{children:"emptyDir"})," (helm value: ",(0,r.jsx)(s.code,{children:"persistence.enabled.false"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Notes","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/aquasecurity/harbor-scanner-trivy/issues/135#issuecomment-671259649",children:"What kind of data are stored in /home/scanner/.cache?"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"jobservice",children:"JobService"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Usage","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"General job execution queue service to let other components/services submit requests of running asynchronous tasks concurrently"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Default settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Deployed as a Deployment with 1 replica"}),"\n",(0,r.jsxs)(s.li,{children:["Store logs in the POD filesystem directory ",(0,r.jsx)(s.code,{children:"/var/log/jobs"})," (helm value: ",(0,r.jsx)(s.code,{children:"jobservice.jobLoggers.[file]"}),"), this directory is mounted to the PV"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Additional settings","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["JobService could be deployed without any persistence, i.e. it could use ",(0,r.jsx)(s.code,{children:"emptyDir"})," (helm value: ",(0,r.jsx)(s.code,{children:"persistence.enabled.false"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:["Logs could be stored in ",(0,r.jsx)(s.a,{href:"#database-postgresql",children:"Harbor database"})," (helm value: ",(0,r.jsx)(s.code,{children:"jobservice.jobLoggers.[database]"}),") or just printed to the STDOUT (helm value: ",(0,r.jsx)(s.code,{children:"jobservice.jobLoggers.[stdout]"}),")"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var i=n(96540);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);