---
layout: documentation
permalink: /formacion/laboratorios/VisualizacionOBIS_Plotter
title: "Visualización Coordenadas"
description: "Objetivo: Visualizar y validar las coordenadas con ayuda de un proceso de espacialización en un mapa."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Visualización Coordenadas

**Objetivo**

Visualizar y validar las coordenadas con ayuda de un proceso de espacialización en un mapa.

**Sobre la herramienta**

La herramienta [OBIS Plotter](http://iobis.github.io/plotter/), desarrollada por [OBIS](https://obis.org/) (Sistema de información de biodiversidad oceánico),  permite la visualización de los datos sobre un mapa para verificar la correcta espacialización de los datos.
En este ejercicio usted deberá convertir las coordenadas al formato grados decimales haciendo uso de esta herramienta.


**Enlace**
[http://iobis.github.io/plotter/](http://iobis.github.io/plotter/)

**Requerimientos** 

* Para realizar este ejercicio debe contar con un programa procesador de archivos de texto como Excel.
* La herramienta solo admite archivos en formato de texto delimitado (.CSV, .txt) o copiados directamente de Excel.
* Los datos deben estar estandarizados en formtado DwC y contar con laitud y longitud.

**Archivo de trabajo**

Descargue el archivo [```datos_geografia.xlsx```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_geografia.xlsx) 

:warning: Estamos puliendo este laboratorio, la guía puede presentar cambios menores de formato y estilo para una mejor navegación y aprendizaje.

--------

## Paso 1 - Ingreso a OBIS Plotter
Ingrese a la herramienta en linea [OBIS Plotter](http://iobis.github.io/plotter/). En esta hay unos datos precargados de prueba, puede dar clic al botón ```PLOT``` y explorar el resultado (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_valCoordenadas.JPG" width=500>

*Figura 1. Página principal de la herramienta OBIS Plotter*

Despues de explorar el resultado, borre los datos de prueba presentes en ```Source data```, para esto ubique el cursor dentro de la caja y seleccione todo con el comando **(Ctrl + A)**, enseguida presione la tecla Suprimir **(Supr)** o borrar 
**(Backspace)**. 


## Paso 2 - Carga de datos
Abra en Excel el archivo ```datos_geografia.xlsx``` y detalle la información que contiene. Copie todos los datos del archivo, dando clic en la esquina superior izquierda para seleccionar todas las filas y columnas, luego copielos con  **(Ctrl+C)** (Fig. 2).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_valCoordenadas.jpg" width=500>

*Figura 2. Resultado de la herramienta con los datos del archivo Excel*

Pege **(Ctrl+V)** los datos en la sección ```Source data``` de la herramienta. En la sección ```Separator``` deje la opción por defecto *tab* y de clic en ```Plot``` para ver los puntos desplegados en el mapa (Fig. 3).
<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_valCoordenadas.jpg" width=500>

*Figura 3. Resultado de la herramienta con los datos del archivo Excel*

## Paso 3 - Visualización de resultados
En la sección ```Field of interest```, de clic sobre el desplegable y podrá ver los elementos Darwin Core del Source data (Fig. 4). La herramienta asigna colores según el contenido del elemento. Si los puntos tienen los mismos colores, es porque el contenido para el elemento seleccionado es igual. 
<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_valCoordenadas.jpg" width=500>

*Figura 4. Selección de elemento en ```Field of interest```*

Seleccione el elemento *stateProvince* en la sección ```Field of interest```. Verá los registros que tenían documentado el departamento, intente identificar cuáles registros tienen inconsistencias en las coordenadas o la geografía superior, dando clic sobre los puntos y evaluando su coherencia (Fig. 5). 
<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_valCoordenadas.jpg" width=500>

*Figura 5. Registros mostrando la información por departamento*

Identifique los errores presenten en este conjunto de datos, para ello puede guiarse por los resultados del mapa. Como verá hay puntos que coincidieron con Perú y otros con el área marítima. Los datos que coinciden con Perú tienen un error en las coordenadas. **¿Sabe cuál es?** 

>Nota
Los registros en áreas marítimas corresponden a registros sin coordenadas a los cuales la herramienta asigna la coordenada 0,0.

## Paso 4 - Corrección de errores
Corrija el error en el documento de Excel, para esto cambie el hemisferio en el elemento ```decimalLatitude``` quitando el signo negativo a las coordenadas que tienen hemisferio Sur (S). 
Para esto, haga un filtro en excel en el  elemento ```verbatimLatitude```, buscando los registros que coinciden con el hemisferio Sur “S” (Fig. 6).
<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_valCoordenadas.jpg" width=400>

*Figura 6. Filtro para buscar los registros del hemisferio Sur*

Luego dirijase al elemento ```decimalLatitude``` y verá que después del filtro anterior, las latitudes tienen un signo negativo. Cámbielo a positivo seleccionando las celdas de ```decimalLatitude``` y use la función **Buscar y Reemplazar (CTRL+L)** de Excel, llenando la ventana emergente y cambiando "-" por "" (Fig. 7).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_valCoordenadas.jpg" width=800>

*Figura 7. Ventana emergente para reemplazar y eliminar el signo "-"*

**Reto...**
¿Puede identificar otro error en los registros? 
>Pista: Con stateProvince en Field of interest dele una mirada al Sur de Antioquia. 

## Paso 5 - Datos propios
Si tiene datos propios que desee publicar, utilice la herramienta para validar las coordenadas e identificar errores siguiendo los pasos de este laboratorio.

****
**¡Felicitaciones!** :raised_hands:
Terminó la visualización y validación de coordenadas del conjunto de datos.
