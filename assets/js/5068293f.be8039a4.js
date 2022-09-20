"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},25735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=r(83117),n=r(80102),l=(r(67294),r(3905)),i=["components"],o={description:"Alert fields Tab"},p=void 0,s={unversionedId:"User Guide/Configuration/Objects/Alert fields",id:"User Guide/Configuration/Objects/Alert fields",title:"Alert fields",description:"Alert fields Tab",source:"@site/docs/04-User Guide/Configuration/04-Objects/03-Alert fields.md",sourceDirName:"04-User Guide/Configuration/04-Objects",slug:"/User Guide/Configuration/Objects/Alert fields",permalink:"/User Guide/Configuration/Objects/Alert fields",draft:!1,tags:[],version:"current",lastUpdatedAt:1663684723,formattedLastUpdatedAt:"20 Sept 2022",sidebarPosition:3,frontMatter:{description:"Alert fields Tab"},sidebar:"docs",previous:{title:"Metrics",permalink:"/User Guide/Configuration/Objects/Metrics"},next:{title:"Ranges",permalink:"/User Guide/Configuration/Objects/Ranges"}},u={},m=[],c={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This menu ","[ Configuration>Object>",(0,l.kt)("strong",{parentName:"p"},"Alert fields"),"]"," can be used to create a custom ",(0,l.kt)("inlineCode",{parentName:"p"},"Alert fields")," based on the selected Streams and (optional) your own mathematical function.  The system includes several most useful predefined  ",(0,l.kt)("inlineCode",{parentName:"p"},"Alert fields"),"  that you can use right after installing the system."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Alert fields are only used in Alerts.")),(0,l.kt)("p",null,"The list of ",(0,l.kt)("inlineCode",{parentName:"p"},"Alert fields"),"  is in the table with the following columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name")," - unique ",(0,l.kt)("inlineCode",{parentName:"li"},"Alert field")," name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Streams")," - streams used to create  ",(0,l.kt)("inlineCode",{parentName:"li"},"Alert field")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description")," -  ",(0,l.kt)("inlineCode",{parentName:"li"},"Alert field"),"  description entered by user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Edit - editing an existing  ",(0,l.kt)("inlineCode",{parentName:"li"},"Alert field")),(0,l.kt)("li",{parentName:"ul"},"Duplicate - creating an editable copy of the selected  ",(0,l.kt)("inlineCode",{parentName:"li"},"Alert field")),(0,l.kt)("li",{parentName:"ul"},"Delete - deleting   ",(0,l.kt)("inlineCode",{parentName:"li"},"Alert field"))))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"To add a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Alert field")," click ",(0,l.kt)("strong",{parentName:"p"},"New alert field")," button then the alert field wizard will appear. In the wizard window there are the following fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Field name")," - name of the alert field in the system (user friendly)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Description")," - short field description"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Source")," - the data stream (or streams) that will be used to create the field")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Use Function switch")," - allows to enable a mode that allows you to use your own expression to create the field ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Field")," - field selected from the list of fields available in the selected Data stream")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Aggregation")," - you can choose one of the functions: "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Avg - returns average of field values.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Count - returns count of non empty fields.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"First - returns value of first field returned.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Join - returns concatenated value of fields values.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Last - returns value of last field returned.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Max - returns maximal value.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Min - returns minimal value.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Sum - returns sum of values.")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Number formatting")," "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Date"),(0,l.kt)("li",{parentName:"ul"},"Number"),(0,l.kt)("li",{parentName:"ul"},"Off"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Privacy")," - you can grant permissions for field."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Public permissions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Delete"),(0,l.kt)("li",{parentName:"ul"},"Edit"),(0,l.kt)("li",{parentName:"ul"},"Execute"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Edit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Execute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View"))))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"At the bottom of the form there is information on which alarm uses created ",(0,l.kt)("strong",{parentName:"p"},"Alert field"))))}d.isMDXComponent=!0}}]);