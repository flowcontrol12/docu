<!-- Wersja 1.6.1 - docusaurus 2.0 dopasowana rozdzielczość rysunków -->

### FlowControl ver. 1.6

1. Mapping functionality has been extended - additional fields and groups have been added.

2. Additional fields support in NetFlow and IPFIX protocols (Config->Netflow->Advanced) has been added.

3. New metrics Packets, Packets/s have been added to the system visualizations.

4. New alarm wizard that allows the user to create advanced nested rules based on a number of parameters, fields, metrics and operators has been added.     

6. Alarms views have been rebuild.

7. New views MPLS and Path NAT for RAW DATA submenu have been added.

8. NetFlow packets filtering utilizing a advance filter wizard based on a number of fields, parameters, metrics and operators has been added.

9. System status and network alarms indicator as a dot to the right of the SYCOPE logo and as a popup with description have been added.

10. Support for IPv4 and IPv6 a addressing on each interface has been added.                          

11. Functionality to configure parameters of DNS lookup for the system engine has been added.                                      

12. Functionality of NetFlow forward has been added.

13. Funcionality to configure system data retention time based on granularity and database type has been added.

14. REST API for metrics has been added.  

**XNS, XND and XNR**

14. Manual blocking IP function in the XND module has been added.

15. New XNS rules have been added:

-  Unprotected Docker Daemon
- Unauthorized RDP from Internet
- Unauthorized NFS Export Outside The Local Network
- OT Device Discovered
- Multicast DNS (mDNS) from Internet

16. Threat categories, tactics and technics fields based on latest MITRE KB have been updated.

17. Threat Intelligence module to import security feeds from Sycope Cyber Threat Intelligence (SCTI) has been added.

18. Capacity reports in XNR module has been added.

**CLI**

19. Functionality to resize system log files has been added.

20. Functionality to change the space reservation percentage for the disk space management process has been added.

### FlowControl ver. 1.5.2

1. Added new submenus to Configuration menu with commands: Update, Backup, Restore and Logs.
2. Added a new Total Packtes/s metric on the tab Traffic Overview in the Traffic submenu.
4. Application separation in context of TCP and UDP protocols in the Mapping configuration.
5. Unified syslog notification format for XN, XNS, and XND modules.

**CLI**

6. Added new commands: 
   - backup database,
     - open share | close share,
   - restore defaults,
     - erase user cache,
     - erase user data,
     - erase app data,
     - erase database,

7. modified the following commands:
   - logs,
     - collect,
     - close,
     - clean.

**XNS and XND modules**

8. Improved Threat Detection type rules (fixing the problem with whitelisting groups):
   - High Data Transfer (Int->Ext),
   - High Data Transfer (Ext->Int),
   - High Data Transfer (Int->Int),
   - Unusually High Data Transfer (Int->Ext),
   - Unusually High Data Transfer (Ext->Int),

9. Changed in the interval of external feeds refreshing parameter to one hour.

10. Fixed incorrectly designed feeds.

11. Added new rules to detect Sunburst backdoor.

12. Fixed a bug with incorrect data display in XNS/External Alerts and XNS/Internal Alerts views. 

13. Changed the XNS/Alerts dashboard - in addition to the list of alerts, there is also a histogram showing the number of threats in a specific range by threat category.

14. ATT&CK MITRE fixes implemented:
    - updated categories and techniques for the adequate security rules, 
    - fixed bug that prevented linking Alert Name to MITRE ID.

15. Extended list of default ports recognized by the system.

16. Fixed a bug in displaying XNS data in other than administrator account. 

17. Fixed bug in KPIs dashboards display function.

18. Fixed bugs in the GUI:

    - User with access to XN module could see "SYS" menu headline.

    - User without XN access is still welcomed by an operational NOC after initial login.

    - When creating a new custom feed, after saving the change, the score with incorrect value appears.

    - After deleting all Internal Threat Intelligence rules they get replaced with different ones that cannot be deleted.

    - When the Feed ID value to the Custom Feed is added, no changes is applied even though information "Success! Data has been saved correctly!" is displayed.

### FlowControl ver. 1.5.1

1. A new method for entering permissions for users has been added. When creating or modifying user account, it is possible to select the "Show advanced view" to  assign permissions to individual dashboards.
2. A possibility of hiding the date selection and reload bar by clicking on the filter icon on the top right or in the profile settings has been added.
3. Added the functionality of using advanced filters in the Search field.
4. Extention a Drill-Down option for each graph/table.
5. New Audit Logs menu with information on user activity in the system has been added.
6. Added popup showing how long the data was loaded.
7. Added a new unit on graphs - packets/s.
8. Added new dashboard in Raw Data submenu named Throughput based on Utilization database.

**XNS module**: 

9. Improved the Unauthorized DHCP Server Activity rule.
10. Improved the Unauthorized DNS Server Activity rule. 
11. Extention of Suspicious Port BL rule  - detection of a wider range of threats i.a. cryptomining has been added.

**XND module**: 

12. Extension of DDoS dashboards i.a. added Ratios unit to DDoS Deep Analysis dashboard.
13. Added new feature to mitigate DDoS - RTBH (Remotely Triggered Black Hole).

###  FlowControl ver. 1.5

1. New improved engine.

2. LDAP and Radius authentication support.

3. Extension of RBAC mechanism with access control per system module.

4. Data filtering optimization.

5. Extension of CLI Command Line Interface (CLI) options:

   5.1.  PROXY operation.

   5.2.  Incoming ACL for management access.

   5.3.  PCAP download, including Netflow packets for diagnosis.

   5.4.  System health check including proper CPU config, CPU and RAM load, HDD usage.

   5.5.  Database storage disk check.

   5.6.  System components check.

   5.7.   Database storage disk operations, including addon and extension.

   5.8.  Logging extensions.

   5.9.  Restart and service reboot commands changes to provide full pairity with GUI.

6. Extension of Graphical User Interface (GUI) options:

   6.1.1. Filtering extensions for network prefix usage, additional to already implemented regex style filtering). Available for IP address tables with /16 to /29 range.

   6.1.2. New metric available for most charts: bits/s.

   6.1.3. Automatic unit change for bytes, bits and bits/s added, e.g. kB, kb, kB/s, MB, Mb, Mb/s, GB, Gb, Gb/s, TB, Tb etc.

**XN module**: 

7. Automatic ASA NSEL recognition added.

8. Extension of Graphical User Interface (GUI) options:

   8.1. Apps submenu – possibility to customize shown apps added. Configuration done via Config -> Mapping tab.

   8.2. ASA submenu – added support for additional fields from NSEL: Firewall Event, Firewall Extended Event.

   8.3. RawData submenu– new tab added: **throughput**.

**XNS module**: 

9. Functionality of using function groups in security rules and visualizations added.

**XND module**: 

10. Graphical User Interface (GUI) have been extended with:

    10.1. For DDOS submenu new dashboard with map and Source Hosts dashboard added.

    10.2.  The new Protocols Overview submenu added – a set of views of analyzed protocol traffic (TCP/UDP/ICMP) from the last 3 hours, which reloads every minute.

    10.3. The new Protocols Details submenu added – view of analyzed traffic for protocols with the ability to move through different time ranges.

    10.4. There have been extended tabs allowing correlations with real traffic, e.g. displaying information about attackers in the context of IP, countries and ASN.

    10.5. Additional tabs for more precise analysis of DDoS attacks added, including presentation of source host data in the context of IP, Country or ASN.
