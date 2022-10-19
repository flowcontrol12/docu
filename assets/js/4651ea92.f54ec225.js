"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1414],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=o(a),s=r,N=k["".concat(m,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},431:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={},m=void 0,o={unversionedId:"Requirements",id:"version-2.0.29/Requirements",title:"Requirements",description:"Collector hardware requirements",source:"@site/versioned_docs/version-2.0.29/07-Requirements.md",sourceDirName:".",slug:"/Requirements",permalink:"/2.0.29/Requirements",draft:!1,tags:[],version:"2.0.29",lastUpdatedAt:1666178777,formattedLastUpdatedAt:"19 Oct 2022",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"Release notes",permalink:"/2.0.29/Release notes"},next:{title:"3rd Party Licenses",permalink:"/2.0.29/3rdpartylicenses"}},d={},u=[{value:"Collector hardware requirements",id:"collector-hardware-requirements",level:2},{value:"Probe hardware requirements",id:"probe-hardware-requirements",level:2}],k={toc:u};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"collector-hardware-requirements"},"Collector hardware requirements"),(0,l.kt)("p",null,"The tables below are lists of required server hardware parameters for desired flow limits."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:"left"},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max number of flows"),(0,l.kt)("td",{parentName:"tr",align:"left"},"30k flow/s"),(0,l.kt)("td",{parentName:"tr",align:null},"60k flow/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max number of data  sources"),(0,l.kt)("td",{parentName:"tr",align:"left"},"unlimited"),(0,l.kt)("td",{parentName:"tr",align:null},"unlimited")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Supported VM Systems"),(0,l.kt)("td",{parentName:"tr",align:"left"},"VMWare 6.5 and higher"),(0,l.kt)("td",{parentName:"tr",align:null},"VMWare 6.5 and higher")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Base OS ",(0,l.kt)("strong",{parentName:"th"},"*")),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"8 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"16 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Storage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OS disk"),(0,l.kt)("td",{parentName:"tr",align:null},"500 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"500 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,l.kt)("td",{parentName:"tr",align:null},"300 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"600 GB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"*")," Minimum requirements for Proof of Concept. Any production environment requires additional resources based on number and types of modules "),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Resources for licensed modules"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VISIBILITY  module"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"+8 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"+16 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"+4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Storage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,l.kt)("td",{parentName:"tr",align:null},"450 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"900 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAN Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SECURITY module"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"+4 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"+4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Storage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,l.kt)("td",{parentName:"tr",align:null},"customer specification"),(0,l.kt)("td",{parentName:"tr",align:null},"customer specification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAN Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PERFORMANCE module"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"+4 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"+4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Storage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,l.kt)("td",{parentName:"tr",align:null},"customer specification"),(0,l.kt)("td",{parentName:"tr",align:null},"customer specification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAN Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s")))),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Resources for all modules users"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"20 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"40 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"22 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"44 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1,25 TB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 TB")))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"While we do our best to represent the data as fairly and accurately as possible (interal tests), your environment may experience different limits."),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"Raw estimate is that ~60k fps should generate around 300 GB/day."),(0,l.kt)("li",{parentName:"ol"},"In custom dashboard configurations we recommend to add (best performance) up to 12 widgets per single dashboard."),(0,l.kt)("li",{parentName:"ol"},"Software image has by default : 128GB System and 128GB Data plus default retention policy configured. Please modify those before any production installation. \t\t\t\t\t"))),(0,l.kt)("h2",{id:"probe-hardware-requirements"},"Probe hardware requirements"),(0,l.kt)("p",null,"Probe is available as a license for Virtual or Hardware Appliance. The performance of the Probe depends on the hardware resources. Please see below the requirements depends on the traffic through out to monitor: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Traffic"),(0,l.kt)("th",{parentName:"tr",align:null},"< 100 Mbps"),(0,l.kt)("th",{parentName:"tr",align:null},"Between 100 Mbps and 1 Gbps"),(0,l.kt)("th",{parentName:"tr",align:null},"Between 1 and 10 Gbps"),(0,l.kt)("th",{parentName:"tr",align:null},"Above 10 Gbps"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flow Export Rate"),(0,l.kt)("td",{parentName:"tr",align:null},"< 100 FPS"),(0,l.kt)("td",{parentName:"tr",align:null},"< 1000 FPS"),(0,l.kt)("td",{parentName:"tr",align:null},"< 3000 FPS"),(0,l.kt)("td",{parentName:"tr",align:null},"3000+ FPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active Flow Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Thousands"),(0,l.kt)("td",{parentName:"tr",align:null},"Hundreds of Thousands"),(0,l.kt)("td",{parentName:"tr",align:null},"A few Millions"),(0,l.kt)("td",{parentName:"tr",align:null},"Tenth of Millions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU Type"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores+"),(0,l.kt)("td",{parentName:"tr",align:null},"4 cores+"),(0,l.kt)("td",{parentName:"tr",align:null},"8 cores+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Memory"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB+"),(0,l.kt)("td",{parentName:"tr",align:null},"4-8 GB+"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB+")))))}s.isMDXComponent=!0}}]);