"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18656],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),E=c(r),d=i,m=E["".concat(s,".").concat(d)]||E[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=E;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}E.displayName="MDXCreateElement"},685086:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(487462),i=r(263366),a=(r(667294),r(603905)),o=["components"],l={description:"Collectors Tab"},s="Collectors",c={unversionedId:"User Guide/Configuration/Objects/Collectors",id:"version-2.3/User Guide/Configuration/Objects/Collectors",title:"Collectors",description:"Collectors Tab",source:"@site/versioned_docs/version-2.3/04-User Guide/Configuration/04-Objects/05-Collectors.md",sourceDirName:"04-User Guide/Configuration/04-Objects",slug:"/User Guide/Configuration/Objects/Collectors",permalink:"/2.3/User Guide/Configuration/Objects/Collectors",draft:!1,tags:[],version:"2.3",lastUpdatedAt:1695227583,formattedLastUpdatedAt:"20 Sept 2023",sidebarPosition:5,frontMatter:{description:"Collectors Tab"},sidebar:"docs",previous:{title:"Ranges",permalink:"/2.3/User Guide/Configuration/Objects/Ranges"},next:{title:"Recipients",permalink:"/2.3/User Guide/Configuration/Objects/Recipients"}},p={},u=[{value:"Collector attributes:",id:"collector-attributes",level:2}],E={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},E,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collectors"},"Collectors"),(0,a.kt)("p",null,"The ","[",(0,a.kt)("strong",{parentName:"p"},"Configuration>Objects>Collectors"),"]"," menu can be used to create a kind of container/database into which you can collect and store data from data streams defined using NQL expressions."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Collectors")," created in the system are listed in a table with the following columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ID")," - unique Collector ID"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description")," - Collector description entered by the user"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NQL")," - NQL expression that creates a collector"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Status")," - active/inactive"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Privacy")," - privacy status icon"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Created By")," - the name of the user who created the Metric"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Creation Time")," - creation time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modified By")," - the name of the user who last modified the Metric"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modification Time")," - the last modification time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shared")," - the name of the user who shared the Metric"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Action")," - ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Edit - edits the collector parameters"),(0,a.kt)("li",{parentName:"ul"},"Duplicate - duplicates the collector"),(0,a.kt)("li",{parentName:"ul"},"Export - exports the collector to a json file"),(0,a.kt)("li",{parentName:"ul"},"Delete - deletes the collector")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230420102320075",src:r(643424).Z,width:"1518",height:"554"})),(0,a.kt)("h1",{id:"building-a-collector"},"Building a collector"),(0,a.kt)("p",null,"Add/Edit a new collector which is fed with data in the scheduled time."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Edit collector",src:r(239296).Z,title:"Edit Collector",width:"635",height:"1079"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"collector-attributes"},"Collector attributes:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ID")," - the collector's name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Switched off")," - the collector is not active.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Switched on")," - the collector is active and collects data."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Append")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Switched off")," - every next scheduled run will replace all existing data in the collector.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Switched on")," - the data will be appended to the collector in every next scheduled run.\nIf objects in the appended data are duplicated in the collector current data, they will not be replaced (updated). They will be duplicated, tripled etc. in every run."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permanent Working")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Switched off")," - the collector stops collecting data when UI window shown collector data has been closed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Switched on")," -  collects data constantly (in backend), even is it not used/shown in UI."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Max records")," - The number of objects/records kept in the collector. The collector contains ",(0,a.kt)("strong",{parentName:"p"},"the latest")," n objects (n = Max records)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description")," - The description of the collector."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger type")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Simple")," - the scheduler settings are available in the current form.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cron")," - the scheduler settings are defined by the CRON expression."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Edit cron collector",src:r(992827).Z,title:"Settings for CRON collector",width:"502",height:"183"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cron expression")," - the expression which is used to define the scheduling in the standard unix/linux cron tool (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"Linux Cron"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Repeat interval"),' - the interval of each iteration run. For example, "4 Hours" means that the NQL will be executed every 4 hours.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Repeat count"),"  - the number of times the NQL will feed the collector with data. For example, the value of 10 means that the NQL will be executed 10 times, every ",(0,a.kt)("inlineCode",{parentName:"p"},"Repeat interval")," value will be started and stopped."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Time range")," - a time range for the data retrieved in each scheduled run iteration."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nql")," - the NQL expression used to load the data into the collector."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Test")," - the button to test the NQL and to see its result (first 5 records/objects)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Privacy")," - you can grant the following permissions to the collector:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Private")," - accessible to the owner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Public")," - visible to all, but you can grant permission:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DELETE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"EDIT")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Shared")," - accessible to one or more selected ",(0,a.kt)("strong",{parentName:"p"},"User roles"),". The available privileges are:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delete")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Edit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"View"))))))}d.isMDXComponent=!0},643424:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20230420102320075-44db21d07c4e0783ee8112e9744a968d.png"},239296:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/img-edit-collector-902a16b9fc299e94d404fa31eaa836ef.png"},992827:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);