"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35095],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},153647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var a=n(487462),r=n(263366),i=(n(667294),n(603905)),o=["components"],s={slug:"/User-Guide/Settings/Configuration/Mapping/Tags",addressMatch:"panel/mapping/tags"},p="Tags",l={unversionedId:"User-Guide/Settings/Configuration/Mapping/Tags/index",id:"User-Guide/Settings/Configuration/Mapping/Tags/index",title:"Tags",description:"This menu [Settings > Configuration > Mapping > Tags] can be used to create custom tags that can be used across the Sycope system.",source:"@site/docs/04-User-Guide/10-Settings/01-Configuration/01-Mapping/03-Tags/index.md",sourceDirName:"04-User-Guide/10-Settings/01-Configuration/01-Mapping/03-Tags",slug:"/User-Guide/Settings/Configuration/Mapping/Tags",permalink:"/User-Guide/Settings/Configuration/Mapping/Tags",draft:!1,tags:[],version:"current",frontMatter:{slug:"/User-Guide/Settings/Configuration/Mapping/Tags",addressMatch:"panel/mapping/tags"},sidebar:"docs",previous:{title:"Mappers",permalink:"/User-Guide/Settings/Configuration/Mapping/Mappers"},next:{title:"Macros",permalink:"/User-Guide/Configuration/Mapping/Macros"}},u={},g=[],c={toc:g};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tags"},"Tags"),(0,i.kt)("p",null,"This menu ",(0,i.kt)("strong",{parentName:"p"},"[Settings > Configuration > Mapping > Tags]")," can be used to create custom tags that can be used across the Sycope system."),(0,i.kt)("p",null,"The list of created tags is in the table that has the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - Tag name with a customizable background color"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Color")," - Tag color"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," - Short tag description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status")," - active/inactive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Used in Dashboards")," - list of ",(0,i.kt)("strong",{parentName:"li"},"Dashboards")," in which the ",(0,i.kt)("strong",{parentName:"li"},"Tag")," was used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Used in Widgets")," - list of ",(0,i.kt)("strong",{parentName:"li"},"Widgets")," in which the ",(0,i.kt)("strong",{parentName:"li"},"Tag")," was used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Used in Rules")," - list of ",(0,i.kt)("strong",{parentName:"li"},"Rules")," in which the ",(0,i.kt)("strong",{parentName:"li"},"Tag")," was used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Edit - edit Tag"),(0,i.kt)("li",{parentName:"ul"},"Duplicate -  creating an editable copy of the selected ",(0,i.kt)("strong",{parentName:"li"},"Tag")),(0,i.kt)("li",{parentName:"ul"},"Delete - delete Lookup")))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To add a new tag click ",(0,i.kt)("strong",{parentName:"p"},"New tag")," button. After clicking button, a ",(0,i.kt)("strong",{parentName:"p"},"Tag Properties"),"  window appears with the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name")," - Tag name ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Description")," - short tag description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pick a color"),"  - field to specify the color in the tag name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Active switch")," -  button to activate the tag - status shown on active/inactive icon in the table in the Tags menu"))))}m.isMDXComponent=!0}}]);