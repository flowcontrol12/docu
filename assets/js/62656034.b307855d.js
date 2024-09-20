"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69945],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},786828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(487462),o=r(263366),i=(r(667294),r(603905)),a=["components"],s={description:"Exporter Restrictions Tab",slug:"/User-Guide/Settings/NetFlow/Exporter-Restrictions"},p="Exporter Restrictions",c={unversionedId:"User-Guide/Settings/NetFlow/Exporter-Restrictions/index",id:"version-2.6/User-Guide/Settings/NetFlow/Exporter-Restrictions/index",title:"Exporter Restrictions",description:"Exporter Restrictions Tab",source:"@site/versioned_docs/version-2.6/04-User-Guide/10-Settings/04-NetFlow/04-Exporter-Restrictions/index.md",sourceDirName:"04-User-Guide/10-Settings/04-NetFlow/04-Exporter-Restrictions",slug:"/User-Guide/Settings/NetFlow/Exporter-Restrictions",permalink:"/2.6/User-Guide/Settings/NetFlow/Exporter-Restrictions",draft:!1,tags:[],version:"2.6",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",frontMatter:{description:"Exporter Restrictions Tab",slug:"/User-Guide/Settings/NetFlow/Exporter-Restrictions"},sidebar:"docs",previous:{title:"SFlow",permalink:"/2.6/User-Guide/Settings/NetFlow/SFlow"},next:{title:"Forwarding",permalink:"/2.6/User-Guide/Settings/NetFlow/Forwarding"}},l={},d=[{value:"Parameters:",id:"parameters",level:2},{value:"Configuration of restricted acces to exporter groups",id:"configuration-of-restricted-acces-to-exporter-groups",level:2}],u={toc:d};function g(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exporter-restrictions"},"Exporter Restrictions"),(0,i.kt)("p",null,"This menu ",(0,i.kt)("strong",{parentName:"p"},"[Settings > NetFlow > Exporter Restrictions]")," can be used to configure NetFlow Exporter Restriction group functionality."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This functionality is available for licenses with the ",(0,i.kt)("inlineCode",{parentName:"p"},"AdvancedFeatures")," function activated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Netflow "),"\xa0module.")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"After enabling the ",(0,i.kt)("u",null,(0,i.kt)("strong",{parentName:"p"},"Restricted"))," option, it is firmly not recommended to reconfigure this system's functionality and check the ",(0,i.kt)("u",null,(0,i.kt)("strong",{parentName:"p"},"All"))," option.")),(0,i.kt)("p",null,"The aim of the ",(0,i.kt)("strong",{parentName:"p"},"Exporter Restrictions")," configuration is to create groups restricting data download from streams to other data from specific sources."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"exporter-restrictions-main",src:r(280463).Z,width:"1059",height:"776"})),(0,i.kt)("h2",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unrestricted")," - the activation of this setting will prevent the ",(0,i.kt)("strong",{parentName:"p"},"Exporter Restrictions")," mechanism from working. It will not be taken into consideration by the processes in the Sycope system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Restricted")," - the activation of this setting will make the Sycope system restrict access only to the data from sources within the assigned groups during processing of the data from the stream."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Add group with access")," - after choosing ",(0,i.kt)("strong",{parentName:"p"},"Restricted"),", a button allowing for defining a group will appear. After clicking the button, the group name and the list of data sources assigned to this group must be provided."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"exporter-restrictions-addgroup",src:r(887907).Z,width:"659",height:"453"})),(0,i.kt)("p",null,'Groups created in this manner can be used while editing the User role in the "Data restrictions" section.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"exporter-restrictions-user-group",src:r(942954).Z,width:"1323",height:"1149"})),(0,i.kt)("h2",{id:"configuration-of-restricted-acces-to-exporter-groups"},"Configuration of restricted acces to exporter groups"),(0,i.kt)("p",null,"Using the restricted acces to exporter groups causes an automatic filter to be applied for the data received from the streams in which objects have an ",(0,i.kt)("inlineCode",{parentName:"p"},"exporterIps")," field. "),(0,i.kt)("p",null,"To activate the functionality, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Restricted")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Acces to exporter group section")," ."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The activation of the ",(0,i.kt)("strong",{parentName:"p"},"Restricted")," option and using groups in User roles may cause a decrease of efficiency of the Sycope system. All processes within the Sycope system downloading data from a given stream, e.g. those counting aggregations, will monitor and filter the data from the source while taking into consideration the group assigned to the User.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"menu master",src:r(628831).Z,width:"785",height:"407"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"menu master",src:r(181874).Z,width:"648",height:"480"})),(0,i.kt)("p",null,"A group includes a list of IP addresses and such a group is assigned to a Role. Then, if the Role is assigned to a user, each query, calculation, aggregation or enumeration of the preAggregation done by the user on the stream data will include filtering by the ",(0,i.kt)("inlineCode",{parentName:"p"},"exporterIps")," field.\nIf a given stream does not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"exporterIps")," field, the data from that stream is not filtered. The filtering is processed during the reading of data from the streams."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rbac-group-add-to-role",src:r(835751).Z,width:"1119",height:"570"})),(0,i.kt)("p",null,"If a preAggregation is being processed, it will add the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"exporterIps")," field to the aggregated data.\nIf there are several defined groups, separate preAggregations are calculated for each group.\nIf the stream does not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"exporterIps")," field, all data is included in the aggregation."))}g.isMDXComponent=!0},887907:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/exporter-restrictions-addgroup-c6c3d6b6401bf4507d798d8801a3807e.png"},280463:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/exporter-restrictions-main-36996c6a4dfc66a0af9b7d2e993224f5.png"},942954:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/exporter-restrictions-user-group-4c24b313012db94b3f81e7ea3696bf4c.png"},181874:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rbac-add-group-178ceec117dc2a545092a085ebcb227d.png"},835751:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rbac-group-add-to-role-bc675c27171eabeb50013e0af297d546.png"},628831:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rbac-group-def-8854bea9e399367dee599078f8925886.png"}}]);