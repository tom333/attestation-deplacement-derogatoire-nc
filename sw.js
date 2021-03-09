/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.0fcebb82.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "android-chrome-512x512.ae40f73d.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-precomposed.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "appstore-badge.811332dd.png",
    "revision": "f7e1dff9710b55998464378dc0729a98"
  },
  {
    "url": "certificate.0eed39bb.pdf",
    "revision": "375a3c7f85bedf200ecdece16e23d4bb"
  },
  {
    "url": "confidentialite.16e24b01.css",
    "revision": "85d091bb3d29dfcbdda61c4e580e3615"
  },
  {
    "url": "confidentialite.3cf18553.css",
    "revision": "162984bd7f142e977723761768e71adb"
  },
  {
    "url": "confidentialite.449dd6d4.js",
    "revision": "a84c9c747bc4933070f0e4946da3aa7d"
  },
  {
    "url": "confidentialite.a26a5d73.js",
    "revision": "606c546ed863dd1f9fc71ace721ab6d7"
  },
  {
    "url": "confidentialite.html",
    "revision": "dd5ff9a714666a8cf7f38bd155ed0eb8"
  },
  {
    "url": "favicon-16x16.a4687270.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-32x32.623384d0.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "google-play-badge.8bde89d1.png",
    "revision": "df3c10c596cb600b68af511e881ea22c"
  },
  {
    "url": "index.html",
    "revision": "80c59147fa34ace190a9be9d57a3e714"
  },
  {
    "url": "logo_dnum_dark.0fe33c5b.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "logo_dnum.19ebc682.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "logo_gnc.ffdebeed.png",
    "revision": "0eaaa9ca3492df4cb1d4400395bc4234"
  },
  {
    "url": "main.16e24b01.css",
    "revision": "653b43cef2e98bcc00cd633fb2e6533e"
  },
  {
    "url": "main.2a870fb4.js",
    "revision": "a23f7cbedd1bf42988f325842c01fc4a"
  },
  {
    "url": "main.3cf18553.css",
    "revision": "ec3a9e82f73bdc80a46a1fe7752b759f"
  },
  {
    "url": "main.97a34c73.js",
    "revision": "291cc68416dc519d50f2b10098332d77"
  },
  {
    "url": "marianne-bold-webfont.1505950c.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-bold-webfont.7424dbde.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-regular-webfont.0a959359.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "marianne-regular-webfont.daa94941.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "MIN_Interieur_RVB_dark.0e5ee525.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "MIN_Interieur_RVB.124e26ea.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "safari-pinned-tab.1551797e.svg",
    "revision": "f53452e6ac8760f12bab91672e91d39b"
  },
  {
    "url": "./",
    "revision": "ceab8a37c78d0178788b981edcc45d65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/attestation-deplacement-derogatoire-nc//index.html"));
