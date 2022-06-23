#  status-md-links
*status-md-links* es una libreria de línea de comando(CLI) que permite identificar,validar y tener estadísticas de las URL's contenidas en archivos de  de extensión markdown (.md)


## Tabla de contenido
* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Instalación](#2-instalación)
* [3. Guía de uso](#2-guia-de-uso)
* [4. API](#3-api)
* [5. CLI](#4-cli)

## 1. Resumen del proyecto
[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

En este proyecto el objetivo es crear una libreria desarrollada en NodeJS, para leer y analizar archivos en formato Markdown para identificar el estado de los enlaces MD e informar algunas estadísticas.

## 2. Instalación
```sh
npm i status-md-links
```
### 2.1 Uso de la librería
```sh
const md-links = require('status-md-links');
```

## 3. Guía de uso
El módulo se puede importar en otros scripts de Node.js y ofrece la siguiente interfaz:
```sh
$ status-md-links <path> [options]
```
##### Ejemplo:
```sh
$ md-links ./carpeta-completa
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\PC\\LIM016-md-links\\carpeta-completa\\file-con-links.md'
```
##### `--validate`
Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:
```sh
$ md-links ./some/example.md --validate
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\PC\\LIM016-md-links\\carpeta-completa\\file-con-links.md'
    status: 200
    message: ok
```
##### `--stats`
Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```
##### `--stats --validate`
También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
## 3. API
### 3.1 Flujograma

![Flujograma de desarrollo](https://github.com/yohanaFalconi/LIM017-md-links/blob/main/assets/Diagram-API%20flow.jpg)

## 4. CLI
### 4.1 Flujograma
![Flujograma de desarrollo](https://github.com/yohanaFalconi/LIM017-md-links/blob/main/assets/CLI%20flow.png)

