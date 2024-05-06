# Sachdatenabfrage / Feature Info
***

Mit dem Werkzeug "Karteninhalte abfragen" können detaillierte Informationen zu den Objekten der angezeigten Ebenen in der Karte abgefragt werden, sofern die Themen in der Karte aktiv und zur Abfrage verfügbar sind.

Ein Klick auf das Werkzeug aktiviert die Sachdatenabfrage.

![gis-client](/img/query_tool_de.png) 

Per Mausklick kann das gewünschte Ebenenobjekt in der Karte ausgewählt. Wenn Informationen zu diesem Objekt gefunden werden, werden diese direkt im Werkzeugfenster angezeigt.

![gis-client](/img/query_result_de.png) 

Werden an der angeklickten Stelle in der Karte Objekte aus mehreren Ebenen gefunden, werden die Ergebnisse für die einzelnen Ebenen in verschiedenen Registerkarten angezeigt. Diese Registerkarten können einzeln angeklickt werden. Im obigen Beispiel wurde nur ein Ergebnis für den Layer "Countries" gefunden.

Werden an einem angeklickten Punkt innerhalb einer Ebene mehrere Objekte gefunden, können diese in der entsprechenden Registerkarte der Ebene durchgeblättert werden. Dort wird auch angezeigt, für wie viele
Obkete die  Sachdatenabfrage gerade geöffnet ist:

![gis-client](/img/pager.png)

:::info

Beachten Sie, dass die Ebenen, die Sie abfragen möchten, diese zusätzliche Informationen enthalten müssen und in der Anwendung als abfragbar konfiguriert sein müssen. 

:::

Schließt man das Tool, wird es automatisch deaktiviert.

<!-- <ReactPlayer controls width="max" height="max" url="/shogun-docs/videos/getfeatureinfo.mp4" /> -->

