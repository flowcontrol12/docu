"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53369],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),g=n,f=d["".concat(s,".").concat(g)]||d[g]||m[g]||i;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={},s="Example of Collector creation",p={unversionedId:"Examples/Collector - creation example",id:"Examples/Collector - creation example",title:"Example of Collector creation",description:"Collector is a type of database (data stream) for which we can configure a process that periodically queries for specific data. The data acquired by the process feeds the Collector database. Collector data can be used in two ways:",source:"@site/docs/06-Examples/Collector - creation example.md",sourceDirName:"06-Examples",slug:"/Examples/Collector - creation example",permalink:"/Examples/Collector - creation example",draft:!1,tags:[],version:"current",lastUpdatedAt:1715343956,formattedLastUpdatedAt:"10 May 2024",frontMatter:{},sidebar:"docs",previous:{title:"Using baseline in a widget - Security Alerts Widget example",permalink:"/Examples/Baseline Example/Using baseline in a widget"},next:{title:"Fields Examples",permalink:"/Examples/Fields Examples/"}},c={},m=[{value:"Implementation",id:"implementation",level:2}],d={toc:m};function g(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-of-collector-creation"},"Example of Collector creation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Collector")," is a type of database (data stream) for which we can configure a process that periodically queries for specific data. The data acquired by the process feeds the ",(0,i.kt)("strong",{parentName:"p"},"Collector")," database. ",(0,i.kt)("strong",{parentName:"p"},"Collector")," data can be used in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"As a ",(0,i.kt)("strong",{parentName:"li"},"simple database")," with data on which you can work and transform data."),(0,i.kt)("li",{parentName:"ol"},"As a ",(0,i.kt)("strong",{parentName:"li"},"collection of data")," that can be used as a filter when querying another stream with data.")),(0,i.kt)("p",null,"We will analyze the process of creating a ",(0,i.kt)("strong",{parentName:"p"},"Collector")," using the example of a ",(0,i.kt)("strong",{parentName:"p"},"Collector")," that will collect and save ",(0,i.kt)("strong",{parentName:"p"},"TOP 10 Client IPs in Last 15 Minute Timeline.")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To create a ",(0,i.kt)("strong",{parentName:"p"},"new Collector"),", go to ",(0,i.kt)("strong",{parentName:"p"},"[Settings > Configuration > Objects > Collectors]")," menu and click ",(0,i.kt)("strong",{parentName:"p"},"Add collector")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220815150707206",src:a(50558).Z,width:"2149",height:"1415"})),(0,i.kt)("p",null,"The wizard for creating a new ",(0,i.kt)("strong",{parentName:"p"},"Collector")," appears."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220815150916106",src:a(36631).Z,width:"419",height:"1129"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Id")," field, we enter the Collector NQL name."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220815154854874",src:a(18294).Z,width:"418",height:"145"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The collector has two modes of saving data:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Append switch OFF")," - Data collected from a query are overwritten (default mode).\n",(0,i.kt)("img",{alt:"image-20220815151851432",src:a(22779).Z,width:"432",height:"188"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Append switch ON")," - Data collected from a query are saved until the limit specified in the ",(0,i.kt)("strong",{parentName:"li"},"Max Records")," field is exceeded.\n",(0,i.kt)("img",{alt:"image-20220815152005727",src:a(45066).Z,width:"410",height:"269"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Collector")," (data query) can be triggered in two ways specified in the ",(0,i.kt)("strong",{parentName:"p"},"Trigger type")," field:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simple")," - launch every interval of time specified in the ",(0,i.kt)("strong",{parentName:"p"},"Repeat interval")," field. The ",(0,i.kt)("strong",{parentName:"p"},"Repeat count")," field specifies the number of launches - when it is empty the query will be executed indefinitely."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220815155445862",src:a(8651).Z,width:"388",height:"240"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Crone")," - launched using job scheduler on Unix-like operating systems.\n",(0,i.kt)("img",{alt:"image-20220815155550318",src:a(41448).Z,width:"384",height:"167"}),"\t\t")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Time range")," field, set the time range on which Collector will operate.\n",(0,i.kt)("img",{alt:"image-20220815161850365",src:a(31323).Z,width:"388",height:"72"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"NQL")," field we enter the syntax of the query - in our case it is:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'src stream="netflowByIpAggr" | where direction=0 | aggr clientBytes=sum(clientBytes) by ipAddress unwind=true | sort clientBytes desc | limit 10')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220815162124270",src:a(14653).Z,width:"387",height:"112"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("strong",{parentName:"p"},"Test")," button, we can test how our query works - what data will be returned.\n",(0,i.kt)("img",{alt:"image-20220815162249932",src:a(58247).Z,width:"381",height:"401"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If all the necessary fields of the form have been correctly completed press ",(0,i.kt)("strong",{parentName:"p"},"Save")," button to save the created object."))))}g.isMDXComponent=!0},50558:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815150707206-8af5e2d217a2dfb98d4714de44fd1f45.png"},36631:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815150916106-a222180a8ef9c7d1b2ef448332926489.png"},22779:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815151851432-c7397d5fbd1ad3aa44e66a16644b03c5.png"},45066:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815152005727-70bc38a3ea6d37d0b3fb2e51bfe9e934.png"},18294:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815154854874-51f0a7226df75b3b164a8790f67a6322.png"},8651:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815155445862-99d242a1a7255f578b633ba34047a672.png"},41448:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815155550318-0544de7c1841bdbbe9c61e6fcf8416dd.png"},31323:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815161850365-9771a2d987d3a0a2c69b1e093d36e686.png"},14653:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815162124270-8cdee1ea43a8a6c095e8ebd49339cbd0.png"},58247:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815162249932-20f8eca14ff64b51ca671b7e85b0ea92.png"}}]);