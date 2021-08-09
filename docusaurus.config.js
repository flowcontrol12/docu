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
        //   sidebarItemsGenerator: async function ({
        //     defaultSidebarItemsGenerator,
        //     numberPrefixParser,
        //     item,
        //     version,
        //     docs,
        //   }) {
        //     // Example: return an hardcoded list of static sidebar items
        //     console.log(defaultSidebarItemsGenerator)
        //     console.log(numberPrefixParser)
        //     console.log(item)
        //     console.log(version)
        //     console.log(docs)
        //     return [
        //       // {type: 'doc', id: 'doc1'},
        //       // {type: 'doc', id: 'doc2'},
        //     ];
        //   },
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')]
        }
      }
    ]
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
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
      apiKey: "7b969c492579575af2e774554cd0210e",
      indexName: "flowcontrol12",
      algoliaOptions: {}
    }
  }
}