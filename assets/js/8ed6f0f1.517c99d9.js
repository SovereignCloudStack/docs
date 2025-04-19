"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71001],{25927:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"container/components/cluster-stacks/components/csctl/design","title":"CSCTL - Design document","description":"The Cluster Stack Operator facilitates the usage of cluster stacks by automating all steps that can be automated. It takes cluster stacks release assets that consist mainly of two Helm charts, one to deploy in the management cluster, the other one to deploy in the workload clusters, as well as provider-specific node image (build) information.","source":"@site/docs/03-container/components/cluster-stacks/components/csctl/design.md","sourceDirName":"03-container/components/cluster-stacks/components/csctl","slug":"/container/components/cluster-stacks/components/csctl/design","permalink":"/docs/container/components/cluster-stacks/components/csctl/design","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/cluster-stacks/components/csctl/design.md","tags":[],"version":"current","frontMatter":{}}');var n=s(74848),o=s(28453);const i={},a="CSCTL - Design document",l={},c=[{value:"User story 1: Developer releasing cluster stacks",id:"user-story-1-developer-releasing-cluster-stacks",level:3},{value:"User story 2: Developer versioning cluster stacks",id:"user-story-2-developer-versioning-cluster-stacks",level:3},{value:"User story 3: Multiple developers work in parallel on one cluster stack",id:"user-story-3-multiple-developers-work-in-parallel-on-one-cluster-stack",level:3},{value:"User story 4: Developer updating cluster stack that is used in production",id:"user-story-4-developer-updating-cluster-stack-that-is-used-in-production",level:3},{value:"User story 5: Automated testing of cluster stacks",id:"user-story-5-automated-testing-of-cluster-stacks",level:3},{value:"Two forms of templating",id:"two-forms-of-templating",level:3},{value:"Generic vs provider-specific work",id:"generic-vs-provider-specific-work",level:2},{value:"Generic work",id:"generic-work",level:2},{value:"Provider-specific work",id:"provider-specific-work",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuration file",id:"configuration-file",level:3},{value:"Flags",id:"flags",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Commands of CLI tool",id:"commands-of-cli-tool",level:2},{value:"Modes",id:"modes",level:2},{value:"Stable",id:"stable",level:3},{value:"Hash",id:"hash",level:3},{value:"Beta",id:"beta",level:3},{value:"Custom (e.g. for PRs)",id:"custom-eg-for-prs",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"csctl---design-document",children:"CSCTL - Design document"})}),"\n",(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"The Cluster Stack Operator facilitates the usage of cluster stacks by automating all steps that can be automated. It takes cluster stacks release assets that consist mainly of two Helm charts, one to deploy in the management cluster, the other one to deploy in the workload clusters, as well as provider-specific node image (build) information."}),"\n",(0,n.jsx)(t.p,{children:"Users can take existing releases of cluster stacks and the operator and will be able to create clusters easily."}),"\n",(0,n.jsx)(t.p,{children:"However, there is no clear and nice way to work on cluster stacks, test, and release them."}),"\n",(0,n.jsx)(t.p,{children:"This proposal will discuss a tool to improve the experience of developers implementing cluster stacks."}),"\n",(0,n.jsx)(t.h1,{id:"motivation",children:"Motivation"}),"\n",(0,n.jsx)(t.p,{children:"The current process of building cluster stacks is rather cumbersome and error-prone. There are multiple issues with the current approach:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The release assets have to follow a very specific (naming) pattern, to be usable with the operator. Currently, they have to be created manually. There are no docs for this manual process."}),"\n",(0,n.jsx)(t.li,{children:"The cluster stacks can be versioned following the pattern v1, v2, \u2026 This is perfect from the user perspective, but not good for people implementing cluster stacks, as they can only do local tests by artificially creating a v2 and not releasing it."}),"\n",(0,n.jsx)(t.li,{children:"The versioning of the cluster stacks is not easy, as there are multiple versions involved. Cluster addons have their own version, for example. Currently, the versions have to be manually hard-coded in multiple places. This can be validated to some degree but is not developer-friendly and can still lead to mistakes."}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"proposal",children:"Proposal"}),"\n",(0,n.jsx)(t.p,{children:"We propose a CLI tool called \u201ccsctl\u201d, which stands for cluster-stack-manager-ctl. This CLI tool should take over all manual work from a developer implementing cluster stacks that can be taken over. The developer should concentrate only on implementing the cluster stacks themselves."}),"\n",(0,n.jsx)(t.p,{children:"There will be still a certain way of dealing with \u201ccluster stack-specific\u201d jobs, e.g. following a certain templating pattern. This is necessary, as the configuration and Helm Charts that developers implement are very generic."}),"\n",(0,n.jsxs)(t.p,{children:["The tool should generate release assets, e.g. by using ",(0,n.jsx)(t.code,{children:"helm package"})," for the helm charts. It should be able to create these release assets for different use cases, e.g. for creating a stable release, for testing a certain commit, and for creating a beta release."]}),"\n",(0,n.jsx)(t.h1,{id:"user-stories",children:"User stories"}),"\n",(0,n.jsx)(t.h3,{id:"user-story-1-developer-releasing-cluster-stacks",children:"User story 1: Developer releasing cluster stacks"}),"\n",(0,n.jsx)(t.p,{children:"A developer who wants to release a cluster stack that was implemented can use the CLI tool to generate all release assets that are required. This should save much time compared to following a manual process."}),"\n",(0,n.jsx)(t.h3,{id:"user-story-2-developer-versioning-cluster-stacks",children:"User story 2: Developer versioning cluster stacks"}),"\n",(0,n.jsx)(t.p,{children:"A developer who has to think about how to version a cluster stack that was implemented can use the tool to do the job. This saves a lot of time, as the developer would have to manually check whether anything was updated for cluster addons or node images to find the appropriate version (\u201dDid anything change in the cluster addons so that they need a new version or not?\u201d)."}),"\n",(0,n.jsx)(t.h3,{id:"user-story-3-multiple-developers-work-in-parallel-on-one-cluster-stack",children:"User story 3: Multiple developers work in parallel on one cluster stack"}),"\n",(0,n.jsx)(t.p,{children:"If multiple developers work on one cluster stack, they might interfere with each other\u2019s work. Assuming that node images have to be built, then one developer would upload the node images in version \u201cv2\u201d, as the previous version was \u201cv1\u201d. The second developer has the same thought and would either overwrite the already uploaded node images of the colleague or not be able to upload the images since they exist already."}),"\n",(0,n.jsx)(t.p,{children:"The csctl allows both developers to have independent versioning based on a git commit hash."}),"\n",(0,n.jsx)(t.h3,{id:"user-story-4-developer-updating-cluster-stack-that-is-used-in-production",children:"User story 4: Developer updating cluster stack that is used in production"}),"\n",(0,n.jsx)(t.p,{children:"If a developer updates a cluster stack that is used in production, great care is needed. The csctl allows the developer to safely test cluster stacks, e.g. with a beta channel, without touching cluster stacks that are used in production.\nIf everything works well, a production release can be generated with csctl."}),"\n",(0,n.jsx)(t.h3,{id:"user-story-5-automated-testing-of-cluster-stacks",children:"User story 5: Automated testing of cluster stacks"}),"\n",(0,n.jsx)(t.p,{children:"Cluster stacks cannot be tested in the CI and with a normal Git PR flow. The csctl allows this testing of individual PRs and therefore enables automated testing via CI."}),"\n",(0,n.jsx)(t.h1,{id:"risks--mitigations",children:"Risks & Mitigations"}),"\n",(0,n.jsx)(t.h3,{id:"two-forms-of-templating",children:"Two forms of templating"}),"\n",(0,n.jsxs)(t.p,{children:["Helm charts use Go templating with the notation ",(0,n.jsx)(t.code,{children:"{{ .values.myvalue }}"}),". As a cluster stack consists usually of two Helm charts, this notation will be very common."]}),"\n",(0,n.jsxs)(t.p,{children:["However, the csctl requires a different form of templating, additionally to the one of Helm. This comes from the versioning of the cluster stacks themselves. The Cluster addon version, for example, has to be the version of the respective Helm chart. The same goes for the ",(0,n.jsx)(t.code,{children:"ClusterClass"})," object name."]}),"\n",(0,n.jsxs)(t.p,{children:["Users have to use the additional templating notation ",(0,n.jsx)(t.code,{children:"<< .ClusterAddonVersion >>"})," while implementing cluster stacks."]}),"\n",(0,n.jsx)(t.p,{children:"The alternative to using a different notation for cluster stack templating would be to use the same one as Helm. However, this will be confusing for users, as they cannot differentiate it. Therefore, we cannot suggest to follow that path."}),"\n",(0,n.jsx)(t.h1,{id:"design-details",children:"Design details"}),"\n",(0,n.jsx)(t.h2,{id:"generic-vs-provider-specific-work",children:"Generic vs provider-specific work"}),"\n",(0,n.jsx)(t.p,{children:"Just like the Cluster Stack Operator, the csctl also has a generic and a provider-specific part. The provider-specific part is optional."}),"\n",(0,n.jsxs)(t.p,{children:["The generic work is done with a CLI tool that exists in the repository csctl in SCS. The tool can be initialized with provider-specific binaries, similar to the way ",(0,n.jsx)(t.a,{href:"https://github.com/hashicorp/packer",children:"packer"})," does it."]}),"\n",(0,n.jsx)(t.h2,{id:"generic-work",children:"Generic work"}),"\n",(0,n.jsx)(t.p,{children:"The generic part of the csctl is"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Calculate the right versions based on git commit hash or previous releases"}),"\n",(0,n.jsx)(t.li,{children:"Template everything with csctl templating (NOT Helm templating!!)"}),"\n",(0,n.jsx)(t.li,{children:"Package the ClusterClass Helm Chart"}),"\n",(0,n.jsx)(t.li,{children:"Package the ClusterAddon Helm Chart"}),"\n",(0,n.jsx)(t.li,{children:"Generate metadata.yaml"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"provider-specific-work",children:"Provider-specific work"}),"\n",(0,n.jsx)(t.p,{children:"The provider-specific part of csctl would do anything necessary to provide node images to users. One common task could be to use packer to build images and to upload them somewhere they can be accessed by users."}),"\n",(0,n.jsx)(t.p,{children:"Of course, one task would also be to find the right version for the node images (e.g. v2 if something changed since v1, or simply the git commit hash)"}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.p,{children:"There are multiple ways of configuring the csctl. They all have specific use cases and will be explained in the following"}),"\n",(0,n.jsx)(t.h3,{id:"configuration-file",children:"Configuration file"}),"\n",(0,n.jsxs)(t.p,{children:["There is a configuration file called ",(0,n.jsx)(t.code,{children:"csctl.yaml"})," which contains all values that will never have to be changed for a specific cluster stack. It follows this pattern:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"apiVersion: csctl.clusterstack.x-k8s.io/v1alpha1\nconfig:\n  kubernetesVersion: v1.27.7\n  clusterStackName: ferrol\n  provider:\n    type: myprovider\n    apiVersion: myprovider.csctl.clusterstack.x-k8s.io/v1alpha1\n\t\tconfig: xyz\n"})}),"\n",(0,n.jsx)(t.p,{children:"There is mainly the Kubernetes version, the name of the cluster stack, as well as the provider. Additionally, there is a provider-specific configuration. Both the generic and the provider-specific configuration is versioned."}),"\n",(0,n.jsx)(t.h3,{id:"flags",children:"Flags"}),"\n",(0,n.jsx)(t.p,{children:"Via flags the user can specifiy everything that is important but which might change, e.g. the mode \u201cstable\u201d or \u201chash\u201d, giving you release assets for a stable release or creating release assets based on the latest git commit hash."}),"\n",(0,n.jsx)(t.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,n.jsx)(t.p,{children:"Environment variables can be used, for example, to specify tokens and passwords. csctl has to validate that all required environment variables have been specified."}),"\n",(0,n.jsx)(t.h2,{id:"commands-of-cli-tool",children:"Commands of CLI tool"}),"\n",(0,n.jsxs)(t.p,{children:["Multiple commands can make sense for developers. The most important one is the ",(0,n.jsx)(t.code,{children:"create"})," command that creates release assets, as well as ",(0,n.jsx)(t.code,{children:"provider install"})," to install the binary of a provider that carries out all provider-specific work."]}),"\n",(0,n.jsx)(t.p,{children:"This is a full list:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"subcommands:\nprovider\t\t\tIs used for the provider lifecycle\t\t\t\ncreate \t\t\t\tcreates release assets of a cluster stack.\ngenerate\t\t\tGenerates a specific resource from a cluster stack\nlist \t\t\t\t  show all cluster-stacks from a repo\nversion\t\t\t\tshows the version of this cli tool\nhelp\t\t\t\t  print a overview of available flags etc.\n\nsubcommands for provider:\ninstall\t\t\t\tInstalls a cluster-stack-release-provider at a version\ninstalled\t\t\tLists installed csctl release providers\nremove\t\t\t\tremoves a csctl release provider at a version `csctl provider remove docker <version>`\n"})}),"\n",(0,n.jsx)(t.h2,{id:"modes",children:"Modes"}),"\n",(0,n.jsx)(t.p,{children:"There are multiple modes to create release assets following different versioning patterns."}),"\n",(0,n.jsx)(t.h3,{id:"stable",children:"Stable"}),"\n",(0,n.jsx)(t.p,{children:"The stable mode requires the developer to specify an existing GitHub repository (in the future other ways of storing release assets are possible) via environment variables. The csctl will search for the latest release fitting to the configuration of provider, cluster stack name, and Kubernetes version (e.g. docker-ferrol-1-27-vXXX). Then it will download the required release assets and check whether anything has changed in the cluster addon and node image section. Depending on that information it will calculate the next version, e.g. v2 after v1, or will leave the version the same if nothing changed."}),"\n",(0,n.jsx)(t.h3,{id:"hash",children:"Hash"}),"\n",(0,n.jsxs)(t.p,{children:["The hash mode is useful for developing cluster stacks. It will use the hash of the last git commit and generate a version of the form ",(0,n.jsx)(t.code,{children:"v0-hash.<hash>"}),". following semver."]}),"\n",(0,n.jsx)(t.p,{children:"This version will be used for cluster class, cluster add-ons, and node images. Unlike the stable version, the versions in hash mode always update to the latest commit and do not depend on any previous release."}),"\n",(0,n.jsx)(t.h3,{id:"beta",children:"Beta"}),"\n",(0,n.jsxs)(t.p,{children:["The beta mode is similar to the stable mode, except that it generates releases following the version pattern ",(0,n.jsx)(t.code,{children:"v0-beta.0"}),", ",(0,n.jsx)(t.code,{children:"v0-beta.1"}),", etc."]}),"\n",(0,n.jsx)(t.h3,{id:"custom-eg-for-prs",children:"Custom (e.g. for PRs)"}),"\n",(0,n.jsx)(t.p,{children:"The custom mode is designed for PR purposes and supports automated testing. It accommodates versions formatted as v0.custom-pr123. Crucially, these versions must adhere to semantic versioning standards (semver) and are specifically intended as inputs for the csctl tool."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var r=s(96540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);