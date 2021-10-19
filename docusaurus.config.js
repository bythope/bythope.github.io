const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'BytHope Games',
  tagline: 'Games for everyday',
  url: 'https://bythope.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bythope',
  projectName: 'bythope.github.io',

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        theme: {  
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'BytHope',
        logo: {
          alt: 'BytHope Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/games', label: 'Games', position: 'right' },
          { to: '/blog', label: 'Blog', position: 'right' },
          { to: '/presskit', label: 'Press Kit', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} BytHope Games Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
