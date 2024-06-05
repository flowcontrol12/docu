"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9214],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>c});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},g=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,u=d["".concat(o,".").concat(c)]||d[c]||m[c]||s;return a?i.createElement(u,r(r({ref:t},g),{},{components:a})):i.createElement(u,r({ref:t},g))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<s;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var i=a(87462),n=a(63366),s=(a(67294),a(3905)),r=["components"],l={},o="Examples of widget creation - simple widget",p={unversionedId:"Examples/Widgets Examples/Widget KPI Alerts last 24h",id:"version-2.4/Examples/Widgets Examples/Widget KPI Alerts last 24h",title:"Examples of widget creation - simple widget",description:"Number of security incidents in last 24h - example assumptions",source:"@site/versioned_docs/version-2.4/06-Examples/Widgets Examples/Widget KPI Alerts last 24h.md",sourceDirName:"06-Examples/Widgets Examples",slug:"/Examples/Widgets Examples/Widget KPI Alerts last 24h",permalink:"/2.4/Examples/Widgets Examples/Widget KPI Alerts last 24h",draft:!1,tags:[],version:"2.4",lastUpdatedAt:1700558829,formattedLastUpdatedAt:"21 Nov 2023",frontMatter:{},sidebar:"docs",previous:{title:"Widgets Examples",permalink:"/2.4/Examples/Widgets Examples/"},next:{title:"Examples of widget creation - advanced widget",permalink:"/2.4/Examples/Widgets Examples/Widget Total Traffic 15min"}},g={},m=[{value:"Number of security incidents in last 24h - example assumptions",id:"number-of-security-incidents-in-last-24h---example-assumptions",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Visual tuning",id:"visual-tuning",level:2},{value:"Changing widget permissions",id:"changing-widget-permissions",level:2}],d={toc:m};function c(e){var t=e.components,l=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"examples-of-widget-creation---simple-widget"},"Examples of widget creation - simple widget"),(0,s.kt)("h2",{id:"number-of-security-incidents-in-last-24h---example-assumptions"},"Number of security incidents in last 24h - example assumptions"),(0,s.kt)("p",null,"We want to create a widget that displays the number of security incidents in the last 24 hours."),(0,s.kt)("h2",{id:"implementation"},"Implementation"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Widgets are created and edited in the menu ","[Dashboard>Management>",(0,s.kt)("strong",{parentName:"li"},"Widgets"),"]",". ")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220704110915152",src:a(8721).Z,width:"785",height:"449"})),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"To add a widget, click on the ",(0,s.kt)("strong",{parentName:"li"},"Add Widget")," button, then the widget wizard will appear. ")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220704111118805",src:a(56343).Z,width:"1232",height:"957"})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Visualization Tab"),", enter the name of the ",(0,s.kt)("strong",{parentName:"li"},"Widget")," in the field ",(0,s.kt)("strong",{parentName:"li"},"Title"),". In addition to entering a name, you can enter a short description of the ",(0,s.kt)("strong",{parentName:"li"},"Widget")," in the field ",(0,s.kt)("strong",{parentName:"li"},"Description")," and assign ",(0,s.kt)("strong",{parentName:"li"},"Tags"),". Now it is necessary to select the type of visualization you want to use. In this example it will be ",(0,s.kt)("strong",{parentName:"li"},"KPI"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220620103155525",src:a(78829).Z,width:"537",height:"426"})),(0,s.kt)("p",null,"As we know, the widget creation process is divided into three tabs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Visualisation,"),(0,s.kt)("li",{parentName:"ul"},"Data,"),(0,s.kt)("li",{parentName:"ul"},"Option.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220620105022147",src:a(59398).Z,width:"387",height:"638"})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Change the tab to ",(0,s.kt)("strong",{parentName:"li"},"Data"),". ")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905152327228",src:a(36138).Z,width:"440",height:"267"})),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"In order to count the number of alarms, you need to choose a data stream from which such information can be obtained. Information about security incidents are contained in the ",(0,s.kt)("strong",{parentName:"li"},"Alerts stream"),", which must be selected in the ",(0,s.kt)("strong",{parentName:"li"},"Source")," field.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905152556708",src:a(51876).Z,width:"440",height:"413"})),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"Specify the time period for which ",(0,s.kt)("strong",{parentName:"li"},"Widget")," will analyze data - in our example it is ",(0,s.kt)("strong",{parentName:"li"},"last 24h"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905152819668",src:a(5919).Z,width:"661",height:"916"})),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"Define an ",(0,s.kt)("strong",{parentName:"li"},"Aggregation")," that will allow you to calculate the number of unique alerts that have been generated. To do this, select field  ",(0,s.kt)("strong",{parentName:"li"},"Alert id"),"  in the ",(0,s.kt)("strong",{parentName:"li"},"Metrics")," and ",(0,s.kt)("strong",{parentName:"li"},"Unique count")," in the ",(0,s.kt)("strong",{parentName:"li"},"Aggregation"),". ",(0,s.kt)("strong",{parentName:"li"},"Alert id")," is a ",(0,s.kt)("strong",{parentName:"li"},"Field")," in the ",(0,s.kt)("strong",{parentName:"li"},"Alerts Data Stream")," that stores the unique ",(0,s.kt)("strong",{parentName:"li"},"id")," of the alert and ",(0,s.kt)("strong",{parentName:"li"},"Unique Count")," is an aggregation that returns count of unique non empty fields.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905153016355",src:a(27090).Z,width:"441",height:"780"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905153119253",src:a(40578).Z,width:"457",height:"770"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220704113152023",src:a(34312).Z,width:"525",height:"756"})),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"At this point the widget in its ",(0,s.kt)("strong",{parentName:"li"},"simplest form is almost ready"),", but it can be edited in various ways to suit individual preferences. As you can see our Widget counted 4296 security incidents in the last 24h. To save the ",(0,s.kt)("strong",{parentName:"li"},"Widget"),", use the ",(0,s.kt)("strong",{parentName:"li"},"Create button"),", then it appears on the list of widgets and is ready to be used as part of the ",(0,s.kt)("strong",{parentName:"li"},"Dashboard"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905153339735",src:a(40465).Z,width:"1473",height:"1089"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"visual-tuning"},"Visual tuning"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Change the tab to the ",(0,s.kt)("strong",{parentName:"li"},"Options")," and add an icon to the number displayed and to allow other users to launch the widget.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905153823803",src:a(55409).Z,width:"467",height:"1017"})),(0,s.kt)("p",null,"In the ",(0,s.kt)("strong",{parentName:"p"},"KPI icon")," section there are many icons to choose, in the example let\u2019s choose the ",(0,s.kt)("strong",{parentName:"p"},"Warning sign")," icon. The result looks like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905154039173",src:a(66917).Z,width:"169",height:"82"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905154004236",src:a(96245).Z,width:"1474",height:"1102"})),(0,s.kt)("h2",{id:"changing-widget-permissions"},"Changing widget permissions"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Change the tab to the ",(0,s.kt)("strong",{parentName:"li"},"Options"),". By default, the Widget has permission settings as ",(0,s.kt)("strong",{parentName:"li"},"Private"),". ")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905144907213",src:a(37129).Z,width:"439",height:"365"})),(0,s.kt)("p",null,"If you want other users to be able to use the ",(0,s.kt)("strong",{parentName:"p"},"Widget"),", change its permissions to ",(0,s.kt)("strong",{parentName:"p"},"Public"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905145018349",src:a(28477).Z,width:"432",height:"413"})))}c.isMDXComponent=!0},78829:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220620103155525-806125d677b59f83364cf08c5a9f1f11.png"},59398:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220620105022147-dcaa5fbdaced552e5662c57c673265cf.png"},8721:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220704110915152-d92654b1ebd616b001ecbb4deaee9891.png"},56343:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220704111118805-ffc26d08c70fed0b9fe25ca5de0f3b11.png"},34312:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220704113152023-8c59a57c4dec8f1566b9486569499110.png"},37129:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905144907213-bf98a313400c17939614fe32c0a8f002.png"},28477:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905145018349-df88b9f43ccc099d2aa61ff7139c06e6.png"},36138:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905152327228-b76ff7fde0f47c7811a59b27d8383007.png"},51876:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905152556708-34d3b38b107ccfc01a4ac5f4e46df089.png"},5919:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905152819668-501b902cb515bbf21b806456a10a79fb.png"},27090:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905153016355-82d1600671b6f88b70142730fa9b0977.png"},40578:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905153119253-60cf99426908c8e8f88c6c33e6ac1fa6.png"},40465:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905153339735-2384821-83ace7b147605adc3ce4616337dd6823.png"},55409:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905153823803-1cfd77b90dda39b7c1211aed32474e74.png"},96245:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905154004236-bd946ca5a6f352f8eecba23abf0840aa.png"},66917:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220905154039173-395c641a9483ac984640e3b7ffb41d81.png"}}]);