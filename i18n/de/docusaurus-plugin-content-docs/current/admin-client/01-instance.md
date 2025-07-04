# Applikationen
***
Unter der Rubrik **Applikationen** finden Sie die Möglichkeit, neue Web-GIS-Anwendungen zu erstellen oder bestehende zu bearbeiten. 

![admin-client](/img/application_admin_de.png)

Wenn Sie eine Applikation auswählen, öffnet sich das Bearbeitungsmenü auf der rechten Seite.

![admin-client](/img/application_admin_edit_de.png)

Sobald das Eingabeformular mit allen erforderlichen Informationen ausgefüllt ist, kann es über die Schaltfläche "Applikation speichern" gespeichert werden.

Mit der Schaltfläche "Applikation zurücksetzen" kann die Eingabemaske der Applikation zurückgesetzt werden. Alle Änderungen seit dem letzten Speichern werden dabei verworfen. 

Beim Anlegen/Bearbeiten einer Applikation müssen neben dem Namen für die Anwendung auch die Felder *Client-Konfiguration* und *Themenbaum* ausgefüllt werden.

## Öffentliche Applikation

Wenn Sie den Schieberegler für öffentliche Anwendungen einschalten, ist diese Applikation ohne Anmeldung verfügbar.

## Client Konfiguration

In diesem Feld wird die Konfiguration der Anwendung im JSON-Format gespeichert. Jede Anwendung kann durch Bearbeiten der JSON-Formatparameter geändert werden, z. B. die anfängliche Zoomstufe, der Titel oder das Farbschema:

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


Dies ist eine vollständige Liste der Parameter, die bearbeitet werden können:

|Key|Beschreibung|Beispiel|Benötigt|
|---|---|---|---|
|`mapView -> zoom`|Zoomstufe, mit der die Karte anfänglich geladen wird|7|false|
|`mapView -> center`|Position der Karte, auf die die Karte zunächst zentriert wird|"center": [7,51]|true|
|`mapView -> extent`|Die maximale Ausdehnung der Karte (in WGS84)|'[2.5683045738288137, 45.429089001638076, 19.382621082401887, 57.283993958205926]'|false|
|`mapView -> projection`|Koordinatenprojektion der Karte|'EPSG:25832'|false|
|`mapView -> resolutions`|Die Liste der Auflösungen der Karte|'[2445.9849047851562, 1222.9924523925781, 611.4962261962891]'|false|
|`mapView → crsDefinitions`|Die Liste der CRS-Definitionen im proj4-Format, die zusätzlich in der Anwendung registriert werden sollen.|\{ <br/>'crsCode': 'EPSG:25832',<br/>'definition': '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs'<br/>\}|false|
|`description`|Beschreibung der Anwendung, die auf der Startseite angezeigt werden soll|'My Web-GIS'|false|
|`theme -> primaryColor`|Bestimmt die Hintergrundfarbe des Kopf- und Fußzeilenelements|'#444444'|false|
|`theme -> secondaryColor`|Bestimmt die Farbe beim hovern über Textelemente und Schaltflächen|'#ffc0cb'|false|
|`theme -> complementaryColor`|Definiert die Schriftfarbe von Textelementen in der Kopf- und Fußzeile|'#000000'|false|
|`theme -> logoPath`|URL des Logos, das in der Kopfkomponente angezeigt wird|https://my-logo.de/img/my-logo.png|false|
|`theme -> faviconPath`|URL des Favicons, das im Browser angezeigt wird|https://my-logo.de/img/my-logo.png|false|
|`defaultLanguage`|Bestimmt die Default-Sprache der Applikation [(ISO 639-1)](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).|'de'|false|
|`printApp`|Der Benutzer hat die Möglichkeit, die Drucktemplates pro Anwendung zu konfigurieren|'printApp':'test'|false|
|`legal -> imprint` | URL für den Impressum-Link|https://www.terrestris.de/de/impressum/|false|
|`legal -> imprint`|URL für den Kontakt-Link|https://www.terrestris.de/de/kontakt/|false|
|`legal -> privacy`|URL für den Datenschutz-Link|https://www.terrestris.de/de/datenschutzerklaerung/|false|
|`mapInteractions` |Die der Karte hinzugefügten Openlayers Interaktionsmöglichkeiten|['DragRotate','DragPan', 'DoubleClickZoom', 'PinchRotate', 'PinchZoom', 'KeyboardPan', 'KeyboardZoom', 'MouseWheelZoom', 'DragZoom']|false|
|`mapInteractions : DoubleClickZoom`|Ermöglicht dem Benutzer das Zoomen durch Doppelklick auf die Karte|'DoubleClickZoom'|false|
|`mapInteractions : DragPan`|Ermöglicht dem Benutzer das Verschieben der Karte durch Ziehen der Karte|'DragPan'|false|
|`mapInteractions : DragRotate`|Ermöglicht es dem Benutzer, die Karte durch Klicken und Ziehen auf der Karte zu drehen; diese Interaktion wird nur von Mausgeräten unterstützt|'DragRotate'|false|
|`mapInteractions : DragZoom`|Ermöglicht dem Benutzer das Zoomen der Karte durch Klicken und Ziehen auf der Karte|'DragZoom'|false|
|`mapInteractions : KeyboardZoom`|Ermöglicht es dem Benutzer, die Karte mit den Tasten + und - zu zoomen. Beachten Sie, dass die Tasten nur verwendet werden können, wenn der Browser-Fokus auf dem Element liegt, dem die Tastaturereignisse zugeordnet sind (standardmäßig ist dies das Karten-Div).|'KeyboardZoom'|false|
|`mapInteractions : KeyboardPan`|Ermöglicht es dem Benutzer, die Karte mit Tastaturpfeilen zu verschieben. Beachten Sie, dass die Tasten nur verwendet werden können, wenn der Browser-Fokus auf dem Element liegt, dem die Tastaturereignisse zugeordnet sind (standardmäßig ist dies das Karten-Div).|'KeyboardPan'|false|
|`mapInteractions : MouseWheelZoom`|Ermöglicht dem Benutzer das Zoomen der Karte durch Scrollen mit dem Mausrad|'MouseWheelZoom'|false|
|`mapInteractions : PinchRotate`|Ermöglicht dem Benutzer das Drehen der Karte durch Drehen mit zwei Fingern auf einem Touchscreen|'PinchRotate'|false|
|`mapInteractions : PinchZoom`|Ermöglicht dem Benutzer das Zoomen der Karte durch Drücken mit zwei Fingern auf einem Touchscreen|'PinchZoom'|false|

## Themenbaum

In diesem Feld wird die Konfiguration für den Themenbaum der Anwendung im JSON-Format gespeichert:

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

Der Themenbaum besteht aus zwei verschiedenen Elementen, "Ebene" und "Ebenengruppe", die im JSON-Dokument definiert sind. Ein "Layer" hat die folgende Struktur:
```
"title": "My Layer",
"checked": false,
"layerId": 42
```
Ein oder mehrere Layer können Teil einer "Layergruppe" sein. In diesem Fall müssen sie wie folgt zum "Children"-Array hinzugefügt werden:
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
Eine "Layergruppe" kann auch Teil des "Children"-Arrays sein. In diesem Fall wird eine weitere Hierarchiestufe hinzugefügt.

:::caution
Wichtig: Die layerId muss mit der Layer-ID des Themas übereinstimmen!
:::

Dies ist eine vollständige Liste der Parameter, die editiert werden können:

|Key|Description|Example|Required|
|---|---|---|---|
|`title`|Layer- oder Gruppenname, der im Layertree angezeigt wird. Wenn nicht gesetzt, wird der Layername des internen Geoservers verwendet|'My base layers'|false|
|`checked`|Legt fest, ob ein Layer oder alle Layer innerhalb einer Layergruppe zunächst sichtbar sein sollen|true|false|
|`children`|Array von Layer and Layer Gruppe|[\{"title": "layer 1", "checked": true, "layerId":1 \}]|false|
|`layerId`|Layer-ID, die der Layer-ID des gewünschten Themas entspricht|1|true|

## Layer Konfiguration

Im Themen-Konfigurationsfenster können vordefinierte Ebeneneinstellungen aus dem Abschnitt [Themen](../admin-client/layers#konfiguration) überschrieben und an die jeweilige Applikation angepasst werden.

Jede zu ändernde Ebene ist ein Objekt innerhalb eines Arrays:
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
Dies ist die vollständige Liste der Parameter, die editiert werden können:

|Schlüssel|Beschreibung|Beispiel|Benötigt|
|---|---|---|---|
|`layerId`|LayerId, die der Id des [Themas](../admin-client/layers) entspricht|1|true|
|`clientConfig`|siehe vollständige Liste der clientConfig-Parameter in [Themen-Konfiguration](../admin-client/layers#konfiguration)|
|`sourceConfig`|siehe vollständige Liste der clientConfig-Parameter in [Themen-Datenquelle](../admin-client/layers#datenquelle)|

## Konfiguration von Werkzeugen

In diesem Feld wird die Konfiguration für die Anwendungstools im JSON-Format gespeichert:  

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
    "name": "user_menu",
    "config": {
      "visible": true
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
        "nominatim"
      ]
    }
  }
]
```

Jedes verfügbare Werkzeug aus der Toolbox wird in diesem Dokument aufgezeichnet. Wenn Sie die Sichtbarkeit eines Werkzeugs auf `true` setzen, wird es in der Web-GIS-Anwendung verfügbar gemacht. Bitte beachten Sie, dass einige Werkzeuge auch von anderen Parametern abhängen (z.B. von der Abfragefähigkeit eines Layers).

Dies ist eine vollständige Liste der Werkzeuge, die konfiguriert werden können:

|Werkzeug|Konfig Schlüssel|Beschreibung|
|---|---|---|
|`measure_tools`|`visible`|Aktivieren des Messwerkzeugs|
|`measure_tools_area`|`visible`|Aktivieren des Flächen-Messwerkzeugs|
|`measure_tools`|`visible`|Aktivieren des Strecken-Messwerkzeugs|
|`draw_tools_point`|`visible`|Aktivieren des Punkt-Zeichnen-Werkzeug|
|`draw_tools_line`|`visible`|Aktivieren des Linien-Zeichnen-Werkzeug|
|`draw_tools_polygon`|`visible`|Aktivieren des Polygon-Zeichnen-Werkzeug|
|`draw_tools_circle`|`visible`|Aktivieren des Kreis-Zeichnen-Werkzeug|
|`draw_tools_rectangle`|`visible`|Aktivieren des Rechteck-Zeichnen-Werkzeug|
|`draw_tools_annotation`|`visible`|Aktivieren des Textanmerkung-Zeichnen-Werkzeug|
|`draw_tools_modify`|`visible`|Aktivieren des Zeichnung-Bearbeiten-Werkzeugl|
|`draw_tools_upload`|`visible`|Aktivieren des Zeichnung-Hochladen-Werkzeug|
|`draw_tools_download`|`visible`|Aktivieren des Zeichnung-Herunterladen-Werkzeug|
|`draw_tools_delete`|`visible`|Aktivieren des Zeichnung-Löschen-Werkzeug|
|`draw_tools_style`|`visible`|Aktivieren des Zeichnung-Style-Werkzeug|
|`feature_info`|`visible`|Aktivieren des Sachdaten-Abfrage-Werkzeug|
|`feature_info`|`activeCopyTools`|Aktivieren des Sachdaten-Abfrage-Kopier-Werkzeug, mögliche Werte: `COPY_AS_GEOJSON`, `COPY_AS_OBJECT`|
|`print`|`visible`|Aktivieren des Drucken-Werkzeug|
|`tree`|`visible`|Aktivieren des Themenbaums|
|`tree`|`metadataVisible`|Ob die Metadaten der Ebene über das Kontextmenü der Ebene geöffnet werden können|
|`tree`|`showLegends`|Ob die Layer-Legenden standardmäßig angezeigt werden|
|`tree`|`layerIconsVisible`|Ob Icons für abfragbar, durchsuchbar und bearbeitbare Layer angezeigt werden|
|`permalink`|`visible`|Aktivieren des Permalink/Teilen-Werkzeug|
|`language_selector`|`visible`|Aktivieren des Sprachwechslers|
|`map_toolbar`|`visible`|Aktivieren der Karten-Buttons für für Zoom und GPS Location|
|`search`|`engines`|Aktivieren der Suchmaschine, mögliche Werte: `nominatim`, `wfs`|

Wichtig: Wenn Sie die Konfiguration leer lassen, sind standardmäßig alle Werkzeuge verfügbar. Sobald ein Werkzeug zur Konfiguration hinzugefügt wird, sind alle anderen Werkzeuge nicht mehr verfügbar, bis sie ebenfalls explizit hinzugefügt werden.

## Berechtigungen

Je nach Konfiguration der Instanz können Berechtigungen auf Nutzer, Gruppen oder Rollen gesetzt werden.

Im Folgenden wird die Konfiguration der Berechtigungen am Beispiel von Benutzern beschrieben. Die Konfiguration für Gruppen oder Rollen verhält sich gleich.

Im Feld Benutzerrechte können die Benutzer für die jeweiligen Anwendungen aktiviert und mit Benutzerrechten versehen werden.

![admin-client](/img/user_permissions_admin_de.png)

Wenn Sie auf die Schaltfläche ![admin-client](/img/plus.png) klicken, öffnet sich ein neues Fenster mit zwei Eingabefeldern: 

![admin-client](/img/add_permission_admin_de.png)

Nach Eingabe des Nutzernamens oder der E-Mail-Adresse eines Benutzers können diesem verschiedene Berechtigungen zugewiesen werden. Die folgenden Berechtigungen sind verfügbar:

|Key|Description|
|---|---|
|`Read`|Alle authentifizierten Benutzer können auf die Web-GIS-Anwendung zugreifen|
|`Update`|Wenn gesetzt, kann der Benutzer die Anwendungskonfiguration ändern|
|`Update & Delete`|Wenn gesetzt, kann der Benutzer die Anwendung ändern und vollständig löschen.|
|`Owner`|Wenn gesetzt, kann der Benutzer die JSON-Dateien, die das Web-GIS konfigurieren, ändern und löschen und neuen Benutzern Berechtigungen erteilen.|

Jeder in der Berechtigungs-Tabelle aufgeführte Benutzer hat Zugriff auf die entsprechende Applikation. Andere Berechtigungen als `Read` betreffen nur Benutzer, die auch die Rolle `Admin` haben, da nur diese Benutzer auf den Admin-Client zugreifen und somit die Konfigurationen ändern können.

