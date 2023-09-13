# Advanced Custom Aggregations

The [**Configuration->Objects->Advanced Custom Aggregations**] menu can be used to create custom aggregations.

**Advanced Custom Aggregations** are aggregations that can be created by the user and for which it is possible to set a dynamic key field value (for performance reasons, max recommended value equals 3) and any metric (for performance reasons, max recommended value equals 6).

They are an evolution of Custom Aggregation which are available in the menu [**Configuration>NetFlow->NetFlow**] and have built-in metrics such as Client Bytes, Client Packets, Flows, Server Bytes, Server Packets.

![image-20230602092157104](assets_10-Advanced%20Custom%20aggr/image-20230602092157104.png)



After selecting the [**Configuration>Objects>Advanced Custom Aggregations**] menu, a table with existing aggregations will be shown.
For each object in the table, we can perform the following operations:


| Command  | Description |
| ---------------- | ------- |
| ![menu master](assets_10-Advanced%20Custom%20aggr/userscripts-edit.png) Edit | Edit the aggregation parameters. |
| ![menu master](assets_10-Advanced%20Custom%20aggr/userscripts-duplicate.png) Duplicate | Duplicate the aggregation. |
| ![menu master](assets_10-Advanced%20Custom%20aggr/userscripts-export.png) Export | Export to a file.       |
| ![menu master](assets_10-Advanced%20Custom%20aggr/userscripts-delete.png) Delete | Delete the aggregation. |



## Add aggregation / Edit aggregation

After clicking on the `Add aggregation` button or in the table on the ![master menu](assets_10-Advanced%20Custom%20aggr/preaggr-edit.png) icon, a window with the advanced custom aggregation creator will appear for adding a new aggregation or editing an existing one.

![image-20230602092542165](assets_10-Advanced%20Custom%20aggr/image-20230602092542165.png)

The following table describes the parameters that are available in the creator:

| Field         | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Name          | The name of the created/edited aggregation that will appear in the aggregation list table. |
| Stream        | Selecting the data source for aggregation.                   |
| Engine name   | Selecting the process feeding the aggregation.               |
| Index         | The name of the pre-aggregation as a data source. In the system, the data from it will be available under this name. |
| Filters       | A filter in NQL format that will filter the data passed from the "Stream" for aggregation. |
| Key fields    | List of data fields from the source after which the aggregation of the indicated fields will be performed. |
| Metric fields | The fields whose values will be aggregated by the defined "Key fields". For each field, we can select the aggregation function in the "Deduplication strategy" field. |

After saving, the aggregations will appear in a table and will be available in the system, for example, in the Playground, under the source name specified in the ”Index" field. The first data should be available about 1 minute after creating the aggregation.


![image-20230602093322552](assets_10-Advanced%20Custom%20aggr/image-20230602093322552.png)

![menu master](assets_10-Advanced%20Custom%20aggr/preaggr-playground.png)

## Import aggregation

The `Import aggregation` button is used for importing a previously exported (![menu master](assets_10-Advanced%20Custom%20aggr/userscripts-export.png)) aggregation from the file.

![image-20230602093541095](assets_10-Advanced%20Custom%20aggr/image-20230602093541095.png)

After selecting the file, a window will show up enabling the edition of imported data before saving it.





