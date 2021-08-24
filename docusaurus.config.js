module.exports = {
  title: "flowcontrol documentation",
  tagline: "Software written By Engineers, For Engineers",
  url: "https://flowcontrol12.github.io",
  baseUrl: "/",
  organizationName: "flowcontrol12",
  projectName: "docu",
  scripts: [
    "https://buttons.github.io/buttons.js"
  ],
  favicon: "img/favicon.ico",
  customFields: {
    users: [
      {
        caption: "User1",
        image: "/img/undraw_open_source.svg",
        infoLink: "https://www.facebook.com",
        pinned: true
      }
    ],
    docsUrl: ""
  },
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
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "flowcontrol documentation",
      logo: {
        src: "img/logo-sycope.svg"
      },
      items: []
    },
    image: "img/undraw_online.svg",
    footer: {
      links: [],
      copyright: "Copyright © 2021 Sycope",
      logo: {}
    },
    algolia: {
      apiKey: "e5f0b82eeeb2b6133949b8f5ec121050",
      appId: 'FQMP2SUEM9',
      indexName: 'sycope_docs',
    }
  }
}