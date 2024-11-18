"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5512],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(667294),a=r(386010),i=r(725495),o=r(239960),c=r(813919),s=r(595999);const l="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function p(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:o},o))}function f(e){var t,r=e.item,a=(0,i.Wl)(r);return a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,a=e.item,o=(0,c.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(p,{href:a.href,icon:o,title:a.label,description:null!=(r=a.description)?r:null==s?void 0:s.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,r=(0,i.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){var t=e.items,r=e.className;if(!t)return n.createElement(b,e);var o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}},820945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),o=r(252991),c=r(725495),s=["components"],l={},m="Management",u={unversionedId:"User Guide/Dashboards/Management/index",id:"version-2.2.3/User Guide/Dashboards/Management/index",title:"Management",description:"",source:"@site/versioned_docs/version-2.2.3/04-User Guide/01-Dashboards/03-Management/index.md",sourceDirName:"04-User Guide/01-Dashboards/03-Management",slug:"/User Guide/Dashboards/Management/",permalink:"/2.2.3/User Guide/Dashboards/Management/",draft:!1,tags:[],version:"2.2.3",frontMatter:{},sidebar:"docs",previous:{title:"Data streams",permalink:"/2.2.3/User Guide/Dashboards/Raw Data/Data_streams"},next:{title:"Dashboards",permalink:"/2.2.3/User Guide/Dashboards/Management/Dashboards_"}},d={},p=[],f={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"management"},"Management"),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);