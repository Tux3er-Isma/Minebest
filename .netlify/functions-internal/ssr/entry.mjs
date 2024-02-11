import { renderers } from './renderers.mjs';
import { manifest } from './manifest_-GcFEJEu.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_uieeLu4s.mjs');
const _page1 = () => import('./chunks/sendEmail_N-n9sv5y.mjs');
const _page2 = () => import('./chunks/index_UXwPRLvr.mjs');
const _page3 = () => import('./chunks/privacy_yS0vdxUY.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/sendEmail.json.ts", _page1],
    ["src/pages/index.astro", _page2],
    ["src/pages/privacy.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e3c829a1-149d-4e66-bcec-dacf0f992865"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
