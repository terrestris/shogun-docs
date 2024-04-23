# Karten
***

Dieser Menüpunkt, der "Karten" heißt, enthält den Themenbaum der Anwendung sowie weitere Funktionen zum Ergänzen von Daten.

## Themenbaum

Der Themenbaum enthält alle für die Anwendung konfigurierten Ebenen in einer Ordnerstruktur. Der Themenbaum organisiert die Layerhierarchie. Layer, die im Themenbaum an erster Stelle stehen, werden auf der obersten Ebene der Karte angezeigt. 

![gis-client](/img/layertree_de.png)

**Aktivierung/Deaktivierung**: Über das Kontrollkästchen vor dem jeweiligen Element können Ebenen oder Ordner für die Karte aktiviert oder deaktiviert werden.

**Transparenz**: Es ist möglich, die Transparenz einer aktivierten Ebene in der Karte mit einem Schieberegler einzustellen. Wird der Schieberegler nach rechts verschoben, erhöht sich die Transparenz. Dadurch werden Informationen, die unter den Objekten dieses Layers liegen, sichtbar. Beim Starten der Anwendung ist die Transparenz bei allen Layern Null.

**Reihenfolge ändern**: Die Ebenen können innerhalb des Layerbaums per Drag & Drop verschoben werden, um die Reihenfolge der Ebenen in der Karte zu ändern. Dazu kann eine Ebene per Mausklick selektiert und bei gehaltener linker Maustaste an die gewünschte Stelle verschoben werden. 

:::info
Diese Änderungen sind nicht persistent und gelten daher nur für die aktuelle Sitzung.
:::


**Kontextmenü**: Über das ![gis-client](/img/context_layer.png) Symbol hinter jeder Ebene kann ein zusätzliches Kontextmenü für jede Ebene geöffnet werden. Je nach Konfiguration der Ebene kann dieses Menü die folgenden Funktionen enthalten:

* die Option, die Karte auf den Standardmaßstab des Themas zu zoomen ("Auf Layerausdehnung zoomen"); der Kartenausschnitt wird so eingestellt, dass alle Objekte des Layers enthalten sind.
* die Option, die Legende anzuzeigen; die Legende wird dann unterhalb des Transparenz-Schiebereglers der Ebene angezeigt und kann mit der gleichen Methode im Kontextmenü auch wieder deaktiviert werden ("Legende ausblenden")
* die Möglichkeit, das Thema herunterzuladen/zu exportieren, falls konfiguriert ("Layer exportieren")
* die Möglichkeit, das Thema zu bearbeiten, falls konfiguriert ("Layer bearbeiten")
* die Möglichkeit, die Eigenschaften der Ebene einzusehen ("Eigenschaften")

## WMS-Dienste hinzufügen

Außerdem ist es möglich, neue WMS-Dienste zum Layertree hinzuzufügen. Dafür gibt es die Schaltfläche "WMS hinzufügen" unterhalb des Themenbaums. 

Mit einem Klick auf die Schaltfläche öffnet sich das entsprechende Fenster.

Zunächst muss eine gültige WMS-URL in das Textfeld eingegeben oder kopiert werden. Die Basis-URL des WMS ist ausreichend, es ist nicht notwendig, die Parameter SERVICE, VERSION und REQUEST in die URL einzufügen. Sie werden automatisch hinzugefügt. Der Benutzer kann dann entweder auf das "Lupensymbol" hinter dem Textfeld klicken oder die Eingabetaste drücken, um eine Liste der verfügbaren Ebenen zu erhalten.

Ist die Service-URL ungültig und/oder konnten keine Layer ausgelesen werden, wird der Benutzer durch eine Fehlermeldung informiert.

Wenn die WMS-URL gültig ist und die verfügbaren Layer gelesen werden konnten, werden diese in einer Auswahlliste unterhalb des Textfeldes angezeigt.

![gis-client](/img/add_wms_de.png)

Der Benutzer hat nun die Möglichkeit, die gewünschten Layer durch Anklicken der jeweiligen Checkboxen auszuwählen, um sie der Karte hinzuzufügen. Die gewünschten Layer werden über die Schaltfläche "Auswahl hinzufügen" in die Karte geladen und stehen im Themenbaum im Ordner "Externe Dienste" zur Verfügung. Über die Schaltfläche "Alle hinzufügen" können Sie auch alle Layer des WMS-Dienstes ohne Vorauswahl hinzufügen. Das Fenster schließt sich nach dem Hinzufügen der gewünschten Layer zur Karte automatisch.

:::info

Hinzugefügte externe Ebenen sind nur innerhalb der aktuellen Sitzung verfügbar.

:::

## Daten hochladen

Die Schaltfläche "Daten hochladen" befindet sich ebenfalls unterhalb des Themenbaums.

Mit einem Klick auf die Schaltfläche öffnet sich das entsprechende Fenster.

![gis-client](/img/upload_de.png)

Es ist möglich, ein Shapefile als Zipfile oder GeoTIFF hinzuzufügen. Nach erfolgreichem Hochladen der Daten werden diese in der Karte angezeigt.

:::info

Hochgeladene Daten sind nur innerhalb der aktuellen Sitzung verfügbar.

:::



