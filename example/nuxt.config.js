const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [
    { handler: require('../'),
      options: {
        id: 'GTM-XXXXXXX',
        layer: 'dataLayer',
        pageTracking: true,
        enabled: true
      } }
  ]
}