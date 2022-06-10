"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4381],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=p(a),u=n,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return a?r.createElement(g,i(i({ref:e},m),{},{components:a})):r.createElement(g,i({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5771:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={},s=void 0,p={unversionedId:"XND module/DDoS Dashboards",id:"version-1.6/XND module/DDoS Dashboards",title:"DDoS Dashboards",description:"Below you find dashboards to help you analyze DDoS attacks",source:"@site/versioned_docs/version-1.6/04-XND module/05-DDoS Dashboards.md",sourceDirName:"04-XND module",slug:"/XND module/DDoS Dashboards",permalink:"/1.6/XND module/DDoS Dashboards",draft:!1,tags:[],version:"1.6",lastUpdatedAt:1639746315,formattedLastUpdatedAt:"17/12/2021",sidebarPosition:5,frontMatter:{},sidebar:"version-1.6/docs",previous:{title:"XND module configuration",permalink:"/1.6/XND module/XND module configuration"},next:{title:"CLI commands",permalink:"/1.6/CLI commands"}},m={},c=[],d={toc:c};function u(t){var e=t.components,l=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below you find dashboards to help you analyze DDoS attacks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Dashboard  Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Overview"),(0,o.kt)("td",{parentName:"tr",align:null},"Visualization of general statistics on DDoS attacks.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Alerts"),(0,o.kt)("td",{parentName:"tr",align:null},"Table of DDoS start and end alerts. ",(0,o.kt)("br",null),"START: DDoS Attack Detected \u2013 XND \u2013 launch of the attack. ",(0,o.kt)("br",null),"STOP: DDoS Attack Detected \u2013 XND \u2013 end of the attack.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deep  Analysis"),(0,o.kt)("td",{parentName:"tr",align:null},"Table of the DDoS parameters from every minute of the attack. Exceeded threshold parameters are highlighted in red. In the lower part of the view there is an auxiliary table with threshold configurations per Group, to make it easier to monitor the causes of generated alerts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Alerts Drilldown"),(0,o.kt)("td",{parentName:"tr",align:null},"Trends monitoring of DDoS attacks in the context of monitored DDoS parameters from each minute of the attack in the form of a graph on which you can select the DDoS attack parameter.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Statistics"),(0,o.kt)("td",{parentName:"tr",align:null},"Trends monitoring of DDoS attacks in the context of monitored DDoS parameters from each minute in the form of a series of graphs, which facilitate the analysis of DDoS attacks.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Details"),(0,o.kt)("td",{parentName:"tr",align:null},"Details information on DDoS attacks i.e. source IP address, destination IP address, geographical location.")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Table 5.1")," ",(0,o.kt)("em",{parentName:"p"},"DDoS dashboards list")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20201113153757536",src:a(8653).Z,width:"2519",height:"972"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fig. 5.1 DDoS Overview")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20201113153724230",src:a(7549).Z,width:"2522",height:"975"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fig. 5.2 DDoS Alerts")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20201113153902769",src:a(2948).Z,width:"2524",height:"981"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fig. 5.3 DDoS Deep Analysis")," "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20201113153953710",src:a(8306).Z,width:"2516",height:"967"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fig. 5.4 DDoS Alerts Drilldown")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20201113154041566",src:a(5026).Z,width:"2516",height:"967"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fig. 5.5 DDoS Statistics")," "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20201113154132670",src:a(4689).Z,width:"2525",height:"972"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fig. 5.6 DDoS Details")))}u.isMDXComponent=!0},7549:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/image-20201113153724230-2d24f52c09da99c0308f3cbe8232542e.png"},8653:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/image-20201113153757536-f37e799686240571b13aa39a5329092e.png"},2948:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/image-20201113153902769-3f11c4ed796247567e262170287fbb02.png"},8306:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/image-20201113153953710-869b3096495797b59a00610d11ae9b96.png"},5026:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/image-20201113154041566-b9b03ed180fe68b269f31f06a1bb4d3c.png"},4689:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/image-20201113154132670-56377bc05d5d3c1a0b02142f49d57c4f.png"}}]);