// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SHOGun',
  tagline: 'Documentation',
  favicon: './img/shogun_logo.png',

  // Set the production url of your site here
  url: 'http://localhost/',
  baseUrl: 'shogun-admin-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'test', // Usually your GitHub org/user name.
  // projectName: 'test', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      de: {
        label: 'Deutsch'
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: './img/shogun_logo.png',
      navbar: {
        title: 'SHOGun',
        logo: {
          alt: 'SHOGun logo',
          src: './img/shogun_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          {
            href: 'https://github.com/terrestris/shogun-docker',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'terrestris',
                href: 'https://www.terrestris.de/de/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/terrestris',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/terrestrisde/',
              },
              {
                label: 'Mastodon',
                href: 'https://bonn.social/@terrestris'
              }
            ],
          }
        ],
        copyright: `Copyright © ${(new Date()).getFullYear()} @terrestris. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
};

module.exports = config;
