"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),o=n(6550),s=n(1980),d=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,d]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=d[n].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},l,{className:(0,i.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},1468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162);const o={title:"http-content-negotiation"},s=void 0,d={unversionedId:"middlewares/http-content-negotiation",id:"middlewares/http-content-negotiation",title:"http-content-negotiation",description:"This middleware parses Accept-* headers and provides utilities for HTTP content negotiation (charset, encoding, language and media type).",source:"@site/docs/middlewares/http-content-negotiation.md",sourceDirName:"middlewares",slug:"/middlewares/http-content-negotiation",permalink:"/docs/middlewares/http-content-negotiation",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-content-negotiation.md",tags:[],version:"current",lastUpdatedAt:1690980129,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"http-content-negotiation"},sidebar:"tutorialSidebar",previous:{title:"http-content-encoding",permalink:"/docs/middlewares/http-content-encoding"},next:{title:"http-cors",permalink:"/docs/middlewares/http-cors"}},u={},p=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This middleware parses ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-*")," headers and provides utilities for ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-5.3"},"HTTP content negotiation")," (charset, encoding, language and media type)."),(0,r.kt)("p",null,"By default the middleware parses charsets (",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-Charset"),"), languages (",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-Language"),"), encodings (",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-Encoding"),") and media types (",(0,r.kt)("inlineCode",{parentName:"p"},"Accept"),") during the\n",(0,r.kt)("inlineCode",{parentName:"p"},"before")," phase and expands the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," object by adding the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preferredCharsets")," (",(0,r.kt)("inlineCode",{parentName:"li"},"array"),") - The list of charsets that can be safely used by the app (as the result of the negotiation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preferredCharset")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") - The preferred charset (as the result of the negotiation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preferredEncodings")," (",(0,r.kt)("inlineCode",{parentName:"li"},"array"),") - The list of encodings that can be safely used by the app (as the result of the negotiation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preferredEncoding")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") - The preferred encoding (as the result of the negotiation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preferredLanguages")," (",(0,r.kt)("inlineCode",{parentName:"li"},"array"),") - The list of languages that can be safely used by the app (as the result of the negotiation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preferredLanguage")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") - The preferred language (as the result of the negotiation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preferredMediaTypes")," (",(0,r.kt)("inlineCode",{parentName:"li"},"array"),") - The list of media types that can be safely used by the app (as the result of the negotiation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preferredMediaType")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") - The preferred media types (as the result of the negotiation)")),(0,r.kt)("p",null,"This middleware expects the headers in canonical format, so it should be attached after the ",(0,r.kt)("a",{parentName:"p",href:"#httpheadernormalizer"},(0,r.kt)("inlineCode",{parentName:"a"},"httpHeaderNormalizer"))," middleware.\nIt also can throw an HTTP exception, so it can be convenient to use it in combination with the ",(0,r.kt)("a",{parentName:"p",href:"#httperrorhandler"},(0,r.kt)("inlineCode",{parentName:"a"},"httpErrorHandler")),"."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"To install this middleware you can use NPM:"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-content-negotiation\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-content-negotiation\n")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseCharsets")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),") - Allows enabling/disabling the charsets parsing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"availableCharsets")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),") - Allows defining the list of charsets supported by the Lambda function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseEncodings")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),") - Allows enabling/disabling the encodings parsing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"availableEncodings")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),") - Allows defining the list of encodings supported by the Lambda function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseLanguages")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),") - Allows enabling/disabling the languages parsing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"availableLanguages")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),") - Allows defining the list of languages supported by the Lambda function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseMediaTypes")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),") - Allows enabling/disabling the media types parsing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"availableMediaTypes")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),") - Allows defining the list of media types supported by the Lambda function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"failOnMismatch")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),") - If set to true it will throw an HTTP ",(0,r.kt)("inlineCode",{parentName:"li"},"NotAcceptable")," (406) exception when the negotiation fails for one of the headers (e.g. none of the languages requested are supported by the app)")),(0,r.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpContentNegotiation from '@middy/http-content-negotiation'\nimport httpHeaderNormalizer from '@middy/http-header-normalizer'\nimport httpErrorHandler from '@middy/http-error-handler'\n\nexport const handler = middy((event, context) => {\n  let message, body\n\n  switch (event.preferredLanguage) {\n    case 'it-it':\n      message = 'Ciao Mondo'\n      break\n    case 'fr-fr':\n      message = 'Bonjour le monde'\n      break\n    default:\n      message = 'Hello world'\n  }\n\n  switch (event.preferredMediaType) {\n    case 'application/xml':\n      body = `<message>${message}</message>`\n      break\n    case 'application/yaml':\n      body = `---\\nmessage: ${message}`\n      break\n    case 'application/json':\n      body = JSON.stringify({ message })\n      break\n    default:\n      body = message\n  }\n\n  return {\n    statusCode: 200,\n    body\n  }\n})\n\nhandler\n  .use(httpHeaderNormalizer())\n  .use(httpContentNegotiation({\n    parseCharsets: false,\n    parseEncodings: false,\n    availableLanguages: ['it-it', 'fr-fr', 'en'],\n    availableMediaTypes: ['application/xml', 'application/yaml', 'application/json', 'text/plain']\n  }))\n  .use(httpErrorHandler())\n\n")))}h.isMDXComponent=!0}}]);