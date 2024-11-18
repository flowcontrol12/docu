"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12708],{603905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(667294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(a),u=s,g=p["".concat(d,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},31770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=a(487462),s=a(263366),r=(a(667294),a(603905)),o=["components"],i={slug:"/Introduction/Dashboards-and-Widgets"},d="Dashboards and Widgets",l={unversionedId:"Introduction/Dashboards/index",id:"Introduction/Dashboards/index",title:"Dashboards and Widgets",description:"The Sycope system is structured as follows. The basic element that enables further construction is the widget, which allows us to present data from the system in many ways. We can place and position widgets on dashboards. In turn, we can combine dashboards into groups to make it easier to navigate between them. Here is a brief introduction to these building blocks.",source:"@site/docs/01-Introduction/03-Dashboards/index.md",sourceDirName:"01-Introduction/03-Dashboards",slug:"/Introduction/Dashboards-and-Widgets",permalink:"/Introduction/Dashboards-and-Widgets",draft:!1,tags:[],version:"current",frontMatter:{slug:"/Introduction/Dashboards-and-Widgets"},sidebar:"docs",previous:{title:"Analysis",permalink:"/Introduction/Workflows/Analysis"},next:{title:"Streams",permalink:"/Introduction/Streams"}},c={},h=[{value:"What is a Dashboard?",id:"what-is-a-dashboard",level:2},{value:"Create and Configure a Dashboard",id:"create-and-configure-a-dashboard",level:3},{value:"Groups of Dashboards",id:"groups-of-dashboards",level:3},{value:"What are Widgets?",id:"what-are-widgets",level:2},{value:"Setting Up Widgets",id:"setting-up-widgets",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],p={toc:h};function u(e){var t=e.components,i=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dashboards-and-widgets"},"Dashboards and Widgets"),(0,r.kt)("p",null,"The Sycope system is structured as follows. The basic element that enables further construction is the widget, which allows us to present data from the system in many ways. We can place and position widgets on dashboards. In turn, we can combine dashboards into groups to make it easier to navigate between them. Here is a brief introduction to these building blocks."),(0,r.kt)("h2",{id:"what-is-a-dashboard"},"What is a Dashboard?"),(0,r.kt)("p",null,"A dashboard is a flexible space that allows for the addition and arrangement of ",(0,r.kt)("a",{parentName:"p",href:"#what-are-widgets"},"widgets")," in terms of their position and size. For convenience, dashboards can be grouped, making them easier to manage."),(0,r.kt)("p",null,"Dashboards and their groups can be managed in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"[Dashboards]"))," menu.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dashboards",src:a(934676).Z,width:"1591",height:"1014"})),(0,r.kt)("p",null,"This menu includes a table with all available dashboards and groups.  "),(0,r.kt)("p",null,"By clicking on ",(0,r.kt)("strong",{parentName:"p"},"Full dashboards list")," at the bottom of the page, we go to the table view with all available dashboards."),(0,r.kt)("p",null,"The top menu allows for filtering such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Favorites")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Favorites, Custom",src:a(361114).Z,width:"3388",height:"774"})),(0,r.kt)("p",null,"In this view, you can also customize the displayed columns, such as Type, Tags, Description etc."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Table Columns",src:a(550389).Z,width:"3400",height:"866"})),(0,r.kt)("p",null,"And use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Search Field")," bar to find the necessary dashboard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search Field",src:a(609126).Z,width:"3396",height:"861"})),(0,r.kt)("h3",{id:"create-and-configure-a-dashboard"},"Create and Configure a Dashboard"),(0,r.kt)("p",null,"When creating a dashboard, we have the option to choose various ",(0,r.kt)("a",{parentName:"p",href:"#what-are-widgets"},"widgets")," from the library (the search bar helps in finding widgets), or we can create new ones according to our current needs.\nDashboards can be configured in various ways regarding the positioning of widgets, including the number of rows and columns, the arrangement of these rows and columns, and the size of margins."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Grid with Widgets",src:a(925598).Z,width:"3412",height:"1261"})),(0,r.kt)("h3",{id:"groups-of-dashboards"},"Groups of Dashboards"),(0,r.kt)("p",null,"Dashboards can be combined into groups based on user needs. A single dashboard can belong to multiple groups.\nThe system includes pre-built dashboard groups designed for specific troubleshooting scenarios, available immediately after installation."),(0,r.kt)("p",null,"Click on the dropdown menu to show all dashboards in the group."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Grouped Dashboards",src:a(390930).Z,width:"3408",height:"902"})),(0,r.kt)("p",null,"At any time, you can create your own group and organize dashboards according to your preferences."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add dashboard group",src:a(586937).Z,width:"3404",height:"584"})),(0,r.kt)("h2",{id:"what-are-widgets"},"What are Widgets?"),(0,r.kt)("p",null,"Widgets are elements that can display data from the system in various formats, such as line charts, pie charts, bar charts, tables, maps, graphs, etc.  "),(0,r.kt)("p",null,"The Sycope system has a shared widget database, meaning a widget created once can be used in multiple dashboards. Changes to a widget are reflected in all dashboards where it is used."),(0,r.kt)("p",null,"Access the Widget Library with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"[Configuration > Widgets]")),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration &gt; Widgets",src:a(388731).Z,width:"3412",height:"1244"})),(0,r.kt)("h3",{id:"setting-up-widgets"},"Setting Up Widgets"),(0,r.kt)("p",null,"Creating a widget involves three or four steps, depending on the type of visualization you choose in the first step. By default, widgets work with a single data stream, and the main step in creating a widget is selecting this data stream. What are ",(0,r.kt)("a",{parentName:"p",href:"/Introduction/Streams"},"streams"),"?."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Widget Stream",src:a(31422).Z,width:"3412",height:"1708"})),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"A step-by-step example of how to create a simple widget can be found ",(0,r.kt)("a",{parentName:"p",href:"/Examples/Widget-Example-Simple"},"here"),", and for a more detailed example including a bar chart head ",(0,r.kt)("a",{parentName:"p",href:"/Examples/Widget-Example-Advanced"},"here"),"."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"/Examples/Create-Custom-Dashboard"},"this section")," to see a step-by-step guide on how to create an easy example dashboard."))}u.isMDXComponent=!0},586937:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-dashboard-group-077009cb75d2aacfb79efd7311078ea2.png"},361114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fav-cust-08f864defe9db113edeb36a1d3e506fa.png"},925598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grid-widgets-1199c6c19a6ad9c66e9bf0727d228e76.png"},390930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grouped-dashboards-510727fa62bb953a25e0acb1f96983f2.png"},934676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kafelki_screen-5cfe9eed4c0b2be328922b8a38ea36e7.png"},609126:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/search-field-e7652f68ed1b1ab9c370f8b1de6fcbb0.png"},550389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/table-columns-da07c7fcdafb6cbe7fed1ec17db0aad6.png"},31422:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/widget-stream-9e767a50063e55ef92b7fb90df7b98f0.png"},388731:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/widgets-list-c6bf8aaaa0bfbc4f9279534c5a3677e9.png"}}]);