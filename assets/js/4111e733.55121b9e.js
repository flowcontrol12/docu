"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31025],{603905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(667294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(a),h=r,c=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},483317:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(487462),r=a(263366),i=(a(667294),a(603905)),o=["components"],l={},s="Retention",p={unversionedId:"User Guide/Configuration/General Settings/Retention",id:"version-2.3/User Guide/Configuration/General Settings/Retention",title:"Retention",description:"The [Configuration>General Settings >Retention] menu can be used to manage data retention.",source:"@site/versioned_docs/version-2.3/04-User Guide/Configuration/01-General Settings/05-Retention.md",sourceDirName:"04-User Guide/Configuration/01-General Settings",slug:"/User Guide/Configuration/General Settings/Retention",permalink:"/2.3/User Guide/Configuration/General Settings/Retention",draft:!1,tags:[],version:"2.3",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"Diagnostics",permalink:"/2.3/User Guide/Configuration/General Settings/Diagnostics"},next:{title:"Backup and Restore",permalink:"/2.3/User Guide/Configuration/General Settings/Backup and Restore"}},m={},d=[{value:"Retention policy",id:"retention-policy",level:2},{value:"Default Retention policy",id:"default-retention-policy",level:3},{value:"1. Built-in policy parameters for the netflow data stream.",id:"1-built-in-policy-parameters-for-the-netflow-data-stream",level:4},{value:"2. Built-in policy parameters for the aggregated data stream.",id:"2-built-in-policy-parameters-for-the-aggregated-data-stream",level:4},{value:"3. Built-in policy parameters for the alerts.",id:"3-built-in-policy-parameters-for-the-alerts",level:4},{value:"4. Built-in policy parameters for audit messages, metrics and notifications.",id:"4-built-in-policy-parameters-for-audit-messages-metrics-and-notifications",level:4},{value:"Disk usage",id:"disk-usage",level:2}],u={toc:d};function h(t){var e=t.components,l=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"retention"},"Retention"),(0,i.kt)("p",null,"The ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration>General Settings >Retention"),"]"," menu can be used to manage data retention. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230607095210551",src:a(993501).Z,width:"1268",height:"859"})),(0,i.kt)("p",null,"The Retention Mechanism allows automated management of data life, considering factors such as performance and data size."),(0,i.kt)("p",null,"Data streams are stored on partitions of which there are four types in the system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hot")," - data just written, updated - maximum read and write speeds, high disk\nutilization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Warm")," - deferred data that is no longer written while they can be read and searched."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cold")," - low read and speed, low disk utilization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")," - data to be deleted.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221025092205878",src:a(606117).Z,width:"1023",height:"615"})),(0,i.kt)("p",null,"You can change the storage location of a particular ",(0,i.kt)("strong",{parentName:"p"},"Data Stream")," in the context of the partition type. The ",(0,i.kt)("strong",{parentName:"p"},"maxTime")," parameter is used for this purpose and it is the maximum time after which the partition type will be changed to another."),(0,i.kt)("p",null,"When the ",(0,i.kt)("strong",{parentName:"p"},"maxTime")," condition is met, the partition type is changed in the following order:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221025093248674",src:a(590829).Z,width:"446",height:"73"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is impossible to change partitions for a particular data stream from a type with a lower status to a type with a higher status, e.g., ",(0,i.kt)("strong",{parentName:"p"},"Cold")," -> ",(0,i.kt)("strong",{parentName:"p"},"Warm")," or ",(0,i.kt)("strong",{parentName:"p"},"Warm")," -> ",(0,i.kt)("strong",{parentName:"p"},"Hot"),".")),(0,i.kt)("h2",{id:"retention-policy"},"Retention policy"),(0,i.kt)("p",null,"Data retention takes place in the system based on user-configurable ",(0,i.kt)("strong",{parentName:"p"},"Retention policies"),". It is required to define at least two types of partitions for the policy. Policies are executed periodically in the order specified in the ",(0,i.kt)("strong",{parentName:"p"},"Priority")," field. The moment of execution is indicated by the ",(0,i.kt)("strong",{parentName:"p"},"Time to next execution")," field. The value in the ",(0,i.kt)("strong",{parentName:"p"},"Priority")," field must be within the range of 1-100, where 1 is the highest priority, and 100 is the lowest. When creating policies, care should be taken to ensure that policies do not overlap or duplicate because all defined policies will be executed."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you operate the maxTime parameter in hourly units, the system since version 2.3 stores data up to 1 hour longer, for example: 1 Hour Hot + 1 Hour Warm means that data is stored minimum 2 hours and maximum 3 hours.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"After the installation, the system has four built-in ",(0,i.kt)("strong",{parentName:"p"},"Retention policies"),". Please check them and adjust them to your needs. They can be used as a template to create new user policies.")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you do not define a ",(0,i.kt)("strong",{parentName:"p"},"Delete")," partition in the ",(0,i.kt)("strong",{parentName:"p"},"Retention policy")," the data to which the policy applies will never be erased.")),(0,i.kt)("h3",{id:"default-retention-policy"},"Default Retention policy"),(0,i.kt)("h4",{id:"1-built-in-policy-parameters-for-the-netflow-data-stream"},"1. Built-in policy parameters for the netflow data stream."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Partition type"),(0,i.kt)("th",{parentName:"tr",align:null},"maxTime"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hot"),(0,i.kt)("td",{parentName:"tr",align:null},"1 hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Warm"),(0,i.kt)("td",{parentName:"tr",align:null},"1 hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cold"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"1 hour")))),(0,i.kt)("p",null,"This means that the data from the ",(0,i.kt)("strong",{parentName:"p"},"netflow")," stream is stored in the system for 2 hours, within the first hour the data wille be stored with the ",(0,i.kt)("strong",{parentName:"p"},"Hot")," index, and within the next hour - with the ",(0,i.kt)("strong",{parentName:"p"},"Warm")," index. In the last hour the data will have the ",(0,i.kt)("strong",{parentName:"p"},"Delete")," status, which means that only certain metadata will still be stored and it is not possible to restore the original data to the system."),(0,i.kt)("h4",{id:"2-built-in-policy-parameters-for-the-aggregated-data-stream"},"2. Built-in policy parameters for the aggregated data stream."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Partition type"),(0,i.kt)("th",{parentName:"tr",align:null},"maxTime"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hot"),(0,i.kt)("td",{parentName:"tr",align:null},"1 day")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Warm"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cold"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"1 day")))),(0,i.kt)("p",null,"This means that the data from the above-mentioned aggregated streams is stored in the system for 1 day, with the ",(0,i.kt)("strong",{parentName:"p"},"Hot")," index. On the second day, the data will have the ",(0,i.kt)("strong",{parentName:"p"},"Delete")," status, which means that only certain metadata will still be stored and it is not possible to restore the original data to the system."),(0,i.kt)("h4",{id:"3-built-in-policy-parameters-for-the-alerts"},"3. Built-in policy parameters for the alerts."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Partition type"),(0,i.kt)("th",{parentName:"tr",align:null},"maxTime"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hot"),(0,i.kt)("td",{parentName:"tr",align:null},"1 week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Warm"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cold"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"1 day")))),(0,i.kt)("p",null,"This means that the alerts are stored in the system for 1 week, with the ",(0,i.kt)("strong",{parentName:"p"},"Hot")," index. After one week, the data will have the ",(0,i.kt)("strong",{parentName:"p"},"Delete")," status for 1 day, which means that only certain metadata will be stored and it is not possible to restore the original data to the system."),(0,i.kt)("h4",{id:"4-built-in-policy-parameters-for-audit-messages-metrics-and-notifications"},"4. Built-in policy parameters for audit messages, metrics and notifications."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Partition type"),(0,i.kt)("th",{parentName:"tr",align:null},"maxTime"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hot"),(0,i.kt)("td",{parentName:"tr",align:null},"1 month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Warm"),(0,i.kt)("td",{parentName:"tr",align:null},"1 month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cold"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("p",null,"This means that the data is stored in the system for 2 months. First the first one with the ",(0,i.kt)("strong",{parentName:"p"},"Hot")," index and the second one with the ",(0,i.kt)("strong",{parentName:"p"},"Warm")," status. "),(0,i.kt)("h2",{id:"disk-usage"},"Disk usage"),(0,i.kt)("p",null,"In this section, the table indicates how much space the data takes up in the system."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230103132105472",src:a(708858).Z,width:"1191",height:"639"})))}h.isMDXComponent=!0},606117:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20221025092205878-40b1f04438fd350c0203a0593d3e848e.png"},590829:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20221025093248674-1470b2a1b07df44e94d4291a179b41db.png"},708858:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230103132105472-226ce17a78c5d9c72bd272fc05a2b8f6.png"},993501:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230607095210551-231b33daeab737d9b83bd2880c0028d4.png"}}]);