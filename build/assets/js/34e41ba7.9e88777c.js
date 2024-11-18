"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52805],{603905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(667294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(a),g=i,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||o;return a?n.createElement(u,r(r({ref:e},c),{},{components:a})):n.createElement(u,r({ref:e},c))}));function g(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},843945:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(487462),i=a(263366),o=(a(667294),a(603905)),r=["components"],s={slug:"/Installation-Guide/Lets-Start"},l="Let's Start",p={unversionedId:"Installation-Guide/Lets-Start/index",id:"Installation-Guide/Lets-Start/index",title:"Let's Start",description:"After completing all previous steps, if the configuration has been done correctly, you can log into the System using a web browser.",source:"@site/docs/03-Installation-Guide/02-Lets-Start/index.md",sourceDirName:"03-Installation-Guide/02-Lets-Start",slug:"/Installation-Guide/Lets-Start",permalink:"/Installation-Guide/Lets-Start",draft:!1,tags:[],version:"current",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",frontMatter:{slug:"/Installation-Guide/Lets-Start"},sidebar:"docs",previous:{title:"Deployment",permalink:"/Installation-Guide/Deployment"},next:{title:"Quick Setup",permalink:"/Installation-Guide/Quick-Setup"}},c={},m=[{value:"<strong>Welcome</strong>",id:"welcome",level:2},{value:"<strong>NTP Configuration</strong>",id:"ntp-configuration",level:2},{value:"<strong>License</strong>",id:"license",level:2},{value:"Automatic process",id:"automatic-process",level:3},{value:"Manual process",id:"manual-process",level:3},{value:"<strong>Tenant configuration</strong>",id:"tenant-configuration",level:2},{value:"<strong>Set Sycope admin password</strong>",id:"set-sycope-admin-password",level:2},{value:"<strong>Summary</strong>",id:"summary",level:2}],d={toc:m};function g(t){var e=t.components,s=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lets-start"},"Let's Start"),(0,o.kt)("p",null,"After completing all previous steps, if the configuration has been done correctly, you can log into the System using a web browser. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"Sycope")," default password and username for the ",(0,o.kt)("strong",{parentName:"p"},"www interface"),":\n",(0,o.kt)("strong",{parentName:"p"},"user:")," admin\n",(0,o.kt)("strong",{parentName:"p"},"password:")," qwerty")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"It is highly recommended to change the default password !!!"))),(0,o.kt)("p",null,"In case of a fresh system after installation, the Sycope application is in an unactivated state. After launching it and logging in, a ",(0,o.kt)("strong",{parentName:"p"},"Let's Start")," form will appear."),(0,o.kt)("h2",{id:"welcome"},(0,o.kt)("strong",{parentName:"h2"},"Welcome")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Let's Start"))," screen appears upon the first login to the machine and is used to fill in basic system options. The minimum requirement is to fill in the [license information4*2#license). The completion of other information is optional but recommended for smooth system operation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Let&#39;s Start",src:a(188693).Z,width:"3411",height:"1710"})),(0,o.kt)("h2",{id:"ntp-configuration"},(0,o.kt)("strong",{parentName:"h2"},"NTP Configuration")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NTP Configuration",src:a(889177).Z,width:"3411",height:"1710"})),(0,o.kt)("p",null,"On this screen, we select the appropriate time zone for the system's operation, which is important for scheduling various tasks within the system.  "),(0,o.kt)("p",null,"Remember to save changes!"),(0,o.kt)("h2",{id:"license"},(0,o.kt)("strong",{parentName:"h2"},"License")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"License",src:a(617863).Z,width:"3411",height:"1710"})),(0,o.kt)("p",null,"License activation is the minimum requirement for system startup.",(0,o.kt)("br",{parentName:"p"}),"\n","There are two activation options: automatic and manual. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Auto",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Quick and Easy"),(0,o.kt)("li",{parentName:"ul"},"Requires online connection to Sycope's License Server via ",(0,o.kt)("a",{parentName:"li",href:"https://updates.sycope.com"},"https://updates.sycope.com")))),(0,o.kt)("li",{parentName:"ul"},"Manual",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Generate license request and complete ",(0,o.kt)("strong",{parentName:"li"},"Company ID")," and ",(0,o.kt)("strong",{parentName:"li"},"License ID")," fields"),(0,o.kt)("li",{parentName:"ul"},"Suitable for offline environments")))),(0,o.kt)("p",null,"After activation, you can proceed to the application via ",(0,o.kt)("inlineCode",{parentName:"p"},"Go to app")," button, which brings us to the next section ",(0,o.kt)("a",{parentName:"p",href:"/Installation-Guide/Quick-Setup"},"Quick Setup"),"."),(0,o.kt)("h3",{id:"automatic-process"},"Automatic process"),(0,o.kt)("p",null,"The automatic activation process can be executed after the ",(0,o.kt)("strong",{parentName:"p"},"first")," initial installation of the system. In this method, the process of entering company data, generating a request, activating on portal.sycope.com and uploading a license is done automatically in the background."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230908125416319",src:a(207513).Z,width:"1336",height:"1168"})),(0,o.kt)("p",null,"In order to be able to activate the System in this mode, the following conditions must be met:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must have the ",(0,o.kt)("strong",{parentName:"li"},"License serial number")," and the ",(0,o.kt)("strong",{parentName:"li"},"Company ID")," - you will get them from the Sycope support"),(0,o.kt)("li",{parentName:"ul"},"the server on which you install the Sycope system must have ",(0,o.kt)("strong",{parentName:"li"},"Internet")," access on ",(0,o.kt)("strong",{parentName:"li"},"port 443")," to the ",(0,o.kt)("strong",{parentName:"li"},"updates.sycope.com")," domain")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"The process is ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("u",null,"one-time")),' - once the ID pair is used, you will not be able to use it again. The appropriate message "License already activated" will pop up.'),(0,o.kt)("li",{parentName:"ol"},"Renewal of licenses is possible ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("u",null,"only"))," through a ",(0,o.kt)("strong",{parentName:"li"},"manual process"),"."),(0,o.kt)("li",{parentName:"ol"},"Automatic activation does not allow uploading licenses as the machine already has one."),(0,o.kt)("li",{parentName:"ol"},"Automatic and manual activation processes are interrelated. This means that starting the license activation process in Manual mode and then interrupting it and trying to start the Automatic process may block it and you will have to start the Manual activation from the beginning."))),(0,o.kt)("h3",{id:"manual-process"},"Manual process"),(0,o.kt)("p",null,"To activate the Sycope system in this mode, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the ",(0,o.kt)("strong",{parentName:"li"},"Sycope Portal")," ",(0,o.kt)("a",{parentName:"li",href:"https://portal.sycope.com"},"https://portal.sycope.com")," and check if you have an active ",(0,o.kt)("strong",{parentName:"li"},"template")," where you can make an upload license request.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804122508219",src:a(320222).Z,width:"1527",height:"472"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Required information to create license request")," icon, then check and save the information displayed in the ",(0,o.kt)("strong",{parentName:"li"},"Company info")," window")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220803205025327",src:a(954562).Z,width:"548",height:"544"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Using a ",(0,o.kt)("strong",{parentName:"li"},"web browser"),", log in to the installed ",(0,o.kt)("strong",{parentName:"li"},"Sycope")," system to be activated.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"Sycope")," default password and username for the ",(0,o.kt)("strong",{parentName:"p"},"www interface"),":"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"user:")," admin"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"password:")," qwerty")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"It is highly recommended to change the default password !!!"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Generate a License request. To do this, go to the ",(0,o.kt)("strong",{parentName:"li"},"License tab"),", click ",(0,o.kt)("strong",{parentName:"li"},"Generate")," and fill out the form with exactly the same information as the Company info in the ",(0,o.kt)("strong",{parentName:"li"},"Sycope Portal"),". After entering the information, click ",(0,o.kt)("strong",{parentName:"li"},"Generate")," on the form and copy the generated ",(0,o.kt)("strong",{parentName:"li"},"License request"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The information entered in the ",(0,o.kt)("strong",{parentName:"p"},"License request")," form ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("u",null,"must be"))," identical to that in the ",(0,o.kt)("strong",{parentName:"p"},"Company info")," form on the ",(0,o.kt)("strong",{parentName:"p"},"Sycope Portal"),". Any change or mistake will result in the rejection of the request. If the ",(0,o.kt)("strong",{parentName:"p"},"License request")," was ",(0,o.kt)("strong",{parentName:"p"},"rejected"),", correct the data and renew the ",(0,o.kt)("strong",{parentName:"p"},"License request")," by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Renew")," button."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"image-20220808102754121",src:a(197947).Z,width:"817",height:"433"}))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"Renew license dialogue")," deletes the current license key and generates a new license request for a new serial number. Please remember that a unique serial number is created for each license request and cannot be used in the license renewal process."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"image-20230317114303040",src:a(279064).Z,width:"862",height:"682"}))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(624531).Z,width:"1466",height:"833"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804125656387",src:a(911369).Z,width:"1169",height:"972"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804130154256",src:a(163194).Z,width:"1169",height:"972"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Sycope Portal")," again, click the ",(0,o.kt)("strong",{parentName:"li"},"Upload license request")," icon and paste in the contents of the ",(0,o.kt)("strong",{parentName:"li"},"License request.")," Then click ",(0,o.kt)("strong",{parentName:"li"},"Send"),". A ",(0,o.kt)("strong",{parentName:"li"},"wait_for_admin")," status will appear next to the license. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804130438333",src:a(554048).Z,width:"1553",height:"664"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804130631262",src:a(594615).Z,width:"1553",height:"772"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804131110751",src:a(537693).Z,width:"1553",height:"693"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"When the ",(0,o.kt)("strong",{parentName:"li"},"license request")," is approved by the Sycope Team, the license status on the Sycope Portal will change to ",(0,o.kt)("strong",{parentName:"li"},"activated"),". Click the ",(0,o.kt)("strong",{parentName:"li"},"Activation token")," icon and save the contents of the window to the clipboard.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804131708606",src:a(445842).Z,width:"1537",height:"693"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804131903499",src:a(518942).Z,width:"1405",height:"693"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"web browser")," window and log back into the ",(0,o.kt)("strong",{parentName:"li"},"Sycope")," system. Go to the ",(0,o.kt)("strong",{parentName:"li"},"License tab"),", paste the ",(0,o.kt)("strong",{parentName:"li"},"Activation token")," into the ",(0,o.kt)("strong",{parentName:"li"},"Activation Code field")," and click ",(0,o.kt)("strong",{parentName:"li"},"Verify"),". If everything is done correctly, a ",(0,o.kt)("strong",{parentName:"li"},"License activated successfully")," message will appear.")),(0,o.kt)("p",null,"   ",(0,o.kt)("img",{alt:"image-20220804141501726",src:a(92237).Z,width:"1480",height:"859"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Go to the system by clicking the ",(0,o.kt)("strong",{parentName:"li"},"Go to app")," button. The ",(0,o.kt)("strong",{parentName:"li"},"Sycope")," system is ready for use.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804141644212",src:a(883746).Z,width:"1480",height:"859"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220804122145367",src:a(887127).Z,width:"1935",height:"1113"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"After activation, the System needs about 15 minutes to start collecting data.")),(0,o.kt)("h2",{id:"tenant-configuration"},(0,o.kt)("strong",{parentName:"h2"},"Tenant configuration")),(0,o.kt)("p",null,"These options are significant if this Sycope installation is intended to operate as a tenant in a Multitenancy system.",(0,o.kt)("br",{parentName:"p"}),"\n","More information on this topic can be found at ",(0,o.kt)("a",{parentName:"p",href:"/Multitenancy"},"Multitenancy")," and ",(0,o.kt)("a",{parentName:"p",href:"/Multitenancy#starting-instances-and-connection-to-master"},"Starting Instances and Connection to Master"),"."),(0,o.kt)("h2",{id:"set-sycope-admin-password"},(0,o.kt)("strong",{parentName:"h2"},"Set Sycope admin password")),(0,o.kt)("p",null,"Changing the password for the system administrator."),(0,o.kt)("h2",{id:"summary"},(0,o.kt)("strong",{parentName:"h2"},"Summary")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Summary",src:a(750042).Z,width:"3411",height:"1710"})),(0,o.kt)("p",null,"Thank you, that's all. Proceed to the system by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Go to app")," button, which brings us to the next section ",(0,o.kt)("a",{parentName:"p",href:"/Installation-Guide/Quick-Setup"},"Quick Setup"),"."))}g.isMDXComponent=!0},889177:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/NTP-Configuration-6d74af3bcef353ddf58b1116e7535dda.png"},188693:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/lets-start-316d5dcbec577d8824e0e355d2d232d2.png"},617863:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/license-9d34527b4465aa4cc8bbb0ba4c46442c.png"},750042:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/summary-952193a06ba1fca4528af77673040573.png"},624531:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220803204235897-1a9c4b3815beffe92df7b2498d9c592a.png"},954562:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220803205025327-4416612-550baad179fd0130cfa205dd145dde9f.png"},887127:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804122145367-5f5c8059e2f0ffd694840ceae7c4cd2d.png"},320222:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804122508219-4416602-3acc51c2eb075461ee6daba1a3d72a11.png"},911369:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804125656387-d6e808d35ddf3a63cd1739e1ef2fac13.png"},163194:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804130154256-9bddb8e2efcf68f3499f2f6f2b4f2b96.png"},554048:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804130438333-ff9646affe8a26865555b28ce234b1f8.png"},594615:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804130631262-f1a7148882211368281c5889b921b67e.png"},537693:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804131110751-dbbb1d51ad7039ccbd53ecacef057fc8.png"},445842:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804131708606-07edf7186f22620a270c29d68a75db89.png"},518942:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804131903499-93c283f69ccc8e0c73a8108e86ece6c2.png"},92237:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804141501726-46076b586fa7b4d5d30adc73c6f5126a.png"},883746:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220804141644212-2aff615a48b4c74a4ededd587ab53338.png"},197947:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20220808102754121-9498c97064f06fc65afbff4fe7bea999.png"},279064:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230317114303040-9d53dee1aae39724e29471f71a1c4fcf.png"},207513:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20230908125416319-3c70646bff8c0edd06a2d54fbe4b35c5.png"}}]);