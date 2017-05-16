# Aurelia Plugin Skeleton

## 1 Übersicht

Dieses Projekt ist eine Implementierungsvorlage für Aurelia Plugins.
Es dient dazu Features einer Aurelia Applikation gekapselt als Plugin entwickeln zu können, sodass sie von einer Aurelia Applikation konsumiert werden können.

## 2 Struktur

### 2.1 Komponenten

Es gibt 4 verschiedene Arten von Komponenten:
* Attributes
* Binding-Behaviors
* Elements
* Value-Converters

Diese Komponenten werden in entsprechend benannten Ordnern einsortiert.

#### 2.1.1 Feature Komponenten

Für Features innerhalb des Plugins wird ein Feature-Ordner erstellt, der analog zum Namen des Features benannt wird.
Komponenten, die lediglich für ein einzelnes Feature implementiert werden, werden im Feature Ordner (Ordnerstruktur siehe `2.1 Komponenten`) abgelegt.

#### 2.1.2 Wiederverwendbare Komponenten

Wiederverwendbare Komponenten werden im Ordner `resources` abgelegt. In diesem Ordner findet sich ebenfalls die Ordnerstruktur aus `2.1 Komponenten` wieder.
Hierin abgelegte Komponenten können in Feature Komponenten referenziert werden.

### 2.2 Styles

#### 2.2.1 Feature Styles

Styles, die nur für ein Feature verwendet werden, sollen im zugehörigen Feature-Ordner hinterlegt werden.

#### 2.2.2 Styles für wiederverwendbare Komponenten

Styles, die für eine wiederverwendbare Komponente (bspw. ein Custom Element) gültig sind, werden neben direkt neben der Implementierung der Komponente (siehe `2.1.2 Wiederverwendbare Komponenten`) platziert.

#### 2.2.3 Wiederverwendbare Styles

Styles, die zwar wiederverwendbar sind, sich aber nicht auf eine spezifische Komponente beziehen, werden direkt im `resources` Ordner hinterlegt.

### 2.3 Konfiguration

Um das gekapselte Plugin aus der Aurelia Applikation heraus konfigurieren zu können existiert eine Konfigurationsklasse im Hauptordner.
Diese Klasse folgt der Aurelia Konvention zur Konfiguration von Plugins.

## 3 Setup

### 3.1 Build

Zum Bauen des Plugins wird das in der `package.json` hinterlegte Skript verwendet. Wir benötigen das Modulformat `AMD`, um das Plugin in der Aurelia Applikation konsumieren zu können, daher lautet der Befehl:

```
npm run build:amd
```

### 3.2 Einbindung in Aurelia Applikation

#### 3.2.1 Installation / Import

##### 3.2.1.1 Automatische Einbindung mit Aurelia CLI

Wurde das Plugin auf npm gepublished kann es einfach mit dem folgenden Befehl installiert und importiert werden:

```
au install @5minds/my-plugin
```

Die Aurelia CLI kümmert sich automatisch darum das Plugin in das Bundling einzutragen.

Nach dem Import des Plugins wird in der `aurelia.json` der Aurelia Applikation ein Eintrag für das Vendor Bundle erzeugt:

```
"dependencies": [
  {
    "name": "aurelia_plugin_skeleton",
    "path": "../node_modules/@5minds/aurelia_plugin_skeleton/dist/amd",
    "main": "index",
    "env": "dev",
    "resources": [
      "example/elements/my-example.html",
      "example/elements/my-example.js"
    ]
  }
]
```

> ACHTUNG!: Bei privaten npm Paketen (gescoped - im Beispiel `@5minds`) kann es zu Problemen beim automatischen Import des Plugins kommen.

> PROBLEME BEIM IMPORT?:
In einigen Fällen kann der automatische Import des Plugins durch die Aurelia CLI fehlschlagen. Der Eintrag in der `aurelia.json` muss dann manuell hinzugefügt werden.
Es ist außerdem darauf zu achten, dass alle Ressourcen, die aus dem Plugin verwendet werden sollen, hier eingetragen werden müssen. Dies ist erforderlich, damit sie im Bundle der Aurelia Applikation enthalten sind und verwendet werden können.

Anschließend muss das Plugin im Haupteinstiegspunkt der Aurelia Applikation (regulär `main.ts`) eingetragen werden, damit es beim Starten der Anwendung geladen wird.

```typescript

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia_plugin_skeleton');  << unser Beispielplugin

  aurelia.start().then(() => aurelia.setRoot());
}

```

##### 3.2.1.2 Manuelles Setup

###### 3.2.1.2.1 Webpack Support

Um Aurelia mit Webpack zu verwenden sollte sichergestellt werden, dass in der `package.json` des Plugins die Aurelia build resources map gepflegt wird. Diese teilt dem Transpiler mit, welche Inhalte im Bundle inkludiert werden sollen.

Der Konfigurationsblock in der `package.json` sieht wie folgt aus:

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

#### 3.2.1 Verwendung von Komponenten eines Plugins

Stellen wir uns vor eine Aurelia Applikation möchte das Custom Element `my-example` aus dem `example` Feature dieses Plugin Skeletons verwenden.

Die zugehörige View sieht dann wie folgt aus:

```html
<template>
  <require from="aurelia_plugin_skeleton/example/elements/my-example"></require>

  <my-example-tag></my-example-tag>
</template>

```

Es besteht auch die Möglichkeiten alle oder einzelne Komponenten eines Plugins global zu registrieren, sodass die zugehörigen Tags (in diesem Beispiel `my-example-tag`) in einer View verwendet werden können ohne sie zu importieren.

Diese Vorgehensweise ist aber nicht als grundsätzliche Lösung empfehlenswert, da es durch die globale Registrierung zu Namenskonflikten kommen kann. Diese Möglichkeit sollte daher sparsam verwendet werden oder einer Namenskonvention folgen, die Namenskonflikte verhindert.