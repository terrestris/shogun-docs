# Applications
***
Under the heading **Applications** you will find the option of creating new Web GIS applications or editing existing ones. 

![admin-client](/img/application_admin.png)

If you select an application, the editing menu opens on the right-hand side.

![admin-client](/img/application_admin_edit.png)

As soon as the input form has been completed with all the required information, it can be saved using the "Save application" button.

The "Reset application" button can be used to reset the input screen of the application. All changes since the last save are discarded. 

When creating/editing an application, the *Client configuration* and *Theme tree* fields must be filled in addition to the name for the application.

## Client configuration

The configuration of the application is saved in JSON format in this field. Each application can be changed by editing the JSON format parameters, e.g. the initial zoom level, the title or the colour scheme:

```
  {
  "mapView": {
    "zoom": 0,
    "center": [
      10.7140677,
      51.5030192
    ],
    "projection": "EPSG:3857",
    "resolutions": [
      8160,
      4080,
      2040,
      1020,
      560,
      280,
      140,
      70,
      28,
      14,
      7,
      2.8,
      1.4,
      0.7,
      0.28,
      0.07
    ]
  },
  "mapInteractions": [
    "DragRotate",
    "DragPan",
    "DoubleClickZoom",
    "PinchRotate",
    "PinchZoom",
    "KeyboardPan",
    "KeyboardZoom",
    "MouseWheelZoom",
    "DragZoom"
  ],
  "description": "The default application",
  "legal": {
    "contact": "https://www.terrestris.de/de/kontakt/",
    "imprint": "https://www.terrestris.de/de/impressum/",
    "privacy": "https://www.terrestris.de/de/datenschutzerklaerung/"
  },
  "theme": {
    "primaryColor": "#008CD2",
    "secondaryColor": "#D1007F",
    "complementaryColor": "#EEEEEE"
  },
  "printApp": "test"
}
```

This is a complete list of the parameters that can be edited:

|Key|Description|Example|Required|
|---|---|---|---|
|`mapView -> zoom`|Zoom level at which the map is initially loaded|7|false|
|`mapView -> center`|Position on the map on which the map is initially centred|"center": [7,51]|true|
|`mapView -> extent`|The maximum extent of the map (in WGS84)|'[2.5683045738288137, 45.429089001638076, 19.382621082401887, 57.283993958205926]'|false|
|`mapView -> projection`|Projection of the map|'EPSG:25832'|false|
|`mapView -> resolutions`|The list of map resolutions|'[2445.9849047851562, 1222.9924523925781, 611.4962261962891]'|false|
|`mapView → crsDefinitions`|The list of CRS definitions in proj4 format that should also be registered in the application.|\{ <br/>'crsCode': 'EPSG:25832',<br/>'definition': '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs'<br/>\}|false|
|`description`|Description of the application to be displayed on the start page|'My Web-GIS'|false|
|`theme -> primaryColor`|Determines the background colour of the header and footer element|'#444444'|false|
|`theme -> secondaryColor`|Determines the colour when hovering over text elements and buttons|'#ffc0cb'|false|
|`theme -> complementaryColor`|Defines the font colour of text elements in the header and footer|'#000000'|false|
|`theme -> logoPath`|URL of the logo that is displayed in the header component|https://my-logo.de/img/my-logo.png|false|
|`defaultLanguage`|Determines the default language of the application [(ISO 639-1)](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).|'de'|false|
|`printApp`|User has the ability to configure printing templates (print output) per application|'printApp':'test'|false|
|`legal -> imprint`|URL for the imprint link|https://www.terrestris.de/de/impressum/|false|
|`legal -> imprint`|URL for the contact link|https://www.terrestris.de/de/kontakt/|false|
|`legal -> privacy`|URL for the privacy link|https://www.terrestris.de/de/datenschutzerklaerung/|false|
|`mapInteractions` |The Openlayers interactions added to the map:|['DragRotate','DragPan', 'DoubleClickZoom', 'PinchRotate', 'PinchZoom', 'KeyboardPan', 'KeyboardZoom', 'MouseWheelZoom', 'DragZoom']|false|
|`mapInteractions : DoubleClickZoom`|Allows the user to zoom by double-clicking on the map|'DoubleClickZoom'|false|
|`mapInteractions : DragPan`|Allows the user to pan the map by dragging the map| 'DragPan'|false|
|`mapInteractions : DragRotate`|Allows the user to rotate the map by clicking and dragging on the map, this interaction is only supported for mouse devices|'DragRotate'|false|
|`mapInteractions : DragZoom`|Allows the user to zoom the map by clicking and dragging on the map|'DragZoom'|false|
|`mapInteractions : KeyboardZoom`|Allows the user to zoom the map using keyboard + and -. Note that, the keys can only be used when browser focus is on the element to which the keyboard events are attached(by default, this is the map div)|'KeyboardZoom'|false|
|`mapInteractions : KeyboardPan`|Allows the user to pan the map using keyboard arrows. Note that, the keys can only be used when browser focus is on the element to which the keyboard events are attached(by default, this is the map div)|'KeyboardPan'|false|
|`mapInteractions : MouseWheelZoom`|Allows the user to zoom the map by scrolling the mouse wheel|'MouseWheelZoom'|false|
|`mapInteractions : PinchRotate`|Allows the user to rotate the map by twisting with two fingers on a touch screen|'PinchRotate'|false|
|`mapInteractions : PinchZoom`|Allows the user to zoom the map by pinching with two fingers on a touch screen|'PinchZoom'|false|

## Layertree

The configuration for the application's layertree is saved in JSON format in this field:

```
{
  "title": "root",
  "children": [
    {
      "checked": true,
      "layerId": 54
    },
    {
      "title": "Airports",
      "checked": true,
      "layerId": 181
    },
    {
      "title": "Countries",
      "checked": true,
      "layerId": 27
    },
    {
      "title": "OSM-WMS (gray)",
      "checked": true,
      "layerId": 24
    },
    {
      "checked": true,
      "layerId": 68
    }
  ]
}
```

The layertree consists of two different elements, "layer" and "layer group", which are defined in the JSON document. A "layer" has the following structure:
```
"title": "My Layer",
"checked": false,
"layerId": 42
```
One or more layers can be part of a "Layergroup". In this case, they must be added to the "Children" array as follows:
```
"title": "My Layer group",
"checked": true,
"children": [
  {
    "title": "Layer 1",
    "checked": true,
    "layerId": 12
  },
  {
    "title": "Layer 2",
    "checked": true,
    "layerId": 24
  },
  {
    "title": "Layer 3",
    "checked": true,
    "layerId": 16
  }
]
```
A "Layergroup" can also be part of the "Children" array. In this case, a further hierarchy level is added.

:::caution
Important: The layerId must match the layer ID of the layer!
:::

This is a complete list of the parameters that can be edited:

|Key|Description|Example|Required|
|---|---|---|---|
|`title`|Layer or group name that is displayed in the layertree. If not set, the layer name of the internal geoserver is used|'My base layers'|false|
|`checked`|Specifies whether a layer or all layers within a layer group should be visible first|true|false|
|`children`|Array of layers and layer groups|[\{"title": "layer 1", "checked": true, "layerId":1 \}]|false|
|`layerId`|Layer ID that corresponds to the layer ID of the desired theme|1|true|

## Layer configuration

In the Layer configuration window, predefined layer settings from the [layers configuration](../admin-client/layers#configuration) and the [layers datasource](../admin-client/layers#datasource) 
 section can be overwritten and adapted to the respective application.

Each layer to be changed is an object within an array:
```
[
  {
    "layerId": 1,
    "clientConfig": {
      "opacity": 0.5
    }
  },
  {
    "layerId": 2,
    "clientConfig": {
      "hoverable": true
    }
  },
  {
    "layerId": 3,
    "sourceConfig": {
      "useBearerToken": true
    }
  }
]
```

This is a full list of parameters that can be edited:

|Key|Description|Example|Required|
|---|---|---|---|
|`layerId`|LayerId corresponding to the LayerId of the [layer](../admin-client/layers)|1|true|
|`clientConfig`|see full list of clientConfig parameters in [layers configuration](../admin-client/layers#configuration)|
|`sourceConfig`|see full list of sourceConfig parameters in [layers datasource](../admin-client/layers#datasource)|

## Configure tools

The configuration for the application tools is saved in JSON format in this field: 

```
[
  {
    "name": "measure_tools",
    "config": {
      "visible": false
    }
  },
  {
    "name": "measure_tools_distance",
    "config": {
      "visible": false
    }
  },
  {
    "name": "measure_tools_area",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_point",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_line",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_polygon",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_circle",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_rectangle",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_annotation",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_modify",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_upload",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_download",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_delete",
    "config": {
      "visible": false
    }
  },
  {
    "name": "draw_tools_style",
    "config": {
      "visible": false
    }
  },
  {
    "name": "feature_info",
    "config": {
      "visible": true,
      "activeCopyTools": []
    }
  },
  {
    "name": "print",
    "config": {
      "visible": true
    }
  },
  {
    "name": "tree",
    "config": {
      "metadataVisible": false,
      "layerIconsVisible": true,
      "showLegends": false,
      "visible": true
    }
  },
  {
    "name": "permalink",
    "config": {
      "visible": true
    }
  },
  {
    "name": "language_selector",
    "config": {
      "visible": false
    }
  },
  {
    "name": "map_toolbar",
    "config": {
      "visible": true
    }
  },
  {
    "name": "search",
    "config": {
      "engines": [
        "nominatim",
        "wfs"
      ]
    }
  }
]
```

Each available tool from the toolbox is recorded in this document. If you set the visibility of a tool to `true`, it will be made available in the Web GIS application. Please note that some tools also depend on other parameters (e.g. the query capability of a layer).

This is a complete list of the parameters that can be edited:

|Key|Description|Tool|
|---|---|---|
|`name`|Name of the tool. The parameter should not be changed|all|
|`config -> visible`|Defines the visibility of a specific tool within the Web GIS application|all|
|`config -> showLegends`|Defines whether legends are visible when a Layer is activated. Is 'not visible' by default|'tree'|
|`config -> metaVisible`|Defines of an application if the layer properties entry in the layer context menu is visible. Is 'visible' by default|'tree'|
|`config -> layerIconsVisible`|Defines for an application if additional icons (if layers are hoverable, editable, searchable) for the layers are shown in the layertree. Is 'not visible' by default|'tree'|

Important: If you leave the configuration empty, all tools are available by default. As soon as a tool is added to the configuration, all other tools are no longer available until they are also explicitly added.

## User permissions

In the User rights field, users can be activated for the respective applications and assigned user rights.

![admin-client](/img/user_permissions_admin.png)

If you click on the ![admin-client](/img/plus.png) button, a new window with two input fields opens:

![admin-client](/img/add_permission_admin.png)

After entering the user name or e-mail address of a user, various authorisations can be assigned to this user. The following authorisations are available:

|Key|Description|
|---|---|
|`Read`|All authenticated users can access the Web GIS application|
|`Update`|If set, the user can change the application configuration|
|`Update & Delete`|If set, the user can change the application and delete it completely.|
|`Owner`|If set, the user can change and delete the JSON files that configure the Web GIS and grant authorisations to new users.|

Every user listed in the authorisation table has access to the corresponding application. Authorisations other than 'Read' only affect users who also have the 'Admin' role, as only these users can access the Admin client and therefore change the configurations.

