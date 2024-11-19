"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96077],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(667294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(a),f=i,g=d["".concat(o,".").concat(f)]||d[f]||c[f]||r;return a?n.createElement(g,p(p({ref:t},m),{},{components:a})):n.createElement(g,p({ref:t},m))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var l=2;l<r;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},774233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(487462),i=a(263366),r=(a(667294),a(603905)),p=["components"],s={},o="Example of advanced field creation - use of mapper - Application Name",l={unversionedId:"Examples/Fields Examples/Fields advanced - creation example",id:"version-2.6/Examples/Fields Examples/Fields advanced - creation example",title:"Example of advanced field creation - use of mapper - Application Name",description:"Creating a new field is nothing more than mathematical operations on one or more fields in a single row of the database and saving the result under the new field name.",source:"@site/versioned_docs/version-2.6/06-Examples/Fields Examples/Fields advanced - creation example.md",sourceDirName:"06-Examples/Fields Examples",slug:"/Examples/Fields Examples/Fields advanced - creation example",permalink:"/2.6/Examples/Fields Examples/Fields advanced - creation example",draft:!1,tags:[],version:"2.6",frontMatter:{},sidebar:"docs",previous:{title:"Example of field creation - bytes field",permalink:"/2.6/Examples/Fields Examples/Fields - creation example"},next:{title:"Metrics Examples",permalink:"/2.6/Examples/Metrics Examples/"}},m={},c=[{value:"Implementation",id:"implementation",level:2}],d={toc:c};function f(e){var t=e.components,s=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"example-of-advanced-field-creation---use-of-mapper---application-name"},"Example of advanced field creation - use of mapper - Application Name"),(0,r.kt)("p",null,"Creating a ",(0,r.kt)("strong",{parentName:"p"},"new field")," is nothing more than mathematical operations on one or more fields in a single row of the database and saving the result under the new field name."),(0,r.kt)("p",null,"As an example, we will create a new field ",(0,r.kt)("strong",{parentName:"p"},"Application Name")," that will store the application name, using the ",(0,r.kt)("strong",{parentName:"p"},"Application name mapper")," and the ",(0,r.kt)("strong",{parentName:"p"},"Application")," field that stores the application number."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To create a ",(0,r.kt)("strong",{parentName:"p"},"new field"),", go to ",(0,r.kt)("strong",{parentName:"p"},"[Settings > Configuration > Objects > Fields]")," menu and click ",(0,r.kt)("strong",{parentName:"p"},"New Fields")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220811113952751",src:a(797538).Z,width:"2149",height:"1415"})),(0,r.kt)("p",null,"The wizard for creating a new field appears."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220822132415118",src:a(670379).Z,width:"531",height:"1048"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Field name"),", we enter the database name (NQL) of the new field. In the system it is assumed that such names are typed with a lowercase letter, and if the name consists of two or more words, the successive words are typed without a space, starting each word with a capital letter for example ",(0,r.kt)("strong",{parentName:"p"},"ipAddressName"),". In our example, in the field name we use mapper name so it takes the form ",(0,r.kt)("strong",{parentName:"p"},"applicationName"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220822132515090",src:a(749932).Z,width:"537",height:"168"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Display name"),", we enter the name under which the new field will be visible in the system. In our example, the field name is ",(0,r.kt)("strong",{parentName:"p"},"Application Name"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220822132602854",src:a(970437).Z,width:"527",height:"81"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The source for our new field is the ",(0,r.kt)("strong",{parentName:"p"},"Application")," field with the application number so we need to select the data stream in which this field exists."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220822132744723",src:a(718506).Z,width:"516",height:"510"})," "))),(0,r.kt)("p",null,"   Of course, we must also select the field ",(0,r.kt)("strong",{parentName:"p"},"Aplication"),"."),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"image-20220822132945338",src:a(120874).Z,width:"523",height:"445"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Mappers")," field, we select the mapper for which the value of the ",(0,r.kt)("strong",{parentName:"p"},"Application")," field should be the source. In our case it is the ",(0,r.kt)("strong",{parentName:"p"},"Application name mapper"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220822133027455",src:a(4623).Z,width:"528",height:"137"})),(0,r.kt)("p",{parentName:"li"},"We can find this mapper in the ",(0,r.kt)("strong",{parentName:"p"},"[Settings > Configuration > Mapping > Mappers]")," menu.\n",(0,r.kt)("img",{alt:"image-20220822133153005",src:a(511159).Z,width:"1297",height:"891"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Number formatting section"),", we specify how to format the data in our new field.\n",(0,r.kt)("img",{alt:"image-20220815163328612",src:a(272180).Z,width:"549",height:"223"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Privacy")," section, you can set permissions for the created item. If you want it to be visible to all users, you should set the Public option."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220816125358498",src:a(934764).Z,width:"518",height:"158"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If all the necessary fields of the form have been correctly completed press ",(0,r.kt)("strong",{parentName:"p"},"Save")," button to save the created object."))))}f.isMDXComponent=!0},797538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220811113952751-b24882c2074533730bec823450d4f673.png"},272180:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220815163328612-bc855a46cae1449efc73a683c813b01e.png"},934764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220816125358498-aafd4514de8151c1249e528c0868608d.png"},670379:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220822132415118-c1ab3f04f6035bcfc768b35b889e5190.png"},749932:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220822132515090-8ae30525cd4923e45d1ff9019462a837.png"},970437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220822132602854-34e25c789cf36ce9965eb65c5c3ae7f8.png"},718506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220822132744723-780bef5cffd0b3d20c2980e0f8dd6e9d.png"},120874:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220822132945338-da9c826cd35b352ef7addaad9c8af392.png"},4623:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220822133027455-b88ab01548d1b15e7444df47e5849966.png"},511159:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220822133153005-6e57f906de33c9c9ab8bb6f91e43d410.png"}}]);