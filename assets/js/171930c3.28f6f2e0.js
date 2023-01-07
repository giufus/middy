"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[2786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"AWS Relational Database Service (RDS)"},i=void 0,s={unversionedId:"integrations/RDS",id:"integrations/RDS",title:"AWS Relational Database Service (RDS)",description:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.",source:"@site/docs/integrations/RDS.md",sourceDirName:"integrations",slug:"/integrations/RDS",permalink:"/docs/integrations/RDS",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/integrations/RDS.md",tags:[],version:"current",lastUpdatedAt:1673118429,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{title:"AWS Relational Database Service (RDS)"},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/docs/integrations/intro"},next:{title:"Apollo Server",permalink:"/docs/integrations/apollo-server"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.")),(0,o.kt)("p",null,"First, you need to pass in a password. In order from most secure to least: ",(0,o.kt)("inlineCode",{parentName:"p"},"RDS.Signer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsManager"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SSM")," using SecureString.\n",(0,o.kt)("inlineCode",{parentName:"p"},"SSM")," can be considered equally secure to ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretsManager")," if you have your own password rotation system."),(0,o.kt)("p",null,"Additionally, you will want to verify the RDS certificate and the domain of your connection. You can use this sudo code to get you started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import tls from 'tls'\n\n// https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html\nconst ca = `-----BEGIN CERTIFICATE----- ...` \n\nconnectionOptions = {\n  ...,\n  ssl: {\n    rejectUnauthorized: true,\n      ca,\n      checkServerIdentity: (host, cert) => {\n      const error = tls.checkServerIdentity(host, cert)\n      if (\n        error &&\n        !cert.subject.CN.endsWith('.rds.amazonaws.com')\n      ) {\n        return error\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"RDS.ParameterGroups")," values should be set to enforce TLS connections."))}u.isMDXComponent=!0}}]);