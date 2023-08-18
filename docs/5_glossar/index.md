---
id: Glossary
title: Glossary
description: Glossary
sidebar_position: 6
sidebar_label: Glossary
---

# Glossary

## Permission

In the first place permissions are used to grant a user access to an application. In addition, various restrictions for the individual **Applications** can be applied. Since only the admin-user has access to the admin client, the restrictions mainly impact the admin-user.

The following permissions can be granted to each user:

|Key|Description|
|---|---|
|`Read`|If corresponding to the users role, the user can read the JSON-files configuring the Web-GIS|
|`Update`|If corresponding to the users role, the user can modify the JSON-files configuring the Web-GIS|
|`Update & Delete`|If corresponding to the users role, the user can modify and delete the JSON-files configuring the Web-GIS|
|`Owner`|If corresponding to the users role, the user can modify and delete the JSON-files configuring the Web-GIS and grant permissions to new users|

We would recommend granting every user the `Read` permission except for the owner of the application.

:::info

Every user listed within the permission grid has access to the Web-GIS application. The permissions granted mainly affect users who also have the `admin` role, as only these users can access the admin client and thus modify the configurations.

:::

## Application

An application is a defined configuration of a Web-GIS. It can be determined which user should have access rights to the Web-GIS, as well as which layers should be displayed by default in which zoom level for which extent. It can be individually defined which tools should be available, as well as which color, name and logo the Web-GIS should have.

## Subject

A predefined list of layers that can be added to an instance and can be available by default according to the properties set.
