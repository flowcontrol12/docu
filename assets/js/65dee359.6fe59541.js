"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68454],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,N=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},81967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={description:"External Destination Tab"},p=void 0,s={unversionedId:"User Guide/Configuration/Integrations/External Destinations",id:"version-2.3/User Guide/Configuration/Integrations/External Destinations",title:"External Destinations",description:"External Destination Tab",source:"@site/versioned_docs/version-2.3/04-User Guide/Configuration/07-Integrations/05-External Destinations.md",sourceDirName:"04-User Guide/Configuration/07-Integrations",slug:"/User Guide/Configuration/Integrations/External Destinations",permalink:"/2.3/User Guide/Configuration/Integrations/External Destinations",draft:!1,tags:[],version:"2.3",lastUpdatedAt:1695227583,formattedLastUpdatedAt:"20 Sept 2023",sidebarPosition:5,frontMatter:{description:"External Destination Tab"},sidebar:"docs",previous:{title:"Proxy",permalink:"/2.3/User Guide/Configuration/Integrations/Proxy"},next:{title:"FTP",permalink:"/2.3/User Guide/Configuration/Integrations/FTP"}},m={},u=[{value:"Macmon",id:"macmon",level:2},{value:"Rest Client",id:"rest-client",level:2},{value:"SNMP Trap Sender",id:"snmp-trap-sender",level:2},{value:"Syslog",id:"syslog",level:2}],c={toc:u};function k(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration>Integrations>External Destinations"),"]"," menu can be used to configure the external destination to which the system will send data."),(0,i.kt)("p",null,"The list of ",(0,i.kt)("strong",{parentName:"p"},"External Destinations")," is presented in a table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - External Destinations name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status")," - active/inactive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type")," - template type - HTML or Text."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action")," - ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Edit - edit an existing object"),(0,i.kt)("li",{parentName:"ul"},"Duplicate - duplicate object, can be used as a template for a new object"),(0,i.kt)("li",{parentName:"ul"},"Export - export to JSON"),(0,i.kt)("li",{parentName:"ul"},"Delete - delete an object")))),(0,i.kt)("p",null,"To add a new ",(0,i.kt)("strong",{parentName:"p"},"External Destination")," click the ",(0,i.kt)("strong",{parentName:"p"},"New external destinations")," button and the ",(0,i.kt)("strong",{parentName:"p"},"New external destinations")," wizard will appear. "),(0,i.kt)("p",null,"At first, you have to choose the type of ",(0,i.kt)("strong",{parentName:"p"},"External Destination"),". There are currently four types of external destinations available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Macmon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rest Client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SNMP Trap Sender")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Syslog"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230526101738785",src:a(77235).Z,width:"645",height:"254"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"macmon"},"Macmon"),(0,i.kt)("p",null,"Communication with the Macmon software used for monitoring and management of the network and its resources. Although Macmon supports various ways of communication, the Sycope allows for the configuration of communication only via the REST API interface with HTTP or HTTPS protocol."),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"Macmon")," you need to fill the following form:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),' - "Macmon"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name")," - external destination connection name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Active")," - communication status, active/inactive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ip")," - Macmon server IP address")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Port")," - Macmon server port")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Protocol")," - Macmon server communication protocol"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HTTPS"),(0,i.kt)("li",{parentName:"ul"},"HTTP"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User name")," - User name for authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User password")," - User password for authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"API version")," - The API version used by the Macmon server to which you choose to connect. This value is available for configuration of the current Macmon server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Public permissions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete"),(0,i.kt)("li",{parentName:"ul"},"Edit      "))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. The available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"View"))))))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Test connection")," button is used for testing of the configured connection."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"rest-client"},"Rest Client"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"User Scripts")," functionality allows automatic communication by a POST json message with external systems using the ",(0,i.kt)("strong",{parentName:"p"},"REST Client"),". You can send ",(0,i.kt)("strong",{parentName:"p"},"Alerts"),' "outside" of the System to other applications as long as they provide a supported interface.'),(0,i.kt)("p",null,"When the ",(0,i.kt)("strong",{parentName:"p"},"REST Client")," is selected as the External destination, a window with connection parameters will be shown."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"menu master",src:a(25796).Z,width:"653",height:"950"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name")," - external destination connection name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Active")," - communication status, active/inactive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Method")," - REST protocol method of the server to which the connection will take place. Only the POST method is supported.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Path"),' - The URL path to the service. For example, for "http://local:1010/api/run", the value of this field must be "api/run".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Host")," - The host of the server to which the connection is made.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Port")," - The port of the server to which the connection is made.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Protocol")," - HTTP or HTTPS protocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Params"),' - Parameters that are sent to the server in a POST request. Parameters are sent as URL parameters after the \'&\' character. That is, in the example in "Path" "http://local:1010/api/run", if there is, for example, key=val parameters, the URL "http://local:1010/api/run&key=val" will be sent.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Headers")," - HTTP header parameters sending in the request to the server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Authorization")," - Authorization type when accessing the server. Options to choose from: no authorization (noAuth), authorization by user and password (basicAuth) and authorization by token (bearerToken).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Options")," - SSL protocol use on/off switch"))),(0,i.kt)("p",null,"The defined object can be used when defining a rule (RuleSet) in the actions tab, in the ","[",(0,i.kt)("strong",{parentName:"p"},"Alerts->Rule Set->Edit Rule"),"(by clicking on it)]"," menu . For this purpose, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Third party system")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"External system - REST")," type. Then, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Instance name")," field, select the defined communication and the threshold (",(0,i.kt)("inlineCode",{parentName:"p"},"Threshold levels"),") after which the event is to be sent."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"menu master",src:a(88198).Z,width:"1226",height:"1165"})),(0,i.kt)("p",null,'Here you can select the external system defined in "Integrations - Rest Client" ("Instance name") to which alerts will be sent\nwhen the selected "Threshold levels" are exceeded. '),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"snmp-trap-sender"},"SNMP Trap Sender"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"SNMP Trap Sender")," is used for communication with an external system using the SNMP Trap protocol. The protocol is used for sending and collecting of notifications regarding the events coming from devices. In this case, the source of the events (alerts) is the Sycope system."),(0,i.kt)("p",null,"For the ",(0,i.kt)("strong",{parentName:"p"},"SNMP Trap Sender")," you need to fill the following form:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),' - "SNMP Trap Sender"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name")," - External destination connection name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Active")," - communication status, active/inactive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Destinations")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Host - IP address of the server for the SNMP Trap protocols to which the notifications (alerts) will be sent."),(0,i.kt)("li",{parentName:"ul"},"Port - the port of the server for the SNMP Trap protocols to which the notifications (alerts) will be sent."),(0,i.kt)("li",{parentName:"ul"},"Protocol - the protocol used for sending the notifications.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TCP"),(0,i.kt)("li",{parentName:"ul"},"UDP"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SNMP Version")," - the selection of the SNMP version. Depending on the choice, additional parameters resulting from the specification of the chosen version will be required."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'V1 - "Community name" SNMP parameter for client (Sycope) authentication. The value must be equal to the value configured in the SNMP server Trap.'),(0,i.kt)("li",{parentName:"ul"},'V2C - "Community name" SNMP parameter for client (Sycope) authentication and the ability to download an MIB file for this version that describes the format of the SNMP notifications sent via the Sycope system - ',(0,i.kt)("inlineCode",{parentName:"li"},"Download MIB file"),"."),(0,i.kt)("li",{parentName:"ul"},"V3 - a set of SNMPv3 parameters for client (Sycope) authentication and the ability to download an MIB file for this version that describes the format of the SNMP notifications sent via the Sycope system - ",(0,i.kt)("inlineCode",{parentName:"li"},"Download MIB file"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Public permissions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete"),(0,i.kt)("li",{parentName:"ul"},"Edit     "))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. The available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit    ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"View"))))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"syslog"},"Syslog"),(0,i.kt)("p",null,"The communication with an external Syslog-ng server. This server is one of the system tools and is used for registering of events (alerts) coming mainly from the system sources, network tools, as well as the application via the TCP or UDP network protocols. In this case, the registered alerts will be sourced from the Sycope."),(0,i.kt)("p",null,"For the ",(0,i.kt)("strong",{parentName:"p"},"Syslog")," you need to fill the following form:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),'  - "Syslog"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name")," - External destination connection name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Active")," - communication status, active/inactive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Destinations")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Host - Syslog server IP address"),(0,i.kt)("li",{parentName:"ul"},"Port - Syslog server port (standard 514)"),(0,i.kt)("li",{parentName:"ul"},"Protocol - the protocol with which the notifications will be sent.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TCP"),(0,i.kt)("li",{parentName:"ul"},"UDP"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Public permissions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete"),(0,i.kt)("li",{parentName:"ul"},"Edit     "))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. The available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit    ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"View"))))))))}k.isMDXComponent=!0},77235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230526101738785-fcb02611301489ff7f4e729e332c0beb.png"},25796:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/userscripts-new-form-735c48fb72fda05b7b180abbbe5ea8a8.png"},88198:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/userscripts-ruleset-actions-a454497ff4dd1150e1b5b91659974781.png"}}]);