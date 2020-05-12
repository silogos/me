/* eslint-disable prettier/prettier */
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const production = process.env.NODE_ENV === 'production'
const withFonts = require('next-fonts');

module.exports = withFonts({
  assetPrefix: production ? '/me/' : '',
  webpack(config, options) {
    return config;
  }
});