## Serverseitige Client-Konfiguration

Eine Liste von globalen Einstellungen für den Client, die über die Datei `gis-client-config.js` konfiguriert werden können:

|Name|Beschreibung|Standardeintrag|
|---|---|---|
|`shogunBase`|Die Basis-URL von SHOGun, z.B. /api oder https://my-shogun.org/. Wenn sie auf false gesetzt ist, werden keine SHOGUN-Anfragen von der Anwendung gestellt.|'/'|
|`keycloak -> enabled`|Ob Keycloak für die Authentifizierung verwendet wird oder nicht. Normalerweise sollte dies nur auf false gesetzt werden, wenn nur der Client-Modus verwendet wird oder wenn keine Authentifizierung für den Zugriff auf SHOGun-Endpunkte benötigt wird|false|
|`keycloak -> host`|Der Keycloak-Host, z.B. https://localhost/auth|null|
|`keycloak -> realm`|Der Keycloak-Realm, der für die Authentifizierung verwendet werden soll, z.B. SHOGun|null|
|`keycloak -> clientId`|Der Keycloak-Client, der für die Authentifizierung verwendet werden soll, z.B. shogun-client|null|
|`keycloak -> onLoadAction`|Siehe hier für Details|'check-sso'|
|`print -> url`|Die URL des MapFish Print Servlet|'/print'|
|`plugins`|Die Liste der zu ladenden Plugins|`[]`|
|`plugin -> name`|Der Name des Plugins|undefined|
|`plugin -> exposedPaths`|Die Liste der exponierten Pfade|undefined|
|`plugin -> resourcePath`|Der Ressourcenpfad|undefiniert|
|`geoserver -> base`|Die Basis-URL des GeoServers|`/geoserver`|
|`geoserver -> upload -> workspace`|Der Arbeitsbereich, in dem die Uploads abgelegt werden sollen|'SHOGUN-UPLOADS'|
|`geoserver -> upload -> limit`|Das Limit für die Uploadgröße in Bytes (Achtung: dies ist nur die Client-Auswertung!)|200000000 (= 200MB)|
|`geoserver -> upload -> authorizedRoles`| Die Liste der Rollennamen, für die der Upload erlaubt/sichtbar sein soll (Achtung: dies ist nur die Client-Auswertung!)|['admin']|
|`Suche -> nominatimUrl`|Url zu einer Nominatim-Instanz.|'https://'|
|`Suche -> solrBasisPfad`|Basispfad zu einer Solr-Instanz.|'/search/query'|
|`Suche -> coreName`|Name des Solr-Kerns.|'search'|
|`search -> defaultUseViewBox`|Ob die Suche auf die aktuelle Viewbox beschränkt ist.|true|
|`search -> activateLayerOnClick`|aktiviert die activateLayerOnClick-Konfiguration per Voreinstellung.|true|
|`search -> groupByCategory`|Groups search results by 'category' text field. If disabled, the layer title will be used instead.|true|
|`search -> useSolrHighlighting`|Enable/disable solr search result highlighting.|true|
|`search -> delay`|Delay in milliseconds before search is triggered (debouncing).|1000|
|`search -> minChars`|Minimum search term length for the search to be triggered.|3|
|`search -> solrQueryConfig -> queryParser`|Solr query parser. Must be either 'lucene', 'dismax' or 'edismax'|'edismax'|
|`search -> solrQueryConfig `-> rowsPerQuery|Number of requested rows per solr query.|100|
|`search -> solrQueryConfig -> tagPre`|HTML tag applied before search highlight.|`<b>`|
|`Suche -> solrQueryConfig -> tagPost`|HTML-Tag wird nach dem Suchhighlight angewendet.|`</b>`|
|`search -> solrQueryConfig -> requireFieldMatch`|Nur Abfragebegriffe, die mit dem hervorgehobenen Feld übereinstimmen, werden hervorgehoben.
|`featureEditRoles -> authorizedRolesForCreate`|Die Liste der Rollennamen, für die die Feature-Editierwerkzeuge einschließlich der Erstellungsoptionen erlaubt/sichtbar sein sollen (Hinweis: dies ist nur die Client-Auswertung!). Zeichenketten und reguläre Ausdrücke werden unterstützt.|`[]`|
|`featureEditRoles -> authorizedRolesForUpdate`|Die Liste der Rollennamen, für die die Feature-Editierwerkzeuge einschließlich der Update-Optionen erlaubt/sichtbar sein sollen (Hinweis: dies ist nur die Client-Auswertung!). Strings und reguläre Ausdrücke werden unterstützt.|`[]`|
|`featureEditRoles -> authorizedRolesForDelete`|Die Liste der Rollennamen, für die die Feature-Bearbeitungstools einschließlich der Löschoptionen erlaubt/sichtbar sein sollen (Hinweis: dies ist nur die Client-Auswertung!). Es werden String und reguläre Ausdrücke unterstützt.|`[]`|
|`wfsLockFeatureEnabled`|Ob WFS LockFeature während der Bearbeitung von Merkmalen aktiviert ist oder nicht.|false|
|`documentationButtonVisible`|Ob die Schaltfläche im Benutzermenü zum Öffnen der Dokumentation sichtbar ist oder nicht.|true|
|`enableFallbackConfig`|Ob die Standard-Anwendungskonfiguration ohne vorgegebene Anwendungs-ID geladen werden soll oder nicht.|true|
