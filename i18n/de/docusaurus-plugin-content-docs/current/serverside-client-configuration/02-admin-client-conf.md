## Serverside Admin Konfigurationen

A list of global settings for the admin-client which can be configured via the `admin-client-config.js` file:


|Name|Beschreibung|Standard|
|---|---|---|
|`shogunApplicationConfig -> appPrefix`|Der Pfad zur Anwendung, das Präfix, das in der Adressleiste erscheint, wenn die Anwendung geöffnet ist|'/admin'|
|`shogunApplicationConfig -> defaultPageSize`|Die Anzahl der angezeigten Einträge pro Seite|10|
|`shogunApplicationConfig -> path -> modelConfigs`|Der Pfad zu den Modellkonfigurationen auf Ihrem Host|`'/'`|
|`shogunApplicationConfig -> path -> shogunBase`|Der Pfad zur shogunbase auf Ihrem Rechner|`'/'`|
|`shogunApplicationConfig -> path -> logo`|Der Pfad zu dem vom Admin-Client verwendeten Logo|null|
|`security -> keycloak -> enabled`|Konfigurieren, ob keycloak aktiviert ist|true|
|`Sicherheit -> Keycloak -> Host`|Die URL für den Keycloak-Host|'https://localhost/auth'|
|`Sicherheit -> Keycloak -> Realm`|Der zu verwendende Keycloak-Realm|``|
|`security -> keycloak -> clientId`|Die ID des Clients, der den Benutzer zur Authentifizierung anfordert|'shogun-admin'|
|`security -> keycloak -> authorizedRoles`|Die Liste der Rollen mit Zugriffsrechten|`[]`|
|`geoserver -> base`|Der Pfad zum Geoserver auf Ihrem Host|`'/'`|
|`geoserver -> upload -> buttonVisible`|Konfigurieren, ob der Ebenen-Upload-Button sichtbar ist|false|
|`geoserver -> upload -> workspace`|Der Bereich, der verwendet werden soll, z.B. 'SHOGUN'|null|
|`geoserver -> upload -> limit`|Der maximal zugewiesene Speicherplatz|200000000 [~200MB]|
|`Modelle`|Die Liste der verfügbaren Modelle, z.B. Anwendungen, Ebenen, Benutzer usw.|`[]`|
|`Dashboard -> Nachrichten -> sichtbar`|Konfigurieren, ob die Nachrichten sichtbar sind|true|
|`Dashboard -> Statistiken -> sichtbar`|Die Sichtbarkeit der Liste der Anwendungsstatistiken|false|
|`Dashboard -> Anwendungen -> sichtbar`|Die Sichtbarkeit der Liste der im Dashboard verfügbaren Anwendungen|true|
|`Dashboard -> Ebenen -> sichtbar`|Die Sichtbarkeit der Liste der hochgeladenen Ebenen|true|
|`Dashboard -> Benutzer -> sichtbar`|Die Sichtbarkeit der Liste der Benutzer im System|wahr|
|`Navigation -> Allgemein -> Bilddateien -> sichtbar`|Die Liste der Bilddateien, die vom Benutzer hochgeladen wurden|true|
|`Navigation -> Status -> Metriken -> sichtbar`|Konfigurieren, ob Statusmetriken sichtbar sind|true|
|`Navigation -> Status -> Logs -> sichtbar`|Konfigurieren, ob Statusprotokolle sichtbar sind|true|
|`Navigation -> Einstellungen -> Global -> sichtbar`|Konfigurieren, ob globale Einstellungen sichtbar sind|wahr|.
|`Navigation -> Einstellungen -> Logging-Level -> Sichtbar`|Konfigurieren, ob Protokolle sichtbar sind|wahr|
|`Navigation -> Einstellungen -> Graphiql -> sichtbar`|Konfigurieren, ob Graphiql sichtbar ist|True|
|`Navigation -> Einstellungen -> Swagger -> sichtbar`|Konfigurieren, ob Swagger sichtbar ist|wahr|
