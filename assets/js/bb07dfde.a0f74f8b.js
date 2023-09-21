"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89035],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(a),h=r,u=c["".concat(d,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={},d="Release notes",l={unversionedId:"Release notes",id:"Release notes",title:"Release notes",description:"---",source:"@site/docs/07-Release notes.md",sourceDirName:".",slug:"/Release notes",permalink:"/Release notes",draft:!1,tags:[],version:"current",lastUpdatedAt:1695228539,formattedLastUpdatedAt:"20 Sept 2023",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"Examples of widget creation - advanced widget",permalink:"/Examples/Widgets Examples/Widget Total Traffic 15min"},next:{title:"Requirements",permalink:"/Requirements"}},p={},m=[{value:"ver. 2.4",id:"ver-24",level:3},{value:"Fixes",id:"fixes",level:4}],c={toc:m};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-notes"},"Release notes"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note!"),"\nWe kindly inform you that this update affects the standard system content. We have rebuilt components for the following Dashboard groups: DNS, HTTP, Groups and Countries. If you wish to keep any old Dashboards or their components, please duplicate them before updating. As a result, the data disk capacity requirements have been changed - now it is 180 GB."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ver-24"},"ver. 2.4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Refreshed the scenarios for Dashboard Groups: DNS, HTTP, Groups and Countries"),(0,i.kt)("p",{parentName:"li"},"We have refreshed the scenarios for ",(0,i.kt)("strong",{parentName:"p"},"Dashboard Groups"),": ",(0,i.kt)("strong",{parentName:"p"},"DNS, HTTP, Groups")," and ",(0,i.kt)("strong",{parentName:"p"},"Countries"),". Now the data on these Dashboards is presented based on specially created and configured ",(0,i.kt)("strong",{parentName:"p"},"Filtering Widgets"),". As a result, we have achieved consistency in the presentation of data on individual widgets and tabs within a Dashboard Group. All widgets within the refreshed groups from now on have a ",(0,i.kt)("strong",{parentName:"p"},"Drilldown")," option allowing the user to quickly delve into the data analysis."),(0,i.kt)("p",{parentName:"li"},"All this is so that the user can easily ",(0,i.kt)("strong",{parentName:"p"},"perform troubleshooting")," based on data from ",(0,i.kt)("strong",{parentName:"p"},"multiple data streams"),", among other things."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"optimised_dashboards",src:a(51481).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new menu layout and visual elements"),(0,i.kt)("p",{parentName:"li"},"We have refreshed the ",(0,i.kt)("strong",{parentName:"p"},"visual elements")," and ",(0,i.kt)("strong",{parentName:"p"},"simplified the navigation")," in the System so that the user can get to the needed options in the system faster. To this end, we have highlighted critical elements of the interface so that they are at hand, which greatly simplifies navigation in the system. To improve the clarity of the system, we have used new sets of icons."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"refreshed_navigation",src:a(67171).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new way to set up a service access procedure on demand (no port forward required)"),(0,i.kt)("p",{parentName:"li"},"We have improved the ",(0,i.kt)("strong",{parentName:"p"},"service access procedure on demand")," (",(0,i.kt)("strong",{parentName:"p"},"Maintenance mode"),"), now the user does not need to reconfigure his network edge devices. The process itself consists of only two steps: in the first step the user sends the ",(0,i.kt)("strong",{parentName:"p"},"challenge key")," to support and in the second one he enters the ",(0,i.kt)("strong",{parentName:"p"},"response key")," sent back. After clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")," button, the TCP connection on port 443 to the AWS instance (supportaccess.sycope.com) is established for the time specified in the ",(0,i.kt)("strong",{parentName:"p"},"Active time")," field. The user can terminate the connection at any time by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Disconnect")," button."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"maintenance_mode",src:a(51818).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new, more user-friendly way to activate the System or add the license to the System"),(0,i.kt)("p",{parentName:"li"},"We have improved the process of obtaining a license and activating the system by adding the ",(0,i.kt)("strong",{parentName:"p"},"Auto mode"),". In this mode the whole procedure comes down to entering the ",(0,i.kt)("strong",{parentName:"p"},"License serial number")," and ",(0,i.kt)("strong",{parentName:"p"},"Company ID")," and pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Get license")," button. If the server is connected to the Internet and the credentials have been entered correctly, the system is ready for use after a while."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"autolicensing",src:a(90040).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://documentation.sycope.com/NQL/NQL%20documentation"},"Nql user manual"))," to the documentation page"),(0,i.kt)("p",{parentName:"li"},"We have added an ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sycope.com/NQL/NQL%20documentation"},"NQL User manual")," to our website. This is a detailed documentation of the query language which contains descriptions of all ",(0,i.kt)("strong",{parentName:"p"},"commands")," and ",(0,i.kt)("strong",{parentName:"p"},"functions"),", including ",(0,i.kt)("strong",{parentName:"p"},"syntax")," and ",(0,i.kt)("strong",{parentName:"p"},"parameters"),". To the descriptions we have added numerous examples of use which are based on test data included by default in the System. This allows the user to check and test the operation of the commands and functions in practice right after installing Sycope."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"user_manual",src:a(20897).Z,width:"1312",height:"956"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new way to filter data in tables - plus/minus/filter(modal)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added unwind functions for Widget and rule wizards for collection type fields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added an icon for Widgets that warns and informs about errors, such as reaching defined limits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the possibility to display messages in place of the Widget when the amount of input data exceeds the defined limit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added additional options for coloring data in Widgets including tables (by metric, by ranges, by thresholds)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added new options for creating and saving Widgets from the wizard (Save as new and add to Dashboard, Create/Save and add to dashboard)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added new options for creating and saving Widgets from the Dashboard edit menu (Save as new and add to Dashboard, Create/Save and add to dashboard)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added new options in the Dashboard settings menu (Open in modal, Duplicate, Add to another Dashboard)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to edit fields and metrics from the the Widget and Rule wizard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added warning messages to the filter creator with suggestions when the wrong operator is selected ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added ",(0,i.kt)("inlineCode",{parentName:"p"},"Unapplicable")," sections to the filter creator when selecting an operator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added descriptions of operators to the filter creator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new TOS Precedence operator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the option to save table configurations (order, visibility, column widths) in user preferences ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to display threshold values (baselines) in table cells ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added icons to indicate the different types of fields in the table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to display field names from the database in the table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Changed the appearance of flyout - removed order numbers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added coloring in thresholds to help navigate between logical containers in the Rules section")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added icons for fields (fields in baseline, enumeration fields, metrics) in the Rules section")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added labels in widgets indicating the baseline set ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to add a custom label for the baseline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added new modal design for filtering data in the Searchbar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added prompts for macros in the Searchbar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a preview option of macro definitions on the hoover tooltip in the Searchbar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to block filters added in simple mode in the Searchbar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added the ability to control the size of the node for the graph Widget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the time filter, periods longer than 24 hours are based on closed time intervals"))),(0,i.kt)("h4",{id:"fixes"},"Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Problem with custom SSL certificate browser validation ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Operation of overlapping in subnet lookup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Problem with increasing space on data disk storage ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Problem with sharing Traffic Profiles configuration with other users")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Problem with changing the time zone"))))}h.isMDXComponent=!0},90040:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/autolicensing-ba54f7470747b7c6c614a2abefadbde3.jpg"},51818:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/maintenance_mode-f5a67f2d0bc6d39eef1a2f964a2f8f13.jpg"},51481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/optimised_dashboards-64ec1c110163677f553300f0d6e6c3c5.jpg"},67171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/refreshed_navigation-ffd0e4b63003dc4fce2218ae1e5badfa.jpg"},20897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/user_manual-e8d2d034c894eddf27db888423f43a0a.jpg"}}]);