"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8524],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,p=d["".concat(s,".").concat(f)]||d[f]||m[f]||o;return r?n.createElement(p,a(a({ref:t},u),{},{components:r})):n.createElement(p,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),i=r(34334),o=r(54951),a=r(39960),c=r(13919),s=r(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function f(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function p(e){var t=e.item,r=(0,o.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,r=e.item,i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:i,title:r.label,description:null==a?void 0:a.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e}))})))}},87020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>f});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=r(52991),c=r(54951),s=["components"],l={},u="Integrations",m={unversionedId:"User Guide/Configuration/Integrations/index",id:"version-2.0.27/User Guide/Configuration/Integrations/index",title:"Integrations",description:"",source:"@site/versioned_docs/version-2.0.27/04-User Guide/Configuration/07-Integrations/index.md",sourceDirName:"04-User Guide/Configuration/07-Integrations",slug:"/User Guide/Configuration/Integrations/",permalink:"/2.0.27/User Guide/Configuration/Integrations/",draft:!1,tags:[],version:"2.0.27",lastUpdatedAt:1666174171,formattedLastUpdatedAt:"19 Oct 2022",frontMatter:{},sidebar:"docs",previous:{title:"Audit Log",permalink:"/2.0.27/User Guide/Configuration/Security/Audit Log"},next:{title:"NTP",permalink:"/2.0.27/User Guide/Configuration/Integrations/NTP"}},d={},f=[],p={toc:f};function g(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrations"},"Integrations"),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);