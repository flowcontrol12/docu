"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54506],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(r),s=n,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return r?a.createElement(k,i(i({ref:e},u),{},{components:r})):a.createElement(k,i({ref:e},u))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},43347:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=r(83117),n=r(80102),l=(r(67294),r(3905)),i=["components"],o={},p=void 0,d={unversionedId:"XNS module/Threat Detection",id:"version-1.6/XNS module/Threat Detection",title:"Threat Detection",description:"Threat Detection",source:"@site/versioned_docs/version-1.6/03-XNS module/03-Threat Detection.md",sourceDirName:"03-XNS module",slug:"/XNS module/Threat Detection",permalink:"/1.6/XNS module/Threat Detection",draft:!1,tags:[],version:"1.6",lastUpdatedAt:1639746315,formattedLastUpdatedAt:"17 Dec 2021",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Security Dashboards",permalink:"/1.6/XNS module/Security Dashboards"},next:{title:"Threat Intelligence Engine",permalink:"/1.6/XNS module/Threat Intelligence Engine"}},u={},m=[{value:"Threat Detection",id:"threat-detection",level:2},{value:"Threat Detection Rules",id:"threat-detection-rules",level:3},{value:"Initial Configuration",id:"initial-configuration",level:3}],c={toc:m};function s(t){var e=t.components,o=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"threat-detection"},"Threat Detection"),(0,l.kt)("p",null,"The Threat Detection engine generates alerts based on correlations of relevant attributes of network flows (e.g. Netflow) indicating potential security issues. This mechanism consists of 38 security rules for seven MITRE ATT&CK tactics: Initial Access, Credential Access, Discovery, Lateral Movement, Command and Control, Exfiltration and Impact."),(0,l.kt)("h3",{id:"threat-detection-rules"},"Threat Detection Rules"),(0,l.kt)("p",null,"This section describes all rules triggered by the Threat Detection engine."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Name")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Anormal  flows ratios")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Brute  Force Attack")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cleartext  Application (Ext->Ext)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cleartext  Application (Ext->Int)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cleartext  Application (Int->Ext)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cleartext  Application (Int->Int)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DDoS  Attack Detected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DDoS  DNS Amplification Attack")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Horizontal  Scan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized  Internet Access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized  DHCP Activity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized  DNS Activity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vertical  Scan Detected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DoS  Attack Detected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DoS -  ICMP Flood")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DoS -  TCP Flood")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DoS -  UDP Flood")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Abnormal  DNS Query Limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Abnormal  DNS Response Limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DNS  Transfer Limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"High  Data Transfer (Int->Ext)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"High  Data Transfer (Ext->Int)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"High  Data Transfer (Int->Int)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unusually  High Data Transfer (Int->Ext)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unusually  High Data Transfer (Ext->Int)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P2P  Activity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large  Size Protocol Anomaly")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multicast  DNS (mDNS) from Internet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OT  Device Discovered")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SPAM  (Ext->Int)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SPAM  (Ext->Ext)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SPAM  (Int->Ext)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SPAM  (Int->Int)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Suspicious  Port BL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Suspicious  Port WL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized  NFS Export Outside The Local Network")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized  RDP from Internet")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Tab. 2.1.1 Threat Detection Rules"),"."),(0,l.kt)("h3",{id:"initial-configuration"},"Initial Configuration"),(0,l.kt)("p",null,"All Threat Detection rules are disabled )to reduce the number of False Positives. In the initial rule configuration process, set rule parameters, such as groups or limits on specific attributes. Each rule has its own set of characteristics, so each of them must be configured separately. For example, in the ",(0,l.kt)("em",{parentName:"p"},"Abnormal flow ratios")," rule, set the Flow Count, PPF and Whitelists Group parameters."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"2020-11-06_11-57-46",src:r(46542).Z,width:"1807",height:"970"})),(0,l.kt)("p",null," ",(0,l.kt)("em",{parentName:"p"},"Fig. 2.2.1 Security Alert Configuration"),". "),(0,l.kt)("p",null,"If as a result of the analysis, it was determined that a given rule generates many false alarms, then the fine tuning process should be performed."))}s.isMDXComponent=!0},46542:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/2020-11-06_11-57-46-cf41687f8eb050cc63f99c09b300d312.png"}}]);