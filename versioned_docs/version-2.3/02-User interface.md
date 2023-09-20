## Main window

After logging into the system the **Main window** will have the following view:

![image-20230605144009596](assets_02-User%20interface/image-20230605144009596.png)
In the home view you can add any **Dashboard** that is in the system by clicking the home icon in the [**Dashboards>Management>Dashboard**] menu and will be shown when the system is started.

![image-20230605154204319](assets_02-User%20interface/image-20230605154204319.png)

## Menus

In the GUI interface of the Sycope system we can distinguish two areas:

- **Top menu**
- **Main menu** - on the left 

---

### Top menu

At the top of the screen you can see the search bar along with a set of icons. The functionalities assigned to the icons starting from the left are:

-   ![image-20230605152253165](assets_02-User%20interface/image-20230605152253165.png)- statistics

-   ![image-20230605152448534](assets_02-User%20interface/image-20230605152448534.png) - favorite filters 

- ![image-20230605152530420](assets_02-User%20interface/image-20230605152530420.png)-  drop down menu with data source stream you can select
- ![image-20230605152609589](assets_02-User%20interface/image-20230605152609589.png)- search bar
- ![image-20230605152645644](assets_02-User%20interface/image-20230605152645644.png) - add filter
- ![image-20230605152819843](assets_02-User%20interface/image-20230605152819843.png) - add to favorites
- ![image-20230605152906909](assets_02-User%20interface/image-20230605152906909.png)- time range menu
  - ![image-20230605152448534](assets_02-User%20interface/image-20230605152448534.png) - favorite time ranges
  - ![image-20230605152819843](assets_02-User%20interface/image-20230605152819843.png)- add time range to favorites
- ![image-20230605153022310](assets_02-User%20interface/image-20230605153022310.png)- refresh data
- ![image-20230605153236255](assets_02-User%20interface/image-20230605153236255.png)- quick access menu
- ![image-20230605153335019](assets_02-User%20interface/image-20230605153335019.png) - system notification
- ![image-20230605153519578](assets_02-User%20interface/image-20230605153519578.png)- system documentation for current menu/tab 
- ![image-20230605153553279](assets_02-User%20interface/image-20230605153553279.png)- user option

---

#### Statistics

This menu provides the statistics for the selected data stream. Using this menu, you can quickly evaluate the values appearing in the data stream and select those that are relevant to you. The data here is limited to 10,000 records.

![image-20230605162451488](assets_02-User%20interface/image-20230605162451488.png)

For each source, the `Basic fields` panel shows the aggregated data regarding the value of each individual field.


| Pole     | Opis                                      |
| -------- | ----------------------------------------- |
| Count    | Number of all values of a given field.    |
| Distinct | Number of unique values of a given field. |

After expanding a given field, a summary of ten fields with the largest number of values will be shown. For example, regarding the data shown in the above image, for the "Server IP" there is 10,000 values, including 739 unique ones, and e.g. for IP of "8.8.8.8", the number of values is 2237.

Then, below the `Basic fields` panel, the next panels will show the statistics of values for specific fields in the given source. For example, for the `Netflow` source it will be `Measures` and `Ohter`.

---

#### Search bar

The **Search bar** is one of the key components of the Sycope system. By using it, you can build filters or queries, both in a simple way using graphical components, as well as using the **NQL** language commands (advanced mode).

![image-20230605152609589](assets_02-User%20interface/image-20230605152609589.png)



In the **Filter menu** you can choose how the search bar works: in simple mode or advanced mode. In addition, there is access to the **Playground** functionality in which you can test the operation of the **NQL** code.

![image-20230606124536487](assets_02-User%20interface/image-20230606124536487.png)

To create a filter from scratch, simply click on the ![image-20230606125229971](assets_02-User%20interface/image-20230606125229971.png) icon or select **Add filter** from the **Filter menu** (figure above). A creator will appear with fields to fill in.

![image-20230606125333139](assets_02-User%20interface/image-20230606125333139.png)

Another way of creating a filter is to click on the value selected in the Viewport, for example, at a specific IP address.

![image-20230606125646600](assets_02-User%20interface/image-20230606125646600.png)





![image-20230606125739701](assets_02-User%20interface/image-20230606125739701.png)

A wizard window will appear with fields filled in by the System which, of course, can be modified. After approval, the filter in the form of a tile will appear in the search bar.

![image-20230606131135276](assets_02-User%20interface/image-20230606131135276.png)

By clicking on the filter tile, you can modify the filtered values, for example, by adding more IP addresses.

![image-20230606131558027](assets_02-User%20interface/image-20230606131558027.png)

The next step in building filters that the search bar allows you to do is to add another value (in the form of a tile) and use one of the "and" or "or" logical operators.

![image-20230606132955068](assets_02-User%20interface/image-20230606132955068.png)

You can modify individual filter elements by clicking on the corresponding element.

Custom filters can be saved to favorite filters by clicking on the ![image-20230605152819843](assets_02-User%20interface/image-20230605152819843.png) icon in the search bar. The list of favorite filters is available by clicking on the ![image-20230605152448534](assets_02-User%20interface/image-20230605152448534.png) icon.

---

#### Time ranges

It is one of the most important menus in the system. Here you define the time range for which the data is analyzed. The values you set here affect the Dashboards, Widgets, filters and queries.

![image-20230605154550775](assets_02-User%20interface/image-20230605154550775.png)

When you click on the bar, the configuration window will appear.

![image-20230605154645377](assets_02-User%20interface/image-20230605154645377.png)

You can select a time interval for absolute as well as relative values. The most commonly used time intervals are also placed here. For relative time values, you can set an automatic refresh time or do it manually by clicking on the **Refresh button**. You can save the configured **Time ranges** you use frequently to favorites. To delete/clear the time range field simply click on the ![image-20230606114406261](assets_02-User%20interface/image-20230606114406261.png) icon.

---

#### Quick access menu

This menu gives you quick access to your favorite Dashboards and Dashboard groups, as well as to Bookmarks.

![image-20230606112810597](assets_02-User%20interface/image-20230606112810597.png)

---

#### Notifications

This menu contains all the notifications generated by the system. For your convenience they are colored according to their importance. 

![image-20230606111149418](assets_02-User%20interface/image-20230606111149418.png)

After clicking on a notification, detailed information about it will be displayed.

![image-20230606111249095](assets_02-User%20interface/image-20230606111249095.png)

---



#### User options

The last icon in the top bar is the user options menu icon with options for the logged-in user, in this case the user is the Administrator.

![image-20230606110817227](assets_02-User%20interface/image-20230606110817227.png)

The **Profile Menu** allows you to change the system password. 

![image-20230606110914736](assets_02-User%20interface/image-20230606110914736.png)

The **Personal Settings** allow you to personalize selected system parameters.

![image-20230606111014711](assets_02-User%20interface/image-20230606111014711.png)

  ![image-20220518145827250](assets/image-20220518145827250.png) - is used to log out of the system.



---

### Main menu

The **Main menu** is located in the left sidebar. This sidebar can be rolled up or expanded by pressing the **<** or **>** symbol in the upper left corner, next to the Sycope logo.

Starting from the top, the left sidebar contains:

- The icon area with system notifications
- Main menu with a sub-menu
- The "Whats new?" menu with a description of key changes for the current version of the System



![image-20230605162949962](assets_02-User%20interface/image-20230605162949962.png)



The main menu consists of the following submenus and tabs:

- **Home**
- **Dashboard**

  - Favorites
    - Dashboard tab
    - Widgets tab
    - Filters tab
    - Macros tab
    - Bookmarks tab
  - Raw Data
  - Management
    - Dashboard tab
    - Widgets tab
    - Reports tab
    - Report Filters tab 
- **Alerts**

  - Rules Set
  - Alerts Table
- **Configuration**

  - General Settings
    - System Status tab
    - Notifications tab
    - Maintenance Mode tab
    - Diagnostics tab
    - Retention tab
    - Backup&Restore tab
  - Account Management
    - Accounts tab
    - User Roles tab
    - Authorization Providers tab
  - Mapping
    - Lookups tab
    - Maintenance Windows tab
    - Business Hours tab
    - Tags tab
    - Mappers tab
  - Objects
    - Fields tab
    - Metrics tab
    - Ranges tab
    - Collectors tab
    - Recipients tab
    - Right-click actions tab
    - Email Templates tab
    - Report Schedule tab
    - Advanced Custom Aggregations tab
  - NetFlow
    - Netflow tab
    - SFlow tab
    - Forwarding tab
    - Exporter Restrictions tab
  - Security
    - Certificates tab
    - Audit Log tab
  - Integrations
    - NTP tab
    - SNMP tab
    - SMTP tab
    - Proxy tab
    - External Destinations tab
    - FTP tab
  - Update
    - Update tab
    - About tab
  - Licenses
- **Playground**


---

##  RAW DATA menu - UI description

The [**Dashboard>RAW Data**] menu contains **Data streams** in table and chart form.

![image-20230605164420396](assets_02-User%20interface/image-20230605164420396.png)

The **Graph** shows the NetFlow count for each minute.

The **Table** in the columns contains fields that are available in the selected **Data Stream** which is selected from the drop-down menu. 

![image-20230605164654387](assets_02-User%20interface/image-20230605164654387.png)

Please note that **<u>only 1000 records are displayed in the Table</u>**, which is indicated by the red message at the top of the table.

![image-20220519113502911](assets/image-20220519113502911.png)



You can change the fields to be displayed in the table by clicking on the "columns" drop-down menu and selecting or deselecting the fields you are interested in.

![image-20230605165337408](assets_02-User%20interface/image-20230605165337408.png)





### RAW Data Advanced View

To see more detailed information for the selected **Data stream**, the **Advanced View** option is built in. To open the **Advanced View**, click the magnifying glass icon in the first column of the **Table** and the Flyout with **Advanced information** will appear on the right.          

![image-20230605165520270](assets_02-User%20interface/image-20230605165520270.png)

You can add more rows to the **Advanced view** by pressing the **Control key** and clicking on the row you want to add.

![image-20230605165632429](assets_02-User%20interface/image-20230605165632429.png)



### Search bar

The search bar and its associated icons in the top menu have the same functions as for Dashboards and widgets and are described at the beginning of this document.

To create a filter, just point the cursor at the desired element in the table and click the "plus" icon (Add to filter).

![image-20230606144436399](assets_02-User%20interface/image-20230606144436399.png)

Similar to Dashboards or Widgets, a filter wizard will appear with the fields filled in.

![image-20230606144513512](assets_02-User%20interface/image-20230606144513512.png)

After clicking the "Apply" button, a tile symbolizing the created filter will appear in the search bar and the table and graph will show the results of applying the filter.

![image-20230606150021915](assets_02-User%20interface/image-20230606150021915.png)

You can edit the filter by clicking on the tile symbolizing it.

![image-20230606145625639](assets_02-User%20interface/image-20230606145625639.png)

To extend the created filter by, for example, a specific port, just click on the desired port value (in this example it is 443) and add it in the same way as the IP address to the filter (Add filter). You can choose between the "and" or "or" logical operators.

![image-20230606150234179](assets_02-User%20interface/image-20230606150234179.png)

You can choose between the "and" or "or" logical operators.

![image-20230606150309492](assets_02-User%20interface/image-20230606150309492.png)

The result after clicking Apply looks like this:

![image-20230606150339284](assets_02-User%20interface/image-20230606150339284.png)

Each filter element can be edited by clicking on the tile that represents it.

![image-20230606150708425](assets_02-User%20interface/image-20230606150708425.png)



#### Advanced mode

After switching to advanced search bar mode, you can build filters based on NQL language commands.

![image-20230606151003583](assets_02-User%20interface/image-20230606151003583.png)

The Sycope system offers a mechanism of extended sub-tellings to facilitate the creation of filters in the NQL language. An example of creating a filter using this method is shown in the figures below.

![image-20230606151343070](assets_02-User%20interface/image-20230606151343070.png)

![image-20230606151434688](assets_02-User%20interface/image-20230606151434688.png)

![image-20230606152210646](assets_02-User%20interface/image-20230606152210646.png)

![image-20230606152247020](assets_02-User%20interface/image-20230606152247020.png)

![image-20230606152316428](assets_02-User%20interface/image-20230606152316428.png)

Frequently used filters can be added to favorites.

![image-20230606152720116](assets_02-User%20interface/image-20230606152720116.png)

A list of favorite filters is available at the beginning of the search bar.

![image-20230606152801298](assets_02-User%20interface/image-20230606152801298.png)

The list of favorite filters can be edited in the menu [**Dashboards>Favorites>Filters**].

![image-20230606152938795](assets_02-User%20interface/image-20230606152938795.png)

### Graph

In the example, the **Graph** shows the number of flows per time unit. In the **Sycope** system, the smallest granularity is 1 min.



![image-20230605154857576](assets_02-User%20interface/image-20230605154857576.png)

On the right side of the **Graph** there are four buttons for formatting it.

![image-20230605155014873](assets_02-User%20interface/image-20230605155014873.png)



Starting from the top, these are:

- zoom
- line
- bar
- stack
- data view

**Zoom** - is used to select the area to zoom in on the graph.

![image-20230605155336329](assets_02-User%20interface/image-20230605155336329.png)

![image-20230605155447798](assets_02-User%20interface/image-20230605155447798.png)

**Line** - is used to change the graph from bars to line

![image-20230605155558567](assets_02-User%20interface/image-20230605155558567.png)

**Bar** - is used to change the graph from line to bars 

**Data View** - is used to switch to text form which shows the numerical values on which the graph was based, that is the timestamp values and their corresponding Counts

![image-20230605155909587](assets_02-User%20interface/image-20230605155909587.png)



