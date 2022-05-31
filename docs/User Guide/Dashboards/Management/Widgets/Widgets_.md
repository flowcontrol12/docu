---
id: Widgets_
title: Widgets
---

One of the most important elements of the system are Widgets. Widgets are designed to display information of a certain kind and source, which can be a summary, a value calculated from multiple data, a graph or a function, etc.

**Sycope** includes a lot of different types of widgets, designed to fulfill different data display needs. You can add, remove, and customize widgets to personalize your dashboard, displaying just the data you need. Widgets are used to create dashboards, which are views that contain multiple widgets.

![image-20220513113210577](assets/image-20220513113210577.png)

---

# Adding custom widgets



Widgets are created and edited in this menu [Dashboard>Management>**Widgets**]. To add a widget, click on the **Add Widget** button, then the widget wizard will appear. The procedure for creating a widget consists of three or four steps depending on the visualization type selected in the first step.

The system includes the following types of visualization:

1. **Line**
2. **Scatter**
3. **Bar**
4. **Gauge**
5. **Pie**
6. **Graph**
7. **Sankey**
8. **Sunburst**
9. **Tree**
10. **KPI**
11. **Table**
12. **Text Image**



##  Line Visualization

###  Visualization step

This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.

### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.



---

**SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [**Dashboard>Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream
  
  Edit filter
  
  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed
  
- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Values*

These are the values that will be displayed on a graph.

- **Use Function** switch

  - Aggr

  - Post aggr

  - Field


- Metric - field or metric that will be displayed on the graph

- Agreggation - list of operations to choose from available in the system

  - Avg - returns average of field values.
  - Count - returns count of non empty fields.

  - First - returns value of first field returned.

  - Join - returns concatenated value of fields values.

  - Last - returns value of last field returned.

  - Max - returns maximal value.

  - Min - returns minimal value.

  - Sum - returns sum of values.

- Filter 
  - Field - fields available for the selected data stream

  - Operator - operator or function 
  - Value - value for which the operation is performed

- Custom Lebel switch - switch that allows you to use your own label

- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off

- Use default color switch - a switch to configure custom colors for the data shown on the Widget
  - Type
    - By metric
    - By series
    - Single

- Stack - determines how to arrange/position the various lines/functions/charts displayed on the Widget
  - Normal - standard display of graphs
  - Stacked - the graphs are shifted by a constant value on the Y axis

- Include null values  switch - the graph contains/does not contain null values

- Include zero values  switch - the graph contains/does not contain zero values

- Add threshold button - allows you to add on the graph thresholds with a defined value
  - Value - threshold value
  - Label 
  - on/off switch

- Show MIN marker switch

- Show MAX marker switch

- Show MAX line switch

- Show AVG line switch

- Show MIN line switch

---

#### *Categories*

In this section you configure the category against which the Values will be displayed.

- Aggregation
  - Date Histogram
  - Ranges
  - Terms
- Use Function switch
  - Function - allows you to add your own function 
- Field - field relative to Value that will be visualized
- Auto interval switch
- Include null values switch


---

####  *Output filter*

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **Field**

---

#### *Sorting*

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field
- Sort direction - Asc/Desc - sorting method ascending/descending
  

---

#### *Limit*

You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - It is used to set the limit of values of which the chart will consist
- Limit - limit value
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label

---

---

### Option step

In this step, the graph parameters are defined.

#### *Limit*

- Hide if too much records - resolution limit (points on the chart), after exceeding the message set in the Message field (*Message if too much records* )  will be displayed. 
  - Limit - limit value
  - Message if too much records - message when *Limit* value is exceeded

---

#### *Axes*

Tab for configuring graph axes, where the *Value axes* area corresponds to the y-axis and *Category axes* to the x-axis

- Switch axis switch - enable/disable axis Label

- Value axis (y-axis)

  - Show axis labels - enable/disable axis Label
    - Axis labels position - y-axis labels position
      - Left
      - Right
    - Label angle (-90deg to 90deg) - the angle by which the label will be rotated
    - Number formatting - how the numbers on the chart will be formatted *Date/Number/Off*
      - Date
      - Number
      - Off
  
- Custom axis name switch - enable/disable custom axis name

  - Custom name
  - Label Location - location of the label in relation to the axis
    - End
    - Center
    - Start
  - Name gap from chart - name pitch from the end of the axis
  - Name rotate deg - name rotation angle

- Log scale switch - enable/disable log scale

- Inverse switch - horizontal graph rotation

- Show data points switch  

  - Show value labels switch - shows values for data points

  - Value label position - label position (list)

  - Label angle (-90deg to 90deg) - label rotation angle

- Draw area switch - fill the area below the graph line with color

- Category axis (x-axis)

  - Show axis labels switch - enable/disable x-axis Label
  - Axis label position
    - Bottom
    - Top
  - Label angle (-90deg to 90deg) - the angle by which the label will be rotated
  - Number Formatting - how the numbers on the chart will be formatted *Date/Number/Off*
    - Date
    - Number
    - Off
  
- Show all labels

- Custom axis name  switch - enable/disable custom axis name

  - Custom name
  - Label location - location of the label in relation to the axis
    - Center
    - Left
    - Right
  - Name gap from chart -  name pitch from the end of the axis
  - Name rotate deg -  name rotation angle

---

#### *Others*

- NULL handling
  - Set zero
  - Connect
  - Show gap
- Show legend switch
  - Select legend position
    - Bottom
    - Left
    - Right
    - Top
- Data zoom switch
- Enable animation

---

#### Privacy

**Privacy** - assigning privileges to the **Widget**.

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



## Gauge Visualization graph

### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.
>
> 



 **SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Aggregation*

These are the values that will be displayed on a graph.

- **Use Function** switch

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph
- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off
- Use default color switch - a switch to configure custom colors for the data shown on the Widget

---

#### *Min*

- Aggregation
  - Number
  - Aggregation
- Value

---

#### *Max*

- Aggregation
  - Number
  - Aggregation
- Value

---

#### Output filter

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **Field**

---



### Threshold step

- Add threshold button

  - From

  - To

  - Label

  - On switch


- Thresholds mode

  - Absolute

  - Percentage


---

### Option step

- Others
  - Enable animation switch

#### *Privacy*

**Privacy** - assigning privileges to the **Widget**.

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





## Bar Visualization graph

###  Visualization step

This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.

### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.
>
> 



 **SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Values*

These are the values that will be displayed on a graph.

- Use Function switch

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph

- Agreggation - list of operations to choose from available in the system

  - Avg - returns average of field values.
  - Count - returns count of non empty fields.

  - First - returns value of first field returned.

  - Join - returns concatenated value of fields values.

  - Last - returns value of last field returned.

  - Max - returns maximal value.

  - Min - returns minimal value.

  - Sum - returns sum of values.

- Filter 
  - Field - fields available for the selected data stream

  - Operator - operator or function 
  - Value - value for which the operation is performed

- Custom Lebel switch - switch that allows you to use your own label

- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off

- Use default color switch - a switch to configure custom colors for the data shown on the Widget
  - Type
    - By metric
    - By series
    - Single

- Stack - determines how to arrange/position the various lines/functions/charts displayed on the Widget
  - Normal - standard display of graphs
  - Stacked - the graphs are shifted by a constant value on the Y axis

- Include null values  switch - the graph contains/does not contain null values

- Include zero values  switch - the graph contains/does not contain zero values

- Add threshold button - allows you to add on the graph thresholds with a defined value
  - Value - threshold value
  - Label 
  - on/off switch

- Show MIN marker switch

- Show MAX marker switch

- Show MAX line switch

- Show AVG line switch

- Show MIN line switch

---

#### *Categories*

In this section you configure the category against which the Values will be displayed.

- Aggregation
  - Date Histogram
  - Ranges
  - Terms
- Use Function switch
  - Function - allows you to add your own function 
- Field - field relative to Value that will be visualized
- Auto interval switch
- Include null values switch

---

#### Output filter

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **FIeld**

---

#### *Sorting*

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field
- Sort direction - Asc/Desc - sorting method ascending/descending

---

#### *Limit*

You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - It is used to set the limit of values of which the chart will consist
- Limit - limit value
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label

---

---

### Option step

In this step, the graph parameters are defined.

#### *Limit*

- Hide if too much records - resolution limit (points on the chart), after exceeding the message set in the Message field (*Message if too much records* )  will be displayed. 
  - Limit - limit value
  - Message if too much records - message when *Limit* value is exceeded

---

#### *Axes*

Tab for configuring graph axes.



- Switch axis switch - enable/disable axis Label

**Value axes**

- Value axis 

  - Show axis labels - enable/disable axis Label
    - Axis labels position - y-axis labels position
      - Left
      - Right
    - Label angle (-90deg to 90deg) - the angle by which the label will be rotated
    - Number formatting - how the numbers on the chart will be formatted *Date/Number/Off*
      - Date
      - Number
      - Off
- Custom axis name switch - enable/disable custom axis name

  - Custom name
  - Label Location - location of the label in relation to the axis
    - End
    - Center
    - Start
  - Name gap from chart - name pitch from the end of the axis
  - Name rotate deg - name rotation angle
- Log scale switch - enable/disable log scale
- Inverse switch - horizontal graph rotation
- Show data points switch  

  - Show value labels switch - shows values for data points

  - Value label position - label position (list)

  - Label angle (-90deg to 90deg) - label rotation angle
- Draw area switch - fill the area below the graph line with color

**Category axes**

- Category axis 

  - Show axis labels switch - enable/disable x-axis Label
  - Axis label position
    - Bottom
    - Top
  - Label angle (-90deg to 90deg) - the angle by which the label will be rotated
  - Number Formatting - how the numbers on the chart will be formatted *Currency/Date/Number/Off*
- Show all labels
- Custom axis name  switch - enable/disable custom axis name

  - Custom name
  - Label location - location of the label in relation to the axis
    - Center
    - Left
    - Right
  - Name gap from chart -  name pitch from the end of the axis
  - Name rotate deg -  name rotation angle



---

#### *Others*

- NULL handling
  - Set zero
  - Connect
  - Show gap
- Show legend switch
  - Select legend position
    - Bottom
    - Left
    - Right
    - Top
- Data zoom switch
- Enable animation

---

#### Privacy

**Privacy** - assigning privileges to the **Widget**.

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



## Graph visualization

### Visualization step



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.



### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.
>
> 



 **SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Aggregation*

These are the values that will be displayed on a graph.

- **Use Function** switch

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph
- Agreggation - list of operations to choose from available in the system

  - Avg - returns average of field values.
  - Count - returns count of non empty fields.

  - First - returns value of first field returned.

  - Join - returns concatenated value of fields values.

  - Last - returns value of last field returned.

  - Max - returns maximal value.

  - Min - returns minimal value.

  - Sum - returns sum of values.
- Custom Lebel switch - switch that allows you to use your own label
- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off
- Use default color switch - a switch to configure custom colors for the data shown on the Widget
- Include null values  switch - the graph contains/does not contain null values
- Include zero values  switch - the graph contains/does not contain zero values

---

#### *Buckets*

- Aggregation
  - Date Histogram
  - Ranges
  - Terms
- Use Function switch
  - Function - allows you to add your own function 
- Field - field relative to Value that will be visualized
- Include null values  switch - the graph contains/does not contain null values
- Limit series switch - limit values

---

#### Output filter

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **Field**

---

#### *Sorting*

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field
- Sort direction - Asc/Desc - sorting method ascending/descending

---

#### *Limit*

You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - It is used to set the limit of values of which the chart will consist
- Limit - limit value
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label

---

### Options step

#### *Others*

- Show labels switch
  - Hide label overlaps switch
  - Show value labels switch
- Roam
- Repulsion
- Enable animation switch



#### *Privacy*

**Privacy** - assigning privileges to the **Widget**.

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





## Tree Visualization

This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.



### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.
>
> 



 **SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Aggregation*

These are the values that will be displayed on a graph.

- **Use Function** switch

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph

- Agreggation - list of operations to choose from available in the system

  - Avg - returns average of field values.
  - Count - returns count of non empty fields.

  - First - returns value of first field returned.

  - Join - returns concatenated value of fields values.

  - Last - returns value of last field returned.

  - Max - returns maximal value.

  - Min - returns minimal value.

  - Sum - returns sum of values.

- Custom Lebel switch - switch that allows you to use your own label

- Number formatting -  format of numbers on the graph

  - Currency
  - Date
  - Number
  - Off

- Include null values  switch - the graph contains/does not contain null values

- Include zero values  switch - the graph contains/does not contain zero values

  

---

#### *Buckets*

- Aggregation
  - Date Histogram
  - Ranges
  - Terms
- Use Function switch
  - Function - allows you to add your own function 
- Field - field relative to Value that will be visualized
- Include null values  switch - the graph contains/does not contain null values
- Limit series switch - limit values

---

#### Output filter

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **FIeld**

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Sorting*

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field
- Sort direction - Asc/Desc - sorting method ascending/descending

---

#### *Limit*

You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - It is used to set the limit of values of which the chart will consist
- Limit - limit value
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label

---

### Options step

#### *Others*

- Show labels switch
  - Hide label overlaps switch
  - Show value labels switch
- Roam

#### *Privacy*

**Privacy** - assigning privileges to the **Widget**.

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


---



## KPI Visualization

###  Visualization step

This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.



### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.
>
> 



 **SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Aggregation*

These are the values that will be displayed on a graph.

- **Use Function** switch

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph
- Agreggation - list of operations to choose from available in the system
  - Avg - returns average of field values.
  - Count - returns count of non empty fields.
  - First - returns value of first field returned.
  - Join - returns concatenated value of fields values.
  - Last - returns value of last field returned.
  - Max - returns maximal value.
  - Min - returns minimal value.
  - Sum - returns sum of values.
- Filter 
  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed
- Custom Lebel switch - switch that allows you to use your own label
- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off
- Use default color switch - a switch to configure custom colors for the data shown on the Widget
  - Type
    - By metric
    - By series
    - Single
- Add threshold button - allows you to add thresholds with a defined range value

- Font size *Large/Medium/Small*
- Align text
- Redirect to dashboard on click 



---

#### Output filter

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **Field** 

---

### Option step

#### KPI Icon

Here you can select an icon for the created KPI graph.

---

#### Privacy

**Privacy** - assigning privileges to the **Widget**.

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



##  Scatter Visualization

### Visualization step



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.



### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.
>
> 



 **SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Aggregation*

These are the values that will be displayed on a graph.

- **Use Function** switch

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph
- Agreggation - list of operations to choose from available in the system

  - Avg - returns average of field values.
  - Count - returns count of non empty fields.

  - First - returns value of first field returned.

  - Join - returns concatenated value of fields values.

  - Last - returns value of last field returned.

  - Max - returns maximal value.

  - Min - returns minimal value.

  - Sum - returns sum of values.
- Custom Lebel switch - switch that allows you to use your own label
- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off
- Use default color switch - a switch to configure custom colors for the data shown on the Widget
- Include null values  switch - the graph contains/does not contain null values
- Include zero values  switch - the graph contains/does not contain zero values

---

#### *Buckets*

- Aggregation
  - Date Histogram
  - Ranges
  - Terms
- Use Function switch
  - Function - allows you to add your own function 
- Field - field relative to Value that will be visualized
- Include null values  switch - the graph contains/does not contain null values
- Limit series switch - limit values

---

#### Output filter

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **FIeld**

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Sorting*

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field
- Sort direction - Asc/Desc - sorting method ascending/descending

---

#### *Limit*

You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - It is used to set the limit of values of which the chart will consist
- Limit - limit value
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label

---

---

### Options step

#### *Others*

- Show labels switch
  - Hide label overlaps switch
  - Show value labels switch
- Roam
- Repulsion
- Enable animation switch



#### *Privacy*

**Privacy** - assigning privileges to the **Widget**.

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



##  Sunburst Visualization

###  Visualization step

This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.

### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.
>
> 



 **SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### ***Slice size***

These are the values that will be displayed on a graph.

- **Use Function** switch

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph
- Agreggation - list of operations to choose from available in the system
  - Avg - returns average of field values.
  - Count - returns count of non empty fields.
  - First - returns value of first field returned.
  - Join - returns concatenated value of fields values.
  - Last - returns value of last field returned.
  - Max - returns maximal value.
  - Min - returns minimal value.
  - Sum - returns sum of values.
- Custom Lebel switch - switch that allows you to use your own label
- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off
- Use default color switch - a switch to configure custom colors for the data shown on the Widget
  - Type
    - By metric
    - By series
    - Single

---

#### *Split slices*

- Aggregation
  - Date Histogram
  - Ranges
  - Terms
- Use Function switch
  - Function - allows you to add your own function 
- Field - field relative to Value that will be visualized
- Include null values switch
- Limit series switch -  *Limit value*

---

#### *Output filter*

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **Field**

---

#### *Sorting*

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field
- Sort direction - Asc/Desc - sorting method ascending/descending

---

#### *Limit*

You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - It is used to set the limit of values of which the chart will consist
- Limit - limit value
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label


---

---

### Option step

**Sunburst options**

- Show labels switch
  - Hide label overlaps switch
  - Show value labels switch
- Doughnut switch
  - Cutout value
- Enable animation



---

#### *Privacy*

**Privacy** - assigning privileges to the **Widget**.

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

---

##  Table Visualization

###  Visualization step

This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.



### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.
>
> 



 **SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

####***Columns***

- Type

  - Column
  - Dimension
  - Metric
- Use Function switch

  - Function
- Field - field relative to Value that will be visualized

- Include null values  switch - the graph contains/does not contain null values

- Include zero values  switch - the graph contains/does not contain zero values

- Custom Lebel switch - switch that allows you to use your own label

- Number formatting

  - Currency
  - Date
  - Number
  - Off

- Alignment - text alignment 

  

---

#### Output filter

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **FIeld**

---

#### *Sorting*

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field
- Sort direction - Asc/Desc - sorting method ascending/descending

---

#### *Limit*

You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - It is used to set the limit of values of which the chart will consist
- Limit - limit value
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label

---

#### *Totals*

- Include totals switch
  - Totals label

---

### Option step

#### *Limit*

- Hide if too much records - resolution limit (points on the chart), after exceeding the message set in the Message field (*Message if too much records* )  will be displayed. 
  - Limit - limit value
  - Message if too much records - message when *Limit* value is exceeded

---

#### *Others*

- Table options

---

#### *Privacy*

**Privacy** - assigning privileges to the **Widget**.

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



## Pie Visualization

### Visualization step

This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.



### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.



**SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

####***Slice size***

These are the values that will be displayed on a graph.

- **Use Function** switch

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph
- Agreggation - list of operations to choose from available in the system

  - Avg - returns average of field values.
  - Count - returns count of non empty fields.

  - First - returns value of first field returned.

  - Join - returns concatenated value of fields values.

  - Last - returns value of last field returned.

  - Max - returns maximal value.

  - Min - returns minimal value.

  - Sum - returns sum of values.
- Custom Lebel switch - switch that allows you to use your own label
- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off
- Formatting simple switch
  - Format unit
    - Abbreviation (a)
    - Binary bytes (ib)
    - Decimal bytes (b)
    - Ordinal (o)
    - Off
  - Format pattern
    - 1,000
    - 1,000.12
- Use default color switch - a switch to configure custom colors for the data shown on the Widget
  - Type
    - By metric
    - By series
    - Single
- Include zero values  switch - the graph contains/does not contain zero values

---

#### *Split slices*

- Aggregation
  - Date Histogram
  - Ranges
  - Terms
- Use Function switch
  - Function - allows you to add your own function 
- Field - field relative to Value that will be visualized
- Include null values switch
- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off

---

#### *Output filter*

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **Field**

---

#### *Sorting*

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field
- Sort direction - Asc/Desc - sorting method ascending/descending

---

#### *Limit*

You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - It is used to set the limit of values of which the chart will consist
- Limit - limit value
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label


---

---

### Option step

In this step, the graph parameters are defined.

#### *Limit*

- Hide if too much records - resolution limit (points on the chart), after exceeding the message set in the Message field (*Message if too much records* )  will be displayed. 
  - Limit - limit value
  - Message if too much records - message when *Limit* value is exceeded

---

#### *Others*

**Pie chart options**

- Doughnut switch
  - Cutout value
- Show legend switch
  - Select legend position
    - Right/Left/Top/Bottom

- Show labels switch
  - Select value labels
    - Off/Share (percentage)/Values
- Hide label overlaps
- Enable animation

---

#### *Privacy*

**Privacy** - assigning privileges to the **Widget**.

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




## Text Image

###  Visualization step

This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.

---

### Content step

Here you can format an image that can be used to build dashboards.Option step

#### Privacy

**Privacy** - assigning privileges to the **Widget**.

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


## Sankey Visualization

### Visualization step



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget (not required)

Then select **Type of Visualization**.

Depending on the selected visualization, the next step will differ.



### Data step

In this step, regardless of the previously selected **Type of Visualization**, there are two ways to configure it:  **Simple** wizard and **Advanced** wizard.



> **Note**
> Switching between simple and advanced wizard during Widget configuration will cause the loss of previously entered configuration data.
>
> 



 **SIMPLE CONFIGURATION WIZARD**

#### *Stream*

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in [Dashboard>**Raw Data **] menu.

---

#### *Input Filter*

- Query - defines filtering conditions for a selected data stream

  Edit filter

  - Field - fields available for the selected data stream
  - Operator - operator or function 
  - Value - value for which the operation is performed

- Time range - time interval for which the query will be executed - default is 15 minutes 

- Locked/Unlocked switch - blocking the Widget from changing the filter 

---

#### *Aggregation*

These are the values that will be displayed on a graph.

- **Use Function** switch

  - Aggr

  - Post aggr

  - Field

- Metric - field or metric that will be displayed on the graph
- Custom Lebel switch - switch that allows you to use your own label
- Number formatting -  format of numbers on the graph
  - Currency
  - Date
  - Number
  - Off
- Formatting simple switch
  - Format unit
    - Abbreviation (a)
    - Binary bytes (ib)
    - Decimal bytes (b)
    - Ordinal (o)
    - Off
  - Format pattern
    - 1,000
    - 1,000.12
- Use default color switch - a switch to configure custom colors for the data shown on the Widget
  - Type
    - By metric
    - By series
    - Single
- Use default color switch - a switch to configure custom colors for the data shown on the Widget
- Include null values  switch - the graph contains/does not contain null values
- Include zero values  switch - the graph contains/does not contain zero values

---

#### *Buckets*

- Aggregation
  - Date Histogram
  - Ranges
  - Terms
- Use Function switch
  - Function - allows you to add your own function 
- Field - field relative to Value that will be visualized
- Include null values  switch - the graph contains/does not contain null values
- Limit series switch - limit values

---

#### Output filter

- Query - defines filtering conditions for previously configured **Values** and **Categories**

  Edit filter

  - Field - available fields 
  - Operator - operator or function 
  - Value - value for which the operation is performed for previously configured **Field**

---

#### *Sorting*

Here you can define how to sort the data displayed on the graph.

- Sort field - sorted field
- Sort direction - Asc/Desc - sorting method ascending/descending

---

#### *Limit*

You can specify the resolution and the direction in which the data will be presented.

- Limit buckets switch - It is used to set the limit of values of which the chart will consist
- Limit - limit value
- Show from - field to specify the direction in which the data will be displayed on the chart
  - Head 
  - Tail
- Show others switch 
  - Others label

---

### Options step

#### *Others*

- Enable animation switch

- Show labels switch

  - Hide label overlaps switch
  - Show value labels switch
  - First level label position *Buttom/Left/Right/Top*
  - Middle level label position *Buttom/Left/Right/Top*
  - Last level label position *Buttom/Left/Right/Top*

  

#### *Privacy*

**Privacy** - assigning privileges to the **Widget**.

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

