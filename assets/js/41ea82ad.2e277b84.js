"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72532],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},252991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(667294),i=r(386010),a=r(725495),o=r(239960),c=r(813919),s=r(595999);const l="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function m(e){var t=e.href,r=e.icon,a=e.title,o=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",p),title:o},o))}function f(e){var t,r=e.item,i=(0,a.Wl)(r);return i?n.createElement(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function g(e){var t,r,i=e.item,o=(0,c.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,a.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(m,{href:i.href,icon:o,title:i.label,description:null!=(r=i.description)?r:null==s?void 0:s.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var o=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e}))})))}},388449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(487462),i=r(263366),a=(r(667294),r(603905)),o=r(252991),c=r(725495),s=["components"],l={slug:"/User-Guide/Settings/Support-and-Diagnostics"},u="Support & Diagnostics",p={unversionedId:"User-Guide/Settings/Support-and-Diagnostics/index",id:"version-3.0.0/User-Guide/Settings/Support-and-Diagnostics/index",title:"Support & Diagnostics",description:"",source:"@site/versioned_docs/version-3.0.0/04-User-Guide/10-Settings/06-Support-and-Diagnostics/index.md",sourceDirName:"04-User-Guide/10-Settings/06-Support-and-Diagnostics",slug:"/User-Guide/Settings/Support-and-Diagnostics",permalink:"/3.0.0/User-Guide/Settings/Support-and-Diagnostics",draft:!1,tags:[],version:"3.0.0",frontMatter:{slug:"/User-Guide/Settings/Support-and-Diagnostics"},sidebar:"docs",previous:{title:"Certificates",permalink:"/3.0.0/User-Guide/Settings/Security/Certificates"},next:{title:"System Settings",permalink:"/3.0.0/User-Guide/Settings/Support-and-Diagnostics/System-Settings"}},d={},m=[],f={toc:m};function g(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"support--diagnostics"},"Support & Diagnostics"),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);