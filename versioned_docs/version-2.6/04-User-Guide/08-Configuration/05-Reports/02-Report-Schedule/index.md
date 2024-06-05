---
slug: /User-Guide/Configuration/Reports/Report-Schedule
---

# Report Schedule

This menu **[Configuration > Reports > Report schedule]**  can be used to configure all aspects related to sending reports, such as frequency, recipient, or report content (appropriate templates).

The list of **Report schedules** is included in a table with the following columns:

- **Name** - template name.
- **Tag** - assigned labels from the pool available (configured) in the system
- **Cron Expression** - cron expression that specifies when a task executes
- **Receivers** - report recipients previously configured **[Configuration > Reports > Recipients]**.
- **Templates** - the templates on which the report is based. You create and configure in **[Configuration > Dashboards]**
- **Privacy** - icon indicating the status that the task has in the context of private/public permissions
- **Shared** - names of users who share the task
- **Created** - date and time of task creation
- **Creator** - the name of the user who created the task
- **Action**
  - **Edit** - edit an existing schedule
  - **Duplicate** - can be used as a template for a new schedule
  - **Run and send** - perform the task and send the report to Recipients
  - **Run and download** - perform the task and save the report to a disk
  - **Delete** - delete the task



![image-20221227114508627](assets_09-Report%20schedule/image-20221227114508627.png)



To add a new **Report schedule,** click the **New report task** button then the **New report task** wizard will appear. In the wizard window, there are the following fields:

- **Name** - report task name
- **Schedule** 
  - Hourly
  - Daily
  - Weekly
  - Monthly
  - Recur every (hour)
- **Custom cron expression** switch - you can enter your own expression in cron format to configure when the task should be executed
- **Receivers** - here, you specify who should receive the report. Recipients must be added previously in the **[Configuration > Reports > Recipients]** tab.
- **Templates** - the templates on which the report is based. You create and configure them in **[Configuration > Reports]**
- **Tag** - assigned labels from the pool available (configured) in the system



**Privacy** - assigning privileges to the task.

- **Private** - accessible to the owner

- **Public** - accessible to all but You can grant permission:

- - **DELETE**
  - **EDIT**

- **Shared** - accessible to one or more selected User roles. Available privileges are:

- - **Delete**
  - **Edit**
  - **View**



![image-20221227114247094](assets_09-Report%20schedule/image-20221227114247094.png)
