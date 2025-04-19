"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73405],{74511:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scs-0112-v1-sonic","title":"SONiC Support in SCS","description":"SCSS-0112 outlines architectural decisions in SCS in regards to SONiC support and integration.\\n","source":"@site/standards/scs-0112-v1-sonic.md","sourceDirName":".","slug":"/scs-0112-v1-sonic","permalink":"/standards/scs-0112-v1-sonic","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SONiC Support in SCS","type":"Decision Record","status":"Draft","track":"IaaS","description":"SCSS-0112 outlines architectural decisions in SCS in regards to SONiC support and integration.\\n"},"sidebar":"standards","previous":{"title":"scs-0112: SONiC Support in SCS","permalink":"/standards/iaas/scs-0112"},"next":{"title":"scs-0113: Security Groups Decision Record","permalink":"/standards/iaas/scs-0113"}}');var s=n(74848),o=n(28453);const r={title:"SONiC Support in SCS",type:"Decision Record",status:"Draft",track:"IaaS",description:"SCSS-0112 outlines architectural decisions in SCS in regards to SONiC support and integration.\n"},a=void 0,l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"SONiC as a network OS where dynamic network configuration in Openstack is required",id:"sonic-as-a-network-os-where-dynamic-network-configuration-in-openstack-is-required",level:3},{value:"Automation and tooling for SONiC",id:"automation-and-tooling-for-sonic",level:3},{value:"OVN for SONiC",id:"ovn-for-sonic",level:3},{value:"Design Considerations",id:"design-considerations",level:2},{value:"Options considered",id:"options-considered",level:3},{value:"Option 1: SCS distribution of SONiC",id:"option-1-scs-distribution-of-sonic",level:4},{value:"Option 2: SCS will support SONiC but will not change it",id:"option-2-scs-will-support-sonic-but-will-not-change-it",level:4},{value:"Option 3: SCS develops SCS-specific modules as add-on for any SONiC (Community or Enterprise)",id:"option-3-scs-develops-scs-specific-modules-as-add-on-for-any-sonic-community-or-enterprise",level:4},{value:"Option 4: SCS does not adopt SONiC at all",id:"option-4-scs-does-not-adopt-sonic-at-all",level:4},{value:"Open questions",id:"open-questions",level:2},{value:"State of SONiC community?",id:"state-of-sonic-community",level:3},{value:"Decision",id:"decision",level:2},{value:"Related Documents",id:"related-documents",level:2}];function c(e){const i={a:"a",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(i.p,{children:["SONiC support in ",(0,s.jsx)(i.a,{href:"https://scs.community",children:"SCS"})," was considered within the context of ",(0,s.jsx)(i.a,{href:"https://scs.community/tenders/lot4",children:"VP04 Networking"}),", sub-lot 1 SDN scalability. Different challenges and approaches to SDN scalability have been explored and more specifically those who require support in the underlay network. Using SONiC in the underlay can have benefits for SCS users by using a standardized OS for network devices and also having a clear path for network scalability when using SONiC. For this to work, we have to define how SONiC is used and supported architecturally in SCS. This document outlines the architectural decisions in regard to SONiC support and integration in SCS."]}),"\n",(0,s.jsx)(i.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(i.p,{children:"In respect to SDN scalability improvements in Openstack and SCS, there are several ways SONiC can be leveraged."}),"\n",(0,s.jsx)(i.h3,{id:"sonic-as-a-network-os-where-dynamic-network-configuration-in-openstack-is-required",children:"SONiC as a network OS where dynamic network configuration in Openstack is required"}),"\n",(0,s.jsx)(i.p,{children:"In many network designs for Openstack, configuration of the actual network hardware by Openstack Neutron service is required. The following network designs apply:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"VLANs. Using VLANs to segment tenant networks requires the network switch to be configured. This can be manual or dynamic configuration via the ML2 Neutron driver."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"EVPN/VXLAN on the switch. In this use case, SONiC runs on leaf switches. Leafs terminate VXLAN endpoints and run BGP/EVPN for the control plane. Again, the ML2 Neutron driver is used to dynamically configure the network switch. The link between the switch and the service is regular VLAN."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"VXLAN on servers and switches. This is a hybrid use case, where most of the SDN is pushed to the server, but the network is still involved where support for bare metal hosts is needed."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"automation-and-tooling-for-sonic",children:"Automation and tooling for SONiC"}),"\n",(0,s.jsx)(i.p,{children:"There is no tooling in SCS or Openstack communities to facilitate the rollout and configuration of enterprise scale SONiC deployments. Netbox and OSISM can be integrated, so that Netbox becomes the source of truth for network configuration and OSISM supports the initial rollout and configuration for the switches."}),"\n",(0,s.jsx)(i.h3,{id:"ovn-for-sonic",children:"OVN for SONiC"}),"\n",(0,s.jsx)(i.p,{children:"OVN and OVS are extensively leveraged in Neutron to SDN. In large scale deployments, OVN can become a bottleneck by exhausting resources on network nodes. SONiC can host the OVN control plane as a module (container) and spare the resources in network nodes. There is however a potential other bottleneck on SONiC hardware, as OVN control plane can be resource intensive. This is a potential area for further investigation."}),"\n",(0,s.jsx)(i.h2,{id:"design-considerations",children:"Design Considerations"}),"\n",(0,s.jsx)(i.p,{children:"There are different ways SONiC support can be implemented in SCS, very similar to existing approaches with Linux."}),"\n",(0,s.jsx)(i.h3,{id:"options-considered",children:"Options considered"}),"\n",(0,s.jsx)(i.h4,{id:"option-1-scs-distribution-of-sonic",children:"Option 1: SCS distribution of SONiC"}),"\n",(0,s.jsx)(i.p,{children:"With this approach, SCS will create its own distribution of SONiC, similar to what Debian or Arch are for Linux. This distribution will be based on the SONiC community distribution, but will have SCS specific modules, which will be developed and maintained by SCS. SCS will contribute its code to dedicated SCS repositories and build its own SONiC images. The code can eventually be pushed upstream, but not as top priority. This approach will allow SCS to have a clear path for SONiC support and integration in SCS, but will also require SCS to maintain a distribution of SONiC, which is a significant effort. Upstream/downstream changes will have to be managed and maintained. However, the advantage is that SCS will have full control over the distribution and can make changes as needed. Users will have to use the SCS distribution of SONiC, which will be based on the community distribution. If users already deploy community or enterprise SONiC, a migration path to SCS SONiC will be needed."}),"\n",(0,s.jsx)(i.h4,{id:"option-2-scs-will-support-sonic-but-will-not-change-it",children:"Option 2: SCS will support SONiC but will not change it"}),"\n",(0,s.jsx)(i.p,{children:"SCS supports enterprise and community versions of SONiC but will not develop its own code for it. This will significantly limit the ability to develop new features for SDN, because all changes will be done in the tooling around SONiC and not in the OS itself. The advantages are that SCS will still improve SONiC support and will have minimal effort for this. The downside is that some features like OVN control plane for SONiC will not be possible."}),"\n",(0,s.jsx)(i.h4,{id:"option-3-scs-develops-scs-specific-modules-as-add-on-for-any-sonic-community-or-enterprise",children:"Option 3: SCS develops SCS-specific modules as add-on for any SONiC (Community or Enterprise)"}),"\n",(0,s.jsx)(i.p,{children:"In option 3, SCS will change SONiC by releasing its own modules for it. Those module can be provided as add-ons and installed on top of any version, community or enterprise. While compatibility between the modules the SONiC releases will need to be maintained, there will be much broader support for SONiC and users will be able to pick and chose distributions based on their existing relationships and experience and use SCS independent of this. In cases where SCS provides contributions to core SONiC, those can be made in upstream Community repositories, so that the whole community including the propitiatory vendors can adopt them eventually."}),"\n",(0,s.jsx)(i.h4,{id:"option-4-scs-does-not-adopt-sonic-at-all",children:"Option 4: SCS does not adopt SONiC at all"}),"\n",(0,s.jsx)(i.p,{children:"This option entails no dedicated effort on SCS's part in supporting SONiC network equipment for its users and software stack. Users can still use SONiC from what is available by other projects or if they invest the effort themselves. This has several disadvantages:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"SCS is not contributing to the SONiC community"}),"\n",(0,s.jsx)(i.li,{children:"the value for SCS by users who already use or plan to invest in SONiC is diminished"}),"\n",(0,s.jsx)(i.li,{children:"users have less incentive to use community SONiC and switch to Enterprise SONiC"}),"\n",(0,s.jsx)(i.li,{children:"SCS will not be able to leverage SONiC for SDN scalability improvements"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"open-questions",children:"Open questions"}),"\n",(0,s.jsx)(i.h3,{id:"state-of-sonic-community",children:"State of SONiC community?"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"community version: mature or not?"})}),"\n",(0,s.jsx)(i.p,{children:'Commits: between 40-52 per month. Contributors to master: 10-20. Mailing list: 6 lists, about 10-30 messages/month for list. Community version supports 25 hardware vendors. Requires significant time and resource investment and "Explorer\'s mindset".'}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"enterprise version: mature or not?"})}),"\n",(0,s.jsx)(i.p,{children:"Multiple vendor distributions. Expensive in general"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"release schedule - how often are features and bugfixes released?"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"New tags appears on different periods, once 2 times per month, other 3 months between releases."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"adoption penetration - how many vendors use it? What type of vendors (big, medium and large)?"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Good initial adoption: Microsoft, Target. Adoption requires time and money"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Is SONiC being overtaken by alternatives: SmartNICs and DPUs? How relevant is it still and will be in the coming years?"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Actually not, because of different use cases."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Sustainability of community SONIC for 2025+"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The SONiC community is healthy and growing, however progress is slower due to factors like investment of resources. The barrier of entry is much higher than other similar OSS projects."}),"\n",(0,s.jsx)(i.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(i.p,{children:"IaaS team recommends to use Option 3: SCS develops SCS-specific modules as add-on for any SONiC (Community or Enterprise). It has the best tradeoff between time and resource investment and benefits for the community. Adopting this strategy would allow SCS to be agile and quickly adopt SONiC, by providing users with clear path while allowing the freedom to choose different hardware and software vendors. SCS code can be packaged independently of each SONiC distribution and installed as add-on. Also, SCS contributions to core SONiC will be done directly upstream, so that the whole community can benefit from them."}),"\n",(0,s.jsx)(i.p,{children:"Work on hardware support in SONiC should be raised in upstream and SCS shouldn't make significant investments in this area."}),"\n",(0,s.jsx)(i.h2,{id:"related-documents",children:"Related Documents"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://input.scs.community/VP04-issues-455-research-SDN-scalability",children:"Research SDN scalability"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://input.scs.community/SCS-DR-SONIC-usage",children:"Results SONIC Usage in SCS"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://input.scs.community/oW_plPZ6RkuXs3k9mrRDdw#",children:"SONiC Community research"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);