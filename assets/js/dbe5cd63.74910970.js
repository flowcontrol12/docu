"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=m(a),N=r,c=k["".concat(o,".").concat(N)]||k[N]||s[N]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],p={},o=void 0,m={unversionedId:"User Guide/Configuration/NetFlow/Netflow/Netflow",id:"User Guide/Configuration/NetFlow/Netflow/Netflow",title:"Netflow",description:"This menu [Configuration>IntegrationsExternal Destinations] - can be used to create \u2026",source:"@site/docs/User Guide/Configuration/NetFlow/Netflow/Netflow.md",sourceDirName:"User Guide/Configuration/NetFlow/Netflow",slug:"/User Guide/Configuration/NetFlow/Netflow/",permalink:"/next/User Guide/Configuration/NetFlow/Netflow/",draft:!1,tags:[],version:"current",lastUpdatedAt:1652267779,formattedLastUpdatedAt:"5/11/2022",frontMatter:{}},u={},s=[],k={toc:s};function N(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This menu ","[Configuration>Integrations",(0,l.kt)("strong",{parentName:"p"},"External Destinations"),"]"," - can be used to create \u2026"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Simple mode")),(0,l.kt)("p",null,"In this menu, enter the port number for the NetFlow (",(0,l.kt)("strong",{parentName:"p"},"Netflow Port"),"), the default port is 2055."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Advanced mode")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Netflow Port")),(0,l.kt)("p",null,"The list of ",(0,l.kt)("strong",{parentName:"p"},"External Destinations")," is in the table with the following columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Profile")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Exporters IP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Edit - edit selected ",(0,l.kt)("strong",{parentName:"li"},"Profile")),(0,l.kt)("li",{parentName:"ul"},"Delete - delete selected ",(0,l.kt)("strong",{parentName:"li"},"Profile"))))),(0,l.kt)("p",null,"To add a new ",(0,l.kt)("strong",{parentName:"p"},"External Destinations")," click ",(0,l.kt)("strong",{parentName:"p"},"New external destinations")," button then the ",(0,l.kt)("strong",{parentName:"p"},"New external destinations")," wizard will appear. "),(0,l.kt)("p",null,"At first, you have to choose the type of ",(0,l.kt)("strong",{parentName:"p"},"External Destination"),". There are currently two types of external destinations available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Macmon,"),(0,l.kt)("li",{parentName:"ul"},"Syslog.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"For Macmon you need to fill the following form:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type")," ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Active")," switch button - ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Ip"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Port"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Protocol")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HTTPS"),(0,l.kt)("li",{parentName:"ul"},"HTTP"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"User name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"User password"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Api version"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Public permissions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Delete"),(0,l.kt)("li",{parentName:"ul"},"Edit"),(0,l.kt)("li",{parentName:"ul"},"Execute"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Edit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Execute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View"))))))),(0,l.kt)("p",null,"You can check if the configuration is correct by pressing the ",(0,l.kt)("strong",{parentName:"p"},"Test connection button"),"."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"For ",(0,l.kt)("strong",{parentName:"p"},"Syslog")," you need to fill the following form:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type")," ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Active")," switch button - ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Deastinations")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Host"),(0,l.kt)("li",{parentName:"ul"},"Port"),(0,l.kt)("li",{parentName:"ul"},"Protocol",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TCP"),(0,l.kt)("li",{parentName:"ul"},"UDP"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Private - accessible to the owner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Public - accessible to all. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Public permissions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Delete"),(0,l.kt)("li",{parentName:"ul"},"Edit"),(0,l.kt)("li",{parentName:"ul"},"Execute"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected roles. Available privileges are:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Edit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Execute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View"))))))))}N.isMDXComponent=!0}}]);