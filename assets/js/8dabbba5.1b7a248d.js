"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5828],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),o=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return l.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=o(a),c=r,N=k["".concat(u,".").concat(c)]||k[c]||m[c]||n;return a?l.createElement(N,i(i({ref:t},s),{},{components:a})):l.createElement(N,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var l=a(83117),r=a(80102),n=(a(67294),a(3905)),i=["components"],p={description:"Rule Sets Tab"},u=void 0,o={unversionedId:"User Guide/Alerts/Rule Sets",id:"User Guide/Alerts/Rule Sets",title:"Rule Sets",description:"Rule Sets Tab",source:"@site/docs/04-User Guide/Alerts/Rule Sets.md",sourceDirName:"04-User Guide/Alerts",slug:"/User Guide/Alerts/Rule Sets",permalink:"/User Guide/Alerts/Rule Sets",draft:!1,tags:[],version:"current",lastUpdatedAt:1663684723,formattedLastUpdatedAt:"20 Sept 2022",frontMatter:{description:"Rule Sets Tab"},sidebar:"docs",previous:{title:"Alerts Table",permalink:"/User Guide/Alerts/Alerts Table"},next:{title:"Configuration",permalink:"/User Guide/Configuration/"}},s={},m=[{value:"General section",id:"general-section",level:2},{value:"Stream section",id:"stream-section",level:2},{value:"Filter section",id:"filter-section",level:2},{value:"Values section",id:"values-section",level:2},{value:"Categories",id:"categories",level:2},{value:"Output filter",id:"output-filter",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Limit",id:"limit",level:2},{value:"Thresholds",id:"thresholds",level:2},{value:"Actions",id:"actions",level:2},{value:"Privacy",id:"privacy",level:2}],k={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"One of the most important components of the Sycope system is alerting functionality. This functionality allows the user to flexibly build ",(0,n.kt)("strong",{parentName:"p"},"Alerts")," based on a number of conditions and rules that operate on the data streams collected by the system."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sycope")," includes many predefined ",(0,n.kt)("strong",{parentName:"p"},"Alerts")," created by a team of cybersecurity experts. These rules can be used as a template from which you can create your own rules. You can also create rules on your own using the wizard."),(0,n.kt)("p",null,"This menu ","[Alerts>",(0,n.kt)("strong",{parentName:"p"},"Rules Set"),"]"," can be used to create a custom ",(0,n.kt)("inlineCode",{parentName:"p"},"rule")," based on the selected Streams and (optional) your own mathematical function. The system includes many of the most useful predefined  ",(0,n.kt)("inlineCode",{parentName:"p"},"rules"),"  that you can use right after installing the system."),(0,n.kt)("p",null,"The list of ",(0,n.kt)("strong",{parentName:"p"},"Rules")," is in the table with the following columns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule name")," - unique ",(0,n.kt)("strong",{parentName:"li"},"Rule")," name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule type"),"   "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tactic"),"   "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Technique")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Score")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Created by")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Creation Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Modified By")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Modification Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Active")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Action"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Edit - edit an existing  Rule"),(0,n.kt)("li",{parentName:"ul"},"Duplicate - create an editable copy of the selected  Rule"),(0,n.kt)("li",{parentName:"ul"},"Export - export Rule to json format"),(0,n.kt)("li",{parentName:"ul"},"Delete - delete")))),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"adding-custom-rule"},"Adding custom rule"),(0,n.kt)("p",null,"Alarm rules are created and edited in this menu ","[Alerts>",(0,n.kt)("strong",{parentName:"p"},"Rule Set"),"]","."),(0,n.kt)("p",null,"To add a new ",(0,n.kt)("strong",{parentName:"p"},"Alert rule"),", click on the ",(0,n.kt)("strong",{parentName:"p"},"New rule")," button, then the wizard will appear. "),(0,n.kt)("p",null,"The rule configuration wizard consists of the following sections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"General")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stream")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Input Filter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Values")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Categories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Output filter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sorting")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Limit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Schedule")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Thresholds")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Privacy"))),(0,n.kt)("h2",{id:"general-section"},"General section"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Active/Inactive")," switch - Activating or deactivating the current rule.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rule Type")," - allows you to assign one of the three alarm types associated with the area you want to alarm."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Performance,")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Security,")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Visibility.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name -  rule name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tags - ","[Configuration>Mapping>",(0,n.kt)("strong",{parentName:"p"},"Tags"),"]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Description - Description of the rule that can be entered by the user.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Score, Severity - alarm severity on a scale of 1- 10 where:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"score 1-2  means \u201cinfo\u201d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"score 3-4 means \u201clow\u201d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"score  5-6 means \u201cmedium\u201d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"score 7-8 means \u201chigh\u201d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Score 9-10 means \u201ccritical\u201d"))))),(0,n.kt)("h2",{id:"stream-section"},"Stream section"),(0,n.kt)("p",null,"Source - data stream used by the rule"),(0,n.kt)("h2",{id:"filter-section"},"Filter section"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Query - filter for the selected data stream"),(0,n.kt)("li",{parentName:"ul"},"Time range - the time range on which the rule will operate")),(0,n.kt)("h2",{id:"values-section"},"Values section"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use Function switch "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Aggr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Post aggr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Field")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Metric - field or metric that will be displayed on the graph")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Agreggation - list of operations to choose "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Avi - returns average of field values.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Count - returns count of non empty fields.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"First - returns value of first field returned.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Join - returns concatenated value of fields values.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Last - returns value of last field returned.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Max - returns maximal value.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Min - returns minimal value.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sum - returns sum of values."))))),(0,n.kt)("h2",{id:"categories"},"Categories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Agreggation")," - list of operations to choose "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Avi - returns average of field values.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Count - returns count of non empty fields."))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First - returns value of first field returned.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Join - returns concatenated value of fields values.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last - returns value of last field returned.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Max - returns maximal value.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Min - returns minimal value.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sum - returns sum of values.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Use Function")," switch - allows the user to use his own function")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Field")," - you can choose from a list: field, metrics, lookup, mapper"))),(0,n.kt)("h2",{id:"output-filter"},"Output filter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Query"),"- you can create a filter for selected Metrics and Fields in the Values and Categories section. ")),(0,n.kt)("h2",{id:"sorting"},"Sorting"),(0,n.kt)("p",null,"Here you can define how to sort the data displayed on the graph."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sort field - sorted field")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sort direction - Asc/Desc - sorting method ascending/descending"))),(0,n.kt)("h2",{id:"limit"},"Limit"),(0,n.kt)("p",null,"You can specify the resolution and the direction in which the data will be presented."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Limit buckets switch - It is used to set the limit of values of which the chart will consist")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Limit - limit value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Show from - field to specify the direction in which the data will be displayed on the chart"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Head "),(0,n.kt)("li",{parentName:"ul"},"Tail"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Show others switch "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Others label"),(0,n.kt)("p",{parentName:"li"},"Schedule"))))),(0,n.kt)("p",null,"In this step you can specify how often the rule will be executed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interval - Set number in units  Min/Hours/Days/Weeks/Months/Years defining the time interval."),(0,n.kt)("li",{parentName:"ul"},"Throttling in minutes"),(0,n.kt)("li",{parentName:"ul"},"Indexed fields  ")),(0,n.kt)("h2",{id:"thresholds"},"Thresholds"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Value"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Minor - select an operator and a value"),(0,n.kt)("li",{parentName:"ul"},"Major - select an operator and a value"),(0,n.kt)("li",{parentName:"ul"},"Critical - select an operator and a value")),(0,n.kt)("p",{parentName:"li"},"First the Critical conditions are checked, if these conditions are not met then the Major conditions are checked, and if these conditions are not met then the Minor conditions are checked."))),(0,n.kt)("h2",{id:"actions"},"Actions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Index",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Index",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"alerts"))))),(0,n.kt)("li",{parentName:"ul"},"Mail",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Send mail switch"),(0,n.kt)("li",{parentName:"ul"},"Recivers"),(0,n.kt)("li",{parentName:"ul"},"Template"))),(0,n.kt)("li",{parentName:"ul"},"Syslog",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Syslog profile"))),(0,n.kt)("li",{parentName:"ul"},"Third party system",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"External system",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MACMON"))),(0,n.kt)("li",{parentName:"ul"},"Instance name"),(0,n.kt)("li",{parentName:"ul"},"Action name"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Threshold levels"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Critical"),(0,n.kt)("li",{parentName:"ul"},"Major "),(0,n.kt)("li",{parentName:"ul"},"Minor")))),(0,n.kt)("h2",{id:"privacy"},"Privacy"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Public permissions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Delete"),(0,n.kt)("li",{parentName:"ul"},"Edit"),(0,n.kt)("li",{parentName:"ul"},"Execute"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Edit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Execute")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"View"))))))}c.isMDXComponent=!0}}]);