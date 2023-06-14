"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],p={description:"Exporter Groups Tab"},s=void 0,l={unversionedId:"User Guide/Configuration/NetFlow/Exporter Groups",id:"version-2.2.3/User Guide/Configuration/NetFlow/Exporter Groups",title:"Exporter Groups",description:"Exporter Groups Tab",source:"@site/versioned_docs/version-2.2.3/04-User Guide/Configuration/05-NetFlow/04-Exporter Groups.md",sourceDirName:"04-User Guide/Configuration/05-NetFlow",slug:"/User Guide/Configuration/NetFlow/Exporter Groups",permalink:"/2.2.3/User Guide/Configuration/NetFlow/Exporter Groups",draft:!1,tags:[],version:"2.2.3",lastUpdatedAt:1686667651,formattedLastUpdatedAt:"13 Jun 2023",sidebarPosition:4,frontMatter:{description:"Exporter Groups Tab"},sidebar:"docs",previous:{title:"Forwarding",permalink:"/2.2.3/User Guide/Configuration/NetFlow/Forwarding"},next:{title:"Security",permalink:"/2.2.3/User Guide/Configuration/Security/"}},u={},c=[],d={toc:c};function f(e){var t=e.components,p=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This menu ","[Configuration>NetFlow>",(0,a.kt)("strong",{parentName:"p"},"Exporter Groups"),"]"," can be used to configure the functionality to give access to data at the single exporter level."),(0,a.kt)("p",null,"To assign privileges at the exporter level or exporter group level, the ",(0,a.kt)("strong",{parentName:"p"},"Restricted")," option must be selected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230103110144026",src:r(26706).Z,width:"604",height:"165"})),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"After enabling the ",(0,a.kt)("u",null,(0,a.kt)("strong",{parentName:"p"},"Restricted"))," option, it is firmly not recommended to reconfigure this system's functionality and check the ",(0,a.kt)("u",null,(0,a.kt)("strong",{parentName:"p"},"All"))," option.")),(0,a.kt)("p",null,"To add a new exporter group, click the ",(0,a.kt)("strong",{parentName:"p"},"New exporter group")," button, enter a Name, and select exporters from the ",(0,a.kt)("strong",{parentName:"p"},"Allowed Exporters")," list."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230103110845695",src:r(45950).Z,width:"480",height:"380"})),(0,a.kt)("p",null,"After saving the group with the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button, the new group will appear in the table."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230103110632713",src:r(93021).Z,width:"1051",height:"222"})))}f.isMDXComponent=!0},26706:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20230103110144026-44f58043a8f3cbec913aa861396ee57d.png"},93021:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20230103110632713-e331024b21451d8e294b275f023ad6d1.png"},45950:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20230103110845695-802b07789a8a3e879aae9da2f6bcfafb.png"}}]);