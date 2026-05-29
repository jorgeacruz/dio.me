
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
    'index.csr.html': {size: 4119, hash: 'ff8768d96cdbe76332bdeef85cbefcb2293c0fe5ca187e651064aa319fde823d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '55bc75dfb5639e4bff4d6db571c2206e97ed98830adc16e2cf485e107cf0e7a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12238, hash: '4c8be61a921e7e1ac61f391c93af47ce8187ab2c16ac100a2e8abec5ebc6c106', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-D54NYTRZ.css': {size: 10870, hash: 'uPMZkSBDu/Q', text: () => import('./assets-chunks/styles-D54NYTRZ_css.mjs').then(m => m.default)}
  },
};
