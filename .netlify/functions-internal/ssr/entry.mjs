import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6x483i02.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_qva-Wv_-.mjs');
const _page1 = () => import('./chunks/albert_ykoAoRjR.mjs');
const _page2 = () => import('./chunks/sendmail_8cPmgjJD.mjs');
const _page3 = () => import('./chunks/index_MlKb33ga.mjs');
const _page4 = () => import('./chunks/daniel_FYqzYfu8.mjs');
const _page5 = () => import('./chunks/ioldi_vt6yAjFc.mjs');
const _page6 = () => import('./chunks/isma_IxmDxfhN.mjs');
const _page7 = () => import('./chunks/osvaldo_MMNdsKEh.mjs');
const _page8 = () => import('./chunks/privacy_W_kZfmc1.mjs');
const _page9 = () => import('./chunks/slide_ISmPMNPs.mjs');
const _page10 = () => import('./chunks/sumo_SwlA-9z4.mjs');
const _page11 = () => import('./chunks/xavi_1SW6qP2M.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/albert.astro", _page1],
    ["src/pages/api/sendmail.json.ts", _page2],
    ["src/pages/index.astro", _page3],
    ["src/pages/daniel.astro", _page4],
    ["src/pages/ioldi.astro", _page5],
    ["src/pages/isma.astro", _page6],
    ["src/pages/osvaldo.astro", _page7],
    ["src/pages/privacy.astro", _page8],
    ["src/pages/slide.astro", _page9],
    ["src/pages/sumo.astro", _page10],
    ["src/pages/xavi.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c8f28a5a-5054-43b3-8a50-cbb82febf533"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
