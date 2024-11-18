"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23713],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(667294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(l,".").concat(d)]||c[d]||g[d]||s;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},648955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>g});var n=a(487462),i=a(263366),s=(a(667294),a(603905)),r=["components"],o={},l="Examples of widget creation - advanced widget",p={unversionedId:"Examples/Widgets Examples/Widget Total Traffic 15min",id:"version-2.2.3/Examples/Widgets Examples/Widget Total Traffic 15min",title:"Examples of widget creation - advanced widget",description:"Total traffic Bytes 15min - example assumption",source:"@site/versioned_docs/version-2.2.3/06-Examples/Widgets Examples/Widget Total Traffic 15min.md",sourceDirName:"06-Examples/Widgets Examples",slug:"/Examples/Widgets Examples/Widget Total Traffic 15min",permalink:"/2.2.3/Examples/Widgets Examples/Widget Total Traffic 15min",draft:!1,tags:[],version:"2.2.3",frontMatter:{},sidebar:"docs",previous:{title:"Examples of widget creation - simple widget",permalink:"/2.2.3/Examples/Widgets Examples/Widget KPI Alerts last 24h"},next:{title:"Release notes",permalink:"/2.2.3/Release notes"}},m={},g=[{value:"Total traffic Bytes 15min - example assumption",id:"total-traffic-bytes-15min---example-assumption",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Visual tuning",id:"visual-tuning",level:2},{value:"Changing widget permissions",id:"changing-widget-permissions",level:2}],c={toc:g};function d(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"examples-of-widget-creation---advanced-widget"},"Examples of widget creation - advanced widget"),(0,s.kt)("h2",{id:"total-traffic-bytes-15min---example-assumption"},"Total traffic Bytes 15min - example assumption"),(0,s.kt)("p",null,"We want to create a ",(0,s.kt)("strong",{parentName:"p"},"Widget")," that will show ",(0,s.kt)("strong",{parentName:"p"},"total traffic in the last 15 minutes on the chart"),"."),(0,s.kt)("h2",{id:"implementation"},"Implementation"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Widgets are created and edited in the menu ","[Dashboard>Management>",(0,s.kt)("strong",{parentName:"li"},"Widgets"),"]",". ")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220704110915152",src:a(177378).Z,width:"785",height:"449"})),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"To add a widget, click on the ",(0,s.kt)("strong",{parentName:"li"},"Add Widget")," button, then the widget wizard will appear. ")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220704111118805",src:a(391355).Z,width:"1232",height:"957"})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Visualization Tab"),",  enter the name of the ",(0,s.kt)("strong",{parentName:"li"},"Widget")," in the field ",(0,s.kt)("strong",{parentName:"li"},"Title"),". In addition to entering a name, you can enter a short description of the ",(0,s.kt)("strong",{parentName:"li"},"Widget")," in the field ",(0,s.kt)("strong",{parentName:"li"},"Description")," and assign ",(0,s.kt)("strong",{parentName:"li"},"Tags"),". Now it is necessary to select the type of visualization you want to use. In this example it will be ",(0,s.kt)("strong",{parentName:"li"},"Line"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220704125730061",src:a(681535).Z,width:"558",height:"737"})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Change the tab to ",(0,s.kt)("strong",{parentName:"p"},"Data"),". The system marks with a maroon color and a triangle icon with an exclamation mark the sections in which it is necessary to complete the configuration. First, we need to choose the ",(0,s.kt)("strong",{parentName:"p"},"Data Stream")," that we will use to create the ",(0,s.kt)("strong",{parentName:"p"},"Widget")," - it must have, in this case, data on the amount of traffic in ",(0,s.kt)("strong",{parentName:"p"},"Bytes"),". In our case we can use one from two streams: ",(0,s.kt)("strong",{parentName:"p"},"netflow")," (Deduplicated Netflow and Sflow records stream or ",(0,s.kt)("strong",{parentName:"p"},"netflowTotalAggr")," (Netflow 1 min aggregated). In both cases the results will be the same, the only difference will be in the use of server resources - ",(0,s.kt)("strong",{parentName:"p"},"netflowTotalAggr")," is a stream already aggregated so the operations will require less resources and thus will be performed faster, so let's choose it. "),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"image-20220905141455902",src:a(200512).Z,width:"430",height:"301"})))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220826132226272",src:a(732751).Z,width:"569",height:"1087"})),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Leave the time for which calculations are to be performed at ",(0,s.kt)("strong",{parentName:"li"},"Last 15 minutes"),". To calculate the ",(0,s.kt)("strong",{parentName:"li"},"total traffic")," per unit time, we need to select the ",(0,s.kt)("strong",{parentName:"li"},"Bytes")," field and ",(0,s.kt)("strong",{parentName:"li"},"Sum Aggregation"),"  to calculate sum bytes.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905144136437",src:a(47650).Z,width:"447",height:"780"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905144231145",src:a(137131).Z,width:"433",height:"727"})),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Leave the settings of the ",(0,s.kt)("strong",{parentName:"p"},"Categories")," section unchanged. Time value will be displayed on the X axis. At this point we get an overview appearance of the ",(0,s.kt)("strong",{parentName:"p"},"Widget"),"."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"image-20220905144322519",src:a(761114).Z,width:"436",height:"522"})))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905144507480",src:a(704490).Z,width:"1685",height:"1168"})),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"At this point we can finish creating the widget by saving it with the ",(0,s.kt)("strong",{parentName:"li"},"Create")," button.")),(0,s.kt)("p",null,"As you can see above the chart looks quite ascetic for example: no axis descriptions, values on the Y axis not user frendly, no legend. How to make a more custom chart is described in the section below - ",(0,s.kt)("strong",{parentName:"p"},"Visual tuning"),". "),(0,s.kt)("p",null,"Our new ",(0,s.kt)("strong",{parentName:"p"},"Widget")," appears in the list of widgets and is ready to be used as part of the ",(0,s.kt)("strong",{parentName:"p"},"Dashboard"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220705184715016",src:a(638561).Z,width:"1779",height:"1211"})),(0,s.kt)("h2",{id:"visual-tuning"},"Visual tuning"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Change the tab to the ",(0,s.kt)("strong",{parentName:"li"},"Options"),".")),(0,s.kt)("p",null,"Let's change the formatting of the numbers on the ",(0,s.kt)("strong",{parentName:"p"},"Y-axis")," to a more friendly one - set the format unit to ",(0,s.kt)("strong",{parentName:"p"},"Decimal bytes (b).")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220705181558609",src:a(503295).Z,width:"455",height:"1060"})),(0,s.kt)("p",null,"You can see that the values on the Y axis now looks much better."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905145427678",src:a(666411).Z,width:"1492",height:"1020"})),(0,s.kt)("p",null,"Let's add descriptions of axes.To do this, turn on the ",(0,s.kt)("strong",{parentName:"p"},"Custom axis name switch")," in ",(0,s.kt)("strong",{parentName:"p"},"Value Axis 1")," section and enter the axis name in the ",(0,s.kt)("strong",{parentName:"p"},"Custom name")," field - in our example, we'll enter the word ",(0,s.kt)("strong",{parentName:"p"},"Bytes"),". In the ",(0,s.kt)("strong",{parentName:"p"},"Label Location")," field we can specify in which part of the ",(0,s.kt)("strong",{parentName:"p"},"Y axis")," the name will be displayed (Center, End, Start) - let's choose ",(0,s.kt)("strong",{parentName:"p"},"End"),". In the ",(0,s.kt)("strong",{parentName:"p"},"Name gap from chart")," field, we can specify the distance from the ",(0,s.kt)("strong",{parentName:"p"},"Y axis")," at which the label name will be displayed - let's enter a value of ",(0,s.kt)("strong",{parentName:"p"},"5"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220705183257684",src:a(118144).Z,width:"463",height:"1061"})),(0,s.kt)("p",null,"Now our chart looks like the one below."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905150052785",src:a(51237).Z,width:"1696",height:"1024"})),(0,s.kt)("p",null,"In the same way, let's add a description of the ",(0,s.kt)("strong",{parentName:"p"},"Category axes")," (X axis)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905150240494",src:a(619975).Z,width:"1701",height:"1014"})),(0,s.kt)("h2",{id:"changing-widget-permissions"},"Changing widget permissions"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Change the tab to the ",(0,s.kt)("strong",{parentName:"p"},"Options"),"."),(0,s.kt)("p",{parentName:"li"},"By default, the Widget has permission settings as ",(0,s.kt)("strong",{parentName:"p"},"Private"),". "))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905144907213",src:a(572711).Z,width:"439",height:"365"})),(0,s.kt)("p",null,"If you want other users to be able to use the ",(0,s.kt)("strong",{parentName:"p"},"Widget"),", change its permissions to ",(0,s.kt)("strong",{parentName:"p"},"Public"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220905145018349",src:a(356550).Z,width:"432",height:"413"})),(0,s.kt)("p",null,"Our new ",(0,s.kt)("strong",{parentName:"p"},"Widget")," appears in the list of widgets and is ready to be used as part of the ",(0,s.kt)("strong",{parentName:"p"},"Dashboard"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220705184715016",src:a(638561).Z,width:"1779",height:"1211"})))}d.isMDXComponent=!0},177378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220704110915152-d92654b1ebd616b001ecbb4deaee9891.png"},391355:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220704111118805-ffc26d08c70fed0b9fe25ca5de0f3b11.png"},681535:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220704125730061-3cf9bc1d0537c07e0937f7bda1345a88.png"},503295:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220705181558609-8bdde5dba5650275acb3fb664c05c5d2.png"},118144:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220705183257684-33844208faf7e9413711116d5845e0ae.png"},638561:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220705184715016-0c669da577a48ccd7a4a413408406e4c.png"},732751:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220826132226272-03f84e7c079318681557b5b4019a68ee.png"},200512:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905141455902-6ae57488b855a72442e79a742e914485.png"},47650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905144136437-15a92bb30d287e68ac103c44390e98b9.png"},137131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905144231145-b6a31e339537fed2c31a1e1c84c89e48.png"},761114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905144322519-e0cba5235c57baa81b9dbcbf84d1b955.png"},704490:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905144507480-eb6a0e37514901088da5fdb1efebb9ae.png"},572711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905144907213-bf98a313400c17939614fe32c0a8f002.png"},356550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905145018349-df88b9f43ccc099d2aa61ff7139c06e6.png"},666411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905145427678-9f09533437a1ec630fefde08c169fc09.png"},51237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905150052785-f987912b73039eaedf06c62e09621c5e.png"},619975:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220905150240494-499740902529031106d045f4729873d2.png"}}]);