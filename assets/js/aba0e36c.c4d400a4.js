"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29297],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),d=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return r.createElement(m.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=n,s=k["".concat(m,".").concat(N)]||k[N]||o[N]||l;return a?r.createElement(s,i(i({ref:e},u),{},{components:a})):r.createElement(s,i({ref:e},u))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},83499:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>o});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),i=["components"],p={description:"Alerts Table Tab"},m=void 0,d={unversionedId:"User Guide/Alerts/Alerts Table",id:"version-2.2.1/User Guide/Alerts/Alerts Table",title:"Alerts Table",description:"Alerts Table Tab",source:"@site/versioned_docs/version-2.2.1/04-User Guide/Alerts/Alerts Table.md",sourceDirName:"04-User Guide/Alerts",slug:"/User Guide/Alerts/Alerts Table",permalink:"/2.2.1/User Guide/Alerts/Alerts Table",draft:!1,tags:[],version:"2.2.1",lastUpdatedAt:1678707866,formattedLastUpdatedAt:"13 Mar 2023",frontMatter:{description:"Alerts Table Tab"},sidebar:"docs",previous:{title:"Alerts",permalink:"/2.2.1/User Guide/Alerts/"},next:{title:"Rules",permalink:"/2.2.1/User Guide/Alerts/Rule Sets"}},u={},o=[],k={toc:o};function N(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"One of the most important components of the Sycope system is alerting functionality. This functionality allows the user to flexibly build ",(0,l.kt)("strong",{parentName:"p"},"Alerts")," based on a number of conditions and rules that operate on the data streams collected by the system."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sycope")," includes many predefined ",(0,l.kt)("strong",{parentName:"p"},"Alerts")," created by a team of cybersecurity experts. These rules can be used as a template from which you can create your own rules. You can also create rules on your own using the wizard."),(0,l.kt)("p",null,"In this menu ","[Alerts>",(0,l.kt)("strong",{parentName:"p"},"Alerts Table"),"]"," there is a table with a list of all the alarms that are included in the system. Within each Alarm is a column of fields which, depending on user preference, can be made visible. These are listed below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field  Name"),(0,l.kt)("th",{parentName:"tr",align:null},"NQL Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert Id"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Type"),(0,l.kt)("td",{parentName:"tr",align:null},"alertRuleType"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Rule Type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert Name"),(0,l.kt)("td",{parentName:"tr",align:null},"alertName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Id"),(0,l.kt)("td",{parentName:"tr",align:null},"alertRuleId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Rule Identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert  Description"),(0,l.kt)("td",{parentName:"tr",align:null},"alertDescription"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert Severity"),(0,l.kt)("td",{parentName:"tr",align:null},"alertSeverity"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Severity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Threshold  Level"),(0,l.kt)("td",{parentName:"tr",align:null},"alertThresholdLevel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Threshold Level  (Criticial, Major, Minor)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"alertTags"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Tags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitre Tactic"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitreTactic"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitre ATT&CK  Tactic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitre  Technique"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitreTechnique"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitre ATT&CK  Technique Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitre  Technique Id"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitreTechniqueId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitre ATT&CK  Technique Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitre  Subtechnique"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitreSubtechnique"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitre ATT&CK  Subtechnique")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Correlations"),(0,l.kt)("td",{parentName:"tr",align:null},"alertCorrelations"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Rule Correlations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitigation  System"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitigationSystem"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitigation System")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitigation IP"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitigationIpField"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitigation IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raw Data"),(0,l.kt)("td",{parentName:"tr",align:null},"rawData"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Raw Data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACK"),(0,l.kt)("td",{parentName:"tr",align:null},"alertAck"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Setting the  Acknowledge flag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACK User"),(0,l.kt)("td",{parentName:"tr",align:null},"alertAckUser"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User updating the  Acknowledge flag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACK Time"),(0,l.kt)("td",{parentName:"tr",align:null},"alertAckLastUpdate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Acknowledge flag  update Time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"False Positive"),(0,l.kt)("td",{parentName:"tr",align:null},"alertFalsePositive"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert handling False  Positive flag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FP User"),(0,l.kt)("td",{parentName:"tr",align:null},"alertFalsePositiveUser"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User updating the  False Positive flag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FP Time"),(0,l.kt)("td",{parentName:"tr",align:null},"alertFalsePositiveLastUpdate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False Positive flag  update time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Comment"),(0,l.kt)("td",{parentName:"tr",align:null},"alertComment"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Commented User"),(0,l.kt)("td",{parentName:"tr",align:null},"alertCommentUser"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User updating a  comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Comment Time"),(0,l.kt)("td",{parentName:"tr",align:null},"alertCommentLastUpdate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Comment update time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client IP"),(0,l.kt)("td",{parentName:"tr",align:null},"clientIp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Port"),(0,l.kt)("td",{parentName:"tr",align:null},"clientPort"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client TCP  Flags"),(0,l.kt)("td",{parentName:"tr",align:null},"clientTcpFlags"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client TCP Flags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Group"),(0,l.kt)("td",{parentName:"tr",align:null},"clientGroups"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Country"),(0,l.kt)("td",{parentName:"tr",align:null},"clientCountry"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Country")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Mac"),(0,l.kt)("td",{parentName:"tr",align:null},"clientMac"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Mac")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client  Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"clientHostname"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Hostname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server IP"),(0,l.kt)("td",{parentName:"tr",align:null},"serverIp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Port"),(0,l.kt)("td",{parentName:"tr",align:null},"serverPort"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server TCP  Flags"),(0,l.kt)("td",{parentName:"tr",align:null},"serverTcpFlags"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server TCP Flags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Group"),(0,l.kt)("td",{parentName:"tr",align:null},"serverGroups"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Country"),(0,l.kt)("td",{parentName:"tr",align:null},"serverCountry"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Country")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Mac"),(0,l.kt)("td",{parentName:"tr",align:null},"serverMac"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Mac")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server  Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"serverHostname"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Hostname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Client IPs"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueClientIPs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Client IPs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server  IPs"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueServerIPs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Server IPs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server  Ports"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueServerPorts"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Server Ports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Client  ASNs"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueClientASNs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Client ASNs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server  ASNs"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueServerASNs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Server ASNs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Client  Countries"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueClientCountries"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Client Countries")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server  Countries"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueServerCountries"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Server Countries")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BPF"),(0,l.kt)("td",{parentName:"tr",align:null},"_bpf"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bytes Per Flow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BPP"),(0,l.kt)("td",{parentName:"tr",align:null},"_bpp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bytes Per Packet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"_bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sum Bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flows"),(0,l.kt)("td",{parentName:"tr",align:null},"_flows"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sum Flows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Packets"),(0,l.kt)("td",{parentName:"tr",align:null},"_packets"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sum Packets")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PPF"),(0,l.kt)("td",{parentName:"tr",align:null},"_ppf"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Packets Per Flow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PPS"),(0,l.kt)("td",{parentName:"tr",align:null},"_pps"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Packets Per Second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SYN"),(0,l.kt)("td",{parentName:"tr",align:null},"_syn"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Count of SYN flags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique ASN"),(0,l.kt)("td",{parentName:"tr",align:null},"_uniqueASNs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Count of ASNs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique  ClientIPs"),(0,l.kt)("td",{parentName:"tr",align:null},"_uniqueClientIPs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Count of  Client IPs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique  ServerIPs"),(0,l.kt)("td",{parentName:"tr",align:null},"_uniqueServerIPs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Count of  Server IPs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server  Ports"),(0,l.kt)("td",{parentName:"tr",align:null},"_uniqueServerPort"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Count of  Server Port")))))}N.isMDXComponent=!0}}]);