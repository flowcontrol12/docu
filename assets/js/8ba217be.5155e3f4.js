"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={description:"Proxy Tab"},p=void 0,u={unversionedId:"User Guide/Configuration/Integrations/Proxy",id:"User Guide/Configuration/Integrations/Proxy",title:"Proxy",description:"Proxy Tab",source:"@site/docs/04-User Guide/Configuration/07-Integrations/04-Proxy.md",sourceDirName:"04-User Guide/Configuration/07-Integrations",slug:"/User Guide/Configuration/Integrations/Proxy",permalink:"/User Guide/Configuration/Integrations/Proxy",draft:!1,tags:[],version:"current",lastUpdatedAt:1682339506,formattedLastUpdatedAt:"24 Apr 2023",sidebarPosition:4,frontMatter:{description:"Proxy Tab"},sidebar:"docs",previous:{title:"SMTP",permalink:"/User Guide/Configuration/Integrations/SMTP"},next:{title:"External Destinations",permalink:"/User Guide/Configuration/Integrations/External Destinations"}},c={},l=[],m={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This menu ","[Configuration>Integrations>",(0,a.kt)("strong",{parentName:"p"},"Proxy"),"]"," can be used to configure the proxy server parameters with which the Sycope system will be integrated."),(0,a.kt)("p",null,"There are the following lines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proxy active")," switch - activate/deactivate proxy support "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Username")," - proxy user name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password")," - proxy user password"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port")," - service port"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Host")," - proxy server IP address")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Correct configuration of the proxy service in this menu will ensure correct communication with the ",(0,a.kt)("strong",{parentName:"p"},"license server."))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"If you use a proxy service in your network you must exclude from it  ",(0,a.kt)("a",{parentName:"p",href:"https://updates.sycope.com"},"https://updates.sycope.com")," website, otherwise the Sycope live update and security feed live update services will not work.")))}d.isMDXComponent=!0}}]);