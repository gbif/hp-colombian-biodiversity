---
layout: documentation
permalink: /formacion/estructuracion-eventos-bd-geografica
title: "Estructuración de eventos al DwC desde una Base de datos geográfica"
description: "Estructurar los eventos de muestreo presentes en una base de datos geográfica, según el Diccionario Geográfico de la ANLA, para que sigan el estándar Darwin Core y cumplan los requisitos de publicación a través del SiB Colombia."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estructuración de eventos al DwC desde una base de datos geográfica

**Objetivo**

Estructurar los eventos de muestreo presentes en una base de datos geográfica, según el Diccionario Geográfico de la ANLA, para que sigan el estándar Darwin Core y cumplan los requisitos de publicación a través del SiB Colombia.

**Introducción**

A partir de las Bases de datos geográficas utilizadas por la ANLA, es posible obtener información de los eventos de muestreo y los registros biológicos obtenidos durante los estudios ambientales. Esta información se estructura de acuerdo al [<FONT FACE="monospace"><b>«Diccionario de Datos Geográficos»</b></FONT>](https://www.anla.gov.co/01_anla/documentos/informacion_geografica/diccionario_datos_geograficos_anla.xlsx){:target="_blank"}, el cual establece los componentes y temáticas de las bases de datos geográficas. A partir de este diccionario, se identificaron los archivos que contienen información de los eventos de muestreo, los cuales están distribuidos en los componentes HIDROLOGIA, BIOTICO_CONTI_COSTE y MARINO.

Para realizar la publicación de esta información a través del SiB Colombia, es necesario realizar un proceso de estructuración de los eventos al estándar _Darwin Core_. En esta guía, se utilizará una base de datos geográfica que contiene algunas de las capas que se encuentran frecuentemente en este tipo de archivos. Sin embargo, el número de capas puede variar dependiendo del proyecto y de la versión del diccionario de la ANLA.

En este ejercicio, se realizará el proceso de estructuración con un evento de flora, documentado en una base de datos geográfica, bajo el modelo ANLA. No obstante, se puede realizar el mismo proceso con otros eventos de muestreo que estén en las fuentes de datos, siguiendo los mismos pasos generales que se describen en la guía. Para ello, existen algunas notas informativas sobre el proceso de estructuración de otros eventos de muestreo.

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Requerimientos**

- Tener QGIS instalado (revisar el proceso en el primer paso de la guía de [Validación geográfica con QGIS](https://biodiversidad.co/formacion/laboratorios/QGIS#paso-1---instalaci%C3%B3n-de-qgis).
- Tener un procesador de archivos de texto como Excel.
- Contar con un mínimo de 4GB de memoria RAM para el desarrollo de esta guía. Para procesos con más de 20 000 registros biológicos, se recomienda tener como mínimo 8GB.

**Archivos de trabajo**

- Descargar la [<FONT FACE="monospace"><b>«BaseDatosGeografica_prueba.zip»</b></FONT>](https://drive.google.com/file/d/1sJfJ_8msYnYcZ1c9GWJ8zUZLebTSVzKG/view?usp=share_link){:target="_blank"} comprimida.


--------

## Paso 1 - Carga de los datos a QGIS

Descargar el archivo [<FONT FACE="monospace"><b>«BaseDatosGeografica_prueba.zip»</b></FONT>](https://drive.google.com/file/d/1sJfJ_8msYnYcZ1c9GWJ8zUZLebTSVzKG/view?usp=share_link){:target="_blank"} y extraer  su contenido: <FONT FACE="monospace"><b>«BaseDatosGeografica.gdb»</b></FONT>. Esta carpeta debe conservarse con la terminación “.gdb”. Para descomprimir el archivo descargado, se puede usar cualquier  programa de descompresión de archivos que se tenga instalado. Por ejemplo,  _WinZip_, _WinRAR_, _7Z_ u otros. 

Posteriormente, abrir el software QGIS y crear un nuevo proyecto. En el nuevo proyecto, seguir la ruta para cargar la base de datos geográfica: <span class="tag is-warning is-light"><b><i>Capa > Añadir capa > Añadir capa vectorial…</i></b></span> (Fig. 1).

![Figura 1. Adición de una capa de tipo vectorial.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig1_C4Eventos_Vectorial.png)
<sup>_Figura 1. Adición de una capa de tipo vectorial._</sup>

En la ventana emergente, hacer clic en la opción <span class="tag is-warning is-light"><i>Directorio</i></span> (Fig. 2A) y seleccionar <span class="tag is-warning is-light"><i>AbrirArchivoGDB</i></span> en el desplegable de la sección **“Tipo”** (Fig. 2B). 

![Figura 2. Selección de directorio para abrir un archivo .gdb.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig2_C4Eventos_Directorio.png)
<sup>_Figura 2. Selección de directorio para abrir un archivo .gdb: A. Selección de directorio como tipo de fuente, B. Selección del tipo de archivo a cargar._</sup>

En la sección **"Conjunto (s) de datos vectoriales"**,  hacer clic en el botón con los tres puntos (Fig. 3). Posteriormente, seleccionar la ubicación de la carpeta que se ha descomprimido: <FONT FACE="monospace"><b>«BaseDatosGeografica.gdb»</b></FONT> en la ventana emergente y hacer clic en <span class="tag is-warning is-light"><i>Abrir</i></span> (Fig. 3).

![Figura 3. Selección carpeta descomprimida.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig3_C4Eventos_Archivo.png)
<sup>_Figura 3. Selección carpeta descomprimida._</sup>

Para finalizar el proceso de carga, hacer clic en el botón <span class="tag is-warning is-light"><i>Añadir</i></span> (Fig. 4). Se abrirá una nueva ventana emergente que mostrará todas las capas que se encuentran al interior de la base de datos geográfica. Es recomendable seleccionar todas las capas (Fig. 4). Luego, dar clic en <span class="tag is-warning is-light"><i>Añadir capas</i></span> (Fig. 4). Este proceso puede tomar algunos minutos si la base de datos es muy compleja y pesa varias megas.

![Figura 4. Selección y adición de capas.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig4_C4Eventos_Capas.png)
<sup>_Figura 4. Selección y adición de capas._</sup>

Si se están cargando datos en MAGNA SIRGAS origen único (CTM12) y dependiendo de la versión de QGIS que se esté utilizando, es posible que luego de hacer clic en <span class="tag is-warning is-light"><i>Añadir</i></span> ocurra alguna de las siguientes situaciones: 

1. QGIS identifica el Sistema de Referencia de Coordenadas (SRC) automáticamente y no se abre ninguna ventana emergente. Si este es el caso, es posible pasar directamente al paso 2 de esta guía. 
2. Aparece una nueva ventana con la opción de cargar los datos, sugiriendo otro Sistema de Referencia de Coordenadas (SRC). Si al hacer clic en el <span class="tag is-warning is-light"><i>Cancel</i></span> (Fig. 5) de la esquina inferior derecha de QGIS (Fig. 6A) aparece automáticamente el SRC MAGNA SIRGNA/CTM12. (Ej: <span class="tag is-light"><b>USER:100000</b></span>), se recomienda seguir con el paso 2 de esta guía.
3. Aparece una nueva ventana con la opción de cargar los datos, sugiriendo otro Sistema de Referencia de Coordenadas (SRC). Se debe hacer clic en <span class="tag is-warning is-light"><i>Cancel</i></span> (Fig. 5). Si aparece <span class="tag is-warning is-light"><i>SRC desconocido</i></span> en la esquina inferior derecha (Fig. 6A), es necesario crear un sistema de origen único para configurar el SRC del proyecto. En este caso, se debe seguir el paso 1.1. de la guía de [Transformación de coordenadas Magna-Sirgas a coordenadas decimales en WGS84](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/transformacion-coordenadas-wgs84){:target="_blank"}.

![Figura 5. Opciones  sugiriendo otro Sistema de Referencia para los datos cargados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig5_C4Eventos_Cancelar.png)
<sup>_Figura 5. Opciones  sugiriendo otro Sistema de Referencia para los datos cargados._</sup>

![Figura 6. Selección del SRC del proyecto.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig6_C4Eventos_SRCDesconocido.png)
<sup>_Figura 6. Selección del SRC del proyecto: A. Selección de la opción <span class="tag is-warning is-light"><i>SRC desconocido</i></span>, B. Selección del SRC creado por el usuario._</sup>

## Paso 2. Identificación de los archivos asociados a eventos de muestreo

Una vez que se haya cargado la información cargada en QGIS, es necesario explorar las capas relacionadas con los eventos de muestreo. Los archivos que contienen esta información se encuentran representados en la Tabla 1.

Tabla 1. Nombre de las capas que contienen información de los eventos de muestreo.


|Componente del Diccionario Geográfico ANLA|Nombre del archivo en la Base de datos Geográfica|Tipo de geometría|
|---|---|---|
|HIDROLOGIA|PuntoMuestreoAguaSuper|Punto|
|BIOTICO_CONTI_COSTE|PuntoMuestreoFlora|Punto|
|BIOTICO_CONTI_COSTE|PuntoMuestreoFauna|Punto|
|BIOTICO_CONTI_COSTE|TransectoMuestreoFauna|Línea|
|MARINO|MuestreoFloraMarina|Punto|
|MARINO|MuestreoFaunaMarina|Punto|
|MARINO|TransectoFaunaMarina|Línea|
|MARINO|PuntoObservacionFaunaMarina|Punto|
|MARINO|PuntoMuestreoAguaMarino|Punto|

<div class="notification is-info is-light">
  <b>Nota:</b> En algunas ocasiones, las Bases de datos geográficas pueden tener capas adicionales asociadas a información extra que fue tomada en el marco de un proyecto particular. Por esta razón, se recomienda realizar una revisión general de los nombres de las capas para identificar posible información adicional.

En esta guía se propone un muestreo de flora como punto de partida. Para revisar la información contenida en el archivo PuntoMuestreoFlora, hacer clic derecho y seleccionar “Abrir tabla de atributos” en el menú lateral izquierdo (Fig. 7). En la nueva ventana, se puede ver la tabla con todos los puntos de muestreo. Cada fila representa un punto de muestreo y cada columna un atributo de la tabla según el <a href="https://www.anla.gov.co/01_anla/documentos/informacion_geografica/diccionario_datos_geograficos_anla.xlsx" target="_blank">Diccionario de Datos Geográficos</a>. Después de realizar una revisión general de la tabla, es necesario cerrar la ventana y regresar al menú principal de QGIS.
</div>

![Figura 7. Atributos en la capa **"PuntoMuestreoFlora"**.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig7_C4Eventos_Tabla.png)
<sup>_Figura 7. Atributos en la capa PuntoMuestreoFlora._</sup>

## Paso 3. Transformación de coordenadas a WGS84 para los eventos de muestreo

Debido a que la recomendación del estándar _Darwin Core_ es utilizar coordenadas decimales con datum WGS84, el proceso de transformación se desarrollará directamente en QGIS.

Realizar la transformación a coordenadas decimales en WGS84 de la capa **"PuntoMuestreoFlora¨**, Es importante recordar que para las capas que tienen la geometría de tipo punto (Tabla 1), se debe seguir la guía de [Transformación de coordenadas Magna-Sirgas a coordenadas decimales en WGS84](https://biodiversidad.co/formacion/laboratorios/transformacion-coordenadas-wgs84){:target="_blank"} y para las capas con geometría tipo línea (Ver Tabla 1), es necesario seguir la guía [Representando transectos en DwC](https://biodiversidad.co/formacion/laboratorios/estructuracion-transectos){:target="_blank"}. En este caso, se debe usar la primera guía. 

### Paso alterno: caso transectos.

Normalmente, los transectos presentes en las Bases de datos geográficas (tabla 1) están construidos con varios segmentos de línea en vez de una sola línea continua. En tal caso, es necesario realizar un proceso adicional antes de exportar la capa de los transectos, el cual se conoce como ¨Disolución" y tiene como objetivo unir todos los transectos con el mismo identificador. Para este ejercicio, el identificador sería el código <span class="tag is-light"><b>ID_MUES_TR</b></span>. 

Por otro lado, si se quiere estructurar una capa tipo línea, se recomienda seguir estos pasos:

Seleccionar la opción <span class="tag is-warning is-light"><b><i>Vectorial > Herramientas de geoproceso > Disolver…</i></b></span> en QGIS. Cuando aparezca la nueva ventana, elegir la capa de transecto dando clic en el desplegable  <span class="tag is-warning is-light"><i>Capa de entrada</i></span> (Fig. 8A). En la sección “**Disolver campo(s)**”, hacer clic en los tres puntos y seleccionar el código de los transectos <span class="tag is-light"><b>ID_MUES_TR</b></span> Por último, dar clic en <span class="tag is-warning is-light"><b>OK</b></span> (Fig. 8B).

Para finalizar, hacer clic en <span class="tag is-warning is-light"><b>Ejecutar</b></span> y esperar a que el proceso termine.

![Figura 8. Procedimiento para realizar la disolución de los transectos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig8_C4Eventos_Disolver.png)
<sup>_Figura 8. Procedimiento para realizar la disolución de los transectos: A. Selección de la capa que se va a disolver, B. Selección del campo <span class="tag is-light"><b>ID_MUES_TR</b></span>, utilizado como código en la disolución._</sup>

Una vez que haya finalizado la disolución de los transectos, se pueden transformar las coordenadas de los transectos a WGS84 en las capas con geometría tipo línea (Ver Tabla 1). Para ello, se recomienda seguir la guía [Representando transectos en DwC](https://biodiversidad.co/formacion/laboratorios/estructuracion-transectos). Luego, es posible continuar con el paso 4 de esta guía.

## Paso 4. Exportar las capas del evento de muestreo 

Después de realizar la transformación de coordenadas a WGS84 en el archivo <FONT FACE="monospace"><b>«PuntoMuestreoFlora»</b></FONT> y agregar los elementos <span class="tag is-success is-light"><i>decimalLatitude</i></span> y <span class="tag is-success is-light"><i>decimalLongitude</i></span>, se debe exportar el resultado obtenido para comenzar con el proceso de estructuración. Para ello, hacer clic derecho sobre la capa con los nuevos elementos y seguir la ruta <span class="tag is-warning is-light"><b><i>Exportar>Guardar objetos como…</i></b></span>.

En la ventana emergente,  seleccionar las siguientes opciones:
- **"Formato"**: dar  clic en el desplegable y elegir <span class="tag is-warning is-light"><i>XLSX</i></span> (Fig. 9A).
- **¨Nombre de archivo¨**: dar clic en el botón con los tres puntos para elegir la ubicación y el nombre que se le va a dar al archivo. En este caso, se recomienda guardarlo como <span class="tag is-light"><b>Evento_MuestreoFlora.xlsx</b></span> (Fig. 9B).

Por último, dejar las otras opciones por defecto y dar clic en <span class="tag is-warning is-light"><b>OK</b></span> (Fig. 9).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig9_C4Eventos_ExportarExcel.png" width=450>

<sup>_Figura 9. Opciones para exportar el archivo de eventos de flora como un archivo tipo Excel: A. Selección del formato utilizado para exportar los datos, B. Selección del nombre y la ubicación del archivo._</sup>

## Paso 5. Mapeo de los datos

Después de haber exportado el archivo de los eventos de flora, abrir el resultado <FONT FACE="monospace"><b>«Evento_MuestreoFlora.xlsx»</b></FONT> en Excel.

Debido a que los atributos  de las tablas en una base de datos geográfica, organizada bajo el Diccionario Geográfico de la ANLA, deben ser los mismos, el Equipo Coordinador del SiB Colombia ha construido el archivo [<FONT FACE="monospace"><b>«Mapeo diccionario ANLA 2020-Eventos al DwC»</b></FONT>](https://docs.google.com/spreadsheets/d/17ys5dkCNZDXpeguHbnnTI-RYiJPyMQz4HuRO-FLcaUE/edit#gid=0){:target="_blank"}. Este archivo contiene el nombre de los atributos en una base de datos geográfica, el tipo de coincidencia de cada atributo con el estándar _Darwin Core_, el nombre del elemento _Darwin Core_ con el que coincide y un comentario adicional cuando sea necesario. Por consiguiente, se recomienda abrir este archivo y utilizarlo para realizar el proceso de mapeo.

A continuación, se describe la definición de la coincidencia del atributo con el _Darwin Core_:

- **Total**: el contenido del atributo coincide completamente con la definición del elemento _Darwin Core_.
- **Parcial**:  coincidencia parcial del atributo con algún elemento del _Darwin Core_. Es necesario realizar ajustes en el contenido del atributo para que haya coincidencia con el elemento _Darwin Core_. Se recomienda revisar la definición del elemento en la documentación en línea del estándar y hacer los ajustes necesarios.
- **Nula**: no hay coincidencia con ningún elemento del Darwin Core y por tanto no debe ser mapeado.

Con base en lo anterior, se deben seguir estos pasos:

- Modificar el nombre de las columnas documentadas como coincidencia total en el archivo <FONT FACE="monospace"><b>«Evento_MuestreoFlora.xlsx»</b></FONT> (Fig. 10).
- Revisar el contenido de las columnas documentadas como coincidencia parcial, realizando los ajustes de acuerdo a las definiciones, recomendaciones y ejemplos de la documentación en línea  del elemento _Darwin Core_, antes de hacer el mapeo (Fig. 10).
- En el archivo <FONT FACE="monospace"><b>«Evento_MuestreoFlora.xlsx»</b></FONT>,  eliminar las columnas que tienen una coincidencia nula en el archivo de mapeo (Fig. 10).

![Figura 10.  Proceso de mapeo para los elementos del evento de muestreo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig10_C4Eventos_Mapeo.png)
<sup>_Figura 10. Proceso de mapeo para los elementos del evento de muestreo._</sup>

- Al finalizar el proceso de mapeo con las columnas existentes, se deben eliminar las columnas que estén vacías o documentadas con <span class="tag is-light"><b>Null</b></span>.

## Paso 6. Creación de elementos obligatorios y ajuste de elementos documentados

Es necesario verificar que todos los elementos obligatorios para los eventos de muestreo estén debidamente documentados. Para lograr esto, se necesita revisar la definición de los siguientes elementos en la [documentación en línea del estándar Darwin Core](https://biodiversidad.co/compartir/estandar-darwin-core/){:target="_blank"} y crear o ajustar el elemento correspondiente con base en los ejemplos.

Elementos obligatorios para los eventos de muestreo:

- [<span class="tag is-success is-light"><i>eventID</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#eventID){:target="_blank"}: Cada evento de muestreo debe tener un identificador único, evitando el uso de espacios en blanco y carácteres especiales. Se crea concatenando una palabra clave referente a grupo biológico y la información presente en la columna del código del evento **"ID_MUEST"**.  Puede utilizar la opción <span class="tag is-warning is-light"><i>CONCATENAR()</i></span> para hacerlo de forma masiva en Excel.
  - Ejemplo:  <span class="tag is-light"><b>Flora_DC01</b></span>.
- [<span class="tag is-success is-light"><i>eventDate</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#eventDate){:target="_blank"}: Cada evento de muestreo debe tener la fecha documentada según la ISO 8601. Es posible utilizar un rango temporal en el caso de que no se tenga la fecha exacta.
- [<span class="tag is-success is-light"><i>country</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#country){:target="_blank"}: Cada evento de muestreo debe tener documentado el nombre completo del país donde se tomaron los datos.

También es necesario hacer ajustes en algunas columnas para que sigan el formato sugerido por el estándar _Darwin Core_ y crear algunas nuevas columnas para enriquecer la información documentada. Para realizar este proceso, es necesario revisar las definiciones y vocabularios controlados en la [documentación en línea del estándar Darwin Core](https://biodiversidad.co/compartir/estandar-darwin-core/), haciendo énfasis en los siguientes elementos:

- [<span class="tag is-success is-light"><i>sampleSizeValue</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#sampleSizeValue){:target="_blank"}: Revisar que el separador decimal sea un punto, que tenga máximo 5  cifras decimales y que tenga su unidad correspondiente en el elemento [<span class="tag is-success is-light"><i>sampleSizeUnit</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#sampleSizeUnit). 
- [<span class="tag is-success is-light"><i>municipality</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#municipality): Ajustar este elemento con los nombres asignados en la División Política Administrativa de Colombia - DANE.
- [<span class="tag is-success is-light"><i>minimumElevationInMeters</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#minimumElevationInMeters){:target="_blank"}: Documentar este elemento con la información que está presente en <span class="tag is-success is-light"><i>verbatimElevation</i></span>, modificando el separador decimal por un punto y limitando a uno el número de decimales. 
- [<span class="tag is-success is-light"><i>minimumDepthInMeters</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#minimumDepthInMeters){:target="_blank"}: Documentar este elemento con la información que está presente en <span class="tag is-success is-light"><i>verbatimDepth</i></span>, modificando el separador decimal por un punto y limitando a uno el número de decimales. 
- [<span class="tag is-success is-light"><i>verbatimSRS</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#verbatimSRS){:target="_blank"}: Documentar este elemento con la información del sistema de referencia en el que estaban las coordenadas originales. En este caso, “MAGNA-SIRGAS origen CTM-12”.
- [<span class="tag is-success is-light"><i>geodeticDatum</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#geodeticDatum){:target="_blank"}: Documentar este elemento con la información del sistema de referencia en el que quedaron las coordenadas decimales. En este caso, “WGS84”. 
- [<span class="tag is-success is-light"><i>continent</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#continent){:target="_blank"}: Documentar el continente con el vocabulario controlado.

Adicionalmente, es necesario realizar ajustes en algunos elementos que fueron mapeados al estándar pero tienen la información documentada, utilizando códigos del Diccionario Geográfico. Para ello, descargar y abrir el [Diccionario de Datos Geográficos](https://www.anla.gov.co/01_anla/documentos/informacion_geografica/diccionario_datos_geograficos_anla.xlsx){:target="_blank"}. luego, ir a la pestaña **“DOMINIOS”**, allí se puede identificar la descripción a la que corresponde cada uno de los códigos para realizar el ajuste en el archivo de estructuración, reemplazando el código por la información correspondiente (Fig. 11)

![Figura 11. Uso de los dominios en el Diccionario Geográfico para documentar la información.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-eventos-base-de-datos-geografica/Fig11_C4Eventos_Diccionario.png)
<sup>_Figura 11. Uso de los dominios en el Diccionario Geográfico para documentar la información._</sup>

## Paso 7. Verificación del resultado

Descarga y compara el siguiente archivo, estandarizado según las definiciones del _Darwin Core_, con el archivo que se trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Los eventos de muestreo quedaron correctamente estructurados?
  
- [<FONT FACE="monospace"><b>«Archivo estandarizado Flora»</b></FONT>](https://docs.google.com/spreadsheets/d/1J_qDYpv3HR0zBNjVohMpydZP5oPdP-Ur/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}  
  
****
**¡Felicitaciones!**

El conjunto de datos de eventos de muestreo derivados de una base de datos geográfica ha sido estandarizado según el _Darwin Core_.

****

## Paso 8. Reto para reforzar los conocimientos utilizando los eventos de fauna
  
  
Si se desea ampliar los conocimientos en la estandarización de eventos de muestreo y realizar un ejercicio adicional de estructuración de eventos, se recomienda seguir esta guía con los archivos de fauna <FONT FACE="monospace"><b>«PuntoMuestreoFauna»</b></FONT> y <FONT FACE="monospace"><b>«TransectoMuestreoFauna»</b></FONT> presentes en la [base de datos geográfica](https://drive.google.com/file/d/1Bbhb1noztnzgDtAStNVTUQubKBIxuIhI/view?usp=sharing){:target="_blank"}. Luego de realizar el proceso para ambos archivos, se debe comparar con el siguiente archivo para identificar aciertos y posibilidades de mejora. ¿Los eventos de muestreo para fauna quedaron correctamente estructurados?

- [<FONT FACE="monospace"><b>«Archivo estandarizado Fauna»</b></FONT>](https://docs.google.com/spreadsheets/d/1SWQLi13uDP5S-meuR0P8ivC45KoCTRNa/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} 
  
**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
