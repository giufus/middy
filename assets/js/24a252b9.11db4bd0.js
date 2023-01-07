"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:l,values:c,groupId:m,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,i.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,s.U)(),[w,O]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==w&&b.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=N.indexOf(t),r=b[n].value;r!==w&&(T(t),O(r),null!=m&&k(m,String(r)))},x=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},g)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:x,onClick:j},l,{className:(0,o.Z)("tabs__item",d,l?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},5796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={title:"input-output-logger"},s=void 0,u={unversionedId:"middlewares/input-output-logger",id:"middlewares/input-output-logger",title:"input-output-logger",description:"Logs the incoming request (input) and the response (output).",source:"@site/docs/middlewares/input-output-logger.md",sourceDirName:"middlewares",slug:"/middlewares/input-output-logger",permalink:"/docs/middlewares/input-output-logger",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/input-output-logger.md",tags:[],version:"current",lastUpdatedAt:1673118429,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{title:"input-output-logger"},sidebar:"tutorialSidebar",previous:{title:"http-urlencode-path-parser",permalink:"/docs/middlewares/http-urlencode-path-parser"},next:{title:"rds-signer",permalink:"/docs/middlewares/rds-signer"}},p={},d=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Logs the incoming request (input) and the response (output)."),(0,a.kt)("p",null,"By default, the logging operate by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," function. You can pass as a parameter a custom logger with additional logic if you need. It can be useful if you want to process the log by doing a http call or anything else."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"To install this middleware you can use NPM:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/input-output-logger\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/input-output-logger\n")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logger")," function (default ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log"),"): logging function that accepts an object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"awsContext")," boolean (default ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"): Include ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html"},"AWS Lambda context object")," to the logger"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"omitPaths")," string[] (default ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"): property accepts an array of paths that will be used to remove particular fields import the logged objects. This could serve as a simple way to redact sensitive data from logs (default []).")),(0,a.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport inputOutputLogger from '@middy/input-output-logger'\n\nconst handler = middy((event, context) => {\n  const response = {\n    statusCode: 200,\n    headers: {},\n    body: JSON.stringify({ message: 'hello world' })\n  };\n  return response\n})\n\nhandler\n  .use(inputOutputLogger())\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport inputOutputLogger from '@middy/input-output-logger'\nimport pino from 'pino'\n\nconst logger = pino()\n\nconst handler = middy((event, context) => {\n  // ...\n  return response\n})\n\nhandler\n  .use(inputOutputLogger({\n    logger: (request) => {\n      const child = logger.child(request.context)\n      child.info(request.event ?? request.response)\n    },\n    awsContext: true\n  }))\n")))}m.isMDXComponent=!0}}]);