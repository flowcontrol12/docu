---
description: Business Hours Tab
---

# Business Hours

The [**Configuration>Mapping>Business Hours**] can be used to create a **Business hour profile**. 

The **Business Hours** is a system function that allows the user to define and set specific time ranges to represent "working" hours. Primarily utilized for informational purposes, once established and color-selected, these hours will be visually represented on graphs. This feature works similarly to the **Maintenance Windows** feature, but it cannot block alerts and usually repeats the set dates.

![maintenancewindow-1](assets_03-Business%20Hours/maintenancewindow-1.png)

:::info

In order for the defined **Business hours** windows to be visible on the chart, the **Business hours** option must be enabled in the time range menu.

![image-20231009112501374](assets_03-Business%20Hours/image-20231009112501374.png)

:::

In the menu, there is a table with **Business Hours** profiles created in the System, which contains the following columns:

**Add new** button - create new **Business Hours** profile.

There is a Table with the following columns:

**Name** - Name of the `Business Hours` profile

**Privacy** - privacy status icon

**Shared** - users who shared the object

**Actions** - possible actions

- **Edit** - opens a window to edit the `Business Hours` profile for the current column
- **Duplicate** - duplicates the `Business Hours ` in the current column
- **Delete** - deletes the `Business Hours ` in the current column



![image-20231009114429599](assets_03-Business%20Hours/image-20231009114429599.png)

---

## Business Hours creation wizard

To add a new **Business Hours** setting, click the **Add business hours** button and the wizard will appear. 

![image-20231009113438249](assets_03-Business%20Hours/image-20231009113438249.png)



In the wizard window there are the following fields:

- Name - **Business Hours** name

---

- **Simple mode**
  - The days of the week when business hours should apply.
  - Start time - business hours start time
  - End time - business hours end time
  - Browser Time - time zone taken from a browser

- **Privacy** - assigning privileges 
  - **Private** - accessible to the owner
  
  - **Public** - visible to all, but you can grant permission to: **delete**/**edit**
  
  - **Shared** - accessible to one or more selected **User roles**. The available privileges are: **delete**/**edit**

---

- **Advanced mode**
  
  ![image-20231009114051976](assets_03-Business%20Hours/image-20231009114051976.png)
  
  - The days of the week when business hours should apply with the start, end time and time zone for each
- **Select color**

- **Privacy** - assigning privileges 

  - **Private** - accessible to the owner

  - **Public** - visible to all, but you can grant permission to: **delete**/**edit**
  
  - **Shared** - accessible to one or more selected **User roles**. The available privileges are: **delete**/**edit**

## Example of creating a Business hours

1. Click the **Add business hours** button and fill in the fields in the wizard.

![image-20231009114703633](assets_03-Business%20Hours/image-20231009114703633.png)

2. Click `Save` and see if a new **Business hours** appears in the list

![image-20231009114917106](assets_03-Business%20Hours/image-20231009114917106.png)

3. Go to, for example, the **Raw data** menu and check the **Business hours** option in the **Time range** menu

   ![image-20231009115142776](assets_03-Business%20Hours/image-20231009115142776.png)

4. If all the steps have been done correctly, you can see the created **Business hours** on the chart

![image-20231009115601871](assets_03-Business%20Hours/image-20231009115601871.png)
