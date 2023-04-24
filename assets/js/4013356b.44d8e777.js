"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={description:"SNMP Tab"},p=void 0,u={unversionedId:"User Guide/Configuration/Integrations/SNMP",id:"version-2.0/User Guide/Configuration/Integrations/SNMP",title:"SNMP",description:"SNMP Tab",source:"@site/versioned_docs/version-2.0/User Guide/Configuration/07-Integrations/02-SNMP.md",sourceDirName:"User Guide/Configuration/07-Integrations",slug:"/User Guide/Configuration/Integrations/SNMP",permalink:"/2.0/User Guide/Configuration/Integrations/SNMP",draft:!1,tags:[],version:"2.0",lastUpdatedAt:1658849434,formattedLastUpdatedAt:"26 Jul 2022",sidebarPosition:2,frontMatter:{description:"SNMP Tab"},sidebar:"version-2.0/docs",previous:{title:"NTP",permalink:"/2.0/User Guide/Configuration/Integrations/NTP"},next:{title:"SMTP",permalink:"/2.0/User Guide/Configuration/Integrations/SMTP"}},l={},c=[],f={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>Integrations>",(0,i.kt)("strong",{parentName:"p"},"SNMP"),"]"," can be used to configure SNMP protocol parameters."),(0,i.kt)("p",null,"In this menu there are the following components:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SNMP switch")," - to enable or disable the SNMP server."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Client subnet")," section where you can configure SNMP clients."),(0,i.kt)("p",null,"\u200b\t",(0,i.kt)("strong",{parentName:"p"},"Address with Netmask"),"  - client IP address witch netmask "),(0,i.kt)("p",null,"\u200b\t",(0,i.kt)("strong",{parentName:"p"},"Community String")," - SNMP community String"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Save button")," - only after pressing this key the configuration will be saved."),(0,i.kt)("p",null,"You can add multiple SNMP clients by pressing the plus key in the upper right corner of the ",(0,i.kt)("strong",{parentName:"p"},"Client subnet")," section."))}d.isMDXComponent=!0}}]);