"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53920],{42265:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"iaas/guides/operations-guide/openstack/index","title":"OpenStack","description":"Create an external network","source":"@site/docs/02-iaas/guides/operations-guide/openstack/index.md","sourceDirName":"02-iaas/guides/operations-guide/openstack","slug":"/iaas/guides/operations-guide/openstack/","permalink":"/docs/iaas/guides/operations-guide/openstack/","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/operations-guide/openstack/index.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"OpenStack"},"sidebar":"docs","previous":{"title":"Network","permalink":"/docs/iaas/guides/operations-guide/network"},"next":{"title":"Tools","permalink":"/docs/iaas/guides/operations-guide/openstack/tools/"}}');var o=s(74848),i=s(28453);const r={sidebar_label:"OpenStack"},l="OpenStack",c={},d=[{value:"Create an external network",id:"create-an-external-network",level:2},{value:"Reboot a compute node",id:"reboot-a-compute-node",level:2},{value:"Add a new compute node",id:"add-a-new-compute-node",level:2},{value:"Remove a compute node",id:"remove-a-compute-node",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"openstack",children:"OpenStack"})}),"\n",(0,o.jsx)(n.h2,{id:"create-an-external-network",children:"Create an external network"}),"\n",(0,o.jsxs)(n.p,{children:["The play ",(0,o.jsx)(n.code,{children:"network-external"})," is available and usable as of OSISM 7.0.6."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply network-external\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Available parameters for the OpenStack Environment (",(0,o.jsx)(n.code,{children:"environments/openstack/configuration.yml"}),")."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"network_external_allocation_pool_end"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:'"192.168.112.200"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"network_external_allocation_pool_start"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:'"192.168.112.100"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"network_external_cidr"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:'"192.168.112.0/20"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"network_external_cloud"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"admin"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"network_external_gateway_ip"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:'"192.168.112.5"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"network_external_name"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"public"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"network_external_provider_network_type"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"flat"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"network_external_provider_physical_network"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"physnet1"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"network_external_state"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"present"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"reboot-a-compute-node",children:"Reboot a compute node"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Live migrate all instances running on the compute node\nwith the help of the ",(0,o.jsx)(n.a,{href:"./tools/resource-manager#live-migration",children:"OpenStack Resource Manager"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Ensure that no more instances are running on the compute node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ps ax | grep qemu\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Reboot the compute node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply reboot -l NODE -e ireallymeanit=yes\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Wait for the compute node to reboot"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Re-enable the compute service"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'openstack --os-cloud admin compute service set --enable --disable-reason "" NODE nova-compute\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check compute service"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"openstack --os-cloud admin compute service list --host NODE --service nova-compute\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"add-a-new-compute-node",children:"Add a new compute node"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add the operater user"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply operator -u osism -l NODE\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run the bootstrap"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply bootstrap -l NODE\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"When a routed network fabric is used deploy the FRR service (optional)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply frr -l NODE\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy logging service and Prometheus exporters"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply common -l NODE\nosism apply prometheus -l NODE\nosism apply scaphandre -l NODE\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy network services"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply openvswitch -l NODE\nosism apply ovn -l NODE\nosism apply neutron -l NODE\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you do not use the OVN SDN skip ",(0,o.jsx)(n.code,{children:"osism apply ovn -l NODE"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy compute services"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply nova -l NODE\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy telemetry services (optional)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply ceilometer -l NODE\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy Netdata service (optional)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply netdata -l NODE\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add compute node to Prometheus monitoring"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply prometheus -l monitoring\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Refresh the ",(0,o.jsx)(n.code,{children:"/etc/hosts"})," file"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply hosts\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Refresh the SSH client configuration file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply sshconfig\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add compute node to the known hosts file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply known-hosts\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Containers that run on a compute node. Versions may differ. There is no ",(0,o.jsx)(n.code,{children:"ceilometer_compute"})," container\nif you have not deployed the optional OpenStack telemetry service."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'$ docker ps\nCONTAINER ID   IMAGE                                                      COMMAND                  CREATED         STATUS                   PORTS                         NAMES\n559e5176695c   quay.io/osism/nova-compute:27.1.1.20230919                 "dumb-init --single-\u2026"   5 minutes ago   Up 5 minutes (healthy)                                 nova_compute\n31248d71ab7d   quay.io/osism/nova-libvirt:8.0.0.20230919                  "dumb-init --single-\u2026"   6 minutes ago   Up 6 minutes (healthy)                                 nova_libvirt\n9292030d706c   quay.io/osism/nova-ssh:27.1.1.20230919                     "dumb-init --single-\u2026"   6 minutes ago   Up 6 minutes (healthy)                                 nova_ssh\nfda4b6fb30c8   quay.io/osism/neutron-metadata-agent:22.0.3.20230919       "dumb-init --single-\u2026"   2 hours ago     Up 2 hours (healthy)                                   neutron_ovn_metadata_agent\n0e3ec450b668   quay.io/osism/ceilometer-compute:20.0.1.20230919           "dumb-init --single-\u2026"   6 hours ago     Up 6 hours (healthy)                                   ceilometer_compute\n25ff9702e0e5   quay.io/osism/prometheus-libvirt-exporter:6.0.0.20230919   "dumb-init --single-\u2026"   6 hours ago     Up 6 hours                                             prometheus_libvirt_exporter\n1bff2e29923b   quay.io/osism/prometheus-cadvisor:0.45.0.20230919          "dumb-init --single-\u2026"   6 hours ago     Up 6 hours                                             prometheus_cadvisor\n602832daf237   quay.io/osism/prometheus-node-exporter:1.4.0.20230919      "dumb-init --single-\u2026"   6 hours ago     Up 6 hours                                             prometheus_node_exporter\nd4de2f32cdf8   quay.io/osism/ovn-controller:23.6.1.20230919               "dumb-init --single-\u2026"   6 hours ago     Up 6 hours                                             ovn_controller\n3bf43ae5a94f   quay.io/osism/openvswitch-vswitchd:3.1.2.20230919          "dumb-init --single-\u2026"   7 hours ago     Up 7 hours (healthy)                                   openvswitch_vswitchd\nebc048b02ab2   quay.io/osism/openvswitch-db-server:3.1.2.20230919         "dumb-init --single-\u2026"   7 hours ago     Up 7 hours (healthy)                                   openvswitch_db\n4f33dfa66c14   hubblo/scaphandre:0.5.0                                    "scaphandre promethe\u2026"   7 hours ago     Up 7 hours               10.10.129.64:9155->8080/tcp   scaphandre\n9b1f6342dc60   quay.io/osism/cron:3.0.20230919                            "dumb-init --single-\u2026"   7 hours ago     Up 7 hours                                             cron\n718aecaddde1   quay.io/osism/kolla-toolbox:16.1.1.20230919                "dumb-init --single-\u2026"   7 hours ago     Up 7 hours                                             kolla_toolbox\nf6f9422c1853   quay.io/osism/fluentd:4.5.1.20230919                       "dumb-init --single-\u2026"   7 hours ago     Up 7 hours                                             fluentd\n'})}),"\n",(0,o.jsx)(n.h2,{id:"remove-a-compute-node",children:"Remove a compute node"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the configuration repository remove the compute node everywhere. Then update the configuration\nrepository on the manager with ",(0,o.jsx)(n.code,{children:"osism apply configuration"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Live migrate all instances running on the compute node\nwith the help of the ",(0,o.jsx)(n.a,{href:"./tools/resource-manager#live-migration",children:"OpenStack Resource Manager"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Evacuate all instances on the compute node\nwith the help of the ",(0,o.jsx)(n.a,{href:"./tools/resource-manager#evacutation",children:"OpenStack Resource Manager"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Ensure that no more instances are running on the compute node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ps ax | grep qemu\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Stop all OpenStack compute services on the compute node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"systemctl stop kolla-nova_ssh-container.service\nsystemctl stop kolla-nova_libvirt-container.service\nsystemctl stop kolla-nova_compute-container.service\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Delete the compute service"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$ openstack --os-cloud admin compute service list --host NODE\n+--------------------------------------+----------------+---------+----------+----------+-------+----------------------------+\n| ID                                   | Binary         | Host    | Zone     | Status   | State | Updated At                 |\n+--------------------------------------+----------------+---------+----------+----------+-------+----------------------------+\n| 90345eb5-cf2f-47ef-becc-758ee36fb132 | nova-compute   | NODE    | nova     | enabled  | down  | 2023-12-21T11:53:00.000000 |\n+--------------------------------------+----------------+---------+----------+----------+-------+----------------------------+\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$ openstack --os-cloud admin compute service delete 90345eb5-cf2f-47ef-becc-758ee36fb132\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Stop all OpenStack network services on the compute node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"systemctl stop kolla-neutron_ovn_metadata_agent-container.service\nsystemctl stop kolla-ovn_controller-container.service\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Delete the network services"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$ openstack --os-cloud admin network agent list --host NODE\n+--------------------------------------+----------------------+---------+-------------------+-------+-------+----------------------------+\n| ID                                   | Agent Type           | Host    | Availability Zone | Alive | State | Binary                     |\n+--------------------------------------+----------------------+---------+-------------------+-------+-------+----------------------------+\n| 0a5708ea-ba8b-5fde-8187-c6b24d3cf5ed | OVN Metadata agent   | NODE    |                   | :-)   | UP    | neutron-ovn-metadata-agent |\n| NODE                                 | OVN Controller agent | NODE    |                   | :-)   | UP    | ovn-controller             |\n+--------------------------------------+----------------------+---------+-------------------+-------+-------+----------------------------+\n\n$ openstack --os-cloud admin network agent delete 0a5708ea-ba8b-5fde-8187-c6b24d3cf5ed\n$ openstack --os-cloud admin network agent delete NODE\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Refresh the facts"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply facts\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Refresh the ",(0,o.jsx)(n.code,{children:"/etc/hosts"})," file"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply hosts\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Refresh the SSH client configuration file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply sshconfig\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Remove compute node from Prometheus monitoring"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply prometheus -l monitoring\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Remove compute node from the known hosts file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"osism apply known-hosts\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);