"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89057],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,d=g["".concat(o,".").concat(m)]||g[m]||c[m]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},410178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),s=["components"],l={slug:"/User-Guide/Settings/Configuration/Objects/Ranges",addressMatch:"panel/saved-fields/ranges"},o="Ranges",u={unversionedId:"User-Guide/Settings/Configuration/Objects/Ranges/index",id:"version-3.0.0/User-Guide/Settings/Configuration/Objects/Ranges/index",title:"Ranges",description:"This menu [Settings > Configuration > Objects > Ranges] can be used to create custom data ranges based on fields from selected data sources.",source:"@site/versioned_docs/version-3.0.0/04-User-Guide/10-Settings/01-Configuration/02-Objects/03-Ranges/index.md",sourceDirName:"04-User-Guide/10-Settings/01-Configuration/02-Objects/03-Ranges",slug:"/User-Guide/Settings/Configuration/Objects/Ranges",permalink:"/3.0.0/User-Guide/Settings/Configuration/Objects/Ranges",draft:!1,tags:[],version:"3.0.0",frontMatter:{slug:"/User-Guide/Settings/Configuration/Objects/Ranges",addressMatch:"panel/saved-fields/ranges"},sidebar:"docs",previous:{title:"Metrics",permalink:"/3.0.0/User-Guide/Settings/Configuration/Objects/Metrics"},next:{title:"Collectors",permalink:"/3.0.0/User-Guide/Settings/Configuration/Objects/Collectors"}},p={},c=[],g={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ranges"},"Ranges"),(0,i.kt)("p",null,"This menu ",(0,i.kt)("strong",{parentName:"p"},"[Settings > Configuration > Objects > Ranges]")," can be used to create custom data ranges based on fields from selected data sources."),(0,i.kt)("p",null,"The table with the Ranges list contains the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Check box")," - select/unselect"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name")," - Range name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field")," - field from the data source selected during configuration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ranges")," - list of ranges names used to create this range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy")," - privacy status icon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," - name of the user who shared the Metric"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Edit - editing an existing Range"),(0,i.kt)("li",{parentName:"ul"},"Delete - deleting Range")))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To add a new Ranges click \u201c",(0,i.kt)("strong",{parentName:"p"},"Add ranges"),"\u201d button. After clicking on the button, a configuration window appears with the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Display name")," - Range name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source")," - the data stream that will be used to create the range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Field")," - field for selecting the data source for which the ranges will be defined"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ranges")," - range/ranges values  (format depends on selected field and data source).")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("strong",{parentName:"p"},"Add range")," button multiple number of ranges can be added as required."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Privacy")," - assigning privileges "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private")," - accessible to the owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Public")," - visible to all, but You can grant permission:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EDIT")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared - accessible to one or more selected ",(0,i.kt)("strong",{parentName:"p"},"User roles"),". Available privileges are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"))))))))}m.isMDXComponent=!0}}]);