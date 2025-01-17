# Layers
***

Under the menu item *Themes*, new layers can be persisted for the applications, e.g. from external WMS or the project's own GeoServer; you can also import your own raster or vector data. In addition, various settings can be made for each layer.

![admin-client](/img/layers_overview.png)

Existing topics can be changed by clicking on the corresponding line in the topic list. To add a new layer, click on the "Create theme" button.

Raster or vector data can be imported using the "Upload theme" button.

As soon as a theme has been changed, it can be saved using the "Save theme" button.

Unsaved changes can be cancelled using the "Reset theme" button.

When creating/editing a topic, the *Data source* field must be filled in in addition to the name and type (can be selected from the suggestion list).

## Configuration

This field saves the configuration for the respective theme in JSON format and could look like this:

```
{
  "hoverable": true,
  "featureInfoFormConfig": [
    {
      "title": "Basis",
      "children": [
        {
          "propertyName": "name",
          "displayName": "Name",
          "fieldProps": {
            "className": "my-field"
          }
        },
        {
          "propertyName": "description",
          "displayName": "Description",
          "fieldProps": {
            "className": "my-field"
          }
        }
      ]
    },
    {
      "title": "Adresse",
      "children": [
        {
          "propertyName": "adresse",
          "displayName": "Adresse",
          "fieldProps": {
            "className": "my-field"
          }
        }
      ]
    }
  ]
}
```

This is a complete list of the parameters that can be edited:

|Key|Description|Example|Required|
|---|---|---|---|
|`crossOrigin`|Set this value to 'anonymous' if you encounter problems when querying a layer in the Web GIS application. Normally you do not want to overwrite this value.|'anonymous'|false|
|`downloadConfig`|List of download configurations. If set, a new menu item appears within the layer tree for downloading the layer|https://example.com/geoserver/SHOGUN/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application%2Fjson|false|
|`downloadConfig -> downloadUrl`|URL that enables the layer data to be downloaded|s.o.|false|
|`downloadConfig -> formatName`|The displayed format name for the specified DownloadUrl. If it is not specified, it is set to "XML".|'GeoJSON'|false|
|`hoverable`|Determines whether map features can be queried with the FeatureInfo tool.|true|false|
|`maxResolution`|The maximum resolution of the layer (up to which resolution/zoom level the layer should be visible)|100000|false|
|`minResolution`|The minimum resolution of the layer (at which resolution/zoom level the layer should be visible)|10000|false|
|`opacity`|Defines the initial opacity for the layer in a range of 0-1.|0.5|false|
|`propertyConfig`|Not currently in use||false|
|`searchable`|Not currently in use||false|
|`searchConfig`|Not currently in use||false|
|`searchable`|Determines whether the layer is searchable||false|
|`searchConfig`|Determines which attributes are searchable during the search||false|
|`displayTemplate`|Defines the display template for the search results|`Name: <b>{name}</b>, Adresse: <em>{adresse}</em>`|false|
|`featureInfoFormConfig`|Determines which attributes are displayed in the FeatureInfo display, further details can be found [here](#featureinfoformconfig)|[here](#featureinfoformconfig)|false|
|`editable`|Determines whether the layer is editable, only applies to internal GeoServer layers that can be written via WFS-T|true|false|
|`editFormConfig`|Determines which attributes are displayed in the editing form, further details can be found [here](#editformconfig)| [here](#editformconfig) |false|


### featureInfoFormConfig 

In contrast to the generic display of the attribute data information, you can configure here which attributes of a layer are to be displayed with which labelling. If the featureInfoFormConfig is not configured for a layer, the generic display is used, which displays all attributes of the layer in tabular form as key-value pairs. 

The structure of featureInfoFormConfig can look like this:

```
{
  "featureInfoFormConfig": [
    {
      "title": "Testlayer",
      "children": [
        {
          "propertyName": "my_url_attribute",
          "displayName": "Link",
          "fieldProps": {
            "urlDisplayValue": "Link"
          }
        }
      ]
    },
    {
      "title": "Basis",
      "children": [
        {
          "propertyName": "name",
          "displayName": "Name",
          "fieldProps": {
            "className": "my-field"
          }
        },
        {
          "propertyName": "description",
          "displayName": "Description",
          "fieldProps": {
            "className": "my-field"
          }
        }
      ]
    },
    {
      "title": "Adresse",
      "children": [
        {
          "propertyName": "adresse",
          "displayName": "Adresse",
          "fieldProps": {
            "className": "my-field"
          }
        }
      ]
    }
  ]
}
```

The feature info display can be divided into any number of tabs. These are each defined at the top level by a title and then have any number of child nodes with the individual attributes.
The `propertyName`, which contains the name of the attribute from the service, and the `displayName`, which contains the desired display name, are assigned to the child nodes. If there are different styles for the field displays, this can be set via the `fieldProps`.


In the following example, a tab with the title "Adresse" is defined. In this tab, there is an attribute that points to the "adresse" field and should be displayed as "Adresse" in the feature info in the application.
```
{
  "title": "Adresse",
  "children": [
    {
      "propertyName": "adresse",
      "displayName": "Adresse",
      "fieldProps": {
        "className": "my-field"
      }
    }
  ]
}
```

### editFormConfig

The editFormConfig can be used to configure an input form for a layer for editing.

The structure of editFormConfig can look like this:
```
{
   "editFormConfig": [
    {
      "title": "Basis",
      "children": [
        {
          "propertyName": "id",
          "displayName": "ID",
          "component": "INPUT",
          "readOnly": true
        }
        {
          "propertyName": "name",
          "displayName": "Name",
          "component": "INPUT",
          "required": true
        },
        {
          "propertyName": "typ",
          "displayName": "Typ",
          "fieldProps": {
            "options": [
              {
                "label": "Option 1",
                "value": "option1"
              },
              {
                "label": "Option 2",
                "value": "option2"
              }              
            ]
          },
          "component": "SELECT",
          "required": true
        },
        {
          "propertyName": "jahr",
          "displayName": "Jahr",
          "component": "NUMBER",
          "required": false
        },
        {
          "propertyName": "text",
          "displayName": "Text",
          "component": "TEXTAREA",
          "required": false
        },
        {
          "propertyName": "active",
          "displayName": "Aktiv",
          "component": "CHECKBOX",
          "required": false
        }        
      ]
    },
    {
      "title": "Adresse",
      "children": [
        {
          "propertyName": "adresse",
          "displayName": "Adresse",
          "component": "INPUT",
          "required": true
        }
      ]
    }
  ],
}
```

The editing form can be divided into any number of tabs. These are each defined at the top level by a title and then have any number of child nodes with the individual attributes. The `propertyName`, which contains the name of the attribute from the layer, and the `displayName`, which contains the desired display name, are assigned to the child nodes. This is analogous to `featureInfoFormConfig`.

Additional configuration parameters can also be set.

```
{
  "propertyName": "id",
  "displayName": "ID",
  "component": "INPUT",
  "readOnly": false,
  "required": true
}
```

`required` is optional and specifies whether the attribute must be filled in or can be filled in optionally. The default for this parameter is `false`.

`readOnly` is optional and specifies whether the attribute can be edited. If “readOnly”: true, the attribute cannot be edited. 

The output type can be specified using `component`. 
All types have the same structure. 

The exception is “SELECT”, which must be supplemented by “fieldProps”, which contains the options that should be available to the user in the selection list.

There are a total of 8 output types, which are described here:

|Key|Description|
|---|---|
|`CHECKBOX`|A checkbox is displayed in which a checkmark can be placed|
|`DATE`|A date can be entered via a date picker|
|`INPUT`|A text can be entered in a normal text field|
|`NUMBER`|Numbers can be entered|
|`SELECT`|Dropdown menu. If this type is selected, a drop-down menu appears, which must be configured with “fieldProps” as in the example above|
|`SWITCH`|Switch for switching between true/false|
|`TEXTAREA`|Can be used for longer texts|
|`UPLOAD`|Offers the option to upload for the defined upload fields|
|`REFERENCE_TABLE`|Provides a configuration option for 1:n attributes|

## Datasource

This field defines the source of the topic in JSON format. The data structure differs depending on the type of layer:


```
{
  "url": "/geoserver/ows?",
  "layerNames": "SHOGUN:airports",
  "useBearerToken": true
}
```

```
{
  "url": "https://ows.terrestris.de/osm-gray/service?",
  "layerNames": "OSM-WMS",
  "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>",
  "useBearerToken": false
}
```

This is a complete list of the parameters that can be set:

|Key|Description|Example|Required|
|---|---|---|---|
|`url`|The base URL of the layer|/geoserver/ows?|true|
|`layerNames`|A comma-separated list of the layers to be requested|'SHOGUN:airports'|true|
|`attribution`|The copyright notice to be displayed for this layer. It is displayed in the bottom corner of the map|`&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>`|false|
|`useBearerToken`|Whether or not the (internal) Keycloak Bearer Token should be sent together with the map requests. Must be set to 'true' if a protected layer is requested from the internal GeoServer.|true|false|
|`legendUrl`|A URL to a user-defined legend image that is displayed in the layertree|https://ows.terrestris.de/ows/my-legend.png|false|
|`matrixSet`|Identifier of the Tile Matrix Set that determines the CRS in which the layer is to be exposed. Must be one of the listed tile matrices for the layers: see here for details: https://gdal.org/drivers/raster/wmts.html |'WEBMERCATOR'|false|
|`requestParams`|Query parameters that are passed to the map server when a layer is queried, e.g. via GetMap. This can be useful if you want to pass server-specific parameters|'\{\"transparent\": true\}'|false|
|`resolutions`|The list of resolutions for which the layer is to be requested|'[2445.9849047851562, 1222.9924523925781, 611.4962261962891]'|false|
|`tileOrigin`|Origin of the tile grid. Normally you do not want to define your own value||false|
|`tileSize`|Defines the tile size. Default is 256. Note that tileSize only applies if 'resolutions' and 'tileOrigin' are set at the same time|512|false|
