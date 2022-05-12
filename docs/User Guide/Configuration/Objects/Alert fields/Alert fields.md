The Configuration>**Alert fields** can be used to create a custom `Alert fields` based on the selected Streams and (optional) your own mathematical function.  The system includes several most useful predefined  `Alert fields`  that you can use right after installing the system.



The list of `Alert fields`  is in the table with the following columns:

- **Name** - unique `Alert field` name
- **Streams** - streams used to create  `Alert field` 
- **Description** -  `Alert field`  description entered by user
- **Action**
  - Edit - editing an existing  `Alert field`
  - Duplicate - creating an editable copy of the selected  `Alert field`
  - Delete - deleting   `Alert field`

---

To add a new `Alert field` click **New alert field** button then the alert field wizard will appear. In the wizard window there are the following fields:

- **Field name** - name of the alert field in the system (user friendly)

- **Description** - short field description

  **Source** - the data stream (or streams) that will be used to create the field

- **Use Function switch** - allows to enable a mode that allows you to use your own expression to create the field 

- **Field** - field selected from the list of fields available in the selected Data stream
- **Aggregation** - you can choose one of the functions: 

  - Avi - returns average of field values.
  - Count - returns count of non empty fields.

  - First - returns value of first field returned.

  - Join - returns concatenated value of fields values.

  - Last - returns value of last field returned.

  - Max - returns maximal value.

  - Min - returns minimal value.

  - Sum - returns sum of values.

- **Number formatting** 
  - Date
  - Number
  - Off

- **Privacy** - you can grant permissions for field.

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


> At the bottom of the form there is information on which alarm uses created **Alert field**















