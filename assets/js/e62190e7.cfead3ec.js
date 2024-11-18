"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48215],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(r),p=i,d=f["".concat(l,".").concat(p)]||f[p]||m[p]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(667294),i=r(386010),o=r(725495),c=r(239960),a=r(813919),l=r(595999);const u="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function f(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},r)}function p(e){var t=e.href,r=e.icon,o=e.title,c=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:c},c))}function d(e){var t,r=e.item,i=(0,o.Wl)(r);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,i=e.item,c=(0,a.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(p,{href:i.href,icon:c,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var c=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}},893027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var n=r(487462),i=r(263366),o=(r(667294),r(603905)),c=r(252991),a=r(725495),l=["components"],u={},s="Security",m={unversionedId:"User Guide/Configuration/Security/index",id:"version-2.0.29/User Guide/Configuration/Security/index",title:"Security",description:"",source:"@site/versioned_docs/version-2.0.29/04-User Guide/Configuration/06-Security/index.md",sourceDirName:"04-User Guide/Configuration/06-Security",slug:"/User Guide/Configuration/Security/",permalink:"/2.0.29/User Guide/Configuration/Security/",draft:!1,tags:[],version:"2.0.29",frontMatter:{},sidebar:"docs",previous:{title:"SFlow",permalink:"/2.0.29/User Guide/Configuration/NetFlow/SFlow"},next:{title:"Certificates",permalink:"/2.0.29/User Guide/Configuration/Security/Certificates"}},f={},p=[],d={toc:p};function y(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"security"},"Security"),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);