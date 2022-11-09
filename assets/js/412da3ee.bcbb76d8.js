"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69654:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),o=["components"],l={id:"Dashboards_",title:"Dashboards"},s=void 0,p={unversionedId:"User Guide/Dashboards/Management/Dashboards_",id:"User Guide/Dashboards/Management/Dashboards_",title:"Dashboards",description:"A Dashboard is simply a visual representation of data designed for quick analysis of the network traffic data and informational awareness.",source:"@site/docs/04-User Guide/01-Dashboards/Management/Dashboards.md",sourceDirName:"04-User Guide/01-Dashboards/Management",slug:"/User Guide/Dashboards/Management/Dashboards_",permalink:"/User Guide/Dashboards/Management/Dashboards_",draft:!1,tags:[],version:"current",lastUpdatedAt:1666176445,formattedLastUpdatedAt:"19 Oct 2022",frontMatter:{id:"Dashboards_",title:"Dashboards"},sidebar:"docs",previous:{title:"Management",permalink:"/User Guide/Dashboards/Management/"},next:{title:"Widgets",permalink:"/User Guide/Dashboards/Management/Widgets"}},d={},m=[],u={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," is simply a visual representation of data designed for quick analysis of the network traffic data and informational awareness."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dashboards")," consist of ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," \u2013 an object with graphical representations of specific data, which can be added, edited, positioned, deleted or modified as you like. Sycope allows users to set up multiple ",(0,i.kt)("strong",{parentName:"p"},"Dashboards"),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dashboards")," can be combined into ",(0,i.kt)("strong",{parentName:"p"},"groups")," depending on the user's needs, and a single one can belong to multiple groups."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dashboards")," are created and edited in the menu (Dashboard>Management>",(0,i.kt)("strong",{parentName:"p"},"Dashboard"),")."),(0,i.kt)("p",null,"When you enter this menu you will see a table with default and/or previously created user Dashboards."),(0,i.kt)("p",null,"The table contains the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Select")," - checkbox button - to select for further editing "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Favourite")," - star icon -  to add to favorites"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Home")," - home icon - to add to start screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - unique Dashboard name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tags")," - assigned tags"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," - short Dashboard description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status icon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - name of the user who shared the Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Created By")," - name of the user who created the Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creation Time")," - creation time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modified By")," - name of the user who last modified the Dashboard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modification Time")," - last modification time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"In group")," -  group/groups to which the Dashboard belongs"),(0,i.kt)("li",{parentName:"ul"},"Actions - actions that can be performed on the created Dashboard",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Duplicate - create an editable copy of the Dashboard"),(0,i.kt)("li",{parentName:"ul"},"Export - save a Dashboard to a file in json format"),(0,i.kt)("li",{parentName:"ul"},"Edit - edit a created Dashboard"),(0,i.kt)("li",{parentName:"ul"},"Delete - delete a selected Dashboard")))),(0,i.kt)("p",null,"To add  a Dashboard, click on the ",(0,i.kt)("strong",{parentName:"p"},"Add Dashboard")," button. A blank table with four rows and twelve columns will be displayed. In this space you can place widgets selected from the list by clicking Add widget."),(0,i.kt)("p",null,"To configure the Dashboard, fill in the fields available after clicking  Preferences."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Name - Dashboard name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Description - short dashboard description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tag - you can add tags related to the Dashboard being created")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Grid config")," ",(0,i.kt)("strong",{parentName:"p"},"section")," - to configure the grid on which Widgets will be placed"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Columns - number of columns"),(0,i.kt)("li",{parentName:"ul"},"Row height - height of grid rows"),(0,i.kt)("li",{parentName:"ul"},"Compact",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"None/Horizontal/vertical"))),(0,i.kt)("li",{parentName:"ul"},"Disable animations switch"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Print config section")," "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Standard "),(0,i.kt)("li",{parentName:"ul"},"Raport",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Format  - page size"),(0,i.kt)("li",{parentName:"ul"},"Orientation - page orientation - landscape/Portrait"),(0,i.kt)("li",{parentName:"ul"},"DPI - resolution in DPI"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private")," - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Public")," - accessible to all")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Shared")," - accessible to one or more selected roles. Available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Execute")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"View"))))))),(0,i.kt)("p",null,"To complete a configuration and save a Dashboard, click ",(0,i.kt)("strong",{parentName:"p"},"Submit and close")," button."),(0,i.kt)("p",null,"A saved dashboard is placed in the table with the list of dashboards and it is launched by clicking on its name."))}c.isMDXComponent=!0}}]);