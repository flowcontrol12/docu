"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57144],{603905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},575600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(487462),r=n(263366),i=(n(667294),n(603905)),s=["components"],o={id:"User Roles_",title:"User Roles",description:"User Roles Tab"},l=void 0,p={unversionedId:"User Guide/Configuration/Account Management/User Roles_",id:"version-2.2.1/User Guide/Configuration/Account Management/User Roles_",title:"User Roles",description:"User Roles Tab",source:"@site/versioned_docs/version-2.2.1/04-User Guide/Configuration/02-Account Management/02-User Roles_.md",sourceDirName:"04-User Guide/Configuration/02-Account Management",slug:"/User Guide/Configuration/Account Management/User Roles_",permalink:"/2.2.1/User Guide/Configuration/Account Management/User Roles_",draft:!1,tags:[],version:"2.2.1",lastUpdatedAt:1678707866,formattedLastUpdatedAt:"13 Mar 2023",sidebarPosition:2,frontMatter:{id:"User Roles_",title:"User Roles",description:"User Roles Tab"},sidebar:"docs",previous:{title:"Accounts",permalink:"/2.2.1/User Guide/Configuration/Account Management/Accounts"},next:{title:"Auth Providers",permalink:"/2.2.1/User Guide/Configuration/Account Management/Auth Providers"}},m={},c=[{value:"Permissions",id:"permissions",level:2},{value:"Exporter groups",id:"exporter-groups",level:2},{value:"Stream restrictions",id:"stream-restrictions",level:2},{value:"Assigned users",id:"assigned-users",level:2},{value:"Privacy",id:"privacy",level:2}],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>Account Management>",(0,i.kt)("strong",{parentName:"p"},"User Roles"),"]"," can be used to manage users roles in the System."),(0,i.kt)("p",null,"A role is a set of permissions for actions available within the system  (for example: create a widget, delete a Rule, access to the selected data stream, access to data from selected exporters). A role can be assigned to one or several users. One user can have one or several roles. Two roles are predefined in the system: ",(0,i.kt)("inlineCode",{parentName:"p"},"Administrator"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("strong",{parentName:"p"},"Sycope")," system implements a mechanism for assigning access to data at three levels:  "),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Permissions")," - access to GUI system elements. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exporter")," ",(0,i.kt)("strong",{parentName:"li"},"groups")," - access to data at the level of a single exporter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stream")," ",(0,i.kt)("strong",{parentName:"li"},"restrictions")," - access to single data streams that are available in the system"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230102110215393",src:n(271733).Z,width:"680",height:"993"})),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"For roles, permissions can be assigned to selected endpoints in the ",(0,i.kt)("strong",{parentName:"p"},"Access column"),". The user can grant the following access rights:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Example 1")," "),(0,i.kt)("p",{parentName:"admonition"},"To create a role that only views the list of ",(0,i.kt)("strong",{parentName:"p"},"Widgets"),", the role must have View permission.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Example 2")," "),(0,i.kt)("p",{parentName:"admonition"},"To create a role that can edit ",(0,i.kt)("strong",{parentName:"p"},"Widgets"),", the role must have Edit and View permissions.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230102112540714",src:n(123107).Z,width:"673",height:"767"})),(0,i.kt)("h2",{id:"exporter-groups"},"Exporter groups"),(0,i.kt)("p",null,"In this field, you can grant access to exporter groups that are configured in the system."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230102114218187",src:n(422284).Z,width:"680",height:"157"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To grant permissions at the ",(0,i.kt)("strong",{parentName:"p"},"Exporter groups")," level, you must first configure the system to support this functionality. This is configured in the ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration>NetFlow>ExporterGroups")," ]"," tab in the ",(0,i.kt)("strong",{parentName:"p"},"Exporter Access field"),". You must check the ",(0,i.kt)("strong",{parentName:"p"},"Restricted")," option."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"image-20230102113753231",src:n(396412).Z,width:"604",height:"165"})),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"WARNING!"),"\n",(0,i.kt)("strong",{parentName:"p"},"After enabling the ",(0,i.kt)("u",null,"Restricted")," option, it is not recommended to reconfigure this functionality of the system and check the ",(0,i.kt)("u",null,"All")," option."))),(0,i.kt)("h2",{id:"stream-restrictions"},"Stream restrictions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stream restriction")," allows you to block access to source data to protect data. It is possible to restrict the user's access to any Data streams that are in the System."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221206104003780",src:n(248136).Z,width:"353",height:"346"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For the built-in ",(0,i.kt)("strong",{parentName:"p"},"admin")," role, you cannot add restrictions on data access. The ",(0,i.kt)("strong",{parentName:"p"},"admin")," role always has \u201ceverything\u201d allowed.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," By default, all user roles do not have data access restrictions. ")),(0,i.kt)("h2",{id:"assigned-users"},"Assigned users"),(0,i.kt)("p",null,"In this section, you can assign ",(0,i.kt)("strong",{parentName:"p"},"Users")," to ",(0,i.kt)("strong",{parentName:"p"},"User Roles"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230102115544815",src:n(806426).Z,width:"666",height:"262"})),(0,i.kt)("h2",{id:"privacy"},"Privacy"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Privacy")," - you can grant permissions for a User Role"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private")," - accessible to the owner"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public")," - visible to all, but You can grant permission:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"li"},"User roles"),". Available privileges are:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))}d.isMDXComponent=!0},248136:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20221206104003780-a443deca3a8f5e9e1d5f21eaefe9343a.png"},271733:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230102110215393-e5dc9d5e1f41baa206bc543aaf1868ff.png"},123107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230102112540714-538e355f10b3f205734e468f7495233f.png"},396412:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230102113753231-44f58043a8f3cbec913aa861396ee57d.png"},422284:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230102114218187-2f3297505f5a95f34cc49899f37d3c1d.png"},806426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230102115544815-6492beca81523bf0ea927a574992f6ca.png"}}]);