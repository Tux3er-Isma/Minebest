import { renderers } from './renderers.mjs';
import { manifest } from './manifest_-5Ko4l4p.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_uieeLu4s.mjs');
const _page1 = () => import('./chunks/sendEmail_N-n9sv5y.mjs');
const _page2 = () => import('./chunks/index_UXwPRLvr.mjs');
const _page3 = () => import('./chunks/privacy_g3h4suKc.mjs');
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
    "middlewareSecret": "66b69b02-80f4-4f9b-a785-16b4cbb93a38"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
