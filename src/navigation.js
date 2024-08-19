import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Archives',
      links: [
        {
          text: 'Overview',
          href: getPermalink('/archives'),
        },
        {
          text: '2023',
          href: 'https://2023.ethcon.kr',
        },
        {
          text: '2020',
          href: 'https://2020.ethcon.kr',
        },
        {
          text: '2019',
          href: 'https://2019.ethcon.kr',
        },
      ],
    },
    {
      text: 'Contributors',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'My Ethcon(coming soon) ↗', href: 'https://github.com/ethcon-kr/my-ethcon', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Previous Events',
      links: [
        { text: '2023', href: 'https://2023.ethcon.kr' },
        { text: '2020', href: 'https://2020.ethcon.kr' },
        { text: '2019', href: 'https://2019.ethcon.kr' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Github', href: 'https://github.com/ethcon-kr' },
        { text: 'Twitter', href: 'https://x.com/ethcon-kr' },
        { text: 'Blog', href: 'https://blog.ethcon.kr' },
        { text: 'Changelog', href: 'https://github.com/ethcon-kr/2024.ethcon.kr' },
      ],
    },
    {
      title: 'Ethereum Seoul Community',
      links: [
        { text: 'Open Research Club', href: 'https://ethereum-seoul.community/open-research-club/' },
        { text: 'Civic Hackers Club', href: 'https://ethereum-seoul.community/civic-hackers-club/' },
        { text: 'Ethcon Organizers', href: 'https://ethereum-seoul.community/ethcon/' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/ethconkr' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote:  "© 2024 Ethcon Korea. All rights reserved."
};
