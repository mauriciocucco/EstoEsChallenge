# Challenge de _Esto es_

Challenge de Frontend para la empresa **Esto es** (https://www.estoes.me/) que consiste en una plataforma que tiene como objetivo realizar la gestión de proyectos, pudiendose utilizar tanto en Desktop como en Mobile.

Se encuentra hecho con **Angular Material** (https://material.angular.io/) y **Angular CLI** (versión 11.0.4.), con un patrón de diseño **Lazyload**.

> Su dirección web: https://esto-es-challenge.netlify.app/

## Abrirlo localmente

Primero instalar Angular CLI:

```bash
npm install -g @angular/cli json-server
```

## Iniciar la aplicación

Primero se deben instalar las dependencias del proyecto con:

```bash
npm install
```

Luego, con una consola distinta, posicionarse dentro de la carpeta "heroes-server" y escribir:

```bash
json-server --watch db.json
```

> Esta consola debe permanecer abierta para realizar las peticiones CRUD.

Por último, para abrir la aplicación:

```bash
ng serve -o
```

Abrirá la página en la siguiente URL: `http://localhost:4200/`.

### Nota

> La página se actualizará automáticamente al realizar cambios y guardar.
