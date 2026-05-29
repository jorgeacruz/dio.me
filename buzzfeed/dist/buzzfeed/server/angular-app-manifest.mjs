
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
    'index.csr.html': {size: 4119, hash: '9bbbab52a4adaf2380b8ff853cdb8c70ff61216eec18f0fdb04257ba73d0cf30', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '8246a5ecece28a21f26ba9b8bcdef6f8555f43d5411ee27eb618ab8644324748', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12238, hash: 'b2002e281658d0c1e74b40f1859321eb3577d3ebb262dad19e48ada7a0920c3a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-D54NYTRZ.css': {size: 10870, hash: 'uPMZkSBDu/Q', text: () => import('./assets-chunks/styles-D54NYTRZ_css.mjs').then(m => m.default)}
  },
};
