---
description: Alerts
slug: /User-Guide/Alerts
addressMatch: panel/alerts
---

# Alerts


In the **`[Alerts]`** menu there is a table with a list of all triggered alerts.

The **Sycope** system includes many predefined **Alerts** created by a team of cybersecurity experts. This menu contains a table with a list of **triggered Alerts** that have been defined in **the System**. If the table is empty it means that no Alerts have been triggered. Alert parameters are configured in the menu **[Configuration > Rules]**.

## Introduction

At the top of the window is the standard search bar, time ranges menu, etc. These elements are described in [User Interface](/User-Interface). Above the table there is a time chart in which the number of triggered alerts in a unit of time is shown in the form of bars. 

![image-20230913120428733](assets_03-Alerts/image-20230913120428733.png)

By default, the Alerts table displays some columns, but you can change which columns should be visible by using the drop-down menu.

![image-20230620104631231](assets_03-Alerts/image-20230620104631231.png)

## Advanced View

After selecting a particular row by clicking on the row or check box in the first column of the table, a menu with options for the **Advanced View** opens. All the variables and values associated with a given alert are available here.

![image-20230620111226371](assets_03-Alerts/image-20230620111226371.png)

It is also possible to hide variables with empty values and improve the clarity of the visible data by selecting **`Hide empty rows`** option.

![Hide Empty Rows](assets_03-Alerts/hide-empty-rows.png)

When selecting a larger number of rows in the **Advanced View** menu, corresponding tabs will appear.

![image-20230620111512587](assets_03-Alerts/image-20230620111512587.png)

## Action button menu

The `Action` button is available for the selected row, which can be used to perform the following actions:

- **Status** - set the alert’s current state
  - New
  - Acknowledged
  - Assigned
  - In Progress
  - Pending
  - Resolved
- **Classification** - choose the alert’s verdict category
  - null
  - Info
  - True Positive
  - False Positive
- **Assign to user** – pick a user to own this alert
- **Add comment** – create or edit a comment inline

![image-20230620111330553](assets_03-Alerts/image-20230620111330553.png)

## Right Click Menu

After right-clicking on a row, a `Right Click` menu with the following options will become available:

- **Copy**
- **Quick Actions** – common triage tasks inline
- **Investigate in Raw Data** – inspect the raw event payload
- **Go to rule** – jump to the triggering rule’s definition
- **Drilldown** – [read more](/User-Guide/Configuration/Shortcuts#drilldown)
- **Actions**
  - Contextual analysis
  - Search in lookups
  - Check value in lookup
  - Add value to lookup
  - Add all values to profile rule
  - Add value to profile rule
  - Add value to input filters
  - Add value to output filters
- **Send externally** – push this alert to external systems
  - Block host by IP
  - Rest Client
  - IP Reputation – menu with external tools (Displayed only when an IP address is clicked)
- **Show** (Displayed only when an IP address is clicked)
  - Only public IPs
  - Only private IPs
  - Net Mask
  - Resolved DNS for all values
  - Resolved DNS
- **Tools** (Displayed only when an IP address is clicked)
  - Ping

<!-- - **Copy**
- **Alert reason details (raw data)**
- **Go to rule**
- [**Drilldown**](/User-Guide/Configuration/Shortcuts#drilldown)
- **Actions**
  - **Mark as acknowledged** - setting the Acknowledge flag
  - **Mark as new** - removing the Acknowledge flag
  - **Mark as False Positive** - setting the False Positive flag
  - **Unmark as False Positive** - removing the False Positive flag
  - **Add comment** - add your own comment
  - **Add value to input filters** - add the value to the input filter of the alert rule
  - **Add value to output filters** - add the value to the output filter of the alert rule
  - **Add value to lookup** - add the value to a lookup
- **Rest Client** - sending alert to another system using the REST CLIENT functionality 
- **Resolve**
  - **Ns lookup** - query a DNS Domain Name Server to the lookup to find DNS Records and IP address information
- **Asset Traffic Rule Profiles**
  - **Add all values to profile rule**
  - **Add value to profile rule** -->

<!-- - RIPE - search in the RIPE database 
  - DNS for all values - resolve DNS for all IP address in the table
  - DNS - resolve DNS for the selected IP address -->

<!-- - **Net mask Search** - access to quick IP mask filter
- **Tools**
  - Ping - simple PING tool
- **Mitigation**
  - Block host by IP - address blocking when the system is integrated with the MACMON probe
- **Custom** - you can create your own Right Click actions configured in the menu [**`[Drilldowns]`**](/User-Guide/Configuration/Shortcuts#drilldown) -->

![image-20230620114012061](assets_03-Alerts/image-20230620114012061.png)

## Settings menu

The settings menu is available by pressing the ![image-20230630130509063](assets_03-Alerts/image-20230630130509063.png) icon.

![image-20230630132659466](assets_03-Alerts/image-20230630132659466.png)

The following actions are available here:

<!-- - **Server sorting** switch 
  
  - **off** - sorting is performed on records previously retrieved by the browser from the database (limited to 1000 records)
  - **on** - sorting is performed on the database and then retrieved by the browser (limited to 1000 records) -->
  
- **Settings**
  - **Manage rules**
  - **Export as** 
    - **CSV** - export alerts to CSV files which are displayed in the table (limited to 1000 records)
    - **CSV (full data)** - export all alerts that are in the System (database)
    - **PDF** - export alerts to PDF files which are displayed in the table (limited to 1000 records)
    - **JSON (widget object)** - export a widget

<!-- - **PNG** - export alerts to PNG files which are displayed in the table (limited to 1000 records) -->

- **Customize**
  - **Show raw field names**
  - **Sorting on server side**
  - **Hide empty columns**
  

## Alerts Table fields description

In the table below are descriptions of the most important fields that are available for display in the Alerts table.

| Field Name              | NQL Name                     | Description                              |
| ----------------------- | ---------------------------- | :--------------------------------------- |
| Alert Id                | id                           | Alert Identifier                         |
| Time                    | timestamp                    | Alert Time                               |
| Rule Type               | alertRuleType                | Rule Type                                |
| Alert Name              | alertName                    | Alert Name                               |
| Rule Id                 | alertRuleId                  | Rule Identifier                          |
| Alert Description       | alertDescription             | Alert Description                        |
| Alert Severity          | alertSeverity                | Alert Severity                           |
| Threshold Level         | alertThresholdLevel          | Threshold Level (Critical, Major, Minor) |
| Alert Tags              | alertTags                    | Tags                                     |
| Mitre Tactic            | alertMitreTactic             | Mitre ATT&CK Tactic                      |
| Mitre Technique         | alertMitreTechnique          | Mitre ATT&CK Technique Id                |
| Mitre Technique Id      | alertMitreTechniqueId        | Mitre ATT&CK Technique Id                |
| Mitre Subtechnique      | alertMitreSubtechnique       | Mitre ATT&CK Subtechnique                |
| Correlations            | alertCorrelations            | Rule Correlations                        |
| Mitigation System       | alertMitigationSystem        | Mitigation System                        |
| Mitigation IP           | alertMitigationIpField       | Mitigation IP                            |
| Raw Data                | rawData                      | Raw Data                                 |
| ACK                     | alertAck                     | Setting the Acknowledge flag             |
| ACK User                | alertAckUser                 | User updating the Acknowledge flag       |
| ACK Time                | alertAckLastUpdate           | Acknowledge flag update Time             |
| False Positive          | alertFalsePositive           | Alert handling False Positive flag       |
| FP User                 | alertFalsePositiveUser       | User updating the False Positive flag    |
| FP Time                 | alertFalsePositiveLastUpdate | False Positive flag update time          |
| Comment                 | alertComment                 | Comment                                  |
| Commented User          | alertCommentUser             | User updating a comment                  |
| Comment Time            | alertCommentLastUpdate       | Comment update time                      |
| Classification          | alertClassification          | Verdict category of the alert             |
| Classification Time     | alertClassificationLastUpdate| Timestamp of the most recent classification change|
| Client IP               | clientIp                     | Client IP                                |
| Client Port             | clientPort                   | Client Port                              |
| Client TCP Flags        | clientTcpFlags               | Client TCP Flags                         |
| Client Group            | clientGroups                 | Client Group                             |
| Client Country          | clientCountry                | Client Country                           |
| Client Mac              | clientMac                    | Client Mac                               |
| Client Hostname         | clientHostname               | Client Hostname                          |
| Server IP               | serverIp                     | Server IP                                |
| Server Port             | serverPort                   | Server Port                              |
| Server TCP Flags        | serverTcpFlags               | Server TCP Flags                         |
| Server Group            | serverGroups                 | Server Group                             |
| Server Country          | serverCountry                | Server Country                           |
| Server Mac              | serverMac                    | Server Mac                               |
| Server Hostname         | serverHostname               | Server Hostname                          |
| Status                  | alertStatus                  | Current alert state                       |
| Status Time             | alertStatusLastUpdate        | Timestamp of the most recent status change|
| User                    | alertUser                    | User assigned to investigate this alert   |
| Username                | user                         | Username                                 |
| Unique Client IPs       | uniqueClientIPs              | Unique Client IPs                        |
| Unique Server IPs       | uniqueServerIPs              | Unique Server IPs                        |
| Unique Server Ports     | uniqueServerPorts            | Unique Server Ports                      |
| Unique Client ASNs      | uniqueClientASNs             | Unique Client ASNs                       |
| Unique Server ASNs      | uniqueServerASNs             | Unique Server ASNs                       |
| Unique Client Countries | uniqueClientCountries        | Unique Client Countries                  |
| Unique Server Countries | uniqueServerCountries        | Unique Server Countries                  |
| BPF                     | _bpf                         | Bytes Per Flow                           |
| BPP                     | _bpp                         | Bytes Per Packet                         |
| Bytes                   | _bytes                       | Sum Bytes                                |
| Flows                   | _flows                       | Sum Flows                                |
| Packets                 | _packets                     | Sum Packets                              |
| PPF                     | _ppf                         | Packets Per Flow                         |
| PPS                     | _pps                         | Packets Per Second                       |
| SYN                     | _syn                         | Count of SYN flags                       |
| Unique ASN              | _uniqueASNs                  | Unique Count of ASNs                     |
| Unique ClientIPs        | _uniqueClientIPs             | Unique Count of Client IPs               |
| Unique ServerIPs        | _uniqueServerIPs             | Unique Count of Server IPs               |
| Unique Server Ports     | _uniqueServerPort            | Unique Count of Server Port              |

 