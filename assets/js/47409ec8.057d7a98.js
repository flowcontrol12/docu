"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),a=r(34334),i=r(54951),o=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function p(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function f(e){var t=e.item,r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,a=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:a,title:r.label,description:null==o?void 0:o.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(g,e);var o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e}))})))}},47383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=r(52991),c=r(54951),l=["components"],s={},u="Alerts",m={unversionedId:"User Guide/Alerts/index",id:"version-2.1.0/User Guide/Alerts/index",title:"Alerts",description:"",source:"@site/versioned_docs/version-2.1.0/04-User Guide/Alerts/index.md",sourceDirName:"04-User Guide/Alerts",slug:"/User Guide/Alerts/",permalink:"/2.1.0/User Guide/Alerts/",draft:!1,tags:[],version:"2.1.0",lastUpdatedAt:1673276180,formattedLastUpdatedAt:"9 Jan 2023",frontMatter:{},sidebar:"docs",previous:{title:"Widgets",permalink:"/2.1.0/User Guide/Dashboards/Management/Widgets"},next:{title:"Alerts Table",permalink:"/2.1.0/User Guide/Alerts/Alerts Table"}},d={},p=[],f={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alerts"},"Alerts"),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);