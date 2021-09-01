(self.webpackChunk=self.webpackChunk||[]).push([[55],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),m=u(a),c=l,g=m["".concat(o,".").concat(c)]||m[c]||s[c]||r;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=m;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3749:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>d,contentTitle:()=>o,metadata:()=>u,toc:()=>p,default:()=>m});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i=["components"],d={},o=void 0,u={unversionedId:"XNS module/Threat Intelligence Engine",id:"XNS module/Threat Intelligence Engine",isDocsHomePage:!1,title:"Threat Intelligence Engine",description:"Threat Intelligence Engine",source:"@site/docs/03-XNS module/04-Threat Intelligence Engine.md",sourceDirName:"03-XNS module",slug:"/XNS module/Threat Intelligence Engine",permalink:"/XNS module/Threat Intelligence Engine",version:"current",lastUpdatedBy:"fcadmin",lastUpdatedAt:1630420395,formattedLastUpdatedAt:"8/31/2021",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Threat Detection",permalink:"/XNS module/Threat Detection"},next:{title:"Performance",permalink:"/XND module/Performance"}},p=[{value:"Threat Intelligence Engine",id:"threat-intelligence-engine",children:[{value:"Threat Intelligence Feeds",id:"threat-intelligence-feeds",children:[]},{value:"Initial Configuration",id:"initial-configuration",children:[]}]}],s={toc:p};function m(t){var e=t.components,d=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},s,d,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"threat-intelligence-engine"},"Threat Intelligence Engine"),(0,r.kt)("p",null,"The Threat Intelligence engine generates alerts based on correlation network flow attributes with external and internal IoCs. XNS regularly updates more than 30 security feeds of malicious IP addresses and suspicious countries.\nThe Threat Intelligence mechanism consists of two parts:"),(0,r.kt)("p",null,"\u2022       ",(0,r.kt)("em",{parentName:"p"},"External Threat Intelligence"),", which uses automatically updated feeds downloaded from the Internet"),(0,r.kt)("p",null,"\u2022       ",(0,r.kt)("em",{parentName:"p"},"Internal Threat Intelligence"),", which uses manually created and updated feeds."),(0,r.kt)("p",null,"Both subsystems generate the following security alerts:"),(0,r.kt)("p",null,"\u2022       Connection with Suspicious IP"),(0,r.kt)("p",null,"\u2022       Connection with Suspicious Country"),(0,r.kt)("p",null,"\u2022       Connection with Open Proxy"),(0,r.kt)("p",null,"\u2022       Connection with Open DNS"),(0,r.kt)("p",null,"\u2022       Connection with TOR."),(0,r.kt)("p",null,"Each of these alerts can be triggered by many reputational feeds."),(0,r.kt)("h3",{id:"threat-intelligence-feeds"},"Threat Intelligence Feeds"),(0,r.kt)("p",null,"The Threat Intelligence of XNS consists of external and internal (custom) feeds."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feed id"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Score"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"MITRE Tactic"),(0,r.kt)("th",{parentName:"tr",align:null},"MITRE Techniqe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP_CRYPTO_MINING"),(0,r.kt)("td",{parentName:"tr",align:null},"Suspicious  IP"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"The  alert is triggered as a result of detection traffic with CRYPTO MINING IP  address."),(0,r.kt)("td",{parentName:"tr",align:null},"Impact"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource  Hijacking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP_MALWARE"),(0,r.kt)("td",{parentName:"tr",align:null},"Malicious  IP"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"The  alert is triggered as a result of detection traffic with MALWARE IP address."),(0,r.kt)("td",{parentName:"tr",align:null},"Command  and Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Application  Layer Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP_OPEN_DNS"),(0,r.kt)("td",{parentName:"tr",align:null},"Suspicious  IP"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"The  alert is triggered as a result of detection traffic with OPEN DNS IP address."),(0,r.kt)("td",{parentName:"tr",align:null},"Command  and Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Application  Layer Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP_PHISHING"),(0,r.kt)("td",{parentName:"tr",align:null},"Suspicious  IP"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"The  alert is triggered as a result of detection traffic with PHISHING IP address."),(0,r.kt)("td",{parentName:"tr",align:null},"Initial  Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Phishing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP_PROXY"),(0,r.kt)("td",{parentName:"tr",align:null},"Anonymous  Proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"The  alert is triggered as a result of detection traffic with PROXY IP address."),(0,r.kt)("td",{parentName:"tr",align:null},"Command  and Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Proxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP_SCANNER"),(0,r.kt)("td",{parentName:"tr",align:null},"Suspicious  IP"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"The  alert is triggered as a result of detection traffic with SCANNER IP address."),(0,r.kt)("td",{parentName:"tr",align:null},"Discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"Network  Service Scanning")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP_SPAM"),(0,r.kt)("td",{parentName:"tr",align:null},"Suspicious  IP"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"The  alert is triggered as a result of detection traffic with SPAM IP address."),(0,r.kt)("td",{parentName:"tr",align:null},"Initial  Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Phishing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP_SYCOPE_COMMUNITY"),(0,r.kt)("td",{parentName:"tr",align:null},"Malicious  IP"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"The  alert is triggered as a result of detection traffic with malicious IP address  noticed by Sycope Community members."),(0,r.kt)("td",{parentName:"tr",align:null},"Command  and Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Application  Layer Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP_TOR"),(0,r.kt)("td",{parentName:"tr",align:null},"TOR  Activity"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"The  alert is triggered as a result of detection traffic with TOR IP address."),(0,r.kt)("td",{parentName:"tr",align:null},"Command  and Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Proxy")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tab. 3.1.1 Threat Intelligence - External Feeds"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feed id"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Score"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"MITRE Tactic"),(0,r.kt)("th",{parentName:"tr",align:null},"MITRE Techniqe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ThreatIntelligence_custom"),(0,r.kt)("td",{parentName:"tr",align:null},"Suspicious  IP"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal  Threat Intelligence - Custom Feed."),(0,r.kt)("td",{parentName:"tr",align:null},"Command  and Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Application  Layer Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WhitelistIP"),(0,r.kt)("td",{parentName:"tr",align:null},"Exception"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"IP  Whitelist"),(0,r.kt)("td",{parentName:"tr",align:null},"Command  and Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Application  Layer Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Country_custom"),(0,r.kt)("td",{parentName:"tr",align:null},"Suspicious  Country"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"The  Worst Botnet Countries based on custom list."),(0,r.kt)("td",{parentName:"tr",align:null},"Command  and Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Application  Layer Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sunburst2"),(0,r.kt)("td",{parentName:"tr",align:null},"Suspicious  IP - Sunburst (Sig2)"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"The  feed includes malicious IPs regarding the Sunburst backdoor. Attacker  leverages SolarWinds supply chain to compromise multiple global victims with  this backdoor."),(0,r.kt)("td",{parentName:"tr",align:null},"Lateral  Movement"),(0,r.kt)("td",{parentName:"tr",align:null},"Remote  Services")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tab. 3.1.2  Sample of Threat Intelligence - Internal Feeds"),"."),(0,r.kt)("h3",{id:"initial-configuration"},"Initial Configuration"),(0,r.kt)("p",null,"Feed management is only possible from the system administrator level. To change any feed, go to the ",(0,r.kt)("em",{parentName:"p"},"Settings/Security/External Threat Intelligence")," or ",(0,r.kt)("em",{parentName:"p"},"Settings/Security/Internal Threat Intelligence"),", and then select the feed for which you want to change parameters."),(0,r.kt)("p",null,"Note: In order for external feeds to be constantly updated, it is necessary to allow communication to the addresses of individual feeds. For more information please contact Support."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2020-11-06_11-30-36",src:a(7593).Z})),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"Fig. 3.2.1 XNS External Threat Intelligence"),"."),(0,r.kt)("p",null,"The External Threat Intelligence rules contain the following attributes: Enabled, Alert Name, Feed Id, Data Type, Threat Category, MITRE Tactic, MITRE Technique, Score, Refresh Interval, Last Refresh Time and Alert Description."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicates the status of the rule. Disabled rules do not generate security alerts."),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled, Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alert Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the name of the  rule."),(0,r.kt)("td",{parentName:"tr",align:null},"Connection with a Suspicious IP, Connection with a Suspicious Country, Connection with Open Proxy, Connection with TOR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:a(9881).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Feed Id"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the Feed Id for each Threat Intelligence rule. Each rule has a unique value of the Feed Id attribute."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:a(9881).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the type of collected data for each feed."),(0,r.kt)("td",{parentName:"tr",align:null},"IP, Country"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:a(9881).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Threat Category"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the category of feed related to types of security threats."),(0,r.kt)("td",{parentName:"tr",align:null},"Bot, Botnet, C2, Feodo, Malicious Malware,  Open Proxy, Ransomware, Rogue DNS, SNMP BL, SSH BL, Telnet BL, TOR, Zeus"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:a(9881).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MITRE Tactic"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the tactic of MITRE ATT&CK related to a security rule."),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access Discovery, Lateral  Movement Collection, Command and Control, Exfiltration, Impact"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:a(9881).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MITRE Technique"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the Technique of MITRE ATT&CK related to a security rule. There are about about 200  techniques - more details ",(0,r.kt)("a",{parentName:"td",href:"https://attack.mitre.org/matrices/enterprise/"},"ATT&CK MITRE"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:a(9881).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Score"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute indicating the importance of the feed on a scale of 1 to 10."),(0,r.kt)("td",{parentName:"tr",align:null},"{1..10}"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Refresh Interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute indicating the time interval, how often (in minutes) a feed should be updated."),(0,r.kt)("td",{parentName:"tr",align:null},"{0..32767}"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Last Refresh Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute indicating the last feed update in format YYYYMMDDhhmm."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"NOT_OK_S",src:a(9881).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alert Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute indicating the description of the feed."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"NOT_OK_S",src:a(9881).Z}))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tab. 3.2.1 External Threat Intelligence Feed Attributes"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20201106113501294",src:a(7131).Z})),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"Fig. 3.2.2 External Threat Intelligence Alert Configuration"),"."),(0,r.kt)("p",null,"The Internal Threat Intelligence engine correlates custom feeds with some attributes of network flows. For this type of alert, all attributes except the alert name can be modified."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicates the status of the rule. Disabled rules do not generate security alerts."),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled, Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alert Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the name of the rule. The attribute can be set only once when creating a new custom feed."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"NOT_OK_S",src:a(9881).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Feed Id"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the Feed Id for each rule. Each rule has a unique value of the Feed Id attribute."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the type of collected data for each feed."),(0,r.kt)("td",{parentName:"tr",align:null},"IP, Country"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Threat Category"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating the category of feed related to types of security threats."),(0,r.kt)("td",{parentName:"tr",align:null},"Bot, Botnet, C2, Feodo, Malicious Malware,  Open Proxy, Ransomware, Rogue DNS, SNMP BL, SSH BL, Telnet BL, TOR, Zeus"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MITRE Tactic"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating a Tactic of MITRE  ATT&CK related to a security rule."),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access Discovery, Lateral  Movement Collection, Command and Control, Exfiltration, Impact"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MITRE Technique"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute indicating a Technique of MITRE ATT&CK related to a security rule. There are about about 200  techniques - more details ",(0,r.kt)("a",{parentName:"td",href:"https://attack.mitre.org/matrices/enterprise/"},"ATT&CK MITRE"),"."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Score"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute indicating the importance of the feed on a scale of 1 to 10."),(0,r.kt)("td",{parentName:"tr",align:null},"{1..10}"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alert Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute indicating the description of the feed."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Feed Data List"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute indicating the values of custom feeds (IP address or Country), one value per line."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"OK_S",src:a(5453).Z}))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tab. 3.2.2 Internal Threat Intelligence Feed Attributes"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20201106113620656",src:a(4771).Z})),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"Fig. 3.2.3 Internal Threat Intelligence Alert Configuration"),"."),(0,r.kt)("h4",{id:"creating-a-custom-feed"},"Creating a custom feed"),(0,r.kt)("p",null,"Below are the steps to create custom feeds:"),(0,r.kt)("p",null,"1) In the ",(0,r.kt)("strong",{parentName:"p"},"Settings -> Security -> Internal Threat Intelligence")," click ",(0,r.kt)("strong",{parentName:"p"},"ADD NEW")," option."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2020-11-06_11-37-25",src:a(1708).Z})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Fig. 3.2.1.1  Creating a custom feed - step 1"),"."),(0,r.kt)("p",null,"2) Fill in the attributes of the new feed and click apply."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2020-11-06_11-48-26",src:a(812).Z})),(0,r.kt)("p",null," Fig. 3.2.1.2 ",(0,r.kt)("em",{parentName:"p"},"Creating a custom feed - step 2"),"."),(0,r.kt)("p",null,"Note: Please remember that only enabled rules generate alerts."),(0,r.kt)("h4",{id:"adding-ip-addresses-to-the-whitelist"},"Adding IP addresses to the Whitelist"),(0,r.kt)("p",null,"Below are the steps of adding IP addresses to the Whitelist IP for Threat Intelligence rules :"),(0,r.kt)("p",null,"1) In the ",(0,r.kt)("strong",{parentName:"p"},"Settings -> Security -> Internal Threat Intelligence")," choose the WhitelistIP_whitelist feed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20201106115217466",src:a(2332).Z})),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"Fig. 3.2.3.1 Adding IPs to the Whitelist - step 1"),"."),(0,r.kt)("p",null,"2) Edit the feed and add list of IPs which should be ignored by Threat Intelligence engine into the Feed Data List area."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20201106115547370",src:a(9785).Z})),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"Fig. 3.2.3.2 Adding IPs to the Whitelist - step 2"),"."))}m.isMDXComponent=!0},7593:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/2020-11-06_11-30-36-b7dd88f4d76e7c10a264ba9560f09327.png"},1708:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/2020-11-06_11-37-25-80ea09131dc6b1c07d4b446ef26d0939.png"},812:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/2020-11-06_11-48-26-778ebb6e84fb8359a984da8adb903140.png"},5453:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n="data:image/png;base64,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"},9881:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n="data:image/png;base64,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"},7131:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201106113501294-e1cd6353a6b7640df7e124577da01102.png"},4771:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201106113620656-0bc10df34615aef0a45c15dbf0f387ab.png"},2332:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201106115217466-a80d82a1cbf977a6756804f0b949b91f.png"},9785:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201106115547370-55545c49d1a1cceddbd1cf4b6424f0f2.png"}}]);