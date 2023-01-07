"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1073],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),c=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:l,values:m,groupId:p,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:v}=(0,s.U)(),[k,N]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=p){const e=w[p];null!=e&&e!==k&&f.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==k&&(O(t),N(n),null!=p&&v(p,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},h)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:x},l,{className:(0,o.Z)("tabs__item",u,l?.className,{"tabs__item--active":k===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},7676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={title:"cloudwatch-metrics"},s=void 0,c={unversionedId:"middlewares/cloudwatch-metrics",id:"middlewares/cloudwatch-metrics",title:"cloudwatch-metrics",description:"This middleware hydrates lambda's context.metrics property with an instance of MetricLogger. This instance can be used to easily generate custom metrics from Lambda functions without requiring custom batching code, making blocking network requests or relying on 3rd party software.",source:"@site/docs/middlewares/cloudwatch-metrics.md",sourceDirName:"middlewares",slug:"/middlewares/cloudwatch-metrics",permalink:"/docs/middlewares/cloudwatch-metrics",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/cloudwatch-metrics.md",tags:[],version:"current",lastUpdatedAt:1673118429,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{title:"cloudwatch-metrics"},sidebar:"tutorialSidebar",previous:{title:"Third-party middlewares",permalink:"/docs/middlewares/third-party"},next:{title:"do-not-wait-for-empty-event-loop",permalink:"/docs/middlewares/do-not-wait-for-empty-event-loop"}},d={},u=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],m={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This middleware hydrates lambda's ",(0,r.kt)("inlineCode",{parentName:"p"},"context.metrics")," property with an instance of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/aws-embedded-metrics-node#metriclogger"},"MetricLogger"),". This instance can be used to easily generate custom metrics from Lambda functions without requiring custom batching code, making blocking network requests or relying on 3rd party software."),(0,r.kt)("p",null,"Metrics collected with this logger are then available for querying within ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html"},"AWS CloudWatch Log Insights")),(0,r.kt)("p",null,"You can explore all the MetricLogger APIs following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/aws-embedded-metrics-node"},"aws-embedded-metrics")," documentation."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"To install this middleware you can use NPM:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/cloudwatch-metrics\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/cloudwatch-metrics\n")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") (optional): Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"aws-embedded-metrics"),". Sets the CloudWatch ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace"},"namespace")," that extracted metrics should be published to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dimensions")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Record<String, String>[]"),") (optional): Defaults to",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "ServiceName": "myLambdaFunctionName" },\n  { "ServiceType": "AWS::Lambda::Function" },\n  { "LogGroupName": "logGroupNameUsedByMyLambda" }\n]\n')),"Explicitly override all dimensions. This will remove the default dimensions. You can provide an empty array to record all metrics without dimensions.")),(0,r.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const middy = require('@middy/core')\nconst cloudwatchMetrics = require('@middy/cloudwatch-metrics')\n\nconst handler = middy((event, context) => {\n  context.metrics.putMetric('ProcessingLatency', 100, 'Milliseconds')\n  context.metrics.setProperty(\n    'RequestId',\n    '422b1569-16f6-4a03-b8f0-fe3fd9b100f8'\n  )\n})\n\nhandler.use(\n  cloudwatchMetrics({\n    namespace: 'myAppliction',\n    dimensions: [{ Action: 'Buy' }]\n  })\n)\n")))}p.isMDXComponent=!0}}]);