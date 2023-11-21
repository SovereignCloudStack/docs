// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "standards": [
    "index",
    {
      "type": "doc",
      "label": "Certification",
      "id": "certification/overview"
    },
    {
      "type": "category",
      "label": "Standards",
      "link": {
        "type": "doc",
        "id": "standards/overview"
      },
      "items": [
        {
          "type": "category",
          "label": "Global",
          "link": {
            "type": "doc",
            "id": "global/index"
          },
          "items": [
            {
              "type": "category",
              "label": "🟢 scs-0001",
              "link": {
                "type": "doc",
                "id": "global/scs-0001"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0001-v1-sovereign-cloud-standards"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟢 scs-0002",
              "link": {
                "type": "doc",
                "id": "global/scs-0002"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0002-v1-standards-docs-org"
                },
                {
                  "type": "doc",
                  "label": "V2",
                  "id": "scs-0002-v2-standards-docs-org"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0003",
              "link": {
                "type": "doc",
                "id": "global/scs-0003"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0003-v1-sovereign-cloud-standards-yaml"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "IaaS",
          "link": {
            "type": "doc",
            "id": "iaas/index"
          },
          "items": [
            {
              "type": "category",
              "label": "🟢 scs-0100",
              "link": {
                "type": "doc",
                "id": "iaas/scs-0100"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V2",
                  "id": "scs-0100-v2-flavor-naming"
                },
                {
                  "type": "doc",
                  "label": "V3",
                  "id": "scs-0100-v3-flavor-naming"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0101",
              "link": {
                "type": "doc",
                "id": "iaas/scs-0101"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0101-v1-entropy"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟢 scs-0102",
              "link": {
                "type": "doc",
                "id": "iaas/scs-0102"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0102-v1-image-metadata"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0103",
              "link": {
                "type": "doc",
                "id": "iaas/scs-0103"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0103-v1-standard-flavors"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0104",
              "link": {
                "type": "doc",
                "id": "iaas/scs-0104"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0104-v1-standard-images"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟢 scs-0110",
              "link": {
                "type": "doc",
                "id": "iaas/scs-0110"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0110-v1-ssd-flavors"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0111",
              "link": {
                "type": "doc",
                "id": "iaas/scs-0111"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0111-v1-volume-type-decisions"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0412",
              "link": {
                "type": "doc",
                "id": "iaas/scs-0412"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0412-v1-metering-json"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "KaaS",
          "link": {
            "type": "doc",
            "id": "kaas/index"
          },
          "items": [
            {
              "type": "category",
              "label": "🟢 scs-0210",
              "link": {
                "type": "doc",
                "id": "kaas/scs-0210"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0210-v1-k8s-new-version-policy"
                },
                {
                  "type": "doc",
                  "label": "V2",
                  "id": "scs-0210-v2-k8s-version-policy"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟢 scs-0211",
              "link": {
                "type": "doc",
                "id": "kaas/scs-0211"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0211-v1-kaas-default-storage-class"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0212",
              "link": {
                "type": "doc",
                "id": "kaas/scs-0212"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0212-v1-requirements-for-container-registry"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0213",
              "link": {
                "type": "doc",
                "id": "kaas/scs-0213"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0213-v1-k8s-nodes-anti-affinity"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0214",
              "link": {
                "type": "doc",
                "id": "kaas/scs-0214"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0214-v1-k8s-node-distribution"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "IAM",
          "link": {
            "type": "doc",
            "id": "iam/index"
          },
          "items": [
            {
              "type": "category",
              "label": "🟢 scs-0300",
              "link": {
                "type": "doc",
                "id": "iam/scs-0300"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0300-v1-requirements-for-sso-identity-federation"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0301",
              "link": {
                "type": "doc",
                "id": "iam/scs-0301"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0301-v1-naming-conventions"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0302",
              "link": {
                "type": "doc",
                "id": "iam/scs-0302"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0302-v1-domain-manager-role"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Ops",
          "link": {
            "type": "doc",
            "id": "ops/index"
          },
          "items": [
            {
              "type": "category",
              "label": "🟠 scs-0400",
              "link": {
                "type": "doc",
                "id": "ops/scs-0400"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0400-v1-status-page-create-decision"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0401",
              "link": {
                "type": "doc",
                "id": "ops/scs-0401"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0401-v1-status-page-reference-implementation-decision"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0402",
              "link": {
                "type": "doc",
                "id": "ops/scs-0402"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0402-v1-status-page-openapi-spec-decision"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0410",
              "link": {
                "type": "doc",
                "id": "ops/scs-0410"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0410-v1-gnocchi-as-metering-database"
                }
              ]
            },
            {
              "type": "category",
              "label": "🟠 scs-0411",
              "link": {
                "type": "doc",
                "id": "ops/scs-0411"
              },
              "items": [
                {
                  "type": "doc",
                  "label": "V1",
                  "id": "scs-0411-v1-publishing_method_for_metering_data"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

module.exports = sidebars
