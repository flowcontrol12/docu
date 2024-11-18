"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23259],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},627280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(487462),a=r(263366),o=(r(667294),r(603905)),l=["components"],i={description:"Netflow Tab"},p=void 0,s={unversionedId:"User Guide/Configuration/NetFlow/Netflow",id:"version-2.1.0/User Guide/Configuration/NetFlow/Netflow",title:"Netflow",description:"Netflow Tab",source:"@site/versioned_docs/version-2.1.0/04-User Guide/Configuration/05-NetFlow/01-Netflow.md",sourceDirName:"04-User Guide/Configuration/05-NetFlow",slug:"/User Guide/Configuration/NetFlow/Netflow",permalink:"/2.1.0/User Guide/Configuration/NetFlow/Netflow",draft:!1,tags:[],version:"2.1.0",lastUpdatedAt:1673276180,formattedLastUpdatedAt:"9 Jan 2023",sidebarPosition:1,frontMatter:{description:"Netflow Tab"},sidebar:"docs",previous:{title:"NetFlow",permalink:"/2.1.0/User Guide/Configuration/NetFlow/"},next:{title:"SFlow",permalink:"/2.1.0/User Guide/Configuration/NetFlow/SFlow"}},c={},d=[{value:"Simple mode",id:"simple-mode",level:2},{value:"Advanced mode",id:"advanced-mode",level:2},{value:"Creating new profile",id:"creating-new-profile",level:2}],u={toc:d};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This menu ","[Configuration>NetFlow>",(0,o.kt)("strong",{parentName:"p"},"Netflow"),"]"," can be used to configure NetFlow parameters."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"simple-mode"},"Simple mode"),(0,o.kt)("p",null,"In this menu, enter the port number for the NetFlow (",(0,o.kt)("strong",{parentName:"p"},"Netflow Port"),"), the default port is 2055."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20221108113529232",src:r(989942).Z,width:"368",height:"257"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"advanced-mode"},"Advanced mode"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Netflow Ports")," - the default port is 2055. You can change it or add a new port by pressing the plus button."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New profile")," - with this button you can add a new Netflow profile. When creating it you have to complete the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name")," - profile name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source type"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"asa")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"default")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nbox")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Apply to exporters")," - here you can assign a profile to the exporter."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Select non-standard fields")," - here you can select non-standard Netflow fields.")),(0,o.kt)("p",null,"The list of created ",(0,o.kt)("strong",{parentName:"p"},"Profiles")," is in the table with the following columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Profile")," - profile name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type")," - exporter type ","[",(0,o.kt)("strong",{parentName:"li"},"default"),", ",(0,o.kt)("strong",{parentName:"li"},"asa"),", ",(0,o.kt)("strong",{parentName:"li"},"nbox"),"]","."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exporters IP")," - exporter ip adress."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Action"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Edit - edit selected ",(0,o.kt)("strong",{parentName:"li"},"Profile"),"."),(0,o.kt)("li",{parentName:"ul"},"Delete - delete selected ",(0,o.kt)("strong",{parentName:"li"},"Profile"),".")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Add exporter")," - you can add an exporter."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20221108114643380",src:r(972205).Z,width:"833",height:"759"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Add exporter")," section lists exporters with provided NetFlow templates and NetFlow fields."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20221109142047764",src:r(452082).Z,width:"914",height:"563"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20221109142201952",src:r(742284).Z,width:"539",height:"342"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-new-profile"},"Creating new profile"),(0,o.kt)("p",null,"Profiles allow defining fields of the NetFlow protocol to be analyzed by Sycope. You can create your own profiles depending on your needs."),(0,o.kt)("p",null,"Create a new profile by pressing the ",(0,o.kt)("strong",{parentName:"p"},"New profile")," button then the profile creation wizard will appear."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20221108122451811",src:r(826909).Z,width:"787",height:"763"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Name")," - unique profile name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source type")," ","[",(0,o.kt)("strong",{parentName:"p"},"default"),"/",(0,o.kt)("strong",{parentName:"p"},"asa"),"]"," - The source from which the stream of neftlow comes - it may be characteristic and differ for a particular device. In the system, in addition to the default source, the CISCO ASA device is defined. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Apply to exporters")," - Here we assign a profile to the selected exporters."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Choose advanced options")," - In the table we can select additional non-standard NetFlow fields that are available to the selected exporter. "),(0,o.kt)("p",null,"To finish creating a new profile, press the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button. The new profile will appear on the list of available profiles in the system."))}m.isMDXComponent=!0},989942:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221108113529232-f45cad2cc7aed5b09225551618b365ef.png"},972205:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221108114643380-77f33eacdc459bbd855150d31557d493.png"},826909:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221108122451811-a546c72144ce7c3cfcfc9a7dac64e626.png"},452082:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221109142047764-d22769333e00edcced43872ec9032a37.png"},742284:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221109142201952-c83420cfb257dec6ca56f572c2ee29c2.png"}}]);