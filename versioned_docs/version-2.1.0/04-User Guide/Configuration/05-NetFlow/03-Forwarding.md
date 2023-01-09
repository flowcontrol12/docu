---
description: Forwarding Tab
---

This menu [Configuration>NetFlow>**Forwarding**] can be used to configure NetFlow packets forwarding functionality.

---

**Simple mode**

In this menu, enter the port number for the NetFlow (**Netflow Port**), the default port is 2055.

---

**Advanced mode**

**New forwarder rule** 

**Import forwarder rule** 

**New profile** - with this button you can add a new Netflow profile. When creating it you have to complete the following elements:

- **Name** - profile name
- **Source type**
  - asa
  - default
  - nbox
- **Apply to exporters** - here you can assign a profile to the exporter.
- **Select non-standard fields** - here you can select non-standard Netflow fields.



The list of created **Rules** is in the table with the following columns:

- **Filter** 
- **Status**
- **Destinations**
- **Privacy**
- **Shared**
- **Action**
  - Edit - edit selected **Profile**
  - Delete - delete selected **Profile**



---

