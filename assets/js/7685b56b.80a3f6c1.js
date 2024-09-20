"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8232],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,g=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),o=["components"],s={description:"FTP Tab"},l=void 0,p={unversionedId:"User Guide/Configuration/Integrations/FTP",id:"version-2.2.3/User Guide/Configuration/Integrations/FTP",title:"FTP",description:"FTP Tab",source:"@site/versioned_docs/version-2.2.3/04-User Guide/Configuration/07-Integrations/06-FTP.md",sourceDirName:"04-User Guide/Configuration/07-Integrations",slug:"/User Guide/Configuration/Integrations/FTP",permalink:"/2.2.3/User Guide/Configuration/Integrations/FTP",draft:!1,tags:[],version:"2.2.3",lastUpdatedAt:1686667651,formattedLastUpdatedAt:"13 Jun 2023",sidebarPosition:6,frontMatter:{description:"FTP Tab"},sidebar:"docs",previous:{title:"External Destinations",permalink:"/2.2.3/User Guide/Configuration/Integrations/External Destinations"},next:{title:"Update",permalink:"/2.2.3/User Guide/Configuration/Update/"}},u={},c=[],m={toc:c};function f(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>Integrations>",(0,i.kt)("strong",{parentName:"p"},"FTP")," ]"," can be used to configure FTP server connection parameters. FTP server configuration is necessary for the process of creating system backups."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the System, it is possible to configure only one FTP server.")),(0,i.kt)("p",null,"To configure the FTP server, you need to fill in a form consisting of the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - server name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Host")," -  host IP address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Port")," - service port"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")," - FTP server user name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password")," - FTP server user password")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private")," - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Public")," - visible to all, but You can grant permission:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"p"},"User roles"),". Available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20221227110510567",src:r(424237).Z,width:"400",height:"723"})))))}f.isMDXComponent=!0},424237:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221227110510567-4d3dcf63c27db4d0820f7116c2e19155.png"}}]);