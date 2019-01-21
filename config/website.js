const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Farzaan Kaiyom - Personal Website', // Navigation and Site Title
  siteTitleAlt: 'Farzaan Kaiyom', // Alternative Site title for SEO
  siteUrl: 'https://farzaank.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Farzaan Kaiyoms Personal Website',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@browninthedm', // Twitter Username
  ogSiteName: 'farzaan.kaiyom', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
