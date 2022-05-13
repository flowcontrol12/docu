This menu [Configuration>Integrations>**External Destinations**] can be used to create external destination to which the system will send data.

The list of **External Destinations** is in the table with the following columns:

- **Name** -**External Destinations** name.
- **Status**
- **Type** - template type - Html or Text.
- **Action**
  - Edit - edit an existing **Email Template**
  - Duplicate - can be used as a template for a new template
  - Delete - delete  Email Templates.



To add a new **External Destinations** click **New external destinations** button then the **New external destinations** wizard will appear. 

At first, you have to choose the type of **External Destination**. There are currently two types of external destinations available:

- Macmon,
- Syslog.

---

For Macmon you need to fill the following form:

- **Type** 
- **Name**
- **Active** switch button 
- **Ip**
- **Port**
- **Protocol**
  - HTTPS
  - HTTP
- **User name**
- **User password**
- **Api version**
- **Privacy** - assigning privileges 
  - Private - accessible to the owner

  - Public - accessible to all. 
    - Public permissions
      - Delete
      - Edit
      - Execute

  - Shared - accessible to one or more selected roles. Available privileges are:
    - Delete

    - Edit

    - Execute

    - View



You can check if the configuration is correct by pressing the **Test connection button**.

---

For **Syslog** you need to fill the following form:

- **Type** 
- **Name**
- **Active** switch button - 
- **Deastinations**
  - Host
  - Port
  - Protocol
    - TCP
    - UDP

- **Privacy** - assigning privileges 
  - Private - accessible to the owner

  - Public - accessible to all. 
    - Public permissions
      - Delete
      - Edit
      - Execute

  - Shared - accessible to one or more selected roles. Available privileges are:
    - Delete

    - Edit

    - Execute

    - View
