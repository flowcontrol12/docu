---
description: Auth Providers Tab
---

This menu [Configuration>Account Management>**Auth Providers**] can be used to configure  Authentication Provider. Currently the system allows to use only a Microsoft AD as an Auth provider.

The list of `Auth Providers`  is contained in a table which has the following columns:

- **Type** - now AD only
- **Name** - AD provider name
- **Status**  
- **Host**  
- **Port** 
- **Domain** -
- **SSL**  
- **Actions**
  - **Edit** - edit an existing `User`  
  - **Change** password - change `User` password  
  - **Delete** - delete   `User` 



To add a new `Auth provider`  click **New auth provider** button then fill in the form:

- **Type** - now Ad only
- **Name** - Ad provider name 
- **Active** switch button  
- **Host** - host IP address
- **Port** - service port number  
- **Domain** - AD domain name
- **SSL** switch button  
- **Default role**  
- **Roles map**
  - Ad role
  - System role
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
