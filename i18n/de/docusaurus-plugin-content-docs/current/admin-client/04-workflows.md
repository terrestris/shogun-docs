---
id: Workflows
title: Workflows
description: Workflows
sidebar_position: 4
sidebar_label: Workflows
---

## Erstellen Sie eine neue Anwendung

1. Melden Sie sich am [Admin-Client](https://shogun2022.intranet.terrestris.de/admin) an und authentifizieren Sie sich als Admin-Benutzer

2. Wählen Sie den Menüpunkt *Applikation*.

3. Klicken Sie auf die Schaltfläche „Applikation erstellen“, um eine neue Web-GIS-Anwendung zu erstellen

4. Um eine Applikation zu speichern, müssen Sie zunächst einen Namen angeben

5. Verwenden Sie das folgende JSON-Skript für die *Client-Konfiguration*:

<details>
<summary><b><i>Client</i></b> Konfiguration</summary>
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

Ausführlichere Informationen zu den Attributen finden Sie [hier](../admin-client/instance).

6. Verwenden Sie das folgende JSON-Skript für die *Layertree*-Konfiguration:

<details>
<summary><b><i>Layertree</i></b> Konfiguration</summary>
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

Die layerId muss mit der *Themen*-layerId übereinstimmen!

:::

7. Wenn die Ebenen bereits als Themen hinzugefügt wurden, können Sie diesen Schritt überspringen. Wenn die Ebenen noch hinzugefügt werden müssen:
    
    * Zum Menüpunkt *Themen* wechseln

    <details>
    <summary>Hinzufügen von <b><i>Land - VHR Mosaik 2018</i></b></summary>
    <div>
        <ol>
        <li>Klicken auf <b><i>Thema erstellen</i></b> button zum Hinzufügen eines neuen Layers</li>
        <li>Thema benennen als <code>Land - VHR Mosaik 2018</code> und als Typ<code>TILEWMS</code> auswählen</li>
        <li>Folgendes JSON als <i>Datenquelle</i> nutzen:</li>
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
        <li>Thema speichern über den <b><i>Thema speichern</i></b> Button</li>
        </ol>
    </div>
    </details>

    <details>
    <summary>Hinzufügen von <b><i>Land - VHR Mosaik 2012</i></b></summary>
    <div>
        <ol>
        <li>Klicken auf <b><i>Thema erstellen</i></b> button zum Hinzufügen eines neuen Layers</li>
        <li>Thema benennen als <code>Land - VHR Mosaik 2012</code> und als Typ<code>TILEWMS</code> auswählen</li>
        <li>Folgendes JSON als <i>Datenquelle</i> nutzen:</li>
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
        <li>Thema speichern über den <b><i>Thema speichern</i></b> Button</li>
        </ol>
    </div>
    </details>

    <details>
    <summary>Hinzufügen von <b><i>OSM-WMS (gray)</i></b></summary>
    <div>
        <ol>
        <li>Klicken auf <b><i>Thema erstellen</i></b> button zum Hinzufügen eines neuen Layers</li>
        <li>Thema benennen als <code>OSM-WMS (gray)</code> und als Typ<code>TILEWMS</code> auswählen</li>
        <li>Folgendes JSON als <i>Datenquelle</i> nutzen:</li>
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
        <li>Thema speichern über den <b><i>Thema speichern</i></b> Button</li>
        </ol>
    </div>
    </details>

8. Verwenden Sie das folgende JSON-Skript, um zu definieren, welche Werkzeuge für die Web-GIS-Anwendung verfügbar sein sollen:

<details>
<summary>Liste der <b><i>Werkzeuge</i></b></summary>
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

9. Damit ist die Web-GIS-Anwendung einsatzbereit und kann vom Admin-Benutzer aufgerufen werden. Sollen mehrere Benutzer auf die Anwendung zugreifen, müssen den jeweiligen Benutzern Zugriffsrechte eingeräumt werden. Dies geschieht über das *Nutzerberechtigungen*-Raster:
    
    1. Auf das ![admin-client](/img/plus.png) klicken
    2. Geben Sie den *Benutzernamen* oder die *E-Mail-Adresse* des Benutzers ein, dem Sie Zugang gewähren möchten
    3. Wählen Sie die Berechtigung *Lesen*
    4. Bestätigen Sie Ihre Anfrage

10. Um die Web-GIS-Anwendung zu öffnen, klicken Sie einfach auf den *Link zur Applikation* in der entsprechenden Zeile der Applikationstabelle

## Hochladen von Vektor- oder Rasterdaten und deren Anzeige im Web-GIS

1. Melden Sie sich am [Admin-Client](https://shogun2022.intranet.terrestris.de/admin) an und authentifizieren Sie sich als Admin-Benutzer

2. Wählen Sie den Menüpunkt [Themen](../admin-client/layers)

3. Klicken Sie auf die Schaltfläche „Thema hochladen“ und laden Sie ein geoTIFF oder ShapeFile hoch. Alternativ können die Dateien auch per Drag&Drop auf den Upload-Button hinzugefügt werden.

:::caution

Die ShapeFile-Daten müssen gezippt sein.

:::

4. Ein neues [Thema](../admin-client/layers) wird der Liste hinzugefügt.

5. Wechseln Sie zum Menüpunkt [Applikation](../admin-client/instance) und editieren Sie die **Layertree**-Konfiguration

6. Fügen Sie das neue Thema zum **Layertree** hinzu und verlinken Sie das Thema mit der **LayerId** des zugehörigen Themas.
