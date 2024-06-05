---
slug: /User-Guide/Settings/Security/Authentication-Providers
---

# Authentication Providers


This menu **[Settings > Security > Authentication Providers]** can be used to configure  Authentication Provider. Currently the system allows to use only a Microsoft AD as an Auth provider.

The list of `Authentication Providers`  is contained in a table which has the following columns:

- **Type** - now AD only
- **Name** - AD provider name
- **Status**  
- **Host**  
- **Port** 
- **Domain** 
- **Security**
- **Privacy**
- **Shared**
- **Actions**
  - **Edit** - edit an existing `User`  
  - **Change** password - change `User` password  
  - **Delete** - delete   `User` 



To add a new `Auth provider`  click **New auth provider** button then fill in the form:

- **Type** - now AD only
- **Name** - AD provider name 
- **Active** switch button  
- **Host** - host IP address
- **Port** - service port number  
- **Domain** - AD domain name
- **User base dn** 
- **Group base dn** 
- **Security**
  - SSL
  - TLS
- **Default role**
- **Roles map**
  - Ad role
  - System role

- **Privacy** - you can grant permissions for an Auth Provider
  - **Private** - accessible to the owner
  - **Public** - visible to all, but You can grant permission:
    - **DELETE**
    - **EDIT**
  - Shared - accessible to one or more selected **User roles**. Available privileges are:
    - **Delete**
    - **Edit**
    - **View**
