(self.webpackChunk=self.webpackChunk||[]).push([[146],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(o),h=r,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return o?n.createElement(f,a(a({ref:t},d),{},{components:o})):n.createElement(f,a({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4238:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>u});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a=["components"],l={},s=void 0,c={unversionedId:"XND module/DDoS Mitigation",id:"version-1.6/XND module/DDoS Mitigation",isDocsHomePage:!1,title:"DDoS Mitigation",description:"The FlowControl system in the XND module supports two features to mitigate DDoS attacks: FlowSpec and RTBH (Remotely Triggered Black Hole). Both require routers that support BGP protocol and optionally FlowSpec feature. When FlowControl detects an attack, it sends a command to the edge router(s) of the organization to block the offending traffic. Depending on the feature used, this command can be a filtering rule to place in an internal FlowSpec table or regular route to inject in the routing table. Both mechanisms work in similar way as depicted on the Fig. 3.1.",source:"@site/versioned_docs/version-1.6/04-XND module/03-DDoS Mitigation.md",sourceDirName:"04-XND module",slug:"/XND module/DDoS Mitigation",permalink:"/XND module/DDoS Mitigation",version:"1.6",lastUpdatedBy:"Jan Horuba\u0142a",lastUpdatedAt:1639746315,formattedLastUpdatedAt:"12/17/2021",sidebarPosition:3,frontMatter:{},sidebar:"version-1.6/docs",previous:{title:"FlowControl XND Module",permalink:"/XND module/FlowControl XND Module"},next:{title:"XND module configuration",permalink:"/XND module/XND module configuration"}},d=[{value:"Spec configuration on Juniper",id:"spec-configuration-on-juniper",children:[]},{value:"FlowSpec configuration on Cisco ASR 9000 devices",id:"flowspec-configuration-on-cisco-asr-9000-devices",children:[]},{value:"FlowSpec configuration on Cisco CSR 1000v",id:"flowspec-configuration-on-cisco-csr-1000v",children:[]},{value:"RTBH configuration on Juniper",id:"rtbh-configuration-on-juniper",children:[]},{value:"RTBH configuration on Cisco ASR 9000",id:"rtbh-configuration-on-cisco-asr-9000",children:[]},{value:"RTBH configuration on Cisco CSR 1000v",id:"rtbh-configuration-on-cisco-csr-1000v",children:[]}],p={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The FlowControl system in the XND module supports two features to mitigate DDoS attacks: FlowSpec and RTBH (Remotely Triggered Black Hole). Both require routers that support BGP protocol and optionally FlowSpec feature. When FlowControl detects an attack, it sends a command to the edge router(s) of the organization to block the offending traffic. Depending on the feature used, this command can be a filtering rule to place in an internal FlowSpec table or regular route to inject in the routing table. Both mechanisms work in similar way as depicted on the ",(0,i.kt)("em",{parentName:"p"},"Fig. 3.1"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20201113144640591",src:o(8498).Z})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Fig. 3.1 DDoS attacks mitigation diagram")),(0,i.kt)("p",null,"\u200b\tThe FlowControl system establishes BGP sessions with edge routers (green dotted arrows in the figure) that send Flow packets to FlowControl. Additionally, FlowSpec can be configured on routers that support this feature (see the following section for FlowSpec enabled router models). Depending on the feature used, FlowControl sends the following information to routers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FlowSpec: attacked server IP address and TCP port. Routers uses this information to filter out unwanted traffic directed to specified IP address and TCP port."),(0,i.kt)("li",{parentName:"ul"},"RTBH: attacked server IP address and a special, non-existent \u201cblack hole\u201d IP address, e.g. 192.0.2.1. Routers use both addresses to update their routing tables and to re-direct all the traffic, both legitimate and offending, to the black hole instead to the destination server. Additional static route is required on routers that directs all packets with black-hole destination address (192.0.2.1 in this case) to null or discard interface.")),(0,i.kt)("p",null,'\u200b\tBoth FlowSpec and RTBH mitigate attacks, but in latter case the attacked server is completely unavailable, i.e. cannot be reached via SSH or remote desktop. Once the attack stops FlowControl sends commands to routers to remove previously applied FlowSpec filters or RTBH routes and restore normal communication. Only one mitigation mechanism i.e. FlowSpec or RTBH can be used at a time, not both. Additionally, FlowControl sends to the router RTBH next-hop addresses with well-known NO_EXPORT and 666 communities. Detailed information on FlowSpec functionality is available in RFC 5575 "Dissemination of Flow Specification Rules" at ',(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5575"},"https://tools.ietf.org/html/rfc5575"),". For RTBH see RFC \u201cRemote Triggered Black Hole Filtering with Unicast Reverse Path Forwarding (uRPF)\u201d, ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5635"},"https://tools.ietf.org/html/rfc5635"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The prerequisite for the activation of the above described functionality is the support of FlowSpec protocol by network devices. This information can usually be found in the documentation of the device. The following describes how to configure FlowSpec for Juniper and Cisco devices.")),(0,i.kt)("h3",{id:"spec-configuration-on-juniper"},"Spec configuration on Juniper"),(0,i.kt)("p",null,"\u200b\tThe FlowSpec protocol is supported by Juniper MX series routers. Below is example configuration for Juniper devices. The FlowControl system server is assumed to have the following IP address 192.168.0.100 and BGP number AS 65100."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"protocols {\n\n  bgp {\n    group flowcontrol {\n      family inet {\n        flow {\n          no-validate NO-VALIDATION;\n        }\n        any;\n      }\n      neighbor 192.168.0.100 {\n        description Server FlowControl;\n        peer-as 65100;\n      }\n    }\n  }\n}\n\npolicy-options {\n  policy-statement NO-VALIDATION {\n    term 1 {\n      then accept;\n    }\n  }\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning !")),(0,i.kt)("p",{parentName:"blockquote"},"The NO-VALIDATION policy causes all IP addresses sent by FlowControl to be placed in the FlowSpec table (inetflow.0), regardless of whether they are in the routing table or not. Its use is not mandatory, but it makes easier to diagnose possible BGP communication problems between FlowControl and the router.")),(0,i.kt)("h4",{id:"verifcation-of-bgp-session-between-flowcontrol-and-the-router"},"Verifcation of BGP session between FlowControl and the router"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"admin@MX> **show bgp summary**\nGroups: 1 Peers: 2 Down peers: 0\n\n...\n\nPeer           AS   InPkt   OutPkt  OutQ  Flaps Last Up/Dwn State|#Active/Received/Accepted/Damped...\n\n**192.168.0.100     65100     1     0    0    0      0 Establ**\n inet.0: 0/0/0/0\n inetflow.0: 0/0/0/0\n\n...\n\n")),(0,i.kt)("h4",{id:"checking-the-flowspec-table-on-the-router"},"Checking the FlowSpec table on the router"),(0,i.kt)("p",null,"The following example shows the contents of the FlowSpec table (inetflow.0) after FlowControl has sent to the router a rule to block attack on the destination IP address 192.160.20.1 and destination TCP port 53:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"admin@MX> **show route table inetflow.0 detail**   \n\ninetflow.0: 1 destinations, 1 routes (1 active, 0 holddown, 0 hidden)\n**192.168.20.1,\\*,dstport=53**/term:1 (1 entry, 1 announced)\n    *BGP  Preference: 170/-101\n\u2026\n        Communities: **traffic-rate:0:0**\n\u2026\n\n")),(0,i.kt)("h3",{id:"flowspec-configuration-on-cisco-asr-9000-devices"},"FlowSpec configuration on Cisco ASR 9000 devices"),(0,i.kt)("p",null,"Below is a sample configuration of the ASR 9000. It is assumed that the FlowControl system has the following IP address: 192.168.0.100 and  BGP AS 65100."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",65100:!0,className:"language-router",metastring:"bgp 65100",bgp:!0}," bgp router-id 192.168.0.50\n address-family ipv4 unicast\n !\nneighbor 192.168.0.100\n remote-as 65100\n !\n address-family ipv4 flowSpec\n\n  route-policy FlowControl in\n  validation disable\n !\n !\n!\nroute-policy FlowControl\n done\nend-policy\n!\n\nflowspec\n\n local-install interface-all\n\n!\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notes:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"The IOS-XR system requires the definition of filtering policies for routes (IP prefixes) sent and received by the BGP process. In this case, FlowControl policy has been defined which accepts all routes (done command). It is applied in the incoming direction (route-policy FlowControl in command) in the address-family ipv4 flowspec section, which means that the router accepts all FlowSpec rules sent by FlowControl."),(0,i.kt)("li",{parentName:"ol"},"The validation disable command causes the router to accept all IP addresses sent by FlowControl, regardless of whether they are in the routing table or not. The use of this command is not mandatory, but it is recommended because it makes easier to diagnose possible BGP communication problems between FlowControl and the router."),(0,i.kt)("li",{parentName:"ol"},"The flowspec local-install interface-all command enables FlowSpec protocol support on all interfaces."))),(0,i.kt)("h4",{id:"verification-of-the-bgp-session-between-flowcontrol-and-the-router"},"Verification of the BGP session between FlowControl and the router"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RP/0/RP0/CPU0:ASR9000#**show bgp neighbor brief**\nWed Jul 22 09:35:06.619 UTC\n\nNeighbor    Spk  AS Description             Up/Down NBRState\n\n**192.168.0.100   0 65100                   00:03:32 Established**\n\nRP/0/RP0/CPU0:ASR9000#\n")),(0,i.kt)("h4",{id:"checking-the-flowspec-table-on-the-router-1"},"Checking the FlowSpec table on the router"),(0,i.kt)("p",null,"The following example shows the contents of the FlowSpec table after FlowControl has sent to the router a rule to block attack on the destination IP address 192.160.20.1 and destination TCP port 53:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RP/0/RP0/CPU0:ASR9000#**show flowSpec afi-all**\nWed Jul 22 09:38:20.791 UTC\n\nAFI: IPv4\n\n **Flow      :Dest:192.168.20.1/32,DPort:=53/2**\n  Actions   :**Traffic-rate: 0 bps** (bgp.1)\nRP/0/RP0/CPU0:ASR9000#\n\n")),(0,i.kt)("h3",{id:"flowspec-configuration-on-cisco-csr-1000v"},"FlowSpec configuration on Cisco CSR 1000v"),(0,i.kt)("p",null,"Below is a sample configuration of the CSR 1000. It is assumed that the FlowControl system has the following IP address: 192.168.0.100 and BGP AS 65100."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"router bgp 65100\n bgp router-id 192.168.0.50\n bgp log-neighbor-changes\n neighbor 192.168.0.100 remote-as 65100\n !\n address-family ipv4 flowspec\n neighbor 192.168.0.100 activate\n neighbor 192.168.0.100 validation off\n exit-address-family\n\nflowspec\n\n local-install interface-all\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notes:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"The \u201cneighbor x.x.x.x validation off\u201d command instructs the router to accept all IP addresses sent by FlowControl, regardless of whether they are in the routing table or not."),(0,i.kt)("li",{parentName:"ol"},"The flowspec local-install interface-all command enables FlowSpec protocol support on all interfaces."))),(0,i.kt)("h4",{id:"verification-of-the-bgp-session-between-flowcontrol-and-the-router-1"},"Verification of the BGP session between FlowControl and the router"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CSR1000V#**show ip bgp summary** \nBGP router identifier 192.168.0.50, local AS number 65100\nBGP table version is 1, main routing table version 1\n\nNeighbor    V      AS MsgRcvd MsgSent  TblVer InQ OutQ Up/Down State/PfxRcd\n\n**192.168.0.100  4    65100    5    8    1   0  0 00:03:21    0**\n")),(0,i.kt)("h4",{id:"checking-the-flowspec-table-on-the-router-2"},"Checking the FlowSpec table on the router"),(0,i.kt)("p",null,"The following example shows the contents of the FlowSpec table after FlowControl has sent to the router a rule to block attack on the destination IP address 192.160.20.1 and destination TCP port 53:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CSR1000V #**show bgp ipv4 flowspec detail** \nBGP routing table entry for **Dest:192.168.20.1/32,DPort:=53/2,** version 2\n Paths: (1 available, best #1, table IPv4-Flowspec-BGP-Table)\n Not advertised to any peer\n Refresh Epoch 1\n 65100\n  0.0.0.0 from 192.168.0.100 (192.168.0.100)\n   Origin incomplete, localpref 100, valid, external, best\n   Extended Community: **FLOWSPEC Traffic-rate:0,0**\n   rx pathid: 0, tx pathid: 0x0\n")),(0,i.kt)("h3",{id:"rtbh-configuration-on-juniper"},"RTBH configuration on Juniper"),(0,i.kt)("p",null,"Below is a sample configuration for Juniper devices. The FlowControl system server is assumed to have the following IP address 192.168.0.100 and BGP number AS 65100. Additionally the black-hole address is 192.0.2.1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"protocols {\n  bgp {\n    group flowcontrol {\n    \u2026\n      neighbor 192.168.0.100 {\n        description Serwer FlowControl;\n        family inet {\n          unicast;\n        }\n       peer-as 65100;\n      }\n    }\n  }\n}\nrouting-options {\n  static {\n    route 192.0.2.1/32 discard;\n  }\n}\n")),(0,i.kt)("h4",{id:"verifcation-of-bgp-session-between-flowcontrol-and-the-router-1"},"Verifcation of BGP session between FlowControl and the router"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"admin@MX> **show bgp summary**\n\nGroups: 1 Peers: 2 Down peers: 0\n...\nPeer           AS   InPkt   OutPkt  OutQ  Flaps Last Up/Dwn State|#Active/Received/Accepted/Damped...\n\n**192.168.0.100     65100     1     0    0    0      0 Establ**\n inet.0: 0/0/0/0\n inetflow.0: 0/0/0/0\n\n...\n\n")),(0,i.kt)("h4",{id:"checking-the-routing-table-on-the-router"},"Checking the routing table on the router"),(0,i.kt)("p",null,"The following example shows the contents of the routing table (inet.0) after FlowControl has sent to the router the black-hole IP address 192.0.2.1 as the next-hop for attacked IP address 192.168.20.1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"admin@vCP1> **show route table inet.0**\ninet.0: 5 destinations, 5 routes (5 active, 0 holddown, 0 hidden)\n\\+ = Active Route, - = Last Active, * = Both\n\n 192.0.2.1/32    *[Static/5] 00:12:05\n\n           Discard\n\n192.168.20.1/32  *[BGP/170] 00:00:35, localpref 100, from 192.168.0.100\n\n          AS path: 65100 ?, validation-state: unverified\n           to Discard\n")),(0,i.kt)("h3",{id:"rtbh-configuration-on-cisco-asr-9000"},"RTBH configuration on Cisco ASR 9000"),(0,i.kt)("p",null,"Below is a sample configuration for Cisco ASR 9000 devices. The FlowControl system server is assumed to have the following IP address 192.168.0.100 and BGP number AS 65100. Additionally the black-hole address is 192.0.2.1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"router static\n address-family ipv4 unicast\n...\n 192.0.2.1/32 Null0\n !\n!\n\nroute-policy RTBH\n if source in (192.168.0.100/32) then\n  done\n endif\nend-policy\n\nrouter bgp 65100\n !\n neighbor 192.168.0.100\n remote-as 65100\n...\n\n address-family ipv4 unicast\n  route-policy RTBH in\n !\n !\n!\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notes:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"The IOS-XR system requires the definition of filtering policies for routes (IP prefixes) sent and received by the BGP process. In this case, RTBH policy has been defined which accepts all routes (done command). It is applied in the incoming direction (route-policy RTBH in command) in the address-family ipv4 unicast section, which means that the router accepts all routes sent by FlowControl."),(0,i.kt)("li",{parentName:"ol"},"Both FlowControl and the router must be in the same AS. The RTBH feature does not work if both devices are in different AS and establish eBGP connection."))),(0,i.kt)("h4",{id:"verification-of-the-bgp-session-between-flowcontrol-and-the-router-2"},"Verification of the BGP session between FlowControl and the router"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," RP/0/RP0/CPU0:ASR9000#**show bgp neighbor brief**\nWed Jul 22 09:35:06.619 UTC\n\nNeighbor    Spk  AS Description             Up/Down NBRState\n**192.168.0.100   0 65100                   00:03:32 Established**\nRP/0/RP0/CPU0:ASR9000#\n")),(0,i.kt)("h4",{id:"checking-the-routing-table-on-the-router-1"},"Checking the routing table on the router"),(0,i.kt)("p",null,"The following example shows contents of the routing table after FlowControl has sent to the router the black-hole IP address 192.0.2.1 as the next-hop for attacked IP address 192.168.20.1. The routing table consists of two entries: static one that directs to Null0 interface traffic destined to 192.0.2.1 address, and the dynamic BGP entry that sets next-hop for the attacked IP 192.168.20.1 to the above IP address 192.0.2.1. Effectively all the traffic destined to IP 192.168.20.1 is directed to the Null0 interface, i.e. is dropped."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RP/0/RP0/CPU0:ASR9000#**show ip route**\n\u2026\n**S  192.0.2.1/32 is directly connected, 01:50:10, Null0**\n**B  192.168.20.1/32 [20/0] via 192.0.2.1, 00:55:23**\n\u2026\n")),(0,i.kt)("h3",{id:"rtbh-configuration-on-cisco-csr-1000v"},"RTBH configuration on Cisco CSR 1000v"),(0,i.kt)("p",null,"Below is a sample configuration for Cisco CSR 1000v devices. The FlowControl system server is assumed to have the following IP address 192.168.0.100 and BGP number AS 65100. Additionally the black-hole address is 192.0.2.1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"router bgp 65100\n bgp router-id 192.168.0.50\n neighbor 192.168.0.100 remote-as 65100\n !\n address-family ipv4\n neighbor 192.168.0.100 activate\n exit-address-family\n !\nip route 192.0.2.1 255.255.255.255 Null0\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notes:"),(0,i.kt)("p",{parentName:"blockquote"},"Both Flowcontrol and the router must be in the same AS. The RTBH feature does not work if both devices are in different AS and establish eBGP connection.")),(0,i.kt)("h4",{id:"verification-of-the-bgp-session-between-flowcontrol-and-the-router-3"},"Verification of the BGP session between FlowControl and the router"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CSR1000V#**show ip bgp summary** \nBGP router identifier 192.168.0.50, local AS number 65100\nBGP table version is 1, main routing table version 1\n\nNeighbor    V      AS MsgRcvd MsgSent  TblVer InQ OutQ Up/Down State/PfxRcd\n\n**192.168.0.100  4    65100    5    8    1  0  0 00:03:21    0**\n")),(0,i.kt)("h4",{id:"checking-the-routing-table-on-the-router-2"},"Checking the routing table on the router"),(0,i.kt)("p",null,"The following example shows contents of the routing table after FlowControl has sent to the router the black-hole IP address 192.0.2.1 as the next-hop for attacked IP address 192.168.20.1. The routing table consists of two entries: static one that directs to Null0 interface traffic destined to 192.0.2.1 address, and the dynamic BGP entry that sets next-hop for the attacked IP 192.168.20.1 to the above IP address 192.0.2.1. Effectively all the traffic destined to IP 192.168.20.1 is directed to the Null0 interface, i.e. is dropped."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CSR1000V#**show ip route**\n\u2026\n   192.0.2.0/32 is subnetted, 1 subnets\n**S    192.0.2.1 is directly connected, Null0**\n   192.168.20.0/32 is subnetted, 1 subnets\n**B    192.168.20.1 [200/0] via 192.0.2.1, 00:00:06**\n\u2026\n")))}u.isMDXComponent=!0},8498:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/image-20201113144640591-60cb9e195a92cd18fb9be83155856fcd.png"}}]);