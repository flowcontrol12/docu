---
toc_min_heading_level: 2
toc_max_heading_level: 6
slug: /User-Guide/Configuration/Shortcuts
addressMatch: panel/shortcuts
---

# Shortcuts (Bookmarks & Drilldowns)

## Introduction

Shortcuts is an extension of the navigation method within the Sycope system. They have been created to facilitate and streamline the work within the system.

Shortcuts are divided into two basic types: [**Bookmark**](#bookmark) and [**Drilldown**](#drilldown).

## Bookmark

A Bookmark functions like a traditional bookmark known from web browsers. It allows for direct access to a previously defined and frequently visited location within the system, such as a dashboard with preset additional filters, or a specific widget, or even an external link to a frequently visited page, chat, or another system that we work with on a daily basis.

### Accessing Bookmarks

#### "Take a Shortcut!"

For a quick and easy access to availabale **Bookmarks** and **Drilldowns** from anywhere in the system click on the `Bookmark icon` in the upper-right corner.

![Bookmarks Tab](assets/bookmark-tab.png)

#### Access the `Shortcuts (Bookmarks & Drilldowns)` Section

Access the Shortcuts section via **[Configuration > Shortcuts]** which takes us to the **Shortcuts (Bookmarks & Drilldowns)** table. Here user can **Add shortcut**, whether it is a Bookmark or a Drilldown.

![Configuration > Shortcuts](assets/conf-fav.png)

### Adding New Bookmark

New bookmarks can be added in various ways, as presented below.

#### Quick and Basic Way

While in the selected location within the system, click on the bookmark icon located on the right side.

![Bookmark This Page](assets/bookmark-this-page.png)

We set the **Name** and **Folder** where we want the bookmark to be saved, then save it.

![Bookmark This Page Save](assets/bookmark-this-page-save.png)

#### Advanced Way

Navigate to **[Configuration > Favorites]** and click `Add shortcut`.

![Add Shortcut](assets/conf-fav.png)

- Fill in the fields **Name** and **Description**.
- In the **Go to** section, specify the type:
  - **Url** - for an external webpage address or an internal link within Sycope.
  - **Widget** - select a widget to which it should navigate.
  - **Dashboard** - choose a dashboard to which it should navigate.
  - **Dashboard group** - choose a dashboard group to which it should navigate.
  - **REST API** - select a REST API [External Destination](/User-Guide/Settings/General/Integrations/External-Destinations#rest-client) to interact with
  - **Nql resolve** - perform custom NQL Query
- In the **Show as** section:
  - **Bookmark**
  - **Drilldown (in context menu)** - more about [Drilldown](#drilldown)

![Add Bookmark](assets/add-bookmark.png)

## Drilldown

Drilldown functions similarly to a Bookmark, with the key difference being that when a drilldown is invoked, a filter is immediately applied to customize the content to which we navigate.

It can be easily accessed via the context menu (right-click), then Drilldown folder and selected Drilldown, which opens a 'bookmark' with an applied filter based on the field value on which the right-click was performed as shown in [Basic Usage](#basic-usage) section.

:::tip Key Takeaway:
This functions as a new navigation method in Sycope, eliminating the need to know exactly where a particular widget/dashboard is located. After defining a widget, you can simply right-click on a specific field type anywhere in the system, and immediately see information from the widget/dashboard in the Drilldown.  
If something is missing, you can also add a new one from the right-click context menu without necessarily having to search in the settings.
:::

### Basic Usage

For example, in `[Menu > Raw Data]` right-click on the field with the selected IP address, then navigate to `Drilldown`.  
Here, available drilldowns with settings appropriate to the selected field are displayed.

![Right-click on IP](assets/right-click-on-ip.png)

In this case, selecting `Services` displays a pop-up window with services running on the chosen host.

![Drilldown Services](assets/services.png)

:::note
Notice the autmatically applied IP address filter in the **Top bar**.
:::

### Adding New Drilldown

Two equivalent ways to add a **Drilldown**:
- By clicking on the `Bookmark Icon`, then `Three dots` and `Add bookmark`
- or navigate to **[Configuration > Shortcuts]** and click `Add shortcut`

The third option for convenience is to add a drilldown from the context menu by right-clicking:

![Context Menu Add drilldown action](assets/context-menu-add-drilldown.png)

Next, in the opened window, similarly to [creating a **Bookmark** in Advanced Way](#advanced-way):
- Fill in the fields **Name** and **Description**.
- In the **Go to** section, specify the type:
  - **Url** - for an external webpage address or an internal link within Sycope.
  - **Widget** - select a widget to which it should navigate.
  - **Dashboard** - choose a dashboard to which it should navigate.
  - **Dashboard group** - choose a dashboard group to which it should navigate.
  - **REST API** - select a REST API [External Destination](/User-Guide/Settings/General/Integrations/External-Destinations#rest-client) to interact with
  - **Nql resolve** - perform custom NQL Query
- In the **Show as** section:
  - **Bookmark** - more about [Bookmark](#bookmark)
  - **Drilldown (in context menu)**  

This time, we'll focus on selecting **Drilldown**, which extends the **Add bookmark** window with **Available for** field (detailed in the [**Drilldown Examples**](#drilldown-examples) section).

![Selecting Drilldown](assets/selecting-drilldown.png)

#### Drilldown Examples

##### Drilldown: Application Details Table

In this example, we are creating a drilldown that, when clicking on a field with an IP address, displays a widget presenting the table with details for applications running on specified host.

- Begin by adding a new drilldown.
  - Navigate to **[Configuration > Shortcuts]** and click `Add shortcut`.
  - Fill in the fields.
    - **Name**: ***top_app***
    - In the **Go to** section, select the type ***Widget***.
      - Select the widget: ***Top Applications***.
    - In the **Show as** section mark ***Drilldown (in context menu)***.
    - In the **Available for** select ***Types***.
      - And in **Available for types** choose ***ip***.
  - Finally click on `Save` button.

![Drilldown for Top Applications](assets/app-details-drilldown.png)

Now let's test our new drilldown in action.

- Navigate to `[Menu > Raw Data]`.
- Right-click on a field with selected Cilent, then ***Drilldown*** and ***top_app***.

![Right-Click on Selected Client](assets/right-click-on-client.png)

- The pop-up window displays a widget information with the added filter, i.e. the selected IP address.

![Details](assets/app-details-table-popup-widget.png)

##### Drilldown: Countries Traffic Details

The next example demonstrates a drilldown for a selected field type with the country name.  
Invoking the drilldown will display traffic details for the selected country.

- Navigate to **[Configuration > Shortcuts]** and click `Add shortcut`.
- Fill in the fields.
  - **Name**: ***country_traffic***.
  - In the **Go to** section, select the type ***Widget***.
    - Select the widget: ***Countries Traffic Details***.
  - In the **Show as** section mark ***Drilldown (in context menu)***.
  - In the **Available for** select ***Fields***.
    - And in **Available for fields** as a **Source** choose ***Netflow*** > ***netflow***.
    - In the **Field name** search for ***country*** and mark ***Client Country*** and ***Server Country***.
    - Finally: `Save`.

![Countries Traffic Details Drilldown](assets/country_traffic.png)

- To test this drilldown naviagte to `[Menu > Raw Data]` and make sure that the columns **Client Country** and **Server Contry** are selected and visible.

![Columns: search 'country'](assets/columns-country.png)

- Now right-click on a field with country symbol, select **Drilldown** and **country_traffic**

![Right-click on country symbol](assets/click-country-symbol.png)

- This drilldown will be visible every time we right-click on the fields **Client Country** or **Server Country** in the NetFlow stream. Invoking it will open a window with ***Countries Traffic Details*** widget for selected country symbol.

![Countries Traffic Details Widget Window](assets/window-countries-traffic.png)


## NQL Resolve

***NQL Resolve*** is an additional feature available in the **Context Menu** under **Actions**. By selecting **`Add NQL Resolve`**, users can create new shortcuts using custom NQL queries. 

![NQL Resolve](assets/image_1.png)

By default, the wizard assists in creating a search shortcut using existing Lookups. Users can specify the Lookup name, a single input key, and multiple output keys. The input key refers to any value found within the system, such as an IP address displayed in table widgets. The output keys correspond to the records retrieved from the specified Lookup.

An additional required setting is **Available for Types**, which enables filtering of new actions based on the selected value from the system - such as **IP address**, **Subnet**, **string**, or other data types. Users can also define where the action will be visible: within the **Drilldown** context menu, **Bookmarks**, or both.

Further customization options include the ability to assign Groups, set Privacy levels, and add Tags for better organization and control. 

![NQL Resolve](assets/image_2.png)

The result of an **NQL Resolve** action will be displayed in a dedicated window. Below is an example using the **groups-app** Lookup. 

![NQL Resolve](assets/image_3.png)

When the wizard is set to **Use Function**, users can define a custom NQL query. To utilize a system value, the user must define it using the format **{param}**. The results of the query will then be displayed accordingly. 

![NQL Resolve](assets/image_4.png)

All newly created **NQL Resolve** shortcuts with the **Drilldown** option enabled will be automatically added to the **Context Menu** and the **Actions** list. An example of this is shown below for the **Check Defined Apps** action. 

![NQL Resolve](assets/image_5.png)

Users can manage all NQL Resolve actions from the **[Configuration > Shortcuts]** page.

![NQL Resolve](assets/image_6.png)

***

\* This product includes GeoLite2 Data created by MaxMind, available from https://www.maxmind.com.
