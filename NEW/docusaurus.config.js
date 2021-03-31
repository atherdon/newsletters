/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Thematics Newsletter Archive by Hackernoon',
    tagline: 'The tagline of my site',
    url: 'https://docusaurus-newsletter.netlify.app/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'https://hackernoon.com/favicon.ico',
    organizationName: 'Hackernoon',
    projectName: 'newsletters',
    themeConfig: {
        navbar: {
            title: 'Home',
            logo: {
                alt: 'My Site Logo',
                src: 'https://hackernoon.com/favicon.ico',
            },
            items: [
                {
                    to: 'docs/index',
                    activeBasePath: 'docs',
                    label: 'Newsletters',
                    position: 'right',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Archive',
                    items: [
                        {
                            label: 'Thematics',
                            to: 'docs/thematic/2019/thematic-january',
                        },
                        {
                            label: 'Noonification',
                            to: 'docs/noonifications/noonifications-january',
                        },
                        {
                            label: 'TechBrief',
                            to: 'docs/techbrief/techbrief',
                        },
                        {
                            label: 'Podcasts',
                            to: 'docs/podcasts/podcasts',
                        },
                        {
                            label: 'Gaming',
                            to: 'docs/index',
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Hackernoon',
                            href: 'http://hackernoon.com/',
                        },
                        {
                            label: 'Slogging',
                            href: 'https://www.slogging.com/',
                        },
                        {
                            label: 'Discord',
                            href: 'xxx',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/hackernoon',
                        },
                        {
                            label: 'Instagram',
                            href: 'https://www.instagram.com/hackernoon/',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/company/hackernoon/',
                        },
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/hackernoon/',
                        },
                        {
                            label: 'Pinterest',
                            href: 'https://www.pinterest.ca/hackernoon/',
                        },
                        {
                            label: 'YouTube',
                            href: 'https://youtube.com/hackernoon',
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/hackernoon',
                        },
                        {
                            label: 'Learn how to Advertise with Hacker Noon',
                            href: 'http://sponsor.hackernoon.com/',
                        },
                        {
                            label: 'Start writing with us >',
                            href: 'https://hackernoon.com/signup'

                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Hackernoon. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.       
                    // todo: if we need editUrl, we can return it              
                    //editUrl:
                    //'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
