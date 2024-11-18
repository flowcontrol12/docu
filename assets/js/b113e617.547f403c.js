"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49048],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},738149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(487462),i=n(263366),a=(n(667294),n(603905)),o=["components"],l={description:"Recipients Tab"},p=void 0,s={unversionedId:"User Guide/Configuration/Objects/Recipients",id:"version-2.4/User Guide/Configuration/Objects/Recipients",title:"Recipients",description:"Recipients Tab",source:"@site/versioned_docs/version-2.4/04-User Guide/07-Configuration/04-Objects/06-Recipients.md",sourceDirName:"04-User Guide/07-Configuration/04-Objects",slug:"/User Guide/Configuration/Objects/Recipients",permalink:"/2.4/User Guide/Configuration/Objects/Recipients",draft:!1,tags:[],version:"2.4",sidebarPosition:6,frontMatter:{description:"Recipients Tab"},sidebar:"docs",previous:{title:"Collectors",permalink:"/2.4/User Guide/Configuration/Objects/Collectors"},next:{title:"Right click actions",permalink:"/2.4/User Guide/Configuration/Objects/Right click actions"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This menu ","[Configuration>Objects>",(0,a.kt)("strong",{parentName:"p"},"Recipients"),"]"," can be used to enter the names and emails of recipients who should receive emails notifications generated by the ",(0,a.kt)("strong",{parentName:"p"},"Sycope")," system."),(0,a.kt)("p",null,"The list of ",(0,a.kt)("inlineCode",{parentName:"p"},"Recipients"),"  is in the table with the following columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name")," - unique ",(0,a.kt)("inlineCode",{parentName:"li"},"Recipient"),"  name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Email")," -  ",(0,a.kt)("inlineCode",{parentName:"li"},"Recipient")," email address "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Assigned tasks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Action"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Edit - editing an existing  ",(0,a.kt)("inlineCode",{parentName:"li"},"Recipient")),(0,a.kt)("li",{parentName:"ul"},"Duplicate - creating an editable copy of the selected  ",(0,a.kt)("inlineCode",{parentName:"li"},"Recipient")),(0,a.kt)("li",{parentName:"ul"},"Delete - deleting   ",(0,a.kt)("inlineCode",{parentName:"li"},"Recipient"))))),(0,a.kt)("p",null,"To add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Recipient")," click ",(0,a.kt)("strong",{parentName:"p"},"New recipient")," button then the wizard will appear. In the wizard window there are the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Name")," - name of the alert field in the system (user friendly)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Email")," - short field description")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Report options")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Html/Text"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Interval")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Asap/Every hour/Never/Once a day/Once a week")))))}d.isMDXComponent=!0}}]);