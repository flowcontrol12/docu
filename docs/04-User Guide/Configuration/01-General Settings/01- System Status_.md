---
id: System Status_
title: System Status
description: System Status Tab
---

In this menu [Configuration>General Settings >**System Status**], there are several widgets and tables with detailed information about the system parameters and status of its components, for example, free disk space, CPU load, up time, and so on.

There are two buttons:

- **Shutdown ** - system shutdown

- **Restart** - system restart

There are the following widgets:

- **System Information**
- **Uptime**
- **Memory usage**
- **OS Disk Drive**
- **Datastore Disk Drive**
- **CPU**
- **Network Interfaces**
- **Services**
- **Backup**
- **System logs**

---

**System Information**

- **System Name** - individual system name
- **CPU** - processor type
- **Total RAM** - total RAM
- **Management IP** - IP address for system management

---

**Uptime** - system operation time since the last startup in the format dd/hh/mm/ss 

---

**CPU** - CPU load

---

**Memory usage** - memory usage by total, used, and free.

---

**Datastore Disk Drive,** there is a table with the following columns:

**Name** - system directory name

**Usage** - directory disk usage by used, total and free

---

**Datastore Disk Drive** - Datastore disk usage by use of total

---

**OS Disk Drive** - OS disk drive usage by used and total

---

**Network Interfaces**  there is a table with the following columns:

- *Name* - interface name

- *Status* - interface status Up/Down
- *IP* - interface IP address

- *MAC* - interface MAC address

- *Mode* - interface mode 
- *Managed* - true/false 
- *Autoconnect* 
- *In* - number of bits per second 
- *Out* - number of bits per second 
- *Action* - buttons to enter *interface edit mode*
- *Edit interface* -  there are the following fields to specify:
  - *MAC*
  - **MTU*
  - *Driver*
  - *Status*
  - *IPv4* - DHCP/Static/Disabled
  - *IPv6* -DHCP/ Static
  - *DNS Servers*
  - *IP Address*
  - *Gateway*


---

**Services**

There is a table with the following columns:

- Name  

- Description 
- State

- Sub state 

- Load state

- Action - buttons Stop, Restart and Show logs

- Show logs button - opens the window with a table containing the event Timestamp and Message related to it. The download button allows you to save logs to a local disk.

---

**System logs** 

- Generate logs button - generates a log file saved on the user's local disk.

---









