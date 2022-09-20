"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=u(a),c=r,d=k["".concat(o,".").concat(c)]||k[c]||m[c]||l;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},57711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={description:"Lookups Tab"},o=void 0,u={unversionedId:"User Guide/Configuration/Mapping/Lookups",id:"User Guide/Configuration/Mapping/Lookups",title:"Lookups",description:"Lookups Tab",source:"@site/docs/04-User Guide/Configuration/03-Mapping/01-Lookups.md",sourceDirName:"04-User Guide/Configuration/03-Mapping",slug:"/User Guide/Configuration/Mapping/Lookups",permalink:"/User Guide/Configuration/Mapping/Lookups",draft:!1,tags:[],version:"current",lastUpdatedAt:1663684723,formattedLastUpdatedAt:"20 Sept 2022",sidebarPosition:1,frontMatter:{description:"Lookups Tab"},sidebar:"docs",previous:{title:"Mapping",permalink:"/User Guide/Configuration/Mapping/"},next:{title:"Maintenance Windows",permalink:"/User Guide/Configuration/Mapping/Maintenance Windows"}},s={},m=[],k={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This menu ","[Configuration>Mapping>",(0,l.kt)("strong",{parentName:"p"},"Lookups"),"]"," can be used to create custom Lookups that may be applied in different places in the system."),(0,l.kt)("p",null,"Lookup is querying an additional database , CSV files or it \u2018s own database with the specified value in order to map it or complete the data in a netflow session or alert with additional information. ",(0,l.kt)("strong",{parentName:"p"},"Lookups")," create their own fields in the system"),(0,l.kt)("p",null,"The list of created ",(0,l.kt)("strong",{parentName:"p"},"Lookups"),"  is in a table with the following columns:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Name")," - unique lookup name"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Status")," - lookup status Active/Inactive"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type")," - Lookup type. There are five predefined types of lookups in the system: Asn, Country, CSV file, CSV file subnet, SNMP Interface."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Edit - edit Lookup"),(0,l.kt)("li",{parentName:"ul"},"Duplicate -  creating an editable copy of the selected"),(0,l.kt)("li",{parentName:"ul"},"Delete - delete Lookup")),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note"),(0,l.kt)("p",{parentName:"blockquote"},"The Action button does not appear for system preinstalled objects")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"As it was written above, the system implements seven predefined types of lookups which are listed in the table below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Lookup type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Input keys"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Output keys"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Asn"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"as.number, as.org")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Compound"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Country"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"continent.code, continent.name, country.name, country.code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CSV file"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CSV file subnet"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"SNMP Interface"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Subnet"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Pressing the ",(0,l.kt)("strong",{parentName:"p"},"New lookup")," button starts the wizard to create a ",(0,l.kt)("strong",{parentName:"p"},"Lookup"),"."),(0,l.kt)("p",null,"For example, to create CSV file type ",(0,l.kt)("strong",{parentName:"p"},"Lookup"),", perform the following steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the first window, specify the type (see table above)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enter a name for the Lookup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Data file"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Edit csv button "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"File preview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Specify Delimeter, Quote Chart and Escape character (Default values are ","[comma, quotation mark, quotation mark]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Choose the previously prepared CSV file and load it. Then confirm the operation by pressing the Apply file button."))))))),(0,l.kt)("p",null,"\u200b\t",(0,l.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Privacy - you can grant permissions for field"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Public permissions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Delete"),(0,l.kt)("li",{parentName:"ul"},"Edit"),(0,l.kt)("li",{parentName:"ul"},"Execute"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Edit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Execute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View"))))))))}c.isMDXComponent=!0}}]);