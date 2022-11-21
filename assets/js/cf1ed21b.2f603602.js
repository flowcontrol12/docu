"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2353],{19999:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>E,contentTitle:()=>y,default:()=>B,frontMatter:()=>f,metadata:()=>v,toc:()=>w});var n=a(83117),r=a(80102),l=a(67294),i=a(3905),m=(a(99039),a(99403)),p=a(31772),o=a(58650),u=a(33463),d=a(91202),s=a(91176),k=a(23594),c="300px",N=new Intl.NumberFormat,g={"Aggregations (visiblity)":{12e4:3916e7,6e4:219296e5,3e4:125312e5},"Aggregations (performance)":{12e4:13811979059,6e4:5524791624,3e4:3946279731.2}};function b(){var t=[{label:"Medium - 60,000 FPS",value:"60000"},{label:"Low - 30,000 FPS",value:"30000"}],e=[{label:"Gigabyte",value:"GB"},{label:"Byte",value:"B"}],a=(0,l.useState)(!0),n=a[0],r=a[1],i=(0,l.useState)(t[0].value),b=i[0],h=i[1],f=(0,l.useState)(e[0].value),y=f[0],v=f[1],E=(0,l.useState)(),w=E[0],S=E[1],B=(0,l.useState)(),G=B[0],A=B[1],R=(0,l.useState)(),C=R[0],P=R[1],x=(0,l.useState)([]),M=x[0],q=x[1],T=(0,l.useState)(!0),I=T[0],F=T[1],U=function(){q([{stream:"Netflows",retention:1,frame:"hours"},{stream:"Alerts",retention:24,frame:"hours"},{stream:"Aggregations (visiblity)",retention:1,frame:"days"},{stream:"Aggregations (performance)",retention:1,frame:"days"}]),P(100),A(300),S(300),h(t[0].value),F(!0)};(0,l.useEffect)((function(){return U()}),[]);var D=function(t){return N.format("GB"==y?t/1e9:t)+" "+y},L=function(t){var e=t.stream;if("Aggregations (performance)"===e&&!I)return 0;switch(e){case"Netflows":return t.retention*w*parseInt(b)*60*60;case"Alerts":return t.retention*G*C*60*60;case"Aggregations (visiblity)":case"Aggregations (performance)":return t.retention*g[e][b];default:return 0}},V=l.createElement("div",{className:"p-d-flex p-jc-between"},l.createElement(d.L,{value:b,options:t,onChange:function(t){return h(t.value)},placeholder:"Select FPS"}),l.createElement(k.U,{className:"p-button-sm",value:y,options:e,onChange:function(t){return v(t.value)}})),z=M.map(L).reduce((function(t,e){return t+e}),0),O=l.createElement("div",{className:"p-d-flex p-jc-between"},l.createElement("h2",{style:{color:"var(--text-color)"}},"TOTAL"),l.createElement("h2",{style:{color:"var(--text-color)"}},D(z)));return l.createElement("div",{id:"calculator"},l.createElement(u.w,{value:M,header:V,footer:O,size:"large"},l.createElement(o.s,{headerStyle:{width:"3rem"},body:function(t){return"Aggregations (performance)"!==t.stream?l.createElement(p.X,{checked:!0,disabled:!0}):l.createElement(p.X,{onChange:function(t){return F(t.checked)},checked:I})}}),l.createElement(o.s,{header:"Stream",body:function(t){return"Aggregations (performance)"===t.stream?l.createElement("span",{style:{cursor:"pointer"},onClick:function(){return F(!I)}},t.stream):l.createElement("span",null,t.stream)}}),l.createElement(o.s,{header:"Retention",body:function(t){return"Aggregations (performance)"!==t.stream||I?l.createElement("div",{className:"p-inputgroup"},l.createElement(s.R,{value:t.retention,onValueChange:function(e){q(M.map((function(a){return a.stream===t.stream&&(a.retention=e.value),a})))},placeholder:"Retention"}),l.createElement("span",{className:"p-inputgroup-addon"},t.frame)):l.createElement("div",{className:"p-inputgroup"},l.createElement(s.R,{value:0,disabled:!0}),l.createElement("span",{className:"p-inputgroup-addon"},t.frame))}}),l.createElement(o.s,{header:"Volume",body:function(t){return l.createElement("div",{className:"p-text-right"},D(L(t)))}})),l.createElement("div",{className:"p-mt-5 p-d-flex p-jc-between"},l.createElement(m.z,{onClick:function(){return r(!n)},className:"p-button-outlined",label:"Advanced Options"}),l.createElement(m.z,{onClick:function(){return U()},label:"Reset Calculation"})),n&&l.createElement("div",{className:"p-mt-5"},l.createElement("div",{className:"p-field p-grid"},l.createElement("label",{style:{width:c},className:"p-col-fixed"},"Single Netflow size"),l.createElement("div",{className:"p-col p-inputgroup"},l.createElement(s.R,{placeholder:"Single Netflow Size",value:w,onValueChange:function(t){return S(t.value)}}),l.createElement("span",{className:"p-inputgroup-addon"},"Bytes"))),l.createElement("div",{className:"p-field p-grid"},l.createElement("label",{style:{width:c},className:"p-col-fixed"},"Single Alert size"),l.createElement("div",{className:"p-col p-inputgroup"},l.createElement(s.R,{placeholder:"Single Alert Size",value:G,onValueChange:function(t){return A(t.value)}}),l.createElement("span",{className:"p-inputgroup-addon"},"Bytes"))),l.createElement("div",{className:"p-field p-grid"},l.createElement("label",{style:{width:c},className:"p-col-fixed"},"Daily Alert number"),l.createElement("div",{className:"p-col p-inputgroup"},l.createElement(s.R,{placeholder:"Daily Alert Number",value:C,onValueChange:function(t){return P(t.value)}}),l.createElement("span",{className:"p-inputgroup-addon"},"Per minute")))))}var h=["components"],f={},y=void 0,v={unversionedId:"Requirements",id:"Requirements",title:"Requirements",description:"Collector hardware requirements",source:"@site/docs/07-Requirements.mdx",sourceDirName:".",slug:"/Requirements",permalink:"/Requirements",draft:!1,tags:[],version:"current",lastUpdatedAt:1669032932,formattedLastUpdatedAt:"21 Nov 2022",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"Release notes",permalink:"/Release notes"},next:{title:"3rd Party Licenses",permalink:"/3rdpartylicenses"}},E={},w=[{value:"Collector hardware requirements",id:"collector-hardware-requirements",level:2},{value:"Probe hardware requirements",id:"probe-hardware-requirements",level:2},{value:"Retention calculator",id:"retention-calculator",level:3}],S={toc:w};function B(t){var e=t.components,a=(0,r.Z)(t,h);return(0,i.kt)("wrapper",(0,n.Z)({},S,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"collector-hardware-requirements"},"Collector hardware requirements"),(0,i.kt)("p",null,"The tables below are lists of required server hardware parameters for desired flow limits."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"left"},"Basic"),(0,i.kt)("th",{parentName:"tr",align:null},"Small"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Max number of flows"),(0,i.kt)("td",{parentName:"tr",align:"left"},"30k flow/s"),(0,i.kt)("td",{parentName:"tr",align:null},"60k flow/s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Max number of data  sources"),(0,i.kt)("td",{parentName:"tr",align:"left"},"unlimited"),(0,i.kt)("td",{parentName:"tr",align:null},"unlimited")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supported VM Systems"),(0,i.kt)("td",{parentName:"tr",align:"left"},"VMWare 6.5 and higher"),(0,i.kt)("td",{parentName:"tr",align:null},"VMWare 6.5 and higher")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Base OS ",(0,i.kt)("strong",{parentName:"th"},"*")),(0,i.kt)("th",{parentName:"tr",align:null},"Basic"),(0,i.kt)("th",{parentName:"tr",align:null},"Small"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,i.kt)("td",{parentName:"tr",align:null},"8 pcs."),(0,i.kt)("td",{parentName:"tr",align:null},"16 pcs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RAM"),(0,i.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,i.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Storage")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OS disk"),(0,i.kt)("td",{parentName:"tr",align:null},"500 GB"),(0,i.kt)("td",{parentName:"tr",align:null},"500 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,i.kt)("td",{parentName:"tr",align:null},"300 GB"),(0,i.kt)("td",{parentName:"tr",align:null},"600 GB")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"*")," Minimum requirements for Proof of Concept. Any production environment requires additional resources based on number and types of modules "),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resources for licensed modules"),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"VISIBILITY  module"),(0,i.kt)("th",{parentName:"tr",align:null},"Basic"),(0,i.kt)("th",{parentName:"tr",align:null},"Small"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,i.kt)("td",{parentName:"tr",align:null},"+8 pcs."),(0,i.kt)("td",{parentName:"tr",align:null},"+16 pcs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RAM"),(0,i.kt)("td",{parentName:"tr",align:null},"+2 GB"),(0,i.kt)("td",{parentName:"tr",align:null},"+4 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Storage")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,i.kt)("td",{parentName:"tr",align:null},"450 GB"),(0,i.kt)("td",{parentName:"tr",align:null},"900 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LAN Interfaces"),(0,i.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s"),(0,i.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("hr",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SECURITY module"),(0,i.kt)("th",{parentName:"tr",align:null},"Basic"),(0,i.kt)("th",{parentName:"tr",align:null},"Small"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,i.kt)("td",{parentName:"tr",align:null},"+2 pcs."),(0,i.kt)("td",{parentName:"tr",align:null},"+4 pcs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RAM"),(0,i.kt)("td",{parentName:"tr",align:null},"+2 GB"),(0,i.kt)("td",{parentName:"tr",align:null},"+4 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Storage")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,i.kt)("td",{parentName:"tr",align:null},"customer specification"),(0,i.kt)("td",{parentName:"tr",align:null},"customer specification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LAN Interfaces"),(0,i.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s"),(0,i.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("hr",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PERFORMANCE module"),(0,i.kt)("th",{parentName:"tr",align:null},"Basic"),(0,i.kt)("th",{parentName:"tr",align:null},"Small"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,i.kt)("td",{parentName:"tr",align:null},"+2 pcs."),(0,i.kt)("td",{parentName:"tr",align:null},"+4 pcs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RAM"),(0,i.kt)("td",{parentName:"tr",align:null},"+2 GB"),(0,i.kt)("td",{parentName:"tr",align:null},"+4 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Storage")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,i.kt)("td",{parentName:"tr",align:null},"customer specification"),(0,i.kt)("td",{parentName:"tr",align:null},"customer specification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LAN Interfaces"),(0,i.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s"),(0,i.kt)("td",{parentName:"tr",align:null},"2x1 Gbit/s")))),(0,i.kt)("hr",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Resources for all modules"),(0,i.kt)("th",{parentName:"tr",align:null},"Basic"),(0,i.kt)("th",{parentName:"tr",align:null},"Small"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU cores"),(0,i.kt)("td",{parentName:"tr",align:null},"20 pcs."),(0,i.kt)("td",{parentName:"tr",align:null},"40 pcs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RAM"),(0,i.kt)("td",{parentName:"tr",align:null},"22 GB"),(0,i.kt)("td",{parentName:"tr",align:null},"44 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Storage"),(0,i.kt)("td",{parentName:"tr",align:null},"1,25 TB"),(0,i.kt)("td",{parentName:"tr",align:null},"2 TB")))),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"While we do our best to represent the data as fairly and accurately as possible (interal tests), your environment may experience different limits."),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Raw estimate is that ~60k fps should generate around 300 GB/day."),(0,i.kt)("li",{parentName:"ol"},"In custom dashboard configurations we recommend to add (best performance) up to 12 widgets per single dashboard."),(0,i.kt)("li",{parentName:"ol"},"Software image has by default : 128GB System and 128GB Data plus default retention policy configured. Please modify those before any production installation. \t\t\t\t\t"))),(0,i.kt)("h2",{id:"probe-hardware-requirements"},"Probe hardware requirements"),(0,i.kt)("p",null,"Probe is available as a license for Virtual or Hardware Appliance. The performance of the Probe depends on the hardware resources. Please see below the requirements depends on the traffic through out to monitor: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Traffic"),(0,i.kt)("th",{parentName:"tr",align:null},"< 100 Mbps"),(0,i.kt)("th",{parentName:"tr",align:null},"Between 100 Mbps and 1 Gbps"),(0,i.kt)("th",{parentName:"tr",align:null},"Between 1 and 10 Gbps"),(0,i.kt)("th",{parentName:"tr",align:null},"Above 10 Gbps"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flow Export Rate"),(0,i.kt)("td",{parentName:"tr",align:null},"< 100 FPS"),(0,i.kt)("td",{parentName:"tr",align:null},"< 1000 FPS"),(0,i.kt)("td",{parentName:"tr",align:null},"< 3000 FPS"),(0,i.kt)("td",{parentName:"tr",align:null},"3000+ FPS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Active Flow Cache"),(0,i.kt)("td",{parentName:"tr",align:null},"Thousands"),(0,i.kt)("td",{parentName:"tr",align:null},"Hundreds of Thousands"),(0,i.kt)("td",{parentName:"tr",align:null},"A few Millions"),(0,i.kt)("td",{parentName:"tr",align:null},"Tenth of Millions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU Type"),(0,i.kt)("td",{parentName:"tr",align:null},"2 cores"),(0,i.kt)("td",{parentName:"tr",align:null},"2 cores+"),(0,i.kt)("td",{parentName:"tr",align:null},"4 cores+"),(0,i.kt)("td",{parentName:"tr",align:null},"8 cores+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Memory"),(0,i.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,i.kt)("td",{parentName:"tr",align:null},"2 GB+"),(0,i.kt)("td",{parentName:"tr",align:null},"4-8 GB+"),(0,i.kt)("td",{parentName:"tr",align:null},"16 GB+")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"retention-calculator"},"Retention calculator"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Under development !!!")," Please do not use the ",(0,i.kt)("strong",{parentName:"p"},"calculator")," yet.")),(0,i.kt)(b,{mdxType:"Calculator"}))}B.isMDXComponent=!0}}]);