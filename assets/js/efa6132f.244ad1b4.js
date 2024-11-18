"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9602],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},540695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),s=["components"],l={slug:"/User-Guide/Settings/Security/Users",addressMatch:"panel/security/users"},o="Users",u={unversionedId:"User-Guide/Settings/Security/Users/index",id:"User-Guide/Settings/Security/Users/index",title:"Users",description:"This menu [Settings > Security > Users] can be used to manage users in the system. After installing the system, You have one predefined account: admin.",source:"@site/docs/04-User-Guide/10-Settings/05-Security/01-Users/index.md",sourceDirName:"04-User-Guide/10-Settings/05-Security/01-Users",slug:"/User-Guide/Settings/Security/Users",permalink:"/User-Guide/Settings/Security/Users",draft:!1,tags:[],version:"current",frontMatter:{slug:"/User-Guide/Settings/Security/Users",addressMatch:"panel/security/users"},sidebar:"docs",previous:{title:"Security",permalink:"/User-Guide/Settings/Security"},next:{title:"Roles",permalink:"/User-Guide/Settings/Security/Roles"}},p={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"users"},"Users"),(0,i.kt)("p",null,"This menu ",(0,i.kt)("strong",{parentName:"p"},"[Settings > Security > Users]")," can be used to manage users in the system. After installing the system, You have one predefined account: ",(0,i.kt)("strong",{parentName:"p"},"admin"),". "),(0,i.kt)("p",null,"The list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Users"),"  is contained in a table which has the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")," - unique ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Role")," - the role assigned to a user that is configured in the menu ",(0,i.kt)("strong",{parentName:"li"},"[Settings > Security > Roles]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," status - active/inactive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"First name")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," first name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Last name")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," second name "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Actions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")," - edit an existing ",(0,i.kt)("inlineCode",{parentName:"li"},"User"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Change")," password - change ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," password  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")," - delete   ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," ")))),(0,i.kt)("p",null,"To add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"User account"),"  click ",(0,i.kt)("strong",{parentName:"p"},"New account")," button then fill out the New account form. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")," - unique ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Role")," - List of roles (",(0,i.kt)("strong",{parentName:"li"},"[Settings > Security > Roles]"),") created in the system that can be added to the ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," . Two roles are predefined in the system: ",(0,i.kt)("inlineCode",{parentName:"li"},"Administrator"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"User"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"First name")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," first name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Last name")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," second name "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active account switch")," - status switch, active/inactive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," password"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Confirm password "),"- confirm password")))}d.isMDXComponent=!0}}]);