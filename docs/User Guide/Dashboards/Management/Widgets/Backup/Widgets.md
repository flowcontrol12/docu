One of the most important elements of the system are the widgets. Widgets are designed to display information of a certain kind and source, which can be a summary,  a value calculated from multiple data, a graph or a function etc.

Sycope includes many different types of widgets, designed to fulfil different data display needs. You can add, remove, and customize widgets to personalize your dashboard, displaying only the data which interests you. Widgets are used to create dashboards which are views that contain multiple widgets.



---

# Adding custom widgets



Widgets are created and edited in the menu **Dashboard>Management>Widgets**.

To add a widget, click on the **Add Widget** button then the widget wizard will appear. The procedure for creating a widget consists of three or four steps depending on the visualization type selected in the first step.



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





## Visualization Line

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

Title - unique widget name - required field

Description - short description of the widget



Then select visualization Line.



Depending on the selected visualization, the next step fields are different



### Second step - Data

In this step, regardless of the previously selected visualization, there are two ways to configure it: standard and advance.



The tabs to fill are:

#### Stream

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

***Filter***

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

***Values***

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



***Categories***

- Aggregation
  - Date Histogram
    - Auto interval switch
      - Interval
  - Ranges
  - Terms
- Use Function switch
  - Function
- Field
- Include null values

***Split Series***

- Aggregation
  - Terms
- Use Function switch
  - Function
- Limit series switch
  - Limit
- Split Chart

***Sorting***

- Sort field
- Sort direction
  - Desc
  - Asc

***Limit***

- Limit buckets switch
- Limit
- Show from
  - Head
  - Taił
- Show others switch
  - Others label



### Third step - Option



- Limit

  - Hide if too much records
    - Limit
    - Message if too much records

- Axes

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

- Others

  - NULL handling
    - Show gap
    - Connect
    - Set zero
  - Show legend switch
    - Select legend position
      - Bottom
      - Left
      - Right
      - Top
  - Data zoom switch
  - Enable animation













## Visualization Gauge

### First step - Visualization



This step is the same for all visualization types. In this step you need to fill in two fields:

Title - unique widget name - required field

Description - short description of the widget



Then select visualization **Gauge**.



Depending on the selected visualization, the next step fields are different



### Second step - Data



####Stream

- ​	*Source* - you can select a data source from the list and these are: metrics, fields, <!-- uzupełnić co jeszcze -->

***Filter***

- ​	Query
  - ​		Field
  - ​		Operator
  - ​		Value
- Time range - default is 15 minutes <!-- wrzucic obrazek z konfiguracją czasu -->
- Locked/Unlocked switch

***Aggregation***

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



***Min***

- Aggregation
  - Number
- Value
  - undefined
- Field
- Include null values

***Max***

- Aggregation
  - Number
- Value
  - undefined
- Field
- Include null values
- 

### Third step - Threshold

- Add threshold button
  - From
  - To
  - Label
  - On switch
- Thresholds mode
  - Absolute
  - Percentage



### Fourth step - Option



- Others

  - Enable animation switch









