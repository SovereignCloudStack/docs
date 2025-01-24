"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16568],{66804:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scs-0100-v1-flavor-naming","title":"SCS Flavor Naming Standard","description":"Introduction","source":"@site/standards/scs-0100-v1-flavor-naming.md","sourceDirName":".","slug":"/scs-0100-v1-flavor-naming","permalink":"/standards/scs-0100-v1-flavor-naming","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SCS Flavor Naming Standard","version":"2022-09-08-002","authors":"Matthias Hamm, Kurt Garloff, Tim Beermann","type":"Standard","track":"IaaS","status":"Deprecated","state":"v1.1 (for R3)","stabilized_at":"2022-09-08T00:00:00.000Z","deprecated_at":"2023-10-31T00:00:00.000Z"},"sidebar":"standards","previous":{"title":"scs-0100: SCS Flavor Naming Standard","permalink":"/standards/iaas/scs-0100"},"next":{"title":"V2","permalink":"/standards/scs-0100-v2-flavor-naming"}}');var r=n(74848),t=n(28453);const d={title:"SCS Flavor Naming Standard",version:"2022-09-08-002",authors:"Matthias Hamm, Kurt Garloff, Tim Beermann",type:"Standard",track:"IaaS",status:"Deprecated",state:"v1.1 (for R3)",stabilized_at:new Date("2022-09-08T00:00:00.000Z"),deprecated_at:new Date("2023-10-31T00:00:00.000Z")},l=void 0,o={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Type of information included",id:"type-of-information-included",level:3},{value:"Complete Proposal",id:"complete-proposal",level:3},{value:"Proposal Details",id:"proposal-details",level:2},{value:"[REQUIRED] CPU Suffixes",id:"required-cpu-suffixes",level:3},{value:"Baseline",id:"baseline",level:4},{value:"Higher oversubscription",id:"higher-oversubscription",level:4},{value:"Insufficient microcode",id:"insufficient-microcode",level:4},{value:"Examples",id:"examples",level:4},{value:"[REQUIRED] Memory",id:"required-memory",level:3},{value:"Baseline",id:"baseline-1",level:4},{value:"No ECC",id:"no-ecc",level:4},{value:"Enabled Oversubscription",id:"enabled-oversubscription",level:4},{value:"Examples",id:"examples-1",level:4},{value:"[OPTIONAL] Disk sizes and types",id:"optional-disk-sizes-and-types",level:3},{value:"Baseline",id:"baseline-2",level:4},{value:"Multi-provisioned Disk",id:"multi-provisioned-disk",level:4},{value:"Examples",id:"examples-2",level:4},{value:"[OPTIONAL] Hypervisor",id:"optional-hypervisor",level:3},{value:"Examples",id:"examples-3",level:4},{value:"[OPTIONAL] Hardware virtualization / Nested virtualization",id:"optional-hardware-virtualization--nested-virtualization",level:3},{value:"Examples",id:"examples-4",level:4},{value:"[OPTIONAL] CPU Architecture Details",id:"optional-cpu-architecture-details",level:3},{value:"Generation and Vendor",id:"generation-and-vendor",level:4},{value:"Frequency Suffixes",id:"frequency-suffixes",level:4},{value:"Examples",id:"examples-5",level:4},{value:"[OPTIONAL] Extra features",id:"optional-extra-features",level:3},{value:"Proposal Examples",id:"proposal-examples",level:2},{value:"Standard SCS flavors",id:"standard-scs-flavors",level:2},{value:"Naming policies",id:"naming-policies",level:2},{value:"Rationale",id:"rationale",level:3},{value:"Validation",id:"validation",level:2},{value:"Beyond SCS: Gaia-X",id:"beyond-scs-gaia-x",level:2}];function c(e){const s={a:"a",code:"code",del:"del",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(s.p,{children:"This is the standard v1.0 for SCS Release 0.\nNote that we intend to only extend it (so it's always backwards compatible),\nbut try to avoid changing in incompatible ways."}),"\n",(0,r.jsx)(s.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsx)(s.p,{children:"In OpenStack environments there is a need to define different flavors for instances.\nThe flavors are pre-defined by the operator, the customer can not change these.\nOpenStack providers thus typically offer a large selection of flavors."}),"\n",(0,r.jsxs)(s.p,{children:["While flavors can be discovered (",(0,r.jsx)(s.code,{children:"openstack flavor list"}),"), it is helpful for users (DevOps teams),\nto have"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A naming scheme that is used across all SCS flavors, so flavor names have the same meaning everywhere."}),"\n",(0,r.jsx)(s.li,{children:"Have a guaranteed set of flavors available on all SCS clouds, so these do not need to be discovered."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"While not all details will be encoded in the name, the key features should be obvious:\nNumber of vCPUs, RAM, Root Disk.\nExtra features are important as well: There will be flavors with GPU support, fast disks for databases,\nmemory-heavy applications, and other useful aspects of an instance."}),"\n",(0,r.jsx)(s.p,{children:"It may also be important to make the CPU generation clearly recognisable, as this is always a topic in\ndiscussions with customers."}),"\n",(0,r.jsx)(s.h2,{id:"proposal",children:"Proposal"}),"\n",(0,r.jsx)(s.h3,{id:"type-of-information-included",children:"Type of information included"}),"\n",(0,r.jsx)(s.p,{children:"We believe the following characteristics are important in a flavour description:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Generation"}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"CPU Generation"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Number of CPU"}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Number of vCPUs - suffixed by L,V,T,C (see below)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Amount of RAM"}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Amount of memory available for the VM"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Performance Class"}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Ability to label high-performance CPUs, disks, network"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"CPU Type"}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"X86-intel, X86-amd, ARM, RISC-V, Generic"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:'"bms"'}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Bare Metal System (no virtualization/hypervisor)"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"complete-proposal",children:"Complete Proposal"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Prefix"}),(0,r.jsx)(s.th,{children:"CPU"}),(0,r.jsx)(s.th,{children:"Suffix"}),(0,r.jsx)(s.th,{children:"RAM[GiB]"}),(0,r.jsx)(s.th,{children:"optional: Disk[GB]"}),(0,r.jsx)(s.th,{children:"optional: Disk type"}),(0,r.jsx)(s.th,{children:"optional: extra features"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"SCS-"})}),(0,r.jsx)(s.td,{children:"N"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L/V/T/C[i]"})}),(0,r.jsxs)(s.td,{children:[":N",(0,r.jsx)(s.code,{children:"[u][o]"})]}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"[:["}),"M",(0,r.jsx)(s.code,{children:"x]"}),"N",(0,r.jsx)(s.code,{children:"]"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"[n/s/l/p]"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"[-"}),"hyp",(0,r.jsx)(s.code,{children:"][-hwv]-["}),"arch",(0,r.jsx)(s.code,{children:"["}),"N",(0,r.jsx)(s.code,{children:"][h][-[G/g]"}),"X",(0,r.jsx)(s.code,{children:"["}),"N",(0,r.jsx)(s.code,{children:"][:"}),"M",(0,r.jsx)(s.code,{children:"[h]]][-ib]"})]})]})})]}),"\n",(0,r.jsx)(s.p,{children:"(Note that N and M are placeholders for numbers here)."}),"\n",(0,r.jsx)(s.h2,{id:"proposal-details",children:"Proposal Details"}),"\n",(0,r.jsx)(s.h3,{id:"required-cpu-suffixes",children:"[REQUIRED] CPU Suffixes"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Suffix"}),(0,r.jsx)(s.th,{children:"Meaning"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"C"}),(0,r.jsx)(s.td,{children:"dedicated Core"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"T"}),(0,r.jsx)(s.td,{children:"dedicated Thread (SMT)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"V"}),(0,r.jsx)(s.td,{children:"vCPU (oversubscribed)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"L"}),(0,r.jsx)(s.td,{children:"vCPU (heavily oversubscribed)"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"baseline",children:"Baseline"}),"\n",(0,r.jsxs)(s.p,{children:["Note that vCPU oversubscription for a ",(0,r.jsx)(s.code,{children:"V"})," vCPU should be implemented such, that we\ncan guarantee ",(0,r.jsx)(s.code,{children:"at least 20% of a core in >99% of the time"}),"; this can be achieved by\nlimiting vCPU oversubscription to 5x per core (or 3x per thread when SMT/HT is enabled)\nor by more advanced workload management logic. Otherwise ",(0,r.jsx)(s.code,{children:"L"})," (low performance) must be\nused. The >99% is measured over a month (1% is 7.2h/month)."]}),"\n",(0,r.jsxs)(s.p,{children:["Note that CPUs must use latest microcode to protect against CPU vulnerabilities (Spectre, Meltdown, L1TF, etc.).\nWe expect that microcode gets updated within less than a month of a new release; for CVSS scores above 8,\nwe expect less than a week.\nThe provider must enable at least all mitigations that are enabled by default in the Linux kernel. CPUs that\nare susceptible to L1TF (intel x86 pre Cascade Lake) must switch off hyperthreading OR (in the future)\nuse core scheduling implementations that are deemed to be secure by the SCS security team, or declare themselves\nas insecure with the ",(0,r.jsx)(s.code,{children:"i"})," suffix (see below)."]}),"\n",(0,r.jsx)(s.h4,{id:"higher-oversubscription",children:"Higher oversubscription"}),"\n",(0,r.jsxs)(s.p,{children:["Must be indicated with a ",(0,r.jsx)(s.code,{children:"L"})," vCPU type (low performance for > 5x/core or > 3x/thread oversubscription and\nthe lack of workload management that would prevent worst case performance < 20% in more than 7.2h per month)."]}),"\n",(0,r.jsx)(s.h4,{id:"insufficient-microcode",children:"Insufficient microcode"}),"\n",(0,r.jsxs)(s.p,{children:["Not using these mitigations must be indicated by an additional ",(0,r.jsx)(s.code,{children:"i suffix"})," for insecure\n(weak protection against CPU vulnerabilities through insufficient microcode, lack of disabled hyperthreading\non L1TF susceptible CPUs w/o effective core scheduling or disabled protections on the host/hypervisor)."]}),"\n",(0,r.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["SCS-",(0,r.jsx)(s.strong,{children:"2C"}),":4:10n"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-",(0,r.jsx)(s.strong,{children:"2T"}),":4:10n"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-",(0,r.jsx)(s.strong,{children:"2V"}),":4:10n"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-",(0,r.jsx)(s.strong,{children:"2L"}),":4:10n"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-",(0,r.jsx)(s.strong,{children:"2Li"}),":4:10n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.del,{children:["SCS-",(0,r.jsx)(s.strong,{children:"2"}),":**4:10n"]})," - CPU suffix missing"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.del,{children:["SCS-",(0,r.jsx)(s.strong,{children:"2iT"}),":4:10n"]})," - This order is forbidden"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"required-memory",children:"[REQUIRED] Memory"}),"\n",(0,r.jsx)(s.h4,{id:"baseline-1",children:"Baseline"}),"\n",(0,r.jsx)(s.p,{children:"We expect cloud providers to use ECC memory.\nMemory oversubscription is not recommended.\nIt is allowed to specify half GiBs (e.g. 3.5), though this is discouraged for larger memory sizes (>= 10GiB)."}),"\n",(0,r.jsx)(s.h4,{id:"no-ecc",children:"No ECC"}),"\n",(0,r.jsxs)(s.p,{children:["If no ECC is used, the ",(0,r.jsx)(s.code,{children:"u suffix"})," must indicate this."]}),"\n",(0,r.jsx)(s.h4,{id:"enabled-oversubscription",children:"Enabled Oversubscription"}),"\n",(0,r.jsxs)(s.p,{children:["You have to expose this with the ",(0,r.jsx)(s.code,{children:"o sufffix"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"examples-1",children:"Examples"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["SCS-2C:",(0,r.jsx)(s.strong,{children:"4"}),":10n"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:",(0,r.jsx)(s.strong,{children:"3.5"}),":10n"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:",(0,r.jsx)(s.strong,{children:"4u"}),":10n"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:",(0,r.jsx)(s.strong,{children:"4o"}),":10n"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:",(0,r.jsx)(s.strong,{children:"4uo"}),":10n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.del,{children:["SCS-2C:",(0,r.jsx)(s.strong,{children:"4ou"}),":10n"]})," - This order is forbidden"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"optional-disk-sizes-and-types",children:"[OPTIONAL] Disk sizes and types"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Disk type"}),(0,r.jsx)(s.th,{children:"Meaning"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"n"}),(0,r.jsx)(s.td,{children:"Network shared storage (ceph/cinder)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"h"}),(0,r.jsx)(s.td,{children:"Local disk (HDD: SATA/SAS class)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"s"}),(0,r.jsx)(s.td,{children:"Local SSD disk"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"p"}),(0,r.jsx)(s.td,{children:"Local high-perf NVMe"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"baseline-2",children:"Baseline"}),"\n",(0,r.jsx)(s.p,{children:"Note that disk type might be omitted \u2014 the user then can not take any assumptions\non what storage is provided for the root disk (that the image gets provisioned to)."}),"\n",(0,r.jsxs)(s.p,{children:["It does make sense for ",(0,r.jsx)(s.code,{children:"n"})," to be requested explicitly to allow for smooth live migration.\n",(0,r.jsx)(s.code,{children:"h"})," typically provides latency advantages vs ",(0,r.jsx)(s.code,{children:"n"})," (but not necessarily bandwidth and\nalso is more likely to fail), ",(0,r.jsx)(s.code,{children:"s"})," and ",(0,r.jsx)(s.code,{children:"p"})," are for applications that need low\nlatency (high IOPS) and bandwidth disk I/O. ",(0,r.jsx)(s.code,{children:"n"})," storage is expected to survive\nsingle-disk and single-node failure."]}),"\n",(0,r.jsxs)(s.p,{children:["If the disk size is left out, the cloud is expected to allocate a disk (network or local)\nthat is large enough to fit the root file system (",(0,r.jsx)(s.code,{children:"min_disk"})," in image). This automatic\nallocation is indicated with ",(0,r.jsx)(s.code,{children:":"})," without a disk size.\nIf the ",(0,r.jsx)(s.code,{children:":"})," is left out completely, the user must create a boot volume manually and\ntell the instance to boot from it or use the\n",(0,r.jsx)(s.a,{href:"https://docs.openstack.org/api-ref/compute/?expanded=create-server-detail#create-server",children:"block_device_mapping_v2"}),"\nmechanism explicitly to create the boot volume from an image."]}),"\n",(0,r.jsx)(s.h4,{id:"multi-provisioned-disk",children:"Multi-provisioned Disk"}),"\n",(0,r.jsxs)(s.p,{children:["The disk size can be prefixed with ",(0,r.jsx)(s.code,{children:"Mx prefix"}),", where M is an integer specifying that the disk\nis provisioned M times."]}),"\n",(0,r.jsx)(s.h4,{id:"examples-2",children:"Examples"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"10n"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"10s"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"10s"}),"-bms-z3"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"3x10s"})," - Cloud creates three 10GB SSDs"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"3x10s"}),"-bms-z3"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"10"})," - Cloud decides disk type"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"10"}),"-bms-z3"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"n"})," - Cloud decides disk size (min_disk from image or larger)"]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"n"}),"-bms-3"]}),"\n",(0,r.jsx)(s.li,{children:"SCS-2C:4: - Cloud decides disk type and size"}),"\n",(0,r.jsx)(s.li,{children:"SCS-2C:4:-bms-z3"}),"\n",(0,r.jsx)(s.li,{children:"SCS-2C:4:-bms-z3h-GNa:64-ib"}),"\n",(0,r.jsx)(s.li,{children:"SCS-2C:4:-ib"}),"\n",(0,r.jsx)(s.li,{children:"SCS-2C:4 - You need to specify a boot volume yourself (boot from volume, or use block_device_mapping_v2)"}),"\n",(0,r.jsx)(s.li,{children:"SCS-2C:4-bms-z3"}),"\n",(0,r.jsx)(s.li,{children:"SCS-2C:4:3x - Cloud decides disk type and size and creates three of them (FIXME: Is this useful?)"}),"\n",(0,r.jsx)(s.li,{children:"SCS-2C:4:3xs - Cloud decides size and creates three local SSD volumes (FIXME: useful?)"}),"\n",(0,r.jsx)(s.li,{children:"SCS-2C:4:3x10 - Cloud decides type and creates three 10GB volumes"}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.del,{children:["SCS-2C:4:",(0,r.jsx)(s.strong,{children:"1.5n"})]})," - You must not specify disk sizes which are not in full GiBs"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"optional-hypervisor",children:"[OPTIONAL] Hypervisor"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"default Hypervisor"})," is assumed to be ",(0,r.jsx)(s.code,{children:"KVM"}),". Clouds, that offer different hypervisors\nor Bare Metal Systems should indicate the Hypervisor according to the following table:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"hyp"}),(0,r.jsx)(s.th,{children:"Meaning"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"kvm"}),(0,r.jsx)(s.td,{children:"KVM"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"xen"}),(0,r.jsx)(s.td,{children:"Xen"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vmw"}),(0,r.jsx)(s.td,{children:"VMware"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hyv"}),(0,r.jsx)(s.td,{children:"Hyper-V"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bms"}),(0,r.jsx)(s.td,{children:"Bare Metal System"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"examples-3",children:"Examples"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"SCS-2C:4:10n"}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-",(0,r.jsx)(s.strong,{children:"bms"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-",(0,r.jsx)(s.strong,{children:"bms"}),"-z3h"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"optional-hardware-virtualization--nested-virtualization",children:"[OPTIONAL] Hardware virtualization / Nested virtualization"}),"\n",(0,r.jsxs)(s.p,{children:["If the instances that are created with this flavor support hardware-accelerated\nvirtualization, this can be reflected with the ",(0,r.jsx)(s.code,{children:"-hwv"})," flag (after the optional\nHypervisor flag). On x86, this means that in the instance, the CPU flag vmx (intel)\nor svm (AMD) is available. This will be the case on Bare Metal flavors on almost\nall non-ancient x86 CPUs or if your virtualization hypervisor is configured to\nsupport nested virtualization.\nFlavors without the ",(0,r.jsx)(s.code,{children:"-hwv"})," flag may or may not support hardware virtualization (as we\nrecommend enabling nesting, but don't require flavor names to reflect all\ncapabilities. Flavors may overdeliver ...)"]}),"\n",(0,r.jsx)(s.h4,{id:"examples-4",children:"Examples"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"SCS-2C:4:10 - may or may not support HW virtualization in VMs"}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10-kvm-",(0,r.jsx)(s.strong,{children:"hwv"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10-",(0,r.jsx)(s.strong,{children:"hwv"})," - not recommended, but allowed"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.del,{children:["SCS-2C:4:10-",(0,r.jsx)(s.strong,{children:"hwv"}),"-xen"]})," - illegal, wrong ordering"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"optional-cpu-architecture-details",children:"[OPTIONAL] CPU Architecture Details"}),"\n",(0,r.jsx)(s.p,{children:"Arch details provide more details on the specific CPU:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Vendor"}),"\n",(0,r.jsx)(s.li,{children:"Generation"}),"\n",(0,r.jsx)(s.li,{children:"Frequency"}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"generation-and-vendor",children:"Generation and Vendor"}),"\n",(0,r.jsxs)(s.p,{children:["The generations are vendor specific and can be left out.\nNot specifying arch means that we have a generic CPU (",(0,r.jsx)(s.strong,{children:"x86-64"}),")."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Generation"}),(0,r.jsx)(s.th,{children:"i (Intel x86-64)"}),(0,r.jsx)(s.th,{children:"z (AMD x86-64)"}),(0,r.jsx)(s.th,{children:"\xa0a (AArch64)"}),(0,r.jsx)(s.th,{children:"r (RISC-V)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"pre Skylake"}),(0,r.jsx)(s.td,{children:"pre Zen"}),(0,r.jsx)(s.td,{children:"pre Cortex A76"}),(0,r.jsx)(s.td,{children:"TBD"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"Skylake"}),(0,r.jsx)(s.td,{children:"Zen-1 (Naples)"}),(0,r.jsx)(s.td,{children:"A76/NeoN1 class"}),(0,r.jsx)(s.td,{children:"TBD"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"Cascade Lake"}),(0,r.jsx)(s.td,{children:"Zen-2 (Rome)"}),(0,r.jsx)(s.td,{children:"A78/x1/NeoV1 class"}),(0,r.jsx)(s.td,{children:"TBD"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3"}),(0,r.jsx)(s.td,{children:"Ice Lake"}),(0,r.jsx)(s.td,{children:"Zen-3 (Milan)"}),(0,r.jsx)(s.td,{children:"A71x/NeoN2 (ARMv9)"}),(0,r.jsx)(s.td,{children:"TBD"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Zen-4 (Genoa)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"TBD"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["It is recommended to leave out the ",(0,r.jsx)(s.code,{children:"0"}),' when specifying the old generation; this will\nhelp the parser tool, which assumes 0 for an unspecified value and does leave it\nout when generating the name for comparison. In other words: 0 has a meaning of\n"rather old or unspecified".']}),"\n",(0,r.jsx)(s.h4,{id:"frequency-suffixes",children:"Frequency Suffixes"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Suffix"}),(0,r.jsx)(s.th,{children:"Meaning"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"h"}),(0,r.jsx)(s.td,{children:">2.75GHz all-core"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hh"}),(0,r.jsx)(s.td,{children:">3.25GHz all-core"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hhh"}),(0,r.jsx)(s.td,{children:">3.75GHz all-core"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"examples-5",children:"Examples"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"SCS-2C:4:10n"}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-",(0,r.jsx)(s.strong,{children:"z"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-",(0,r.jsx)(s.strong,{children:"z3"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-",(0,r.jsx)(s.strong,{children:"z3h"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-",(0,r.jsx)(s.strong,{children:"z3hh"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-bms-",(0,r.jsx)(s.strong,{children:"z"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-bms-",(0,r.jsx)(s.strong,{children:"z3"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-bms-",(0,r.jsx)(s.strong,{children:"z3"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-bms-",(0,r.jsx)(s.strong,{children:"z3h"})]}),"\n",(0,r.jsxs)(s.li,{children:["SCS-2C:4:10n-bms-",(0,r.jsx)(s.strong,{children:"z3hh"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"optional-extra-features",children:"[OPTIONAL] Extra features"}),"\n",(0,r.jsxs)(s.p,{children:["Note that these are optional \u2014 it is recommended for providers to encode this information\ninto the flavor name, so there is a systematic way of differentiating flavors.\nProviders could leave it out however, leaving it to ",(0,r.jsx)(s.code,{children:"extra_specs"})," to make these flavor\ncapabilities discoverable. Nothing prevents providers from registering the same flavor\nunder a secondary (or tertiary) name."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"-GX[N][:M[h]]"})," indicates a Pass-Through GPU from vendor X of gen N with M compute units / SMs / EUs exposed.\n",(0,r.jsx)(s.code,{children:"-gX[N][:M[h]]"})," indicates a vGPU from vendor X of gen N with M compute units / SMs / EUs assigned."]}),"\n",(0,r.jsx)(s.p,{children:"Note that the vendor letter is mandatory, generation and compute units are optional."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"GPU"}),(0,r.jsx)(s.th,{children:"Vendor"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N"}),(0,r.jsx)(s.td,{children:"nVidia"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"A"}),(0,r.jsx)(s.td,{children:"AMD"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"I"}),(0,r.jsx)(s.td,{children:"Intel"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Generations could be nVidia (f=Fermi, k=Kepler, m=Maxwell, p=Pascal, v=Volta, t=turing, a=Ampere, ...),\nAMD (GCN-x=0.x, RDNA1=1, RDNA2=2), intel (Gen9=0.9, Xe(12.1)=1, ...), ...\n(Note: This may need further work to properly reflect what's out there.)"}),"\n",(0,r.jsxs)(s.p,{children:["The optional ",(0,r.jsx)(s.code,{children:"h"})," suffix to the comput unit count indicates high-performance (e.g. high freq or special\nhigh bandwidth gfx memory such as HBM);\n",(0,r.jsx)(s.code,{children:"h"})," can be duplicated for even higher performance."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"-ib"})," indicates Infiniband networking."]}),"\n",(0,r.jsx)(s.p,{children:"More extensions will be forthcoming."}),"\n",(0,r.jsx)(s.p,{children:"Extensions need to be specified in the above-mentioned order."}),"\n",(0,r.jsx)(s.h2,{id:"proposal-examples",children:"Proposal Examples"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Example"}),(0,r.jsx)(s.th,{children:"Decoding"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SCS-2C:4:10n"}),(0,r.jsx)(s.td,{children:"2 dedicated cores (x86-64), 4GiB RAM, 10GB network disk"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SCS-8Ti:32:50p-i1"}),(0,r.jsx)(s.td,{children:"8 dedicated hyperthreads (insecure), Skylake, 32GiB RAM, 50GB local NVMe"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SCS-1L:1u:5"}),(0,r.jsx)(s.td,{children:"1 vCPU (heavily oversubscribed), 1GiB Ram (no ECC), 5GB disk (unspecific)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SCS-16T:64:200s-GNa:64-ib"}),(0,r.jsx)(s.td,{children:"16 dedicated threads, 64GiB RAM, 200GB local SSD, Infiniband, 64 Passthrough nVidia Ampere SMs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SCS-4C:16:2x200p-a1"}),(0,r.jsx)(s.td,{children:"4 dedicated Arm64 cores (A78 class), 16GiB RAM, 2x200GB local NVMe drives"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SCS-1V:0.5"}),(0,r.jsx)(s.td,{children:"1 vCPU, 0.5GiB RAM, no disk (boot from cinder volume)"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"standard-scs-flavors",children:"Standard SCS flavors"}),"\n",(0,r.jsx)(s.p,{children:"These are flavors expected to exist on standard SCS clouds (x86-64)."}),"\n",(0,r.jsxs)(s.p,{children:["We expect disk sizes to be 5, 10, 20, 50, 100, 200, 500, 1000GB, 2000GB.\nWe expect a typical CPU",(0,r.jsx)(s.div,{children:"GiB"})," ratio of 1:4."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.th,{children:["vCPU",":RAM"," ratio"]}),(0,r.jsx)(s.th,{children:"Mandatory Flavors"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1:4"}),(0,r.jsx)(s.td,{children:"SCS-1V:4, SCS-1V:4:10"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2:8"}),(0,r.jsx)(s.td,{children:"SCS-2V:8, SCS-2V:8:20"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4:16"}),(0,r.jsx)(s.td,{children:"SCS-4V:16, SCS-4V:16:50"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"8:32"}),(0,r.jsx)(s.td,{children:"SCS-8V:32, SCS-8V:32:100"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1:2"}),(0,r.jsx)(s.td,{children:"SCS-1V:2, SCS-1V:2:5"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2:4"}),(0,r.jsx)(s.td,{children:"SCS-2V:4, SCS-2V:4:10"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4:8"}),(0,r.jsx)(s.td,{children:"SCS-4V:8, SCS-4V:8:20"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"8:16"}),(0,r.jsx)(s.td,{children:"SCS-8V:16, SCS-8V:16:50"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"16:32"}),(0,r.jsx)(s.td,{children:"SCS-16V:32, SCS-16V:32:100"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1:8"}),(0,r.jsx)(s.td,{children:"SCS-1V:8, SCS-1V:8:20"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2:16"}),(0,r.jsx)(s.td,{children:"SCS-2V:16, SCS-2V:16:50"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4:32"}),(0,r.jsx)(s.td,{children:"SCS-4V:32, SCS-4V:32:100"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1:1"}),(0,r.jsx)(s.td,{children:"SCS-1L:1, SCS-1L:1:5"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Note that all vCPUs are oversubscribed \u2014 the smallest ",(0,r.jsx)(s.code,{children:"1L:1"})," flavor allows\nfor heavy oversubscription (note the ",(0,r.jsx)(s.code,{children:"L"}),"), and thus can be offered very\ncheaply \u2014 imagine jump hosts ...\nDisks types are not specified (and expected to be n or h typically)."]}),"\n",(0,r.jsx)(s.p,{children:"The design allows for small clouds (with CPUs with 16 Threads, 64GiB RAM\ncompute hosts) to offer all flavors."}),"\n",(0,r.jsxs)(s.p,{children:["Note: Compared to previous drafts, we have heavily reduced the variations\non disk sizes \u2014 this reflects that for the standard networked cinder\ndisks, you can pass block",(0,r.jsx)(s.em,{children:"device_mapping_v2 on server (VM) creation to\nallocate a boot disk of any size you desire. We have scaled the few\nmandatory disk sizes with the amount of RAM. For each flavor there is\nalso one _without"})," a pre-attached disk \u2014 these are meant to be used\nto boot from a volume (either created beforehand or allocated on-the-fly\nwith block_device_mapping_v2, e.g.\n",(0,r.jsx)(s.code,{children:"openstack server create --flavor SCS-1V:2 --block-device-mapping sda=IMGUUID:image:12:true"}),"\nto create a bootable 12G cinder volume from image ",(0,r.jsx)(s.code,{children:"IMGUUID"})," that gets tied to the VM\ninstance lifecycle.)"]}),"\n",(0,r.jsx)(s.h2,{id:"naming-policies",children:"Naming policies"}),"\n",(0,r.jsx)(s.p,{children:"To be certified as an SCS compliant x86-64 IaaS platform, you must offer all standard SCS flavors\naccording to the previous section. (We may define a mechanism that allows exceptions to be\ngranted in a way that makes this very transparent and visible to clients.)"}),"\n",(0,r.jsx)(s.p,{children:"You are allowed to understate your performance; you may implement a SCS-1Vl:1:5 flavor with\na flavor that actually implements SCS-1T:1:5n (i.e. you dedicate a secured hyperthread instead\nof high oversubscription) or even SCS-1D:1.5:8s (1 dedicated core, 50% more RAM and a 8GiB SSD)."}),"\n",(0,r.jsx)(s.p,{children:"We expect all cloud providers to offer the short, less specific flavor names (such as SCS-8V:32:100).\nLarger providers that offer more details are expected to still also offer the short variants\nfor usability and easier portability, even beyond the mandated flavors."}),"\n",(0,r.jsxs)(s.p,{children:["You must be very careful to expose low vCPU guarantees (",(0,r.jsx)(s.code,{children:"L"})," instead ov ",(0,r.jsx)(s.code,{children:"V"}),"), insecure\nhyperthreading/microcode ",(0,r.jsx)(s.code,{children:"i"}),", non-ECC-RAM ",(0,r.jsx)(s.code,{children:"u"}),", memory oversubscription ",(0,r.jsx)(s.code,{children:"o"}),". Note that omitting these qualifiers is\noverstating your security, reliability or performance properties and may be reason for\nclients to feel betrayed or claim damages. It might, in extreme cases, also cause SCS to withdraw certification\nalong with public statements."]}),"\n",(0,r.jsxs)(s.p,{children:["You may offer additional ",(0,r.jsx)(s.code,{children:"SCS-"})," flavors, following the naming scheme outlined here."]}),"\n",(0,r.jsx)(s.p,{children:"You may offer additional flavors, not following above scheme."}),"\n",(0,r.jsxs)(s.p,{children:["You must not offer flavors with the ",(0,r.jsx)(s.code,{children:"SCS-"})," prefix which do not follow this naming scheme.\nYou must not extend the SCS naming scheme with your own suffices; you are encouraged however\nto suggest extensions that we can discuss and add to the official scheme."]}),"\n",(0,r.jsx)(s.p,{children:"Note that all letters are case-sensitive.\nIn case you wonder: Feature indicators are capitalized, modifiers are lower case.\n(An exception is the uppercase -G for a passthrough GPU vs. lowercase -g for vGPU.)"}),"\n",(0,r.jsx)(s.h3,{id:"rationale",children:"Rationale"}),"\n",(0,r.jsx)(s.p,{children:"Note that we expect most clouds to prefer short flavor names,\nnot indicating CPU details or hypervisor types. See above list\nof standard flavors to get a feeling."}),"\n",(0,r.jsxs)(s.p,{children:["However, more successful providers will often need to differentiate their\nofferings in response to customer demand and allow customers to request\nflavors with specific detailed properties. The goal of this proposal is to avoid\nproviders to invent their own names and then refer customers to ",(0,r.jsx)(s.code,{children:"extra_specs"}),"\nor worse a non-machine-readable service description to find out the details."]}),"\n",(0,r.jsxs)(s.p,{children:["So a cloud provider might well evolve from offering ",(0,r.jsx)(s.code,{children:"SCS-8T:16:50"})," to offering\n",(0,r.jsx)(s.code,{children:"SCS-8T:16:50n"}),", ",(0,r.jsx)(s.code,{children:"SCS-8T:16:50n-i2"})," and ",(0,r.jsx)(s.code,{children:"SCS-8T:16:50n-a2"})," to specify that he\nis using network disks and offer a choice b/w intel Cascade-Lake and AMD Rome.\nWe would expect the cloud provider to still offer the generic flavor\n",(0,r.jsx)(s.code,{children:"SCS-8C:16:50"})," and allow the scheduler (placement service) to pick both more\nspecific types (or just one if e.g. capacity management considerations suggest\nso). We would expect providers in such cases to ensure that the price of a requested\nflavor does not depend on the scheduler decisions."]}),"\n",(0,r.jsxs)(s.p,{children:["We are looking into the ",(0,r.jsx)(s.a,{href:"https://docs.openstack.org/image-guide/introduction.html#metadata-definition-metadefs-service",children:"metadefs"}),"\nmechanism and ",(0,r.jsx)(s.a,{href:"https://docs.openstack.org/api-guide/compute/extra_specs_and_properties.html",children:"extra_specs"}),"\nto allow customers to ask for specific flavor properties without the need to\nencode all these flavor details into the flavor name, so the optional pieces\nmay not be needed much. However, there must be a way to request flavor\nproperties without encoding the need into an image \u2014 this indirection is\nconsidered broken by the SCS team."]}),"\n",(0,r.jsx)(s.h2,{id:"validation",children:"Validation"}),"\n",(0,r.jsxs)(s.p,{children:["There is a script in ",(0,r.jsx)(s.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Tests/iaas/flavor-naming/flavor-name-check.py",children:"flavor_name_check.py"}),"\nwhich can be used to decode, validate and construct flavor names.\nThis script must stay in sync with the specification text."]}),"\n",(0,r.jsxs)(s.p,{children:["Ensure you have your OpenStack tooling (",(0,r.jsx)(s.code,{children:"python3-openstackclient"}),", ",(0,r.jsx)(s.code,{children:"OS_CLOUD"}),") setup and call\n",(0,r.jsx)(s.code,{children:"tools/flavor-name-check.py -c $(openstack flavor list -f value -c Name)"})," to get a report\non the flavor list compliance of the cloud environment."]}),"\n",(0,r.jsx)(s.h2,{id:"beyond-scs-gaia-x",children:"Beyond SCS: Gaia-X"}),"\n",(0,r.jsxs)(s.p,{children:['Some providers might offer VM services ("IaaS") without trying to adhere to SCS standards,\nyet still finding the flavor naming standards useful. The Gaia-X Technical Committee\'s\nProvider Working Group (WG) would seem like a logical place for such discussions then.\nIf so, we could\nreplace the ',(0,r.jsx)(s.code,{children:"SCS-"})," prefix with a GX- prefix and transfer the naming scheme governance from\nthe SCS project to the Gaia-X Provider WG (where we participate). SCS certification would\nthen reference the Gaia-X flavor naming standard as a requirement."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var i=n(96540);const r={},t=i.createContext(r);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);