"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95734],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},750471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),o=["components"],l={id:"User Roles_",title:"User Roles",description:"User Roles Tab"},s=void 0,u={unversionedId:"User Guide/Configuration/Account Management/User Roles_",id:"version-2.0/User Guide/Configuration/Account Management/User Roles_",title:"User Roles",description:"User Roles Tab",source:"@site/versioned_docs/version-2.0/User Guide/Configuration/02-Account Management/02-User Roles_.md",sourceDirName:"User Guide/Configuration/02-Account Management",slug:"/User Guide/Configuration/Account Management/User Roles_",permalink:"/2.0/User Guide/Configuration/Account Management/User Roles_",draft:!1,tags:[],version:"2.0",lastUpdatedAt:1658849434,formattedLastUpdatedAt:"26 Jul 2022",sidebarPosition:2,frontMatter:{id:"User Roles_",title:"User Roles",description:"User Roles Tab"},sidebar:"docs",previous:{title:"Accounts",permalink:"/2.0/User Guide/Configuration/Account Management/Accounts"},next:{title:"Auth Providers",permalink:"/2.0/User Guide/Configuration/Account Management/Auth Providers"}},c={},p=[{value:"Privacy",id:"privacy",level:5}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>Account Management>",(0,i.kt)("strong",{parentName:"p"},"User Roles"),"]"," can be used to manage users roles in the System."),(0,i.kt)("p",null,"A role is a set of permissions for actions available within the system  (example: create a widget, delete a Rule, view a Notification Table...). A role can be assigned to one or several users. One user can have one or several roles. "),(0,i.kt)("p",null,"For roles, permissions can be assigned to selected endpoints that are available in the Access column. The user can grant the following access rights:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))),(0,i.kt)("p",null,"Example 1: To create a role that only views the list of Widgets, the role must have the View permission."),(0,i.kt)("p",null,"Example 2: To create a role that can edit Widgets, the role must have the Edit and View permissions"),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"privacy"},"Privacy"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges to the ",(0,i.kt)("strong",{parentName:"p"},"Widget"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Public permissions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete"),(0,i.kt)("li",{parentName:"ul"},"Edit"),(0,i.kt)("li",{parentName:"ul"},"Execute"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Execute")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"View"))))),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);