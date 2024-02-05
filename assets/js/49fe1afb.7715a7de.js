"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9076],{4451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(5893),n=r(1151);const o={title:"With TypeScript",position:7},a=void 0,s={id:"writing-middlewares/with-typescript",title:"With TypeScript",description:"here's an example of how you can write a custom middleware for a Lambda receiving events from API Gateway:",source:"@site/docs/writing-middlewares/07-with-typescript.md",sourceDirName:"writing-middlewares",slug:"/writing-middlewares/with-typescript",permalink:"/docs/writing-middlewares/with-typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/writing-middlewares/07-with-typescript.md",tags:[],version:"current",lastUpdatedAt:1707141990,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:7,frontMatter:{title:"With TypeScript",position:7},sidebar:"tutorialSidebar",previous:{title:"More Examples",permalink:"/docs/writing-middlewares/more-examples"},next:{title:"Routers",permalink:"/docs/category/routers"}},d={},c=[];function p(e){const t={code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"here's an example of how you can write a custom middleware for a Lambda receiving events from API Gateway:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"import middy from '@middy/core'\nimport { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'\n\nconst middleware = (): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {\n  const before: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = async (\n    request\n  ): Promise<APIGatewayProxyResult> => {\n    // Your middleware logic\n  }\n\n  const after: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = async (\n    request\n  ): Promise<void> => {\n    // Your middleware logic\n  }\n\n  return {\n    before,\n    after\n  }\n}\n\nexport default middleware\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": The Middy core team does not use TypeScript often and we can't certainly claim that we are TypeScript experts. We tried our best to come up\nwith type definitions that should give TypeScript users a good experience. There is certainly room for improvement, so we would be more than happy to receive contributions \ud83d\ude0a"]}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.code,{children:"devDependencies"})," for each middleware for list of dependencies that may be required with transpiling TypeScript."]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var i=r(7294);const n={},o=i.createContext(n);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);