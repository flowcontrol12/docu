"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41702],{603905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=n,f=d["".concat(s,".").concat(g)]||d[g]||m[g]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},823441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(487462),n=a(263366),i=(a(667294),a(603905)),o=["components"],l={},s="Example of Collector creation",p={unversionedId:"Examples/Collector - creation example",id:"version-2.4/Examples/Collector - creation example",title:"Example of Collector creation",description:"Collector is a type of database (data stream) for which we can configure a process that periodically queries for specific data. The data acquired by the process feeds the Collector database. Collector data can be used in two ways:",source:"@site/versioned_docs/version-2.4/06-Examples/Collector - creation example.md",sourceDirName:"06-Examples",slug:"/Examples/Collector - creation example",permalink:"/2.4/Examples/Collector - creation example",draft:!1,tags:[],version:"2.4",frontMatter:{},sidebar:"docs",previous:{title:"Using baseline in a widget - Security Alerts Widget example",permalink:"/2.4/Examples/Baseline Example/Using baseline in a widget"},next:{title:"Fields Examples",permalink:"/2.4/Examples/Fields Examples/"}},c={},m=[{value:"Implementation",id:"implementation",level:2}],d={toc:m};function g(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-of-collector-creation"},"Example of Collector creation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Collector")," is a type of database (data stream) for which we can configure a process that periodically queries for specific data. The data acquired by the process feeds the ",(0,i.kt)("strong",{parentName:"p"},"Collector")," database. ",(0,i.kt)("strong",{parentName:"p"},"Collector")," data can be used in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"As a ",(0,i.kt)("strong",{parentName:"li"},"simple database")," with data on which you can work and transform data."),(0,i.kt)("li",{parentName:"ol"},"As a ",(0,i.kt)("strong",{parentName:"li"},"collection of data")," that can be used as a filter when querying another stream with data.")),(0,i.kt)("p",null,"We will analyze the process of creating a ",(0,i.kt)("strong",{parentName:"p"},"Collector")," using the example of a ",(0,i.kt)("strong",{parentName:"p"},"Collector")," that will collect and save ",(0,i.kt)("strong",{parentName:"p"},"TOP 10 Client IPs in Last 15 Minute Timeline.")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To create a ",(0,i.kt)("strong",{parentName:"p"},"new Collector"),", go to ","[Configuration->Objects->",(0,i.kt)("strong",{parentName:"p"},"Collector"),"]"," menu and click ",(0,i.kt)("strong",{parentName:"p"},"New collector")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220815150707206",src:a(561964).Z,width:"2149",height:"1415"})),(0,i.kt)("p",null,"The wizard for creating a new ",(0,i.kt)("strong",{parentName:"p"},"Collector")," appears."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220815150916106",src:a(142514).Z,width:"419",height:"1129"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Id")," field, we enter the Collector NQL name."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220815154854874",src:a(899178).Z,width:"418",height:"145"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The collector has two modes of saving data:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Append switch OFF")," - Data collected from a query are overwritten (default mode).\n",(0,i.kt)("img",{alt:"image-20220815151851432",src:a(946562).Z,width:"432",height:"188"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Append switch ON")," - Data collected from a query are saved until the limit specified in the ",(0,i.kt)("strong",{parentName:"li"},"Max Records")," field is exceeded.\n",(0,i.kt)("img",{alt:"image-20220815152005727",src:a(226347).Z,width:"410",height:"269"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Collector")," (data query) can be triggered in two ways specified in the ",(0,i.kt)("strong",{parentName:"p"},"Trigger type")," field:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simple")," - launch every interval of time specified in the ",(0,i.kt)("strong",{parentName:"p"},"Repeat interval")," field. The ",(0,i.kt)("strong",{parentName:"p"},"Repeat count")," field specifies the number of launches - when it is empty the query will be executed indefinitely."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220815155445862",src:a(460527).Z,width:"388",height:"240"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Crone")," - launched using job scheduler on Unix-like operating systems.\n",(0,i.kt)("img",{alt:"image-20220815155550318",src:a(11509).Z,width:"384",height:"167"}),"\t\t")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Time range")," field, set the time range on which Collector will operate.\n",(0,i.kt)("img",{alt:"image-20220815161850365",src:a(121252).Z,width:"388",height:"72"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"NQL")," field we enter the syntax of the query - in our case it is:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'src stream="netflowByIpAggr" | where direction=0 | aggr clientBytes=sum(clientBytes) by ipAddress unwind=true | sort clientBytes desc | limit 10')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220815162124270",src:a(351860).Z,width:"387",height:"112"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("strong",{parentName:"p"},"Test")," button, we can test how our query works - what data will be returned.\n",(0,i.kt)("img",{alt:"image-20220815162249932",src:a(773741).Z,width:"381",height:"401"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If all the necessary fields of the form have been correctly completed press ",(0,i.kt)("strong",{parentName:"p"},"Save")," button to save the created object."))))}g.isMDXComponent=!0},561964:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815150707206-8af5e2d217a2dfb98d4714de44fd1f45.png"},142514:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815150916106-a222180a8ef9c7d1b2ef448332926489.png"},946562:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815151851432-c7397d5fbd1ad3aa44e66a16644b03c5.png"},226347:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815152005727-70bc38a3ea6d37d0b3fb2e51bfe9e934.png"},899178:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815154854874-51f0a7226df75b3b164a8790f67a6322.png"},460527:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815155445862-99d242a1a7255f578b633ba34047a672.png"},11509:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815155550318-0544de7c1841bdbbe9c61e6fcf8416dd.png"},121252:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815161850365-9771a2d987d3a0a2c69b1e093d36e686.png"},351860:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815162124270-8cdee1ea43a8a6c095e8ebd49339cbd0.png"},773741:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20220815162249932-20f8eca14ff64b51ca671b7e85b0ea92.png"}}]);