---
description: Alerts Table Tab
---
One of the most important components of the Sycope system is alerting functionality. This functionality allows the user to flexibly build **Alerts** based on a number of conditions and rules that operate on the data streams collected by the system.

**Sycope** includes many predefined **Alerts** created by a team of cybersecurity experts. These rules can be used as a template from which you can create your own rules. You can also create rules on your own using the wizard.

In this menu [Alerts>**Alerts Table**] there is a table with a list of all the alarms that are included in the system. Within each Alarm is a column of fields which, depending on user preference, can be made visible. These are listed below.



| Field  Name              | NQL Name                     | Description                                |
| ------------------------ | ---------------------------- | :----------------------------------------- |
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

 
