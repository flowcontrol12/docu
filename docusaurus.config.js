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
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          path: "blog"
        },
        theme: {
          customCss: "../src/css/customTheme.css"
        }
      }
    ]
  ],
  plugins: [],
  themeConfig: {
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
      apiKey: "7b969c492579575af2e774554cd0210e",
      indexName: "flowcontrol12",
      algoliaOptions: {}
    }
  }
}