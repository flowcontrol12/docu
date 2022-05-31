---
id: Rule Sets_
title: Rule Sets
---

This menu [Alerts>**Fields**] can be used to create a custom `field` based on the selected Streams and (optional) your own mathematical function. Additionally, you can use the Mapping, too. The system includes many of the most useful predefined  `fields`  that you can use right after installing the system.



The list of **Rules** is in the table with the following columns:

- **Rule name** - unique **Rule** name
- **Rule type** -  
- **Tactic** -  
- **Technique**
- **Score**
- **Created by**
- **Creation Time**
- **Modified By**
- **Modification Time**
- **Tags**
- **Active**
- **Action**
  - Edit - edit an existing  Rule
  - Duplicate - create an editable copy of the selected  Rule
  - Export - export Rule to json format
  - Delete - delete



The list of `fields`  is in the table with the following columns:

- **Name** - unique `field` name
- **Streams** - streams used to create  `fields` 
- **Description** -  `field`  description entered by user
- **Action**

---

# Adding custom rule

Alarm rules are created and edited in this menu [Alerts>**Rule Set**].

To add a new **Alert rule**, click on the **New rule** button, then the wizard will appear. 

The rule configuration wizard consists of the following sections:

- **General**
- **Stream**
- **Input Filter**
- **Values**
- **Categories**
- **Output filter**
- **Sorting**
- **Limit**
- **Schedule**
- **Thresholds**
- **Actions**
- **Privacy**



## General section

- **Active/Inactive** switch - Activating or deactivating the current rule.

- **Rule Type** - allows you to assign one of the three alarm types associated with the area you want to alarm.

  - Performance,

  - Security,

  - Visibility.

- Name -  rule name

- Tags - [Configuration>Mapping>**Tags**]

- Description - Description of the rule that can be entered by the user.

- Score, Severity - alarm severity on a scale of 1- 10 where:

  - score 1-2  means “info”

  - score 3-4 means “low”

  - score  5-6 means “medium”

  - score 7-8 means “high”

  - Score 9-10 means “critical”

  

## Stream section

Source - data stream used by the rule



## Filter section

- Query - filter for the selected data stream
- Time range - the time range on which the rule will operate



## Values section

- Use Function switch 

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph

- Agreggation - list of operations to choose 

  - Avi - returns average of field values.
  - Count - returns count of non empty fields.

  - First - returns value of first field returned.

  - Join - returns concatenated value of fields values.

  - Last - returns value of last field returned.

  - Max - returns maximal value.

  - Min - returns minimal value.

  - Sum - returns sum of values.



## Categories

- **Agreggation** - list of operations to choose 

  - Avi - returns average of field values.

  - Count - returns count of non empty fields.


  - First - returns value of first field returned.


  - Join - returns concatenated value of fields values.


  - Last - returns value of last field returned.


  - Max - returns maximal value.


  - Min - returns minimal value.


  - Sum - returns sum of values.

- **Use Function** switch - allows the user to use his own function

- **Field** - you can choose from a list: field, metrics, lookup, mapper



## Output filter

- **Query**- you can create a filter for selected Metrics and Fields in the Values and Categories section. 

## Sorting

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field

- Sort direction - Asc/Desc - sorting method ascending/descending

  

## Limit

==!==You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - służy do wpisania limitu rozdzielczości wykresu (liczby punktów na wykresie)
- Limit - wartość rozdzielczości, służy do wpisania limitu rozdzielczości wykresu (liczby punktów na wykresie)
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label

## Schedule

In this step you can specify how often the rule will be executed.

- Interval - Set number in units  Min/Hours/Days/Weeks/Months/Years defining the time interval.
- Throttling in minutes
- Indexed fields  



## Thresholds

- Value

  - Minor - select an operator and a value
  - Major - select an operator and a value
  - Critical - select an operator and a value

  First the Critical conditions are checked, if these conditions are not met then the Major conditions are checked, and if these conditions are not met then the Minor conditions are checked.

## Actions

- **Type**

  - Index
    - Index
      - alerts
  - Mail
    - Send mail switch
    - Recivers
    - Template
  - Syslog
    - Syslog profile
  - Third party system
    - External system
      - MACMON
    - Instance name
    - Action name

- Threshold levels

  - Critical

  - Major 

  - Minor

    



## Privacy



**Privacy** - assigning privileges 

- Private - accessible to the owner

- Public - accessible to all. 
  - Public permissions
    - Delete
    - Edit
    - Execute

- Shared - accessible to one or more selected roles. Available privileges are:
  - Delete

  - Edit

  - Execute

  - View

