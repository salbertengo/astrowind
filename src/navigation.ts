import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beginning',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Services',
      links:[
        
        { text: 'Development',
          href: getPermalink('/servicios/desarrollo'),
        }
        ]
    }
  ],
  actions: [{ text: 'Schedule a call.', href: getPermalink('/contact'), target: '_blank' }],


};

export const footerData = {
  links: [
    {
      title: 'Enterprise',
      links: [
        { text: 'About us', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/pampacodigo' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/pampacodigo/' },
  ],
  footNote: `
    Pampa&Código. All rights reserved.
  `,
};
