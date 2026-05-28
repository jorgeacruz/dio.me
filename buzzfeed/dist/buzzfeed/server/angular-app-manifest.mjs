
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
    'index.csr.html': {size: 2494, hash: '33a41e51c432629a9e3941a2b8b8896a3ec595b7328c54d6ea06359182ed91cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: 'b0869e8c4f605e05b9f0e286bea1768ff4c630fbe1bd6164919326d9163325a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8901, hash: '45bf95969b1244eb3a912a0d8bf0398f9db7a93a6e6c9f384746d061f7f8383a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VMJ2P45N.css': {size: 7264, hash: 'ZyfKmUZKFJM', text: () => import('./assets-chunks/styles-VMJ2P45N_css.mjs').then(m => m.default)}
  },
};
