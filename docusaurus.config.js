module.exports = {
  title: "Sycope Documentation",
  tagline: "Software written By Engineers, For Engineers",
  url: "https://documentation.sycope.com",
  baseUrl: "/",
  organizationName: "flowcontrol12",
  projectName: "docu",
  scripts: [
    "https://buttons.github.io/buttons.js"
  ],
  favicon: "img/favicon.ico",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          path: "./docs",
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editCurrentVersion: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: '2.0.27',
            },
          },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/icons.css'),
            require.resolve('./src/css/custom.css'),
            require.resolve('./node_modules/@progress/kendo-theme-default/scss/icons/_index.scss'),
          ]
        }
      }
    ]
  ],
  plugins: ['docusaurus-plugin-sass'],
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig: {
    typesense: {
      typesenseCollectionName: 'sycope',
      typesenseServerConfig: {
        nodes: [
          {
            host: 'd3tcn89uq3a6bs.cloudfront.net',
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: 'ybLwdZl0Nxr2M9gzSqRzXwmI',
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "sycope documentation",
      logo: {
        src: "img/logo-sycope.svg"
      },
      items: [
        {
          type: 'html',
          position: 'right',
          value: '<p style="margin: 0 -12px; color: white">version:</p>',
        },
        {
          type: 'docsVersionDropdown',
          position: "right",
        }
      ],
    },
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Sycope`
    },
  },
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB']
  }
}