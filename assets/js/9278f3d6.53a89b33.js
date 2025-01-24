"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20904],{74436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scs-0213-v1-k8s-nodes-anti-affinity","title":"Kubernetes Nodes Anti Affinity","description":"Introduction","source":"@site/standards/scs-0213-v1-k8s-nodes-anti-affinity.md","sourceDirName":".","slug":"/scs-0213-v1-k8s-nodes-anti-affinity","permalink":"/standards/scs-0213-v1-k8s-nodes-anti-affinity","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Kubernetes Nodes Anti Affinity","type":"Decision Record","status":"Draft","track":"KaaS"},"sidebar":"standards","previous":{"title":"scs-0213: Kubernetes Nodes Anti Affinity","permalink":"/standards/kaas/scs-0213"},"next":{"title":"scs-0214: Kubernetes Node Distribution and Availability","permalink":"/standards/kaas/scs-0214"}}');var s=t(74848),o=t(28453);const r={title:"Kubernetes Nodes Anti Affinity",type:"Decision Record",status:"Draft",track:"KaaS"},a=void 0,l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Glossary",id:"glossary",level:3},{value:"Motivation",id:"motivation",level:2},{value:"Design considerations",id:"design-considerations",level:2},{value:"Decision",id:"decision",level:2},{value:"Documents",id:"documents",level:2}];function c(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"A Kubernetes instance is provided as a cluster, which consists of a set of worker machines, also called nodes.\nA cluster is composed of a control plane and at least one worker node.\nThe control plane manages the worker nodes and therefore the pods in the cluster by making\ndecisions about scheduling, event detection and global decisions. Inside the control plane,\nmultiple components exist, which can be duplicated and distributed over multiple machines\ninside the cluster. Typically, no user containers are run on these machines in order to\nseparate the control plane from the live system."}),"\n",(0,s.jsx)(n.h3,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsx)(n.p,{children:"The following special terms are used throughout this decision record document:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Term"}),(0,s.jsx)(n.th,{children:"Meaning"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Worker"}),(0,s.jsx)(n.td,{children:"Virtual or bare-metal machine, which hosts workloads of customers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Control Plane"}),(0,s.jsx)(n.td,{children:"Virtual or bare-metal machine, which hosts the container orchestration layer that exposes the API and interfaces to define, deploy, and manage the lifecycle of containers."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Machine"}),(0,s.jsx)(n.td,{children:"Virtual or bare-metal entity with computational capabilities"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(n.p,{children:"In a productive environment, the control plane usually runs across multiple machines and\na cluster usually contains multiple worker nodes in order to provide fault-tolerance and\nhigh availability."}),"\n",(0,s.jsx)(n.p,{children:"In order to ensure availability and scaling of workloads, even if some nodes in the cluster\ncould fail, they should be distributed over multiple nodes on different machines.\nThis can be steered with the Affinity or Anti Affinity features, which are separated by\nKubernetes into two features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Node Affinity"}),"\n",(0,s.jsx)(n.p,{children:"The Node Affinity feature allows to match pods according to logical matches of\nkey-value-pairs referring to labels of nodes.\nThese can be defined with different weights or preferences in order to allow fine-grained\nselection of nodes. The feature works similar to the Kubernetes nodeSelector.\nIt is defined in the PodSpec using the nodeAffinity field in the affinity section."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Pod Affinity"}),"\n",(0,s.jsx)(n.p,{children:"Pod Affinity or Pod Anti Affinity allows the constraint of pod scheduling based on the\nlabels of pods already running on a node.\nThis means the constraint will match other pods on a node according to their labels key-value-pairs\nand then either schedule the pod to the same (Affinity) or another (Anti Affinity) node.\nThis feature is also defined in the PodSpec using the podAffinity and podAntiAffinity\nfields in the affinity section. [3]"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Both features allow the usage of "required" or "preferred" keywords, which create\n"hard" or "soft" affinities. By using a hard affinity, a pod would need to be scheduled\naccording to the rules set. If this possibility is not given, the pod can\'t be scheduled.\nA soft affinity would allow scheduling even if the requirements are not fulfilled, but\nthey would be preferred if possible.'}),"\n",(0,s.jsx)(n.p,{children:"These features allow efficient resource usage (e.g. by scheduling workloads to evenly\ndistribute across nodes) and provide fault-tolerance and therefore high availability.\nBut they also require more work during the setup of a service architecture, since nodes\nand pods need to be labelled and described consistently."}),"\n",(0,s.jsx)(n.p,{children:"In the case of SCS, affinity of the workloads themselves is not relevant, since this\nfeature is mostly used by the customers of the providers.\nInstead, the expected standard should enable the Kubernetes cluster to handle Anti Affinity\nrules with a real physical separation as well as distributing the control plane over\nmultiple machines in order to provide fault-tolerance during system outages.\nIf the control plane survives an outage, a Kubernetes cluster can recover later on."}),"\n",(0,s.jsx)(n.h2,{id:"design-considerations",children:"Design considerations"}),"\n",(0,s.jsx)(n.p,{children:"SCS plans to require a Hard Anti Affinity and/or Redundancy for the control plane and\na Soft Anti Affinity for workers. This means, that Anti Affinity would be required for\nthe control planes and their pods and only optional (but encouraged) for workers."}),"\n",(0,s.jsx)(n.p,{children:"In order to achieve the goals for these components, meaning availability and fault tolerance\nfor the control plane, an outage resistant cluster, and the availability\npromise given with Anti Affinity for pods on the worker nodes, a separation of nodes\non the hardware level would need to be achieved."}),"\n",(0,s.jsx)(n.p,{children:'For the control plane, a reference to the "Kubernetes High Availability" [1]\ncan be useful, since it provides two ways to set up a highly available cluster.\nBoth approaches are very similar. The "Stacked Control Plane" [2] requires less infrastructure,\nbut also runs the risk of failed coupling, where if one node fails, the redundancy could be\ncompromised due to the loss of a complete control plane instance.\nThe "External ETCD" solves this problem, but also requires double the infrastructure, due\nto the externally incorporated etcd clusters.'}),"\n",(0,s.jsx)(n.p,{children:'This also shows, that the wording "anti affinity" as used with Kubernetes pods is probably\nslightly misleading in the context of a Kubernetes control plane. It may consist of multiple\npods with individual tasks, but distributing them over different nodes through Anti Affinity\nwould probably still cascade the whole control plane into a complete failure, if one of\nthe used nodes goes down. It could be possible to replicate specific important pods and\nassign them to different nodes, but at this point, a redundant setup like presented in [1] could be used.\nSo Anti Affinity in this context probably means more like distribution over multiple\nphysical machines, which needs to be planned beforehand on the machine/server level.'}),"\n",(0,s.jsx)(n.p,{children:'Therefore, would it be preferred for the control plane to use a redundant setup, which\nis separated over different physical machines, meaning at least half of the control plane\nnodes runs on a different physical machine as the rest. The currently used ClusterAPI\nenables this by establishing the concept of "failure domains". These are used to control\nthe placement of k8s nodes and distribute them over multiple physical machines.\nFor example, a High Availability K8s cluster with three control plane nodes could be\ndistributed over three different availability zones (and therefore 3 different\nphysical machines) in order to survive the failure of one availability zone. [5]'}),"\n",(0,s.jsx)(n.p,{children:"For worker nodes, the whole idea of Anti Affinity is more of a preferable situation.\nThe nodes themselves should at best be distributed over different machines, but this\nis not a requirement, especially since smaller providers wouldn't have the capacity to\nprovide enough machines for these distributed Kubernetes clusters. Since customers that\nuse the Affinity or Topology spread constraint [4] features would be especially interested\nin the worker nodes that host their workloads, it should be ensured that a good labeling\nsystem is provided for the nodes in order to see if two nodes are hosted on the same machine."}),"\n",(0,s.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(n.p,{children:"The future standard should define a few important things in order to provide a solid base\nfor the usage and advantages of workloads with Anti Affinity rules."}),"\n",(0,s.jsx)(n.p,{children:"Control planes SHOULD be made redundant in order to provide fault-tolerance and security\nagainst fatal errors on this layer, in the case of node failures. How this redundancy\nis achieved SHOULD be left to the providers, but since failure must be avoided, it is\nREQUIRED to at least duplicate control plane components. Half of every component SHOULD\nbe located on a different node on a different physical machine than the other half\nof them. This should provide at least the minimum requirements for a fault-tolerant control plane.\nFor the standard, there is also a possibility to define multiple stages of distributed infrastructure\nand only make sensible ones a requirement and the rest optional, e.g."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"non-distributed clusters"}),"\n",(0,s.jsxs)(n.li,{children:["High-Availability clusters that are","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"distributed over multiple machines/availability zones"}),"\n",(0,s.jsx)(n.li,{children:"distributed over multiple clouds"}),"\n",(0,s.jsx)(n.li,{children:"distributed over multiple physical locations/datacenters"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The worker nodes are RECOMMENDED to be distributed over different machines. In order to\nprovide clear information to the users, the nodes should be labeled to reflect the\nmapping to the underlying clusters. The labels can be obfuscated in order to not reveal\nthe underlying structures to customers and users. It should be noted, that it is NOT REQUIRED\nto have this anti affinity for the worker nodes due to the requirements of infrastructure\nand complexity associated with this."}),"\n",(0,s.jsx)(n.h2,{id:"documents",children:"Documents"}),"\n",(0,s.jsxs)(n.p,{children:["Kubernetes High Availability Documentation ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/",children:"1"}),"\nKubernetes High Availability - Stacked ETCD ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/#stacked-etcd-topology",children:"2"}),"\nAffinity and Anti-Affinity ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity",children:"3"}),"\nTopology Spread Constraints ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",children:"4"}),"\nSCS Multi AZ and Multi Cloud Environments ",(0,s.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/blob/main/doc/usage/multi-az-and-multi-cloud-environments.md",children:"5"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);