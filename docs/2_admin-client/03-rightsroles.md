# Rechte- und Rollenkonzept
***

## Übersicht Realm-Rollen zu Client-Rollen

| | BO-ADMIN | BO-EDITOR | BO-ABONNENT | BO-GUEST |
|---|---|---|---|---|
| GeoServer | - BO-ADMIN<br></br>- ROLE_ADMINISTRATOR<br></br>- ggf. weitere durch Gruppenzugehörigkeit  für die räumliche Einschränkung (z.B. BO-ADMIN-STUTTGART) | - BO-EDITOR<br></br>- ROLE_AUTHENTICATED<br></br>- ggf. weitere durch Gruppenzugehörigkeit für die räumliche Einschränkung (z.B. BO-EDITOR-STUTTGART) | - BO-ABONNENT<br></br>- ROLE_AUTHENTICATED<br></br>- ggf. weitere durch Gruppenzugehörigkeit für die räumliche Einschränkung (z.B. BO-ABONNENT-STUTTGART) | - BO-GUEST<br></br>- ROLE_AUTHENTICATED<br></br>- ggf. weitere durch Gruppenzugehörigkeit  für die räumliche Einschränkung (z.B. <br></br>BO-GUEST-STUTTGART) |
| SHOGun-Backend | - ADMIN | - n.v.<br></br> - Prüfung auf isAuthenticated() | - n.v.<br></br>- Prüfung auf isAuthenticated() | - n.v.<br></br>- Prüfung auf isAuthenticated() |
| SHOGun-Admin | - ADMIN | - n.v. | - n.v. | - n.v. |
| SHOGun-Client | - ADMIN | - EDITOR | - ABONNENT | - GUEST | 

## Übersicht Berechtigungen

| | BO-ADMIN | BO-EDITOR | BO-ABONNENT | BO-GUEST |ANONYMOUS |
|---|---|---|---|---|---|
| GeoServer | - kann alle (oder ausgewählte) Katalogeinträge administrieren<br></br>- CRUD Zugriff auf alle (oder ausgewählte) Daten<br></br>- kann alle OGC-Schnittstellen ohne Einschränkungen nutzen | - kann <b>keine</b> Katalogeinträge administrieren<br></br>- CRUD Zugriff auf alle (oder ausgewählte) Daten<br></br>- kann alle OGC-Schnittstellen nutzen, außer: WFS-T Insert, WFS-T Delete, WFS-T Replace | - kann <b>keine</b> Katalogeinträge administrieren<br></br>- Lesender Zugriff auf alle (oder ausgewählte) Daten<br></br>- kann alle OGC-Schnittstellen  nutzen, außer: WFS-T | - kann keine Katalogeinträge administrieren<br></br>- Lesender Zugriff auf ausgewählte Daten (z.B. sind interne Informationen gefiltert)<br></br>- kann alle OGC-Schnittstellen  nutzen, außer: WFS-T | - kann <b>keine</b> Katalogeinträge administrieren<br></br>- kann <b>keine</b> Daten sehen|
| SHOGun-Backend | - Voller CRUD Zugriff auf REST/GraphQL Schnittstellen | - Lesender Zugriff auf REST/GraphQL Schnittstellen<br></br> - Lesend nur Applikationen und Layer, auf die er Berechtigung erhalten hat (durch Admin) | - Lesender Zugriff auf REST/GraphQL Schnittstellen<br></br>- Lesend nur Applikationen und Layer, auf die er Berechtigung erhalten hat (durch Admin) | - Lesender Zugriff auf REST/GraphQL Schnittstellen<br></br>- Lesend nur Applikationen und Layer, auf die er Berechtigung erhalten hat (durch Admin) | - Kein Zugriff auf Schnittstellen|
| SHOGun-Admin | - Kann Admin-UI öffnen<br></br>- Keine funktionale Beschränkung | - Kann Admin-UI <b>nicht</b> öffnen | - Kann Admin-UI <b>nicht</b> öffnen | - Kann Admin-UI <b>nicht</b> öffnen | - Kann Admin-UI <b>nicht</b> öffnen |
| SHOGun-Client | - Kann Client-UI öffnen<br></br>- Keine funktionale Beschränkung| - Kann Client-UI öffnen<br></br>- Keine Anzeige Geometrie-Editierwerkzeuge | - Kann Client-UI öffnen<br></br>- Keine Anzeige der Editierwerkzeuge | - Kann Client-UI nicht öffnen<br></br> - Keine Anzeige der Editierwerkzeuge | - Kann Client-UI <b>nicht</b> öffnen| 


