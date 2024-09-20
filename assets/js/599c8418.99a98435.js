"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15448],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,g=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},128327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(487462),r=a(263366),i=(a(667294),a(603905)),o=["components"],s={},l="Example of field creation - bytes field",p={unversionedId:"Examples/Fields - creation example",id:"version-2.1.0/Examples/Fields - creation example",title:"Example of field creation - bytes field",description:"Creating a new field is nothing more than mathematical operations on one or more fields in a single row of the database and saving the result under the new field name.",source:"@site/versioned_docs/version-2.1.0/05-Examples/Fields - creation example.md",sourceDirName:"05-Examples",slug:"/Examples/Fields - creation example",permalink:"/2.1.0/Examples/Fields - creation example",draft:!1,tags:[],version:"2.1.0",lastUpdatedAt:1673276180,formattedLastUpdatedAt:"9 Jan 2023",frontMatter:{},sidebar:"docs",previous:{title:"Example of Collector creation",permalink:"/2.1.0/Examples/Collector - creation example"},next:{title:"Example of advanced field creation - use of mapper - Application Name",permalink:"/2.1.0/Examples/Fields advanced - creation example"}},m={},c=[{value:"Implementation",id:"implementation",level:2}],d={toc:c};function f(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-of-field-creation---bytes-field"},"Example of field creation - bytes field"),(0,i.kt)("p",null,"Creating a ",(0,i.kt)("strong",{parentName:"p"},"new field")," is nothing more than mathematical operations on one or more fields in a single row of the database and saving the result under the new field name."),(0,i.kt)("p",null,"In the system we have fields ",(0,i.kt)("strong",{parentName:"p"},"clientBytes")," (number of bytes sent as client) and ",(0,i.kt)("strong",{parentName:"p"},"serverBytes")," (number of bytes sent as server). We need a field that is the sum of these two fields to know, for example, which IP address had the highest volume of traffic in total, i.e. as a client and/or as a server. To do this, we will create a new ",(0,i.kt)("strong",{parentName:"p"},"bytes")," field (Dispaly Name: ",(0,i.kt)("strong",{parentName:"p"},"Bytes"),"), which will be the sum of the ",(0,i.kt)("strong",{parentName:"p"},"clientBytes")," and ",(0,i.kt)("strong",{parentName:"p"},"serverBytes")," fields."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To create a ",(0,i.kt)("strong",{parentName:"p"},"new field"),", go to ","[",(0,i.kt)("strong",{parentName:"p"},"Configuration->Objects->Fields"),"]"," menu and click ",(0,i.kt)("strong",{parentName:"p"},"New Fields")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220811113952751",src:a(463043).Z,width:"2149",height:"1415"})),(0,i.kt)("p",null,"The wizard for creating a new field appears."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220811122018841",src:a(628765).Z,width:"598",height:"955"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Field name"),", we enter the database name (NQL) of the new field. In the system it is assumed that such names are typed with a lowercase letter, and if the name consists of two or more words, the successive words are typed without a space, starting each word with a capital letter for example ",(0,i.kt)("strong",{parentName:"p"},"ipAddressName"),". In our example, the field name is ",(0,i.kt)("strong",{parentName:"p"},"bytes"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Display name"),", we enter the name under which the new field will be visible in the system. In our example, the field name is ",(0,i.kt)("strong",{parentName:"p"},"Bytes"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"As mentioned earlier, two other fields are needed to create the ",(0,i.kt)("strong",{parentName:"p"},"bytes")," field. These are fields: ",(0,i.kt)("strong",{parentName:"p"},"clientBytes")," i ",(0,i.kt)("strong",{parentName:"p"},"serverBytes")," for data streams: ",(0,i.kt)("strong",{parentName:"p"},"netflow,  netflowByAppAggr,  netflowByAsnAggr netflowByCountryAggr,  netflowByGroupAggr,  netflowByIpAggr,  netflowByMplsAggr,  netflowByProtocolAggr,  netflowByTosAggr,  netflowTotalAggr"),". "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220811131931255",src:a(86864).Z,width:"605",height:"579"})),(0,i.kt)("p",{parentName:"li"},"The bytes field is supposed to be the result of adding the values of two fields, so the function that implements this action has the form:",(0,i.kt)("inlineCode",{parentName:"p"},"add(clientBytes,serverBytes)")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220811132543785",src:a(488339).Z,width:"602",height:"581"})),(0,i.kt)("p",{parentName:"li"},"However, for the ",(0,i.kt)("strong",{parentName:"p"},"netflowByIfcAggr")," stream these are the fields: ",(0,i.kt)("strong",{parentName:"p"},"inBytes")," and ",(0,i.kt)("strong",{parentName:"p"},"outBytes"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220811132451227",src:a(826723).Z,width:"596",height:"574"})),(0,i.kt)("p",{parentName:"li"},"Corresponding to the fields, the function is of the form:",(0,i.kt)("inlineCode",{parentName:"p"},"add(inBytes,outBytes)"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220811132748530",src:a(725658).Z,width:"601",height:"579"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Number formatting section"),", we specify how to format the data in our new field. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220815163328612",src:a(635730).Z,width:"549",height:"223"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Privacy")," section, you can set permissions for the created item. If you want it to be visible to all users, you should set the ",(0,i.kt)("strong",{parentName:"p"},"Public")," option."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image-20220816125358498",src:a(18111).Z,width:"518",height:"158"})))))}f.isMDXComponent=!0},463043:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220811113952751-b24882c2074533730bec823450d4f673.png"},628765:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220811122018841-5f25e7ca28f5d4ec1b620506d7351e91.png"},86864:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220811131931255-0f6a9cd32b860270be9d18de92d7b58e.png"},826723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220811132451227-7e408816f12e6394e0e7bb2ef28c5ed7.png"},488339:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220811132543785-34c2370ca363594f928ee19abce98acf.png"},725658:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220811132748530-21ceb0a6d62c84248211dd3e8a640215.png"},635730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220815163328612-bc855a46cae1449efc73a683c813b01e.png"},18111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816125358498-aafd4514de8151c1249e528c0868608d.png"}}]);