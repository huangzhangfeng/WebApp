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

importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "Map.492d4dfd.css",
    "revision": "9e5c8e920fcca1ca19ddc49543404a6f"
  },
  {
    "url": "Map.ddc305c5.js",
    "revision": "86f001747f66b648079b8b61fc30d3ce"
  },
  {
    "url": "repository.bf7adc11.png",
    "revision": "d7379d0008eb939db6599365db3bbf9a"
  },
  {
    "url": "source.3217e8b1.js",
    "revision": "1b9b69423148ba854f38f29f0696a04a"
  },
  {
    "url": "source.fa9ff450.css",
    "revision": "b64a4fa4db90ae2a8049b7dd6d9def1e"
  },
  {
    "url": "watch-fork.5340aac9.png",
    "revision": "8f08166633d3e1d80455eef81ab4505d"
  },
  {
    "url": "wuhan2020-mini.ea4c48b6.png",
    "revision": "b2205e818a1764935676177594818ca8"
  },
  {
    "url": "wuhan2020.a11be2da.png",
    "revision": "c304f43585e91b54016d3f4c3c6cb481"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
