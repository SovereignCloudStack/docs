/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  standards: [
    'index',
    {
      type: 'category',
      label: 'Certification',
      link: {
        type: 'doc',
        id: 'certification/digisov-and-cert'
      },
      items: [
        {
          type: 'category',
          label: 'Scopes and Versions',
          link: {
            type: 'doc',
            id: 'certification/scopes-versions'
          },
          items: require('./sidebarsCertificationItems.js') // this file will be generated entirely by `populateCerts.js` via npm post-install hook found in the package.json
        },
        'certification/getting-scs-compatible-certified',
        'certification/test-and-adapt-example',
        'certification/overview'
      ]
    },
    {
      type: 'category',
      label: 'Standards',
      link: {
        type: 'doc',
        id: 'standards/overview'
      },
      items: require('./sidebarsStandardsItems.js') // this file will be generated entirely by `populateStds.js` via npm post-install hook found in the package.json
    }
  ]
}

module.exports = sidebars
