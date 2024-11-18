"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62655],{603905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>m});var r=s(667294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(s),m=n,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return s?r.createElement(y,a(a({ref:t},p),{},{components:s})):r.createElement(y,a({ref:t},p))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var c=2;c<i;c++)a[c]=s[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}d.displayName="MDXCreateElement"},814281:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=s(487462),n=s(263366),i=(s(667294),s(603905)),a=["components"],o={slug:"/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings",addressMatch:"panel/inventory/settings"},l="Asset Discovery Settings",c={unversionedId:"User-Guide/Settings/IT-Asset-Discovery/Settings/index",id:"version-3.0.0/User-Guide/Settings/IT-Asset-Discovery/Settings/index",title:"Asset Discovery Settings",description:"The [Settings > IT Asset Discovery > Settings] menu can be used to manage global whitelists and blacklists. User can define lists to include or exclude subnets and IP addresses from the inventory in Asset Discovery. Both public and private subnets are supported.",source:"@site/versioned_docs/version-3.0.0/04-User-Guide/10-Settings/02-IT-Asset-Discovery/00-Settings/index.md",sourceDirName:"04-User-Guide/10-Settings/02-IT-Asset-Discovery/00-Settings",slug:"/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings",permalink:"/3.0.0/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings",draft:!1,tags:[],version:"3.0.0",frontMatter:{slug:"/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings",addressMatch:"panel/inventory/settings"},sidebar:"docs",previous:{title:"IT Asset Discovery",permalink:"/3.0.0/User-Guide/Settings/IT-Asset-Discovery"},next:{title:"Traffic Rule Profiles",permalink:"/3.0.0/User-Guide/Settings/IT-Asset-Discovery/Traffic-Rule-Profiles"}},p={},u=[{value:"Examples",id:"examples",level:2}],d={toc:u};function m(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"asset-discovery-settings"},"Asset Discovery Settings"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"[Settings > IT Asset Discovery > Settings]"))," menu can be used to manage global whitelists and blacklists. User can define lists to include or exclude subnets and IP addresses from the inventory in Asset Discovery. Both public and private subnets are supported. "),(0,i.kt)("p",null,"The following combinations are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"\u201cany\u201d")," keyword for including all discovered addresses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Subnets with a ",(0,i.kt)("strong",{parentName:"p"},"specific CIDR"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"individual IP addresses")," by using CIDR /32 "))),(0,i.kt)("p",null,"Multiple entries are supported with the usage of spaces, tabs, commas, semicolons or newlines. User can also paste multiple entries from external sources such as text files or Excel spreadsheets. "),(0,i.kt)("p",null,"If a user requires all addresses and subnets to be visible in Asset Discovery, the best practice is to use ",(0,i.kt)("strong",{parentName:"p"},"\u201cany\u201d")," in the Whitelist field. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Whitelist Any",src:s(220654).Z,width:"749",height:"459"})),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To check useful examples from Asset Discovery, go to ",(0,i.kt)("a",{parentName:"p",href:"/Examples/Asset-Discovery"},"Asset Discovery Examples")," section.")))}m.isMDXComponent=!0},220654:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/any-4a13134cafeca7e1f42a2dad6d98fea9.png"}}]);