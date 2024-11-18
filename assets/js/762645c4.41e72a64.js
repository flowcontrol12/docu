"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59630],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),k=n,d=c["".concat(o,".").concat(k)]||c[k]||u[k]||i;return a?r.createElement(d,p(p({ref:t},m),{},{components:a})):r.createElement(d,p({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},715110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(487462),n=a(263366),i=(a(667294),a(603905)),p=["components"],l={description:"Mappers Tab"},o=void 0,s={unversionedId:"User Guide/Configuration/Mapping/Mappers",id:"version-2.2.2/User Guide/Configuration/Mapping/Mappers",title:"Mappers",description:"Mappers Tab",source:"@site/versioned_docs/version-2.2.2/04-User Guide/Configuration/03-Mapping/05-Mappers.md",sourceDirName:"04-User Guide/Configuration/03-Mapping",slug:"/User Guide/Configuration/Mapping/Mappers",permalink:"/2.2.2/User Guide/Configuration/Mapping/Mappers",draft:!1,tags:[],version:"2.2.2",sidebarPosition:5,frontMatter:{description:"Mappers Tab"},sidebar:"docs",previous:{title:"Tags",permalink:"/2.2.2/User Guide/Configuration/Mapping/Tags"},next:{title:"Objects",permalink:"/2.2.2/User Guide/Configuration/Objects/"}},m={},u=[],c={toc:u};function k(e){var t=e.components,a=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The menu ","[Configuration>Mapping>",(0,i.kt)("strong",{parentName:"p"},"Mappers"),"]"," can be used to create a custom Mapper for use in creating Fields."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Mapper")," matches the data/value in the Value field with the name in the Name field using the All or First method. The effect of the mapping is only in the GUI. The ",(0,i.kt)("strong",{parentName:"p"},"Mapper")," does not create a new field but overwrites existing ones. "),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Mappers")," created in the system are listed in a table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - Mapper name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status icon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created By")," - name of the user who created the Mapper"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creation Time")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modified By")," - name of the user who last modified the lookup"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modification Time")," - last modification time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - name of the user who shared the object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Used in")," - objects in the System where the mapper was used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Edit - editing an existing ",(0,i.kt)("strong",{parentName:"li"},"Mapper")),(0,i.kt)("li",{parentName:"ul"},"Duplicate - creating an editable copy of the selected  ",(0,i.kt)("strong",{parentName:"li"},"Mapper")),(0,i.kt)("li",{parentName:"ul"},"Delete - deleting  ",(0,i.kt)("strong",{parentName:"li"},"Mapper"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The predefined fields in the system are not editable but can be duplicated and then edited.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To add a new mapper click ",(0,i.kt)("strong",{parentName:"p"},"New mapper")," button. After clicking on the button, a configuration window appears with the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Display name")," - Mapper name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Match method")," "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bit masked number"),(0,i.kt)("li",{parentName:"ul"},"Equals"),(0,i.kt)("li",{parentName:"ul"},"Regular expression"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Match method"),"  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All"),(0,i.kt)("li",{parentName:"ul"},"First"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Items")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit csv button "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"File preview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specify Delimeter, Quote Chart and Escape character (Default values are ","[comma, quotation mark, quotation mark]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Choose the previously prepared CSV file and load it. Then confirm the operation by pressing Apply file button."))))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private")," - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Public")," - visible to all, but You can grant permission:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"p"},"User roles"),". Available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))))}k.isMDXComponent=!0}}]);