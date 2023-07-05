---
description: Alerts Table Tab
---
In this menu [Alerts>**Alerts Table**] there is a table with a list of all triggered alerts.

The **Sycope** includes many predefined **Alerts** created by a team of cybersecurity experts. In this menu, there is a table with a list of **triggered Alerts** that have been defined in **the System**. If the table is empty it means that no Alerts have been triggered. Alert parameters are configured in the menu [Alerts>**Rule Set**].

## Introduction

At the top of the window is the standard search bar, time ranges menu, etc., these elements are described in [User Interface](https://documentation.sycope.com/User%20interface) .

Above the table, there is a time chart on which the number of triggered alerts in a unit of time is shown in the form of bars. 

![image-20230620105007698](assets_Alerts%20Table/image-20230620105007698.png)

By default, the Alerts table displays 9 columns, but which columns should be visible can be changed in the drop-down menu.

![image-20230620104631231](assets_Alerts%20Table/image-20230620104631231.png)

## Advanced View

After selecting a particular row by clicking on the row or check box in the first column of the table, a menu with **Advanced View** opens. All the variables and values associated with a given alert are available here.

![image-20230620111226371](assets_Alerts%20Table/image-20230620111226371.png)

By selecting a larger number of rows in the **Advanced View** menu, corresponding tabs appear.

![image-20230620111512587](assets_Alerts%20Table/image-20230620111512587.png)

## Action button menu

The `Action` button is available for the selected row, which can be used to perform the following actions:

- Mark as ACK - setting the Acknowledge flag
- Mark as NEW - unsetting the Acknowledge flag
- Mark as False Positive - setting the False Positive flag
- Unmark False Positive - unsetting the False Positive flag
- Add comment - add your own comment



![image-20230620111330553](assets_Alerts%20Table/image-20230620111330553.png)

## Right Click Menu

After mouse right click on a row, a `Right Click` menu with the following options is available:

- Action
  - Mark as ACK - setting the Acknowledge flag
  - Mark as NEW - unsetting the Acknowledge flag
  - Mark as False Positive - setting the False Positive flag
  - Unmark False Positive - unsetting the False Positive flag
  - Add comment - add your own comment
  - Add value to input filters - add the value to the input filter of the alert rule
  - Add value to output filters -  add the value to the output filter of the alert rule
  - Add value to lookup - add the value to a lookup
- Rest Client - sending alert to another system using the REST CLIENT functionality 
- Resolve
  - RIPE - search in the RIPE database 
  - DNS for all values - resolve DNS for all IP address in the table
  - DNS - resolve DNS for the selected IP address
  - Ns lookup - query a DNS Domain Name Server to lookup to find DNS Records and IP address information
- Net mask Search - access to quick IP mask filter
- Tools
  - Ping - simple PING tool
- Mitigation
  - Block host by IP - address blocking when the system is integrated with the MACMON probe
- Custom - you can create Your own `Right Click` action configured in the menu [[Confoguration>Objects>Right Click Actions]](http://localhost:3000/User%20Guide/Configuration/Objects/Right%20click%20actions)



![image-20230620114012061](assets_Alerts%20Table/image-20230620114012061.png)

## Settings menu

Settings menu is available by pressing the icon ![image-20230630130509063](assets_Alerts%20Table/image-20230630130509063.png).

![image-20230630132659466](assets_Alerts%20Table/image-20230630132659466.png)

The following actions are available here:

- **Server sorting** switch 
  - **off** - sorting is performed on records previously retrieved by the browser from the database (limited to 1000 records)
  - **on** - sorting is performed on the database and then retrieved by the browser (limited to 1000 records)

- **Export as** 

  - **CSV** - export alerts to CSV files which are displayed in the table (limited to 1000 records)
  - **PDF** - export alerts to PDF files which are displayed in the table (limited to 1000 records)
  - **PNG** - export alerts to PNG files which are displayed in the table (limited to 1000 records)
  - **Full CSV Export** - export all alerts that are in the System (database)

  



## Alerts Table fields description

In the table below are descriptions of the most important fields that are available for display in the Alerts table.

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

 
