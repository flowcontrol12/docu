"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(n),m=a,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={description:"Tags Tab"},p=void 0,l={unversionedId:"User Guide/Configuration/Mapping/Tags",id:"version-2.3/User Guide/Configuration/Mapping/Tags",title:"Tags",description:"Tags Tab",source:"@site/versioned_docs/version-2.3/04-User Guide/Configuration/03-Mapping/04-Tags.md",sourceDirName:"04-User Guide/Configuration/03-Mapping",slug:"/User Guide/Configuration/Mapping/Tags",permalink:"/2.3/User Guide/Configuration/Mapping/Tags",draft:!1,tags:[],version:"2.3",lastUpdatedAt:1695227583,formattedLastUpdatedAt:"20 Sept 2023",sidebarPosition:4,frontMatter:{description:"Tags Tab"},sidebar:"docs",previous:{title:"Business Hours",permalink:"/2.3/User Guide/Configuration/Mapping/Business Hours"},next:{title:"Mappers",permalink:"/2.3/User Guide/Configuration/Mapping/Mappers"}},u={},c=[],g={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>Mapping>",(0,i.kt)("strong",{parentName:"p"},"Tags"),"]"," can be used to create custom tags that can be used across the Sycope system."),(0,i.kt)("p",null,"The list of created tags is in the table that has the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - Tag name with a customizable background color"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Color")," - Tag color"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," - Short tag description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status")," - active/inactive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Used in Dashboards")," - list of ",(0,i.kt)("strong",{parentName:"li"},"Dashboards")," in which the ",(0,i.kt)("strong",{parentName:"li"},"Tag")," was used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Used in Widgets")," - list of ",(0,i.kt)("strong",{parentName:"li"},"Widgets")," in which the ",(0,i.kt)("strong",{parentName:"li"},"Tag")," was used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Used in Rules")," - list of ",(0,i.kt)("strong",{parentName:"li"},"Rules")," in which the ",(0,i.kt)("strong",{parentName:"li"},"Tag")," was used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Edit - edit Tag"),(0,i.kt)("li",{parentName:"ul"},"Duplicate -  creating an editable copy of the selected ",(0,i.kt)("strong",{parentName:"li"},"Tag")),(0,i.kt)("li",{parentName:"ul"},"Delete - delete Lookup")))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To add a new tag click ",(0,i.kt)("strong",{parentName:"p"},"New tag")," button. After clicking button, a ",(0,i.kt)("strong",{parentName:"p"},"Tag Properties"),"  window appears with the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name")," - Tag name ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Description")," - short tag description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pick a color"),"  - field to specify the color in the tag name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Active switch")," -  button to activate the tag - status shown on active/inactive icon in the table in the Tags menu"))))}m.isMDXComponent=!0}}]);