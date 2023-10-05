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
          label: 'General Standards',
          link: {
            type: 'generated-index'
          },
          items: [
            'scs-0001-v1-sovereign-cloud-standards',
            'scs-0002-v2-standards-docs-org'
          ]
        },
        {
          type: 'category',
          label: 'IaaS Standards',
          link: {
            type: 'generated-index'
          },
          items: [
            'scs-0100-v3-flavor-naming',
            'scs-0101-v1-entropy',
            'scs-0102-v1-image-metadata',
            'scs-0104-v1-standard-images',
            'scs-0103-v1-standard-flavors',
            'scs-0110-v1-ssd-flavors'
          ]
        },
        {
          type: 'category',
          label: 'KaaS Standards',
          link: {
            type: 'generated-index'
          },
          items: [
            'scs-0210-v1-k8s-new-version-policy',
            'scs-0211-v1-kaas-default-storage-class'
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
      items: [
        'certification/subjects-versions',
        'certification/certified-clouds',
        'certification/get-certified'
      ]
    }
  ]
}

module.exports = sidebars
