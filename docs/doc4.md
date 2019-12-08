





![LogoMale](/Users/tomaszwiniarski/Pictures/LogoMale.png)





![Logo_Dlugo](/Users/tomaszwiniarski/Pictures/Logo_Dlugo.png)



 

# FlowControl - Getting started guide

In this document you will find information about most important options available in FlowControl XN and FlowControl XNS. How to operate with data, graphs and charts as well as general description of options available in the system. 



## System Architecture 

> A flow is defined as a unidirectional sequence of packets with some common properties that pass through a network device.  These collected flows are exported to an external device, the NetFlow collector.  Network flows are highly granular; for example, flow records include details such as IP addresses, packet and byte counts,timestamps, Type of Service (ToS), application ports, input and output interfaces, etc.

Source: [RFC3954](https://www.ietf.org/rfc/rfc3954.txt)

According to the RFC3964 FlowControl solution works as a Flow Collector (both hardware and software version is available) which collects, analysies and visualize the collected flows. Metrics are presented and examined from two perspectives : Network and Security giving the operator valuable input into network/application problems analysis as well as security threats hunting. 

![Architecture](/Users/tomaszwiniarski/Pictures/Architecture.png)

FlowControl supports following flow protocol data sources: 

- NetFlow v5, 

- NetFlow v9,

- sFlow, 

- IPFIX,

- NSEL.


> **Note:**Specific options such as NSEL (Cisco ASA) or different sampling multilpiers per device must be additionally configured. System uses SNMP v1/2/3 to query devices. 



## 1. Overview

Main and currently the only option to configure the solution is the web UI. The most important things to notice when working with FlowControl Software is menu on the left-hand side (**Analysis & Presentation options**) and the icons in the top right corner (**Configuration options**). They are all vital components for working with system, effective problem identification and data mining.



### 1.1. Main Menu

Menu on the left consists of three sections: XN, XNS (optional) and SYS. Each section consists of subsections where you can find desired information about collected data and system configuration. Menu works in hide/reveal mode. In order to show full names of the menu components, please click on the three stripes icon ![Zrzut ekranu 2019-10-24 o 13.23.49](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2013.23.49.png) located at the top left corner. In order to hide menu, same procedure is applied with only exception of the different icon used. ![Zrzut ekranu 2019-10-24 o 13.24.45](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2013.24.45.png)

 

![Zrzut ekranu 2019-10-24 o 11.59.13](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2011.59.13.png)

 

Below is presented table with general description of what can be found in each section:

| **FlowControl XN**                                           | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **TOPs** ![tops](/Users/tomaszwiniarski/Pictures/tops.png)   | Information about  top talkers in the network.               |
| **Traffic**   ![traffic](/Users/tomaszwiniarski/Pictures/traffic.png) | Detailed information  about  traffic in the network.         |
| **Applications**   ![applications](/Users/tomaszwiniarski/Pictures/applications.png) | Provides the information on applications and its traffic utilization. |
| **Raw Data**  ![raw data](/Users/tomaszwiniarski/Pictures/raw%20data.png) | Extensive  information about every flow in the traffic.      |
| **ASA Devices**  ![ASA devices](/Users/tomaszwiniarski/Pictures/ASA%20devices.png) | Detailed information about flows from ASA Devices.           |
| **Geolocation**   ![geolocations](/Users/tomaszwiniarski/Pictures/geolocations.png) | Maps with various  geolocations.                             |
| **Groups**  ![groups](/Users/tomaszwiniarski/Pictures/groups.png) | Flows organized into various groups, e.g business roles, location. |
| **AS Names**   ![as names](/Users/tomaszwiniarski/Pictures/as%20names.png) | Flows organized  according to AS Names.                      |
| **Alerts**   ![alerts](/Users/tomaszwiniarski/Pictures/alerts.png) | Information and  details about alerts that occured in the network. |
| **Last Day** ![last day](/Users/tomaszwiniarski/Pictures/last%20day.png) | Aggregated data from  last day.                              |
| **Last Week**  ­ ![last week](/Users/tomaszwiniarski/Pictures/last%20week.png) | Aggregated data from  last week.                             |
| **Last Month**  ![last month](/Users/tomaszwiniarski/Pictures/last%20month.png) | Aggregate data from  last month.                             |



> **Note:** All views but **Raw Data** uses deduplicated traffic. In order to see unique information about flows that may change on flow path, eg. QoS tags – please use **Raw Data** views. 



| **FlowControl XNS**                                          | Description                                           |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| **Security Summary**  ![security summary](/Users/tomaszwiniarski/Pictures/security%20summary.png) | General overview of security aspects of  the network. |
| **Cockpit Manager**  ![Cockpit Manager](/Users/tomaszwiniarski/Pictures/Cockpit%20Manager.png) | General overview of the basic values of alerts.       |
| **Security Dashboards**    ![Security Dashboards](/Users/tomaszwiniarski/Pictures/Security%20Dashboards.png) | Information about alerts and threats in network.      |
| **Threat Intelligence **   ![Threat Intelligence](/Users/tomaszwiniarski/Pictures/Threat%20Intelligence.png) | Alerts in threat intelligence security  module.       |
| **Threat Detection**    ![Threat Detection](/Users/tomaszwiniarski/Pictures/Threat%20Detection.png) | Alerts in threat detection security module.           |

 

| **System Section**                                           | Description                                         |
| ------------------------------------------------------------ | --------------------------------------------------- |
| **Flow  Stats**  ![Flow Stats](/Users/tomaszwiniarski/Pictures/Flow%20Stats.png) | General statistics  about raw and aggregated flows. |
| **System**  ![System](/Users/tomaszwiniarski/Pictures/System.png) | Disk utilization information.                       |



### 1.2 Configuration Menu

![Zrzut ekranu 2019-10-24 o 19.20.06](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2019.20.06.png)

At the right-hand side of the system there are three drop-down menus. First one marked with the icon![Zrzut ekranu 2019-10-25 o 20.17.25](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-25%20o%2020.17.25.png)  is settings menu available only for admin accounts. This section is described in Administration Setting paragraph. Second drop-down menu marked with is ![Zrzut ekranu 2019-10-25 o 20.17.33](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-25%20o%2020.17.33.png) available for all users. Things that can be found in this section are :

- License Info,

- User Guide,
- About. 

License  will be automatically downloaded on the user computer as pdf files.User guide will redirect user to the documentation stored on the system. About section system will take user to general web page with information about  [FlowControl](https://www.passus.com/produkty/flowcontrol-xn). ![Zrzut ekranu 2019-10-25 o 20.22.29](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-25%20o%2020.22.29.png)Third drop down menu, available for all users, allows to logout from the system. 



### 1.3 Administration Settings

Administrator can change and personalize various aspects of FlowControl environment. Configuration options that can be set up in this menu are all the options required to properly configure and maintan the FlowControl system.



### 1.3.1 Alerts

In the **Alerts** section user can manage and configure customized alerts based on specified metrics threshold.

![Zrzut ekranu 2019-10-24 o 19.42.39](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2019.42.39.png)

Configuration of the specific alert consists of three main parts:

- GENERAL -  input Name and Description ,
- FILTERS - specify logical conditions when the alert is triggered,
- NOTIFICATION -  define what whould be the alert delivery mechanism (LOG/SYSLOG/SNMP TRAP or E-MAIL)

System presents all the alerts in a list form where each individual alert can be enabled/disabled, modified or eliminated.

![Zrzut ekranu 2019-10-24 o 19.50.50](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2019.50.50.png)



### 1.3.2 Config

In the **Config** section user can configure main system aspects. Options available here are: 

![Zrzut ekranu 2019-10-24 o 13.40.53](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2013.40.53.png) 

- SYSTEM  -  Basic network configuration: Hostname, DNS and IP,

- TIME  - Manual or NTP server configuration,

- USERS  - System user configuration and role assigment,

- NOTIFICATIONS - Email, Syslog and SNMP trap configuration,

- SNMP - SNMP pooling configuration (supported options v1/v2c/v3),

- ASA  - NSEL configuration ,

- LICENSE - License adding option,

- OPERATIONS - Apilication and system restart/shutown options .

 

### 1.3.3 Security

In the **Security** section system allows review and manage security rules created according to the MITRE ATT&CK methodology.

> MITRE ATT&CK™ is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.



![Zrzut ekranu 2019-10-24 o 20.57.02](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2020.57.02.png)

Source: [Mitre](https://attack.mitre.org/)

 Configuration of the security ruleset is based on three sections:

![Zrzut ekranu 2019-10-24 o 19.52.11](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2019.52.11.png)

- THREAT DETECTION - Identification of different threats patterns based on proprietary Passus created rules (section allow rule set modification but no rule adding),

- EXTERNAL THREAT INTELLIGENCE - Identification of different threats patterns utilizing several external threat feeds  (section allow rule set modification but no rule adding),

- INTERNAL THREAT INTELLIGENCE - Identification of the custom threats patterns configured by user.

  Alert configuration requires several options to be filled according to MITRE methodology.

![Zrzut ekranu 2019-10-24 o 19.58.44](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2019.58.44.png)

### 1.3.4 Mapping

System allows mapping between internal networks into a more comprehensive convention which is then used in data presentation. There are three main sections of the mapping configuration:

- NAMES - we can assign names to the following data objects:
  - Devices - Rule defines NAME for the IP,
  - INTERFACES - Rule defines several aspects of the Device Interface  (Device IP:Interface ID,Interface Name/Description,Interface Speed),
  - HOSTS/SERVERS - Rule defines NAME for Server/HOST IP,
  - APPLICATIONS - Rule defines Name for the custom APPLICATIONS (Protocol/Port Number,Name).

> **Note:** Please remember that in case the NAME or any other parameter exists already and is predefined in the system ex. Application Definitions, mapping will override those values with the user defined ones.

- GROUPS - user can assign names to the internal networks utilizing three grouping sets :
  - LOCATION - grouping based on NETWORK location (CIDR,Name,Description),
  - FUNCTION - grouping based on NETWORK logical function (CIDR,Name,Description),
  - BUSINESS ROLE - grouping based on NETWORK business role in Organization (CIDR,Name,Description).

> **Note:** Grouping is very usefull for presentation purposes as well as for verification of implementation of widely used security zone segmentation concept utilized for both traffic filtering and risk mitigation.

- Locations - user can assign geographic coordinates to following data objects:

  - DEVICES - Rule defines coordinates to DEVICE IP (Device IP,Longitude,Attitude,City,Country,Country Code),

  - HOST/SERVERS - Rule defines coordinates to HOST/SERVER IP (Host/Server IP,Longitude, Attitude, City, Country,Country Code).

    

### 1.3.5 Reports

System is preconfigured with four templates of the reports which can be enabled/disabled on request:

- Security Summary - Summary of detected security threats from last day,
- Network Traffic Report - Overview of top talkers and devices,
- Interface Utilization -  Top interfaces and threshold violations,
- Application Servers - View on the mostly used application servers, 

![Zrzut ekranu 2019-10-24 o 21.20.33](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2021.20.33.png)

 Reports are run on a daily basis and the outcome is saved and visible in a list form from the UI.

![Zrzut ekranu 2019-10-24 o 21.20.51](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2021.20.51.png)



### 2 Dashboards

This section will cover various aspects of working with selected data. We will divide this section into different aspects that FlowControl uses to interpret data from the network. This will include various graphs, charts and tables as well as best practices how to work with the data. 



### 2.1 Date Range Tab

Important element of the UI is the data range Tab at the top of the page, that stays with the user at all times in both XN and XNS tabs. By default system shows data and statistics for the last 15 minutes after initial login. When starting working on FlowControl it is crucial to remember to change that time range accordingly. In order to make such a change data range tab can be used. 



![Zrzut ekranu 2019-10-24 o 13.46.34](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2013.46.34.png)



●   **Keep filters** – switching this option on, allows user to keep the filters and selections while switching between different sections. By default, this option is turned off therefore switching to different section will reset all filters and selections. When enabled filters in different subsection views will be preserved. 

●   **Start date/End date** - choose time slot for which network traffic will be shown. Increasing time slot might influence time of loading data and statistics. 

●   **Last** - this option will change displayed network traffic to the one from chosen time period.

●   **Granulation** – choose for what period of time data will be merged.  

●   **Top flows** - choose how many top flows will be shown. By default, it is 10 000 flows. Increasing flows might influence time of showing data and statistics. 

●   **Search** - specific IPv4 address can be searched for. Every widget will be automatically adjusted to show information only regarding searched IPv4 address.



> **Note:** In order to save our preferences, please click **APPLY** button available at right-hand side. 

 

###2.2 Data Specific Selection Tab

When creating any selections output of such configuraiton will be shown in a form of tabs. Each individual component of the tab can be managed separately. In order to deselect, press the  ![x](/Users/tomaszwiniarski/Pictures/x.png) button on the tab.

![Zrzut ekranu 2019-10-24 o 13.55.49](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2013.55.49.png) 



![Smart search ](/Users/tomaszwiniarski/Pictures/Smart%20search%20.png)**Smart search** - clicking this option will pop up type in section, where any phrase can be typed in that is being looked for. System automatically suggest options while typing.

![Zrzut ekranu 2019-10-24 o 14.03.03](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2014.03.03.png)



![Step back ](/Users/tomaszwiniarski/Pictures/Step%20back%20.png)**Step back** - clicking this will take a step back in data selections.

![Step forward ](/Users/tomaszwiniarski/Pictures/Step%20forward%20.png)**Step forward** - clicking this will take a step forward in data selections.

![Clear all selections ](/Users/tomaszwiniarski/Pictures/Clear%20all%20selections%20.png)**Clear all selections** - clicking this will clear every data selection made.



### 2.3 Visualization Options

System will present the data, metrics and outcome of configured rule set in different graphical form according to the data granularity and metric structure. Presentation layer is configured according to the best practices in the data presentation techniques.



![goodchart-xlarge-1200x630](/Users/tomaszwiniarski/Desktop/goodchart-xlarge-1200x630.jpg)



### 2.4 Visualization Drill Down

### 2.4.1 Drill Down Options

Depending on specific dashboard and widget choosen system allow different drill down options.Universal method is clicking over any chart, graph or table where the user will be prompted for:

![Zrzut ekranu 2019-10-24 o 15.33.13](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2015.33.13.png)

- **Take snapshot** - allows user to take a snapshot of chosen widget. 

- **Exploration menu** - clicking this option will pop up an exploration menu. This is the place where user can adjust  graph, table or chart to their own needs. Options available to change there are as follows: data to be shown, way of sorting data, presentation of given graph, chart or table, colors and legend.



![Zrzut ekranu 2019-10-24 o 20.39.11](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2020.39.11.png)



- **Full screen** - clicking this option, it will take user to the full screen mode of the graph, table or chart. This option is most widely used among mentioned three. This will allow to view more detailed information. In order to exit the full screen mode, press when in full screen mode.

- **Export** - Preconfgured export options:

  - Export as an image,

  - Export to PDF,

  - Export data.

    

![Zrzut ekranu 2019-10-24 o 20.36.40](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2020.36.40.png)

In some sections, there is possibility to select data by choosing from drop down menus:

<img src="/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2015.36.42.png" alt="Zrzut ekranu 2019-10-24 o 15.36.42" style="zoom: 200%;" /> 

 

System allows user to type in searched phrase or select it from drop down menu. Please remember that depending on the data chosen fields will change color according to the data availability suggesting user which data is alligned with previously.



###2.4.2 Visual Data Extraction

The first thing to notice when working with  charts is that when you hover your mouse over any bar/data point it will show more details regarding that specific data. 

 ![Zrzut ekranu 2019-10-24 o 15.39.01](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2015.39.01.png)



When clicking on bars, they will be selected. You can click on multiple bars in order to view only them on the chart. In order to confirm the selection, please press the green button on the top right corner. If data is presented on multiple elements of the dashboards user selection on one plot will impact data presentation on others accordingly to the selection made.

![Zrzut ekranu 2019-10-24 o 15.41.04](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2015.41.04.png)

System does have drop down menus on the left-hand side and at the bottom of the chart (X/Y axes). They can be adjusted (if possible) to show different data types. There is also lasso selection option available in the top right corner ![lasso](/Users/tomaszwiniarski/Pictures/lasso.png)This allows user to draw a line which, when passing through data it will select it accordingly.

![Zrzut ekranu 2019-10-24 o 15.42.35](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-24%20o%2015.42.35.png)

Data from graphs can be selected by clicking and dragging just below the x axis, i.e. vertically, to select narrowed, e.g. period of time.

![Zrzut ekranu 2019-10-25 o 10.40.38](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-25%20o%2010.40.38.png)



Data can also be selected by clicking and dragging just by the y axis, i.e. horizontally. This will allow to check for the details of highest data used.

![Zrzut ekranu 2019-10-25 o 10.40.55](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-25%20o%2010.40.55.png)



### 2.4.3 Exact Values Search

 Tables are the most precise way of presenting data gathered becasue it shows exact values and measures.

 ![Zrzut ekranu 2019-10-25 o 10.09.48](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-25%20o%2010.09.48.png)

 

There are two ways of selecting data in tables. First one is by clicking on magnifier icon next to a chosen heading, e.g. Source Host. Drop down menu will pop up where you can either search for desired source host or by simply scrolling down and looking for it manually, then by clicking it. In order to accept the selection, press green button. After making selection, all data will be adjusted. Second option is simply by clicking on desired data in the table. 

 

# 3. System Status 

System provides information about its curent status and performance. Those information are divided in two main sections Flows and System Statistics.



## 3.1 Flows Stats

Sytem actively counts number of raw and deduplicated flows giving the user overview on the current network load of the system. Those information are very useful for proper license sizing of the solution.

 ![Zrzut ekranu 2019-10-25 o 10.34.30](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-25%20o%2010.34.30.png)



## 3.2 System Status

Sytem in real time monitors disk space of the application which is crucial for sizing and maintanance of the solution.  Monitored disk space is divied into 3 functional sections:

- Cache, 
- Database,
- System.



 

![Zrzut ekranu 2019-10-25 o 10.33.40](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-25%20o%2010.33.40.png)



![Zrzut ekranu 2019-10-25 o 20.49.29](/Users/tomaszwiniarski/Desktop/Zrzut%20ekranu%202019-10-25%20o%2020.49.29.png)

