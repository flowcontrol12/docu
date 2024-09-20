"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24491],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},520967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(487462),a=r(263366),o=(r(667294),r(603905)),i=["components"],s={slug:"/User-Guide/Settings/General/Integrations/Proxy"},p="Proxy",l={unversionedId:"User-Guide/Settings/General/Integrations/Proxy",id:"User-Guide/Settings/General/Integrations/Proxy",title:"Proxy",description:"The [Settings > General > Integrations > Proxy] menu can be used to configure the proxy server parameters with which the Sycope system will be integrated.",source:"@site/docs/04-User-Guide/10-Settings/07-General/01-Integrations/04-Proxy.md",sourceDirName:"04-User-Guide/10-Settings/07-General/01-Integrations",slug:"/User-Guide/Settings/General/Integrations/Proxy",permalink:"/User-Guide/Settings/General/Integrations/Proxy",draft:!1,tags:[],version:"current",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",sidebarPosition:4,frontMatter:{slug:"/User-Guide/Settings/General/Integrations/Proxy"},sidebar:"docs",previous:{title:"SMPT",permalink:"/User-Guide/Settings/General/Integrations/SMPT"},next:{title:"External Destinations",permalink:"/User-Guide/Settings/General/Integrations/External-Destinations"}},c={},u=[],m={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proxy"},"Proxy"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"[Settings > General > Integrations > Proxy]")," menu can be used to configure the proxy server parameters with which the Sycope system will be integrated."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20231116092136973",src:r(588887).Z,width:"1560",height:"922"})),(0,o.kt)("p",null,"There are the following lines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proxy active")," switch - activate/deactivate proxy support "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Username")," - proxy user name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password")," - proxy user password"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Port")," - service port"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Host")," - proxy server IP address")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Correct configuration of the proxy service in this menu will ensure correct communication with the ",(0,o.kt)("strong",{parentName:"p"},"license server."))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"If you use a proxy service in your network, you must exclude the ",(0,o.kt)("a",{parentName:"p",href:"https://updates.sycope.com"},"https://updates.sycope.com")," website from it, otherwise the Sycope live update and security feed live update services will not work.")))}d.isMDXComponent=!0},588887:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20231116092136973-ee7f7fea18c4227635177184ac120d77.png"}}]);