# Aurelia Plugin Skeleton

## Overview

This project is a implementation template for Aurelia plugins.
It serves the purpose of developing Aurelia application features encapsulated as
a plugin, so that they can be consumed by an Aurelia application.

## Structure

### Components

There are 4 different types of components:
* Attributes
* Binding-Behaviors
* Elements
* Value-Converters

These components are sorted in appropriate directories.

#### Feature components

For features within the plugin, a feature folder gets created, which
is named analogously to the feature's name.
Components, which are solely implemented for one feature, are stored in the
feature folder (see seccion [Components](#components) for folder structure).

#### Reusable components

Reusable components are stored in the `ressources` folder (see section
[Components](#components) for folder structure).
Components which are stored here can be referenced in feature components.

### Styles

#### Feature styles

Styles, which are solely used for one feature, are stored in the corresponding
feature folder.

#### Styles for reusable components

Styles, which are valid for a reusable component (e.g a custom element), are
stored directly next to the implementation of the component (see section
[Reusable components](#reusable-components)).

#### Reusable styles

Styles, which are reusable, but not bound to a specific component, are stored
directly in the `ressources` folder.

### Configuration

To configure the encapsulated plugin out of an Aurelia application, a
configuration class in the root folder exists.
This class follows the Aurelia conventions for configuration of plugins.

## Setup

### Build

Use the provided script in the `package.json` to build the plugin.
We need the module format `AMD` to consume the plugin in an Aurelia application.
Therefore you need to use this command:

```
$ npm run build:amd
```

### Integrate in an Aurelia application

#### Automatic integration using the Aurelia CLI

The plugin can be easily imported using the following command, if it's published
to npm:

```
$ au install @5minds/my-plugin
```

The Aurelia CLI automatically takes care of inserting the plugin into the
bundling.

Afterwards the plugin must be registered in the main entry point of the Aurelia
application (usually `main.ts`), so it gets loaded when starting the
application.

```typescript

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('my-plugin');  << this is our plugin

  aurelia.start().then(() => aurelia.setRoot());
}

```

#### Manual setup

##### Webpack support

To use Aurelia with Webpack make sure, that the Aurelia build resources map in
`package.json` gets maintained. This tells the transpiler, which contents
can be included in the bundle.

The configuration block in the `package.json` looks like the following:

```
  "aurelia": {
    "build": {
      "resources": [
        "components/test.html",
        "components/test.js"
      ]
    }
  }
```

##### Aurelia CLI support

When building the plugin, there will be an AMD module exported, which the
Aurelia CLI can use.

After importing the plugin, an entry in the `aurelia.json` file of the Aurelia
application gets generated, which is used for the vendor bundle:

```
"dependencies": [
  {
    "name": "my-plugin",
    "path": "../node_modules/@5minds/my-plugin/dist/amd",
    "main": "index",
    "env": "dev"
  }
]
```

##### Using a Plugin

Imagine we want to use the custom element `my-example` from the `example` feature of this plugin skeleton. The corressponding view will look like this:

```html
<template>
  <require from="aurelia_plugin_skeleton/example/elements/my-example"></require>

  <my-example-tag></my-example-tag>
</template>
```

There is a possibility to register all or some of the components in a Plugin globally. This way they don't need to be `required` in the view, we want to use them.

However, this approach is not a general solution and should be used with care, since it could lead to name-conflicts if your are not using name-conventions to avoid them.
