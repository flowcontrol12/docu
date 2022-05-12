"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=u(n),c=r,d=k["".concat(o,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(d,p(p({ref:t},s),{},{components:n})):a.createElement(d,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(3117),r=n(102),l=(n(7294),n(3905)),p=["components"],i={},o=void 0,u={unversionedId:"User Guide/Configuration/Mapping/Lookups/Lookups",id:"User Guide/Configuration/Mapping/Lookups/Lookups",title:"Lookups",description:"This menu [Configuration>Mapping>Lookups] can be used to create custom Lookups that may be applied in different places in the system.",source:"@site/docs/User Guide/Configuration/Mapping/Lookups/Lookups.md",sourceDirName:"User Guide/Configuration/Mapping/Lookups",slug:"/User Guide/Configuration/Mapping/Lookups/",permalink:"/next/User Guide/Configuration/Mapping/Lookups/",draft:!1,tags:[],version:"current",lastUpdatedAt:1652267779,formattedLastUpdatedAt:"5/11/2022",frontMatter:{}},s={},m=[],k={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This menu ","[Configuration>Mapping>",(0,l.kt)("strong",{parentName:"p"},"Lookups"),"]"," can be used to create custom Lookups that may be applied in different places in the system."),(0,l.kt)("p",null,"Lookup is querying an additional database (third source) with the specified value in order to map it or complete the data in a netflow session or alert with additional information."),(0,l.kt)("p",null,"The list of created ",(0,l.kt)("strong",{parentName:"p"},"Fields"),"  is in a table with the following columns:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Name")," - unique lookup name"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Status")," - lookup status Active/Inactive"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type")," - Lookup type. There are five predefined types of lookups in the system: Asn, Country, CSV file, CSV file subnet, SNMP Interface."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action")," - ==???=="),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Edit - edit Lookup"),(0,l.kt)("li",{parentName:"ul"},"Duplicate -  creating an editable copy of the selected"),(0,l.kt)("li",{parentName:"ul"},"Delete - delete Lookup")),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note"),(0,l.kt)("p",{parentName:"blockquote"},"The Action button does not appear for objects preinstalled in the system")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"As it was written above, the system implements seven predefined types of lookups which are listed in the table below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Lookup type"),(0,l.kt)("th",{parentName:"tr",align:null},"Input keys"),(0,l.kt)("th",{parentName:"tr",align:null},"Output keys"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Asn"),(0,l.kt)("td",{parentName:"tr",align:null},"ip"),(0,l.kt)("td",{parentName:"tr",align:null},"as.number, as.org")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Compound"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Country"),(0,l.kt)("td",{parentName:"tr",align:null},"ip"),(0,l.kt)("td",{parentName:"tr",align:null},"continent.code, continent.name, country.name, country.code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CSV file"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CSV file subnet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SNMP Interface"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Subnet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Pressing the ",(0,l.kt)("strong",{parentName:"p"},"New lookup")," button starts the wizard to create a ",(0,l.kt)("strong",{parentName:"p"},"Lookup"),"."),(0,l.kt)("p",null,"For example, to create CSV file type ",(0,l.kt)("strong",{parentName:"p"},"Lookup"),", perform the following steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the first window, specify the type (see table above)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enter a name for the Lookup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Data file"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Edit csv button "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"File preview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Specify Delimeter, Quote Chart and Escape character (Default values are ","[comma, quotation mark, quotation mark]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Choose the previously prepared CSV file and load it. Then confirm the operation by pressing the Apply file button."))))))),(0,l.kt)("p",null,"\u200b\t",(0,l.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Privacy - you can grant permissions for field"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Public permissions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Delete"),(0,l.kt)("li",{parentName:"ul"},"Edit"),(0,l.kt)("li",{parentName:"ul"},"Execute"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Edit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Execute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View"))))))))}c.isMDXComponent=!0}}]);