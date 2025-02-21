// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  community: [
    'index',
    'mission-statement',
    'governance',
    {
      type: 'category',
      link: {
        type: 'doc',
        id: 'governance/index'
      },
      label: 'Governance',
      items: [
        'governance/project-board'
      ]
    },
    'license-considerations',
    {
      type: 'category',
      link: {
        type: 'doc',
        id: 'collaboration/index'
      },
      label: 'Collaboration',
      items: [
        'collaboration/team-iaas',
        'collaboration/team-iam',
        'collaboration/team-container',
        'collaboration/team-ops',
        'collaboration/sig-central-api',
        'collaboration/sig-community',
        'collaboration/sig-documentation',
        'collaboration/sig-monitoring',
        'collaboration/sig-standardization'
      ]
    },
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'generated-index'
      },
      items: [
        'tools/jitsi',
        'tools/matrix',
        'tools/mailinglists',
        'tools/nextcloud',
        'tools/zuul',
        ,
        {
          type: 'category',
          label: 'GitHub',
          items: [
            'tools/github/branchprotection',
            'tools/github/dco-and-licenses',
            'tools/github/tips-and-tricks'
          ]
        },
        {
          type: 'category',
          label: 'Cloud Resources',
          items: [
            'cloud-resources/cloud-resources',
            'cloud-resources/getting-started-openstack',
            'cloud-resources/plusserver-gx-scs',
            'cloud-resources/wavestack'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Contribute to Docs',
      link: {
        type: 'generated-index'
      },
      items: [
        'contribute/adding-docs-guide',
        'contribute/doc-files-structure-guide',
        'contribute/docs-workflow-explanation',
        'contribute/linting-guide',
        'contribute/local-docusaurus-development-guide',
        'contribute/styleguide'
      ]
    }
  ]
}

module.exports = sidebars
