"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83162],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,g=u["".concat(m,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98749:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>s});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={description:"Alerts Table Tab"},m=void 0,d={unversionedId:"User Guide/Alerts/Alerts Table",id:"version-2.3/User Guide/Alerts/Alerts Table",title:"Alerts Table",description:"Alerts Table Tab",source:"@site/versioned_docs/version-2.3/04-User Guide/Alerts/Alerts Table.md",sourceDirName:"04-User Guide/Alerts",slug:"/User Guide/Alerts/Alerts Table",permalink:"/2.3/User Guide/Alerts/Alerts Table",draft:!1,tags:[],version:"2.3",lastUpdatedAt:1695227583,formattedLastUpdatedAt:"20 Sept 2023",frontMatter:{description:"Alerts Table Tab"},sidebar:"docs",previous:{title:"Alerts",permalink:"/2.3/User Guide/Alerts/"},next:{title:"Rules",permalink:"/2.3/User Guide/Alerts/Rule Sets"}},o={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Advanced View",id:"advanced-view",level:2},{value:"Action button menu",id:"action-button-menu",level:2},{value:"Right Click Menu",id:"right-click-menu",level:2},{value:"Settings menu",id:"settings-menu",level:2},{value:"Alerts Table fields description",id:"alerts-table-fields-description",level:2}],u={toc:s};function k(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In the ","[",(0,l.kt)("strong",{parentName:"p"},"Alerts>Alerts Table"),"]"," menu there is a table with a list of all triggered alerts."),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Sycope")," system includes many predefined ",(0,l.kt)("strong",{parentName:"p"},"Alerts")," created by a team of cybersecurity experts. This menu contains a table with a list of ",(0,l.kt)("strong",{parentName:"p"},"triggered Alerts")," that have been defined in ",(0,l.kt)("strong",{parentName:"p"},"the System"),". If the table is empty it means that no Alerts have been triggered. Alert parameters are configured in the menu ","[",(0,l.kt)("strong",{parentName:"p"},"Alerts>Rule Set"),"]","."),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"At the top of the window is the standard search bar, time ranges menu, etc. These elements are described in ",(0,l.kt)("a",{parentName:"p",href:"https://documentation.sycope.com/User%20interface"},"User Interface"),"."),(0,l.kt)("p",null,"Above the table there is a time chart in which the number of triggered alerts in a unit of time is shown in the form of bars. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230620105007698",src:a(49257).Z,width:"1804",height:"1059"})),(0,l.kt)("p",null,"By default, the Alerts table displays 9 columns, but you can change which columns should be visible by using the drop-down menu."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230620104631231",src:a(29038).Z,width:"702",height:"631"})),(0,l.kt)("h2",{id:"advanced-view"},"Advanced View"),(0,l.kt)("p",null,"After selecting a particular row by clicking on the row or check box in the first column of the table, a menu with options for the ",(0,l.kt)("strong",{parentName:"p"},"Advanced View")," opens. All the variables and values associated with a given alert are available here."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230620111226371",src:a(91135).Z,width:"1508",height:"1022"})),(0,l.kt)("p",null,"When selecting a larger number of rows in the ",(0,l.kt)("strong",{parentName:"p"},"Advanced View")," menu, corresponding tabs will appear."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230620111512587",src:a(35511).Z,width:"1503",height:"1023"})),(0,l.kt)("h2",{id:"action-button-menu"},"Action button menu"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Action")," button is available for the selected row, which can be used to perform the following actions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mark as ACK - setting the Acknowledged flag"),(0,l.kt)("li",{parentName:"ul"},"Mark as NEW - removing the Acknowledged flag"),(0,l.kt)("li",{parentName:"ul"},"Mark as False Positive - setting the False Positive flag"),(0,l.kt)("li",{parentName:"ul"},"Unmark as False Positive - removing the False Positive flag"),(0,l.kt)("li",{parentName:"ul"},"Add comment - add your own comment")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230620111330553",src:a(7723).Z,width:"976",height:"411"})),(0,l.kt)("h2",{id:"right-click-menu"},"Right Click Menu"),(0,l.kt)("p",null,"After right-clicking on a row, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Right Click")," menu with the following options will become available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Action",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mark as ACK - setting the Acknowledge flag"),(0,l.kt)("li",{parentName:"ul"},"Mark as NEW - removing the Acknowledge flag"),(0,l.kt)("li",{parentName:"ul"},"Mark as False Positive - setting the False Positive flag"),(0,l.kt)("li",{parentName:"ul"},"Unmark as False Positive - removing the False Positive flag"),(0,l.kt)("li",{parentName:"ul"},"Add comment - add your own comment"),(0,l.kt)("li",{parentName:"ul"},"Add value to input filters - add the value to the input filter of the alert rule"),(0,l.kt)("li",{parentName:"ul"},"Add value to output filters - add the value to the output filter of the alert rule"),(0,l.kt)("li",{parentName:"ul"},"Add value to lookup - add the value to a lookup"))),(0,l.kt)("li",{parentName:"ul"},"Rest Client - sending alert to another system using the REST CLIENT functionality "),(0,l.kt)("li",{parentName:"ul"},"Resolve",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RIPE - search in the RIPE database "),(0,l.kt)("li",{parentName:"ul"},"DNS for all values - resolve DNS for all IP address in the table"),(0,l.kt)("li",{parentName:"ul"},"DNS - resolve DNS for the selected IP address"),(0,l.kt)("li",{parentName:"ul"},"Ns lookup - query a DNS Domain Name Server to the lookup to find DNS Records and IP address information"))),(0,l.kt)("li",{parentName:"ul"},"Net mask Search - access to quick IP mask filter"),(0,l.kt)("li",{parentName:"ul"},"Tools",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ping - simple PING tool"))),(0,l.kt)("li",{parentName:"ul"},"Mitigation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Block host by IP - address blocking when the system is integrated with the MACMON probe"))),(0,l.kt)("li",{parentName:"ul"},"Custom - you can create your own ",(0,l.kt)("inlineCode",{parentName:"li"},"Right Click")," actions configured in the menu ",(0,l.kt)("a",{parentName:"li",href:"http://localhost:3000/User%20Guide/Configuration/Objects/Right%20click%20actions"},"[Configuration>Objects>Right Click Actions]"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230620114012061",src:a(27145).Z,width:"1155",height:"646"})),(0,l.kt)("h2",{id:"settings-menu"},"Settings menu"),(0,l.kt)("p",null,"The settings menu is available by pressing the ",(0,l.kt)("img",{alt:"image-20230630130509063",src:a(2028).Z,width:"21",height:"21"})," icon."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230630132659466",src:a(25370).Z,width:"253",height:"395"})),(0,l.kt)("p",null,"The following actions are available here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Server sorting")," switch "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"off")," - sorting is performed on records previously retrieved by the browser from the database (limited to 1000 records)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"on")," - sorting is performed on the database and then retrieved by the browser (limited to 1000 records)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Export as")," "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CSV")," - export alerts to CSV files which are displayed in the table (limited to 1000 records)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"PDF")," - export alerts to PDF files which are displayed in the table (limited to 1000 records)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"PNG")," - export alerts to PNG files which are displayed in the table (limited to 1000 records)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full CSV Export")," - export all alerts that are in the System (database)")))),(0,l.kt)("h2",{id:"alerts-table-fields-description"},"Alerts Table fields description"),(0,l.kt)("p",null,"In the table below are descriptions of the most important fields that are available for display in the Alerts table."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"NQL Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert Id"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Type"),(0,l.kt)("td",{parentName:"tr",align:null},"alertRuleType"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Rule Type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert Name"),(0,l.kt)("td",{parentName:"tr",align:null},"alertName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Id"),(0,l.kt)("td",{parentName:"tr",align:null},"alertRuleId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Rule Identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert Description"),(0,l.kt)("td",{parentName:"tr",align:null},"alertDescription"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert Severity"),(0,l.kt)("td",{parentName:"tr",align:null},"alertSeverity"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert Severity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Threshold Level"),(0,l.kt)("td",{parentName:"tr",align:null},"alertThresholdLevel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Threshold Level (Critical, Major, Minor)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"alertTags"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Tags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitre Tactic"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitreTactic"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitre ATT&CK Tactic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitre Technique"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitreTechnique"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitre ATT&CK Technique Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitre Technique Id"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitreTechniqueId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitre ATT&CK Technique Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitre Subtechnique"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitreSubtechnique"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitre ATT&CK Subtechnique")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Correlations"),(0,l.kt)("td",{parentName:"tr",align:null},"alertCorrelations"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Rule Correlations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitigation System"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitigationSystem"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitigation System")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mitigation IP"),(0,l.kt)("td",{parentName:"tr",align:null},"alertMitigationIpField"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mitigation IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raw Data"),(0,l.kt)("td",{parentName:"tr",align:null},"rawData"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Raw Data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACK"),(0,l.kt)("td",{parentName:"tr",align:null},"alertAck"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Setting the Acknowledge flag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACK User"),(0,l.kt)("td",{parentName:"tr",align:null},"alertAckUser"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User updating the Acknowledge flag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACK Time"),(0,l.kt)("td",{parentName:"tr",align:null},"alertAckLastUpdate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Acknowledge flag update Time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"False Positive"),(0,l.kt)("td",{parentName:"tr",align:null},"alertFalsePositive"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Alert handling False Positive flag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FP User"),(0,l.kt)("td",{parentName:"tr",align:null},"alertFalsePositiveUser"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User updating the False Positive flag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FP Time"),(0,l.kt)("td",{parentName:"tr",align:null},"alertFalsePositiveLastUpdate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False Positive flag update time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Comment"),(0,l.kt)("td",{parentName:"tr",align:null},"alertComment"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Commented User"),(0,l.kt)("td",{parentName:"tr",align:null},"alertCommentUser"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User updating a comment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Comment Time"),(0,l.kt)("td",{parentName:"tr",align:null},"alertCommentLastUpdate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Comment update time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client IP"),(0,l.kt)("td",{parentName:"tr",align:null},"clientIp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Port"),(0,l.kt)("td",{parentName:"tr",align:null},"clientPort"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client TCP Flags"),(0,l.kt)("td",{parentName:"tr",align:null},"clientTcpFlags"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client TCP Flags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Group"),(0,l.kt)("td",{parentName:"tr",align:null},"clientGroups"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Country"),(0,l.kt)("td",{parentName:"tr",align:null},"clientCountry"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Country")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Mac"),(0,l.kt)("td",{parentName:"tr",align:null},"clientMac"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Mac")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"clientHostname"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Client Hostname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server IP"),(0,l.kt)("td",{parentName:"tr",align:null},"serverIp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Port"),(0,l.kt)("td",{parentName:"tr",align:null},"serverPort"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server TCP Flags"),(0,l.kt)("td",{parentName:"tr",align:null},"serverTcpFlags"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server TCP Flags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Group"),(0,l.kt)("td",{parentName:"tr",align:null},"serverGroups"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Country"),(0,l.kt)("td",{parentName:"tr",align:null},"serverCountry"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Country")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Mac"),(0,l.kt)("td",{parentName:"tr",align:null},"serverMac"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Mac")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"serverHostname"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Server Hostname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Client IPs"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueClientIPs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Client IPs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server IPs"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueServerIPs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Server IPs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server Ports"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueServerPorts"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Server Ports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Client ASNs"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueClientASNs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Client ASNs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server ASNs"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueServerASNs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Server ASNs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Client Countries"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueClientCountries"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Client Countries")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server Countries"),(0,l.kt)("td",{parentName:"tr",align:null},"uniqueServerCountries"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Server Countries")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BPF"),(0,l.kt)("td",{parentName:"tr",align:null},"_bpf"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bytes Per Flow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BPP"),(0,l.kt)("td",{parentName:"tr",align:null},"_bpp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bytes Per Packet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"_bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sum Bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flows"),(0,l.kt)("td",{parentName:"tr",align:null},"_flows"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sum Flows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Packets"),(0,l.kt)("td",{parentName:"tr",align:null},"_packets"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sum Packets")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PPF"),(0,l.kt)("td",{parentName:"tr",align:null},"_ppf"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Packets Per Flow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PPS"),(0,l.kt)("td",{parentName:"tr",align:null},"_pps"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Packets Per Second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SYN"),(0,l.kt)("td",{parentName:"tr",align:null},"_syn"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Count of SYN flags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique ASN"),(0,l.kt)("td",{parentName:"tr",align:null},"_uniqueASNs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Count of ASNs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique ClientIPs"),(0,l.kt)("td",{parentName:"tr",align:null},"_uniqueClientIPs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Count of Client IPs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique ServerIPs"),(0,l.kt)("td",{parentName:"tr",align:null},"_uniqueServerIPs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Count of Server IPs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unique Server Ports"),(0,l.kt)("td",{parentName:"tr",align:null},"_uniqueServerPort"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique Count of Server Port")))))}k.isMDXComponent=!0},29038:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230620104631231-6d68cbdc79c3e68d1a44c9d18299ad1b.png"},49257:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230620105007698-e1a0674bb7e4030d8c2d5be66856d480.png"},91135:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230620111226371-eac0a1392791d4d5d480f41310b1e5ab.png"},7723:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230620111330553-11da02a29c31daef1266db9412f04fb0.png"},35511:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230620111512587-11dae86a0c29f469e89e3270ecfbc6b0.png"},27145:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230620114012061-80443c8a7fab058fb86f641a956a9815.png"},2028:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAIAAAAmdTLBAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFaADAAQAAAABAAAAFQAAAAAIGxIOAAAEZElEQVQ4EV1Ub0yVVRg/57zn/Xf/0IUwGM3c0tWEFD7FmIpbIdENNDYFZ19CkcAEq1FGm+lW+SG/XKcgkjlHiK5NU67ExbRZa3Njbq0P1odmHxKcY3G5cOG973nPv56bGx86n8573vM8z+/5/X7PweUVb2GsTUuzwHMsIoVG2iTEksInhCCClFKmiRmTrhPJedwwAyk1pRQjypUkWnPLJrlczrFDgsNtiCJC+KZJMYbYABPu+75hQApmWobW2rZNIYTW0jAMYjuEMY9Sw/cZUi41XMEDw5AsWN5Yuf6bi0Pnvu7fvKUGwjBRSjNKydLSkmmaCCHIQuAeJnk8luVAZaXE2nVrogWOZetD73VllzKcB93d70Lk08WRF15cI2TgOBa0HHAGoCCMcq61UEIEjmt+9vnRV18pDwI0lkxVVpXt3ftRZj575bszXxz/tG5btW2jn+886O39kPk5CypgTKFhjBDGBtR+fu1z9fXlJxOXIlG3blvt+fNXf7//Z85jx46daWqKnzo1xAXrfb+7tLRkenoG8CslqZYONTBBSEqenstAZcuy+k8PnB08hxARXIdC0fEbN69euea4xsHuTqlQJpOG/rVCLAggMK8Q5zmDonQ6fevWb5s21di2rRSKhAva2t5uadlZWFhomnCCt9bWpVJ3FxcXheBAnuu6RGMPJCU0qHhp3anTiXi8cmpqKgiCWKwgNTnSsnvH7j1vjiXPFxXFQPyf7tzdvr1m5OJwZeUGYD3PP6gQ8BzCoufQgXCEtu//eGBgAOA1Nsa9HGpoqNu1q3lhkTc2NYTD4ZOJ0+3thwFmT0/PE+AgGQUbYCCQomx2lrGMaVHGuOPanpczTdf3QRtpEAwEQU24DAT91yD40gTDEi0tpOnZwa9KSkpGRgY7Ozvhx6XRb1cVu8mxiYnvU7GnnOvXbkCpjo6OoaHj0Wg0kUiAZcBIuGpDO4BXaAmTAGne13d4S+3m1+obLRqNRooam16He8lkMp3+R2h/dHT0wV9/HDlyFHwL0thulHDOATzzA61IJByLx7dOTk6AF6Ti85m54eHhCxcuLCwsKC3AuZM3kw0N1WVlZVJKyAs0E8thQmYj0TA0Fok6oTCanv67bd+e0cuDXQf3UIsptNy2r+X62OUPersCsUApsi0XGgTygQgKxkZYSQlm8GZn/du3f+375IAQaCL1w/6O5nv3ppayuXc6m8fHf3mjsb6gwPjx1v2HDx8C3TBRMLV4Y1UrgAE/hEIhFoCrrdWrn81ms/Pzc/39/U9IKi0tbW1tjcViIOGjmTlQbmUZq54pBzAYI8APfgZUjPmZTEYIOTPzqLr65aKi4hMnvnz8eNbzlj3P1zpv2ZWF11fshHjQFo5IXmRJDATYIB3kgjmFwYc2hVDwYOQfAZyf/JVFACF8gAQwBVrnUWiFTWpDItjYtqskpIMwqpUB5yuRTzYEaRgyBXwYBiQGbFARcS4MArAsb9kHszGfQ3L4hPP/xf8L2j5Z9BpkHn4AAAAASUVORK5CYII="},25370:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230630132659466-08f1b071c43a7d7c20164d5a9618dc71.png"}}]);