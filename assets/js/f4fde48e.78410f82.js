"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6002],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),m=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=m(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=m(a),N=n,d=k["".concat(u,".").concat(N)]||k[N]||s[N]||i;return a?l.createElement(d,r(r({ref:t},o),{},{components:a})):l.createElement(d,r({ref:t},o))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,r[1]=p;for(var m=2;m<i;m++)r[m]=a[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var l=a(3117),n=a(102),i=(a(7294),a(3905)),r=["components"],p={},u=void 0,m={unversionedId:"User Guide/Dashboards/Management/Widgets/Backup/Widgets1",id:"User Guide/Dashboards/Management/Widgets/Backup/Widgets1",title:"Widgets1",description:"One of the most important elements of the system are the widgets. Widgets are designed to display information of a certain kind and source, which can be a summary,  a value calculated from multiple data, a graph or a function etc.",source:"@site/docs/User Guide/Dashboards/Management/Widgets/Backup/Widgets1.md",sourceDirName:"User Guide/Dashboards/Management/Widgets/Backup",slug:"/User Guide/Dashboards/Management/Widgets/Backup/Widgets1",permalink:"/next/User Guide/Dashboards/Management/Widgets/Backup/Widgets1",draft:!1,tags:[],version:"current",lastUpdatedAt:1652267779,formattedLastUpdatedAt:"11/05/2022",frontMatter:{},sidebar:"docs",previous:{title:"Widgets",permalink:"/next/User Guide/Dashboards/Management/Widgets/Backup/Widgets"},next:{title:"Data streams",permalink:"/next/User Guide/Dashboards/Raw Data/Data_streams"}},o={},s=[{value:"Adding custom widgets",id:"adding-custom-widgets",level:2},{value:"First step - Visualization",id:"first-step---visualization",level:3},{value:"Second step - Data",id:"second-step---data",level:3},{value:"Line Visualization",id:"line-visualization",level:4},{value:"Third step - Option",id:"third-step---option",level:3}],k={toc:s};function N(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the most important elements of the system are the widgets. Widgets are designed to display information of a certain kind and source, which can be a summary,  a value calculated from multiple data, a graph or a function etc."),(0,i.kt)("p",null,"Sycope includes many different types of widgets, designed to fulfil different data display needs. You can add, remove, and customize widgets to personalize your dashboard, displaying only the data which interests you. Widgets are used to create dashboards which are views that contain multiple widgets."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"adding-custom-widgets"},"Adding custom widgets"),(0,i.kt)("p",null,"Widgets are created and edited in the menu ",(0,i.kt)("strong",{parentName:"p"},"Dashboard>Management>Widgets"),"."),(0,i.kt)("p",null,"To add a widget, click on the ",(0,i.kt)("strong",{parentName:"p"},"Add Widget")," button then the widget wizard will appear. The procedure for creating a widget consists of three or four steps depending on the visualization type selected in the first step."),(0,i.kt)("h3",{id:"first-step---visualization"},"First step - Visualization"),(0,i.kt)("p",null,"This step is the same for all visualization types. In this step you need to fill in two fields:"),(0,i.kt)("p",null,"Title - unique widget name - required field"),(0,i.kt)("p",null,"Description - short description of the widget"),(0,i.kt)("p",null,"Then select one of the visualization types."),(0,i.kt)("p",null,"The system includes the following types of visualization:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Line"),(0,i.kt)("li",{parentName:"ol"},"Scatter"),(0,i.kt)("li",{parentName:"ol"},"Bar"),(0,i.kt)("li",{parentName:"ol"},"Gauge"),(0,i.kt)("li",{parentName:"ol"},"Pie"),(0,i.kt)("li",{parentName:"ol"},"Graph"),(0,i.kt)("li",{parentName:"ol"},"Sankey"),(0,i.kt)("li",{parentName:"ol"},"Sunburst"),(0,i.kt)("li",{parentName:"ol"},"Tree"),(0,i.kt)("li",{parentName:"ol"},"KPI"),(0,i.kt)("li",{parentName:"ol"},"Table")),(0,i.kt)("p",null,"Depending on the selected visualization, the next step fields are different"),(0,i.kt)("h3",{id:"second-step---data"},"Second step - Data"),(0,i.kt)("p",null,"In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance."),(0,i.kt)("h4",{id:"line-visualization"},"Line Visualization"),(0,i.kt)("p",null,"The tabs to fill are:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Stream"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u200b\t",(0,i.kt)("em",{parentName:"li"},"Source")," - you can select a data source from the list and these are: metrics, fields, ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Filter"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u200b\tQuery",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u200b\t\tField"),(0,i.kt)("li",{parentName:"ul"},"\u200b\t\tOperator"),(0,i.kt)("li",{parentName:"ul"},"\u200b\t\tValue"))),(0,i.kt)("li",{parentName:"ul"},"Time range - default is 15 minutes "),(0,i.kt)("li",{parentName:"ul"},"Locked/Unlocked switch")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Values"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Function switch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Aggr"),(0,i.kt)("li",{parentName:"ul"},"Post aggr"),(0,i.kt)("li",{parentName:"ul"},"Field"))),(0,i.kt)("li",{parentName:"ul"},"Metric"),(0,i.kt)("li",{parentName:"ul"},"Filter",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Field"),(0,i.kt)("li",{parentName:"ul"},"Operator"),(0,i.kt)("li",{parentName:"ul"},"Value"))),(0,i.kt)("li",{parentName:"ul"},"Custom Lebel switch"),(0,i.kt)("li",{parentName:"ul"},"Number formatting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Off"),(0,i.kt)("li",{parentName:"ul"},"Currency "),(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Number"))),(0,i.kt)("li",{parentName:"ul"},"Use Default color",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By metric"),(0,i.kt)("li",{parentName:"ul"},"By series"),(0,i.kt)("li",{parentName:"ul"},"Single"))))),(0,i.kt)("li",{parentName:"ul"},"Stack",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Normal"),(0,i.kt)("li",{parentName:"ul"},"Stacked"))),(0,i.kt)("li",{parentName:"ul"},"Include null values  switch"),(0,i.kt)("li",{parentName:"ul"},"Include zero values  switch"),(0,i.kt)("li",{parentName:"ul"},"Add threshold button"),(0,i.kt)("li",{parentName:"ul"},"Show MIN marker  switch"),(0,i.kt)("li",{parentName:"ul"},"Show MAX marker  switch"),(0,i.kt)("li",{parentName:"ul"},"Show MAX line  switch"),(0,i.kt)("li",{parentName:"ul"},"Show AVG line switch"),(0,i.kt)("li",{parentName:"ul"},"Show MIN line switch")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Categories"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aggregation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Date Histogram",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Auto interval switch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Interval"))))),(0,i.kt)("li",{parentName:"ul"},"Ranges"),(0,i.kt)("li",{parentName:"ul"},"Terms"))),(0,i.kt)("li",{parentName:"ul"},"Use Function switch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Function"))),(0,i.kt)("li",{parentName:"ul"},"Field"),(0,i.kt)("li",{parentName:"ul"},"Include null values")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Split Series"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aggregation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Terms"))),(0,i.kt)("li",{parentName:"ul"},"Use Function switch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Function"))),(0,i.kt)("li",{parentName:"ul"},"Limit series switch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Limit"))),(0,i.kt)("li",{parentName:"ul"},"Split Chart")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Sorting"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sort field"),(0,i.kt)("li",{parentName:"ul"},"Sort direction",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Desc"),(0,i.kt)("li",{parentName:"ul"},"Asc")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Limit"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Limit buckets switch"),(0,i.kt)("li",{parentName:"ul"},"Limit"),(0,i.kt)("li",{parentName:"ul"},"Show from",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Head"),(0,i.kt)("li",{parentName:"ul"},"Tai\u0142"))),(0,i.kt)("li",{parentName:"ul"},"Show others switch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Others label")))),(0,i.kt)("h4",{id:""}),(0,i.kt)("h3",{id:"third-step---option"},"Third step - Option"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Limit"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hide if too much records",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Limit"),(0,i.kt)("li",{parentName:"ul"},"Message if too much records"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Axes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Switch axes switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Value axes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Show axis labels",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Show axis labels position",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Left"),(0,i.kt)("li",{parentName:"ul"},"Right"))),(0,i.kt)("li",{parentName:"ul"},"Label angle (-90deg to 90deg)"),(0,i.kt)("li",{parentName:"ul"},"Number formatting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Currency"),(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Number"),(0,i.kt)("li",{parentName:"ul"},"Off"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Custom axis name"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Custom name"),(0,i.kt)("li",{parentName:"ul"},"Label Location",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"End"),(0,i.kt)("li",{parentName:"ul"},"Center"),(0,i.kt)("li",{parentName:"ul"},"Start"))),(0,i.kt)("li",{parentName:"ul"},"Name gap from chart"),(0,i.kt)("li",{parentName:"ul"},"Name rotate deg"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Log scale")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inverse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Show data points"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Show vale labels switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Value label position"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Label angle (-90deg to 90deg)"))))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Draw area")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Category axes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Show axis labels"),(0,i.kt)("li",{parentName:"ul"},"Axis label position",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bottom"),(0,i.kt)("li",{parentName:"ul"},"Top"))),(0,i.kt)("li",{parentName:"ul"},"Label angle (-90deg to 90deg)"),(0,i.kt)("li",{parentName:"ul"},"Number Formatting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Currency"),(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Number"),(0,i.kt)("li",{parentName:"ul"},"Off"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Show all labels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Custom axis name"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Custom name"),(0,i.kt)("li",{parentName:"ul"},"Label location",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Center"),(0,i.kt)("li",{parentName:"ul"},"Left"),(0,i.kt)("li",{parentName:"ul"},"Right"))),(0,i.kt)("li",{parentName:"ul"},"Name gap from chart"),(0,i.kt)("li",{parentName:"ul"},"Name rotate deg"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Others"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NULL handling",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Show gap"),(0,i.kt)("li",{parentName:"ul"},"Connect"),(0,i.kt)("li",{parentName:"ul"},"Set zero"))),(0,i.kt)("li",{parentName:"ul"},"Show legend switch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select legend position",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bottom"),(0,i.kt)("li",{parentName:"ul"},"Left"),(0,i.kt)("li",{parentName:"ul"},"Right"),(0,i.kt)("li",{parentName:"ul"},"Top"))))),(0,i.kt)("li",{parentName:"ul"},"Data zoom switch"),(0,i.kt)("li",{parentName:"ul"},"Enable animation")))))}N.isMDXComponent=!0}}]);