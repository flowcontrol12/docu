---
description: Raw Data
slug: /User-Guide/Raw-Data
---
# Raw Data

The data streams available in the system with default fields and user created fields are located in the [**Raw Data**] menu.

## Introduction

At the top of the window you can find the standard search bar, time ranges menu, etc., these elements are described in [User Interface](/User-Interface) . This view displays the `netflow` stream by default. To change it to another one, you need to do it in the searchbar.

![image-20230705095859385](assets_04-Raw%20Data/image-20230705095859385.png)

Above the table there is a graph in which the number of records recorded in the system in a unit of time is shown in bars on the timeline. In the table, the individual rows show the fields available for a given record in the selected data stream.

![image-20230705095247961](assets_04-Raw%20Data/image-20230705095247961.png)

:::info

In the table, for better readability of the data, the number of records displayed was limited to 1000.

:::

Selecting which columns are displayed in the table is configured in the drop-down menu.

![image-20230706093915267](assets_04-Raw%20Data/image-20230706093915267.png)

In the System, the data streams are stored for a certain period of time, which is configured in the [Retention](/User-Guide/Settings/Indices/Retention) menu. For performance and resource reasons, the ` netflow ` stream is usually kept as short as possible. You can see the range of available data in the chart by selecting a time period longer than the one configured in [Retention](/User-Guide/Settings/Indices/Retention) for a given data stream. In this case, netflow is stored for up to 3 hours.

![image-20230706103925486](assets_04-Raw%20Data/image-20230706103925486.png)

Setting the time range to ` Last 12 hours ` you will see the records available in blue, the gray color presents the number of records that were available in the `netflow` stream while now this information is stored in the aggregated stream. 

For aggregated streams, you have the ability to select the time resolution (auto/1 minute/10 minutes/1 hour/1 day) and you can select data due to traffic from the client or from the server (both/client/server).

![image-20230706111224833](assets_04-Raw%20Data/image-20230706111224833.png)

![image-20230706111459110](assets_04-Raw%20Data/image-20230706111459110.png)

---

## Advanced View

After selecting a particular row by clicking on the row, a menu with **Advanced View** will open. All the variables, fields and values associated with the given record are available here.

![image-20230706094203389](assets_04-Raw%20Data/image-20230706094203389.png)

![image-20230706094301239](assets_04-Raw%20Data/image-20230706094301239.png)

When you select more rows in the table, the corresponding tabs will appear in the **Advanced View** menu.

![image-20230706094507196](assets_04-Raw%20Data/image-20230706094507196.png)

---

## Right Click Menu

After right-clicking on a row, a `Right Click` menu with the following options will be shown:

![image-20230705094519836](assets_04-Raw%20Data/image-20230705094519836.png)

- Action
  - Add value to lookup - adds the value to a lookup
- Rest Client - sends an alert to another system using the REST CLIENT functionality 
- Resolve
  - RIPE - searches in the RIPE database 
  - DNS for all values - resolves DNS for all IP addresses in the table
  - DNS - resolves DNS for the selected IP address
  - Ns lookup - queries a DNS Domain Name Server to the lookup to find DNS Records and IP address information
- Net mask Search - access to quick IP network mask filter
- Tools
  - Ping - simple PING tool
- Mitigation
  - Block host by IP - address blocking when the system is integrated with the MACMON probe
- Custom - you can create Your own `Right Click` action configured in the [[Configuration>Objects>Right Click Actions]](#right-click-menu) menu

---

## Settings menu

The settings menu is accessed by pressing the ![image-20230630130509063](assets_04-Raw%20Data/image-20230630130509063.png) icon.

![image-20230630132659466](assets_04-Raw%20Data/image-20230630132659466.png)

The following actions are available here:

- **Server sorting** switch 

  - **off** - sorting is performed on records previously retrieved by the browser from the database (limited to 1000 records)
  - **on** - sorting is performed on the database and then retrieved by the browser (limited to 1000 records)

- **Export as** 

  - **CSV** - export alerts to CSV files which are displayed in the table (limited to 1000 records)
  - **PDF** - export alerts to PDF files which are displayed in the table (limited to 1000 records)
  - **PNG** - export alerts to PNG files which are displayed in the table (limited to 1000 records)
  - **Full CSV Export** - export all alerts that are in the System (database)


---

## System Data streams

In the System, Data streams are categorized into four groups:

- **Alerts**
- **Collectors**
- **Netflow**
- **Other**



![image-20231106102924822](assets_04-Raw%20Data/image-20231106102924822.png)

The tables below show the default fields with descriptions for each of the four groups listed above.

### Alerts

Alerts stream.

#### alerts

| Display Name                     | NQL Name                              | Description                                                  |
| -------------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| Day Of Week                      | DayOfWeek                             | Day of Week                                                  |
| Avg Bytes/pkt                    | _avgBytesPerPacket                    | Metric calculated Sum of Bytes/packet                        |
| Count Sessions                   | _countSessions                        | Metric calculated Count Sessions                             |
| Count SYN                        | _countSyn                             | Metric calculated Count of SYN Flags                         |
| Unique Server Ports              | _countUniqueServerPorts               | Metric calculated Count of Unique Server Ports               |
| First BL Port Description        | _firstBlPortDescription               | Metric calculated First of Blacklisted Port Description      |
| First Client Function            | _firstClientFunction                  | Metric calculated First Client Function                      |
| First OT Port Description        | _firstOtPortDescription               | Metric calculated First of OT Port Description               |
| First P2P Port Description       | _firstP2pPortDescription              | Metric calculated First of P2P Port Description              |
| First Server Function            | _firstServerFunction                  | Metric calculated First Server Function                      |
| Join Client IPs                  | _joinClientIPs                        | Metric calculated Join of Client IPs                         |
| Join Client TCP Flags            | _joinClientTCPFlags                   | Metric calculated Join of Client TCP Flags                   |
| Original Alert Names             | _joinOriginalAlertNames               | Metric calculated Join of Alert Names                        |
| Join Server IPs                  | _joinServerIPs                        | Metric calculated Join of Server IPs                         |
| Join Server Ports                | _joinServerPorts                      | Metric calculated Join of Server Ports                       |
| Join Server TCP Flags            | _joinServerTCPFlags                   | Metric calculated Join of Server TCP Flags                   |
| Max Client Network Time          | _maxClientNetworkTime                 | Metric calculated maximal value of Client Network Time       |
| Max Initial Server Response Time | _maxInitialServerResponseTime         | Metric calculated maximal value of Initial Server Response Time |
| Max Server Network Time          | _maxServerNetworkTime                 | Metric calculated maximal value of Server Network Time       |
| Sum Bits/s                       | _sumBitsPerSecond                     | Metric calculated Sum of Bits/s by Interval                  |
| Sum Bits/s Critical              | _sumBitsPerSecond0baselineCritical    |                                                              |
| Sum Bits/s Major                 | _sumBitsPerSecond0baselineMajor       |                                                              |
| Sum Bits/s Minor                 | _sumBitsPerSecond0baselineMinor       |                                                              |
| Sum Bytes                        | _sumBytes                             | Metric calculated Sum of Bytes.                              |
| Sum Bytes Critical               | _sumBytes0baselineCritical            |                                                              |
| Sum Bytes Major                  | _sumBytes0baselineMajor               |                                                              |
| Sum Bytes Minor                  | _sumBytes0baselineMinor               |                                                              |
| Sum Client Packets               | _sumClientPackets                     | Metric calculated Sum of Client Packets                      |
| Sum Flows                        | _sumFlows                             | Metric calculated Sum of Flows                               |
| Sum FLows Critical               | _sumFlows0baselineCritical            |                                                              |
| Sum FLows Major                  | _sumFlows0baselineMajor               |                                                              |
| Sum FLows Minor                  | _sumFlows0baselineMinor               |                                                              |
| Sum Packets                      | _sumPackets                           | Metric calculated Sum of Packets                             |
| Sum Packets Critical             | _sumPackets0baselineCritical          |                                                              |
| Sum Packets Major                | _sumPackets0baselineMajor             |                                                              |
| Sum Packets Minor                | _sumPackets0baselineMinor             |                                                              |
| Sum Packets/flow                 | _sumPacketsPerFlow                    | Metric calculated Sum of Packets Per Flow                    |
| Sum Packets/s                    | _sumPacketsPerSecond                  | Metric calculated Sum of Packets/s by Interval               |
| Sum Packets/s Critical           | _sumPacketsPerSecond0baselineCritical |                                                              |
| Sum Packets/s Major              | _sumPacketsPerSecond0baselineMajor    |                                                              |
| Sum Packets/s Minor              | _sumPacketsPerSecond0baselineMinor    |                                                              |
| Sum Server Bytes                 | _sumServerBytes                       | Metric calculated Sum of Server Bytes                        |
| Sum Server Packets               | _sumServerPackets                     | Metric calculated Sum of Server Packets                      |
| Unique Client ASNs               | _uniqueClientAsn                      | Metric calculated Count of Unique Client ASNs                |
| Unique Client IPs                | _uniqueClientIPs                      | Metric calculated Count of Unique Client IPs                 |
| Unique Count Alerts              | _uniqueCountAlerts                    | Metric calculated Count of Unique Alert Names                |
| Unique Server IPs                | _uniqueServerIps                      | Metric calculated Count of Unique Server IPs                 |
| ACK Time                         | alertAckLastUpdate                    | Acknowledge flag update Time                                 |
| ACK User                         | alertAckUser                          | User updating the Acknowledge flag                           |
| Comment                          | alertComment                          | Comment                                                      |
| Comment Time                     | alertCommentLastUpdate                | Comment update time                                          |
| Commented User                   | alertCommentUser                      | User updating a comment                                      |
| Alert Definition Id              | alertDefId                            | Alert Definition Identifier                                  |
| False Positive                   | alertFalsePositive                    | Alert handling False Positive flag                           |
| False Positive Time              | alertFalsePositiveLastUpdate          | False Positive flag update time                              |
| False Positive User              | alertFalsePositiveUser                | User updating the False Positive flag                        |
| Threshold Level                  | alertFlagThresholdLevel               | Threshold Level (Critical, Major, Minor)                     |
| Mitre Technique Id               | alertMitreId                          | Mitre ATT&CK Technique Id                                    |
| Mitre Subtechnique               | alertMitreSubtechnique                | Mitre ATT&CK Subtechnique                                    |
| Mitre Tactic                     | alertMitreTactic                      | Mitre ATT&CK Tactic                                          |
| Mitre Technique                  | alertMitreTechnique                   | Mitre ATT&CK Technique                                       |
| Alert Name                       | alertName                             | Alert Name                                                   |
| Rule Id                          | alertRuleId                           | Rule Identifier                                              |
| Rule Type                        | alertRuleType                         | Rule Type                                                    |
| ACK                              | alertSeen                             | Setting the Acknowledge flag                                 |
| Alert Severity                   | alertSeverity                         | Alert Severity                                               |
| Alert Tags Names                 | alertTagsNames                        | Lookup - Tags ids as Tags names                              |
| Application                      | application                           | Application Number                                           |
| Application Name                 | applicationName                       | Mapper - Application Number as Application Name              |
| Client AS Name                   | clientAsName                          | Mapper - AS Number as AS Name from build-in database         |
| Client Country                   | clientCountry                         | Country of Client IP Addresses                               |
| Client IP                        | clientIp                              | Client IP Address                                            |
| Client Private                   | clientPrivate                         | Client Private                                               |
| Dns Query                        | dnsQuery                              | DNS query                                                    |
| Http Host Name                   | httpHost                              | HTTP host name                                               |
| Alert Id                         | id                                    | Alert Identifier                                             |
| JA3 Client Hash                  | ja3cHash                              | JA3 client hash                                              |
| JA3 Server Hash                  | ja3sHash                              | JA3 server hash                                              |
| IP Protocol                      | protocol                              | Protocol Number                                              |
| Protocol Name                    | protocolName                          | Mapper - IP Protocol as Protocol Name                        |
| Server AS Name                   | serverAsName                          | Mapper - AS Number as AS Name from build-in database         |
| Server Country                   | serverCountry                         | Country of Server IP Addresses                               |
| Server IP                        | serverIp                              | Server IP address                                            |
| serverPort                       | serverPort                            | Server port                                                  |
| Server Private                   | serverPrivate                         | Server Private                                               |
| Time                             | timestamp                             | Alert Time                                                   |



### Collectors

Data streams for build-in collectors.

| Collector name                   | Description                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| top1000IPsLast2Minutes           | Collect Top 10k IPs in Last 2 Minutes Timeline with the highest sessions (at least more than 1 k) and packets count more than 1k. |
| top10ClientIpLast15Minute_Alerts | Collect TOP 10 Client IPs in the last 15 Minute.             |
| top10ClientIpLast15Minute        | Collect TOP 10 Client IPs in Last 15 Minute Timeline.        |
| top10ServerIpLast15Minute        | Collect TOP 10 Server IPs in Last 15 Minute Timeline.        |

### Netflow

#### netflow

Deduplicated Netflow and Sflow records stream.

| Display Name                 | NQL Name                         | Description                                              |
| ---------------------------- | -------------------------------- | -------------------------------------------------------- |
| Day Of Week                  | DayOfWeek                        | Day of Week                                              |
| Active Time                  | activeTime                       | Active Time of unique flow (session)                     |
| Application                  | application                      | Application Number                                       |
| Application Id               | applicationId                    | Mapper - Application ID                                  |
| Application Name             | applicationName                  | Mapper - Application Number as Application Name          |
| AS Name                      | asName                           | Mapper - AS Number to AS Name from build-in database     |
| As Numbers                   | asNumbers                        | Unique Autonomous Systems Numbers                        |
| Bits                         | bits                             | Bits                                                     |
| Bits/s                       | bitsPerSecond                    | Bits per Interval                                        |
| Bits/s (AT)                  | bitsPerSecondActiveTime          | Bits per Active Time                                     |
| Bytes                        | bytes                            | Bytes                                                    |
| Client AS Name               | clientAsName                     | Mapper - AS Number as AS Name from build-in database     |
| Client AS Number             | clientAsNumber                   | AS Number of Client IP Addresses                         |
| Client Bits                  | clientBits                       | Bits (Client -> Sever)                                   |
| Client Bits/flow             | clientBitsPerFlow                | Bits per Flow (Client -> Sever)                          |
| Client Bits Per Packet       | clientBitsPerPacket              | Bits per Packet (Client -> Sever)                        |
| Client Bits Per Second       | clientBitsPerSecond              | Bits per Interval (Client -> Sever)                      |
| Client Bits/s (AT)           | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)                   |
| Client Bytes                 | clientBytes                      | Bytes (Client -> Sever)                                  |
| Client Country               | clientCountry                    | Country of Client IP Addresses                           |
| Client Function              | clientFunction                   | Function Group of Client IP Addresses                    |
| Client IP                    | clientIp                         | Client IP Address                                        |
| Client IP Name               | clientIpName                     | Client IP Name                                           |
| Client Location              | clientLocation                   | Location Group of Client IP Addresses                    |
| Client Max TTL               | clientMaxTtl                     | Max TTL (Client -> Sever)                                |
| Client Network Time          | clientNetworkTime                | Network Latency (Client -> Server)                       |
| Client Packets               | clientPackets                    | Packets (Client > Sever)                                 |
| Client Packets Per Second    | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)                   |
| Client Packets/s (AT)        | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever)                |
| Client Port                  | clientPort                       | Client Port                                              |
| Client Private               | clientPrivate                    | Client Private                                           |
| Client Role                  | clientRole                       | Role Group of Client IP Addresses                        |
| Client TCP Flags             | clientTcpFlags                   | Mapper - TCP Flags (Client -> Sever)                     |
| DNS Error Return Code Names  | dnsErrorReturnCodeNames          | DNS Error Return Code Names                              |
| Dns Query Type Name          | dnsQueryTypeName                 | Dns Query Type Name                                      |
| Exporter IPs                 | exporterIps                      | Unique IP Addresses of Netflow Exporters                 |
| Exporter Name                | exporterName                     | Lookup - Exporter IP as Exporter Name from SNMP database |
| First Timestamp              | firstTimestamp                   | First Timestamp of unique flow (session)                 |
| Flows                        | flows                            | Flows sent by Exporter                                   |
| Flows/s                      | flowsPerSecond                   | Flows per Interval                                       |
| ICMP Type                    | icmpType                         | Mapper - ICMP Type                                       |
| Initial Server Response Time | initialServerResponseTime        | Response Time (Latency) (Application)                    |
| Interfaces                   | interfaces                       | Unique numbers of Netflow Exporter's Interfaces          |
| IPv6 Option Headers          | ipv6OptionHeaders                | Mapper - IPv6 Option Headers                             |
| Last Timestamp               | lastTimestamp                    | Last Timestamp of unique flow (session)                  |
| MPLS                         | mpls                             | Unique MPLS Labels                                       |
| Packets                      | packets                          | Packets                                                  |
| Packets/s                    | packetsPerSecond                 | Packets per Interval                                     |
| Packets/s (AT)               | packetsPerSecondActiveTime       | Packets per Active Time                                  |
| % In Retransmitted Packets   | percentRetransmittedInPackets    | % Retransmitted Packets (In)                             |
| % Out Retransmitted Packets  | percentRetransmittedOutPackets   | % Retransmitted Packets (Out)                            |
| IP Protocol                  | protocol                         | Protocol Number                                          |
| Protocol Name                | protocolName                     | Mapper - IP Protocol as Protocol Name                    |
| Retransmitted In Bytes       | retransmittedInBytes             | Retransmitted Bytes (Incoming)                           |
| Retransmitted In Packets     | retransmittedInPackets           | Retransmitted Packets (Incoming)                         |
| Retransmitted Out Bytes      | retransmittedOutBytes            | Retransmitted Bytes (Outgoing)                           |
| Retransmitted Out Packets    | retransmittedOutPackets          | Retransmitted Packets (Outgoing)                         |
| Server AS Name               | serverAsName                     | Mapper - AS Number as AS Name from build-in database     |
| Server AS Number             | serverAsNumber                   | AS Number of Server IP Addresses                         |
| Server Bits                  | serverBits                       | Bits (Sever -> Client)                                   |
| Server Bits Per Second       | serverBitsPerSecond              | Bits per Interval (Sever -> Client)                      |
| Server Bits/s (AT)           | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)                   |
| Server Bytes                 | serverBytes                      | Bytes (Sever -> Client)                                  |
| Server Country               | serverCountry                    | Country of Server IP Addresses                           |
| Server Function              | serverFunction                   | Function Group of Server IP Addresses                    |
| Server IP                    | serverIp                         | Server IP Address                                        |
| Server IP Name               | serverIpName                     | Server IP Name                                           |
| Server Location              | serverLocation                   | Location Group of Server IP Addresses                    |
| Server Network Time          | serverNetworkTime                | Network Latency (Server -> Client)                       |
| Server Packets               | serverPackets                    | Packets (Sever -> Client)                                |
| Server Packets Per Second    | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)                   |
| Server Packets/s (AT)        | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client)                |
| Server Port                  | serverPort                       | Server Port                                              |
| Server Private               | serverPrivate                    | Server Private                                           |
| Server Role                  | serverRole                       | Role Group of Server IP Addresses                        |
| Server TCP Flags             | serverTcpFlags                   | Mapper - TCP Flags (Sever -> Client)                     |
| Session ID                   | sessionId                        | Session ID within minute interval                        |
| Time                         | timestamp                        | Time                                                     |
| ToS Names                    | tosNames                         | Mapper - ToS Number / Numbers as ToS Name                |
| Tos Numbers                  | tosNumbers                       | Unique Type of Service values                            |

---

#### netflowByAppAggr

Netflow 1 min aggregated by application flows stream.

| Display Name                 | NQL Name                         | Description                                     |
| ---------------------------- | -------------------------------- | ----------------------------------------------- |
| Active Time                  | activeTime                       | Active Time of unique flow (session)            |
| Application                  | application                      | Application Number                              |
| Application Name             | applicationName                  | Mapper - Application Number as Application Name |
| Bits                         | bits                             | Bits                                            |
| Bits/s                       | bitsPerSecond                    | Bits per Interval                               |
| Bits/s (AT)                  | bitsPerSecondActiveTime          | Bits per Active Time                            |
| Bytes                        | bytes                            | Bytes                                           |
| Client Bits                  | clientBits                       | Bits (Client -> Sever)                          |
| Client Bits/flow             | clientBitsPerFlow                | Bits per Flow (Client -> Sever)                 |
| Client Bits/pkt              | clientBitsPerPacket              | Bits per Packet (Client -> Sever)               |
| Clients Bits/s               | clientBitsPerSecond              | Bits per Interval (Client -> Sever)             |
| Client Bits/s (AT)           | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)          |
| Client Bytes                 | clientBytes                      | Bytes (Client -> Sever)                         |
| Client Network Time          | clientNetworkTime                | Network Latency (Client -> Server)              |
| Client Packets               | clientPackets                    | Packets (Client > Sever)                        |
| Client Packets/s             | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)          |
| Client Packets/s (AT)        | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever)       |
| Client TCP Flags             | clientTcpFlags                   | Mapper - TCP Flags (Client -> Sever)            |
| Flows                        | flows                            | Flows sent by Exporter                          |
| Flows/s                      | flowsPerSecond                   | Flows per Interval                              |
| Initial Server Response Time | initialServerResponseTime        | Response Time (Latency) (Application)           |
| Packets                      | packets                          | Packets                                         |
| Packets/s                    | packetsPerSecond                 | Packets per Interval                            |
| Packets/s (AT)               | packetsPerSecondActiveTime       | Packets per Active Time                         |
| % In Retransmitted Packets   | percentRetransmittedInPackets    | % Retransmitted Packets (In)                    |
| % Out Retransmitted Packets  | percentRetransmittedOutPackets   | % Retransmitted Packets (Out)                   |
| Retransmitted In Packets     | retransmittedInPackets           | Retransmitted Packets (Incoming)                |
| Retransmitted Out Packets    | retransmittedOutPackets          | Retransmitted Packets (Outgoing)                |
| Server Bits                  | serverBits                       | Bits (Sever -> Client)                          |
| Server Bits/s                | serverBitsPerSecond              | Bits per Interval (Sever -> Client)             |
| Server Bits/s (AT)           | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)          |
| Server Bytes                 | serverBytes                      | Bytes (Sever -> Client)                         |
| Server Network Time          | serverNetworkTime                | Network Latency (Server -> Client)              |
| Server Packets               | serverPackets                    | Packets (Sever -> Client)                       |
| Server Packets/s             | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)          |
| Server Packets/s (AT)        | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client)       |
| Server TCP Flags             | serverTcpFlags                   | Mapper - TCP Flags (Sever -> Client)            |
| Time                         | timestamp                        | Time                                            |

---

#### netflowByAsnAggr

Netflow 1 min aggregated by ASN flows stream.

| Display Name          | NQL Name                         | Description                                          |
| --------------------- | -------------------------------- | ---------------------------------------------------- |
| Active Time           | activeTime                       | Active Time of unique flow (session)                 |
| AS Name               | asName                           | Mapper - AS Number to AS Name from build-in database |
| AS Number             | asNumber                         | AS Number                                            |
| Bits                  | bits                             | Bits                                                 |
| Bits/s                | bitsPerSecond                    | Bits per Interval                                    |
| Bits/s (AT)           | bitsPerSecondActiveTime          | Bits per Active Time                                 |
| Bytes                 | bytes                            | Bytes                                                |
| Client Bits           | clientBits                       | Bits (Client -> Sever)                               |
| Client Bits/flow      | clientBitsPerFlow                | Bits per Flow (Client -> Sever)                      |
| Client Bits/pkt       | clientBitsPerPacket              | Bits per Packet (Client -> Sever)                    |
| Clients Bits/s        | clientBitsPerSecond              | Bits per Interval (Client -> Sever)                  |
| Client Bits/s (AT)    | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)               |
| Client Bytes          | clientBytes                      | Bytes (Client -> Sever)                              |
| Client Packets        | clientPackets                    | Packets (Client > Sever)                             |
| Client Packets/s      | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)               |
| Client Packets/s (AT) | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever)            |
| Direction             | direction                        | Mapper - Direction (Client, Server or Both)          |
| Flows                 | flows                            | Flows sent by Exporter                               |
| Flows/s               | flowsPerSecond                   | Flows per Interval                                   |
| Packets               | packets                          | Packets                                              |
| Packets/s             | packetsPerSecond                 | Packets per Interval                                 |
| Packets/s (AT)        | packetsPerSecondActiveTime       | Packets per Active Time                              |
| Server Bits           | serverBits                       | Bits (Sever -> Client)                               |
| Server Bits/s         | serverBitsPerSecond              | Bits per Interval (Sever -> Client)                  |
| Server Bits/s (AT)    | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)               |
| Server Bytes          | serverBytes                      | Bytes (Sever -> Client)                              |
| Server Packets        | serverPackets                    | Packets (Sever -> Client)                            |
| Server Packets/s      | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)               |
| Server Packets/s (AT) | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client)            |
| Time                  | timestamp                        | Time                                                 |

---

#### netflowByCountryAggr

Netflow 1 min aggregated by country flows stream.

| Display Name          | NQL Name                         | Description                                 |
| --------------------- | -------------------------------- | ------------------------------------------- |
| Active Time           | activeTime                       | Active Time of unique flow (session)        |
| Bits                  | bits                             | Bits                                        |
| Bits/s                | bitsPerSecond                    | Bits per Interval                           |
| Bits/s (AT)           | bitsPerSecondActiveTime          | Bits per Active Time                        |
| Bytes                 | bytes                            | Bytes                                       |
| Client Bits           | clientBits                       | Bits (Client -> Sever)                      |
| Client Bits/flow      | clientBitsPerFlow                | Bits per Flow (Client -> Sever)             |
| Client Bits/pkt       | clientBitsPerPacket              | Bits per Packet (Client -> Sever)           |
| Clients Bits/s        | clientBitsPerSecond              | Bits per Interval (Client -> Sever)         |
| Client Bits/s (AT)    | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)      |
| Client Bytes          | clientBytes                      | Bytes (Client -> Sever)                     |
| Client Packets        | clientPackets                    | Packets (Client > Sever)                    |
| Client Packets/s      | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)      |
| Client Packets/s (AT) | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever)   |
| Country Name          | country                          | Country Name                                |
| Direction             | direction                        | Mapper - Direction (Client, Server or Both) |
| Flows                 | flows                            | Flows sent by Exporter                      |
| Flows/s               | flowsPerSecond                   | Flows per Interval                          |
| Packets               | packets                          | Packets                                     |
| Packets/s             | packetsPerSecond                 | Packets per Interval                        |
| Packets/s (AT)        | packetsPerSecondActiveTime       | Packets per Active Time                     |
| Server Bits           | serverBits                       | Bits (Sever -> Client)                      |
| Server Bits/s         | serverBitsPerSecond              | Bits per Interval (Sever -> Client)         |
| Server Bits/s (AT)    | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)      |
| Server Bytes          | serverBytes                      | Bytes (Sever -> Client)                     |
| Server Packets        | serverPackets                    | Packets (Sever -> Client)                   |
| Server Packets/s      | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)      |
| Server Packets/s (AT) | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client)   |
| Time                  | timestamp                        | Time                                        |

---

#### netflowByExporterAggr

Netflow 1 min aggregated by exporter flows stream.

| Display Name         | NQL Name            | Description                                                  |
| -------------------- | ------------------- | ------------------------------------------------------------ |
| Active Time          | activeTime          | Active Time of unique flow (session)                         |
| Bits                 | bits                | Bits                                                         |
| Bits/s               | bitsPerSecond       | Bits per Interval                                            |
| Bytes                | bytes               | Bytes                                                        |
| Exporter Description | exporterDescription | Lookup - Exporter IP as Exporter Description from SNMP database |
| Exporter IP          | exporterIp          | Exporter IP                                                  |
| Exporter Location    | exporterLocation    | Lookup - Exporter IP as Exporter Location from SNMP database |
| Exporter Name        | exporterName        | Lookup - Exporter IP as Exporter Name from SNMP database     |
| Flows                | flows               | Flows sent by Exporter                                       |
| Flows/s              | flowsPerSecond      | Flows per Interval                                           |
| Packets              | packets             | Packets                                                      |
| Packets/s            | packetsPerSecond    | Packets per Interval                                         |
| Time                 | timestamp           | Time                                                         |

---

#### netflowByGroupAggr

Netflow 1 min aggregated by group flows stream.

| Display Name          | NQL Name                         | Description                                 |
| --------------------- | -------------------------------- | ------------------------------------------- |
| Active Time           | activeTime                       | Active Time of unique flow (session)        |
| Bits                  | bits                             | Bits                                        |
| Bits/s                | bitsPerSecond                    | Bits per Interval                           |
| Bits/s (AT)           | bitsPerSecondActiveTime          | Bits per Active Time                        |
| Bytes                 | bytes                            | Bytes                                       |
| Client Bits           | clientBits                       | Bits (Client -> Sever)                      |
| Client Bits/flow      | clientBitsPerFlow                | Bits per Flow (Client -> Sever)             |
| Client Bits/pkt       | clientBitsPerPacket              | Bits per Packet (Client -> Sever)           |
| Clients Bits/s        | clientBitsPerSecond              | Bits per Interval (Client -> Sever)         |
| Client Bits/s (AT)    | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)      |
| Client Bytes          | clientBytes                      | Bytes (Client -> Sever)                     |
| Client Packets        | clientPackets                    | Packets (Client > Sever)                    |
| Client Packets/s      | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)      |
| Client Packets/s (AT) | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever)   |
| Direction             | direction                        | Mapper - Direction (Client, Server or Both) |
| Flows                 | flows                            | Flows sent by Exporter                      |
| Flows/s               | flowsPerSecond                   | Flows per Interval                          |
| Group Name            | group                            | Group Name                                  |
| Group Type            | groupType                        | Group Type                                  |
| Packets               | packets                          | Packets                                     |
| Packets/s             | packetsPerSecond                 | Packets per Interval                        |
| Packets/s (AT)        | packetsPerSecondActiveTime       | Packets per Active Time                     |
| Server Bits           | serverBits                       | Bits (Sever -> Client)                      |
| Server Bits/s         | serverBitsPerSecond              | Bits per Interval (Sever -> Client)         |
| Server Bits/s (AT)    | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)      |
| Server Bytes          | serverBytes                      | Bytes (Sever -> Client)                     |
| Server Packets        | serverPackets                    | Packets (Sever -> Client)                   |
| Server Packets/s      | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)      |
| Server Packets/s (AT) | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client)   |
| Time                  | timestamp                        | Time                                        |

---

#### netflowByIfcAggr

Netflow 1 min aggregated by interface flows stream.

| Display Name      | NQL Name              | Description                                                  |
| ----------------- | --------------------- | ------------------------------------------------------------ |
| Active Time       | activeTime            | Active Time of unique flow (session)                         |
| Bits              | bits                  | Bits                                                         |
| Bits/s            | bitsPerSecond         | Bits per Interval                                            |
| Bytes             | bytes                 | Bytes                                                        |
| Exporter IP       | exporterIp            | Exporter IP                                                  |
| Exporter Name     | exporterName          | Lookup - Exporter IP as Exporter Name from SNMP database     |
| Flows             | flows                 | Flows sent by Exporter                                       |
| Flows/s           | flowsPerSecond        | Flows per Interval                                           |
| Interface Index   | ifcIndex              | Interface Index                                              |
| Interface Name    | ifcName               | Lookup - Interface Index as Interface Name from SNMP database |
| Interface Speed   | ifcSpeed              | Lookup - Interface Index as Interface Speed from SNMP database |
| In Bits           | inBits                | Bits (In)                                                    |
| In Bits/s         | inBitsPerSecond       | Bits (In) per Interval                                       |
| In Bytes          | inBytes               | Bytes (In)                                                   |
| In Packets        | inPackets             | Packets (In)                                                 |
| In Packets/s      | inPacketsPerSecond    | Packets (In) per Interval                                    |
| Out Bits          | outBits               | Bits (Out)                                                   |
| Out Bits/s        | outBitsPerSecond      | Bits (Out) per Interval                                      |
| Out Bytes         | outBytes              | Bytes (Out)                                                  |
| Out Packets       | outPackets            | Packets (Out)                                                |
| Out Packets/s     | outPacketsPerSecond   | Packets (In) per Interval                                    |
| Packets           | packets               | Packets                                                      |
| Packets/s         | packetsPerSecond      | Packets per Interval                                         |
| % In Utilization  | percentInUtilization  | % Utilization (In)                                           |
| % Out Utilization | percentOutUtilization | % Utilization (Out)                                          |
| Time              | timestamp             | Time                                                         |

---

#### netflowByIpAggr

Netflow 1 min aggregated by top IP flows stream.

| Display Name                 | NQL Name                         | Description                                                |
| ---------------------------- | -------------------------------- | ---------------------------------------------------------- |
| Active Time                  | activeTime                       | Active Time of unique flow (session)                       |
| AS Name                      | asName                           | Mapper - AS Number to AS Name from build-in database       |
| Bits                         | bits                             | Bits                                                       |
| Bits/s                       | bitsPerSecond                    | Bits per Interval                                          |
| Bits/s (AT)                  | bitsPerSecondActiveTime          | Bits per Active Time                                       |
| Bytes                        | bytes                            | Bytes                                                      |
| Client Bits                  | clientBits                       | Bits (Client -> Sever)                                     |
| Client Bits/flow             | clientBitsPerFlow                | Bits per Flow (Client -> Sever)                            |
| Client Bits/pkt              | clientBitsPerPacket              | Bits per Packet (Client -> Sever)                          |
| Clients Bits/s               | clientBitsPerSecond              | Bits per Interval (Client -> Sever)                        |
| Client Bits/s (AT)           | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)                     |
| Client Bytes                 | clientBytes                      | Bytes (Client -> Sever)                                    |
| Client Network Time          | clientNetworkTime                | Network Latency (Client -> Server)                         |
| Client Packets               | clientPackets                    | Packets (Client > Sever)                                   |
| Client Packets/flow          | clientPacketsPerFlow             | Packets per Flow (Client -> Sever)                         |
| Client Packets/s             | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)                     |
| Client Packets/s (AT)        | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever)                  |
| Client TCP Flags             | clientTcpFlags                   | Mapper - TCP Flags (Client -> Sever)                       |
| Country Code                 | countryCode                      | Lookup - IP Address as Country Code from build-in database |
| Direction                    | direction                        | Mapper - Direction (Client, Server or Both)                |
| Flows                        | flows                            | Flows sent by Exporter                                     |
| Flows/s                      | flowsPerSecond                   | Flows per Interval                                         |
| Initial Server Response Time | initialServerResponseTime        | Response Time (Latency) (Application)                      |
| IP Address                   | ipAddress                        | IP Address                                                 |
| IP Address Name              | ipAddressName                    | IP Address Name                                            |
| Packets                      | packets                          | Packets                                                    |
| Packets/s                    | packetsPerSecond                 | Packets per Interval                                       |
| Packets/s (AT)               | packetsPerSecondActiveTime       | Packets per Active Time                                    |
| % In Retransmitted Packets   | percentRetransmittedInPackets    | % Retransmitted Packets (In)                               |
| % Out Retransmitted Packets  | percentRetransmittedOutPackets   | % Retransmitted Packets (Out)                              |
| Retransmitted In Packets     | retransmittedInPackets           | Retransmitted Packets (Incoming)                           |
| Retransmitted Out Packets    | retransmittedOutPackets          | Retransmitted Packets (Outgoing)                           |
| Server Bits                  | serverBits                       | Bits (Sever -> Client)                                     |
| Server Bits/flow             | serverBitsPerFlow                | Bits per Flow (Sever -> Client)                            |
| Server Bits/pkt              | serverBitsPerPacket              | Bits per Packet (Sever -> Client)                          |
| Server Bits/s                | serverBitsPerSecond              | Bits per Interval (Sever -> Client)                        |
| Server Bits/s (AT)           | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)                     |
| Server Bytes                 | serverBytes                      | Bytes (Sever -> Client)                                    |
| Server Network Time          | serverNetworkTime                | Network Latency (Server -> Client)                         |
| Server Packets               | serverPackets                    | Packets (Sever -> Client)                                  |
| Server Packets/flow          | serverPacketsPerFlow             | Packets per Flow (Sever -> Client)                         |
| Server Packets/s             | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)                     |
| Server Packets/s (AT)        | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client)                  |
| Server TCP Flags             | serverTcpFlags                   | Mapper - TCP Flags (Sever -> Client)                       |
| Time                         | timestamp                        | Time                                                       |

---

#### netflowByMplsAggr

Netflow 1 min aggregated by MPLS flows stream.

| Display Name          | NQL Name                         | Description                               |
| --------------------- | -------------------------------- | ----------------------------------------- |
| Active Time           | activeTime                       | Active Time of unique flow (session)      |
| Bits                  | bits                             | Bits                                      |
| Bits/s                | bitsPerSecond                    | Bits per Interval                         |
| Bits/s (AT)           | bitsPerSecondActiveTime          | Bits per Active Time                      |
| Bytes                 | bytes                            | Bytes                                     |
| Client Bits           | clientBits                       | Bits (Client -> Sever)                    |
| Client Bits/flow      | clientBitsPerFlow                | Bits per Flow (Client -> Sever)           |
| Client Bits/pkt       | clientBitsPerPacket              | Bits per Packet (Client -> Sever)         |
| Clients Bits/s        | clientBitsPerSecond              | Bits per Interval (Client -> Sever)       |
| Client Bits/s (AT)    | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)    |
| Client Bytes          | clientBytes                      | Bytes (Client -> Sever)                   |
| Client Packets        | clientPackets                    | Packets (Client > Sever)                  |
| Client Packets/s      | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)    |
| Client Packets/s (AT) | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever) |
| Flows                 | flows                            | Flows sent by Exporter                    |
| Flows/s               | flowsPerSecond                   | Flows per Interval                        |
| MPLS Labels           | mpls                             | Unique MPLS Labels                        |
| Packets               | packets                          | Packets                                   |
| Packets/s             | packetsPerSecond                 | Packets per Interval                      |
| Packets/s (AT)        | packetsPerSecondActiveTime       | Packets per Active Time                   |
| Server Bits           | serverBits                       | Bits (Sever -> Client)                    |
| Server Bits/s         | serverBitsPerSecond              | Bits per Interval (Sever -> Client)       |
| Server Bits/s (AT)    | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)    |
| Server Bytes          | serverBytes                      | Bytes (Sever -> Client)                   |
| Server Packets        | serverPackets                    | Packets (Sever -> Client)                 |
| Server Packets/s      | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)    |
| Server Packets/s (AT) | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client) |
| Time                  | timestamp                        | Time                                      |

---

#### netflowByProtocolAggr

Netflow 1 min aggregated by IP protocol flows stream.

| Display Name          | NQL Name                         | Description                               |
| --------------------- | -------------------------------- | ----------------------------------------- |
| Active Time           | activeTime                       | Active Time of unique flow (session)      |
| Bits                  | bits                             | Bits                                      |
| Bits/s                | bitsPerSecond                    | Bits per Interval                         |
| Bits/s (AT)           | bitsPerSecondActiveTime          | Bits per Active Time                      |
| Bytes                 | bytes                            | Bytes                                     |
| Client Bits           | clientBits                       | Bits (Client -> Sever)                    |
| Client Bits/flow      | clientBitsPerFlow                | Bits per Flow (Client -> Sever)           |
| Client Bits/pkt       | clientBitsPerPacket              | Bits per Packet (Client -> Sever)         |
| Clients Bits/s        | clientBitsPerSecond              | Bits per Interval (Client -> Sever)       |
| Client Bits/s (AT)    | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)    |
| Client Bytes          | clientBytes                      | Bytes (Client -> Sever)                   |
| Client Packets        | clientPackets                    | Packets (Client > Sever)                  |
| Client Packets/s      | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)    |
| Client Packets/s (AT) | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever) |
| Flows                 | flows                            | Flows sent by Exporter                    |
| Flows/s               | flowsPerSecond                   | Flows per Interval                        |
| Packets               | packets                          | Packets                                   |
| Packets/s             | packetsPerSecond                 | Packets per Interval                      |
| Packets/s (AT)        | packetsPerSecondActiveTime       | Packets per Active Time                   |
| Protocol              | protocol                         | Protocol Number                           |
| Protocol Name         | protocolName                     | Mapper - IP Protocol as Protocol Name     |
| Server Bits           | serverBits                       | Bits (Sever -> Client)                    |
| Server Bits/s         | serverBitsPerSecond              | Bits per Interval (Sever -> Client)       |
| Server Bits/s (AT)    | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)    |
| Server Bytes          | serverBytes                      | Bytes (Sever -> Client)                   |
| Server Packets        | serverPackets                    | Packets (Sever -> Client)                 |
| Server Packets/s      | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)    |
| Server Packets/s (AT) | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client) |
| Time                  | timestamp                        | Time                                      |

---

#### netflowByTosAggr

Netflow 1 min aggregated by TOS flows stream.

| Display Name          | NQL Name                         | Description                               |
| --------------------- | -------------------------------- | ----------------------------------------- |
| Active Time           | activeTime                       | Active Time of unique flow (session)      |
| Bits                  | bits                             | Bits                                      |
| Bits/s                | bitsPerSecond                    | Bits per Interval                         |
| Bits/s (AT)           | bitsPerSecondActiveTime          | Bits per Active Time                      |
| Bytes                 | bytes                            | Bytes                                     |
| Client Bits           | clientBits                       | Bits (Client -> Sever)                    |
| Client Bits/flow      | clientBitsPerFlow                | Bits per Flow (Client -> Sever)           |
| Client Bits/pkt       | clientBitsPerPacket              | Bits per Packet (Client -> Sever)         |
| Clients Bits/s        | clientBitsPerSecond              | Bits per Interval (Client -> Sever)       |
| Client Bits/s (AT)    | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)    |
| Client Bytes          | clientBytes                      | Bytes (Client -> Sever)                   |
| Client Packets        | clientPackets                    | Packets (Client > Sever)                  |
| Client Packets/s      | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)    |
| Client Packets/s (AT) | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever) |
| Flows                 | flows                            | Flows sent by Exporter                    |
| Flows/s               | flowsPerSecond                   | Flows per Interval                        |
| Packets               | packets                          | Packets                                   |
| Packets/s             | packetsPerSecond                 | Packets per Interval                      |
| Packets/s (AT)        | packetsPerSecondActiveTime       | Packets per Active Time                   |
| Server Bits           | serverBits                       | Bits (Sever -> Client)                    |
| Server Bits/s         | serverBitsPerSecond              | Bits per Interval (Sever -> Client)       |
| Server Bits/s (AT)    | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)    |
| Server Bytes          | serverBytes                      | Bytes (Sever -> Client)                   |
| Server Packets        | serverPackets                    | Packets (Sever -> Client)                 |
| Server Packets/s      | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)    |
| Server Packets/s (AT) | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client) |
| Time                  | timestamp                        | Time                                      |
| ToS Name              | tosName                          | Mapper - ToS Number / Numbers as ToS Name |
| ToS Number            | tosNumber                        | ToS Number                                |

#### netflowTotalAggr

Netflow 1 min aggregated.

| Display Name          | NQL Name                         | Description                               |
| --------------------- | -------------------------------- | ----------------------------------------- |
| Active Time           | activeTime                       | Active Time of unique flow (session)      |
| Bits                  | bits                             | Bits                                      |
| Bits/s                | bitsPerSecond                    | Bits per Interval                         |
| Bits/s (AT)           | bitsPerSecondActiveTime          | Bits per Active Time                      |
| Bytes                 | bytes                            | Bytes                                     |
| Client Bits           | clientBits                       | Bits (Client -> Sever)                    |
| Client Bits/flow      | clientBitsPerFlow                | Bits per Flow (Client -> Sever)           |
| Client Bits/pkt       | clientBitsPerPacket              | Bits per Packet (Client -> Sever)         |
| Clients Bits/s        | clientBitsPerSecond              | Bits per Interval (Client -> Sever)       |
| Client Bits/s (AT)    | clientBitsPerSecondActiveTime    | Bits per Active Time (Client -> Sever)    |
| Client Bytes          | clientBytes                      | Bytes (Client -> Sever)                   |
| Client Packets        | clientPackets                    | Packets (Client > Sever)                  |
| Client Packets/s      | clientPacketsPerSecond           | Packets per Interval (Client -> Sever)    |
| Client Packets/s (AT) | clientPacketsPerSecondActiveTime | Packets per Active Time (Client -> Sever) |
| Flows                 | flows                            | Flows sent by Exporter                    |
| Flows/s               | flowsPerSecond                   | Flows per Interval                        |
| Packets               | packets                          | Packets                                   |
| Packets/s             | packetsPerSecond                 | Packets per Interval                      |
| Packets/s (AT)        | packetsPerSecondActiveTime       | Packets per Active Time                   |
| Server Bits           | serverBits                       | Bits (Sever -> Client)                    |
| Server Bits/s         | serverBitsPerSecond              | Bits per Interval (Sever -> Client)       |
| Server Bits/s (AT)    | serverBitsPerSecondActiveTime    | Bits per Active Time (Sever -> Client)    |
| Server Bytes          | serverBytes                      | Bytes (Sever -> Client)                   |
| Server Packets        | serverPackets                    | Packets (Sever -> Client)                 |
| Server Packets/s      | serverPacketsPerSecond           | Packets per Interval (Sever -> Client)    |
| Server Packets/s (AT) | serverPacketsPerSecondActiveTime | Packets per Active Time (Sever -> Client) |
| Time                  | timestamp                        | Time                                      |

### Others



#### auditMessages

Audit messages stream.

| Display Name | NQL Name   | Description |
| ------------ | ---------- | ----------- |
| ID           | id         |             |
| Success      | isSuccess  |             |
| Message      | message    |             |
| Method name  | methodName |             |
| Time         | timestamp  |             |
| User         | user       |             |

---

#### metrics

System metrics stream.

| Display Name            | NQL Name               | Description                                            |
| ----------------------- | ---------------------- | ------------------------------------------------------ |
| Number of analyzers     | analyzersCount         | Number of configured netty analyzers.                  |
| Available space         | avail                  | Available space                                        |
| Conversations processed | conversationsProcessed | Total number of processed conversations.               |
| Idle Raw in ticks       | cpuIdleRaw             | Idle Raw in ticks.                                     |
| CPU ID                  | cpuName                | The CPU ID.                                            |
| Nice Raw in ticks       | cpuNiceRaw             | Nice Raw in ticks.                                     |
| System Raw in ticks     | cpuSystemRaw           | System Raw in ticks.                                   |
| CPU Utilization         | cpuUsed                | The percentage cpu utilization value.                  |
| User Raw in ticks       | cpuUserRaw             | User Raw in ticks.                                     |
| Deletes error           | deleteErrors           | Total number of deleting errors.                       |
| Deletes number          | deleteNum              | Total number of deleting operations.                   |
| DISK ID                 | diskName               | The DISK ID.                                           |
| Dropped packets         | dropped                | Dropped packets.                                       |
| Errors                  | errors                 | Number of errors during decoding.                      |
| Exporter IP             | exporterIp             | Netflow sender IP address.                             |
| Filter name             | filterName             | Filter name.                                           |
| Filtered Out            | filteredOut            | Total number of filtered out flows.                    |
| Inbound Flows           | flows                  | Total number of processed flows.                       |
| Flows analyzed          | flowsAnalyzed          | Total number of analyzed flows.                        |
| Forwarder name          | forwarderName          | Forwarder name.                                        |
| Free Memory             | free                   | Free Memory                                            |
| Decoder index           | index                  | Decoder index.                                         |
| Index name              | indexName              | Index name.                                            |
| Max latency             | maxLatency             | Maximum latency in ms.                                 |
| MEM ID                  | memoryName             | The MEM ID.                                            |
| Messages received       | messages               | Total number of received messages.                     |
| metaSetName             | metaSetName            | Information field for system maintenance only          |
| Min latency             | minLatency             | Minimum latency in ms.                                 |
| Missed Templates        | missedTemplates        | Total number of missed templates for v9 and v10 flows. |
| Dropped Packets         | packetsDropped         | Number of unforwarded packets.                         |
| Inbound Packets         | packetsIn              | Total number of packets entering forwarder.            |
| Outbound Packets        | packetsOut             | Total number of packets forwarded.                     |
| Records analyzed        | recordsAnalyzed        | Total number of analyzed records.                      |
| Service name            | serviceName            | Service name.                                          |
| Sflows                  | sflows                 | Total number of decoded sflows.                        |
| Time                    | timestamp              | Time                                                   |
| Total Size              | total                  | Total Size                                             |
| UDP bytes received      | udpBytes               | Number of bytes received.                              |
| UDP packets dropped     | udpDropped             | Total number of dropped UDP packets.                   |
| UDP packets received    | udpPackets             | Total number of received UDP packets.                  |
| Unmapped flows          | unmappedFlows          | Total number of unmapped flows.                        |
| Used space              | used                   | Used space                                             |
| User Percent Memory     | usedPercent            | The percentage cpu utilization value.                  |
| V10 flows               | v10flows               | Total number of decoded Netflow v10 flows.             |
| V5 flows                | v5flows                | Total number of decoded Netflow v5 flows.              |
| V9 flows                | v9flows                | Total number of decoded Netflow v9 flows.              |
| Writes error            | writeErrors            | Total number of writing errors.                        |
| Writes number           | writeNum               | Total number of writing operations.                    |

---

#### nboxDnsQueryTypeAggr

Netflow 1 min aggregated by DNS query type stream.

| Display Name        | NQL Name         | Description                          |
| ------------------- | ---------------- | ------------------------------------ |
| Active Time         | activeTime       | Active Time of unique flow (session) |
| Client Bytes        | clientBytes      | Bytes (Client -> Sever)              |
| Client Packets      | clientPackets    | Packets (Client > Sever)             |
| Dns Query Type      | dnsQueryType     | DNS query type                       |
| Dns Query Type Name | dnsQueryTypeName | Dns Query Type Name                  |
| Flows               | flows            | Flows sent by Exporter               |
| Server Bytes        | serverBytes      | Bytes (Sever -> Client)              |
| Server Packets      | serverPackets    | Packets (Sever -> Client)            |
| Time                | timestamp        | Time                                 |

---

#### nboxDnsReturnCodeAggr

Netflow 1 min aggregated by HTTP return code stream.

| Display Name                | NQL Name                | Description                          |
| --------------------------- | ----------------------- | ------------------------------------ |
| Active Time                 | activeTime              | Active Time of unique flow (session) |
| Client Bytes                | clientBytes             | Bytes (Client -> Sever)              |
| Client Packets              | clientPackets           | Packets (Client > Sever)             |
| DNS Error Return Code Names | dnsErrorReturnCodeNames | DNS Error Return Code Names          |
| Dns Return Code             | dnsRetCode              | DNS return code                      |
| Flows                       | flows                   | Flows sent by Exporter               |
| Server Bytes                | serverBytes             | Bytes (Sever -> Client)              |
| Server Packets              | serverPackets           | Packets (Sever -> Client)            |
| Time                        | timestamp               | Time                                 |

---

#### nboxHttpMethodAggr

Netflow 1 min aggregated by HTTP method flows stream.

| Display Name   | NQL Name      | Description                          |
| -------------- | ------------- | ------------------------------------ |
| Active Time    | activeTime    | Active Time of unique flow (session) |
| Client Bytes   | clientBytes   | Bytes (Client -> Sever)              |
| Client Packets | clientPackets | Packets (Client > Sever)             |
| Flows          | flows         | Flows sent by Exporter               |
| Http Method    | httpMethod    | HTTP METHOD                          |
| Server Bytes   | serverBytes   | Bytes (Sever -> Client)              |
| Server Packets | serverPackets | Packets (Sever -> Client)            |
| Time           | timestamp     | Time                                 |

---

#### nboxHttpReturnCodeAggr

Netflow 1 min aggregated by HTTP return code flows stream.

| Display Name     | NQL Name      | Description                          |
| ---------------- | ------------- | ------------------------------------ |
| Active Time      | activeTime    | Active Time of unique flow (session) |
| Client Bytes     | clientBytes   | Bytes (Client -> Sever)              |
| Client Packets   | clientPackets | Packets (Client > Sever)             |
| Flows            | flows         | Flows sent by Exporter               |
| Http Return Code | httpRetCode   | HTTP return code                     |
| Server Bytes     | serverBytes   | Bytes (Sever -> Client)              |
| Server Packets   | serverPackets | Packets (Sever -> Client)            |
| Time             | timestamp     | Time                                 |

---

#### nboxHttpUserAgentAggr

Netflow 1 min aggregated by HTTP user agent flows stream.

| Display Name    | NQL Name      | Description                          |
| --------------- | ------------- | ------------------------------------ |
| Active Time     | activeTime    | Active Time of unique flow (session) |
| Client Bytes    | clientBytes   | Bytes (Client -> Sever)              |
| Client Packets  | clientPackets | Packets (Client > Sever)             |
| Flows           | flows         | Flows sent by Exporter               |
| Http User Agent | httpUa        | HTTP User Agent                      |
| Server Bytes    | serverBytes   | Bytes (Sever -> Client)              |
| Server Packets  | serverPackets | Packets (Sever -> Client)            |
| Time            | timestamp     | Time                                 |

---

#### notifications

System notifications stream.

| Display Name | NQL Name  | Description |
| ------------ | --------- | ----------- |
| Details      | details   |             |
| ID           | id        |             |
| Severity     | level     |             |
| Description  | message   |             |
| ACK          | seen      |             |
| Source       | source    |             |
| Timestamp    | timestamp |             |

---

#### testdata

Test index account.

| Display Name | NQL Name  | Description |
| ------------ | --------- | ----------- |
| PD           | PD        |             |
| age          | age       |             |
| balance      | balance   |             |
| country      | country   |             |
| dep          | dep       |             |
| docs         | docs      |             |
| fName        | fName     |             |
| host         | host      |             |
| lName        | lName     |             |
| Time         | timestamp |             |

