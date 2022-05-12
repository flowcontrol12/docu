"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1197],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:e},p),{},{components:n})):a.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4039:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={},l=void 0,c={unversionedId:"XNS module/Introduction",id:"version-1.6/XNS module/Introduction",title:"Introduction",description:"FlowControl XNS detects and analyses security threats and anomalies in a context of the entire organization based on network metadata (NetFlow) and reputation lists. For effective detection of abnormal activities, XNS uses two engines:",source:"@site/versioned_docs/version-1.6/03-XNS module/01-Introduction.md",sourceDirName:"03-XNS module",slug:"/XNS module/Introduction",permalink:"/XNS module/Introduction",draft:!1,tags:[],version:"1.6",lastUpdatedAt:1639746315,formattedLastUpdatedAt:"12/17/2021",sidebarPosition:1,frontMatter:{},sidebar:"version-1.6/docs",previous:{title:"Access through REST API",permalink:"/XN module/Access through REST API"},next:{title:"Security Dashboards",permalink:"/XNS module/Security Dashboards"}},p={},u=[],d={toc:u};function m(t){var e=t.components,s=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"FlowControl XNS detects and analyses security threats and anomalies in a context of the entire organization based on network metadata (NetFlow) and reputation lists. For effective detection of abnormal activities, XNS uses two engines: "),(0,r.kt)("p",null,"\u2022       Threat Intelligence (TI) "),(0,r.kt)("p",null,"\u2022       Threat Detection (TD). "),(0,r.kt)("p",null,"The former detects malicious or illegal activity based on correlations with reputation lists of malicious IP addresses and suspicious countries. However, Threat Detection detects security threats and anomalies based on the correlation and aggregation of relationships between the values of various parameters of network artifacts within a specified period of time."),(0,r.kt)("p",null," A set of rules built into the system makes it easier to monitor prohibited and malicious activities in an organization. "),(0,r.kt)("p",null,"Key features of XNS include:"),(0,r.kt)("p",null,"\u2022       Using the ATT&CK MITRE methodology to enrich information on alerts and categorization of security threats detected in XNS"),(0,r.kt)("p",null,"\u2022       Using built-in threat detection mechanisms to discover malicious activities in the context of the whole organization"),(0,r.kt)("p",null,"\u2022       Limiting the number of false positives due to the ability to whitelist specific properties in security rules"),(0,r.kt)("p",null,"\u2022       Integrating with external databases to check the reputation of the host, e.g. Virustotal"),(0,r.kt)("p",null,"\u2022       Improving the visibility of threats in the context of individual parts of the organization, which is an added value for each SOC & NOC teams"),(0,r.kt)("p",null,"\u2022       Correlating multiple network artifacts to detect suspicious activity and security breaches"),(0,r.kt)("p",null,"\u2022       Improving the MTTD* indicator due to properly designed views, e.g. SOC Dashboard"),(0,r.kt)("p",null,"\u2022       Enrichment of data with valuable information facilitating threat analysis, e.g. ASN, geolocation, IoC"),(0,r.kt)("p",null,"\u2022       Helping CSO and Security Managers make decisions through KPI views"),(0,r.kt)("p",null,"\u2022       Supporting many security processes, such as for example incident handling, network forensics, threat hunting"),(0,r.kt)("p",null,"\u2022       Supporting process of meeting compliance with regulations and standards, e.g. ",(0,r.kt)("a",{parentName:"p",href:"http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20180001560/T/D20181560L.pdf"},"UoKSC (Ustawa o Krajowym Systemie Cyberbezpiecze\u0144stwa)"),", "),(0,r.kt)("p",null,"\u2022       Improving network and security troubleshooting process"),(0,r.kt)("p",null,"\u2022       Detecting correlations between systems thanks to integration with SIEMs"),(0,r.kt)("p",null,"\u2022       Updating security rules and IoC regularly."),(0,r.kt)("p",null," *MTTD (Mean Time To Detect) - amount of time it takes the Security Team to discover a potential security incident. "),(0,r.kt)("p",null,"FlowControl XNS generates security alerts which are categorized by tactics and techniques of the MITRE ATT&CK methodology. Below is a brief description of this methodology."),(0,r.kt)("p",null,"MITRE ATT&CK\u2122 is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community. Full MITRE ATT&CK Matrice is available on the ",(0,r.kt)("a",{parentName:"p",href:"https:/attack.mitre.org/"},"MITRE ATT&CK Matrices")," website. The MITRE ATT&CK Enterprise Matrice contains many techniques grouped into tactics (",(0,r.kt)("em",{parentName:"p"},"Fig. I.1"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20201218120633426",src:n(2670).Z,width:"2097",height:"839"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Fig. I.1 MITRE ATT&CK Tactics. Source: ",(0,r.kt)("a",{parentName:"em",href:"https:/attack.mitre.org/"},"MITRE ATT&CK."))),(0,r.kt)("p",null,"Examples of security threats and anomalies detected by FlowControl XNS and categorized by MITRE ATT&CK are described in the ",(0,r.kt)("em",{parentName:"p"},"Tab I.1.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"MITRE ATT&CK Tactic"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Security Threats Examples")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Initial Access")),(0,r.kt)("td",{parentName:"tr",align:null},"Detection of unauthorized P2P network activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Credential Access")),(0,r.kt)("td",{parentName:"tr",align:null},"Detection of brute force attacks on various  services, e.g. HTTP(s), FTP, IMAP, SSH, RDP, LDAPS, MS SQL Detection of  unauthorized LLMNR / NetBIOS communications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Discovery")),(0,r.kt)("td",{parentName:"tr",align:null},"Detection of unauthorized access to certain services, e.g. DHCP, DNS, Mail Server Network scan detection, Host scan detection, Detecting malware spread, Detection of network anomalies that may be related to security.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Lateral Movement")),(0,r.kt)("td",{parentName:"tr",align:null},"Detection of unauthorized RDP connections.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Command And Control (C2)")),(0,r.kt)("td",{parentName:"tr",align:null},"Detection of activity on suspicious ports  (based on Black and White-lists), Detection of unencrypted connections to critical servers or services, Detection of communication with suspicious IP addresses, e.g. Botnet, Malware, C2, Ransomware Detection of violations of security policies, e.g. TOR, Open DNS, Open Proxy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Exfiltration")),(0,r.kt)("td",{parentName:"tr",align:null},"Detection of DNS anomalies, e.g. Abnormal DNS Query Limit, Abnormal DNS Response Limit, DNS Transfer Limit Detecting a large number of unsolicited emails (SPAM), Detection of data exfiltration attempts, Detection of huge amounts of data transfers within a short period of time to / from an organization, Detection of anomalies in network protocols.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Impact")),(0,r.kt)("td",{parentName:"tr",align:null},"Detection of DoS attacks, e.g. ICMP Flood, TCP Flood, UDP Flood Detection of DDoS amplification attacks, e.g. DNS  Amplification")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tab. I.1 Examples of security threats and anomalies detected by FlowControl XNS and categorized by MITRE ATT&CK.")),(0,r.kt)("p",null,"FlowControl XNS analyses network flows to detect suspicious activity."),(0,r.kt)("p",null,"A flow is defined as a unidirectional sequence of packets with some common properties that pass through a network device. These collected flows are exported to an external device, the NetFlow collector. Network flows are highly granular; for example, flow records include details such as IP addresses, packet and byte counts, timestamps, Type of Service (ToS), application ports, input and output interfaces, etc."),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc3954.txt"},"RFC3954")),(0,r.kt)("p",null,"The system supports the following flow protocol data sources: "),(0,r.kt)("p",null,"\u2022       NetFlow v5"),(0,r.kt)("p",null,"\u2022       NetFlow v9"),(0,r.kt)("p",null,"\u2022       sFlow"),(0,r.kt)("p",null,"\u2022       IPFIX"),(0,r.kt)("p",null,"\u2022       NSEL."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Specific options such as NSEL (Cisco ASA) or different sampling multipliers per device must be additionally configured. This system uses SNMP v1/2/3 to query devices. "),(0,r.kt)("p",null,"According to the RFC3964, FlowControl solution works as a Flow Collector (both hardware and software versions are available) which collects, analyses and visualizes the collected flows. Metrics are presented and examined from two perspectives: Network and Security giving the operator valuable input into network/application problems analysis as well as hunting security threats (",(0,r.kt)("em",{parentName:"p"},"Fig. I.2"),"). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sycope_flowcontrol_1_5",src:n(4274).Z,width:"2476",height:"1164"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Fig. I.2 Netflow Collector \u2013 logical architecture.")))}m.isMDXComponent=!0},2670:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-20201218120633426-c1dcea2d25338ab69d0ca8b7516fb16a.png"},4274:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sycope_flowcontrol_1_5-1604661807668-83094ac3a69d979e7cc98946ea5f37c9.jpg"}}]);