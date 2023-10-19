// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  standards: [
    'index',
    {
      type: 'category',
      label: 'Certification',
      link: {
        type: 'doc',
        id: 'certification/overview'
      },
      items: [
        'certification/certified-clouds',
        'certification/get-certified',
        'certification/subjects-versions'
      ]
    },
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
          label: 'Global',
          link: {
            type: 'doc',
            id: 'global/index'
          },
          items: [
            {
              type: 'category',
              label: '🟢  SCS-0001',
              link: {
                type: 'doc',
                id: 'global/scs-0001'
              },
              items: [
                {
                  type: 'doc',
                  label: 'V1',
                  id: 'scs-0001-v1-sovereign-cloud-standards'
                }
              ]
            },
            {
              type: 'category',
              label: '🟢 SCS-0002',
              link: {
                type: 'doc',
                id: 'global/scs-0002'
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
              label: '🟠 SCS-0003',
              link: {
                type: 'doc',
                id: 'global/scs-0003'
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
          label: 'IaaS',
          link: {
            type: 'doc',
            id: 'iaas/index'
          },
          items: [
            {
              type: 'category',
              label: '🟢 SCS-0100',
              link: {
                type: 'doc',
                id: 'iaas/scs-0100'
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
              label: '🟠 SCS-0101',
              link: {
                type: 'doc',
                id: 'iaas/scs-0101'
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
              label: '🟢 SCS-0102',
              link: {
                type: 'doc',
                id: 'iaas/scs-0102'
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
              label: '🟠 SCS-0103',
              link: {
                type: 'doc',
                id: 'iaas/scs-0103'
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
              label: '🟠 SCS-0104',
              link: {
                type: 'doc',
                id: 'iaas/scs-0104'
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
          label: 'KaaS',
          link: {
            type: 'doc',
            id: 'kaas/index'
          },
          items: [
            {
              type: 'category',
              label: '🟢 SCS-0210',
              link: {
                type: 'doc',
                id: 'kaas/scs-0210'
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
              label: '🟢 SCS-0211',
              link: {
                type: 'doc',
                id: 'kaas/scs-0211'
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
          label: 'IAM',
          link: {
            type: 'doc',
            id: 'iam/index'
          },
          items: [
            {
              type: 'category',
              label: '🟢 SCS-0300',
              link: {
                type: 'doc',
                id: 'iam/scs-0300'
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
          label: 'Ops',
          link: {
            type: 'doc',
            id: 'ops/index'
          },
          items: [
            {
              type: 'category',
              label: '🟠 SCS-0412',
              link: {
                type: 'doc',
                id: 'ops/scs-0412'
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
        slug: 'decision-records',
        type: 'generated-index',
        description:
          'Decision records within the Sovereign Cloud Stack (SCS) are critical documents that outline the reasoning and determinations made leading to the development of specific standards. They encapsulate the discussions, evaluations, and considerations of various options and alternatives before a final decision is made. These records serve as a transparent and accessible historical account, offering insights into the contextual factors and rationale that underpin each established standard.'
      },
      items: [
        {
          type: 'category',
          label: 'SCS-0110',
          link: {
            slug: 'scs-0110',
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
    }
  ]
}

module.exports = sidebars
