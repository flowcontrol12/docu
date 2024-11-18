"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21463],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=o(a),g=r,u=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},280468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var n=a(487462),r=a(263366),i=(a(667294),a(603905)),l=["components"],d={},s="Filtering",o={unversionedId:"User-Guide/Tips/Filtering/index",id:"version-2.6/User-Guide/Tips/Filtering/index",title:"Filtering",description:"By using a single Filter you can also create more advanced filtration with the use of operators listed in the table below.",source:"@site/versioned_docs/version-2.6/04-User-Guide/12-Tips/01-Filtering/index.md",sourceDirName:"04-User-Guide/12-Tips/01-Filtering",slug:"/User-Guide/Tips/Filtering/",permalink:"/2.6/User-Guide/Tips/Filtering/",draft:!1,tags:[],version:"2.6",lastUpdatedAt:1717586417,formattedLastUpdatedAt:"5 Jun 2024",frontMatter:{},sidebar:"docs",previous:{title:"Filters",permalink:"/2.6/User-Guide/Usage/Filters"},next:{title:"NQL User Manual",permalink:"/2.6/NQL/NQL documentation"}},m={},p=[],c={toc:p};function g(e){var t=e.components,d=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"By using a single Filter you can also create more advanced filtration with the use of operators listed in the table below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"abc"),";",(0,i.kt)("inlineCode",{parentName:"td"},"*abc*")),(0,i.kt)("td",{parentName:"tr",align:null},"The search string is compared to every word in the field value, disregarding case sensitivity."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013125450803",src:a(719523).Z,width:"248",height:"89"}),(0,i.kt)("img",{alt:"image-20231013111842517",src:a(845777).Z,width:"246",height:"114"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"abc*")),(0,i.kt)("td",{parentName:"tr",align:null},"The search string is matched by any string that begins with an ",(0,i.kt)("inlineCode",{parentName:"td"},"abc")," string and is followed by zero or more characters of any type."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013112455093",src:a(596998).Z,width:"246",height:"200"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*abc")),(0,i.kt)("td",{parentName:"tr",align:null},"The search string is matched by any string that ends with an ",(0,i.kt)("inlineCode",{parentName:"td"},"abc")," string and is preceded by zero or more characters of any kind."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013112156678",src:a(454817).Z,width:"244",height:"144"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"abc"')),(0,i.kt)("td",{parentName:"tr",align:null},"The search string is matched by a string including only the exact word or phrase enclosed within the quotation marks."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013133549626",src:a(15408).Z,width:"241",height:"114"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">value")),(0,i.kt)("td",{parentName:"tr",align:null},"For numeric fields, the search string returns all records with a value greater than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013125730484",src:a(494858).Z,width:"250",height:"255"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">=value")),(0,i.kt)("td",{parentName:"tr",align:null},"For numeric fields, the search string returns all records with a value equal to or greater than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013125821160",src:a(380484).Z,width:"250",height:"286"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<value")),(0,i.kt)("td",{parentName:"tr",align:null},"For numeric fields, the search string returns all records with a value lower than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013130157932",src:a(465175).Z,width:"248",height:"234"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<=value")),(0,i.kt)("td",{parentName:"tr",align:null},"For numeric fields, the search string returns all records with a value equal to or lower than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013130106462",src:a(201788).Z,width:"245",height:"254"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">date")),(0,i.kt)("td",{parentName:"tr",align:null},"For numeric fields, the search string returns all date records with a value greater than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"data"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013132639792",src:a(125736).Z,width:"353",height:"396"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">=date")),(0,i.kt)("td",{parentName:"tr",align:null},"For numeric fields, the search string returns all date records with a value equal to or greater than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"data"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013155146569",src:a(189481).Z,width:"203",height:"228"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<date")),(0,i.kt)("td",{parentName:"tr",align:null},"For numeric fields, the search string returns all date records with a value lower than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"data"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013132852776",src:a(816898).Z,width:"250",height:"281"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<=date")),(0,i.kt)("td",{parentName:"tr",align:null},"For numeric fields, the search string returns all date records with a value equal to or lower than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"data"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013155042381",src:a(915014).Z,width:"404",height:"458"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<value1 >value2")),(0,i.kt)("td",{parentName:"tr",align:null},"Combination of two values in one search. For numeric fields, the search string returns all records with a value lower than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"value1")," ",(0,i.kt)("strong",{parentName:"td"},"and")," greater than ",(0,i.kt)("inlineCode",{parentName:"td"},"value2"),". It works analogously for the other operators and their combinations (",(0,i.kt)("inlineCode",{parentName:"td"},"<=;>="),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013133300429",src:a(659467).Z,width:"245",height:"197"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<date1 >date2")),(0,i.kt)("td",{parentName:"tr",align:null},"Combination of two date values in one search. For data value fields, the search string returns all records with a date value lower than the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"date1")," ",(0,i.kt)("strong",{parentName:"td"},"and")," greater than ",(0,i.kt)("inlineCode",{parentName:"td"},"date2"),". It works analogously for the other operators and their combinations (",(0,i.kt)("inlineCode",{parentName:"td"},"<=;>="),"),"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"image-20231013155611369",src:a(515026).Z,width:"204",height:"235"}))))))}g.isMDXComponent=!0},845777:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013111842517-aad4daca1ae7e8c6a1c9129c9614edf5.png"},454817:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013112156678-1ee2ef20f0a466060945e84d4fef4a71.png"},596998:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013112455093-7ce473b9829e0064a60bb0c68781080f.png"},719523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013125450803-d0dbce1f6c009e3bd6310a0c06868961.png"},494858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013125730484-9b906678461afa871f26b66c5b1ea722.png"},380484:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013125821160-49360e429c8f458e3749a0804e53bc6a.png"},201788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013130106462-8c866979c3d9fa38aa29d02decb5da13.png"},465175:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013130157932-222457fe020cc18c2feaf78568b93739.png"},125736:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013132639792-56d109a744d1a9ff9990b142358bfcff.png"},816898:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013132852776-d24f2cb53f91ff34570720cd7270b99b.png"},659467:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013133300429-3eb838c8f88c470711c714d62523488c.png"},15408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013133549626-82432a4a5f7a6b4154e804a7b50cb117.png"},915014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013155042381-3ab12a1a9adb751c337f178a2d51151f.png"},189481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013155146569-dfe33160dab4f42e6cb0a771e0c8bd70.png"},515026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231013155611369-4045d9f999bb9e72d53e230d3e5d886b.png"}}]);