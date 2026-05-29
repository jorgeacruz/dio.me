
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
    'index.csr.html': {size: 4075, hash: '2af9b1bb50e0805e04f2e1b8ec2009b16e86ce0eb8e43f19ecd9d5bf6f62cc0d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '4bf2990e2a2d68e72c78cfad5fa2ccdfafcc4fd61ede8ca46d1044c4c6d096e8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12263, hash: 'b6fe2939e917b64f66ba83836f437119a8014e022be6c33ff7ce2bdc7d76c563', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PT6VGPXE.css': {size: 10563, hash: '094Zja+Gz3E', text: () => import('./assets-chunks/styles-PT6VGPXE_css.mjs').then(m => m.default)}
  },
};
