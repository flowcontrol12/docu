"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21565],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,f=d["".concat(a,".").concat(p)]||d[p]||m[p]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(667294),i=r(386010),s=r(725495),o=r(239960),c=r(813919),a=r(595999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function p(e){var t=e.href,r=e.icon,s=e.title,o=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:s},r," ",s),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:o},o))}function f(e){var t,r=e.item,i=(0,s.Wl)(r);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,i=e.item,o=(0,c.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(p,{href:i.href,icon:o,title:i.label,description:null!=(r=i.description)?r:null==a?void 0:a.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,r=(0,s.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(g,e);var o=(0,s.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e}))})))}},130283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=r(487462),i=r(263366),s=(r(667294),r(603905)),o=r(252991),c=r(725495),a=["components"],l={slug:"/User-Guide/Settings/IT-Asset-Discovery"},u="IT Asset Discovery",m={unversionedId:"User-Guide/Settings/IT-Asset-Discovery/index",id:"version-3.0.0/User-Guide/Settings/IT-Asset-Discovery/index",title:"IT Asset Discovery",description:"",source:"@site/versioned_docs/version-3.0.0/04-User-Guide/10-Settings/02-IT-Asset-Discovery/index.md",sourceDirName:"04-User-Guide/10-Settings/02-IT-Asset-Discovery",slug:"/User-Guide/Settings/IT-Asset-Discovery",permalink:"/3.0.0/User-Guide/Settings/IT-Asset-Discovery",draft:!1,tags:[],version:"3.0.0",frontMatter:{slug:"/User-Guide/Settings/IT-Asset-Discovery"},sidebar:"docs",previous:{title:"User Indexes",permalink:"/3.0.0/User-Guide/Settings/Configuration/Objects/User-Indexes"},next:{title:"Asset Discovery Settings",permalink:"/3.0.0/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings"}},d={},p=[],f={toc:p};function y(e){var t=e.components,r=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"it-asset-discovery"},"IT Asset Discovery"),(0,s.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);