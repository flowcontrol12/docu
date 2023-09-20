# Installation guide



This document describes the step-by-step installation and configuration process of Sycope 2.X on VMWare ESXi version 7.0+.	

For additional resources and information, please visit Sycope LLC website at www.sycope.com.

## 1. Image download

To download the Sycope system image, log in to the Sycope Portal https://portal.sycope.com. 

![image-20220803142948172](assets_03-Installation%20guide/image-20220803142948172.png)



After logging in, go to the Images menu where you will find system images that you can download.

![image-20230908100238278](assets_03-Installation%20guide/image-20230908100238278.png)

Download the image that suits you by clicking the icon to its right.



In this example, **Vmware ESXi v.7.0** will be used, so download the image named **Sycope_2.3.0.28.2-vm7.0u2.ova** where **“vm7.0”** means that it is created just for this version of the system.

:::tip

If you have a VMware ESXi version, for which there is no image on the **Sycope Portal**, you can use a tool provided by VMware https://developer.vmware.com/web/tool/4.4.0/ovf that allows you to import and export OVF packages to and from many VMware products.

:::

## 2. Deployment

To perform a successful installation, please **follow the steps below**:

1.  Log in to VMWare ESXi.

![image-20220803150226858](assets_03-Installation%20guide/image-20220803150226858.png)

2. From the **Navigator Menu** go to **Virtual Machines**. Click on **Create / Register VM**. A pop-up window will show up with a few steps to be completed.

3. Select **Deploy a virtual machine from OVF or OVA file** and then click **Next**.

   ![image-20230908103200429](assets_03-Installation%20guide/image-20230908103200429.png)

4. Enter the name of the virtual appliance you want to create. Browse the OVA file by clicking on the blue parallelogram or drag and drop on it. Click **Next**,

   ![image-20230908103340238](assets_03-Installation%20guide/image-20230908103340238.png)



5. Choose the desired datastore that will hold the FlowControl XN files. Click **Next**.

   ![image-20230908103528071](assets_03-Installation%20guide/image-20230908103528071.png)



6. Select the data provisioning options depending on your requirements. Make sure that the **Power on automatically** option is deselected. Click **Next**.

   ![image-20230908103652800](assets_03-Installation%20guide/image-20230908103652800.png)

7. After completing all the previous steps, a pop up window will show up summarizing all the information about the virtual machine that has been created. Click **Finish** to start the deployment process.

   ![image-20230908103809459](assets_03-Installation%20guide/image-20230908103809459.png)



##  3. IP address, DNS Server and Gateway  configuration

For the operation of the system, it is necessary to configure the network parameters, so you need to configure the appropriate **DNS Server** address,  **IP** address, and **Gateway** address.

When the installation process is complete, please start the installed system and then **log in** using the **ESXi Console**.

![image-20230908104604466](assets_03-Installation%20guide/image-20230908104604466.png)



:::info

The **Sycope** default password and username for the **VMware Console**:

**user:** admin

**password:** admin123

:::

After logging into the system via the **VMware Console**, select the **Network Interfaces Tab** and change the settings of the selected Interface.

![image-20230911093813658](assets_03-Installation%20guide/image-20230911093813658.png)

![image-20230908104826297](assets_03-Installation%20guide/image-20230908104826297.png)

![image-20230908110127927](assets_03-Installation%20guide/image-20230908110127927.png)

## 4. Let’s start

After completing all the above steps, if the configuration has been done correctly you can log into the System using a web browser. 

:::info

The **Sycope** default password and username for the **www interface**:

**user:** admin

**password:** qwerty

:::

:::danger

**It is highly recommended to change the default password !!!**

:::



In a situation where we have a fresh system after installation, the Sycope application is in an unactivated state. After launching it and logging in, there will be a
"jump-start" form will appear.

![maintenancemode-jumpstart](assets_03-Installation%20guide/maintenancemode-jumpstart.png)

In order to run the system in standard mode, you need to configure the following elements:

- **NTP Configuration**
- **License**
- **Set Sycope Admin Password**
- **Netflow Collection**

### 4.1 NTP Configuration

This tab is used to set basic parameters related to date and time setting. 

![maintenancemode-ntpcofig](assets_03-Installation%20guide/maintenancemode-ntpcofig.png)

There are two options to choose from:

- **Use Local Time** - manual setting.
- **Synchronize to an NTP server** - an external NTP time server will be used to set the date and time.

You can add more than one time server.

### 4.2 License

This tab is related to the process of system activation by entering license data. 
There are two modes of system activation:
- **Automatic**
- **Manual**

#### 4.2.1 Automatic process

The automatic activation process can be executed after the **first** initial installation of the system. In this method, the process of entering company data, generating a request, activating on portal.sycope.com and uploading a license is done
automatically in the background.

![image-20230908125416319](assets_03-Installation%20guide/image-20230908125416319.png)

In order to be able to activate the System in this mode, the following conditions must be met:

- You must have **License serial number** and **Company ID** - you will get them from Sycope support
- the server on which you install the Sycope system must have **Internet** access on **port 443** to the **updates.sycope.com** domain



:::caution

1. The process is **<u>one-time</u>** - once the ID pair is used, you will not be able to use it again. The appropriate message "License already activated" will pop up.
2. Renewal of licenses is possible **<u>only</u>** through a **manual process**.
3. Automatic activation does not allow uploading licenses as the machine already has one.
4. Automatic and manual activation processes are interrelated. This means that starting the license activation process in Manual mode and then interrupting it and trying to start the Automatic process may block it and you will have to start the Manual activation from the beginning.

:::



#### 4.2.2 Manual process

To activate the Sycope system in this mode, follow the steps below:

1. Log in to the **Sycope Portal** https://portal.sycope.com  and check if you have an active **template** where you can make an upload license request.

![image-20220804122508219](assets_03-Installation%20guide/image-20220804122508219-4416602.png)

2. Click the **Required information to create license request** icon, then check and save the information displayed in the **Company info** window

![image-20220803205025327](assets_03-Installation%20guide/image-20220803205025327-4416612.png)

3. Using a **web browser**, log in to the installed **Sycope** system to be activated.

:::info

The **Sycope** default password and username for the **www interface**:

**user:** admin

**password:** qwerty

:::

:::danger

**It is highly recommended to change the default password !!!**

:::

4. Generate a License request. To do this, go to the **License tab**, click **Generate** and fill out the form with exactly the same information as the Company info in the **Sycope Portal**. After entering the information, click **Generate** on the form and copy the generated **License request**.

:::caution

The information entered in the **License request** form **<u>must be</u>** identical to that in the **Company info** form on the **Sycope Portal**. Any change or mistake will result in the rejection of the request. If the **License request** was **rejected**, correct the data and renew the **License request** by clicking the **Renew** button.



![image-20220808102754121](assets_03-Installation%20guide/image-20220808102754121.png)

:::

:::caution

The **Renew license dialogue** deletes the current license key and generates a new license request for a new serial number. Please remember that a unique serial number is created for each license request and cannot be used in the license renewal process.



![image-20230317114303040](assets_03-Installation%20guide/image-20230317114303040.png)

:::

![](assets_03-Installation%20guide/image-20220803204235897.png)

![image-20220804125656387](assets_03-Installation%20guide/image-20220804125656387.png)



![image-20220804130154256](assets_03-Installation%20guide/image-20220804130154256.png)

5. Go to the **Sycope Portal** again click the **Upload license request** icon and paste in the contents of the **License request.** Then click **Send**. A **wait_for_admin** status will appear next to the license. 



![image-20220804130438333](assets_03-Installation%20guide/image-20220804130438333.png)

![image-20220804130631262](assets_03-Installation%20guide/image-20220804130631262.png)

![image-20220804131110751](assets_03-Installation%20guide/image-20220804131110751.png)





6. When the **license request** is approved by the Sycope Team, the license status on the Sycope Portal will change to **activated**. Click the **Activation token** icon and save the contents of the window to the clipboard.



![image-20220804131708606](assets_03-Installation%20guide/image-20220804131708606.png)



![image-20220804131903499](assets_03-Installation%20guide/image-20220804131903499.png)





7. Go to the **web browser** window and log back into the **Sycope** system. Go to the **License tab**, paste the **Activation token** into the **Activation Code field** and click **Verify**. If everything is done correctly, a  License activated successfully message will appear.

   

   

   ![image-20220804141501726](assets_03-Installation%20guide/image-20220804141501726.png)

   

8. Go to the system by clicking the **Go to app** button. The **Sycope** system is ready for use.

![image-20220804141644212](assets_03-Installation%20guide/image-20220804141644212.png)



![image-20220804122145367](assets_03-Installation%20guide/image-20220804122145367.png)



:::caution

After activation, the System needs about 15 minutes to start collecting data.

:::

### 4.3 Set Sycope Admin Password

This tab is used to set the admin password.

![maintenancemode-adminpassword](assets_03-Installation%20guide/maintenancemode-adminpassword.png)

:::info

The **Sycope** default password and username for the **www interface**:

**user:** admin

**password:** qwerty

:::

:::danger

**It is highly recommended to change the default password !!!**

:::

### 4.4 Netflow Collection

This tab is used to set the ports on which the Netflow protocol will be received by the system.

![maintenancemode-netflow](assets_03-Installation%20guide/maintenancemode-netflow.png)
