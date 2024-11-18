"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78060],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(667294),i=r(386010),c=r(725495),a=r(239960),o=r(813919),s=r(595999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function p(e){var t=e.href,r=e.icon,c=e.title,a=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function f(e){var t,r=e.item,i=(0,c.Wl)(r);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,i=e.item,a=(0,o.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,c.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(p,{href:i.href,icon:a,title:i.label,description:null!=(r=i.description)?r:null==s?void 0:s.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,c.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}},800852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=r(487462),i=r(263366),c=(r(667294),r(603905)),a=r(252991),o=r(725495),s=["components"],l={slug:"/User-Guide/Settings/Security"},u="Security",m={unversionedId:"User-Guide/Settings/Security/index",id:"version-3.0.0/User-Guide/Settings/Security/index",title:"Security",description:"",source:"@site/versioned_docs/version-3.0.0/04-User-Guide/10-Settings/05-Security/index.md",sourceDirName:"04-User-Guide/10-Settings/05-Security",slug:"/User-Guide/Settings/Security",permalink:"/3.0.0/User-Guide/Settings/Security",draft:!1,tags:[],version:"3.0.0",frontMatter:{slug:"/User-Guide/Settings/Security"},sidebar:"docs",previous:{title:"Forwarding",permalink:"/3.0.0/User-Guide/Settings/NetFlow/Forwarding"},next:{title:"Users",permalink:"/3.0.0/User-Guide/Settings/Security/Users"}},d={},p=[],f={toc:p};function y(e){var t=e.components,r=(0,i.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"security"},"Security"),(0,c.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);