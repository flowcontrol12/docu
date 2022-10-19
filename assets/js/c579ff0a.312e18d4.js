"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,p=f["".concat(u,".").concat(d)]||f[d]||m[d]||o;return n?r.createElement(p,i(i({ref:t},s),{},{components:n})):r.createElement(p,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),a=n(34334),o=n(54951),i=n(39960),c=n(13919),u=n(95999);const l="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function f(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},n)}function d(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:i},i))}function p(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,a=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(d,{href:n.href,icon:a,title:n.label,description:null==i?void 0:i.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return r.createElement(v,e);var i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},20885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(52991),c=n(54951),u=["components"],l={},s="Account Management",m={unversionedId:"User Guide/Configuration/Account Management/index",id:"version-2.0.27/User Guide/Configuration/Account Management/index",title:"Account Management",description:"",source:"@site/versioned_docs/version-2.0.27/04-User Guide/Configuration/02-Account Management/index.md",sourceDirName:"04-User Guide/Configuration/02-Account Management",slug:"/User Guide/Configuration/Account Management/",permalink:"/2.0.27/User Guide/Configuration/Account Management/",draft:!1,tags:[],version:"2.0.27",lastUpdatedAt:1666174171,formattedLastUpdatedAt:"19 Oct 2022",frontMatter:{},sidebar:"docs",previous:{title:"Retention",permalink:"/2.0.27/User Guide/Configuration/General Settings/Retention"},next:{title:"Accounts",permalink:"/2.0.27/User Guide/Configuration/Account Management/Accounts"}},f={},d=[],p={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account-management"},"Account Management"),(0,o.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);