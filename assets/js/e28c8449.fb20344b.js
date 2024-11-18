"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3826],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(o,".").concat(f)]||u[f]||p[f]||s;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(667294),a=r(386010),s=r(725495),i=r(239960),c=r(813919),o=r(595999);const l="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function u(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function f(e){var t=e.href,r=e.icon,s=e.title,i=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:s},r," ",s),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function d(e){var t,r=e.item,a=(0,s.Wl)(r);return a?n.createElement(f,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,a=e.item,i=(0,c.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(f,{href:a.href,icon:i,title:a.label,description:null!=(r=a.description)?r:null==o?void 0:o.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function E(e){var t=e.className,r=(0,s.jA)();return n.createElement(x,{items:r.items,className:t})}function x(e){var t=e.items,r=e.className;if(!t)return n.createElement(E,e);var i=(0,s.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e}))})))}},908670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var n=r(487462),a=r(263366),s=(r(667294),r(603905)),i=r(252991),c=r(725495),o=["components"],l={slug:"/Examples/Asset-Discovery"},m="Asset Discovery Examples",p={unversionedId:"Examples/Asset-Discovery-Examples/index",id:"version-3.0.0/Examples/Asset-Discovery-Examples/index",title:"Asset Discovery Examples",description:"",source:"@site/versioned_docs/version-3.0.0/06-Examples/00-Asset-Discovery-Examples/index.md",sourceDirName:"06-Examples/00-Asset-Discovery-Examples",slug:"/Examples/Asset-Discovery",permalink:"/3.0.0/Examples/Asset-Discovery",draft:!1,tags:[],version:"3.0.0",frontMatter:{slug:"/Examples/Asset-Discovery"},sidebar:"docs",previous:{title:"Examples",permalink:"/3.0.0/Examples/"},next:{title:"Asset Discovery - SQL Example",permalink:"/3.0.0/Examples/Asset-Discovery-SQL-Example"}},u={},f=[],d={toc:f};function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"asset-discovery-examples"},"Asset Discovery Examples"),(0,s.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);