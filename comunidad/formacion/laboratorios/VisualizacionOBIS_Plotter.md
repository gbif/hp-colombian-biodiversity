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

**Introducción**
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/cyi_YrTsMLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>

**Sobre la herramienta**

La herramienta [OBIS _Plotter_](http://iobis.github.io/plotter/){:target="_blank"}, desarrollada por [OBIS](https://obis.org/){:target="_blank"} (Sistema Oceánico de Información sobre biodiversidad),  permite la visualización de datos en un mapa para verificar la correcta espacialización de estos. 

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

En este ejercicio, deberá convertir las coordenadas al formato de grados decimales por medio de esta herramienta.

**Enlace**

OBIS _Plotter_: [http://iobis.github.io/plotter/](http://iobis.github.io/plotter/){:target="_blank"}

**Requerimientos** 

* Para realizar este ejercicio, es necesario con un programa procesador de archivos de texto como Excel.
* La herramienta solo admite archivos en formato de texto delimitado (.CSV, .txt) o copiados directamente de Excel.
* Los datos deben estar estandarizados en formato DwC y contar con latitud y longitud.

**Archivo de trabajo**

Descargue el archivo [<FONT FACE="monospace"><b>«datos_geografia.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_geografia.xlsx) 

## Paso 1 - Ingreso a OBIS Plotter

Ingrese a la herramienta en linea [OBIS _Plotter_](http://iobis.github.io/plotter/){:target="_blank"}, allí encontrará unos datos precargados de prueba. Para explorar el resultado, dé clic en el botón <span class="tag is-warning is-light"><i>PLOT</i></span> (Fig. 1).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_VisualizacionOBIS_Plotter/Fig.1_valCoordenadas.jpg" width=500>

<sub>_Figura 1. Página principal de la herramienta OBIS Plotter_.</sub>

Despues de explorar el resultado, borre los datos de prueba presentes en _**"Source data"**_. Para esto, ubique el cursor dentro de la caja y seleccione todo con el comando <span class="tag is-warning is-light"><i>Ctrl + A</i></span>. Luego, presione la tecla Suprimir (<span class="tag is-warning is-light"><i>supr</i></span>) o borrar (<span class="tag is-warning is-light"><i>Backspace</i></span>).

## Paso 2 - Carga de datos
  
Abra el archivo [<FONT FACE="monospace"><b>«datos_geografia.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_geografia.xlsx) en Excel y detalle la información que contiene. Luego, haga clic en la esquina superior izquierda del archivo para seleccionar todas las filas y columnas, de forma que pueda copiarlas con <span class="tag is-warning is-light"><i>Ctrl + C</i></span> (Fig. 2).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_VisualizacionOBIS_Plotter/Fig.2_valCoordenadas.jpg" width=500>

<sub>_Figura 2. Resultado de la herramienta con los datos del archivo Excel_.</sub>

Use <span class="tag is-warning is-light"><i>Ctrl + V</i></span> para pegar los datos en la sección _**"Source data"**_ de la herramienta. Por otro lado, en la sección _**"Separator"**_, deje la opción por defecto (<span class="tag is-warning is-light"><i>tab</i></span>) y haga clic en <span class="tag is-warning is-light"><i>Plot</i></span> para ver los puntos desplegados en el mapa (Fig. 3).
  
<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_VisualizacionOBIS_Plotter/Fig.3_valCoordenadas.jpg" width=500>

  <sub>_Figura 3. Resultado de la herramienta con los datos del archivo Excel_.</sub>

## Paso 3 - Visualización de resultados
  
En la sección _**"Field of interest"**_, dé clic sobre el desplegable <span class="tag is-warning is-light"><i>Select field</i></span> para ver los elementos _Darwin Core_ de _**"Source data"**_ (Fig. 4). La herramienta asigna colores según el contenido del elemento. Si los puntos tienen los mismos colores, significa que el contenido para el elemento seleccionado es igual.
  
<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_VisualizacionOBIS_Plotter/Fig.4_valCoordenadas.jpg" width=500>

  <sub>_Figura 4. Selección de elemento en **"Field of interest"**_.</sub>

Seleccione el elemento <span class="tag is-success is-light"><i>stateProvince</i></span> en la sección _**"Field of interest"**_ para observar los registros que tenían documentado el departamento. Posteriormente, intente identificar cuáles registros tienen inconsistencias en las coordenadas o la geografía superior, haciendo clic sobre los puntos para evaluar su coherencia (Fig. 5). 
  
<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_VisualizacionOBIS_Plotter/Fig.5_valCoordenadas.jpg" width=500>

  <sub>_Figura 5. Registros mostrando la información por departamento_.</sub>

Para identificar los errores presentes en este conjunto de datos, puede guiarse por los resultados del mapa. Como se evidencia en los resultados, algunos puntos coincidieron con Perú y otros con el área marítima. Los datos que coinciden con Perú tienen un error en las coordenadas, **¿sabe cuál es?**

<div class="notification is-info is-light">
  <b>Nota:</b> los registros que aparecen en áreas marítimas no tiene coordenadas. Por consiguiente, la herramienta les asigna la coordenada 0,0 por defecto.
</div>

## Paso 4 - Corrección de errores
  
Con el objetivo de corregir los errores existentes en el documento de Excel, se debe eliminar el signo negativo que tienen las coordenadas del hemisferio Sur (S) en el elemento <span class="tag is-success is-light"><i>decimalLatitude</i></span>. Para esto, use las funciones de Excel para hacer un filtro en el elemento <span class="tag is-success is-light"><i>verbatimLatitude</i></span> y busque los registros que coinciden con el hemisferio Sur, escribiendo <span class="tag is-light"><b>S</b></span> en el cuadro de texto (Fig. 6).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_VisualizacionOBIS_Plotter/Fig.6_valCoordenadas.jpg" width=400>

<sub>_Figura 6. Filtro para buscar los registros del hemisferio Sur_.</sub>

Después, vaya al elemento <span class="tag is-success is-light"><i>decimalLatitude</i></span> para ver las latitudes que tienen un signo negativo. Para cambiarlo a positivo, seleccione las celdas correspondientes de <span class="tag is-success is-light"><i>decimalLatitude</i></span> y use la función <span class="tag is-warning is-light"><i>Buscar y Reemplazar</i></span> o <span class="tag is-warning is-light"><i>CTRL + L</i></span>. 

Cuando aparezca la ventana emergente, cambie los signos negativos (<span class="tag is-light"><b>-</b></span>) por un espacio en blanco (Fig. 7).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_VisualizacionOBIS_Plotter/Fig.7_valCoordenadas.jpg" width=800>

<sub>_Figura 7. Ventana emergente para reemplazar y eliminar el signo "-"_.</sub>

**¡Reto!**

¿Puede hallar otro error en los registros? 

>**Pista:** con <span class="tag is-success is-light"><i>stateProvince</i></span> en _**"Field of interest"**_, revise el sur de Antioquia.
>

## Paso 5 - Datos propios

Si tiene datos propios y desea publicarlos, intente seguir los pasos de este laboratorio para validar las coordenadas e identificar errores por medio de OBIS _Plotter_.

****
**¡Felicitaciones!** Terminó la visualización y validación de coordenadas del conjunto de datos.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/){:target="_blank"} permite usar, redistribuir y construir sobre estos contenidos libremente.

¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!

**Citación sugerida**

> Plata C., Ortíz R., Marentes E., Lozano J. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
