"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86609],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},347508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),o=["components"],p={slug:"/User-Guide/Configuration/Reports/Reports"},l="Reports",s={unversionedId:"User-Guide/Configuration/Reports/Reports/index",id:"version-2.6/User-Guide/Configuration/Reports/Reports/index",title:"Reports",description:"This menu [Configuration > Reports] can be used to create reports. Reports in the system are built based on Dashboards. Still, it is necessary to define a filter for the report (Report filter - [Configuration > Reports > Report filters] tab) to specify the time range to be analyzed in the report. In addition to specifying a time range in the filter report, you can create advanced NQL expressions that operate on selected data streams.",source:"@site/versioned_docs/version-2.6/04-User-Guide/08-Configuration/05-Reports/01-Reports/index.md",sourceDirName:"04-User-Guide/08-Configuration/05-Reports/01-Reports",slug:"/User-Guide/Configuration/Reports/Reports",permalink:"/2.6/User-Guide/Configuration/Reports/Reports",draft:!1,tags:[],version:"2.6",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",frontMatter:{slug:"/User-Guide/Configuration/Reports/Reports"},sidebar:"docs",previous:{title:"Reports",permalink:"/2.6/User-Guide/Configuration/Reports"},next:{title:"Report Schedule",permalink:"/2.6/User-Guide/Configuration/Reports/Report-Schedule"}},u={},m=[],c={toc:m};function d(e){var t=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reports"},"Reports"),(0,i.kt)("p",null,"This menu ",(0,i.kt)("strong",{parentName:"p"},"[Configuration > Reports]")," can be used to create ",(0,i.kt)("inlineCode",{parentName:"p"},"reports"),". Reports in the system are built based on ",(0,i.kt)("strong",{parentName:"p"},"Dashboards"),". Still, it is necessary to define a filter for the report (",(0,i.kt)("strong",{parentName:"p"},"Report filter")," - ",(0,i.kt)("strong",{parentName:"p"},"[Configuration > Reports > Report filters]")," tab) to specify the ",(0,i.kt)("strong",{parentName:"p"},"time range")," to be analyzed in the report. In addition to specifying a time range in the filter report, you can create advanced NQL expressions that operate on selected data streams."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To create a new report, you must first create a ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," (",(0,i.kt)("strong",{parentName:"p"},"[Configuration > Dashboards]"),"), which will be the ",(0,i.kt)("strong",{parentName:"p"},"type of report")," on which it will be based.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Report scheduling can be configured in the ",(0,i.kt)("strong",{parentName:"p"},"[Configuration > Reports > Report schedule]")," menu.")),(0,i.kt)("p",null,"The list of ",(0,i.kt)("inlineCode",{parentName:"p"},"reports"),"  is in the table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - unique ",(0,i.kt)("inlineCode",{parentName:"li"},"report")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - share status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creator")," - creator user name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Duplicate")," -  creating an editable copy of the selected  ",(0,i.kt)("inlineCode",{parentName:"li"},"report")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete"))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The predefined fields in the system are not editable but can be duplicated and then edited. ")),(0,i.kt)("p",null,"To add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Report,")," click the New report button, and then the report wizard will appear. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221128103142491",src:r(719326).Z,width:"592",height:"480"})),(0,i.kt)("p",null,"In the wizard window, there are the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name")," - the name of the report in the system (use")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Size")," ","[A1/A2/A3/A4/A5]"," - report page size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Orientation")," ","[portrait/landscape]"," - report page orientation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pages")," - here, you configure the contents of the pages in the report"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"File name")," - report file name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dashboard name")," - the name of the Dashboard with which the report is created"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Report filter")," - selected ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter"))))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - you can grant permissions for a field",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private")," - accessible to the owner"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public")," - visible to all, but You can grant permission:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"li"},"User roles"),". Available privileges are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))))}d.isMDXComponent=!0},719326:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221128103142491-c2f01416c186bc767b437dca87d69934.png"}}]);