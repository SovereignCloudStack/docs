"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27379],{13669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"operating-scs/components/scs-health-monitor/Testflow","title":"Testflow-Infrastructure","description":"Quick Intro:","source":"@site/docs/04-operating-scs/components/scs-health-monitor/Testflow.md","sourceDirName":"04-operating-scs/components/scs-health-monitor","slug":"/operating-scs/components/scs-health-monitor/Testflow","permalink":"/docs/operating-scs/components/scs-health-monitor/Testflow","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/04-operating-scs/components/scs-health-monitor/Testflow.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Kubernetes BDD Testing Framework Documentation","permalink":"/docs/operating-scs/components/scs-health-monitor/Workflow"},"next":{"title":"Observability stack quickstart","permalink":"/docs/operating-scs/components/scs-health-monitor/SetupObservabilityStack"}}');var s=n(74848),a=n(28453);const o={},i="Testflow-Infrastructure",c={},l=[{value:"Quick Intro:",id:"quick-intro",level:2},{value:"Real Testing:",id:"real-testing",level:2},{value:"Extended Description:",id:"extended-description",level:2},{value:"Scaling the Benchmark Infrastructure",id:"scaling-the-benchmark-infrastructure",level:2}];function h(e){const t={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testflow-infrastructure",children:"Testflow-Infrastructure"})}),"\n",(0,s.jsx)(t.h2,{id:"quick-intro",children:"Quick Intro:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["After following the steps to set up the environment including setting up the monitornig, you should be able to start testing with ",(0,s.jsx)(t.code,{children:"./scs-health-monitor behave"})," a testing framwork. On the Cloud-Level you have several features that describe Test Scenerios for single components of the Openstack functionality, like the ",(0,s.jsx)(t.code,{children:"openstack_create_network.feature"}),".\nSo if you want to test whether you are able to create a network you can use that feature like this:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"./scs-health-monitor behave openstack_create_network.feature\n"})}),"\n",(0,s.jsx)(t.p,{children:"or aswell:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"./scs-health-monitor behavex openstack_create_network.feature\n"})}),"\n",(0,s.jsx)(t.p,{children:"and a test on whether you are able to create a network is running."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you want to test whether you can create and delete all openstack resources you simply need this command (for ",(0,s.jsx)(t.code,{children:"openstack_testflow.feature"})," includes all the steps from the creation and delition features):"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"./scs-health-monitor behave openstack_testflow.feature\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The Use Case for the ",(0,s.jsx)(t.code,{children:"openstack_testflow.feature"})," and all the creation and deletion features is mostly debugging, because to run a whole infrastructure test this is not sadisfying the dependencies of the variouse resources. But you can set some parameters like the quantity of the resources, if you aim to see if you have a certain quota f.e.\nTo get a more detailed view on the test run you have the option ",(0,s.jsx)(t.code,{children:"--no-capture"})," and you will receive prints or informational logs during the test run."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"./scs-health-monitor behave --no-capture openstack_create_network.feature\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["After the run each built resource will be deleted to avoid a ",(0,s.jsx)(t.code,{children:"DuplicateResource-Error"}),". If you should still encounter this Error, you will have to delete the resource in question by hand ether in the ",(0,s.jsx)(t.em,{children:"openstack cli tool"})," or in the ",(0,s.jsx)(t.em,{children:"plus cloud open"})," dashboard. But make sure this resource is not in use!"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"real-testing",children:"Real Testing:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["As we provide an automated Infrastructure Testing the real deal lies in the ",(0,s.jsx)(t.code,{children:"openstack_benchmark_build_infra.feature"}),". This Feature is creating all resources and configures them in order to build a complete infrastructure with virtual machine (vm) networks that are accessible through jumphosts (jh) that get certain floating ip and allow a port forwarding to the vms. That means it automatically sets up the ssh-access and the security group rules and makes sure applications like ",(0,s.jsx)(t.code,{children:"iperf3"})," are installed on the hosts. This infrastructure emulates a common openstack infrastructure and allows to run a number of benchmark tests to see whether it has the needed capacity."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"You start an infrastructure test by:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"./scs-health-monitor behave openstack_benchmark_build_infra.feature\n"})}),"\n",(0,s.jsx)(t.p,{children:"or aswell:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"./scs-health-monitor behavex openstack_benchmark_build_infra.feature\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"It will take some time but you can follow allong, if the infrastructure is builds up successfully.\nAfter the run it deletes all resources."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["If you want run benchmarktests (which is the main goal of this approach), you will have to run the benchmark features together with the ",(0,s.jsx)(t.code,{children:"openstack_benchmark_build_infra.feature"})," like so:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"./scs-health-monitor behave openstack_benchmark_build_infra.feature cloud_level_testing/features/openstack_benchmark_iperf3.feature cloud_level_testing/features/openstack_benchmark_pingVM.feature cloud_level_testing/features/openstack_benchmark_4000pi.feature\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The first feature always has to be the ",(0,s.jsx)(t.code,{children:"openstack_benchmark_build_infra.feature"}),". After that you can use the other features, as they only depend on the infrastructure, they don't need to follow a special order."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Note all features that fail and have a ",(0,s.jsx)(t.code,{children:"@create"})," or ",(0,s.jsx)(t.code,{children:"@delete"})," tag assigned to them will lead to a deletion of the build up resources right after the feature run. Hence if they are followed by a feature depending on those resources this feature will inevitably fail."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"extended-description",children:"Extended Description:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Our approach to use the behave-framework to build up and test an openstack infrastructure automated relies on certain peculiarities of this framework. First of all you have to understand the basic entities of a testrun:"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["1 testrun can contain multiple features",(0,s.jsx)(t.br,{}),"\n","1 feature can contain multiple steps",(0,s.jsx)(t.br,{}),"\n","1 step can contain multiple substeps"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"environment.py"})," you can define what actions have to be done ",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"before_all"})," (in the beginning of the testrun), ",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"after_feature"})," (after every feature) and ",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"after_all"})," (in the end of the testrun)",(0,s.jsx)(t.br,{}),"\n","To calculate for exemple the total duration of the run we set the timer in the ",(0,s.jsx)(t.code,{children:"before_all"})," section and get the result in the ",(0,s.jsx)(t.code,{children:"after_all"})," section, where we also collect the metrics and push them to the prometheus gateway or delete all resources. In the ",(0,s.jsx)(t.code,{children:"after_feature"})," section, we delete ressources if a creation or deletion feature has failed."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["We tried to keep the steps and features as independent and self contained as possible. But in an infrastructure this is almost impossible, if you don't want to create monolytic steps and functions. Therefore we create an oblect called ",(0,s.jsx)(t.code,{children:"context"})," and an object called ",(0,s.jsx)(t.code,{children:"Collector"})," in the ",(0,s.jsx)(t.code,{children:"before_all"})," section. We store every information, that has to be passed between the steps into the context like the connection to the openstack client. The Collector fetches each resource-id, when a resource is created to ensure that all and only resources that were created in the test run are deleted in the end."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["However, if we run features, that rely on another feature like on the  ",(0,s.jsx)(t.code,{children:"openstack_benchmark_build_infra.feature"})," the problem occures that the context attributes that are created during a feature run are deleted after each feature. Therefore we created a SharedContext Object that is already initialised ",(0,s.jsx)(t.code,{children:"before_all"})," and stores the data that is necessary for the following features like the test-prefix (context.test_name) and the floating ip and portforwarding (context.redirs).",(0,s.jsx)(t.br,{}),"\n","So in the end of ",(0,s.jsx)(t.code,{children:"openstack_benchmark_build_infra.feature"})," the following step must be performed: ",(0,s.jsx)(t.code,{children:"Then I can pass the context to another feature"})," (to store the needed information into the ",(0,s.jsx)(t.code,{children:"SharedContext"}),")\nand the following features have to begin with the step: ",(0,s.jsx)(t.code,{children:" Given I can get the shared context from previouse feature"})," (to transfer the shared informations into the new ",(0,s.jsx)(t.code,{children:"context"})," object)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"scaling-the-benchmark-infrastructure",children:"Scaling the Benchmark Infrastructure"}),"\n",(0,s.jsxs)(t.p,{children:["First of all is the scale of the benchmark infrastructure highly dependent on the amount of ",(0,s.jsx)(t.strong,{children:"availability zones"})," in the project. The number of ",(0,s.jsx)(t.strong,{children:"availability zones determines how many jumphosts (jhs)"})," and networks are built. If there are for example two availbility zones, two jumphosts are created and and attached to a floating ip each.\\\nThe jumphosts are connected through a shared network but each of them is also ",(0,s.jsx)(t.strong,{children:"attached to another network of virtual machines (vms)"}),". The ",(0,s.jsx)(t.strong,{children:"quantity of vms"})," can be adjusted in the table of ",(0,s.jsx)(t.code,{children:"openstack_benchmark_build_infra.feature"}),". The vms can be reached from outside the network via port forwarding. Which is enabled by the jh. You can reach the vms by addressing the floating ip of the associated jh and the port number.\nThe range of the port numbers can also be specified in the ",(0,s.jsx)(t.code,{children:"openstack_benchmark_build_infra.feature"})," the default range is set from 222 to 229.",(0,s.jsx)(t.br,{}),"\n","Apart from that, you cannot change quantities because the infrastructure automatically adjusts in scale depending on the dependencies."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);