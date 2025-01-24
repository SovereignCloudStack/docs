"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60115],{91122:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"iaas/guides/concept-guide/bom","title":"Bill of Materials","description":"The brands, models and configurations listed are examples. There is no","source":"@site/docs/02-iaas/guides/concept-guide/bom.md","sourceDirName":"02-iaas/guides/concept-guide","slug":"/iaas/guides/concept-guide/bom","permalink":"/docs/iaas/guides/concept-guide/bom","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/concept-guide/bom.md","tags":[],"version":"current","sidebarPosition":50,"frontMatter":{"sidebar_label":"Bill of Materials","sidebar_position":50},"sidebar":"docs","previous":{"title":"Use cases","permalink":"/docs/iaas/guides/concept-guide/use-cases"},"next":{"title":"Deploy Guide","permalink":"/docs/iaas/guides/deploy-guide/"}}');var r=n(74848),o=n(28453);const i={sidebar_label:"Bill of Materials",sidebar_position:50},d="Bill of Materials",a={},l=[{value:"Control nodes",id:"control-nodes",level:2},{value:"Compute nodes",id:"compute-nodes",level:2},{value:"Storage nodes",id:"storage-nodes",level:2},{value:"Network nodes",id:"network-nodes",level:2},{value:"Manager nodes",id:"manager-nodes",level:2},{value:"Switches",id:"switches",level:2},{value:"Management switches",id:"management-switches",level:3},{value:"Leaf switches",id:"leaf-switches",level:3},{value:"Spine switches",id:"spine-switches",level:3},{value:"Network interface cards",id:"network-interface-cards",level:2}];function c(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"bill-of-materials",children:"Bill of Materials"})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"The brands, models and configurations listed are examples. There is no\nsingle best specification for building a cluster. It always depends very\nmuch on the requirements of the cluster and the situation. The examples\nare not minimal and include various preferences of ours. The choice of\nhardware always depends very much on the requirements, the available budget\nand also the future plans of the cluster. There is no universal hardware\nrecommendation that fits all cases. These are all just examples."})}),"\n",(0,r.jsx)(s.h2,{id:"control-nodes",children:"Control nodes"}),"\n",(0,r.jsx)(s.p,{children:"A control node is responsible for running all or most of the OpenStack\nservices that manage API services and their associated runtimes. These\nnodes are essential for users to interact with the cluster and maintain\nits managed state."}),"\n",(0,r.jsx)(s.p,{children:"However, control nodes typically do not run user virtual machines. It is\ntherefore advisable to replicate the control nodes to ensure high availability\nand fault tolerance. A good starting point for achieving RAFT quorum is to have\nthree control nodes."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"2x SSD with at least 480 GByte for the operating system"}),"\n",(0,r.jsx)(s.li,{children:"4x NVMe with at least 960 GByte for the services"}),"\n",(0,r.jsx)(s.li,{children:"128 GByte memory (it should be possible to upgrade to 256 GByte, or use 256\nGByte directly)"}),"\n",(0,r.jsx)(s.li,{children:"Dual port NIC with 25G or 100G (depending on which leaf switches are used)"}),"\n",(0,r.jsx)(s.li,{children:"2 CPU sockets each with at least 32 cores or 1 CPU socket with at least 64 cores"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Real world example:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.supermicro.com/de/products/system/clouddc/1u/sys-121c-tn10r",children:"https://www.supermicro.com/de/products/system/clouddc/1u/sys-121c-tn10r"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"compute-nodes",children:"Compute nodes"}),"\n",(0,r.jsx)(s.p,{children:"Compute nodes are dedicated to running users' virtual machines. They do not\nhost API services, storage services or network routers, other than the basic\nnetwork infrastructure required to connect virtual machines."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"2x SSD or NVMe with at least 480 GByte for the operating system"}),"\n",(0,r.jsx)(s.li,{children:"2x NVMe with at least 1.92 TByte for local storage recommended (if this is not implemented\nat the start, the model should be selected so that NVMe devices can be added later,\nthe size depends on which CPU and how much memory is used, 7.68 TByte is more likely to be used)"}),"\n",(0,r.jsx)(s.li,{children:"Dual port NIC with 25G or 100G (depending on which leaf switches are used)"}),"\n",(0,r.jsx)(s.li,{children:"CPU sockets and memory depends on the requirement"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Real world example:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.supermicro.com/de/products/twin",children:"https://www.supermicro.com/de/products/twin"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"storage-nodes",children:"Storage nodes"}),"\n",(0,r.jsx)(s.p,{children:"A dedicated storage node runs only storage services. This can be necessary in larger\ndeployments to protect the storage services from ressource starvation through user\nworkloads."}),"\n",(0,r.jsxs)(s.p,{children:["Read the ",(0,r.jsx)(s.a,{href:"https://docs.ceph.com/en/latest/start/hardware-recommendations/",children:"Ceph hardware recommendations"})," first."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"2x SSD or NVMe with at least 480 GByte for the operating system"}),"\n",(0,r.jsx)(s.li,{children:"Dual port NIC with 100G (we recommend always using 100G for storage nodes)"}),"\n",(0,r.jsx)(s.li,{children:"Storage devices depends on the requirement"}),"\n",(0,r.jsx)(s.li,{children:"CPU sockets and memory depends on the storage devices used"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"network-nodes",children:"Network nodes"}),"\n",(0,r.jsx)(s.p,{children:"A dedicated network node runs only network services. This is normally necessary to be\nable to map safety zones. External networks terminate on the network nodes."}),"\n",(0,r.jsx)(s.p,{children:"Real world example:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://www.supermicro.com/en/products/system/iot/1u/sys-110d-8c-fran8tp",children:"Supermicro SuperServer SYS-110D-8C-FRAN8TP"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"2x SSD or NVMe with at least 480 GByte for the operating system"}),"\n",(0,r.jsx)(s.li,{children:"2x DIMM slots with 32 GByte modules, leave 2 DIMM slots open for later expansion"}),"\n",(0,r.jsx)(s.li,{children:"If required, an additional dual port 25G or 100G NIC in the PCIe expansion slots"}),"\n",(0,r.jsx)(s.li,{children:"Intel Xeon Processor D-2733NT (this is onboard and not selectable)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"manager-nodes",children:"Manager nodes"}),"\n",(0,r.jsx)(s.p,{children:"The manager node, also known as the deploy node or deployment node, is designated\nto manage the deployment process of all services. It is often also utilized to host\ncomponents of the monitoring services. It serves as the operator's entry point into\nthe cluster for operations."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"2x SSD or NVMe with at least 1.92 TByte for the operating system and the services"}),"\n",(0,r.jsx)(s.li,{children:"64 GByte memory (it should be possible to upgrade to 128 GByte, or use 128 GByte directly)"}),"\n",(0,r.jsx)(s.li,{children:"Dual port NIC with 25G or 100G (depending on which leaf switches are used)"}),"\n",(0,r.jsx)(s.li,{children:"1 CPU socket with at least 16 cores"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Real world example:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.supermicro.com/de/products/system/clouddc/1u/sys-121c-tn10r",children:"https://www.supermicro.com/de/products/system/clouddc/1u/sys-121c-tn10r"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"switches",children:"Switches"}),"\n",(0,r.jsx)(s.h3,{id:"management-switches",children:"Management switches"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["1G: ",(0,r.jsx)(s.a,{href:"https://www.edge-core.com/product/as4610-54t/",children:"Edgecore AS4610-54T"})]}),"\n",(0,r.jsxs)(s.li,{children:["10G: ",(0,r.jsx)(s.a,{href:"https://www.edge-core.com/product/dcs202/",children:"Edgecore DCS202 - AS5835-54T"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"leaf-switches",children:"Leaf switches"}),"\n",(0,r.jsx)(s.p,{children:"It is recommended to always use 100G for the data plane and the storage nodes.\nEspecially when using all-flash storage nodes, there is then enough bandwidth\navailable. The more and the larger flash devices you use, the more bandwidth is\nrequired."}),"\n",(0,r.jsx)(s.p,{children:"With the leaf switches for the compute plane, it depends on how large the compute\nnodes are. The more CPU sockets/cores and the more memory the compute nodes have,\nthe more bandwidth is required on the compute nodes. Depending on how large the racks\nare (or better how much power you can use in it), it may make sense to work with 100G\nswitches for the compute plane or with 25G switches if 4x 25G per compute node are used\ninstead of 2x 25G per compute node (if the compute nodes are large enough)."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["25G: ",(0,r.jsx)(s.a,{href:"https://www.edge-core.com/product/dcs203/",children:"Edgecore DCS203 - AS7326-56X"})]}),"\n",(0,r.jsxs)(s.li,{children:["100G: ",(0,r.jsx)(s.a,{href:"https://www.edge-core.com/product/dcs204/",children:"Edgecore DCS204 - AS7726-32X"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"spine-switches",children:"Spine switches"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["100G: ",(0,r.jsx)(s.a,{href:"https://www.edge-core.com/product/dcs204/",children:"Edgecore DCS204 - AS7726-32X"})]}),"\n",(0,r.jsxs)(s.li,{children:["400G: ",(0,r.jsx)(s.a,{href:"https://www.edge-core.com/product/dcs510/",children:"Edgecore DCS510 - AS9716-32D"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"network-interface-cards",children:"Network interface cards"})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var t=n(96540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);