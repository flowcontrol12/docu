## Main window

After logging into the system the **Main window** looks like this:

![image-20220518132946313](assets/image-20220518132946313.png)

The **Main menu** is located on the left sidebar. This sidebar can be rolled up or expanded by pressing the **< or >** symbol in the upper left corner next to the Sycope logo.

In the main home view you can add any **Dashboard** that is in the system and will be shown when the system is started.

![image-20220518133201862](assets/image-20220518133201862.png)

On the left sidebar are, from the top:

- Icon area with system notifications
- Main menu with submenu
- User settings menu (at the bottom)

- User logout icon

![image-20220518134346036](assets/image-20220518134346036.png)

The main menu consists of the following submenus and tabs:

- **Home**

- **Dashboard**

  - Favorites
  - Raw Data
  - Management
    - Dashboard tab
    - Widget tab

- **Alerts**

  - Rules Set
  - Alerts Table

- **Configuration**

  - General Settings
    - System Status tab
    - Notifications tab
    - Retention tab
  - Account Management
    - Accounts tab
    - User Roles tab
    - Auth Providers tab
  - Mapping
    - Lookups tab
    - Maintenance Windows tab
    - Business Hours tab
    - Tags tab
  - Objects
    - Fields tab
    - Metrics tab
    - Alert fields tab
    - Ranges tab
    - Collectors tab
    - Recipients tab
    - Right click actions tab
    - Email Templates tab
  - NetFlow
    - Netflow tab
    - SFlow tab

  - Security
    - Certificates tab
    - Audit Log tab

  - Integrations
    - NTP tab
    - SNMP tab
    - SMTP tab
    - Proxy tab
    - External Destinations tab

  - Update
    - Update tab
    - About tab

  - Licenses

In the bottom left corner there is a menu with options for the logged in user, in this case the user is Administrator.

![image-20220518145329219](assets/image-20220518145329219.png)

The **Profile menu** allows you to change the system password. The **Personal Settings** allows you to personalize selected system parameters.

![image-20220518145653488](assets/image-20220518145653488.png)

  ![image-20220518145827250](assets/image-20220518145827250.png) - is used to log out of the system.

To the right of the **Main window** are three right sidebars:

![image-20220518150545305](assets/image-20220518150545305.png) - Notifications

![image-20220518150613474](assets/image-20220518150613474.png) - Favourite Dashboards

![image-20220518150734067](assets/image-20220518150734067.png) - System help

---

##  RAW DATA menu - UI description

In the [Dashboard>**RAW Data**] menu, there are **Data streams** in table and chart form.

![image-20220519113040226](assets/image-20220519113040226.png)

The **Graph** shows the NetFlow count for each minute.

The **Table** in the columns contains fields that are available in the selected **Data Stream** which is selected from the drop-down menu. 

![image-20220519113328730](assets/image-20220519113328730.png)

Please note that **<u>only 1000 records are displayed in the Table</u>**, which is indicated by the red message at the top of the table.

![image-20220519113502911](assets/image-20220519113502911.png)



User can select which fields are shown in the table. To do this, use the **Add field** button, which allows you to select or deselect fields.

![image-20220519115256567](assets/image-20220519115256567.png)



## RAW Data Advanced View

To see more detailed information for the selected **Data stream**, the **Advanced View** option is built in. To open the **Advanced View**, click the magnifying glass icon in the first column of the **Table** and the Flyout with **Advanced information** appears on the right.          

![image-20220523094519974](assets/image-20220523094519974.png)

You can add more rows to the **Advanced view** by pressing the **Control key** and clicking on the row you want to add.

![image-20220523094723846](assets/image-20220523094723846.png)



## Search bar

At the top of the window you will find the **Search bar** to create advanced filters. The simplest filter type, which is the logical sum of the parameters, is created by clicking the plus sign (Add to filter) on a selected field or fields in the table.

![image-20220523095659985](assets/image-20220523095659985.png)



![image-20220523095810606](assets/image-20220523095810606.png)

The values appear in the search bar window and the result of the filter is shown in the table - in this case, the filtered IP server address is 172.16.10.11 and the filtered port, 53.

#### User filter

The User can build advanced filters by clicking **Add filter** button on the right side of the search bar.

![image-20220523100605476](assets/image-20220523100605476.png)

The filter wizard appears.

![image-20220523100721504](assets/image-20220523100721504.png)

You need to select the **Field** available for the selected **Data stream** from the drop-down list.

![image-20220523100934130](assets/image-20220523100934130.png)

Next, you need to select an operator or function.

![image-20220523101308388](assets/image-20220523101308388.png)

At the end you need to specify the **Value** that will be filtered

![image-20220523101707117](assets/image-20220523101707117.png)

The created filter will appear in the search bar.

![image-20220523101742814](assets/image-20220523101742814.png)

You can add additional filter modules by clicking **Add filter** again.

![image-20220523102434444](assets/image-20220523102434444.png)

Frequently used filters can be added to favorites.

![image-20220523102650480](assets/image-20220523102650480.png)

  A list of favorite filters is available at the beginning of the search bar.

![image-20220523102857455](assets/image-20220523102857455.png)



## Time range

On the right side of the search bar, there is a bar to configure the **Time Range** for which the data will be analyzed.

![image-20220523103602174](assets/image-20220523103602174.png)

When you click on the bar, the configuration window appears.

![image-20220523104048966](assets/image-20220523104048966.png)

You can select a time interval for absolute as well as relative values. The most commonly used time intervals are also placed there. For relative times you can set an automatic refresh time or do it manually by clicking on the **Refresh button**.

Similarly to the filters, the user can save to favorites the configured **Time ranges** he uses frequently.

## Graph

In the example, the **Graph** shows the number of flows per unit time. In the **Sycope** system, the smallest granularity is 1 min.

![image-20220523115456621](assets/image-20220523115456621.png)On the right side of the **Graph** there are four buttons for formatting it.

![image-20220523115649092](assets/image-20220523115649092.png)

These are:

- zoom
- line
- bar
- stack

**Zoom** - is used to select the area to zoom in on the graph.

![image-20220523120609229](assets/image-20220523120609229.png)

![image-20220523120431306](assets/image-20220523120431306.png)

**Line** - is used to change the graph from bars to line

![image-20220523115942172](assets/image-20220523115942172.png)

**Bar** - is used to change the graph from line to bars 



