"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43536],{85819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"iaas/guides/configuration-guide/proxy","title":"Proxy","description":"In the following examples, it is assumed that the Squid proxy integrated by OSISM","source":"@site/docs/02-iaas/guides/configuration-guide/proxy.md","sourceDirName":"02-iaas/guides/configuration-guide","slug":"/iaas/guides/configuration-guide/proxy","permalink":"/docs/iaas/guides/configuration-guide/proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/configuration-guide/proxy.md","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_label":"Proxy","sidebar_position":15},"sidebar":"docs","previous":{"title":"Network","permalink":"/docs/iaas/guides/configuration-guide/network"},"next":{"title":"Loadbalancer","permalink":"/docs/iaas/guides/configuration-guide/loadbalancer"}}');var o=t(74848),a=t(28453);const r={sidebar_label:"Proxy",sidebar_position:15},i="Proxy",l={},c=[{value:"Deployment of a Squid Proxy Server",id:"deployment-of-a-squid-proxy-server",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Docker",id:"docker",level:3},{value:"APT",id:"apt",level:3},{value:"OpenStack",id:"openstack",level:3},{value:"Kubernetes / K3s",id:"kubernetes--k3s",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"proxy",children:"Proxy"})}),"\n",(0,o.jsxs)(n.p,{children:["In the following examples, it is assumed that the Squid proxy integrated by OSISM\nis used on the first manager node. Any other proxy accessible from the nodes can\nalso be used here. ",(0,o.jsx)(n.code,{children:"http://{{ groups['manager'][0] }}:3128"})," which is used here as an\nexample is then replaced accordingly with the address of the proxy."]}),"\n",(0,o.jsx)(n.h2,{id:"deployment-of-a-squid-proxy-server",children:"Deployment of a Squid Proxy Server"}),"\n",(0,o.jsx)(n.p,{children:"The Squid service can be deployed on the first manager. This is useful if no proxy\ncan be used in the environment. The first manager node is then used by all other nodes\nas a pass-through node. Please note that this is not a caching proxy or even an air gap.\nThis is also possible with OSISM, but not with the help of the Squid service."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply squid\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configurations",children:"Configurations"}),"\n",(0,o.jsx)(n.p,{children:"It is advisable to exclude hosts that are locally accessible from using the HTTP proxy\nif they use HTTP(S) communication, as otherwise communication will take place unnecessarily via the\nproxy. In some cases the proxy does not have access to the internal networks (this depends on its location),\nbut this can also lead to higher latencies or to inferred availability problems\nif the proxy is temporarily unavailable."}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsxs)(n.p,{children:["As ",(0,o.jsx)(n.a,{href:"https://about.gitlab.com/blog/2021/01/27/we-need-to-talk-no-proxy/#no_proxy",children:"Gitlab has described in 2021"}),", there are subtle differences depending on the technology, implementation and age as to whether environment variables should be lowercase or uppercase, or what types of exclusions are possible."]}),(0,o.jsx)(n.p,{children:"Furthermore, the documentation of certain implementations is not very clear in its statements."}),(0,o.jsxs)(n.p,{children:["It usually makes sense to exclude all ",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc1918",children:"private ipv4 networks"})," when the involved technology supports this\nbecause these private networks or network areas are typicall relatively rarely accessed via a proxy anyway but there is a high potential that a network\nwhich is required to be reached directly is overlooked."]})]}),"\n",(0,o.jsx)(n.p,{children:"We therefore try to choose the clearest examples possible."}),"\n",(0,o.jsxs)(n.p,{children:["The example domain ",(0,o.jsx)(n.code,{children:"landscape.example.com"})," is used for hosts of the following names:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"api.zone1.landscape.example.com"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"api-internal.zone1.landscape.example.com"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"manager.landscape.example.com"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,o.jsx)(n.p,{children:"This allows Docker images to be pulled via a proxy."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/configuration.yml"',children:'##########################################################\n# proxy\n\ndocker_configure_proxy: true\ndocker_proxy_http: "http://{{ groups[\'manager\'][0] }}:3128"\ndocker_proxy_https: "{{ docker_proxy_http }}"\n\n# Due to the fact, that Golang supports CIDR blocks its a good idea to exclude local networks,\n# there might be cases where CIDR excludes are ignored when calling non-golang binaries.\ndocker_proxy_no_proxy_extra:\n  - landscape.example.com\n  - "10.0.0.0/8"\n  - "172.16.0.0/12"\n  - "192.168.0.0/16"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"apt",children:"APT"}),"\n",(0,o.jsx)(n.p,{children:"This allows APT packages to be downloaded via a proxy."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/configuration.yml"',children:"##########################################################\n# proxy\n\nproxy_proxies:\n  http: \"http://{{ groups['manager'][0] }}:3128\"\n  https: \"http://{{ groups['manager'][0] }}:3128\"\n\n# Due to the fact, that APT and libcurl does not support CIDR blocks, we cannot use global excludes\n# using CIDR expressions\nproxy_no_proxy_extra:\n  - landscape.example.com\n"})}),"\n",(0,o.jsx)(n.h3,{id:"openstack",children:"OpenStack"}),"\n",(0,o.jsx)(n.p,{children:"Proxy settings for containers such as Magnum that need internet access."}),"\n",(0,o.jsxs)(n.p,{children:["Exclude all internal adresses, ",(0,o.jsx)(n.em,{children:"especially"})," the internal api endpoint."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/kolla/configuration.yml"',children:'##########################################################\n# proxy\n\ncontainer_http_proxy: "http://{{ groups[\'manager\'][0] }}:3128"\ncontainer_https_proxy: "http://{{ groups[\'manager\'][0] }}:3128"\n\n# Due to the fact, that openstacks relies on python, we cannot trust that global CIDR\n# excludes are working in general but it they don\'t harm\ncontainer_no_proxy: "localhost,127.0.0.1,landscape.example.com,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"kubernetes--k3s",children:"Kubernetes / K3s"}),"\n",(0,o.jsxs)(n.p,{children:["Settings for the OSISM Kubernetes cluster, which is operated independently of Openstack.\nThese settings affect all http and https requests of the K3s installation as they are passed as environment variables via the systemd unit.\nFor this reason, ",(0,o.jsx)(n.code,{children:"NO_PROXY"})," must be configured so that the network between the K8S nodes is explicitly excluded."]}),"\n",(0,o.jsx)(n.p,{children:"An example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="environments/configuration.yml"',children:'##########################################################\n# proxy\n\nproxy_env:\n  HTTP_PROXY: "http://{{ groups[\'manager\'][0] }}:3128"\n  HTTPS_PROXY: "http://{{ groups[\'manager\'][0] }}:3128"\n  # Due to the fact, that k8s is based on Golang supports CIDR blocks its a good idea to exclude local networks,\n  # there might be really rare cases where CIDR excludes are ignored when calling non-golang binaries.\n  NO_PROXY: "localhost,127.0.0.1,landscape.example.com,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);