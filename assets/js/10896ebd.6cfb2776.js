"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={description:"Accounts Tab"},s=void 0,c={unversionedId:"User Guide/Configuration/Account Management/Accounts",id:"version-2.0.27/User Guide/Configuration/Account Management/Accounts",title:"Accounts",description:"Accounts Tab",source:"@site/versioned_docs/version-2.0.27/04-User Guide/Configuration/02-Account Management/01-Accounts.md",sourceDirName:"04-User Guide/Configuration/02-Account Management",slug:"/User Guide/Configuration/Account Management/Accounts",permalink:"/2.0.27/User Guide/Configuration/Account Management/Accounts",draft:!1,tags:[],version:"2.0.27",lastUpdatedAt:1666174171,formattedLastUpdatedAt:"19 Oct 2022",sidebarPosition:1,frontMatter:{description:"Accounts Tab"},sidebar:"docs",previous:{title:"Account Management",permalink:"/2.0.27/User Guide/Configuration/Account Management/"},next:{title:"User Roles",permalink:"/2.0.27/User Guide/Configuration/Account Management/User Roles_"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>Accounts Management>",(0,i.kt)("strong",{parentName:"p"},"Accounts"),"]"," can be used to manage users in the system."),(0,i.kt)("p",null,"After installation there are two predefined accounts ",(0,i.kt)("strong",{parentName:"p"},"admin")," and ",(0,i.kt)("strong",{parentName:"p"},"user"),", both can be edited by the user."),(0,i.kt)("p",null,"The list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Users"),"  is contained in a table which has the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")," - unique ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Role")," - the role assigned to a user that is configured in the menu ","[Configuration>Account Management>",(0,i.kt)("strong",{parentName:"li"},"User Roles"),"]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," -  ",(0,i.kt)("inlineCode",{parentName:"li"},"User "),"  description "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authentication")," - method of authentication"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," status - active/inactive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"First name")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," first name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Last name")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," second name "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Email")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," email address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Actions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")," - edit an existing ",(0,i.kt)("inlineCode",{parentName:"li"},"User"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Change")," password - change ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," password  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")," - delete   ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," ")))),(0,i.kt)("p",null,"To add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"User account"),"  click ",(0,i.kt)("strong",{parentName:"p"},"New account")," button then fill out the New account form. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")," - unique ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Role")," - List of roles (Configuration>Account Management>",(0,i.kt)("strong",{parentName:"li"},"User Roles"),") created in the system that can be added to the ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"First name")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," first name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Last name")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," second name "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Email")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," email address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active account switch")," - status switch, active/inactive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," -  ",(0,i.kt)("inlineCode",{parentName:"li"},"User "),"  description "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"User ")," password"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Confirm password "),"- confirm password")))}d.isMDXComponent=!0}}]);