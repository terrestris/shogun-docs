# Konfiguration der Rechte/Rollen im System
***

## Keycloak

Keycloak verfügt über eine Nutzeroberfläche, über die alle relevanten Administrationseigenschaften verwaltet werden können. Die ausführliche Dokumentation ist unter [https://www.keycloak.org/docs/latest/server_admin/index.html](https://www.keycloak.org/docs/latest/server_admin/index.html) zu finden.

### Realms

Der Realm ist die Top-Level Organisationseinheit in Keycloak und summiert unter sich alle weiteren Konfigurationen wie Ressourcen. Alle relevanten Eigenschaften sind aktuell im Realm `SHOGun` vorgehalten, d.h. dieser sollte stets links oben unterhalb des Logos aus der Dropdownliste gewählt werden.

![admin-client](/img/realm.png)


### Clients

Ein Client ist eine Applikation, die eine Authentifizierung eines Users über Keycloak erfragen kann. Aktuell sind dies der GeoServer, der SHOGun-Client, der SHOGun-Admin und das SHOGun-Backend.

Die Liste der Clients kann über den Menüpunkt `Clients` der Navigationsleiste aufgerufen werden, die Eigenschaften können über einen Klick auf den Client aufgerufen und angepasst werden.

![admin-client](/img/clients.png)

### Realm Roles

Rollen identifizieren die Kategorie eines Nutzers und können in den Clients/Applikationen zur feingranularen Unterscheidung der Berechtigungen verwendet werden. Beispielsweise kann so einem Nutzer der Zugriff auf den SHOGun-Client erlaubt werden, während ihm der Zugriff auf die SHOGun-Administration verboten wird. 

Per Klick auf eine der Rollen können die spezifischen Rollendetails aufgerufen werden. Relevant ist hier im Wesentlichen die Information im Tab `Associated roles`, denn hier sind die feingranularen Berechtigungen für die einzelnen Clients zugeordnet, wie im Folgenden am Beispiel der `Admin`-Rolle ersichtlich.

![admin-client](/img/role_composite.png)

:::caution

Die bereits existierenden Realm Roles und Rollendetails sollten in jedem Fall beibehalten werden, um das erwartete Verhalten zu gewährleisten. Sie können der Orientierung dienen, um weitere Realm Rollen zu ergänzen.

:::
### Users

User/Nutzer sind die Entitäten, die berechtigt sind bzw. sein können, über Keycloak authentifiziert zu werden. 

Die Liste der existierenden Nutzer kann über den Menüpunkt `Users` der Navigationsleiste aufgerufen werden. 

![admin-client](/img/userslist.png)

Der Klick auf einen User öffnet seine Eigenschaften. Relevant in den Nutzereigenschaften ist der Tab `Role mapping`, denn hier wird dem Nutzer die gewünschte Realm Role zugewiesen, die ihn für den Zugriff auf die Komponenten berechtigt.

### Neue Rolle definieren

Um eine neue Rolle in Keycloak anzulegen, beispielsweise eine neue Rolle mit eingeschränktem Zugriff, sind folgende Schritte notwendig.

#### Neue Client-Rolle anlegen

Da für alle anderen Clients die Client-Rollen bereits vorhanden sind, ist dieser Schritt nur notwendig, wenn eine neue spezifische Client-Rolle für einen der Clients benötigt wird.

* Über den Menüpunkt `Clients` in der Navigationsleiste wird die Clientliste aufgerufen.
* Aus der Liste wird der relevante Client per Klick auf den entsprechenden Eintrag in der Tabelle aufgerufen.
* In den Client-Details wird der Tab `Roles` aufgerufen.
* Per Klick auf den Button `Create role` kann das Formular für die neue Rolle aufgerufen werden.
* Im Eingabeformular muss der `Role name` verpflichtend angegeben werden, `Description` ist optional.
* Die neue Client-Rolle kann anschließend über den Button `Save` gespeichert werden. Weitere Schritte sind hier nicht notwendig.

#### Neue Realm-Rolle anlegen

* Über den Menüpunkt `Realm roles` in der Navigationsleiste wird die Liste der Realm-Rollen aufgerufen.
* Per Klick auf den Button `Create role` kann das Formular für die neue Realm-Rolle aufgerufen werden.
* Im Eingabeformular muss der `Role name` verpflichtend angegeben werden, `Description` ist optional.
* Die neue Realm-Rolle kann anschließend über den Button `Save` gespeichert werden.
* In den nach dem Speichern-Prozess erscheinenden Rollen-Details kann dann rechts oben aus der Dropdown-Liste `Action` der Eintrag `Add associated roles` aufgerufen werden.
* Es öffnet sich ein neues Fenster mit der Liste der verfügbaren Rollenauswahl.
* Das Filterfeld `Filter by realm roles` sollte umgestellt werden auf `Filter by clients`. Im Suchfeld `Search by role name` kann auf den Wert "shogun" gefiltert werden, damit die Rollenliste nur noch die relevanten Rollen für die Zuweisung enthält.
* Nun können aus der Liste die feingranularen Berechtigungen für die einzelnen Clients zusammengestellt werden.
 * Für den Zugriff auf den `shogun-client`, die eigentliche Kartenkomponente, muss die passende `shogun-client`-Rolle zugewiesen werden.
 * Für den Zugriff auf den `shogun-geoserver`, also den GeoServer Kartenserver/Kartendienste, muss die passende `shogun-geoserver`-Rolle zugewiesen werden.
 * Zudem muss für `shogun-geoserver` auch immer zwingend die Rolle `shogun-geoserver ROLE_AUTHENTICATED`zugewiesen werden, damit ein genereller Zugriff auf GeoServer ermöglicht wird.
 * Erweiterte Client-Berechtigungen hat die Admin-Rolle, die zusätzlich einen Zugriff auf die Administrationsoberfläche `shogun-admin` und auf das SHOGun-Backend `shogun-boot` hat sowie für GeoServer mit der Rolle `shogun-geoserver ROLE_ADMINISTRATOR` hinterlegt ist. Dies gilt nicht für andere Rollen. Dies haben nur Zugriff auf die Kartenapplikation und den GeoServer bzw. die Kartendienste.
* Nach Auswahl aller benötigten Einträge aus der Liste kann die Aktion über den Button `Assign` abgeschlossen werden. Die Rollen sind nun gespeichert.

### Neuen Nutzer anlegen

Falls ein weiterer Nutzer benötigt wird, ist dies über folgende Schritte möglich:

* Über den Menüpunkt `Users` in der Navigationsleiste wird die Liste der Nutzer aufgerufen.
* Per Klick auf den Button `Add user` kann das Formular für den neuen Nutzer aufgerufen werden.
* Es müssen nur folgende Attribute im Formular belegt werden:
 * `Username`
 * `Email verified` sollte auf Yes gestellt werden.
 * `Firstname`
 * `Lastname`
* Der neue Nutzer kann anschließend über den Button `Create` gespeichert werden.
* Um anschließend noch ein Passwort für den Nutzer zu setzen, sollte dann in den Nutzerdetails auf den Tab `Credentials` gesprungen und dort der Button `Set password` betätigt werden.
* Im sich öffnenden Fenster muss nun das Passwort inkl. Bestätigung eingegeben werden. Der Schalter für `Temporary` sollte auf `Off` gestellt werden.
* Ein Klick auf den Button `Save` sowie im darauf folgenden Dialog auf  `Save password` speichert nun das Passwort für den Nutzer. Der Nutzer ist nun fertig angelegt.

### Nutzer mit Rolle versehen

Im Fall von neu erstellten Nutzern ist es notwendig, eine Rollenzuweisung für den Nutzer vorzunehmen, damit er alle Berechtigungen im System hat, die für ihn vorgesehen sind.

Dazu sind folgende Schritte notwendig:

* Über den Menüpunkt `Users` in der Navigationsleiste wird die Liste der Nutzer aufgerufen.
* Aus der Nutzer-Liste wird der gewünschte Nutzer per Klick auf den entsprechenden Eintrag in der Tabelle aufgerufen.
* In den Nutzer-Details wird der Tab `Role mapping` aufgerufen.
* Per Klick auf den Button `Assign role` kann die Liste der verfügbaren Rollen geöffnet werden. 
* Das Filterfeld sollte auf `Filter by realm roles` stehenbleiben, da nun eine Realm-Rolle zugewiesen werden soll. Bei Bedarf kann die Liste über das Suchfeld weiter eingeschränkt werden.
* Per Checkbox-Auswahl wird die gewünschte Rolle (hier gilt es, genau eine Rolle auszuwählen) selektiert.
* Nach Auswahl der gewünschten Rolle aus der Liste kann die Aktion über den Button `Assign` abgeschlossen werden. Die Rolle ist nun am Nutzer gespeichert.

Die Konfigurationsschritte im Keycloak sind somit abgeschlossen.

### Nutzern Zugriff auf Kartenapplikationen erteilen

Um dem neuen Nutzer Zugriff auf eine Kartenapplikation zu gewähren, ist nun noch folgendes im SHOGun Admin-Client notwendig. 

* Über den Menüpunkt `Applikationen` in der Navigationsleiste wird die Liste der Applikationen aufgerufen.
* Per Klick auf den gewünschten Eintrag in der Applikationsliste öffnen sich die spezifischen Einstellungen der Applikation auf der rechten Seite.
* An unterster Stelle der Einstellungen findet sich die Liste mit den Nutzerberechtigungen.
* Über den Button `+` kann der Dialog zum Hinzufügen eines neuen Nutzers geöffnet werden.
* Aus der oberen Auswahlliste wird der Nutzer ausgewählt, in der unteren Auswahlliste wird als Berechtigung `Lesen` gewählt (Nur der Admin-Nutzer hat hier erweiterten Zugriff)
* Per Klick auf den Button `OK` wird die Berechtigung an der Applikation gespeichert.
* Der Nutzer hat somit Zugriff auf die entsprechende Applikation.

Dieser Schritt ist auch in [diesem](../admin-client/instance#nutzer-berechtigungen) Abschnitt beschrieben.

## GeoServer 

### Neue Rollen im Geoserver bekannt machen

Sollten in Keycloak neue Realm-Rollen angelegt werden, die GeoServer-relevant sind, so müssen diese dem GeoServer bekannt gemacht werden. Dazu muss im GeoServer im Menü unter `Sicherheit`->`Benutzer, Gruppen, Rollen`->`Services` der Rollendienst `keycloak` einmal durch Anklicken geöffnet und nochmal gespeichert werden.

### Dienste-Absicherung über GeoServer/Geofence

GeoFence ist ein Plugin für den GeoServer, über den die Möglichkeiten zur Absicherung von Diensten erweitert werden. Die Konfiguration ist zu weiten Teilen über die GeoServer Web-UI möglich (s.o.) und kann im Detail der Dokumentation [https://docs.geoserver.org/stable/en/user/extensions/geofence/index.html](https://docs.geoserver.org/stable/en/user/extensions/geofence/index.html) entnommen werden.

Die Absicherung der Dienste im GeoServer basiert grundsätzlich auf sog. Datenregeln. Eine Regel bestimmt, wie eine Ressource des GeoServers eingeschränkt werden soll. Dabei basiert diese potentielle Einschränkung auf der Rolle des aktuellen Nutzers. Die Rolle des aktuellen Nutzers ist in Keycloak definiert und wird an den GeoServer automatisch weitergereicht. Über verschiedene Regeln wird dieser Rolle nun eine Ressource (z.B. ein konkreter Layer) zugewiesen sowie ein entsprechender Zugriff definiert, der dem User den Zugriff entweder erlaubt (`ALLOW`) oder verbietet (`DENY`). Zusätzlich können in jeder Regel auch der Zugriff für einzelne Attribute eines Layers sowie der räumliche Zugriff gesteuert werden. Regeln werden von GeoFence beim Zugriff auf eine Ressource entlang der festgelegten Priorisierung ausgewertet, d.h. die erste passende Regel wird angewendet.

Alle aktuell konfigurierten Regeln können nach Anmeldung im GeoServer über den Menüpunkt `GeoFence Data Rules` eingesehen werden.

Der Administrator hat auf alle Dienste vollen Zugriff.

Geofence-Regeln werden nur für geschützte Layer benötigt.





