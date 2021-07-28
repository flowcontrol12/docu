---
id: CLI
title: FlowControl Command Line Interface (CLI)
sidebar_label: CLI commands
hide_title: ver. 1.6.0 candidate
---

## 1. Access to the system Command Line Console (CLI)

If the installation and deployment have been successfully completed, configuration process can be applied. Run the virtual machine that has been created. In order to access the configuration panel press **Left Shift** button 5 times. **Cmd** console will pop up, there will be command line asking for a password.

> For the Admin account, the default password is: **FcxN12#$** (It is strongly recommended to change this password later in GUI). Network configuration status and list of **CLI** commands will be displayed after successful login. The list of CLI commands  are presented in figure below.

The system command root folder real terminal view is displayed. Some CLI commands are used to enter into the group of commands related to them.



## 2. FlowControl command line interface (CLI) commands



After login to CLI console the status of network configuration and the list of CLI commands should be as seen in the figure below.

---

> **Important notice:**
>
> Users will be logged out automatically after 5 minutes of inactivity.

---



<img src="assets/image-20210204152917666.png" alt="image-20210204152917666" style="zoom: 50%;" />





In the diagram below are the CLI commands structure tree related to real console view.

<img src="assets/image-20210204165400298.png" alt="image-20210204165400298" style="zoom:67%;" />



---



### [status]



The command [**status**] is used to display actual status of most important system parameters as shown below .

<img src="assets/image-20200906124526482.png" alt="image-20200906124526482" style="zoom:67%;" />

[**status**- CPU configuration status] - displays information if CPU configuration is correct and how many CPU’s the system actually uses. If not check ESX configuration. 

[**status**- CPU usage] - displays percentages of CPU’s usage. 

[**status**- Memory usage] - displays percentages and GB numbers of free Memory and total number of Memory in GB. 

[**status**- Drives status] - displays information on how physicals drives are configured related to free space. Status of status of drives is also shown here. 

[**status**- Flows configuration] - displays NetFlow, sFlow port configurations.

[**status**- Flows status] - displays actual number of Total Packets, Total Flows, Analyzed Flows and Flow Type (NetFlows, sFlows)

[**status**- System status] - displays information stating if most important system elements should be working property.

 

The figure below shows the real CLI console view for [status] command.  

![image-20200818101412725](assets/image-20200818101412725.png)





---



### [config]



The [**config**] command is used to enter the group of commands allowing changes to all of the most important system network parameters as shown below.

<img src="assets/image-20200812111917338.png" alt="image-20200812111917338" style="zoom: 67%;" />

<img src="assets/image-20200812133744015.png" alt="image-20200812133744015" style="zoom:67%;" />



[**config**-interface] - The command  [config-interface] is used to configure IP addresses for any interfaces connected to the FC system.

<img src="assets/image-20200812114626095.png" alt="image-20200812114626095" style="zoom:67%;" />

<img src="assets/image-20200812133929455.png" alt="image-20200812133929455" style="zoom:80%;" />

​	

[**config**-interface-show] - The command [**config**-interface-show] is used to show detailed information of any network interfaces connected to FC system.

<img src="assets/image-20200812133840106.png" alt="image-20200812133840106" style="zoom:80%;" />



[**config**-interface-Ethernet0] -  The command [**config**-interface-Ethernet0] is used to configure network parameters of interface Ethernet0. Either DHCP or static IP address can be configured.

<img src="assets/image-20200812134024868.png" alt="image-20200812134024868" style="zoom:80%;" />

<img src="assets/image-20200812133958504.png" alt="image-20200812133958504" style="zoom:80%;" />

​		

[**config**-interface-exit] - Exit to previous main menu.

[**config**-netflow] -  The command [**config**-netflow] is used to enter groups of commands related  to NetFlow, IPFIX, ASA NSEL and sFlows protocols configuration and monitoring. 

<img src="assets/image-20200813134221840.png" alt="image-20200813134221840" style="zoom:67%;" />

![image-20200812134046909](assets/image-20200812134046909.png)



[**config**-netflow-show] - The command [**config**-netflow-show] is used to show detailed information of NetFlow port configuration.

![image-20200818102159776](assets/image-20200818102159776.png)



[**config**-netflow- netflow] - The command [**config**-netflow-netflow] is used to configure NetFlow, IPFIX ports.

<img src="assets/image-20200812134236808.png" alt="image-20200812134236808" style="zoom:80%;" />



[**config**-netflow- sflow] - The command [**config**-netflow-sflow] is used to configure sFlow  ports.

<img src="assets/image-20200812134306939.png" alt="image-20200812134306939" style="zoom:80%;" />



[**config**-netflow- logs] - The command [**config**-netflow-logs] is used to enter groups of commands related to NetFlow, NSEL, sFLow logs.

<img src="assets/image-20200812112534309.png" alt="image-20200812112534309" style="zoom: 67%;" />

<img src="assets/image-20200812134412961.png" alt="image-20200812134412961" style="zoom:80%;" />



[**config**-netflow-logs-logs] - The command [**config**-netflow-logs-logs] is used to show NetFlow, NSEL, sFlow engine logs.

<img src="assets/image-20200812134546734.png" alt="image-20200812134546734" style="zoom:150%;" />



[**config**-netflow-logs-stats] - The command [**config**-netflow-logs-stats] is used to show NetFlow, NSEL, sFlow total statistics. 

<img src="assets/image-20200812134444088.png" alt="image-20200812134444088" style="zoom:80%;" />



[**config**-netflow-logs-exit] - Exit to previous menu.

[**config**-netflow-capture] - The command [**config**-netflow-capture] is used to enter groups of commands related to NetFlow capture  packets.

<img src="assets/image-20200812113134247.png" alt="image-20200812113134247" style="zoom: 67%;" />

![image-20200812134706885](assets/image-20200812134706885.png)



[**config**-netflow-capture-capture [interval]] - The command [**config**-netflow-capture-capture [interval] ] is used  to start capture NetFlow packets. The interval of capture must be set in range of 1 to 600 sec. All capture information is available in FlowControl share folder \\\ *IP address\captures*.

[**config**-netflow-capture-clear] - The command [**config**-netflow-capture-clear] is used to delete all capture files.

[**config**-netflow-capture-close] - The command [**config**-netflow-capture-logs-close] is used to close share with capture files.

[**config**-netflow-capture-exit] - Exit to previous menu.

[**config**-netflow-exit] - Exit to previous menu.

---



### [logs]



The command [**logs**] is used to enter groups of commands related to log collection management from the FlowControl System

<img src="assets/image-20200812114836252.png" alt="image-20200812114836252" style="zoom:67%;" />

![image-20200818102231826](assets/image-20200818102231826.png)

​	

[**logs**-collect] - The command [**logs**-collect] is used to start collecting system logs and writing them to disc drive

​	[**logs**-close] - The command [**logs**-close] is used to stop collecting logs.

​	[**logs**-clean] - The command [**logs**-clean] is used to delete all logs/capture files.

​	[**logs**-exit] - Exit to previous menu.

---



### [update]



The command [**update**] is used to enter groups of commands related  to FlowControl system update.

<img src="assets/image-20200812115319103.png" alt="image-20200812115319103" style="zoom:67%;" />

[**update** - status] - The command [**update**-status] is used to show status of the system updating.

![image-20200813132806219](assets/image-20200813132806219.png)

[**update** - update] - The command [**update**-update] is used to start update process. 

[**update** - clean] - The command [**update**-clean] is used to clean update folder.

[**update** - exit] - Exit to main menu.

---



### [diagnostic]



The command [**diagnostic**] is used to enter groups of commands related  to FlowControl network connections diagnostics.

<img src="assets/image-20200812133129117.png" alt="image-20200812133129117" style="zoom:67%;" />

<img src="assets/image-20200813132605621.png" alt="image-20200813132605621" style="zoom:80%;" />



[**diagnostic**-ping] - Run ping command.

<img src="assets/image-20200813132550485.png" alt="image-20200813132550485" style="zoom:80%;" />



[**diagnostic**-tracert] - Run tracert command.

<img src="assets/image-20200813132637681.png" alt="image-20200813132637681" style="zoom:80%;" />



[**diagnostic**-exit] - Exit to previous menu.

---



### [firewall]



The command [**firewall**] is used to enter groups of commands related  to management of blocking/allowing  incoming communication from IP addresses.

<img src="assets/image-20200812132845871.png" alt="	" style="zoom: 67%;" />

<img src="assets/image-20200812135022447.png" alt="image-20200812135022447" style="zoom:80%;" />



[**firewall**- show] - The command [**firewall**-show] is used to enter actual blocked IP addresses.

[**firewall**- add [RuleName] [IP]] - The command [**firewall**- add [RuleName] [IP]] is used to add rule to firewall

[**firewall**- delete [RuleName]] - The command [**firewall**- delete [RuleName]] is used to delete rule on firewall

[**firewall**- exit] - Exit to main menu.

---

### [proxy]



The command [**proxy**] is used to enter groups of commands related to configuration: of proxy server for FlowControl system. 

<img src="assets/image-20200812115353463.png" alt="image-20200812115353463" style="zoom:67%;" />

<img src="assets/image-20200812134911458.png" alt="image-20200812134911458"  />



[**proxy** - show] - Shows current proxy configuration

<img src="assets/image-20200812134947414.png" alt="image-20200812134947414" style="zoom:80%;" />

[**proxy**-set] - The command [proxy-set] is used to set PROXY server and port.

[**proxy**-test[URL]] - The command [proxy-test[URL]] is used to test PROXY server connection.

[**proxy**-exit] - Exit to main menu.

---



### [drive]



The command [ **drive**] is used to enter groups of commands related to memory drive add, configuration and monitoring. 



<img src="assets/image-20200812132922034.png" alt="image-20200812132922034" style="zoom:67%;" />

<img src="assets/image-20200813132505034.png" alt="image-20200813132505034" style="zoom: 67%;" />



[**drive**-show] - Show current drive configuration

<img src="assets/image-20200812134846697.png" alt="image-20200812134846697" style="zoom: 67%;" />

[**drive**-add] - The command [**drive**-add] is used to add new drive to the system.

[**drive**-extend] - The command [**drive**-extend] is used to extend already existing memory drive.

[**drive**-exit] - Exit to main menu.

---



### [**backup data**]



The command [**backup data**] is used to copy the database with metrics to external storage media or to move the data to another Flowcontrol server. The command "**backup data** can also be used to restore the database.

<img src="assets/image-20210204165556816.png" alt="image-20210204165556816" style="zoom: 33%;" />



<img src="assets/image-20210204153418870.png" alt="image-20210204153418870" style="zoom: 50%;" />

<img src="assets/image-20210204164711160.png" alt="image-20210204164711160" style="zoom: 50%;" />

---



### [**restore defaults**]



The command [**restore defaults**] is used to restore the databases to default settings.

<img src="assets/image-20210204170107797.png" alt="image-20210204170107797" style="zoom: 33%;" />

<img src="assets/image-20210204153648136.png" alt="image-20210204153648136" style="zoom: 50%;" />



[**restore defaults**-erase user cache] - The command [**restore defaults**-erase user cache] is used to erase all users cache.

<img src="assets/image-20210204153816725.png" alt="image-20210204153816725" style="zoom: 50%;" />



[**restore defaults**-erase user data] - The command [**restore defaults**-erase user data] is used to erase all user data like: users, mappings, groups, bookmarks, network alerts, notifications, SNMP, hostnames, license and reports.

<img src="assets/image-20210204153927393.png" alt="image-20210204153927393" style="zoom: 50%;" />



[**restore defaults**-erase app data] - The command [**restore defaults**-erase app data] is used to erase all applications data including bookmarks.

<img src="assets/image-20210204154245941.png" alt="image-20210204154245941" style="zoom: 50%;" />



[**restore defaults**-erase database] - The command [**restore defaults**-erase database] is used to erase all data/metrics both from database and cache.

---



### [**restart engine**]



 The command [**restart engine**] is used to restart FlowControl System engine.

---



### [**restart web service**]



 The command [**restart web service**] is used to restart FlowControl System web service.

---



### [**restart other services**]

 

The command [**restart other services**] is used to restart FlowControl System other services.

---



### [**restart database**]



The command [**restart database**] is used to restart FlowControl System databases.

---



### [**restart server**]



 The command [**restart server**] is used to restart FlowControl System server.

---



### [**shutdown server**]



 The command [**shutdown server**] is used to shutdown FlowControl System server.

---

