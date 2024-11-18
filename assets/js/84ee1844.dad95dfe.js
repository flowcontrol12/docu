"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10141],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var i=n(487462),o=n(263366),r=(n(667294),n(603905)),a=["components"],s={description:"Quick Setup",slug:"/Installation-Guide/Quick-Setup"},l="Quick Setup",u={unversionedId:"Installation-Guide/Quick-Setup/index",id:"version-2.6/Installation-Guide/Quick-Setup/index",title:"Quick Setup",description:"Quick Setup",source:"@site/versioned_docs/version-2.6/03-Installation-Guide/03-Quick-Setup/index.md",sourceDirName:"03-Installation-Guide/03-Quick-Setup",slug:"/Installation-Guide/Quick-Setup",permalink:"/2.6/Installation-Guide/Quick-Setup",draft:!1,tags:[],version:"2.6",frontMatter:{description:"Quick Setup",slug:"/Installation-Guide/Quick-Setup"},sidebar:"docs",previous:{title:"Let's Start",permalink:"/2.6/Installation-Guide/Lets-Start"},next:{title:"User Guide",permalink:"/2.6/User-Guide"}},p={},c=[{value:"Network Groups",id:"network-groups",level:2},{value:"<strong>Subnets</strong>",id:"subnets",level:3},{value:"<strong>Locations</strong>",id:"locations",level:3},{value:"<strong>Network Function</strong>",id:"network-function",level:3},{value:"<strong>Traffic policy</strong>",id:"traffic-policy",level:3},{value:"<strong>Service</strong>",id:"service",level:3},{value:"<strong>Business Unit</strong>",id:"business-unit",level:3},{value:"<strong>Severity</strong>",id:"severity",level:3},{value:"Applications",id:"applications",level:2},{value:"Rules",id:"rules",level:2},{value:"Data Retention",id:"data-retention",level:2},{value:"Finish",id:"finish",level:2}],d={toc:c};function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-setup"},"Quick Setup"),(0,r.kt)("p",null,"A setup wizard for initial system configuration, allowing you to start working immediately."),(0,r.kt)("p",null,"The completion of additional information is optional but recommended for smooth system operation.  "),(0,r.kt)("p",null,"Furthermore, thorough completion enables immediate utilization of the Sycope system with a high level of customization tailored to our needs and access to its extensive functionality."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Quick Setup",src:n(250551).Z,width:"3407",height:"1711"})),(0,r.kt)("h2",{id:"network-groups"},"Network Groups"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Add manually")," or via ",(0,r.kt)("inlineCode",{parentName:"p"},"Import CSV"),"."),(0,r.kt)("h3",{id:"subnets"},(0,r.kt)("strong",{parentName:"h3"},"Subnets")),(0,r.kt)("p",null,"Defining hosts and subnets."),(0,r.kt)("h3",{id:"locations"},(0,r.kt)("strong",{parentName:"h3"},"Locations")),(0,r.kt)("p",null,"Setting physical locations for specific hosts: place and country. For example, this is useful in data visualization on graphs."),(0,r.kt)("h3",{id:"network-function"},(0,r.kt)("strong",{parentName:"h3"},"Network Function")),(0,r.kt)("p",null,"Adding a network function description for quicker understanding of the purpose of a particular network."),(0,r.kt)("h3",{id:"traffic-policy"},(0,r.kt)("strong",{parentName:"h3"},"Traffic policy")),(0,r.kt)("p",null,"Adding a description of internet traffic, which can be useful for creating alert rules, for example, when a network with ",(0,r.kt)("em",{parentName:"p"},"No Internet access")," connects to the internet."),(0,r.kt)("h3",{id:"service"},(0,r.kt)("strong",{parentName:"h3"},"Service")),(0,r.kt)("p",null,"Add services functions (DHCP, DNS, etc.) to specific addresses or subnets"),(0,r.kt)("h3",{id:"business-unit"},(0,r.kt)("strong",{parentName:"h3"},"Business Unit")),(0,r.kt)("p",null,"Add business units (HR, Sales, etc.), and list subnets and assets for them."),(0,r.kt)("h3",{id:"severity"},(0,r.kt)("strong",{parentName:"h3"},"Severity")),(0,r.kt)("p",null,"Assigning importance levels to host addresses or subnets."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"After entering the data manually, you can export it to a CSV file to save for future use. Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Import CSV")," button at the top, there is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Export")," option.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Export CSV",src:n(554448).Z,width:"3407",height:"1711"})),(0,r.kt)("h2",{id:"applications"},"Applications"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Add manually")," or via ",(0,r.kt)("inlineCode",{parentName:"p"},"Import CSV"),"."),(0,r.kt)("p",null,"Information about applications running on specific hosts and assigned ports can be added. Additionally, details about the locations of additional instances of the application can also be included."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Applications",src:n(724648).Z,width:"3407",height:"1711"})),(0,r.kt)("h2",{id:"rules"},"Rules"),(0,r.kt)("p",null,"In this section, there are built-in rules that we recommend you to install, based on the information from the previous steps.",(0,r.kt)("br",{parentName:"p"}),"\n","Alternatively, you can add your own rules at this point.\nGeneral information about Rules can be found at ",(0,r.kt)("a",{parentName:"p",href:"/User-Guide/Configuration/Rules"},(0,r.kt)("strong",{parentName:"a"},"[Configuration > Rules]"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rules",src:n(727401).Z,width:"3407",height:"1711"})),(0,r.kt)("h2",{id:"data-retention"},"Data Retention"),(0,r.kt)("p",null,"Here, we set how long collected data for ",(0,r.kt)("strong",{parentName:"p"},"Netflow"),", ",(0,r.kt)("strong",{parentName:"p"},"Alerts"),", and ",(0,r.kt)("strong",{parentName:"p"},"Aggregations")," will be stored on the machine. In the ",(0,r.kt)("strong",{parentName:"p"},"Storage")," window at the bottom row, you can see how much disk space is currently occupied, while the top row represents the prediction considering the number of flows and the capabilities of the purchased license."),(0,r.kt)("h2",{id:"finish"},"Finish"),(0,r.kt)("p",null,"A summary window with a visualization of the introduced changes.\nAfter review and ensuring that everything is set according to the assumptions, proceed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Go to app")," button."))}f.isMDXComponent=!0},724648:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/applications-de6f5924ce1b5d7e2a5b8940e2e90f9c.png"},554448:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/export-csv-fbd7f4ff7fc3e58329678189a97ee673.png"},250551:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/quick-setup-2f043320d0172c7cc28da9561fc6d178.png"},727401:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/rules-7ac5c8a8eebeb0a79e2badd5991dfff1.png"}}]);