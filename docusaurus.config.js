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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "./docs",
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editCurrentVersion: true,
          versions: {
            current: {
              label: '2.0 🚧',
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
  themeConfig: {
    algolia: {
      appId: 'VTLMOZMQ8V',
      apiKey: 'f61edbf9bfd27250990d22a5e40b225a',
      indexName: 'sycope',
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
          value: '<p style="margin: 0 -12px">version:</p>',
        },
        {
          type: 'docsVersionDropdown',
          position: "right",
        }
      ],
    },
    footer: {
      links: [],
      copyright: "Copyright © 2021 Sycope"
    },
  }
}