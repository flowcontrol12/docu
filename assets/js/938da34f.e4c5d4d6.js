"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32218],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,g=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},736903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(487462),r=a(263366),i=(a(667294),a(603905)),l=["components"],o={description:"Rules Tab"},s="Rules",u={unversionedId:"User Guide/Management/Rules",id:"version-2.4/User Guide/Management/Rules",title:"Rules",description:"Rules Tab",source:"@site/versioned_docs/version-2.4/04-User Guide/06-Management/03-Rules.md",sourceDirName:"04-User Guide/06-Management",slug:"/User Guide/Management/Rules",permalink:"/2.4/User Guide/Management/Rules",draft:!1,tags:[],version:"2.4",sidebarPosition:3,frontMatter:{description:"Rules Tab"},sidebar:"docs",previous:{title:"Widgets",permalink:"/2.4/User Guide/Management/Widgets"},next:{title:"Favorites",permalink:"/2.4/User Guide/Management/Favorites/"}},m={},p=[],c={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rules"},"Rules"),(0,i.kt)("p",null,"The menu ","[",(0,i.kt)("strong",{parentName:"p"},"Management>Rules"),"]"," can be used to create a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"rule")," based on the selected Streams and (optional) your own mathematical function. The system includes many of the most useful predefined rules you can use right after installing the system. This functionality allows the user to flexibly build ",(0,i.kt)("strong",{parentName:"p"},"Alerts")," based on a number of conditions and rules that operate on the data streams collected by the system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sycope")," includes many predefined ",(0,i.kt)("strong",{parentName:"p"},"Alerts")," created by a team of cybersecurity experts. These rules can be used as a template from which you can create your own rules. You can also create rules on your own using the wizard."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230619100934955",src:a(41454).Z,width:"1883",height:"618"})),(0,i.kt)("p",null,"The list of ",(0,i.kt)("strong",{parentName:"p"},"Rules")," is in the table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule name")," - unique ",(0,i.kt)("strong",{parentName:"li"},"Rule")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," - short description how the rule works"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule type")," - specified by the user",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Performance"),(0,i.kt)("li",{parentName:"ul"},"Security"),(0,i.kt)("li",{parentName:"ul"},"Visibility"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule actions")," - the action to be taken when the rule is triggered. The system supports the following actions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Index - information about the triggering of the alarm will be displayed in the ",(0,i.kt)("a",{parentName:"li",href:"https://documentation.sycope.com/User%20Guide/Alerts/Alerts%20Table"},"Alerts Table")," "),(0,i.kt)("li",{parentName:"ul"},"Mail - information about the triggering of the alarm will be sent by e-mail"),(0,i.kt)("li",{parentName:"ul"},"SNMP Trap Receiver - information about the triggering of the alarm will be sent to the external system using the SNMP Trap protocol see ",(0,i.kt)("a",{parentName:"li",href:"https://documentation.sycope.com/User%20Guide/Configuration/Integrations/External%20Destinations"},"External Destinations")),(0,i.kt)("li",{parentName:"ul"},"Syslog - information about the triggering of the alarm will be sent to the external Syslog-ng server see ",(0,i.kt)("a",{parentName:"li",href:"https://documentation.sycope.com/User%20Guide/Configuration/Integrations/External%20Destinations"},"External Destinations")),(0,i.kt)("li",{parentName:"ul"},"Third party system -  information about the triggering of the alarm will be sent to the external systems see ",(0,i.kt)("a",{parentName:"li",href:"https://documentation.sycope.com/User%20Guide/Configuration/Integrations/External%20Destinations"},"External Destinations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MACMON"),(0,i.kt)("li",{parentName:"ul"},"REST Client"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tactic")," -  specified in MITRE ATT&CK\xae ",(0,i.kt)("a",{parentName:"li",href:"https://attack.mitre.org"},"https://attack.mitre.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Technique")," - specified in MITRE ATT&CK\xae ",(0,i.kt)("a",{parentName:"li",href:"https://attack.mitre.org"},"https://attack.mitre.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Score")," - alert severity on a scale of 1- 10 where:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"score 1-2  means \u201cinfo\u201d"),(0,i.kt)("li",{parentName:"ul"},"score 3-4 means \u201clow\u201d"),(0,i.kt)("li",{parentName:"ul"},"score  5-6 means \u201cmedium\u201d"),(0,i.kt)("li",{parentName:"ul"},"score 7-8 means \u201chigh\u201d"),(0,i.kt)("li",{parentName:"ul"},"score 9-10 means \u201ccritical\u201d"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created by")," - the name of the user who created the Rule"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creation Time")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modified By")," - the name of the user who last modified the Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modification Time")," -  last modification time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tags")," - assigned tags"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active")," - status active/inactive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status icon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - the name of the user who shared the Rule"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Edit - edit an existing Rule"),(0,i.kt)("li",{parentName:"ul"},"Duplicate - create an editable copy of the selected  Rule"),(0,i.kt)("li",{parentName:"ul"},"Export - export Rule to JSON format"),(0,i.kt)("li",{parentName:"ul"},"Delete - delete Rule")))))}d.isMDXComponent=!0},41454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230619100934955-50d8e59350ded3b237f9d045177ec8a4.png"}}]);