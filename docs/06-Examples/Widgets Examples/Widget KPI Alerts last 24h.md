# Examples of widget creation - simple widget



## Number of security incidents in last 24h - example assumptions

We want to create a widget that displays the number of security incidents in the last 24 hours.



## Implementation

1. Widgets are created and edited in the menu [Dashboard>Management>**Widgets**]. 

![image-20220704110915152](assets_widget_kpi/image-20220704110915152.png)



2. To add a widget, click on the **Add Widget** button, then the widget wizard will appear. 

![image-20220704111118805](assets_widget_kpi/image-20220704111118805.png)



3. In the **Visualization Tab**, enter the name of the **Widget** in the field **Title**. In addition to entering a name, you can enter a short description of the **Widget** in the field **Description** and assign **Tags**. Now it is necessary to select the type of visualization you want to use. In this example it will be **KPI**.



![image-20220620103155525](assets_widget_kpi/image-20220620103155525.png)

As we know, the widget creation process is divided into three tabs:

- Visualisation,
- Data,
- Option.

![image-20220620105022147](assets_widget_kpi/image-20220620105022147.png)

4. Change the tab to **Data**. 

![image-20220905152327228](assets_widget_kpi/image-20220905152327228.png)



5. In order to count the number of alarms, you need to choose a data stream from which such information can be obtained. Information about security incidents are contained in the **Alerts stream**, which must be selected in the **Source** field.

![image-20220905152556708](assets_widget_kpi/image-20220905152556708.png)

6. Specify the time period for which **Widget** will analyze data - in our example it is **last 24h**.

![image-20220905152819668](assets_widget_kpi/image-20220905152819668.png)



7. Define an **Aggregation** that will allow you to calculate the number of unique alerts that have been generated. To do this, select field  **Alert id**  in the **Metrics** and **Unique count** in the **Aggregation**. **Alert id** is a **Field** in the **Alerts Data Stream** that stores the unique **id** of the alert and **Unique Count** is an aggregation that returns count of unique non empty fields.

![image-20220905153016355](assets_widget_kpi/image-20220905153016355.png)

![image-20220905153119253](assets_widget_kpi/image-20220905153119253.png)

![image-20220704113152023](assets_widget_kpi/image-20220704113152023.png)

7. At this point the widget in its **simplest form is almost ready**, but it can be edited in various ways to suit individual preferences. As you can see our Widget counted 4296 security incidents in the last 24h. To save the **Widget**, use the **Create button**, then it appears on the list of widgets and is ready to be used as part of the **Dashboard**.

![image-20220905153339735](assets_widget_kpi/image-20220905153339735-2384821.png)



---

## Visual tuning

1. Change the tab to the **Options** and add an icon to the number displayed and to allow other users to launch the widget.

![image-20220905153823803](assets_widget_kpi/image-20220905153823803.png)

In the **KPI icon** section there are many icons to choose, in the example let’s choose the **Warning sign** icon. The result looks like this:

![image-20220905154039173](assets_widget_kpi/image-20220905154039173.png)

![image-20220905154004236](assets_widget_kpi/image-20220905154004236.png)

## Changing widget permissions

1. Change the tab to the **Options**. By default, the Widget has permission settings as **Private**. 


![image-20220905144907213](assets_widget_kpi/image-20220905144907213.png)

If you want other users to be able to use the **Widget**, change its permissions to **Public**.

![image-20220905145018349](assets_widget_kpi/image-20220905145018349.png)



























