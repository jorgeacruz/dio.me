
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
    'index.csr.html': {size: 3976, hash: 'b039e646e881abc2ec45561c2d579003271638c04f3b5e323ed8c096afc2ae4d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: 'f2669c8f575ec7c741d7b4a3662e84b4d3dc15f8c10c6f7d5a78a7d1e9fa7cba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10645, hash: '0aedae23539252940b078d5386e030a63b630d01617395837eef4309ceee0da6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MDNLRAWU.css': {size: 10114, hash: 'roCZ/FO1tAk', text: () => import('./assets-chunks/styles-MDNLRAWU_css.mjs').then(m => m.default)}
  },
};
