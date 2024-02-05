"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[2786],{3158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(5893),r=n(1151);const s={title:"AWS Relational Database Service (RDS)"},i=void 0,a={id:"integrations/RDS",title:"AWS Relational Database Service (RDS)",description:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.",source:"@site/docs/integrations/RDS.md",sourceDirName:"integrations",slug:"/integrations/RDS",permalink:"/docs/integrations/RDS",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/integrations/RDS.md",tags:[],version:"current",lastUpdatedAt:1707141990,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"AWS Relational Database Service (RDS)"},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/docs/integrations/intro"},next:{title:"Apollo Server",permalink:"/docs/integrations/apollo-server"}},c={},d=[];function l(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsx)(t.p,{children:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."})}),"\n",(0,o.jsxs)(t.p,{children:["First, you need to pass in a password. In order from most secure to least: ",(0,o.jsx)(t.code,{children:"RDS.Signer"}),", ",(0,o.jsx)(t.code,{children:"SecretsManager"}),", ",(0,o.jsx)(t.code,{children:"SSM"})," using SecureString.\n",(0,o.jsx)(t.code,{children:"SSM"})," can be considered equally secure to ",(0,o.jsx)(t.code,{children:"SecretsManager"})," if you have your own password rotation system."]}),"\n",(0,o.jsx)(t.p,{children:"Additionally, you will want to verify the RDS certificate and the domain of your connection. You can use this sudo code to get you started:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"import tls from 'tls'\n\n// https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html\nconst ca = `-----BEGIN CERTIFICATE----- ...` \n\nconnectionOptions = {\n  ...,\n  ssl: {\n    rejectUnauthorized: true,\n      ca,\n      checkServerIdentity: (host, cert) => {\n      const error = tls.checkServerIdentity(host, cert)\n      if (\n        error &&\n        !cert.subject.CN.endsWith('.rds.amazonaws.com')\n      ) {\n        return error\n      }\n    }\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Corresponding ",(0,o.jsx)(t.code,{children:"RDS.ParameterGroups"})," values should be set to enforce TLS connections."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);