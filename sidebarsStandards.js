/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  standards: [
    'index',
    {
      type: 'category',
      label: 'Certification',
      link: {
	type: 'doc',
	id: 'certification/digisov-and-cert.md'
      },
      items: [
        {
          type: 'category',
	  label: 'Getting SCS-compatible certified',
          link: {
            type: 'doc',
            id: 'getting-scs-compatible-certified.md'
          },
	},
        {
          type: 'category',
	  label: 'Overview',
          link: {
            type: 'doc',
            id: 'certification/overview'
          },
	},
	{
          type: 'category',
          label: 'Scopes and Versions',
          link: {
            type: 'doc',
            id: 'certification/scopes-versions'
          },
          items: require('./sidebarsCertificationItems.js') // this file will be generated entirely by `populateCerts.js` via npm post-install hook found in the package.json
        }
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
