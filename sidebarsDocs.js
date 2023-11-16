// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsDocs = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index'
      },
      items: [
        // 'getting-started/overview',
        // 'getting-started/virtualization',
        // 'getting-started/containerization'
      ]
    },
    {
      type: 'category',
      label: 'IaaS Layer',
      link: {
        type: 'generated-index'
      },
      items: [
        // {
        //   type: 'category',
        //   label: 'Overview',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     // 'iaas/overview/architecture',
        //     // 'iaas/overview/compute',
        //     // 'iaas/overview/storage',
        //     // 'iaas/overview/network',
        //     // 'iaas/overview/knowledge'
        //   ]
        // },
        {
          type: 'category',
          label: 'Deployment Examples',
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'Testbed',
              link: {
                slug: 'iaas/deployment-examples/testbed',
                type: 'generated-index'
              },
              items: [
                'iaas/deployment-examples/cloud-in-a-box/advanced-guides/testbed'
              ]
            },
            {
              type: 'category',
              label: 'Cloud in a Box',
              link: {
                slug: 'iaas/deployment-examples/cloud-in-a-box',
                type: 'generated-index'
              },
              items: [
                'iaas/deployment-examples/cloud-in-a-box/advanced-guides/cloud-in-a-box'
              ]
            }
          ]
        },
        // {
        //   type: 'category',
        //   label: 'Guides',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     {
        //       type: 'category',
        //       label: 'Deploy Guides',
        //       link: {
        //         type: 'generated-index'
        //       },
        //       items: [
        //         'iaas/guides/deploy-guide/index',
        //         'iaas/guides/deploy-guide/manager',
        //         'iaas/guides/deploy-guide/bootstrap',
        //         'iaas/guides/deploy-guide/infrastructure',
        //         'iaas/guides/deploy-guide/network',
        //         'iaas/guides/deploy-guide/ceph',
        //         'iaas/guides/deploy-guide/openstack',
        //         'iaas/guides/deploy-guide/ceph',
        //         'iaas/guides/deploy-guide/logging-monitoring',
        //         'iaas/guides/deploy-guide/zuul'
        //       ]
        //     },
        //     {
        //       type: 'category',
        //       label: 'Operations Guides',
        //       link: {
        //         type: 'generated-index'
        //       },
        //       items: [
        //         'iaas/guides/operations-guide/index',
        //         {
        //           type: 'category',
        //           label: 'Manager',
        //           link: {
        //             type: 'doc',
        //             id: 'iaas/components/image-manager'
        //           },
        //           items: [
        //             'iaas/guides/operations-guide/manager/index',
        //             'iaas/guides/operations-guide/manager/apply',
        //             'iaas/guides/operations-guide/manager/log',
        //             'iaas/guides/operations-guide/manager/console',
        //             'iaas/guides/operations-guide/manager/task'
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       type: 'category',
        //       label: 'Troubleshooting Guides',
        //       link: {
        //         type: 'generated-index'
        //       },
        //       items: [
        //         'iaas/guides/troubleshooting-guides/manager',
        //         'iaas/guides/troubleshooting-guides/openstack'
        //       ]
        //     },
        //     {
        //       type: 'category',
        //       label: 'Upgrade Guides',
        //       link: {
        //         type: 'generated-index'
        //       },
        //       items: [
        //         'iaas/guides/upgrade-guides/manager',
        //         'iaas/guides/upgrade-guides/network',
        //         'iaas/guides/upgrade-guides/ceph',
        //         'iaas/guides/upgrade-guides/docker',
        //         'iaas/guides/upgrade-guides/infrastructure',
        //         'iaas/guides/upgrade-guides/logging-monitoring',
        //         'iaas/guides/upgrade-guides/openstack'
        //       ]
        //     }
        //   ]
        // },
        {
          type: 'category',
          label: 'Guides',
          items: [
            {
              type: 'autogenerated',
              dirName: '02-iaas/guides' // '.' means the current docs folder
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
              type: 'doc',
              label: 'Openstack Image Manager',
              id: 'iaas/components/image-manager'
            },
            {
              type: 'doc',
              label: 'Openstack Flavor Manager',
              id: 'iaas/components/flavor-manager'
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
              label: 'K8s Cluster API Provider',
              link: {
                type: 'generated-index'
              },
              items: [
                'container/components/k8s-cluster-api-provider/doc/overview',
                'container/components/k8s-cluster-api-provider/doc/requirements',
                'container/components/k8s-cluster-api-provider/doc/quickstart',
                'container/components/k8s-cluster-api-provider/doc/make-reference',
                'container/components/k8s-cluster-api-provider/doc/application-credentials',
                'container/components/k8s-cluster-api-provider/doc/configuration',
                'container/components/k8s-cluster-api-provider/doc/Maintenance_and_Troubleshooting',
                'container/components/k8s-cluster-api-provider/doc/LoadBalancer-ExtTrafficLocal',
                'container/components/k8s-cluster-api-provider/doc/Upgrade-Guide',
                'container/components/k8s-cluster-api-provider/doc/roadmap',
                {
                  type: 'category',
                  label: 'Usage',
                  items: [
                    'container/components/k8s-cluster-api-provider/doc/usage/usage',
                    'container/components/k8s-cluster-api-provider/doc/usage/create-new-cluster',
                    'container/components/k8s-cluster-api-provider/doc/usage/managing-many-clusters',
                    'container/components/k8s-cluster-api-provider/doc/usage/cluster-mgmt-capi-mgmt-node',
                    'container/components/k8s-cluster-api-provider/doc/usage/multi-az-and-multi-cloud-environments',
                    'container/components/k8s-cluster-api-provider/doc/usage/testing'
                  ]
                }
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
              label: 'Status Page API',
              link: {
                type: 'generated-index'
              },
              items: [
                'operating-scs/components/status-page/docs/overview',
                'operating-scs/components/status-page/docs/component_overview',
                'operating-scs/components/status-page/docs/components',
                'operating-scs/components/status-page/docs/levels_of_consensus'
              ]
            }
          ]
        },
        // {
        //   type: 'category',
        //   label: 'Guides',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/guides/guide-1'
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Monitoring',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/monitoring/index'
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Incident Management',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/incident-management/index'
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Audits',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/audits/index'
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Lifecycle Management',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/lifecycle-management/index'
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Logging',
        //   link: {
        //     type: 'generated-index'
        //   },
        //   items: [
        //     'operating-scs/logging/index'
        //   ]
        // },
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
        type: 'generated-index'
      },
      items: [
        'iam/intra-SCS-federation-setup-description-for-osism-doc-operations'
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
        'releases/Release5'
      ]
    },
    // {
    //   type: 'category',
    //   label: 'Standards',
    //   link: {
    //     type: 'generated-index'
    //   },
    //   items: [
    //     'standards/index'
    //   ]
    // },
    {
      type: 'doc',
      id: 'faq/index',
      label: 'FAQ'
    },
    'glossary'
  ]
}

module.exports = sidebarsDocs
