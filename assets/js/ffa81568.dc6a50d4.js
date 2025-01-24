"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79728],{20189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"operating-scs/components/automated-pentesting-iaas/overview","title":"Overview","description":"Introdution","source":"@site/docs/04-operating-scs/components/automated-pentesting-iaas/overview.md","sourceDirName":"04-operating-scs/components/automated-pentesting-iaas","slug":"/operating-scs/components/automated-pentesting-iaas/overview","permalink":"/docs/operating-scs/components/automated-pentesting-iaas/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/04-operating-scs/components/automated-pentesting-iaas/overview.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Pentesting IaaS","permalink":"/docs/category/pentesting-iaas"},"next":{"title":"Quickstart","permalink":"/docs/operating-scs/components/automated-pentesting-iaas/quickstart"}}');var s=n(74848),r=n(28453);const o={},a="Overview",c={},l=[{value:"Introdution",id:"introdution",level:2},{value:"Cloud Security Concerns",id:"cloud-security-concerns",level:2},{value:"SCS automated pentesting",id:"scs-automated-pentesting",level:2},{value:"Quickstart Guide",id:"quickstart-guide",level:2},{value:"Tools",id:"tools",level:2},{value:"Source",id:"source",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,s.jsx)(t.h2,{id:"introdution",children:"Introdution"}),"\n",(0,s.jsx)(t.p,{children:"Modern cloud infrastructure security is a complex and critical aspect of maintaining robust and resilient cloud services. Moreover, as organizations increasingly rely on cloud environments for their operations, the security of these infrastructures becomes paramount."}),"\n",(0,s.jsx)(t.p,{children:"The SCS Software stack, and more specifically its Infrastructure-as-a-Service layer, is susceptible to various security threats, including but not limited to misconfigurations, vulnerabilities and external attacks. To address these concerns, continuous and automated security testing is essential."}),"\n",(0,s.jsx)(t.h2,{id:"cloud-security-concerns",children:"Cloud Security Concerns"}),"\n",(0,s.jsx)(t.p,{children:"Cloud infrastructure security involves protecting data, applications, and services from unauthorized access and threats. Key concerns include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Data Breaches"}),": Unauthorized access to sensitive data."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Misconfigurations"}),": Incorrect settings that expose systems to  vulnerabilities."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Compliance Violations"}),": Failure to meet regulatory and industry standards."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Advanced Persistent Threats (APTs)"}),": Prolonged and targeted cyber-attacks."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Insider Threats"}),": Malicious actions by authorized users."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To mitigate these risks, security practices like Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) are employed. However, if you look at it from an automation perspective, a basic distinction of tooling is needed to be considered:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"SAST involves analyzing the source code, bytecode, or binary code of applications to identify vulnerabilities without executing them. It helps in detecting issues like SQL injection, XSS, and other code-related vulnerabilities early in the development lifecycle."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"DAST involves testing the application in its running state, as well as deployed infrastructure, to identify vulnerabilities that could be exploited in real-time. It focuses on the application's exposed interfaces and is crucial for detecting issues like authentication problems, server misconfigurations, and injection flaws."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In this project we solely focus on DAST."}),"\n",(0,s.jsx)(t.h2,{id:"scs-automated-pentesting",children:"SCS automated pentesting"}),"\n",(0,s.jsx)(t.p,{children:"The automated pentesting pipeline is based on a proposed methodology for the Sovereign Cloud Stack community. It integrates state-of-the-art tools to conduct dynamic security testing and ensure continuous security assurance for SCS based cloud infrastructures."}),"\n",(0,s.jsx)(t.p,{children:"The pipeline has been developed from a DevSecOps perspective, which ensures that security is deeply embedded into the fabric of the cloud infrastructure. It aligns with the following principles:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Integrated Security Testing"}),": The pipeline integrates DAST tools directly into the workflow managed by SCS Zuul. This ensures that every target is automatically tested for security vulnerabilities."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Continuous Monitoring"}),": Scheduled daily and weekly scans maintain continuous oversight of the infrastructure\u2019s security posture, ensuring that any new vulnerabilities are quickly identified and addressed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Automated Feedback Loop"}),": The results from security tests are automatically fed back to the a central vulnerabilities repository, enabling quick remediation and continuous improvement."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Cultural Shift"}),": By adopting a DevSecOps approach, the pipeline fosters a culture where security is a shared responsibility, encouraging all team members to prioritize and contribute to security efforts."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Following this approach, each each tool has it's own use case and they build up onto each other over two different pipelines: A fast daily scan and a comprehensive weekly scan."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Naabu"})," -> Identify open ports"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Httpx"})," -> Identify web services from previous result"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Nuclei"})," -> Scan web services based on community templates"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ZAP Proxy"})," -> Scan web services based on OWASP rulesets"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Greenbone"})," Community Edition (OpenVAS) -> Full scan targets"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Defect Dojo"})," -> Vulnerabilities management"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"scs_automated_pentesting_workflow.png",src:n(30285).A+"",width:"1024",height:"768"})}),"\n",(0,s.jsx)(t.p,{children:"Color meaning:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Green: Daily triggered pipeline"}),"\n",(0,s.jsx)(t.li,{children:"Blue: Weekly triggered pipeline"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"quickstart-guide",children:"Quickstart Guide"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/docs/operating-scs/components/automated-pentesting-iaas/quickstart",children:"the quickstart page"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"tools",children:"Tools"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/docs/operating-scs/components/automated-pentesting-iaas/tools",children:"the tools page"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"source",children:"Source"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/security-infra-scan-pipeline",children:"github.com/SovereignCloudStack/security-infra-scan-pipeline"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},30285:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/scs_automated_pentesting_workflow-14a9ffdbf77267915ddcc95b954c4f1a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);