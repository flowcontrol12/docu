"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),a=r(6010),i=r(8425),o=r(9960),c=r(3919),l=r(5999);const u="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function d(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},r)}function f(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:o},o))}function m(e){var t=e.item,r=(0,i.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,a=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:a,title:r.label,description:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,a.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{key:t,item:e}))})))}},597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(2991),c=r(8425),l=["components"],u={},s="Update",p={unversionedId:"User Guide/Configuration/Update/index",id:"User Guide/Configuration/Update/index",title:"Update",description:"",source:"@site/docs/User Guide/Configuration/08-Update/index.md",sourceDirName:"User Guide/Configuration/08-Update",slug:"/User Guide/Configuration/Update/",permalink:"/User Guide/Configuration/Update/",draft:!1,tags:[],version:"current",lastUpdatedAt:1654861588,formattedLastUpdatedAt:"10/06/2022",frontMatter:{},sidebar:"docs",previous:{title:"External Destination",permalink:"/User Guide/Configuration/Integrations/External Destination"},next:{title:"Update",permalink:"/User Guide/Configuration/Update/Update_"}},d={},f=[],m={toc:f};function y(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"update"},"Update"),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);