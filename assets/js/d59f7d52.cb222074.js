"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55139],{24907:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scs-0301-v1-naming-conventions","title":"Naming for domains/groups/roles/project when onboarding new customers","description":"\x3c!---","source":"@site/standards/scs-0301-v1-naming-conventions.md","sourceDirName":".","slug":"/scs-0301-v1-naming-conventions","permalink":"/standards/scs-0301-v1-naming-conventions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Naming for domains/groups/roles/project when onboarding new customers","type":"Decision Record","status":"Draft","track":"IAM"},"sidebar":"standards","previous":{"title":"scs-0301: Naming for domains/groups/roles/project when onboarding new customers","permalink":"/standards/iam/scs-0301"},"next":{"title":"scs-0302: Domain Manager configuration for Keystone","permalink":"/standards/iam/scs-0302"}}');var s=o(74848),r=o(28453);const i={title:"Naming for domains/groups/roles/project when onboarding new customers",type:"Decision Record",status:"Draft",track:"IAM"},a=void 0,c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Design Considerations",id:"design-considerations",level:2},{value:"Options considered",id:"options-considered",level:3},{value:"PS approach to naming",id:"ps-approach-to-naming",level:4},{value:"<em>Option 2</em>",id:"option-2",level:4},{value:"Open questions",id:"open-questions",level:2},{value:"Decision",id:"decision",level:2},{value:"Related Documents",id:"related-documents",level:2},{value:"Conformance Tests",id:"conformance-tests",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"When CSPs try to enroll a new customer they encounter themselves in\na situation where they have to choose names for the openstack domain,\nproject and user."}),"\n",(0,s.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(n.p,{children:"Create a naming convention to use during the provisioning of the users and\ngroups through an openstack domain."}),"\n",(0,s.jsx)(n.h2,{id:"design-considerations",children:"Design Considerations"}),"\n",(0,s.jsx)(n.p,{children:"OPTIONAL"}),"\n",(0,s.jsx)(n.h3,{id:"options-considered",children:"Options considered"}),"\n",(0,s.jsx)(n.h4,{id:"ps-approach-to-naming",children:"PS approach to naming"}),"\n",(0,s.jsx)(n.p,{children:"For naming the customers the suggestion from PS is the following:"}),"\n",(0,s.jsx)(n.p,{children:"A prefix will be used to differentiate domain, project and user in\nthe openstack environment. The project name is also added as a suffix."}),"\n",(0,s.jsx)(n.p,{children:"So the onboarding tool will create the following structure for a new\ncustomer onboarded in the system."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:"domain: d<customer_id>\nproject: p<customer_id>-<project_name>\nuser: u<customer_id>-<user_name>\n"})}),"\n",(0,s.jsx)(n.p,{children:'For the customer also a domain admin group and a project admin group are\ncreated. Please note that, at the time of writing, PCO is not making any\nuse of OpenStack domains to isolate customers. So, for the scope of this\ndocument, the term "domain admin" is used in a conceptual way rather than\nreferring to the specific OpenStack implementation. For the scope of this\ndocument "domain admins" can do things like creating projects, creating\nusers and granting users access to some projects (within the domain of\ncourse). "Users" can create and view resources within the projects that\nthey have been granted access to by the "domain admin".\nThese groups use the prefix "gd" for domain group and "gp" for group project\nand are build like the following:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:"domain admin group: gd<customer_id>-member\nproject admin group: gp<customer_id>-<project_name>-member\n"})}),"\n",(0,s.jsx)(n.p,{children:"For the creation of a domain a new domain admin group is created."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:"openstack domain create d000001\nopenstack group create gd000001-member\n"})}),"\n",(0,s.jsx)(n.p,{children:"When a project is created a new admin group for that project is created."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:"openstack project create p000001-scs_dev_project\nopenstack group create p000001-scs_dev_project-member\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the creation of a project it is necessary to assign roles to the\nnew groups."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:"openstack role add --group gd000001-member --project p000001-scs_dev_project $role\nopenstack role add --group gp000001-scs_dev_project-member --project p000001-scs_dev_project $role\n"})}),"\n",(0,s.jsx)(n.p,{children:'For the creation of regular non admin users, the accounts will be added\nto the "domain admin" group to give them access to all projects within\nthe domain.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:"openstack user created u000001-user1\nopenstack group add user gd000001-member u000001-user1\n"})}),"\n",(0,s.jsx)(n.p,{children:'In the case of machine accounts, they are only added to the specific\n"project admin" groups.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:"openstack user created u000001-svc_user_project\nopenstack group add user gp000001-scs_dev_project-member u000001-svc_user_project\n"})}),"\n",(0,s.jsx)(n.p,{children:"In case of using federation, there are suggestions to the namings within Keycloak."}),"\n",(0,s.jsx)(n.p,{children:'The realms in Keycloak for each customer would be the same as the customer. e.g. The Keycloak realm for "Customer A"\nwill be called "Customer A".'}),"\n",(0,s.jsx)(n.p,{children:"There should be an OIDC client in each customer realm to allow the federation to the Proxy realm. Currently called OSISM\non the testbed."}),"\n",(0,s.jsxs)(n.p,{children:['On the proxy realm, it\'s needed to add this new customer realm as an identity provider. During the creation of the identity\nprovider for "Customer A", the field "Alias" should be set to ',(0,s.jsx)(n.code,{children:"<customer-id>"}),'. This will make that the users federated from\nrealm "Customer A" to the proxy realm to be prefixed to avoid naming collisions, e.g. ',(0,s.jsx)(n.code,{children:"d${ALIAS}-${CLAIM.preferred_username}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Also, on the identity federation there should be configured to store the ",(0,s.jsx)(n.code,{children:"<customer-id>"})," from that realm into the users. So it\ncan be sent to Keystone mapping to use it as ",(0,s.jsx)(n.code,{children:"gd<customer-id>-member"})," and ",(0,s.jsx)(n.code,{children:"gp<customer-id>-<project_name>-member"}),". There is\nalso the necessity of a mapper to send the ",(0,s.jsx)(n.code,{children:"openstack-default-project"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Add the additional mappings for roles and groups as necessary to get the attributes from the customer realm into the OIDC\nuserinfo that is put into the OIDC to the proxy realm and from there to Keystone."}),"\n",(0,s.jsx)(n.h4,{id:"option-2",children:(0,s.jsx)(n.em,{children:"Option 2"})}),"\n",(0,s.jsx)(n.p,{children:"Option 2 description"}),"\n",(0,s.jsx)(n.h2,{id:"open-questions",children:"Open questions"}),"\n",(0,s.jsx)(n.p,{children:"RECOMMENDED"}),"\n",(0,s.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(n.p,{children:"Decision"}),"\n",(0,s.jsx)(n.h2,{id:"related-documents",children:"Related Documents"}),"\n",(0,s.jsx)(n.p,{children:"Related Documents, OPTIONAL"}),"\n",(0,s.jsx)(n.h2,{id:"conformance-tests",children:"Conformance Tests"}),"\n",(0,s.jsx)(n.p,{children:"Conformance Tests, OPTIONAL"})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);