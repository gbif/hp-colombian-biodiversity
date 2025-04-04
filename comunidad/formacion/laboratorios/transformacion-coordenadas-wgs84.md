---
layout: documentation
permalink: /formacion/laboratorios/transformacion-coordenadas-wgs84
title: "Transformación de coordenadas MAGNA-SIRGAS a coordenadas decimales en WGS84"
description: "Objetivo: Transformar coordenadas proyectadas con el datum MAGNA - SIRGAS al formato de coordenadas decimales, que se utiliza en el estándar Darwin Core  para la publicación de datos sobre biodiversidad."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Transformación de coordenadas MAGNA-SIRGAS a coordenadas decimales en WGS84

**Objetivo**

Transformar coordenadas proyectadas con el _datum_ MAGNA - SIRGAS al formato de coordenadas decimales, que se utiliza en el estándar _Darwin Core_ para la publicación de datos sobre biodiversidad.

**Introducción**

Las coordenadas se pueden tomar en diferentes Sistemas de Referencia de Coordenadas (SRC), utilizando una variedad de _datum_ para representar la superficie de la tierra. En el caso de Colombia, se utiliza el _datum_ nacional (MAGNA-SIRGA) para la proyección de las coordenadas. Sin embargo, para facilitar la interoperabilidad de los datos sobre biodiversidad, el estándar _Darwin Core_ (DwC) propone que las coordenadas deben ser transformadas a coordenadas decimales con _datum_ WGS84. Este proceso se puede realizar masivamente con la ayuda de _software_ especializados en datos geográficos. 

En este laboratorio, se explica paso a paso el proceso de transformación de coordenadas a partir de un archivo _shapefile_ tipo punto.

**Sobre la herramienta**

QGIS es un _software_ de gestión de información geográfica que se ejecuta en múltiples sistemas operativos como _Linux_, _Unix_, _Mac OSX_, _Windows_ y _Android_. También soporta numerosos formatos y funcionalidades de datos vector, datos ráster y bases de datos. Esta herramienta proporciona una creciente gama de servicios, a través de sus funciones básicas y complementos para visualizar, gestionar, editar, analizar datos y diseñar mapas imprimibles.

QGIS es un _software_ libre y de código abierto, licenciado bajo una GNU (_General Public License_) y soportado como un proyecto de la _Open Source Geospatial Foundation_ (OSGeo). Por lo tanto, no requiere el pago de licencias. Adicionalmente, es impulsado por un grupo de voluntarios que mantienen el _software_ actualizado y las versiones estables, lo cual sostiene a QGIS como uno de los _software_ geográficos más conocidos.

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Requerimientos**

- QGIS (Revisar el proceso de instalación en el primer paso de la guía de [Validación geográfica con QGIS](https://biodiversidad.co/formacion/laboratorios/QGIS#paso-1---instalaci%C3%B3n-de-qgis)).
- Procesador de archivos de texto (Ejemplo: Excel, _Openrefine_, etc.).
- Contar con un mínimo de 4GB de memoria RAM para el desarrollo de esta guía. Para procesos con más de 20 000 registros biológicos, se recomienda tener como mínimo 8GB.

**Archivos de trabajo**

- Descargar el archivo comprimido _shapefile_ [<FONT FACE="monospace"><b>«PuntoMuestreoCTM12.zip»</b></FONT>](https://drive.google.com/file/d/1lQofuZM4Nx7sDmyBqhzfU89F3A-vZY1t/view?usp=sharing){:target="_blank"} para realizar el laboratorio.
- Descargar el archivo de texto plano [<FONT FACE="monospace"><b>«PuntoMuestreoCTM12.csv»</b></FONT>](https://drive.google.com/file/d/1BazJQdxrDH2GLtjGQyinBgmPt7G0H8LH/view?usp=sharing){:target="_blank"} para realizar el laboratorio.


--------

## Paso 1 - Carga de los datos a QGIS

El proceso de carga se puede realizar de varias formas. En esta guía se presentarán las más comunes: subir un archivo vectorial _shapefile_ y subir un archivo de texto plano con la información. Para este ejercicio, los datos están en la sección **"Archivos de trabajo"**.

El primer paso es abrir el QGIS y seleccionar la opción <span class="tag is-warning is-light"><b><i>Proyecto > Nuevo</i></b></span>.

### Paso 1.1 Crear el origen único MAGNA SIRGAS / CTM12 en QGIS

Los datos  de esta guía están en el origen nacional, ya que muchos archivos _shapefiles_ y bases de datos geográficas se encuentran configurados con este sistema de coordenadas. Por consiguiente, se debe configurar el Sistema de Referencia de Coordenadas (SRC) del proyecto. 

A partir de la versión 3.3 de QGIS, el sistema de proyección MAGNA-SIRGAS / Origen-Nacional (CTM12) con el código EPSG 9377 se encuentra incluido de manera oficial. Si se utiliza una versión anterior, es posible agregarlo manualmente siguiendo el procedimiento descrito en el video [Cómo agregar el SRC MAGNA-SIRGAS/ CTM12 a QGIS](https://www.youtube.com/watch?v=sWvyt_0e_vI){:target="_blank"}. Según la información proporcionada, en la sección **"Parámetros"** se debe ingresar el [código](https://drive.google.com/file/d/1B4eXwiZUDlN8Ki3tEC5uBNugBdvLNYzI/view?usp=sharing){:target="_blank"} para completar el proceso con éxito.

### Paso 1.2  Configuración del SRC del proyecto

Cuando se haya creado el origen único CTM-12, seguir la ruta: <span class="tag is-warning is-light"><b><i>Proyecto > Propiedades…</i></b></span>. En la nueva ventana, seleccionar la pestaña **"SRC"**, elegir el sistema de referencia <span class="tag is-warning is-light"><i>MAGNA-SIRGAS / CTM-12</i></span> que se creó en el paso anterior y dar clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig. 1). En caso de no ubicarlo fácilmente, se recomienda escribir <span class="tag is-light"><b>CTM 12</b></span> en la opción de **"Filtro"**.

![Figura 1. Selección del Sistema de referencia CTM-12 en QGIS.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig1_C4Coordenadas_SRC.png)
<sup>_Figura 1. Selección del Sistema de referencia CTM-12 en QGIS._</sup>

### Paso 1.3 - Carga de los datos a QGIS desde un archivo ShapeFile

Para cargar los archivos _shapeFile_, seguir la ruta <span class="tag is-warning is-light"><b><i>Capa > Añadir capa > Añadir capa vectorial…</i></b></span> (Fig. 2).

![Figura 2. Adición de una capa vectorial.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig2_C4Coordenadas_Vectorial.png)
<sup>_Figura 2. Adición de una capa vectorial._</sup>

En la sección **"Fuente"** de la ventana emergente, hacer clic en el botón con los tres puntos (Fig 3. 1), seleccionar el archivo con la terminación .shp para transectos y dar clic en <span class="tag is-warning is-light"><i>Abrir</i></span> (Fig. 3.2). 

![Figura 3.1. Ventana emergente con la opción de selección del archivo shapefile con los puntos de muestreo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig3_C4Coordenadas_Seleccion.png)
<sup>_Figura 3.1. Ventana emergente con la opción de selección del archivo shapefile con los puntos de muestreo._</sup>

![Figura 3.2. Selección del archivo shapefile con los puntos de muestreo en la respectiva ubicación del PC.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig4_C4Coordenadas_Archivo.png)
<sup>_Figura 3.2. Selección del archivo shapefile con los puntos de muestreo en la respectiva ubicación del PC._</sup>

Para finalizar, es necesario hacer clic en <span class="tag is-warning is-light"><i>Añadir</i></span>. Con esto ya se podrán visualizar los puntos de muestreo del archivo _shapefile_ espacializados en QGIS. (Fig. 3.3)

![Figura 3.3. Visualización del archivo shapefile en QGIS.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig5_C4Coordenadas_Vista.png)
<sup>_Figura 3.3. Visualización del archivo shapefile en QGIS._</sup>

### Paso 1.4 - Carga de los datos a QGIS desde un archivo de texto plano

Para cargar los archivos de texto plano, seguir la ruta <span class="tag is-warning is-light"><b><i>Capa > Añadir capa > Añadir capa de texto delimitado…</i></b></span> (Fig. 4).

![Figura 4. Adición de una capa de texto delimitado.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig6_C4Coordenadas_Texto.png)
<sup>_Figura 4. Adición de una capa de texto delimitado._</sup>

En la sección **"Nombre del archivo"** de la ventana emergente, dar clic en el botón con los tres puntos, seleccionar el archivo con la terminación .csv que se descargó previamente en y hacer clic en <span class="tag is-warning is-light"><i>Abrir</i></span> (Fig. 5A). Continuar con las opciones <span class="tag is-warning is-light"><b><i>Definición de Geometría > Coordenadas del punto</i></b></span> y documentar el **"Campo X"** con el elemento <span class="tag is-light"><b>COOR_ESTE</b></span> y el **"Campo Y"** con el elemento <span class="tag is-light"><b>COOR_NORTE</b></span> (Fig. 5B).

En el campo **"SRC de la geometría"**, seleccionar el sistema de referencia de coordenadas <span class="tag is-warning is-light"><i>CTM12</i></span> que se configuró en el paso anterior. Si no aparece el sistema en la opción desplegable, dar clic en el ícono de proyecciones de la parte derecha y buscar el sistema de referencia configurado (Fig. 5C).

Para finalizar, revisar que la previsualización en la opción <span class="tag is-warning is-light"><i>Datos de ejemplo</i></span> sea correcta y dar clic en <span class="tag is-warning is-light"><i>Añadir</i></span> (Fig. 5D). Si hay problemas en las tildes o con la letra ‘ñ’ en los textos, es necesario asegurarse de que en la sección **"Codificación"** esté seleccionado <span class="tag is-warning is-light"><i>UTF-8</i></span> (Fig. 5E).

![Figura 5. Pasos para cargar archivos de texto delimitados en QGIS.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig7_C4Coordenadas_Agregar.png)
<sup>_Figura 5. Pasos para cargar archivos de texto delimitados en QGIS: A. Selección del archivo a cargar, B. Selección de campos de coordenadas, C. Selección del sistema de referencia, D. Vista previa de los datos a cargar, E. Selección de la codificación de los datos._</sup>

<div class="notification is-info is-light">
  <b>Nota:</b> Para ver un paso a paso detallado de carga de datos desde un archivo de texto plano, revisar el Paso 5 - Carga de los datos del laboratorio de <a href="https://biodiversidad.co/formacion/laboratorios/QGIS#paso-5---carga-de-los-datos" target="_blank">Validación geográfica con QGIS</a>.
</div>

## Paso alterno - Verificación del sistema de referencia de coordenadas

La carga de capas de datos desde un _shapefile_ o un archivo de texto en QGIS aplica para cualquier Sistema de Referencia de Coordenadas (SRC), ya sea MAGNA SIRGAS de múltiples orígenes (Ejemplo: EPSG: 3116) o UTM. Sin embargo, cuando los datos están en **archivos de texto**, es difícil determinar el SRC de los mismos y saber si se deben cargar en QGIS usando MAGNA SIRGAS origen único (CTM-12), origen Bogotá, origen Este central, etc. Para saber cómo identificar el sistema, se recomienda aplicar el siguiente paso alterno, que es una guía de cómo verificar el Sistema de Referencia en las coordenadas de un archivo de texto plano. 

<div class="notification is-info is-light">
  <b>Nota:</b> Este paso no es obligatorio, pero resulta importante conocerlo para tener una herramienta adicional que permita abordar estos casos particulares.
</div>

Existen algunas aplicaciones web que realizan la transformación de las coordenadas proyectadas a decimales. Luego, es posible verificar si esas coordenadas decimales coinciden con el sitio donde se tomaron las coordenadas usando un  visor como google maps 

Para realizar la verificación de coordenadas, se recomienda utilizar el servicio web de [SuMapa.com](https://sumapa.com/geocalc/geocalc.cfm){:target="_blank"}, el cual incluye  los 5 orígenes de MAGNA-SIRGAS antes del 2020. También se puede utilizar el servicio web del [IGAC](https://origen.igac.gov.co/herramientas.html){:target="_blank"} para el origen nacional CTM-12. 

### Paso alterno 1 - Verificación del sistema de referencia de coordenadas.

En el caso de [SuMapa.com](http://SuMapa.com){:target="_blank"}, es necesario registrarse en la página web antes de realizar la transformación. Posteriormente, hay que ir a la [Calculadora Geodésica OnLine](https://sumapa.com/geocalc/geocalc.cfm){:target="_blank"} y seleccionar uno de los sistemas de origen que ofrece la herramienta. Por ejemplo, <span class="tag is-warning is-light"><i>Bogotá 1975</i></span>, <span class="tag is-warning is-light"><i>MAGNA SIRGAS</i></span> y <span class="tag is-warning is-light"><i>UTM</i></span>. Dado que la idea es identificar el SRC de los datos si se desconoce, es posible que sea necesario iterar entre varias opciones.

Seleccionar <span class="tag is-warning is-light"><i>WGS84</i></span> como sistema de destino y <span class="tag is-warning is-light"><i>Grados decimales</i></span> como formato de salida. Después, se deben pegar las coordenadas de longitud y latitud de los datos en el recuadro amarillo, separándolas por un espacio. Por último, dar clic en <span class="tag is-warning is-light"><i>Convertir</i></span> (Fig. 6).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig8_C4Coordenadas_Magna.png" width=500>

<sup>_Figura 6. Opciones utilizadas en la calculadora geodésica de SuMapa._</sup>

Después de obtener el resultado de las coordenadas en WGS84, se recomienda ponerlas en [Google Maps](https://www.google.com/maps){:target="_blank"} o algún otro servicio de visualización para verificar que los datos caen en el sitio correcto o el descrito en los datos. Si hay coincidencia, el SRC de los datos es correcto; de lo contrario, se deberá cambiar el parámetro de Sistema de Origen en la herramienta hasta que tenga sentido. 

Una vez que se haya identificado el sistema, es necesario usar un SIG como QGIS para cargar el archivo y realizar la transformación de forma masiva como se describe en el paso 1.4  de esta guía.  Adicionalmente, antes de realizar la transformación masiva de las coordenadas, es recomendable que cada registro a transformar tenga un identificador único para poder realizar un cruce de información en caso de ser necesario.

### Paso alterno 2 - Verificación del sistema de referencia de coordenadas MAGNA-SIRGAS origen único.

Ingresar al [Servicio de conversión de coordenadas](https://origen.igac.gov.co/herramientas.html){:target="_blank"} del IGAC. Luego, escribir la coordenada Norte y Este en la parte derecha de la página web y dar clic en <span class="tag is-warning is-light"><i>Convertir desde origen nacional</i></span> (Fig. 7). 

![Figura 7. Opciones utilizadas en el Servicio de conversión de coordenadas del IGAC.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig9_C4Coordenadas_CTM.png)
<sup>_Figura 7. Opciones utilizadas en el Servicio de conversión de coordenadas del IGAC._</sup>

Después de obtener el resultado de las coordenadas en WGS84, se deben pegar en [Google Maps](https://www.google.com/maps){:target="_blank"} u otro servicio de visualización para verificar que los datos caen en el sitio esperado.

Una vez que se haya identificado el sistem, es necesario usar un SIG como QGIS para cargar el archivo y realizar la transformación de forma masiva como se describe en el paso 1.4  de esta guía.  Adicionalmente, antes de realizar la transformación masiva de las coordenadas, es recomendable que cada registro a transformar tenga un identificador único para poder realizar un cruce de información en caso de ser necesario.

## Paso 2 - Exportar los datos con el nuevo origen deseado

Al terminar de cargar los datos (_shapefile_ y archivo de texto plano), hacer clic derecho sobre cualquiera de las capas cargadas en QGIS y seguir la ruta  <span class="tag is-warning is-light"><b><i>Exportar>Guardar objetos como…</i></b></span> (Fig. 8).

![Figura 8. Opciones para la exportación del archivo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig10_C4Coordenadas_MenuExportar.png)
<sup>_Figura 8. Opciones para la exportación del archivo._</sup>

En la ventana emergente aparecen diferentes opciones de exportación. Para realizar la transformación de coordenadas, se deben seleccionar las siguientes opciones:
- Formato: hacer clic en el desplegable y seleccionar <span class="tag is-warning is-light"><i>GeoJSON</i></span> (Fig. 9A).
- Nombre de archivo: hacer clic en el botón con los tres puntos y seleccionar la ubicación y el nombre que se le va a dar al archivo: <span class="tag is-light"><b>PuntoMuestreoWGS84</b></span> (Fig. 9B).
- SRC: Dar clic en el desplegable y seleccionar <span class="tag is-warning is-light"><i>EPSG:4326 - WGS 84</i></span> (Fig. 9C).

<div class="notification is-info is-light">
  <b>Nota:</b> El formato utilizado es GeoJSON, ya que permite tener nombres de columnas de más de 10 caracteres para poder usar los nombres completos de los elementos Darwin Core.
</div>

Dejar las otras opciones por defecto y hacer clic en <span class="tag is-warning is-light"><i>OK</i></span>.

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig11_C4Coordenadas_OpcionesExportar.png" width=450>

<sup>_Figura 9. Opciones para exportar el archivo con el nuevo datum: A. Selección del formato utilizado para exportar los datos, B. Selección del nombre y la ubicación del archivo, C. Selección del sistema de referencia._</sup>

Al hacer clic en <span class="tag is-warning is-light"><i>OK</i></span>, QGIS realizará el proceso de exportación. Este proceso puede tardar uno o dos minutos dependiendo del volumen de los datos y la complejidad de la capa.

<div class="notification is-info is-light">
  <b>Nota:</b> Si aparece una caja de diálogo denominada <b>"Seleccionar transformación para…[Nombre de la capa]"</b>, se debe hacer clic en <span class="tag is-warning is-light"><i>Cancelar</i></span>.
</div>

## Paso 4 - Obtención de las coordenadas decimales WGS84

Con el fin de  visualizar las coordenadas resultado de la transformación, hay que usar la calculadora de campos. Para esto, hacer clic derecho en la capa que se creó (**"PuntoMuestreoWGS84"**) y seleccionar la opción <span class="tag is-warning is-light"><i>Abrir tabla de atributos</i></span>.

Al interior de la tabla de atributos, buscar el icono del ábaco en la barra de herramientas de la parte superior (Fig. 10).

![Figura 10.  Apertura de la calculadora de campos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig12_C4Coordenadas_Tabla.png)
<sup>_Figura 10. Apertura de la calculadora de campos._</sup>

En la ventana emergente aparecen las opciones para crear un nuevo campo. Este proceso se debe realizar dos veces, una para visualizar la longitud y otra para la latitud.

En la calculadora de campos, configurar las siguientes opciones para la longitud inicial y al dar clic en <span class="tag is-warning is-light"><i>OK</i></span>:

- Nombre del campo de salida: <span class="tag is-light"><b>decimalLongitude</b></span>.
- Tipo del campo de salida: <span class="tag is-warning is-light"><i>Número decimal (real)</i></span>.
- Longitud del campo de salida: <span class="tag is-light"><b>10</b></span>.
- Precisión: <span class="tag is-light"><b>6</b></span>.
- Expresión: <span class="tag is-light"><b>$x</b></span>.

![Figura 11. Selección de opciones para crear la nueva columna con la visualización de la longitud decimal.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig13_C4Coordenadas_Calculadora.png)
<sup>_Figura 11. Selección de opciones para crear la nueva columna con la visualización de la longitud decimal: A. Selección del nombre del nuevo campo, B. Selección del tipo de dato, C. Selección de la longitud del campo, D. Selección del número de decimales, E. Fórmula utilizada para crear el campo._</sup>

Luego de haber creado exitosamente este elemento, abrir nuevamente la calculadora de campos y configurar las siguientes opciones para la latitud inicial:

- Nombre del campo de salida: <span class="tag is-light"><b>decimalLatitude</b></span> (Fig. 11A).
- Tipo del campo de salida: <span class="tag is-warning is-light"><i>Número decimal (real)</i></span> (Fig. 11B).
- Longitud del campo de salida: <span class="tag is-light"><b>10</b></span> (Fig. 11C).
- Precisión: <span class="tag is-light"><b>6</b></span> (Fig. 11D).
- Expresión: <span class="tag is-light"><b>$y</b></span> (Fig. 11E).

<div class="notification is-info is-light">
  <b>Nota:</b> Si se requieren las  coordenadas decimales para varios archivos, se recomienda seguir la ruta <span class="tag is-warning is-light"><b><i>Vectorial > Herramientas para gestión de datos > Combinar capas vectoriales…</i></b></span> antes de realizar la exportación.
</div>

Este paso da como resultado una capa con dos nuevas columnas, donde se pueden ver las coordenadas decimales en WGS84.

## Paso 5 - Exportar el resultado final en archivo de texto

El último paso es exportar el resultado de la transformación en un nuevo archivo. Para esto, dar clic derecho sobre la capa **"PuntoMuestreoWGS84"** y seguir la opción <span class="tag is-warning is-light"><b><i>Exportar>Guardar objetos como…</i></b></span>.

En la ventana emergente,  seleccionar las siguientes opciones:

- Formato: Dar clic en el desplegable y seleccionar <span class="tag is-warning is-light"><i>XLSX</i></span> (Fig. 12A).
- Nombre de archivo: Dar clic en el botón con los tres puntos y seleccionar la ubicación y el nombre que le va a dar al archivo: <span class="tag is-light"><b>PuntoMuestreoWGS84.xlsx</b></span> (Fig. 12B).

Por último, dejar las otras opciones por defecto y dar clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig. 12).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_transformaci%C3%B3n-coordenadas-wgs84/Fig14_C4Coordenadas_ExportarExcel.png" width=450>

<sup>_Figura 12. Opciones para exportar el archivo de transectos como un archivo excel: A. Selección del formato utilizado para exportar los datos, B. Selección del nombre y la ubicación del archivo._</sup>

## Paso 6 - Verificación del resultado

Compara los resultados con el siguiente archivo [<FONT FACE="monospace"><b>«PuntoMuestreoWGS84.xlsx»</b></FONT>](https://docs.google.com/spreadsheets/d/1MLaxEqk67YbnZLUdPqynjCcsbylDMTWg/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} para corroborar que se obtuvieron las mismas coordenadas. ¿Qué diferencias hay entre el archivo de referencia y los resultados?


****
**¡Felicitaciones!**

Se han obtenido las coordenadas decimales a partir de una capa geográfica proyectada en MAGNA SIRGAS / CTM-12.

****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
