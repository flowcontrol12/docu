"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4239],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(a),u=o,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(g,r(r({ref:e},c),{},{components:a})):n.createElement(g,r({ref:e},c))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7640:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(3117),o=a(102),i=(a(7294),a(3905)),r=["components"],s={},l=void 0,p={unversionedId:"Installation",id:"version-1.6/Installation",title:"Installation",description:"Introduction",source:"@site/versioned_docs/version-1.6/01-Installation.md",sourceDirName:".",slug:"/Installation",permalink:"/Installation",draft:!1,tags:[],version:"1.6",lastUpdatedAt:1639746315,formattedLastUpdatedAt:"12/17/2021",sidebarPosition:1,frontMatter:{},sidebar:"version-1.6/docs",next:{title:"Introduction",permalink:"/"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Contact Details",id:"contact-details",level:2},{value:"1. Installation",id:"1-installation",level:2},{value:"1.1 Preparation",id:"11-preparation",level:3},{value:"1.2 Deployment",id:"12-deployment",level:3}],d={toc:m};function u(t){var e=t.components,s=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"FlowControl is an application responsible for monitoring network bandwidth and network traffic analysis. This document describes step by step installation and configuration process of FlowControl on VMWare ESXi version 6.5+."),(0,i.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("p",null,"For additional resources and information, please visit Sycope LLC website at ",(0,i.kt)("a",{parentName:"p",href:"http://www.sycope.com."},"www.sycope.com.")," You may find there:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Documentation:")," Documentation and descriptions of our products, available to download in a pdf form, from respective product sites."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Other Sycope LLC solutions:")," For more solutions available from Sycope LLC, visit our homepage and hover the mouse over products drop down menu to view full offer.")),(0,i.kt)("h2",{id:"contact-details"},"Contact Details"),(0,i.kt)("p",null,"Available ways of contacting Sycope LLC SA:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Internet:")," To find more products and information please visit our site ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"http://www.sycope.com"},"www.sycope.com"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"E-mail:")," For any queries, please email us at: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"mailto:contact@sycope.com"},"contact@sycope.com")))),(0,i.kt)("h2",{id:"1-installation"},"1. Installation"),(0,i.kt)("p",null,"This chapter will focus on following aspects of installation process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Preparation"),": Information found here is about what is required to install the virtual machine.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Deployment"),": Step by step walkthrough of installation and deployment process of virtual appliance."))),(0,i.kt)("h3",{id:"11-preparation"},"1.1 Preparation"),(0,i.kt)("p",null,"With purchase of FlowControl, you receive OVA file required for deployment of the software. Please ensure that the file is available for installation process."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disclaimer:")," FlowControlXN is supporting ",(0,i.kt)("strong",{parentName:"p"},"ESXi 6.5+")," version. For the exact software requriements please review Software Requirements section ."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Attention"),": Please note that all CPUs should be divided between 2 sockets, e.g for option with 60k FPS, that has 16 CPUs, there will be 8 CPUs per socket."),(0,i.kt)("p",{parentName:"blockquote"},"It can be check from CLI witch ","[",(0,i.kt)("strong",{parentName:"p"},"status"),"]"," command")),(0,i.kt)("h3",{id:"12-deployment"},"1.2 Deployment"),(0,i.kt)("p",null,"In order to perform the successful installation, please ",(0,i.kt)("strong",{parentName:"p"},"follow below steps"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to VMWare ESXi.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20200921092527989",src:a(7632).Z,width:"1731",height:"903"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From ",(0,i.kt)("strong",{parentName:"p"},"Navigator Menu")," go to ",(0,i.kt)("strong",{parentName:"p"},"Virtual Machines"),". Click on ",(0,i.kt)("strong",{parentName:"p"},"Create / Register VM"),". Pop up window will show up with few steps to be completed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Deploy a virtual machine from OVF or OVA file"),", and then click ",(0,i.kt)("strong",{parentName:"p"},"Next"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(213).Z,width:"930",height:"589"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Enter a name of virtual appliance you want to create. Browse the OVA file by clicking on blue parallelogram or drag and drop on it. Click ",(0,i.kt)("strong",{parentName:"li"},"Next"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4937).Z,width:"933",height:"592"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Choose desired datastore that will hold the FlowControl XN files. Click ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9833).Z,width:"930",height:"588"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Select data provisioning options depending on your requirements. Make sure that the ",(0,i.kt)("strong",{parentName:"li"},"Power on automatically")," option is deselected. Click ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2198).Z,width:"931",height:"589"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"After completing all previous steps, pop up window will show up, summarizing all information about the virtual machine that has been created. Click ",(0,i.kt)("strong",{parentName:"li"},"Finish")," in order to start a deployment process.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6623).Z,width:"931",height:"588"})),(0,i.kt)("p",null,"When the deployment process finishes, please give a system 3 - 5 minutes, for it to configure itself. Up till that time it will be unavailable to access."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20200921093101461",src:a(4508).Z,width:"1724",height:"926"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"In order to add second HDD to the virtual machine please go to ",(0,i.kt)("strong",{parentName:"li"},"Edit settings"),". Click on ",(0,i.kt)("strong",{parentName:"li"},"Add hard disk")," drop down menu and choose ",(0,i.kt)("strong",{parentName:"li"},"New hard disk")," from available options.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3591).Z,width:"770",height:"433"})),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Choosing this option will show window with information to fill in regarding new HDD. Please choose all suitable options for your new hard disk as storage, data provisioning option, etc. Click ",(0,i.kt)("strong",{parentName:"li"},"Finish")," in order to deploy the second HDD.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3356).Z,width:"771",height:"439"})),(0,i.kt)("p",null,"If the installation and deployment have been successfully completed, configuration process can be applied. Run the virtual machine that has been created. In order to access the configuration panel press ",(0,i.kt)("strong",{parentName:"p"},"Left Shift")," button 5 times. Cmd console will pop up, there will be command line asking for a password."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3293).Z,width:"871",height:"681"})),(0,i.kt)("p",null,"For Admin account, default password is: ",(0,i.kt)("strong",{parentName:"p"},"FcxN12","#","\\$")," (It is strongly recommended to change password later in GUI). Network configuration status and list of ",(0,i.kt)("strong",{parentName:"p"},"CLI")," commands will be displayed after successful login. The CLI commands are described in the documentation in the section ",(0,i.kt)("strong",{parentName:"p"},"Command Line Interface"),". Then it is possible to log in to FlowControl GUI via the browse to the administrator's account (user: admin, password: ",(0,i.kt)("strong",{parentName:"p"},"FcxN12","#","\\$")," )"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20201123162918002",src:a(1146).Z,width:"908",height:"623"})),(0,i.kt)("p",null,"After logging in, the main window will appear. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20201123163130280",src:a(1944).Z,width:"1865",height:"861"})),(0,i.kt)("p",null,"It is recommended to check or change the most important system options. To do this, click the button in the upper right corner of the screen and select the option Config."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20201123164731910",src:a(7702).Z,width:"120",height:"241"})),(0,i.kt)("p",null,"In the tab System it is possible to change the network configuration parameters of the system."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2437).Z,width:"1137",height:"456"})),(0,i.kt)("p",null,"In the tab Notifications it is possible to change the system notifications."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20201123163444092",src:a(4305).Z,width:"1133",height:"770"})),(0,i.kt)("p",null,"In the tab NetFlow it is possible to configure/change the system parameters related to the NetFlow collection ."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20201123163546452",src:a(7275).Z,width:"1113",height:"503"})),(0,i.kt)("p",null,"\\\nCreating users together with granting permissions and changing the password is done in the tab Users."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20201123170125475",src:a(7701).Z,width:"1120",height:"318"})),(0,i.kt)("p",null,"If there is a need to restart or shutdown one of the services, use the tab Operations."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20210208115837704",src:a(1643).Z,width:"1364",height:"651"})))}u.isMDXComponent=!0},7632:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20200921092527989-48de5eec1f80012e0b6f2e513f5835aa.png"},4508:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20200921093101461-4411f71d54186d113299eb8535fc89a4.png"},1146:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201123162918002-871f2c513384d5c9b85a99149620223e.png"},1944:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201123163130280-2fb9a768766204cd12be97f344f6512a.png"},2437:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201123163330206-8bfdbce27fce8378758384b58b1ebfe3.png"},4305:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201123163444092-bad8e40997a40ffe939721883ffe341e.png"},7275:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201123163546452-27a22ecaf60cabbb530b35d552725606.png"},7702:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201123164731910-f1caffc354f1ac206e419e5b9978db82.png"},7701:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20201123170125475-6bdf3c0755378ad780088306f6a4d98e.png"},1643:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20210208115837704-fe0c66a7631c65551e157fd7d3517b58.png"},3591:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image1-1770385a6dcca80f668bb2e1f5603f4e.png"},213:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image11-bc63bca04895acb3a00e166af7281fb9.png"},9833:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image12-cd75ca3aeb21e9f2cc4504ae2503310c.png"},3293:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image2-76855a087ef1db262d53f23dd5920408.png"},4937:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image3-c5eba64bcb1251acc494c78133731ae3.png"},3356:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image4-9e6320827c78597528b9cb8654bb59c7.png"},2198:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image6-7b4918598f339b91a862ba56113e3f71.png"},6623:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image8-1a9f2d0788fa55b28d59cefefa0924f3.png"}}]);