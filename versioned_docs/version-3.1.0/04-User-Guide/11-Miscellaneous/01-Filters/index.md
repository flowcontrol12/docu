---
slug: /User-Guide/Miscellaneous/Filters
---

# Filters

The filters function is a special **Widget** (**Filters Widget**) allowing for the creation of a preliminary filter for each field in the selected data stream and the placing it in the **Dashboard**. By creating a **Filters Widget** for the key fields, you can drastically simplify the process of data analysis and therefore raise its effectiveness. This is due to the fact that the utilized filters are always available and can be connected with each other creating longer query strings.

![image-20231023113732715](assets/image-20231023113732715.png)

![image-20231023113814346](assets/image-20231023113814346.png)

## Example of creating a Filters Widget

In order to create a new Filters Widget, click the **[Configuration > Widgets]** menu, then click the `Add widget` button. A standard Widget creation wizard will appear.

![image-20231023114425583](assets/image-20231023114425583.png)

In the `Visualisation` tab, fill in the `Title` field and, optionally, the `Description` and `Tags` fields, in the `Type of Visualisation` section, select Filters.

After filling out the required fields, you can move on to the Data section, which in this case is crucial. This example will be realized for the testdata stream that is typically implemented in the system and all users can utilize it for the purpose of learning and performing examples on their own.

:::tip

Test data were implemented into the Sycope system in the form of the testdata stream. It is simple data that are easily accessible after installing the system and may be used for the purpose of learning and performing the examples included in the documentation.

![image-20231023115805162](assets/image-20231023115805162.png)

Please note that the test data has a time stamp within the period from 2023-01-01 to 2023-01-31 and therefore proper settings of the time filter should be used.

![image-20231023115707053](assets/image-20231023115707053.png)

:::

In the Data section, use the Simple mode (without using the `Show advanced options` slider). The following image shows the required configuration within the individual tabs of the Data section. 

- **Stream Tab -> Source -> Other->** `testdata` 
  (select the testdata stream)![image-20231023120352433](assets/image-20231023120352433.png)

- **Time Tab -> 2023-01-01 to 2023-02-01** (this is because the same time period is used for the data in the testdata stream)

  ![image-20231023121329052](assets/image-20231023121329052.png)

- **Dimension Tab** 

  In this tab, you select the field or fields which are supposed to be filtered. Let us assume that this example aims to provide the ability of quick filtering of the testdata stream in the fName, age country and Time fields. Therefore, add them and select them from the list.

  ![image-20231025101833912](assets/image-20231025101833912.png)

  After selecting appropriate fields, they will appear on the left side of the creator.

  ![image-20231025102748669](assets/image-20231025102748669.png)

  By clicking on a given filter, you can see if it has been properly configured and if it works in accordance with its desired setting.

  ![image-20231025103134100](assets/image-20231025103134100.png)

Now, the Widget is ready and it needs to be saved by clicking the Save button. After saving, the widget will appear in the Widget list in the **[Configuration > Widgets]** menu. 

![image-20231025103617621](assets/image-20231025103617621.png)

## Example of use

In order to use the previously created Filters Widget in the System, you need to place it in the Dashboard. For this purpose, navigate to the [**Dashboard**] menu and create a new or select a previously created Dashboard from the list.

![image-20231025104547244](assets/image-20231025104547244.png)

For the purposes of this example, a Dashboard was created previously containing a Widget with a table of selected data from the testdata stream. After selecting the Dashboard, click on the Edit Dashboard icon and then on the Add Widget button and introduce the previously created Filters Widget.

![image-20231025105328395](assets/image-20231025105328395.png)

![image-20231025105617325](assets/image-20231025105617325.png)

After adding a Filters Widget, you can adjust its shape and placement in the Dashboard by clicking on the lower right active corner of the Widget. After that, save the configuration of the Dashboard.

![image-20231025105944040](assets/image-20231025105944040.png)

### Using of a single Filter

For this example, let us assume that you want to display the people who are exactly 60 years old in a table. For this reason, use the Filter that was created for the age field.

![image-20231025110749981](assets/image-20231025110749981.png)

By clicking on it, you can see the percentage of people of a specific age. On the list, locate, select and confirm the number 60.

![image-20231025111042271](assets/image-20231025111042271.png)

Now, the table will display only the data of people aged 60, as assumed before.

![image-20231025111322825](assets/image-20231025111322825.png)

Please note that the Filter will appear in the search bar. 

By using a single Filter, there is no limit of selecting a single value, you can select multiple valuse, for example, add people aged 27 to the existing table. Click on the age Filter and select an additional field next to the value of 27.

![image-20231025111643882](assets/image-20231025111643882.png)

The table will now also contain data of people aged 27.

![image-20231025111819534](assets/image-20231025111819534.png)

Now, let us consider a case where you would like the table to show people of all ages except for the age of 60. For this purpose, click on the age Filter and double-click the field next to the number 60, and the ![image-20231025112422458](assets/image-20231025112422458.png) (does not contain) sign will appear next to it.

![image-20231025112512636](assets/image-20231025112512636.png)

As you can see, now the list does not show the data of people aged 60.

![image-20231025112602031](assets/image-20231025112602031.png)

By using a single Filter you can also create more advanced filtration with the use of operators listed in the table below.

| Syntax            | Description                                                  | Example                                                      |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `abc`;`*abc*`     | The search string is compared to every word in the field value, disregarding case sensitivity. | ![image-20231013125450803](assets/image-20231013125450803.png)![image-20231013111842517](assets/image-20231013111842517.png) |
| `abc*`            | The search string is matched by any string that begins with an `abc` string and is followed by zero or more characters of any type. | ![image-20231013112455093](assets/image-20231013112455093.png) |
| `*abc`            | The search string is matched by any string that ends with an `abc` string and is preceded by zero or more characters of any kind. | ![image-20231013112156678](assets/image-20231013112156678.png) |
| `"abc"`           | The search string is matched by a string including only the exact word or phrase enclosed within the quotation marks. | ![image-20231013133549626](assets/image-20231013133549626.png) |
| `>value`          | For numeric fields, the search string returns all records with a value greater than the specified `value`. | ![image-20231013125730484](assets/image-20231013125730484.png) |
| `>=value`         | For numeric fields, the search string returns all records with a value equal to or greater than the specified `value`. | ![image-20231013125821160](assets/image-20231013125821160.png) |
| `<value`          | For numeric fields, the search string returns all records with a value lower than the specified `value`. | ![image-20231013130157932](assets/image-20231013130157932.png) |
| `<=value`         | For numeric fields, the search string returns all records with a value equal to or lower than the specified `value`. | ![image-20231013130106462](assets/image-20231013130106462.png) |
| `>date`           | For numeric fields, the search string returns all date records with a value greater than the specified `data`. | ![image-20231013132639792](assets/image-20231013132639792.png) |
| `>=date`          | For numeric fields, the search string returns all date records with a value equal to or greater than the specified `data`. | ![image-20231013155146569](assets/image-20231013155146569.png) |
| `<date`           | For numeric fields, the search string returns all date records with a value lower than the specified `data`. | ![image-20231013132852776](assets/image-20231013132852776.png) |
| `<=date`          | For numeric fields, the search string returns all date records with a value equal to or lower than the specified `data`. | ![image-20231013155042381](assets/image-20231013155042381.png) |
| `<value1 >value2` | Combination of two values in one search. For numeric fields, the search string returns all records with a value lower than the specified `value1` **and** greater than `value2`. It works analogously for the other operators and their combinations (`<=;>=`) | ![image-20231013133300429](assets/image-20231013133300429.png) |
| `<date1 >date2`   | Combination of two date values in one search. For data value fields, the search string returns all records with a date value lower than the specified `date1` **and** greater than `date2`. It works analogously for the other operators and their combinations (`<=;>=`), | ![image-20231013155611369](assets/image-20231013155611369.png) |

Now, try to make the table display the data of people aged 20 to 25. In order to do so, you need to apply the `>20 <25` expression in the age Filter (please remember that you need to put a space between the conditions) and tick the selection field next to the expression (Apply pattern to query bar).

![image-20231025113707287](assets/image-20231025113707287.png)

The table will now display only the data of people aged 20 to 25 and the filtering syntax will appear in the search bar, similarly to the previous examples.

![image-20231025114035612](assets/image-20231025114035612.png)

### Using more than one filter

By using the Filters Widget, you can use a greater number of filters to create more complex filtration of data. In this example, the goal is to display the data of people aged 22 and coming from Italy (IT). In order to do so, use the age and country Filters, by selecting accordingly the values 22 and IT. the table will now display only the data of Italians aged 22.

![image-20231025115850061](assets/image-20231025115850061.png)

Additionally, please note that in the search bar, a query has been created which shows that individual filters from the Filters Widget are combined with the use of the AND operator.

[Back to the widgets list](/User-Guide/Configuration/Widgets#widgets-add)
