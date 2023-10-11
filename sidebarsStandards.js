// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  standards: [
    'index',
    {
      type: 'category',
      label: 'Standards',
      link: {
        type: 'doc',
        id: 'standards/overview'
      },
      items: [
        {
          type: 'category',
          label: 'Global Standards',
          link: {
            type: 'generated-index',
            description:
              'This track encompasses the foundational standards that guide the overall structure, documentation, and general topics related to the Sovereign Cloud Stack. It serves as the core framework, ensuring consistency, clarity, and comprehensibility across all aspects of the cloud stack, fostering an environment where information is easily accessible and understood.'
          },
          items: [
            {
              type: 'category',
              label: 'SCS-0001',
              link: {
                slug: 'standards/scs-0001',
                type: 'generated-index'
              },
              items: ['scs-0001-v1-sovereign-cloud-standards']
            },
            {
              type: 'category',
              label: 'SCS-0002',
              link: {
                slug: 'standards/scs-0002',
                type: 'generated-index'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0002-v1-standards-docs-org'
                },
                {
                  type: 'doc',
                  label: 'V2',
                  id: 'scs-0002-v2-standards-docs-org'
                }
              ]
            },
            {
              type: 'category',
              label: 'SCS-0003',
              link: {
                slug: 'standards/scs-0003',
                type: 'generated-index'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0003-v1-sovereign-cloud-standards-yaml'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'IaaS Standards',
          link: {
            type: 'generated-index',
            description:
              'The IaaS Layer Standards track focuses on the protocols, guidelines, and specifications that govern the infrastructure as a service layer. This encompasses standards for virtual machines, storage, networking, and other foundational resources, ensuring seamless, efficient, and secure operation, interoperability, and management of the underlying cloud infrastructure.'
          },
          items: [
            {
              type: 'category',
              label: 'SCS-0100',
              link: {
                slug: 'standards/scs-0100-flavor-naming',
                type: 'generated-index',
                description:
                  'The SCS-0001 Flavor Naming Standard (v3.1 for SCS Release 5) establishes a systematic and backward-compatible naming convention for OpenStack environment flavors. The standard addresses the need for a unified naming scheme that encodes key instance features like the number of vCPUs, RAM, Root Disk, and extra features, enhancing the usability and consistency across different SCS flavors. It outlines detailed naming criteria, including required and optional elements, ensuring providers offer transparent, standardized, and easily understandable flavor names to users.'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0100-v1-flavor-naming'
                },
                {
                  type: 'doc',
                  label: 'V2',
                  id: 'scs-0100-v2-flavor-naming'
                },
                {
                  type: 'doc',
                  label: 'V3',
                  id: 'scs-0100-v3-flavor-naming'
                }
              ]
            },
            {
              type: 'category',
              label: 'SCS-0101',
              link: {
                slug: 'standards/scs-0101',
                type: 'generated-index',
                description:
                  'The SCS-0101 Entropy Standard ensures adequate entropy is available in virtual instances, crucial for operations like secure key creation in cryptography. The standard recommends using kernel version 5.18 or higher and activating the hw_rng_model: virtio attribute for images, while compute nodes should employ CPUs with entropy accessing instructions unfiltered by the hypervisor. It allows the infusion of the hosts entropy sources into virtual instances and ensures the availability and quality of entropy in virtual environments, promoting system security and efficiency.'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0101-v1-entropy'
                }
              ]
            },
            {
              type: 'category',
              label: 'SCS-0102',
              link: {
                slug: 'standards/scs-0102',
                type: 'generated-index',
                description:
                  'The SCS-0102 Image Metadata Standard outlines how to categorize and manage metadata for cloud-based operating system images to ensure usability and clarity. The standard encompasses naming conventions, technical requirements, image handling protocols including updating and origin, and licensing/support details. These guidelines ensure that users can understand, access, and utilize OS images effectively, with clear information on features, updates, and licensing provided through well-defined metadata properties.'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0102-v1-image-metadata'
                }
              ]
            },
            {
              type: 'category',
              label: 'SCS-0103',
              link: {
                slug: 'standards/scs-0103',
                type: 'generated-index',
                description:
                  'The SCS-0103 standard outlines mandatory and recommended specifications for flavors and properties in OpenStack environments to ensure uniformity across SCS clouds. Mandatory and recommended flavors are defined with specific configurations of vCPUs, vCPU types, RAM, and root disk sizes, alongside extra specs like scs:name-vN, scs:cpu-type, and scs:diskN-type to detail the flavor’s specifications. This standard facilitates guaranteed availability and consistency of flavors, simplifying the deployment process for DevOps teams.'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0103-v1-standard-flavors'
                }
              ]
            },
            {
              type: 'category',
              label: 'SCS-0104',
              link: {
                slug: 'standards/scs-0104',
                type: 'generated-index',
                description:
                  'The SCS-0104 standard establishes guidelines for virtual machine images in Sovereign Cloud Stack (SCS) environments, specifying mandatory, recommended, and optional images via a YAML file, ensuring interoperability and streamlined deployments. It mandates that image upload via Glance must be allowed, ensuring flexibility for users. The standard’s machine-readable document facilitates automated processing for compliance and integration purposes, promoting consistency and reliability in cloud environments.'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0104-v1-standard-images'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'KaaS Standards',
          link: {
            type: 'generated-index',
            description:
              'Standards in this track are concerned with Kubernetes as a Service layer, outlining norms and best practices for deploying, managing, and operating Kubernetes clusters. These standards aim to ensure that the orchestration of containers is streamlined, secure, and compatible across various cloud environments and platforms.'
          },
          items: [
            {
              type: 'category',
              label: 'SCS-0210',
              link: {
                slug: 'standards/scs-0210',
                type: 'generated-index',
                description:
                  'The SCS-0210 standard outlines the expected pace at which providers should adopt new Kubernetes versions, aiming for alignment with the rapid development cycle of Kubernetes. Providers must offer the latest minor version within four months of its release and the newest patch version within a week, ensuring users have timely access to security updates, bug fixes, and features. The standard emphasizes the need for expedited updates for critical CVEs and expects providers to thoroughly test new versions before deployment.'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0210-v1-k8s-new-version-policy'
                }
              ]
            },
            {
              type: 'category',
              label: 'SCS-0211',
              link: {
                slug: 'standards/scs-0211',
                type: 'generated-index',
                description:
                  'The SCS-0211 standard outlines the properties required for the default StorageClass in Kubernetes as a Service (KaaS). The standard ensures that the default StorageClass, identified by the "storageclass.kubernetes.io/is-default-class" annotation, supports the ReadWriteOnce access mode and protects volume data against loss due to single disk or host hardware failures.'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0211-v1-kaas-default-storage-class'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'IAM Standards',
          link: {
            type: 'generated-index',
            description:
              'This track revolves around Identity and Access Management (IAM) standards, providing guidelines for ensuring secure and efficient user authentication, authorization, and administration. It addresses issues related to user identity, permissions, roles, and policies, aiming to safeguard and streamline access to cloud resources and services.'
          },
          items: [
            {
              type: 'category',
              label: 'SCS-0300',
              link: {
                slug: 'standards/scs-0300',
                type: 'generated-index',
                description:
                  'The SCS-0300 standard outlines requirements for Single Sign-On (SSO) identity federation within the Sovereign Cloud Stack (SCS). It addresses the need for customers to access SCS services using credentials stored and managed externally, facilitating user onboarding and reducing the need for additional dedicated SCS accounts. The standard focuses on delegating authentication to external identity providers and mapping users to roles within SCS for authorization, while also considering the use of machine identities. Keycloak is the current choice as an Identity Provider (IdP) for its support of OAuth 2.0 grants and its integration with OpenStack and kolla-ansible.'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0300-v1-requirements-for-sso-identity-federation'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Operational Standards',
          link: {
            type: 'generated-index',
            description:
              'Operational Tooling Standards cover the protocols and guidelines associated with tools and utilities used for monitoring, management, and maintenance of the cloud environment. This includes standards for status pages, alerts, logs, and other operational tools, aiming to optimize the reliability, performance, and security of cloud services and resources.'
          },
          items: [
            {
              type: 'category',
              label: 'SCS-0412',
              link: {
                slug: 'standards/scs-0412',
                type: 'generated-index',
                description:
                  'The SCS-0412 standard addresses the need for a standardized interface to expose IaaS metering data in JSON format within the Sovereign Cloud Stack (SCS). This is to aid cloud operators in integrating SCS IaaS layer data with their existing billing and customer relationship systems. The standard adopts the Ceilometer HTTP hook format provided by the OpenStack Ceilometer project for telemetry and metering, avoiding the need for additional translation layers and implementation components.'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0412-v1-metering-json'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Decision Records',
      link: {
        slug: 'standards/decision-records',
        type: 'generated-index',
        description:
          'Decision records within the Sovereign Cloud Stack (SCS) are critical documents that outline the reasoning and determinations made leading to the development of specific standards. They encapsulate the discussions, evaluations, and considerations of various options and alternatives before a final decision is made. These records serve as a transparent and accessible historical account, offering insights into the contextual factors and rationale that underpin each established standard.'
      },
      items: [
        {
          type: 'category',
          label: 'SCS-0110',
          link: {
            slug: 'standards/scs-0110',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0110-v1-ssd-flavors'
            }
          ]
        },
        {
          type: 'category',
          label: 'SCS-0111',
          link: {
            slug: 'standards/scs-0111',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0111-v1-volume-type-decisions'
            }
          ]
        },
        {
          type: 'category',
          label: 'SCS-0212',
          link: {
            slug: 'standards/scs-0212',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0212-v1-requirements-for-container-registry'
            }
          ]
        },
        {
          type: 'category',
          label: 'SCS-0213',
          link: {
            slug: 'standards/scs-0213',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0213-v1-k8s-nodes-anti-affinity'
            }
          ]
        },
        {
          type: 'category',
          label: 'SCS-0301',
          link: {
            slug: 'standards/scs-0301',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0301-v1-naming-conventions'
            }
          ]
        },
        {
          type: 'category',
          label: 'SCS-0400',
          link: {
            slug: 'standards/scs-0400',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0400-v1-status-page-create-decision'
            }
          ]
        },
        {
          type: 'category',
          label: 'SCS-0401',
          link: {
            slug: 'standards/scs-0401',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0401-v1-status-page-reference-implementation-decision'
            }
          ]
        },
        {
          type: 'category',
          label: 'SCS-0402',
          link: {
            slug: 'standards/scs-0402',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0402-v1-status-page-openapi-spec-decision'
            }
          ]
        },
        {
          type: 'category',
          label: 'SCS-0410',
          link: {
            slug: 'standards/scs-0410',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0410-v1-gnocchi-as-metering-database'
            }
          ]
        },
        {
          type: 'category',
          label: 'SCS-0411',
          link: {
            slug: 'standards/scs-0411',
            type: 'generated-index'
          },
          items: [
            {
              type: 'doc',
              label: 'V1',
              id: 'scs-0411-v1-publishing_method_for_metering_data'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Certification',
      link: {
        type: 'doc',
        id: 'certification/overview'
      },
      items: []
    }
  ]
}

module.exports = sidebars
