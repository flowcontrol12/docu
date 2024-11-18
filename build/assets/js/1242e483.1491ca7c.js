"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4708],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||i;return r?n.createElement(p,a(a({ref:t},u),{},{components:r})):n.createElement(p,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(667294),o=r(386010),i=r(725495),a=r(239960),c=r(813919),l=r(595999);const s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function f(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},r)}function m(e){var t=e.href,r=e.icon,i=e.title,a=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:a},a))}function p(e){var t,r=e.item,o=(0,i.Wl)(r);return o?n.createElement(m,{href:o,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,o=e.item,a=(0,c.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=o.docId)?t:void 0);return n.createElement(m,{href:o.href,icon:a,title:o.label,description:null!=(r=o.description)?r:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,i.jA)();return n.createElement(w,{items:r.items,className:t})}function w(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}},454083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=r(487462),o=r(263366),i=(r(667294),r(603905)),a=r(252991),c=r(725495),l=["components"],s={},u="NetFlow",d={unversionedId:"User Guide/Configuration/NetFlow/index",id:"version-2.2.1/User Guide/Configuration/NetFlow/index",title:"NetFlow",description:"",source:"@site/versioned_docs/version-2.2.1/04-User Guide/Configuration/05-NetFlow/index.md",sourceDirName:"04-User Guide/Configuration/05-NetFlow",slug:"/User Guide/Configuration/NetFlow/",permalink:"/2.2.1/User Guide/Configuration/NetFlow/",draft:!1,tags:[],version:"2.2.1",lastUpdatedAt:1678707866,formattedLastUpdatedAt:"13 Mar 2023",frontMatter:{},sidebar:"docs",previous:{title:"Report schedule",permalink:"/2.2.1/User Guide/Configuration/Objects/Report schedule"},next:{title:"Netflow",permalink:"/2.2.1/User Guide/Configuration/NetFlow/Netflow"}},f={},m=[],p={toc:m};function y(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"netflow"},"NetFlow"),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);