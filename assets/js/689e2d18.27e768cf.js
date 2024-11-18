"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97683],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(a,".").concat(m)]||d[m]||l[m]||i;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},576200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var o=n(487462),r=n(263366),i=(n(667294),n(603905)),s=["components"],p={slug:"/User-Guide/Settings/Support-and-Diagnostics/Remote-Support"},a="Remote Support",c={unversionedId:"User-Guide/Settings/Support-and-Diagnostics/Remote-Support/index",id:"version-2.6/User-Guide/Settings/Support-and-Diagnostics/Remote-Support/index",title:"Remote Support",description:"[Settings > Support & Diagnostics > Remote Support] menu can be used to assign temporary controlled support access to the system via SSH protocol.",source:"@site/versioned_docs/version-2.6/04-User-Guide/10-Settings/06-Support-and-Diagnostics/03-Remote-Support/index.md",sourceDirName:"04-User-Guide/10-Settings/06-Support-and-Diagnostics/03-Remote-Support",slug:"/User-Guide/Settings/Support-and-Diagnostics/Remote-Support",permalink:"/2.6/User-Guide/Settings/Support-and-Diagnostics/Remote-Support",draft:!1,tags:[],version:"2.6",frontMatter:{slug:"/User-Guide/Settings/Support-and-Diagnostics/Remote-Support"},sidebar:"docs",previous:{title:"Diagnostics",permalink:"/2.6/User-Guide/Settings/Support-and-Diagnostics/Diagnostics"},next:{title:"Backup & Restore",permalink:"/2.6/User-Guide/Settings/Support-and-Diagnostics/Backup-and-Restore"}},u={},l=[],d={toc:l};function m(e){var t=e.components,p=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"remote-support"},"Remote Support"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"[Settings > Support & Diagnostics > Remote Support]")," menu can be used to assign temporary controlled support access to the system via SSH protocol. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230906091058946",src:n(558248).Z,width:"718",height:"429"})),(0,i.kt)("p",null,"In the first step, to open a connection via SSH protocol, you need to run the Challenge Response process."),(0,i.kt)("p",null,"To do this, copy the code from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Challange")," field and send it to Sycope support. Then, support will send back a new code which you should enter in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," field. Pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Verify")," button will start the process of verification and launching the SSH service on the system in which the Sycope application is installed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230906100603238",src:n(883844).Z,width:"561",height:"335"})),(0,i.kt)("p",null,"To open an SSH tunnel, it is necessary to click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")," button. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230906095939697",src:n(706311).Z,width:"707",height:"613"})),(0,i.kt)("p",null,"The connection is established using TCP protocol on port 443 to the AWS instance (supportaccess.sycope.com)."),(0,i.kt)("p",null,'After a successful connection, you will see a "Remote tunnel opened successfully" message and under the ',(0,i.kt)("inlineCode",{parentName:"p"},"Disconnect")," button you will see the Connection ID value."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230906100036927",src:n(10136).Z,width:"1966",height:"1137"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Connection ID")," is a random number identifying a given connection to a specific instance of the Sycope application.\nThe SSH service is stopped when the set ",(0,i.kt)("inlineCode",{parentName:"p"},"Active time")," expires."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Disconnect")," button is used to close the connection tunnel.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Stop")," button stops the SSH service."))}m.isMDXComponent=!0},558248:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-20230906091058946-82da2e3b6be7b23ef14d4028374cfc3d.png"},706311:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-20230906095939697-1022701aee8dea51132ba77a3c3b0980.png"},10136:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-20230906100036927-0e52159cacc1481d5023c79318a2b503.png"},883844:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-20230906100603238-d5b35cf852865ce7c26a2fd0486fa282.png"}}]);