"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30987],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>A});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),A=i,d=u["".concat(o,".").concat(A)]||u[A]||m[A]||r;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function A(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},519349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>A,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(487462),i=n(263366),r=(n(667294),n(603905)),l=["components"],s={description:"Unexpected increase in the number of flows rule example."},o="Using baseline in a rule - Unexpected increase in # of flows rule example",p={unversionedId:"Examples/Baseline Example/Using baseline in a rule",id:"version-3.0.0/Examples/Baseline Example/Using baseline in a rule",title:"Using baseline in a rule - Unexpected increase in # of flows rule example",description:"Unexpected increase in the number of flows rule example.",source:"@site/versioned_docs/version-3.0.0/06-Examples/Baseline Example/Using baseline in a rule.md",sourceDirName:"06-Examples/Baseline Example",slug:"/Examples/Baseline Example/Using baseline in a rule",permalink:"/3.0.0/Examples/Baseline Example/Using baseline in a rule",draft:!1,tags:[],version:"3.0.0",frontMatter:{description:"Unexpected increase in the number of flows rule example."},sidebar:"docs",previous:{title:"Baseline Examples",permalink:"/3.0.0/Examples/Baseline Example/"},next:{title:"Using baseline in a widget - Security Alerts Widget example",permalink:"/3.0.0/Examples/Baseline Example/Using baseline in a widget"}},c={},m=[{value:"Implementation",id:"implementation",level:2},{value:"Baselines requirements and recommendations",id:"baselines-requirements-and-recommendations",level:2}],u={toc:m};function A(e){var t=e.components,s=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-baseline-in-a-rule---unexpected-increase-in--of-flows-rule-example"},"Using baseline in a rule - Unexpected increase in # of flows rule example"),(0,r.kt)("p",null,"We want to create a ",(0,r.kt)("strong",{parentName:"p"},"Rule")," that uses baseline functionality. For this purpose, we will analyze the rule implemented in the system by default - ",(0,r.kt)("strong",{parentName:"p"},"Unexpected increase in # of flows rule. ")," It detects an unexpected increase in the number of flows based on the baseline for the last hour."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"Rules are created and edited in the menu ","[Alerts>",(0,r.kt)("strong",{parentName:"p"},"Rules Set"),"]",". After entering the tab, in the search field (upper right corner of the window), type the name of the ",(0,r.kt)("strong",{parentName:"p"},"Unexpected increase in # of flows"),", and click enter key.   "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230123135052517",src:n(786046).Z,width:"1645",height:"194"})),(0,r.kt)("p",null,"Then you can duplicate the  ",(0,r.kt)("strong",{parentName:"p"},"Unexpected increase in # of flows")," rule so that it can be edited. To do this, use the ",(0,r.kt)("strong",{parentName:"p"},"Duplicate")," icon from the ",(0,r.kt)("strong",{parentName:"p"},"Action")," column."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230123135257107",src:n(776896).Z,width:"1553",height:"211"})),(0,r.kt)("p",null,"In our case, we want the number of flows in a given minute to be compared with the average of the last hour, so the initial configuration settings look like the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230123135817360",src:n(143944).Z,width:"884",height:"473"})),(0,r.kt)("h2",{id:"baselines-requirements-and-recommendations"},"Baselines requirements and recommendations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Objects using baseline functionality (widget, rules) should use an aggregate stream.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are analyzing data for a longer period of time, you need to configure data retention for individual streams accordingly. Otherwise, the data will not be available to calculate the baseline.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configuration of baseline settings is located in the Thresholds section (here, you set the thresholds, after which an alert of the corresponding criticality is triggered).\n",(0,r.kt)("img",{alt:"image-20230123140808086",src:n(209057).Z,width:"875",height:"538"})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"One of the most essential baseline settings is Time Range in the Reference tab (available by pressing the ",(0,r.kt)("img",{alt:"image-20230123141337696",src:n(283846).Z,width:"26",height:"28"})," icon  )."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20230123141413081",src:n(651645).Z,width:"1004",height:"697"})))))}A.isMDXComponent=!0},786046:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230123135052517-76350b159c5bb12c7a8d025e79ce111b.png"},776896:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230123135257107-ebc1a783e9b56eb19343ef88ef74284d.png"},143944:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230123135817360-71df6ebe171ca0dfe78d91accc344b2d.png"},209057:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230123140808086-99002eb29ee5e9693e9f24f1450508e9.png"},283846:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},651645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230123141443472-4e9a9e75ecacab53533d897ed6f3e162.png"}}]);