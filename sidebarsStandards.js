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
        id: 'certification/overview',
      },
      items: require('./sidebarsCertificationItems.js'),
    },
    {
      type: 'category',
      label: 'Standards',
      link: {
        type: 'doc',
        id: 'standards/overview'
      },
      items: require('./sidebarsStandardsItems.js'),
    }
  ]
}

module.exports = sidebars
