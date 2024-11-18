"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65722],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(a),c=n,m=h["".concat(d,".").concat(c)]||h[c]||A[c]||s;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},969391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>A});var r=a(487462),n=a(263366),s=(a(667294),a(603905)),i=["components"],o={id:"Dashboards",title:"Dashboards",description:"Dashboard Tab",slug:"/User-Guide/Dashboards",toc_min_heading_level:2,toc_max_heading_level:4,addressMatch:"panel/dashboards"},d="Dashboards",l={unversionedId:"User-Guide/Dashboards/Dashboards",id:"User-Guide/Dashboards/Dashboards",title:"Dashboards",description:"Dashboard Tab",source:"@site/docs/04-User-Guide/02-Dashboards/index.md",sourceDirName:"04-User-Guide/02-Dashboards",slug:"/User-Guide/Dashboards",permalink:"/User-Guide/Dashboards",draft:!1,tags:[],version:"current",frontMatter:{id:"Dashboards",title:"Dashboards",description:"Dashboard Tab",slug:"/User-Guide/Dashboards",toc_min_heading_level:2,toc_max_heading_level:4,addressMatch:"panel/dashboards"},sidebar:"docs",previous:{title:"Home",permalink:"/User-Guide/Home"},next:{title:"Quick Analysis",permalink:"/User-Guide/Quick-Analysis"}},p={},A=[{value:"Favorites",id:"favorites",level:2},{value:"Dashboard Groups",id:"dashboard-groups",level:2},{value:"Add/Edit Dashboard Group",id:"addedit-dashboard-group",level:3},{value:"Displayed columns",id:"displayed-columns",level:2},{value:"Search",id:"search",level:2},{value:"Add/Edit Dashboard",id:"addedit-dashboard",level:2},{value:"Preferences",id:"preferences",level:3},{value:"Add frame",id:"add-frame",level:3},{value:"Add widget",id:"add-widget",level:3},{value:"Save and close",id:"save-and-close",level:3}],h={toc:A};function c(e){var t=e.components,o=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dashboards"},"Dashboards"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"Dashboard")," is a visual representation of data designed for quick analysis of the network traffic data and for informational awareness."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Dashboards")," consist of ",(0,s.kt)("strong",{parentName:"p"},"Widgets")," \u2013 objects with a graphical representation of specific data which can be added, edited, positioned, deleted or modified as you like. The Sycope system allows users to set up multiple ",(0,s.kt)("strong",{parentName:"p"},"Dashboards"),". "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Dashboards")," can be combined into ",(0,s.kt)("strong",{parentName:"p"},"groups")," depending on the user's needs while a single ",(0,s.kt)("strong",{parentName:"p"},"Dashboard")," can belong to multiple ",(0,s.kt)("strong",{parentName:"p"},"groups"),"."),(0,s.kt)("p",null,"A number of ",(0,s.kt)("strong",{parentName:"p"},"Dashboard groups")," created by our specialists to implement selected troubleshooting scenarios have been built into the System. These Dashboard groups are available to the user right after the System installation."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Dashboards")," and ",(0,s.kt)("strong",{parentName:"p"},"Dashboards groups"),", both built-in and user-created, are available for use in the ",(0,s.kt)("strong",{parentName:"p"},"[Dashboards]")," menu."),(0,s.kt)("p",null,"The initial view shows a list of built-in dashboards grouped by licenses. For more on this topic check the ",(0,s.kt)("a",{parentName:"p",href:"/Introduction/Built-in-Content"},"Built-in-Content")," in the Introduction section."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboards Menu",src:a(837941).Z,width:"3407",height:"1706"})),(0,s.kt)("p",null,"After clicking on ",(0,s.kt)("strong",{parentName:"p"},"Full dashboards list")," we go to a view of all dashboards that are available in the system in a table format."),(0,s.kt)("p",null,"In the top menu, there are the following options:"),(0,s.kt)("h2",{id:"favorites"},"Favorites"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20230918094101602",src:a(510870).Z,width:"3396",height:"937"}),"\nClicking on a ",(0,s.kt)("strong",{parentName:"p"},"Favourites")," icon you can reduce the list of Dashboards/Dashboard groups and display only those marked as favorites. To add a Dashboard/Dashboard group to favorites, just click the ",(0,s.kt)("img",{alt:"image-20230918094601972",src:a(988093).Z,width:"23",height:"25"}),"icon in the Dashboards table. The white-filled ",(0,s.kt)("img",{alt:"image-20230918094537202",src:a(270465).Z,width:"24",height:"24"}),"icon indicates that the Dashboard or Dashboard group has been correctly added to favorites. "),(0,s.kt)("h2",{id:"dashboard-groups"},"Dashboard Groups"),(0,s.kt)("p",null,"Dashboards can be combined into Dashboard groups. The view in the table can be expanded to display all the dashboards located in the selected group."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboard Groups",src:a(758822).Z,width:"3407",height:"1140"})),(0,s.kt)("h3",{id:"addedit-dashboard-group"},"Add/Edit Dashboard Group"),(0,s.kt)("p",null,"To add a new ",(0,s.kt)("strong",{parentName:"p"},"Dashboard group")," or edit an existing one, go to ",(0,s.kt)("strong",{parentName:"p"},"[Dashboards]")," and click on ",(0,s.kt)("strong",{parentName:"p"},"See full dashboards list")," at the bottom of the Dashboards view."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"See full dashboards list",src:a(748178).Z,width:"3407",height:"1706"})),(0,s.kt)("p",null,"Click the dropdown menu next to ",(0,s.kt)("inlineCode",{parentName:"p"},"Add dashboard")," button and select ",(0,s.kt)("inlineCode",{parentName:"p"},"Add group"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add dashboard group",src:a(121287).Z,width:"3407",height:"770"})),(0,s.kt)("p",null,"The Dashboard Group Wizard window with the following fields will appear:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dashboard Group Wizard",src:a(530674).Z,width:"3407",height:"1706"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Name")," - unique name of the Dashboard group")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Description")," - short description")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Dashboards selector")," - Here you can choose which ",(0,s.kt)("strong",{parentName:"p"},"Dashboards")," should belong to the created group. A ",(0,s.kt)("strong",{parentName:"p"},"Dashboard")," can belong to many groups. To add a ",(0,s.kt)("strong",{parentName:"p"},"Dashboard")," to a created group, find and select it in the list and then click ",(0,s.kt)("inlineCode",{parentName:"p"},"Add selected"),"."),(0,s.kt)("p",{parentName:"li"},"To add all ",(0,s.kt)("strong",{parentName:"p"},"Dashboards")," from the list to the group click ",(0,s.kt)("inlineCode",{parentName:"p"}," Add all"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Tags")," - Tag assignment")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Privacy")," - you can grant permissions for a Widget"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Private")," - accessible to the owner"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Public")," - visible to all, but you can grant permission to:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"delete")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"edit")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Shared")," - accessible to one or more selected ",(0,s.kt)("strong",{parentName:"li"},"User roles"),". The available privileges are:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"delete")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"edit")))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Once the fields are filled in correctly and the save button is clicked, the ",(0,s.kt)("strong",{parentName:"p"},"Dashboard group")," will be created and added to the list of available groups in the System."))),(0,s.kt)("p",null,"To ",(0,s.kt)("strong",{parentName:"p"},"edit")," a ",(0,s.kt)("strong",{parentName:"p"},"Dashboard group"),", click the ",(0,s.kt)("inlineCode",{parentName:"p"},"Edit")," icon in the ",(0,s.kt)("strong",{parentName:"p"},"Action")," column."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Edit Dashboard",src:a(707115).Z,width:"3407",height:"864"})),(0,s.kt)("h2",{id:"displayed-columns"},"Displayed columns"),(0,s.kt)("p",null,"You can customize the number and type of columns which will be displayed in the table."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Displayed columns",src:a(226122).Z,width:"3407",height:"865"})),(0,s.kt)("p",null,"The following columns are available:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Type")," - an icon indicating the type of row: Dashboard, Dashboard groups"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Tags")," - assigned tags"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Description")," - short description"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Privacy")," - an icon indicating the status of the object's rights"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Shared")," - the name of the user who shared the Dashboard"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Created By")," - the name of the user who created the Dashboard"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Creation Time")," - time when the object was created"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Modified By")," - the name of the user who last modified the Dashboard"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Modification Time")," - last modification time")),(0,s.kt)("h2",{id:"search"},"Search"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20230918110834160",src:a(523132).Z,width:"229",height:"42"}),"- field where you can enter data to be searched in the table"),(0,s.kt)("h2",{id:"addedit-dashboard"},"Add/Edit Dashboard"),(0,s.kt)("p",null,"To add a Dashboard, click on the ",(0,s.kt)("strong",{parentName:"p"},"Add Dashboard")," button and fill in the fields in the pop-up window. "),(0,s.kt)("p",null,"In the pop-up window there are the following fields to fill in:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Name")," - Dashboard name (mandatory)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Description")," - short dashboard description"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Tags")," - you can add tags related to the Dashboard being created")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add Dashboard",src:a(967377).Z,width:"3407",height:"1706"})),(0,s.kt)("p",null,"After clicking ",(0,s.kt)("inlineCode",{parentName:"p"},"Save"),", a grid board on which you can place ",(0,s.kt)("strong",{parentName:"p"},"Widgets")," will appear."),(0,s.kt)("p",null,"To configure the Dashboard use the ",(0,s.kt)("strong",{parentName:"p"},"top menu"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Grid Board",src:a(596837).Z,width:"3407",height:"1706"})),(0,s.kt)("h3",{id:"preferences"},"Preferences"),(0,s.kt)("p",null,"In the Preferences menu, we can find detailed settings for our new dashboard."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Preferences",src:a(151448).Z,width:"3407",height:"1706"})),(0,s.kt)("h3",{id:"add-frame"},"Add frame"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add frame",src:a(792747).Z,width:"3404",height:"379"})),(0,s.kt)("h3",{id:"add-widget"},"Add widget"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add widget",src:a(305007).Z,width:"3404",height:"379"})),(0,s.kt)("p",null,"You can add ",(0,s.kt)("strong",{parentName:"p"},"Widgets")," from the list of ",(0,s.kt)("strong",{parentName:"p"},"all")," or ",(0,s.kt)("strong",{parentName:"p"},"Favorites")," Widgets in the System.",(0,s.kt)("br",{parentName:"p"}),"\n","Use ",(0,s.kt)("strong",{parentName:"p"},"Search Field")," to quickly find and select a widget."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Widgets",src:a(591564).Z,width:"3407",height:"1706"})),(0,s.kt)("h3",{id:"save-and-close"},"Save and close"),(0,s.kt)("p",null,"Click ",(0,s.kt)("inlineCode",{parentName:"p"},"Save and close")," to complete configuration and save a ",(0,s.kt)("strong",{parentName:"p"},"Dashboard"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Save and close",src:a(109623).Z,width:"3407",height:"377"})),(0,s.kt)("p",null,"A saved ",(0,s.kt)("strong",{parentName:"p"},"Dashboard")," is placed in the table with a list of dashboards, and it is launched by clicking on its name."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"A step-by-step example of how to create a simple widget can be found ",(0,s.kt)("a",{parentName:"p",href:"/Examples/Widget-Example-Simple"},"here"),", and for a more detailed example including a bar chart head ",(0,s.kt)("a",{parentName:"p",href:"/Examples/Widget-Example-Advanced"},"here"),"."),(0,s.kt)("p",{parentName:"admonition"},"Go to ",(0,s.kt)("a",{parentName:"p",href:"/Examples/Create-Custom-Dashboard"},"this section")," to see a step-by-step guide on how to create an easy example dashboard.")))}c.isMDXComponent=!0},967377:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Add-Dashboard-bb006f4570c69f986ff6e62f76ef6757.png"},121287:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Add-dashboard-group-859856392715dbefa2de629f87812577.png"},792747:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Add-frame-67e79615920d6a014b05536b81594d71.png"},305007:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Add-widget-58db239b5c8d966c7c8a8ad856af60b1.png"},530674:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Dashboard-Group-Wizard-db8b964605325bc65ba4dcefae280ec8.png"},758822:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Dashboard-Groups-32271d89dc8d9b3d358624be27abf111.png"},837941:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Dashboards-Menu-05f773e7d4a172f77a2b40c68e3b5577.png"},226122:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Displayed-columns-49897df2e340b1c4c2fe05e0f856c72b.png"},707115:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Edit-Dashboard-c728c47760be4b41874432b34b7f0f8f.png"},596837:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Grid-Board-0b09dd6fa3bccad100a49ec40bd486a1.png"},109623:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Save-and-close-b8e311c9e8aad3c86ad0729aec21bdc6.png"},748178:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/See-full-dashboards-list-31a70b67ef7fef40eeb6acf35f5ed1fd.png"},591564:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Widgets-c1d8bae51e7332ab18b96bcc95afbe86.png"},510870:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20230918094101602-d8f287185502ee1b6859f2cb9f1ccd73.png"},270465:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAABJklEQVRIDWPU1Qv7z0BDwERDs8FG09wCFlJ8kJkZwmBsrM1w9uxVhunT1xCllZGUOLh4YQXcUH2DCDgbH4PoIAK5Hhmg85HlkNlE+wDZ9TADiPEF3jgwNdUCm5WeHgozE4WG+eLMmWsMp09fQ5GDcbD6YM6cegZTE02YGpJoL688hqfPXsH1YI0Dcg0HmSolLQI3HMTAasHpM9dRFBHLAelDDyqsFqSkNDKQaglIPUgfOsBqAUgRKZbgMhxkDk4LQJIzZ64GUQQBKGfjAngtMDGBJFNcmmHioGSKC+C1AJcmdHFc+QSkDq8FoIKNUoDXAvT8MGPmGgZQ8QCikQG6OmQ5vBbADIIZDCuiQTSyRTB1yAbD2FiLCpgkNWi8Phi1ABQCNA8iADhmVs3CdY/8AAAAAElFTkSuQmCC"},988093:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAZCAYAAADaILXQAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAF6ADAAQAAAABAAAAGQAAAAAZ12/IAAABUUlEQVRIDe2UT04CUQzGi/EIrvQEYFATZi7BGowHIBnZeASNp4AJcwO5yQxL4AS68BLIV/KhvnklhYQFCV3Mmz/tr9/ra6fRvntcyZHs4khcxV564cNhTzqdW5nN5jIaTV1hbuXPWU/y/EOwes0Fh+pxPpWyXEhZLQXPHnPBoZal2Ee9WfM0bam4LOuraioN1VfVejfrHcWsEbZiUbxJmjR1+wjAAcYAPGD4wB/W7b7I59e33uMSVX7/8LR1sG42ZfrtGoi6vrn6B4/W3HtgTEz/sDw1+GDwrv3MAAKsleVBXGg1OBy8CXaBwYnC8QEth4ncZZxYy8eEJ0lLO8UK5Ht0kmUmPBbA3uc37A5zYJkJx5apClC0WjF51dEPk+wN52AQimFi/zMJoPSLJTCV40cFCKH8t2D9mwR+ltXG33I85L2p/BBYGHOGhxXR59Mtyw8Py4fxpd2AWAAAAABJRU5ErkJggg=="},523132:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},151448:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/preferences-da56d7c64edcee9715e03be6875da8ff.png"}}]);