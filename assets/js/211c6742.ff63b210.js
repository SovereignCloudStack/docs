"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85879],{69065:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"iaas/guides/migration-guide/rook/index","title":"Migrate from Ceph-Ansible to Rook","description":"Rookify is developed to migrate from Ceph-Ansible to Rook in place and without downtime.","source":"@site/docs/02-iaas/guides/migration-guide/rook/index.md","sourceDirName":"02-iaas/guides/migration-guide/rook","slug":"/iaas/guides/migration-guide/rook/","permalink":"/docs/iaas/guides/migration-guide/rook/","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/migration-guide/rook/index.md","tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"sidebar_label":"Rook","sidebar_position":31},"sidebar":"docs","previous":{"title":"Migration Guide","permalink":"/docs/iaas/guides/migration-guide/"},"next":{"title":"Components","permalink":"/docs/category/components"}}');var s=o(74848),t=o(28453);const r={sidebar_label:"Rook",sidebar_position:31},l="Migrate from Ceph-Ansible to Rook",a={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Parameters",id:"parameters",level:3},{value:"General",id:"general",level:4},{value:"Logging",id:"logging",level:4},{value:"Ceph",id:"ceph",level:4},{value:"SSH",id:"ssh",level:4},{value:"Kubernetes",id:"kubernetes",level:4},{value:"Migration_modules",id:"migration_modules",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"SSH Issues",id:"ssh-issues",level:3},{value:"Frozen State",id:"frozen-state",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"migrate-from-ceph-ansible-to-rook",children:"Migrate from Ceph-Ansible to Rook"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Rookify is developed to migrate from Ceph-Ansible to Rook ",(0,s.jsx)(n.em,{children:"in place"})," and ",(0,s.jsx)(n.em,{children:"without downtime"}),".\nNevertheless, it is ",(0,s.jsx)(n.strong,{children:"strongly advised"})," to test Rookify in a controlled environment first, such as the ",(0,s.jsx)(n.a,{href:"https://github.com/osism/testbed",children:"OSISM testbed"}),". Additionally ensure that precautionary backups are made and all other necessary safety measures are in place."]})}),"\n",(0,s.jsxs)(n.p,{children:["For a condensed summary of the information covered here, refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/rookify",children:"Rookify GitHub repository"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The primary configuration file for Rookify is ",(0,s.jsx)(n.code,{children:"config.yaml"}),". The repository includes an example file for general use, as well as one specifically tailored for OSISM based setups:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/rookify/blob/main/config.example.yaml",children:"config.example.yaml"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/rookify/blob/main/config.example.osism.yaml",children:"config.example.osism.yaml"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"general",children:"General"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.example.yaml"',children:"general:\n  machine_pickle_file: data.pickle\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"general"})," section allows for the optional definition of a pickle file, which saves the state of the migration as serialized objects on disk. The pickle file can be named as desired."]}),"\n",(0,s.jsx)(n.h4,{id:"logging",children:"Logging"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.example.yaml"',children:'logging:\n  level: INFO # level at which logging should start\n  format:\n    time: "%Y-%m-%d %H:%M.%S" # other example: "iso"\n    renderer: console # or: json\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"logging"})," section allows for specification of ",(0,s.jsx)(n.code,{children:"structlog"}),". The ",(0,s.jsx)(n.code,{children:"level"})," parameter can be set to any Python ",(0,s.jsx)(n.a,{href:"https://docs.python.org/3/library/logging.html#logging-levels",children:"log-levels"}),", such as ",(0,s.jsx)(n.code,{children:"NOTSET, DEBUG, INFO, WARNING, ERROR, CRITICAl"}),", but using ",(0,s.jsx)(n.code,{children:"INFO"})," is recommended."]}),"\n",(0,s.jsx)(n.h4,{id:"ceph",children:"Ceph"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.example.yaml"',children:"\nceph:\n  config: ./.ceph/ceph.conf\n  keyring: ./.ceph/ceph.client.admin.keyring\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ceph section specifies the paths for the ",(0,s.jsx)(n.code,{children:"ceph.conf"})," and ",(0,s.jsx)(n.code,{children:"ceph.client.admin.keyring"})," files on the target system (the system where Ceph-Ansible needs to be migrated to Rook)."]}),"\n",(0,s.jsx)(n.h4,{id:"ssh",children:"SSH"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.example.yaml"',children:"# specify the correct path to the private key\nssh:\n  private_key: /home/USER/.ssh/cloud.private\n  hosts:\n    testbed-node-0:\n      address: 192.168.16.10\n      user: dragon\n    testbed-node-1:\n      address: 192.168.16.11\n      user: dragon\n    testbed-node-2:\n      address: 192.168.16.12\n      user: dragon\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ssh"})," section specifies the ",(0,s.jsx)(n.code,{children:"private_key"})," and ",(0,s.jsx)(n.code,{children:"hosts"}),". The ",(0,s.jsx)(n.code,{children:"hosts"})," section includes hostnames or aliases (e.g. ",(0,s.jsx)(n.code,{children:"testbed-node-0"}),"), their IP addresses (e.g., for VPN connections, IPs starting with ",(0,s.jsx)(n.code,{children:"192.186..."}),"), and the user for login. If you are using the OSISM testbed, ensure the private key does not contain any extra strings like ",(0,s.jsx)(n.code,{children:"EOF"}),". The keys must be 'clean' to avoid connection errors."]}),"\n",(0,s.jsx)(n.h4,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.example.yaml"',children:"\nkubernetes:\n  config: ./k8s/config\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"kubernetes"})," section specifies the Kubernetes configuration (e.g. if you use ",(0,s.jsx)(n.code,{children:"kubectl"}),", this is usually located in ",(0,s.jsx)(n.code,{children:"~/.kube/config"}),") for Rookify's Kubernetes library. Rookify needs to connect to the Kubernetes cluster on the target systems to use Rook."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.example.yaml"',children:"rook:\n  cluster:\n    name: osism-ceph\n    namespace: rook-ceph\n  ceph:\n    image: quay.io/ceph/ceph:v18.2.1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"rook"})," sections requires information about the Rook installation on the target system. For the ",(0,s.jsx)(n.code,{children:"cluster"}),", Rookify needs the cluster name and namespace. Additionally, Rookify requires the Ceph version being used, i.e., the image version of the Ceph container."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Rookify does not install Rook for you. You need to provide a running Rook installation, i.e. a Rook Operator, on your target system."})}),"\n",(0,s.jsx)(n.p,{children:"For OSISM-specific migrations, Rookify needs additional information, such as the respective labels for the Rook resources:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.example.osism.yaml"',children:"rook:\n  cluster:\n    name: osism-ceph\n    namespace: rook-ceph\n    mds_placement_label: node-role.osism.tech/rook-mds\n    mgr_placement_label: node-role.osism.tech/rook-mgr\n    mon_placement_label: node-role.osism.tech/rook-mon\n    osd_placement_label: node-role.osism.tech/rook-osd\n    rgw_placement_label: node-role.osism.tech/rook-rgw\n  ceph:\n    image: quay.io/ceph/ceph:v18.2.1\n"})}),"\n",(0,s.jsx)(n.h4,{id:"migration_modules",children:"Migration_modules"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.example.yaml"',children:"migration_modules:\n- analyze_ceph\n- create_rook_cluster\n- migrate_mons\n- migrate_osds\n- migrate_osd_pools\n- migrate_mds\n- migrate_mds_pools\n- migrate_mgrs\n- migrate_rgws\n- migrate_rgw_pools\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Rookify uses a modular structure, allowing you to migrate various parts of Ceph-Ansible to Rook. The ",(0,s.jsx)(n.code,{children:"migration_modules"})," section specifies which modules need to be executed for the migration. Rookify contains more modules \u2014 check the ",(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/rookify/tree/main/src/rookify/modules",children:(0,s.jsx)(n.code,{children:"src/rookify/module"})})," directory to see the currently implemented modules."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Many modules depend on each other. For example, the ",(0,s.jsx)(n.code,{children:"analyze_ceph"})," module will automatically run with all other modules, so\nthere is no need to specify it. It\u2019s included here for clarity."]})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"ssh-issues",children:"SSH Issues"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:'"Failed to load private key"'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure the ",(0,s.jsx)(n.code,{children:"id-rsa"}),' keys are "clean" and do not contain unexpected strings like "<<EOF".']}),"\n",(0,s.jsxs)(n.li,{children:["Clean the keys manually, or use the following command to reformat the keyfile: ",(0,s.jsx)(n.code,{children:'ssh-keygen -p -N "" -f ssh.key'}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:'"Too many authentications error"'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This can occur if too many keys are loaded by the ssh-agent."}),"\n",(0,s.jsxs)(n.li,{children:["Disable the ssh-agent on your machine. You can do this manually or by allowing ",(0,s.jsx)(n.code,{children:"direnv"})," to use ",(0,s.jsx)(n.code,{children:".envrc"})," with the command ",(0,s.jsx)(n.code,{children:"direnv allow"}),". To install ",(0,s.jsx)(n.code,{children:"direnv"})," on your machine refer to ",(0,s.jsx)(n.a,{href:"https://direnv.net/docs/installation.html",children:"Direnv's documentation"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"frozen-state",children:"Frozen State"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the Rookify process freezes, check your connections."}),"\n",(0,s.jsxs)(n.li,{children:["In the OSISM testbed, ensure the VPN connection is active. For help to setup the VPN connection for the Testbed refer to ",(0,s.jsx)(n.a,{href:"https://osism.tech/docs/guides/other-guides/testbed/#vpn-access",children:"OSISM's documentation for testbed setup"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var i=o(96540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);