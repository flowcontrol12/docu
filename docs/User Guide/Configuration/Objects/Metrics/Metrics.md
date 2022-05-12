This menu [Configuration>Object>**Metrics**] can be used to create custom `metrics` based on the selected Data Streams and your own Aggregation and Post Aggregation. The system includes several useful predefined  `metrics`  that you can use right after installing the system.



The list of `metrics`  is in the table with the following columns: ==do zmaiany jak w email templates==

- **Name** - unique `metrics` name

- **Streams** - data streams used to create  `metrics` 

- **Description** -  `metrics`  description entered by user

- **Action**

  - Duplicate -  creating an editable copy of the selected  `metric`

    

> The predefined fields in the system are not editable but can be duplicated and then edited.



To add a new `metric` click “**New metric**” button then the Metrics wizard will appear. In the wizard window there are the following fields:

- Display name - name of the metric in the system

- Description - short metric description

- Sources - the data stream (or streams) that will be used to create the metric

  

> When creating a metric, you can add multiple data streams.



Use Function switch - OFF 

- Field - field in the selected data source

- Agreggation - list of mathematical operations to choose from available in the system

  - Avi - returns average of field values.
  - Count - returns count of non empty fields.

  - First - returns value of first field returned.
  
  - Join - ==returns concatenated value of fields values.==xcv
  
  - Last - returns value of last field returned.
  
  - Max - returns maximal value.
  
  - Min - returns minimal value.
  
  - Sum - returns sum of values.

Use Function switch - ON

- Aggr - user-created aggregation
- Post aggr - post aggregation that can (not required) be created by the user using the values calculated in the aggregation
- Field -name used in mathematical operations - can be the same as **Display Name**
- Custom label switch
- Numbering Format
  - Currency
  - Date
  - Number
  - Off
  
- Privacy - you can grant permissions for field

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







