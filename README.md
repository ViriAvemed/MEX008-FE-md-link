# Markdown Links

Este modulo fue diseñado con la finalidad de encontrar los links existentes en los archivos markdown
y poder verificar si siguen vigentes o sean roto.

## Instalación

Para instalar la dependencia en tu proyecto debes ejecurar desde la consola el siguiente comando.

```sh
 npm install viri-links
 ``` 

## Diagrama de flujo

![Diagrama](img/mdLinks.png)



* CLI (Command Line Interface - Interfaz de Línea de Comando)

  
Ruta relativa sin opciones

```sh

$ viri-links ./some/example.md

```

Ruta relativa con opcion validate

```sh

$ viri-links ./some/example.md validate

```

Ruta relativa con opcion stats

```sh

$ viri-links ./some/example.md stats

```
