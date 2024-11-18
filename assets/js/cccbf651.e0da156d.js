"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51222],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},503763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),o=["components"],l={slug:"/User-Guide/Configuration/Reports/Report-Filters",addressMatch:"panel/reports/report-filters"},p="Report Filters",s={unversionedId:"User-Guide/Configuration/Reports/Report-Filters/index",id:"User-Guide/Configuration/Reports/Report-Filters/index",title:"Report Filters",description:"This menu [Configuration > Reports > Report filters] can be used to create a report filter. These are needed to create reports; you configure here, for example, a time filter that defines the Time range for the generated report, but not only that.",source:"@site/docs/04-User-Guide/08-Configuration/06-Reports/03-Report-Filters/index.md",sourceDirName:"04-User-Guide/08-Configuration/06-Reports/03-Report-Filters",slug:"/User-Guide/Configuration/Reports/Report-Filters",permalink:"/User-Guide/Configuration/Reports/Report-Filters",draft:!1,tags:[],version:"current",frontMatter:{slug:"/User-Guide/Configuration/Reports/Report-Filters",addressMatch:"panel/reports/report-filters"},sidebar:"docs",previous:{title:"Report Schedule",permalink:"/User-Guide/Configuration/Reports/Report-Schedule"},next:{title:"Recipients",permalink:"/User-Guide/Configuration/Reports/Recipients"}},u={},m=[],c={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"report-filters"},"Report Filters"),(0,i.kt)("p",null,"This menu ",(0,i.kt)("strong",{parentName:"p"},"[Configuration > Reports > Report filters]")," can be used to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"report filter"),". These are needed to create reports; you configure here, for example, a time filter that defines the ",(0,i.kt)("strong",{parentName:"p"},"Time range")," for the generated report, but not only that."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Report scheduling can be configured in the menu ",(0,i.kt)("strong",{parentName:"p"},"[Configuration > Reports > Report schedule]"),".")),(0,i.kt)("p",null,"The list of ",(0,i.kt)("inlineCode",{parentName:"p"},"report filters"),"  is in the table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - unique ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tags")," - assigned tags"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time range")," - specified time range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NQL")," - NQL query used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - share status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creator")," - creator user name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Duplicate")," -  creating an editable copy of the selected  ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")," - editing the ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")," - deleting the ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter"))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The predefined ",(0,i.kt)("strong",{parentName:"p"},"Report filters")," in the system are not editable but can be duplicated and then edited.")),(0,i.kt)("p",null,"To add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"report filter"),", click the New report filter button, and the filter wizard will appear. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221128112422641",src:r(169651).Z,width:"404",height:"538"})),(0,i.kt)("p",null,"In the wizard window, there are the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - the name of the report filter in the system "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source"),"  - data stream to be used in the filter - ",(0,i.kt)("u",null,"field not required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time range")," - time range for the report - ",(0,i.kt)("u",null,"required field")," !"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filters"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field")," -  here select ",(0,i.kt)("strong",{parentName:"li"},"Field")," or ",(0,i.kt)("strong",{parentName:"li"},"Metric")," for the previously selected ",(0,i.kt)("strong",{parentName:"li"},"Source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operator")," - here, choose a mathematical operator, for example, =, != , > ...."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Value")," - here, enter the value "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Query Builder")," - using this option, you can create your own advanced filter using the ",(0,i.kt)("strong",{parentName:"li"},"Query Builder")," wizard")))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - you can grant permissions for a ",(0,i.kt)("strong",{parentName:"li"},"Report filter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private")," - accessible to the owner"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public")," - visible to all, but You can grant permission:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"li"},"User roles"),". Available privileges are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))))}d.isMDXComponent=!0},169651:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221128112422641-816ef1736db230439f6245ab5d5c4c5e.png"}}]);