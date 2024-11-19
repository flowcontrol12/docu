"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36430],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},252991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(667294),i=n(386010),a=n(725495),o=n(239960),l=n(813919),c=n(595999);const s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function p(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",d),title:o},o))}function f(e){var t,n=e.item,i=(0,a.Wl)(n);return i?r.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,i=e.item,o=(0,l.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(null!=(t=i.docId)?t:void 0);return r.createElement(p,{href:i.href,icon:o,title:i.label,description:null!=(n=i.description)?n:null==c?void 0:c.description})}function v(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,n=(0,a.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return r.createElement(g,e);var o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e}))})))}},128451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=n(487462),i=n(263366),a=(n(667294),n(603905)),o=n(252991),l=n(725495),c=["components"],s={description:"Installation Guide",slug:"/Installation-Guide"},u="Installation Guide",d={unversionedId:"Installation-Guide/index",id:"version-2.6/Installation-Guide/index",title:"Installation Guide",description:"Installation Guide",source:"@site/versioned_docs/version-2.6/03-Installation-Guide/index.md",sourceDirName:"03-Installation-Guide",slug:"/Installation-Guide",permalink:"/2.6/Installation-Guide",draft:!1,tags:[],version:"2.6",frontMatter:{description:"Installation Guide",slug:"/Installation-Guide"},sidebar:"docs",previous:{title:"User interface",permalink:"/2.6/User-Interface"},next:{title:"Deployment",permalink:"/2.6/Installation-Guide/Deployment"}},m={},p=[],f={toc:p};function y(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-guide"},"Installation Guide"),(0,a.kt)(o.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);