// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsDocs = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'IaaS Layer',
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'category',
          label: 'Guides',
          items: [
            {
              type: 'autogenerated',
              dirName: '02-iaas/guides'
            }
          ]
        },
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'Openstack Image Manager',
              link: {
                id: 'iaas/components/image-manager/index',
                type: 'doc'
              },
              items: [
                {
                  type: 'doc',
                  id: 'iaas/components/image-manager/update'
                }
              ]
            },
            {
              type: 'doc',
              label: 'Openstack Flavor Manager',
              id: 'iaas/components/flavor-manager'
            }
          ]
        },
        {
          type: 'category',
          label: 'Deployment Examples',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: '02-iaas/deployment-examples' // '.' means the current docs folder
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Container Layer',
      link: {
        type: 'doc',
        id: 'container/index'
      },
      items: [
        {
          type: 'category',
          label: 'Overview',
          link: {
            type: 'generated-index'
          },
          items: [
            // 'container/overview/architecture',
            // 'container/overview/knowledge'
          ]
        },
        {
          type: 'category',
          label: 'Deployment Examples',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'Deployment A',
              link: {
                type: 'generated-index'
              },
              items: [
                // 'container/deployment-examples/a/index',
                // 'container/deployment-examples/a/hardware',
                // 'container/deployment-examples/a/software'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index'
          },
          items: [
            // 'container/guides/guide1'
          ]
        },
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'Cluster Stacks',
              link: {
                type: 'generated-index'
              },
              items: [
                'container/components/cluster-stacks/components/cluster-stacks/overview',
                {
                  type: 'category',
                  label: 'Cluster Stack Operator',
                  items: [
                    'container/components/cluster-stacks/components/cluster-stack-operator/architecture/overview',
                    'container/components/cluster-stacks/components/cluster-stack-operator/topics/quickstart',
                    'container/components/cluster-stacks/components/cluster-stack-operator/topics/troubleshoot',
                    'container/components/cluster-stacks/components/cluster-stack-operator/develop/develop'
                  ]
                },
                {
                  type: 'category',
                  label: 'csctl',
                  items: [
                    'container/components/cluster-stacks/components/csctl/overview',
                    'container/components/cluster-stacks/components/csctl/quickstart',
                    'container/components/cluster-stacks/components/csctl/getting_started',
                    'container/components/cluster-stacks/components/csctl/developing-and-testing-csctl'
                  ]
                },
                {
                  type: 'category',
                  label: 'Predefined Cluster Stacks',
                  items: [
                    {
                      type: 'category',
                      label: 'Openstack',
                      items: [
                        'container/components/cluster-stacks/components/cluster-stacks/providers/openstack/quickstart',
                        'container/components/cluster-stacks/components/cluster-stacks/providers/openstack/configuration'
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Container Registry',
              link: {
                type: 'generated-index'
              },
              items: [
                'container/components/container-registry/docs/quickstart',
                'container/components/container-registry/docs/scs-deployment',
                'container/components/container-registry/docs/rate_limit',
                'container/components/container-registry/docs/upgrade',
                'container/components/container-registry/docs/backup_and_restore',
                'container/components/container-registry/docs/migration',
                'container/components/container-registry/docs/persistence',
                'container/components/container-registry/docs/ha-deployment'
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Operating SCS',
      link: {
        type: 'generated-index'
      },
      items: [
        // 'operating-scs/overview',
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'Status Page',
              link: {
                type: 'generated-index'
              },
              items: [
                {
                  type: 'category',
                  label: 'Concepts',
                  link: {
                    type: 'generated-index'
                  },
                  items: [
                    'operating-scs/components/status-page-openapi/docs/overview',
                    'operating-scs/components/status-page-openapi/docs/components',
                    'operating-scs/components/status-page-openapi/docs/levels_of_consensus',
                    'operating-scs/components/status-page-openapi/docs/component_overview'
                  ]
                },
                {
                  type: 'category',
                  label: 'API',
                  link: {
                    type: 'generated-index'
                  },
                  items: [
                    'operating-scs/components/status-page-api/docs/overview',
                    'operating-scs/components/status-page-api/docs/requirements',
                    'operating-scs/components/status-page-api/docs/quickstart',
                    'operating-scs/components/status-page-api/docs/configuration',
                    'operating-scs/components/status-page-api/docs/requests',
                    'operating-scs/components/status-page-api/docs/example-requests',
                    'operating-scs/components/status-page-api/docs/contribute'
                  ]
                },
                {
                  type: 'category',
                  label: 'Deployment',
                  link: {
                    type: 'generated-index'
                  },
                  items: [
                    'operating-scs/components/status-page-deployment/docs/overview',
                    'operating-scs/components/status-page-deployment/docs/requirements',
                    'operating-scs/components/status-page-deployment/docs/quickstart',
                    {
                      type: 'category',
                      label: 'Configuration',
                      link: {
                        type: 'generated-index'
                      },
                      items: [
                        'operating-scs/components/status-page-deployment/docs/configuration',
                        'operating-scs/components/status-page-deployment/docs/kind',
                        'operating-scs/components/status-page-deployment/docs/k3s',
                        'operating-scs/components/status-page-deployment/docs/scs-public'
                      ]
                    },
                    'operating-scs/components/status-page-deployment/docs/usage',
                    'operating-scs/components/status-page-deployment/docs/monitoring',
                    'operating-scs/components/status-page-deployment/docs/contribute',
                    'operating-scs/components/status-page-deployment/docs/admin-authentication',
                    'operating-scs/components/status-page-deployment/docs/faq'
                  ]
                },
                {
                  type: 'category',
                  label: 'Web',
                  link: {
                    type: 'generated-index'
                  },
                  items: [
                    'operating-scs/components/status-page-web/docs/overview',
                    'operating-scs/components/status-page-web/docs/requirements',
                    'operating-scs/components/status-page-web/docs/quickstart',
                    'operating-scs/components/status-page-web/docs/configuration',
                    'operating-scs/components/status-page-web/docs/contribute'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Monitoring',
              link: {
                type: 'generated-index'
              },
              items: [
                'operating-scs/components/monitoring/docs/overview',
                'operating-scs/components/monitoring/docs/quickstart',
                'operating-scs/components/monitoring/docs/scs-deployment',
                'operating-scs/components/monitoring/docs/k3s',
                'operating-scs/components/monitoring/docs/infrastructure_services',
                'operating-scs/components/monitoring/docs/iaas',
                'operating-scs/components/monitoring/docs/kaas',
                'operating-scs/components/monitoring/docs/zuul',
                'operating-scs/components/monitoring/docs/alertmanager',
                'operating-scs/components/monitoring/docs/oauth',
                'operating-scs/components/monitoring/docs/tracing',
                'operating-scs/components/monitoring/docs/tuning'
              ]
            },
            {
              type: 'category',
              label: 'SCS Health Monitor',
              link: {
                type: 'generated-index'
              },
              items: [
                'operating-scs/components/scs-health-monitor/overview',
                'operating-scs/components/scs-health-monitor/Workflow',
                'operating-scs/components/scs-health-monitor/Testflow',
                'operating-scs/components/scs-health-monitor/SetupObservabilityStack'
              ]
            },
            {
              type: 'category',
              label: 'Central API',
              link: {
                type: 'generated-index'
              },
              items: [
                'operating-scs/components/central-api/overview',
                'operating-scs/components/central-api/poc-setup'
              ]
            },
            {
              type: 'category',
              label: 'Automated Pentesting',
              link: {
                type: 'generated-index'
              },
              items: [
                {
                  type: 'category',
                  label: 'Pentesting IaaS',
                  link: {
                    type: 'generated-index'
                  },
                  items: [
                    'operating-scs/components/automated-pentesting-iaas/overview',
                    'operating-scs/components/automated-pentesting-iaas/quickstart',
                    'operating-scs/components/automated-pentesting-iaas/tools',
                    'operating-scs/components/automated-pentesting-iaas/reports'
                  ]
                },
                {
                  type: 'category',
                  label: 'Pentesting KaaS',
                  link: {
                    type: 'generated-index'
                  },
                  items: [
                    'operating-scs/components/automated-pentesting-kaas/overview',
                    'operating-scs/components/automated-pentesting-kaas/quickstart',
                    'operating-scs/components/automated-pentesting-kaas/tools'
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index'
          },
          items: [
            'operating-scs/guides/openstack-health-monitor/Debian12-Install'
          ]
        },
        {
          type: 'category',
          label: 'Metering',
          link: {
            type: 'generated-index'
          },
          items: ['operating-scs/metering/meter_configuration']
        }
      ]
    },
    {
      type: 'category',
      label: 'Identity and Access Management (IAM)',
      link: {
        type: 'doc',
        id: 'iam/index'
      },
      items: [
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index'
          },
          items: [
            'iam/domain-manager-setup-and-usage',
            'iam/SCS-example-setup-configuration-description'
          ]
        },
        'iam/intra-SCS-federation-setup-description-for-osism-doc-operations'
      ]
    },
    {
      type: 'category',
      label: 'Turnkey Solution',
      link: {
        type: 'generated-index'
      },
      items: [
        'turnkey-solution/overview',
        'turnkey-solution/hardware-landscape'
      ]
    },
    {
      type: 'category',
      label: 'Releases',
      link: {
        type: 'generated-index'
      },
      items: [
        'releases/Release0',
        'releases/Release1',
        'releases/Release2',
        'releases/Release3',
        'releases/Release4',
        'releases/Release5',
        'releases/Release6',
        'releases/Release7'
      ]
    },
    {
      type: 'doc',
      id: 'faq/index',
      label: 'FAQ'
    },
    'glossary'
  ]
}

module.exports = sidebarsDocs
