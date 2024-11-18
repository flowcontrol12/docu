"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77778],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<l;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(667294),a=r(386010),l=r(725495),c=r(239960),i=r(813919),o=r(595999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function u(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function d(e){var t=e.href,r=e.icon,l=e.title,c=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:l},r," ",l),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:c},c))}function f(e){var t,r=e.item,a=(0,l.Wl)(r);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function E(e){var t,r,a=e.item,c=(0,i.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,l.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(d,{href:a.href,icon:c,title:a.label,description:null!=(r=a.description)?r:null==o?void 0:o.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(E,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function x(e){var t=e.className,r=(0,l.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return n.createElement(x,e);var c=(0,l.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e}))})))}},937596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>E,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(487462),a=r(263366),l=(r(667294),r(603905)),c=r(252991),i=r(725495),o=["components"],s={slug:"/Examples/Rules-Examples"},m="Rules Examples",p={unversionedId:"Examples/Rules Examples/index",id:"Examples/Rules Examples/index",title:"Rules Examples",description:"",source:"@site/docs/06-Examples/Rules Examples/index.md",sourceDirName:"06-Examples/Rules Examples",slug:"/Examples/Rules-Examples",permalink:"/Examples/Rules-Examples",draft:!1,tags:[],version:"current",lastUpdatedAt:1726649766,formattedLastUpdatedAt:"18 Sept 2024",frontMatter:{slug:"/Examples/Rules-Examples"},sidebar:"docs",previous:{title:"Example of Metric creation - simple metric",permalink:"/Examples/Metrics Examples/Metrics - creation example"},next:{title:"Examples of alert rule creation - advanced way",permalink:"/Examples/Rules-Examples/Advanced"}},u={},d=[],f={toc:d};function E(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rules-examples"},"Rules Examples"),(0,l.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);