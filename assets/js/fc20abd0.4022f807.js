"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26202],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},551300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=r(487462),n=r(263366),i=(r(667294),r(603905)),o=["components"],p={description:"Reports Tab"},l=void 0,s={unversionedId:"User Guide/Dashboards/Management/Reports",id:"version-2.3/User Guide/Dashboards/Management/Reports",title:"Reports",description:"Reports Tab",source:"@site/versioned_docs/version-2.3/04-User Guide/01-Dashboards/03-Management/03-Reports.md",sourceDirName:"04-User Guide/01-Dashboards/03-Management",slug:"/User Guide/Dashboards/Management/Reports",permalink:"/2.3/User Guide/Dashboards/Management/Reports",draft:!1,tags:[],version:"2.3",sidebarPosition:3,frontMatter:{description:"Reports Tab"},sidebar:"docs",previous:{title:"Widgets",permalink:"/2.3/User Guide/Dashboards/Management/Widgets"},next:{title:"Report filters",permalink:"/2.3/User Guide/Dashboards/Management/Report filters"}},m={},u=[],c={toc:u};function d(e){var t=e.components,p=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Dashboards->Management->",(0,i.kt)("strong",{parentName:"p"},"Reports"),"]"," can be used to create ",(0,i.kt)("inlineCode",{parentName:"p"},"reports"),". Reports in the system are built based on ",(0,i.kt)("strong",{parentName:"p"},"Dashboards"),". Still, it is necessary to define a filter for the report (",(0,i.kt)("strong",{parentName:"p"},"Report filter")," - ","[Dashboard>Management->",(0,i.kt)("strong",{parentName:"p"},"Report filters"),"]"," tab) to specify the ",(0,i.kt)("strong",{parentName:"p"},"time range")," to be analyzed in the report. In addition to specifying a time range in the filter report, you can create advanced NQL expressions that operate on selected data streams."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To create a new report, you must first create a ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," (","[Dashboards->Management->",(0,i.kt)("strong",{parentName:"p"},"Dashboard"),"]"," tab), which will be the ",(0,i.kt)("strong",{parentName:"p"},"type of report")," on which it will be based.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Report scheduling can be configured in the ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration>Object>Report schedule"),"]"," menu.")),(0,i.kt)("p",null,"The list of ",(0,i.kt)("inlineCode",{parentName:"p"},"reports"),"  is in the table with the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - unique ",(0,i.kt)("inlineCode",{parentName:"li"},"report")," name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - share status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creator")," - creator user name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Duplicate")," -  creating an editable copy of the selected  ",(0,i.kt)("inlineCode",{parentName:"li"},"report")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete"))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The predefined fields in the system are not editable but can be duplicated and then edited. ")),(0,i.kt)("p",null,"To add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Report,")," click the New report button, and then the report wizard will appear. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221128103142491",src:r(699028).Z,width:"592",height:"480"})),(0,i.kt)("p",null,"In the wizard window, there are the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name")," - the name of the report in the system (use")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Size")," ","[A1/A2/A3/A4/A5]"," - report page size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Orientation")," ","[portrait/landscape]"," - report page orientation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pages")," - here, you configure the contents of the pages in the report"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"File name")," - report file name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dashboard name")," - the name of the Dashboard with which the report is created"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Report filter")," - selected ",(0,i.kt)("inlineCode",{parentName:"li"},"report filter"))))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - you can grant permissions for a field",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private")," - accessible to the owner"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public")," - visible to all, but You can grant permission:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"li"},"User roles"),". Available privileges are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))))}d.isMDXComponent=!0},699028:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20221128103142491-c2f01416c186bc767b437dca87d69934.png"}}]);