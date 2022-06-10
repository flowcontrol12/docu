---
description: Lookups Tab
---

This menu [Configuration>Mapping>**Lookups**] can be used to create custom Lookups that may be applied in different places in the system.

Lookup is querying an additional database , CSV files or it ‘s own database with the specified value in order to map it or complete the data in a netflow session or alert with additional information. **Lookups** create their own fields in the system

The list of created **Lookups**  is in a table with the following columns:

**Name** - unique lookup name

**Status** - lookup status Active/Inactive

**Type** - Lookup type. There are five predefined types of lookups in the system: Asn, Country, CSV file, CSV file subnet, SNMP Interface.

**Action** 

- Edit - edit Lookup
- Duplicate -  creating an editable copy of the selected
- Delete - delete Lookup

---

> Note
>
> The Action button does not appear for system preinstalled objects

---

As it was written above, the system implements seven predefined types of lookups which are listed in the table below.

| Lookup type     | Input keys | Output keys                                                |
| :-------------- | :--------- | :--------------------------------------------------------- |
| Asn             | ip         | as.number, as.org                                          |
| Compound        |            |                                                            |
| Country         | ip         | continent.code, continent.name, country.name, country.code |
| CSV file        |            |                                                            |
| CSV file subnet |            |                                                            |
| SNMP Interface  |            |                                                            |
| Subnet          |            |                                                            |

---

Pressing the **New lookup** button starts the wizard to create a **Lookup**.

For example, to create CSV file type **Lookup**, perform the following steps:

- In the first window, specify the type (see table above)

- Enter a name for the Lookup

- Data file

  - Edit csv button 
    - File preview

    - Specify Delimeter, Quote Chart and Escape character (Default values are [comma, quotation mark, quotation mark]

    - Choose the previously prepared CSV file and load it. Then confirm the operation by pressing the Apply file button.





​	**Privacy** - assigning privileges 

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







