---
slug: /User-Guide/Settings/Support-and-Diagnostics/Remote-Support
---

# Remote Support

**[Settings > Support & Diagnostics > Remote Support]** menu can be used to assign temporary controlled support access to the system via SSH protocol. 

![image-20230906091058946](assets_03-Maintenance%20Mode/image-20230906091058946.png)

In the first step, to open a connection via SSH protocol, you need to run the Challenge Response process.

To do this, copy the code from the `Challange` field and send it to Sycope support. Then, support will send back a new code which you should enter in the `Response` field. Pressing the `Verify` button will start the process of verification and launching the SSH service on the system in which the Sycope application is installed.

![image-20230906100603238](assets_03-Maintenance%20Mode/image-20230906100603238.png)

To open an SSH tunnel, it is necessary to click the `Connect` button. 

![image-20230906095939697](assets_03-Maintenance%20Mode/image-20230906095939697.png)

The connection is established using TCP protocol on port 443 to the AWS instance (supportaccess.sycope.com).

After a successful connection, you will see a "Remote tunnel opened successfully" message and under the `Disconnect` button you will see the Connection ID value.

![image-20230906100036927](assets_03-Maintenance%20Mode/image-20230906100036927.png)

`Connection ID` is a random number identifying a given connection to a specific instance of the Sycope application.
The SSH service is stopped when the set `Active time` expires.

The `Disconnect` button is used to close the connection tunnel.
The `Stop` button stops the SSH service.

