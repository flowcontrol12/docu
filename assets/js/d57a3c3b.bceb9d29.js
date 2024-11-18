"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70581],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},252991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(667294),i=n(386010),a=n(725495),o=n(239960),c=n(813919),s=n(595999);const u="cardContainer_fWXF",l="cardTitle_rnsV",p="cardDescription_PWke";function m(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},n)}function f(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",p),title:o},o))}function d(e){var t,n=e.item,i=(0,a.Wl)(n);return i?r.createElement(f,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function g(e){var t,n,i=e.item,o=(0,c.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,a.xz)(null!=(t=i.docId)?t:void 0);return r.createElement(f,{href:i.href,icon:o,title:i.label,description:null!=(n=i.description)?n:null==s?void 0:s.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,a.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return r.createElement(v,e);var o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},436431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var r=n(487462),i=n(263366),a=(n(667294),n(603905)),o=n(252991),c=n(725495),s=["components"],u={slug:"/User-Guide/Settings/Configuration/Mapping"},l="Mapping",p={unversionedId:"User-Guide/Settings/Configuration/Mapping/index",id:"User-Guide/Settings/Configuration/Mapping/index",title:"Mapping",description:"",source:"@site/docs/04-User-Guide/10-Settings/01-Configuration/01-Mapping/index.md",sourceDirName:"04-User-Guide/10-Settings/01-Configuration/01-Mapping",slug:"/User-Guide/Settings/Configuration/Mapping",permalink:"/User-Guide/Settings/Configuration/Mapping",draft:!1,tags:[],version:"current",frontMatter:{slug:"/User-Guide/Settings/Configuration/Mapping"},sidebar:"docs",previous:{title:"Quick Setup",permalink:"/User-Guide/Settings/Configuration/Quick-Setup"},next:{title:"Lookups",permalink:"/User-Guide/Settings/Configuration/Mapping/Lookups"}},m={},f=[],d={toc:f};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mapping"},"Mapping"),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);