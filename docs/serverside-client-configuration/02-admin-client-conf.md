## Serverside Admin Configuration

This document contains the list of global settings for the admin-client which can be configured via the `admin-client-config.jss` file. This file is considered to be accessed by the client from the path `./config/admin-client-config.js`. A template containing all the default values can be found [here](https://github.com/terrestris/shogun-admin/blob/main/assets/fallbackConfig.js).

| Name | Description | Default |
| ---- | ----------- | ------- |
| `shogunApplicationConfig.appPrefix` | The path to the app, the prefix to appear in the addressbar when the app is open. | `'/admin'` |
| `shogunApplicationConfig.defaultPageSize` | The number of entries shown per page. | `10` |
| `shogunApplicationConfig.path.modelConfigs` | The path to the model configurations on your host. | `'/formconfigs'` |
| `shogunApplicationConfig.path.shogunBase` | The path to the shogunbase on your host. | `'/'` |
| `shogunApplicationConfig.path.logo` | The path to the logo used by the admin client. | `null` |
| `security.keycloak.enabled` | Configure whether keycloak is enabled or not. | `true` |
| `security.keycloak. host` | The url for keycloak host. | `'https://localhost/auth'` |
| `security.keycloak.realm` | The keykloack realm to be used. | `SpringBootKeycloak` |
| `security.keycloak.clientId` | The id of the client that request user to authenticate the user. | `'shogun-admin'` |
| `security.keycloak.authorizedRoles` | The list of roles with access rights. | `['admin']` |
| `geoserver.base` | The base url of the GeoServer. | `'/'` |
| `geoserver.upload.buttonVisible` | Configure whether the layer upload button is visible. | `false` |
| `geoserver.upload.workspace` | The workspace the uploads should be placed in. | `SHOGUN` |
| `geoserver.upload.limit` | The maximum storage space assigned. | `200000000` (~200MB) |
| `models` | The list of models available in the menu. | `['Application', 'Layer', 'User', 'Group', 'Role']` |
| `dashboard.news.visible` | Configure whether the news page is visible. | `true ` |
| `dashboard.statistics.visible` | The visibility of the list of app statistics. | `false` |
| `dashboard.applications.visible` | The visibility of the list of application available in the dashboard. | `true` |
| `dashboard.layers.visible` | The visibility of the list of layers uploaded. | `true` |
| `dashboard.users.visible` | The visibility of the list of users in the system. | `true` |
| `navigation.general.imagefiles.visible` | The list of image files that have been uploaded by the user. | `true` |
| `navigation.status.metrics.visible` | Configure whether status metrics are visible. | `true` |
| `navigation.status.logs.visible` | Configure whether status logs are visible. | `true` |
| `navigation.settings.global.visible` | Configure whether global settings are visible. | `true` |
| `navigation.settings.logs.visible` | Configure whether logs are visible. | `true` |
| `navigation.settings.graphiql.visible` | Whether the link to graphiql is visible or not. | `true` |
| `navigation.settings.swagger.visible` | Whether swagger is visible. | `true` |
