"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Application Load Balancer"},i=void 0,d={unversionedId:"events/application-load-balancer",id:"events/application-load-balancer",title:"Application Load Balancer",description:"Same as API Gateway (REST)",source:"@site/docs/events/application-load-balancer.md",sourceDirName:"events",slug:"/events/application-load-balancer",permalink:"/docs/events/application-load-balancer",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/application-load-balancer.md",tags:[],version:"current",lastUpdatedAt:1690980129,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"Application Load Balancer"},sidebar:"tutorialSidebar",previous:{title:"API Gateway (WebSocket)",permalink:"/docs/events/api-gateway-ws"},next:{title:"AppSync",permalink:"/docs/events/appsync"}},p={},l=[{value:"AWS Documentation",id:"aws-documentation",level:2},{value:"Example",id:"example",level:2}],s={toc:l},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Same as API Gateway (REST)"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.")),(0,a.kt)("h2",{id:"aws-documentation"},"AWS Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/services-alb.html"},"Using AWS Lambda with an Application Load Balancer"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpRouterHandler from '@middy/http-router'\nimport errorLoggerMiddleware from '@middy/error-logger'\nimport inputOutputLoggerMiddleware from '@middy/input-output-logger'\nimport httpContentNegotiationMiddleware from '@middy/http-content-negotiation'\nimport httpContentEncodingMiddleware from '@middy/http-content-encoding'\nimport httpCorsMiddleware from '@middy/http-cors'\nimport httpErrorHandlerMiddleware from '@middy/http-error-handler'\nimport httpEventNormalizerMiddleware from '@middy/http-event-normalizer'\nimport httpHeaderNormalizerMiddleware from '@middy/http-header-normalizer'\nimport httpJsonBodyParserMiddleware from '@middy/http-json-body-parser'\nimport httpMultipartBodyParserMiddleware from '@middy/http-multipart-body-parser'\nimport httpPartialResponseMiddleware from '@middy/http-partial-response'\nimport httpResponseSerializerMiddleware from '@middy/http-response-serializer'\nimport httpSecurityHeadersMiddleware from '@middy/http-security-headers'\nimport httpUrlencodeBodyParserMiddleware from '@middy/http-urlencode-body-parser'\nimport httpUrlencodePathParametersParserMiddleware from '@middy/http-urlencode-path-parser'\nimport warmupMiddleware from 'warmup'\n\nimport { handler as getHandler } from './handlers/get-user.js'\nimport { handler as postHandler } from './handlers/get-user.js'\n\nconst routes = [\n  {\n    method: 'GET',\n    path: '/user/{id}',\n    handler: getHandler\n  },\n  {\n    method: 'POST',\n    path: '/user',\n    handler: postHandler\n  }\n]\n\nexport const handler = middy({\n  timeoutEarlyResponse: () => {\n    return {\n      statusCode: 408\n    }\n  }\n})\n  .use(warmupMiddleware())\n  .use(httpEventNormalizerMiddleware())\n  .use(httpHeaderNormalizerMiddleware())\n  .use(\n    httpContentNegotiationMiddleware({\n      availableLanguages: ['en-CA', 'fr-CA'],\n      availableMediaTypes: ['application/json']\n    })\n  )\n  .use(httpUrlencodePathParametersParserMiddleware())\n  // Start oneOf\n  .use(httpUrlencodeBodyParserMiddleware())\n  .use(httpJsonBodyParserMiddleware())\n  .use(httpMultipartBodyParserMiddleware())\n  // End oneOf\n  .use(httpSecurityHeadersMiddleware())\n  .use(httpCorsMiddleware())\n  .use(httpContentEncodingMiddleware())\n  .use(\n    httpResponseSerializerMiddleware({\n      serializers: [\n        {\n          regex: /^application\\/json$/,\n          serializer: ({ body }) => JSON.stringify(body)\n        }\n      ],\n      default: 'application/json'\n    })\n  )\n  .use(httpPartialResponseMiddleware())\n  .use(httpErrorHandlerMiddleware())\n  .handler(httpRouterHandler(routes))\n")))}c.isMDXComponent=!0}}]);