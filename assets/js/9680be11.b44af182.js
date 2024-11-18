"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45531],{430538:(t,e,a)=>{a.d(e,{Z:()=>k});a(399039);var n=a(667294),r=a(199403),l=a(731772),i=a(958650),m=a(933463),p=a(91202),u=a(91176),o=a(323594),d="350px",s=new Intl.NumberFormat,c={"Aggregations (visiblity)":{12e4:3916e7,6e4:219296e5,3e4:125312e5},"Aggregations (performance)":{12e4:13811979059,6e4:5524791624,3e4:3946279731.2}};function k(){var t=[{label:"Medium - 60,000 FPS",value:"60000"},{label:"Low - 30,000 FPS",value:"30000"}],e=[{label:"Terabyte",value:"TB"},{label:"Gigabyte",value:"GB"},{label:"Byte",value:"B"}],a=(0,n.useState)(!1),k=a[0],N=a[1],g=(0,n.useState)(e[1].value),b=g[0],h=g[1],f=(0,n.useState)(t[0].value),y=f[0],v=f[1],E=(0,n.useState)(),w=E[0],S=E[1],B=(0,n.useState)(),G=B[0],A=B[1],R=(0,n.useState)(),C=R[0],x=R[1],P=(0,n.useState)(),M=P[0],q=P[1],T=(0,n.useState)(),I=T[0],V=T[1],D=(0,n.useState)(!0),F=D[0],L=D[1],U=(0,n.useState)([]),z=U[0],O=U[1],Z=function(){v(t[0].value),S(300),A(300),x(100),q(4),V(2),L(!0),O([{stream:"Netflows",retention:1,frame:"hours"},{stream:"Alerts",retention:24,frame:"hours"},{stream:"Aggregations (visiblity)",retention:1,frame:"days"},{stream:"Aggregations (performance)",retention:1,frame:"days"}])};(0,n.useEffect)((function(){return Z()}),[]);var j=function(t){var e=t;return"GB"===b&&(e=t/1e9),"TB"===b&&(e=t/1e12),s.format(e)+" "+b},W=function(t){var e=t.stream;if("Aggregations (performance)"===e&&!F)return 0;switch(e){case"Netflows":return t.retention*w*parseInt(y)*60*60/parseInt(M);case"Alerts":return t.retention*G*C*60*60;case"Aggregations (visiblity)":return t.retention*c[e][y]/parseInt(I);case"Aggregations (performance)":return t.retention*c[e][y];default:return 0}},X=n.createElement("div",{className:"p-d-flex p-jc-between"},n.createElement(p.L,{value:y,options:t,onChange:function(t){return v(t.value)},placeholder:"Select FPS"}),n.createElement(o.U,{className:"p-button-sm",value:b,options:e,onChange:function(t){return h(t.value)}})),H=z.map(W).reduce((function(t,e){return t+e}),0),Y=n.createElement("div",{className:"p-d-flex p-jc-between"},n.createElement("h2",{style:{color:"var(--text-color)"}},"TOTAL"),n.createElement("h2",{style:{color:"var(--text-color)"}},j(H)));return n.createElement("div",{id:"calculator"},n.createElement(m.w,{value:z,header:X,footer:Y,size:"large"},n.createElement(i.s,{headerStyle:{width:"3rem"},body:function(t){return"Aggregations (performance)"!==t.stream?null:n.createElement(l.X,{onChange:function(t){return L(t.checked)},checked:F})}}),n.createElement(i.s,{header:"Stream",body:function(t){return"Aggregations (performance)"===t.stream?n.createElement("span",{style:{cursor:"pointer"},onClick:function(){return L(!F)}},t.stream):n.createElement("span",null,t.stream)}}),n.createElement(i.s,{header:"Retention",body:function(t){return"Aggregations (performance)"!==t.stream||F?n.createElement("div",{className:"p-inputgroup"},n.createElement(u.R,{value:t.retention,onValueChange:function(e){O(z.map((function(a){return a.stream===t.stream&&(a.retention=e.value),a})))},placeholder:"Retention"}),n.createElement("span",{className:"p-inputgroup-addon"},t.frame)):n.createElement("div",{className:"p-inputgroup"},n.createElement(u.R,{value:0,disabled:!0}),n.createElement("span",{className:"p-inputgroup-addon"},t.frame))}}),n.createElement(i.s,{header:"Volume",body:function(t){return n.createElement("div",{className:"p-text-right"},j(W(t)))}})),n.createElement("div",{className:"p-mt-5 p-d-flex p-jc-between"},n.createElement(r.z,{onClick:function(){return N(!k)},className:"p-button-outlined",label:"Advanced Options"}),n.createElement(r.z,{onClick:function(){return Z()},label:"Reset Calculation"})),k&&n.createElement("div",{className:"p-mt-5"},n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Single Netflow size"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(u.R,{placeholder:"Single Netflow Size",value:w,onValueChange:function(t){return S(t.value)}}),n.createElement("span",{className:"p-inputgroup-addon"},"Bytes"))),n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Single Alert size"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(u.R,{placeholder:"Single Alert Size",value:G,onValueChange:function(t){return A(t.value)}}),n.createElement("span",{className:"p-inputgroup-addon"},"Bytes"))),n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Daily Alert number"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(u.R,{placeholder:"Daily Alert Number",value:C,onValueChange:function(t){return x(t.value)}}),n.createElement("span",{className:"p-inputgroup-addon"},"Per minute"))),n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Deduplication level"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(u.R,{placeholder:"Deduplication level",value:M,onValueChange:function(t){return q(t.value)}}),n.createElement("span",{className:"p-inputgroup-addon"}))),n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Visibility Aggregations values\u2019 uniqueness"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(u.R,{placeholder:"Visibility Aggregations values\u2019 uniqueness",value:I,onValueChange:function(t){return V(t.value)}}),n.createElement("span",{className:"p-inputgroup-addon"})))))}},119456:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=a(487462),r=a(263366),l=(a(667294),a(603905)),i=a(430538),m=["components"],p={},u=void 0,o={unversionedId:"Requirements",id:"version-2.1.0/Requirements",title:"Requirements",description:"Collector hardware requirements",source:"@site/versioned_docs/version-2.1.0/07-Requirements.mdx",sourceDirName:".",slug:"/Requirements",permalink:"/2.1.0/Requirements",draft:!1,tags:[],version:"2.1.0",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"Release notes",permalink:"/2.1.0/Release notes"},next:{title:"3rd Party Licenses",permalink:"/2.1.0/3rdpartylicenses"}},d={},s=[{value:"Collector hardware requirements",id:"collector-hardware-requirements",level:2},{value:"Probe hardware requirements",id:"probe-hardware-requirements",level:2},{value:"Retention calculator",id:"retention-calculator",level:3}],c={toc:s};function k(t){var e=t.components,a=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"collector-hardware-requirements"},"Collector hardware requirements"),(0,l.kt)("p",null,"The tables below are lists of required server hardware parameters for desired flow limits."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:"left"},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max number of flows"),(0,l.kt)("td",{parentName:"tr",align:"left"},"30k flow/s"),(0,l.kt)("td",{parentName:"tr",align:null},"60k flow/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max number of data  sources"),(0,l.kt)("td",{parentName:"tr",align:"left"},"unlimited"),(0,l.kt)("td",{parentName:"tr",align:null},"unlimited")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Supported VM Systems"),(0,l.kt)("td",{parentName:"tr",align:"left"},"VMWare 6.5 and higher"),(0,l.kt)("td",{parentName:"tr",align:null},"VMWare 6.5 and higher")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Base OS ",(0,l.kt)("strong",{parentName:"th"},"*")),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"8 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"16 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Storage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OS disk"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,l.kt)("td",{parentName:"tr",align:null},"300 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"600 GB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"*")," Minimum requirements for Proof of Concept. Any production environment requires additional resources based on number and types of modules "),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Resources for licensed modules"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VISIBILITY  module"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"+8 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"+16 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"+4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Storage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,l.kt)("td",{parentName:"tr",align:null},"450 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"900 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAN Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SECURITY module"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"+4 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"+4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Storage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,l.kt)("td",{parentName:"tr",align:null},"customer specification"),(0,l.kt)("td",{parentName:"tr",align:null},"customer specification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAN Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PERFORMANCE module"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"+4 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"+2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"+4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Storage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,l.kt)("td",{parentName:"tr",align:null},"customer specification"),(0,l.kt)("td",{parentName:"tr",align:null},"customer specification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAN Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s"),(0,l.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s")))),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Resources for all modules"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"20 pcs."),(0,l.kt)("td",{parentName:"tr",align:null},"40 pcs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"22 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"44 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"1,25 TB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 TB")))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"While we do our best to represent the data as fairly and accurately as possible (interal tests), your environment may experience different limits."),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"Raw estimate is that ~60k fps should generate around 300 GB/day."),(0,l.kt)("li",{parentName:"ol"},"In custom dashboard configurations we recommend to add (best performance) up to 12 widgets per single dashboard."),(0,l.kt)("li",{parentName:"ol"},"Software image has by default : 128GB System and 128GB Data plus default retention policy configured. Please modify those before any production installation. \t\t\t\t\t"))),(0,l.kt)("h2",{id:"probe-hardware-requirements"},"Probe hardware requirements"),(0,l.kt)("p",null,"Probe is available as a license for Virtual or Hardware Appliance. The performance of the Probe depends on the hardware resources. Please see below the requirements depends on the traffic through out to monitor: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Traffic"),(0,l.kt)("th",{parentName:"tr",align:null},"< 100 Mbps"),(0,l.kt)("th",{parentName:"tr",align:null},"Between 100 Mbps and 1 Gbps"),(0,l.kt)("th",{parentName:"tr",align:null},"Between 1 and 10 Gbps"),(0,l.kt)("th",{parentName:"tr",align:null},"Above 10 Gbps"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flow Export Rate"),(0,l.kt)("td",{parentName:"tr",align:null},"< 100 FPS"),(0,l.kt)("td",{parentName:"tr",align:null},"< 1000 FPS"),(0,l.kt)("td",{parentName:"tr",align:null},"< 3000 FPS"),(0,l.kt)("td",{parentName:"tr",align:null},"3000+ FPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active Flow Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Thousands"),(0,l.kt)("td",{parentName:"tr",align:null},"Hundreds of Thousands"),(0,l.kt)("td",{parentName:"tr",align:null},"A few Millions"),(0,l.kt)("td",{parentName:"tr",align:null},"Tenth of Millions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU Type"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores+"),(0,l.kt)("td",{parentName:"tr",align:null},"4 cores+"),(0,l.kt)("td",{parentName:"tr",align:null},"8 cores+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Memory"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB+"),(0,l.kt)("td",{parentName:"tr",align:null},"4-8 GB+"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB+")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"retention-calculator"},"Retention calculator"),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Under development !!!")," Please do not use the ",(0,l.kt)("strong",{parentName:"p"},"calculator")," yet.")),(0,l.kt)(i.Z,{mdxType:"Calculator"}))}k.isMDXComponent=!0}}]);