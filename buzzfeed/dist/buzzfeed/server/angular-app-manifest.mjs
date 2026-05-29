
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
    'index.csr.html': {size: 4075, hash: 'c03e56f2f4cdf0f852b68748dd48f889723a789e050b810eb0fc9f6bf170f4a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '16d299c1c30b6866cdfc02d2acde30c4704f8ddef37d0fa3e72d9e04d5c86269', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12263, hash: '956c81719594723a969e79e689b078609ba0c12bedc991c5ad1657baa356fbd4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PT6VGPXE.css': {size: 10563, hash: '094Zja+Gz3E', text: () => import('./assets-chunks/styles-PT6VGPXE_css.mjs').then(m => m.default)}
  },
};
