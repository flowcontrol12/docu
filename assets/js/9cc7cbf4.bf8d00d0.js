"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=p(a),d=o,h=g["".concat(l,".").concat(d)]||g[d]||c[d]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],s={},l="Installation guide",p={unversionedId:"Installation guide",id:"Installation guide",title:"Installation guide",description:"This document describes step by step installation and configuration process of Sycope 2.X on VMWare ESXi version 6.5+.",source:"@site/docs/Installation guide.md",sourceDirName:".",slug:"/Installation guide",permalink:"/Installation guide",draft:!1,tags:[],version:"current",lastUpdatedAt:1659951835,formattedLastUpdatedAt:"8 Aug 2022",frontMatter:{},sidebar:"docs",previous:{title:"User Interface",permalink:"/User interface_"},next:{title:"Dashboard",permalink:"/User Guide/Dashboards/"}},m={},c=[{value:"1. Image download",id:"1-image-download",level:2},{value:"2. Deployment",id:"2-deployment",level:2},{value:"3. IP address, DNS Server and Gateway  configuration",id:"3-ip-address-dns-server-and-gateway--configuration",level:2},{value:"4. System activation",id:"4-system-activation",level:2}],g={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-guide"},"Installation guide"),(0,i.kt)("p",null,"This document describes step by step installation and configuration process of Sycope 2.X on VMWare ESXi version 6.5+.\t"),(0,i.kt)("p",null,"For additional resources and information, please visit Sycope LLC website at ",(0,i.kt)("a",{parentName:"p",href:"http://www.sycope.com"},"www.sycope.com"),"."),(0,i.kt)("h2",{id:"1-image-download"},"1. Image download"),(0,i.kt)("p",null,"To download the Sycope system image, log in to the Sycope Portal ",(0,i.kt)("a",{parentName:"p",href:"https://portal.sycope.com."},"https://portal.sycope.com.")," "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803142948172",src:a(3244).Z,width:"1259",height:"1055"})),(0,i.kt)("p",null,"After logging in, go to the Images menu where you will find system images that you can download."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803143320653",src:a(85258).Z,width:"1144",height:"670"})),(0,i.kt)("p",null,"Download the image that suits you by clicking the icon to its right."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803144356536",src:a(22344).Z,width:"919",height:"146"})),(0,i.kt)("p",null,"In our example, we are using ",(0,i.kt)("strong",{parentName:"p"},"Vmware ESXi v. 6.5")," so we download an image named ",(0,i.kt)("strong",{parentName:"p"},"Sycope_2.0.27.2-vm6.5.ova")," where ",(0,i.kt)("strong",{parentName:"p"},"\u201cvm6.5\u201d")," means that it is created just for this version of the system."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you have a VMware ESXi version for which there is no image on the ",(0,i.kt)("strong",{parentName:"p"},"Sycope Portal"),", you can use a tool provided by vmware ",(0,i.kt)("a",{parentName:"p",href:"https://developer.vmware.com/web/tool/4.4.0/ovf"},"https://developer.vmware.com/web/tool/4.4.0/ovf")," that allows you to import and export OVF packages to and from many VMware products.")),(0,i.kt)("h2",{id:"2-deployment"},"2. Deployment"),(0,i.kt)("p",null,"In order to perform the successful installation, please ",(0,i.kt)("strong",{parentName:"p"},"follow below steps"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to VMWare ESXi.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803150226858",src:a(56882).Z,width:"972",height:"701"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"From ",(0,i.kt)("strong",{parentName:"li"},"Navigator Menu")," go to ",(0,i.kt)("strong",{parentName:"li"},"Virtual Machines"),". Click on ",(0,i.kt)("strong",{parentName:"li"},"Create / Register VM"),". Pop up window will show up with few steps to be completed."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Deploy a virtual machine from OVF or OVA file"),", and then click ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803151347322",src:a(10862).Z,width:"934",height:"589"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Enter a name of virtual appliance you want to create. Browse the OVA file by clicking on blue parallelogram or drag and drop on it. Click ",(0,i.kt)("strong",{parentName:"li"},"Next"),",")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803151528004",src:a(57978).Z,width:"935",height:"591"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Choose desired datastore that will hold the FlowControl XN files. Click ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803151658214",src:a(67095).Z,width:"935",height:"589"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Select data provisioning options depending on your requirements. Make sure that the ",(0,i.kt)("strong",{parentName:"li"},"Power on automatically")," option is deselected. Click ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803151903439",src:a(45788).Z,width:"935",height:"589"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"After completing all previous steps, pop up window will show up, summarizing all information about the virtual machine that has been created. Click ",(0,i.kt)("strong",{parentName:"li"},"Finish")," in order to start a deployment process.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803152021413",src:a(89954).Z,width:"937",height:"588"})),(0,i.kt)("h2",{id:"3-ip-address-dns-server-and-gateway--configuration"},"3. IP address, DNS Server and Gateway  configuration"),(0,i.kt)("p",null,"For operation of the system it is necessary to configure the network parameters so you need to configure the appropriate ",(0,i.kt)("strong",{parentName:"p"},"DNS Server")," address,  ",(0,i.kt)("strong",{parentName:"p"},"IP")," address and ",(0,i.kt)("strong",{parentName:"p"},"Gateway")," address."),(0,i.kt)("p",null,"When the installation process is complete, please start the installed system and then ",(0,i.kt)("strong",{parentName:"p"},"log in")," using the ",(0,i.kt)("strong",{parentName:"p"},"ESXi Console"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803194822323",src:a(29732).Z,width:"1070",height:"231"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("strong",{parentName:"p"},"Sycope")," default password and username for the ",(0,i.kt)("strong",{parentName:"p"},"VMware Console"),":"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"user:")," admin"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"password:")," admin123")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"It is highly recommended to change default password !!!"))),(0,i.kt)("p",null,"After logging into the system via the ",(0,i.kt)("strong",{parentName:"p"},"VMware Console"),", select the ",(0,i.kt)("strong",{parentName:"p"},"Network Interfaces Tab")," and then change the settings of the selected Interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803195326060",src:a(34960).Z,width:"787",height:"600"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803195447820",src:a(28534).Z,width:"788",height:"600"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803202853796",src:a(43948).Z,width:"799",height:"622"})),(0,i.kt)("h2",{id:"4-system-activation"},"4. System activation"),(0,i.kt)("p",null,"To activate the Sycope system follow the steps below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to the ",(0,i.kt)("strong",{parentName:"li"},"Sycope Portal")," ",(0,i.kt)("a",{parentName:"li",href:"https://portal.sycope.com"},"https://portal.sycope.com"),"  and check if you have an active ",(0,i.kt)("strong",{parentName:"li"},"template")," where you can make an upload license request.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804122508219",src:a(22555).Z,width:"1527",height:"472"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Click the icon ",(0,i.kt)("strong",{parentName:"li"},"Required information to create license request")," and then check and save the information displayed in the ",(0,i.kt)("strong",{parentName:"li"},"Company info")," window")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220803205025327",src:a(81411).Z,width:"548",height:"544"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Using a ",(0,i.kt)("strong",{parentName:"li"},"web browser"),", log in to the installed ",(0,i.kt)("strong",{parentName:"li"},"Sycope")," system to be activated.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("strong",{parentName:"p"},"Sycope")," default password and username for ",(0,i.kt)("strong",{parentName:"p"},"www interface"),":"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"user:")," admin"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"password:")," qwerty")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"It is highly recommended to change default password !!!"))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Generate License request. To do this, go to the ",(0,i.kt)("strong",{parentName:"li"},"License tab")," then click ",(0,i.kt)("strong",{parentName:"li"},"Generate")," and fill out the form with exactly the same information as the ",(0,i.kt)("strong",{parentName:"li"},"Company info")," form on the ",(0,i.kt)("strong",{parentName:"li"},"Sycope Portal"),". After entering the information, click ",(0,i.kt)("strong",{parentName:"li"},"Generate")," on the form and then copy the generated ",(0,i.kt)("strong",{parentName:"li"},"License request"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The information entered in the ",(0,i.kt)("strong",{parentName:"p"},"License request")," form ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("u",null,"must be"))," identical to that in the ",(0,i.kt)("strong",{parentName:"p"},"Company info")," form on the ",(0,i.kt)("strong",{parentName:"p"},"Sycope Portal"),". Any change or mistake will result in rejection of the request. If the ",(0,i.kt)("strong",{parentName:"p"},"License request")," was ",(0,i.kt)("strong",{parentName:"p"},"rejected"),", correct the data and renew the ",(0,i.kt)("strong",{parentName:"p"},"License request")," by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Renew")," button."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"image-20220808102754121",src:a(81339).Z,width:"817",height:"433"}))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(11370).Z,width:"1466",height:"833"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804125656387",src:a(7847).Z,width:"1169",height:"972"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804130154256",src:a(6827).Z,width:"1169",height:"972"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Sycope Portal")," again click the ",(0,i.kt)("strong",{parentName:"li"},"Upload license request")," icon and paste in the contents of the ",(0,i.kt)("strong",{parentName:"li"},"License request.")," Then click ",(0,i.kt)("strong",{parentName:"li"},"Send"),". A ",(0,i.kt)("strong",{parentName:"li"},"wait_for_admin")," status will appear next to the license. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804130438333",src:a(97739).Z,width:"1553",height:"664"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804130631262",src:a(84650).Z,width:"1553",height:"772"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804131110751",src:a(88205).Z,width:"1553",height:"693"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"When the ",(0,i.kt)("strong",{parentName:"li"},"license request")," is approved by Sycope Teem the license status on Sycope Portal will change to ",(0,i.kt)("strong",{parentName:"li"},"activated"),". Click the ",(0,i.kt)("strong",{parentName:"li"},"Activation token")," icon and save the contents of the window to the clipboard.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804131708606",src:a(69878).Z,width:"1537",height:"693"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804131903499",src:a(18070).Z,width:"1405",height:"693"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"web browser")," window and log back into the ",(0,i.kt)("strong",{parentName:"li"},"Sycope")," system. Go to the ",(0,i.kt)("strong",{parentName:"li"},"License tab"),", paste the ",(0,i.kt)("strong",{parentName:"li"},"Activation token")," into the ",(0,i.kt)("strong",{parentName:"li"},"Activation Code field")," and click ",(0,i.kt)("strong",{parentName:"li"},"Verify"),". If everything was done correctly, the message ",(0,i.kt)("strong",{parentName:"li"},"Success license activated will appear"),".")),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"image-20220804141501726",src:a(96111).Z,width:"1480",height:"859"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Go to system by clicking ",(0,i.kt)("strong",{parentName:"li"},"Go to app"),". ",(0,i.kt)("strong",{parentName:"li"},"The Sycope")," system is ready for use :)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804141644212",src:a(56121).Z,width:"1480",height:"859"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220804122145367",src:a(63406).Z,width:"1935",height:"1113"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"After activation, the System needs about 15 minutes to start collecting data")))}d.isMDXComponent=!0},81339:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220808102754121-9498c97064f06fc65afbff4fe7bea999.png"},3244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803142948172-cf6333c053b62cc4e38245b29a0217db.png"},85258:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803143320653-4f48e36ce2b635af8ce891b736513845.png"},22344:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803144356536-fbe501a3afd07a0d2ea396b3b90d4b59.png"},56882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803150226858-1bfcbd49a743a88d8d06b2458965e685.png"},10862:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803151347322-1eac707cf47a914a21ec8bb2dfd9d33b.png"},57978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803151528004-8182755843163d631c2cd069cd3a4db2.png"},67095:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803151658214-b4d792fce780ba84a819e2a99f76e8ff.png"},45788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803151903439-a9715203e160c4b101580c284474e0d4.png"},89954:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803152021413-8738990e6567acddb7a42ac30a190eac.png"},29732:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803194822323-dcc4955db35c47c8ac14b7f6e7808d94.png"},34960:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803195326060-447266c903a3d707cabb66bbba098082.png"},28534:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803195447820-cb4607726e813edac5fb59c834377e44.png"},43948:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803202853796-3864ac0b3807752b216af17a3475e3c1.png"},11370:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803204235897-1a9c4b3815beffe92df7b2498d9c592a.png"},81411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220803205025327-550baad179fd0130cfa205dd145dde9f.png"},63406:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804122145367-5f5c8059e2f0ffd694840ceae7c4cd2d.png"},22555:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804122508219-3acc51c2eb075461ee6daba1a3d72a11.png"},7847:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804125656387-d6e808d35ddf3a63cd1739e1ef2fac13.png"},6827:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804130154256-9bddb8e2efcf68f3499f2f6f2b4f2b96.png"},97739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804130438333-ff9646affe8a26865555b28ce234b1f8.png"},84650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804130631262-f1a7148882211368281c5889b921b67e.png"},88205:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804131110751-dbbb1d51ad7039ccbd53ecacef057fc8.png"},69878:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804131708606-07edf7186f22620a270c29d68a75db89.png"},18070:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804131903499-93c283f69ccc8e0c73a8108e86ece6c2.png"},96111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804141501726-46076b586fa7b4d5d30adc73c6f5126a.png"},56121:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220804141644212-2aff615a48b4c74a4ededd587ab53338.png"}}]);