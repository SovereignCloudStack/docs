"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35894],{36528:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"container/components/cluster-stacks/components/cluster-stacks/providers/openstack/quickstart","title":"Quickstart","description":"This quickstart guide contains steps to install the Cluster Stack Operator (CSO) utilizing the Cluster Stack Provider OpenStack (CSPO) to provide ClusterClasses which can be used with the Kubernetes Cluster API to create Kubernetes Clusters.","source":"@site/docs/03-container/components/cluster-stacks/components/cluster-stacks/providers/openstack/quickstart.md","sourceDirName":"03-container/components/cluster-stacks/components/cluster-stacks/providers/openstack","slug":"/container/components/cluster-stacks/components/cluster-stacks/providers/openstack/quickstart","permalink":"/docs/container/components/cluster-stacks/components/cluster-stacks/providers/openstack/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/cluster-stacks/components/cluster-stacks/providers/openstack/quickstart.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Developing and Testing csctl","permalink":"/docs/container/components/cluster-stacks/components/csctl/developing-and-testing-csctl"},"next":{"title":"Configuration","permalink":"/docs/container/components/cluster-stacks/components/cluster-stacks/providers/openstack/configuration"}}');var r=s(74848),a=s(28453);const c={},l="Quickstart",o={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize the management cluster",id:"initialize-the-management-cluster",level:2},{value:"CSO and CSPO variables preparation (CSP)",id:"cso-and-cspo-variables-preparation-csp",level:3},{value:"CSO and CSPO deployment (CSP)",id:"cso-and-cspo-deployment-csp",level:3},{value:"Define a namespace for a tenant (CSP/per tenant)",id:"define-a-namespace-for-a-tenant-cspper-tenant",level:2},{value:"Deploy CSP-helper chart",id:"deploy-csp-helper-chart",level:3},{value:"Create Cluster Stack definition (CSP/per tenant)",id:"create-cluster-stack-definition-cspper-tenant",level:2},{value:"Create the workload cluster resource (SCS-User/customer)",id:"create-the-workload-cluster-resource-scs-usercustomer",level:2},{value:"Check the workload cluster health",id:"check-the-workload-cluster-health",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,r.jsxs)(n.p,{children:["This quickstart guide contains steps to install the ",(0,r.jsx)(n.a,{href:"https://github.com/sovereignCloudStack/cluster-stack-operator/",children:"Cluster Stack Operator"})," (CSO) utilizing the ",(0,r.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/cluster-stacks/tree/main/providers/openstack",children:"Cluster Stack Provider OpenStack"})," (CSPO) to provide ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20210526-cluster-class-and-managed-topologies.md",children:"ClusterClasses"})," which can be used with the ",(0,r.jsx)(n.a,{href:"https://cluster-api.sigs.k8s.io/",children:"Kubernetes Cluster API"})," to create Kubernetes Clusters."]}),"\n",(0,r.jsxs)(n.p,{children:["This section guides you through all the necessary steps to create a workload Kubernetes cluster on top of the OpenStack infrastructure. The guide describes a path that utilizes the ",(0,r.jsx)(n.code,{children:"clusterctl"})," CLI tool to manage the lifecycle of a CAPI management cluster and employs ",(0,r.jsx)(n.code,{children:"kind"})," to create a local non-production managemnt cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that it is a common practice to create a temporary, local ",(0,r.jsx)(n.a,{href:"https://cluster-api.sigs.k8s.io/reference/glossary#bootstrap-cluster",children:"bootstrap cluster"})," which is then used to provision a target ",(0,r.jsx)(n.a,{href:"https://cluster-api.sigs.k8s.io/reference/glossary#management-cluster",children:"management cluster"})," on the selected infrastructure."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," and ",(0,r.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"kind"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",children:"kubectl"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://cluster-api.sigs.k8s.io/user/quick-start.html#install-clusterctl",children:"clusterctl"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://go.dev/doc/install",children:"go"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://jqlang.github.io/jq/",children:"jq"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"initialize-the-management-cluster",children:"Initialize the management cluster"}),"\n",(0,r.jsx)(n.p,{children:"Create the kind cluster:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kind create cluster\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Transform the Kubernetes cluster into a management cluster by using ",(0,r.jsx)(n.code,{children:"clusterctl init"})," and bootstrap it with CAPI and Cluster API Provider OpenStack (",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api-provider-openstack",children:"CAPO"}),") components:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export CLUSTER_TOPOLOGY=true\nexport EXP_CLUSTER_RESOURCE_SET=true\nexport EXP_RUNTIME_SDK=true\nclusterctl init --infrastructure openstack\nkubectl apply -f https://github.com/k-orc/openstack-resource-controller/releases/latest/download/install.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that the manual deployment of the openstack resource controller (ORC) is required since capo-0.12. If you use ",(0,r.jsx)(n.code,{children:"clusterctl upgrade"})," to upgrade capo from earlier version, you'll also need to manually add ORC to the management host/cluster."]}),"\n",(0,r.jsx)(n.h3,{id:"cso-and-cspo-variables-preparation-csp",children:"CSO and CSPO variables preparation (CSP)"}),"\n",(0,r.jsx)(n.p,{children:"The CSO and CSPO must be directed to the Cluster Stacks repository housing releases for the OpenStack provider.\nModify and export the following environment variables if you wish to redirect CSO and CSPO to an alternative Git repository"}),"\n",(0,r.jsxs)(n.p,{children:["Be aware that GitHub enforces limitations on the number of API requests per unit of time. To overcome this,\nit is recommended to configure a ",(0,r.jsx)(n.a,{href:"https://github.com/settings/personal-access-tokens/new",children:"personal access token"})," for authenticated calls. This will significantly increase the rate limit for GitHub API requests.\nFine grained PAT with ",(0,r.jsx)(n.code,{children:"Public Repositories (read-only)"})," is enough."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export GIT_PROVIDER_B64=Z2l0aHVi  # github\nexport GIT_ORG_NAME_B64=U292ZXJlaWduQ2xvdWRTdGFjaw== # SovereignCloudStack\nexport GIT_REPOSITORY_NAME_B64=Y2x1c3Rlci1zdGFja3M=  # cluster-stacks\nexport GIT_ACCESS_TOKEN_B64=$(echo -n '<my-personal-access-token>' | base64 -w0)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"cso-and-cspo-deployment-csp",children:"CSO and CSPO deployment (CSP)"}),"\n",(0,r.jsxs)(n.p,{children:["Install the ",(0,r.jsx)(n.a,{href:"https://github.com/drone/envsubst",children:"envsubst"})," Go package. It is required to enable the expansion of variables specified in CSPO and CSO manifests."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"GOBIN=/tmp go install github.com/drone/envsubst/v2/cmd/envsubst@latest\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note: On typical Linux distros, you will have a binary ",(0,r.jsx)(n.code,{children:"/usr/bin/envsubst"})," from the gettext package that does ",(0,r.jsx)(n.em,{children:"not"})," work."]}),"\n",(0,r.jsx)(n.p,{children:"Get the latest CSO release version and apply CSO manifests to the management cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Get the latest CSO release version and apply CSO manifests\ncurl -sSL https://github.com/SovereignCloudStack/cluster-stack-operator/releases/latest/download/cso-infrastructure-components.yaml | /tmp/envsubst | kubectl apply -f -\n"})}),"\n",(0,r.jsx)(n.p,{children:"Get the latest CSPO release version and apply CSPO manifests to the management cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Get the latest CSPO release version and apply CSPO manifests\ncurl -sSL https://github.com/sovereignCloudStack/cluster-stack-provider-openstack/releases/latest/download/cspo-infrastructure-components.yaml | /tmp/envsubst | kubectl apply -f -\n"})}),"\n",(0,r.jsx)(n.h2,{id:"define-a-namespace-for-a-tenant-cspper-tenant",children:"Define a namespace for a tenant (CSP/per tenant)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"export CS_NAMESPACE=my-tenant\n"})}),"\n",(0,r.jsx)(n.h3,{id:"deploy-csp-helper-chart",children:"Deploy CSP-helper chart"}),"\n",(0,r.jsx)(n.p,{children:"The csp-helper chart is meant to create per tenant credentials as well as the tenants namespace where all resources for this tenant will live in."}),"\n",(0,r.jsxs)(n.p,{children:["Cloud and secret name default to ",(0,r.jsx)(n.code,{children:"openstack"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"clouds.yaml"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'clouds:\n  openstack:\n    auth:\n      auth_url: https://api.gx-scs.sovereignit.cloud:5000/v3\n      application_credential_id: ""\n      application_credential_secret: ""\n    region_name: "RegionOne"\n    interface: "public"\n    identity_api_version: 3\n    auth_type: "v3applicationcredential"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'helm upgrade -i csp-helper-"${CS_NAMESPACE}" -n "${CS_NAMESPACE}" --create-namespace https://github.com/SovereignCloudStack/openstack-csp-helper/releases/latest/download/openstack-csp-helper.tgz -f path/to/clouds.yaml\n'})}),"\n",(0,r.jsx)(n.h2,{id:"create-cluster-stack-definition-cspper-tenant",children:"Create Cluster Stack definition (CSP/per tenant)"}),"\n",(0,r.jsx)(n.p,{children:"Configure the Cluster Stack you want to use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'# the name of the cluster stack (must match a name of a directory in https://github.com/SovereignCloudStack/cluster-stacks/tree/main/providers/openstack)\nexport CS_NAME=scs\n\n# the kubernetes version of the cluster stack (must match a tag for the kubernetes version and the stack version)\nexport CS_K8S_VERSION=1.29\n\n# the version of the cluster stack (must match a tag for the kubernetes version and the stack version)\nexport CS_VERSION=v1\nexport CS_CHANNEL=stable\n\n# must match a cloud section name in the used clouds.yaml\nexport CS_CLOUDNAME=openstack\nexport CS_SECRETNAME="${CS_CLOUDNAME}"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This will use the cluster-stack as defined in the ",(0,r.jsx)(n.code,{children:"providers/openstack/scs"})," directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cat >clusterstack.yaml <<EOF\napiVersion: clusterstack.x-k8s.io/v1alpha1\nkind: ClusterStack\nmetadata:\n  name: clusterstack\n  namespace: ${CS_NAMESPACE}\nspec:\n  provider: openstack\n  name: ${CS_NAME}\n  kubernetesVersion: "${CS_K8S_VERSION}"\n  channel: ${CS_CHANNEL}\n  autoSubscribe: false\n  providerRef:\n    apiVersion: infrastructure.clusterstack.x-k8s.io/v1alpha1\n    kind: OpenStackClusterStackReleaseTemplate\n    name: cspotemplate\n  versions:\n    - ${CS_VERSION}\n---\napiVersion: infrastructure.clusterstack.x-k8s.io/v1alpha1\nkind: OpenStackClusterStackReleaseTemplate\nmetadata:\n  name: cspotemplate\n  namespace: ${CS_NAMESPACE}\nspec:\n  template:\n    spec:\n      identityRef:\n        kind: Secret\n        name: ${CS_SECRETNAME}\nEOF\n\nkubectl apply -f clusterstack.yaml\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"clusterstack.clusterstack.x-k8s.io/clusterstack created\nopenstackclusterstackreleasetemplate.infrastructure.clusterstack.x-k8s.io/cspotemplate created\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-the-workload-cluster-resource-scs-usercustomer",children:"Create the workload cluster resource (SCS-User/customer)"}),"\n",(0,r.jsx)(n.p,{children:"To create a workload cluster you must configure the following things:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'export CS_CLUSTER_NAME=cs-cluster\n# Note: if you need more than one POD_CIDR, please adjust the yaml file accordingly\nexport CS_POD_CIDR=192.168.0.0/16\n# Note: if you need more than one SERVICE_CIDR, please adjust the yaml file accordingly\nexport CS_SERVICE_CIDR=10.96.0.0/12\nexport CS_EXTERNAL_ID=ebfe5546-f09f-4f42-ab54-094e457d42ec # Replace this by your external network ID\nexport CS_CLASS_NAME=openstack-"${CS_NAME}"-"${CS_K8S_VERSION/./-}"-"${CS_VERSION}"\nexport CS_K8S_PATCH_VERSION=6\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"CS_EXTERNAL_ID"})," must be the UUID of your OpenStack external network, get it via\n",(0,r.jsx)(n.code,{children:"openstack network list --external"}),". If there is only one external network, you may\nget away without passing ",(0,r.jsx)(n.code,{children:"external_id"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Create and apply ",(0,r.jsx)(n.code,{children:"cluster.yaml"})," file to the management cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["Depending on your cluster-class and cluster addons, some more variables may have to be provided in the ",(0,r.jsx)(n.code,{children:"spec.topology.variables"})," list.\nAn error message after applying the ",(0,r.jsx)(n.code,{children:"Cluster"})," resource will tell you if more variables are necessary."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cat > cluster.yaml <<EOF\napiVersion: cluster.x-k8s.io/v1beta1\nkind: Cluster\nmetadata:\n  name: ${CS_CLUSTER_NAME}\n  namespace: ${CS_NAMESPACE}\n  labels:\n    managed-secret: cloud-config\nspec:\n  clusterNetwork:\n    pods:\n      cidrBlocks:\n        - ${CS_POD_CIDR}\n    serviceDomain: cluster.local\n    services:\n      cidrBlocks:\n        - ${CS_SERVICE_CIDR}\n  topology:\n    variables:\n      - name: controller_flavor\n        value: "SCS-2V-4-20s"\n      - name: worker_flavor\n        value: "SCS-2V-4"\n      - name: worker_root_disk\n        value: 30\n      - name: external_id\n        value: ${CS_EXTERNAL_ID}\n    class: ${CS_CLASS_NAME}\n    controlPlane:\n      replicas: 1\n    version: v${CS_K8S_VERSION}.${CS_K8S_PATCH_VERSION}\n    workers:\n      machineDeployments:\n        - class: default-worker\n          failureDomain: nova\n          name: default-worker\n          replicas: 3\nEOF\n\nkubectl apply -f cluster.yaml\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cluster.cluster.x-k8s.io/cs-cluster created\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Utilize a convenient CLI ",(0,r.jsx)(n.code,{children:"clusterctl"})," to investigate the health of the cluster:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"clusterctl -n ${CS_NAMESPACE} describe cluster ${CS_CLUSTER_NAME}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the cluster is provisioned and in good health, you can retrieve its kubeconfig and establish communication with the newly created workload cluster:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Get the workload cluster kubeconfig\nclusterctl -n "${CS_NAMESPACE}" get kubeconfig ${CS_CLUSTER_NAME} > kubeconfig.yaml\n# Communicate with the workload cluster\nkubectl --kubeconfig kubeconfig.yaml get nodes\n'})}),"\n",(0,r.jsx)(n.h2,{id:"check-the-workload-cluster-health",children:"Check the workload cluster health"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl --kubeconfig kubeconfig.yaml get pods -A\nNAMESPACE     NAME                                                     READY   STATUS    RESTARTS   AGE\nkube-system   cilium-8mzrx                                             1/1     Running   0          7m58s\nkube-system   cilium-jdxqm                                             1/1     Running   0          6m43s\nkube-system   cilium-operator-6bb4c7d6b6-c77tn                         1/1     Running   0          7m57s\nkube-system   cilium-operator-6bb4c7d6b6-l2df8                         1/1     Running   0          7m58s\nkube-system   cilium-p9tkv                                             1/1     Running   0          6m44s\nkube-system   cilium-thbc8                                             1/1     Running   0          6m45s\nkube-system   coredns-5dd5756b68-k68j4                                 1/1     Running   0          8m3s\nkube-system   coredns-5dd5756b68-vjg9r                                 1/1     Running   0          8m3s\nkube-system   etcd-cs-cluster-pwblg-xkptx                              1/1     Running   0          8m3s\nkube-system   kube-apiserver-cs-cluster-pwblg-xkptx                    1/1     Running   0          8m3s\nkube-system   kube-controller-manager-cs-cluster-pwblg-xkptx           1/1     Running   0          8m3s\nkube-system   kube-proxy-54f8w                                         1/1     Running   0          6m44s\nkube-system   kube-proxy-8z8kb                                         1/1     Running   0          6m43s\nkube-system   kube-proxy-jht46                                         1/1     Running   0          8m3s\nkube-system   kube-proxy-mt69p                                         1/1     Running   0          6m45s\nkube-system   kube-scheduler-cs-cluster-pwblg-xkptx                    1/1     Running   0          8m3s\nkube-system   metrics-server-6578bd6756-vztzf                          1/1     Running   0          7m57s\nkube-system   openstack-cinder-csi-controllerplugin-776696786b-ksf77   6/6     Running   0          7m57s\nkube-system   openstack-cinder-csi-nodeplugin-96dlg                    3/3     Running   0          6m43s\nkube-system   openstack-cinder-csi-nodeplugin-crhc4                    3/3     Running   0          6m44s\nkube-system   openstack-cinder-csi-nodeplugin-d7rzz                    3/3     Running   0          7m58s\nkube-system   openstack-cinder-csi-nodeplugin-nkgq6                    3/3     Running   0          6m44s\nkube-system   openstack-cloud-controller-manager-hp2n2                 1/1     Running   0          7m9s\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var t=s(96540);const r={},a=t.createContext(r);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);