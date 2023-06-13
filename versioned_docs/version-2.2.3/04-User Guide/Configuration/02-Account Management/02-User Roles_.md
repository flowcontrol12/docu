---
id: User Roles_
title: User Roles
description: User Roles Tab
---

This menu [Configuration>Account Management>**User Roles**] can be used to manage users roles in the System.

A role is a set of permissions for actions available within the system  (for example: create a widget, delete a Rule, access to the selected data stream, access to data from selected exporters). A role can be assigned to one or several users. One user can have one or several roles. Two roles are predefined in the system: `Administrator`, `User`.

:::info

The **Sycope** system implements a mechanism for assigning access to data at three levels:  
- **Permissions** - access to GUI system elements. 
- **Exporter** **groups** - access to data at the level of a single exporter
- **Stream** **restrictions** - access to single data streams that are available in the system

:::

![image-20230102110215393](assets_02-User%20Roles_/image-20230102110215393.png)

## Permissions

For roles, permissions can be assigned to selected endpoints in the **Access column**. The user can grant the following access rights:

- **Add**
- **Delete**
- **Edit**
- **View**

:::tip**Example 1** 

To create a role that only views the list of **Widgets**, the role must have View permission.

:::

:::tip**Example 2** 

To create a role that can edit **Widgets**, the role must have Edit and View permissions.

:::



![image-20230102112540714](assets_02-User%20Roles_/image-20230102112540714.png)

## Exporter groups

In this field, you can grant access to exporter groups that are configured in the system.

![image-20230102114218187](assets_02-User%20Roles_/image-20230102114218187.png)



:::caution

To grant permissions at the **Exporter groups** level, you must first configure the system to support this functionality. This is configured in the [**Configuration>NetFlow>ExporterGroups** ] tab in the **Exporter Access field**. You must check the **Restricted** option.

![image-20230102113753231](assets_02-User%20Roles_/image-20230102113753231.png)

**WARNING!**
**After enabling the <u>Restricted</u> option, it is not recommended to reconfigure this functionality of the system and check the <u>All</u> option.**

:::

## Stream restrictions

**Stream restriction** allows you to block access to source data to protect data. It is possible to restrict the user's access to any Data streams that are in the System.



![image-20221206104003780](assets_02-User%20Roles_/image-20221206104003780.png)

:::tip

For the built-in **admin** role, you cannot add restrictions on data access. The **admin** role always has “everything” allowed.

:::

:::info

 By default, all user roles do not have data access restrictions. 

:::

## Assigned users

In this section, you can assign **Users** to **User Roles**.



![image-20230102115544815](assets_02-User%20Roles_/image-20230102115544815.png)

## Privacy

**Privacy** - you can grant permissions for a User Role
- **Private** - accessible to the owner
- **Public** - visible to all, but You can grant permission:
- - **DELETE**
  - **EDIT**
- Shared - accessible to one or more selected **User roles**. Available privileges are:
- - **Delete**
  - **Edit**
  - **View**





