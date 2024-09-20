"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39907],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},147908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),o=["components"],l={description:"Backup and Restore Tab"},s=void 0,p={unversionedId:"User Guide/Configuration/General Settings/Backup and Restore",id:"version-2.2.2/User Guide/Configuration/General Settings/Backup and Restore",title:"Backup and Restore",description:"Backup and Restore Tab",source:"@site/versioned_docs/version-2.2.2/04-User Guide/Configuration/01-General Settings/06-Backup and Restore.md",sourceDirName:"04-User Guide/Configuration/01-General Settings",slug:"/User Guide/Configuration/General Settings/Backup and Restore",permalink:"/2.2.2/User Guide/Configuration/General Settings/Backup and Restore",draft:!1,tags:[],version:"2.2.2",lastUpdatedAt:1682340126,formattedLastUpdatedAt:"24 Apr 2023",sidebarPosition:6,frontMatter:{description:"Backup and Restore Tab"},sidebar:"docs",previous:{title:"Retention",permalink:"/2.2.2/User Guide/Configuration/General Settings/Retention"},next:{title:"Account Management",permalink:"/2.2.2/User Guide/Configuration/Account Management/"}},c={},u=[],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This menu ","[Configuration>General Settings >",(0,i.kt)("strong",{parentName:"p"},"Backup & Restore"),"]"," can be used for managing backups."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Backup schedules")," section"),(0,i.kt)("p",null,"Here you can create backup schedules. To do this, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"New backup schedule")," button - the backup schedule creation wizard will appear."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221222130259009",src:n(31441).Z,width:"689",height:"350"})),(0,i.kt)("p",null,"After selecting and filling in the appropriate fields and saving with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," button, the schedule will appear in the table. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221222130352446",src:n(9400).Z,width:"591",height:"128"})),(0,i.kt)("p",null,"The table has the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Frequency")," - backup frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active")," - schedule backup status - active/not active"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Actions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Run backup now")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete"))))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Remote backups")," section"),(0,i.kt)("p",null,"This section will find a table with a list of successfully executed backups. To restore the backup, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Restore")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," column."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"FTP servers are configured in the menu ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration->Integrations->FTP"),"]",".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221222160354725",src:n(41943).Z,width:"805",height:"604"})))}m.isMDXComponent=!0},31441:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221222130259009-b111bdf370b466322764e1a7688f52ae.png"},9400:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221222130352446-bcf0df14f540d7875db7a88d7b753996.png"},41943:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20221222160354725-0171973064c70aa713662bfdfd80a026.png"}}]);