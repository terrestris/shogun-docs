# Themen
***

Unter dem Menüpunkt *Themen* können neue Layer für die Applikationen persistiert werden, z.B. aus externe WMS oder dem projekteigenen GeoServer, auch eigene Raster- oder Vektordaten können importiert werden. Darüber hinaus können für jeden Layer verschiedene Einstellungen vorgenommen werden.

![admin-client](/img/layers_overview_de.png)

Bestehende Themen können durch Klicken in die entsprechende Zeile in der Themenliste geändert werden. Um einen neuen Layer hinzuzufügen, klicken Sie auf den Button "Thema erstellen".

Der Import von Raster- oder Vektordaten erfolgt über den "Thema hochladen"-Button.

Sobald ein Thema geändert wurde, kann es gespeichert werden über den "Thema speichern"-Button.

Nicht gespeicherte Änderungen können zurückgesetzt werden über den "Thema zurücksetzen"-Button.

Beim Anlegen/Bearbeiten eines Themas muss neben dem Namen und dem Typ (kann aus der Vorschlagsliste ausgewählt werden) auch das Feld *Datenquelle* ausgefüllt werden.

## Konfiguration

Dieses Feld speichert die Konfiguration für das jeweilige Thema im JSON-Format und könnte wie folgt aussehen:

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

Dies ist eine vollständige Liste der Parameter, die bearbeitet werden können:

|Key|Beschreibung|Beispiel|Benötigt|
|---|---|---|---|
|`crossOrigin`|Setzen Sie diesen Wert auf 'anonymous', wenn Sie bei der Abfrage eines Layers in der Web-GIS-Anwendung auf Probleme stoßen. Normalerweise wollen Sie diesen Wert nicht überschreiben.|'anonymous'|false|
|`downloadConfig`|Liste der Download-Konfigurationen. Wenn gesetzt, erscheint ein neuer Menüpunkt innerhalb des Layerbaums zum Herunterladen des Layers|https://example.com/geoserver/SHOGUN/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application%2Fjson|false|
|`downloadConfig -> downloadUrl`|URL, die das Herunterladen der Layer-Daten ermöglicht|s.o.|false|
|`downloadConfig -> formatName`|Der angezeigte Formatname für die angegebene DownloadUrl. Wenn er nicht festgelegt ist, wird er auf "XML" gesetzt.|'GeoJSON'|false|
|`hoverable`|Legt fest, ob Kartenmerkmale mit dem FeatureInfo Werkzeug abgefragt werden können.|true|false|
|`maxResolution`|Die maximale Auflösung des Layer (bis zu welcher Auflösung/Zoomstufe die Ebene sichtbar sein soll)|100000|false|
|`minResolution`|Die Mindestauflösung des Layer (bei welcher Auflösung/Zoomstufe die Ebene sichtbar werden soll)|10000|false|
|`opacity`|Legt die anfängliche Deckkraft für den Layer in einem Bereich von 0-1 fest.|0.5|false|
|`propertyConfig`|Wird momentan nicht genutzt||false|
|`searchable`|Wird momentan nicht genutzt||false|
|`searchConfig`|Wird momentan nicht genutzt||false|
|`searchable`|Legt fest, ob der Layer durchsuchbar ist||false|
|`searchConfig`|Legt fest, welche Attribute bei der Suche durchsuchbar sind ||false|
|`displayTemplate`|Legt das Anzeigetemplate für die Suchergebnisse fest|`Name: <b>{name}</b>, Adresse: <em>{adresse}</em>`|false|
|`featureInfoFormConfig`|Legt fest, welche Attribute in der Anzeige von FeatureInfo angezeigt werden, weitere Details finden sich [hier](#featureinfoformconfig)|[hier](#featureinfoformconfig)|false|
|`editable`|Legt fest, ob der Layer editierbar ist, gilt nur für interne GeoServer-Layer, die über WFS-T schreibbar sind|true|false|
|`editFormConfig`|Legt fest, welche Attribute im Editierformular angezeigt werden, weitere Details finden sich [hier](#editformconfig)| [hier](#editformconfig) |false|


### featureInfoFormConfig

Hier kann abweichend von der generischen Anzeige der Sachdateninformation konfiguriert werden, welche Attribute eines Layers mit welcher Beschriftung angezeigt werden sollen. Wird die featureInfoFormConfig für einen Layer nicht konfiguriert, dann greift die generische Anzeige, die alle Attribute des Layers tabellarisch als key-value-Paare anzeigt.

Die Struktur von featureInfoFormConfig kann folgendermaßen aussehen:

```
{
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

Die Feature-Info-Anzeige kann in beliebig viele Tabs aufgeteilt werden. Diese werden jeweils auf oberster Ebene durch einen Titel definiert und haben dann beliebig viele Kindknoten mit den einzelnen Attributen.
Für die Kindknoten wird jeweils der `propertyName`, der den Namen des Attributs aus dem Dienst enthält sowie der `displayName`, der den gewünschten Anzeigenamen beinhaltet, vergeben. Sollten verschiedene Stilarten für die Feldanzeigen vorliegen, kann dies über die `fieldProps` gesetzt werden.


Im folgenden Beispiel wird ein Tab mit dem Titel "Adresse" definiert. In diesem Tab gibt es ein Attribut, welches auf das Feld "adresse" zeigt und in der Sachdateninformation in der Applikation angezeigt werden soll als "Adresse".
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

Über die editFormConfig kann ein Eingabeformular für einen Layer für die Editierung konfiguriert werden.

Die Struktur von editFormConfig kann folgendermaßen aussehen:
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
Das Editierformular kann in beliebig viele Tabs aufgeteilt werden. Diese werden jeweils auf oberster Ebene durch einen Titel definiert und haben dann beliebig viele Kindknoten mit den einzelnen Attributen. Für die Kindknoten wird jeweils der `propertyName`, der den Namen des Attributs aus dem Dienst enthält sowie der `displayName`, der den gewünschten Anzeigenamen beinhaltet, vergeben. Dies ist analog zur `featureInfoFormConfig`.

Zusätzlich können weitere Konfigurationsparameter gesetzt werden.

```
{
  "propertyName": "id",
  "displayName": "ID",
  "component": "INPUT",
  "readOnly": false,
  "required": true
}
```

`required` ist optional und legt fest, ob das Attribut ausgefüllt werden muss oder optional ausgefüllt werden kann. Der Default dieses Parameters ist `false`.

`readOnly` ist optional und legt fest, ob das Attribut bearbeitet werden kann. Ist "readOnly": true, kann das Attribut nicht bearbeitet werden.

Durch `component` kann der Ausgabetyp angegeben werden.
Alle Typen besitzen die gleiche Struktur.

Die Ausnahme bildet "SELECT", welches durch "fieldProps" ergänzt werden muss, in welchem die Optionen stehen, die dem Nutzer in der Auswahlliste zur Verfügung stehen sollen.

Es gibt insgesamt 8 Ausgabetypen, die hier beschrieben werden:

|Key|Beschreibung|
|---|---|
|`CHECKBOX`|Es wird eine Checkbox angezeigt, in der ein Häkchen gesetzt werden kann|
|`DATE`|Es kann ein Datum über einen Datepicker eingegeben werden|
|`INPUT`|Es kann ein Text in ein normales Textfeld eingegeben werden|
|`NUMBER`|Es können Zahlen eingegeben werden|
|`SELECT`|Dropdown-Menü. Wenn dieser Typ ausgewählt ist, erscheint ein Dropdown-Menü, welches wie im oberen Beispiel mit "fieldProps" konfiguriert werden muss|
|`SWITCH`|Schalter für Wechsel zwischen true/false|
|`TEXTAREA`|Kann bei längeren Texten benutzt werden|
|`UPLOAD`|Bietet für die definierten Upload-Felder die Möglichkeit zum Hochladen an|
|`REFERENCE_TABLE`|Bietet für 1:n-Attribute eine Konfigurationsmöglichkeit|

## Datenquelle

Dieses Feld definiert die Quelle des Themas im JSON-Format. Je nach Art des Layers unterscheidet sich die Datenstruktur:


```
{
  "url": "/geoserver/ows?",
  "layerNames": "SHOGUN:airports",
  "useBearerToken": true
}
```

Dies ist eine vollständige Liste der Parameter, die gesetzt werden können:

|Key|Beschreibung|Beispiel|Benötigt|
|---|---|---|---|
|`url`|Die Basis-URL des Layers|/geoserver/ows?|true|
|`layerNames`|Eine durch Kommata getrennte Liste der anzufordernden Layer|'SHOGUN:airports'|true|
|`attribution`|Der Urheberrechtsvermerk, der für diesen Layer angezeigt werden soll. Es wird in der unteren Ecke der Karte wiedergegeben|`&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>`|false|
|`useBearerToken`|Ob das (interne) Keycloak Bearer Token zusammen mit den Kartenanfragen gesendet werden soll oder nicht. Muss auf 'true' gesetzt werden, wenn ein geschützter Layer vom internen GeoServer angefordert wird.|true|false|
|`legendUrl`|Eine URL zu einem benutzerdefinierten Legendenbild, das im Layertree angezeigt wird|https://ows.terrestris.de/ows/my-legend.png|false|
|`matrixSet`|Bezeichner des Tile Matrix Set, der das CRS bestimmt, in das der Layer exponiert werden soll. Muss eine der aufgelisteten Tile Matriyen für die Layer sein: Einzelheiten siehe hier: https://gdal.org/drivers/raster/wmts.html |'WEBMERCATOR'|false|
|`requestParams`|Abfrageparameter, die an den Kartenserver übergeben werden, wenn ein Layer z.B. über GetMap abgefragt wird. Dies kann nützlich sein, wenn Sie serverspezifische Parameter übergeben wollen|'\{\"transparent\": true\}'|false|
|`resolutions`|Die Liste der Auflösungen, für die der Layer angefordert werden soll|'[2445.9849047851562, 1222.9924523925781, 611.4962261962891]'|false|
|`tileOrigin`|Ursprung des Kachelrasters. Normalerweise wollen Sie keinen eigenen Wert festlegen||false|
|`tileSize`|Legt die Kachelgröße fest. Standard ist 256|512|false|
