"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7242],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),m=u(a),s=l,g=m["".concat(o,".").concat(s)]||m[s]||d[s]||r;return a?n.createElement(g,i(i({ref:e},k),{},{components:a})):n.createElement(g,i({ref:e},k))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52854:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],p={slug:"/User-Guide/Settings/Configuration/Mapping/Lookups"},o="Lookups",u={unversionedId:"User-Guide/Settings/Configuration/Mapping/Lookups/index",id:"User-Guide/Settings/Configuration/Mapping/Lookups/index",title:"Lookups",description:"This menu [Settings > Configuration > Mapping > Lookups] can be used to create custom Lookups that may be applied in different places in the system.",source:"@site/docs/04-User-Guide/10-Settings/01-Configuration/01-Mapping/01-Lookups/index.md",sourceDirName:"04-User-Guide/10-Settings/01-Configuration/01-Mapping/01-Lookups",slug:"/User-Guide/Settings/Configuration/Mapping/Lookups",permalink:"/User-Guide/Settings/Configuration/Mapping/Lookups",draft:!1,tags:[],version:"current",lastUpdatedAt:1716239120,formattedLastUpdatedAt:"20 May 2024",frontMatter:{slug:"/User-Guide/Settings/Configuration/Mapping/Lookups"},sidebar:"docs",previous:{title:"Mapping",permalink:"/User-Guide/Settings/Configuration/Mapping"},next:{title:"Tags",permalink:"/User-Guide/Settings/Configuration/Mapping/Tags"}},k={},d=[{value:"Input keys",id:"input-keys",level:3},{value:"Output keys for Country",id:"output-keys-for-country",level:3},{value:"Output keys for ASN",id:"output-keys-for-asn",level:3},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Edit file",id:"edit-file",level:3},{value:"Active",id:"active",level:3},{value:"Tags",id:"tags",level:3},{value:"Input keys",id:"input-keys-1",level:3},{value:"Output keys",id:"output-keys",level:3},{value:"Active",id:"active-1",level:3},{value:"Name",id:"name-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Add key",id:"add-key",level:3},{value:"Add lookup",id:"add-lookup",level:3},{value:"Tags",id:"tags-1",level:3},{value:"Name",id:"name-2",level:3},{value:"Description",id:"description-2",level:3},{value:"Polling settings",id:"polling-settings",level:3},{value:"Input keys",id:"input-keys-2",level:3},{value:"Output keys",id:"output-keys-1",level:3},{value:"Name",id:"name-3",level:3},{value:"Description",id:"description-3",level:2},{value:"Mode",id:"mode",level:3},{value:"Input keys",id:"input-keys-3",level:2},{value:"Output keys",id:"output-keys-2",level:3},{value:"CSV File Lookup example",id:"csv-file-lookup-example",level:2},{value:"Subnet Lookup example",id:"subnet-lookup-example",level:2},{value:"SNMP interface Lookup example",id:"snmp-interface-lookup-example",level:2}],m={toc:d};function s(t){var e=t.components,p=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lookups"},"Lookups"),(0,r.kt)("p",null,"This menu ",(0,r.kt)("strong",{parentName:"p"},"[Settings > Configuration > Mapping > Lookups]")," can be used to create custom Lookups that may be applied in different places in the system."),(0,r.kt)("p",null,"Lookup is querying an additional database , CSV files, or it\u2018s own database with the specified value in order to map it or complete the data in a netflow session or alert with additional information. ",(0,r.kt)("strong",{parentName:"p"},"Lookups")," create their own fields in the system"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Lookups")," created in the system are listed in a table with the following columns:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name")," - unique lookup name"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Status")," - lookup status Active/Inactive"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type")," - Lookup type. There are five predefined types of lookups in the system: Asn, Country, CSV file, CSV file subnet, SNMP Interface"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Privacy")," - privacy status icon"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Created By")," - the name of the user who created the lookup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modified By")," - the name of the user who last modified the lookup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modification Time")," - last modification time"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Shared")," - users who shared the object"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tags")," - assigned tags"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Action")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit - edit Lookup"),(0,r.kt)("li",{parentName:"ul"},"Duplicate -  creating an editable copy of the selected"),(0,r.kt)("li",{parentName:"ul"},"Delete - delete Lookup")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Action")," button does not appear for system preinstalled objects.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"As it was written above, the system implements six predefined types of lookups, which are listed in the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Lookup type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Input keys"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Output keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Asn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,r.kt)("td",{parentName:"tr",align:"left"},"as.number, as.org"),(0,r.kt)("td",{parentName:"tr",align:null},"A system lookup for mapping IP Addresses to AS Names and AS Numbers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Compound"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null},"A lookup that contains data from other lookups.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Country"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,r.kt)("td",{parentName:"tr",align:"left"},"continent.code, continent.name, country.name, country.code"),(0,r.kt)("td",{parentName:"tr",align:null},"A system lookup for mapping IP Addresses to Country.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CSV file"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null},"A lookup built on the basis of the content of the.csv file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMP Interface"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null},"A system lookup based on SNMP poller designed for mapping Exporter IP and Exporter Interface to Interface Name, Interface Speed, Interface Description, Device Name, Device Description, Device Location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Subnet"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null},"A lookup based on CSV and designed for grouping CIDR.")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Pressing the ",(0,r.kt)("strong",{parentName:"p"},"New lookup")," button starts the wizard to create a ",(0,r.kt)("strong",{parentName:"p"},"Lookup"),"."),(0,r.kt)("p",null,"For example, to create CSV file type ",(0,r.kt)("strong",{parentName:"p"},"Lookup"),", perform the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the first window, specify the type (see table above)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter a name for the Lookup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data file"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Edit csv button ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"File preview"),(0,r.kt)("li",{parentName:"ul"},"Specify Delimeter, Quote Chart and Escape character (Default values are ","[comma, quotation mark, quotation mark]"),(0,r.kt)("li",{parentName:"ul"},"Choose the previously prepared CSV file and load it. Then confirm the operation by pressing the Apply file button.")))))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Private")," - accessible to the owner"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Public")," - visible to all, but You can grant permission:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DELETE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EDIT")))),(0,r.kt)("li",{parentName:"ul"},"Shared - accessible to one or more selected ",(0,r.kt)("strong",{parentName:"li"},"User roles"),". Available privileges are:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delete")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Edit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"View"))))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"country-and-asn-lookup"},"Country and asn Lookup"),(0,r.kt)("p",null,'The lookup which can be used to search data in the "GeoLite2-ASN.mmdb" and  "GeoLite2-Country.mmdb" files.\nThe lookup enables to search of dates from "BGP Autonomous System" ("GeoLite2-ASN.mmdb") and "Country" ("GeoLite2-Country.mmdb") by ip key.'),(0,r.kt)("h3",{id:"input-keys"},"Input keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP"),(0,r.kt)("td",{parentName:"tr",align:null},"IpAddress"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"output-keys-for-country"},"Output keys for Country"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"continent"),(0,r.kt)("td",{parentName:"tr",align:null},"Continent"),(0,r.kt)("td",{parentName:"tr",align:null},"Full Continent object (MaxMind)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"continent.code"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Continent code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"continent.name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Continent full name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country"),(0,r.kt)("td",{parentName:"tr",align:null},"Full Country object (MaxMind)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country.name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Country full name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country.code"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Country code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registered.country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country"),(0,r.kt)("td",{parentName:"tr",align:null},"ull Country object (MaxMind)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registered.country.code"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registered.country.name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"represented.country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country"),(0,r.kt)("td",{parentName:"tr",align:null},"ull Country object (MaxMind)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"represented.country.name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"represented.country.code"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"full.response"),(0,r.kt)("td",{parentName:"tr",align:null},"CountryResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"Full CountryResponse object (MaxMind)")))),(0,r.kt)("h3",{id:"output-keys-for-asn"},"Output keys for ASN"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"as.number"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"AS Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"as.org"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the organization assigned to the AS number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"full.response"),(0,r.kt)("td",{parentName:"tr",align:null},"AsnResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"Full CountryResponse object (AsnResponse)")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"country lookup",src:a(12642).Z,width:"506",height:"340"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"csv-file-lookup"},"CSV File Lookup"),(0,r.kt)("p",null,"The lookup is created with a given csv file as a data source for search. "),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"The lookup name."),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The description of the lookup."),(0,r.kt)("h3",{id:"edit-file"},"Edit file"),(0,r.kt)("p",null,"In the csv file, the data will be searched by keys."),(0,r.kt)("p",null,"Adding the file, you must set four parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"Data fields delimiter file row.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QueoteChar"),(0,r.kt)("td",{parentName:"tr",align:null},"The char which is a prefix and suffix for text values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EscapeChar"),(0,r.kt)("td",{parentName:"tr",align:null},"The char which is not interpreted in text values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File (button)"),(0,r.kt)("td",{parentName:"tr",align:null},"Chose the csv file")))),(0,r.kt)("h3",{id:"active"},"Active"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Switched off")," - the lookup is not available."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Switched on")," - the lookup is available."),(0,r.kt)("h3",{id:"tags"},"Tags"),(0,r.kt)("p",null,"Mark a lookup with a specified tag."),(0,r.kt)("h3",{id:"input-keys-1"},"Input keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"the first column of a file"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"output-keys"},"Output keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2..N column of a file"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"compound-lookup"},"Compound Lookup"),(0,r.kt)("p",null,"Add/Edit a new lookup of type compound, which searches by key(s) executing a sequence of one or many lookups.\nThe data of the first key found is returned, so the order of added lookups is important. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit/Add compund lookup",src:a(85811).Z,width:"815",height:"1102"})),(0,r.kt)("h3",{id:"active-1"},"Active"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Switched off")," - the lookup is not available."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Switched on")," - the lookup is available."),(0,r.kt)("h3",{id:"name-1"},"Name"),(0,r.kt)("p",null,"The lookup name."),(0,r.kt)("h3",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The description of the lookup."),(0,r.kt)("h3",{id:"add-key"},"Add key"),(0,r.kt)("p",null,"The list of keys (columns) of the lookup to search by."),(0,r.kt)("h3",{id:"add-lookup"},"Add lookup"),(0,r.kt)("p",null,'Add lookup data sources for search. Can be one or more lookups. For each source (lookup), we must define a mapping between source columns and current lookup keys (columns). The flag "Active" set to "off" means that the lookup will not be taken to account in the search execution sequence.'),(0,r.kt)("h3",{id:"tags-1"},"Tags"),(0,r.kt)("p",null,"Mark a lookup with specified tags."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,'We want to create a lookup "ColorsAndBirds" with a content of data from two "simple" lookup files, "Colors" and "Birds". '),(0,r.kt)("p",null,'The content of the lookup csv file "Colors":'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ipColor"),(0,r.kt)("th",{parentName:"tr",align:null},"colorName"),(0,r.kt)("th",{parentName:"tr",align:null},"flowInBytes"),(0,r.kt)("th",{parentName:"tr",align:null},"attrib"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"172.169.34.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,r.kt)("td",{parentName:"tr",align:null},"45643"),(0,r.kt)("td",{parentName:"tr",align:null},"a-b-b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"192.168.0.23"),(0,r.kt)("td",{parentName:"tr",align:null},"Green"),(0,r.kt)("td",{parentName:"tr",align:null},"45643"),(0,r.kt)("td",{parentName:"tr",align:null},"b-x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"87.98.0.23"),(0,r.kt)("td",{parentName:"tr",align:null},"Blue"),(0,r.kt)("td",{parentName:"tr",align:null},"45643"),(0,r.kt)("td",{parentName:"tr",align:null},"d-a-b")))),(0,r.kt)("p",null,'The content of the lookup csv file "Birds":'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ipBird"),(0,r.kt)("th",{parentName:"tr",align:null},"nameB"),(0,r.kt)("th",{parentName:"tr",align:null},"sourceChannel"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"198.132.45.46"),(0,r.kt)("td",{parentName:"tr",align:null},"Sparrow"),(0,r.kt)("td",{parentName:"tr",align:null},"TXR30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Eagle"),(0,r.kt)("td",{parentName:"tr",align:null},"IPP28")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"192.168.12.23"),(0,r.kt)("td",{parentName:"tr",align:null},"Raven"),(0,r.kt)("td",{parentName:"tr",align:null},"INTERNAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.0.1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Nightingale"),(0,r.kt)("td",{parentName:"tr",align:null},"INTERNAL")))),(0,r.kt)("p",null,'The lookup will have two keys "ip" and "name. We identified data (values) for those columns in "Colors" and "Birds" under the different column names, so we need a mapping between a source column name and a lookup column.\nThe mapping is optional, a key is not mapped in a specified lookup, then the search by the key for that lookup will be ignored.'),(0,r.kt)("p",null,"Mapping:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"source.column"),(0,r.kt)("th",{parentName:"tr",align:null},'"ColorsAndBirds" key'))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Colors.ipColor"),(0,r.kt)("td",{parentName:"tr",align:null},"ip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Colors.colorName"),(0,r.kt)("td",{parentName:"tr",align:null},"name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Birds.ipBird"),(0,r.kt)("td",{parentName:"tr",align:null},"ip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Birds.nameB"),(0,r.kt)("td",{parentName:"tr",align:null},"name")))),(0,r.kt)("p",null,"The following compound lookup definition: "),(0,r.kt)("p",null,'creates a compound lookup "ColorsAndBirds" with the keys->values to search by:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ip"),(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"othe columns..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"172.169.34.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,r.kt)("td",{parentName:"tr",align:null},"Colors.*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"192.168.0.23"),(0,r.kt)("td",{parentName:"tr",align:null},"Green"),(0,r.kt)("td",{parentName:"tr",align:null},"Colors.*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"87.98.0.23"),(0,r.kt)("td",{parentName:"tr",align:null},"Blue"),(0,r.kt)("td",{parentName:"tr",align:null},"Colors.*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"198.132.45.46"),(0,r.kt)("td",{parentName:"tr",align:null},"Sparrow"),(0,r.kt)("td",{parentName:"tr",align:null},"Birds.*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Eagle"),(0,r.kt)("td",{parentName:"tr",align:null},"Birds.*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"192.168.12.23"),(0,r.kt)("td",{parentName:"tr",align:null},"Raven"),(0,r.kt)("td",{parentName:"tr",align:null},"Birds.*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.0.1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Nightingale"),(0,r.kt)("td",{parentName:"tr",align:null},"Birds.*")))),(0,r.kt)("p",null,'so, if for example, the lookup key is "192.168.0.23","Green", then we get data from the corresponding row in Colors lookup.'),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"snmp-interface-lookup"},"SNMP Interface Lookup:"),(0,r.kt)("p",null,"The lookup with a data source from SNMP"),(0,r.kt)("h3",{id:"name-2"},"Name"),(0,r.kt)("p",null,"The lookup name."),(0,r.kt)("h3",{id:"description-2"},"Description"),(0,r.kt)("p",null,"The description of the lookup."),(0,r.kt)("h3",{id:"polling-settings"},"Polling settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"T Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Poll unresolved interfaces data every"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of query repeats in case no results were returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Refresh existing interfaces data every"),(0,r.kt)("td",{parentName:"tr",align:null},"The refresh interval of existing data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default credentials EDED"),(0,r.kt)("td",{parentName:"tr",align:null},"For each version of SNMP (v1, v2c, and v3), we can set security credentials params.")))),(0,r.kt)("h3",{id:"input-keys-2"},"Input keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exporterInt"),(0,r.kt)("td",{parentName:"tr",align:null},"List of Strings"),(0,r.kt)("td",{parentName:"tr",align:null},"The interfaces SNMP ID's taken from metrics.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exporterIp"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The IP address of the host/exporter.")))),(0,r.kt)("h3",{id:"output-keys-1"},"Output keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"if.name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of an interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"if.speed"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The interface speed in bits per sec.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"if.desc"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The interface description.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev.name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of a device.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev.desc"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The Device description.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev.loc"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The device location.")))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"subnet-lookup"},"Subnet Lookup:"),(0,r.kt)("p",null,"Lookup checking whether an IP address belongs to a subnet. The data is loaded from a CSV file where the first column contains the subnet definitions."),(0,r.kt)("h3",{id:"name-3"},"Name"),(0,r.kt)("p",null,"The lookup name."),(0,r.kt)("h2",{id:"description-3"},"Description"),(0,r.kt)("p",null,"The description of the lookup."),(0,r.kt)("h3",{id:"mode"},"Mode"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overlapping"),(0,r.kt)("td",{parentName:"tr",align:null},"The subnets can be comprised in itself and the result is a list of all matched to the IP. The list can be empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proper"),(0,r.kt)("td",{parentName:"tr",align:null},"The subnets can't be comprised, and the result is exactly one found subnet or null.")))),(0,r.kt)("h2",{id:"input-keys-3"},"Input keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"the first column of a file"),(0,r.kt)("td",{parentName:"tr",align:null},"Mixed (IpAddress, String)"),(0,r.kt)("td",{parentName:"tr",align:null},"Requires to be a valid representation of the IP address.")))),(0,r.kt)("h3",{id:"output-keys-2"},"Output keys"),(0,r.kt)("p",null,"The output keys depend on the columns in the input CSV file."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description")))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"lookup-examples"},"Lookup examples"),(0,r.kt)("h2",{id:"csv-file-lookup-example"},"CSV File Lookup example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"[Settings > Configuration > Mapping > Lookups]")," and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add lookup"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328112819184",src:a(76326).Z,width:"1485",height:"790"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Choose the lookup type")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328112031005",src:a(6062).Z,width:"373",height:"295"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Complete the configuration settings for a new lookup")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328112643063",src:a(9822).Z,width:"471",height:"849"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",{parentName:"tr",align:null},"Lookup name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Lookup description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Data File")),(0,r.kt)("td",{parentName:"tr",align:null},"Place to select the .csv file to import data. Once the CSV  File lookup is created, you can view its entries by pressing the \u201eEdit csv\u201d button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Active")),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled rule")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Tags")),(0,r.kt)("td",{parentName:"tr",align:null},"Tags assigned to  the lookup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Privacy")),(0,r.kt)("td",{parentName:"tr",align:null},"Object access permission:  ",(0,r.kt)("br",null),"- Private (Only  the creator can view this item)  ",(0,r.kt)("br",null),"- Public  (Anyone in  my organization can view this item, Anyone can also Delete")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Choose a csv file")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328112916724",src:a(11867).Z,width:"464",height:"386"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Load a csv file")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328112938896",src:a(48839).Z,width:"655",height:"347"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Choose a data type for imported data")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328115531534",src:a(18550).Z,width:"703",height:"851"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Review lookup settings and click ",(0,r.kt)("strong",{parentName:"li"},"Save"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328113804180",src:a(42423).Z,width:"498",height:"856"})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Usage the lookup in a filter")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328113829572",src:a(52626).Z,width:"853",height:"485"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"subnet-lookup-example"},"Subnet Lookup example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328114543952",src:a(26247).Z,width:"422",height:"833"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328114558038",src:a(79017).Z,width:"607",height:"433"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"snmp-interface-lookup-example"},"SNMP interface Lookup example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328114625831",src:a(93970).Z,width:"1309",height:"714"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328114638384",src:a(4950).Z,width:"390",height:"891"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230328114648390",src:a(38172).Z,width:"379",height:"891"})))}s.isMDXComponent=!0},12642:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/country-lookup-sample1-e835480ca50cfbe3bd3e63d2c1d4ac76.png"},6062:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328112031005-46894ff496a9f6ee37d5c3b727995293.png"},9822:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328112643063-c800c28f79422ecfdb229e5add8e02ac.png"},76326:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328112819184-7937e685736d8ad60ff27ac1c1764d4b.png"},11867:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328112916724-71c22f3f6ff06ddf2e43f49e58b813da.png"},48839:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328112938896-440770d5dfdd8c07d1aba8efa6ef4ea7.png"},42423:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328113804180-e99e75419ce058dbaf04b3b6b84261ad.png"},52626:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328113829572-18dab37f22f0e2da8c48a4354fd9bd92.png"},26247:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328114543952-ee534353315fa900c690199a78a42598.png"},79017:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328114558038-513f3f57b3657394d990c672ca012f69.png"},93970:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328114625831-582e0801de331bbddec29227ab2c129c.png"},4950:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328114638384-c6b6fad8951057130a8e0506ee1bd1b6.png"},38172:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328114648390-f0779abe8279fe9a2ac735322d962bfc.png"},18550:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230328115531534-fbbf4190e3128e448246f374f772e45e.png"},85811:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/img-edit-lookup-compund-0bb68323cacec63f67c9cbd8ac85daf1.png"}}]);