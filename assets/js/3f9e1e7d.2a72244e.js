"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78329],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,d=f["".concat(u,".").concat(p)]||f[p]||m[p]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},252991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(667294),a=n(386010),i=n(725495),o=n(239960),c=n(813919),u=n(595999);const l="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function f(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},n)}function p(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function d(e){var t,n=e.item,a=(0,i.Wl)(n);return a?r.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function g(e){var t,n,a=e.item,o=(0,c.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,i.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(p,{href:a.href,icon:o,title:a.label,description:null!=(n=a.description)?n:null==u?void 0:u.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,i.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return r.createElement(v,e);var o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},641421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),o=n(252991),c=n(725495),u=["components"],l={},s="Account Management",m={unversionedId:"User Guide/Configuration/Account Management/index",id:"version-2.0/User Guide/Configuration/Account Management/index",title:"Account Management",description:"",source:"@site/versioned_docs/version-2.0/User Guide/Configuration/02-Account Management/index.md",sourceDirName:"User Guide/Configuration/02-Account Management",slug:"/User Guide/Configuration/Account Management/",permalink:"/2.0/User Guide/Configuration/Account Management/",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Retention",permalink:"/2.0/User Guide/Configuration/General Settings/Retention"},next:{title:"Accounts",permalink:"/2.0/User Guide/Configuration/Account Management/Accounts"}},f={},p=[],d={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"account-management"},"Account Management"),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);