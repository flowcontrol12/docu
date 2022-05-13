"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9074],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),o=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),k=o(a),c=n,N=k["".concat(p,".").concat(c)]||k[c]||m[c]||r;return a?l.createElement(N,i(i({ref:t},s),{},{components:a})):l.createElement(N,i({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>u,metadata:()=>o,toc:()=>m});var l=a(3117),n=a(102),r=(a(7294),a(3905)),i=["components"],u={},p=void 0,o={unversionedId:"User Guide/Alerts/Rules Set/Rule Sets",id:"User Guide/Alerts/Rules Set/Rule Sets",title:"Rule Sets",description:"Jednym z wa\u017cniejszych komponent\xf3w systemu  Sycope jest modu\u0142 alarm\xf3w. Modu\u0142 ten pozwala na bardzo elastyczne tworzenie Alarm\xf3w w oparciu o szereg warunk\xf3w i regu\u0142 operuj\u0105cych na strumieniach danych znajduj\u0105cych si\u0119 w systemie Sycope.",source:"@site/docs/User Guide/Alerts/Rules Set/Rule Sets.md",sourceDirName:"User Guide/Alerts/Rules Set",slug:"/User Guide/Alerts/Rules Set/Rule Sets",permalink:"/next/User Guide/Alerts/Rules Set/Rule Sets",draft:!1,tags:[],version:"current",lastUpdatedAt:1652267779,formattedLastUpdatedAt:"11/05/2022",frontMatter:{},sidebar:"docs",previous:{title:"Coming soon",permalink:"/next/"},next:{title:"External Destination",permalink:"/next/User Guide/Configuration/Integrations/External Destinations/External Destination"}},s={},m=[{value:"General section",id:"general-section",level:2},{value:"Stream section",id:"stream-section",level:2},{value:"Filter section",id:"filter-section",level:2},{value:"Values section",id:"values-section",level:2},{value:"Categories",id:"categories",level:2},{value:"Output filter",id:"output-filter",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Limit",id:"limit",level:2},{value:"Schedule",id:"schedule",level:2},{value:"Thresholds",id:"thresholds",level:2},{value:"Actions",id:"actions",level:2},{value:"Privacy",id:"privacy",level:2}],k={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jednym z wa\u017cniejszych komponent\xf3w systemu  Sycope jest modu\u0142 alarm\xf3w. Modu\u0142 ten pozwala na bardzo elastyczne tworzenie Alarm\xf3w w oparciu o szereg warunk\xf3w i regu\u0142 operuj\u0105cych na strumieniach danych znajduj\u0105cych si\u0119 w systemie Sycope."),(0,r.kt)("p",null,"Syscope zawiera wiele r\xf3\u017cnych predefiniowanych alarm\xf3w stworzonych przez  zesp\xf3\u0142 do\u015bwiadczonych specjalist\xf3w cyberbezpiecze\u0144stwa. Regu\u0142y te mog\u0105 Stanowic szablon na podstawie kt\xf3rego u\u017cytkownik mo\u017ce tworzy\u0107 w\u0142asne regu\u0142y. Regu\u0142y mo\u017cna tworzy\u0107 tak\u017ce samodzielnie bazuj\u0105c na wizardzie."),(0,r.kt)("p",null,"This menu ","[Alerts>",(0,r.kt)("strong",{parentName:"p"},"Fields"),"]"," can be used to create a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"field")," based on the selected Streams and (optional) your own mathematical function. Additionally, you can use the Mapping, too. The system includes many of the most useful predefined  ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),"  that you can use right after installing the system."),(0,r.kt)("p",null,"The list of ",(0,r.kt)("strong",{parentName:"p"},"Rules")," is in the table with the following columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rule name")," - unique ",(0,r.kt)("strong",{parentName:"li"},"Rule")," name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rule type")," -  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tactic")," -  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Technique")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Score")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Created by")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Creation Time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modified By")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modification Time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Active")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Action"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Edit - edit an existing  Rule"),(0,r.kt)("li",{parentName:"ul"},"Duplicate - create an editable copy of the selected  Rule"),(0,r.kt)("li",{parentName:"ul"},"Export - export Rule to json format"),(0,r.kt)("li",{parentName:"ul"},"Delete - delete")))),(0,r.kt)("p",null,"The list of ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),"  is in the table with the following columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," - unique ",(0,r.kt)("inlineCode",{parentName:"li"},"field")," name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Streams")," - streams used to create  ",(0,r.kt)("inlineCode",{parentName:"li"},"fields")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description")," -  ",(0,r.kt)("inlineCode",{parentName:"li"},"field"),"  description entered by user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Action"))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"adding-custom-rule"},"Adding custom rule"),(0,r.kt)("p",null,"Alarm rules are created and edited in this menu ","[Alerts>",(0,r.kt)("strong",{parentName:"p"},"Rule Set"),"]","."),(0,r.kt)("p",null,"To add a new ",(0,r.kt)("strong",{parentName:"p"},"Alert rule"),", click on the ",(0,r.kt)("strong",{parentName:"p"},"New rule")," button, then the wizard will appear. "),(0,r.kt)("p",null,"The rule configuration wizard consists of the following sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"General")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input Filter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Values")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Categories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Output filter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sorting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Schedule")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Thresholds")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Actions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Privacy"))),(0,r.kt)("h2",{id:"general-section"},"General section"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Active/Inactive")," switch - Activating or deactivating the current rule.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rule Type")," - allows you to assign one of the three alarm types associated with the area you want to alarm."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Performance,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Security,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visibility.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name -  rule name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tags - ","[Configuration>Mapping>",(0,r.kt)("strong",{parentName:"p"},"Tags"),"]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Description - Description of the rule that can be entered by the user.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Score, Severity - alarm severity on a scale of 1- 10 where:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"score 1-2  means \u201cinfo\u201d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"score 3-4 means \u201clow\u201d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"score  5-6 means \u201cmedium\u201d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"score 7-8 means \u201chigh\u201d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Score 9-10 means \u201ccritical\u201d"))))),(0,r.kt)("h2",{id:"stream-section"},"Stream section"),(0,r.kt)("p",null,"Source - data stream used by the rule"),(0,r.kt)("h2",{id:"filter-section"},"Filter section"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Query - filter for the selected data stream"),(0,r.kt)("li",{parentName:"ul"},"Time range - the time range on which the rule will operate")),(0,r.kt)("h2",{id:"values-section"},"Values section"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use Function switch "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Aggr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Post aggr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Field")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Metric - field or metric that will be displayed on the graph")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Agreggation - list of operations to choose "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avi - returns average of field values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Count - returns count of non empty fields.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First - returns value of first field returned.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Join - returns concatenated value of fields values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Last - returns value of last field returned.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Max - returns maximal value.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Min - returns minimal value.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sum - returns sum of values."))))),(0,r.kt)("h2",{id:"categories"},"Categories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Agreggation")," - list of operations to choose "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avi - returns average of field values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Count - returns count of non empty fields."))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First - returns value of first field returned.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Join - returns concatenated value of fields values.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Last - returns value of last field returned.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Max - returns maximal value.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Min - returns minimal value.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sum - returns sum of values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use Function")," switch - allows the user to use his own function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Field")," - you can choose from a list: field, metrics, lookup, mapper"))),(0,r.kt)("h2",{id:"output-filter"},"Output filter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Query"),"- you can create a filter for selected Metrics and Fields in the Values and Categories section. ")),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"Here you can define how to sort the data displayed on the graph."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sort field - sorted field")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sort direction - Asc/Desc - sorting method ascending/descending"))),(0,r.kt)("h2",{id:"limit"},"Limit"),(0,r.kt)("p",null,"==!==You can specify the resolution and the direction in which the data will be presented."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limit buckets switch - s\u0142u\u017cy do wpisania limitu rozdzielczo\u015bci wykresu (liczby punkt\xf3w na wykresie)"),(0,r.kt)("li",{parentName:"ul"},"Limit - warto\u015b\u0107 rozdzielczo\u015bci, s\u0142u\u017cy do wpisania limitu rozdzielczo\u015bci wykresu (liczby punkt\xf3w na wykresie)"),(0,r.kt)("li",{parentName:"ul"},"Show from - field to specify the direction in which the data will be displayed on the chart",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Head "),(0,r.kt)("li",{parentName:"ul"},"Tail"))),(0,r.kt)("li",{parentName:"ul"},"Show others switch ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Others label")))),(0,r.kt)("h2",{id:"schedule"},"Schedule"),(0,r.kt)("p",null,"In this step you can specify how often the rule will be executed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interval - Set number in units  Min/Hours/Days/Weeks/Months/Years defining the time interval."),(0,r.kt)("li",{parentName:"ul"},"Throttling in minutes"),(0,r.kt)("li",{parentName:"ul"},"Indexed fields  ")),(0,r.kt)("h2",{id:"thresholds"},"Thresholds"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Value"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minor - select an operator and a value"),(0,r.kt)("li",{parentName:"ul"},"Major - select an operator and a value"),(0,r.kt)("li",{parentName:"ul"},"Critical - select an operator and a value")),(0,r.kt)("p",{parentName:"li"},"First the Critical conditions are checked, if these conditions are not met then the Major conditions are checked, and if these conditions are not met then the Minor conditions are checked."))),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Index",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Index",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"alerts"))))),(0,r.kt)("li",{parentName:"ul"},"Mail",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Send mail switch"),(0,r.kt)("li",{parentName:"ul"},"Recivers"),(0,r.kt)("li",{parentName:"ul"},"Template"))),(0,r.kt)("li",{parentName:"ul"},"Syslog",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Syslog profile"))),(0,r.kt)("li",{parentName:"ul"},"Third party system",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"External system",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MACMON"))),(0,r.kt)("li",{parentName:"ul"},"Instance name"),(0,r.kt)("li",{parentName:"ul"},"Action name"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Threshold levels"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Critical")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Major ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Minor"))))),(0,r.kt)("h2",{id:"privacy"},"Privacy"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Public permissions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Delete"),(0,r.kt)("li",{parentName:"ul"},"Edit"),(0,r.kt)("li",{parentName:"ul"},"Execute"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delete")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Edit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Execute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View"))))))}c.isMDXComponent=!0}}]);