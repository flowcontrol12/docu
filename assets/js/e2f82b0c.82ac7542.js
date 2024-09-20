"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45320],{603905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||i;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},136054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(487462),r=a(263366),i=(a(667294),a(603905)),s=["components"],o={},l="Examples of alert rule creation - advanced way",p={unversionedId:"Examples/Rules Examples/Alert rule from scratch",id:"version-2.6/Examples/Rules Examples/Alert rule from scratch",title:"Examples of alert rule creation - advanced way",description:"The advanced method of creating a Rule is to design it from scratch. In our example, we will create a rule named Virus Outbreak to detect malware spreading. Detection of such a case can be realized by detecting the communication of one workstation with many others in a short period of time. So let's proceed to create such a rule from scratch.",source:"@site/versioned_docs/version-2.6/06-Examples/Rules Examples/Alert rule from scratch.md",sourceDirName:"06-Examples/Rules Examples",slug:"/Examples/Rules Examples/Alert rule from scratch",permalink:"/2.6/Examples/Rules Examples/Alert rule from scratch",draft:!1,tags:[],version:"2.6",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",frontMatter:{},sidebar:"docs",previous:{title:"Rules Examples",permalink:"/2.6/Examples/Rules Examples/"},next:{title:"Examples of rule creation - simple way",permalink:"/2.6/Examples/Rules Examples/Rule from template"}},c={},m=[{value:"Implementation",id:"implementation",level:2},{value:"Advanced options",id:"advanced-options",level:3}],d={toc:m};function g(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples-of-alert-rule-creation---advanced-way"},"Examples of alert rule creation - advanced way"),(0,i.kt)("p",null,"The advanced method of creating a ",(0,i.kt)("strong",{parentName:"p"},"Rule")," is to design it from scratch. In our example, we will create a rule named ",(0,i.kt)("strong",{parentName:"p"},"Virus Outbreak")," to detect malware spreading. Detection of such a case can be realized by detecting the communication of one workstation with many others in a short period of time. So let's proceed to create such a rule from scratch."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To design a new rule go to menu ","[Alerts>",(0,i.kt)("strong",{parentName:"p"},"Rule Set"),"]"," and then click ",(0,i.kt)("strong",{parentName:"p"},"New rule")," and select ",(0,i.kt)("strong",{parentName:"p"},"From scratch")," option."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230626110622025",src:a(441431).Z,width:"1926",height:"757"})),(0,i.kt)("p",null,"When clicked, a rule creator window appears in which the system indicates which fields should be filled in."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220808134611997",src:a(494327).Z,width:"857",height:"392"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"General")," section we set the rule enable (Active), fill in the required fields: ",(0,i.kt)("strong",{parentName:"p"},"Rule Type"),", ",(0,i.kt)("strong",{parentName:"p"},"Name"),", ",(0,i.kt)("strong",{parentName:"p"},"Score")," and optionally ",(0,i.kt)("strong",{parentName:"p"},"Tags"),", Description or MITRE (Tactic, Technique, Subtechnique).\n",(0,i.kt)("img",{alt:"image-20220808135823474",src:a(953640).Z,width:"852",height:"347"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220808135758168",src:a(112152).Z,width:"1114",height:"355"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Stream")," section, we choose Netflow because we want to analyze traffic on raw flows.\n",(0,i.kt)("img",{alt:"image-20220809122623037",src:a(884379).Z,width:"927",height:"422"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Time")," section, we leave the default value of 15 minute.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Values")," section, we select the fields for which we want to set thresholds for anomaly detection. In our case these are: ",(0,i.kt)("strong",{parentName:"p"},"Unique Server IPs")," and ",(0,i.kt)("strong",{parentName:"p"},"Count Sessions"),". "),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("img",{alt:"image-20230626111221948",src:a(262459).Z,width:"1985",height:"1056"}),"\nThese metrics are predefined, and you can preview it in ",(0,i.kt)("strong",{parentName:"p"},"[Settings > Configuration > Objects > Metrics]"),".\n",(0,i.kt)("img",{alt:"image-20220809111545608",src:a(113585).Z,width:"486",height:"828"}),(0,i.kt)("img",{alt:"image-20220809111522406",src:a(565499).Z,width:"480",height:"704"})),(0,i.kt)("p",{parentName:"li"},"   In case you want to use a custom metric, you can create one from the ","[",(0,i.kt)("strong",{parentName:"p"},"Values -> Add new metric"),"]",", or you can go to ",(0,i.kt)("strong",{parentName:"p"},"[Settings > Configuration > Objects > Metrics]"),".\n",(0,i.kt)("img",{alt:"image-20230626111334670",src:a(200811).Z,width:"1053",height:"149"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Categories")," section, we set grouping by Client IP and Server Port, because we want to detect a situation where an infected host (Client IP) communicates with multiple servers (Unique Server IPs) on a given port (Server Port)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626111646107",src:a(526341).Z,width:"1047",height:"217"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626111742124",src:a(513853).Z,width:"1985",height:"1056"})))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Schedule")," section, we leave the default parameters for interval and throttling, i.e. 1 minute, because, for this scenario, a time interval of 1 minute will be right. In the Indexed fields option, the same values are set as in Categories.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Thresholds")," section, set the exceedance values for the metrics configured in the Values section."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626112112763",src:a(374631).Z,width:"1052",height:"394"})),(0,i.kt)("p",{parentName:"li"},"The correlation rule will trigger when in a period of 1 minute, one host (Client IP) will communicate with at least 10 hosts (Server IP) using the same port and there will be at least 1 established session (Count Sessions). If there are more of these attempts then the rule will have a higher criticality - depending on the configured thresholds (Major and Critical)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626112201043",src:a(621470).Z,width:"1980",height:"1056"})))),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Actions")," section, we specify that all our alerts (Critical, Major, Minor) generated by this rule will be saved in the alerts table, and we also set custom fields that should additionally be included in the alert (First Client Country, First Client Function, First Client ASN)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626112657723",src:a(247170).Z,width:"1054",height:"313"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626112743764",src:a(364905).Z,width:"1055",height:"388"})),(0,i.kt)("p",{parentName:"li"},"Custom fields are metrics, so their configuration is available in the ",(0,i.kt)("strong",{parentName:"p"},"[Settings > Configuration > Objects > Metrics]"),"."))),(0,i.kt)("h3",{id:"advanced-options"},"Advanced options"),(0,i.kt)("p",null,"In our example, we will also use the advanced options available by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Show advanced option")," switch. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220809123906436",src:a(708215).Z,width:"943",height:"534"})),(0,i.kt)("p",null,"We want our rule to generate as few False Positives alerts as possible so we use the ",(0,i.kt)("strong",{parentName:"p"},"Time & Input Filters")," section for this purpose. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Time & Input Filters")," section, in order to limit detection to only private addresses and the Workstations function group, we enter the following condition in the ",(0,i.kt)("strong",{parentName:"p"},"Filter by"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'lookupKeyExists("groups-private", {"cidr": serverIp } ) AND lookupKeyExists("groups-private", {"cidr": clientIp } ) AND any(serverGroups, ["Workstations"]) \n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220809161141308",src:a(863051).Z,width:"544",height:"157"})),(0,i.kt)("p",{parentName:"li"},"IP Addresses of  the Workstations function group may be changed in the  ",(0,i.kt)("strong",{parentName:"p"},"[Settings > Configuration > Mapping > Lookups]"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, in the ",(0,i.kt)("strong",{parentName:"p"},"Sorting")," section, we can set sorting by some metric, such as ",(0,i.kt)("strong",{parentName:"p"},"Unique Server IPs"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626141812232",src:a(831554).Z,width:"1028",height:"174"})),(0,i.kt)("p",{parentName:"li"},"If we think that our rule has been configured as we expected, we should press ",(0,i.kt)("strong",{parentName:"p"},"Create")," and the rule will appear in the list of rules in the system."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626143855358",src:a(783190).Z,width:"2256",height:"963"})))))}g.isMDXComponent=!0},494327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808134611997-e500e0dd3777c252552be550df24ca10.png"},112152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808135758168-e41adc13e16e5aecebc1ca013675f5d9.png"},953640:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808135823474-1ddfb82c9c36bfcbaf51ff39a5e8c15a.png"},565499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809111522406-ee07116d408808a4632d796122908bc4.png"},113585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809111545608-321e86ea94a63292a0d42596a5d96cd5.png"},884379:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809122623037-42f2f5aae6f7d2a7ad55d7e6d67f21bd.png"},708215:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809123906436-563a0a4c3a6109131778d2424506ac50.png"},863051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809161141308-cefe50d69a29d372e1c5643850f6d953.png"},441431:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626110622025-7c19084703a43e4c51636087a15684d1.png"},262459:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626111221948-03ab1dd17358714b26dfcaaddc02ff6a.png"},200811:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626111334670-b5e7c5ddee1cb41f0c9c6961f5b4867f.png"},526341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626111646107-042aef1d660d90a79a20baa448bde861.png"},513853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626111742124-bfc848c330e83794b4e0b7ae72bc22c6.png"},374631:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626112112763-df917996937536f12e315f2e97cb0882.png"},621470:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626112201043-91ac9c7cb7e10c83a49fc2e0cab65225.png"},247170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626112657723-e8434ef1ddf80491f0c0245a22a67eae.png"},364905:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626112743764-00904d5f4e3f76917b671e515f0dedf5.png"},831554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626141812232-bc629a6a43f983b32725288e10b7ca7a.png"},783190:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626143855358-7b9b16553c34cd8f531ee6aae3b84437.png"}}]);