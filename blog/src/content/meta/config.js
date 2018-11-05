const base = {
  name: 'Organic Man',
  url: 'https://organicman.eco'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} | Your Path To Self Realization`,
  siteTitlePostfix: ` - ${base.name}`,
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
  fbAppId: process.env.OM_FACEBOOK_APPID
};

module.exports = config;
