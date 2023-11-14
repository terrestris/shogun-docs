# Toolbox
***
Various functions are available in the toolbox on the left-hand side of the map, which are presented below:

## Measure

The measure tool is used to measure distances or areas.

![gis-client](/img/measure_tools.png)

The measure tool for the desired option can be activated by clicking on the corresponding button. When hovering over the main map with the mouse, you can now see at the mouse pointer that the measuring tool is active.

A line or an area can now be drawn on the map. Each click on the map adds a new base point to the measure object. The measure is completed by double-clicking on the map. The measure result is now displayed on the object:

![gis-client](/img/measure_area.png)
:::info

To deselect the tool press it again to untoggle it. The measurements in the map are then removed.

:::

<!-- <ReactPlayer controls width="max" height="max" url="/shogun-docs/videos/measure.mp4" /> -->

## Draw

The draw tools can be used to annotate the map, draw various geometries to highlight certain areas or can be downloaded as an area-of-interest.

![gis-client](/img/draw_tools.png)

It is possible to choose between the geometries `Point`, `Line`, `Polygon`, `Circle` or `Rectangle`. For text elements, `Annotation` can be used.

Every drawn object can be edited via the `Edit` option. To to this, activate this option and click on the desired drawn object. It will be activated for editing.

There is also the option to upload geoJSON files with the `Upload` option which will be visualized in the map after uploading them.

In the opposite way, all drawn objects in the map can be downloaded in geoJSON format. For this purpose, the `Export` option can be used.

To delete a drawn object from the map, the `Delete` option can be activated. A click on the desired draw object will remove it.

The `Modify color scheme` button can be used to modify the color of the different geometry types.

:::info

To deselect a draw option in the draw tool, you need to untoggle the selected option.

:::

<!-- <ReactPlayer controls width="max" height="max" url="/shogun-docs/videos/draw.mp4" /> -->

## Query map features / Feature Info

The "Query map features" tool can be used to query detailed information on the objects of the displayed layers in the map, provided that the topics are active in the map and are available for querying.

![gis-client](/img/query_tool.png) 

Use the mouse to click on the desired layer object in the map. If information is found for this object, it will be displayed in the tool panel directly.

![gis-client](/img/query_result.png) 

If objects from several layers are found at the clicked point on the map, the results for the individual layers are displayed in different tabs. These tabs can be clicked individually. In the example above, there was only one result found for the layer "Countries".

If several objects are hit on a clicked point within one layer, you can page through the individual hits in the corresponding layers tab:

![gis-client](/img/pager.png)

:::info

Be aware that the layers you want to query need to support additional information and need to be configured as queryable within the application. 

:::

<!-- <ReactPlayer controls width="max" height="max" url="/shogun-docs/videos/getfeatureinfo.mp4" /> -->

## Export

This tool can be used to open the "Print" function in order to export a desired map section.

![gis-client](/img/print.png) 

The desired details for the print output can be entered via the print form.

You can enter a title for the print output and a comment.

A4 landscape format and A4 portrait format are available as print templates. A scale and output quality/resolution as well as the format (PDF or PNG) can also be selected.

In the map, the area to be printed is defined by a frame. After clicking on this frame, it is marked with a red border and can be moved with the mouse or enlarged/reduced by moving the mouse over the 4 corner points.

Printing is triggered by clicking on the "Create print" button and the output file is offered for download after successful generation.

## Maps / Layertree

This menu item, which is called "Maps", contains the application's layertree. It contains all the layers configured for the application in a folder structure. The layertree organizes the layer hierarchy. Layers that are listed first in the layertree are displayed at the top level of the map. 

![gis-client](/img/layertree.png)

Layers or folders can be activated or deactivated for the map using the checkbox in front of each element.

It is possible to adjust the transparency of an activated layer in the map using a slider. If the slider is moved to the right, the transparency increases.

Layers can be moved within the layertree using drag & drop to change the layer order in the map. These changes are not persistent and are therefore only valid for the current session.

The ![gis-client](/img/context_layer.png) icon behind each layer can be used to open an additional context menu for each layer. Depending on the configuration of the layer, this menu may contain the following functions:

* the option to zoom the map to the default scale of the theme ("Zoom to layer extent")
* the option to show the legend; the legend is then displayed below the transparency slider of the layer and can also be deactivated again using the same method in the context menu ("Hide legend")
* the option to download the theme, if configured
* the option to edit the theme, if configured
* the option to see the properties for the layer

Furthermore, it is possible to add new WMS services to the layertree.

The `Add WMS` button can be found below the layertree. 

Clicking on the button opens the corresponding window.

First, a valid WMS URL must be entered or copied into the text field. The baseUrl of the WMS ist sufficient, it is not necessary to insert the SERVICE, VERSION and REQUEST parameters to the URL. They are automatically added. The user can then either click on the "magnifying glass" icon behind the text field or press the Enter key to obtain a list of available layers.

If the service URL is not valid and/or no layers could be read, the user is informed via an error message.

If the WMS URL is valid and the available layers could be read, these are displayed in a selection list below the text field.

![gis-client](/img/add_wms.png)

The user now has the option of selecting the desired layers by clicking into the respective checkbox in order to add them to the map. The desired layers are loaded into the map via the "Add selected" button and are available in the layertree in the "External services" folder. The "Add all" button can also be used to add all layers from the WMS service without preselection. The window closes automatically after adding the desired layers to the map.

:::info

Added external layers are only available within the current session.

:::

The `Upload data` button can also be found below the layertree.

Clicking on the button opens the corresponding window.

![gis-client](/img/upload.png)

It is possible to add a shapefile as a zipfile or a GeoTIFF. After successfully uploading the data, it will be displayed in the map.

:::info

Uploaded data are only available within the current session.

:::

## Share

The share function is used to share the current state of an Web-GIS instance. A new URL will be created that stores information about:

- the zoom level
- the map section
- selected layers

As long as the layers are available under their URL or within the internal GeoServer the Permalink URL will be valid.

The permalink can be copied to the clipboard by clicking on the button behind the link.

:::info

A layer order changed by the user is not transported into the permalink.

:::

:::info

Beware that you need to be logged in to open the URL and have granted access to the specific application. 

:::

<!-- <ReactPlayer controls width="max" height="max" url="/shogun-docs/videos/share.mp4" /> -->

## Language selector

The language selector can be used to switch the applications language.
