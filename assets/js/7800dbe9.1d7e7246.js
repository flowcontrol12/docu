"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48626],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=m(a),d=r,f=g["".concat(p,".").concat(d)]||g[d]||l[d]||i;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},32432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),s=["components"],o={},p="Example of Metric creation - simple metric",m={unversionedId:"Examples/Metrics - creation example",id:"version-2.0.29/Examples/Metrics - creation example",title:"Example of Metric creation - simple metric",description:"A Metric is a function that aggregates a given field and is used in Widgets and Alerts. Defining Metrics makes our work easier we can use them multiple times in different places in the system, for example, when creating a Dashboard composed of several Widgets that use the same Metric. Then, instead of creating the same Metric several times, you define the Metric once in metrics menu and just select it in Widgets without having to create and format it again.",source:"@site/versioned_docs/version-2.0.29/05-Examples/Metrics - creation example.md",sourceDirName:"05-Examples",slug:"/Examples/Metrics - creation example",permalink:"/2.0.29/Examples/Metrics - creation example",draft:!1,tags:[],version:"2.0.29",lastUpdatedAt:1666178777,formattedLastUpdatedAt:"19 Oct 2022",frontMatter:{},sidebar:"docs",previous:{title:"Example of Metric creation - advanced metric - use function option",permalink:"/2.0.29/Examples/Metrics - advance creation example"},next:{title:"Examples of rule creation - simple way",permalink:"/2.0.29/Examples/Rule from template"}},c={},l=[{value:"Implementation",id:"implementation",level:2}],g={toc:l};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-of-metric-creation---simple-metric"},"Example of Metric creation - simple metric"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Metric")," is a function that aggregates a given field and is used in ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," and ",(0,i.kt)("strong",{parentName:"p"},"Alerts"),". Defining ",(0,i.kt)("strong",{parentName:"p"},"Metrics")," makes our work easier we can use them multiple times in different places in the system, for example, when creating a ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," composed of several ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," that use the same ",(0,i.kt)("strong",{parentName:"p"},"Metric"),". Then, instead of creating the same ",(0,i.kt)("strong",{parentName:"p"},"Metric")," several times, you define the ",(0,i.kt)("strong",{parentName:"p"},"Metric")," once in metrics menu and just select it in ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," without having to create and format it again. "),(0,i.kt)("p",null,"As an example, we will configure a simple ",(0,i.kt)("strong",{parentName:"p"},"Metric")," that sums per client bytes without using the ",(0,i.kt)("strong",{parentName:"p"},"Use Function")," option."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To create a ",(0,i.kt)("strong",{parentName:"p"},"new metric"),", go to ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration->Objects->Metrics"),"]"," menu and click ",(0,i.kt)("strong",{parentName:"p"},"New metric")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220816113356170",src:a(21970).Z,width:"2149",height:"1329"})),(0,i.kt)("p",null,"The wizard for creating a new metric appears."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220816113512645",src:a(23811).Z,width:"520",height:"1167"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Field name"),', we enter the database name (NQL) of the new metric. The system adopts the following rules for creating names for metrics: we start the name of the metric with "_" then write the name of the aggregation and the name of the field. Thus, in our example, it will be _sumClientBytes.'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220816115806906",src:a(49422).Z,width:"530",height:"170"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Display name"),", we enter the name under which the new field will be visible in the system. In our example, the field name is ",(0,i.kt)("strong",{parentName:"p"},"Sum Client Bytes"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220816115847795",src:a(52789).Z,width:"524",height:"326"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Sources section"),", we indicate in the ",(0,i.kt)("strong",{parentName:"p"},"Source field")," the stream or streams of data where there is a field that the metric will use."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220816120640906",src:a(39325).Z,width:"514",height:"420"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220816120831445",src:a(1739).Z,width:"520",height:"521"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Field")," - in our example ",(0,i.kt)("strong",{parentName:"p"},"Client Bytes"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220816120916073",src:a(72172).Z,width:"522",height:"453"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Aggregation")," - in our example, ",(0,i.kt)("strong",{parentName:"p"},"Sum"),". "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220816121015754",src:a(58112).Z,width:"512",height:"409"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Number formatting section"),", we specify how to format the data in our new field. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220815163328612",src:a(72375).Z,width:"549",height:"223"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Privacy section, you can set permissions for the created item. If you want it to be visible to all users, you should set the Public option."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220816125358498",src:a(93048).Z,width:"518",height:"158"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If all the necessary fields of the form have been correctly completed press ",(0,i.kt)("strong",{parentName:"p"},"Save")," button to save the created object."))))}d.isMDXComponent=!0},72375:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220815163328612-bc855a46cae1449efc73a683c813b01e.png"},21970:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816113356170-85c3d3e73fa7517ef346a305c2809a68.png"},23811:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816113512645-b43d4f7147fc4c02068bcf9ff7d75448.png"},49422:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816115806906-a27785a507b45ecf6b4324dfbb822654.png"},52789:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816115847795-e58a80c36e633d5cedf0a377c923b88b.png"},39325:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816120640906-8f65a23703d398a8d25e7fdc9d6e559d.png"},1739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816120831445-f3431f5d4e3c0a0db4c380eb3d0f0396.png"},72172:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816120916073-85a4100be500e6520e0c71caaeb97825.png"},58112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816121015754-053abbce9f61985ac27fa97e32c3a95a.png"},93048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816125358498-aafd4514de8151c1249e528c0868608d.png"}}]);