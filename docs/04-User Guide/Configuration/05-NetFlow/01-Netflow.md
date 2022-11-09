---
description: Netflow Tab
---

This menu [Configuration>NetFlow>**Netflow**] can be used to configure NetFlow parameters.

---

## Simple mode

In this menu, enter the port number for the NetFlow (**Netflow Port**), the default port is 2055.

![image-20221108113529232](Netflow_assets/image-20221108113529232.png)

---

## Advanced mode

**Netflow Ports** - the default port is 2055. You can change it or add a new port by pressing the plus button.

**New profile** - with this button you can add a new Netflow profile. When creating it you have to complete the following elements:

- **Name** - profile name.
- **Source type**
  - **asa**
  - **default**
  - **nbox**
- **Apply to exporters** - here you can assign a profile to the exporter.
- **Select non-standard fields** - here you can select non-standard Netflow fields.

The list of created **Profiles** is in the table with the following columns:

- **Profile** - profile name.
- **Type** - exporter type [**default**, **asa**, **nbox**].
- **Exporters IP** - exporter ip adress.
- **Action**
  - Edit - edit selected **Profile**.
  - Delete - delete selected **Profile**.

**Add exporter** - you can add an exporter.

![image-20221108114643380](Netflow_assets/image-20221108114643380.png)

The **Add exporter** section lists exporters with provided NetFlow templates and NetFlow fields.

![image-20221109142047764](Netflow_assets/image-20221109142047764.png)

![image-20221109142201952](Netflow_assets/image-20221109142201952.png)

---

## Creating new profile

Profiles allow defining fields of the NetFlow protocol to be analyzed by Sycope. You can create your own profiles depending on your needs.

Create a new profile by pressing the **New profile** button then the profile creation wizard will appear.

![image-20221108122451811](Netflow_assets/image-20221108122451811.png)



**Name** - unique profile name.

**Source type** [**default**/**asa**] - The source from which the stream of neftlow comes - it may be characteristic and differ for a particular device. In the system, in addition to the default source, the CISCO ASA device is defined. 

**Apply to exporters** - Here we assign a profile to the selected exporters.

**Choose advanced options** - In the table we can select additional non-standard NetFlow fields that are available to the selected exporter. 



To finish creating a new profile, press the **Save** button. The new profile will appear on the list of available profiles in the system. 
