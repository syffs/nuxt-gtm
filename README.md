# @nuxtjs/gtm

<!--[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![npm version][npm-version-src]][npm-version-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]-->
[![Standard JS][standard-js-src]][standard-js-href]

> Google Tag Manager for Nuxt.js - inspired by Nuxt.js [Google Tag Manager](https://github.com/nuxt-community/modules/tree/master/packages/google-tag-manager) official module which seemed incomplete to me

[📖 **Release Notes**](./CHANGELOG.md)

> Add Google Tag Manager (GTM) to your nuxt.js application.
This plugins automatically sends first page and route change events to GTM.

## Setup
- Add `@nuxtjs/google-tag-manager` dependency using yarn or npm to your project
- Add `@nuxtjs/google-tag-manager` to `modules` section of `nuxt.config.js`
```js
  modules: [
   ['@nuxtjs/gtm', { id: 'GTM-XXXXXXX' }],
  ]
```

## Options

### `id`
- Required
- Can be String in form of `GTM-XXXXXXX`
- Can be function returning Promise or String:
```js
// Returns Promise
id: () => {
  return axios.get('http://example.com/')
    .then(({ data }) => {
      return data.gtm_id
    })
}

// Returns String
const code = '1234567'
id: () => {
  return 'GTM-' + code
}
```

### All options
```js
{
  id: 'GTM-XXXXXXX',
  layer: 'dataLayer',
  pageTracking: false,
  dev: true,
  query: {
    // query params...
    gtm_auth:        '...',
    gtm_preview:     '...',
    gtm_cookies_win: '...'
  },
  scriptURL: '//example.com'
}
```

### Router Integration

You can optionally set `pageTracking` option to `true` to track page views. 

This is disabled by default to prevent double events when using alongside with Google Analytics so take care before enabling this option.

## Usage

### Pushing events

You can push events into the configured `layer`:
```js
this.$gtm.pushEvent({ event: 'myEvent', ...someAttributes })
```


## License

[MIT License](./LICENSE)

Copyright (c) syffs

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/gtm/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/gtm

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/gtm.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/gtm

[circle-ci-src]: https://img.shields.io/circleci/project/github/https://github.com/syffs/nuxt-gtm.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/https://github.com/syffs/nuxt-gtm

[codecov-src]: https://img.shields.io/codecov/c/github/https://github.com/syffs/nuxt-gtm.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/https://github.com/syffs/nuxt-gtm

[david-dm-src]: https://david-dm.org/https://github.com/syffs/nuxt-gtm/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/https://github.com/syffs/nuxt-gtm

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
