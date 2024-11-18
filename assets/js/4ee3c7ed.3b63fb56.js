"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69511],{603905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var i=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),m=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=m(a),g=n,u=c["".concat(p,".").concat(g)]||c[g]||d[g]||r;return a?i.createElement(u,l(l({ref:t},o),{},{components:a})):i.createElement(u,l({ref:t},o))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var m=2;m<r;m++)l[m]=a[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var i=a(487462),n=a(263366),r=(a(667294),a(603905)),l=["components"],s={},p=void 0,m={unversionedId:"Release notes",id:"version-2.0.27/Release notes",title:"Release notes",description:"Added:",source:"@site/versioned_docs/version-2.0.27/06-Release notes.md",sourceDirName:".",slug:"/Release notes",permalink:"/2.0.27/Release notes",draft:!1,tags:[],version:"2.0.27",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"Examples of widget creation - advanced widget",permalink:"/2.0.27/Examples/Widgets/Widget Total Traffic 15min"},next:{title:"Requirements",permalink:"/2.0.27/Requirements"}},o={},d=[{value:"Added:",id:"added",level:3},{value:"Improved",id:"improved",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Others",id:"others",level:3}],c={toc:d};function g(e){var t=e.components,s=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"added"},"Added:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New fields in netflow Data Stream - clientASNumber, serverAsNumber, clientFunction, serverFunction, clientLocation, serverLocation, clientRole, serverRole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New version preAggrByAsn Data Stream - based on clientASNumber and serverAsNumber fields from IP solution address to ASNumber (new lookup)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New version of preAggrByGroup - based on fields clientFunction, serverFunction, clientLocation, serverLocation, clientRole, serverRole - added new fields groupType and direction ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New version of CSV lookup that supports large files - used for build as-asName lookup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New lookups:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ip-as: ip-as-user ","[CSV]",", ip-as-db","[MAXMIND]"," - used to build a fields clientAsNumber i serverAsNumber in netflow and  preAggrByAsn Data stream"),(0,r.kt)("li",{parentName:"ul"},"as-asName: as-asName-user","[CSV]",", as-asName-db","[CSV]"),(0,r.kt)("li",{parentName:"ul"},"Subnet Lookup  - support for  /31 i /32 masks"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New Mapper: as-asName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Diagnostic Dashboards and Widgets eg.:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707180013706",src:a(418399).Z,width:"1021",height:"487"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New tools for the menu ","[General Settings->Diagnostics]"," - tcp dump, tcp connection test, etc."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707180501767",src:a(818207).Z,width:"737",height:"490"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configuration of metrics and alert fields in one tab in the menu  ","[Configuration->Object-> Metrics]",". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707180620979",src:a(522038).Z,width:"293",height:"523"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support for advanced context menu for different types of widgets"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707181848158",src:a(221220).Z,width:"520",height:"325"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Favorites menu"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707180812336",src:a(26792).Z,width:"934",height:"586"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New design of widgets - new icons for time, streams and so on.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Button "go to raw data" for a widgets - allows you to jump directly from the widget to the ',"[Dashboards->Raw Data]"," menu."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707181149605",src:a(280332).Z,width:"245",height:"258"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For table Widget conditional coloring of cells - text or background")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the Pie Chart Widget - the ability to display a number and a percentage side by side as a label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Search and filtering in lookups table and mappers table"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707182358246",src:a(393504).Z,width:"1206",height:"355"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Option to save user preference settings in the menu ","[Personal Settings]"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707182607126",src:a(335941).Z,width:"222",height:"343"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the menu ","[Dashboards->Raw Data]"," - showing on the chart data that does not exist in the netflow stream ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Grouping fields in the alerts stream by Alert Name "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707183650946",src:a(12032).Z,width:"309",height:"300"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New wizards")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New (compact) tables design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User avatars in profile settings"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707175455762",src:a(598964).Z,width:"520",height:"446"}),"****")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ability to use mappers in alert fields"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707182840472",src:a(462442).Z,width:"338",height:"620"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ability to create mappers based on CSV lookups type"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707183958309",src:a(920895).Z,width:"338",height:"394"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ability to hide the chart in Raw Data view"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707184120173",src:a(717548).Z,width:"1075",height:"245"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Columns creator and modifier for many views")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ability to select an equation operator (>, >=, etc.) when a filter is created from table fields in the menu ","[Dashboards->Raw Data]"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707183218540",src:a(501486).Z,width:"566",height:"234"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ability to filter by calculated fields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Auth provider connection test button in the menu ","[Configuration->Account Management->Auth Providers]"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707184408722",src:a(133426).Z,width:"267",height:"585"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Label for sum of values in bar for the stacked Bar chart ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Additional columns in object tables showing relationships between objects"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707185203405",src:a(170434).Z,width:"1307",height:"232"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the object tables, links to dependent objects"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707185241880",src:a(68620).Z,width:"1313",height:"234"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Objects counter in objects tables"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707185641219",src:a(726167).Z,width:"1330",height:"311"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SNMP section in the menu ","[General Settings->Diagnostics]"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707185816289",src:a(513382).Z,width:"443",height:"580"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sharing default formatting between fields and widgets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SSH chalange-response mechanism in the menu ","[General Settings->Maintenance Mode]"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220707190116285",src:a(341339).Z,width:"488",height:"286"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Proxy support"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707183348337",src:a(244610).Z,width:"379",height:"349"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Column filtering functionalities for Widget table type"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220708124509512",src:a(208921).Z,width:"649",height:"439"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Include new versions of preaggregates in the transition between preAggry - based widgets and netflow. Can filter by fields that are not mapped one-to-one in neftlow."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220708123620565",src:a(713374).Z,width:"938",height:"460"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Filtering by Interface Index from preAggrByIfc stream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Ability to define data filtering in the field wizard - an additional field when using "Use function\u201d'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220708130729808",src:a(321276).Z,width:"342",height:"501"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Showing on the chart (grey bars) data that does not exist in the netflow in menu ","[Dashboard-Raw Data]"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220708130029103",src:a(456385).Z,width:"1124",height:"432"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'In the widget, "Metric" badge tooltip showing what data stream the widget use'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707181412085",src:a(62821).Z,width:"410",height:"413"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'In the widget, "Time"  badge tooltip showing custom time range selected by user'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220707181438630",src:a(121261).Z,width:"408",height:"409"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In table Widget conditional colouring of cells - text or background ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ability to filter by base stream and preaggregate - index selection in searchbar + modal with selection by clicking on value in widget")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the menu ","[Configuration->Update]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"release notes"),(0,r.kt)("li",{parentName:"ul"},"offline update mechanism"),(0,r.kt)("li",{parentName:"ul"},"various update path"),(0,r.kt)("li",{parentName:"ul"},"update wizard")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220707181543212",src:a(897465).Z,width:"728",height:"315"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"improved"},"Improved"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Local filtering in tables - multiselect, date picker for time columns, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Improve filtering from widgets in NQL, such as the ability to filter by lookup data"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Various privilege-related errors.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Protection against system blocking in case of disk overflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Speed of changes to alerts - false positives, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support for large numbers (>2GB) in a rules thresholds ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Flyout search engine performance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Information about logged-in user for AD authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Number formatting in tooltips")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Exporting data to CSV and pdf from table widget")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lookups operations in a query rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changing date formatting on charts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Preserving flyout width with \u201cpins\u201d"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Corrections and changes for a lookups operation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed fields: clientGroups and serverGroups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Various graphical fixes and improvements"))))}g.isMDXComponent=!0},598964:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707175455762-4a939b8345ca4654532f1a18dcfa01c9.png"},418399:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707180013706-5ff964fcede99d693a93ff5e4c7c97a0.png"},818207:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707180501767-1304d9d53bf8139d9df049481b59511f.png"},522038:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707180620979-952659c39c37f01eaa62a2e30f0853fc.png"},26792:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707180812336-c7da06e7e6455a54f0f782f820021d5f.png"},280332:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707181149605-dc100b828614d1662c9523b0a46bd15c.png"},62821:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707181412085-b42bb692ed21adf0bb9202712fb74d4c.png"},121261:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707181438630-809414a3df9706f036de119c08116c85.png"},897465:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707181543212-34f86ac70601608a53303fb542b9d9f2.png"},221220:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707181848158-e090026c30ca4ce7035d50119c26eb5e.png"},393504:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707182358246-9307234a408f8f618587b571f1b9731f.png"},335941:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707182607126-d81b0f08b2fc61a7f825fecaf2692c65.png"},462442:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707182840472-239514f9c7470042fb79a05341f07f22.png"},501486:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707183218540-34fc377be910a79dc34e5df93ac4649e.png"},244610:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707183348337-3c32c28b2bca58a5160ad315259c1136.png"},12032:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707183650946-cb6a2b85098bb8229de5aaf6ec4d995e.png"},920895:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707183958309-23a3e9deac751ed60302aa6345a4043d.png"},717548:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707184120173-82f2cfc554e15ccd6485424f94297a2e.png"},133426:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707184408722-4122cc2afeaf910d37b3efdf3db3da87.png"},170434:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707185203405-281258d780402f2b48d9406e776104e9.png"},68620:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707185241880-e141925fd2086d7e1da47d08d1550630.png"},726167:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707185641219-b2b8f3e174c9a0beb600d0aeba6c8062.png"},513382:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707185816289-2b120f3ba64636cd770bde6798956f9d.png"},341339:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220707190116285-561a8b05fdf54ff4b5fc153fc31f8003.png"},713374:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220708123620565-de30afd7de222a178e85b732f25d0bea.png"},208921:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220708124509512-252036da60a2f0a5e601dc6c70710bd6.png"},456385:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220708130029103-73a1ada26bb2abf554e5660966dbf19c.png"},321276:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-20220708130729808-580a12ec9b234792f5829870a9539eb3.png"}}]);