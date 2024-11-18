"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43619],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,h=d["".concat(l,".").concat(g)]||d[g]||m[g]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},624117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(487462),r=a(263366),i=(a(667294),a(603905)),s=["components"],o={},l="Examples of alert rule creation - advanced way",c={unversionedId:"Examples/Alert rule from scratch",id:"version-2.0.29/Examples/Alert rule from scratch",title:"Examples of alert rule creation - advanced way",description:"The advanced method of creating a Rule is to design it from scratch. In our example, we will create a rule named Virus Outbreak to detect malware spreading. Detection of such a case can be realized by detecting the communication of one workstation with many others in a short period of time. So let's proceed to create such a rule from scratch.",source:"@site/versioned_docs/version-2.0.29/05-Examples/Alert rule from scratch.md",sourceDirName:"05-Examples",slug:"/Examples/Alert rule from scratch",permalink:"/2.0.29/Examples/Alert rule from scratch",draft:!1,tags:[],version:"2.0.29",frontMatter:{},sidebar:"docs",previous:{title:"Examples",permalink:"/2.0.29/Examples/"},next:{title:"Example of Collector creation",permalink:"/2.0.29/Examples/Collector - creation example"}},p={},m=[{value:"Implementation",id:"implementation",level:2},{value:"Advanced options",id:"advanced-options",level:3}],d={toc:m};function g(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples-of-alert-rule-creation---advanced-way"},"Examples of alert rule creation - advanced way"),(0,i.kt)("p",null,"The advanced method of creating a ",(0,i.kt)("strong",{parentName:"p"},"Rule")," is to design it from scratch. In our example, we will create a rule named ",(0,i.kt)("strong",{parentName:"p"},"Virus Outbreak")," to detect malware spreading. Detection of such a case can be realized by detecting the communication of one workstation with many others in a short period of time. So let's proceed to create such a rule from scratch."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To design a new rule go to menu ",(0,i.kt)("strong",{parentName:"p"},"[Alerts->Rule Set]")," and then click ",(0,i.kt)("strong",{parentName:"p"},"New rule")," and select ",(0,i.kt)("strong",{parentName:"p"},"From scratch")," option."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220808134030222",src:a(747553).Z,width:"1656",height:"808"})),(0,i.kt)("p",null,"When clicked, a rule wizard window appears in which the system indicates which fields should be filled in."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220808134611997",src:a(310443).Z,width:"857",height:"392"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"General")," section we set the rule enable (Active), fill in the required fields: ",(0,i.kt)("strong",{parentName:"p"},"Rule Type"),", ",(0,i.kt)("strong",{parentName:"p"},"Name"),", ",(0,i.kt)("strong",{parentName:"p"},"Score")," and optionally ",(0,i.kt)("strong",{parentName:"p"},"Tags"),", Description or MITRE (Tactic, Technique, Subtechnique).\n",(0,i.kt)("img",{alt:"image-20220808135823474",src:a(532690).Z,width:"852",height:"347"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220808135758168",src:a(853171).Z,width:"1114",height:"355"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Stream")," section, we choose Netflow because we want to analyze traffic on raw flows.\n",(0,i.kt)("img",{alt:"image-20220809122623037",src:a(45943).Z,width:"927",height:"422"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Time")," section, we leave the default value of 15 minute.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Values")," section, we select the fields for which we want to set thresholds for anomaly detection. In our case these are: ",(0,i.kt)("strong",{parentName:"p"},"Unique Server IPs")," and ",(0,i.kt)("strong",{parentName:"p"},"Count Sessions"),".\n",(0,i.kt)("img",{alt:"image-20220809122849819",src:a(428410).Z,width:"1765",height:"1127"}),"\nThese metrics are predefined, and you can preview it in ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration->Objects ->Metrics"),"]",".\n",(0,i.kt)("img",{alt:"image-20220809111545608",src:a(244467).Z,width:"486",height:"828"}),(0,i.kt)("img",{alt:"image-20220809111522406",src:a(325e3).Z,width:"480",height:"704"})),(0,i.kt)("p",{parentName:"li"},"In case you want to use a custom metric, you can create one from the ","[",(0,i.kt)("strong",{parentName:"p"},"Values -> Add new metric"),"]"," , or you can go to ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration->Objects -> Metrics"),"]",".\n",(0,i.kt)("img",{alt:"image-20220809122946688",src:a(520133).Z,width:"651",height:"191"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Categories")," section, we set grouping by Client IP and Server Port, because we want to detect a situation where an infected host (Client IP) communicates with multiple servers (Unique Server IPs) on a given port (Server Port).\n",(0,i.kt)("img",{alt:"image-20220809123206972",src:a(890708).Z,width:"533",height:"224"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220809123136459",src:a(730207).Z,width:"1758",height:"1107"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Schedule")," section, we leave the default parameters for interval and throttling, i.e. 1 minute, because, for this scenario, a time interval of 1 minute will be right. In the Indexed fields option, the same values are set as in Categories.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Thresholds")," section, set the exceedance values for the metrics configured in the Values section.\n",(0,i.kt)("img",{alt:"image-20220809123405908",src:a(628088).Z,width:"728",height:"231"})),(0,i.kt)("p",{parentName:"li"},"The correlation rule will trigger when in a period of 1 minute, one host (Client IP) will communicate with at least 10 hosts (Server IP) using the same port and there will be at least 1 established session (Count Sessions). If there are more of these attempts then the rule will have a higher criticality - depending on the configured thresholds (Major and Critical).\n",(0,i.kt)("img",{alt:"image-20220809123443839",src:a(87976).Z,width:"1747",height:"1124"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Actions")," section, we specify that all our alerts (Critical, Major, Minor) generated by this rule will be saved in the alerts table, and we also set custom fields that should additionally be included in the alert (First Client Country, First Client Function, First Client ASN).\n",(0,i.kt)("img",{alt:"image-20220809123730781",src:a(193729).Z,width:"911",height:"512"}),"\nCustom fields are metrics, so their configuration is available in the ","[Configuration->Objects ->",(0,i.kt)("strong",{parentName:"p"},"Metrics"),"]","."))),(0,i.kt)("h3",{id:"advanced-options"},"Advanced options"),(0,i.kt)("p",null,"In our example, we will also use the advanced options available by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Show advanced option")," switch. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220809123906436",src:a(663412).Z,width:"943",height:"534"})),(0,i.kt)("p",null,"We want our rule to generate as few False Positives alerts as possible so we use the ",(0,i.kt)("strong",{parentName:"p"},"Time & Input Filters")," section for this purpose. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Time & Input Filters")," section, in order to limit detection to only private addresses and the Workstations function group, we enter the following condition in the ",(0,i.kt)("strong",{parentName:"p"},"Filter by"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'lookupKeyExists("groups-private", {"cidr": serverIp } ) AND lookupKeyExists("groups-private", {"cidr": clientIp } ) AND any(serverGroups, ["Workstations"]) \n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220809161141308",src:a(706693).Z,width:"544",height:"157"})),(0,i.kt)("p",{parentName:"li"},"IP Addresses of  the Workstations function group may be changed in the  ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration->Mapping->Lookups->groups-function"),"]",".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, in the ",(0,i.kt)("strong",{parentName:"p"},"Sorting")," section, we can set sorting by some metric, such as ",(0,i.kt)("strong",{parentName:"p"},"Unique Server IPs"),".\n",(0,i.kt)("img",{alt:"image-20220809161240748",src:a(877436).Z,width:"398",height:"195"})),(0,i.kt)("p",{parentName:"li"},"If we think that our rule has been configured as we expected, we should press ",(0,i.kt)("strong",{parentName:"p"},"Create")," and the rule will appear in the list of rules in the system.\n",(0,i.kt)("img",{alt:"image-20220809124350651",src:a(740591).Z,width:"1793",height:"1344"})))))}g.isMDXComponent=!0},747553:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808134030222-82337ccdd1badf0088ced0dd66946f60.png"},310443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808134611997-e500e0dd3777c252552be550df24ca10.png"},853171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808135758168-e41adc13e16e5aecebc1ca013675f5d9.png"},532690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808135823474-1ddfb82c9c36bfcbaf51ff39a5e8c15a.png"},325e3:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809111522406-ee07116d408808a4632d796122908bc4.png"},244467:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809111545608-321e86ea94a63292a0d42596a5d96cd5.png"},45943:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809122623037-42f2f5aae6f7d2a7ad55d7e6d67f21bd.png"},428410:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809122849819-3f41da00d16329c3bab7d15f43c4ff7d.png"},520133:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809122946688-badc2a531fe044b5c2138d6b1d0450a3.png"},730207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809123136459-7f324d57ce196962c44bc78d7f381798.png"},890708:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809123206972-d2b3b3273b0d2d3bf644b89bee1b2d5c.png"},628088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809123405908-128458ada14e57570e840bb2ef2f22e5.png"},87976:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809123443839-c3287d08807601ddd0ab3a41d7591c12.png"},193729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809123730781-ec3a42e10b6513f2f52a4dde83a5da63.png"},663412:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809123906436-563a0a4c3a6109131778d2424506ac50.png"},740591:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809124350651-9a1e41b31a191d24906fba27337e8650.png"},706693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809161141308-cefe50d69a29d372e1c5643850f6d953.png"},877436:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809161240748-f243bae59d92542f30717909dbaf1b7b.png"}}]);