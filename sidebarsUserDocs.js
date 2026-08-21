// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  userDocs: [
    'index',
    {
      type: 'category',
      label: 'Application Examples',
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'category',
          label: 'openDesk on SCS',
          link: {
            type: 'generated-index'
          },
          items: [
            'application-examples/opendesk-on-scs/overview',
            'application-examples/opendesk-on-scs/quickstart',
            'application-examples/opendesk-on-scs/requirements',
            'application-examples/opendesk-on-scs/getting_started',
            'application-examples/opendesk-on-scs/configuration',
            'application-examples/opendesk-on-scs/user-import',
            'application-examples/opendesk-on-scs/contribute'
          ]
        },
        {
          type: 'link',
          label: 'Auto-scaling GitLab Runner',
          href: 'https://gitlab.com/alasca.cloud/infra/configuration/-/blob/develop/gitlab-runner-managers/README.md'
        },
        {
          type: 'link',
          label: 'Auto-scaling Woodpecker CI Runner',
          href: 'https://gitlab.com/alasca.cloud/infra/configuration/-/blob/develop/woodpecker-ci.alasca.cloud/Readme.md'
        }
      ]
    },
    {
      type: 'category',
      label: 'Portability Hints',
      link: {
        type: 'doc',
        id: 'usage-hints/index'
      },
      items: [
        'usage-hints/find-image/index',
        'usage-hints/diskless-flavor/index'
      ]
    }
  ]
}

module.exports = sidebars
