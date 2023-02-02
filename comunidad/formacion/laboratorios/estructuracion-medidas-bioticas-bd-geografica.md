---
layout: documentation
permalink: /formacion/laboratorios/estructuracion-medidas-bioticas-bd-geografica
title: "Estructurando una base de datos geográfica al DwC, observaciones y medidas bióticas"
description: "Objetivo: Estructurar los registros biológicos presentes en una Base de datos geográfica, basada en el Diccionario Geográfico de la ANLA, para que sigan el estándar Darwin Core y cumplan los requisitos de publicación a través del SiB Colombia."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estructurando una base de datos geográfica al DwC, observaciones y medidas bióticas

**Objetivo**

Estructurar los registros biológicos presentes en una base de datos geográfica, según el Diccionario Geográfico de la ANLA, para que sigan el estándar _Darwin Core_ y cumplan los requisitos de publicación a través del SiB Colombia.

**Introducción**

Las bases de datos geográficas utilizadas por la ANLA tienen información de los registros biológicos que se tomaron en campo, estructurados de acuerdo al [<FONT FACE="monospace"><b>«Diccionario de Datos Geográficos»</b></FONT>](https://www.anla.gov.co/01_anla/documentos/informacion_geografica/diccionario_datos_geograficos_anla.xlsx){:target="_blank"}. El diccionario contiene la información del nombre de las tablas de componente biótico, el nombre y definición de los elementos en cada una de las tablas.

Para realizar la publicación de esta información a través del SiB Colombia, es necesario realizar un proceso de estructuración de los registros biológicos al estándar _Darwin Core_. En esta guía se usará una Base de datos geográfica de ejemplo, la cual tiene algunas capas presentes en este tipo de archivos. Sin embargo, el número de capas puede variar, dependiendo del proyecto y de la versión del diccionario de la ANLA que se utilizó para construirlo.

En este ejercicio, se desarrollará el proceso de estructuración con los registros de **flora fustal**, documentados en una base de datos geográfica con el modelo ANLA. No obstante, este mismo proceso se puede realizar con todas las tablas de registros biológicos, incluidas en estas fuentes de datos, siguiendo los mismos pasos generales que se describen en la guía. Para ello, existen algunas notas informativas sobre el proceso de estructuración de otros eventos de muestreo. Adicionalmente, los datos de flora de las bases de datos del ANLA normalmente contienen medidas bióticas asociadas , las cuales también se pueden  mapear y estructurar en la extensión **Medidas o hechos**. Este procedimiento también se abordará en la guía.

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Requerimientos**

- QGIS (Revisar el proceso de instalación en el primer paso de la guía de [Validación geográfica con QGIS](https://biodiversidad.co/formacion/laboratorios/QGIS#paso-1---instalaci%C3%B3n-de-qgis)).
- Procesador de archivos de texto como Excel.
- Contar con un mínimo de 4GB de memoria RAM para el desarrollo de esta guía. Para procesos con más de 20 000 registros biológicos, se recomienda tener como mínimo 8GB.

**Archivos de trabajo**

- Descargar la [<FONT FACE="monospace"><b>«BaseDatosGeografica_prueba.zip»</b></FONT>](https://drive.google.com/file/d/1sJfJ_8msYnYcZ1c9GWJ8zUZLebTSVzKG/view?usp=share_link){:target="_blank"}.


--------

## Paso 1. Carga de los datos a QGIS

Descargar el archivo [<FONT FACE="monospace"><b>«BaseDatosGeografica_prueba.zip»</b></FONT>](https://drive.google.com/file/d/1sJfJ_8msYnYcZ1c9GWJ8zUZLebTSVzKG/view?usp=share_link){:target="_blank"} y extraer  su contenido: <FONT FACE="monospace"><b>«BaseDatosGeografica.gdb»</b></FONT>. Esta carpeta debe conservarse con la terminación “.gdb”. Para descomprimir el archivo descargado, se puede usar cualquier programa de descompresión de archivos que se tenga instalado. Por ejemplo,  _WinZip_, _WinRAR_, _7Z_ u otros. 

Posteriormente, abrir el software QGIS y crear un nuevo proyecto. En el nuevo proyecto, seguir la ruta para cargar la base de datos geográfica: <span class="tag is-warning is-light"><b><i>Capa > Añadir capa > Añadir capa vectorial…</i></b></span> (Fig. 1).

![Figura 1. Adición de una capa de tipo vectorial.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig1_C4Registros_Vectorial.png)
<sup>_Figura 1. Adición de una capa de tipo vectorial._</sup>

En la ventana emergente, hacer clic en la opción <span class="tag is-warning is-light"><i>Directorio</i></span> (Fig. 2A) y seleccionar <span class="tag is-warning is-light"><i>AbrirArchivoGDB</i></span> en el desplegable de la sección **“Tipo”** (Fig. 2B).  

![Figura 2. Selección de directorio para abrir un archivo .gdb.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig2_C4Registros_Directorio.png)
<sup>_Figura 2. Selección de directorio para abrir un archivo .gdb: A. Selección de Directorio como tipo de fuente, B. Selección del tipo de archivo a cargar._</sup>

En la sección **"Conjunto (s) de datos vectoriales"**,  hacer clic en el botón con los tres puntos (Fig. 3). Posteriormente, seleccionar la ubicación de la carpeta que se ha descomprimido: <FONT FACE="monospace"><b>«BaseDatosGeografica.gdb»</b></FONT> en la ventana emergente y hacer clic en <span class="tag is-warning is-light"><i>Abrir</i></span> (Fig. 3).

![Figura 3. Selección carpeta descomprimida.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig3_C4Registros_Archivo.png)
<sup>_Figura 3. Selección carpeta descomprimida._</sup>

Para finalizar el proceso de carga, hacer clic en el botón <span class="tag is-warning is-light"><i>Añadir</i></span> (Fig. 4). Se abrirá una nueva ventana emergente que mostrará todas las capas que se encuentran al interior de la base de datos geográfica. Es recomendable seleccionar todas las capas (Fig. 4). Luego, dar clic en <span class="tag is-warning is-light"><i>Añadir capas</i></span> (Fig. 4). Este proceso puede tomar algunos minutos si la base de datos es muy compleja y pesa varias megas.

![Figura 4. Selección y adición de capas.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig4_C4Registros_Capas.png)
<sup>_Figura 4. Selección y adición de capas._</sup>

Si se están cargando datos en MAGNA SIRGAS origen único (CTM12) y dependiendo de la versión de QGIS que se esté utilizando, es posible que luego de hacer clic en <span class="tag is-warning is-light"><i>Añadir</i></span> ocurra alguna de las siguientes situaciones: 

1. QGIS identifica el Sistema de Referencia de Coordenadas (SRC) automáticamente y no se abre ninguna ventana emergente. Si este es el caso, es posible pasar directamente al paso 2 de esta guía. 
2. Aparece una nueva ventana con la opción de cargar los datos, sugiriendo otro Sistema de Referencia de Coordenadas (SRC). Si al hacer clic en el <span class="tag is-warning is-light"><i>Cancel</i></span> (Fig. 5) de la esquina inferior derecha de QGIS (Fig. 6A) aparece automáticamente el SRC MAGNA SIRGNA/CTM12. (Ej: <span class="tag is-light"><b>USER:100000</b></span>), se recomienda seguir con el paso 2 de esta guía.
3. Aparece una nueva ventana con la opción de cargar los datos, sugiriendo otro Sistema de Referencia de Coordenadas (SRC). Se debe hacer clic en <span class="tag is-warning is-light"><i>Cancel</i></span> (Fig. 5). Si aparece <span class="tag is-warning is-light"><i>SRC desconocido</i></span> en la esquina inferior derecha (Fig. 6A), es necesario crear un sistema de origen único para configurar el SRC del proyecto. En este caso, se debe seguir el paso 1.1. de la guía de [Transformación de coordenadas Magna-Sirgas a coordenadas decimales en WGS84](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/transformacion-coordenadas-wgs84){:target="_blank"}.

![Figura 5. Opciones  sugiriendo otro Sistema de Referencia para los datos cargados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig5_C4Registros_Cancelar.png)
<sup>_Figura 5. Opciones sugiriendo otro Sistema de Referencia para los datos cargados._</sup>

![Figura 6. Selección del SRC del proyecto.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig6_C4Registros_SRCDesconocido.png)
<sup>_Figura 6. Selección del SRC del proyecto: A. Selección de la opción <span class="tag is-warning is-light"><i>SRC desconocido</i></span>, B. Selección del SRC creado por el usuario._</sup>

## Paso 2 - Identificación de los archivos asociados a registros biológicos

Una vez que se haya cargado la información cargada en QGIS, es necesario explorar las capas relacionadas con los eventos de muestreo. Los archivos que contienen esta información se encuentran representados en la Tabla 1.

Tabla 1. Nombre de las capas que contienen información de los registros biológicos.

|Componente del Diccionario Geográfico ANLA|Nombre del archivo en la Base de datos Geográfica|Tipo de geometría|
|---|---|---|
|BIOTICO_CONTI_COSTE|AprovechaForestalPT|Punto|
|BIOTICO_CONTI_COSTE|MuestreoFloraFustalTB|Tabla|
|BIOTICO_CONTI_COSTE|MuestreoFloraRegeneracionTB|Tabla|
|BIOTICO_CONTI_COSTE|MuestreoFaunaTB|Tabla|
|HIDROLOGIA|MuestreoHidrobioTB|Tabla|
|MARINO|MuestreoHidrobioMarinoTB|Tabla|
|MARINO|MuestreoFloraMarinaTB|Tabla|
|MARINO|MuestreoFaunaMarinaTB|Tabla|
|MARINO|MamiferosOFM_TB|Tabla|
|MARINO|AvesOFM_TB|Tabla|
|MARINO|PecesOFM_TB|Tabla|
|MARINO|TortugasOFM_TB|Tabla|
|MARINO|OtraFaunaOFM_TB|Tabla|

<div class="notification is-info is-light">
  <b>Nota:</b> En algunas ocasiones, las bases de datos geográficas pueden tener capas adicionales asociadas a información extra que fue tomada en el marco de un proyecto particular. Por esta razón, se recomienda realizar una revisión general de los nombres de las capas para identificar posible información adicional.

En esta guía se propone el elemento <b>«MuestreoFloraFustalTB"</b> como ejemplo para el proceso de estructuración. Para revisar el contenido del archivo, hacer clic derecho y seleccionar <span class="tag is-warning is-light"><i>brir tabla de atributos</i></span> en el menú lateral izquierdo (Fig. 7). En la nueva ventana, se puede ver la tabla con todos los puntos de muestreo. Cada fila representa un punto de muestreo y cada columna un atributo de la tabla según el <a href="https://www.anla.gov.co/01_anla/documentos/informacion_geografica/diccionario_datos_geograficos_anla.xlsx" target="_blank"><FONT FACE="monospace"><b>«Diccionario de Datos Geográficos»</b></FONT></a>. Después de realizar una revisión general de la tabla, es necesario cerrar la ventana y regresar al menú principal de QGIS.
</div>

![Figura 7. Información contenida en la tabla MuestreoFloraFustalTB.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig7_C4Registros_Tabla.png)
<sup>_Figura 7. Información contenida en la tabla **"MuestreoFloraFustalTB"**._</sup>

## Paso 3. Exportar las capas de los registros biológicos

Para exportar la tabla de registros de flora fustal, hacer clic derecho sobre la tabla **"MuestreoFloraFustalTB"** y seguir la ruta <span class="tag is-warning is-light"><b><i>Exportar>Guardar objetos como…</i></b></span>

En la ventana emergente,  seleccionar las siguientes opciones:
- **"Formato"**: dar  clic en el desplegable y elegir <span class="tag is-warning is-light"><i>XLSX</i></span> (Fig. 8A).
- **¨Nombre de archivo¨**: dar clic en el botón con los tres puntos para elegir la ubicación y el nombre que se le va a dar al archivo. En este caso, se recomienda guardarlo como <span class="tag is-light"><b>Registros_FloraFustal.xlsx</b></span> (Fig. 8B).

Por último, dejar las otras opciones por defecto y dar clic en <span class="tag is-warning is-light"><b>OK</b></span> (Fig. 8).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig8_C4Registros_ExportarExcel.png" width=450>

<sup>_Figura 8. Opciones para exportar la tabla de registros biológicos de flora fustal como un archivo tipo Excel: A. Selección del formato utilizado para exportar los datos, B. Selección del nombre y la ubicación del archivo._</sup>

## Paso 4. Mapeo de los datos 

Después de haber exportado el archivo de flora fustal, abrir el resultado en Excel.

Debido a que los atributos  de las tablas en una base de datos geográfica, organizada bajo el Diccionario Geográfico de la ANLA, deben ser los mismos, el Equipo Coordinador del SiB Colombia ha construido el archivo [<FONT FACE="monospace"><b>«Mapeo diccionario ANLA 2020-Eventos al DwC»</b></FONT>](https://docs.google.com/spreadsheets/d/17ys5dkCNZDXpeguHbnnTI-RYiJPyMQz4HuRO-FLcaUE/edit#gid=0){:target="_blank"}. Este archivo contiene el nombre de los atributos en una base de datos geográfica, el tipo de coincidencia de cada atributo con el estándar _Darwin Core_, el nombre del elemento _Darwin Core_ con el que coincide y un comentario adicional cuando sea necesario. Por consiguiente, se recomienda abrir este archivo y utilizarlo para realizar el proceso de mapeo.

A continuación, se describe la definición de la coincidencia del atributo con el _Darwin Core_:

- **Total**: el contenido del atributo coincide completamente con la definición del elemento _Darwin Core_.
- **Parcial**:  coincidencia parcial del atributo con algún elemento del _Darwin Core_. Es necesario realizar ajustes en el contenido del atributo para que haya coincidencia con el elemento _Darwin Core_. Se recomienda revisar la definición del elemento en la documentación en línea del estándar y hacer los ajustes necesarios.
- **Nula**: no hay coincidencia con ningún elemento del _Darwin Core_ y por tanto no debe ser mapeado.

### 4.1 Mapeo de los registros biológicos

Cambiar los nombres en las columnas del archivo <FONT FACE="monospace"><b>«Registros_FloraFustal.xlsxs»</b></FONT> por el de los elementos _Darwin Core_ que tengan una coincidencia total en el mapeo. Posteriormente, ajustar los elementos que tienen coincidencia parcial y eliminar los que no tienen ningún tipo de correspondencia con el estándar _Darwin Core_. Para ello, se debe usar la pestaña **"MuestreoFloraFustalTB"** en el archivo [<FONT FACE="monospace"><b>«Mapeo diccionario ANLA 2020 al <i>Darwin Core</i> - Registros biológicos»</b></FONT>](https://docs.google.com/spreadsheets/d/1cX3ayuk6A-Fq2XcsTiIrkoQ2XetU9Y9rkgy0iUjk4RY/edit#gid=1272242277){:target="_blank"}.

Con base en lo anterior, se deben seguir estos pasos:

- Modificar el nombre de las columnas documentadas como coincidencia total en el archivo <FONT FACE="monospace"><b>«Registros_FloraFustal.xlsx»</b></FONT> (Fig. 9).
- Revisar el contenido de las columnas documentadas como coincidencia parcial, realizando los ajustes de acuerdo a las definiciones, recomendaciones y ejemplos de la [documentación en línea  del elemento _Darwin Core_](https://biodiversidad.co/compartir/estandar-darwin-core/) para cada elemento (Fig. 9). Normalmente, estos ajustes implican combinar información de varias columnas antes de hacer el mapeo (Fig. 9).
- En el archivo <FONT FACE="monospace"><b>«Evento_MuestreoFlora.xlsx»</b></FONT>,  eliminar las columnas que tienen una coincidencia nula en el archivo de mapeo (Fig. 10).

Para realizar el mapeo siga estos pasos:

- Modificar el nombre de las columnas documentadas como coincidencia total  en el archivo **Registros_FloraFustal.xlsx** (Fig. 9).
- Revisar el contenido de las columnas documentadas como coincidencia parcial, realizando los ajustes de acuerdo a las definiciones, recomendaciones y ejemplos de la [documentación en línea  del elemento _Darwin Core_](https://biodiversidad.co/compartir/estandar-darwin-core/) para cada elemento (Fig. 9). Normalmente, estos ajustes implican combinar información de varias columnas antes de hacer el mapeo.
- En el archivo <FONT FACE="monospace"><b>«Registros_FloraFustal.xlsx»</b></FONT>, eliminar las columnas que tienen una coincidencia nula según el archivo de mapeo. (Fig. 9)

![Figura 9. Proceso de mapeo al estándar Darwin Core del archivo de registros biológicos presente en la Base de datos geográfica.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig9_C4Registros_Mapeo.png)
<sup>_Figura 9. Proceso de mapeo al estándar _Darwin Core_ del archivo de registros biológicos presente en la base de datos geográfica._</sup>

- Al finalizar el proceso de mapeo con las columnas existentes, se deben eliminar las columnas que estén vacías o documentadas con <span class="tag is-light"><b>Null</b></span>.

### 4.2 Mapeo de las medidas bióticas

Para el mapeo con las medidas bióticas, es necesario crear los elementos <span class="tag is-success is-light"><i>measurementType</i></span> y <span class="tag is-success is-light"><i>measurementUnit</i></span> para cada una de las medidas presentes en el archivo. Se debe documentar el tipo de medida (ej. <span class="tag is-light"><b>Diámetro a la altura del pecho</b></span> y <span class="tag is-light"><b>Biomasa aérea</b></span>) y la unidad con la que fue tomada (ej. <span class="tag is-light"><b>m</b></span> y <span class="tag is-light"><b>kg</b></span>), según lo documentado en el archivo [<FONT FACE="monospace"><b>«Mapeo diccionario ANLA 2020-Registros al DwC»</b></FONT>](https://docs.google.com/spreadsheets/d/1cX3ayuk6A-Fq2XcsTiIrkoQ2XetU9Y9rkgy0iUjk4RY/edit#gid=1272242277){:target="_blank"}.

En el archivo de Excel, insertar dos nuevas columnas para cada una de las medidas. En la primera columna del lado izquierdo, documentar el elemento <span class="tag is-success is-light"><i>measurementType</i></span>; en la segunda columna del lado derecho, documentar el elemento <span class="tag is-success is-light"><i>measurementUnit</i></span>.

A continuación, se observa cómo realizar el proceso con la primera medida <b>"DAP_INDIV"</b>:

- Crear la columna  <span class="tag is-success is-light"><i>measurementType</i></span> con el valor **“Diámetro a la altura del pecho (DAP)”** (Fig. 10). 
- Insertar la segunda columna con el elemento <span class="tag is-success is-light"><i>measurementType</i></span> y como valor <span class="tag is-light"><b>m</b></span>(Fig. 10). 
- Reemplazar el nombre original de la columna **"DAP_INDIV"** por <span class="tag is-success is-light"><i>measurementValue</i></span>. (Fig. 10). 

![Figura 10. Mapeo de la medida biótica DAP_INDIV al estándar DwC.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig10_C4Registros_Medidas.png)
<sup>_Figura 10. Mapeo de la medida biótica **"DAP_INDIV"** al estándar DwC._</sup>

- Repetir este procedimiento con el resto de medidas bióticas, teniendo en cuenta los diferentes valores de tipo y unidad para cada una de las medidas.

<div class="notification is-info is-light">
  <b>Nota:</b> En algunas tablas de fauna marina, se pueden encontrar medidas abióticas. Por ejemplo, la distancia del animal a la popa del barco o la dirección en la que viaja el animal con respecto al barco. En tal caso, se debe realizar el mismo proceso de las medidas bióticas asociadas a flora, realizando el mapeo y poniendo el tipo y unidad de medida si es necesario.
  </div>
 
## Paso 5. Creación de elementos obligatorios y ajuste de elementos documentados
  
### Paso 5.1 Creación de los elementos obligatorios

Para asegurar que todos los elementos obligatorios para los registros biológicos estén debidamente documentados, se recomienda consultar los elementos obligatorios en la primera hoja de la [Plantilla de Registros biológicos](https://biodiversidad.co/recursos/plantillas-dwc/#registros-biol%C3%B3gicos), llamada **“Instrucciones”**. Teniendo en cuenta que la obligatoriedad de los elementos dependen del origen de los datos, este paso es necesario para la publicación de eventos de muestreo.

Por consiguiente, se deben seguir las siguientes recomendaciones para crear los elementos obligatorios:
 
- [<span class="tag is-success is-light"><i>occurrenceID</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#occurrenceID): Crear un identificador único del registro biológico a partir del código corto de la institución Ambiental Buenaventura Consultores: “ABC” , las palabras clave del recurso **“EIA-FORMACION”**, el <span class="tag is-success is-light"><i>eventID</i></span> y el <span class="tag is-success is-light"><i>organismID</i></span>. Ejemplo: <span class="tag is-light"><b>ABC:EIA-FORMACION:DC01-26-a</b></span>. Al finalizar, es fundamental revisar que no hayan <span class="tag is-success is-light"><i>occurrenceID</i></span> duplicados. Si los hay, agregar una letra consecutiva (a, b, c, etc.) al final del <span class="tag is-success is-light"><i>occurrenceID</i></span> con el objetivo de diferenciarlos. Para revisar si hay registros con un identificador duplicado, se puede seguir la ruta de opciones en Excel: <span class="tag is-warning is-light"><b><i>Formato condicional > Reglas para resaltar las celdas > Valores duplicados…</i></b></span>.
- [<span class="tag is-success is-light"><i>basisOfRecord</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#basisOfRecord)/[<span class="tag is-success is-light"><i>type</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#type): Los registros biológicos de las bases de datos geográficas son eventos asociados a observaciones humanas en casi todos los casos. Por consiguiente, se deben documentar estos dos elementos como <span class="tag is-success is-light"><i>HumbanObservation</i></span> para el <span class="tag is-success is-light"><i>basisOfRecord</i></span> y como <span class="tag is-success is-light"><i>Event</i></span> para el elemento <span class="tag is-success is-light"><i>type</i></span>.
 
<div class="notification is-info is-light">
 <b>Nota:</b> Para los registros de Fauna, utilizar el campo <b>"DETERM"</b> que contiene información detallada de la base y tipo del registro.
 </div>

- [<span class="tag is-success is-light"><i>institutionCode</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#institutionCode): La información del código de la institución está presente en el archivo de eventos que se estructuró en la guía [Estructurando una GDB en DwC, eventos](https://biodiversidad.co/formacion/laboratorios/estructuracion-eventos-bd-geografica).  
- [<span class="tag is-success is-light"><i>institutionID</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#institutionID): Documentar con el NIT de la organización. Para este ejercicio, se usa el NIT <span class="tag is-light"><b>900.123.456-1</b></span>. 
- [<span class="tag is-success is-light"><i>eventDate</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#eventDate): La información de la fecha está presente en el archivo de eventos de muestreo que se estandarizó en la guía [Estructurando una GDB en DwC, eventos](https://biodiversidad.co/formacion/laboratorios/estructuracion-eventos-bd-geografica). 
  - Si desea completar el <span class="tag is-success is-light"><i>eventDate</i></span> de forma automática en Excel, se puede utilizar la opción <span class="tag is-warning is-light"><i>BUSCARV()</i></span>, tomando como elemento en común el <span class="tag is-success is-light"><i>eventID</i></span>.
- [<span class="tag is-success is-light"><i>scientificName</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#scientificName): Generar una copia  de este elemento en uno nuevo, denominado <span class="tag is-success is-light"><i>verbatimIdentification</i></span>. De esta forma, si se requiere hacer ajustes, se conservará la identificación original documentada en la base de datos geográfica. En el elemento <span class="tag is-success is-light"><i>scientificName</i></span>, separar la información de la autoría del nombre científico para dejar únicamente el género y epíteto específico (para el caso de especies). Después, guardar la autoría del nombre científico en el elemento <span class="tag is-success is-light"><i>scientificNameAuthorship</i></span>. Adicionalmente, documentar como <span class="tag is-light"><b>aff.</b></span> o <span class="tag is-light"><b>cf.</b></span> los calificadores de la identificación que se encuentren en el <span class="tag is-success is-light"><i>scientificName</i></span>, en el elemento <span class="tag is-success is-light"><i>identificationQualifier</i></span>. Por último, diligenciar las abreviaciones de incertidumbre de la especie en el <span class="tag is-success is-light"><i>verbatimTaxonRankr</i></span> como <span class="tag is-light"><b>sp.</b></span>, <span class="tag is-light"><b>gr.</b></span> o <span class="tag is-light"><b>spp.</b></span>.
- [<span class="tag is-success is-light"><i>taxonRank</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#taxonRank): Utilizar filtros para buscar los registros que se documentaron con los calificadores <span class="tag is-light"><b>sp.</b></span>, <span class="tag is-light"><b>cf.</b></span> o <span class="tag is-light"><b>aff.</b></span> y documentar su <span class="tag is-success is-light"><i>taxonRank</i></span> como <span class="tag is-light"><b>Género</b></span>. Para los demás registros, diligenciar el <span class="tag is-success is-light"><i>taxonRank</i></span> como <span class="tag is-light"><b>Especie</b></span>, verificando que el nombre científico cuente con género y epíteto específico. 
 
### Paso 5.2 Ajustar los elementos adicionales siguiendo el estándar _Darwin Core_

En adición a lo anterior, es necesario realizar ajustes en algunas columnas para que sigan el formato sugerido del estándar _Darwin Core_. Este proceso consiste en revisar las definiciones y vocabularios controlados del estándar para cada elemento mapeado en la [documentación en línea del estándar _Darwin Core_](https://biodiversidad.co/compartir/estandar-darwin-core/). 
 
Para terminar, seguir las siguientes recomendaciones para ajustar algunos elementos priorizados:
- [<span class="tag is-success is-light"><i>measurementValue</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#measurementValue): Modificar el separador decimal para que sea un punto.
- [<span class="tag is-success is-light"><i>occurrenceRemarks</i></span>](https://biodiversidad.co/compartir/estandar-darwin-core/#occurrenceRemarks): Revisar el contenido de este elemento para validar si se puede mapear en otro elemento _Darwin Core_. En ocasiones, puede haber información de etapa de vida, sexo, medidas adicionales, etc. 
 
<div class="notification is-info is-light">
  <b>Nota:</b> Para algunos campos en las tablas de fauna o hidrobiología, puede ser necesario utilizar los dominios en el Diccionario geográfico con el fin de documentar la información. Se recomienda revisar el paso 6 de la guía <b><a href="https://biodiversidad.co/formacion/laboratorios/estructuracion-eventos-bd-geografica">Estructurando una base de datos geográfica en DwC, eventos</a></b>.
</div>

 
## Paso 6. Verificación del resultado

Descarga y compara el siguiente archivo,  estandarizado según las definiciones del _Darwin Core_, con el archivo que se trabajó en esta guía para identificar aciertos y posibilidades de mejora. ¿Las observaciones (registros biológicos) quedaron correctamente estructuradas?

- [<FONT FACE="monospace"><b>«Archivo estandarizado»</b></FONT>](https://docs.google.com/spreadsheets/d/1bA3pWGlpXriRqZulc8pSfRNiVdOhhzkk/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}  
 

****
**¡Felicitaciones!**

El conjunto de datos de registros biológicos derivados de una base de datos geográfica ha sido estandarizado según el _Darwin Core_.
 
****
 
## Paso 7. Estandarización de fauna e hidrobiología

Repetir el proceso de estandarización con los elementos de Fauna (**"MuestreoFaunaTB"**) y de hidrobiología (**"MuestreoHidrobioTB"**), siguiendo los pasos de esta guía. Se debe usar la hoja adecuada en el archivo [<FONT FACE="monospace"><b>«Mapeo diccionario ANLA 2021-Registros al DwC»</b></FONT>](https://docs.google.com/spreadsheets/d/1cX3ayuk6A-Fq2XcsTiIrkoQ2XetU9Y9rkgy0iUjk4RY/edit#gid=1272242277){:target="_blank"} para el mapeo en cada uno de los casos. ¿Hay diferencias significativas en el proceso para estos archivos?
 
**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
 
