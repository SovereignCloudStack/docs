---
sidebar_label: Bare-Metal K3s Deployment
sidebar_position: 100
title: Bare-Metal K3s Deployment Guide
---

# Bare-Metal K3s Deployment Guide

> **Note:** **[graphwiz.AI generated content]**
>
> This document was generated with AI assistance. It is
> currently in **draft** status: while it reflects a verified reference
> deployment, it has not yet been fully tested/reviewed by the SCS
> project. Please validate all commands against your own environment
> before using them in production.

This guide describes how to deploy an SCS-compliant Kubernetes cluster using **K3s on bare-metal infrastructure**. It covers the complete deployment from bare-metal setup to SCS compliance verification.

**Target Audience:** Operators deploying SCS-compliant KaaS on bare-metal hardware without cloud provider dependencies.

**Reference Implementation:** 3-node bare-metal K3s cluster with Ceph storage, HAProxy ingress, Flannel CNI, and full SCS compliance.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    Bare-Metal Infrastructure                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  k3s-master-01  │  │  k3s-worker-01  │  │  k3s-worker-02  │              │
│  │  (Master)   │  │  (Worker)   │  │  (Worker)   │              │
│  │  K3s Server │  │  K3s Agent  │  │  K3s Agent  │              │
│  │  etcd       │  │             │  │             │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
│         │                │                │                      │
│         └────────────────┼────────────────┘                      │
│                          │                                       │
│                  ┌───────▼───────┐                              │
│                  │  Ceph Storage │                              │
│                  │  (RBD + FS)   │                              │
│                  └───────┬───────┘                              │
│                          │                                       │
│                  ┌───────▼───────┐                              │
│                  │ HAProxy Ingress│                              │
│                  │  (LoadBalancer)│                              │
│                  └───────────────┘                              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Key Components

| Component | Technology | Purpose |
|-----------|------------|---------|
| K8s Distribution | K3s v1.36.3+ | Lightweight Kubernetes |
| Storage | Ceph RBD | Failure-safe block storage |
| Ingress | HAProxy | Load balancer + TLS termination |
| CNI | Flannel | Pod networking |
| NetworkPolicy | K3s built-in | Pod security isolation |
| DNS | CoreDNS | Service discovery |
| Metrics | Prometheus | Monitoring |
| GitOps | ArgoCD | Declarative deployment |

---

## Prerequisites

### Hardware Requirements

| Node | CPU | RAM | Storage | Role |
|------|-----|-----|---------|------|
| k3s-master-01 | 8 cores | 32 GB | 500 GB SSD | K3s Master + etcd |
| k3s-worker-01 | 8 cores | 32 GB | 500 GB SSD | K3s Worker |
| k3s-worker-02 | 8 cores | 32 GB | 500 GB SSD | K3s Worker |

### Software Requirements

- Ubuntu 24.04 LTS or Debian 13 on all nodes
- Ansible core 2.19+ for automation
- Ceph cluster (v17+ Quincy or v18+ Reef)
- Git for version control
- kubectl for cluster management

### Network Requirements

- Static IP addresses for all nodes
- VLAN segmentation for management, storage, and pod networks
- DNS resolution for all hostnames
- Firewall rules allowing K3s ports (6443, 10250, etc.)

---

## Deployment Steps

### Step 1: Bare-Metal Setup

Configure base operating system on all nodes:

```bash
# On all nodes
# 1. Update system
sudo apt update && sudo apt upgrade -y

# 2. Configure hostname
sudo hostnamectl set-hostname k3s-master-01  # or k3s-worker-01, k3s-worker-02

# 3. Configure SSH
sudo apt install -y openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh

# 4. Configure firewall
sudo apt install -y ufw
sudo ufw allow 22/tcp  # SSH
sudo ufw allow 6443/tcp  # K3s API
sudo ufw enable
```

### Step 2: Install Ceph CSI

Deploy Ceph CSI for persistent storage:

```bash
# Deploy Rook-Ceph operator
kubectl apply -f https://raw.githubusercontent.com/rook/rook/master/deploy/examples/common.yaml
kubectl apply -f https://raw.githubusercontent.com/rook/rook/master/deploy/examples/crds.yaml
kubectl apply -f https://raw.githubusercontent.com/rook/rook/master/deploy/examples/operator.yaml

# Create Ceph cluster (in rook-ceph namespace)
kubectl apply -f cluster.yaml
kubectl apply -f cephblockpool.yaml
kubectl apply -f storageclass-rbd.yaml
```

### Step 3: Install K3s

Install K3s on master node (k3s-master-01):

```bash
# On master node
curl -sfL https://get.k3s.io | sudo sh -

# Get token for worker nodes
sudo cat /var/lib/rancher/k3s/server/node-token
```

Install K3s on worker nodes (k3s-worker-01, k3s-worker-02):

```bash
# On worker nodes
curl -sfL https://get.k3s.io | K3S_URL=https://k3s-master-01:6443 \
  K3S_TOKEN=<token-from-master> sh -
```

### Step 4: Configure Network

Apply topology labels for SCS compliance:

```bash
kubectl label nodes k3s-master-01 \
  topology.kubernetes.io/region=dc1 \
  topology.kubernetes.io/zone=dc1-a \
  --overwrite

kubectl label nodes k3s-worker-01 \
  topology.kubernetes.io/region=dc1 \
  topology.kubernetes.io/zone=dc1-b \
  --overwrite

kubectl label nodes k3s-worker-02 \
  topology.kubernetes.io/region=dc1 \
  topology.kubernetes.io/zone=dc1-c \
  --overwrite
```

### Step 5: Configure Storage

Set Ceph RBD as default storage class:

```bash
kubectl patch storageclass ceph-rbd -p \
  '{"metadata":{"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

kubectl patch storageclass local-path -p \
  '{"metadata":{"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

### Step 6: Configure Ingress

Deploy HAProxy ingress controller:

```bash
kubectl apply -f https://raw.githubusercontent.com/haproxytech/kubernetes-ingress/v3.2.13/deploy/haproxy-ingress.yaml
```

Configure MetalLB for LoadBalancer services:

```bash
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.16.0/config/manifests/metallb-native.yaml

# Create IPAddressPool
cat <<EOF | kubectl apply -f -
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: k3s-fip-pool
  namespace: metallb-system
spec:
  addresses:
  - 10.10.0.100-10.10.0.112
EOF

# Create L2Advertisement
cat <<EOF | kubectl apply -f -
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: l2-advertise
  namespace: metallb-system
EOF
```

### Step 7: Configure Pod Security

Apply Pod Security Standards to all namespaces:

```bash
# Tenant namespaces (baseline)
for ns in argocd backup cert-manager nix-builder opendesk-edu \
          opendesk-predictive-agent opendesk-staff opendesk-students; do
  kubectl label ns "$ns" \
    pod-security.kubernetes.io/enforce=baseline \
    pod-security.kubernetes.io/audit=baseline \
    pod-security.kubernetes.io/warn=baseline \
    --overwrite
done

# System namespaces (privileged - required for system components)
for ns in kube-system metallb-system monitoring; do
  kubectl label ns "$ns" \
    pod-security.kubernetes.io/enforce=privileged \
    pod-security.kubernetes.io/audit=privileged \
    pod-security.kubernetes.io/warn=privileged \
    --overwrite
done
```

### Step 8: Deploy GitOps (ArgoCD)

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Configure ArgoCD
kubectl patch cm argocd-cm -n argocd --patch '{"data":{"timeout.reconciliation":"30s"}}'
```

---

## SCS Compliance Verification

### Check SCS-0210: Version Policy

```bash
kubectl version --short
# Server Version: v1.36.3+k3s1 (current minor version)
```

### Check SCS-0211: Default Storage Class

```bash
kubectl get sc
# ceph-rbd (default) should show
```

### Check SCS-0214: Node Distribution

```bash
kubectl get nodes --show-labels | grep topology
# All nodes should have topology.kubernetes.io/zone labels
```

### Check SCS-0217: Pod Security

```bash
kubectl get ns --show-labels | grep pod-security
# Tenant namespaces should show enforce=baseline
```

### Check SCS-0219: Networking

```bash
kubectl get networkpolicy --all-namespaces
# Should show NetworkPolicy objects
```

### Run Automated Tests

```bash
cd vendor/standards/Tests
./scs-compliance-check.py -s scs-cluster -S kaas \
  -a subject_root=$(pwd) -a kubeconfig=~/.kube/config \
  scs-compatible-kaas.yaml
```

---

## Known Limitations

### Single Master Node

This guide deploys a single K3s master node with embedded etcd. For production HA:

- Use 3+ K3s server nodes with embedded etcd clustering
- Ensure etcd nodes are on separate failure domains
- Configure proper backup for etcd data

### Monitoring Stack Privileges

System monitoring components (Prometheus, node-exporter) require privileged access:

- Keep `monitoring` namespace at `privileged` level
- This is acceptable for system infrastructure components

### Embedded etcd ACL

K3s uses unified CA for all components (no separate etcd ACL):

- Acceptable for bare-metal deployments
- Embedded etcd has no network exposure (more secure)

---

## Troubleshooting

### K3s Node Not Ready

```bash
# Check K3s service
sudo systemctl status k3s  # or k3s-agent

# Check logs
sudo journalctl -u k3s -f

# Check network
kubectl get nodes -o wide
```

### Storage Class Issues

```bash
# Check Ceph CSI pods
kubectl get pods -n rook-ceph

# Check PVC status
kubectl get pvc --all-namespaces

# Check storage class
kubectl get sc
```

### Ingress Not Working

```bash
# Check HAProxy ingress pods
kubectl get pods -n kube-system | grep haproxy

# Check ingress resources
kubectl get ingress --all-namespaces

# Check LoadBalancer status
kubectl get svc -n kube-system haproxy-ingress-kubernetes-ingress
```

---

## References

- [SCS-0217-v1: Cluster Hardening](https://docs.scs.community/standards/scs-0217-v1-cluster-hardening)
- [SCS-0214-v2: Node Distribution](https://docs.scs.community/standards/scs-0214-v2-k8s-node-distribution)
- [K3s Documentation](https://docs.k3s.io/)
- [Ceph CSI Documentation](https://ceph.com/csi/)
- [HAProxy Ingress](https://www.haproxy.com/documentation/kubernetes/latest/)
- [MetalLB Documentation](https://metallb.universe.tf/)

---

## Changelog

| Date | Version | Change |
|------|---------|--------|
| 2026-08-22 | v1-draft | Initial bare-metal K3s deployment guide |
