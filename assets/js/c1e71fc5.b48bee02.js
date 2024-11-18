"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13333],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=u(a),c=r,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||o;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},494945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=a(487462),r=a(263366),o=(a(667294),a(603905)),i=["components"],l={description:"Lookups Tab"},p=void 0,u={unversionedId:"User Guide/Configuration/Mapping/Lookups",id:"version-2.1.0/User Guide/Configuration/Mapping/Lookups",title:"Lookups",description:"Lookups Tab",source:"@site/versioned_docs/version-2.1.0/04-User Guide/Configuration/03-Mapping/01-Lookups.md",sourceDirName:"04-User Guide/Configuration/03-Mapping",slug:"/User Guide/Configuration/Mapping/Lookups",permalink:"/2.1.0/User Guide/Configuration/Mapping/Lookups",draft:!1,tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{description:"Lookups Tab"},sidebar:"docs",previous:{title:"Mapping",permalink:"/2.1.0/User Guide/Configuration/Mapping/"},next:{title:"Maintenance Windows",permalink:"/2.1.0/User Guide/Configuration/Mapping/Maintenance Windows"}},s={},m=[],k={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This menu ","[Configuration>Mapping>",(0,o.kt)("strong",{parentName:"p"},"Lookups"),"]"," can be used to create custom Lookups that may be applied in different places in the system."),(0,o.kt)("p",null,"Lookup is querying an additional database , CSV files or it \u2018s own database with the specified value in order to map it or complete the data in a netflow session or alert with additional information. ",(0,o.kt)("strong",{parentName:"p"},"Lookups")," create their own fields in the system"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Lookups")," created in the system are listed in a table with the following columns:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Name")," - unique lookup name"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Status")," - lookup status Active/Inactive"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type")," - Lookup type. There are five predefined types of lookups in the system: Asn, Country, CSV file, CSV file subnet, SNMP Interface"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Privacy")," - privacy status icon"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Created By")," - name of the user who created the lookup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Modified By")," - name of the user who last modified the lookup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Modification Time")," - last modification time"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Shared")," - users who shared the object"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tags")," - assigned tags"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Edit - edit Lookup"),(0,o.kt)("li",{parentName:"ul"},"Duplicate -  creating an editable copy of the selected"),(0,o.kt)("li",{parentName:"ul"},"Delete - delete Lookup")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note"),(0,o.kt)("p",{parentName:"blockquote"},"The Action button does not appear for system preinstalled objects")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"As it was written above, the system implements seven predefined types of lookups which are listed in the table below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Lookup type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Input keys"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Output keys"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Asn"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,o.kt)("td",{parentName:"tr",align:"left"},"as.number, as.org")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Compound"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Country"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,o.kt)("td",{parentName:"tr",align:"left"},"continent.code, continent.name, country.name, country.code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"CSV file"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"SNMP Interface"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Subnet"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Pressing the ",(0,o.kt)("strong",{parentName:"p"},"New lookup")," button starts the wizard to create a ",(0,o.kt)("strong",{parentName:"p"},"Lookup"),"."),(0,o.kt)("p",null,"For example, to create CSV file type ",(0,o.kt)("strong",{parentName:"p"},"Lookup"),", perform the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the first window, specify the type (see table above)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter a name for the Lookup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Data file"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Edit csv button ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"File preview"),(0,o.kt)("li",{parentName:"ul"},"Specify Delimeter, Quote Chart and Escape character (Default values are ","[comma, quotation mark, quotation mark]"),(0,o.kt)("li",{parentName:"ul"},"Choose the previously prepared CSV file and load it. Then confirm the operation by pressing the Apply file button.")))))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Privacy - you can grant permissions for field"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Public permissions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Delete"),(0,o.kt)("li",{parentName:"ul"},"Edit"),(0,o.kt)("li",{parentName:"ul"},"Execute"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Delete")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Edit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Execute")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"View"))))))))}c.isMDXComponent=!0}}]);