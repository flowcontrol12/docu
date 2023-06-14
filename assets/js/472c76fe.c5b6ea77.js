"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76234],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return r?a.createElement(k,l(l({ref:t},m),{},{components:r})):a.createElement(k,l({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),l=["components"],o={description:"Report filters Tab"},p=void 0,s={unversionedId:"User Guide/Dashboards/Management/Report filters",id:"version-2.2.3/User Guide/Dashboards/Management/Report filters",title:"Report filters",description:"Report filters Tab",source:"@site/versioned_docs/version-2.2.3/04-User Guide/01-Dashboards/03-Management/04-Report filters.md",sourceDirName:"04-User Guide/01-Dashboards/03-Management",slug:"/User Guide/Dashboards/Management/Report filters",permalink:"/2.2.3/User Guide/Dashboards/Management/Report filters",draft:!1,tags:[],version:"2.2.3",lastUpdatedAt:1686667651,formattedLastUpdatedAt:"13 Jun 2023",sidebarPosition:4,frontMatter:{description:"Report filters Tab"},sidebar:"docs",previous:{title:"Reports",permalink:"/2.2.3/User Guide/Dashboards/Management/Reports"},next:{title:"Alerts",permalink:"/2.2.3/User Guide/Alerts/"}},m={},u=[],c={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Dashboards->Management->",(0,i.kt)("strong",{parentName:"p"},"Report filters"),"]"," can be used to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"report filter"),". These are needed to create reports; you configure here, for example, a time filter that defines the ",(0,i.kt)("strong",{parentName:"p"},"Time range")," for the generated report, but not only that."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Report scheduling can be configured in the menu ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration->Object->Report schedule"),"]",".")),(0,i.kt)("p",null,"The list of ",(0,i.kt)("inlineCode",{parentName:"p"},"report filters"),"  is in the table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - unique ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tags")," - assigned tags"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time range")," - specified time range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NQL")," - NQL query used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - share status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creator")," - creator user name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Duplicate")," -  creating an editable copy of the selected  ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")," - editing the ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")," - deleting the ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter"))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The predefined ",(0,i.kt)("strong",{parentName:"p"},"report filters")," in the system are not editable but can be duplicated and then edited.")),(0,i.kt)("p",null,"To add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"report filter"),", click the New report filter button, and the filter wizard will appear. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221128112422641",src:r(73353).Z,width:"404",height:"538"})),(0,i.kt)("p",null,"In the wizard window, there are the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - the name of the report filter in the system "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source"),"  - data stream to be used in the filter - ",(0,i.kt)("u",null,"field not required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time range")," - time range for the report - ",(0,i.kt)("u",null,"required field")," !"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filters"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field")," -  here select ",(0,i.kt)("strong",{parentName:"li"},"Field")," or ",(0,i.kt)("strong",{parentName:"li"},"Metric")," for the previously selected ",(0,i.kt)("strong",{parentName:"li"},"Source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operator")," - here, choose a mathematical operator, for example, =, != , > ...."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Value")," - here, enter the value "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Query Builder")," - using this option, you can create your own advanced filter using the ",(0,i.kt)("strong",{parentName:"li"},"Query Builder")," wizard")))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - you can grant permissions for a ",(0,i.kt)("strong",{parentName:"li"},"Report filter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private")," - accessible to the owner"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public")," - visible to all, but You can grant permission:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"li"},"User roles"),". Available privileges are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))))}d.isMDXComponent=!0},73353:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20221128112422641-816ef1736db230439f6245ab5d5c4c5e.png"}}]);