"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={description:"Netflow Tab"},p=void 0,s={unversionedId:"User Guide/Configuration/NetFlow/Netflow",id:"version-2.3/User Guide/Configuration/NetFlow/Netflow",title:"Netflow",description:"Netflow Tab",source:"@site/versioned_docs/version-2.3/04-User Guide/Configuration/05-NetFlow/01-Netflow.md",sourceDirName:"04-User Guide/Configuration/05-NetFlow",slug:"/User Guide/Configuration/NetFlow/Netflow",permalink:"/2.3/User Guide/Configuration/NetFlow/Netflow",draft:!1,tags:[],version:"2.3",lastUpdatedAt:1695227583,formattedLastUpdatedAt:"20 Sept 2023",sidebarPosition:1,frontMatter:{description:"Netflow Tab"},sidebar:"docs",previous:{title:"NetFlow",permalink:"/2.3/User Guide/Configuration/NetFlow/"},next:{title:"SFlow",permalink:"/2.3/User Guide/Configuration/NetFlow/SFlow"}},d={},c=[{value:"Simple option",id:"simple-option",level:2},{value:"Advanced options",id:"advanced-options",level:2},{value:"Traffic profiles",id:"traffic-profiles",level:3},{value:"Exporters IP",id:"exporters-ip",level:3},{value:"Custom fields",id:"custom-fields",level:3},{value:"Custom pre aggrs",id:"custom-pre-aggrs",level:3},{value:"Creating new profile",id:"creating-new-profile",level:2}],m={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This menu ","[Configuration>NetFlow>",(0,o.kt)("strong",{parentName:"p"},"Netflow"),"]"," can be used to configure NetFlow parameters."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"simple-option"},"Simple option"),(0,o.kt)("p",null,"In this menu, enter the port number for the NetFlow (",(0,o.kt)("strong",{parentName:"p"},"Netflow Port"),"), the default port is 2055."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230103122135738",src:n(45242).Z,width:"392",height:"230"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"advanced-options"},"Advanced options"),(0,o.kt)("p",null,"Available when the ",(0,o.kt)("strong",{parentName:"p"},"Show advanced options")," switch is on."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Netflow Ports")," - the default port is 2055. You can change or add a new port by pressing the plus button."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"traffic-profiles"},"Traffic profiles"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New profile")," - you can add a new Netflow profile with this button. When creating it, you have to complete the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Name")," - profile name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Source type")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"asa")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"default")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nbox")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Select custom fields")," - here you can select from the table custom Netflow fields.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Apply to exporters")," - here, you can assign a profile to the exporter."))),(0,o.kt)("p",null,"The list of created ",(0,o.kt)("strong",{parentName:"p"},"Profiles")," is in the table with the following columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Profile")," - profile name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type")," - exporter type ","[",(0,o.kt)("strong",{parentName:"li"},"default"),", ",(0,o.kt)("strong",{parentName:"li"},"asa"),", ",(0,o.kt)("strong",{parentName:"li"},"nbox"),"]","."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exporters IP")," - exporter IP address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Action"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Edit - edit selected ",(0,o.kt)("strong",{parentName:"li"},"Profile"),"."),(0,o.kt)("li",{parentName:"ul"},"Delete - delete the selected ",(0,o.kt)("strong",{parentName:"li"},"Profile"),".")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"exporters-ip"},"Exporters IP"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Add exporter")," - here, you can manually add an exporter.  After clicking, a new row will be added to the table where you must complete the ",(0,o.kt)("strong",{parentName:"p"},"IP address")," and assign Trafic profiles. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20221214092320005",src:n(23929).Z,width:"822",height:"186"})),(0,o.kt)("p",null,"After completing and pressing the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button new exporter will be added to the System."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20221214093119222",src:n(7360).Z,width:"961",height:"325"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"custom-fields"},"Custom fields"),(0,o.kt)("p",null,"The table contains fields added by the user."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230103123332476",src:n(67929).Z,width:"975",height:"120"})),(0,o.kt)("p",null,"To add a new ",(0,o.kt)("strong",{parentName:"p"},"Custom field"),", click on the ",(0,o.kt)("strong",{parentName:"p"},"magnifying glass icon")," next to the exporter in the ",(0,o.kt)("strong",{parentName:"p"},"IP Exporter table"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230103123751192",src:n(36872).Z,width:"982",height:"283"})),(0,o.kt)("p",null," When clicked, the ",(0,o.kt)("strong",{parentName:"p"},"Advanced View")," menu will appear on the right side of the screen. This menu contains all the fields for the exporter including unknown."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230103124050082",src:n(17228).Z,width:"1458",height:"1307"})),(0,o.kt)("p",null,"After clicking on the ",(0,o.kt)("strong",{parentName:"p"},"plus icon"),", the wizard for creating a user ",(0,o.kt)("strong",{parentName:"p"},"custom field")," will appear."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230103124716820",src:n(20475).Z,width:"1045",height:"1142"})),(0,o.kt)("p",null,"In the first step, you need to complete the fields related to netflow data, as in the example below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230103125003019",src:n(16527).Z,width:"480",height:"1074"})),(0,o.kt)("p",null,"In the second step, you need to complete the fields related to ",(0,o.kt)("strong",{parentName:"p"},"Custom aggregation"),", as below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230103125158945",src:n(5331).Z,width:"486",height:"553"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"custom-pre-aggrs"},"Custom pre aggrs"),(0,o.kt)("p",null,"The table contains aggregations created automatically based on custom fields created earlier."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230103122845910",src:n(26494).Z,width:"999",height:"123"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-new-profile"},"Creating new profile"),(0,o.kt)("p",null,"Profiles allow defining fields of the NetFlow protocol to be analyzed by Sycope. You can create your profiles depending on your needs."),(0,o.kt)("p",null,"Create a new profile by pressing the ",(0,o.kt)("strong",{parentName:"p"},"New profile")," button then the profile creation wizard will appear."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230103122356997",src:n(61561).Z,width:"677",height:"795"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Name")," - unique profile name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source type")," ","[",(0,o.kt)("strong",{parentName:"p"},"default"),"/",(0,o.kt)("strong",{parentName:"p"},"asa"),"]"," - The source from which the stream of neftlow comes - may be characteristic and differ for a particular device. In the System, the CISCO ASA device is defined in addition to the default source. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Apply profile to exporters")," - Here, we assign a profile to the selected exporters."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Choose advanced options")," - In the table, we can select additional non-standard NetFlow fields available to the selected exporter. "),(0,o.kt)("p",null,"To finish creating a new profile, press the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button. The new profile will appear on the list of available profiles in the system. "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In order for the system to start analyzing additional NetFlow fields you need to check them !!!"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"image-20230509110952948",src:n(60156).Z,width:"629",height:"624"}))))}u.isMDXComponent=!0},23929:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20221214092320005-bf480b6dbb45486fab1c6a1530dc4cea.png"},7360:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20221214093119222-7b9c1eec5b64193acb8a614f98d24c94.png"},45242:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230103122135738-7298f148911005b652114f20bc09841a.png"},61561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230103122356997-d43b1157590c58d7c57082b5b5ebafba.png"},26494:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230103122845910-282080396ccf42396dfd3010723cab58.png"},67929:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230103123332476-5452b0a33334bd35f20f17a7c7deae55.png"},36872:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230103123751192-19e6031fe443edbdeed0f1e68d76a752.png"},17228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230103124050082-265122335666d299c3c702e74b0ebfb3.png"},20475:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230103124716820-812827f8b78deb8a80a4806a7cf4f290.png"},16527:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230103125003019-45486c2075f4af9df218bedf4c8d26a7.png"},5331:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230103125158945-2889d40934bc9bafa7e668df66ee4fc7.png"},60156:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230509110952948-12573fcd200db1611af8bef43bc08b77.png"}}]);