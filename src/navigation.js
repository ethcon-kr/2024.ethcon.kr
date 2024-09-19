import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Speak at Ethcon',
      href: getPermalink('/apply-as-a-speaker'),
    },
    {
      text: 'Schedules',
      links: [
        {
          text: 'Day 1 - Job Clinic',
          href: getPermalink('/schedules/day1'),
        },
        {
          text: 'Day 2 - CTF & Quiz',
          href: getPermalink('/schedules/day2'),
        },
        {
          text: 'Day 3 - Conference',
          href: getPermalink('/schedules/day3'),
        },
      ],
    },
    {
      text: 'Contribute',
      href: getPermalink('/contribute'),
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
    // {
    //   text: 'Contributors',
    //   href: getPermalink('/'),
    // },
    // {
    //   text: 'About',
    //   href: getPermalink('/about'),
    // },
  ],
  actions: [{ text: 'My Ethcon(coming soon) ↗', href: '#', target: '' }],
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
        { text: 'Twitter', href: 'https://x.com/ethconkr' },
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
  footNote: '© 2024 Ethcon Korea. All rights reserved.',
};
