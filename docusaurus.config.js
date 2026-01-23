// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'One platform — standardized, built and operated by many.',
  tagline: 'Documentation and Community Platform for the Sovereign Cloud Stack',
  url: 'https://docs.scs.community',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  markdown: {
    mermaid: true
  },
  organizationName: 'SovereignCloudStack', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebarsDocs.js'),
          editUrl: 'https://github.com/SovereignCloudStack/docs/tree/main/'
        },
        blog: {
          path: './blog',
          routeBasePath: 'blog',
          // Author display
          showReadingTime: true,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
          // Post metadata
          blogTitle: 'SCS Community Blog',
          blogDescription:
            'Insights on cloud sovereignty, open infrastructure, and the Sovereign Cloud Stack',
          // Authors
          authorsMapPath: 'authors.yml',
          // RSS/Atom feeds
          feedOptions: {
            type: 'all', // 'rss' | 'atom' | 'json' | 'all'
            title: 'SCS Community Blog',
            description:
              'Latest articles from the Sovereign Cloud Stack community',
            copyright: `Copyright © ${new Date().getFullYear()} Sovereign Cloud Stack`,
            language: 'en'
          },
          // Post URLs
          postsPerPage: 10,
          // Edit links (important for contributions!)
          editUrl: 'https://github.com/SovereignCloudStack/docs/edit/main/'
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')]
        }
      })
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // {
          //   to: '/community/collaboration',
          //   from: '/community/calendar'
          // }
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/community')) {
            return [existingPath.replace('/community', '/community/community')]
          }
          return undefined // Return a falsy value: no redirect created
        }
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js')
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contributor-docs',
        path: 'contributor-docs',
        routeBasePath: 'contributor-docs',
        sidebarPath: require.resolve('./sidebarsContributorDocs.js')
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'user-docs',
        path: 'user-docs',
        routeBasePath: 'user-docs',
        sidebarPath: require.resolve('./sidebarsUserDocs.js')
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'standards',
        path: 'standards',
        routeBasePath: 'standards',
        sidebarPath: require.resolve('./sidebarsStandards.js')
      }
    ],
    './src/plugins/docusaurus-plugin-matomo-analytics/index.js',
    './src/plugins/docusaurus-plugin-global-data/index.js'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          title: 'One platform — standardized, built and operated by many.',
          description:
            'Documentation and Community Platform for the Sovereign Cloud Stack'
        }
      ],
      image: 'img/scs-og-basic.png',
      navbar: {
        title: '',
        logo: {
          alt: 'SCS',
          src: 'img/logo.svg'
        },
        items: [
          //   { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/standards', label: 'Standards', position: 'left' },
          { to: '/docs', label: 'For Operators', position: 'left' },
          {
            to: '/contributor-docs',
            label: 'For Contributors',
            position: 'left'
          },
          {
            to: '/user-docs',
            label: 'For Users',
            position: 'left'
          },
          { to: '/community', label: 'Community', position: 'left' },
          { to: '/docs/faq', label: 'FAQ', position: 'left' },
          {
            href: 'https://github.com/SovereignCloudStack/docs',
            label: 'GitHub',
            position: 'right'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          }
        ]
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Contribute',
                to: '/docs'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/!TiDqlLmEUaXqTemaLc:matrix.org?via=matrix.org'
              },
              {
                label: 'Mastodon',
                href: 'https://fosstodon.org/@sovereigncloudstack'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SovereignCloudStack/docs'
              }
            ]
          }
        ],
        copyright:
          'Sovereign Cloud Stack, SCS and the logo are registered trademarks of the Open Source Business Alliance e.V. — Other trademarks are property of their respective owners.'
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', 'ruby']
      },
      matomoAnalytics: {
        matomoUrl: 'https://matomo.scs.community/',
        siteId: '2',
        phpLoader: 'matomo.php',
        jsLoader: 'matomo.js',
        disableCookies: true
      }
    }),

  themes: [
    '@docusaurus/theme-mermaid',
    [
      // @ts-ignore
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        docsDir: [
          'docs',
          'community',
          'standards',
          'contributor-docs',
          'user-docs'
        ],
        docsRouteBasePath: [
          'docs',
          'community',
          'standards',
          'contributor-docs',
          'user-docs'
        ]
      })
    ]
  ]
}

module.exports = config
