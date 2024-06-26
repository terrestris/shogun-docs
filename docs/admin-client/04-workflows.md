---
id: Workflows
title: Workflows
description: Workflows
sidebar_position: 4
sidebar_label: Workflows
---

## Create a new application

1. Log in to the [Admin-Client](https://shogun2022.intranet.terrestris.de/admin) and authenticate as a admin-user

2. Select *Application* menu item

3. Click ![create_instance](../../static/img/create_instance.png) button to create a new Web-GIS application

4. To save an instance, it is first necessary to specify a name

5. Use the following JSON-script for the *Client configuration*:

<details>
<summary><b><i>Client</i></b> configuration</summary>
<div>
  <pre>
  {
  JSON.stringify(
{
  "mapView": {
    "zoom": 2,
    "center": [
      10,
      51
    ],
    "extent": null,
    "projection": "EPSG:3857",
    "resolutions": [
      8920,
      4480,
      2240,
      1120,
      560,
      350,
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
  "description": "The default application",
  "legal": {
    "contact": "https://www.terrestris.de/de/kontakt/",
    "imprint": "https://www.terrestris.de/de/impressum/",
    "privacy": "https://www.terrestris.de/de/datenschutzerklaerung/"
  },
  "theme": {
    "primaryColor": "#555555",
    "secondaryColor": "#73b3fb",
    "complementaryColor": "#ffffff",
    "logoPath": "null"
  }
  }, null, '  ')
  }
  </pre>
</div>
</details>

More detailed information about the attributes can be found [here](../admin-client/instance).

6. Use the following JSON-script for the *Layertree*-configuration:

<details>
<summary><b><i>Layertree</i></b> configuration</summary>
<div>
  <pre>
  {
  JSON.stringify(
{
  "title": "root",
  "children": [
    {
      "title": "Copernicus Services",
      "checked": false,
      "children": [
        {
          "title": "VHR 2018",
          "checked": false,
          "layerId": 1
        },
        {
          "title": "VHR 2012",
          "checked": false,
          "layerId": 2
        }
      ]
    },
    {
      "title": "OSM-WMS(gray)",
      "checked": true,
      "layerId": 3
    }
  ]
  }, null, '  ')
  }
  </pre>
</div>
</details>

:::caution

The layerId has to be corresponding to the *Layers*-layerId!

:::

7. If the layers are already added as a Layer, you can skip this step. If the layers still need to be added:
    
    * Switch to *Layers* menu item

    <details>
    <summary>Add <b><i>Land - VHR Mosaik 2018-layer</i></b></summary>
    <div>
        <ol>
        <li>Click <b><i>create layer</i></b> button to create a new layer</li>
        <li>Name the layer <code>Land - VHR Mosaik 2018</code> and choose the type <code>TILEWMS</code></li>
        <li>Use the following JSON-script as a <i>Datasource</i>:</li>
        <pre>
        {
        JSON.stringify(
        {
        "url": "https://copernicus.discomap.eea.europa.eu/arcgis/services/GioLand/VHR_2018_WM/ImageServer/WMSServer",
        "layerNames": "VHR_2018_WM:VHR2018",
        "useBearerToken": false
        }, null, '  ')
        }
        </pre>
        <li>Save the layer via the <b><i>save layer</i></b> button</li>
        </ol>
    </div>
    </details>

    <details>
    <summary>Add <b><i>Land - VHR Mosaik 2012</i></b></summary>
    <div>
        <ol>
        <li>Click <b><i>create layer</i></b> button to create a new layer</li>
        <li>Name the layer <code>Land - VHR Mosaik 2012</code> and choose the type <code>TILEWMS</code></li>
        <li>Use the following JSON-script as a <i>Datasource</i>:</li>
        <pre>
        {
        JSON.stringify(
        {
        "url": "https://copernicus.discomap.eea.europa.eu/arcgis/services/GioLand/VeryHighResolution2012/MapServer/WMSServer",
        "layerNames": "core003_Mosaic_NaturalColor_Feathering",
        "useBearerToken": false
        }, null, '  ')
        }
        </pre>
        <li>Save the layer via the <b><i>save layer</i></b> button</li>
        </ol>
    </div>
    </details>

    <details>
    <summary>Add <b><i>OSM-WMS (gray)</i></b></summary>
    <div>
        <ol>
        <li>Click <b><i>create layer</i></b> button to create a new layer</li>
        <li>Name the layer <code>OSM-WMS (gray)</code> and choose the type <code>TILEWMS</code></li>
        <li>Use the following JSON-script as a <i>Datasource</i>:</li>
        <pre>
        {
        JSON.stringify(
        {
        "url": "https://ows.terrestris.de/osm-gray/service?",
        "layerNames": "OSM-WMS",
        "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>",
        "useBearerToken": false
        }, null, '  ')
        }
        </pre>
        <li>Save the layer via the <b><i>save layer</i></b> button</li>
        </ol>
    </div>
    </details>

8. Use the following JSON-script to define which tools shall be available for the Web-GIS application:

<details>
<summary>List of <b><i>tools</i></b></summary>
<div>
  <pre>
  {
  JSON.stringify(
  [
  {
    "name": "measure_tools",
    "config": {
      "visible": true
    }
  },
  {
    "name": "measure_tools_distance",
    "config": {
      "visible": true
    }
  },
  {
    "name": "measure_tools_area",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_point",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_line",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_polygon",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_circle",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_rectangle",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_annotation",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_modify",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_upload",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_download",
    "config": {
      "visible": true
    }
  },
  {
    "name": "draw_tools_delete",
    "config": {
      "visible": true
    }
  },
  {
    "name": "feature_info",
    "config": {
      "visible": true
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
      "visible": true
    }
  }
  ], null, '  ')
  }
  </pre>
</div>
</details>

9. At this point the Web-GIS application is ready to use and can be accessed by the admin-user. If multiple users should access the application, access rights must be granted to the respective users. This is done via the *User permissions*-grid:
    
    1. Click on the ![plus](../../static/img/plus.png)
    2. Type in the *Username* or the *email address* of the user you want to grant access
    3. Select the permission *Read*
    4. Confirm your request

10. To open the Web-GIS application just click on the *Link to application* within the respective row of the applications grid

## Upload vector or raster data and display it in the Web-GIS

1. Log in to the [Admin-Client](https://shogun2022.intranet.terrestris.de/admin) and authenticate as a admin-user

2. Switch to the content [Layers](../admin-client/layers)

3. Click the "Upload layer" button and upload a geoTIFF or ShapeFile. Alternatively the files can also be added via Drag&Drop onto the upload button.

:::caution

The ShapeFile data need to be zipped.

:::

4. A new [Layer](../admin-client/layers) will be added to the list of existing ones

5. Switch to the content [Application](../admin-client/instance) and edit the **layertree** configuration

6. Add a new layer to the **layertree** and link the layer with the **LayerId** corresponding to the **Layers LayerId**
