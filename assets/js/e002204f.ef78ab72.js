"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39700],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(667294),a=r(386010),i=r(725495),l=r(239960),o=r(813919),c=r(595999);const s="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function u(e){var t=e.href,r=e.children;return n.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function d(e){var t=e.href,r=e.icon,i=e.title,l=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:i},r," ",i),l&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:l},l))}function f(e){var t,r=e.item,a=(0,i.Wl)(r);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,a=e.item,l=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(d,{href:a.href,icon:l,title:a.label,description:null!=(r=a.description)?r:null==c?void 0:c.description})}function E(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function x(e){var t=e.className,r=(0,i.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return n.createElement(x,e);var l=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},l.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(E,{item:e}))})))}},521291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),l=r(252991),o=r(725495),c=["components"],s={},m="Fields Examples",p={unversionedId:"Examples/Fields Examples/index",id:"version-2.2.3/Examples/Fields Examples/index",title:"Fields Examples",description:"",source:"@site/versioned_docs/version-2.2.3/06-Examples/Fields Examples/index.md",sourceDirName:"06-Examples/Fields Examples",slug:"/Examples/Fields Examples/",permalink:"/2.2.3/Examples/Fields Examples/",draft:!1,tags:[],version:"2.2.3",lastUpdatedAt:1686667651,formattedLastUpdatedAt:"13 Jun 2023",frontMatter:{},sidebar:"docs",previous:{title:"Example of Collector creation",permalink:"/2.2.3/Examples/Collector - creation example"},next:{title:"Example of field creation - bytes field",permalink:"/2.2.3/Examples/Fields Examples/Fields - creation example"}},u={},d=[],f={toc:d};function y(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fields-examples"},"Fields Examples"),(0,i.kt)(l.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);