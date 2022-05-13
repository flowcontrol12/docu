# Data streams

Data streams available in the system with default fields and user created fields are located in **Dashboard>Raw Data** menu.

The **Data streams** implemented in the system along with the available fields are listed and described below.

## netflow



Deduplicated Netflow and Sflow records stream.

| Name                      | NQL Name | Description |
| ------------------------- | -------- | ----------- |
| timestamp                 |          |             |
| clientIp                  |          |             |
| serverIp                  |          |             |
| protocol                  |          |             |
| clientPort                |          |             |
| serverPort                |          |             |
| application               |          |             |
| exporterIps               |          |             |
| interfaces                |          |             |
| clientGroups              |          |             |
| serverGroups              |          |             |
| clientTcpFlags            |          |             |
| serverTcpFlags            |          |             |
| tosNumbers                |          |             |
| mpls                      |          |             |
| asNumbers                 |          |             |
| icmpType                  |          |             |
| clientCountry             |          |             |
| serverCountry             |          |             |
| activeTime                |          |             |
| firstTimestamp            |          |             |
| lastTimestamp             |          |             |
| clientBytes               |          |             |
| serverBytes               |          |             |
| clientPackets             |          |             |
| serverPackets             |          |             |
| flows                     |          |             |
| serverNetworkDelay        |          |             |
| initialServerResponseTime |          |             |
| clientNetworkDelay        |          |             |
| retransmittedInPackets    |          |             |
| retransmittedOutPackets   |          |             |
| retransmittedInBytes      |          |             |
| retransmittedOutBytes     |          |             |
| maxTtl                    |          |             |
| applicationId             |          |             |



## netflowByAppAggr

Netflow 1 min aggregated by application flows stream.



| NQL Name                  | Name                         | Description                                |
| ------------------------- | ---------------------------- | ------------------------------------------ |
| activeTime                | Active Time                  | Active Time of unique flow (session)       |
| clientTcpFlags            | Client TCP Flags             | TCP Flags (Client -> Sever)                |
| serverTcpFlags            | Server TCP Flags             | TCP Flags (Sever -> Client)                |
| flows                     | Flows                        | Flows sended by Exporter                   |
| clientBytes               | Client Bytes                 | Bytes (Client -> Sever)                    |
| serverBytes               | Server Bytes                 | Bytes (Sever -> Client)                    |
| clientPackets             | Client Packets               | Packets (Client -> Sever)                  |
| serverPackets             | Server Packets               | Packets (Sever -> Client)                  |
| serverNetworkTime         | Server Network Time          | Network Latency from Server Side           |
| initialServerResponseTime | Initial Server Response Time | Initial Server Response Time               |
| clientNetworkTime         | Client Network Time          | Network Latency from Client Side           |
| bytes                     | Bytes                        | Bytes (Client <-> Sever)                   |
| bits                      | Bits                         | Bits (Client <-> Sever)                    |
| packets                   | Packets                      | Packets (Client <-> Sever)                 |
| clientBits                | Client Bits                  | Bits (Client -> Sever)                     |
| serverBits                | Server Bits                  | Bits (Sever -> Client)                     |
| serverPacketsPerSecond    | Server Packets/s             | Packets per Active Time (Sever -> Client)  |
| clientPacketsPerSecond    | Client Packets/s             | Packets per Active Time (Client -> Sever)  |
| serverBitsPerSecond       | Server Bits/s                | Bits per Active Time (Sever -> Client)     |
| clientBitsPerSecond       | Client Bits/s                | Bits per Active Time (Client -> Sever)     |
| avgFlowsPerSecond         | Avg Flows/s                  | Avg Flows per Actie Time                   |
| avgServerPacketsPerSecond | Avg Server Packets/s         | Avg Packets per Interval (Sever -> Client) |
| avgClientPacketsPerSecond | Avg Client Packets/s         | Avg Packets per Interval (Client -> Sever) |
| avgServerBitsPerSecond    | Avg Server Bits/s            | Avg Bits per Interval (Sever -> Client)    |
| avgClientBitsPerSecond    | Avg Client Bits/s            | Avg Bits per Interval (Client -> Sever)    |



## netflowByAsnAggr

Netflow 1 min aggregated by ASN flows stream.



| NQL Name                  | Name                 | Description                                |
| ------------------------- | -------------------- | ------------------------------------------ |
| activeTime                | Active Time          | Active Time of unique flow (session)       |
| flows                     | Flows                | Flows sended by Exporter                   |
| clientBytes               | Client Bytes         | Bytes (Client -> Sever)                    |
| serverBytes               | Server Bytes         | Bytes (Sever -> Client)                    |
| clientPackets             | Client Packets       | Packets (Client -> Sever)                  |
| serverPackets             | Server Packets       | Packets (Sever -> Client)                  |
| asName                    | AS Name              | Autonumous System Name                     |
| bytes                     | Bytes                | Bytes (Client <-> Sever)                   |
| bits                      | Bits                 | Bits (Client <-> Sever)                    |
| packets                   | Packets              | Packets (Client <-> Sever)                 |
| clientBits                | Client Bits          | Bits (Client -> Sever)                     |
| serverBits                | Server Bits          | Bits (Sever -> Client)                     |
| serverPacketsPerSecond    | Server Packets/s     | Packets per Active Time (Sever -> Client)  |
| clientPacketsPerSecond    | Client Packets/s     | Packets per Active Time (Client -> Sever)  |
| serverBitsPerSecond       | Server Bits/s        | Bits per Active Time (Sever -> Client)     |
| clientBitsPerSecond       | Client Bits/s        | Bits per Active Time (Client -> Sever)     |
| avgFlowsPerSecond         | Avg Flows/s          | Avg Flows per Actie Time                   |
| avgServerPacketsPerSecond | Avg Server Packets/s | Avg Packets per Interval (Sever -> Client) |
| avgClientPacketsPerSecond | Avg Client Packets/s | Avg Packets per Interval (Client -> Sever) |
| avgServerBitsPerSecond    | Avg Server Bits/s    | Avg Bits per Interval (Sever -> Client)    |
| avgClientBitsPerSecond    | Avg Client Bits/s    | Avg Bits per Interval (Client -> Sever)    |



## netflowByCountryAggr

Netflow 1 min aggregated by country flows stream.



| NQL Name                  | Name                 | Description                                |
| ------------------------- | -------------------- | ------------------------------------------ |
| activeTime                | Active Time          | Active Time of unique flow (session)       |
| activeTime                | Active Time          | Active Time of unique flow (session)       |
| flows                     | Flows                | Flows sended by Exporter                   |
| clientBytes               | Client Bytes         | Bytes (Client -> Sever)                    |
| serverBytes               | Server Bytes         | Bytes (Sever -> Client)                    |
| clientPackets             | Client Packets       | Packets (Client -> Sever)                  |
| serverPackets             | Server Packets       | Packets (Sever -> Client)                  |
| countryName               | Country Name         | Country Name                               |
| bytes                     | Bytes                | Bytes (Client <-> Sever)                   |
| bits                      | Bits                 | Bits (Client <-> Sever)                    |
| packets                   | Packets              | Packets (Client <-> Sever)                 |
| clientBits                | Client Bits          | Bits (Client -> Sever)                     |
| serverBits                | Server Bits          | Bits (Sever -> Client)                     |
| serverPacketsPerSecond    | Server Packets/s     | Packets per Active Time (Sever -> Client)  |
| clientPacketsPerSecond    | Client Packets/s     | Packets per Active Time (Client -> Sever)  |
| serverBitsPerSecond       | Server Bits/s        | Bits per Active Time (Sever -> Client)     |
| clientBitsPerSecond       | Client Bits/s        | Bits per Active Time (Client -> Sever)     |
| avgFlowsPerSecond         | Avg Flows/s          | Avg Flows per Actie Time                   |
| avgServerPacketsPerSecond | Avg Server Packets/s | Avg Packets per Interval (Sever -> Client) |
| avgClientPacketsPerSecond | Avg Client Packets/s | Avg Packets per Interval (Client -> Sever) |
| avgServerBitsPerSecond    | Avg Server Bits/s    | Avg Bits per Interval (Sever -> Client)    |
| avgClientBitsPerSecond    | Avg Client Bits/s    | Avg Bits per Interval (Client -> Sever)    |



## netflowByExporterAggr

Netflow 1 min aggregated by exporter flows stream.

| Name                | NQL Name  | Description                   |
| ------------------- | --------- | ----------------------------- |
| flows               | Flows     | Flows sended by Exporter      |
| bytes               | Bytes     | Bytes (In)                    |
| packets             | Packets   | Packets (In)                  |
| bits                | Bits      | Bits (In)                     |
| packetsPerSecond    | Packets/s | Packets (In) per Active Time  |
| bitsPerSecond       | Bits/s    | Bits (In) per Active Time     |
| avgFlowsPerSecond   | Flows/s   | Avg Flows per Interval        |
| avgPacketsPerSecond | Packets/s | Avg Packets (In) per Interval |
| avgBitsPerSecond    | Bits/s    | Avg Bits (In) per Interval    |

## netflowByGroupAggr

Netflow 1 min aggregated by group flows stream.



| Name                      | NQL Name             | Description                                |
| ------------------------- | -------------------- | ------------------------------------------ |
| activeTime                | Active Time          | Active Time of unique flow (session)       |
| activeTime                | Active Time          | Active Time of unique flow (session)       |
| flows                     | Flows                | Flows sended by Exporter                   |
| clientBytes               | Client Bytes         | Bytes (Client -> Sever)                    |
| serverBytes               | Server Bytes         | Bytes (Sever -> Client)                    |
| clientPackets             | Client Packets       | Packets (Client -> Sever)                  |
| serverPackets             | Server Packets       | Packets (Sever -> Client)                  |
| bytes                     | Bytes                | Bytes (Client <-> Sever)                   |
| bits                      | Bits                 | Bits (Client <-> Sever)                    |
| packets                   | Packets              | Packets (Client <-> Sever)                 |
| clientBits                | Client Bits          | Bits (Client -> Sever)                     |
| serverBits                | Server Bits          | Bits (Sever -> Client)                     |
| serverPacketsPerSecond    | Server Packets/s     | Packets per Active Time (Sever -> Client)  |
| clientPacketsPerSecond    | Client Packets/s     | Packets per Active Time (Client -> Sever)  |
| serverBitsPerSecond       | Server Bits/s        | Bits per Active Time (Sever -> Client)     |
| clientBitsPerSecond       | Client Bits/s        | Bits per Active Time (Client -> Sever)     |
| avgFlowsPerSecond         | Avg Flows/s          | Avg Flows per Actie Time                   |
| avgServerPacketsPerSecond | Avg Server Packets/s | Avg Packets per Interval (Sever -> Client) |
| avgClientPacketsPerSecond | Avg Client Packets/s | Avg Packets per Interval (Client -> Sever) |
| avgServerBitsPerSecond    | Avg Server Bits/s    | Avg Bits per Interval (Sever -> Client)    |
| avgClientBitsPerSecond    | Avg Client Bits/s    | Avg Bits per Interval (Client -> Sever)    |

## netflowByIfcAggr

Netflow 1 min aggregated by interface flows stream.



| Name                           | NQL Name                    | Description                          |
| ------------------------------ | --------------------------- | ------------------------------------ |
| activeTime                     | Active Time                 | Active Time of unique flow (session) |
| flows                          | Flows                       | Flows sended by Exporter             |
| inBytes                        | In Bytes                    | Bytes (In)                           |
| outBytes                       | Out Bytes                   | Bytes (Out)                          |
| inPackets                      | In Packets                  | Packets (In)                         |
| outPackets                     | Out Packets                 | Packets (Out)                        |
| retransmittedInPackets         | In Retransmitted Packets    | Retransmitted Packets (In)           |
| retransmittedOutPackets        | Out Retransmitted Packets   | Retransmitted Packets (Out)          |
| bytes                          | Bytes                       | Bytes (In + Out)                     |
| bits                           | Bits                        | Bits (In + Out)                      |
| packets                        | Packets                     | Packets (In + Out)                   |
| inBits                         | In Bits                     | Bits (In)                            |
| outBits                        | Out Bits                    | Bits (Out)                           |
| flowsPerSecond                 | Flows/s                     | Flows per Actie Time                 |
| inPacketsPerSecond             | In Packets/s                | Packets (In) per Active Time         |
| outPacketsPerSecond            | Out Packets/s               | Packets (Out) per Active Time        |
| inBitsPerSecond                | In Bits/s                   | Bits (In) per Active Time            |
| outBitsPerSecond               | Out Bits/s                  | Bits (Out) per Active Time           |
| avgFlowsPerSecond              | Flows/s                     | Avg Flows per Interval               |
| avgInPacketsPerSecond          | In Packets/s                | Packets (In) per Interval            |
| avgOutPacketsPerSecond         | Out Packets/s               | Packets (Out) per Interval           |
| avgInBitsPerSecond             | In Bits/s                   | Bits (In) per Interval               |
| avgOutBitsPerSecond            | Out Bits/s                  | Bits (Out) per Interval              |
| pctInUtilization               | % In Utilization            | % Utilization (In)                   |
| pctOutUtilization              | % Out Utilization           | % Utilization (In)                   |
| percentRetransmittedInPackets  | % In Retransmitted Packets  | % Retransmitted Packets (In)         |
| percentRetransmittedOutPackets | % Out Retransmitted Packets | % Retransmitted Packets (Out)        |

## netflowByIpAggr

Netflow 1 min aggregated by top IP flows stream.



| Name                      | NQL Name                     | Description                                |
| ------------------------- | ---------------------------- | ------------------------------------------ |
| activeTime                | Active Time                  | Active Time of unique flow (session)       |
| activeTime                | Active Time                  | Active Time of unique flow (session        |
| flows                     | Flows                        | Flows sended by Exporter                   |
| clientBytes               | Client Bytes                 | Bytes (Client -> Sever)                    |
| serverBytes               | Server Bytes                 | Bytes (Sever -> Client)                    |
| clientPackets             | Client Packets               | Packets (Client -> Sever)                  |
| serverPackets             | Server Packets               | Packets (Sever -> Client)                  |
| serverNetworkTime         | Server Network Time          | Network Latency from Server Side           |
| initialServerResponseTime | Initial Server Response Time | Initial Server Response Time               |
| clientNetworkTime         | Client Network Time          | Network Latency from Client Side           |
| bytes                     | Bytes                        | Bytes (Client <-> Sever)                   |
| bits                      | Bits                         | Bits (Client <-> Sever)                    |
| packets                   | Packets                      | Packets (Client <-> Sever)                 |
| clientBits                | Client Bits                  | Bits (Client -> Sever)                     |
| serverBits                | Server Bits                  | Bits (Sever -> Client)                     |
| serverPacketsPerSecond    | Server Packets/s             | Packets per Active Time (Sever -> Client)  |
| clientPacketsPerSecond    | Client Packets/s             | Packets per Active Time (Client -> Sever)  |
| serverBitsPerSecond       | Server Bits/s                | Bits per Active Time (Sever -> Client)     |
| clientBitsPerSecond       | Client Bits/s                | Bits per Active Time (Client -> Sever)     |
| avgFlowsPerSecond         | Avg Flows/s                  | Avg Flows per Actie Time                   |
| avgServerPacketsPerSecond | Avg Server Packets/s         | Avg Packets per Interval (Sever -> Client) |
| avgClientPacketsPerSecond | Avg Client Packets/s         | Avg Packets per Interval (Client -> Sever) |
| avgServerBitsPerSecond    | Avg Server Bits/s            | Avg Bits per Interval (Sever -> Client)    |
| avgClientBitsPerSecond    | Avg Client Bits/s            | Avg Bits per Interval (Client -> Sever)    |
| avgClientBitsPerPacket    | Avg Client Bits/pkt          | Avg Bits per Packet (Client -> Sever)      |
| avgServerBitsPerPacket    | Avg Server Bits/pkt          | Avg Bits per Packet (Sever -> Client)      |
| avgClientBitsPerFlow      | Avg Client Bits/flow         | Avg Bits per Flow (Client -> Sever)        |
| avgServerBitsPerFlow      | Avg Server Bits/flow         | Avg Bits per Flow (Sever -> Client)        |
| avgClientPacketsPerFlow   | Avg Client Packets/flow      | Avg Packets per Flow (Client -> Sever)     |
| avgServerPacketsPerFlow   | Avg Server Packets/flow      | Avg Packets per Flow (Sever -> Client)     |
| clientTcpFlags            | Client TCP Flags             | TCP Flags (Client -> Sever)                |
| serverTcpFlags            | Server TCP Flags             | TCP Flags (Sever -> Client)                |



## netflowByMplsAggr

Netflow 1 min aggregated by MPLS flows stream.

| Name                      | NQL Name             | Description                                |
| ------------------------- | -------------------- | ------------------------------------------ |
| activeTime                | Active Time          | Active Time of unique flow (session)       |
| flows                     | Flows                | Flows sended by Exporter                   |
| clientBytes               | Client Bytes         | Bytes (Client -> Sever)                    |
| serverBytes               | Server Bytes         | Bytes (Sever -> Client)                    |
| clientPackets             | Client Packets       | Packets (Client -> Sever)                  |
| serverPackets             | Server Packets       | Packets (Sever -> Client)                  |
| bytes                     | Bytes                | Bytes (Client <-> Sever)                   |
| bits                      | Bits                 | Bits (Client <-> Sever)                    |
| packets                   | Packets              | Packets (Client <-> Sever)                 |
| clientBits                | Client Bits          | Bits (Client -> Sever)                     |
| serverBits                | Server Bits          | Bits (Sever -> Client)                     |
| serverPacketsPerSecond    | Server Packets/s     | Packets per Active Time (Sever -> Client)  |
| clientPacketsPerSecond    | Client Packets/s     | Packets per Active Time (Client -> Sever)  |
| serverBitsPerSecond       | Server Bits/s        | Bits per Active Time (Sever -> Client)     |
| clientBitsPerSecond       | Client Bits/s        | Bits per Active Time (Client -> Sever)     |
| avgFlowsPerSecond         | Avg Flows/s          | Avg Flows per Actie Time                   |
| avgServerPacketsPerSecond | Avg Server Packets/s | Avg Packets per Interval (Sever -> Client) |
| avgClientPacketsPerSecond | Avg Client Packets/s | Avg Packets per Interval (Client -> Sever) |
| avgServerBitsPerSecond    | Avg Server Bits/s    | Avg Bits per Interval (Sever -> Client)    |
| avgClientBitsPerSecond    | Avg Client Bits/s    | Avg Bits per Interval (Client -> Sever)    |

## netflowByProtocolAggr



Netflow 1 min aggregated by IP protocol flows stream.

| Name                      | NQL Name             | Description                                |
| ------------------------- | -------------------- | ------------------------------------------ |
| activeTime                | Active Time          | Active Time of unique flow (session)       |
| flows                     | Flows                | Flows sended by Exporter                   |
| clientBytes               | Client Bytes         | Bytes (Client -> Sever)                    |
| serverBytes               | Server Bytes         | Bytes (Sever -> Client)                    |
| clientPackets             | Client Packets       | Packets (Client -> Sever)                  |
| serverPackets             | Server Packets       | Packets (Sever -> Client)                  |
| bytes                     | Bytes                | Bytes (Client <-> Sever)                   |
| bits                      | Bits                 | Bits (Client <-> Sever)                    |
| packets                   | Packets              | Packets (Client <-> Sever)                 |
| clientBits                | Client Bits          | Bits (Client -> Sever)                     |
| serverBits                | Server Bits          | Bits (Sever -> Client)                     |
| serverPacketsPerSecond    | Server Packets/s     | Packets per Active Time (Sever -> Client)  |
| clientPacketsPerSecond    | Client Packets/s     | Packets per Active Time (Client -> Sever)  |
| serverBitsPerSecond       | Server Bits/s        | Bits per Active Time (Sever -> Client)     |
| clientBitsPerSecond       | Client Bits/s        | Bits per Active Time (Client -> Sever)     |
| avgFlowsPerSecond         | Avg Flows/s          | Avg Flows per Actie Time                   |
| avgServerPacketsPerSecond | Avg Server Packets/s | Avg Packets per Interval (Sever -> Client) |
| avgClientPacketsPerSecond | Avg Client Packets/s | Avg Packets per Interval (Client -> Sever) |
| avgServerBitsPerSecond    | Avg Server Bits/s    | Avg Bits per Interval (Sever -> Client)    |
| avgClientBitsPerSecond    | Avg Client Bits/s    | Avg Bits per Interval (Client -> Sever)    |



## netflowByTosAggr

Netflow 1 min aggregated by TOS flows stream.

| Name                      | NQL Name             | Description                                |
| ------------------------- | -------------------- | ------------------------------------------ |
| activeTime                | Active Time          | Active Time of unique flow (session)       |
| flows                     | Flows                | Flows sended by Exporter                   |
| clientBytes               | Client Bytes         | Bytes (Client -> Sever)                    |
| serverBytes               | Server Bytes         | Bytes (Sever -> Client)                    |
| clientPackets             | Client Packets       | Packets (Client -> Sever)                  |
| serverPackets             | Server Packets       | Packets (Sever -> Client)                  |
| tosName                   | ToS Name             | Type of Service Name                       |
| bytes                     | Bytes                | Bytes (Client <-> Sever)                   |
| bits                      | Bits                 | Bits (Client <-> Sever)                    |
| packets                   | Packets              | Packets (Client <-> Sever)                 |
| clientBits                | Client Bits          | Bits (Client -> Sever)                     |
| serverBits                | Server Bits          | Bits (Sever -> Client)                     |
| serverPacketsPerSecond    | Server Packets/s     | Packets per Active Time (Sever -> Client)  |
| clientPacketsPerSecond    | Client Packets/s     | Packets per Active Time (Client -> Sever)  |
| serverBitsPerSecond       | Server Bits/s        | Bits per Active Time (Sever -> Client)     |
| clientBitsPerSecond       | Client Bits/s        | Bits per Active Time (Client -> Sever)     |
| avgFlowsPerSecond         | Avg Flows/s          | Avg Flows per Actie Time                   |
| avgServerPacketsPerSecond | Avg Server Packets/s | Avg Packets per Interval (Sever -> Client) |
| avgClientPacketsPerSecond | Avg Client Packets/s | Avg Packets per Interval (Client -> Sever) |
| avgServerBitsPerSecond    | Avg Server Bits/s    | Avg Bits per Interval (Sever -> Client)    |
| avgClientBitsPerSecond    | Avg Client Bits/s    | Avg Bits per Interval (Client -> Sever)    |



## netflowTotalAggr

Netflow 1 min aggregated.

| Name                      | NQL Name             | Description                                |
| ------------------------- | -------------------- | ------------------------------------------ |
| activeTime                | Active Time          | Active Time of unique flow (session)       |
| flows                     | Flows                | Flows sended by Exporter                   |
| clientBytes               | Client Bytes         | Bytes (Client -> Sever)                    |
| serverBytes               | Server Bytes         | Bytes (Sever -> Client)                    |
| clientPackets             | Client Packets       | Packets (Client -> Sever)                  |
| serverPackets             | Server Packets       | Packets (Sever -> Client)                  |
| bytes                     | Bytes                | Bytes (Client <-> Sever)                   |
| bits                      | Bits                 | Bits (Client <-> Sever)                    |
| packets                   | Packets              | Packets (Client <-> Sever)                 |
| clientBits                | Client Bits          | Bits (Client -> Sever)                     |
| serverBits                | Server Bits          | Bits (Sever -> Client)                     |
| serverPacketsPerSecond    | Server Packets/s     | Packets per Active Time (Sever -> Client)  |
| clientPacketsPerSecond    | Client Packets/s     | Packets per Active Time (Client -> Sever)  |
| serverBitsPerSecond       | Server Bits/s        | Bits per Active Time (Sever -> Client)     |
| clientBitsPerSecond       | Client Bits/s        | Bits per Active Time (Client -> Sever)     |
| avgFlowsPerSecond         | Avg Flows/s          | Avg Flows per Actie Time                   |
| avgServerPacketsPerSecond | Avg Server Packets/s | Avg Packets per Interval (Sever -> Client) |
| avgClientPacketsPerSecond | Avg Client Packets/s | Avg Packets per Interval (Client -> Sever) |
| avgServerBitsPerSecond    | Avg Server Bits/s    | Avg Bits per Interval (Sever -> Client)    |
| avgClientBitsPerSecond    | Avg Client Bits/s    | Avg Bits per Interval (Client -> Sever)    |
| maxFlowsPerSecond         | Max Flows/s          | Max Flows per Actie Time                   |
| maxServerPacketsPerSecond | Max Server Packets/s | Max Packets per Interval (Sever -> Client) |
| maxClientPacketsPerSecond | Max Client Packets/s | Max Packets per Interval (Client -> Sever) |
| maxServerBitsPerSecond    | Max Server Bits/s    | Max Bits per Interval (Sever -> Client)    |
| maxClientBitsPerSecond    | Max Client Bits/s    | Max Bits per Interval (Client -> Sever)    |




