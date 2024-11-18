"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),i=r(86010),a=r(25495),o=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function d(e){var t=e.href,r=e.icon,a=e.title,o=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",p),title:o},o))}function f(e){var t,r=e.item,i=(0,a.Wl)(r);return i?n.createElement(d,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function g(e){var t,r,i=e.item,o=(0,c.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(d,{href:i.href,icon:o,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,a.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var o=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e}))})))}},85708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=r(52991),c=r(25495),l=["components"],s={},u="Mapping",p={unversionedId:"User Guide/Configuration/Mapping/index",id:"version-2.3/User Guide/Configuration/Mapping/index",title:"Mapping",description:"",source:"@site/versioned_docs/version-2.3/04-User Guide/Configuration/03-Mapping/index.md",sourceDirName:"04-User Guide/Configuration/03-Mapping",slug:"/User Guide/Configuration/Mapping/",permalink:"/2.3/User Guide/Configuration/Mapping/",draft:!1,tags:[],version:"2.3",lastUpdatedAt:1695227583,formattedLastUpdatedAt:"20 Sept 2023",frontMatter:{},sidebar:"docs",previous:{title:"Auth Providers",permalink:"/2.3/User Guide/Configuration/Account Management/Auth Providers"},next:{title:"Lookups",permalink:"/2.3/User Guide/Configuration/Mapping/Lookups"}},m={},d=[],f={toc:d};function g(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mapping"},"Mapping"),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);