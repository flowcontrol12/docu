"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43793],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),k=n,N=c["".concat(o,".").concat(k)]||c[k]||u[k]||i;return a?r.createElement(N,l(l({ref:t},m),{},{components:a})):r.createElement(N,l({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},893552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=a(487462),n=a(263366),i=(a(667294),a(603905)),l=["components"],p={description:"Metrics Tab"},o=void 0,s={unversionedId:"User Guide/Configuration/Objects/Metrics",id:"version-2.2.3/User Guide/Configuration/Objects/Metrics",title:"Metrics",description:"Metrics Tab",source:"@site/versioned_docs/version-2.2.3/04-User Guide/Configuration/04-Objects/02-Metrics.md",sourceDirName:"04-User Guide/Configuration/04-Objects",slug:"/User Guide/Configuration/Objects/Metrics",permalink:"/2.2.3/User Guide/Configuration/Objects/Metrics",draft:!1,tags:[],version:"2.2.3",sidebarPosition:2,frontMatter:{description:"Metrics Tab"},sidebar:"docs",previous:{title:"Fields",permalink:"/2.2.3/User Guide/Configuration/Objects/Fields"},next:{title:"Alert fields",permalink:"/2.2.3/User Guide/Configuration/Objects/Alert fields"}},m={},u=[],c={toc:u};function k(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>Object>",(0,i.kt)("strong",{parentName:"p"},"Metrics"),"]"," can be used to create custom ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics")," based on the selected Data Streams and your own Aggregation and Post Aggregation. The system includes several useful predefined  ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics"),"  that you can use right after installing the system."),(0,i.kt)("p",null,"The list of ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics")," is included in a table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name")," - unique ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics")," name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Streams")," - data streams used to create  ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Description")," -  ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics"),"  description entered by user")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - privacy status icon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Created By")," - name of the user who created the Metric")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Creation Time")," - creation time")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Modified By")," - name of the user who last modified the Metric")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Modification Time")," - last modification time")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Shared")," - name of the user who shared the Metric")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Used in")," - objects in the System where the Metric was used")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Action")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Duplicate -  creating an editable copy of the selected  ",(0,i.kt)("inlineCode",{parentName:"li"},"metric"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The predefined fields in the system are not editable but can be duplicated and then edited.")),(0,i.kt)("p",null,"To add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"metric")," click \u201c",(0,i.kt)("strong",{parentName:"p"},"New metric"),"\u201d button then the Metrics wizard will appear. In the wizard window there are the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Display name")," - NQL name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Description")," - short metric description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Display name")," - name of the field in the system (user friendly)"))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sources")," - the data stream (or streams) that will be used to create the metric")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When creating a metric, you can add multiple data streams.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use Function")," switch - OFF "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Field")," - field in the selected data source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Agreggation")," - list of mathematical operations to choose from available in the system"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Avg - returns average of field values.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Count - returns count of non empty fields.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First - returns value of first field returned.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Join - returns concatenated value of fields values")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Last - returns value of last field returned.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Max - returns maximal value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Min - returns minimal value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Percentile - returns value below a X percentage of data falls.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sum - returns sum of values.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unique Count - returns countn of unique non empty fields"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use Function")," switch - ON"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Aggr")," - user-created aggregation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Post aggr")," - post aggregation that can (not required) be created by the user using the values calculated in the aggregation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Field")," - name used in mathematical operations - can be the same as ",(0,i.kt)("strong",{parentName:"p"},"Display Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Numbering Format")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Currency"),(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Number"),(0,i.kt)("li",{parentName:"ul"},"Off"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private")," - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Public")," - visible to all, but You can grant permission:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"p"},"User roles"),". Available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))))}k.isMDXComponent=!0}}]);