One of the most important elements of the system are Widgets. Widgets are designed to display information of a certain kind and source, which can be a summary, a value calculated from multiple data, a graph or a function, etc.

**Sycope** includes several different types of widgets, designed to fulfill different data display needs. You can add, remove, and customize widgets to personalize your dashboard, displaying just the data you need. Widgets are used to create dashboards, which are views that contain multiple widgets.

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

***Source*** - you have to select a data stream from the list. You can display system data streams with all columns in **Dashboard>Raw Data **menu.

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

<!--**Use Function** switch--> 

- <!--Aggr-->
- <!--Post aggr-->
- <!--Field-->

- Metric - field or metric that will be displayed on the graph

- Agreggation - list of operations to choose from available in the system

  - Avi - returns average of field values.
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


---

---



##  Gauge Visualization graph

### Visualization step



This step is the same for all visualization types. In this step you need to fill in two fields:

Title - unique widget name - required field

Description - short description of the widget



Then select visualization **Gauge**.

Depending on the selected visualization, the next step fields are different



### Data step



#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

#### *Aggregation*

- Use Function switch
  - Aggr
  - Post aggr
  - Field
- Metric
- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number
- Use Default color
  - Type
    - Single

---

#### *Min*

- Aggregation
  - Number
- Value
  - undefined
- Field
- Include null values

---

#### *Max*

- Aggregation
  - Number
- Value
  - undefined
- Field
- Include null values

---



### Third step - Threshold

Add threshold button
- From
- To
- Label
- On switch

Thresholds mode
- Absolute
- Percentage

---

### Fourth step - Option



Others

- Enable animation switch







## Bar Visualization graph



### First step - Bar



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget

Then select visualization Line.

Depending on the selected visualization, the next step fields are different



### Second step - Data

In this step, regardless of the previously selected visualization type, there are two ways to configure it: standard wizard and advance wizard.



The tabs to fill are:

---

#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

####***Values***

- Use Function switch
  - Aggr
  - Post aggr
  - Field
- Metric
- Filter
  - Field
  - Operator
  - Value
- Custom Lebel switch
- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number
- Use Default color
  - Type
    - By metric
    - By series
    - Single
- Stack
  - Normal
  - Stacked
- Include null values  switch
- Include zero values  switch
- Add threshold button
- Show MIN marker  switch
- Show MAX marker  switch
- Show MAX line  switch
- Show AVG line switch
- Show MIN line switch

---

#### *Categories*

- Aggregation
  - Date Histogram
    - Auto interval switch
      - Interval
  - Ranges
    - Save ranges
    - Ranges - From/To/Label
  - Terms
- Use Function switch
  - Function
- Field
- Auto interval
- Include null values

---

#### *Split Series*

- Aggregation
  - Terms
- Use Function switch
  - Function
- Field
- Limit series switch
  - Limit
- Split Chart

---

#### *Sorting*

- Sort field
- Sort direction
  - Desc
  - Asc

---

#### *Limit*

- Limit buckets switch
- Limit
- Show from
  - Head
  - Taił
- Show others switch
  - Others label

---

---

### Third step - Option



#### *Limit*

- Hide if too much records
  - Limit
  - Message if too much records

---

#### *Axes*

- Switch axes switch

- Value axes

  - Show axis labels
    - Show axis labels position
      - Left
      - Right
    - Label angle (-90deg to 90deg)
    - Number formatting
      - Currency
      - Date
      - Number
      - Off

- Custom axis name

  - Custom name
  - Label Location
    - End
    - Center
    - Start
  - Name gap from chart
  - Name rotate deg

- Log scale

- Inverse

- Show data points

  - Show vale labels switch

  - Value label position

    - <!-- wyciągnąc listę bo jest długa-->

  - Label angle (-90deg to 90deg)

    

- Draw area

- Category axes

  - Show axis labels
  - Axis label position
    - Bottom
    - Top
  - Label angle (-90deg to 90deg)
  - Number Formatting
    - Currency
    - Date
    - Number
    - Off

- Show all labels

- Custom axis name

  - Custom name
  - Label location
    - Center
    - Left
    - Right
  - Name gap from chart
  - Name rotate deg

---

#### *Others*

Bar chart option

- Show legend switch
  - Select legend position
    - Bottom
    - Left
    - Right
    - Top
- Data zoom switch
- Enable animation



## Graph visualization

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget

Then select visualization Line.

Depending on the selected visualization, the next step fields are different.



---

### Second step - Data

In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance.





#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

#### *Aggregation*

- Use Function switch
  - Aggr
  - Post aggr
  - Field
- Metric
- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number
- Use Default color
  - Type
    - Single
- Include null values
- Include zero values

---

#### *Buckets*

Timestamp

- Aggregation
  - Terms
- Use Function switch
- Field
- Include null values switch
- Limit series switch
  - Limit

---

### Third step - Option

#### *Others*

- Show labels switch
- Show value switch
- Roam switch
- Repulsion
- Enable animation







## Sankey Visualization

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget

Then select visualization Line.

Depending on the selected visualization, the next step fields are different.



---

### Second step - Data

In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance.





#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

#### *Aggregation*

- Use Function switch
  - Aggr
  - Post aggr
  - Field
- Metric
- Custom label switch
  - Custom label
- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number
- Use Default color switch
  - Type
    - By bucket
- Include null values
- Include zero values

---

#### *Buckets*

activeTime

- Aggregation
  - Terms
- Use Function switch
- Field
- Include null values switch
- Limit series switch
  - Limit

---

### Third step - Option

#### *Others*

- Enable animation
- Show labels switch
- Show value switch
- First level label position 
  - Left/Right/Top/Bottom
- Middle level label position
  - Left/Right/Top/Bottom
- Last level label position 
  - Left/Right/Top/Bottom





## Tree Visualization

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget

Then select visualization Line.

Depending on the selected visualization, the next step fields are different.



---

### Second step - Data

In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance.





#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

#### *Aggregation*

- Use Function switch
  - Aggr
  - Post aggr
  - Field
- Metric
- Custom label switch
  - Custom label
- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number
- Include null values
- Include zero values

---

#### *Buckets*

activeTime

- Aggregation
  - Terms
- Use Function switch
- Field
- Include null values switch
- Limit series switch
  - Limit

---

### Third step - Option

#### *Others*

- Show labels switch
- Show value switch
- Roam



## KPI Visualization

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget

Then select visualization Line.

Depending on the selected visualization, the next step fields are different.



---

### Second step - Data

In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance.



#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

#### *Aggregation*

- Use Function switch
  - Aggr
  - Post aggr
  - Field
- Metric
- Custom label switch
  - Custom label
- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number
- Use default color switch
- Font size
- Align text
- Redirect to dashboard on click 

---

### Third step - Thresholds

#### *Others*

- Add threshold button
  - From
  - to
  - Enable switch <!-- ?? -->
- Roam



##  Scatter Visualization

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget

Then select visualization Line.

Depending on the selected visualization, the next step fields are different



### Second step - Data

In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance.



The tabs to fill are:

---

#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

####***Values***

- Use Function switch
  - Aggr
  - Post aggr
  - Field
- Metric
- Filter
  - Field
  - Operator
  - Value
- Custom Lebel switch
- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number
- Use Default color
  - Type
    - By metric
    - By series
    - Single
- Stack
  - Normal
  - Stacked
- Include null values  switch
- Include zero values  switch
- Add threshold button
  - Vale/Label/On/Off

- Show MIN marker  switch
- Show MAX marker  switch
- Show MAX line  switch
- Show AVG line switch
- Show MIN line switch

---

#### *Categories*

- Aggregation
  - Date Histogram
    - Auto interval switch
      - Interval
  - Ranges
  - Terms
- Use Function switch
  - Function
- Field
- Auto interwal switch
  - Interval (min,hour,day,week,month,year)

- Include null values

---

#### *Split Series*

- Aggregation
  - Terms
- Use Function switch
  - Function
- Limit series switch
  - Limit
- Split Chart

---

#### *Sorting*

- Sort field
- Sort direction
  - Desc
  - Asc

---

#### *Limit*

- Limit buckets switch
- Limit
- Show from
  - Head
  - Tail
- Show others switch
  - Others label

---

---



### Third step - Option



#### *Limit*

- Hide if too much records
  - Limit
  - Message if too much records

---

#### *Axes*

- Switch axes switch

- Value axes

  - Show axis labels
    - Show axis labels position
      - Left
      - Right
    - Label angle (-90deg to 90deg)
    - Number formatting
      - Currency
      - Date
      - Number
      - Off

- Custom axis name

  - Custom name
  - Label Location
    - End
    - Center
    - Start
  - Name gap from chart
  - Name rotate deg

- Log scale

- Inverse

- Show data points

  - Show vale labels switch

  - Value label position

    - <!-- wyciągnąc listę bo jest długa-->

  - Label angle (-90deg to 90deg)

    

- Category axes

  - Show axis labels
  - Axis label position
    - Bottom
    - Top
  - Label angle (-90deg to 90deg)
  - Number Formatting
    - Currency
    - Date
    - Number
    - Off

- Show all labels

- Custom axis name

  - Custom name
  - Label location
    - Center
    - Left
    - Right
  - Name gap from chart
  - Name rotate deg

---

#### *Others*

- Scatter chart options
- Show legend switch
  - Select legend position
    - Bottom
    - Left
    - Right
    - Top
- Data zoom switch
- Enable animation



##  Sunburst Visualization

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget

Then select visualization Line.

Depending on the selected visualization, the next step fields are different



### Second step - Data

In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance.



The tabs to fill are:

---

#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

####***Slice size***

- Use Function switch
  - Aggr
  - Post aggr
  - Field
- Metric
- Custom Lebel switch
  - Custom label

- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number
- Use Default color
  - Type
    - By bucket

---

#### *Split slices*

timestamp

- Aggregation
  - Terms
- Use Function switch
  - Function
- Field
- Include null values
- Limit series switch
  - Limit 


---

---



### Third step - Option

---

#### *Others*

Sunburst options

- Show labels switch
  - Show value labels
- Doughnut switch
  - Cutout
- Enable animation



---

##  Table Visualization

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget

Then select visualization Line.

Depending on the selected visualization, the next step fields are different



### Second step - Data

In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance.



The tabs to fill are:

---

#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

####***Columns***

- Type

  - Column
  - Dimension
  - Metric

- Use Function switch

  - Function

- Field

- Include null values  switch

- Include zero values  switch

- Custom label switch

  - Custom label

- Number formatting

  - Currency
  - Date
  - Number
  - Off

- Alignment

  

---

#### *Sorting*

- Sort field
- Sort direction
  - Desc
  - Asc

---

#### *Limit*

- Limit buckets switch
- Limit
- Show from
  - Head
  - Taił
- Show others switch
  - Others label



---

#### *Totals*

- Include totals switch
  - Totals label

---

---



### Third step - Option



#### *Limit*

- Hide if too much records
  - Limit
  - Message if too much records

---

#### *Others*

- Table options

  - Include null values  switch

    

---

---

## Pie Visualization

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

**Title** - unique widget name - required field

**Description** - short description of the widget

Then select visualization Line.

Depending on the selected visualization, the next step fields are different



### Second step - Data

In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance.



The tabs to fill are:

---

#### *Stream*

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

---

#### *Filter*

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

---

####***Slice size***

- Use Function switch
  - Aggr
  - Post aggr
  - Field
- Metric
- Custom Lebel switch
  - Custom label

- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number
- Use Default color
  - Type
    - By bucket
- Include zero values

---

#### *Split slices*

timestamp

- Aggregation
  - Terms
- Use Function switch
  - Function
- Field
- Include null values
- Number formatting
  - Off
  - Currency <!-- ???? -->
  - Date
  - Number



---

#### *Sorting*

- Sort field
- Sort direction
  - Desc
  - Asc

---

#### *Limit*

- Limit buckets switch
- Limit
- Show from
  - Head
  - Tail
- Show others switch
  - Others label


---

---



### Third step - Option

#### *Limit*

- Hide if too much records
  - Limit
  - Message if too much records

---

#### *Others*

Pie chart options



- Doughnut switch
  - Cutout
- Show legend
  - Select legend position
    - Right/Left/Top/Bottom

- Show labels switch
  - Select value labels
    - Off/Share (percentage)/Values
- Include null values
- Enable animation



