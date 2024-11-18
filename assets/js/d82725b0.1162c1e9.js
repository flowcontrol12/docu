"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96195],{603905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),A=c(n),u=r,m=A["".concat(s,".").concat(u)]||A[u]||p[u]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=A;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},80311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(487462),r=n(263366),o=(n(667294),n(603905)),i=["components"],l={},s="Playground",c={unversionedId:"User Guide/Playground/Playground",id:"version-2.3/User Guide/Playground/Playground",title:"Playground",description:"The Playground functionality is used to test the NQL language. You can now easily test how your search bar query looks and what results it produces.",source:"@site/versioned_docs/version-2.3/04-User Guide/Playground/Playground.md",sourceDirName:"04-User Guide/Playground",slug:"/User Guide/Playground/",permalink:"/2.3/User Guide/Playground/",draft:!1,tags:[],version:"2.3",frontMatter:{},sidebar:"docs",previous:{title:"Licenses",permalink:"/2.3/User Guide/Configuration/Licenses"},next:{title:"NQL User Manual",permalink:"/2.3/NQL/NQL documentation"}},d={},p=[{value:"Stats tab",id:"stats-tab",level:4},{value:"Read-only mode",id:"read-only-mode",level:2},{value:"Manual mode",id:"manual-mode",level:2}],A={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},A,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"playground"},"Playground"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Playground")," functionality is used to test the ",(0,o.kt)("strong",{parentName:"p"},"NQL")," language. You can now easily test how your search bar query looks and what results it produces. "),(0,o.kt)("p",null,"You can either create plain NQL code from scratch or use examples from the ",(0,o.kt)("a",{parentName:"p",href:"https://documentation.sycope.com/NQL/NQL_examples"},"NQL examples")," page by copying them one-to-one to the playground window and observe the result by clicking the ",(0,o.kt)("strong",{parentName:"p"},"test")," button."),(0,o.kt)("p",null,"For learning purposes, we have prepared a special test stream called ",(0,o.kt)("inlineCode",{parentName:"p"},"testdata")," so that the user can more easily understand the syntax and commands of the NQL language."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Playground")," is accessible from the ",(0,o.kt)("strong",{parentName:"p"},"Dashboards")," menu but also from the ",(0,o.kt)("strong",{parentName:"p"},"Search Bar"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230731110438707",src:n(745041).Z,width:"3672",height:"1366"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"menu master",src:n(801106).Z,width:"264",height:"483"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Playground's")," main window looks like in the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230731105234533",src:n(103374).Z,width:"1459",height:"1185"})),(0,o.kt)("h4",{id:"stats-tab"},"Stats tab"),(0,o.kt)("p",null,"In the Stats tab you will find the statistics of the query."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230731105823000",src:n(421083).Z,width:"361",height:"179"})),(0,o.kt)("h2",{id:"read-only-mode"},"Read-only mode"),(0,o.kt)("p",null,"When launched, the ",(0,o.kt)("strong",{parentName:"p"},"Playground")," components are in read-only mode. This means that the NQL that shows up in the ",(0,o.kt)("strong",{parentName:"p"},"Query")," field is built through the ",(0,o.kt)("strong",{parentName:"p"},"Search Bar")," at the top of the window. By changing the data source with the ",(0,o.kt)("img",{alt:"menu master",src:n(970124).Z,width:"109",height:"28"})," option\nor by adding more filters via the ",(0,o.kt)("img",{alt:"image-20230731110008339",src:n(108553).Z,width:"38",height:"25"})," icon they will be added to the created NQL."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"menu master",src:n(5247).Z,width:"1042",height:"140"})),(0,o.kt)("p",null,"To execute the NQL code, click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," button. The result will be shown in two variants: as a table (",(0,o.kt)("inlineCode",{parentName:"p"},"Table"),") and in JSON format (",(0,o.kt)("inlineCode",{parentName:"p"},"Raw"),"). When selecting a table, there is an option to select the columns to be shown. It is also possible to export the table by clicking ",(0,o.kt)("img",{alt:"menu master",src:n(619316).Z,width:"22",height:"21"}),". "),(0,o.kt)("h2",{id:"manual-mode"},"Manual mode"),(0,o.kt)("p",null,"When you click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit query")," button, the playground goes into ",(0,o.kt)("strong",{parentName:"p"},"manual mode"),". The ",(0,o.kt)("strong",{parentName:"p"},"Search Bar")," field is now inactive while the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," field can be edited and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Source in nql"),' switch is active.\nIn this mode, you can enter the NQL code "by hand" or copy it from the ready examples in the documentation ',(0,o.kt)("a",{parentName:"p",href:"https://documentation.sycope.com/NQL/NQL_examples"},"NQL examples")," and execute it by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," button. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Source in nql")," switch in enabled mode means that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," field contains the full NQL code, along with the specified source. Disabling it makes it necessary to select the data source from the drop-down menu and the NQL code itself in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," field must start with another command after selecting the source (you should omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," command in this case)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("u",null,"Example"))),(0,o.kt)("p",null,"\u200b\tNQL code with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Source in nql")," switch enabled can look like this:"),(0,o.kt)("p",null,"\u200b\t",(0,o.kt)("inlineCode",{parentName:"p"},'src stream="alerts" | alertSeverity = "High" and alertComment = null | sort timestamp | limit 100')),(0,o.kt)("p",null,"\u200b\tWhen the ",(0,o.kt)("inlineCode",{parentName:"p"},"Source in nql")," switch is disabled and the ",(0,o.kt)("inlineCode",{parentName:"p"},"alerts")," source is selected in the source selection field, it must look like this:"),(0,o.kt)("p",null,"\u200b\t",(0,o.kt)("inlineCode",{parentName:"p"},'alertSeverity = "High" and alertComment = null | sort timestamp | limit 100')),(0,o.kt)("p",null,"\u200b\tIn both cases, after clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," button, the results should be the same."))}u.isMDXComponent=!0},103374:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230731105234533-8e323fb120dc1c40cd0b64e48baba2f8.png"},421083:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230731105823000-bc3a0e9745e2ba23dfc865e6b0eda90b.png"},108553:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAZCAYAAABdEVzWAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJqADAAQAAAABAAAAGQAAAACngw8MAAABvElEQVRIDe1VvU4CQRCeM3YKSAyJCYafk6gNibEQOjUmnOEl7HkJn0BLejttrYRKaxpbkjt/KAiI76D3XbKXWXJ7txtPQsEkl52dv/12ZnbO8t6nP7SEtLaEmAJIK2CmlVk3dYiz7z09x6ljdbVahfb8T1CqwPr9Fym4OERnhe/N7XVoqgXs4f6Rms1jKld2Q0cV47ROjcF57gd1/Y+TVvMPhy5NJl/cT8m7cwcoDRMUWsASYoTqTueKUBLTXsNleH8hYKrAENwUHC6By6AFOGn1GHdI4gW4bvcuMHUuzyJd0Fc9PBa7LDW9ME41YyKoAKcqK7IE4AClAm7xfyVe32z2LeKH62g0pnw+R5nMRigDY1kWtdsXVLVLklxsgtfmA2j5ZRIAROm4TNjzVSpltVqibHaT6wN+PJ5SobBNxeKOpAOw3FZWkvENMgcA3ttnKEYW0YfQxZEE7KRxFGk7GLxSvX5IDX+WmRImOgem6/8vPaZ7eJzdChiyYzJ4F5Yx/hqTGh+XkJofgihynHPaP7CjVFoyjA3VIFUFkOaYyuiv8gBYwniYP2MhwOYP1dkvrMd0wHCbFTCeDR3+F59Mi49tICNqAAAAAElFTkSuQmCC"},745041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230731110438707-29bd33ceac88f38d60509095d5fd69c9.png"},801106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playground-menu-9908c22825e86cbc5496d00d76763d4a.png"},970124:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAcCAIAAADk5KZlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQNSURBVGhD7ZrRS1NxFMf3hxS9RuCeo6BX9+BL1H3wyXBvG3sI0oFZOkh7KKNBZUTQWKEYW4W1ytYKHMX0QZRGIWsD5UrJHszrout1+uv722/dXY8Xd7ddjNouH2T33PO7Bz78zu8MpuOIc/CQ65e9tDmlZsNx+NQssdA4pEYz4DjUrhALjUNqNAMOosAWSI1moOXRHloe7aHl0R5q9rj8fdsd0EiQQGo0A7V5PD+i7ezsLH/bJnECqWGB8XhGjt8iwX+J2jxiM0682YJKCCWPjJAaFkhkGcs+JcG/QLvLc+LkORI0gqfIIUFQ3WO7Z/PVh60P80XoW9/YOXZGFSqxKxEcebhF8gGpYYF6PPoji9nEOAk2iKIU1tc3JKmHxAWI4ykgcVDdI05DWEt/5cfi8S5VBKXeTWHz40JRz9QhNSxQj8frswWWS5Bggzx79p5vFzOVQiKeIoc8Apb6WhyLxl7GJv2xsQ252J56UIfU2IVvcjpXUIsMl7ryKeQTcaNH79BzWVF5AlPW5ieCrtLC8bT2JXI/linweCaBW/6Soqb+1NT0ayS4bszJP8urZh5cLL2qHkxV7i8RmHgMvyhG3paZmCq37eBdvvv0nJGHGs5KU4mA1NhFX3ImGR3olFzucHxJY/m5AR6vePRMrTJ1bWZsVHL2eoIpWdW+hL2IR3PcmpwIuzskV4dX8gVDCwW2lPL3Bf2+3jZncDrPlLnx0qrJe32GirVDVFaVCEw8PnpZfPKuzON4xaPYfTgQ0dS43WdqkxoEl3v0XiQZi0QHLqdkJkd5UPcYnlGY/DJQSR7LwbVfeFxJuf/Ewe6+DsSWmLqUGuqsJDSCrrL/0u2qEoGlvgY4DdHIANsQL4VE/CU5OqSGEXc4pxSZsiJnM6v4wKhH/oGppW4V8AbnOfCozIaNr6Lnow9fngoML88khzoqaXUjVIprf4nAxOP8Ih/NmWVu6nNu++hpHsQ8gUFxRGLa4BZPcUrqq4yQGgYC8RWWT46Wb32pvNl+zCfDvFsrDEtWPAo676OEmp6k8boQKqtKBCYee25ql+5sCvrvlGeLPql19kZ0SA0DXuhQcwkP/zwcSmNoEI/ifFyNX8WRh9vegbFU9BqP7/U49LHA8p+w9XBctjlHQ2P86MSSUFrDIDJmNkJ39yCJmGK1r2uC1DDiuoLRwYcqLiW9KBepRz6vp+TSLC4lrcmxK+U5Qzy2+RJZvAppGFZdk/NrpXzcqquxy4a0A8HEY+lUtXqh2clyQGrsBdPWU2UgeN0XquYApPGuL992DvsvBMT3pAPGxCMaFhPZIqbdTWo0AyYeMT3O9ljFdNSQGs1Ao32NZLIckBrNwEHPmf+Vlkd7aHm0B0fr92tbaP0/hR04pd/tzE56byTlMQAAAABJRU5ErkJggg=="},5247:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playground-searchbar-a29fb58140b5e13f411429f110779c57.png"},619316:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAIAAADNQonCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ6SURBVDhPY1RQtGegDDBBaQzgWD/74u0D929v2VJvARXCAdCMkLTycnHUBTIyi2NU2Z+cO/aETTsmuYqBQdbSzj/QQhuiChUgeyR8+rFkDwk2BoZfjy8/F9OVf7zCwfXb7PtJ8q+ffOGTEWJnYPj5ZE+9XctKqHooQHJFmrmVBMPVpRNXXv4lpiz58/L6NqDtLXNnH3/LLsT26sDigqW3GWQs/JKgyuGABUoDwetfPxnYZOXZfPx9KqBCQHCiLfpEG4ghWbw2nJ3h7etbYGEkgOSK9RM3XP7Fp2eeCuZpx9es3bFw946pE+JVwQJ2RspsP89sKzgC5iEDYFgAUeKCWx///AeCH1dX2Cra27af/QjkfP388SuQ+ny0PUJBMWLW1Z8gFX8+X1lQDtEFQRAj5pz9+v/Hg7MbFkzwBouuuPn//6vj5SB2175X///f3AJWllI+bcvRBz///7k1C6wMgiAe4WEHBjcDw8dXz8FcEgHEpMTVD35APHKJZI9Ag3N/WbyGqkPvmV/s8qoeDAyPZxVFNe459+TtqydXNzYWRs8Cus5OW4bt5+WVdqo+Po0nILogAClp2dQcWuQidm2lq8/0x1AhFJC6aEuVza/9xUFJ66EiEIAUqWpC/ED7r90Om7f84pVdFzfmO4JELRo3brlxHcgt/fnw+U8GHn4ZsGIkgJzAvSccyveXASXw13e/8CkLwRP441tvxdQkQQn8xaFeq7rZUPVQgJbZVR0D5dlfXN1x3GvtlVijd+f2/9RxVH6+Uim+QtfCX/bXuW3nMP2Is7wAZvYJMap8DF+uLmlBCz80gNMI4gFScJILqGAEIzC9QZnkAQYGAAJWK+3NnB4gAAAAAElFTkSuQmCC"}}]);