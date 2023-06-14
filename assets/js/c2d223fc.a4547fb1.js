"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1410],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(o,".").concat(f)]||u[f]||p[f]||c;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(67294),a=r(34334),c=r(54951),i=r(39960),l=r(13919),o=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function u(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function f(e){var t=e.href,r=e.icon,c=e.title,i=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:c},r," ",c),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function d(e){var t=e.item,r=(0,c.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,a=(0,l.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:a,title:r.label,description:null==i?void 0:i.description})}function E(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,c.jA)();return n.createElement(x,{items:r.items,className:t})}function x(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var i=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(E,{item:e}))})))}},85234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var n=r(83117),a=r(80102),c=(r(67294),r(3905)),i=r(52991),l=r(54951),o=["components"],s={},m="Rules Examples",p={unversionedId:"Examples/Rules Examples/index",id:"version-2.2.3/Examples/Rules Examples/index",title:"Rules Examples",description:"",source:"@site/versioned_docs/version-2.2.3/06-Examples/Rules Examples/index.md",sourceDirName:"06-Examples/Rules Examples",slug:"/Examples/Rules Examples/",permalink:"/2.2.3/Examples/Rules Examples/",draft:!1,tags:[],version:"2.2.3",lastUpdatedAt:1686667651,formattedLastUpdatedAt:"13 Jun 2023",frontMatter:{},sidebar:"docs",previous:{title:"Example of Metric creation - simple metric",permalink:"/2.2.3/Examples/Metrics Examples/Metrics - creation example"},next:{title:"Examples of alert rule creation - advanced way",permalink:"/2.2.3/Examples/Rules Examples/Alert rule from scratch"}},u={},f=[],d={toc:f};function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"rules-examples"},"Rules Examples"),(0,c.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);