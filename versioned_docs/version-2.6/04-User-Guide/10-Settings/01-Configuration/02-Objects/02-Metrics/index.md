---
slug: /User-Guide/Settings/Configuration/Objects/Metrics
---

# Metrics

This menu **[Settings > Configuration > Objects > Metrics]** can be used to create custom `metrics` based on the selected Data Streams and your own Aggregation and Post Aggregation. The system includes several useful predefined  `metrics`  that you can use right after installing the system.

The list of `metrics` is included in a table with the following columns:

- **Name** - unique `metrics` name

- **Streams** - data streams used to create  `metrics` 

- **Description** -  `metrics`  description entered by user

- **Privacy** - privacy status icon

- **Created By** - name of the user who created the Metric

- **Creation Time** - creation time

- **Modified By** - name of the user who last modified the Metric

- **Modification Time** - last modification time

- **Shared** - name of the user who shared the Metric

- **Used in** - objects in the System where the Metric was used

- **Action**

  - Duplicate -  creating an editable copy of the selected  `metric`

    

> The predefined fields in the system are not editable but can be duplicated and then edited.



To add a new `metric` click “**New metric**” button then the Metrics wizard will appear. In the wizard window there are the following fields:

- **Display name** - NQL name

- **Description** - short metric description

- **Display name** - name of the field in the system (user friendly)


---

- **Sources** - the data stream (or streams) that will be used to create the metric

> When creating a metric, you can add multiple data streams.

**Use Function** switch - OFF 

- **Field** - field in the selected data source

- **Agreggation** - list of mathematical operations to choose from available in the system
  - Avg - returns average of field values.
  - Count - returns count of non empty fields.
  
  - First - returns value of first field returned.
  
  - Join - returns concatenated value of fields values
  
  - Last - returns value of last field returned.
  
  - Max - returns maximal value.
  
  - Min - returns minimal value.
  
  - Percentile - returns value below a X percentage of data falls.
  
  - Sum - returns sum of values.
  
  - Unique Count - returns countn of unique non empty fields

**Use Function** switch - ON

- **Aggr** - user-created aggregation
- **Post aggr** - post aggregation that can (not required) be created by the user using the values calculated in the aggregation
- **Field** - name used in mathematical operations - can be the same as **Display Name**
- **Numbering Format**
  - Currency
  - Date
  - Number
  - Off

- **Privacy** - assigning privileges 

  - **Private** - accessible to the owner

  - **Public** - visible to all, but You can grant permission:
    - **DELETE**
    - **EDIT**

  - Shared - accessible to one or more selected **User roles**. Available privileges are:
    - **Delete**
    - **Edit**
    - **View**







