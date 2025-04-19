"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64277],{49516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"operations/iam/openstack-federation-via-oidc","title":"OpenStack Federation via OpenID-Connect","description":"Keystone supports federating authentication and authorization decisions via several mechanisms","source":"@site/contributor-docs/operations/iam/openstack-federation-via-oidc.md","sourceDirName":"operations/iam","slug":"/operations/iam/openstack-federation-via-oidc","permalink":"/contributor-docs/operations/iam/openstack-federation-via-oidc","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"OpenStack Federation via OpenID-Connect","type":null,"status":"Draft","track":"Global"},"sidebar":"devDocs","previous":{"title":"Identity Federation in SCS","permalink":"/contributor-docs/operations/iam/identity-federation-in-scs"},"next":{"title":"Zuul users guide","permalink":"/contributor-docs/operations/operations/zuul-ci-cd-quickstart-user-guide"}}');var s=n(74848),i=n(28453);const a={title:"OpenStack Federation via OpenID-Connect",type:null,status:"Draft",track:"Global"},r=void 0,c={},d=[{value:"1. Keystone",id:"1-keystone",level:2},{value:"1.1 Keycloak IdP realm discovery",id:"11-keycloak-idp-realm-discovery",level:3},{value:"1.2 Keystone mapping of token claims",id:"12-keystone-mapping-of-token-claims",level:3},{value:"1.3 Horizon WebSSO for federated users",id:"13-horizon-websso-for-federated-users",level:3},{value:"1.4 OpenStack CLI and API access for federated users",id:"14-openstack-cli-and-api-access-for-federated-users",level:3},{value:"1.5 SSO Federation between to SCS deployments",id:"15-sso-federation-between-to-scs-deployments",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Keystone supports federating authentication and authorization decisions via several mechanisms\nas ",(0,s.jsx)(t.a,{href:"https://docs.openstack.org/keystone/latest/admin/federation/introduction.html",children:"documented by the project"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In SCS OpenID Connect is used for federation between Keystone and the IdP, which is\n",(0,s.jsx)(t.a,{href:"https://docs.scs.community/standards/scs-0300-v1-requirements-for-sso-identity-federation",children:"currently provided by Keycloak"}),"\nin SCS."]}),"\n",(0,s.jsx)(t.p,{children:"The following sections describe the setup."}),"\n",(0,s.jsx)(t.h2,{id:"1-keystone",children:"1. Keystone"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.openstack.org/keystone/latest/admin/federation/federated_identity.html",children:"Keystone supports federated identities"}),".\nTo allow SCS to consume identities managed in external IAM solutions,\nfederation protocols like OpenID Connect or SAML can be used.\nKeystone currently makes use of third party apache modules like\n",(0,s.jsx)(t.a,{href:"https://github.com/OpenIDC/mod_auth_openidc",children:"mod_auth_openidc"}),",\n",(0,s.jsx)(t.a,{href:"https://github.com/OpenIDC/mod_oauth2",children:"mod_oauth2"})," and\n",(0,s.jsx)(t.a,{href:"https://github.com/UNINETT/mod_auth_mellon",children:"mod_auth_mellon"})," to delegate\nauthentication to a SSO IdP (i.e. SAML IdP or OpenID Connect provider)."]}),"\n",(0,s.jsxs)(t.p,{children:["In OpenStack the apache modules are configured using the\n",(0,s.jsx)(t.a,{href:"https://github.com/openstack/kolla-ansible/tree/master/ansible/roles/keystone/templates",children:"wsgi-keystone.conf template"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In SCS we make use of the OAuth 2.0 Authorization Code Grant flow between Keystone and Keycloak\nand use PKCE (RFC 7636) with the S256 challenge method."}),"\n",(0,s.jsx)(t.p,{children:"In addition to the usual SSL CA of the environment, Keycloak uses separate certificates to sign the OIDC tokens."}),"\n",(0,s.jsx)(t.p,{children:"Due to the way the Keystone container image runs apache (in the foreground) and keystone itself (as WSGI module),\nreconfiguring the apache URL locations on the fly is not possible currently without a downtime of several seconds.\nThat is the reason why SCS currently makes use of a single central proxy realm in Keycloak, to which Keystone\nconnects."}),"\n",(0,s.jsx)(t.h3,{id:"11-keycloak-idp-realm-discovery",children:"1.1 Keycloak IdP realm discovery"}),"\n",(0,s.jsxs)(t.p,{children:["Keycloak offers standard OIDC service discovery via ",(0,s.jsx)(t.code,{children:".well-known"})," documents to advertise its endpoints."]}),"\n",(0,s.jsx)(t.p,{children:"In SCS we want to represent each customer by a separate dedicated Keycloak realm, which can enventually be used\nfor customer self service and to federate out to customer owned IAM external solutions."}),"\n",(0,s.jsxs)(t.p,{children:["In the SCS testbed we currently experiment with the implications of using a single central proxy realm in Keycloak\nand chaining federation from there to customer specific realms, also hosted in the same Keycloak instance.\nTo make this usable, SCS makes use of the\n",(0,s.jsx)(t.a,{href:"https://github.com/sventorben/keycloak-home-idp-discovery",children:"Keycloak Home IdP Discovery"}),"\nextension."]}),"\n",(0,s.jsx)(t.h3,{id:"12-keystone-mapping-of-token-claims",children:"1.2 Keystone mapping of token claims"}),"\n",(0,s.jsxs)(t.p,{children:["Upon login of a user Keystone evaluates the credentials obtained from the ID token that the IdP issued.\nThese include group memberships and roles, which can be used to assign the user to a certain project.\nKeystone maps these external identities to internal (shadow) users.\nIt can either attempt to map the obtained information to a ",(0,s.jsx)(t.code,{children:"local"})," type user, which needs to be\nprovisioned before authentication by external tooling, or it can be instructed via the mapping to\ngenerate an ",(0,s.jsx)(t.code,{children:"ephemeral"})," type user. ",(0,s.jsx)(t.code,{children:"ephemeral"})," users are cleaned up automatically after some time\nof inactivity and with that, they lose access to projects, iff the access is granted indirectly\nvia group membership rather than directly to the user itself."]}),"\n",(0,s.jsxs)(t.p,{children:["Group memberships for ",(0,s.jsx)(t.code,{children:"ephemeral"})," users are only represented via their tokens, but not stored in the\nKeystone backend database."]}),"\n",(0,s.jsxs)(t.p,{children:["After successful authorization Keystone issues an OpenStack specific ",(0,s.jsx)(t.code,{children:"fernet"})," token to the user,\nwhich is the currency that is understood by other OpenStack services and can be used to access them."]}),"\n",(0,s.jsx)(t.p,{children:"In SCS we want to represent each customer by a sepatate dedicated OpenStack domain to host\ntheir projects and (shadow) user accounts."}),"\n",(0,s.jsxs)(t.p,{children:["The processing of information from the OIDC tokens is configured by two parts. The first part is the\n",(0,s.jsx)(t.code,{children:"rules.json"})," mapping which is described in the\n",(0,s.jsx)(t.a,{href:"https://docs.openstack.org/keystone/latest/admin/federation/mapping_combinations.html",children:"OpenStack federation mapping combinations"}),"\ndocument. This file is used to configure Keystones internal mapping engine\nand it needs to be attached to some OpenStack domain, which is named ",(0,s.jsx)(t.code,{children:"keycloak"})," by default in SCS."]}),"\n",(0,s.jsxs)(t.p,{children:["The second (static) part is the ",(0,s.jsx)(t.code,{children:"[auth]"})," and ",(0,s.jsx)(t.code,{children:"[mapped]"})," sections in ",(0,s.jsx)(t.code,{children:"keystone.conf"})," (see e.g.\n",(0,s.jsx)(t.a,{href:"https://github.com/osism/testbed/tree/main/environments/kolla/files/overlays/keystone",children:"the overlays currently used in the OSISM testbed"}),"\n)."]}),"\n",(0,s.jsx)(t.h3,{id:"13-horizon-websso-for-federated-users",children:"1.3 Horizon WebSSO for federated users"}),"\n",(0,s.jsx)(t.p,{children:"The Horizon dashboard supports login via OpenID Connect via Keystone endpoint.\nSCS adjusted the logout behavior to invalidate both, the OpenID Connect session\nwith the IdP and the Keystone token."}),"\n",(0,s.jsx)(t.h3,{id:"14-openstack-cli-and-api-access-for-federated-users",children:"1.4 OpenStack CLI and API access for federated users"}),"\n",(0,s.jsx)(t.p,{children:"To support OpenStack CLI and API access, SCS implemented support for the OIDC Device Authorization Grant\nin Keystone. On top we added support for PKCE (RFC 7636) in combination with that."}),"\n",(0,s.jsx)(t.h3,{id:"15-sso-federation-between-to-scs-deployments",children:"1.5 SSO Federation between to SCS deployments"}),"\n",(0,s.jsxs)(t.p,{children:["To show the potential of this approach to federation SCS created a\n",(0,s.jsx)(t.a,{href:"https://docs-staging.scs.community/docs/iam/intra-SCS-federation-setup-description-for-osism-doc-operations",children:"Howto for OIDC federation between SCS deployments"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(96540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);