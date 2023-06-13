---
description: Mappers Tab
---

The menu [Configuration>Mapping>**Mappers**] can be used to create a custom Mapper for use in creating Fields.

The **Mapper** matches the data/value in the Value field with the name in the Name field using the All or First method. The effect of the mapping is only in the GUI. The **Mapper** does not create a new field but overwrites existing ones. 

The **Mappers** created in the system are listed in a table with the following columns:

- **Name** - Mapper name
- **Privacy** - privacy status icon
- **Created By** - name of the user who created the Mapper
- **Creation Time** - creation time
- **Modified By** - name of the user who last modified the lookup
- **Modification Time** - last modification time
- **Shared** - name of the user who shared the object
- **Used in** - objects in the System where the mapper was used
- **Action**
  - Edit - editing an existing **Mapper**
  - Duplicate - creating an editable copy of the selected  **Mapper**
  - Delete - deleting  **Mapper**

> The predefined fields in the system are not editable but can be duplicated and then edited.

---

To add a new mapper click **New mapper** button. After clicking on the button, a configuration window appears with the following fields:

- **Display name** - Mapper name
- **Match method** 

  - Bit masked number
  - Equals
  - Regular expression
- **Match method**  

  - All
  - First
- **Items**
  - Edit csv button 
    - File preview

    - Specify Delimeter, Quote Chart and Escape character (Default values are [comma, quotation mark, quotation mark]

    - Choose the previously prepared CSV file and load it. Then confirm the operation by pressing Apply file button.


- **Privacy** - assigning privileges 

  - **Private** - accessible to the owner

  - **Public** - visible to all, but You can grant permission:
    - **DELETE**
    - **EDIT**

  - Shared - accessible to one or more selected **User roles**. Available privileges are:
    - **Delete**
    - **Edit**
    - **View**
