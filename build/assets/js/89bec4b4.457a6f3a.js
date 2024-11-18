"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19834],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,p=f["".concat(l,".").concat(d)]||f[d]||m[d]||o;return r?n.createElement(p,a(a({ref:t},s),{},{components:r})):n.createElement(p,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(667294),i=r(386010),o=r(725495),a=r(239960),c=r(813919),l=r(595999);const u="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function f(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},r)}function d(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function p(e){var t,r=e.item,i=(0,o.Wl)(r);return i?n.createElement(d,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,i=e.item,a=(0,c.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(d,{href:i.href,icon:a,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}},675861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>d});var n=r(487462),i=r(263366),o=(r(667294),r(603905)),a=r(252991),c=r(725495),l=["components"],u={},s="Security",m={unversionedId:"User Guide/Configuration/Security/index",id:"version-2.0/User Guide/Configuration/Security/index",title:"Security",description:"",source:"@site/versioned_docs/version-2.0/User Guide/Configuration/06-Security/index.md",sourceDirName:"User Guide/Configuration/06-Security",slug:"/User Guide/Configuration/Security/",permalink:"/2.0/User Guide/Configuration/Security/",draft:!1,tags:[],version:"2.0",lastUpdatedAt:1658849434,formattedLastUpdatedAt:"26 Jul 2022",frontMatter:{},sidebar:"docs",previous:{title:"SFlow",permalink:"/2.0/User Guide/Configuration/NetFlow/SFlow"},next:{title:"Certificates",permalink:"/2.0/User Guide/Configuration/Security/Certificates"}},f={},d=[],p={toc:d};function y(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"security"},"Security"),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);