# Query map features / Feature Info
***

The "Query map features" tool can be used to query detailed information on the objects of the displayed layers in the map, provided that the topics in the map are active and available for querying.

Clicking on the tool activates the factual data query.

![gis-client](/img/query_tool.png) 

The desired layer object can be selected in the map with a mouse click. If information on this object is found, it is displayed directly in the tool window.

![gis-client](/img/query_result.png) 

If objects from several levels are found at the clicked location in the map, the results for the individual levels are displayed in different tabs. These tabs can be clicked on individually. In the example above, only one result was found for the "Countries" layer.

If several objects are found at a clicked point within a layer, these can be scrolled through in the corresponding tab of the layer. It is also displayed there for how many
objects the attribute data query is currently open:

![gis-client](/img/pager.png)

:::info

Please note that the levels you wish to query must contain this additional information and must be configured as queryable in the application.

:::

If you close the tool, it is automatically deactivated.

<!-- <ReactPlayer controls width="max" height="max" url="/shogun-docs/videos/getfeatureinfo.mp4" /> -->

