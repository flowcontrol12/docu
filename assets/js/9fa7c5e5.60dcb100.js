"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={description:"Exporter Restrictions Tab"},c="Exporter Restrictions",p={unversionedId:"User Guide/Configuration/NetFlow/Exporter Restrictions",id:"version-2.4/User Guide/Configuration/NetFlow/Exporter Restrictions",title:"Exporter Restrictions",description:"Exporter Restrictions Tab",source:"@site/versioned_docs/version-2.4/04-User Guide/07-Configuration/05-NetFlow/04-Exporter Restrictions.md",sourceDirName:"04-User Guide/07-Configuration/05-NetFlow",slug:"/User Guide/Configuration/NetFlow/Exporter Restrictions",permalink:"/2.4/User Guide/Configuration/NetFlow/Exporter Restrictions",draft:!1,tags:[],version:"2.4",lastUpdatedAt:1700558829,formattedLastUpdatedAt:"21 Nov 2023",sidebarPosition:4,frontMatter:{description:"Exporter Restrictions Tab"},sidebar:"docs",previous:{title:"Forwarding",permalink:"/2.4/User Guide/Configuration/NetFlow/Forwarding"},next:{title:"Security",permalink:"/2.4/User Guide/Configuration/Security/"}},l={},u=[{value:"Parameters:",id:"parameters",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exporter-restrictions"},"Exporter Restrictions"),(0,i.kt)("p",null,"This menu ","[Configuration>NetFlow>",(0,i.kt)("strong",{parentName:"p"},"Exporter Restrictions"),"]"," can be used to configure NetFlow Exporter Restriction group functionality."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"After enabling the ",(0,i.kt)("u",null,(0,i.kt)("strong",{parentName:"p"},"Restricted"))," option, it is firmly not recommended to reconfigure this system's functionality and check the ",(0,i.kt)("u",null,(0,i.kt)("strong",{parentName:"p"},"All"))," option.")),(0,i.kt)("p",null,"The aim of the ",(0,i.kt)("strong",{parentName:"p"},"Exporter Restrictions")," configuration is to create groups restricting data download from streams to other data from specific sources."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"menu master",src:r(258).Z,width:"1059",height:"776"})),(0,i.kt)("h2",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unrestricted")," - the activation of this setting will prevent the ",(0,i.kt)("strong",{parentName:"p"},"Exporter Restrictions")," mechanism from working. It will not be taken into consideration by the processes in the Sycope system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Restricted")," - the activation of this setting will make the Sycope system restrict access only to the data from sources within the assigned groups during processing of the data from the stream."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Add group with access")," - after choosing ",(0,i.kt)("strong",{parentName:"p"},"Restricted"),", a button allowing for defining a group will appear. After clicking the button, the group name and the list of data sources assigned to this group must be provided."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"menu master",src:r(95700).Z,width:"659",height:"453"})),(0,i.kt)("p",null,'Groups created in this manner can be used while editing the User role in the "Data restrictions" section.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"menu master",src:r(14622).Z,width:"1323",height:"1149"})),(0,i.kt)("p",null,"The activation of the ",(0,i.kt)("strong",{parentName:"p"},"Restricted")," option and using groups in User roles may cause a decrease of efficiency of the Sycope system. All processes within the Sycope system downloading data from a given stream, e.g. those counting aggregations, will monitor and filter the data from the source while taking into consideration the group assigned to the User."))}m.isMDXComponent=!0},95700:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/exporter-restrictions-addgroup-c6c3d6b6401bf4507d798d8801a3807e.png"},258:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/exporter-restrictions-main-36996c6a4dfc66a0af9b7d2e993224f5.png"},14622:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/exporter-restrictions-user-group-4c24b313012db94b3f81e7ea3696bf4c.png"}}]);