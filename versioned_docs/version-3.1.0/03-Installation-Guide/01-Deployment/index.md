---
slug: /Installation-Guide/Deployment
---

# Deployment


This document describes the step-by-step installation and configuration process of Sycope 2.X on VMware ESXi version 7.0+.	

For additional resources and information, please visit Sycope LLC website at www.sycope.com.

## Image download

To download the Sycope system image, log in to the Sycope Portal https://portal.sycope.com. 

![image-20220803142948172](assets_03-Installation%20guide/image-20220803142948172.png)



After logging in, go to the Images menu where you will find system images that you can download.

![image-20230908100238278](assets_03-Installation%20guide/image-20230908100238278.png)

Download the image that suits you by clicking the `Download file` icon to its right.



In this example, **VMware ESXi v.7.0** will be used, so download the image named **Sycope_2.3.0.28.2-vm7.0u2.ova** where **“vm7.0”** means that it is created just for this version of the system.

:::tip

If you have a VMware ESXi version, for which there is no image on the **Sycope Portal**, you can use a tool provided by VMware (https://developer.VMware.com/web/tool/4.4.0/ovf) that allows you to import and export OVF packages to and from many VMware products.

:::

## Deployment

To perform a successful installation, please **follow the steps below**:

1.  Log in to VMware ESXi.

![image-20220803150226858](assets_03-Installation%20guide/image-20220803150226858.png)

2. From the **Navigator Menu** go to **Virtual Machines**. Click on **Create / Register VM**. A pop-up window will show up with a few steps to be completed.

3. Select **Deploy a virtual machine from OVF or OVA file** and then click **Next**.

   ![image-20230908103200429](assets_03-Installation%20guide/image-20230908103200429.png)

4. Enter the name of the virtual appliance you want to create. Browse the OVA file by clicking on the blue rectangle or drag and drop on it. Click **Next**,

   ![image-20230908103340238](assets_03-Installation%20guide/image-20230908103340238.png)



5. Choose the desired datastore that will hold the FlowControl XN files. Click **Next**.

   ![image-20230908103528071](assets_03-Installation%20guide/image-20230908103528071.png)



6. Select the data provisioning options depending on your requirements. Make sure that the **Power on automatically** option is deselected. Click **Next**.

   ![image-20230908103652800](assets_03-Installation%20guide/image-20230908103652800.png)

7. After completing all the previous steps, a pop-up window will show up summarizing all the information about the virtual machine that has been created. Click **Finish** to start the deployment process.

   ![image-20230908103809459](assets_03-Installation%20guide/image-20230908103809459.png)



## IP address, DNS Server and Gateway configuration

For the operation of the system, it is necessary to configure the network parameters, so you need to configure the appropriate **DNS Server** address, **IP** address, and **Gateway** address.

When the installation process is complete, please start the installed system and then **log in** using the **ESXi Console**.

![image-20230908104604466](assets_03-Installation%20guide/image-20230908104604466.png)



:::info

The **Sycope** default password and username for the the **VMware Console**:

**user:** admin

**password:** admin123

:::

After logging into the system via the **VMware Console**, select the **Network Interfaces Tab** and change the settings of the selected Interface.

![image-20230911093813658](assets_03-Installation%20guide/image-20230911093813658.png)

![image-20230908104826297](assets_03-Installation%20guide/image-20230908104826297.png)

![image-20230908110127927](assets_03-Installation%20guide/image-20230908110127927.png)
