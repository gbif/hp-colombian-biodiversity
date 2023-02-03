---
layout: documentation
permalink: /formacion/laboratorios/estructuracion-transectos 
title: "Estructuración de transectos en Darwin Core "
description: "Objetivo: Estructurar las coordenadas asociadas a transectos provenientes de archivos shapefile (.shp) al formato adecuado para representarlos en el estándar Darwin Core, utilizado para la publicación de datos sobre biodiversidad."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estructuración de transectos en _Darwin Core_

**Objetivo**

Estructurar las coordenadas asociadas a transectos provenientes de archivos _shapefile_ (.shp) al formato adecuado para representarlos en el estándar _Darwin Core_, utilizado para la publicación de datos sobre biodiversidad.

**Introducción**

Los transectos suelen ser recorridos organizados metodológicamente en los cuáles se realizan observaciones o recolección de especímenes. Estos recorridos suelen ser guardados en el GPS como _Tracks_ y posteriormente se cargan a bases de datos geográficas en formato _shapefile_ (.shp). 

Los datos de fauna que se cargan en las bases de datos geográficas, las cuales están basadas en el diccionario geográfico de la ANLA. Normalmente, estas bases de datos contienen transectos asociados que requieren un tratamiento especial, ya que las coordenadas tienen una geometría diferente de tipo línea o polilínea, usada para representar los transectos, y no la convencional geometría de punto. Esto implica cambios en la forma como se extraen las coordenadas decimales de la base de datos y en su documentación en el estándar _Darwin Core_ (DwC) para lograr una correcta estructuración de los mismos. 

**Sobre la herramienta:**

QGIS es un _software_ de gestión de información geográfica que se ejecuta en múltiples sistemas operativos como _Linux_, _Unix_, _Mac OSX_, _Windows_ y _Android_. También soporta numerosos formatos y funcionalidades de datos vector, datos ráster y bases de datos. Esta herramienta proporciona una creciente gama de servicios, a través de sus funciones básicas y complementos, para visualizar, gestionar, editar, analizar datos y diseñar mapas imprimibles.
QGIS es un software libre y de código abierto, licenciado bajo una GNU (_General Public License_) y soportado como un proyecto de la _Open Source Geospatial Foundation_ (OSGeo). Por lo tanto, no requiere el pago de licencias. Adicionalmente, es impulsado por un grupo de voluntarios que mantienen el _software_ actualizado y las versiones estables, lo cual sostiene a QGIS como uno de los _software_ geográficos más conocidos.

**Requerimientos**

- QGIS (Revisar el proceso de instalación en el primer paso de la guía de [Validación geográfica con QGIS](https://biodiversidad.co/formacion/laboratorios/QGIS#paso-1---instalaci%C3%B3n-de-qgis)).
- Procesador de archivos de texto (Ejemplo: Excel, _Openrefine_, etc.).
- Contar con un mínimo de 4GB de memoria RAM para el desarrollo de esta guía. Para procesos con más de 20 000 registros biológicos, se recomienda tener como mínimo 8GB.

**Archivos de trabajo**

- Descargar el [<FONT FACE="monospace"><b>«Archivo comprimido con el _shapefile_ del Transecto»</b></FONT>](https://drive.google.com/file/d/1zcLwMnkEJ_Nhx2jRxC85neVv-0ytFRJs/view?usp=sharing){:target="_blank"}

--------

## Paso 1 - Carga de los archivos en QGIS

### Paso 1.1 Configuración del SRC en QGIS

Abrir  el software QGIS y seleccionar la opción  <span class="tag is-warning is-light"><b><i>Proyecto > Nuevo</i></b></span>. Luego, configurar el SRC del proyecto para que coincida con el de los archivos a cargar. En este ejercicio, los datos tienen el SRC MAGNA-SIRGAS origen CTM-12. Para implementar esta configuración, seleccionar <span class="tag is-warning is-light"><b><i>Proyecto > Propiedades…</i></b></span>. En la nueva ventana, ir a la pestaña SRC, elegir el sistema de referencia <span class="tag is-warning is-light"><i>MAGNA SIRGAS /  CTM-12</i></span> y dar clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig 1.)

![Figura 1. Selección del Sistema de referencia CTM-12 en QGIS.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig1_C4Transecto_SRC.png)
<sup>_Figura 1. Selección del Sistema de referencia <span class="tag is-warning is-light"><i>CTM-12</i></span> en QGIS._</sup>

<div class="notification is-info is-light">
  <b>Nota:</b> Si no se tiene configurado el origen MAGNA SIRGAS / CTM-12 en QGIS, revisar el primer paso de la guía de Transformación de coordenadas y realizar el proceso de cambio.
</div>

### Paso 1.2 Carga de los archivos en QGIS

Para cargar los archivos _shapeFile_, seguir la ruta <span class="tag is-warning is-light"><b><i>Capa > Añadir capa > Añadir capa vectorial…</i></b></span> (Fig. 2).

![Figura 2. Adición de una capa de tipo vectorial.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig2_C4Transecto_Vectorial.png)
<sup>_Figura 2. Adición de una capa de tipo vectorial._</sup>

En la ventana emergente, hacer clic en el botón con los tres puntos (Fig. 3.1). Después, en la sección **"Fuente"**, seleccionar el archivo con la terminación .shp que contiene los  transectos y dar clic en <span class="tag is-warning is-light"><i>Abrir</i></span> (Fig. 3.2). 

![Figura 3.1. Ventana emergente con la opción de selección del archivo shapefile con los puntos de muestreo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig3_C4Transecto_Seleccion.png)
<sup>_Figura 3.1. Ventana emergente con la opción de selección del archivo _shapefile_ con los puntos de muestreo._</sup>

![Figura 3.2. Selección de los archivos de transectos y polígonos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig4_C4Transecto_Archivo.png)
<sup>_Figura 3.2. Selección de los archivos de transectos y polígonos._</sup>

Para finalizar, dar clic en <span class="tag is-warning is-light"><i>Añadir</i></span>. Con esto ya se podrán visualizar los transectos del archivo _shapefile_ espacializados en QGIS. (Fig. 3.3)

![Figura 3.3. Visualización del archivo shapefile en QGIS.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig5_C4Transecto_Vista.png)
<sup>_Figura 3.3. Visualización del archivo _shapefile_ en QGIS._</sup>

## Paso 2 - Exportar las capas de transectos

Para extraer la información de los transectos, primero es necesario exportarlos con el datum WGS84. Para ello, dar clic derecho sobre la capa recién cargada y elegir la opción <span class="tag is-warning is-light"><b><i>Exportar>Guardar objetos como…</i></b></span> (Fig 4). 

![Figura 4. Menú para la exportación del archivo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig6_C4Transecto_MenuExportar.png)
<sup>_Figura 4. Menú para la exportación del archivo._</sup>

En la ventana emergente se podrán seleccionar las  opciones para realizar la transformación de coordenadas al datum WGS84:
- Formato: Dar clic en el desplegable y seleccionar <span class="tag is-warning is-light"><i>GeoJSON</i></span> (Fig. 5A).
- Nombre de archivo: Dar clic en el botón con los tres puntos y seleccionar la ubicación y el nombre que se le va a dar al archivo: <span class="tag is-light"><b>Transecto WGS84</b></span> (Fig. 5B).
- SRC: Hacer clic en el desplegable y seleccionar <span class="tag is-warning is-light"><i>EPSG:4326 - WGS 84</i></span> (Fig. 5C).

<div class="notification is-info is-light">
  <b>Nota:</b> El formato utilizado es GeoJSON debido a que permite tener nombres de columnas de más de 10 caracteres y así poder poner el nombre completo de algunos elementos <i>Darwin Core</i>.
</div>

Por último, dejar las otras opciones por defecto y dar clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig. 5D).

![Figura 5. Opciones para exportar el archivo con datum WGS84.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig7_C4Transecto_ExportarJson.png)
<sup>_Figura 5. Opciones para exportar el archivo con datum WGS84: A. Selección del formato utilizado para exportar los datos, B. Selección del nombre y la ubicación del archivo, C. Selección del sistema de referencia._</sup>

Luego de hacer clic en <span class="tag is-warning is-light"><i>OK</i></span>, QGIS comenzará a realizar el proceso de exportación y el progreso se podrá ver en una barra en la parte inferior. Al finalizar el proceso, aparecerá una nueva capa con el nombre asignado en el paso anterior.

## Paso 3 - Extraer la información de las coordenadas decimales y la representación Well-Known Text (WKT)

### Paso 3.1 Agregar la representación WKT

Para documentar la información completa de los transectos, se usa el elemento _Darwin Core_ [<span class="tag is-success is-light"><i>footprintWKT</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#footprintWKT), que permite guardar el tipo de geografía y los puntos que la componen.

Para obtener esta información en QGIS, lo ideal es sacar provecho de la calculadora de campos: Dar clic derecho en la nueva capa que creó (<span class="tag is-warning is-light"><i>TransectoWGS84</i></span>) y seleccionar la opción <span class="tag is-warning is-light"><i>Abrir la tabla de atributos</i></span>.

Al interior de la tabla de atributos, buscar el icono del ábaco en la barra de herramientas de la parte superior (Fig. 6).

![Figura 6. Apertura de la calculadora de campos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig8_C4Transecto_Tabla.png)
<sup>_Figura 6. Apertura de la calculadora de campos._</sup>

En la ventana emergente, seleccionar las opciones para crear un nuevo campo con la <span class="tag is-warning is-light"><i>representación WKT</i></span> y luego dar clic en <span class="tag is-warning is-light"><i>OK</i></span>.

Utilice las siguientes opciones:
- Nombre del campo de salida: <span class="tag is-light"><b>footprintWKT</b></span> (Fig. 7A).
- Tipo del campo de salida: <span class="tag is-warning is-light"><i>Texto (cadena)</i></span>(Fig. 7B).
- Longitud del campo de salida: <span class="tag is-light"><b>60000</b></span> (Fig. 7C).
- Expresión: <span class="tag is-light"><b>geomToWKT( $geometry )</b></span> (Fig. 7D).

![Figura 7. Selección de opciones para crear la nueva columna con la representación WKT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig9_C4Transecto_Calculadora.png)
<sup>_Figura 7. Selección de opciones para crear la nueva columna con la representación WKT: A. Selección del nombre del nuevo campo, B. Selección del tipo de dato, C. Selección de la longitud del campo, D. Fórmula utilizada para crear el campo._</sup>

Al finalizar, aparecerá un nuevo atributo denominado footprintWKT en la tabla de atributos, donde se encuentran todas las coordenadas que componen cada parte del transecto. En este sentido, se debe revisar que este campo haya sido creado en la capa **"TransectoWGS84"**.

### Paso 3.2 Agregar la información para los elementos decimalLatitude y decimalLongitude

En el estándar _Darwin Core_, hay dos elementos para guardar la información de la ubicación a partir de la latitud y longitud decimal ([<span class="tag is-success is-light"><i>decimalLatitude</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#decimalLatitude) y [<span class="tag is-success is-light"><i>decimalLongitude</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#decimalLongitude)). Estos campos permiten, entre otras cosas, espacializar los datos en los portales de datos del [SiB Colombia](https://biodiversidad.co/data){:target="_blank"} y [GBIF](https://gbif.org){:target="_blank"}.  Por consiguiente, para el caso de los transectos, se requiere de un par de coordenadas que representen todo el transecto. 

Para documentar las coordenadas decimales de un transecto hay dos opciones: colocar las coordenadas del inicio del transecto o poner las coordenadas de un punto medio del transecto. Desde el EC-SiB Colombia, recomendamos el uso de la última opción, ya que se puede acompañar de un valor de distancia que cubre la incertidumbre de la ubicación de forma más precisa. A continuación, se muestra el proceso con las dos opciones por medio de la herramienta QGIS. 

#### Paso 3.2.1 Cálculo del punto medio del transecto

Para obtener el punto medio del transecto, se usará una opción que ubica el centro corregido del transecto y lo ajusta siguiendo las [buenas prácticas de georreferenciación](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/es/#entidad-geogr%C3%A1fica-curvilinea){:target="_blank"}. 

Para esto, seguir la ruta <span class="tag is-warning is-light"><b><i>Vectorial > Herramientas de geometría > Centroides…</i></b></span>. Luego, elegir la capa con el transecto en WGS84 (<span class="tag is-warning is-light"><i>TransectoWGS84</i></span>) como capa de entrada y seleccionar <span class="tag is-warning is-light"><i>Ejecutar</i></span> (Fig. 8).

![Figura 8. Herramienta para calcular el centroide de los transectos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig10_C4Transecto_Centro.png)
<sup>_Figura 8. Herramienta para calcular el centroide de los transectos._</sup>

Para obtener el centro corregido, ubicar el menú superior y dar clic en <span class="tag is-warning is-light"><b><i>Procesos > Caja de herramientas</i></b></span>. En la opción del buscador, buscar la herramienta <span class="tag is-warning is-light"><i>Ajustar geometrías a capa</i></span> y dar clic en ella.

Como **"Capa de entrada"**, seleccionar la capa creada en el paso anterior, que se denomina <span class="tag is-warning is-light"><i>Centroides</i></span> (Fig. 9A). En la sección **"Capa de referencia"**, elegir el transecto de muestreo en <span class="tag is-warning is-light"><i>WGS84</i></span> (Fig. 9B) y dar clic en <span class="tag is-warning is-light"><i>Ejecutar</i></span>. Esto creará una nueva capa llamada **"Geometría ajustada"**.

![Figura 9. Herramienta para ajustar el centroide al transecto.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig11_C4Transecto_AjustarCentroide.png)
<sup>_Figura 9. Herramienta para ajustar el centroide al transecto: A. Selección de la capa que se va a ajustar, B. Selección de la capa que se va a utilizar como referencia del ajuste._</sup>

Finalmente, se debe calcular la longitud y latitud de los centros corregidos. Para eso, es necesario abrir la tabla de atributos de la capa **"Geometría ajustada"**  y utilizar  la calculadora para crear los elementos <span class="tag is-success is-light"><i>decimalLongitude</i></span> y <span class="tag is-success is-light"><i>decimalLatitude</i></span> con estas opciones:

Para el elemento <span class="tag is-success is-light"><i>decimalLongitude</i></span>, se deben usar estas opciones:
- Nombre del campo de salida: <span class="tag is-light"><b>decimalLongitude</b></span>.
- Tipo del campo de salida: <span class="tag is-warning is-light"><i>Número decimal (real)</i></span>.
- Longitud del campo de salida: <span class="tag is-light"><b>10</b></span>.
- Precisión: <span class="tag is-light"><b>6</b></span>.
- Expresión: <span class="tag is-light"><b>x ( $geometry)</b></span>.

Para el elemento <span class="tag is-success is-light"><i>decimalLongitude</i></span>, se recomienda utilizar estas opciones:
- Nombre del campo de salida: <span class="tag is-light"><b>decimalLatitude</b></span>.
- Tipo del campo de salida: <span class="tag is-warning is-light"><i>Número decimal (real)</i></span>.
- Longitud del campo de salida: <span class="tag is-light"><b>10</b></span>.
- Precisión: <span class="tag is-light"><b>6</b></span>.
- Expresión: <span class="tag is-light"><b>y ( $geometry)</b></span>.

#### Paso 3.2.2 Cálculo de las coordenadas iniciales del transecto

En algunos casos con transectos muy extensos o en límites municipales, el punto medio del transecto puede caer en una localidad diferente a la documentada. En tal caso, se recomienda utilizar el método del punto inicial para que coincida con la localidad.

Para extraer las coordenadas iniciales de los transectos, también se usa la calculadora de campos. Por consiguiente, se debe abrir la tabla de atributos de la capa **"TransectoWGS84"** y configurar las siguientes opciones para la longitud inicial:
- Nombre del campo de salida: <span class="tag is-light"><b>decimalLongitude_inicial</b></span>.
- Tipo del campo de salida: <span class="tag is-warning is-light"><i>Número decimal (real)</i></span>.
- Longitud del campo de salida: <span class="tag is-light"><b>10</b></span>.
- Precisión: <span class="tag is-light"><b>6</b></span>.
- Expresión: <span class="tag is-light"><b>xat(0)</b></span>.

Luego de haber creado exitosamente este elemento, abrir de nuevo la calculadora de campos y configurar las siguientes opciones para la latitud inicial:

- Nombre del campo de salida: <span class="tag is-light"><b>decimalLatitude_inicial</b></span>.
- Tipo del campo de salida: <span class="tag is-warning is-light"><i>Número decimal (real)</i></span>.
- Longitud del campo de salida: <span class="tag is-light"><b>10</b></span>.
- Precisión: <span class="tag is-light"><b>6</b></span>.
- Expresión: <span class="tag is-light"><b>yat(0)</b></span>.

## Paso 4 - Exportar los transectos a archivos de texto

Para realizar la exportación de los resultados obtenidos hasta ahora, es necesario hacer clic derecho sobre la capa **"Geometría ajustada"** y seguir la ruta <span class="tag is-warning is-light"><b><i>Exportar>Guardar objetos como…r</i></b></span>. 

En la ventana emergente, seleccionar las siguientes opciones:
- Formato: Dar clic en el desplegable y elegir <span class="tag is-warning is-light"><i>XLSX</i></span> (Fig. 10A).
- Nombre de archivo: Dar  clic en el botón con los tres puntos y seleccionar la ubicación. Luego, nombrar el archivo como <span class="tag is-light"><b>TransectoDwC.xlsx</b></span> (Fig. 10B). 

Dejar las otras opciones por defecto y dar clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig. 10).

![Figura 10. Opciones para exportar el archivo de transectos como un archivo de Excel.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig12_C4Transecto_ExportarExcel.png)
<sup>_Figura 10. Opciones para exportar el archivo de transectos como un archivo de Excel._</sup>

## Paso 5 - Calcular la incertidumbre de las coordenadas en metros

Para finalizar, se debe calcular la incertidumbre de la coordenada documentada en los elementos <span class="tag is-success is-light"><i>decimalLatitude</i></span> y <span class="tag is-success is-light"><i>decimalLongitude</i></span> con respecto al total del transecto. Esta incertidumbre es una distancia que permite asociar un área que cubre la totalidad del recorrido del transecto. Para ello, es necesario abrir el documento <FONT FACE="monospace"><b>«TransectoDwC.xlsx»</b></FONT>.
y crear una nueva columna al final del archivo que se llame **"coordinateUncertaintyInMeters"**.

En la parte superior de QGIS, seleccionar la herramienta <span class="tag is-warning is-light"><i>Medir línea</i></span>, que tiene forma de regla (Fig. 11). Posteriormente, hacer clic en el centro corregido al interior del transecto (Fig. 11A) y llevar el puntero hasta el extremo más lejano del transecto (Fig. 11B). La distancia entre ambos puntos se muestra en el recuadro de la sección **"Medir"**, junto a la unidad de medida (Fig. 11).

![Figura 11. Pasos para calcular la incertidumbre en metros.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig13_C4Transecto_Medida.png)
<sup>_Figura 11. Pasos para calcular la incertidumbre en metros: A. Centroide corregido como primer punto de la medición, B. Punto externo del transecto utilizado como segundo punto de la medición._</sup>

Esa distancia se debe documentar en el archivo de Excel para cada uno de los transectos, revisando el código del transecto **"ID_MUES_TR"** para asegurarse de que sea el transecto adecuado.

## Paso 6 - Verificación del resultado

Descarga y compara el siguiente archivo, que contiene los transectos representados en _Darwin Core_, con el archivo que se trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Los transectos quedaron correctamente estructurados?

- [<FONT FACE="monospace"><b>«Transectos en DwC»</b></FONT>](https://docs.google.com/spreadsheets/d/1LN5GohVI-AhJCp6kUKapmFu5rszjlwRI/edit?usp=share_link&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} 


****
**¡Felicitaciones!**

Se han extraído las coordenadas y la información para representar transectos en el estándar _Darwin Core_.
****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
