"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[700],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},281244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(487462),r=n(263366),i=(n(667294),n(603905)),l=["components"],o={slug:"/User-Guide/Settings/Configuration/Objects/Fields"},s="Fields",p={unversionedId:"User-Guide/Settings/Configuration/Objects/Fields/index",id:"User-Guide/Settings/Configuration/Objects/Fields/index",title:"Fields",description:"This menu [Settings > Configuration > Objects > Fields] can be used to create a custom field based on the selected Streams and (optional) your own mathematical function. Additionally, you can use the Mapping, too. The system includes many of the most useful predefined  fields  that you can use right after installing the system.",source:"@site/docs/04-User-Guide/10-Settings/01-Configuration/02-Objects/01-Fields/index.md",sourceDirName:"04-User-Guide/10-Settings/01-Configuration/02-Objects/01-Fields",slug:"/User-Guide/Settings/Configuration/Objects/Fields",permalink:"/User-Guide/Settings/Configuration/Objects/Fields",draft:!1,tags:[],version:"current",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",frontMatter:{slug:"/User-Guide/Settings/Configuration/Objects/Fields"},sidebar:"docs",previous:{title:"Objects",permalink:"/User-Guide/Settings/Configuration/Objects"},next:{title:"Metrics",permalink:"/User-Guide/Settings/Configuration/Objects/Metrics"}},u={},m=[],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This menu ",(0,i.kt)("strong",{parentName:"p"},"[Settings > Configuration > Objects > Fields]")," can be used to create a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"field")," based on the selected Streams and (optional) your own mathematical function. Additionally, you can use the Mapping, too. The system includes many of the most useful predefined  ",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),"  that you can use right after installing the system."),(0,i.kt)("p",null,"The list of ",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),"  is in the table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - unique ",(0,i.kt)("inlineCode",{parentName:"li"},"field")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Streams")," - streams used to create  ",(0,i.kt)("inlineCode",{parentName:"li"},"fields")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," -  ",(0,i.kt)("inlineCode",{parentName:"li"},"field"),"  description entered by user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status icon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created By")," - name of the user who created the Field"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creation Time")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modified By")," - name of the user who last modified the Field"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modification Time")," - last modification time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - name of the user who shared the Field"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Used in")," - objects in the System where the Field was used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Duplicate -  creating an editable copy of the selected  ",(0,i.kt)("inlineCode",{parentName:"li"},"field"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The predefined fields in the system are not editable but can be duplicated and then edited.")),(0,i.kt)("p",null,"To add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Field")," click ",(0,i.kt)("strong",{parentName:"p"},"Add field")," button then the field wizard will appear. In the wizard window there are the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field name")," - NQL name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," - short field description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Display name")," - name of the field in the system (user friendly)")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sources")," - the data stream (or streams) that will be used to create Field")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use Function switch")," - ",(0,i.kt)("strong",{parentName:"p"},"OFF")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field")," - field selected from the set of fields available in the selected Data stream")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use Function switch - ON")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field")," - name used in mathematical operations - can be the same as ",(0,i.kt)("strong",{parentName:"li"},"Display Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Function")," - mathematical operation on fields from selected Data streams")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mappers")," - you can add mappers from the list available to map field values")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Number Formatting")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Currency"),(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Number"),(0,i.kt)("li",{parentName:"ul"},"Off"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private")," - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Public")," - visible to all, but You can grant permission:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"p"},"User roles"),". Available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))))}c.isMDXComponent=!0}}]);