"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12144],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,f=d["".concat(m,".").concat(g)]||d[g]||l[g]||i;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),s=["components"],o={},m="Example of Metric creation - advanced metric - use function option",p={unversionedId:"Examples/Metrics - advance creation example",id:"version-2.1.0/Examples/Metrics - advance creation example",title:"Example of Metric creation - advanced metric - use function option",description:"A Metric is a function that aggregates a given field and is used in Widgets and Alerts. Defining Metrics makes our work easier we can use them multiple times in different places in the system, for example, when creating a Dashboard composed of several Widgets that use the same Metric. Then, instead of creating the same Metric several times, you define the Metric once in metrics menu and just select it in Widgets without having to create and format it again.",source:"@site/versioned_docs/version-2.1.0/05-Examples/Metrics - advance creation example.md",sourceDirName:"05-Examples",slug:"/Examples/Metrics - advance creation example",permalink:"/2.1.0/Examples/Metrics - advance creation example",draft:!1,tags:[],version:"2.1.0",lastUpdatedAt:1673276180,formattedLastUpdatedAt:"9 Jan 2023",frontMatter:{},sidebar:"docs",previous:{title:"Example of advanced field creation - use of mapper - Application Name",permalink:"/2.1.0/Examples/Fields advanced - creation example"},next:{title:"Example of Metric creation - simple metric",permalink:"/2.1.0/Examples/Metrics - creation example"}},c={},l=[{value:"Implementation",id:"implementation",level:2}],d={toc:l};function g(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-of-metric-creation---advanced-metric---use-function-option"},"Example of Metric creation - advanced metric - use function option"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Metric")," is a function that aggregates a given field and is used in ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," and ",(0,i.kt)("strong",{parentName:"p"},"Alerts"),". Defining ",(0,i.kt)("strong",{parentName:"p"},"Metrics")," makes our work easier we can use them multiple times in different places in the system, for example, when creating a ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," composed of several ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," that use the same ",(0,i.kt)("strong",{parentName:"p"},"Metric"),". Then, instead of creating the same ",(0,i.kt)("strong",{parentName:"p"},"Metric")," several times, you define the ",(0,i.kt)("strong",{parentName:"p"},"Metric")," once in metrics menu and just select it in ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," without having to create and format it again. "),(0,i.kt)("p",null,"As an example of a metric using the ",(0,i.kt)("strong",{parentName:"p"},"Use function")," option, we will configure the ",(0,i.kt)("strong",{parentName:"p"},"_sumBytes")," metric. The components of this metric are two aggregations ",(0,i.kt)("strong",{parentName:"p"},"sumClientBytes")," and ",(0,i.kt)("strong",{parentName:"p"},"sumServerBytes"),".  A post aggregation is performed on these components as the sum of the two aggregation components ",(0,i.kt)("strong",{parentName:"p"},"_sumBytes=add(sumClientBytes,sumServerBytes)"),"."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To create a ",(0,i.kt)("strong",{parentName:"p"},"new metric"),", go to ","[Configuration->Objects->",(0,i.kt)("strong",{parentName:"p"},"Metrics"),"]"," menu and click ",(0,i.kt)("strong",{parentName:"p"},"New metric")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220816113356170",src:a(29253).Z,width:"2149",height:"1329"})),(0,i.kt)("p",null,"The wizard for creating a new metric appears."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220816113512645",src:a(28926).Z,width:"520",height:"1167"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Field name"),', we enter the database name (NQL) of the new metric. The system adopts the following rules for creating names for metrics: we start the name of the metric with "_" then write the name of the aggregation and the name of the field. Thus, in our example, it will be _sumBytes .\n',(0,i.kt)("img",{alt:"image-20220818111415531",src:a(95809).Z,width:"742",height:"176"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Display name"),", we enter the name under which the new field will be visible in the system. In our example, the field name is ",(0,i.kt)("strong",{parentName:"p"},"Sum Bytes"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220818111546763",src:a(79055).Z,width:"738",height:"304"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Sources section"),", we indicate in the ",(0,i.kt)("strong",{parentName:"p"},"Source field")," the stream or streams of data where there is a field that the metric will use."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220818150705214",src:a(37027).Z,width:"741",height:"561"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We select ",(0,i.kt)("strong",{parentName:"p"},"Use Function")," and then, according to the description of the metric in the ",(0,i.kt)("strong",{parentName:"p"},"Aggr field"),", we specify two aggregations: ",(0,i.kt)("inlineCode",{parentName:"p"},"sumClientBytes=sum(clientBytes), sumServerBytes=sum(serverBytes)"),".\n",(0,i.kt)("img",{alt:"image-20220818111832419",src:a(73900).Z,width:"737",height:"559"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Post aggr")," field, we enter the phrase:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"_sumBytes=add(sumClientBytes,sumServerBytes)"),"."),(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Field")," we enter the same name as in the ",(0,i.kt)("strong",{parentName:"p"},"Field name"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Number formatting section"),", we specify how to format the data in our new field. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220815163328612",src:a(52048).Z,width:"549",height:"223"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Privacy")," section, you can set permissions for the created item. If you want it to be visible to all users, you should set the Public option."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220816125358498",src:a(90903).Z,width:"518",height:"158"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If all the necessary fields of the form have been correctly completed press ",(0,i.kt)("strong",{parentName:"p"},"Save")," button to save the created object."))),(0,i.kt)("p",null,"At the bottom of the object creation form, after correct configuration, we can see in which elements of the system our newly created object is used."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220818152226977",src:a(18012).Z,width:"744",height:"1183"})))}g.isMDXComponent=!0},52048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220815163328612-bc855a46cae1449efc73a683c813b01e.png"},29253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816113356170-85c3d3e73fa7517ef346a305c2809a68.png"},28926:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816113512645-b43d4f7147fc4c02068bcf9ff7d75448.png"},90903:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816125358498-aafd4514de8151c1249e528c0868608d.png"},95809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220818111415531-4fbca8f68084f58942388d2aa3de8011.png"},79055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220818111546763-4a6a13f6a11c55fc78bf919ad3a73d49.png"},73900:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220818111832419-b0a98803f141c41530c4ddf60aeeea1d.png"},37027:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220818150705214-1a721ebe5f456d2ad7b6e3cc9b017822.png"},18012:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220818152226977-5d2ef7e3f50a139fc9c4005d056a04b4.png"}}]);