"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88866],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),d=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(g.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,u=p["".concat(g,".").concat(m)]||p[m]||A[m]||i;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},314999:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>g,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>A});var n=a(487462),r=a(263366),i=(a(667294),a(603905)),l=["components"],o={slug:"/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations"},g="Advanced Custom Aggregations",d={unversionedId:"User-Guide/Settings/NetFlow/Advanced-Custon-Aggregations/index",id:"version-2.6/User-Guide/Settings/NetFlow/Advanced-Custon-Aggregations/index",title:"Advanced Custom Aggregations",description:"The [Settings > NetFlow > Advanced Custom Aggregations]  menu can be used to create custom aggregations.",source:"@site/versioned_docs/version-2.6/04-User-Guide/10-Settings/04-NetFlow/02-Advanced-Custon-Aggregations/index.md",sourceDirName:"04-User-Guide/10-Settings/04-NetFlow/02-Advanced-Custon-Aggregations",slug:"/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations",permalink:"/2.6/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations",draft:!1,tags:[],version:"2.6",frontMatter:{slug:"/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations"},sidebar:"docs",previous:{title:"NetFlow",permalink:"/2.6/User-Guide/Settings/NetFlow/NetFlow"},next:{title:"SFlow",permalink:"/2.6/User-Guide/Settings/NetFlow/SFlow"}},s={},A=[{value:"Add aggregation / Edit aggregation",id:"add-aggregation--edit-aggregation",level:2},{value:"Import aggregation",id:"import-aggregation",level:2}],p={toc:A};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-custom-aggregations"},"Advanced Custom Aggregations"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"[Settings > NetFlow > Advanced Custom Aggregations]"),"  menu can be used to create custom aggregations."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advanced Custom Aggregations")," are aggregations that can be created by the user and for which it is possible to set a dynamic key field value (for performance reasons, max recommended value equals 3) and any metric (for performance reasons, max recommended value equals 6)."),(0,i.kt)("p",null,"They are an evolution of Custom Aggregation which are available in the menu ",(0,i.kt)("strong",{parentName:"p"},"[Settings > NetFlow > NetFlow]")," and have built-in metrics such as Client Bytes, Client Packets, Flows, Server Bytes, Server Packets."),(0,i.kt)("p",null,"The aggregate defined in this way operates on data that arrives on an ongoing basis from the stream.\nNot on data already saved in Sycope. It works by plugging in\ndata stream (netflow or netflowRaw), performs defined aggregations as data arrives and saves their results in its data file (result). The results are then available like any other data source for Sycope application objects (dashboards, nql, etc..)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230602092157104",src:a(435250).Z,width:"1449",height:"885"})),(0,i.kt)("p",null,"After selecting the ",(0,i.kt)("strong",{parentName:"p"},"[Settings > NetFlow > Advanced Custom Aggregations]")," menu, a table with existing aggregations will be shown.\nFor each object in the table, we can perform the following operations:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"menu master",src:a(31519).Z,width:"25",height:"25"})," Edit"),(0,i.kt)("td",{parentName:"tr",align:null},"Edit the aggregation parameters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"menu master",src:a(253806).Z,width:"26",height:"25"})," Duplicate"),(0,i.kt)("td",{parentName:"tr",align:null},"Duplicate the aggregation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"menu master",src:a(108776).Z,width:"24",height:"24"})," Export"),(0,i.kt)("td",{parentName:"tr",align:null},"Export to a file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"menu master",src:a(633245).Z,width:"24",height:"24"})," Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"Delete the aggregation.")))),(0,i.kt)("h2",{id:"add-aggregation--edit-aggregation"},"Add aggregation / Edit aggregation"),(0,i.kt)("p",null,"After clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add aggregation")," button or in the table on the ",(0,i.kt)("img",{alt:"master menu",src:a(559448).Z,width:"25",height:"25"})," icon, a window with the advanced custom aggregation creator will appear for adding a new aggregation or editing an existing one."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230602092542165",src:a(839361).Z,width:"644",height:"896"})),(0,i.kt)("p",null,"The following table describes the parameters that are available in the creator:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the created/edited aggregation that will appear in the aggregation list table.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Stream"),(0,i.kt)("td",{parentName:"tr",align:null},"Selecting the data source for aggregation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Engine name"),(0,i.kt)("td",{parentName:"tr",align:null},"Selecting the process feeding the aggregation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Index"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the pre-aggregation as a data source. In the system, the data from it will be available under this name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Filters"),(0,i.kt)("td",{parentName:"tr",align:null},'A filter in NQL format that will filter the data passed from the "Stream" for aggregation.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key fields"),(0,i.kt)("td",{parentName:"tr",align:null},"List of data fields from the source after which the aggregation of the indicated fields will be performed. It defines a group of values in a Metric fields.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Metric fields"),(0,i.kt)("td",{parentName:"tr",align:null},'The fields whose values will be aggregated by the defined "Key fields". For each field, we can select the aggregation function in the "Deduplication strategy" field.')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stream")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"netflow"),(0,i.kt)("td",{parentName:"tr",align:null},"Data after de-dublication. The default strategy is 'first'.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nertlofRaw"),(0,i.kt)("td",{parentName:"tr",align:null},"Raw data before de-dublication.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Deduplication strategy")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sum"),(0,i.kt)("td",{parentName:"tr",align:null},"The sum of all values in a group defined by key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"and"),(0,i.kt)("td",{parentName:"tr",align:null},"Calculates the bit AND operation on values in a group defined by key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"first"),(0,i.kt)("td",{parentName:"tr",align:null},"The first value in a group defined by key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"last"),(0,i.kt)("td",{parentName:"tr",align:null},"The last value in a group defined by key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max"),(0,i.kt)("td",{parentName:"tr",align:null},"The largest value in a group defined by key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min"),(0,i.kt)("td",{parentName:"tr",align:null},"The lowest value in a group defined by key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Takes a random value from a group defined by key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"or"),(0,i.kt)("td",{parentName:"tr",align:null},"Calculates the bit OR operation on values in a group defined by key.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ungroup collection")),(0,i.kt)("p",null,"Optional. If one of the Key Fields is a collaction, then we can unwind its values before aggregation."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("p",null,"A key field 'Countries' value is a collection ","['PL','US','IT','GB']",". "),(0,i.kt)("p",null,"if ",(0,i.kt)("inlineCode",{parentName:"p"},"Ungroup collection")," is empty then the input data will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n{"Countries":["PL","US","IT","GB"],"fname":"John", "age": 83}\n]\n')),(0,i.kt)("p",null,"If the fiels in set in ",(0,i.kt)("inlineCode",{parentName:"p"},"Unwind by key field")," field, then the (unwinded) input data for aggregation will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n{"Countries":"PL", "fname":"John", "age": 83},\n{"Countries":"US", "fname":"John", "age": 83},\n{"Countries":"IT", "fname":"John", "age": 83},\n{"Countries":"GB", "fname":"John", "age": 83}\n]\n')),(0,i.kt)("p",null,"When we click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," button, the message will appear asking for creating a data retention for the aggregation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230602093322552",src:a(298762).Z,width:"663",height:"244"})),(0,i.kt)("p",null,"It is always good to define data retention for aggregation. Since pre-aggregation is executed at intervals, the retention helps to improved system performance\nand data storage optimization."),(0,i.kt)("p",null,'After saving, the aggregations will appear in a table and will be available in the system, for example, in the Playground, under the source name specified in the \u201dIndex" field. The first data should be available about 1 minute after creating the aggregation.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230602093322552",src:a(469159).Z,width:"1163",height:"182"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"menu master",src:a(148821).Z,width:"1352",height:"588"})),(0,i.kt)("h2",{id:"import-aggregation"},"Import aggregation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Import aggregation")," button is used for importing a previously exported (",(0,i.kt)("img",{alt:"menu master",src:a(108776).Z,width:"24",height:"24"}),") aggregation from the file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230602093541095",src:a(769841).Z,width:"1163",height:"182"})),(0,i.kt)("p",null,"After selecting the file, a window will show up enabling the edition of imported data before saving it."))}m.isMDXComponent=!0},435250:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230602092157104-2b7a6664a571d61584ff6e290dbbe33a.png"},839361:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230602092542165-abccf586872d03d3f135216f692ccec3.png"},469159:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230602093322552-9db4ef379fa68869a185c45976043cad.png"},769841:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230602093541095-5ff83a080f55f0747382f7d218baf8cc.png"},559448:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAESSURBVEhLrdW/CoJAAMfxHiSaI8gt6AGCaoxwbmiLlnqCGhrbg57Apb329qBGl1xqaDAcUk+lnxyccp3pHSff4dTu0wn+qbUNU1ep1exsGr17ffBRCBMxPbOUIRqmZxZ3TiEVqz8LnEfsevFiG+aPS1uAoFgnstqRJEnynJzFILoLDrvsrIRFIdQa+/QIUOcpb7EVoasdgcPg7SU4zn5TyeIuDQPschAqtzgI/a6IVmJVh9A/SwpChZYshMSWAoQEVnfiK0BIYE3XYf4OrAghgbU/pDckHVeHkMC62fH5EllHgpcBhYbzwvJ/I7AwHxxWh4vFszJaBngfsI1EaWx7uUrPdmmZpfMdrfPboSt9lmF+AcPoXNdzX8BjAAAAAElFTkSuQmCC"},148821:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/preaggr-playground-872cc1a70d3e5b09018b9c7d90357f2c.png"},298762:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/preaggr-retention-da9d1affc9964039e214efa942d333ce.png"},633245:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEgSURBVDhPY9DVC6UKAhmkYdoq5/JQxuM7GQioEagdahDZpkAQUDvUIDQJMhA+g7SCfxy98OcfEli58zdQEE0ZBOEzaPa6349e/A0t+wlHQG7DjN9oyiAI3aArd/5CbScCAN0L14hukHvWT6CdQOOQHYKJgKYAlQEVwzWiGwREQHXHLoKsUvT5DvFIXO2PgCKQns4FUH8BDQIqg7AhCJ9BQP1ADUDGxZt/dh3/ox0C4npkg/STadC2I3/mbRwkBn39PtgMAmoAMgafQQfP/t186Df5BgFRdscvIOmZ+9MuGZRXi/tAXCAiyiBgwv/4+V9S48+QUuyofsYvoEHI+QOIsBgERMCcATQLFwBKYZYB2A0iA0ENolpRS7XCnwpILxQAj2pyg//JmpoAAAAASUVORK5CYII="},253806:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAIAAACgvKk3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH7SURBVEhLY9TVC2WgHoAa940/7henzX8mDogokYDx3w+270e4Pi6C8hkYmMXFtYFm/eR2YWBkgYoRDxhZ/rIp/WfiZf15ESLABMRAd0E45AFk7SAXIfwoxdxSwRKvygjlYoBPt/9Wd/ze8AzKhQDkIELxYEQa0CyGO2f+XvkIFUEB/ExOJsx1af82NPyFimAAFOOMpRgZnv2Nq/39GCqABhgnz2UPkAKGD07jQGGHAv4y4DALCP7/AJrDwzi5hLUlnEkHKogCMIwjCASZApyZ4xPYNsxidYIKIQDpxj3+K+v5M3fvfwZZ5rxYqBgckG4cCPzf0PMPGCb8IlA+HJBnHE4whIx7/ZWBQZxpsgP2XCHrwGoizsDw+z+Ujw2gJOOuFX89q5gDytkDyqEi6ODX/xWL/kDZ2ABqKXLyt2PJ31wXZjVuRmtnJoYbf48+hcqAwNf/6/f82XcbysMKUI0Dgtv/Jt/+x8DAut+Zgf3pn9weHF6TYmBnYPgJ5SAAhnFQ8O/Re2YnC7aFJf8+QUVQAJ8ykyzD/31XoVw4AJXG76UQxSkcAAN+ViazDh+Uiw7+/r+y40/alL+QDC74LA5Mg437IDGL1GIdGQCLeIEXaRA2KKEAy3sIhzyArB1UVwBLemB5/49FitTqAugu9m8HkKseKleMVM1kDAwAPvmV3idBGvYAAAAASUVORK5CYII="},31519:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAESSURBVEhLrdW/CoJAAMfxHiSaI8gt6AGCaoxwbmiLlnqCGhrbg57Apb329qBGl1xqaDAcUk+lnxyccp3pHSff4dTu0wn+qbUNU1ep1exsGr17ffBRCBMxPbOUIRqmZxZ3TiEVqz8LnEfsevFiG+aPS1uAoFgnstqRJEnynJzFILoLDrvsrIRFIdQa+/QIUOcpb7EVoasdgcPg7SU4zn5TyeIuDQPschAqtzgI/a6IVmJVh9A/SwpChZYshMSWAoQEVnfiK0BIYE3XYf4OrAghgbU/pDckHVeHkMC62fH5EllHgpcBhYbzwvJ/I7AwHxxWh4vFszJaBngfsI1EaWx7uUrPdmmZpfMdrfPboSt9lmF+AcPoXNdzX8BjAAAAAElFTkSuQmCC"},108776:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAENSURBVDhPrZQ9C8IwEIb9IeIsgm6CP0DQXTsLjm4OuqqDY/eCo5OLq+Jed9Gxi06OSgdtY8W3pIRy9ish4Vl6uXu4HGlK9YahhVBUbS4r7Wu5+1IAhSiPRMoWDsojEdlQgIrMtf/9W2fnU+u9RU4iVISyucWMqSfYHFgRV4IIxeIToMeLE4BsVyHR8RQqsl2FRKjvT7zhwnu4qa580dik48cQ4wmcfBEBx0SPJAhURKst29mMHFBa1Bl5rUHC4CVEt3uA3fhCd2JXQoSpYzocdIRMRMSuhIiDBMyIWICKCB1hUiSuKCJBkCCaWT7ucRpIIIfiUBFu7dNFcura28V+EWUikbanVtvjr4GG8QPZwVBxmIR5lAAAAABJRU5ErkJggg=="}}]);