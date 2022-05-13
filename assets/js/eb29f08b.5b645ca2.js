"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,p={unversionedId:"User Guide/Configuration/Objects/Fields/Fields",id:"User Guide/Configuration/Objects/Fields/Fields",title:"Fields",description:"The Configuration>Fields can be used to create a custom field based on the selected Streams and (optional) your own mathematical function. Additionally, you can use the Mapping, too. The system includes many of the most useful predefined  fields  that you can use right after installing the system.",source:"@site/docs/User Guide/Configuration/Objects/Fields/Fields.md",sourceDirName:"User Guide/Configuration/Objects/Fields",slug:"/User Guide/Configuration/Objects/Fields/",permalink:"/next/User Guide/Configuration/Objects/Fields/",draft:!1,tags:[],version:"current",lastUpdatedAt:1652267779,formattedLastUpdatedAt:"11/05/2022",frontMatter:{}},u={},m=[],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Configuration>",(0,l.kt)("strong",{parentName:"p"},"Fields")," can be used to create a custom ",(0,l.kt)("inlineCode",{parentName:"p"},"field")," based on the selected Streams and (optional) your own mathematical function. Additionally, you can use the Mapping, too. The system includes many of the most useful predefined  ",(0,l.kt)("inlineCode",{parentName:"p"},"fields"),"  that you can use right after installing the system."),(0,l.kt)("p",null,"The list of ",(0,l.kt)("inlineCode",{parentName:"p"},"fields"),"  is in the table with the following columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name")," - unique ",(0,l.kt)("inlineCode",{parentName:"li"},"field")," name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Streams")," - streams used to create  ",(0,l.kt)("inlineCode",{parentName:"li"},"fields")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description")," -  ",(0,l.kt)("inlineCode",{parentName:"li"},"field"),"  description entered by user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Duplicate -  creating an editable copy of the selected  ",(0,l.kt)("inlineCode",{parentName:"li"},"field"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The predefined fields in the system are not editable but can be duplicated and then edited.")),(0,l.kt)("p",null,"To add a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Field")," click ",(0,l.kt)("strong",{parentName:"p"},"Add field")," button then the field wizard will appear. In the wizard window there are the following fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Field name - name of the field in the system (user friendly)"),(0,l.kt)("li",{parentName:"ul"},"Description - short field description"),(0,l.kt)("li",{parentName:"ul"},"Sources - the data stream (or streams) that will be used to create Field")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Use Function switch - OFF "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Field - field selected from the set of fields available in the selected Data stream")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Use Function switch - ON"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Field - name used in mathematical operations - can be the same as ",(0,l.kt)("strong",{parentName:"li"},"Display Name")),(0,l.kt)("li",{parentName:"ul"},"Function - mathematical operation on fields from selected Data streams")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Mappers - you can add mappers from the list available to map field values")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Custom label ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Number Formatting"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Currency"),(0,l.kt)("li",{parentName:"ul"},"Date"),(0,l.kt)("li",{parentName:"ul"},"Number"),(0,l.kt)("li",{parentName:"ul"},"Off"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Privacy - you can grant permissions for field"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Public - accessible to all")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Edit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Execute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View"))))))))}d.isMDXComponent=!0}}]);