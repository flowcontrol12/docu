"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=l(a),d=r,u=g["".concat(p,".").concat(d)]||g[d]||c[d]||i;return a?n.createElement(u,s(s({ref:t},m),{},{components:a})):n.createElement(u,s({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),s=["components"],o={},p="Examples of rule creation - simple way",l={unversionedId:"Examples/Rules Examples/Rule from template",id:"Examples/Rules Examples/Rule from template",title:"Examples of rule creation - simple way",description:"A simple method of a rule creation existing templates to design custom rules. In our example, we will configure a Rule based on the DoS attack template.",source:"@site/docs/06-Examples/Rules Examples/Rule from template.md",sourceDirName:"06-Examples/Rules Examples",slug:"/Examples/Rules Examples/Rule from template",permalink:"/Examples/Rules Examples/Rule from template",draft:!1,tags:[],version:"current",lastUpdatedAt:1688740171,formattedLastUpdatedAt:"7 Jul 2023",frontMatter:{},sidebar:"docs",previous:{title:"Examples of alert rule creation - advanced way",permalink:"/Examples/Rules Examples/Alert rule from scratch"},next:{title:"Widgets Examples",permalink:"/Examples/Widgets Examples/"}},m={},c=[{value:"Implementation",id:"implementation",level:2},{value:"Overview of the rule template section",id:"overview-of-the-rule-template-section",level:2},{value:"Simple options",id:"simple-options",level:3},{value:"Advanced option",id:"advanced-option",level:3}],g={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples-of-rule-creation---simple-way"},"Examples of rule creation - simple way"),(0,i.kt)("p",null,"A simple method of a rule creation existing templates to design custom rules. In our example, we will configure a ",(0,i.kt)("strong",{parentName:"p"},"Rule")," based on the ",(0,i.kt)("strong",{parentName:"p"},"DoS attack template"),"."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To design a new rule go to menu ",(0,i.kt)("strong",{parentName:"p"},"[Alerts->Rule Set]")," and then click ",(0,i.kt)("strong",{parentName:"p"},"New rule")," and select ",(0,i.kt)("strong",{parentName:"p"},"From template")," option."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230627130750950",src:a(71773).Z,width:"1615",height:"758"})),(0,i.kt)("p",null,"A list of built-in rule templates is displayed. Select any template to get a preconfigured rule."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230626145410424",src:a(22698).Z,width:"1027",height:"554"})),(0,i.kt)("p",null,"In our example, we will use the ",(0,i.kt)("strong",{parentName:"p"},"DoS Attack")," template. After selecting the template, a window with the configuration of the rule is displayed. The configuration is divided into sections."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230627130945091",src:a(91394).Z,width:"831",height:"341"})),(0,i.kt)("h2",{id:"overview-of-the-rule-template-section"},"Overview of the rule template section"),(0,i.kt)("h3",{id:"simple-options"},"Simple options"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"General")," section contains general rule settings, such as the name, description, severity, or ATT&CK MITRE tactics and technique, for example."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626145631800",src:a(19717).Z,width:"953",height:"400"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230627131134690",src:a(40231).Z,width:"947",height:"397"})))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Stream")," section, the data stream on which the rule will operate is specified, in our case it is the ",(0,i.kt)("strong",{parentName:"p"},"netflow")," stream."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220809163957207",src:a(61754).Z,width:"288",height:"123"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Time")," section, the time interval for which the rule searches for correlations is specified, in our case it is for a period of 1 minute. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Values")," section we specify the ",(0,i.kt)("strong",{parentName:"p"},"metrics")," it uses, we see that the rule uses, three ",(0,i.kt)("strong",{parentName:"p"},"metrics"),": ",(0,i.kt)("strong",{parentName:"p"},"Sum Bytes"),", ",(0,i.kt)("strong",{parentName:"p"},"Sum Packets")," and ",(0,i.kt)("strong",{parentName:"p"},"Count Sessions"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626145932805",src:a(22818).Z,width:"1155",height:"179"})),(0,i.kt)("p",{parentName:"li"},"Definitions of metrics are located in the ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration->Objects->Metrics"),"]",". The ",(0,i.kt)("strong",{parentName:"p"},"Sum Bytes metric")," calculates the total number of bytes in both directions (client <-> server).  ",(0,i.kt)("img",{alt:"image-20220809164501712",src:a(250).Z,width:"691",height:"1064"})),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Sum Packets metric")," calculates the total number of packets in both directions (client <-> server).\n",(0,i.kt)("img",{alt:"image-20220809164608485",src:a(68629).Z,width:"685",height:"1058"})),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Count Sessions metric")," calculates the number of sessions.\n",(0,i.kt)("img",{alt:"image-20220809164704475",src:a(33757).Z,width:"485",height:"930"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Categories")," section defines fields by which the data are grouped. In this case, we are interested in grouping by the ",(0,i.kt)("strong",{parentName:"p"},"Client IP"),", ",(0,i.kt)("strong",{parentName:"p"},"Server IP"),", ",(0,i.kt)("strong",{parentName:"p"},"Server Port"),", ",(0,i.kt)("strong",{parentName:"p"},"Client AS Name"),", ",(0,i.kt)("strong",{parentName:"p"},"Client Country"),", ",(0,i.kt)("strong",{parentName:"p"},"Server AS Name"),", ",(0,i.kt)("strong",{parentName:"p"},"Server Country")," fields. We want to monitor DoS attacks on specific servers, so we need to group data by these fields."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626150613226",src:a(1620).Z,width:"1159",height:"256"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Schedule")," section, we specify the interval every time the rule is executed and suppressed."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220805122524748",src:a(68391).Z,width:"369",height:"233"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Thresholds")," section defines the default threat exceedance thresholds of the rule that detects DoS attacks. Depending on the exceedance level, an alert is generated at the appropriate level: Minor, Major or Critical."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626150253500",src:a(17855).Z,width:"1163",height:"358"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Actions")," section specifies that all DoS alert levels will be stored in the alert table, and that the alert will display such ",(0,i.kt)("strong",{parentName:"p"},"custom fields")," as:  First Client Function, Join Client TCP Flags, First Server Function."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626150351370",src:a(20885).Z,width:"1160",height:"250"}),"\n",(0,i.kt)("img",{alt:"image-20230626150449822",src:a(51648).Z,width:"1163",height:"346"})))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"advanced-option"},"Advanced option"),(0,i.kt)("p",null,"Clicking on the show advanced option switch gives you access to advanced template options."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230626150724092",src:a(92039).Z,width:"1173",height:"474"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Time & Input filters")," section, the ",(0,i.kt)("strong",{parentName:"p"},"Filter by")," setting specifies a condition for the ",(0,i.kt)("strong",{parentName:"p"},"Public")," function group. This condition means that threat detection applies only to IP addresses in the ",(0,i.kt)("strong",{parentName:"p"},"Public")," function group. In this filter, a collector ",(0,i.kt)("inlineCode",{parentName:"p"},"top1000IPsLast2Minutes")," is also used. Its role is to pre-filter the data by collecting Top 10k IPs in Last 2 Minutes Timeline with the highest sessions (at least more than 1 k) and packets count more than 1k. You can find the collector configurations in the menu ","[Configuration>Objects>",(0,i.kt)("strong",{parentName:"p"},"Collectors"),"]","."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230626150930142",src:a(89189).Z,width:"1161",height:"151"})),(0,i.kt)("p",{parentName:"li"},"To find out what IP addresses are in the ",(0,i.kt)("strong",{parentName:"p"},"Public")," function group you need to go to ",(0,i.kt)("strong",{parentName:"p"},"[Configuration->Mapping -> Lookups / groups-function]",".")," By default, there are no network ranges set (0.0.0.0/32), so in order for the rule to work properly, you need to add the appropriate subnets named ",(0,i.kt)("strong",{parentName:"p"},"Public"),". Therefore, before creating a rule from a given template, you should read its description and configure related objects."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220808124715475",src:a(80466).Z,width:"622",height:"600"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Sorting")," section, we define the type of sorting in our case by ",(0,i.kt)("strong",{parentName:"p"},"Sum Bytes"),", and then, by ",(0,i.kt)("strong",{parentName:"p"},"Sum Packets"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230627125149688",src:a(82360).Z,width:"646",height:"158"})))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Limit")," section specifies that a rule can generate a maximum of ",(0,i.kt)("strong",{parentName:"p"},"100 alerts")," during a single execution, this was specified so that the correlation engine would not be overloaded in case of incorrect threshold configuration."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220808125851371",src:a(47124).Z,width:"518",height:"144"})))),(0,i.kt)("p",null,"When creating a rule from ",(0,i.kt)("strong",{parentName:"p"},"Template"),", all parameters can be freely modified, and after clicking on ",(0,i.kt)("strong",{parentName:"p"},"Create,")," our rule will appear in the list of rules."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230627131840961",src:a(70203).Z,width:"1455",height:"235"})))}d.isMDXComponent=!0},22698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626145410424-cd0ab3adb16b1334881bd9daa04338c9.png"},22818:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626145932805-a4b9ae8bbca8116894722e1f1fcfbb2a.png"},17855:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626150253500-9f1c63042182653974cd3f1da2ef5e1e.png"},20885:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626150351370-7623c1c55e682a413a5c60e54ebdeab6.png"},51648:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626150449822-d146086bf2d46f142ea7cb9c6dea7776.png"},1620:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626150613226-e26b2496a28639279c87215dbdb79ca9.png"},92039:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626150724092-e9368d9cb2d3df5216227f67bfd51f47.png"},89189:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230626150930142-0abf1c06f93182c1bc6540a54e9284a8.png"},82360:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230627125149688-560c27a0daade95c674f23aa1c9599cf.png"},71773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230627130750950-e0d07bc7a4b83fe370142ce68ac0bcf3.png"},91394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230627130945091-a22fb36c65f9fff4345e9278f1521cc4.png"},40231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230627131134690-9f7ffbb687fd5ca119fa6e73bffbcc84.png"},19717:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230627131219124-27105c8ccf4e6646de823a7734cd9c94.png"},70203:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230627131840961-ed1c61d96ca912469079a465a5c187a4.png"},68391:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220805122524748-1e45916a07e6715398f394fb741ce0da.png"},80466:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808124715475-d647ca8299cdfd1a98b73e8c7212763f.png"},47124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808125851371-b4211f8a7aae91c034110856029cfa26.png"},61754:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809163957207-0a9f306efb7ff0aeead4195bade5d449.png"},250:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809164501712-2094ce9e283d1fcbc650635d8c1e3e11.png"},68629:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809164608485-f48d6767d2a82a364b76f5b77b9a1060.png"},33757:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220809164704475-50d9d9ff19031a69721429f16063bce9.png"}}]);