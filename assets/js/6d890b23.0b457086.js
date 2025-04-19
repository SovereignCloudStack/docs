"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84331],{6986:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"iaas/guides/operations-guide/manager/task","title":"Task","description":"List","source":"@site/docs/02-iaas/guides/operations-guide/manager/task.md","sourceDirName":"02-iaas/guides/operations-guide/manager","slug":"/iaas/guides/operations-guide/manager/task","permalink":"/docs/iaas/guides/operations-guide/manager/task","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/operations-guide/manager/task.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Task"},"sidebar":"docs","previous":{"title":"Logging","permalink":"/docs/iaas/guides/operations-guide/manager/log"},"next":{"title":"Ceph","permalink":"/docs/iaas/guides/operations-guide/ceph/"}}');var a=t(74848),i=t(28453);const r={sidebar_label:"Task"},o="Task",d={},c=[{value:"List",id:"list",level:2},{value:"Broker reset",id:"broker-reset",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"task",children:"Task"})}),"\n",(0,a.jsx)(s.h2,{id:"list",children:"List"}),"\n",(0,a.jsxs)(s.p,{children:["All running or scheduled tasks can be listed with ",(0,a.jsx)(s.code,{children:"osism task list"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"+----------------------+--------------------------------------+-------------------------+----------+----------------------------+-----------------------------------------------+\n| Worker               | ID                                   | Name                    | Status   | Start time                 | Arguments                                     |\n|----------------------+--------------------------------------+-------------------------+----------+----------------------------+-----------------------------------------------|\n| celery@kolla-ansible | 8a553e69-c532-4ba0-a5d4-08a983bde692 | osism.tasks.kolla.run   | ACTIVE   | 2023-09-27 17:55:54.252250 | ['kolla', 'common', ['-e kolla_action=pull']] |\n| celery@osism-ansible | dba72dd5-1885-408f-9262-e0ded111a007 | osism.tasks.ansible.run | ACTIVE   | 2023-09-27 18:00:31.215879 | ['generic', 'facts', []]                      |\n+----------------------+--------------------------------------+-------------------------+----------+----------------------------+-----------------------------------------------+\n"})}),"\n",(0,a.jsx)(s.h2,{id:"broker-reset",children:"Broker reset"}),"\n",(0,a.jsx)(s.p,{children:"Sometimes tasks get stuck. Due to the internal locks it is then not possible to re-execute\nplays with the same name. Also it is currently not possible to cancel already running tasks\n(is on the todo list). The only way to unblock the situation is to stop the manager service\nand start it again."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"cd /opt/manager\ndocker compose down\ndocker compose up -d\n"})}),"\n",(0,a.jsx)(s.p,{children:"In earlier versions of OSISM, the Redis service was not stateless. In these cases, it is\nnecessary to delete the Redis service volume before restarting the manager service."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"docker volume rm manager_redis\n"})})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(96540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);