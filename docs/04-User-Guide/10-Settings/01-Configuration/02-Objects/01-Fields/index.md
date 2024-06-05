---
slug: /User-Guide/Settings/Configuration/Objects/Fields
---

# Fields

This menu **[Settings > Configuration > Objects > Fields]** can be used to create a custom `field` based on the selected Streams and (optional) your own mathematical function. Additionally, you can use the Mapping, too. The system includes many of the most useful predefined  `fields`  that you can use right after installing the system.

The list of `fields`  is in the table with the following columns:

- **Name** - unique `field` name
- **Streams** - streams used to create  `fields` 
- **Description** -  `field`  description entered by user
- **Privacy** - privacy status icon
- **Created By** - name of the user who created the Field
- **Creation Time** - creation time
- **Modified By** - name of the user who last modified the Field
- **Modification Time** - last modification time
- **Shared** - name of the user who shared the Field
- **Used in** - objects in the System where the Field was used
- **Action**
  - Duplicate -  creating an editable copy of the selected  `field`



> The predefined fields in the system are not editable but can be duplicated and then edited.



To add a new `Field` click **Add field** button then the field wizard will appear. In the wizard window there are the following fields:

- **Field name** - NQL name
- **Description** - short field description
- **Display name** - name of the field in the system (user friendly)

---

- **Sources** - the data stream (or streams) that will be used to create Field

---

**Use Function switch** - **OFF** 

- **Field** - field selected from the set of fields available in the selected Data stream

---

**Use Function switch - ON**

- **Field** - name used in mathematical operations - can be the same as **Display Name**
- **Function** - mathematical operation on fields from selected Data streams

---

- **Mappers** - you can add mappers from the list available to map field values
- **Number Formatting**
  
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















