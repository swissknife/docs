module.exports = {
  title: "Swissknife",
  tagline: "Adding that extra kick to your build pipelines",
  url: "https://beta.swissknife.dev",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "swissknife",
  projectName: "docs",
  themeConfig: {
    sidebarCollapsible: false,
    googleAnalytics: {
      trackingID: "UA-162878595-1",
    },
    navbar: {
      title: "Swissknife",
      logo: {
        alt: "Swissknife logo",
        src: "img/logo.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://medium.com/swissknife",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/swissknife/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Issues / ideas",
              href: "https://github.com/swissknife/docs/issues",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/swissknifedev",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Swissknife, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "home",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/swissknife/docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
