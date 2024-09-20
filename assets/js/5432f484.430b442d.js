"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52851],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A=n.createContext({}),l=function(e){var t=n.useContext(A),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(A.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,A=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(a),m=r,u=g["".concat(A,".").concat(m)]||g[m]||d[m]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var A in t)hasOwnProperty.call(t,A)&&(s[A]=t[A]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},878607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>A,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(487462),r=a(263366),i=(a(667294),a(603905)),o=["components"],s={id:"Dashboards_",title:"Dashboards",description:"Dashboard Tab",slug:"/User-Guide/Configuration/Dashboards"},A=void 0,l={unversionedId:"User-Guide/Configuration/Dashboards_",id:"version-2.6/User-Guide/Configuration/Dashboards_",title:"Dashboards",description:"Dashboard Tab",source:"@site/versioned_docs/version-2.6/04-User-Guide/08-Configuration/01-Dashboards.md",sourceDirName:"04-User-Guide/08-Configuration",slug:"/User-Guide/Configuration/Dashboards",permalink:"/2.6/User-Guide/Configuration/Dashboards",draft:!1,tags:[],version:"2.6",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",sidebarPosition:1,frontMatter:{id:"Dashboards_",title:"Dashboards",description:"Dashboard Tab",slug:"/User-Guide/Configuration/Dashboards"},sidebar:"docs",previous:{title:"Configuration",permalink:"/2.6/User-Guide/Configuration"},next:{title:"Widgets",permalink:"/2.6/User-Guide/Configuration/Widgets"}},p={},d=[{value:"Add/Edit Dashboard",id:"addedit-dashboard",level:3},{value:"image-20230920130201036 Settings menu",id:"image-20230920130201036-settings-menu",level:4}],g={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," is a visual representation of data designed for quick analysis of the network traffic data and for informational awareness."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dashboards")," consist of ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," \u2013 objects with a graphical representation of specific data which can be added, edited, positioned, deleted or modified as you like. Sycope allows users to set up multiple ",(0,i.kt)("strong",{parentName:"p"},"Dashboards"),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dashboards")," can be combined into ",(0,i.kt)("strong",{parentName:"p"},"groups")," depending on the user's needs while a single ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," can belong to multiple ",(0,i.kt)("strong",{parentName:"p"},"groups"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dashboards/Dashboard groups")," are created and edited in the menu ",(0,i.kt)("strong",{parentName:"p"},"[Configuration > Dashboards]"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230919123239235",src:a(479482).Z,width:"1699",height:"1325"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard groups")," icons in the top menu to switch between table views (",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," view or ",(0,i.kt)("strong",{parentName:"p"},"Dashboard groups")," view)."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"image-20230919123846645",src:a(237056).Z,width:"2718",height:"784"}))),(0,i.kt)("p",null,"When you enter this menu, you will see a table with default and/or previously created user ",(0,i.kt)("strong",{parentName:"p"},"Dashboards"),"."),(0,i.kt)("p",null,"The table contains the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Select")," - the checkbox button - used for selecting for further editing "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Favorite")," - star icon - used for adding to favorites"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Home")," - home icon - used for adding to the home screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - unique Dashboard name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tags")," - assigned tags"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," - short Dashboard description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status icon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - the name of the user who shared the Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created By")," - the name of the user who created the Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creation Time")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modified By")," - the name of the user who last modified the Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modification Time")," - last modification time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"In group")," -  group/groups to which the Dashboard belongs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Actions")," - actions that can be performed on the created Dashboard",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Duplicate")," - create an editable copy of the Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Export")," - save the Dashboard to a file in JSON format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")," - edit the created Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")," - delete the selected Dashboard")))),(0,i.kt)("h3",{id:"addedit-dashboard"},"Add/Edit Dashboard"),(0,i.kt)("p",null,"To add a Dashboard, click on the ",(0,i.kt)("strong",{parentName:"p"},"Add Dashboard")," button and fill in the fields in the pop-up window. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230919124519251",src:a(73733).Z,width:"640",height:"480"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230919124728598",src:a(274910).Z,width:"639",height:"499"})),(0,i.kt)("p",null,"In the pop-up window there are the following fields to fill in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - Dashboard name (mandatory)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," - short dashboard description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tags")," - you can add tags related to the Dashboard being created")),(0,i.kt)("p",null,"After clicking ",(0,i.kt)("inlineCode",{parentName:"p"},"Apply"),", a grid board on which you can place ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," will appear."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230919124822551",src:a(914875).Z,width:"1414",height:"463"})),(0,i.kt)("p",null,"To configure the Dashboard use the ",(0,i.kt)("strong",{parentName:"p"},"top menu"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230920125859983",src:a(839751).Z,width:"355",height:"52"})),(0,i.kt)("h4",{id:"image-20230920130201036-settings-menu"},(0,i.kt)("img",{alt:"image-20230920130201036",src:a(180395).Z,width:"33",height:"27"})," Settings menu"),(0,i.kt)("p",null,"The settings menu has four options to choose from:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230919125017282",src:a(68112).Z,width:"423",height:"176"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Change name")," - you can rename the Dashboard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - you can grant permissions for a ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230919125101555",src:a(113903).Z,width:"640",height:"216"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private")," - accessible to the owner")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public")," - visible to all, but you can grant permission to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"edit"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"p"},"User roles"),". The available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"edit")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Preferences")," - you can change settings related to the layout of elements and appearance\n",(0,i.kt)("img",{alt:"image-20230919125237615",src:a(198877).Z,width:"638",height:"529"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Grid section")," - used for configuring the grid on which the ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," will be placed",(0,i.kt)("img",{alt:"image-20230919125447047",src:a(12526).Z,width:"442",height:"173"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Columns (quantity)")," - you can specify the grid number of columns "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Row height(px)")," - you can specify the height of grid rows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Arrange")," - you can specify a page layout",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Auto/Vertical/Horizontal/")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spacing between widgets")," - you can adjust the distance between ",(0,i.kt)("strong",{parentName:"li"},"Widgets")," placed on the ",(0,i.kt)("strong",{parentName:"li"},"Dashboard")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Animations")," ",(0,i.kt)("strong",{parentName:"p"},"section")," "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable/Disable")," animations switch"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Printing options")," - you can configure the printing settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Standard")," - view adapted to the monitor screen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Report")," - view adapted for printing"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20230919125403869",src:a(408509).Z,width:"398",height:"197"}))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Delete Dashboard")," - you can delete Dashboard"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230920132634368",src:a(795379).Z,width:"108",height:"29"})," - you can add ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," from the list of ",(0,i.kt)("strong",{parentName:"p"},"all")," or ",(0,i.kt)("strong",{parentName:"p"},"Favorites")," Widgets in the System",(0,i.kt)("img",{alt:"image-20230920132731818",src:a(994063).Z,width:"463",height:"869"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230920132922127",src:a(868213).Z,width:"127",height:"28"})," - to complete a configuration and save a ",(0,i.kt)("strong",{parentName:"p"},"Dashboard"),"."),(0,i.kt)("p",null,"A saved ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," is placed in the table with a list of dashboards, and it is launched by clicking on its name."))}m.isMDXComponent=!0},479482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919123239235-09a2d6aabc0ee11a8968f9e2b39aa746.png"},237056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919123846645-13b7d8dd901e9e4249600d8b2a7105be.png"},73733:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919124519251-e779ceb6f00293424662bfb66d066770.png"},274910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919124728598-f190e9e998745af795237f790f786b60.png"},914875:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919124822551-2758669ab29f5e8b97c475f87db4c72d.png"},68112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919125017282-504a20301ecc0f79c44f23549aab7d2b.png"},113903:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919125101555-1af06cc5b5ac98ff4aae4f8209a2eedc.png"},198877:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919125237615-7d58da98b5789db6ec5b42734a6bfb10.png"},408509:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919125403869-a2c1e0eade874d937749c0a260b74f82.png"},12526:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230919125447047-5ea9c1967f56948fb8ce92852608aa2e.png"},839751:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},180395:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAbCAYAAADyBeakAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIaADAAQAAAABAAAAGwAAAAD90SAnAAABnElEQVRIDe2VQU4DMQxFnYpjDN1wAoRYDOIecIp2gTjFiAWcotwDdRYVR+gGeg0IvESmZsS0TmdRFmOpauIm9vf/dhrOm48oR7bJkfOn9CMIVWFkQpk40cUh32fTILM6pKvte5TF8rBBK5aDxGoAeGqjzJ8/5b5Wr4g9s/X2r4qYuL3KAGb1RK6rKM03gPVbrr5pRV7v8u8vmyBtJW5mgvexUuqp2mMAXm3kB+SuO245qJjqvVafBhcA4hXJ0QXweJNryNL8pr8EsIsJqEVvdFfDx0Qgz8VDZkhBcYaz7D1N6gIBtSSyI8g02L1dA4I9AHWE8fWZC8Rfl5mArpVIYO+6QPAWQK2OqAawe9ZduZAQyfaZe0QJRFDVnz2JkUVZsePbPcv5PiuajpxsWxm6L5aE3vr6Eu3yu+QgAF3uoVaTAdgzGZx3M8FjdVmF1Bs0IEnsn5aVBj8ffdIVWN+3GwQBoH81FZmn/4uYeiTLIZLHmCc9Jga8AIhb1JhcsEb1JMeYoJLENs4gEDbQkLW7MYck2Xd3BKEM/QsmvgDiEK42LIcJIAAAAABJRU5ErkJggg=="},795379:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},994063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230920132731818-bbda6f30f02aebe072f6e851e8b78669.png"},868213:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);