This menu [Configuration>Objects>**Collectors**] can be used to create a kind of container/database into which you can collect and store data from data streams defined using NQL expressions.



==do dokończenia- wszystko==



- To add a new `Alert field` click **New alert field** button then the alert field wizard will appear. In the wizard window there are the following fields:

  - **Field name** - name of the alert field in the system (user friendly)

  - **Description** - short field description

    **Source** - the data stream (or streams) that will be used to create the field

  - **Use Function switch** - allows to enable a mode that allows you to use your own expression to create the field 

  - **Field** - field selected from the list of fields available in the selected Data stream

  - **Aggregation** - you can choose one of the functions: 

    - Avi - returns average of field values.
    - Count - returns count of non empty fields.

    - First - returns value of first field returned.

    - Join - returns concatenated value of fields values.

    - Last - returns value of last field returned.

    - Max - returns maximal value.

    - Min - returns minimal value.

    - Sum - returns sum of values.

  - **Number formatting** 

    - Date
    - Number
    - Off

  - **Privacy** - you can grant permissions for field.

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


  > At the bottom of the form there is information on which alarm uses created **Alert field**

  
