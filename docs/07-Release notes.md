# Release notes

:::info

We kindly inform you that this update affects the standard system content, especially the one from the Security module. Therefore, if you created custom security rules please double check if they are working properly. If you like any old security dashboards please duplicate those before the update.

:::

### ver. 2.3

- Added a new functionality called **User Scripts** which allows for automatic communication by POST json message with external systems using the **REST Client**. This allows for sending **Alerts** to external systems and applications![user_scripts](assets_07-Release%20notes/user_scripts.jpg)

- Added a new functionality of **Advanced Custom Aggregations**. Being an evolution of creating **Custom Aggregations**, the Advanced ones can be used to set a dynamic key field value and any metric for them. The Aggregations can subsequently be freely edited, duplicated, exported and deleted, coming together with a **new analyzer tool** 

  ![custom_advanced_aggregation](assets_07-Release%20notes/custom_advanced_aggregation.jpg)

  
  
- Added a new functionality called the **Playground**. The User can now easily test the NQL queries, the looks and functioning of the search bar query, as well as the produced results. This can be achieved through plain NQL code written from scratch or with the examples provided here: https://documentation.sycope.com/NQL/NQL_examples. 
  
  ![playground](assets_07-Release%20notes/playground.jpg)
  
- The **Rule Creator** has been expanded and improved. The **Thresholds** section has become a simple graphical wizard which allows the user to create groups for better graphical representation of data. The **Rule Creator** has also been equipped with the **Preview** tab for previewing the created **Threshold** elements in text form

  ![rule_creator](assets_07-Release%20notes/rule_creator.jpg)

- The **Search bar** operation has been simplified. The User can now view the selected elements in convenient, editable tiles

  ![simplified_searchbar](assets_07-Release%20notes/simplified_searchbar.jpg)

- Added a functionality of NQL Macros which are a type of user-defined NQL variables

- Added system favorite filters which have been developed by our engineers and are available out of the box   

- Added new, predefined time ranges

- Added predefined baselines

- Added the ability to easily create rules based on a widget

- Added a new top bar

- Added aggregation - unwinding of a collection

- Added names and descriptions of placeholders in e-mail templates

- Added live preview of e-mail templates

- Added the ability to use placeholders in text e-mail mode - hints

- Added new placeholders, e.g. links to raw data view with provided reasons for generated alerts

- Added Tag lookup - searching tags according to names instead of IDs

- Added division of comparison operators into simple and advanced

- Added new drilldown option – substitution of widgets

- Added ability of establishing an ad hoc locked state for a widget

- Added Baseline based on collectors

- Added deactivation option (turning on/off) of the custom fields

- Added filters based on saved fields (based on lookups)

- Added Heatmap Widget

- Added DNS resolve per widget

- Added Labels on a single axis in the radar graph

- Added Global info about a required restart

- Added Widget "quick" options in the widget card 

- Added lookups import

- Added export of collectors and retention

- Added hover for the top menu

- Added internal scroll in the wizards

- Added privacy settings for user account object 

- Added axis configuration on graphs

- Added a new type of the Scatter graph

- Added Join Categories option in grid charts

- Added Full CSV Export

- Added limits per category

- Added a value option to lookup from the context menu

- Added a value option to input/output filters in alerts from the context menu

- Added dependence from the GUI heartbeat for Collectors

- Added transferring of the tabs to the side menu + drag&drop

- Added the Keep Filters option in the statistics

- Added temporary turning off/deactivation of a rule - in relation to service windows

- Added advanced options to the widget filter

- Added the ability in the tables to change the default stream while filtering

- Added the ability in the tables to define if it is possible to add data from a given column to the filter with the use of the plus button

  

#### Other Changes

- Change of the layout for the baseline configuration
- Change of the manner of highlighting an element of a widget
- Drag&drop in the tabs instead of arrows in the wizard -> targeted for the side list instead of tabs



#### Fixes

- Better hints in the NQL fields (in the saved fields, saved metrics and the wizard)

