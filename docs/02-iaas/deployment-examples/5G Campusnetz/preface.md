# Preface

## Background

Osnabrück University of Applied Sciences operates its own data center in the laboratory area for digital value creation processes on the Lingen campus. A private cloud based on OpenStack has been running there since 2016; the first release installed was Newton. As part of our 5G campus network project (2022-2027), we decided to operate an installation of the Sovereign Cloud Stack parallel in addition to the existing OpenStack environment. We rely directly on the hardware (so called bare-metal installation) and not on an any kind of already virtualized environment (see testbed). We have documented our installation process and hope for imitators!

All laboratory-relevant workloads that are required for research and teaching will run in the SCS installation later on. The installation is freely available to everyone involved across lab area. It is part of the - so called - Open Campus Infrastructure, which also includes the OpenStack installation. Other components include the 5G core and the edge cloud. The edge cloud will be driven by the managed Cloud-in-a-Box cluster of the Sovereign Cloud Stack:

- Open Campus Infrastructure (OCI)
- Sovereign Cloud Stack (IaaS+KaaS)
- OpenStack (IaaS)
- CIABs
- 5G Core

We first installed a test system. The hardware of the test system consists of the following components:

4 x DELL R6515 with following components:

- 1 x AMD EPYC 7702P `64core@2.0GHz`
- 16 x 64GB RAM DDR4-3200
- 2 x 480GB M.2 SATA SSD (for OS) RAID 1
- 8 x 8TB NVMe (storage), S150 onboard
- 2 x 25GbE NICs bond 802.3ad
- 2 x 1GbE NICs n. a.
- 1 x 1GbE iDRAC Enterprise
- 2 x 550W 1+1 redundancy

2 x DELL R7525 with following components:

- 2 x AMD EPYC 7532 `32core@2.4GHz`
- 8 x 64GB RAM DDR4-3200
- 2 x 480GB SATA SSD (for OS) RAID 1
- 12 x 18TB SATA HDD 7.2k (storage), PERC H745 no RAID
- 4 x 10GbE SFP+ OCP bond 802.3ad
- 1 x 1GbE iDRAC Enterprise
- 2 x 1.400W 1+1 redundancy

An installation in the productive system (Gen16) will take place later and will result in a separate documentation.
