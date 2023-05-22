---
description: Licenses
---

This menu [Configuration>**Licenses**] can be used to manage a system the licenses.

Here you will find information about the license number, license type, license validity and what functions are included in your license. It also includes options related to the process of obtaining and entering licenses.

At the bottom, there is a graph showing the statistics of the number of flows processed by the system.



## Licenses FAQ



Q: 
**What happens when both the Visibility and the Maintenance subscription expire?**

A:  

- The System goes to Let’s start menu/mode

- The System stops collecting NetFlow

- Data retention works

---

Q: **What happens when the Maintenance subscription expires but the Visibility does not expire (perpetual license)?**

A: 

- The System works normally
- Unable to update the System to a newer version
- No active Sycope Support 

---

Q: **What happens when the Security subscription expires but the Visibility not expires?**

A:

- Rules, Dashboards and Lookups with assigned security licenses are not available

- No security feeds 

---

Q: **What happens in case of oversubscription?**

A:

- Access to Dashboards and Alerts is blocked

- The System collects and processes NetFlow normally 

---

Q: **How do we define oversubscription?**

A: 

- The average number of NetFlow received by the system in 15 min is counted, and compared with the license limit 

- After 6 license limit exceedances in a day, a day is added to the number of days of exceedances counter 

- After 15 days of exceeding the license limit (day after day) - a yellow warning is generated in the System 

- After 30 days of exceeding the license limit (day after day) - a red alert is generated, and the system goes into oversubscription mode

---

Q: **What happens when the license is missing or corrupted?** 

A: 

- The System goes to Let’s start menu/mode

- The System stop collecting NetFlow

- Data retention works!

---

Q: **What happens after the reinstallation of the System?**

A:

- The system requires the license activation procedure

---

Q: **What happens when the System loses online connection with the portal?**

A:

- Access to Dashboards and Alerts is blocked

- The System collects and NetFlow normally

---

Q: **vMotion (move between esx)**

A:

- The System works normally
