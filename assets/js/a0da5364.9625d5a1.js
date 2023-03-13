"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7485],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),f=n,u=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return a?r.createElement(u,o(o({ref:t},d),{},{components:a})):r.createElement(u,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53111:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),o=["components"],s={},l="Release notes",p={unversionedId:"Release notes",id:"version-2.2.1/Release notes",title:"Release notes",description:"ver. 2.2.1",source:"@site/versioned_docs/version-2.2.1/06-Release notes.md",sourceDirName:".",slug:"/Release notes",permalink:"/2.2.1/Release notes",draft:!1,tags:[],version:"2.2.1",lastUpdatedAt:1678707866,formattedLastUpdatedAt:"13 Mar 2023",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"Examples of widget creation - advanced widget",permalink:"/2.2.1/Examples/Widgets Examples/Widget Total Traffic 15min"},next:{title:"Requirements",permalink:"/2.2.1/Requirements"}},d={},c=[{value:"ver. 2.2.1",id:"ver-221",level:3}],m={toc:c};function f(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-notes"},"Release notes"),(0,i.kt)("h3",{id:"ver-221"},"ver. 2.2.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added Baseline (dynamic threshold) functionality that allows the user to compare the same metric/field at different time offsets on a single ",(0,i.kt)("strong",{parentName:"p"},"Widget")," to perform comparative analysis in different time windows."),(0,i.kt)("p",{parentName:"li"},"The first type of dynamic threshold is the ",(0,i.kt)("strong",{parentName:"p"},"Reference point"),". It shows a single value of a calculated metric for a period of time offset from the base metric as a horizontal line."),(0,i.kt)("p",{parentName:"li"},"The second one is the ",(0,i.kt)("strong",{parentName:"p"},"Reference line")," threshold. It works on the principle of time shifting, i.e., presenting both a series of metrics/base fields and a series of reference metrics on the same (selected in the widget configuration) time interval. Only the values for the reference metric are shifted by a certain period of time in the past."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"baseline",src:a(65147).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added ",(0,i.kt)("strong",{parentName:"p"},"Stream restriction")," functionality allows the user to block access to source data to protect data. It is possible to restrict the user's access to any Data streams in the System."),(0,i.kt)("p",{parentName:"li"},"This is one of three levels of data access restriction that has been implemented in the system. The other two are ",(0,i.kt)("strong",{parentName:"p"},"User role")," (ability to restrict access to GUI elements) and ",(0,i.kt)("strong",{parentName:"p"},"Exporter groups")," (ability to limit access at the level of a single exporter)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"rbac",src:a(91910).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added functionality in the search bar to suggest values from the history."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"history",src:a(96837).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added ",(0,i.kt)("strong",{parentName:"p"},"Discovery Mode")," functionality to flexibly add new fields to the system (raw data/aggregations) for dedicated analysis and presentation of data for your environment."),(0,i.kt)("p",{parentName:"li"},"You can add a ",(0,i.kt)("strong",{parentName:"p"},"new field")," to the system based on a Sycope unrecognized (out of the box) field within the NetFlow template. New fields are added to stream netflow. You can also create an ",(0,i.kt)("strong",{parentName:"p"},"aggregation")," on a field with default metrics attached. The new aggregation appears in the system like a new stream (data is collected from the moment you save the configuration). "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"discovery_mode",src:a(60800).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new ",(0,i.kt)("strong",{parentName:"p"},"Widget")," type - ",(0,i.kt)("strong",{parentName:"p"},"Threat Trajectory")," - to increase the possibilities of graphical data presentation. The ",(0,i.kt)("strong",{parentName:"p"},"Threat Trajectory Widget")," shows threats on a timeline. It allows you to analyze threats in a so-called Time Line to trace how a particular host was attacked step by step. This significantly improves the analysis of security threats in the context of a specific attribute, such as an IP address."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"threat_trajectory",src:a(71213).Z,width:"1312",height:"956"})))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added support for 120k fps and 250k fps.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added options to backup data and system settings.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added functionality to restore the system to factory settings.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new system mode: Forward only. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added favorite views - bookmarks (filters, time, Dashboards).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added IPv6Header Mapper.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added information about the amount of space the data occupy in the system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added retention time counter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added new ways of system notification - as pop-ups and as emails sent by the system. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to duplicate Widgets from the overlay menu.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added tags in reports.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to save the filter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added functionality to suggest comparison operators depending on the type of field - the most suitable ones appear at the top of the list.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added scroll functionality and changed how the zoom data option works for the bar chart Widget type.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added functionality to perform NS lookup for a column in a table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Extended NS lookup functionality which is available in more elements in the system, for example, in tables and charts.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added opportunity to download report adhoc - Run and Download button."))))}f.isMDXComponent=!0},65147:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/baseline-7f31afc992f891faf9ee5a993b99421d.jpg"},60800:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/discovery_mode-19d79a2785dfa30a6c168445b30933f5.jpg"},96837:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/history-5d81fb323064b3e755c87b4732e1ef3f.jpg"},91910:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rbac-29cb93fbaa1b3d0092d52d3e291dcda5.jpg"},71213:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/threat_trajectory-a3ccb82c66345df1a933bd991a5f3a28.jpg"}}]);