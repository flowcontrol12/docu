"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=l(a),d=i,u=g["".concat(p,".").concat(d)]||g[d]||c[d]||r;return a?n.createElement(u,s(s({ref:t},m),{},{components:a})):n.createElement(u,s({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},71534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),s=["components"],o={},p="Examples of rule creation - simple way",l={unversionedId:"Examples/Rule from template",id:"Examples/Rule from template",title:"Examples of rule creation - simple way",description:"A simple method of a rule creation existing templates to design custom rules.",source:"@site/docs/05-Examples/Rule from template.md",sourceDirName:"05-Examples",slug:"/Examples/Rule from template",permalink:"/Examples/Rule from template",draft:!1,tags:[],version:"current",lastUpdatedAt:1663684723,formattedLastUpdatedAt:"20 Sept 2022",frontMatter:{},sidebar:"docs",previous:{title:"Example of Metric creation - simple metric",permalink:"/Examples/Metrics - creation example"},next:{title:"Using baseline in a widget - Security Alerts Widget example",permalink:"/Examples/Using baseline in a widget"}},m={},c=[{value:"Implementation",id:"implementation",level:2},{value:"Overview of the rule template section",id:"overview-of-the-rule-template-section",level:2},{value:"I. Simple options",id:"i-simple-options",level:3},{value:"II. Advanced option",id:"ii-advanced-option",level:3}],g={toc:c};function d(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"examples-of-rule-creation---simple-way"},"Examples of rule creation - simple way"),(0,r.kt)("p",null,"A simple method of a rule creation existing templates to design custom rules."),(0,r.kt)("p",null,"In our example, we will configure a ",(0,r.kt)("strong",{parentName:"p"},"Rule")," based on the ",(0,r.kt)("strong",{parentName:"p"},"DoS attack template"),"."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To design a new rule go to menu ",(0,r.kt)("strong",{parentName:"p"},"[Alerts->Rule Set]")," and then click ",(0,r.kt)("strong",{parentName:"p"},"New rule")," and select ",(0,r.kt)("strong",{parentName:"p"},"From template")," option."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220805112042200",src:a(88827).Z,width:"1775",height:"417"})),(0,r.kt)("p",null,"A list of built-in rule templates is displayed. Select any template to get a preconfigured rule."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220805112631751",src:a(99538).Z,width:"1080",height:"764"})),(0,r.kt)("p",null,"In our example, we will use the ",(0,r.kt)("strong",{parentName:"p"},"DoS Attack")," template. After selecting the template, a window with the configuration of the rule is displayed. The configuration is divided into sections."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220805114428732",src:a(44286).Z,width:"1189",height:"395"})),(0,r.kt)("h2",{id:"overview-of-the-rule-template-section"},"Overview of the rule template section"),(0,r.kt)("h3",{id:"i-simple-options"},"I. Simple options"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"General")," section contains general rule settings, such as the name, description, severity, or ATT&CK MITRE tactics and technique, for example. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220809163900872",src:a(25130).Z,width:"1832",height:"657"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Stream")," section, the data stream on which the rule will operate is specified, in our case it is the ",(0,r.kt)("strong",{parentName:"p"},"netflow")," stream."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220809163957207",src:a(61581).Z,width:"288",height:"123"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Time")," section, the time interval for which the rule searches for correlations is specified, in our case it is for a period of 1 minute. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Values")," section we specify the ",(0,r.kt)("strong",{parentName:"p"},"metrics")," it uses, we see that the rule uses, three ",(0,r.kt)("strong",{parentName:"p"},"metrics"),": ",(0,r.kt)("strong",{parentName:"p"},"Sum Bytes"),", ",(0,r.kt)("strong",{parentName:"p"},"Sum Packets")," and ",(0,r.kt)("strong",{parentName:"p"},"Count Sessions"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220805115735966",src:a(24886).Z,width:"530",height:"191"})))),(0,r.kt)("p",null,"Definitions of metrics are located in the ","[",(0,r.kt)("strong",{parentName:"p"},"Configuration->Objects->Metrics"),"]","."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Sum Bytes metric")," calculates the total number of bytes in both directions (client <-> server)."),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"image-20220809164501712",src:a(28231).Z,width:"691",height:"1064"})),(0,r.kt)("p",null," The ",(0,r.kt)("strong",{parentName:"p"},"Sum Packets metric")," calculates the total number of packets in both directions (client <-> server).\n",(0,r.kt)("img",{alt:"image-20220809164608485",src:a(77611).Z,width:"685",height:"1058"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Count Sessions metric")," calculates the number of sessions."),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"image-20220809164704475",src:a(24634).Z,width:"485",height:"930"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Categories")," section defines fields by which the data are grouped. In this case, we are interested in grouping by the ",(0,r.kt)("strong",{parentName:"p"},"Client IP"),", ",(0,r.kt)("strong",{parentName:"p"},"Server IP")," and ",(0,r.kt)("strong",{parentName:"p"},"Server Port")," ",(0,r.kt)("strong",{parentName:"p"},"fields"),". We want to monitor DoS attacks on specific servers, so we need to group data by these three fields.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Schedule")," section, we specify the interval every time the rule is executed and suppressed."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220805122524748",src:a(12627).Z,width:"369",height:"233"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Thresholds")," section defines the default threat exceedance thresholds of the rule that detects DoS attacks. Depending on the exceedance level, an alert is generated at the appropriate level: Minor, Major or Critical."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220808121132679",src:a(21862).Z,width:"1159",height:"343"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Actions")," section specifies that all DoS alert levels will be stored in the alert table, and that the alert will display such ",(0,r.kt)("strong",{parentName:"p"},"custom fields")," as: First Client Country, First Client Function, First Client ASN, Join Client TCP Flags, First Server Country, First Server Function and First Server ASN."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220808122111146",src:a(76788).Z,width:"1161",height:"512"})))),(0,r.kt)("h3",{id:"ii-advanced-option"},"II. Advanced option"),(0,r.kt)("p",null,"Clicking on the show advanced option switch gives you access to advanced template options."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220808122745741",src:a(57917).Z,width:"1180",height:"528"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Time & Input filters")," section, the ",(0,r.kt)("strong",{parentName:"p"},"Filter by")," setting specifies a condition for the ",(0,r.kt)("strong",{parentName:"p"},"Public")," function group. This condition means that threat detection applies only to assets_alert_rule_f_temp in the ",(0,r.kt)("strong",{parentName:"p"},"Public")," function group."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220808123111585",src:a(51124).Z,width:"549",height:"194"})),(0,r.kt)("p",{parentName:"li"},"To find out what assets_alert_rule_f_temp are in this group we need to go to ",(0,r.kt)("strong",{parentName:"p"},"[Configuration->Mapping -> Lookups / groups-function]",".")," By default, there are no network ranges set (0.0.0.0/32), so in order for the rule to work properly, you need to add the appropriate subnets named ",(0,r.kt)("strong",{parentName:"p"},"Public"),". Therefore, before creating a rule from a given template, you should read its description and configure related objects."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220808124715475",src:a(6305).Z,width:"622",height:"600"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Sorting")," section, we define the type of sorting in our case by ",(0,r.kt)("strong",{parentName:"p"},"Sum Bytes"),", and then, by ",(0,r.kt)("strong",{parentName:"p"},"Sum Packets"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220808125531737",src:a(79261).Z,width:"390",height:"193"}),(0,r.kt)("img",{alt:"image-20220808125410751",src:a(72741).Z,width:"386",height:"157"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Limit")," section specifies that a rule can generate a maximum of ",(0,r.kt)("strong",{parentName:"p"},"100 alerts")," during a single execution, this was specified so that the correlation engine would not be overloaded in case of incorrect threshold configuration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220808125851371",src:a(18).Z,width:"518",height:"144"})))),(0,r.kt)("p",null,"When creating a rule from ",(0,r.kt)("strong",{parentName:"p"},"Template"),", all parameters can be freely modified, and after clicking on ",(0,r.kt)("strong",{parentName:"p"},"Create,")," our rule will appear in the list of rules."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220809165643283",src:a(987).Z,width:"1589",height:"211"})))}d.isMDXComponent=!0},88827:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220805112042200-ec1c93e89bd8940385a0b018813a75e9.png"},99538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220805112631751-c52ea4f4fa5199c9c5819f7d0ba1cdd6.png"},44286:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220805114428732-1b9f77c1bee8f09da053cea52f99b886.png"},24886:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220805115735966-9b145b19f707347bce65e898b11280cb.png"},12627:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220805122524748-1e45916a07e6715398f394fb741ce0da.png"},21862:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808121132679-3c4d6f063628bea0ee6da8d104005675.png"},76788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808122111146-6853923098897b4ff07efa4863ccf73e.png"},57917:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808122745741-d2c1100b0c3f96aaf7a8c463d43e3adf.png"},51124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808123111585-15602e2e5ee1da67d7b6d8586a7c973a.png"},6305:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808124715475-d647ca8299cdfd1a98b73e8c7212763f.png"},72741:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808125515205-52d77999c59cb5fca1cc198bcd0b3026.png"},79261:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808125531737-7131faed3852da62bf6237812a95344d.png"},18:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808125851371-b4211f8a7aae91c034110856029cfa26.png"},25130:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809163900872-f4c9e4bb0180ee262f5a365a8b607417.png"},61581:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809163957207-0a9f306efb7ff0aeead4195bade5d449.png"},28231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809164501712-2094ce9e283d1fcbc650635d8c1e3e11.png"},77611:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809164608485-f48d6767d2a82a364b76f5b77b9a1060.png"},24634:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809164704475-50d9d9ff19031a69721429f16063bce9.png"},987:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809165643283-1083c72b6cad80dd753f0cec74ececf4.png"}}]);