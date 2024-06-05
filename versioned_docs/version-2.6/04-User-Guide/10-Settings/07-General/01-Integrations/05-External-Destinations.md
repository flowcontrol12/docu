---
slug: /User-Guide/Settings/General/Integrations/External-Destinations
---

# External Destinations

The **[Settings > General > Integrations > External Destinations]** menu can be used to configure the external destination to which the system will send data.

![image-20231116092501520](assets_05-External%20Destinations/image-20231116092501520.png)

The list of **External Destinations** is presented in a table with the following columns:

- **Name** - External Destinations name
- **Status** - active/inactive
- **Type** - template type - HTML or Text
- **Privacy** - information about object permissions in the context of roles
- **Shared** - information about access to the object in the context of roles
- **Action** - possible actions
  - **Edit** - edit an existing object
  - **Duplicate** - duplicate object, can be used as a template for a new object
  - **Export** - export to JSON
  - **Delete** - delete an object

To add a new **External Destination** click the **New external destinations** button and the **New external destinations** wizard will appear. 

At first, you have to choose the type of **External Destination**. There are currently four types of external destinations available:

- **Macmon**
- **Rest Client**
- **SNMP Trap Sender**
- **Syslog**



![image-20230526101738785](assets_05-External%20Destinations/image-20230526101738785.png)

---

## Macmon

Communication with the Macmon software used for monitoring and management of the network and its resources. Although Macmon supports various ways of communication, the Sycope allows for the configuration of communication only via the REST API interface with HTTP or HTTPS protocol.


For **Macmon** you need to fill the following form:

- **Type** - "Macmon"
- **Name** - external destination connection name
- **Active** - communication status, active/inactive
- **Ip** - Macmon server IP address
- **Port** - Macmon server port
- **Protocol** - Macmon server communication protocol
  - HTTPS
  - HTTP
- **User name** - User name for authentication
- **User password** - User password for authentication
- **API version** - The API version used by the Macmon server to which you choose to connect. This value is available for configuration of the current Macmon server.

- **Privacy** - assigning privileges 
  - Private - accessible to the owner

  - Public - accessible to all. 
    - Public permissions
      - Delete
      - Edit      

  - Shared - accessible to one or more selected roles. The available privileges are:
    - Delete

    - Edit  

    - View

The `Test connection` button is used for testing of the configured connection.

---

## Rest Client

The **User Scripts** functionality allows automatic communication by a POST json message with external systems using the **REST Client**. You can send **Alerts** "outside" of the System to other applications as long as they provide a supported interface.

When the **REST Client** is selected as the External destination, a window with connection parameters will be shown.

![menu master](assets_05-External%20Destinations/userscripts-new-form.png)

- **Name** - external destination connection name

- **Active** - communication status, active/inactive

- **Method** - REST protocol method of the server to which the connection will take place. Only the POST method is supported.
- **Path** - The URL path to the service. For example, for "http://local:1010/api/run", the value of this field must be "api/run".
- **Host** - The host of the server to which the connection is made.
- **Port** - The port of the server to which the connection is made.
- **Protocol** - HTTP or HTTPS protocol
- **Params** - Parameters that are sent to the server in a POST request. Parameters are sent as URL parameters after the '&' character. That is, in the example in "Path" "http://local:1010/api/run", if there is, for example, key=val parameters, the URL "http://local:1010/api/run&key=val" will be sent.
- **Headers** - HTTP header parameters sending in the request to the server.
- **Authorization** - Authorization type when accessing the server. Options to choose from: no authorization (noAuth), authorization by user and password (basicAuth) and authorization by token (bearerToken).
- **Options** - SSL protocol use on/off switch

The defined object can be used when defining a rule (RuleSet) in the actions tab, in the [**Alerts->Rule Set->Edit Rule**(by clicking on it)] menu . For this purpose, select the `Third party system` and `External system - REST` type. Then, in the `Instance name` field, select the defined communication and the threshold (`Threshold levels`) after which the event is to be sent.

![menu master](assets_05-External%20Destinations/userscripts-ruleset-actions.png)

Here you can select the external system defined in "Integrations - Rest Client" ("Instance name") to which alerts will be sent
when the selected "Threshold levels" are exceeded. 

---

## SNMP Trap Sender

The **SNMP Trap Sender** is used for communication with an external system using the SNMP Trap protocol. The protocol is used for sending and collecting of notifications regarding the events coming from devices. In this case, the source of the events (alerts) is the Sycope system.

For the **SNMP Trap Sender** you need to fill the following form:

- **Type** - "SNMP Trap Sender"
- **Name** - External destination connection name
- **Active** - communication status, active/inactive
- **Destinations**
  - Host - IP address of the server for the SNMP Trap protocols to which the notifications (alerts) will be sent.
  - Port - the port of the server for the SNMP Trap protocols to which the notifications (alerts) will be sent.
  - Protocol - the protocol used for sending the notifications.
    - TCP
    - UDP

- **SNMP Version** - the selection of the SNMP version. Depending on the choice, additional parameters resulting from the specification of the chosen version will be required.
  - V1 - "Community name" SNMP parameter for client (Sycope) authentication. The value must be equal to the value configured in the SNMP server Trap.
  - V2C - "Community name" SNMP parameter for client (Sycope) authentication and the ability to download an MIB file for this version that describes the format of the SNMP notifications sent via the Sycope system - `Download MIB file`.
  - V3 - a set of SNMPv3 parameters for client (Sycope) authentication and the ability to download an MIB file for this version that describes the format of the SNMP notifications sent via the Sycope system - `Download MIB file`.
  
- **Privacy** - assigning privileges 
  - Private - accessible to the owner

  - Public - accessible to all. 
    - Public permissions
      - Delete
      - Edit     

  - Shared - accessible to one or more selected roles. The available privileges are:
    - Delete

    - Edit    

    - View

---

## Syslog

The communication with an external Syslog-ng server. This server is one of the system tools and is used for registering of events (alerts) coming mainly from the system sources, network tools, as well as the application via the TCP or UDP network protocols. In this case, the registered alerts will be sourced from the Sycope.


For the **Syslog** you need to fill the following form:

- **Type**  - "Syslog"
- **Name** - External destination connection name
- **Active** - communication status, active/inactive
- **Destinations**
  - Host - Syslog server IP address
  - Port - Syslog server port (standard 514)
  - Protocol - the protocol with which the notifications will be sent.
    - TCP
    - UDP

- **Privacy** - assigning privileges 
  - Private - accessible to the owner

  - Public - accessible to all. 
    - Public permissions
      - Delete
      - Edit     

  - Shared - accessible to one or more selected roles. The available privileges are:
    - Delete

    - Edit    

    - View

