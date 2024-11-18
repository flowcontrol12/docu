"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85571],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},168130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),o=["components"],s={description:"Retention Tab"},l=void 0,p={unversionedId:"User Guide/Configuration/General Settings/Retention",id:"version-2.0.27/User Guide/Configuration/General Settings/Retention",title:"Retention",description:"Retention Tab",source:"@site/versioned_docs/version-2.0.27/04-User Guide/Configuration/01-General Settings/03-Retention.md",sourceDirName:"04-User Guide/Configuration/01-General Settings",slug:"/User Guide/Configuration/General Settings/Retention",permalink:"/2.0.27/User Guide/Configuration/General Settings/Retention",draft:!1,tags:[],version:"2.0.27",lastUpdatedAt:1666174171,formattedLastUpdatedAt:"19 Oct 2022",sidebarPosition:3,frontMatter:{description:"Retention Tab"},sidebar:"docs",previous:{title:"Notifications",permalink:"/2.0.27/User Guide/Configuration/General Settings/Notifications"},next:{title:"Account Management",permalink:"/2.0.27/User Guide/Configuration/Account Management/"}},u={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>General Settings >",(0,i.kt)("strong",{parentName:"p"},"Retention"),"]"," can be used to manage data retention. "),(0,i.kt)("p",null,"In a system, the basic elements of data to be retained are a ",(0,i.kt)("strong",{parentName:"p"},"Data streams"),"."),(0,i.kt)("p",null,"The system has three states for storing data streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Hot (default)")," - maximum read and write speeds, high disk utilization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Warm")," - maximum speed read only ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cold")," - low read and write speed, low disk utilization"))))}m.isMDXComponent=!0}}]);