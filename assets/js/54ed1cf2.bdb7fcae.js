"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[6827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={title:"Profiling",sidebar_position:7},i=void 0,s={unversionedId:"best-practices/profiling",id:"best-practices/profiling",title:"Profiling",description:"Inside of @middy/core we've added some hook before and after every middleware called, the handler and from start to end of it's execution.",source:"@site/docs/best-practices/07-profiling.md",sourceDirName:"best-practices",slug:"/best-practices/profiling",permalink:"/docs/best-practices/profiling",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/best-practices/07-profiling.md",tags:[],version:"current",lastUpdatedAt:1690980129,formattedLastUpdatedAt:"Aug 2, 2023",sidebarPosition:7,frontMatter:{title:"Profiling",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Small node_modules",permalink:"/docs/best-practices/small-node-modules"},next:{title:"FAQ",permalink:"/docs/faq"}},l={},d=[{value:"Time",id:"time",level:2},{value:"Memory",id:"memory",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"@middy/core")," we've added some hook before and after every middleware called, the handler and from start to end of it's execution."),(0,o.kt)("h2",{id:"time"},"Time"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst defaults = {\n  logger: console.log,\n  enabled: true\n}\n\nconst timePlugin = (opts = {}) => {\n  const { logger, enabled } = { ...defaults, ...opts }\n  const store = {}\n\n  const start = (id) => {\n    store[id] = process.hrtime.bigint()\n  }\n  const stop = (id) => {\n    if (!enabled) return\n    logger(id, Number.parseInt((process.hrtime.bigint() - store[id]).toString()) / 1000000, 'ms')\n  }\n\n  // Only run during cold start\n  const beforePrefetch = () => start('total')\n  const requestStart = () => {\n    if (!store.init) {\n      store.init = store.total\n      stop('init')\n    } else {\n      start('total')\n    }\n  }\n  const beforeMiddleware = start\n  const afterMiddleware = stop\n  const beforeHandler = () => start('handler')\n  const afterHandler = () => stop('handler')\n  const requestEnd = () => stop('total')\n\n  return {\n    beforePrefetch,\n    requestStart,\n    beforeMiddleware,\n    afterMiddleware,\n    beforeHandler,\n    afterHandler,\n    requestEnd\n  }\n}\n\nexport const handler = middy(timePlugin())\n  .use(eventLogger())\n  .use(errorLogger())\n  .use(httpEventNormalizer())\n  .use(httpHeaderNormalizer())\n  .use(httpUrlencodePathParametersParser())\n  .use(httpUrlencodeBodyParser())\n  .use(httpJsonBodyParser())\n  .use(httpCors())\n  .use(httpSecurityHeaders())\n  .use(validator({eventSchema}))\n  .handler(()=>{})\n  \nawait handler()\n")),(0,o.kt)("p",null,"This will log out something this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"inputOutputLoggerMiddlewareBefore 0.156033 ms\nhttpEventNormalizerMiddlewareBefore 0.073921 ms\nhttpHeaderNormalizerMiddlewareBefore 0.095098 ms\nhttpUrlencodePathParserMiddlewareBefore 0.036255 ms\nhttpUrlencodeBodyParserMiddlewareBefore 0.038809 ms\nhttpJsonBodyParserMiddlewareBefore 0.048383 ms\nhttpContentNegotiationMiddlewareBefore 0.042311 ms\nvalidatorMiddlewareBefore 0.083366 ms\nhandler 0.094875 ms\nvalidatorMiddlewareAfter 0.083601 ms\nhttpSecurityHeadersMiddlewareAfter 0.19702 ms\nhttpCorsMiddlewareAfter 0.080532 ms\ninputOutputLoggerMiddlewareAfter 0.066886 ms\nlambda 66.141835 ms\n")),(0,o.kt)("p",null,"From this everything looks good. Sub 1ms for every middleware and the handler. But wait, that ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," doesn't look right.\nYou're correct, ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," includes the initial setup time (or cold start time) for all middlewares. In this case ",(0,o.kt)("inlineCode",{parentName:"p"},"validator")," is the culprit.\nThe Ajv constructor and compiler do a lot of magic when they first run to get ready for later schema validations.\nThis is why in the ",(0,o.kt)("inlineCode",{parentName:"p"},"validator")," middleware we now support passing in complied schema and expose the default compiler in\ncase you want to use it in a build step. We hope this feature will help to you in identify slow middlewares and improve your development experience."),(0,o.kt)("p",null,"There is also a ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeRequest")," hook, but was left out of the example for dramatic effect."),(0,o.kt)("p",null,"Additionally, you'll notice that each middleware shows a descriptive name. This is printing out the function name passed into middy core.\nIf you've looked at the code for some the supported middlewares, you'll see these long descriptive variable names being set, then returned.\nThis is why."),(0,o.kt)("h2",{id:"memory"},"Memory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import memwatch from '@airbnb/node-memwatch'\n\nconst defaults = {\n  logger: console.log\n}\n\nconst memoryPlugin = (opts = {}) => {\n  const { logger } = { ...defaults, ...opts }\n  const store = {}\n\n  const start = (id) => {\n    store[id] = new memwatch.HeapDiff()\n  }\n  const stop = (id) => {\n    logger(id, store[id].end())\n  }\n\n  const beforePrefetch = () => start('total')\n  const requestStart = () => {\n    store.init = store.total\n    stop('init')\n  }\n  const beforeMiddleware = start\n  const afterMiddleware = stop\n  const beforeHandler = () => start('handler')\n  const afterHandler = () => stop('handler')\n  const requestEnd = () => stop('total')\n\n  return {\n    beforePrefetch,\n    requestStart,\n    beforeMiddleware,\n    afterMiddleware,\n    beforeHandler,\n    afterHandler,\n    requestEnd\n  }\n}\n\nexport const handler = middy(memoryPlugin())\n  .use(eventLogger())\n  .use(errorLogger())\n  .use(httpEventNormalizer())\n  .use(httpHeaderNormalizer())\n  .use(httpUrlencodePathParametersParser())\n  .use(httpUrlencodeBodyParser())\n  .use(httpJsonBodyParser())\n  .use(httpCors())\n  .use(httpSecurityHeaders())\n  .use(validator({eventSchema}))\n  .handler(()=>{})\n  \nawait handler()\n")))}u.isMDXComponent=!0}}]);