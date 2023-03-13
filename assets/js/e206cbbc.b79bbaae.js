"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),a=n(34334),o=n(54951),c=n(39960),i=n(13919),u=n(95999);const s="cardContainer_fWXF",l="cardTitle_rnsV",m="cardDescription_PWke";function d(e){var t=e.href,n=e.children;return r.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function p(e){var t=e.href,n=e.icon,o=e.title,c=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l),title:o},n," ",o),c&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:c},c))}function f(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,a=(0,i.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:a,title:n.label,description:null==c?void 0:c.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return r.createElement(v,e);var c=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},71094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),c=n(52991),i=n(54951),u=["components"],s={},l="Account Management",m={unversionedId:"User Guide/Configuration/Account Management/index",id:"version-2.2.1/User Guide/Configuration/Account Management/index",title:"Account Management",description:"",source:"@site/versioned_docs/version-2.2.1/04-User Guide/Configuration/02-Account Management/index.md",sourceDirName:"04-User Guide/Configuration/02-Account Management",slug:"/User Guide/Configuration/Account Management/",permalink:"/2.2.1/User Guide/Configuration/Account Management/",draft:!1,tags:[],version:"2.2.1",lastUpdatedAt:1678707866,formattedLastUpdatedAt:"13 Mar 2023",frontMatter:{},sidebar:"docs",previous:{title:"Backup and Restore",permalink:"/2.2.1/User Guide/Configuration/General Settings/Backup and Restore"},next:{title:"Accounts",permalink:"/2.2.1/User Guide/Configuration/Account Management/Accounts"}},d={},p=[],f={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account-management"},"Account Management"),(0,o.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);