
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3976, hash: '698d3d0b5c01a2cd2b83ad2327620d4348b2d9193dc0c30250a5301e4da46e7a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '55e7d720537994f7cd91f53602add127b0c4232a8598303d4ee39530e6d76d1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12286, hash: '43c438bcada44ee8b439ec7484c6c51c6adcbaf66d3b08ad479221b4845d04d2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FP5GJ4ZR.css': {size: 10220, hash: 'mzGBfkch4aI', text: () => import('./assets-chunks/styles-FP5GJ4ZR_css.mjs').then(m => m.default)}
  },
};
