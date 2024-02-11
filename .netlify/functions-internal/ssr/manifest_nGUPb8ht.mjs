import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_p0RFpSrb.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendemail.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.json.ts","pathname":"/api/sendEmail.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.OIJacrK8.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Gabarito:wght@500&display=swap\";*{margin:0;padding:0;box-sizing:border-box;font-family:Montserrat,sans-serif;scroll-behavior:smooth}body{background-color:#161616;color:#fff;display:flex;flex-direction:column}body::-webkit-scrollbar{width:7px;color:#161616}body::-webkit-scrollbar-track{background-color:#161616}body::-webkit-scrollbar-thumb{border-radius:30px;transition:all .5s;background:#a252ff}a{text-decoration:none}::selection{background-color:#a252ff;color:#fff}.open-container[data-astro-cid-pbtybmrt]{width:60vw}.open-container__static-container[data-astro-cid-pbtybmrt]{padding-top:30px;padding-bottom:30px;width:60vw;height:100px;display:flex;justify-content:space-between;transition:all .1 s}.open-container__static-container__title[data-astro-cid-pbtybmrt]{font-weight:500}.open-container__static-container__img[data-astro-cid-pbtybmrt]{font-size:50px;align-self:center;margin-bottom:10px;user-select:none}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(45deg)}}@keyframes desrotate{0%{transform:rotate(45deg)}to{transform:rotate(0)}}.open-container__static-container[data-astro-cid-pbtybmrt]:hover{cursor:pointer;color:#a252ff}.open-container__temporal-container[data-astro-cid-pbtybmrt]{display:none;margin-bottom:30px}@keyframes eliminate{to{opacacity:.5;display:none}}@media only screen and (max-width: 480px){.open-container[data-astro-cid-pbtybmrt]{width:300px;margin-bottom:40px}.open-container__static-container[data-astro-cid-pbtybmrt]{width:300px}.open-container__static-container__title[data-astro-cid-pbtybmrt]{font-size:30px}.open-container__temporal-container[data-astro-cid-pbtybmrt]{widows:300px;margin-top:40px}}@media only screen and (min-width: 801px) and (max-width: 900px){.open-container[data-astro-cid-pbtybmrt]{width:600px;margin-bottom:40px}.open-container__static-container[data-astro-cid-pbtybmrt]{width:600px}.open-container__static-container__title[data-astro-cid-pbtybmrt]{font-size:30px}.open-container__temporal-container[data-astro-cid-pbtybmrt]{widows:600px;margin-top:40px}}@media only screen and (min-width: 700px) and (max-width: 800px){.open-container[data-astro-cid-pbtybmrt]{width:600px;margin-bottom:40px}.open-container__static-container[data-astro-cid-pbtybmrt]{width:600px}.open-container__static-container__title[data-astro-cid-pbtybmrt]{font-size:30px}.open-container__temporal-container[data-astro-cid-pbtybmrt]{widows:600px;margin-top:40px}}[data-astro-cid-fb3qbcs3]{margin:0;padding:0;font-weight:100}body{flex-direction:column;display:flex;justify-content:center;align-items:center;overflow-x:hidden}.body-txt[data-astro-cid-fb3qbcs3]{font-size:20px}.body-list[data-astro-cid-fb3qbcs3]{margin-left:40px}.body-list__items[data-astro-cid-fb3qbcs3]{font-size:20px}.body-link[data-astro-cid-fb3qbcs3]{color:#06f}.body-link[data-astro-cid-fb3qbcs3]:hover{text-decoration:underline}.title[data-astro-cid-fb3qbcs3],.subtitle[data-astro-cid-fb3qbcs3],.txt[data-astro-cid-fb3qbcs3]{text-align:center}.title[data-astro-cid-fb3qbcs3]{margin-top:70px;margin-bottom:22px;width:100vw;font-size:clamp(35px,3.5vw + 1vh,80px);letter-spacing:-.003em}.subtitle[data-astro-cid-fb3qbcs3]{margin-bottom:40px;font-size:23px}.txt[data-astro-cid-fb3qbcs3]{width:700px;font-size:22px}.txt__link[data-astro-cid-fb3qbcs3]{color:#a252ff}.txt__link[data-astro-cid-fb3qbcs3]:hover{text-decoration:underline;cursor:pointer}.txt__link--d[data-astro-cid-fb3qbcs3]{margin-top:30px;margin-bottom:85px}.txt--2[data-astro-cid-fb3qbcs3]{margin-top:60px;margin-bottom:60px}.icon[data-astro-cid-fb3qbcs3]{user-select:none;width:80px}.footer[data-astro-cid-fb3qbcs3]{width:100vw}@media only screen and (max-width: 480px){.txt[data-astro-cid-fb3qbcs3]{width:300px;font-size:18px}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/components/Footer/Footer.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/privacy.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/privacy@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_FKw9QR1y.mjs","/src/pages/index.astro":"chunks/pages/index_2KHV9s2p.mjs","/src/pages/privacy.astro":"chunks/pages/privacy_MDoM3R07.mjs","/src/pages/api/sendEmail.json.ts":"chunks/pages/sendEmail_kTjvV8KW.mjs","\u0000@astrojs-manifest":"manifest_nGUPb8ht.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_uieeLu4s.mjs","\u0000@astro-page:src/pages/api/sendEmail.json@_@ts":"chunks/sendEmail_N-n9sv5y.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_UXwPRLvr.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"chunks/privacy_g3h4suKc.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.OIJacrK8.css","/bg-img.png","/desktop.png","/favicon.svg","/mobile.png","/odometer.css","/odometer.js","/video.mp4"],"buildFormat":"directory"});

export { manifest };
