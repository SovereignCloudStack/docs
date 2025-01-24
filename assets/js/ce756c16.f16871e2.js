"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19807],{24268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"license-considerations","title":"License considerations for SCS","description":"As Sovereign Cloud Stack (SCS), our mission is to provide Operators","source":"@site/community/license-considerations.md","sourceDirName":".","slug":"/license-considerations","permalink":"/community/license-considerations","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"community","previous":{"title":"Mission Statement","permalink":"/community/mission-statement"},"next":{"title":"Collaboration","permalink":"/community/collaboration/"}}');var s=t(74848),o=t(28453);const r={},a="License considerations for SCS",c={},l=[{value:"Reciprocity",id:"reciprocity",level:2},{value:"Controversy",id:"controversy",level:2},{value:"Affero",id:"affero",level:2},{value:"Derived works and Strong vs. Weak Copyleft",id:"derived-works-and-strong-vs-weak-copyleft",level:2},{value:"Patents",id:"patents",level:2},{value:"Copyright Assignments and Contributor License Agreements",id:"copyright-assignments-and-contributor-license-agreements",level:2},{value:"License in = License out",id:"license-in--license-out",level:2},{value:"Further reading",id:"further-reading",level:2}];function h(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"license-considerations-for-scs",children:"License considerations for SCS"})}),"\n",(0,s.jsxs)(n.p,{children:["As Sovereign Cloud Stack (",(0,s.jsx)(n.a,{href:"https://scs.community/",children:"SCS"}),"), our mission is to provide Operators\n(be it Cloud Service Providers or just internal IT departments) with a well working software\nstack, that avoids exposing them to legal risks or additional restrictions that limits the\nusefulness. Free software licenses have this intention but differ in how they achieve it and in\nwhat kind of protections they provide. In the first approximation, all ",(0,s.jsx)(n.a,{href:"https://opensource.org/licenses",children:"OSI"}),"-approved\nopen source licenses can be considered as valid options. As a matter of fact,\nwe do consider projects under such licenses as valid modules for SCS \u2014 where we\nuse such projects and adjust or extend them, we would provide our contributions\nunder the license terms of the respective project, so we can achieve our goal to feed back code\nupstream to the respective project, contribute to it and avoid fragmentation."]}),"\n",(0,s.jsx)(n.p,{children:"Where we do create independent code, we do have additional preferences, though."}),"\n",(0,s.jsxs)(n.p,{children:["For our own code, we do prefer the ",(0,s.jsx)(n.a,{href:"https://www.gnu.org/licenses/agpl-3.0.html",children:"Affero General Public License version 3"}),"\n(AGPLv3) as license. Likewise, for documentation, we prefer ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/CC-BY-SA",children:"CC-BY-SA"}),".\nWhere we create standard libraries to interface with our software, we would\nconsider the ",(0,s.jsx)(n.a,{href:"https://www.gnu.de/documents/lgpl-3.0.en.html",children:"LGPLv3"})," for these,\nas we don't want interaction with our platform to be seen as requiring licensing\ncode."]}),"\n",(0,s.jsx)(n.h2,{id:"reciprocity",children:"Reciprocity"}),"\n",(0,s.jsxs)(n.p,{children:["The GPL family of licenses are reciprocal licenses \u2014 sometimes called ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Copyleft",children:"copyleft"}),"\nlicenses \u2014 the recipient of the licensed code can make all sorts of modifications,\nbut if she uses the code to release software (GPL) or provide a networked service\n(AGPL) to others, then she must grant the same rights to the recipients \u2014 this\nincludes making the modifications available under the same terms as the received software.\nMicrosoft has infamously ",(0,s.jsx)(n.a,{href:"https://web.archive.org/web/20010615205548/http://suntimes.com/output/tech/cst-fin-micro01.html",children:"attacked"}),'\ncopyleft licenses (and specifically the GPL) as cancerous "viral" license.']}),"\n",(0,s.jsx)(n.p,{children:"Reciprocity has many advantages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Code that has been created as free software will stay free. While GPL code can be\ncombined in a larger software collection with proprietary software, the code itself\nincluding its enhancements etc. (technically: all derived works, see below) will\nremain free."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['The obligation to make the changes available avoids fragmentation. As changed and\n"improved" versions need to be made available, it is much easier to review and feed\nthose changes back and create a unified upstream codebase that reflects the needs of\nthe complete user base by including the needed changes. This was observed and\n',(0,s.jsx)(n.a,{href:"https://lwn.net/Articles/660428/",children:"reported"})," by Martin Fink (HP's former CTO)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The hugely successful ",(0,s.jsx)(n.a,{href:"https://kernel.org/",children:"Linux kernel"})," project uses the GNU GPL;\nmany of the more traditional key projects in the open source world use copyleft licenses such as\nthe AGPL, GNU GPL, GNU LGPL, MPL or the ",(0,s.jsx)(n.a,{href:"https://opensource.org/licenses/OSL-3.0",children:"OSL"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"controversy",children:"Controversy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Not fulfilling the license terms of a software license typically leads to the ability for the\nlicense owner to revoke the license \u2014 as it is relatively easy to not fulfill all obligations\nof the GPL out of sheer negligence, the revocation without prior warning seems\ndisproportionate \u2014 this is sometimes called the GPL death penalty. The open source community\nthough has a strong interest in bringing every licensee into compliance by giving violators a\nfair chance to correct their behavior. SCS explicitly supports the ",(0,s.jsx)(n.a,{href:"https://gplcc.github.io/gplcc/",children:"GPL Cooperation Commitment"}),"\nand the respective ",(0,s.jsx)(n.a,{href:"https://www.kernel.org/doc/html/v4.15/process/kernel-enforcement-statement.html",children:"document"}),"\nfrom the Linux kernel developers and pledges to give violators a warning and a chance to correct action\nby allowing for a cure period. This is a bit of a legacy issue \u2014 it is relevant to (L)GPLv2\ncode only \u2014 v3 of L/A/GPL does already contain language that has cure provisions, so it's\nclear by the licensing terms."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Many companies seem to be worried that they will inadvertently violate the GPL by negligence.\nAnd it is true that a company needs a tighter control of the usage of inbound source code\nwhich comes with a reciprocal license than the permissive BSD 3-clause or Apache Software (v2)\nlicenses. This advantage however quickly turns into a disadvantage as soon as the company does\nsignificant outbound open source contributions under a permissive license \u2014 they rarely want\nto give their competitors an opportunity to consume their contributions and then add\nproprietary changes to gain an advantage. In general, companies are well advised to have a\ndetailed understanding of all code that is being used and contributed and their respective\nlicense terms \u2014 for proprietary and open source code and for reciprocal and for permissive\nlicenses. Some companies have successfully installed license review boards or\n",(0,s.jsx)(n.a,{href:"https://www.linuxfoundation.org/resources/open-source-guides/using-open-source-code/",children:"open source review boards"}),"\nto create oversight, recommendations and policies to ease the governance."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Despite this, many of the recent open source projects, especially in the cloud world\nhave adopted permissive licenses, such as X11, BSD 3-clause, MIT and especially the popular\n",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Apache_License",children:"Apache software license"})," (ASL2), as it\nappears to allow for faster adoption by companies that may not have mature open source\npolicies in place or that simply have overly careful lawyers which may be influenced\nby the scare tactics some bad companies have built on top of copyleft licenses."]}),"\n",(0,s.jsx)(n.h2,{id:"affero",children:"Affero"}),"\n",(0,s.jsxs)(n.p,{children:["The reciprocity of the GNU GPL does not apply on the ",(0,s.jsx)(n.em,{children:"creation"})," of a derived work. A company\ncan consume GPL'ed code and change it to their own liking without ever making any the\nchanges available if only used in-house. The terms however do apply as soon as the derived\nwork is ",(0,s.jsx)(n.em,{children:"released"}),", i.e. the software is passed on to a third party."]}),"\n",(0,s.jsxs)(n.p,{children:["In modern times, software is often used to provide a ",(0,s.jsx)(n.em,{children:"networked service"})," (think SaaS) to third\nparties. Unlike the standard GPL, the Affero GPL (AGPL) does consider the act of making it\navailable in such a way as similar to releasing the software and does require that applied\nchanges to the software are being made available in this case."]}),"\n",(0,s.jsx)(n.p,{children:"The AGPL thus closes a shortcoming in the traditional non-Affero GPL for a world that\nincreasingly moves towards networked services."}),"\n",(0,s.jsxs)(n.p,{children:["The very successful ",(0,s.jsx)(n.a,{href:"https://nextcloud.com/",children:"Nextcloud"})," project uses the AGPLv3."]}),"\n",(0,s.jsx)(n.h2,{id:"derived-works-and-strong-vs-weak-copyleft",children:"Derived works and Strong vs. Weak Copyleft"}),"\n",(0,s.jsx)(n.p,{children:"What exactly constitutes derived work needs to be defined \u2014 it's one of the questions where\ncopyright law can get subtle. From a practical view, consuming (non-trivial) source code and\nbinary linking is typically considered creating derived works. Whereas interacting via a network\nAPI or starting another process is typically considered a copyright boundary. To avoid any\nunclarity, the Linux kernel community has explicitly called out using Linux system calls (which\nincludes using the interface definitions) is a copyright boundary and can thus be done by\napplications without any license implications."}),"\n",(0,s.jsx)(n.p,{children:"Considering linked code to be derived works (as is the case in the GPL and AGPL) and thus\nrequiring it under the same (or a compatible) copyleft license is considered a Strong Copyleft\nlicense."}),"\n",(0,s.jsxs)(n.p,{children:["Libraries are often providing implementations for standard services and helpers; it may not be\nreasonable to consider applications that want to use a library as derived works from that\nlibrary and requiring the application to thus be licensed under a (compatible) copyleft license.\nFor these libraries, a Weak Copyleft license (such as the ",(0,s.jsx)(n.a,{href:"https://www.gnu.org/licenses/lgpl-3.0.en.html",children:"LGPL"}),"\nor the ",(0,s.jsx)(n.a,{href:"https://www.eclipse.org/legal/epl-2.0/",children:"EPL"})," can be used. This would still require changes to\nthe library ",(0,s.jsx)(n.em,{children:"itself"})," to me made available under the copyleft license but would make binary\nlinking (including the use of interface definitions) a copyright barrier and thus allow for\nnon-copylefted code to be linked against a weakly copylefted library. This license is used by\nmany of the standard and system libraries in the Linux world and is often a good choice for\nlibraries of standardized services."]}),"\n",(0,s.jsx)(n.h2,{id:"patents",children:"Patents"}),"\n",(0,s.jsxs)(n.p,{children:["Free software licenses are intended to give users broad rights \u2014 the GNU GPL talks about the\n",(0,s.jsx)(n.a,{href:"https://fsfe.org/freesoftware/",children:"four freedoms"})," to use software for any purpose, to study and\nadjust the software (this needs source code access), to redistribute the software and to improve\nit and to make these improvements available."]}),"\n",(0,s.jsxs)(n.p,{children:["Software patents can significantly subvert the intended rights \u2014 the open source community in\ngeneral dislikes software patents for this and many other reasons that are discussed\n",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Software_patents_and_free_software",children:"elsewhere"})," .\nIn some countries, there are rules that prevent pure software from being patented, though ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Software_patents_under_the_European_Patent_Convention",children:"not\nall patent offices are fully following these rules"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"As software patents are existing and a serious danger to the open source goals, there are a few\nattempts to improve the situation. The Apache Software License (a permissive license), requires\ncode contributors to grant a patent license to all downstream recipients of the code\nto use the contributed code by itself or in combination with the project that it was contributed\nto and makes a possible patent holder lose its license rights should he nevertheless try to\nassert a patent against the thus licensed use. The (A)GPLv3 has a similar clause."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://www.openinventionnetwork.com/",children:"Open Invention Network"})," (OIN) has a meanwhile\nhuge patent pool that is cross-licensed between all participants and which can freely be used\nin a large list of covered open source software by everyone, except for those that raise patent\nviolation claims against any of the covered open source projects. This basically restricts\nthose patents to be only used defensively in the context of the covered open source projects."]}),"\n",(0,s.jsx)(n.p,{children:"Should SCS be in a position to make inventions that should be protected by a software patent,\nit pledges to contribute these to the OIN pool."}),"\n",(0,s.jsx)(n.h2,{id:"copyright-assignments-and-contributor-license-agreements",children:"Copyright Assignments and Contributor License Agreements"}),"\n",(0,s.jsx)(n.p,{children:"Very few Open Source projects require copyright assignment; the GNU projects are the\nonly commonly used ones that the author is aware of. This results in fully centralized\ncopyright ownership. This puts the FSF into a very\nstrong position \u2014 a position to enforce copyright, to change licenses etc. This requires\na lot of trust towards the copyright assigneed."}),"\n",(0,s.jsx)(n.p,{children:"Most open source projects prefer distributed copyright \u2014 the authors (or their\nemployers) retain the copyright to their works. They grant a license for the open\nsource project to use and integrate and redistribute the work \u2014 typically the\nlicense grant is extended to the public. In a sufficiently distributed copyright model,\nit is very hard to change a license, as all copyright holders would need to agree.\nThis can both be considered advantageous and disadvantageous."}),"\n",(0,s.jsxs)(n.p,{children:["Many software projects use ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Contributor_License_Agreement",children:"Contributor License Agreements"}),"\n(CLAs), documenting that contributed code grants certain rights to the project\nowner (a foundation or sometimes a company). This ensures that the project owner\nhas all needed rights to use, protect, redistribute ... the code. If the CLA contains\n",(0,s.jsx)(n.em,{children:"copyright assignment"}),", it also allows the project to change the license or to\ncreate derived works under a different license."]}),"\n",(0,s.jsx)(n.p,{children:"While this is advantageous for the project owner, it is not necessarily advantageous for the\ncode contributor."}),"\n",(0,s.jsx)(n.p,{children:"Copyright enforcement does not require all copyrights to be held by a legal entity. Any holder\nof significant copyrights can actually enforce it against violators."}),"\n",(0,s.jsxs)(n.p,{children:["The Linux kernel and an increasing number of projects do not work with copyright assignments\nnor CLAs, but with ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Developer_Certificate_of_Origin",children:"Developer Certificates of Origin"}),"\n(DCO \u2014 the signed-off lines of kernel commits). This is deemed sufficient to document the origin and the authorization to\ncontribute code."]}),"\n",(0,s.jsx)(n.p,{children:"The SCS project will not change the license. There however might be cases, where potential users\ncan not consume AGPL'ed or LGPL'ed code (due to corporate policies, e.g. based on bad experience,\nimmature license governance practices or lawyers that panic). Our goal would be to ensure that our\nlicensing terms and all other pledges provide the assurance needed that users do not need to be\nafraid of the AGPL. The cure provisions from v3 of the GPL license family actually also help to\navoid unnecessary fear. However, unfortunately, some \"open source\" companies in the past have\nabused copyleft with a scare and sell a proprietary license tactics to make money, which has\nhurt copyleft acceptance significantly. We might thus not be successful and need to somehow\naccept not serving all users or come up with a relicensing scheme that can not corrupt\nourselves. We are following the copyleft-next discussion to work out how we can best achieve\nthis, but have not yet found the silver bullet. This might have an influence how we do DCOs,\nmaybe under a permissive license, or maybe need to use CLAs."}),"\n",(0,s.jsx)(n.h2,{id:"license-in--license-out",children:"License in = License out"}),"\n",(0,s.jsx)(n.p,{children:"It is best practice that open source projects grant their downstream users the same\nlicense rights as they received contributions under. Or worded the opposite direction:\nIt is best practice to require no more rights to be granted from upstream contributors\n(in the CLA or DCO) than the projects grants to downstream consumers of the project.\nSCS follows this best practice."}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licences",children:"https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licences"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Software_patents_and_free_software",children:"https://en.wikipedia.org/wiki/Software_patents_and_free_software"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://joinup.ec.europa.eu/collection/eupl/matrix-eupl-compatible-open-source-licences",children:"https://joinup.ec.europa.eu/collection/eupl/matrix-eupl-compatible-open-source-licences"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://lwn.net/Articles/592503/",children:"https://lwn.net/Articles/592503/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://sfconservancy.org/blog/2020/jan/06/copyleft-equality/",children:"https://sfconservancy.org/blog/2020/jan/06/copyleft-equality/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developercertificate.org",children:"https://developercertificate.org"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://julien.ponge.org/blog/developer-certificate-of-origin-versus-contributor-license-agreements/",children:"https://julien.ponge.org/blog/developer-certificate-of-origin-versus-contributor-license-agreements/"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);