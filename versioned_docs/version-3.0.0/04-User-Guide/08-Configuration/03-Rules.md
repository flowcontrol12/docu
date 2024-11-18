---
description: Rules Tab
slug: /User-Guide/Configuration/Rules
addressMatch: panel/rules-set
---

# Rules

The menu **[Configuration > Rules]** can be used to create a custom `rule` based on the selected Streams and (optional) your own mathematical function. The system includes many of the most useful predefined rules you can use right after installing the system. This functionality allows the user to flexibly build **Alerts** based on a number of conditions and rules that operate on the data streams collected by the system.

**Sycope** includes many predefined **Alerts** created by a team of cybersecurity experts. These rules can be used as a template from which you can create your own rules. You can also create rules on your own using the wizard.

![image-20230619100934955](assets_Rule%20Sets/image-20230619100934955.png)



The list of **Rules** is in the table with the following columns:
- **Rule name** - unique **Rule** name
- **Description** - short description how the rule works
- **Rule type** - specified by the user
- **Rule actions** - the action to be taken when the rule is triggered. The system supports the following actions:
  - Index - information about the triggering of the alarm will be displayed in the [Alerts Table](/User-Guide/Alerts#alerts-table-fields-description) 
  - Mail - information about the triggering of the alarm will be sent by e-mail
  - SNMP Trap Receiver - information about the triggering of the alarm will be sent to the external system using the SNMP Trap protocol see [External Destinations](/User-Guide/Settings/General/Integrations/External-Destinations)
  - Syslog - information about the triggering of the alarm will be sent to the external Syslog-ng server see [External Destinations](/User-Guide/Settings/General/Integrations/External-Destinations)
  - Third party system -  information about the triggering of the alarm will be sent to the external systems see [External Destinations](/User-Guide/Settings/General/Integrations/External-Destinations)
    - MACMON
    - REST Client

      :::tip
      You can configure rules to trigger actions that call external APIs. For more details, refer to the following resources:
  
      - [Configuration of REST API Client](/User-Guide/Settings/General/Integrations/External-Destinations#rest-client) in [External Destinations](/User-Guide/Settings/General/Integrations/External-Destinations)
      - [Example of REST API Integration in Advanced Rule tutorial](/Examples/Rules-Examples/Advanced)  
      :::

- **Tactic** -  specified in MITRE ATT&CK® https://attack.mitre.org
- **Technique** - specified in MITRE ATT&CK® https://attack.mitre.org
- **Score** - alert severity on a scale of 1- 10 where:
  - score 1-2  means “info”
  - score 3-4 means “low”
  - score  5-6 means “medium”
  - score 7-8 means “high”
  - score 9-10 means “critical”
- **Created by** - the name of the user who created the Rule
- **Creation Time** - creation time
- **Modified By** - the name of the user who last modified the Dashboard
- **Modification Time** -  last modification time
- **Tags** - assigned tags
- **Active** - status active/inactive
- **Privacy** - privacy status icon
- **Shared** - the name of the user who shared the Rule
- **Action**
  - Edit - edit an existing Rule
  - Duplicate - create an editable copy of the selected  Rule
  - Export - export Rule to JSON format
  - Delete - delete Rule

## Examples
:::info
Step-by-step instructions on how to create a rule can be found in section [Rules Examples](/Examples/Rules-Examples).
:::