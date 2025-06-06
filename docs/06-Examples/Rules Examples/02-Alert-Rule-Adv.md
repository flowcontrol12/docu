---
slug: /Examples/Rules-Examples/Advanced
---

# Examples of alert rule creation - advanced way

The advanced method of creating a **Rule** is to design it from scratch. In our example, we will create a rule named **Virus Outbreak** to detect malware spreading. Detection of such a case can be realized by detecting the communication of one workstation with many others in a short period of time. So let's proceed to create such a rule from scratch.

## Implementation

To design a new rule go to menu [Alerts>**Rule Set**] and then click **New rule** and select **From scratch** option.

![image-20230626110622025](assets_Alert%20rule%20from%20scratch/image-20230626110622025.png)



When clicked, a rule creator window appears in which the system indicates which fields should be filled in.

![image-20220808134611997](assets_Alert%20rule%20from%20scratch/image-20220808134611997.png)



1.  In the **General** section we set the rule enable (Active), fill in the required fields: **Rule Type**, **Name**, **Score** and optionally **Tags**, Description or MITRE (Tactic, Technique, Subtechnique).
    ![image-20220808135823474](assets_Alert%20rule%20from%20scratch/image-20220808135823474.png)

    ![image-20220808135758168](assets_Alert%20rule%20from%20scratch/image-20220808135758168.png)

2.  In the **Stream** section, we choose Netflow because we want to analyze traffic on raw flows.
    ![image-20220809122623037](assets_Alert%20rule%20from%20scratch/image-20220809122623037.png)

3. In the **Time** section, we leave the default value of 15 minute.

4. In the **Values** section, we select the fields for which we want to set thresholds for anomaly detection. In our case these are: **Unique Server IPs** and **Count Sessions**. 

   ![image-20230626111221948](assets_Alert%20rule%20from%20scratch/image-20230626111221948.png)
      These metrics are predefined, and you can preview it in **[Settings > Configuration > Objects > Metrics]**.
      ![image-20220809111545608](assets_Alert%20rule%20from%20scratch/image-20220809111545608.png)![image-20220809111522406](assets_Alert%20rule%20from%20scratch/image-20220809111522406.png)

   In case you want to use a custom metric, you can create one from the [**Values -> Add new metric**], or you can go to **[Settings > Configuration > Objects > Metrics]**.
![image-20230626111334670](assets_Alert%20rule%20from%20scratch/image-20230626111334670.png)

5. In the **Categories** section, we set grouping by Client IP and Server Port, because we want to detect a situation where an infected host (Client IP) communicates with multiple servers (Unique Server IPs) on a given port (Server Port).

   ![image-20230626111646107](assets_Alert%20rule%20from%20scratch/image-20230626111646107.png)

   ![image-20230626111742124](assets_Alert%20rule%20from%20scratch/image-20230626111742124.png)

   

6. In the **Schedule** section, we leave the default parameters for interval and throttling, i.e. 1 minute, because, for this scenario, a time interval of 1 minute will be right. In the Indexed fields option, the same values are set as in Categories.

7. In the **Thresholds** section, set the exceedance values for the metrics configured in the Values section.

   ![image-20230626112112763](assets_Alert%20rule%20from%20scratch/image-20230626112112763.png)

   The correlation rule will trigger when in a period of 1 minute, one host (Client IP) will communicate with at least 10 hosts (Server IP) using the same port and there will be at least 1 established session (Count Sessions). If there are more of these attempts then the rule will have a higher criticality - depending on the configured thresholds (Major and Critical).

   ![image-20230626112201043](assets_Alert%20rule%20from%20scratch/image-20230626112201043.png)

   7.a.

   Thresholds can be either static or dynamic. To configure dynamic thresholds, change the threshold type from **Static** to **Reference**.

   ![Threshold Reference](assets_Alert%20rule%20from%20scratch/threshold-reference.png)

   And specify the desired dynamic limits. Possible options are ***Avg***, ***Max***, ***Min***, ***Prc*** and ***Sum***.

   ![dynamic limits](assets_Alert%20rule%20from%20scratch/dynamic-limits.png)

   7.b.
   
   Additional options for setting dynamic limits are available under the **Edit baseline** button.

   ![Edit button](assets_Alert%20rule%20from%20scratch/edit-button.png)

   - **Custom Threshold Metrics**

   After enabling Custom Threshold Metrics, additional data stream settings become available. These options allow you to apply extra filters and customize the data stream to meet specific requirements.

   ![custom-threshold-metrics](assets_Alert%20rule%20from%20scratch/custom-threshold-metrics.png)

   - **Filter Days**  

   The day filtering option allows for dynamically setting limits based on the day of the week, whether it is a weekday or a weekend.  
   The new ***Auto Days*** option automatically distinguishes between weekdays, weekends, and holidays. Based on this, it adjusts the thresholds accordingly to ensure optimal settings for each day type.

   ![Filter Days](assets_Alert%20rule%20from%20scratch/Filter-Days.png)


8. In the **Actions** section, we specify that all our alerts (Critical, Major, Minor) generated by this rule will be saved in the alerts table, and we also set custom fields that should additionally be included in the alert (First Client Country, First Client Function, First Client ASN).

   ![image-20230626112657723](assets_Alert%20rule%20from%20scratch/image-20230626112657723.png)

   ![image-20230626112743764](assets_Alert%20rule%20from%20scratch/image-20230626112743764.png)

   
   Custom fields are metrics, so their configuration is available in the [**[Settings > Configuration > Objects > Metrics]**](/User-Guide/Settings/Configuration/Objects/Metrics).


   8.a.
   
   An additional option is to set up custom actions, such as sending a **REST request**.

   - Change the **Type** field to **Third Party System**.
   - Select **REST** under the **External System** option.
   - Choose the system to which the requests should be sent in the **Instance name** field 
      - the system must be previously added in [**[Settings > General > Integrations > External Destinations]**](/User-Guide/Settings/General/Integrations/External-Destinations).
   - Choose **Threshold levels** that trigger the request

   Once set, the system will automatically send REST requests whenever the defined threshold levels are reached.

   ![Third Party System](assets_Alert%20rule%20from%20scratch/Third-Party-System.png)


### Advanced options

In our example, we will also use the advanced options available by clicking the **Show advanced option** switch. 

![image-20220809123906436](assets_Alert%20rule%20from%20scratch/image-20220809123906436.png)

We want our rule to generate as few False Positives alerts as possible so we use the **Time & Input Filters** section for this purpose. 

1. In the **Time & Input Filters** section, in order to limit detection to only private addresses and the Workstations function group, we enter the following condition in the **Filter by**:

   ```
   lookupKeyExists("groups-private", {"cidr": serverIp } ) AND lookupKeyExists("groups-private", {"cidr": clientIp } ) AND any(serverGroups, ["Workstations"]) 
   ```

   ![image-20220809161141308](assets_Alert%20rule%20from%20scratch/image-20220809161141308.png)

   IP Addresses of  the Workstations function group may be changed in the  **[Settings > Configuration > Mapping > Lookups]**.

2. Finally, in the **Sorting** section, we can set sorting by some metric, such as **Unique Server IPs**.
  
   ![image-20230626141812232](assets_Alert%20rule%20from%20scratch/image-20230626141812232.png)
   
   
   
   If we think that our rule has been configured as we expected, we should press **Create** and the rule will appear in the list of rules in the system.
   
   ![image-20230626143855358](assets_Alert%20rule%20from%20scratch/image-20230626143855358.png)
   