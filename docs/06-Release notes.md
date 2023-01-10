# Release notes

### ver. 2.2.1

- Added Baseline (dynamic threshold) functionality that allows the user to compare the same metric/field at different time offsets on a single **Widget** to perform comparative analysis in different time windows.

  The first type of dynamic threshold is the **Reference point**. It shows a single value of a calculated metric for a period of time offset from the base metric as a horizontal line.

  The second one is the **Reference line** threshold. It works on the principle of time shifting, i.e., presenting both a series of metrics/base fields and a series of reference metrics on the same (selected in the widget configuration) time interval. Only the values for the reference metric are shifted by a certain period of time in the past.

  ![baseline](assets_06-Release%20notes_web/baseline.jpg)

- Added **Stream restriction** functionality allows the user to block access to source data to protect data. It is possible to restrict the user's access to any Data streams in the System.

  This is one of three levels of data access restriction that has been implemented in the system. The other two are **User role** (ability to restrict access to GUI elements) and **Exporter groups** (ability to limit access at the level of a single exporter).

  ![rbac](assets_06-Release%20notes_web/rbac.jpg)

- Added functionality in the search bar to suggest values from the history.

  ![history](assets_06-Release%20notes_web/history.jpg)

- Added **Discovery Mode** functionality to flexibly add new fields to the system (raw data/aggregations) for dedicated analysis and presentation of data for your environment.

  You can add a **new field** to the system based on a Sycope unrecognized (out of the box) field within the NetFlow template. New fields are added to stream netflow. You can also create an **aggregation** on a field with default metrics attached. The new aggregation appears in the system like a new stream (data is collected from the moment you save the configuration). 

  ![discovery_mode](assets_06-Release%20notes_web/discovery_mode.jpg)

- Added a new **Widget** type - **Threat Trajectory** - to increase the possibilities of graphical data presentation. The **Threat Trajectory Widget** shows threats on a timeline. It allows you to analyze threats in a so-called Time Line to trace how a particular host was attacked step by step. This significantly improves the analysis of security threats in the context of a specific attribute, such as an IP address.

  ![threat_trajectory](assets_06-Release%20notes_web/threat_trajectory.jpg)

---

- Added support for 120k fps and 250k fps.
  
- Added options to backup data and system settings.
  
- Added functionality to restore the system to factory settings.
  
- Added a new system mode: Forward only. 
  
- Added favorite views - bookmarks (filters, time, Dashboards).
  
- Added IPv6Header Mapper.
  
- Added information about the amount of space the data occupy in the system.

- Added retention time counter.

- Added new ways of system notification - as pop-ups and as emails sent by the system. 

- Added the ability to duplicate Widgets from the overlay menu.
  
- Added tags in reports.
  
- Added the ability to save the filter.
  
-  Added functionality to suggest comparison operators depending on the type of field - the most suitable ones appear at the top of the list.
  
- Added scroll functionality and changed how the zoom data option works for the bar chart Widget type.
  
- Added functionality to perform NS lookup for a column in a table.
  
- Extended NS lookup functionality which is available in more elements in the system, for example, in tables and charts.
  
- Added opportunity to download report adhoc - Run and Download button.

   

   



