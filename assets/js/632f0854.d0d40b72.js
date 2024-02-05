"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9997],{5189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(5893),r=n(1151);const o={title:"Handle Timeouts",position:5},a=void 0,s={id:"writing-middlewares/timeouts",title:"Handle Timeouts",description:"When a lambda times out it throws an error that cannot be caught by middy. To work around this middy maintains an AbortController that can be signalled early to allow time to clean up and log the error properly.",source:"@site/docs/writing-middlewares/05-timeouts.md",sourceDirName:"writing-middlewares",slug:"/writing-middlewares/timeouts",permalink:"/docs/writing-middlewares/timeouts",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/writing-middlewares/05-timeouts.md",tags:[],version:"current",lastUpdatedAt:1707141990,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:5,frontMatter:{title:"Handle Timeouts",position:5},sidebar:"tutorialSidebar",previous:{title:"Internal Storage",permalink:"/docs/writing-middlewares/internal-storage"},next:{title:"More Examples",permalink:"/docs/writing-middlewares/more-examples"}},d={},l=[];function c(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["When a lambda times out it throws an error that cannot be caught by middy. To work around this middy maintains an ",(0,i.jsx)(t.code,{children:"AbortController"})," that can be signalled early to allow time to clean up and log the error properly."]}),"\n",(0,i.jsxs)(t.p,{children:["You can set ",(0,i.jsx)(t.code,{children:"timeoutEarlyInMillis"})," to 0 to disable this functionality. If you want to override during testing, mock the lambda context to set ",(0,i.jsx)(t.code,{children:"getRemainingTimeInMillis"})," to a function that returns a very large value (e.g. ",(0,i.jsx)(t.code,{children:"() => 99999"}),")."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\n\nconst lambdaHandler = (event, context, { signal }) => {\n  signal.onabort = () => {\n    // cancel events\n  }\n  // ...\n}\n\nexport const handler = middy({\n  timeoutEarlyInMillis: 50,\n  timeoutEarlyResponse: () => {\n    return {\n      statusCode: 408\n    }\n  }\n}).handler(lambdaHandler)\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(7294);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);