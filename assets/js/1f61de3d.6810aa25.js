"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75755],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,g=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},513929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(487462),o=n(263366),a=(n(667294),n(603905)),i=["components"],l={description:"SMTP Tab"},s=void 0,p={unversionedId:"User Guide/Configuration/Integrations/SMTP",id:"version-2.2.2/User Guide/Configuration/Integrations/SMTP",title:"SMTP",description:"SMTP Tab",source:"@site/versioned_docs/version-2.2.2/04-User Guide/Configuration/07-Integrations/03-SMTP.md",sourceDirName:"04-User Guide/Configuration/07-Integrations",slug:"/User Guide/Configuration/Integrations/SMTP",permalink:"/2.2.2/User Guide/Configuration/Integrations/SMTP",draft:!1,tags:[],version:"2.2.2",sidebarPosition:3,frontMatter:{description:"SMTP Tab"},sidebar:"docs",previous:{title:"SNMP",permalink:"/2.2.2/User Guide/Configuration/Integrations/SNMP"},next:{title:"Proxy",permalink:"/2.2.2/User Guide/Configuration/Integrations/Proxy"}},u={},c=[],m={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This menu ","[Configuration>Integrations>",(0,a.kt)("strong",{parentName:"p"},"SMTP")," ]"," can be used to configure SMTP server connection parameters."),(0,a.kt)("p",null,"In order to configure the SMTP server, you need to fill in a form consisting of the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Email")," - email from which notifications will be sent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Host")," -  host name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port"),"  - service port"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Username")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SMTP port")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authentication")," ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use SMTP authentication")," switch "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use TLS protocol")," switch"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transport protocol"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"smtp"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connection timeout in seconds")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Timeout in seconds"))))}f.isMDXComponent=!0}}]);