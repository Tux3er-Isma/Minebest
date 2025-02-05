import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_aE49e2rs.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"albert/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/albert","isIndex":false,"type":"page","pattern":"^\\/albert\\/?$","segments":[[{"content":"albert","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/albert.astro","pathname":"/albert","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"daniel/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/daniel","isIndex":false,"type":"page","pattern":"^\\/daniel\\/?$","segments":[[{"content":"daniel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/daniel.astro","pathname":"/daniel","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"ioldi/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ioldi","isIndex":false,"type":"page","pattern":"^\\/ioldi\\/?$","segments":[[{"content":"ioldi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ioldi.astro","pathname":"/ioldi","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"isma/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/isma","isIndex":false,"type":"page","pattern":"^\\/isma\\/?$","segments":[[{"content":"isma","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/isma.astro","pathname":"/isma","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"osvaldo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/osvaldo","isIndex":false,"type":"page","pattern":"^\\/osvaldo\\/?$","segments":[[{"content":"osvaldo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/osvaldo.astro","pathname":"/osvaldo","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"slide/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/slide","isIndex":false,"type":"page","pattern":"^\\/slide\\/?$","segments":[[{"content":"slide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/slide.astro","pathname":"/slide","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"sumo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sumo","isIndex":false,"type":"page","pattern":"^\\/sumo\\/?$","segments":[[{"content":"sumo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sumo.astro","pathname":"/sumo","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"xavi/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/xavi","isIndex":false,"type":"page","pattern":"^\\/xavi\\/?$","segments":[[{"content":"xavi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/xavi.astro","pathname":"/xavi","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendmail.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendmail\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendmail.json.ts","pathname":"/api/sendmail.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/albert.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/daniel.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/ioldi.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/isma.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/osvaldo.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/sumo.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/xavi.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["C:/Users/ahamm/OneDrive/Escritorio/Ismail/Proyectos WEB/Personal Projects/minebest/src/pages/slide.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Z-hyKPNm.mjs","/src/pages/api/sendmail.json.ts":"chunks/pages/sendmail_05S9RBhZ.mjs","\u0000@astrojs-manifest":"manifest_6x483i02.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_qva-Wv_-.mjs","\u0000@astro-page:src/pages/albert@_@astro":"chunks/albert_ykoAoRjR.mjs","\u0000@astro-page:src/pages/api/sendmail.json@_@ts":"chunks/sendmail_8cPmgjJD.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_MlKb33ga.mjs","\u0000@astro-page:src/pages/daniel@_@astro":"chunks/daniel_FYqzYfu8.mjs","\u0000@astro-page:src/pages/ioldi@_@astro":"chunks/ioldi_vt6yAjFc.mjs","\u0000@astro-page:src/pages/isma@_@astro":"chunks/isma_IxmDxfhN.mjs","\u0000@astro-page:src/pages/osvaldo@_@astro":"chunks/osvaldo_MMNdsKEh.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"chunks/privacy_W_kZfmc1.mjs","\u0000@astro-page:src/pages/slide@_@astro":"chunks/slide_ISmPMNPs.mjs","\u0000@astro-page:src/pages/sumo@_@astro":"chunks/sumo_SwlA-9z4.mjs","\u0000@astro-page:src/pages/xavi@_@astro":"chunks/xavi_1SW6qP2M.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0002.Kl9KtF6D.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0003.jgAAz8HE.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0001.UYY32ir8.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0007.wrz5n9Za.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0005.ImT930N_.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0009.3X59DB4g.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0010.f0Q1TYS4.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0006.e6xWpbUR.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0004.wgn1iIAa.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0008.SpC1p5mL.jpg","/_astro/presentacion_mineriabtc.Definitivo_pages-to-jpg-0011.TxUFVP0M.jpg","/_astro/outfit-latin-wght-normal.nSmX64Pc.woff2","/_astro/outfit-latin-ext-wght-normal.OaDIP9A-.woff2","/_astro/poppins-latin-500-normal.vDl5Y2SW.woff2","/_astro/poppins-latin-ext-500-normal.B-ENM_A9.woff2","/_astro/poppins-latin-ext-100-normal.WBok9L7Q.woff2","/_astro/poppins-latin-200-normal.fLagOaAE.woff2","/_astro/poppins-latin-ext-200-normal.FDSe3dH0.woff2","/_astro/poppins-latin-100-normal.mPjP4vZO.woff2","/_astro/poppins-latin-ext-700-normal.w2lYgMxq.woff2","/_astro/poppins-latin-800-normal.XfPqSD9U.woff2","/_astro/poppins-latin-ext-800-normal.k4j5nmKn.woff2","/_astro/poppins-latin-700-normal.EK29DtFg.woff2","/_astro/poppins-latin-ext-400-normal.AiKXiRGc.woff2","/_astro/poppins-latin-ext-600-normal.p-AvOO-a.woff2","/_astro/poppins-latin-600-normal.MxJMQfTK.woff2","/_astro/poppins-latin-400-normal.HKcQETrj.woff2","/_astro/poppins-latin-ext-300-normal.O2YNprFh.woff2","/_astro/poppins-latin-300-normal.5LtlqAoW.woff2","/_astro/poppins-latin-200-normal.cSvt0MOr.woff","/_astro/poppins-latin-ext-500-normal.ZdfktNkn.woff","/_astro/poppins-latin-500-normal.xl6qQzJn.woff","/_astro/poppins-latin-ext-100-normal.wqPwGfGW.woff","/_astro/poppins-latin-100-normal.D7LFYdVC.woff","/_astro/poppins-latin-ext-200-normal.11Jf9WzF.woff","/_astro/poppins-latin-800-normal.GKCLaGWV.woff","/_astro/poppins-latin-ext-700-normal.hNlhSphc.woff","/_astro/poppins-latin-700-normal.VbkEf3gJ.woff","/_astro/poppins-latin-ext-800-normal.3OcELUjy.woff","/_astro/poppins-latin-600-normal.SXU5neZs.woff","/_astro/poppins-latin-ext-600-normal.wehSVEXG.woff","/_astro/poppins-latin-ext-400-normal.nv7lqtWR.woff","/_astro/poppins-latin-ext-300-normal.vae4L5gG.woff","/_astro/poppins-latin-400-normal.Tm9xNzdG.woff","/_astro/poppins-latin-300-normal.wjbjF1I5.woff","/_astro/section1_img3.SJrNPMWF.png","/_astro/cover.JEDiwH9h.avif","/_astro/section1_img2.gfUen7Zv.png","/_astro/section1_img1.5RjPMxzm.png","/_astro/contrato.t4XdiURK.jpg","/_astro/albert.ZtyS2qiN.css","/_astro/privacy.JgrtXjUc.css","/_astro/slide.DrpuTrus.css","/bg-img.png","/btc-coin-avif.avif","/btc-coin-b.png","/btc-coin.jpg","/btc-coin.png","/btc-coin.png.png","/desktop-avif.avif","/desktop-jpg.jpg","/desktop.jpg","/favicon.svg","/mobile.png","/odometer.css","/odometer.js","/popup-img.png","/video-bg.png","/video.mp4","/whatsapp.png","/albert/index.html","/index.html","/daniel/index.html","/ioldi/index.html","/isma/index.html","/osvaldo/index.html","/privacy/index.html","/slide/index.html","/sumo/index.html","/xavi/index.html"],"buildFormat":"directory"});

export { manifest };
