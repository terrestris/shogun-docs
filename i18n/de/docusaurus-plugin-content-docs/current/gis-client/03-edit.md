# Editieren von Objekten
***

Sofern es für die eigene Rolle und die dargestellten Objekte konfiguriert ist, können die in der Karte dargestellten Objekte auch editiert werden.

Es gibt zwei Möglichkeiten, um Objekte zu editieren:

1. Aus dem [Themenbaum](../gis-client/toolbox/layertree) heraus, durch Auswahl des Eintrags "Layer bearbeiten" im Kontextmenü des entsprechenden Layers/Themas
2. Aus der Ansicht der [Detailinformationen](../gis-client/toolbox/query-map-features) heraus

**Vorgehen bei Variante 1:**

Nach Auswahl der Option "Layer bearbeiten" im Kontextmenü des Layers/Themas öffnet sich in einem Panel auf der rechten Seite der Applikation der Objekteditor:

![gis-client](/img/objekteditor.png)

Durch Klicken auf das gewünschte Objekt in der Karte kann ein vorhandenes Objekt selektiert werden. Bei entsprechender Berechtigung kann auch ein neues Objekt erstellt werden. Diese Funktion steht aber nicht jedem Nutzer zur Verfügung.

Nach Auswahl des gewünschten Objekts in der Karte bietet der Objekteditor alle für die Editierung konfigurierten Attribute zur Editierung an:

![gis-client](/img/editor_edit.png)

Es gibt verschiedene Eingabefelder:

* In normale Textfelder kann der gewünschte Text eingetragen werden.
* In manche Felder kann ein größerer Textblock eingetragen werden, dann ist das Feld entsprechend größer.
* Bei Attributen mit Auswahllisten öffnet sich nach Klick auf den Feldwert die Liste mit den möglichen Werten, es kann nun ein Wert angeklickt werden.
* Bei Ja/Nein-Feldern wird eine Checkbox dargestellt, die nach Bedarf an- oder ausgehakt werden kann.
* Bei Zahlenfeldern kann die gewünschte Zahl eingetragen werden oder über die Pfeile am Ende des Feldes hoch- oder herabgesetzt werden.
* Bei Datumsfeldern öffnet sich bei Klick in das Feld ein Datepicker, aus dem das gewünschte Datum ausgewählt werden kann.
* Bei Feldern zum Hochladen von Bildern kann auf die Schaltfläche "Bilder hochladen" geklickt werden und es können ein oder mehrere Bilddateien ausgewählt werden (erlaubt sind JPG, PNG und TIFF).
* Bei Feldern zum Hochladen von Dokumenten kann auf die Schaltfläche "Dateien hochladen" geklickt werden und es können ein oder mehrere Dokumente ausgewählt werden (erlaubt sind XLS, XLSX, XLSM, DOC, DOCX und PDF).

Felder, die bei der Eingabe verpflichtend sind, sind mit einem roten Sternchen gekennzeichnet.

Nach Eingabe aller gewünschten Attribute kann die Editierung über die Schaltfläche "Speichern" gespeichert werden. Sollten Pflichtfelder nicht ausgefüllt sein, ist das Speichern nicht möglich.

Über die Schaltfläche "Zurücksetzen" können die editierten Felder zurückgesetzt werden, sofern nicht schon zuvor auf "Speichern" geklickt wurde.

:::info

Nutzern mit erweiterten Berechtigungen steht hier zusätzlich auch die Möglichkeit zur Verfügung, über die Schaltfläche "Objekt löschen" das komplette Objekt dauerhaft aus dem System zu entfernen.

:::

**Vorgehen bei Variante 2:**

Nach Klick auf die Editierfunktion ![gis-client](/img/fi_edit.png) in der [Sachdatenabfrage](../gis-client/toolbox/query-map-features) öffnet sich direkt der Objekteditor und bietet alle für die Editierung konfigurierten Attribute dieses Objekts zur Editierung an. Alle weiteren Funktionen sind identisch zu Variante 1 (Beschreibung siehe oben)

**Neue Objekte erfassen (aus Variante 1 heraus)**

:::info

Diese Funktion steht nur Nutzern mit erweiterten Berechtigungen zur Verfügung.

:::

Bei Auswahl der Funktion "Neues Objekt erstellen" öffnet sich der Objekteditor mit dem leeren Eingabeformular für das neue Objekt. Hier können nun die notwendigen Attribut-Eingaben vorgenommen werden. Dies verhält sich analog zur Editierung eines vorhandenen Objekts.

Damit das neue Objekt auch einen räumlichen Bezug in der Karte erhält, muss eine Geometrie für das neue Objekt gezeichnet werden. Dazu befinden sich links am Panel des Objekteditors die entsprechenden Werkzeuge:

![gis-client](/img/geomtools.png)

Die Werkzeuge haben folgende Funktionen:

* Neue Geometrie zeichnen
* Geometrie editieren
* Geometrie löschen
* letzte Aktion rückgängig machen
* letzte Aktion wiederherstellen

Änderungen an der Geometrie werden, wie auch die Attributeingaben, über den zentralen "Speichern"-Knopf im Objekteditor persistiert.

**Geometrien von vorhandenen Objekten editieren**

:::info

Diese Funktion steht nur Nutzern mit erweiterten Berechtigungen zur Verfügung.

:::

Hat der Nutzer die entsprechenden Berechtigungen für die Geometrie-Editierung, dann finden sich links am Panel des Objekteditors die entsprechenden Werkzeuge:

![gis-client](/img/geomtools.png)

Die Werkzeuge haben folgende Funktionen:

* Neue Geometrie zeichnen
* Geometrie editieren
* Geometrie löschen
* letzte Aktion rückgängig machen
* letzte Aktion wiederherstellen

Änderungen an der Geometrie werden, wie auch die Attributeingaben, über den zentralen "Speichern"-Knopf im Objekteditor persistiert.
