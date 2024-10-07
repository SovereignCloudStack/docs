// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  userDocs: [
    'index',
    {
      type: 'category',
      label: 'Application Examples',
      items: [
        {
          type: 'category',
          label: 'OpenDesk on SCS',
          link: {
            type: 'generated-index'
          },
          items: [
            'application-examples/OpenDesk on SCS/overview',
            'application-examples/OpenDesk on SCS/quickstart',
            'application-examples/OpenDesk on SCS/requirements',
            'application-examples/OpenDesk on SCS/getting_started',
            'application-examples/OpenDesk on SCS/configuration',
            'application-examples/OpenDesk on SCS/user-import',
            'application-examples/OpenDesk on SCS/contribute'
          ]
        }
      ]
    }
  ]
}

module.exports = sidebars
