"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64294],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(667294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=p(a),d=i,h=g["".concat(l,".").concat(d)]||g[d]||c[d]||o;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},268020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(487462),i=a(263366),o=(a(667294),a(603905)),r=["components"],s={},l="Installation guide",p={unversionedId:"Installation guide",id:"version-2.0.29/Installation guide",title:"Installation guide",description:"This document describes step by step installation and configuration process of Sycope 2.X on VMWare ESXi version 6.5+.",source:"@site/versioned_docs/version-2.0.29/03-Installation guide.md",sourceDirName:".",slug:"/Installation guide",permalink:"/2.0.29/Installation guide",draft:!1,tags:[],version:"2.0.29",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"User interface",permalink:"/2.0.29/User interface"},next:{title:"Dashboard",permalink:"/2.0.29/User Guide/Dashboards/"}},m={},c=[{value:"1. Image download",id:"1-image-download",level:2},{value:"2. Deployment",id:"2-deployment",level:2},{value:"3. IP address, DNS Server and Gateway  configuration",id:"3-ip-address-dns-server-and-gateway--configuration",level:2},{value:"4. System activation",id:"4-system-activation",level:2}],g={toc:c};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-guide"},"Installation guide"),(0,o.kt)("p",null,"This document describes step by step installation and configuration process of Sycope 2.X on VMWare ESXi version 6.5+.\t"),(0,o.kt)("p",null,"For additional resources and information, please visit Sycope LLC website at ",(0,o.kt)("a",{parentName:"p",href:"http://www.sycope.com"},"www.sycope.com"),"."),(0,o.kt)("h2",{id:"1-image-download"},"1. Image download"),(0,o.kt)("p",null,"To download the Sycope system image, log in to the Sycope Portal ",(0,o.kt)("a",{parentName:"p",href:"https://portal.sycope.com."},"https://portal.sycope.com.")," "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803142948172",src:a(4641).Z,width:"1259",height:"1055"})),(0,o.kt)("p",null,"After logging in, go to the Images menu where you will find system images that you can download."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803143320653",src:a(868408).Z,width:"1144",height:"670"})),(0,o.kt)("p",null,"Download the image that suits you by clicking the icon to its right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803144356536",src:a(371961).Z,width:"919",height:"146"})),(0,o.kt)("p",null,"In our example, we are using ",(0,o.kt)("strong",{parentName:"p"},"Vmware ESXi v. 6.5")," so we download an image named ",(0,o.kt)("strong",{parentName:"p"},"Sycope_2.0.27.2-vm6.5.ova")," where ",(0,o.kt)("strong",{parentName:"p"},"\u201cvm6.5\u201d")," means that it is created just for this version of the system."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have a VMware ESXi version for which there is no image on the ",(0,o.kt)("strong",{parentName:"p"},"Sycope Portal"),", you can use a tool provided by vmware ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vmware.com/web/tool/4.4.0/ovf"},"https://developer.vmware.com/web/tool/4.4.0/ovf")," that allows you to import and export OVF packages to and from many VMware products.")),(0,o.kt)("h2",{id:"2-deployment"},"2. Deployment"),(0,o.kt)("p",null,"In order to perform the successful installation, please ",(0,o.kt)("strong",{parentName:"p"},"follow below steps"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to VMWare ESXi.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803150226858",src:a(463343).Z,width:"972",height:"701"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"From ",(0,o.kt)("strong",{parentName:"li"},"Navigator Menu")," go to ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines"),". Click on ",(0,o.kt)("strong",{parentName:"li"},"Create / Register VM"),". Pop up window will show up with few steps to be completed."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Deploy a virtual machine from OVF or OVA file"),", and then click ",(0,o.kt)("strong",{parentName:"li"},"Next"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803151347322",src:a(122543).Z,width:"934",height:"589"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Enter a name of virtual appliance you want to create. Browse the OVA file by clicking on blue parallelogram or drag and drop on it. Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),",")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803151528004",src:a(592271).Z,width:"935",height:"591"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Choose desired datastore that will hold the FlowControl XN files. Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803151658214",src:a(652034).Z,width:"935",height:"589"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Select data provisioning options depending on your requirements. Make sure that the ",(0,o.kt)("strong",{parentName:"li"},"Power on automatically")," option is deselected. Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803151903439",src:a(209585).Z,width:"935",height:"589"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"After completing all previous steps, pop up window will show up, summarizing all information about the virtual machine that has been created. Click ",(0,o.kt)("strong",{parentName:"li"},"Finish")," in order to start a deployment process.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803152021413",src:a(518415).Z,width:"937",height:"588"})),(0,o.kt)("h2",{id:"3-ip-address-dns-server-and-gateway--configuration"},"3. IP address, DNS Server and Gateway  configuration"),(0,o.kt)("p",null,"For operation of the system it is necessary to configure the network parameters so you need to configure the appropriate ",(0,o.kt)("strong",{parentName:"p"},"DNS Server")," address,  ",(0,o.kt)("strong",{parentName:"p"},"IP")," address and ",(0,o.kt)("strong",{parentName:"p"},"Gateway")," address."),(0,o.kt)("p",null,"When the installation process is complete, please start the installed system and then ",(0,o.kt)("strong",{parentName:"p"},"log in")," using the ",(0,o.kt)("strong",{parentName:"p"},"ESXi Console"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803194822323",src:a(744176).Z,width:"1070",height:"231"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"Sycope")," default password and username for the ",(0,o.kt)("strong",{parentName:"p"},"VMware Console"),":"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"user:")," admin"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"password:")," admin123")),(0,o.kt)("p",null,"After logging into the system via the ",(0,o.kt)("strong",{parentName:"p"},"VMware Console"),", select the ",(0,o.kt)("strong",{parentName:"p"},"Network Interfaces Tab")," and then change the settings of the selected Interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803195326060",src:a(246703).Z,width:"787",height:"600"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803195447820",src:a(897098).Z,width:"788",height:"600"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803202853796",src:a(141610).Z,width:"799",height:"622"})),(0,o.kt)("h2",{id:"4-system-activation"},"4. System activation"),(0,o.kt)("p",null,"To activate the Sycope system follow the steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the ",(0,o.kt)("strong",{parentName:"li"},"Sycope Portal")," ",(0,o.kt)("a",{parentName:"li",href:"https://portal.sycope.com"},"https://portal.sycope.com"),"  and check if you have an active ",(0,o.kt)("strong",{parentName:"li"},"template")," where you can make an upload license request.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804122508219",src:a(294883).Z,width:"1527",height:"472"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click the icon ",(0,o.kt)("strong",{parentName:"li"},"Required information to create license request")," and then check and save the information displayed in the ",(0,o.kt)("strong",{parentName:"li"},"Company info")," window")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803205025327",src:a(344642).Z,width:"548",height:"544"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Using a ",(0,o.kt)("strong",{parentName:"li"},"web browser"),", log in to the installed ",(0,o.kt)("strong",{parentName:"li"},"Sycope")," system to be activated.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"Sycope")," default password and username for ",(0,o.kt)("strong",{parentName:"p"},"www interface"),":"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"user:")," admin"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"password:")," qwerty")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"It is highly recommended to change default password !!!"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Generate License request. To do this, go to the ",(0,o.kt)("strong",{parentName:"li"},"License tab")," then click ",(0,o.kt)("strong",{parentName:"li"},"Generate")," and fill out the form with exactly the same information as the ",(0,o.kt)("strong",{parentName:"li"},"Company info")," form on the ",(0,o.kt)("strong",{parentName:"li"},"Sycope Portal"),". After entering the information, click ",(0,o.kt)("strong",{parentName:"li"},"Generate")," on the form and then copy the generated ",(0,o.kt)("strong",{parentName:"li"},"License request"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The information entered in the ",(0,o.kt)("strong",{parentName:"p"},"License request")," form ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("u",null,"must be"))," identical to that in the ",(0,o.kt)("strong",{parentName:"p"},"Company info")," form on the ",(0,o.kt)("strong",{parentName:"p"},"Sycope Portal"),". Any change or mistake will result in rejection of the request. If the ",(0,o.kt)("strong",{parentName:"p"},"License request")," was ",(0,o.kt)("strong",{parentName:"p"},"rejected"),", correct the data and renew the ",(0,o.kt)("strong",{parentName:"p"},"License request")," by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Renew")," button."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"image-20220808102754121",src:a(405309).Z,width:"817",height:"433"}))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(857303).Z,width:"1466",height:"833"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804125656387",src:a(528508).Z,width:"1169",height:"972"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804130154256",src:a(899491).Z,width:"1169",height:"972"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Sycope Portal")," again click the ",(0,o.kt)("strong",{parentName:"li"},"Upload license request")," icon and paste in the contents of the ",(0,o.kt)("strong",{parentName:"li"},"License request.")," Then click ",(0,o.kt)("strong",{parentName:"li"},"Send"),". A ",(0,o.kt)("strong",{parentName:"li"},"wait_for_admin")," status will appear next to the license. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804130438333",src:a(83091).Z,width:"1553",height:"664"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804130631262",src:a(497526).Z,width:"1553",height:"772"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804131110751",src:a(90950).Z,width:"1553",height:"693"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"When the ",(0,o.kt)("strong",{parentName:"li"},"license request")," is approved by Sycope Teem the license status on Sycope Portal will change to ",(0,o.kt)("strong",{parentName:"li"},"activated"),". Click the ",(0,o.kt)("strong",{parentName:"li"},"Activation token")," icon and save the contents of the window to the clipboard.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804131708606",src:a(396687).Z,width:"1537",height:"693"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804131903499",src:a(579026).Z,width:"1405",height:"693"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"web browser")," window and log back into the ",(0,o.kt)("strong",{parentName:"li"},"Sycope")," system. Go to the ",(0,o.kt)("strong",{parentName:"li"},"License tab"),", paste the ",(0,o.kt)("strong",{parentName:"li"},"Activation token")," into the ",(0,o.kt)("strong",{parentName:"li"},"Activation Code field")," and click ",(0,o.kt)("strong",{parentName:"li"},"Verify"),". If everything was done correctly, the message ",(0,o.kt)("strong",{parentName:"li"},"Success license activated will appear"),".")),(0,o.kt)("p",null,"   ",(0,o.kt)("img",{alt:"image-20220804141501726",src:a(79382).Z,width:"1480",height:"859"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Go to system by clicking ",(0,o.kt)("strong",{parentName:"li"},"Go to app"),". ",(0,o.kt)("strong",{parentName:"li"},"The Sycope")," system is ready for use :)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804141644212",src:a(82169).Z,width:"1480",height:"859"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804122145367",src:a(697181).Z,width:"1935",height:"1113"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"After activation, the System needs about 15 minutes to start collecting data")))}d.isMDXComponent=!0},405309:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808102754121-9498c97064f06fc65afbff4fe7bea999.png"},4641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803142948172-cf6333c053b62cc4e38245b29a0217db.png"},868408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803143320653-4f48e36ce2b635af8ce891b736513845.png"},371961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803144356536-fbe501a3afd07a0d2ea396b3b90d4b59.png"},463343:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803150226858-1bfcbd49a743a88d8d06b2458965e685.png"},122543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803151347322-1eac707cf47a914a21ec8bb2dfd9d33b.png"},592271:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803151528004-8182755843163d631c2cd069cd3a4db2.png"},652034:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803151658214-b4d792fce780ba84a819e2a99f76e8ff.png"},209585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803151903439-a9715203e160c4b101580c284474e0d4.png"},518415:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803152021413-8738990e6567acddb7a42ac30a190eac.png"},744176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803194822323-dcc4955db35c47c8ac14b7f6e7808d94.png"},246703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803195326060-447266c903a3d707cabb66bbba098082.png"},897098:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803195447820-cb4607726e813edac5fb59c834377e44.png"},141610:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803202853796-3864ac0b3807752b216af17a3475e3c1.png"},857303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803204235897-1a9c4b3815beffe92df7b2498d9c592a.png"},344642:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803205025327-550baad179fd0130cfa205dd145dde9f.png"},697181:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804122145367-5f5c8059e2f0ffd694840ceae7c4cd2d.png"},294883:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804122508219-3acc51c2eb075461ee6daba1a3d72a11.png"},528508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804125656387-d6e808d35ddf3a63cd1739e1ef2fac13.png"},899491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804130154256-9bddb8e2efcf68f3499f2f6f2b4f2b96.png"},83091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804130438333-ff9646affe8a26865555b28ce234b1f8.png"},497526:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804130631262-f1a7148882211368281c5889b921b67e.png"},90950:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804131110751-dbbb1d51ad7039ccbd53ecacef057fc8.png"},396687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804131708606-07edf7186f22620a270c29d68a75db89.png"},579026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804131903499-93c283f69ccc8e0c73a8108e86ece6c2.png"},79382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804141501726-46076b586fa7b4d5d30adc73c6f5126a.png"},82169:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804141644212-2aff615a48b4c74a4ededd587ab53338.png"}}]);