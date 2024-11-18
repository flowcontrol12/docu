"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83794],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||g[u]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},447724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),s=["components"],o={slug:"/User-Guide/Settings/General/Integrations/NTP",addressMatch:"panel/integrations/ntp"},l="NTP",c={unversionedId:"User-Guide/Settings/General/Integrations/NTP",id:"User-Guide/Settings/General/Integrations/NTP",title:"NTP",description:"In the [Settings > General > Integrations > NTP] menu, the System time settings are placed.",source:"@site/docs/04-User-Guide/10-Settings/07-General/01-Integrations/01-NTP.md",sourceDirName:"04-User-Guide/10-Settings/07-General/01-Integrations",slug:"/User-Guide/Settings/General/Integrations/NTP",permalink:"/User-Guide/Settings/General/Integrations/NTP",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/User-Guide/Settings/General/Integrations/NTP",addressMatch:"panel/integrations/ntp"},sidebar:"docs",previous:{title:"Integrations",permalink:"/User-Guide/Settings/General/Integrations"},next:{title:"SNMP",permalink:"/User-Guide/Settings/General/Integrations/SNMP"}},p={},g=[{value:"Use local time",id:"use-local-time",level:2},{value:"<strong>Synchronize to an NTP server</strong>",id:"synchronize-to-an-ntp-server",level:2}],m={toc:g};function u(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ntp"},"NTP"),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"[Settings > General > Integrations > NTP]")," menu, the System time settings are placed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20231114105503988",src:n(195378).Z,width:"1534",height:"1071"})),(0,i.kt)("p",null,"We can choose two ways to set the time in the system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use local time")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Synchronize to an NTP server"))),(0,i.kt)("h2",{id:"use-local-time"},"Use local time"),(0,i.kt)("p",null,"This option allows you to manually enter the date, time and time zone. To manually set the time parameters, use the Change server time button. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20231114110805998",src:n(629420).Z,width:"1802",height:"206"})),(0,i.kt)("p",null,"In the pop-up window, enter the ",(0,i.kt)("strong",{parentName:"p"},"Time Zone")," and current Time respectively then ",(0,i.kt)("strong",{parentName:"p"},"Save")," the setting."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20231114110842294",src:n(260163).Z,width:"634",height:"268"})),(0,i.kt)("h2",{id:"synchronize-to-an-ntp-server"},(0,i.kt)("strong",{parentName:"h2"},"Synchronize to an NTP server")),(0,i.kt)("p",null,"With this option, you can set the System time synchronization with an external NTP server."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20231114111407682",src:n(462376).Z,width:"900",height:"240"})),(0,i.kt)("p",null,"To add a new NTP server click the ",(0,i.kt)("strong",{parentName:"p"},"Add NTP server")," button and then enter the NTP web server address."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20231114111832718",src:n(528851).Z,width:"633",height:"191"})),(0,i.kt)("p",null,"To change the time zone, use the ",(0,i.kt)("strong",{parentName:"p"},"Change time zone")," button, select a time zone from the list, and then ",(0,i.kt)("strong",{parentName:"p"},"Save")," the setting."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20231114112137800",src:n(654483).Z,width:"636",height:"195"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20231114112223107",src:n(475904).Z,width:"634",height:"379"})))}u.isMDXComponent=!0},195378:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231114105503988-14ef3396d84824dcecfb63c99758fa49.png"},629420:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231114110805998-8228e35dbb1470bca1cf805da16d2b3b.png"},260163:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231114110842294-bfd58ee2c01acd8acb9f1dbfe2de4e65.png"},462376:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231114111407682-564d054de2ff773cde5c07b607a63830.png"},528851:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231114111832718-c2688c390b440da92150f4de341e74f4.png"},654483:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231114112137800-796c38e9a238664686b57ef4a8661d3c.png"},475904:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231114112223107-d689b79684443b999dde4ae4ef344f44.png"}}]);