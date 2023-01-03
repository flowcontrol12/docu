---
description: Data streams Tab
---
# Data streams

Data streams available in the system with default fields and user created fields are located in [Dashboard>**Raw Data**] menu.

The **Data streams** implemented in the system along with the available fields are listed and described below.

## netflow

Deduplicated Netflow and Sflow records stream.

| Field  Name                | NQL Field                    | Description                                     |
| :------------------------- | :--------------------------- | :---------------------------------------------- |
| TIMESTAMP                  | Time                         | Time                                            |
| CLIENT_IP                  | Client IP                    | Client IP Address                               |
| SERVER_IP                  | Server IP                    | Server IP Address                               |
| PROTOCOL                   | Protocol                     | Protocol Number                                 |
| CLIENT_PORT                | Client Port                  | Client Port                                     |
| SERVER_PORT                | Server Port                  | Server Port                                     |
| APPLICATION                | Application                  | Application Number                              |
| UNIQUE_SRC_EXP_IPS         | Exporter IPs                 | Unique IP Adresses of Netflow Exporters         |
| UNIQUE_INTERFACES          | Interfaces                   | Unique numbers of Netflow Exporters's Inrefaces |
| CLIENT_FUNCTION            | Client Function              | Function Group of Client IP Adresses            |
| SERVER_FUNCTION            | Server Function              | Function Group of Server IP Adresses            |
| CLIENT_LOCATION            | Client Location              | Location Group of Client IP Adresses            |
| SERVER_LOCATION            | Server Location              | Location Group of Server IP Adresses            |
| CLIENT_ROLE                | Client Role                  | Role Group of Client IP Adresses                |
| SERVER_ROLE                | Server Role                  | Role Group of Server IP Adresses                |
| CLIENT_TCP_FLAGS           | Client TCP Flags             | TCP Flags (Client -> Sever)                     |
| SERVER_TCP_FLAGS           | Server TCP Flags             | TCP Flags (Sever -> Client)                     |
| UNIQUE_TOS_VALUES          | ToS Numbers                  | Unique Type of Service values                   |
| UNIQUE_MPLS_LABELS         | MPLS Labels                  | Unique MPLS Labels                              |
| UNIQUE_ASN_NUMBERS         | AS Numbers                   | Unique Autonomous Systems Numbes                |
| ICMP_TYPE                  | ICMP Type                    | ICMP Type                                       |
| CLIENT_IP_COUNTRY          | Client Country               | Country of Client IP Adresses                   |
| SERVER_IP_COUNTRY          | Server Country               | Country of Server IP Adresses                   |
| CLIENT_IP_AS_NUMBER        | Client AS Number             | AS Number of Client IP Adresses                 |
| SERVER_IP_AS_NUMBER        | Server AS Number             | AS Number of Server IP Adresses                 |
| ACTIVE_TIME                | Active Time                  | Active Time of unique flow (session)            |
| FIRST_TIMESTAMP            | First Timestamp              | First Timestamp of unique flow (session)        |
| LAST_TIMESTAMP             | Last Timestamp               | Last Timestamp of unique flow (session)         |
| CLIENT_BYTES               | Client Bytes                 | Bytes (Client -> Sever)                         |
| SERVER_BYTES               | Server Bytes                 | Bytes (Sever -> Client)                         |
| CLIENT_PACKETS             | Client Packets               | Packets (Client > Sever)                        |
| SERVER_PACKETS             | Server Packets               | Packets (Sever -> Client)                       |
| CLIENT_BITS_PER_SEC        | Client Bits/s                | Bits per Active Time (Client -> Sever)          |
| SERVER_BITS_PER_SEC        | Server Bits/s                | Bits per Active Time (Sever -> Client)          |
| CLIENT_PACKETS_PER_SEC     | Client Packets/s             | Packets per Active Time (Client -> Sever)       |
| SERVER_PACKETS_PER_SEC     | Server Packets/s             | Packets per Active Time (Sever -> Client)       |
| CLIENT_BITS_PER_PACKET     | Avg Client Bits/pkt          | Avg Bits per Packet (Client -> Sever)           |
| SERVER_BITS_PER_PACKET     | Avg Server Bits/pkt          | Avg Bits per Packet (Sever -> Client)           |
| AVG_CLIENT_BITS_PER_SEC    | Avg Client Bits/s            | Avg Bits per Interval (Client -> Sever)         |
| AVG_SERVER_BITS_PER_SEC    | Avg Server Bits/s            | Avg Bits per Interval (Sever -> Client)         |
| AVG_CLIENT_PACKETS_PER_SEC | Avg Client Packets/s         | Avg Packets per Interval (Client -> Sever)      |
| AVG_SERVER_PACKETS_PER_SEC | Avg Server Packets/s         | Avg Packets per Interval (Sever -> Client)      |
| CLIENT_MIN_IP_LENGTH       | Client Min Packet Length     | Min Packet Length (Client -> Sever)             |
| CLIENT_MAX_IP_LENGTH       | Client Max Packet Length     | Max Packet Length (Client -> Sever)             |
| RETRANSMITTED_IN_BYTES     | Rentransmitted In Bytes      | Rentransmitted Bytes (Incomming)                |
| RETRANSMITTED_OUT_BYTES    | Rentransmitted Out Bytes     | Rentransmitted Bytes (Outgoing)                 |
| RETRANSMITTED_IN_PKTS      | Rentransmitted In Packets    | Rentransmitted Packets (Incomming)              |
| RETRANSMITTED_OUT_PKTS     | Rentransmitted Out Packets   | Rentransmitted Packets (Outgoing)               |
| CLIENT_MAX_TTL             | Client Max TTL               | Max TTL (Client -> Sever)                       |
| CLIENT_NW_LATENCY_MS       | Client Network Time          | Network Latency (Client -> Server)              |
| SERVER_NW_LATENCY_MS       | Server Network Time          | Network Latency (Server -> Client)              |
| APPL_LATENCY_MS            | Initial Server Response Time | Response Time (Latency) (Application)           |
| IN_INTERFACE               | In Interface                 | Interface (Incomming)                           |
| OUT_INTERFACE              | Out Interface                | Interface (Outgoing)                            |
| FIREWALL_EVENT             | Firewall Event               | Firewall Event (ASA)                            |
| FW_EXT_EVENT               | Firewall Ext Event           | Firewall Extended Event (ASA)                   |
| MPLS_TOP_LABEL_EXP         | MPLS Top Label               | MPLS Top Label                                  |
| MPLS_LABEL_1               | MPLS Label 1                 | MPLS Label 1                                    |
| MPLS_LABEL_2               | MPLS Label 2                 | MPLS Label 2                                    |
| MPLS_LABEL_3               | MPLS Label 3                 | MPLS Label 3                                    |
| MPLS_LABEL_4               | MPLS Label 4                 | MPLS Label 4                                    |
| MPLS_LABEL_5               | MPLS Label 5                 | MPLS Label 5                                    |
| SRC_AS                     | Source AS                    | Source Autonomous Systems                       |
| DST_AS                     | Destination AS               | Destination Autonomous Systems                  |
| NF_F_XLATE_SRC_ADDR_IPV4   | Post Nat Source IP           | Post Nat Source IP Address                      |
| NF_F_XLATE_SRC_PORT        | Post Nat Source Port         | Post Nat Source Port                            |
| MIN_IP_LENGTH              | Min Packet Length            | Min Packet Length                               |
| MAX_IP_LENGTH              | Max Packet Length            | Max Packet Length                               |
| FLOW_LABEL                 | Flow Label                   | Flow Label                                      |
| IPV6_OPTION_HEADERS        | Ipv6 Options                 | IPv6 Options                                    |
| SRC_VLAN                   | Source VLAN                  | Source VLAN                                     |
| DST_VLAN                   | Destination VLAN             | Destination VLAN                                |
| IP_TOS                     | ToS                          | Type of Service number                          |
| FORWARDING_STATUS          | Forwarding Status            | Forwarding Status                               |
| RETRANSMITTED_IN_BYTES     | Rentransmitted In Bytes      | Rentransmitted Bytes (Incomming)                |
| RETRANSMITTED_OUT_BYTES    | Rentransmitted Out Bytes     | Rentransmitted Bytes (Outgoing)                 |
| RETRANSMITTED_IN_PKTS      | Rentransmitted In Packets    | Rentransmitted Packets (Incomming)              |
| RETRANSMITTED_OUT_PKTS     | Rentransmitted Out Packets   | Rentransmitted Packets (Outgoing)               |
| CLIENT_MAX_TTL             | Client Max TTL               | Max TTL (Client -> Sever)                       |
| CLIENT_NW_LATENCY_MS       | Client Network Time          | Network Latency (Client -> Server)              |
| SERVER_NW_LATENCY_MS       | Server Network Time          | Network Latency (Server -> Client)              |
| APPLICATION_ID             | Application ID               | Application ID                                  |
| APPL_LATENCY_MS            | Initial Server Response Time | Initial Server Response Time                    |







## netflowTotalAggr

| Field Name           | NQL Field                 | Description                                |
| :------------------- | :------------------------ | :----------------------------------------- |
| Time                 | timestamp                 | Time                                       |
| Active Time          | activeTime                | Active Time of unique flow (ms)            |
| Flows                | flows                     | Flows sended by Exporter                   |
| Client Bytes         | clientBytes               | Bytes (Client -> Sever)                    |
| Server Bytes         | serverBytes               | Bytes (Sever -> Client)                    |
| Client Packets       | clientPackets             | Packets (Client -> Sever)                  |
| Server Packets       | serverPackets             | Packets (Sever -> Client)                  |
| Sessions             | sessions                  | Deduplicated Flows                         |
| Bytes                | bytes                     | Bytes                                      |
| Bits                 | bits                      | Bits                                       |
| Packets              | packets                   | Packets                                    |
| Client Bits          | clientBits                | Bits (Client -> Sever)                     |
| Server Bits          | serverBits                | Bits (Sever -> Client)                     |
| Server Packets/s     | serverPacketsPerSecond    | Packets per Active Time (Sever -> Client)  |
| Client Packets/s     | clientPacketsPerSecond    | Packets per Active Time (Client -> Sever)  |
| Server Bits/s        | serverBitsPerSecond       | Bits per Active Time (Sever -> Client)     |
| Client Bits/s        | clientBitsPerSecond       | Bits per Active Time (Client -> Sever)     |
| Avg Flows/s          | avgFlowsPerSecond         | Avg Flows per Actie Time                   |
| Avg Server Packets/s | avgServerPacketsPerSecond | Avg Packets per Interval (Sever -> Client) |
| Avg Client Packets/s | avgClientPacketsPerSecond | Avg Packets per Interval (Client -> Sever) |
| Avg Server Bits/s    | avgServerBitsPerSecond    | Avg Bits per Interval (Sever -> Client)    |
| Avg Client Bits/s    | avgClientBitsPerSecond    | Avg Bits per Interval (Client -> Sever)    |
| Avg Bits/s           | avgBitsPerSecond          | Avg Bits per Interval                      |
| Avg Packets/s        | avgPacketsPerSecond       | Avg Packets per Interval                   |
| Bits/s               | bitsPerSecond             | Bits per Active Time                       |



## netflowByIfcAggr

Netflow 1 min aggregated by interface flows stream.



| Field Name        | NQL Name               | Description                                                  |
| :---------------- | :--------------------- | :----------------------------------------------------------- |
| Time              | timestamp              | Time                                                         |
| Active Time       | activeTime             | Active Time of unique flow (ms)                              |
| Exporter IP       | exporterIp             | Exporter IP                                                  |
| Exporter Name     | exporterName           | Lookup - Exporter IP as Exporter Name from SNMP database     |
| Interface Index   | ifcIndex               | Interface Index                                              |
| Interface Name    | ifcName                | Lookup - Interface Index as Interface Name from SNMP database |
| Flows             | flows                  | Flows sended by Exporter                                     |
| In Bytes          | inBytes                | Bytes (In)                                                   |
| Out Bytes         | outBytes               | Bytes (Out)                                                  |
| In Packets        | inPackets              | Packets (In)                                                 |
| Out Packets       | outPackets             | Packets (Out)                                                |
| Bytes             | bytes                  | Bytes                                                        |
| Bits              | bits                   | Bits                                                         |
| Packets           | packets                | Packets                                                      |
| In Bits           | inBits                 | Bits (In)                                                    |
| Out Bits          | outBits                | Bits (Out)                                                   |
| Avg Flows/s       | avgFlowsPerSecond      | Avg Flows per Interval                                       |
| Avg In Packets/s  | avgInPacketsPerSecond  | Avg Packets (In) per Interval                                |
| Avg Out Packets/s | avgOutPacketsPerSecond | Avg Packets (Out) per Interval                               |
| Avg In Bits/s     | avgInBitsPerSecond     | Avg Bits (In) per Interval                                   |
| Avg Out Bits/s    | avgOutBitsPerSecond    | Avg Bits (Out) per Interval                                  |
| % In Utilization  | pctInUtilization       | % Utilization (In)                                           |
| % Out Utilization | pctOutUtilization      | % Utilization (Out)                                          |
| Avg Packets/s     | avgPacketsPerSecond    | Avg Packets (In) per Interval                                |
| Avg Bits/s        | avgBitsPerSecond       | Avg Bits (In) per Interval                                   |



## netflowByAppAggr

Netflow 1 min aggregated by application flows stream.



| Field Name                   | NQL Name                       | Description                                         |
| :--------------------------- | :----------------------------- | :-------------------------------------------------- |
| Time                         | timestamp                      | Time                                                |
| Active Time                  | activeTime                     | Active Time of unique flow (ms)                     |
| Application                  | application                    | Application                                         |
| Application Name             | applicationName                | Application Name                                    |
| Flows                        | flows                          | Flows sended by Exporter                            |
| Client Bytes                 | clientBytes                    | Bytes (Client -> Sever)                             |
| Server Bytes                 | serverBytes                    | Bytes (Sever -> Client)                             |
| Client Packets               | clientPackets                  | Packets (Client -> Sever)                           |
| Server Packets               | serverPackets                  | Packets (Sever -> Client)                           |
| Server Network Time          | serverNetworkTime              | Network Latency from Server Side                    |
| Initial Server Response Time | initialServerResponseTime      | Initial Server Response Time                        |
| Client Network Time          | clientNetworkTime              | Network Latency from Client Side                    |
| In Retransmitted Packets     | retransmittedInPackets         | Retransmitted Packets (Client -> Server)            |
| Out Retransmitted Packets    | retransmittedOutPackets        | Retransmitted Packets (Server -> Client)            |
| Sessions                     | sessions                       | Deduplicated Flows                                  |
| Bytes                        | bytes                          | Bytes                                               |
| Bits                         | bits                           | Bits                                                |
| Packets                      | packets                        | Packets                                             |
| Client Bits                  | clientBits                     | Bits (Client -> Sever)                              |
| Server Bits                  | serverBits                     | Bits (Sever -> Client)                              |
| Server Packets/s             | serverPacketsPerSecond         | Packets per Active Time (Sever -> Client)           |
| Client Packets/s             | clientPacketsPerSecond         | Packets per Active Time (Client -> Sever)           |
| Server Bits/s                | serverBitsPerSecond            | Bits per Active Time (Sever -> Client)              |
| Client Bits/s                | clientBitsPerSecond            | Bits per Active Time (Client -> Sever)              |
| Avg Flows/s                  | avgFlowsPerSecond              | Avg Flows per Actie Time                            |
| Avg Server Packets/s         | avgServerPacketsPerSecond      | Avg Packets per Interval (Sever -> Client)          |
| Avg Client Packets/s         | avgClientPacketsPerSecond      | Avg Packets per Interval (Client -> Sever)          |
| Avg Server Bits/s            | avgServerBitsPerSecond         | Avg Bits per Interval (Sever -> Client)             |
| Avg Client Bits/s            | avgClientBitsPerSecond         | Avg Bits per Interval (Client -> Sever)             |
| % In Retransmitted Packets   | percentRetransmittedInPackets  | Percent of Retransmitted Packets (Client -> Server) |
| % Out Retransmitted Packets  | percentRetransmittedOutPackets | Percent of Retransmitted Packets (Server -> Client) |
| Avg Packets/s                | avgPacketsPerSecond            | Avg Packets (In) per Interval                       |
| Avg Bits/s                   | avgBitsPerSecond               | Avg Bits (In) per Interval                          |
| Packets/s                    | packetsPerSecond               | Packets per Active Time                             |
| Bits/s                       | bitsPerSecond                  | Bits per Active Time                                |
| Client TCP Flags             | clientTcpFlags                 | Mapper - TCP Flags (Client -> Sever)                |
| Server TCP Flags             | serverTcpFlags                 | Mapper - TCP Flags (Sever -> Client)                |



## netflowByAsnAggr

Netflow 1 min aggregated by ASN flows stream.



| Field Name           | NQL Field                 | Description                                          |
| :------------------- | :------------------------ | :--------------------------------------------------- |
| Time                 | timestamp                 | Time                                                 |
| Active Time          | activeTime                | Active Time of unique flow (ms)                      |
| AS Number            | asNumber                  | AS Number                                            |
| AS Name              | asName                    | Lookup - AS Number to AS Name from build-in database |
| Direction            | asDirection               | Direction                                            |
| Flows                | flows                     | Flows sended by Exporter                             |
| Client Bytes         | clientBytes               | Bytes (Client -> Sever)                              |
| Server Bytes         | serverBytes               | Bytes (Sever -> Client)                              |
| Client Packets       | clientPackets             | Packets (Client -> Sever)                            |
| Server Packets       | serverPackets             | Packets (Sever -> Client)                            |
| Sessions             | sessions                  | Deduplicated Flows                                   |
| Bytes                | bytes                     | Bytes                                                |
| Bits                 | bits                      | Bits                                                 |
| Packets              | packets                   | Packets                                              |
| Client Bits          | clientBits                | Bits (Client -> Sever)                               |
| Server Bits          | serverBits                | Bits (Sever -> Client)                               |
| Server Packets/s     | serverPacketsPerSecond    | Packets per Active Time (Sever -> Client)            |
| Client Packets/s     | clientPacketsPerSecond    | Packets per Active Time (Client -> Sever)            |
| Server Bits/s        | serverBitsPerSecond       | Bits per Active Time (Sever -> Client)               |
| Client Bits/s        | clientBitsPerSecond       | Bits per Active Time (Client -> Sever)               |
| Avg Flows/s          | avgFlowsPerSecond         | Avg Flows per Actie Time                             |
| Avg Server Packets/s | avgServerPacketsPerSecond | Avg Packets per Interval (Sever -> Client)           |
| Avg Client Packets/s | avgClientPacketsPerSecond | Avg Packets per Interval (Client -> Sever)           |
| Avg Server Bits/s    | avgServerBitsPerSecond    | Avg Bits per Interval (Sever -> Client)              |
| Avg Client Bits/s    | avgClientBitsPerSecond    | Avg Bits per Interval (Client -> Sever)              |
| Avg Packets/s        | avgPacketsPerSecond       | Avg Packets (In) per Interval                        |
| Avg Bits/s           | avgBitsPerSecond          | Avg Bits (In) per Interval                           |
| Packets/s            | packetsPerSecond          | Packets per Active Time                              |
| Bits/s               | bitsPerSecond             | Bits per Active Time                                 |



---

## netflowByGroupAggr

Netflow 1 min aggregated by group flows stream.



| Field Name           | NQL Name                  | Description                                |
| :------------------- | :------------------------ | :----------------------------------------- |
| Time                 | timestamp                 | Time                                       |
| Active Time          | activeTime                | Active Time of unique flow (ms)            |
| Group Name           | groupName                 | Location Group Name                        |
| Direction            | groupDirection            | Direction                                  |
| Flows                | flows                     | Flows sended by Exporter                   |
| Client Bytes         | clientBytes               | Bytes (Client -> Sever)                    |
| Server Bytes         | serverBytes               | Bytes (Sever -> Client)                    |
| Client Packets       | clientPackets             | Packets (Client -> Sever)                  |
| Server Packets       | serverPackets             | Packets (Sever -> Client)                  |
| Sessions             | sessions                  | Deduplicated Flows                         |
| Bytes                | bytes                     | Bytes                                      |
| Bits                 | bits                      | Bits                                       |
| Packets              | packets                   | Packets                                    |
| Client Bits          | clientBits                | Bits (Client -> Sever)                     |
| Server Bits          | serverBits                | Bits (Sever -> Client)                     |
| Server Packets/s     | serverPacketsPerSecond    | Packets per Active Time (Sever -> Client)  |
| Client Packets/s     | clientPacketsPerSecond    | Packets per Active Time (Client -> Sever)  |
| Server Bits/s        | serverBitsPerSecond       | Bits per Active Time (Sever -> Client)     |
| Client Bits/s        | clientBitsPerSecond       | Bits per Active Time (Client -> Sever)     |
| Avg Flows/s          | avgFlowsPerSecond         | Avg Flows per Actie Time                   |
| Avg Server Packets/s | avgServerPacketsPerSecond | Avg Packets per Interval (Sever -> Client) |
| Avg Client Packets/s | avgClientPacketsPerSecond | Avg Packets per Interval (Client -> Sever) |
| Avg Server Bits/s    | avgServerBitsPerSecond    | Avg Bits per Interval (Sever -> Client)    |
| Avg Client Bits/s    | avgClientBitsPerSecond    | Avg Bits per Interval (Client -> Sever)    |
| Avg Packets/s        | avgPacketsPerSecond       | Avg Packets (In) per Interval              |
| Avg Bits/s           | avgBitsPerSecond          | Avg Bits (In) per Interval                 |
| Packets/s            | packetsPerSecond          | Packets per Active Time                    |
| Bits/s               | bitsPerSecond             | Bits per Active Time                       |





## Group Function

| Field Name        | NQL Name               | Description                                                  |
| ----------------- | ---------------------- | :----------------------------------------------------------- |
| Time              | timestamp              | Time                                                         |
| Active Time       | activeTime             | Active Time of unique flow (ms)                              |
| Exporter IP       | exporterIp             | Exporter IP                                                  |
| Exporter Name     | exporterName           | Lookup - Exporter IP as Exporter Name from SNMP database     |
| Interface Index   | ifcIndex               | Interface Index                                              |
| Interface Name    | ifcName                | Lookup - Interface Index as Interface Name from SNMP database |
| Flows             | flows                  | Flows sended by Exporter                                     |
| In Bytes          | inBytes                | Bytes (In)                                                   |
| Out Bytes         | outBytes               | Bytes (Out)                                                  |
| In Packets        | inPackets              | Packets (In)                                                 |
| Out Packets       | outPackets             | Packets (Out)                                                |
| Bytes             | bytes                  | Bytes                                                        |
| Bits              | bits                   | Bits                                                         |
| Packets           | packets                | Packets                                                      |
| In Bits           | inBits                 | Bits (In)                                                    |
| Out Bits          | outBits                | Bits (Out)                                                   |
| Avg Flows/s       | avgFlowsPerSecond      | Avg Flows per Interval                                       |
| Avg In Packets/s  | avgInPacketsPerSecond  | Avg Packets (In) per Interval                                |
| Avg Out Packets/s | avgOutPacketsPerSecond | Avg Packets (Out) per Interval                               |
| Avg In Bits/s     | avgInBitsPerSecond     | Avg Bits (In) per Interval                                   |
| Avg Out Bits/s    | avgOutBitsPerSecond    | Avg Bits (Out) per Interval                                  |
| % In Utilization  | pctInUtilization       | % Utilization (In)                                           |
| % Out Utilization | pctOutUtilization      | % Utilization (Out)                                          |
| Avg Packets/s     | avgPacketsPerSecond    | Avg Packets (In) per Interval                                |
| Avg Bits/s        | avgBitsPerSecond       | Avg Bits (In) per Interval                                   |



## Group Role



| Field Name           | NQL Name                  | Description                                |
| :------------------- | :------------------------ | :----------------------------------------- |
| Time                 | timestamp                 | Time                                       |
| Active Time          | activeTime                | Active Time of unique flow (ms)            |
| Group Name           | groupName                 | Role Group Name                            |
| Direction            | groupDirection            | Direction                                  |
| Flows                | flows                     | Flows sended by Exporter                   |
| Client Bytes         | clientBytes               | Bytes (Client -> Sever)                    |
| Server Bytes         | serverBytes               | Bytes (Sever -> Client)                    |
| Client Packets       | clientPackets             | Packets (Client -> Sever)                  |
| Server Packets       | serverPackets             | Packets (Sever -> Client)                  |
| Sessions             | sessions                  | Deduplicated Flows                         |
| Bytes                | bytes                     | Bytes                                      |
| Bits                 | bits                      | Bits                                       |
| Packets              | packets                   | Packets                                    |
| Client Bits          | clientBits                | Bits (Client -> Sever)                     |
| Server Bits          | serverBits                | Bits (Sever -> Client)                     |
| Server Packets/s     | serverPacketsPerSecond    | Packets per Active Time (Sever -> Client)  |
| Client Packets/s     | clientPacketsPerSecond    | Packets per Active Time (Client -> Sever)  |
| Server Bits/s        | serverBitsPerSecond       | Bits per Active Time (Sever -> Client)     |
| Client Bits/s        | clientBitsPerSecond       | Bits per Active Time (Client -> Sever)     |
| Avg Flows/s          | avgFlowsPerSecond         | Avg Flows per Actie Time                   |
| Avg Server Packets/s | avgServerPacketsPerSecond | Avg Packets per Interval (Sever -> Client) |
| Avg Client Packets/s | avgClientPacketsPerSecond | Avg Packets per Interval (Client -> Sever) |
| Avg Server Bits/s    | avgServerBitsPerSecond    | Avg Bits per Interval (Sever -> Client)    |
| Avg Client Bits/s    | avgClientBitsPerSecond    | Avg Bits per Interval (Client -> Sever)    |
| Avg Packets/s        | avgPacketsPerSecond       | Avg Packets (In) per Interval              |
| Avg Bits/s           | avgBitsPerSecond          | Avg Bits (In) per Interval                 |
| Packets/s            | packetsPerSecond          | Packets per Active Time                    |
| Bits/s               | bitsPerSecond             | Bits per Active Time                       |







## netflowByCountryAggr

Netflow 1 min aggregated by country flows stream.



| Field Name           | NQL Name                  | Description                                |
| :------------------- | :------------------------ | :----------------------------------------- |
| Time                 | timestamp                 | Time                                       |
| Active Time          | activeTime                | Active Time of unique flow (ms)            |
| Country Name         | countryName               | Country Name                               |
| Country Code         | countryCode               | Country Code                               |
| Direction            | countryDirection          | Direction                                  |
| Flows                | flows                     | Flows sended by Exporter                   |
| Client Bytes         | clientBytes               | Bytes (Client -> Sever)                    |
| Server Bytes         | serverBytes               | Bytes (Sever -> Client)                    |
| Client Packets       | clientPackets             | Packets (Client -> Sever)                  |
| Server Packets       | serverPackets             | Packets (Sever -> Client)                  |
| Sessions             | sessions                  | Deduplicated Flows                         |
| Bytes                | bytes                     | Bytes                                      |
| Bits                 | bits                      | Bits                                       |
| Packets              | packets                   | Packets                                    |
| Client Bits          | clientBits                | Bits (Client -> Sever)                     |
| Server Bits          | serverBits                | Bits (Sever -> Client)                     |
| Server Packets/s     | serverPacketsPerSecond    | Packets per Active Time (Sever -> Client)  |
| Client Packets/s     | clientPacketsPerSecond    | Packets per Active Time (Client -> Sever)  |
| Server Bits/s        | serverBitsPerSecond       | Bits per Active Time (Sever -> Client)     |
| Client Bits/s        | clientBitsPerSecond       | Bits per Active Time (Client -> Sever)     |
| Avg Flows/s          | avgFlowsPerSecond         | Avg Flows per Actie Time                   |
| Avg Server Packets/s | avgServerPacketsPerSecond | Avg Packets per Interval (Sever -> Client) |
| Avg Client Packets/s | avgClientPacketsPerSecond | Avg Packets per Interval (Client -> Sever) |
| Avg Server Bits/s    | avgServerBitsPerSecond    | Avg Bits per Interval (Sever -> Client)    |
| Avg Client Bits/s    | avgClientBitsPerSecond    | Avg Bits per Interval (Client -> Sever)    |
| Avg Packets/s        | avgPacketsPerSecond       | Avg Packets (In) per Interval              |
| Avg Bits/s           | avgBitsPerSecond          | Avg Bits (In) per Interval                 |
| Packets/s            | packetsPerSecond          | Packets per Active Time                    |
| Bits/s               | bitsPerSecond             | Bits per Active Time                       |

## netflowByExporterAggr

Netflow 1 min aggregated by exporter flows stream.

| Field Name           | NQL Name            | Description                                                  |
| :------------------- | :------------------ | :----------------------------------------------------------- |
| Time                 | timestamp           | Time                                                         |
| Active Time          | activeTime          | Active Time of unique flow (ms)                              |
| Exporter IP          | exporterIp          | Exporter IP                                                  |
| Exporter Name        | exporterName        | Lookup - Exporter IP as Exporter Name from SNMP database     |
| Exporter Description | exporterDescription | Lookup - Exporter IP as Exporter Description from SNMP database |
| Exporter Location    | exporterLocation    | lookup("snmp-int-exp", "dev.loc",  {"exporterIp": exporterIp}) |
| Flows                | flows               | Flows sended by Exporter                                     |
| Bytes                | bytes               | Bytes                                                        |
| Packets              | packets             | Packets                                                      |
| Bits                 | bits                | Bits                                                         |
| Avg Flows/s          | avgFlowsPerSecond   | Avg Flows per Interval                                       |
| Avg Packets/s        | avgPacketsPerSecond | Avg Packets (In) per Interval                                |
| Avg Bits/s           | avgBitsPerSecond    | Avg Bits (In) per Interval                                   |





## netflowByIpAggr

Netflow 1 min aggregated by top IP flows stream.

| Field Name                   | NQL Name                       | Description                                                |
| :--------------------------- | :----------------------------- | :--------------------------------------------------------- |
| Time                         | timestamp                      | Time                                                       |
| Active Time                  | activeTime                     | Active Time of unique flow (ms)                            |
| IP Address                   | ipAddress                      | IP Address                                                 |
| IP Address Name              | ipAddressName                  | IP Address Name                                            |
| AS Name                      | asName                         | Lookup - AS Number to AS Name from build-in database       |
| Country Code                 | countryCode                    | Mapper - IP Address to Country Code from build-in database |
| Direction                    | ipDirection                    | Direction                                                  |
| Flows                        | flows                          | Flows sended by Exporter                                   |
| Client Bytes                 | clientBytes                    | Bytes (Client -> Sever)                                    |
| Server Bytes                 | serverBytes                    | Bytes (Sever -> Client)                                    |
| Client Packets               | clientPackets                  | Packets (Client -> Sever)                                  |
| Server Packets               | serverPackets                  | Packets (Sever -> Client)                                  |
| Server Network Time          | serverNetworkTime              | Network Latency from Server Side                           |
| Initial Server Response Time | initialServerResponseTime      | Initial Server Response Time                               |
| Client Network Time          | clientNetworkTime              | Network Latency from Client Side                           |
| In Retransmitted Packets     | retransmittedInPackets         | Retransmitted Packets (Client -> Server)                   |
| Out Retransmitted Packets    | retransmittedOutPackets        | Retransmitted Packets (Server -> Client)                   |
| Sessions                     | sessions                       | Deduplicated Flows                                         |
| Bytes                        | bytes                          | Bytes                                                      |
| Bits                         | bits                           | Bits                                                       |
| Packets                      | packets                        | Packets                                                    |
| Client Bits                  | clientBits                     | Bits (Client -> Sever)                                     |
| Server Bits                  | serverBits                     | Bits (Sever -> Client)                                     |
| Server Packets/s             | serverPacketsPerSecond         | Packets per Active Time (Sever -> Client)                  |
| Client Packets/s             | clientPacketsPerSecond         | Packets per Active Time (Client -> Sever)                  |
| Server Bits/s                | serverBitsPerSecond            | Bits per Active Time (Sever -> Client)                     |
| Client Bits/s                | clientBitsPerSecond            | Bits per Active Time (Client -> Sever)                     |
| Avg Flows/s                  | avgFlowsPerSecond              | Avg Flows per Actie Time                                   |
| Avg Server Packets/s         | avgServerPacketsPerSecond      | Avg Packets per Interval (Sever -> Client)                 |
| Avg Client Packets/s         | avgClientPacketsPerSecond      | Avg Packets per Interval (Client -> Sever)                 |
| Avg Server Bits/s            | avgServerBitsPerSecond         | Avg Bits per Interval (Sever -> Client)                    |
| Avg Client Bits/s            | avgClientBitsPerSecond         | Avg Bits per Interval (Client -> Sever)                    |
| Avg Client Bits/pkt          | avgClientBitsPerPacket         | Avg Bits per Packet (Client -> Sever)                      |
| Avg Server Bits/pkt          | avgServerBitsPerPacket         | Avg Bits per Packet (Sever -> Client)                      |
| Avg Client Bits/flow         | avgClientBitsPerFlow           | Avg Bits per Flow (Client -> Sever)                        |
| Avg Server Bits/flow         | avgServerBitsPerFlow           | Avg Bits per Flow (Sever -> Client)                        |
| Avg Client Packets/flow      | avgClientPacketsPerFlow        | Avg Packets per Flow (Client -> Sever)                     |
| Avg Server Packets/flow      | avgServerPacketsPerFlow        | Avg Packets per Flow (Sever -> Client)                     |
| % In Retransmitted Packets   | percentRetransmittedInPackets  | Percent of Retransmitted Packets (Client -> Server)        |
| % Out Retransmitted Packets  | percentRetransmittedOutPackets | Percent of Retransmitted Packets (Server -> Client)        |
| Avg Packets/s                | avgPacketsPerSecond            | Avg Packets (In) per Interval                              |
| Avg Bits/s                   | avgBitsPerSecond               | Avg Bits (In) per Interval                                 |
| Packets/s                    | packetsPerSecond               | Packets per Active Time                                    |
| Bits/s                       | bitsPerSecond                  | Bits per Active Time                                       |







## netflowByMplsAggr

Netflow 1 min aggregated by MPLS flows stream.

| Field Name           | NQL Name                  | Description                                |
| :------------------- | :------------------------ | :----------------------------------------- |
| Time                 | timestamp                 | Time                                       |
| Active Time          | activeTime                | Active Time of unique flow (ms)            |
| MPLS Label           | mpls                      | Unique MPLS Label                          |
| Flows                | flows                     | Flows sended by Exporter                   |
| Client Bytes         | clientBytes               | Bytes (Client -> Sever)                    |
| Server Bytes         | serverBytes               | Bytes (Sever -> Client)                    |
| Client Packets       | clientPackets             | Packets (Client -> Sever)                  |
| Server Packets       | serverPackets             | Packets (Sever -> Client)                  |
| Sessions             | sessions                  | Deduplicated Flows                         |
| Bytes                | bytes                     | Bytes                                      |
| Bits                 | bits                      | Bits                                       |
| Packets              | packets                   | Packets                                    |
| Client Bits          | clientBits                | Bits (Client -> Sever)                     |
| Server Bits          | serverBits                | Bits (Sever -> Client)                     |
| Server Packets/s     | serverPacketsPerSecond    | Packets per Active Time (Sever -> Client)  |
| Client Packets/s     | clientPacketsPerSecond    | Packets per Active Time (Client -> Sever)  |
| Server Bits/s        | serverBitsPerSecond       | Bits per Active Time (Sever -> Client)     |
| Client Bits/s        | clientBitsPerSecond       | Bits per Active Time (Client -> Sever)     |
| Avg Flows/s          | avgFlowsPerSecond         | Avg Flows per Actie Time                   |
| Avg Server Packets/s | avgServerPacketsPerSecond | Avg Packets per Interval (Sever -> Client) |
| Avg Client Packets/s | avgClientPacketsPerSecond | Avg Packets per Interval (Client -> Sever) |
| Avg Server Bits/s    | avgServerBitsPerSecond    | Avg Bits per Interval (Sever -> Client)    |
| Avg Client Bits/s    | avgClientBitsPerSecond    | Avg Bits per Interval (Client -> Sever)    |
| Avg Packets/s        | avgPacketsPerSecond       | Avg Packets (In) per Interval              |
| Avg Bits/s           | avgBitsPerSecond          | Avg Bits (In) per Interval                 |
| Packets/s            | packetsPerSecond          | Packets per Active Time                    |
| Bits/s               | bitsPerSecond             | Bits per Active Time                       |

## netflowByProtocolAggr



Netflow 1 min aggregated by IP protocol flows stream.

| Field Name           | NQL Name                  | Description                                |
| :------------------- | :------------------------ | :----------------------------------------- |
| Time                 | timestamp                 | Time                                       |
| Active Time          | activeTime                | Active Time of unique flow (ms)            |
| Protocol Number      | protocol                  | Protocol Number                            |
| Protocol Name        | protocolName              | Protocol Name                              |
| Flows                | flows                     | Flows sended by Exporter                   |
| Client Bytes         | clientBytes               | Bytes (Client -> Sever)                    |
| Server Bytes         | serverBytes               | Bytes (Sever -> Client)                    |
| Client Packets       | clientPackets             | Packets (Client -> Sever)                  |
| Server Packets       | serverPackets             | Packets (Sever -> Client)                  |
| Sessions             | sessions                  | Deduplicated Flows                         |
| Bytes                | bytes                     | Bytes                                      |
| Bits                 | bits                      | Bits                                       |
| Packets              | packets                   | Packets                                    |
| Client Bits          | clientBits                | Bits (Client -> Sever)                     |
| Server Bits          | serverBits                | Bits (Sever -> Client)                     |
| Server Packets/s     | serverPacketsPerSecond    | Packets per Active Time (Sever -> Client)  |
| Client Packets/s     | clientPacketsPerSecond    | Packets per Active Time (Client -> Sever)  |
| Server Bits/s        | serverBitsPerSecond       | Bits per Active Time (Sever -> Client)     |
| Client Bits/s        | clientBitsPerSecond       | Bits per Active Time (Client -> Sever)     |
| Avg Flows/s          | avgFlowsPerSecond         | Avg Flows per Actie Time                   |
| Avg Server Packets/s | avgServerPacketsPerSecond | Avg Packets per Interval (Sever -> Client) |
| Avg Client Packets/s | avgClientPacketsPerSecond | Avg Packets per Interval (Client -> Sever) |
| Avg Server Bits/s    | avgServerBitsPerSecond    | Avg Bits per Interval (Sever -> Client)    |
| Avg Client Bits/s    | avgClientBitsPerSecond    | Avg Bits per Interval (Client -> Sever)    |
| Avg Packets/s        | avgPacketsPerSecond       | Avg Packets (In) per Interval              |
| Avg Bits/s           | avgBitsPerSecond          | Avg Bits (In) per Interval                 |
| Packets/s            | packetsPerSecond          | Packets per Active Time                    |
| Bits/s               | bitsPerSecond             | Bits per Active Time                       |

## netflowByTosAggr

Netflow 1 min aggregated by TOS flows stream.

| Field Name           | NQL Name                  | Description                                |
| :------------------- | :------------------------ | :----------------------------------------- |
| Time                 | timestamp                 | Time                                       |
| Active Time          | activeTime                | Active Time of unique flow (ms)            |
| ToS Number           | tosNumber                 | ToS Number                                 |
| ToS Name             | tosName                   | ToS Name                                   |
| Flows                | flows                     | Flows sended by Exporter                   |
| Client Bytes         | clientBytes               | Bytes (Client -> Sever)                    |
| Server Bytes         | serverBytes               | Bytes (Sever -> Client)                    |
| Client Packets       | clientPackets             | Packets (Client -> Sever)                  |
| Server Packets       | serverPackets             | Packets (Sever -> Client)                  |
| Sessions             | sessions                  | Deduplicated Flows                         |
| Bytes                | bytes                     | Bytes                                      |
| Bits                 | bits                      | Bits                                       |
| Packets              | packets                   | Packets                                    |
| Client Bits          | clientBits                | Bits (Client -> Sever)                     |
| Server Bits          | serverBits                | Bits (Sever -> Client)                     |
| Server Packets/s     | serverPacketsPerSecond    | Packets per Active Time (Sever -> Client)  |
| Client Packets/s     | clientPacketsPerSecond    | Packets per Active Time (Client -> Sever)  |
| Server Bits/s        | serverBitsPerSecond       | Bits per Active Time (Sever -> Client)     |
| Client Bits/s        | clientBitsPerSecond       | Bits per Active Time (Client -> Sever)     |
| Avg Flows/s          | avgFlowsPerSecond         | Avg Flows per Actie Time                   |
| Avg Server Packets/s | avgServerPacketsPerSecond | Avg Packets per Interval (Sever -> Client) |
| Avg Client Packets/s | avgClientPacketsPerSecond | Avg Packets per Interval (Client -> Sever) |
| Avg Server Bits/s    | avgServerBitsPerSecond    | Avg Bits per Interval (Sever -> Client)    |
| Avg Client Bits/s    | avgClientBitsPerSecond    | Avg Bits per Interval (Client -> Sever)    |
| Avg Packets/s        | avgPacketsPerSecond       | Avg Packets (In) per Interval              |
| Avg Bits/s           | avgBitsPerSecond          | Avg Bits (In) per Interval                 |
| Packets/s            | packetsPerSecond          | Packets per Active Time                    |
| Bits/s               | bitsPerSecond             | Bits per Active Time                       |



## alerts

Alerts stream.



| Field Name               | NQL Name                     | Description                                |
| :----------------------- | :--------------------------- | :----------------------------------------- |
| Alert Id                 | id                           | Alert Identifier                           |
| Time                     | timestamp                    | Alert Time                                 |
| Rule Type                | alertRuleType                | Rule Type                                  |
| Alert Name               | alertName                    | Alert Name                                 |
| Rule Id                  | alertRuleId                  | Rule Identifier                            |
| Alert  Description       | alertDescription             | Alert Description                          |
| Alert Severity           | alertSeverity                | Alert Severity                             |
| Threshold  Level         | alertThresholdLevel          | Threshold Level  (Criticial, Major, Minor) |
| Alert Tags               | alertTags                    | Tags                                       |
| Mitre Tactic             | alertMitreTactic             | Mitre ATT&CK  Tactic                       |
| Mitre  Technique         | alertMitreTechnique          | Mitre ATT&CK  Technique Id                 |
| Mitre  Technique Id      | alertMitreTechniqueId        | Mitre ATT&CK  Technique Id                 |
| Mitre  Subtechnique      | alertMitreSubtechnique       | Mitre ATT&CK  Subtechnique                 |
| Correlations             | alertCorrelations            | Rule Correlations                          |
| Mitigation  System       | alertMitigationSystem        | Mitigation System                          |
| Mitigation IP            | alertMitigationIpField       | Mitigation IP                              |
| Raw Data                 | rawData                      | Raw Data                                   |
| ACK                      | alertAck                     | Setting the  Acknowledge flag              |
| ACK User                 | alertAckUser                 | User updating the  Acknowledge flag        |
| ACK Time                 | alertAckLastUpdate           | Acknowledge flag  update Time              |
| False Positive           | alertFalsePositive           | Alert handling False  Positive flag        |
| FP User                  | alertFalsePositiveUser       | User updating the  False Positive flag     |
| FP Time                  | alertFalsePositiveLastUpdate | False Positive flag  update time           |
| Comment                  | alertComment                 | Comment                                    |
| Commented User           | alertCommentUser             | User updating a  comment                   |
| Comment Time             | alertCommentLastUpdate       | Comment update time                        |
| Client IP                | clientIp                     | Client IP                                  |
| Client Port              | clientPort                   | Client Port                                |
| Client TCP  Flags        | clientTcpFlags               | Client TCP Flags                           |
| Client Group             | clientGroups                 | Client Group                               |
| Client Country           | clientCountry                | Client Country                             |
| Client Mac               | clientMac                    | Client Mac                                 |
| Client  Hostname         | clientHostname               | Client Hostname                            |
| Server IP                | serverIp                     | Server IP                                  |
| Server Port              | serverPort                   | Server Port                                |
| Server TCP  Flags        | serverTcpFlags               | Server TCP Flags                           |
| Server Group             | serverGroups                 | Server Group                               |
| Server Country           | serverCountry                | Server Country                             |
| Server Mac               | serverMac                    | Server Mac                                 |
| Server  Hostname         | serverHostname               | Server Hostname                            |
| Username                 | user                         | Username                                   |
| Unique Client IPs        | uniqueClientIPs              | Unique Client IPs                          |
| Unique Server  IPs       | uniqueServerIPs              | Unique Server IPs                          |
| Unique Server  Ports     | uniqueServerPorts            | Unique Server Ports                        |
| Unique Client  ASNs      | uniqueClientASNs             | Unique Client ASNs                         |
| Unique Server  ASNs      | uniqueServerASNs             | Unique Server ASNs                         |
| Unique Client  Countries | uniqueClientCountries        | Unique Client Countries                    |
| Unique Server  Countries | uniqueServerCountries        | Unique Server Countries                    |
| BPF                      | _bpf                         | Bytes Per Flow                             |
| BPP                      | _bpp                         | Bytes Per Packet                           |
| Bytes                    | _bytes                       | Sum Bytes                                  |
| Flows                    | _flows                       | Sum Flows                                  |
| Packets                  | _packets                     | Sum Packets                                |
| PPF                      | _ppf                         | Packets Per Flow                           |
| PPS                      | _pps                         | Packets Per Second                         |
| SYN                      | _syn                         | Count of SYN flags                         |
| Unique ASN               | _uniqueASNs                  | Unique Count of ASNs                       |
| Unique  ClientIPs        | _uniqueClientIPs             | Unique Count of  Client IPs                |
| Unique  ServerIPs        | _uniqueServerIPs             | Unique Count of  Server IPs                |
| Unique Server  Ports     | _uniqueServerPort            | Unique Count of  Server Port               |
