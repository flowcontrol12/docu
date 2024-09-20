"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45360],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},808915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(487462),i=n(263366),a=(n(667294),n(603905)),o=["components"],s={slug:"/User-Guide/Settings/General/Integrations/SMPT"},l="SMPT",c={unversionedId:"User-Guide/Settings/General/Integrations/SMTP",id:"User-Guide/Settings/General/Integrations/SMTP",title:"SMPT",description:"The [Settings > General > Integrations > SMPT] menu can be used to configure SMTP server connection parameters.",source:"@site/docs/04-User-Guide/10-Settings/07-General/01-Integrations/03-SMTP.md",sourceDirName:"04-User-Guide/10-Settings/07-General/01-Integrations",slug:"/User-Guide/Settings/General/Integrations/SMPT",permalink:"/User-Guide/Settings/General/Integrations/SMPT",draft:!1,tags:[],version:"current",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",sidebarPosition:3,frontMatter:{slug:"/User-Guide/Settings/General/Integrations/SMPT"},sidebar:"docs",previous:{title:"SNMP",permalink:"/User-Guide/Settings/General/Integrations/SNMP"},next:{title:"Proxy",permalink:"/User-Guide/Settings/General/Integrations/Proxy"}},u={},p=[{value:"First section",id:"first-section",level:3},{value:"Second section",id:"second-section",level:3},{value:"Third section",id:"third-section",level:3},{value:"Test connection",id:"test-connection",level:3}],d={toc:p};function g(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smpt"},"SMPT"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"[Settings > General > Integrations > SMPT]")," menu can be used to configure SMTP server connection parameters."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20231116093352580",src:n(85303).Z,width:"1363",height:"918"})),(0,a.kt)("p",null,"The configuration of SMPT functionality is divided into three sections which are described below."),(0,a.kt)("h3",{id:"first-section"},"First section"),(0,a.kt)("p",null,"In order to configure the SMTP server, you need to fill in a form consisting of the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Email")," - email from which notifications will be sent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Host")," -  host name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port"),"  - service port")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20231116093633677",src:n(434572).Z,width:"320",height:"284"})),(0,a.kt)("h3",{id:"second-section"},"Second section"),(0,a.kt)("p",null,"In this section, security-related fields are configured. There are two switches available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use SMTP authentication")," switch ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Username")," - user name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password")," - password"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use TLS protocol")," switch - to use ",(0,a.kt)("strong",{parentName:"li"},"Transport Layer Security")," (TLS) protocol")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20231116093723141",src:n(27830).Z,width:"317",height:"267"})),(0,a.kt)("h3",{id:"third-section"},"Third section"),(0,a.kt)("p",null,"In this section, fields related to the transmission process are configured. There are two fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connection timeout in seconds")," - here, you can specify the connection timeout in seconds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Timeout in seconds"),"\xa0-\xa0here, you can specify the timeout in seconds")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20231116093743990",src:n(646586).Z,width:"314",height:"273"})),(0,a.kt)("h3",{id:"test-connection"},"Test connection"),(0,a.kt)("p",null,"After entering the appropriate parameters of the SMTP service, you can test the configuration by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test connection")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20231116094911695",src:n(746010).Z,width:"2216",height:"1130"})))}g.isMDXComponent=!0},85303:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231116093352580-a737a48a8b925bc9ccaf34754cc66071.png"},434572:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231116093633677-5572d4cb402ed18cd43789d623feb27f.png"},27830:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231116093723141-fc9976a057e4bada7b246877342d146a.png"},646586:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231116093743990-7ac353726590be63e17ff30022b3c167.png"},746010:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20231116094911695-ec75f05c1e0330799eac09e87e5ec61e.png"}}]);