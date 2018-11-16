const base = {
  name: 'Organic Man',
  url: 'https://organicman.eco'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} | Your Path To Self Realization`,
  siteTitlePostfix: ` | ${base.name}`,
  siteDescription: `${base.name} empowers transformative changes to occur within ourselves and our global community to build a world of "We"`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: base.name,
  headerSubTitle: '',

  /* url */
  siteUrl: base.url,
  categoryPath: process.env.CATEGORY_PATH,
  tagPath: process.env.TAG_PATH,

  /* tokens */
  fbAppId: process.env.OM_FACEBOOK_APPID,

  /* Sumo click triggers */
  joinTribeId: '2ddd0fec-63c8-476b-a2ac-a338290a63e0',
  joinTribeCTA: 'Join The OM Tribe'
};

module.exports = config;