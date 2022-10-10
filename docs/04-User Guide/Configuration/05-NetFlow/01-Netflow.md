---
description: Netflow Tab
---

This menu [Configuration>NetFlow>**Netflow**] can be used to configure NetFlow parameters.

---

**Simple mode**

In this menu, enter the port number for the NetFlow (**Netflow Port**), the default port is 2055.

---

**Advanced mode**

**Netflow Ports** - the default port is 2055.You can change it or add a new port by pressing the plus button.

**New profile** - with this button you can add a new Netflow profile. When creating it you have to complete the following elements:

- **Name** - profile name
- **Source type**
  - asa
  - default
  - nbox
- **Apply to exporters** - here you can assign a profile to the exporter.
- **Select non-standard fields** - here you can select non-standard Netflow fields.

The list of created **Profiles** is in the table with the following columns:

- **Profile** 
- **Type**
- **Exporters IP**
- **Action**
  - Edit - edit selected **Profile**
  - Delete - delete selected **Profile**

**Add exporter** - you can add an exporter

---

