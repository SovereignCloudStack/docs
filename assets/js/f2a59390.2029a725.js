"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92078],{82697:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"iaas/guides/deploy-guide/services/openstack","title":"OpenStack","description":"Common issues with deploying OpenStack services are documented in the","source":"@site/docs/02-iaas/guides/deploy-guide/services/openstack.md","sourceDirName":"02-iaas/guides/deploy-guide/services","slug":"/iaas/guides/deploy-guide/services/openstack","permalink":"/docs/iaas/guides/deploy-guide/services/openstack","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/deploy-guide/services/openstack.md","tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"sidebar_label":"OpenStack","sidebar_position":60},"sidebar":"docs","previous":{"title":"Migrate Ceph-Ansible via Rookify (technical preview)","permalink":"/docs/iaas/guides/deploy-guide/services/rookify"},"next":{"title":"Upgrade Guide","permalink":"/docs/iaas/guides/upgrade-guide/"}}');var a=s(74848),r=s(28453);const c={sidebar_label:"OpenStack",sidebar_position:60},o="OpenStack",t={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"openstack",children:"OpenStack"})}),"\n",(0,a.jsxs)(n.p,{children:["Common issues with deploying OpenStack services are documented in the\n",(0,a.jsx)(n.a,{href:"/docs/iaas/guides/troubleshooting-guide/openstack",children:"OpenStack Troubleshooting Guide"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["An OpenStack deployment contains a number of components providing APIs to access infrastructure resources.\nThe ",(0,a.jsx)(n.a,{href:"https://www.openstack.org/software/project-navigator/openstack-components#openstack-services",children:"OpenStack Components"}),"\npage lists the various services that can be deployed to provide such resources to cloud end users.\nUnfortunately, not all of the OpenStack projects listed there are still active.\nNot all of the services listed there are supported by OSISM."]})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"OpenStack client"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply openstackclient\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Keystone"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply -a pull keystone\nosism apply keystone\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Glance"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply -a pull glance\nosism apply glance\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Designate"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply -a pull designate\nosism apply designate\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Placement"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply -a pull placement\nosism apply placement\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Cinder"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply -a pull cinder\nosism apply cinder\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Neutron"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply -a pull neutron\nosism apply neutron\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Nova"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply -a pull nova\nosism apply nova\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Octavia"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply octavia-certificates\nosism apply copy-octavia-certificates\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply -a pull octavia\nosism apply octavia\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Optional: Manage amphora image"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This step is only necessary if the Amphora Driver is used. If OVN is used as the driver,\nthis step is not necessary."}),"\n",(0,a.jsxs)(n.p,{children:["We provide regularly updated images for Octavia in\n",(0,a.jsx)(n.a,{href:"https://github.com/osism/openstack-octavia-amphora-image",children:"osism/openstack-octavia/amphora-image"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Configure API Endpoint"}),"\n",(0,a.jsxs)(n.p,{children:["For the command to be usable, a cloud profile for octavia must currently be added in the\nclouds.yml file of the OpenStack environment. The ",(0,a.jsx)(n.code,{children:"auth_url"})," is changed accordingly."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/openstack/clouds.yml"',children:"clouds:\n  [...]\n  octavia:\n    auth:\n      username: octavia\n      project_name: service\n      auth_url: https://api.testbed.osism.xyz:5000/v3\n      project_domain_name: default\n      user_domain_name: default\n    cacert: /etc/ssl/certs/ca-certificates.crt\n    identity_api_version: 3\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Configure the secret"}),"\n",(0,a.jsxs)(n.p,{children:["The secret is added to the secure.yml file. The password is set in the parameter\n",(0,a.jsx)(n.code,{children:"octavia_keystone_password"})," in the file ",(0,a.jsx)(n.code,{children:"environments/kolla/secrets.yml"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Get the secret with"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"make ansible_vault_show FILE=environments/kolla/secrets.yml |grep octavia_keystone_password\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/openstack/secure.yml"',children:"---\nclouds:\n  [...]\n  octavia:\n    auth:\n      password: VALUE_OF_octavia_keystone_password\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Upload the correct and current image depending on the current Openstack release:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism manage image octavia\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"11",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Horizon"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"osism apply -a pull horizon\nosism apply horizon\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var i=s(96540);const a={},r=i.createContext(a);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);