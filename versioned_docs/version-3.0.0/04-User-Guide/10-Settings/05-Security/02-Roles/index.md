---
slug: /User-Guide/Settings/Security/Roles
addressMatch: panel/security/roles
---

# Roles


This menu **[Settings > Security > Roles]** can be used to manage users roles in the System.

A role is a set of permissions for actions available within the system  (for example: create a widget, delete a Rule, access to the selected data stream, access to data from selected exporters). A role can be assigned to one or several users. One user can have one or several roles. Two roles are predefined in the system: `Administrator`, `User`.

:::info

The **Sycope** system implements a mechanism for assigning access to data at three levels:  
- **Permissions** - access to GUI system elements. 
- **Data** **restrictions** - access to single data streams that are available in the system

:::

![image-20230728104105693](assets_02-User%20Roles_/image-20230728104105693.png)

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

![image-20230728104222664](assets_02-User%20Roles_/image-20230728104222664.png)

:::info

A detailed description of the individual elements of the Permissions section can be found at the end of this document in the **Permission Details** section. 

:::



## Data restrictions

**Data restriction** allows you to block access to source data to protect data. It is possible to restrict the user's access to any Data streams that are in the System.



![image-20230728105119989](assets_02-User%20Roles_/image-20230728105119989.png)

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
  - **DELETE**
  - **EDIT**

- Shared - accessible to one or more selected **User roles**. Available privileges are:
  - **Delete**
  - **Edit**
  - **View**

---


## Permissions Details

Below is a detailed description of the items in the Permissions section.

## Dashboards

### Raw Data

Viewing the source data

![menu master](assets_02-User%20Roles_/rawdata.png)


### Configuration

___

**Dashboards, Dashboards Groups**   

Operations on dashboard objects.

Operations on dashboard groups (the `Add Dashboard Group` button) as well as editing and deletion.

![menu master](assets_02-User%20Roles_/dashboards-management-dashboard.png)

___

**Widgets**

Operations on dashboard objects.

![menu master](assets_02-User%20Roles_/dashboards-management-dashboard.png)

___

**Reports**

Access to operations regarding the reports (REPORT).


![menu master](assets_02-User%20Roles_/dashboards-management-reports.png)



| Permission        | Operation                                                    |
| ----------------- | ------------------------------------------------------------ |
| View              | Displaying of the report list                                |
| Add               | Creation and acquisition of a report directly from the dashboard. |
| Add, Edit, Delete | Adding, editing and deletion of the task to create a report in the backend. |
| Add, Edit, Delete | Adding, editing and deletion of a report template.           |
| Add, Edit, Delete | Adding, duplication and deletion of report filters.          |
|                   |                                                              |


## Alerts

___

**Rule Set**

![menu master](assets_02-User%20Roles_/alerts-ruleset.png)

___

**Alerts Table** 

![menu master](assets_02-User%20Roles_/alerts-alerts-table.png)

Access to operations alert operations (STREAM_ALERT)

| Permission | Backend Operation                  |
| ---------- | ---------------------------------- |
| Edit       | Adding data to the alerts pipeline |


## Configuration

___

**OS** (General Settings - System Status)

Access to information on the agent's machine.

![menu master](assets_02-User%20Roles_/configuration-generalsettings-systemstatus.png)

Access to operations regarding the agent's machine management (OS_MGMT)

| Permission        |  GUI Element                                            |
| ----------------- |  ------------------------------------------------------ |
| View              |  Network Interfaces                                     |
| View              |  Network Interfaces                                     |
| View              |  Network Interfaces                                     |
| View              |  Services                                               |                                                   |
| View              |  CPU, Memory usage, OS Disk Drive, Datastore Disk Drive |
| View              |  System logs                                            |
| View              |  Uptime                                                 |                                                       |
|                   |                                                         |
| Add, Delete, Edit |  Network Interfaces                                     |
|                   |                                                         |                                                       |
| Edit              |  Services, `Stop`, `Restart` buttons                    |
| Edit              |  `Restart` button                                       |
| Edit              |  `ShutDown` button                                      |
| Edit              |  System logs                                            |
| Edit              |  Uptime                                                 |
|                   |                                                         |
| Delete            |  Uptime                                                 |
|                   |                                                         |

### General Settings - Notifications

___

**Notifications Table**     

Access to operations regarding the notification pipeline (STREAM_NOTIFICATION)


| Permission | Operation                           | UI                                          |
| ---------- | ----------------------------------- | ------------------------------------------- |
| View       | Displaying of the notification list | Table for General Settings -> Notifications |

___

**Thresholds Settings**

Access to operations regarding the configuration of thresholds for the CPU, disk and memory metrics (OS_THRESHOLD)    

| Permission | Backend Operation                                            |
| ---------- | ------------------------------------------------------------ |
| View       | Acquisition of all defined thresholds                        |
| View       | Acquisition of information on the thresholds for a given category: memory, disk, CPU. |
|            |                                                              |
| Edit       | Resetting of all thresholds.                                 |
| Edit       | Resetting of thresholds for a given category: memory, disk, CPU. |
| Edit       | Editing of threshold configuration                           |


___

**Notification Mail**

Access to operations regarding notifications sent by email messages (NOTIFICATION_MAIL)

| Permission | Backend Operation                                            |
| ---------- | ------------------------------------------------------------ |
| View       | Acquisition of a list of created notifications               |
| View       | Acquisition of a list of available levels of notification (INFO, WARNING, ERROR) |
| View       | Acquisition of a list of available sources of notification   |
|            |                                                              |
| Edit       | Creation/editing of notification                             |
|            |                                                              |


### General Settings

___

**Maintenance Mode**
    
Access to operations regarding SSH (SSH_MGMT)

| Permission | UI and Backend Operation      | UI              |
| ---------- | ----------------------------- | --------------- |
| View       | Acquisition of SSH status     | `Verify` button |
|            |                               |                 |
| Edit       | Stopping of SSH service       | `Stop` button   |
| Edit       | Creation of Challenge for SSH |                 |
| Edit       | SSH service activation        |                 |


___

**Retention**  

Access to operations regarding the configuration of retention.

![menu master](assets_02-User%20Roles_/generalsettings-retention.png)

| Permission | Operation                    | UI                                             |
| ---------- | ---------------------------- | ---------------------------------------------- |
| Add        | Adding a retention           | `Add retention policy` button                  |
|            |                              |                                                |
| Edit       | Editing of a retention       | `Edit` button                                  |
| Edit       | Export/Import of a retention | `Import retention policy` and `Export` buttons |
|            |                              |                                                |
| Delete     | Deletion of a retention      | `Remove selected` button                       |


___

**Backup & Restore**   

Access to operations regarding a backup of the agent's machine (BACKUP)

| Permission   | Operation                                                    |
| ------------ | ------------------------------------------------------------ |
| View         | Initialization of a backup of the tenant's machine from the master's UI. |
| View         | Acquisition of a list of backup files of the tenant's machine from the master's UI. |
| View         | Restoration of the tenant's machine from a backup from the master's UI. |
| View         | Acquisition of information on the backup task.               |
| View         | Acquisition of the backup status.                            |
| View         | Canceling of the backup.                                     |
| View         | Checking the integrity of the created backup.                |
| View         | Checking the status of the FTP server.                       |
| View         | Acquisition of files from the created backup.                |
| View         | Restoration of the agent's machine from the backup.          |
| View         | Restoration of the default settings of the agent's machine.  |
| View         | Acquisition of the list of directories with backups located on the FTP server. |
| View         | Clearing the backup directories on the FTP server.           |
| View         | Canceling the restoration of the agent's machine from the backup. |
|              |                                                              |
| Edit         | Initialization of the backup.                                |
| Edit, Delete | Creation/editing/deletion of the backup task.                |
|              |                                                              |


___

### Account Management -> **Users**, **Roles**, **Authentication Providers**

Configuration of users, roles and user authentication providers (Authentication Providers)

![menu master](assets_02-User%20Roles_/accounts.png)

___

### Mapping -> **Lookups**, **Maintenance Windows**, **Business Hours**, **Tags**, **Mappers**

Configuration of lookups, Maintenance Windows, work hours, labels and mappings.

![menu master](assets_02-User%20Roles_/mapping.png)



### Objects 

___

**Fields**

Configuration of fields.

![menu master](assets_02-User%20Roles_/fields.png)


| Permission | UI Operation                                                 |
| ---------- | ------------------------------------------------------------ |
| View       | Displaying of information in fields.                         |
| Add        | Adding of a new field, `Add field` and `Duplicate` (![menu master](assets_02-User%20Roles_/button_duplicate.png)) buttons. |
| Edit       | Editing of an existing field, `Edit` (![menu master](assets_02-User%20Roles_/button_edit.png)) button. |
| Delete     | Deletion of a field, `Delete`(![menu master](assets_02-User%20Roles_/button_delete.png)) button. |


___

**Metrics**

Configuration of metrics.

![menu master](assets_02-User%20Roles_/metrics.png)


| Permission | UI Operation                                                 |
| ---------- | ------------------------------------------------------------ |
| View       | Displaying information on metrics.                           |
| Add        | Adding of a new metric, `Add metric` and `Duplicate` (![menu master](assets_02-User%20Roles_/button_duplicate.png)) buttons. |
| Edit       | Editing of an existing metric, `Edit` (![menu master](assets_02-User%20Roles_/button_edit.png)) button. |
| Delete     | Deletion of a metric, `Delete`(![menu master](assets_02-User%20Roles_/button_delete.png)) button. |



___

**Ranges**

Configuration of ranges.

![menu master](assets_02-User%20Roles_/ranges.png)


| Permission | UI Operation                                                 |
| ---------- | ------------------------------------------------------------ |
| View       | Displaying of information on ranges.                         |
| Add        | Adding of a new range, `Add metric` and `Duplicate` (![menu master](assets_02-User%20Roles_/button_duplicate.png)) buttons. |
| Edit       | Editing of an existing range, `Edit` (![menu master](assets_02-User%20Roles_/button_edit.png)) button. |
| Delete     | Deletion of a range, `Delete`(![menu master](assets_02-User%20Roles_/button_delete.png)) button. |


___

**Collectors**

Configuration of collectors.

![menu master](assets_02-User%20Roles_/collectors.png)


| Permission | UI Operation                                                 |
| ---------- | ------------------------------------------------------------ |
| View       | Displaying of information on the collector recipient. Export of a collector, `Export`(![menu master](assets_02-User%20Roles_/button_export.png)) button. |
| Add        | Adding of a new collector, `Add metric` and `Duplicate` (![menu master](assets_02-User%20Roles_/button_duplicate.png)) buttons. |
| Edit       | Editing of an existing collector, `Edit` (![menu master](assets_02-User%20Roles_/button_edit.png)) button. |
| Delete     | Deletion of a collector, `Delete`(![menu master](assets_02-User%20Roles_/button_delete.png)) button. |


___

**Recipients**

Access to operations regarding the configuration of report recipients "Recipients". (RECEIVER)

| Permission        | UI Operation                                                 |
| ----------------- | ------------------------------------------------------------ |
| View              | Acquisition of information on report recipients.             |
|                   |                                                              |
| Add, Edit, Delete | Buttons: `Add recipient`, `Edit` (![menu master](assets_02-User%20Roles_/button_edit.png)), `Delete` (![menu master](assets_02-User%20Roles_/button_delete.png)). |


___

**Right Click Actions**

Operations pinned to the right mouse button.

| Permission | UI Operation                                                 |
| ---------- | ------------------------------------------------------------ |
| View       | Acquisition of information on the configuration.             |
|            |                                                              |
| Add        | `Add right click action` button                              |
|            |                                                              |
| Edit       | `Duplicate` (![menu master](assets_02-User%20Roles_/button_duplicate.png)). |

___

**Email Templates**

Access to operations regarding the configuration of email message templates. (MAIL_TEMPLATE)

| Permission        | UI Operation                                                 |
| ----------------- | ------------------------------------------------------------ |
| View              | Acquisition of information on the selected template.         |
| View              | Acquisition of livePreview (TODO:) information               |
| View              | Acquisition of a list of fields that may be used in the template. |
|                   |                                                              |
| Add, Edit, Delete | Adding, editing and deletion of template. Buttons: `Add template`, `Edit` (![menu master](assets_02-User%20Roles_/button_edit.png)), `Delete` (![menu master](assets_02-User%20Roles_/button_delete.png)) |


___

**Advanced Custom Aggregations**

Access to operations regarding the configuration of advanced custom aggregations of the user.


| Permission | UI Operation                                                 |
| ---------- | ------------------------------------------------------------ |
| View       | Acquisition of information on aggregations.                  |
| View       | Aggregation export                                           |
|            |                                                              |
| Add        | Adding, import and copying of an aggregation. Buttons: `Add aggregation`, `Import aggregation`, `Duplicate` (![menu master](assets_02-User%20Roles_/button_duplicate.png)) |
| Edit       | Edition. Button: `Edit` (![menu master](assets_02-User%20Roles_/button_edit.png)) |
| Delete     | Deletion of an aggregation. Button: `Delete` (![menu master](assets_02-User%20Roles_/button_delete.png)) |

 

### Netflow

![menu master](assets_02-User%20Roles_/netflow.png)

___

**Netflow**
    
Access to operations regarding configuration of the Netflow stream (NETFLOW)

___

**Netflow Traffic Profile**
    

| Permission | Backend Operation                    |
| ---------- | ------------------------------------ |
| View       | Acquisition of netflow profile types |
| View       | Acquisition of a traffic profile     |
|            |                                      |
| Add        | Creation of a traffic profile        |
|            |                                      |
| Edit       | Editing of a traffic profile         |
|            |                                      |
| Delete     | Deletion of a traffic profile        |


___

**SFlow**
    
Configuration of the "SFlow" service
Access to operations regarding management of the SFlow (SFLOW)

![menu master](assets_02-User%20Roles_/sflow.png)

| Permission | UI Operation                                                 |
| ---------- | ------------------------------------------------------------ |
| View       | Displaying information on the configuration.                 |
| Edit       | Editing of an existing configuration, `Add port` button.     |
| Delete     | Deleting of port conofiguration, `Delete`(![menu master](assets_02-User%20Roles_/button_delete.png)) button |


___

**Forwarding**

Configuration of the "Forwarding" service

![menu master](assets_02-User%20Roles_/forwarding.png)


| Permission | UI Operation                                                 |
| ---------- | ------------------------------------------------------------ |
| View       | Displaying information on the "Forwarding" configurations    |
| Add        | Adding of a new configuration, `Add forwarder rule`, `Import forwarder rule` and `Duplicate` (![menu master](assets_02-User%20Roles_/button_duplicate.png)) buttons. |
| Edit       | Editing of an existing configuration,  `Edit` (![menu master](assets_02-User%20Roles_/button_edit.png)) button. |
| Delete     | Deletion of a configuration,  `Delete`(![menu master](assets_02-User%20Roles_/button_delete.png)) button |



___

**Exporter Groups**   
    
Access to operations regarding tenant machines (TENANT).

| Permission                                     | Backend Operation                         |
| ---------------------------------------------- | ----------------------------------------- |
| View, License: 'Netflow', 'AdvancedFeatures'   | Acquisition of information on the tenant  |
| View, License: 'Netflow', 'AdvancedFeatures'   | Acquisition of information on the tenants |
|                                                |                                           |
| Add, License: 'Netflow', 'AdvancedFeatures'    | Creation of a tenant                      |
|                                                |                                           |
| Edit, License: 'Netflow', 'AdvancedFeatures'   | Activation of a tenant                    |
|                                                |                                           |
| Delete, License: 'Netflow', 'AdvancedFeatures' | Deletion of a tenant                      |


### Security 

Access to Security configuration and viewing the audit logs.

![menu master](assets_02-User%20Roles_/security.png)

___

**Audit Log**

| Permission | UI Operation                                             |
| ---------- | -------------------------------------------------------- |
| View       | Viewing of audit logs, `Audit Log` tab.                  |
| View       | Acquisition of CSR, `Download CSR` button.               |
|            |                                                          |
| Edit       | Creation of CSR, `Generate CSR` button.                  |
| Edit       | Uploading of a certificate, `Upload signed cert` button. |


### Integrations 

![menu master](assets_02-User%20Roles_/integration.png)

___

**SMTP**

Access to the configuration of SMPT system integration and access to sending email messages (MAIL).

| Permission | UI Operation                              |
| ---------- | ----------------------------------------- |
| View       | Acquisition of SMTP service configuration |
|            |                                           |
| Edit       | SMTP service configuration                |
| Edit       | Sending of email messages.                |


___

**External Destinations**

Access to the configuration of integration with external systems with the use of HTTP protocol.

| Permission | UI Operation                                                 |
| ---------- | ------------------------------------------------------------ |
| View       | Acquisition of configuration information.                    |
| View       | Configuration export, `Export`(![menu master](assets_02-User%20Roles_/button_export.png)) button |
|            |                                                              |
| Add        | Adding, import and copying of a configuration. Buttons: `Add external destination`, `Import external destination`, `Duplicate` (![menu master](assets_02-User%20Roles_/button_duplicate.png)). |
| Edit       | Editing. Button: `Edit` (![menu master](assets_02-User%20Roles_/button_edit.png)). |
| Delete     | Deletion of configuration. Button: `Delete` (![menu master](assets_02-User%20Roles_/button_delete.png)) |


___

**FTP**

Access to the configuration of integration with external systems with the use of FTP protocol. 


### Update  

Access to operations regarding the management of updates (REPO).       

| Permission | UI Operation                                         |
| ---------- | ---------------------------------------------------- |
| Edit       | Acquisition of information on the available updates. |
| Edit       | Updating online.                                     |
| Edit       | Rollback of last online update.                      |
| Edit       | Updating offline from a provided file.               |
| Edit       | Uploading the file with offline update.              |
|            |                                                      |

  

### Licenses

Access to operations regarding license management (LICENSE_MGMT).

| Permission | UI Operation                              |
| ---------- | ----------------------------------------- |
| View       | Acquisition of CSR                        |
| View       | Acquisition of information on the license |
| View       | Acquisition of rule definitions           |
| View       | Acquisition of application version        |
| View       | Fingerprint acquisition                   |
|            |                                           |
| Add        | Creation of CSR                           |
|            |                                           |
| Edit       | Activation of agent license               |
|            |                                           |
| Delete     | Deletion of CSR                           |

