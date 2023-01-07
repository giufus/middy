"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,y=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={title:"Handle Timeouts",position:5},i=void 0,l={unversionedId:"writing-middlewares/timeouts",id:"writing-middlewares/timeouts",title:"Handle Timeouts",description:"When a lambda times out it throws an error that cannot be caught by middy. To work around this middy maintains an AbortController that can be signalled early to allow time to clean up and log the error properly.",source:"@site/docs/writing-middlewares/05-timeouts.md",sourceDirName:"writing-middlewares",slug:"/writing-middlewares/timeouts",permalink:"/docs/writing-middlewares/timeouts",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/writing-middlewares/05-timeouts.md",tags:[],version:"current",lastUpdatedAt:1673118429,formattedLastUpdatedAt:"Jan 7, 2023",sidebarPosition:5,frontMatter:{title:"Handle Timeouts",position:5},sidebar:"tutorialSidebar",previous:{title:"Internal Storage",permalink:"/docs/writing-middlewares/internal-storage"},next:{title:"More Examples",permalink:"/docs/writing-middlewares/more-examples"}},s={},d=[],c={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a lambda times out it throws an error that cannot be caught by middy. To work around this middy maintains an ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortController")," that can be signalled early to allow time to clean up and log the error properly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\n\nconst lambdaHandler = (event, context, {signal}) => {\n  signal.onabort = () => {\n    // cancel events\n  }\n  // ... \n}\n\nexport const handler = middy(lambdaHandler, {\n  timeoutEarlyInMillis: 50,\n  timeoutEarlyResponse: () => {\n    return {\n      statusCode: 408\n    }\n  }\n})\n")))}m.isMDXComponent=!0}}]);