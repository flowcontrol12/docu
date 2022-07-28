"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={description:"SNMP Tab"},u=void 0,p={unversionedId:"User Guide/Configuration/Integrations/SNMP",id:"User Guide/Configuration/Integrations/SNMP",title:"SNMP",description:"SNMP Tab",source:"@site/docs/User Guide/Configuration/07-Integrations/02-SNMP.md",sourceDirName:"User Guide/Configuration/07-Integrations",slug:"/User Guide/Configuration/Integrations/SNMP",permalink:"/User Guide/Configuration/Integrations/SNMP",draft:!1,tags:[],version:"current",lastUpdatedAt:1654877634,formattedLastUpdatedAt:"10 Jun 2022",sidebarPosition:2,frontMatter:{description:"SNMP Tab"},sidebar:"docs",previous:{title:"NTP",permalink:"/User Guide/Configuration/Integrations/NTP"},next:{title:"SMTP",permalink:"/User Guide/Configuration/Integrations/SMTP"}},c={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>Integrations>",(0,i.kt)("strong",{parentName:"p"},"SNMP"),"]"," can be used to configure SNMP protocol parameters."),(0,i.kt)("p",null,"In this menu there are the following components:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SNMP switch")," - to enable or disable the SNMP server."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Client subnet")," section where you can configure SNMP clients."),(0,i.kt)("p",null,"\u200b\t",(0,i.kt)("strong",{parentName:"p"},"Address with Netmask"),"  - client IP address witch netmask "),(0,i.kt)("p",null,"\u200b\t",(0,i.kt)("strong",{parentName:"p"},"Community String")," - SNMP community String"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Save button")," - only after pressing this key the configuration will be saved."),(0,i.kt)("p",null,"You can add multiple SNMP clients by pressing the plus key in the upper right corner of the ",(0,i.kt)("strong",{parentName:"p"},"Client subnet")," section."))}d.isMDXComponent=!0}}]);