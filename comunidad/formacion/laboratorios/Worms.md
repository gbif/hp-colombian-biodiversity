---
layout: documentation
permalink: /formacion/laboratorios/Worms
title: "Worms"
description: "Objetivo: Realizar una validación taxonómica de los nombres científicos para detectar posibles errores de formato o taxonomía"
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Validación taxonómica - WoRMS (Datos Marinos)

**Objetivo**

Realizar la validación taxonómica automática de los nombres científicos de especies marino-costeras para detectar posibles errores de formato y precisión. La validación se hará por medio del servicio [WoRMS *TaxonMatch*](http://www.marinespecies.org/aphia.php?p=match).

**Introducción**

<iframe width="560" height="315" src="https://www.youtube.com/embed/9SFPYe6h14I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Sobre la Herramienta**

La herramienta [WoRMS TaxonMatch](http://www.marinespecies.org/aphia.php?p=match) es un servicio del Registro Mundial de especies Marinas ([WoRMS](https://www.marinespecies.org/)) que permite validar de manera automática y masiva hasta 1 500 nombres científicos. La herramienta compara los nombres científicos sometidos contra la base de datos _**Aphia**_, la cual combina múltiples [bases de datos marinas](http://www.marinespecies.org/subregisters.php) verificadas por taxónomos de los diferentes grupos marinos documentados en WoRMS. 

Esta herramienta le permite al usuario obtener el nombre válido con sus fuentes y la clasificación de cada taxón (<span class="tag is-success is-light"><i>kingdom</i></span>,  <span class="tag is-success is-light"><i>phylum</i></span>, <span class="tag is-success is-light"><i>class</i></span>, <span class="tag is-success is-light"><i>order</i></span>, <span class="tag is-success is-light"><i>family</i></span>, <span class="tag is-success is-light"><i>genus</i></span>) y su estatus taxonómico (Sinónimo, Aceptado o Dudoso). Adicionalmente, le permite obtener los identificadores de WoRMS (equivalente al campo DwC <span class="tag is-success is-light"><i>scientificNameID</i></span>), los cuales son requeridos para la publicación de datos en el [SiB Marino](https://siam.invemar.org.co/sibm) y el [_Ocean Biogeographic Information System_ - OBIS](https://obis.org/).


**Enlace**

WoRMS *TaxonMatch*: [http://www.marinespecies.org/aphia.php?p=match](http://www.marinespecies.org/aphia.php?p=match)

**Requerimientos** 


* La herramienta admite archivos con los siguientes formatos:
    - Formato Excel (.xls o .xlsx).
    - Formato CSV.
    - Formato TXT.
    
* Para realizar este ejercicio, es necesario contar con un procesador de archivos de texto como Excel.

**Archivo de trabajo**

Descargue el archivo [<FONT FACE="monospace"><b>«datos_CasoMarinoCosteros.xls»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_casomarinocosteros.xls) para realizar el laboratorio.

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
    Esta guía se encuentra en construcción, así que pueden haber algunas modificaciones de forma y contenidos en los próximos días.
  </div>
</article>

## Paso 1 - Exploración del archivo

Abra el archivo [<FONT FACE="monospace"><b>«datos_CasoMarinoCosteros.xls»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_casomarinocosteros.xls) y explore su contenido. Encontrará una columna con el elemento  <span class="tag is-success is-light"><i>occurrenceID</i></span> y tres columnas con información taxonómica: <span class="tag is-success is-light"><i>class</i></span>, <span class="tag is-success is-light"><i>family</i></span> y <span class="tag is-success is-light"><i>scientificName</i></span>. Como podrá notar, este archivo no tiene la taxonomía superior completa y tal vez algunos taxones no correspondan a grupos marino-costeros. Por consiguiente, el servicio _TaxonMatch_ de WoRMS le facilitará la tarea de completar la clasificación e identificar los taxones no marinos.

<div class="notification is-info is-light">
    <b>Nota:</b> Revise que los nombres en la columna del elemento <b><i>scientificName</i></b> no tengan calificadores como sp., morfotipo, cf., indet. larva, etc. Si los tiene, elimínelos, ya que estos no forman parte del nombre científico.
</div>

## Paso 2 - Configuración de la herramienta 

En [WoRMS](https://www.marinespecies.org/index.php) vaya al módulo <span class="tag is-warning is-light"><b><i>Tools > MatchTaxa</i></b></span> o ingrese directamente al vínculo [https://www.marinespecies.org/aphia.php?p=match](https://www.marinespecies.org/aphia.php?p=match).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_Worms/Fig.1_WoRMS.png" width=800>

<sup>_Figura 1. Vista de la herramienta WoRMS TaxonMatch y las diferentes opciones  de carga y configuración: A. Sección de carga, B. Configuración de la lectura del archivo, C. Configuración de la validación taxonómica, D. Configuración de la descarga._</sup>

### 2.1. Selección del archivo

En la opción <span class="tag is-warning is-light"><i>File</i></span>, busque el archivo que descargó previamente en su computador y selecciónelo (Fig. 1A).


### 2.2. Configuración de la lectura del archivo

Dependiendo del tipo de archivo que vaya a cargar, Excel, .csv o .txt, puede configurar la lectura del mismo con las siguientes opciones (Fig. 1B):

* <span class="tag is-warning is-light"><i>Row delimiter</i></span>: cuando se carga un archivo de texto plano (.csv, .txt), permite seleccionar el caracter que delimita las filas: \n (_Linefeed_), \r (_Return_), tabulación (Tab), punto y coma (<span class="tag is-warning is-light"><b>;</b></span>), coma (<span class="tag is-warning is-light"><b>,</b></span>) o pleca (<span class="tag is-warning is-light"><b>|</b></span>).
* <span class="tag is-warning is-light"><i>First row contains column names</i></span>: permite indicar si la primera fila del archivo contiene los nombres de las columnas. Dichos nombre corresponden a los elementos DwC de la taxonomía. Por lo tanto, si no los tiene, la herramienta le solicitará darles un nombre antes de procesar el archivo.
* <span class="tag is-warning is-light"><i>Column delimiter</i></span>: cuando se carga un archivo de texto plano (.csv, .txt), permite seleccionar el caracter que delimita las columnas: tabulación (Tab), punto y coma (<span class="tag is-warning is-light"><b>;</b></span>), coma (<span class="tag is-warning is-light"><b>,</b></span>) o pleca     (<span class="tag is-warning is-light"><b>|</b></span>).

Dado que se cargó un archivo Excel, el delimitador estará dado automáticamente por el sistema y no debe hacer ajustes en las opciones <span class="tag is-warning is-light"><i>Row delimiter</i></span> ni <span class="tag is-warning is-light"><i>Column delimiter</i></span>.

Como la primera fila del archivo contiene los nombres de las columnas, marque la casilla <span class="tag is-warning is-light"><i>First row contains column names</i></span> (Fig. 1B). 

### 2.3. Configuración de la validación

Para validar la taxonomía del conjunto de datos, la herramienta le permite especificar las siguientes opciones:

- <span class="tag is-warning is-light"><i>Match authority</i></span>: seleccione esta opción si su conjunto de datos tiene la autoría del nombre científico en una columna adicional (<span class="tag is-success is-light"><i>scientificNameAuthorship</i></span>) y desea incluirla como criterio para validar el nombre.	
- <span class="tag is-warning is-light"><i>Match upto</i></span>: si se tiene la taxonomía superior completa del taxon (<span class="tag is-success is-light"><i>phylum</i></span>, <span class="tag is-success is-light"><i>class</i></span>, <span class="tag is-success is-light"><i>order</i></span>, <span class="tag is-success is-light"><i>family</i></span> y <span class="tag is-success is-light"><i>genus</i></span>), puede añadir esta opción para incluir estos parámetros en la validación. Generalmente, es suficiente usar el elemento <span class="tag is-success is-light"><i>scientificName</i></span>. Esto también permite que la validación sea mucho más rápida.
- <span class="tag is-warning is-light"><i>Limit to taxa belonging to</i></span>: permite limitar la consulta a un grupo biológico particular dentro de WoRMS; por ejemplo, Porifera, Copepoda etc. Esta función es especialmente útil cuando hay homónimos. Para usarla, introduzca los primeros caracteres del nombre del taxón para que aparezca una lista de selección. 

En este caso, mantenga la opción <span class="tag is-warning is-light"><i>Match authority</i></span> sin seleccionar, ya que no se cuenta con esta información. En el menú de  <span class="tag is-warning is-light"><i>Match upto</i></span>, seleccione el elemento <span class="tag is-success is-light"><i>scientificName</i></span> en la lista desplegable y deje vacía la opción <span class="tag is-success is-light"><i>Limit to taxa belonging to</i></span> (Fig. 1C).

### 2.4. Configuración de la descarga

Antes de iniciar la consulta, debe elegir qué datos que desea obtener de WoRMS. Para ello, seleccione una o varias de las siguientes opciones en la sección _**"Output"**_:

  - <span class="tag is-warning is-light"><i>AphiaID</i></span>: identificador único de la base de datos _Aphia_ para cada taxón.
  - <span class="tag is-warning is-light"><i>LSID</i></span>: _Life Science Identifier_ de WoRms, el cual incluye el <span class="tag is-warning is-light"><i>AphiaID</i></span> y es obligatorio para la publicación a través del SiB Marino y OBIS. Es equivalente al elemento DwC <span class="tag is-success is-light"><i>scientificNameID</i></span>.
  - <span class="tag is-warning is-light"><i>TSN</i></span>: identificador único de ITIS (_Integrated Taxonomic Information System_) para cada taxón.
  - <span class="tag is-success is-light"><i>scientificName</i></span>: el nombre científico del taxón con el que hubo una coincidencia dentro de WoRMS.
  - <span class="tag is-warning is-light"><i>Authority</i></span>: nombre del autor del nombre científico, corresponde al elemento DwC <span class="tag is-success is-light"><i>scientificNameAuthorship</i></span>.
  - <span class="tag is-warning is-light"><i>Accepted name</i></span>: nombre científico aceptado del taxón.
  - <span class="tag is-warning is-light"><i>Classification</i></span>: taxonomía superior del taxón (<span class="tag is-success is-light"><i>kingdom</i></span>,  <span class="tag is-success is-light"><i>phylum</i></span>, <span class="tag is-success is-light"><i>class</i></span>, <span class="tag is-success is-light"><i>order</i></span>, <span class="tag is-success is-light"><i>family</i></span> y <span class="tag is-success is-light"><i>genus</i></span>).
  - <span class="tag is-warning is-light"><i>Qualitystatus</i></span>: indica el tipo de revisión taxonómica que ha realizado el equipo de WoRMS sobre el taxón.
  - <span class="tag is-warning is-light"><i>Taxon status</i></span>: estatus taxonómico del nombre científico del taxón: aceptado, no acepetado, ambiguo, entre otros.
  - <span class="tag is-warning is-light"><i>Environment</i></span>: corresponde a los elementos del DwC que describen el tipo de ambiente donde habita el taxón: <span class="tag is-success is-light"><i>isMarine</i></span> (hábitat marino), <span class="tag is-success is-light"><i>isBrackish</i></span> (hábitat salobre), <span class="tag is-success is-light"><i>isFresh</i></span> (hábitat de agua dulce) e <span class="tag is-success is-light"><i>isTerrestrial</i></span> (hábitat terrestre). En los elementos mencionados, <span class="tag is-light"><b>1</b></span> indica que el taxon habita en ese ambiente y <span class="tag is-light"><b>0</b></span> significa que no habita. 
  - <span class="tag is-warning is-light"><i>Citation</i></span>: Citación sugerida de la fuente taxonómica utilizada para validar el conjunto de datos.

Para este ejercicio, y para validaciones futuras, marque las casillas de las opciones: <span class="tag is-warning is-light"><i>LSID</i></span>, <span class="tag is-success is-light"><i>scientificName</i></span>, <span class="tag is-warning is-light"><i>Authority</i></span>, <span class="tag is-warning is-light"><i>Accepted name</i></span>, <span class="tag is-warning is-light"><i>Classification</i></span>, <span class="tag is-warning is-light"><i>Taxon status</i></span> y <span class="tag is-warning is-light"><i>Environment</i></span> (Fig. 1D).

Una vez que haya configurado las opciones como se muestra en la Figura 1, haga clic en <span class="tag is-warning is-light"><i>Next</i></span>.


## Paso 3 - Previsualización del archivo

Luego de cargar los datos, se abrira una vista previa de las primeras 20 filas (Fig. 2). Si el conjunto de datos selecionado tienes las columnas nombradas según el estándar DwC, estas seran reconocidas y mapeadas de manera automática. Sin embargo, siempre se debe comprobar que el nombre de la columna desplegable coincida con el nombre de la columna de los datos cargados (Fig. 2).


<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_Worms/Fig.2_WoRMS.png" width=800>

<sup>_Figura 2. Vista previa de los datos y verificación del mapeo de las columnas._</sup>

Una vez que haya verificado la lectura correcta de los datos por parte de la herramienta y el mapeo adecuado de las columnas, dé clic en <span class="tag is-warning is-light"><i>Match</i></span>(Fig. 2).

Dependiendo del volumen de los datos, la validación puede tardar algunos segundos a minutos. Durante este tiempo, no cierre ni cambie la ventana de navegación (Fig. 3).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_Worms/Fig.3_WoRMS.png" width=800>

<sup>_Figura 3. Mensaje de procesamiento del archivo. Es necesario que la ventana permanezca abierta hasta que el proceso acabe._</sup>

## Paso 4 - Revisión de los resultados

Al finalizar la validación, en la parte superior de la herramienta, encontrará el porcentaje de coincidencia global obtenido en la validación (Fig. 4A). Explore los nombres con los que hubo coincidencia en la columna <span class="tag is-warning is-light">WoRMS <i>match</i></span> (Fig. 4B). Encontrará diferentes tipos de resultados en esta columna:

- **Nombres en color verde**: se obtiene cuando el nombre científico ingresado coincidió exactamente o difiere por máximo 3 caracteres. La información de dicho nombre aparecerá en la descarga.
- **Nombres ambiguos (lista desplegable)**: aparece cuando el taxón tiene un homónimo. En estos casos, verá un recuadro con una lista desplegable para seleccionar el que corresponda al nombre aceptado o al autor requerido.
- **(none)**: significa que no hubo coincidencias entre el nombre ingresado y WoRMS. Por lo tanto, estos nombres deberán ser verificados con otro referente. Posiblemente, el taxón es únicamente terreste y por ello no se encuentra en la base de datos de WoRMS.

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_Worms/Fig.4_WoRMS.png" width=800>

<sup>_Figura 4. Resultados; A.Porcentaje de coincidencia con WoRMS, B. Diferentes tipos de resultados en la columna <span class="tag is-warning is-light">WoRMS <i>match</i></span>_.</sup>

Revise  los nombres de la columna <span class="tag is-warning is-light">WoRMS <i>match</i></span> y haga los ajustes necesarios. Cuando haya nombres ambiguos, puede hacer una búsqueda manual en WoRMS para decidir qué alternativa seleccionar. Por ejemplo, para el género _Apogon_, la lista desplegable muestra dos opciones (Fig. 5):

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_Worms/Fig.5_WoRMS.png" width=800>

<sup>_Figura 5. Ejemplo de un nombre ambiguo "Apogon" que requiere revisión. En la lista desplegable se muestran las coincidencias con WoRMS._</sup>

Usando la barra de búsqueda general de WoRMS ([https://www.marinespecies.org/index.php](https://www.marinespecies.org/index.php)), busque los dos nombres que aparecen en la lista desplegable (Fig. 6). 

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_Worms/Fig.6_WoRMS.png" width=600>

<sup>_Figura 6. Búsqueda general en WoRMS_.</sup>

Tras la búsqueda, obtendrá los siguientes enlaces:

- [_Apogon Lacepède, 1801_](https://www.marinespecies.org/aphia.php?p=taxdetails&id=125913)
- [_Apogon Elliott_](https://www.marinespecies.org/aphia.php?p=taxdetails&id=1077675) _accepted as_ [_Krigia Schreb_](https://www.marinespecies.org/aphia.php?p=taxdetails&id=1076104)

Al ver en detalle cada una de las opciones, notará que la segunda corresponde a una planta y no a un pez. Se sabe que este género es un pez, ya que en el conjunto de datos se documenta bajo la clase Actinopterygii. Por lo tanto, se descarta la segunda opción.

Puede hacer este ejercicio de búsqueda para los demás nombres ambiguos.

## Paso 5 - Descarga de los resultados

En la parte inferior de la ventana que contiene los resultados, podrá configurar el formato del archivo de la descarga. Seleccione la primera opción (<span class="tag is-warning is-light"><i>Excel sheet XLS</i></span>) y dé clic en <span class="tag is-warning is-light"><i>Download</i></span> (Fig. 7). 

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_Worms/Fig.7_WoRMS.png" width=800>

<sup>_Figura 7. Configuración y descarga_.</sup>

Posteriormente, obtendrá un archivo con el nombre original del conjunto de datos seguido de la palabra _matched_, así: <FONT FACE="monospace"><b>«datos_casomarinocosteros_matched.xls»</b></FONT>.

## Paso 6 - Exploración de los resultados


### 6.1. Comprender el contendio del archivo

Abra el archivo de resultados con Excel u _OpenRefine_ y explore las columnas obtenidas, así como su contenido. El archivo tendrá la siguiente estructura:

- <span class="tag is-warning is-light"><i>AphiaID</i></span>: identificador único de la base de datos _Aphia_ para cada taxón.
  - <span class="tag is-warning is-light"><i>LSID</i></span>: _Life Science Identifier_ de WoRms, el cual incluye el <span class="tag is-warning is-light"><i>AphiaID</i></span> y es obligatorio para la publicación a través del SiB Marino y OBIS. Es equivalente al elemento DwC <span class="tag is-success is-light"><i>scientificNameID</i></span>.
  - <span class="tag is-warning is-light"><i>TSN</i></span>: identificador único de ITIS para cada taxón.
  - <span class="tag is-success is-light"><i>scientificName</i></span>: el nombre científico del taxón con el que hubo una coincidencia dentro de WoRMS.
  - <span class="tag is-warning is-light"><i>Authority</i></span>: Nombre del autor del nombre científico, corresponde al elemento DwC <span class="tag is-success is-light"><i>scientificNameAuthorship</i></span>.
  - <span class="tag is-warning is-light"><i>Accepted name</i></span>: nombre científico aceptado del taxón.
  - <span class="tag is-warning is-light"><i>Classification</i></span>: taxonomía superior del taxón (_<span class="tag is-success is-light"><i>kingdom</i></span>,  <span class="tag is-success is-light"><i>phylum</i></span>, <span class="tag is-success is-light"><i>class</i></span>, <span class="tag is-success is-light"><i>order</i></span>, <span class="tag is-success is-light"><i>family</i></span> y <span class="tag is-success is-light"><i>genus</i></span>).
  - <span class="tag is-warning is-light"><i>Qualitystatus</i></span>: indica el tipo de revisión taxonómica que ha realizado el equipo de WoRMS sobre el taxón.
  - <span class="tag is-warning is-light"><i>Taxon status</i></span>: estatus taxonómico del nombre científico del taxón: aceptado, no acepetado, ambiguo, entre otros.
  - <span class="tag is-warning is-light"><i>Environment</i></span>: corresponde a los elementos del DwC que describen el tipo de ambiente donde habita el taxón: <span class="tag is-success is-light"><b><i>isMarine</i></b></span> (habitat marino), <span class="tag is-success is-light"><b><i>isBrackish</i></b></span> (habitat salobre), <span class="tag is-success is-light"><b><i>isFresh</i></b></span> (habitat de agua dulce) y <span class="tag is-success is-light"><b><i>isTerrestrial</i></b></span> (habitat terrestre). En los elementos mencionados, <span class="tag is-light"><b>1</b></span> indica que el taxon habita en ese ambiente y <span class="tag is-light"><b>o</b></span> significa que no habita. 
  - <span class="tag is-warning is-light"><i>Citation</i></span>: Citación sugerida de la fuente taxonómica utilizada para validar el conjunto de datos.

- **Columnas originales**: al inicio del archivo, encontrará las columnas que cargó originalmente en la herramienta, incluso en el mismo orden.

- _**"Match type"**_: una columna que detalla el nivel de coincidencia que hubo entre el nombre científico ingresado y WoRMS. Este elemento le permitirá identificar los nombres que debe revisar en detalle. Las niveles que aparecerán, de mayor a menor coincidencia, son:

    - <span class="tag is-light"><b><i>exact</i></b></span>: todos los caracteres coinciden de manera exacta.
    - <span class="tag is-light"><b><i>exact_subgenus</i></b></span>: coincidencia exacta, pero incluyendo el subgénero.
    - <span class="tag is-light"><b><i>phonetic</i></b></span>: sonidos fonéticos similares a pesar de diferencias menores en la escritura (análisis a partir del algoritmo soundex).
    - <span class="tag is-light"><b><i>near_1</i></b></span>: muy buena coincidencia, excepto por un carácter (este nivel de coincidencia bastante confiable).
    - <span class="tag is-light"><b><i>near_2</i></b></span>: buena coincidencia, excepto por dos caracteres (se requiere una revisión adicional del nombre).
    - <span class="tag is-light"><b><i>near_3</i></b></span>: buena coincidencia, excepto por tres caracteres (se requiere una revisión cuidadosa del nombre).
    - <span class="tag is-light"><b><i>match_quarantine</i></b></span>: coincide con un nombre que se encuentra actualmente en cuarentena. En este caso, se recomienda ponerse en contacto con el equipo de WoRMS (info@marinespecies.org).
    - <span class="tag is-light"><b><i>match_deleted</i></b></span>: coincide con un nombre que ha sido eliminado y no hay una alternativa disponible en WoRms. En este caso, se recomienda ponerse en contacto con el equipo de WoRMS (info@marinespecies.org).

- _**"LSID"**_: _Life Science Identifier_ de WoRms, el cual incluye el <span class="tag is-warning is-light"><i>AphiaID</i></span> y es obligatorio para la publicación a través del SiB Marino y OBIS. Es equivalente al elemento DwC <span class="tag is-success is-light"><i>scientificNameID</i></span>.
    
- _**"Taxon status"**_: estatus taxonómico del nombre científico del taxón: aceptado, no acepetado, ambiguo, entre otros. Este elemento le permitirá identificar qué nombres debe revisar en detalle.
    
- <span class="tag is-success is-light"><i>scientificName</i></span>: el nombre científico del taxón con el que hubo una coincidencia dentro de WoRMS.
    
- _**"Authority"**_: nombre del autor del nombre científico, corresponde al elemento DwC <span class="tag is-success is-light"><i>scientificNameAuthorship</i></span>.
    
- _**"ScientificName_accepted"**_: nombre científico aceptado del taxón. En caso de que el _**"Taxon status"**_ del nombre sea diferente a <span class="tag is-light"><b><i>accepted</i></b></span>, puede revisar y decidir si usa el nombre aceptado.
    
- _**"Authority_accepted"**_: autoría aceptada del nombre científico. Corresponde al elemento DwC <span class="tag is-success is-light"><i>scientificNameAuthorship</i></span>.
    
- _**"Classification"**_: taxonomía superior del taxón (<span class="tag is-success is-light"><i>kingdom</i></span>,  <span class="tag is-success is-light"><i>phylum</i></span>, <span class="tag is-success is-light"><i>class</i></span>, <span class="tag is-success is-light"><i>order</i></span>, <span class="tag is-success is-light"><i>family</i></span>, <span class="tag is-success is-light"><i>genus</i></span>, <span class="tag is-success is-light"><i>subgenus</i></span>, <span class="tag is-success is-light"><i>species</i></span> y	<span class="tag is-success is-light"><i>subspecies</i></span>. Puede utilizar estos elementos para completar el conjunto de datos o hacer correcciones respecto al archivo original.
    
- **Columnas _"Environment"_**: corresponde a los elementos del DwC que describen el tipo de ambiente donde habita el taxón: <span class="tag is-success is-light"><i>isMarine</i></span> (habitat marino), <span class="tag is-success is-light"><i>isBrackish</i></span> (habitat salobre), <span class="tag is-success is-light"><i>isFresh</i></span> (habitat de agua dulce) e <span class="tag is-success is-light"><i>isTerrestrial</i></span> (habitat terrestre). En los elementos mencionados, <span class="tag is-light"><b>1</b></span> indica que el taxon habita en ese ambiente y <span class="tag is-light"><b>0</b></span> significa que no habita. 

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_Worms/Fig.8_WoRMS.png" width=800>

<sup>_Figura 8. Vista del archivo de resultados descargado_.</sup>

### 6.2. Identificar y resolver inconsistencias

 - Explore la columna _**"Match type"**_ y revise los datos que tuvieron un valor distinto a <span class="tag is-light"><b><i>exact</i></b></span> y los que están vacíos. Luego, ajuste los nombres científicos y la taxonomía superior de acuerdo a los elementos <span class="tag is-success is-light"><i>scientificName</i></span> y _**"ScientificName_accepted"**_, si aplican. 

<div class="notification is-info is-light">
  <b>Tip:</b> Los nombres sugeridos por WoRMS corresponden a especies marinas. Revise con cuidado la taxonomía sugerida para el género <i>Carollia</i>, respecto a la información y clase original de los datos.
</div>

 - Nuevamente, revise los nombres que están vacíos y no tuvieron ninguna coincidencia con WoRMS en la columna _**"Match type"**_. ¿Podría explicar por qué no hubo coindicencia?

> Es posible que algunos nombres de taxones marinos no esten aún en WoRMS. Para agregarlos, es necesario seguir las recomendaciones de la documentación de WoRMS en las secciones [_Add a new accepted taxon_](https://www.marinespecies.org/aphia.php?p=manual#topic2) y [_Add a new unaccepted taxon_](https://www.marinespecies.org/aphia.php?p=manual#topic3).
>
    
 - Explore la columna _**"Taxon status"**_ y revise los nombres que tengan valores distintos a <span class="tag is-light"><b><i>accepted</i></b></span> y los que estén vacíos. Compare dichos nombres con la columna _**"ScientificName_accepted"**_ y realice los respectivos ajustes.

 - Explore las columnas <span class="tag is-success is-light"><i>isMarine</i></span> (hábitat marino), <span class="tag is-success is-light"><i>isBrackish</i></span> (hábitat salobre), <span class="tag is-success is-light"><i>isFresh</i></span> (hábitat de agua dulce) e <span class="tag is-success is-light"><i>isTerrestrial</i></span> (hábitat terrestre) para identificar si hay registros que solo correspondan a hábitats terrestres. Si los hay, verifique la especie y ajuste la taxonomía superior de ser necesario.


¿Identificó otros ajustes a realizar en el conjunto de datos a partir de la validación?


## Paso 7 - Verificación del resultado

Descargue y compare el siguiente archivo, validado según las definiciones del estándar _Darwin Core_, con el archivo que trabajó en el laboratorio e identifique aciertos y oportunidades de mejora. En la hoja 1, encontrará el archivo descargado de la herramienta con los ajustes mencionados en el paso 6. En la hoja 2, hallará los datos estructurados según el DwC.

**¿Qué diferencias encontró con sus resultados?**

* [Archivo validado](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/Solucion_datos_casomarinocosteros.xlsx)

****
**¡Felicitaciones!** Terminó la revisión de los nombres científicos con la herramienta WoRMS.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) permite usar, redistribuir y construir sobre estos contenidos libremente.
    
¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!

**Citación sugerida**

> Plata C., Ortíz R., Marentes E., Lozano J. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
