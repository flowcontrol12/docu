<!-- Wersja 1.6.1 - docusaurus 2.0 dopasowana rozdzielczość rysunków -->

The FlowControl system in the XND module supports two features to mitigate DDoS attacks: FlowSpec and RTBH (Remotely Triggered Black Hole). Both require routers that support BGP protocol and optionally FlowSpec feature. When FlowControl detects an attack, it sends a command to the edge router(s) of the organization to block the offending traffic. Depending on the feature used, this command can be a filtering rule to place in an internal FlowSpec table or regular route to inject in the routing table. Both mechanisms work in similar way as depicted on the *Fig. 3.1*.

![image-20201113144640591](../assets/image-20201113144640591.png)

*Fig. 3.1 DDoS attacks mitigation diagram*

​	The FlowControl system establishes BGP sessions with edge routers (green dotted arrows in the figure) that send Flow packets to FlowControl. Additionally, FlowSpec can be configured on routers that support this feature (see the following section for FlowSpec enabled router models). Depending on the feature used, FlowControl sends the following information to routers:

- FlowSpec: attacked server IP address and TCP port. Routers uses this information to filter out unwanted traffic directed to specified IP address and TCP port.
- RTBH: attacked server IP address and a special, non-existent “black hole” IP address, e.g. 192.0.2.1. Routers use both addresses to update their routing tables and to re-direct all the traffic, both legitimate and offending, to the black hole instead to the destination server. Additional static route is required on routers that directs all packets with black-hole destination address (192.0.2.1 in this case) to null or discard interface.

​	Both FlowSpec and RTBH mitigate attacks, but in latter case the attacked server is completely unavailable, i.e. cannot be reached via SSH or remote desktop. Once the attack stops FlowControl sends commands to routers to remove previously applied FlowSpec filters or RTBH routes and restore normal communication. Only one mitigation mechanism i.e. FlowSpec or RTBH can be used at a time, not both. Additionally, FlowControl sends to the router RTBH next-hop addresses with well-known NO_EXPORT and 666 communities. Detailed information on FlowSpec functionality is available in RFC 5575 "Dissemination of Flow Specification Rules" at https://tools.ietf.org/html/rfc5575. For RTBH see RFC “Remote Triggered Black Hole Filtering with Unicast Reverse Path Forwarding (uRPF)”, https://tools.ietf.org/html/rfc5635.

> The prerequisite for the activation of the above described functionality is the support of FlowSpec protocol by network devices. This information can usually be found in the documentation of the device. The following describes how to configure FlowSpec for Juniper and Cisco devices.


### Spec configuration on Juniper

​	The FlowSpec protocol is supported by Juniper MX series routers. Below is example configuration for Juniper devices. The FlowControl system server is assumed to have the following IP address 192.168.0.100 and BGP number AS 65100.




```
protocols {

  bgp {
    group flowcontrol {
      family inet {
        flow {
          no-validate NO-VALIDATION;
        }
        any;
      }
      neighbor 192.168.0.100 {
        description Server FlowControl;
        peer-as 65100;
      }
    }
  }
}

policy-options {
  policy-statement NO-VALIDATION {
    term 1 {
      then accept;
    }
  }
}
```

>**Warning !**
>
The NO-VALIDATION policy causes all IP addresses sent by FlowControl to be placed in the FlowSpec table (inetflow.0), regardless of whether they are in the routing table or not. Its use is not mandatory, but it makes easier to diagnose possible BGP communication problems between FlowControl and the router.


#### Verifcation of BGP session between FlowControl and the router

```
admin@MX> **show bgp summary**
Groups: 1 Peers: 2 Down peers: 0

...

Peer           AS   InPkt   OutPkt  OutQ  Flaps Last Up/Dwn State|#Active/Received/Accepted/Damped...

**192.168.0.100     65100     1     0    0    0      0 Establ**
 inet.0: 0/0/0/0
 inetflow.0: 0/0/0/0

...

```



#### Checking the FlowSpec table on the router

The following example shows the contents of the FlowSpec table (inetflow.0) after FlowControl has sent to the router a rule to block attack on the destination IP address 192.160.20.1 and destination TCP port 53:


```
admin@MX> **show route table inetflow.0 detail**   

inetflow.0: 1 destinations, 1 routes (1 active, 0 holddown, 0 hidden)
**192.168.20.1,\*,dstport=53**/term:1 (1 entry, 1 announced)
    *BGP  Preference: 170/-101
…
        Communities: **traffic-rate:0:0**
…

```





### FlowSpec configuration on Cisco ASR 9000 devices

Below is a sample configuration of the ASR 9000. It is assumed that the FlowControl system has the following IP address: 192.168.0.100 and  BGP AS 65100.



```router bgp 65100
 bgp router-id 192.168.0.50
 address-family ipv4 unicast
 !
neighbor 192.168.0.100
 remote-as 65100
 !
 address-family ipv4 flowSpec

  route-policy FlowControl in
  validation disable
 !
 !
!
route-policy FlowControl
 done
end-policy
!

flowspec

 local-install interface-all

!
```

> Notes:
>
>1. The IOS-XR system requires the definition of filtering policies for routes (IP prefixes) sent and received by the BGP process. In this case, FlowControl policy has been defined which accepts all routes (done command). It is applied in the incoming direction (route-policy FlowControl in command) in the address-family ipv4 flowspec section, which means that the router accepts all FlowSpec rules sent by FlowControl.
>2. The validation disable command causes the router to accept all IP addresses sent by FlowControl, regardless of whether they are in the routing table or not. The use of this command is not mandatory, but it is recommended because it makes easier to diagnose possible BGP communication problems between FlowControl and the router.
>3. The flowspec local-install interface-all command enables FlowSpec protocol support on all interfaces.

#### Verification of the BGP session between FlowControl and the router


```
RP/0/RP0/CPU0:ASR9000#**show bgp neighbor brief**
Wed Jul 22 09:35:06.619 UTC

Neighbor    Spk  AS Description             Up/Down NBRState

**192.168.0.100   0 65100                   00:03:32 Established**

RP/0/RP0/CPU0:ASR9000#
```

#### Checking the FlowSpec table on the router

The following example shows the contents of the FlowSpec table after FlowControl has sent to the router a rule to block attack on the destination IP address 192.160.20.1 and destination TCP port 53:

```
RP/0/RP0/CPU0:ASR9000#**show flowSpec afi-all**
Wed Jul 22 09:38:20.791 UTC

AFI: IPv4

 **Flow      :Dest:192.168.20.1/32,DPort:=53/2**
  Actions   :**Traffic-rate: 0 bps** (bgp.1)
RP/0/RP0/CPU0:ASR9000#

```

### FlowSpec configuration on Cisco CSR 1000v

Below is a sample configuration of the CSR 1000. It is assumed that the FlowControl system has the following IP address: 192.168.0.100 and BGP AS 65100.

```
router bgp 65100
 bgp router-id 192.168.0.50
 bgp log-neighbor-changes
 neighbor 192.168.0.100 remote-as 65100
 !
 address-family ipv4 flowspec
 neighbor 192.168.0.100 activate
 neighbor 192.168.0.100 validation off
 exit-address-family

flowspec

 local-install interface-all

```

>Notes:
>
>1.  The “neighbor x.x.x.x validation off” command instructs the router to accept all IP addresses sent by FlowControl, regardless of whether they are in the routing table or not.
>2.  The flowspec local-install interface-all command enables FlowSpec protocol support on all interfaces.

#### Verification of the BGP session between FlowControl and the router


```
CSR1000V#**show ip bgp summary** 
BGP router identifier 192.168.0.50, local AS number 65100
BGP table version is 1, main routing table version 1

Neighbor    V      AS MsgRcvd MsgSent  TblVer InQ OutQ Up/Down State/PfxRcd

**192.168.0.100  4    65100    5    8    1   0  0 00:03:21    0**
```

#### Checking the FlowSpec table on the router


The following example shows the contents of the FlowSpec table after FlowControl has sent to the router a rule to block attack on the destination IP address 192.160.20.1 and destination TCP port 53:
```
CSR1000V #**show bgp ipv4 flowspec detail** 
BGP routing table entry for **Dest:192.168.20.1/32,DPort:=53/2,** version 2
 Paths: (1 available, best #1, table IPv4-Flowspec-BGP-Table)
 Not advertised to any peer
 Refresh Epoch 1
 65100
  0.0.0.0 from 192.168.0.100 (192.168.0.100)
   Origin incomplete, localpref 100, valid, external, best
   Extended Community: **FLOWSPEC Traffic-rate:0,0**
   rx pathid: 0, tx pathid: 0x0
```

### RTBH configuration on Juniper

Below is a sample configuration for Juniper devices. The FlowControl system server is assumed to have the following IP address 192.168.0.100 and BGP number AS 65100. Additionally the black-hole address is 192.0.2.1.

```
protocols {
  bgp {
    group flowcontrol {
    …
      neighbor 192.168.0.100 {
        description Serwer FlowControl;
        family inet {
          unicast;
        }
       peer-as 65100;
      }
    }
  }
}
routing-options {
  static {
    route 192.0.2.1/32 discard;
  }
}
```

#### Verifcation of BGP session between FlowControl and the router

```
admin@MX> **show bgp summary**

Groups: 1 Peers: 2 Down peers: 0
...
Peer           AS   InPkt   OutPkt  OutQ  Flaps Last Up/Dwn State|#Active/Received/Accepted/Damped...

**192.168.0.100     65100     1     0    0    0      0 Establ**
 inet.0: 0/0/0/0
 inetflow.0: 0/0/0/0

...

```


#### Checking the routing table on the router

The following example shows the contents of the routing table (inet.0) after FlowControl has sent to the router the black-hole IP address 192.0.2.1 as the next-hop for attacked IP address 192.168.20.1:


```
admin@vCP1> **show route table inet.0**
inet.0: 5 destinations, 5 routes (5 active, 0 holddown, 0 hidden)
\+ = Active Route, - = Last Active, * = Both

 192.0.2.1/32    *[Static/5] 00:12:05

           Discard

192.168.20.1/32  *[BGP/170] 00:00:35, localpref 100, from 192.168.0.100

          AS path: 65100 ?, validation-state: unverified
           to Discard
```

### RTBH configuration on Cisco ASR 9000

Below is a sample configuration for Cisco ASR 9000 devices. The FlowControl system server is assumed to have the following IP address 192.168.0.100 and BGP number AS 65100. Additionally the black-hole address is 192.0.2.1
```
router static
 address-family ipv4 unicast
...
 192.0.2.1/32 Null0
 !
!

route-policy RTBH
 if source in (192.168.0.100/32) then
  done
 endif
end-policy

router bgp 65100
 !
 neighbor 192.168.0.100
 remote-as 65100
...

 address-family ipv4 unicast
  route-policy RTBH in
 !
 !
!
```

>Notes:
>
>1. The IOS-XR system requires the definition of filtering policies for routes (IP prefixes) sent and received by the BGP process. In this case, RTBH policy has been defined which accepts all routes (done command). It is applied in the incoming direction (route-policy RTBH in command) in the address-family ipv4 unicast section, which means that the router accepts all routes sent by FlowControl.
>2.  Both FlowControl and the router must be in the same AS. The RTBH feature does not work if both devices are in different AS and establish eBGP connection.

#### Verification of the BGP session between FlowControl and the router

```
 RP/0/RP0/CPU0:ASR9000#**show bgp neighbor brief**
Wed Jul 22 09:35:06.619 UTC

Neighbor    Spk  AS Description             Up/Down NBRState
**192.168.0.100   0 65100                   00:03:32 Established**
RP/0/RP0/CPU0:ASR9000#
```

#### Checking the routing table on the router

The following example shows contents of the routing table after FlowControl has sent to the router the black-hole IP address 192.0.2.1 as the next-hop for attacked IP address 192.168.20.1. The routing table consists of two entries: static one that directs to Null0 interface traffic destined to 192.0.2.1 address, and the dynamic BGP entry that sets next-hop for the attacked IP 192.168.20.1 to the above IP address 192.0.2.1. Effectively all the traffic destined to IP 192.168.20.1 is directed to the Null0 interface, i.e. is dropped.

```
RP/0/RP0/CPU0:ASR9000#**show ip route**
…
**S  192.0.2.1/32 is directly connected, 01:50:10, Null0**
**B  192.168.20.1/32 [20/0] via 192.0.2.1, 00:55:23**
…
```

### RTBH configuration on Cisco CSR 1000v

Below is a sample configuration for Cisco CSR 1000v devices. The FlowControl system server is assumed to have the following IP address 192.168.0.100 and BGP number AS 65100. Additionally the black-hole address is 192.0.2.1
```
router bgp 65100
 bgp router-id 192.168.0.50
 neighbor 192.168.0.100 remote-as 65100
 !
 address-family ipv4
 neighbor 192.168.0.100 activate
 exit-address-family
 !
ip route 192.0.2.1 255.255.255.255 Null0
```



>Notes:
>
>Both Flowcontrol and the router must be in the same AS. The RTBH feature does not work if both devices are in different AS and establish eBGP connection.


#### Verification of the BGP session between FlowControl and the router

```
CSR1000V#**show ip bgp summary** 
BGP router identifier 192.168.0.50, local AS number 65100
BGP table version is 1, main routing table version 1

Neighbor    V      AS MsgRcvd MsgSent  TblVer InQ OutQ Up/Down State/PfxRcd

**192.168.0.100  4    65100    5    8    1  0  0 00:03:21    0**
```

#### Checking the routing table on the router

The following example shows contents of the routing table after FlowControl has sent to the router the black-hole IP address 192.0.2.1 as the next-hop for attacked IP address 192.168.20.1. The routing table consists of two entries: static one that directs to Null0 interface traffic destined to 192.0.2.1 address, and the dynamic BGP entry that sets next-hop for the attacked IP 192.168.20.1 to the above IP address 192.0.2.1. Effectively all the traffic destined to IP 192.168.20.1 is directed to the Null0 interface, i.e. is dropped.

```
CSR1000V#**show ip route**
…
   192.0.2.0/32 is subnetted, 1 subnets
**S    192.0.2.1 is directly connected, Null0**
   192.168.20.0/32 is subnetted, 1 subnets
**B    192.168.20.1 [200/0] via 192.0.2.1, 00:00:06**
…
```
