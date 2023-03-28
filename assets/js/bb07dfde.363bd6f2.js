"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9035],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={},s="Release notes",p={unversionedId:"Release notes",id:"Release notes",title:"Release notes",description:"ver. 2.2.2.4",source:"@site/docs/07-Release notes.md",sourceDirName:".",slug:"/Release notes",permalink:"/Release notes",draft:!1,tags:[],version:"current",lastUpdatedAt:1680017400,formattedLastUpdatedAt:"28 Mar 2023",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"Examples of widget creation - advanced widget",permalink:"/Examples/Widgets Examples/Widget Total Traffic 15min"},next:{title:"Requirements",permalink:"/Requirements"}},d={},m=[{value:"ver. 2.2.2.4",id:"ver-2224",level:3},{value:"New Features",id:"new-features",level:4},{value:"Fixes",id:"fixes",level:4},{value:"Other Changes",id:"other-changes",level:4},{value:"ver. 2.2.1",id:"ver-221",level:3}],c={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-notes"},"Release notes"),(0,i.kt)("h3",{id:"ver-2224"},"ver. 2.2.2.4"),(0,i.kt)("h4",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Statistics flyout - option to export to csv and pdf"),(0,i.kt)("li",{parentName:"ul"},"ESXi console - option to change admin password"),(0,i.kt)("li",{parentName:"ul"},"Netflow collection - option to assign profile to all exporters (check box) "),(0,i.kt)("li",{parentName:"ul"},"Baseline configuration - option to lock baseline against search bar filter"),(0,i.kt)("li",{parentName:"ul"},"SNMP lookup - MD5 and SHA1 allowed in SNMP")),(0,i.kt)("h4",{id:"fixes"},"Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operation of the cron GUI elements (weekly was misinterpreted)"),(0,i.kt)("li",{parentName:"ul"},"Full screen mode for dashboards"),(0,i.kt)("li",{parentName:"ul"},"Privacy section in Dashboard edit is now visible even when the user is not an owner"),(0,i.kt)("li",{parentName:"ul"},"Auto-commit (indexes)"),(0,i.kt)("li",{parentName:"ul"},"Memory leak in collectors "),(0,i.kt)("li",{parentName:"ul"},"Custom NetFlow fields not assigned to a profile"),(0,i.kt)("li",{parentName:"ul"},"Handling a devel license on a new machine"),(0,i.kt)("li",{parentName:"ul"},"Timeshift in recurrent baseline"),(0,i.kt)("li",{parentName:"ul"},"No license error in forwarder functionality"),(0,i.kt)("li",{parentName:"ul"},"Duplicate dashboards have empty Widgets"),(0,i.kt)("li",{parentName:"ul"},"NQL query disappears from built-in collectors"),(0,i.kt)("li",{parentName:"ul"},"Local search in bookmark\u2019s flyout"),(0,i.kt)("li",{parentName:"ul"},"Queries issue for 10 min aggregation"),(0,i.kt)("li",{parentName:"ul"},"INIT time"),(0,i.kt)("li",{parentName:"ul"},"User GUI profile elements"),(0,i.kt)("li",{parentName:"ul"},"Maintenance window GUI rendering"),(0,i.kt)("li",{parentName:"ul"},"Description changing in the custom aggregation"),(0,i.kt)("li",{parentName:"ul"},"NQL coloring memory leaks in tables"),(0,i.kt)("li",{parentName:"ul"},"Resolution of autodetection issue in baseline configuration"),(0,i.kt)("li",{parentName:"ul"},"Baseline rendering description in Widget "),(0,i.kt)("li",{parentName:"ul"},"Dashboards export option"),(0,i.kt)("li",{parentName:"ul"},"GUI elements - icons styling and search bar hiding option on Dashboards")),(0,i.kt)("h4",{id:"other-changes"},"Other Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Null fields and no field are treated the same way now"),(0,i.kt)("li",{parentName:"ul"},"The value of the maxTime parameter for default retention policies for alerts and notification partitions is now seven days")),(0,i.kt)("h3",{id:"ver-221"},"ver. 2.2.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added Baseline (dynamic threshold) functionality that allows the user to compare the same metric/field at different time offsets on a single ",(0,i.kt)("strong",{parentName:"p"},"Widget")," to perform comparative analysis in different time windows."),(0,i.kt)("p",{parentName:"li"},"The first type of dynamic threshold is the ",(0,i.kt)("strong",{parentName:"p"},"Reference point"),". It shows a single value of a calculated metric for a period of time offset from the base metric as a horizontal line."),(0,i.kt)("p",{parentName:"li"},"The second one is the ",(0,i.kt)("strong",{parentName:"p"},"Reference line")," threshold. It works on the principle of time shifting, i.e., presenting both a series of metrics/base fields and a series of reference metrics on the same (selected in the widget configuration) time interval. Only the values for the reference metric are shifted by a certain period of time in the past."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"baseline",src:a(66495).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added ",(0,i.kt)("strong",{parentName:"p"},"Stream restriction")," functionality allows the user to block access to source data to protect data. It is possible to restrict the user's access to any Data streams in the System."),(0,i.kt)("p",{parentName:"li"},"This is one of three levels of data access restriction that has been implemented in the system. The other two are ",(0,i.kt)("strong",{parentName:"p"},"User role")," (ability to restrict access to GUI elements) and ",(0,i.kt)("strong",{parentName:"p"},"Exporter groups")," (ability to limit access at the level of a single exporter)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"rbac",src:a(42700).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added functionality in the search bar to suggest values from the history."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"history",src:a(35799).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added ",(0,i.kt)("strong",{parentName:"p"},"Discovery Mode")," functionality to flexibly add new fields to the system (raw data/aggregations) for dedicated analysis and presentation of data for your environment."),(0,i.kt)("p",{parentName:"li"},"You can add a ",(0,i.kt)("strong",{parentName:"p"},"new field")," to the system based on a Sycope unrecognized (out of the box) field within the NetFlow template. New fields are added to stream netflow. You can also create an ",(0,i.kt)("strong",{parentName:"p"},"aggregation")," on a field with default metrics attached. The new aggregation appears in the system like a new stream (data is collected from the moment you save the configuration). "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"discovery_mode",src:a(19341).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new ",(0,i.kt)("strong",{parentName:"p"},"Widget")," type - ",(0,i.kt)("strong",{parentName:"p"},"Threat Trajectory")," - to increase the possibilities of graphical data presentation. The ",(0,i.kt)("strong",{parentName:"p"},"Threat Trajectory Widget")," shows threats on a timeline. It allows you to analyze threats in a so-called Time Line to trace how a particular host was attacked step by step. This significantly improves the analysis of security threats in the context of a specific attribute, such as an IP address."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"threat_trajectory",src:a(20158).Z,width:"1312",height:"956"})))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added support for 120k fps and 250k fps.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added options to backup data and system settings.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added functionality to restore the system to factory settings.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new system mode: Forward only. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added favorite views - bookmarks (filters, time, Dashboards).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added IPv6Header Mapper.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added information about the amount of space the data occupy in the system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added retention time counter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added new ways of system notification - as pop-ups and as emails sent by the system. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to duplicate Widgets from the overlay menu.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added tags in reports.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to save the filter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added functionality to suggest comparison operators depending on the type of field - the most suitable ones appear at the top of the list.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added scroll functionality and changed how the zoom data option works for the bar chart Widget type.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added functionality to perform NS lookup for a column in a table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Extended NS lookup functionality which is available in more elements in the system, for example, in tables and charts.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added opportunity to download report adhoc - Run and Download button."))))}u.isMDXComponent=!0},66495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/baseline-7f31afc992f891faf9ee5a993b99421d.jpg"},19341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/discovery_mode-19d79a2785dfa30a6c168445b30933f5.jpg"},35799:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/history-5d81fb323064b3e755c87b4732e1ef3f.jpg"},42700:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rbac-29cb93fbaa1b3d0092d52d3e291dcda5.jpg"},20158:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/threat_trajectory-a3ccb82c66345df1a933bd991a5f3a28.jpg"}}]);