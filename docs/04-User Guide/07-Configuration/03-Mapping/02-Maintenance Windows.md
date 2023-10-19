---
description: Maintenance Windows Tab
---

# Maintenance Window

This menu [Configuration>Mapping>**Maintenance Windows**] can be used to create **Maintenance Windows profiles.**

The **Maintenance Window** is a system function that allows the user to define and visualize the time ranges during which maintenance work is performed or scheduled. This function also allows you to control alerts to prevent the generation of erroneous notifications when maintenance work is being performed.

![maintenancewindow-1](assets_02-Maintenance%20Windows/maintenancewindow-1.png)

:::info

In order for the defined **Maintenance windows** to be visible on the chart, the **Maintenance hours** option must be enabled in the time range menu.

 ![image-20231005121804773](assets_02-Maintenance%20Windows/image-20231005121804773.png)

:::

In the menu, there is a table with **Maintenance window** profiles created in the System, which contains the following columns:

- **Name** - name of the `Maintenance Window`

- **Privacy** - privacy status icon

- **Shared** - users who share an object

- **Actions** - possible actions
- **Edit** - opens a window to edit `Maintenance Window` for the current column
  
- **Duplicate** - duplicates the  `Maintenance Window ` in the current column
  
- **Delete** - deletes the  `Maintenance Window ` in the current column

![image-20231005132007800](assets_02-Maintenance%20Windows/image-20231005132007800.png)

---

## Maintenance window creation wizard

To add a new **Maintenance Window** click  **New Maintenance window**  button then the wizard will appear. 



![image-20231005122721627](assets_02-Maintenance%20Windows/image-20231005122721627.png)



In the wizard window there are the following fields:

- **Name** - name of the maintenance window

- **Recurrence** switch

- **Time** 
  
  - Start time - widows start time
  - End time - windows end time
  - Browser Time - time zone taken from a browser
  
- **Recurrence Pattern** - (Daily/Weekly/Monthly/Yearly) time intervals at which the service window will be active

- **Range of recurrence** - (No end date/End after/End by) - you can specify the start and end date of the recursion or the number of occurrences 
  
- **Select color** - you can select the color for a particular range

- **Alert restriction** - you can specify the alerts that will be disabled during the maintenance window

  ![image-20231005123359536](assets_02-Maintenance%20Windows/image-20231005123359536.png)

- **Privacy** - assigning privileges 

  - **Private** - accessible to the owner

  - **Public** - visible to all, but You can grant permission: **delete**/**edit**
    
  - **Shared** - accessible to one or more selected **User roles**. Available privileges are: **delete**/**edit**

---

## Example of creating a Maintenance window

1. Click  **New Maintenance window** button and fill in the fields in the wizard.

![image-20231005125020571](assets_02-Maintenance%20Windows/image-20231005125020571.png)

2. Click `Save` and see if a new **Maintenance window** appears in the list

   ![image-20231005125955521](assets_02-Maintenance%20Windows/image-20231005125955521.png)

3. Go to, for example, the **Raw data** menu and check the **Maintenance hours** option in the **Time range** menu

   ![image-20231005125409595](assets_02-Maintenance%20Windows/image-20231005125409595.png)

4. If all the steps have been done correctly you can see the created **Maintenance window** on the chart

![image-20231005125208202](assets_02-Maintenance%20Windows/image-20231005125208202.png)
