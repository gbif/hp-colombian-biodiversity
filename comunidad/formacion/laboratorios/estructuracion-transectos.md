---
layout: documentation
permalink: /formacion/laboratorios/estructuracion-transectos 
title: "Estructuración de transectos en Darwin Core "
description: "Objetivo: Estructurar las coordenadas asociadas a transectos provenientes de archivos shapefile (.shp) al formato adecuado para representarlos en el estándar Darwin Core, utilizado para la publicación de datos sobre biodiversidad."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estructuración de transectos en Darwin Core 

**Objetivo**

Estructurar las coordenadas asociadas a transectos provenientes de archivos shapefile (.shp) al formato adecuado para representarlos en el estándar _Darwin Core_, utilizado para la publicación de datos sobre biodiversidad.

**Introducción**

Los transectos suelen ser recorridos organizados metodológicamente en los cuáles se realizan observaciones o recolección de especímenes.  Estos transectos suelen ser guardados en el GPS como _Tracks_ y posteriormente se cargan a bases de datos geográficas en formato shapefile (.shp). 

Los datos de fauna que se cargan en las Bases de datos geográficas, las cuales están basadas en  el diccionario geográfico de la ANLA. Normalmente, estas bases de datos contienen transectos asociados que requieren un tratamiento especial, ya que las coordenadas tienen una geometría diferente de tipo línea o polilínea, usada para representar los transectos,  y no la convencional geometría de punto. Esto implica cambios en la forma como se extraen las coordenadas decimales de la base de datos y en su documentación en el estándar _Darwin Core _(DwC) para lograr una correcta estructuración de los mismos. 

**Sobre la herramienta:**

QGIS es un _software_ de gestión de información geográfica que se ejecuta en múltiples sistemas operativos como _Linux_, _Unix_, _Mac OSX_, _Windows_ y _Android_. También soporta numerosos formatos y funcionalidades de datos vector, datos ráster y bases de datos. Esta herramienta proporciona una creciente gama de servicios, a través de sus funciones básicas y complementos, para visualizar, gestionar, editar, analizar datos y diseñar mapas imprimibles.
QGIS es un software libre y de código abierto, licenciado bajo una GNU (_General Public License_) y soportado como un proyecto de la _Open Source Geospatial Foundation_ (OSGeo). Por lo tanto, no requiere el pago de licencias. Adicionalmente, es impulsado por un grupo de voluntarios que mantienen el _software_ actualizado y las versiones estables, lo cual sostiene a QGIS como uno de los _software_ geográficos más conocidos.

**Requerimientos**

- QGIS (Revisar el proceso de instalación en el primer paso de la guía de [Validación geográfica con QGIS](https://biodiversidad.co/formacion/laboratorios/QGIS#paso-1---instalaci%C3%B3n-de-qgis))
- Procesador de archivos de texto (Ejemplo: Excel, _Openrefine_, etc.).
- Contar con un mínimo de 4GB de memoria RAM para el desarrollo de esta guía. Para procesos con más de 20 000 registros biológicos, se recomienda tener como mínimo 8GB.

**Archivos de trabajo**

- Descargar el [Archivo comprimido con el shapefile del Transecto](https://drive.google.com/file/d/1zcLwMnkEJ_Nhx2jRxC85neVv-0ytFRJs/view?usp=sharing){:target="_blank"}

--------

## Paso 1 - Carga de los archivos en QGIS

### Paso 1.1 Configuración del SRC en QGIS

Abrir  el software QGIS y seleccionar la opción _Proyecto>Nuevo_. Configure el SRC del proyecto para que coincida con el de los archivos a cargar. En este ejercicio, los datos tienen el SRC MAGNA-SIRGAS origen CTM-12. Para implementar esta configuración, seleccionar _Proyecto > Propiedades…_ En la nueva ventana, ir a la pestaña SRC, elegir el sistema de referencia MAGNA SIRGAS /  CTM-12 y dar clic en OK (Fig 1.)

![Figura 1. Selección del Sistema de referencia CTM-12 en QGIS.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig1_C4Transecto_SRC.png)
<sup>_Figura 1. Selección del Sistema de referencia CTM-12 en QGIS._</sup>

**Nota**: Si no se tiene configurado el origen MAGNA SIRGAS / CTM-12 en QGIS, revisar el primer paso de la guía de Transformación de coordenadas y realizar el proceso de cambio.

### Paso 1.2 Carga de los archivos en QGIS

Para cargar los archivos shapeFile, seguir la ruta _Capa > Añadir capa > Añadir capa vectorial…_ (Fig. 2).

![Figura 2. Adición de una capa de tipo vectorial.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig2_C4Transecto_Vectorial.png)
<sup>_Figura 2. Adición de una capa de tipo vectorial._</sup>

En la ventana emergente, hacer clic en el botón con los tres puntos (Fig. 3.1). Después, en la sección Fuente, seleccionar el archivo con la terminación .shp que contiene los  transectos y dar clic en Abrir (Fig. 3.2). 

![Figura 3.1. Ventana emergente con la opción de selección del archivo shapefile con los puntos de muestreo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig3_C4Transecto_Seleccion.png)
<sup>_Figura 3.1. Ventana emergente con la opción de selección del archivo shapefile con los puntos de muestreo._</sup>

![Figura 3.2. Selección de los archivos de transectos y polígonos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig4_C4Transecto_Archivo.png)
<sup>_Figura 3.2. Selección de los archivos de transectos y polígonos._</sup>

Para finalizar, dar  clic en Añadir. Con esto ya se podrán visualizar los transectos del archivo shapefile espacializados en QGIS. (Fig. 3.3)

![Figura 3.3. Visualización del archivo shapefile en QGIS.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig5_C4Transecto_Vista.png)
<sup>_Figura 3.3. Visualización del archivo shapefile en QGIS._</sup>

## Paso 2 - Exportar las capas de transectos

Para extraer la información de los transectos, primero es necesario exportarlos con el datum WGS84. Para ello,  dar  clic derecho sobre la capa recién cargada y elegir la opción _Exportar>Guardar objetos como…_ (Fig 4). 

![Figura 4. Menú para la exportación del archivo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig6_C4Transecto_MenuExportar.png)
<sup>_Figura 4. Menú para la exportación del archivo._</sup>

En la ventana emergente se podrán seleccionar las  opciones para realizar la transformación de coordenadas al datum WGS84:
- Formato: Dar clic en el desplegable y seleccionar GeoJSON (Fig. 5A).
- Nombre de archivo: Dar clic en el botón con los tres puntos y seleccionar la ubicación y el nombre que se le va a dar al archivo: **Transecto WGS84** (Fig. 5B).
- SRC: Hacer clic en el desplegable y seleccionar EPSG:4326 - WGS 84 (Fig. 5C).

**Nota**: El formato utilizado es GeoJSON debido a que permite tener nombres de columnas de más de 10 caracteres y así poder poner el nombre completo de algunos elementos Darwin Core.

Por último, dejar las otras opciones por defecto y dar clic en OK (Fig. 5D).

![Figura 5. Opciones para exportar el archivo con datum WGS84.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig7_C4Transecto_ExportarJson.png)
<sup>_Figura 5. Opciones para exportar el archivo con datum WGS84: A. Selección del formato utilizado para exportar los datos, B. Selección del nombre y la ubicación del archivo, C. Selección del sistema de referencia._</sup>

Luego de hacer clic en OK, QGIS comenzará a realizar el proceso de exportación y podrá ver el progreso en una barra en la parte inferior.  Al finalizar el proceso, aparecerá una nueva capa con el nombre asignado en el paso anterior.

## Paso 3 - Extraer la información de las coordenadas decimales y la representación Well-Known Text (WKT)

### Paso 3.1 Agregar la representación WKT

Para documentar la información completa de los transectos, se usa el elemento _Darwin Core_ [footprintWKT](https://biodiversidad.co/compartir/estandar-darwin-core/#footprintWKT), que permite guardar el tipo de geografía y los puntos que la componen.

Para obtener esta información en QGIS, lo ideal es sacar provecho de la calculadora de campos: Dar clic derecho en la nueva capa que creó TransectoWGS84 y seleccionar la opción **Abrir la tabla de atributos**.

Al interior de la tabla de atributos, buscar el icono del ábaco en la barra de herramientas de la parte superior (Fig. 6).

![Figura 6. Apertura de la calculadora de campos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig8_C4Transecto_Tabla.png)
<sup>_Figura 6. Apertura de la calculadora de campos._</sup>

En la ventana emergente, seleccionar las opciones para crear un nuevo campo con la representación WKT y luego dar clic en OK.

Utilice las siguientes opciones:
- Nombre del campo de salida: footprintWKT (Fig. 7A).
- Tipo del campo de salida: Texto (cadena)(Fig. 7B).
- Longitud del campo de salida: 60000 (Fig. 7C).
- Expresión: geomToWKT( $geometry ) (Fig. 7D).

![Figura 7. Selección de opciones para crear la nueva columna con la representación WKT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig9_C4Transecto_Calculadora.png)
<sup>_Figura 7. Selección de opciones para crear la nueva columna con la representación WKT: A. Selección del nombre del nuevo campo, B. Selección del tipo de dato, C. Selección de la longitud del campo, D. Fórmula utilizada para crear el campo._</sup>

Al finalizar, aparecerá un nuevo atributo denominado footprintWKT en la tabla de atributos, donde se encuentran todas las coordenadas que componen cada parte del transecto. En este sentido, se debe revisar que este campo haya sido creado en la capa TransectoWGS84.

### Paso 3.2 Agregar la información para los elementos decimalLatitude y decimalLongitude

En el estándar Darwin Core, hay dos elementos para guardar la información de la ubicación a partir de la latitud y longitud decimal ([decimalLatitude](https://biodiversidad.co/compartir/estandar-darwin-core/#decimalLatitude) y [decimalLongitude](https://biodiversidad.co/compartir/estandar-darwin-core/#decimalLongitude)). Estos campos permiten, entre otras cosas, espacializar los datos en los portales de datos del [SiB Colombia](https://biodiversidad.co/data) y [GBIF](https://gbif.org){:target="_blank"}.  Por consiguiente, para el caso de los transectos, se requiere de un par de coordenadas que representen todo el transecto. 

Para la documentación de las coordenadas decimales de un transecto hay dos opciones: colocar las coordenadas del inicio del transecto o poner las coordenadas de un punto medio del transecto. Desde el EC-SiB Colombia, recomendamos el uso de la última opción, pues se puede acompañar de un valor de distancia que cubre la incertidumbre de la ubicación de forma más precisa. A continuación, se muestra el proceso con las dos opciones, haciendo uso de la herramienta QGIS. 

#### Paso 3.2.1 Cálculo del punto medio del transecto

Para obtener el punto medio del transecto, se usará una opción que ubica el centro corregido del transecto y lo ajusta siguiendo las [buenas prácticas de georreferenciación](https://docs.gbif.org/georeferencing-quick-reference-guide/1.0/es/#entidad-geogr%C3%A1fica-curvilinea){:target="_blank"}. 

Para esto, seleccionar la opción _Vectorial > Herramientas de geometría > Centroides…_ Luego, elegir la capa con el transecto en WGS84 (TransectoWGS84) como capa de entrada y seleccionar Ejecutar (Fig. 8).

![Figura 8. Herramienta para calcular el centroide de los transectos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig10_C4Transecto_Centro.png)
<sup>_Figura 8. Herramienta para calcular el centroide de los transectos._</sup>

Para obtener el centro corregido, abrir la caja de herramientas, dando clic en el menú superior en _Procesos > Caja de herramientas_.

En la opción del buscador, buscar la herramienta: _Ajustar geometrías a capa_ y dar clic en ella.

Como _Capa de entrada_, seleccionar la capa creada en el paso anterior, que se denomina **Centroides** (Fig. 9A). En la opción _Capa de referencia_, elegir el transecto de muestreo en WGS84 (Fig. 9B) y dar clic en Ejecutar. Esto creará una nueva capa llamada _Geometría ajustada_.

![Figura 9. Herramienta para ajustar el centroide al transecto.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig11_C4Transecto_AjustarCentroide.png)
<sup>_Figura 9. Herramienta para ajustar el centroide al transecto: A. Selección de la capa que se va a ajustar, B. Selección de la capa que se va a utilizar como referencia del ajuste._</sup>

Finalmente, se debe calcular la longitud y latitud de los centros corregidos. Para eso, es necesario abrir la tabla de atributos de la capa Geometría ajustada  y utilizar  la calculadora para crear los elementos _decimalLongitude_ y _decimalLatitude_ con estas opciones:

Para el elemento _decimalLongitude_ utilice estas opciones:
- Nombre del campo de salida: decimalLongitude.
- Tipo del campo de salida: Número decimal (real).
- Longitud del campo de salida: 10 .
- Precisión: 6.
- Expresión: x ( $geometry).

Para el elemento _decimalLatitude_ utilice estas opciones:
- Nombre del campo de salida: decimalLatitude.
- Tipo del campo de salida: Número decimal (real).
- Longitud del campo de salida: 10.
- Precisión: 6.
- Expresión: y ($geometry).

#### Paso 3.2.2 Cálculo de las coordenadas iniciales del transecto

En algunos casos con transectos muy extensos o en límites municipales,  al calcular el punto medio del transecto, este  puede caer en una localidad diferente a la documentada. En tal caso,  se recomienda utilizar el método del punto inicial para que coincida con la localidad.

Para extraer las coordenadas iniciales de los transectos, también se usa  la calculadora de campos. Por consiguiente, se debe abrir la tabla de atributos de la capa TransectoWGS84 y configurar las siguientes opciones para la longitud inicial en la calculadora de campos:
- Nombre del campo de salida: decimalLongitude_inicial.
- Tipo del campo de salida: Número decimal (real).
- Longitud del campo de salida: 10.
- Precisión: 6.
- Expresión: xat(0).

Luego de haber creado exitosamente este elemento, abrir de nuevo  la calculadora de campos y configurar las siguientes opciones para la  latitud inicial:

- Nombre del campo de salida: decimalLatitude_inicial.
- Tipo del campo de salida: Número decimal (real).
- Longitud del campo de salida: 10.
- Precisión: 6.
- Expresión: yat(0).

## Paso 4 - Exportar los transectos a archivos de texto

Para realizar la exportación de los resultados obtenidos hasta ahora, es necesario hacer clic derecho sobre la capa Geometría ajustada y seguir la ruta _Exportar>Guardar objetos como…_

En la ventana emergente, seleccionar las siguientes opciones:
- Formato: Dar clic en el desplegable y elegir XLSX  (Fig. 10A).
- Nombre de archivo: Dar  clic en el botón con los tres puntos y seleccionar la ubicación nombrar el archivo como **TransectoDwC.xlsx** (Fig. 10B). 

Dejar las otras opciones por defecto y dar clic en OK (Fig. 10).

![Figura 10. Opciones para exportar el archivo de transectos como un archivo de Excel.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig12_C4Transecto_ExportarExcel.png)
<sup>_Figura 10. Opciones para exportar el archivo de transectos como un archivo de Excel._</sup>

## Paso 5 - Calcular la incertidumbre de las coordenadas en metros

Para finalizar, se debe calcular la incertidumbre de la coordenada documentada en los elementos decimalLatitude y decimalLongitude con respecto al total del transecto. Esta incertidumbre es una distancia que permite asociar un área que cubre la totalidad del recorrido del transecto. Para ello,  es necesario abrir el **TransectoDwC.xlsx**.
y crear una nueva columna al final del archivo que se llame _coordinateUncertaintyInMeters_.

En la parte superior de QGIS, seleccionar la herramienta _Medir línea_, la cual tiene forma de regla (Fig. 11). Posteriormente, hacer clic en el centro corregido al interior del transecto (Fig. 11A) y llevar el puntero hasta el punto más lejano del transecto (Fig. 11B). La distancia entre ambos puntos se muestra en el recuadro de la sección “**Medir**”, junto a la unidad de medida (Fig. 11)

![Figura 11. Pasos para calcular la incertidumbre en metros.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_%20estructuracion-transectos/Fig13_C4Transecto_Medida.png)
<sup>_Figura 11. Pasos para calcular la incertidumbre en metros: A. Centroide corregido utilizado como primer punto de la medición, B. Punto externo del transecto utilizado como segundo punto de la medición._</sup>

Esa distancia se va a documentar en el archivo de Excel para cada uno de los transectos, revisando el código del transecto ID_MUES_TR para asegurarse de que sea el transecto adecuado.

## Paso 6 - Verificación del resultado

Descarga y compara el siguiente archivo, que contiene los transectos representados en Darwin Core, con el archivo que se trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Los transectos quedaron correctamente estructurados?

- [Transectos en DwC](https://docs.google.com/spreadsheets/d/1LN5GohVI-AhJCp6kUKapmFu5rszjlwRI/edit?usp=share_link&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} 


****
**¡Felicitaciones!**

Las coordenadas y la información para representar transectos en el estándar Darwin Core han sido extraídas

****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
