"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39021],{603905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var i=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return t?i.createElement(g,a(a({ref:n},l),{},{components:t})):i.createElement(g,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},596901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var i=t(487462),o=t(263366),r=(t(667294),t(603905)),a=["components"],s={description:"Maintenance Mode"},c=void 0,p={unversionedId:"User Guide/Configuration/General Settings/Maintenance Mode",id:"version-2.4/User Guide/Configuration/General Settings/Maintenance Mode",title:"Maintenance Mode",description:"Maintenance Mode",source:"@site/versioned_docs/version-2.4/04-User Guide/07-Configuration/01-General Settings/03-Maintenance Mode.md",sourceDirName:"04-User Guide/07-Configuration/01-General Settings",slug:"/User Guide/Configuration/General Settings/Maintenance Mode",permalink:"/2.4/User Guide/Configuration/General Settings/Maintenance Mode",draft:!1,tags:[],version:"2.4",sidebarPosition:3,frontMatter:{description:"Maintenance Mode"},sidebar:"docs",previous:{title:"Notifications",permalink:"/2.4/User Guide/Configuration/General Settings/Notifications"},next:{title:"Diagnostics",permalink:"/2.4/User Guide/Configuration/General Settings/Diagnostics"}},l={},u=[],d={toc:u};function f(e){var n=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This menu ","[Configuration>General Settings >",(0,r.kt)("strong",{parentName:"p"},"Maintenance Mode"),"]"," can be used to assign temporary controlled support access to the system via SSH protocol. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230906091058946",src:t(274506).Z,width:"718",height:"429"})),(0,r.kt)("p",null,"In the first step, to open a connection via SSH, you need to run the Chalange Responce process."),(0,r.kt)("p",null,"To do this, copy the code from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Challange")," field and send it to Sycope support. Then, support will send back a new code, which you should enter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," field. Pressing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Verify")," button will start the process of verification and launching the SSH service on the system on which the Sycope application is installed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230906100603238",src:t(234555).Z,width:"561",height:"335"})),(0,r.kt)("p",null,"To open an SSH tunnel it is necessary to click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," button. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230906095939697",src:t(729723).Z,width:"707",height:"613"})),(0,r.kt)("p",null,"The connection is established using TCP protocol on port 443 to the AWS instance (supportaccess.sycope.com)."),(0,r.kt)("p",null,'After a successful connection, you will see the message "Remote tunnel opened successfully" and under the ',(0,r.kt)("inlineCode",{parentName:"p"},"Disconnect")," you will see the value Connection ID."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230906100036927",src:t(246660).Z,width:"1966",height:"1137"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Connection ID")," is a random number identifying a given connection to a specific instance of the Sycope application.\nThe SSH service is stopped when the set ",(0,r.kt)("inlineCode",{parentName:"p"},"Active time")," expires."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Disconnect")," button is used to close the connection tunnel.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Stop")," button stops the SSH service."))}f.isMDXComponent=!0},274506:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20230906091058946-82da2e3b6be7b23ef14d4028374cfc3d.png"},729723:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20230906095939697-1022701aee8dea51132ba77a3c3b0980.png"},246660:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20230906100036927-0e52159cacc1481d5023c79318a2b503.png"},234555:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20230906100603238-d5b35cf852865ce7c26a2fd0486fa282.png"}}]);