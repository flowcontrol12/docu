"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54656],{603905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,u=c["".concat(l,".").concat(g)]||c[g]||m[g]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},423805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=n(487462),r=n(263366),i=(n(667294),n(603905)),o=["components"],p={slug:"/Examples/Widget-Example-Simple"},l="Widget Example: Alerts in the last 24 hours",s={unversionedId:"Examples/Widget-Examples/Widget-Example-Simple/index",id:"version-3.0.0/Examples/Widget-Examples/Widget-Example-Simple/index",title:"Widget Example: Alerts in the last 24 hours",description:"Below is an example of creating a widget.",source:"@site/versioned_docs/version-3.0.0/06-Examples/Widget-Examples/01-Widget-Example-Simple/index.md",sourceDirName:"06-Examples/Widget-Examples/01-Widget-Example-Simple",slug:"/Examples/Widget-Example-Simple",permalink:"/3.0.0/Examples/Widget-Example-Simple",draft:!1,tags:[],version:"3.0.0",frontMatter:{slug:"/Examples/Widget-Example-Simple"},sidebar:"docs",previous:{title:"Widget Examples",permalink:"/3.0.0/Examples/Widget-Examples"},next:{title:"Widget Advanced Example: Total Traffic Bytes 15 min.",permalink:"/3.0.0/Examples/Widget-Example-Advanced"}},d={},m=[],c={toc:m};function g(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"widget-example-alerts-in-the-last-24-hours"},"Widget Example: Alerts in the last 24 hours"),(0,i.kt)("p",null,"Below is an example of creating a widget.",(0,i.kt)("br",{parentName:"p"}),"\n","Our initial assumption is that we want to create a widget showing the number of ",(0,i.kt)("strong",{parentName:"p"},"security incidents in the last 24 hours"),"."),(0,i.kt)("p",null,"To create a new widget, go to the menu and navigate to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"[Configuration > Widgets]"))," and click on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Add widget"))," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add widget",src:n(627139).Z,width:"3405",height:"1295"})),(0,i.kt)("p",null,"In the widget creation window, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Visualization tab")," on the right fill in basic information: ",(0,i.kt)("strong",{parentName:"p"},"Title")," and ",(0,i.kt)("strong",{parentName:"p"},"Description"),", ",(0,i.kt)("strong",{parentName:"p"},"Tags")," and then scroll down and select the ",(0,i.kt)("strong",{parentName:"p"},"Type of Visualization"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Tab Visualization",src:n(944045).Z,width:"3405",height:"1699"})),(0,i.kt)("p",null,"Proceed further to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Data tab"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Select the appropriate data stream that contains necessary information. In this case: ",(0,i.kt)("inlineCode",{parentName:"p"},"Source > Alerts > alerts"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Source",src:n(778438).Z,width:"3405",height:"1699"})),(0,i.kt)("p",null,"For the time range, select a 24-hour interval: ",(0,i.kt)("inlineCode",{parentName:"p"},"Last 24 hours"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Time",src:n(141675).Z,width:"3405",height:"1699"})),(0,i.kt)("p",null,"In the drop-down menu ",(0,i.kt)("strong",{parentName:"p"},"Metrics"),", to calculate the number of generated alerts, select the appropriate aggregation method.",(0,i.kt)("br",{parentName:"p"}),"\n","In ",(0,i.kt)("strong",{parentName:"p"},"Field")," select ",(0,i.kt)("inlineCode",{parentName:"p"},"Alert Id")," and in ",(0,i.kt)("strong",{parentName:"p"},"Aggregation")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Unique Count"),".  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Metric Fields",src:n(896124).Z,width:"3405",height:"1699"})),(0,i.kt)("p",null,"At this stage, we already have the simplest widget showing the number of alerts in the last 24 hours, which we will soon use when creating our own ",(0,i.kt)("strong",{parentName:"p"},"Dashboard"),".  "),(0,i.kt)("p",null,"In the meantime, go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Options tab")," and check a few more options."),(0,i.kt)("p",null,"Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Warning Sign")," from the ",(0,i.kt)("strong",{parentName:"p"},"KPI Icons")," expander menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Warning Sign",src:n(970612).Z,width:"3405",height:"1699"})),(0,i.kt)("p",null,"Adjust permissions in the ",(0,i.kt)("strong",{parentName:"p"},"Privacy")," expander menu and finally, click ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Save"))," button in the lower-right corner."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Save Button",src:n(799878).Z,width:"3405",height:"1699"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Now we can move on and create a more ",(0,i.kt)("a",{parentName:"p",href:"/Examples/Widget-Example-Advanced"},"advanced widget"),".")))}g.isMDXComponent=!0},627139:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-widget-1d626cbca6120123f4ebe7a26fcc3e00.png"},896124:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metric-fields-dfeb53ada805c4a1b738f9b25954a4c6.png"},799878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/save-d8cb13f82ad1d1c3bd14b7f8aad4d7f3.png"},778438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/source-8929499fd8d00af6a3901885fee4c409.png"},141675:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/time-061d041c0d59e822dd860197d74ceddd.png"},944045:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/visualization-954f12ff557a775655e0648c49f01e0f.png"},970612:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/warning-80263f60d0089dfda24f4fc9dcea3c7f.png"}}]);