## Serverside Client Configuration

This document contains the list of global settings for the client which can be configured via the `gis-client-config.js` file. This file is considered to be accessed by the client from the path `./gis-client-config.js`. A template containing all the default values can be found [here](https://github.com/terrestris/shogun-gis-client/blob/main/resources/config/gis-client-config.js).

| Name | Description | Default |
|------|-------------|---------|
| `shogunBase` | The base URL of SHOGun, e.g. `/api` or `https://my-shogun.org/`. If set to `false` no requests to the backend API will be made by the application. | `'/'` |
| `keycloak.enabled` | Whether Keycloak is used for authentication or not. Usually this should only set to `false` in client only mode or if no authentication is needed to access any SHOGun endpoints at all. | `false` |
| `keycloak.host` | The Keycloak host, e.g. `/auth` or `https://localhost/auth`. | `null` |
| `keycloak.realm` | The Keycloak realm that should be used for authentication, e.g. `SHOGun`. | `null` |
| `keycloak.clientId` | The Keycloak client that should be used for authentication, e.g. `shogun-client`. | `null` |
| `keycloak.onLoadAction` | See [here](https://www.keycloak.org/securing-apps/javascript-adapter#_using_the_adapter) for details. | `'check-sso'` |
| `print.url` | The url of the MapFish Print servlet. | `'/print'` |
| `plugins` | The list of plugins to be loaded. | `[]` |
| `plugin.name` | The name of the plugin. | `undefined` |
| `plugin.exposedPaths` | The list of exposed paths. | `undefined` |
| `plugin.resourcePath` | The resource path. | `undefined` |
| `geoserver.base` | The base url of the GeoServer. | `/geoserver` |
| `geoserver.upload.workspace` | The workspace the uploads should be placed in. | `'SHOGUN-UPLOADS'` |
| `geoserver.upload.limit` | The upload size limit in bytes (note: this is the client evaluation only!). | `200000000` (~ 200MB) |
| `geoserver.upload.authorizedRoles` | The list of role names the upload should be allowed/visible to (note: this is the client evaluation only!). | `['admin']` |
| `search.nominatimUrl` | Url to a nominatim instance. | `'https://nominatim.openstreetmap.org/search'` |
| `search.solrBasePath` | Base path to a solr instance. | `'/search/query'` |
| `search.coreName` | Solr core name. | `'search'` |
| `search.defaultUseViewBox` | Whether the search is restricted to the current view box. | `true` |
| `search.activateLayerOnClick` | Make the layer visible if a search result is selected. | `true` |
| `search.showSearchResultDrawer`|Whether the click on a search result entry should open a drawer with details on the search result or not.|false|
| `search.groupByCategory` | Groups search results by 'category' text field. If disabled, the layer title will be used instead. | `true` |
| `search.useSolrHighlighting` | Enable/disable solr search result highlighting. | `true` |
| `search.delay` | Delay in milliseconds before search is triggered (debouncing). | `1000` |
| `search.minChars` | Minimum search term length for the search to be triggered. | `3` |
| `search.solrQueryConfig.queryParser` | Solr query parser. Must be either 'lucene', 'dismax' or 'edismax'. | `'edismax'` |
| `search.solrQueryConfig.rowsPerQuery` | Number of requested rows per solr query. | `100` |
| `search.solrQueryConfig.tagPre` | HTML tag applied before search highlight. | `<b>` |
| `search.solrQueryConfig.tagPost` | HTML tag applied after search highlight. | `</b>` |
| `search.solrQueryConfig.requireFieldMatch` | Only query terms aligning with the field being highlighted will in turn be highlighted. | `true` |
| `featureEditRoles.authorizedRolesForCreate` | The list of role names the feature editing tools including the create options should be allowed/visible to (note: this is the client evaluation only!). String and regular expressions are supported. | `[]` |
| `featureEditRoles.authorizedRolesForUpdate` | The list of role names the feature editing tools including the update options should be allowed/visible to (note: this is the client evaluation only!). String and regular expressions are supported. | `[]` |
| `featureEditRoles.authorizedRolesForDelete` | The list of role names the feature editing tools including the delete options should be allowed/visible to (note: this is the client evaluation only!). String and regular expressions are supported. | `[]` |
| `wfsLockFeatureEnabled` | Whether WFS LockFeature is enabled during feature editing or not. | `false` |
| `documentationButtonVisible` | Whether the button in the user menu to open the documentation is visible or not. | `true` |
| `enableFallbackConfig` | Whether the default application configuration should be loaded without any given application ID or not. | `true` |

