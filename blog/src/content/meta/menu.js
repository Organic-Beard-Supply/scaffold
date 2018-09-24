const menu = [
  { label: 'About', to: '/#', subMenu: [
    { label: 'Our Mission', to: '/#mission' },
    { label: 'How It Works', to: '/#how-it-works' },
    { label: 'Testimonials', to: '/#stories' }
  ]},
  { label: 'Discover', to: '/#', subMenu: [
    { label: 'A Personal Path', to: '/#paths' },
    { label: 'A Guided Journey', to: '/#journeys' },
    { label: 'A Supportive Tribe', to: '/#communities' },
    { label: 'Powerful Gatherings', to: '/#gatherings' }
  ]},
  { label: 'Blog', to: '/blog', subMenu: [
    { label: 'Featured Articles', to: '/blog' },
    { label: 'Paradigm', to: '/blog' },
    { label: 'Surrealism', to: '/blog' },
    { label: 'Expression', to: '/blog' },
    { label: 'Stories', to: '/blog' }
  ]},
  { label: 'Support', to: '/#', subMenu: [
    { label: 'Live Chat', to: '/#' },
    { label: 'FAQ', to: '/#faq' },
    { label: 'Help Desk', to: 'https://organic-man.kayako.com/' }
  ] }
];

export default menu;
