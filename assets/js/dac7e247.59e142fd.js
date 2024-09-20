"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74660],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(667294),a=r(386010),i=r(725495),c=r(239960),o=r(813919),s=r(595999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function p(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},r," ",i),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:c},c))}function f(e){var t,r=e.item,a=(0,i.Wl)(r);return a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function g(e){var t,r,a=e.item,c=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(p,{href:a.href,icon:c,title:a.label,description:null!=(r=a.description)?r:null==s?void 0:s.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var c=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e}))})))}},746481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),c=r(252991),o=r(725495),s=["components"],l={slug:"/User-Guide/Usage"},u="Usage",m={unversionedId:"User-Guide/Usage/index",id:"User-Guide/Usage/index",title:"Usage",description:"",source:"@site/docs/04-User-Guide/11-Usage/index.md",sourceDirName:"04-User-Guide/11-Usage",slug:"/User-Guide/Usage",permalink:"/User-Guide/Usage",draft:!1,tags:[],version:"current",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",frontMatter:{slug:"/User-Guide/Usage"},sidebar:"docs",previous:{title:"About",permalink:"/User-Guide/Settings/General/About"},next:{title:"Filters",permalink:"/User-Guide/Usage/Filters"}},d={},p=[],f={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)(c.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);