"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4980],{60486:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"iaas/guides/deploy-guide/provisioning","title":"Provisioning of bare-metal nodes","description":"For the initial deployment of the management plane and the control plane of OSISM,","source":"@site/docs/02-iaas/guides/deploy-guide/provisioning.md","sourceDirName":"02-iaas/guides/deploy-guide","slug":"/iaas/guides/deploy-guide/provisioning","permalink":"/docs/iaas/guides/deploy-guide/provisioning","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/deploy-guide/provisioning.md","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_label":"Provisioning","sidebar_position":30},"sidebar":"docs","previous":{"title":"Manager","permalink":"/docs/iaas/guides/deploy-guide/manager"},"next":{"title":"Bootstrap","permalink":"/docs/iaas/guides/deploy-guide/bootstrap"}}');var o=i(74848),t=i(28453);const r={sidebar_label:"Provisioning",sidebar_position:30},l="Provisioning of bare-metal nodes",d={},a=[{value:"Automated Installation using Node Images",id:"automated-installation-using-node-images",level:2},{value:"Manual provisioning",id:"manual-provisioning",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"provisioning-of-bare-metal-nodes",children:"Provisioning of bare-metal nodes"})}),"\n",(0,o.jsx)(n.p,{children:"For the initial deployment of the management plane and the control plane of OSISM,\nthe nodes must be pre-provisioned with Ubuntu 22.04. Currently, only Ubuntu 22.04 is supported\nby OSISM."}),"\n",(0,o.jsx)(n.p,{children:"Data plane nodes can be automatically provisioned after the initial deployment and\ndo not need to be pre-provisioned."}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended not to install the initial nodes of the management plane and the\ncontrol plane manually. An ISO image is provided for this purpose which automatically\nprovisions a node. The ISO images are available for download in the\n",(0,o.jsx)(n.a,{href:"https://github.com/osism/node-image",children:"osism/node-image"})," repository."]}),"\n",(0,o.jsx)(n.h2,{id:"automated-installation-using-node-images",children:"Automated Installation using Node Images"}),"\n",(0,o.jsx)(n.p,{children:"There are different variants of the ISO image. The variants differ in the disc layout."}),"\n",(0,o.jsxs)(n.p,{children:["The pre-build variants are described in the ",(0,o.jsx)(n.a,{href:"https://github.com/osism/node-image/blob/main/README.md",children:"osism/node-image"})," repository."]}),"\n",(0,o.jsx)(n.p,{children:"A good way to provision the nodes is to use virtual media mounts via the usually available Redfish\nfunctionality of the BMC of the servers used. In this way, the basic installation can be carried\nout without external dependencies such as adapting the switch configuration, DHCP, upstream connectivity, etc.\nIn many cases, this simplifies the process, makes it more automation-friendly and avoids potential sources of error."}),"\n",(0,o.jsxs)(n.p,{children:["OSISM also provides a ",(0,o.jsx)(n.a,{href:"https://github.com/osism/node-image?tab=readme-ov-file#creation-of-specific-images",children:"tool"})," to generate node images specific for you needs."]}),"\n",(0,o.jsx)(n.p,{children:"This makes particular sense for the node-provisioning in the following situations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Make complex configurations like layer3 underlay"}),"\n",(0,o.jsx)(n.li,{children:"Add your SSH keys to the image"}),"\n",(0,o.jsx)(n.li,{children:"Configure a specific root password"}),"\n",(0,o.jsxs)(n.li,{children:["Change other characteristics of the setup","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Templates"}),"\n",(0,o.jsx)(n.li,{children:"Partitioning"}),"\n",(0,o.jsx)(n.li,{children:"Packages"}),"\n",(0,o.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Develop new standard images"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The procedures for building custom images are described in the\n",(0,o.jsx)(n.a,{href:"https://github.com/osism/node-image/blob/main/README.md",children:"osism/node-image"})," repository."]}),"\n",(0,o.jsx)(n.h2,{id:"manual-provisioning",children:"Manual provisioning"}),"\n",(0,o.jsx)(n.p,{children:"If none of the provided variants is suitable, this section describes the manual\ninstallation with the help of the Ubuntu 22.04 live ISO image. The manual installation\nis possible without network connectivity."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Download the latest ISO image for Ubuntu 22.04 from ",(0,o.jsx)(n.a,{href:"https://www.releases.ubuntu.com/22.04/",children:"releases.ubuntu.com"}),".","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use the ",(0,o.jsx)(n.code,{children:"ubuntu-22.04.1-live-server-amd64.iso"})," image."]}),"\n",(0,o.jsx)(n.li,{children:"The version number may be different, always use the latest available version of 22.04 LTS."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"English"})," as language."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"Install Ubuntu Server"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"English as language"})," (again)."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose your location (e.g. ",(0,o.jsx)(n.code,{children:"Germany"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"en_US.UTF-8"})," as locale."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose the keyboard layout from a list, use ",(0,o.jsx)(n.code,{children:"English (US)"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose and configure the primary network interface.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Depending on the environment, the network may not work at this point. Then select any interface\nand then select ",(0,o.jsx)(n.code,{children:"Do not configure the network at this time"})," in the next step."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Set the hostname.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The hostname is e.g. ",(0,o.jsx)(n.code,{children:"node"})," and not a FQDN like ",(0,o.jsx)(n.code,{children:"node.systems.osism.xyz"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"osism"})," as full name for the new user."]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"osism"})," as the username for the account.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The later used operator user ",(0,o.jsx)(n.code,{children:"dragon"})," is created during the bootstrap and ",(0,o.jsx)(n.strong,{children:"should not be created"})," during the installation.\nDo not use ",(0,o.jsx)(n.code,{children:"dragon"})," as username."]}),"\n",(0,o.jsx)(n.li,{children:"The account is only needed initially and can be deleted after completion of the bootstrap."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Set a password for the account."}),"\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"Manual"})," as partitioning method and execute the partitioning according to company specifications","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The use of a UEFI is recommended"}),"\n",(0,o.jsx)(n.li,{children:"The use of a RAID is recommended. We prefer the use of software RAIDs to make us less dependent on hardware.\nBut there is nothing against using hardware RAIDs."}),"\n",(0,o.jsxs)(n.li,{children:["The use of a LVM2 is recommended. ",(0,o.jsx)(n.code,{children:"system"})," is recommended as the name for the volume group."]}),"\n",(0,o.jsxs)(n.li,{children:["Dedicated disks may be provided for ",(0,o.jsx)(n.code,{children:"/var/lib/docker"})," on the controller nodes. In this case, do not\nuse an LV for ",(0,o.jsx)(n.code,{children:"/var/lib/docker"})," but the devices provided for it."]}),"\n",(0,o.jsx)(n.li,{children:"Do not configure devices that are not required for the operating system."}),"\n",(0,o.jsxs)(n.li,{children:["The use of own file systems for the following mountpoints is recommended. The size of the partitions/LVs\nis minimal. Depending on the node type, the partitions/LVs should be made larger.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/"})," (10 GByte, logical volume ",(0,o.jsx)(n.code,{children:"root"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/home"})," (2 GByte, logical volume ",(0,o.jsx)(n.code,{children:"home"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/tmp"})," (5 GByte, logical volume ",(0,o.jsx)(n.code,{children:"tmp"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/var/lib/ceph"})," (50 GByte, logical volume ",(0,o.jsx)(n.code,{children:"ceph"}),") (optional for storage nodes)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/var/lib/docker"})," (30 GByte, logical volume ",(0,o.jsx)(n.code,{children:"docker"}),", do not set the ",(0,o.jsx)(n.code,{children:"nosuid"})," flag on ",(0,o.jsx)(n.code,{children:"/var/lib/docker"}),")","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["When using XFS as the file system for ",(0,o.jsx)(n.code,{children:"/var/lib/docker"}),", note the following: Running on XFS without ",(0,o.jsx)(n.code,{children:"d_type"})," support\ncauses Docker to skip the attempt to use the ",(0,o.jsx)(n.code,{children:"overlay"})," or ",(0,o.jsx)(n.code,{children:"overlay2"})," driver."]}),"\n",(0,o.jsx)(n.li,{children:"100 GB should be used on a control node at the beginning."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/var/lib/docker"})," must be extended later during operation depending on the node type. You do this\nin operation when you can see how many logs etc. are generated."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/var/log/audit"})," (1 GByte, logical volume ",(0,o.jsx)(n.code,{children:"audit"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/var"})," (10 GByte, logical volume ",(0,o.jsx)(n.code,{children:"var"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"swap"})," (8 GByte, logical volume ",(0,o.jsx)(n.code,{children:"swap"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"No automatic updates"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"OpenSSH server"})," as software to install.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Do not install any other software component."})," Everything you need will be installed later by OSISM.\nIn particular, it is not necessary to install a desktop environment."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"After completion, restart the system."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);