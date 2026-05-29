
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
    'index.csr.html': {size: 3976, hash: 'e73b21174ca09780c49ffa77490b6cd0a0c3ca931adb8bcc943e37dfe10eb723', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: 'e0302210feeed6e1eaf4cb2d03d4ebfbcdc296a9bfa288f087c3e8bfe0e7dbbb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10671, hash: 'bec7af485c4ef0247c7655820a9c6e51924053b8c308ca30182c838b71a70178', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RYO37PTR.css': {size: 10014, hash: 'rnuQkJyZfxM', text: () => import('./assets-chunks/styles-RYO37PTR_css.mjs').then(m => m.default)}
  },
};
