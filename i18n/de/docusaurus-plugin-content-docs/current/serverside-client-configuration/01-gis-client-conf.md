## Serverseitige Client-Konfiguration

Eine Liste von globalen Einstellungen für den Client, die über die Datei `gis-client-config.js` konfiguriert werden können:

|Name|Beschreibung|Standardeintrag|
|---|---|---|
|`shogunBase`|Die Basis-URL von SHOGun, z.B. /api oder https://my-shogun.org/. Wenn sie auf false gesetzt ist, werden keine SHOGUN-Anfragen von der Anwendung gestellt.|'/'|
|`keycloak.enabled`|Ob Keycloak für die Authentifizierung verwendet wird oder nicht. Normalerweise sollte dies nur auf false gesetzt werden, wenn nur der Client-Modus verwendet wird oder wenn keine Authentifizierung für den Zugriff auf SHOGun-Endpunkte benötigt wird|false|
|`keycloak.host`|Der Keycloak-Host, z.B. https://localhost/auth|null|
|`keycloak.realm`|Der Keycloak-Realm, der für die Authentifizierung verwendet werden soll, z.B. SHOGun|null|
|`keycloak.clientId`|Der Keycloak-Client, der für die Authentifizierung verwendet werden soll, z.B. shogun-client|null|
|`keycloak.onLoadAction`|Siehe hier für Details|'check-sso'|
|`print.url`|Die URL des MapFish Print Servlet|'/print'|
|`plugins`|Die Liste der zu ladenden Plugins|`[]`|
|`plugin.name`|Der Name des Plugins|undefined|
|`plugin.exposedPaths`|Die Liste der exponierten Pfade|undefined|
|`plugin.resourcePath`|Der Ressourcenpfad|undefiniert|
|`geoserver.base`|Die Basis-URL des GeoServers|`/geoserver`|
|`geoserver.upload.workspace`|Der Arbeitsbereich, in dem die Uploads abgelegt werden sollen|'SHOGUN-UPLOADS'|
|`geoserver.upload.limit`|Das Limit für die Uploadgröße in Bytes (Achtung: dies ist nur die Client-Auswertung!)|200000000 (= 200MB)|
|`geoserver.upload.authorizedRoles`| Die Liste der Rollennamen, für die der Upload erlaubt/sichtbar sein soll (Achtung: dies ist nur die Client-Auswertung!)|['admin']|
|`search.nominatimUrl`|Url zu einer Nominatim-Instanz.|'https://'|
|`search.solrBasisPfad`|Basispfad zu einer Solr-Instanz.|'/search/query'|
|`search.coreName`|Name des Solr-Kerns.|'search'|
|`search.defaultUseViewBox`|Ob die Suche auf die aktuelle Viewbox beschränkt ist.|true|
|`search.activateLayerOnClick`|aktiviert die activateLayerOnClick-Konfiguration per Voreinstellung.|true|
|`search.showSearchResultDrawer`|Ob die Ergebnisse der Suche in eine, separaten Bereich auf der rechten Seite angezeigt werden sollen oder nicht.|false|
|`search.groupByCategory`|Gruppiert Suchergebnisse nach dem Textfeld „Kategorie“. Wenn deaktiviert, wird stattdessen der Ebenentitel verwendet.|true|
|`search.useSolrHighlighting`|Hervorhebung von Solr-Suchergebnissen aktivieren/deaktivieren.|true|
|`search.delay`|Verzögerung in Millisekunden, bevor die Suche ausgelöst wird.|1000|
|`search.minChars`|Mindestlänge des Suchbegriffs, damit die Suche ausgelöst wird.|3|
|`search.solrQueryConfig.queryParser`|Solr-Abfrage-Parser. Muss entweder ‚lucene‘, ‚dismax‘ oder ‚edismax‘ sein|'edismax'|
|`search.solrQueryConfig.rowsPerQuery`|Anzahl der angeforderten Zeilen pro Solr-Abfrage.|100|
|`search.solrQueryConfig.tagPre`|HTML-Tag vor der Suchmarkierung angewendet.|`<b>`|
|`search.solrQueryConfig.tagPost`|HTML-Tag wird nach dem Suchhighlight angewendet.|`</b>`|
|`search.solrQueryConfig.requireFieldMatch`|Nur Abfragebegriffe, die mit dem hervorgehobenen Feld übereinstimmen, werden hervorgehoben.
|`featureEditRoles.authorizedRolesForCreate`|Die Liste der Rollennamen, für die die Feature-Editierwerkzeuge einschließlich der Erstellungsoptionen erlaubt/sichtbar sein sollen (Hinweis: dies ist nur die Client-Auswertung!). Zeichenketten und reguläre Ausdrücke werden unterstützt.|`[]`|
|`featureEditRoles.authorizedRolesForUpdate`|Die Liste der Rollennamen, für die die Feature-Editierwerkzeuge einschließlich der Update-Optionen erlaubt/sichtbar sein sollen (Hinweis: dies ist nur die Client-Auswertung!). Strings und reguläre Ausdrücke werden unterstützt.|`[]`|
|`featureEditRoles.authorizedRolesForDelete`|Die Liste der Rollennamen, für die die Feature-Bearbeitungstools einschließlich der Löschoptionen erlaubt/sichtbar sein sollen (Hinweis: dies ist nur die Client-Auswertung!). Es werden String und reguläre Ausdrücke unterstützt.|`[]`|
|`wfsLockFeatureEnabled`|Ob WFS LockFeature während der Bearbeitung von Merkmalen aktiviert ist oder nicht.|false|
|`documentationButtonVisible`|Ob die Schaltfläche im Benutzermenü zum Öffnen der Dokumentation sichtbar ist oder nicht.|true|
|`enableFallbackConfig`|Ob die Standard-Anwendungskonfiguration ohne vorgegebene Anwendungs-ID geladen werden soll oder nicht.|true|
