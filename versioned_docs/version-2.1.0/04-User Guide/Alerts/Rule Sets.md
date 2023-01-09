---
description: Rule Sets Tab
---

The menu [Alerts>**Rules Set**] can be used to create a custom `rule` based on the selected Streams and (optional) your own mathematical function. The system includes many of the most useful predefined  `rules`  that you can use right after installing the system.



The list of **Rules** is in the table with the following columns:

- **Rule name** - unique **Rule** name
- **Rule type** - specified by the user
  - Performance,

  - Security,

  - Visibility.
- **Tactic** -  specified in MITRE ATT&CK® https://attack.mitre.org
- **Technique** - specified in MITRE ATT&CK® https://attack.mitre.org
- **Score** - alert severity on a scale of 1- 10 where:
  - score 1-2  means “info”

  - score 3-4 means “low”

  - score  5-6 means “medium”

  - score 7-8 means “high”

  - Score 9-10 means “critical”
- **Created by** - name of the user who created the Rule
- **Creation Time** - creation time
- **Modified By** - name of the user who last modified the Dashboard
- **Modification Time** -  last modification time
- **Tags** - assigned tags
- **Active** - status active/inactive
- **Privacy** - privacy status icon
- **Shared** - name of the user who shared the Rule
- **Action**
  - Edit - edit an existing  Rule
  - Duplicate - create an editable copy of the selected  Rule
  - Export - export Rule to json format
  - Delete - delete

---

To add a new **Alert rule**, click on the **New rule** button and choose one of the methods to create a rule:

- **From scratch** - you create a rule from scratch based on the built-in wizard,
- **From template** - you create a rule based on one of the many built-in templates.



The **Rule** can also be imported from a file in json format. To do this, use the **Import rule** button.

