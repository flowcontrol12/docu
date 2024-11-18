"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66232],{430538:(e,t,a)=>{a.d(t,{Z:()=>g});a(399039);var n=a(667294),r=a(199403),l=a(731772),i=a(958650),o=a(933463),s=a(91202),m=a(91176),u=a(323594),d="350px",p=new Intl.NumberFormat,c={"Aggregations (visiblity)":{12e4:3916e7,6e4:219296e5,3e4:125312e5},"Aggregations (performance)":{12e4:13811979059,6e4:5524791624,3e4:3946279731.2}};function g(){var e=[{label:"Medium - 60,000 FPS",value:"60000"},{label:"Low - 30,000 FPS",value:"30000"}],t=[{label:"Terabyte",value:"TB"},{label:"Gigabyte",value:"GB"},{label:"Byte",value:"B"}],a=(0,n.useState)(!1),g=a[0],N=a[1],k=(0,n.useState)(t[1].value),h=k[0],f=k[1],b=(0,n.useState)(e[0].value),v=b[0],y=b[1],w=(0,n.useState)(),S=w[0],E=w[1],q=(0,n.useState)(),B=q[0],C=q[1],A=(0,n.useState)(),R=A[0],x=A[1],P=(0,n.useState)(),G=P[0],M=P[1],D=(0,n.useState)(),T=D[0],F=D[1],V=(0,n.useState)(!0),z=V[0],W=V[1],L=(0,n.useState)([]),I=L[0],U=L[1],O=function(){y(e[0].value),E(300),C(300),x(100),M(4),F(2),W(!0),U([{stream:"Netflows",retention:1,frame:"hours"},{stream:"Alerts",retention:24,frame:"hours"},{stream:"Aggregations (visiblity)",retention:1,frame:"days"},{stream:"Aggregations (performance)",retention:1,frame:"days"}])};(0,n.useEffect)((function(){return O()}),[]);var Z=function(e){var t=e;return"GB"===h&&(t=e/1e9),"TB"===h&&(t=e/1e12),p.format(t)+" "+h},j=function(e){var t=e.stream;if("Aggregations (performance)"===t&&!z)return 0;switch(t){case"Netflows":return e.retention*S*parseInt(v)*60*60/parseInt(G);case"Alerts":return e.retention*B*R*60*60;case"Aggregations (visiblity)":return e.retention*c[t][v]/parseInt(T);case"Aggregations (performance)":return e.retention*c[t][v];default:return 0}},H=n.createElement("div",{className:"p-d-flex p-jc-between"},n.createElement(s.L,{value:v,options:e,onChange:function(e){return y(e.value)},placeholder:"Select FPS"}),n.createElement(u.U,{className:"p-button-sm",value:h,options:t,onChange:function(e){return f(e.value)}})),X=I.map(j).reduce((function(e,t){return e+t}),0),_=n.createElement("div",{className:"p-d-flex p-jc-between"},n.createElement("h2",{style:{color:"var(--text-color)"}},"TOTAL"),n.createElement("h2",{style:{color:"var(--text-color)"}},Z(X)));return n.createElement("div",{id:"calculator"},n.createElement(o.w,{value:I,header:H,footer:_,size:"large"},n.createElement(i.s,{headerStyle:{width:"3rem"},body:function(e){return"Aggregations (performance)"!==e.stream?null:n.createElement(l.X,{onChange:function(e){return W(e.checked)},checked:z})}}),n.createElement(i.s,{header:"Stream",body:function(e){return"Aggregations (performance)"===e.stream?n.createElement("span",{style:{cursor:"pointer"},onClick:function(){return W(!z)}},e.stream):n.createElement("span",null,e.stream)}}),n.createElement(i.s,{header:"Retention",body:function(e){return"Aggregations (performance)"!==e.stream||z?n.createElement("div",{className:"p-inputgroup"},n.createElement(m.R,{value:e.retention,onValueChange:function(t){U(I.map((function(a){return a.stream===e.stream&&(a.retention=t.value),a})))},placeholder:"Retention"}),n.createElement("span",{className:"p-inputgroup-addon"},e.frame)):n.createElement("div",{className:"p-inputgroup"},n.createElement(m.R,{value:0,disabled:!0}),n.createElement("span",{className:"p-inputgroup-addon"},e.frame))}}),n.createElement(i.s,{header:"Volume",body:function(e){return n.createElement("div",{className:"p-text-right"},Z(j(e)))}})),n.createElement("div",{className:"p-mt-5 p-d-flex p-jc-between"},n.createElement(r.z,{onClick:function(){return N(!g)},className:"p-button-outlined",label:"Advanced Options"}),n.createElement(r.z,{onClick:function(){return O()},label:"Reset Calculation"})),g&&n.createElement("div",{className:"p-mt-5"},n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Single Netflow size"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(m.R,{placeholder:"Single Netflow Size",value:S,onValueChange:function(e){return E(e.value)}}),n.createElement("span",{className:"p-inputgroup-addon"},"Bytes"))),n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Single Alert size"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(m.R,{placeholder:"Single Alert Size",value:B,onValueChange:function(e){return C(e.value)}}),n.createElement("span",{className:"p-inputgroup-addon"},"Bytes"))),n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Daily Alert number"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(m.R,{placeholder:"Daily Alert Number",value:R,onValueChange:function(e){return x(e.value)}}),n.createElement("span",{className:"p-inputgroup-addon"},"Per minute"))),n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Deduplication level"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(m.R,{placeholder:"Deduplication level",value:G,onValueChange:function(e){return M(e.value)}}),n.createElement("span",{className:"p-inputgroup-addon"}))),n.createElement("div",{className:"p-field p-grid"},n.createElement("label",{style:{width:d},className:"p-col-fixed"},"Visibility Aggregations values\u2019 uniqueness"),n.createElement("div",{className:"p-col p-inputgroup"},n.createElement(m.R,{placeholder:"Visibility Aggregations values\u2019 uniqueness",value:T,onValueChange:function(e){return F(e.value)}}),n.createElement("span",{className:"p-inputgroup-addon"})))))}},860688:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(487462),r=a(263366),l=(a(667294),a(603905)),i=a(430538),o=["components"],s={slug:"Requirements"},m="Requirements",u={unversionedId:"Requirements",id:"version-2.6/Requirements",title:"Requirements",description:"We require/recommend the following:",source:"@site/versioned_docs/version-2.6/09-Requirements.mdx",sourceDirName:".",slug:"/Requirements",permalink:"/2.6/Requirements",draft:!1,tags:[],version:"2.6",sidebarPosition:9,frontMatter:{slug:"Requirements"},sidebar:"docs",previous:{title:"Release Notes",permalink:"/2.6/Release-Notes"},next:{title:"Sycope Probe User Guide",permalink:"/2.6/Sycope_Probe"}},d={},p=[{value:"Collector hardware requirements",id:"collector-hardware-requirements",level:2},{value:"Probe hardware requirements",id:"probe-hardware-requirements",level:2},{value:"Retention calculator",id:"retention-calculator",level:3}],c={toc:p};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"requirements"},"Requirements"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"We require/recommend the following:")),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Set the active time-out setting for flows to 60 seconds (mandatory)"),(0,l.kt)("li",{parentName:"ul"},"Set the inactive time-out setting for flows to 15 seconds (mandatory)"),(0,l.kt)("li",{parentName:"ul"},"Synchronize devices with an NTP source (mandatory)"),(0,l.kt)("li",{parentName:"ul"},"Configure devices that support NetFlow with no aggregation. Sycope recommends that you configure Netflow with no sampling if possible"),(0,l.kt)("li",{parentName:"ul"},"Configure devices that support sFlow with the lowest possible sampling rate"),(0,l.kt)("li",{parentName:"ul"},"When you use NetFlow v5, make sure to add the ",(0,l.kt)("em",{parentName:"li"},"ip route-cache flow")," (or appropriate) command for all active interfaces and VLANs (sub interfaces) in addition to the ones you regularly use. NetFlow v5 is typically ingress only, you can calculate egress only by aggregating ingress from the opposing interfaces."),(0,l.kt)("li",{parentName:"ul"},"NetFlow v9 supports ingress and egress NetFlow. Sycope recommends ",(0,l.kt)("em",{parentName:"li"},"ip flow ingress")," on all interfaces. Mixing ingress and egress on multiple interfaces and a single device is not recommended."))),(0,l.kt)("h2",{id:"collector-hardware-requirements"},"Collector hardware requirements"),(0,l.kt)("p",null,"The tables below are lists of required server hardware parameters for desired flow limits."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:"left"},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"),(0,l.kt)("th",{parentName:"tr",align:null},"Medium"),(0,l.kt)("th",{parentName:"tr",align:null},"Large"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max number of flows"),(0,l.kt)("td",{parentName:"tr",align:"left"},"30k flow/s"),(0,l.kt)("td",{parentName:"tr",align:null},"60k flow/s"),(0,l.kt)("td",{parentName:"tr",align:null},"120k flow/s"),(0,l.kt)("td",{parentName:"tr",align:null},"250k flow/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max number of data  sources"),(0,l.kt)("td",{parentName:"tr",align:"left"},"unlimited"),(0,l.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,l.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,l.kt)("td",{parentName:"tr",align:null},"unlimited")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Supported VM Systems"),(0,l.kt)("td",{parentName:"tr",align:"left"},"VMWare 7 and higher recommended"),(0,l.kt)("td",{parentName:"tr",align:null},"VMWare 7 and higher recommended"),(0,l.kt)("td",{parentName:"tr",align:null},"VMWare 7 and higher recommended"),(0,l.kt)("td",{parentName:"tr",align:null},"VMWare 7 and higher recommended")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Base OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"),(0,l.kt)("th",{parentName:"tr",align:null},"Small"),(0,l.kt)("th",{parentName:"tr",align:null},"Medium"),(0,l.kt)("th",{parentName:"tr",align:null},"Large"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vCPU* cores"),(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null},"36"),(0,l.kt)("td",{parentName:"tr",align:null},"48"),(0,l.kt)("td",{parentName:"tr",align:null},"64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"22 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"36 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"48 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"96 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Storage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OS disk"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB (recommended SSD disks)"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB (recommended SSD disks )"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB (SSD disks required)"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB (SSD disks required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data disk"),(0,l.kt)("td",{parentName:"tr",align:null},"at the customer's discretion** (recommended SSD disks)"),(0,l.kt)("td",{parentName:"tr",align:null},"at the customer's discretion** (recommended SSD disks)"),(0,l.kt)("td",{parentName:"tr",align:null},"at the customer's discretion** (SSD disks required)"),(0,l.kt)("td",{parentName:"tr",align:null},"at the customer's discretion** (SSD disks required)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"*")," (Threads x Cores) x Physical CPU Number = Number of vCPUs"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"*","*")," size of the Data Disk is is strictly dependent on the needs and requirements of the user in terms of storage time for various types of data and the amount of traffic generated by the analyzed network infrastructure"),(0,l.kt)("hr",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"While we do our best to represent the data as fairly and accurately as possible (internal tests), your environment may experience different limits."),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"We conducted performance tests using the latest generation processors with clock speeds above 3.5 GHz."),(0,l.kt)("li",{parentName:"ol"},"In custom dashboard configurations, we recommend to add (best performance) up to 12 widgets per single dashboard."),(0,l.kt)("li",{parentName:"ol"},"Software image has by default: 128GB System and 180GB Data plus default retention policy configured. Please modify those before any production installation. \t\t\t\t\t"))),(0,l.kt)("h2",{id:"probe-hardware-requirements"},"Probe hardware requirements"),(0,l.kt)("p",null,"The probe is available as a license for Virtual or Hardware Appliances. The performance of the Probe depends on the hardware resources. Please see below the requirements depending on the traffic through out to monitor: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Traffic"),(0,l.kt)("th",{parentName:"tr",align:null},"< 100 Mbps"),(0,l.kt)("th",{parentName:"tr",align:null},"Between 100 Mbps and 1 Gbps"),(0,l.kt)("th",{parentName:"tr",align:null},"Between 1 and 10 Gbps"),(0,l.kt)("th",{parentName:"tr",align:null},"Above 10 Gbps"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flow Export Rate"),(0,l.kt)("td",{parentName:"tr",align:null},"< 100 FPS"),(0,l.kt)("td",{parentName:"tr",align:null},"< 1000 FPS"),(0,l.kt)("td",{parentName:"tr",align:null},"< 3000 FPS"),(0,l.kt)("td",{parentName:"tr",align:null},"3000+ FPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active Flow Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Thousands"),(0,l.kt)("td",{parentName:"tr",align:null},"Hundreds of Thousands"),(0,l.kt)("td",{parentName:"tr",align:null},"A few Millions"),(0,l.kt)("td",{parentName:"tr",align:null},"Tenth of Millions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU Type"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores+"),(0,l.kt)("td",{parentName:"tr",align:null},"4 cores+"),(0,l.kt)("td",{parentName:"tr",align:null},"8 cores+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Memory"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB+"),(0,l.kt)("td",{parentName:"tr",align:null},"4-8 GB+"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB+")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"retention-calculator"},"Retention calculator"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"We have done our best to make the calculator as close as possible to the real environment, but you should remember that this is only an estimation. ",(0,l.kt)("strong",{parentName:"p"},"Please use it with caution."))),(0,l.kt)(i.Z,{mdxType:"Calculator"}))}g.isMDXComponent=!0}}]);