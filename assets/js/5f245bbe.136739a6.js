(self.webpackChunk=self.webpackChunk||[]).push([[591],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6392:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>c});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=["components"],i={},p=void 0,s={unversionedId:"Requirements",id:"Requirements",isDocsHomePage:!1,title:"Requirements",description:"With purchase of FlowControl system, you receive OVA file required for deployment of the software. Please ensure that the file is available for installation process.",source:"@site/docs/06-Requirements.md",sourceDirName:".",slug:"/Requirements",permalink:"/docu/Requirements",version:"current",lastUpdatedBy:"fcadmin",lastUpdatedAt:1630420395,formattedLastUpdatedAt:"8/31/2021",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"CLI commands",permalink:"/docu/CLI commands"},next:{title:"Release notes",permalink:"/docu/Release notes"}},u=[],m={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"With purchase of FlowControl system, you receive ",(0,l.kt)("strong",{parentName:"p"},"OVA file")," required for deployment of the software. Please ensure that the file is available for installation process."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Server requirements")),(0,l.kt)("p",null,"The table below lists the required server hardware parameters for desired flow limits (Tab.1.)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Raw Flow Capacity"),(0,l.kt)("th",{parentName:"tr",align:null},"30K fps"),(0,l.kt)("th",{parentName:"tr",align:null},"60K fps"),(0,l.kt)("th",{parentName:"tr",align:null},"120K fps"),(0,l.kt)("th",{parentName:"tr",align:null},"250K fps"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vCPU"),(0,l.kt)("td",{parentName:"tr",align:null},"8-16 x vCPU (4-8 cores per socket)"),(0,l.kt)("td",{parentName:"tr",align:null},"16-24 x vCPU (8-12 cores per socket)"),(0,l.kt)("td",{parentName:"tr",align:null},"24-32 x vCPU (12-16 cores per socket)"),(0,l.kt)("td",{parentName:"tr",align:null},"32-40 x vCPU (16-20 cores per socket)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Memory"),(0,l.kt)("td",{parentName:"tr",align:null},"16-32 GB RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB RAM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raw Disk Capacity (System)"),(0,l.kt)("td",{parentName:"tr",align:null},"230 GB SSD"),(0,l.kt)("td",{parentName:"tr",align:null},"230 GB SSD"),(0,l.kt)("td",{parentName:"tr",align:null},"230 GB SSD"),(0,l.kt)("td",{parentName:"tr",align:null},"230 GB SSD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raw Disk Capacity (Archive)"),(0,l.kt)("td",{parentName:"tr",align:null},"500GB HDD2"),(0,l.kt)("td",{parentName:"tr",align:null},"1TB HDD2"),(0,l.kt)("td",{parentName:"tr",align:null},"2TB HDD2"),(0,l.kt)("td",{parentName:"tr",align:null},"2TB HDD2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interface"),(0,l.kt)("td",{parentName:"tr",align:null},"1x1Gb/s Interface"),(0,l.kt)("td",{parentName:"tr",align:null},"1x1Gb/s Interface"),(0,l.kt)("td",{parentName:"tr",align:null},"1x1Gb/s Interface"),(0,l.kt)("td",{parentName:"tr",align:null},"1x1Gb/s Interface")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Tab.1 FlowControl hardware requirements")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Attention"),": "),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"System drive should be located on the SSD partition."),(0,l.kt)("li",{parentName:"ol"},"Supported Hypervisor VMware ESXi 6.5+."),(0,l.kt)("li",{parentName:"ol"},"Please note that all vCPUs should be divided between 2 sockets, e.g for option with 60k FPS, that has 16 vCPUs, there will be 8 vCPUs per socket."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Client workstation requirement parameters.")," "),(0,l.kt)("p",null,"Any devices with the following web browsers in the latest version :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Firefox")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Chrome")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Edge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Opera"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Attention:")),(0,l.kt)("p",{parentName:"blockquote"},"System does not support devices with touch screens.")))}c.isMDXComponent=!0}}]);