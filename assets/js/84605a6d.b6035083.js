"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20303],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},585036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),l=["components"],o={description:"Ranges Tab"},s=void 0,p={unversionedId:"User Guide/Configuration/Objects/Ranges",id:"version-2.2.1/User Guide/Configuration/Objects/Ranges",title:"Ranges",description:"Ranges Tab",source:"@site/versioned_docs/version-2.2.1/04-User Guide/Configuration/04-Objects/04-Ranges.md",sourceDirName:"04-User Guide/Configuration/04-Objects",slug:"/User Guide/Configuration/Objects/Ranges",permalink:"/2.2.1/User Guide/Configuration/Objects/Ranges",draft:!1,tags:[],version:"2.2.1",lastUpdatedAt:1678707866,formattedLastUpdatedAt:"13 Mar 2023",sidebarPosition:4,frontMatter:{description:"Ranges Tab"},sidebar:"docs",previous:{title:"Alert fields",permalink:"/2.2.1/User Guide/Configuration/Objects/Alert fields"},next:{title:"Collectors",permalink:"/2.2.1/User Guide/Configuration/Objects/Collectors"}},u={},c=[],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>Objects>",(0,i.kt)("strong",{parentName:"p"},"Ranges"),"]"," can be used to create custom data ranges based on fields from selected data sources."),(0,i.kt)("p",null,"The table with the Ranges list contains the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Check box")," - select/unselect"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - Range name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field")," - field from the data source selected during configuration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ranges")," - list of ranges names used to create this range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status icon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - name of the user who shared the Metric"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Edit - editing an existing Range"),(0,i.kt)("li",{parentName:"ul"},"Delete - deleting Range")))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To add a new Ranges click \u201c",(0,i.kt)("strong",{parentName:"p"},"Add ranges"),"\u201d button. After clicking on the button, a configuration window appears with the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Display name")," - Range name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source")," - the data stream that will be used to create the range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field")," - field for selecting the data source for which the ranges will be defined"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ranges")," - range/ranges values  (format depends on selected field and data source).")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("strong",{parentName:"p"},"Add range")," button multiple number of ranges can be added as required."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private")," - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Public")," - visible to all, but You can grant permission:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"p"},"User roles"),". Available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))))}g.isMDXComponent=!0}}]);