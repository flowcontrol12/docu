"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49936],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},143901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=r(487462),n=r(263366),i=(r(667294),r(603905)),l=["components"],o={description:"Rules Tab",slug:"/User-Guide/Configuration/Rules"},s="Rules",u={unversionedId:"User-Guide/Configuration/Rules",id:"version-2.6/User-Guide/Configuration/Rules",title:"Rules",description:"Rules Tab",source:"@site/versioned_docs/version-2.6/04-User-Guide/08-Configuration/03-Rules.md",sourceDirName:"04-User-Guide/08-Configuration",slug:"/User-Guide/Configuration/Rules",permalink:"/2.6/User-Guide/Configuration/Rules",draft:!1,tags:[],version:"2.6",sidebarPosition:3,frontMatter:{description:"Rules Tab",slug:"/User-Guide/Configuration/Rules"},sidebar:"docs",previous:{title:"Widgets",permalink:"/2.6/User-Guide/Configuration/Widgets"},next:{title:"Favorites",permalink:"/2.6/User-Guide/Configuration/Favorites"}},p={},m=[],c={toc:m};function d(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rules"},"Rules"),(0,i.kt)("p",null,"The menu ",(0,i.kt)("strong",{parentName:"p"},"[Configuration > Rules]")," can be used to create a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"rule")," based on the selected Streams and (optional) your own mathematical function. The system includes many of the most useful predefined rules you can use right after installing the system. This functionality allows the user to flexibly build ",(0,i.kt)("strong",{parentName:"p"},"Alerts")," based on a number of conditions and rules that operate on the data streams collected by the system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sycope")," includes many predefined ",(0,i.kt)("strong",{parentName:"p"},"Alerts")," created by a team of cybersecurity experts. These rules can be used as a template from which you can create your own rules. You can also create rules on your own using the wizard."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230619100934955",src:r(464340).Z,width:"1883",height:"618"})),(0,i.kt)("p",null,"The list of ",(0,i.kt)("strong",{parentName:"p"},"Rules")," is in the table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule name")," - unique ",(0,i.kt)("strong",{parentName:"li"},"Rule")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," - short description how the rule works"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule type")," - specified by the user",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Performance"),(0,i.kt)("li",{parentName:"ul"},"Security"),(0,i.kt)("li",{parentName:"ul"},"Visibility"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule actions")," - the action to be taken when the rule is triggered. The system supports the following actions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Index - information about the triggering of the alarm will be displayed in the ",(0,i.kt)("a",{parentName:"li",href:"/User-Guide/Alerts#alerts-table-fields-description"},"Alerts Table")," "),(0,i.kt)("li",{parentName:"ul"},"Mail - information about the triggering of the alarm will be sent by e-mail"),(0,i.kt)("li",{parentName:"ul"},"SNMP Trap Receiver - information about the triggering of the alarm will be sent to the external system using the SNMP Trap protocol see ",(0,i.kt)("a",{parentName:"li",href:"/User-Guide/Settings/General/Integrations/External-Destinations"},"External Destinations")),(0,i.kt)("li",{parentName:"ul"},"Syslog - information about the triggering of the alarm will be sent to the external Syslog-ng server see ",(0,i.kt)("a",{parentName:"li",href:"/User-Guide/Settings/General/Integrations/External-Destinations"},"External Destinations")),(0,i.kt)("li",{parentName:"ul"},"Third party system -  information about the triggering of the alarm will be sent to the external systems see ",(0,i.kt)("a",{parentName:"li",href:"/User-Guide/Settings/General/Integrations/External-Destinations"},"External Destinations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MACMON"),(0,i.kt)("li",{parentName:"ul"},"REST Client"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tactic")," -  specified in MITRE ATT&CK\xae ",(0,i.kt)("a",{parentName:"li",href:"https://attack.mitre.org"},"https://attack.mitre.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Technique")," - specified in MITRE ATT&CK\xae ",(0,i.kt)("a",{parentName:"li",href:"https://attack.mitre.org"},"https://attack.mitre.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Score")," - alert severity on a scale of 1- 10 where:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"score 1-2  means \u201cinfo\u201d"),(0,i.kt)("li",{parentName:"ul"},"score 3-4 means \u201clow\u201d"),(0,i.kt)("li",{parentName:"ul"},"score  5-6 means \u201cmedium\u201d"),(0,i.kt)("li",{parentName:"ul"},"score 7-8 means \u201chigh\u201d"),(0,i.kt)("li",{parentName:"ul"},"score 9-10 means \u201ccritical\u201d"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created by")," - the name of the user who created the Rule"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creation Time")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modified By")," - the name of the user who last modified the Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modification Time")," -  last modification time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tags")," - assigned tags"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active")," - status active/inactive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status icon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - the name of the user who shared the Rule"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Edit - edit an existing Rule"),(0,i.kt)("li",{parentName:"ul"},"Duplicate - create an editable copy of the selected  Rule"),(0,i.kt)("li",{parentName:"ul"},"Export - export Rule to JSON format"),(0,i.kt)("li",{parentName:"ul"},"Delete - delete Rule")))))}d.isMDXComponent=!0},464340:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20230619100934955-50d8e59350ded3b237f9d045177ec8a4.png"}}]);