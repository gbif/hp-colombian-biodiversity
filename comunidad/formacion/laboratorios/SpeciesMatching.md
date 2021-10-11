---
layout: documentation
permalink: /formacion/laboratorios/SpeciesMatching
title: "Species Matching"
description: "Objetivo: Utilizar Open Refine para manejar, validar y limpiar de manera eficiente datos sobre biodiversidad, asegurando una mejor calidad para su publicación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Validación Taxonómica - Species Matching

**Objetivo**

Realizar la validación taxonómica de los nombres científicos para detectar posibles errores de formato y precisión. 

**Sobre la herramienta**

La herramienta [_Species Matching_](https://www.gbif.org/es/tools/species-lookup) es un servicio de [GBIF](https://www.gbif.org) que permite validar de manera automática y masiva hasta 5000 nombres científicos en un conjunto de datos. _Species Matching_ compara los nombres científicos del conjunto con el árbol taxonómico de GBIF, a partir del cual obtiene la clasificación de cada taxón (Reino, Filo, Clase, Orden, Familia, Género) y su estatus taxonómico (Sinónimo, Aceptado, Dudoso). 

<div class="notification is-info is-light">
  <b>Tip:</b> <i>GBIF Backbone Taxonomy</i>, el árbol taxonómico de GBIF, está basado en 56 fuentes taxonómicas mundiales, permitiendo la integración de nombres científicos independientemente de la fuente de los datos (registros biológicos, taxa, eventos o listas de especies).
</div>
Fuente: [doi.org/10.15468/39omei](doi.org/10.15468/39omei)

**Enlace**

_Species Matching_ - GBIF: [https://www.gbif.org/es/tools/species-lookup](https://www.gbif.org/es/tools/species-lookup)

**Requerimientos**

* El conjunto de datos debe tener una columna llamada <span class="tag is-success is-light"><i>scientificName</i></span> (nombre científico) y debe estar documentada para todos los casos.

* La herramienta solo admite archivos en formato CSV. 

**Archivo de trabajo**

Descargue el archivo comprimido [<FONT FACE="monospace"><b>«Datos_speciesmatching.zip»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Datos_speciesmatching.zip). Al descomprimirlo, encontrará el conjunto de datos <FONT FACE="monospace"><b>«Datos_speciesmatching.csv»</b></FONT> para realizar el laboratorio.

--------

## Paso 1 - Carga de archivos en Species-Matching
Ingrese a la herramienta en línea [_Species Matching_]( https://www.gbif.org/es/tools/species-lookup) y cargue el archivo <FONT FACE="monospace"><b>«Datos_speciesmatching.csv»</b></FONT> (Fig. 1). Para ello, tiene dos opciones:

* Haga clic en <span class="tag is-warning is-light"><i>SELECT FILE</i></span> y seleccione el archivo desde la ubicación en su ordenador.
* Arrastre el archivo desde su explorador de archivos y suéltelo en el ícono <span class="tag is-warning is-light"><i>DROP HERE</i></span>.

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
    Para que un archivo sea leído por la herramienta, debe estar en formato .csv y tener como mínimo una columna con nombres científicos llamada <b><i>scientificName</i></b>.
  </div>
</article>

 <img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_speciesMatching.JPG" width=800>

<sup>*Figura 1. Página principal de la herramienta Species Matching.*</sup>


## Paso 2 - Manejo de la herramienta

### 2.1. Selección de reino 

Luego de cargar el archivo, la herramienta le permite al usuario seleccionar un reino (*kingdom*) con el cual comparar los nombres científicos. Esto solo es recomendable cuando todos los registros pertenecen al mismo reino.

**a) Seleccione el reino _animalia_**
**b) Haga clic en <span class="tag is-warning is-light"><i>MATCH TO GBIF BACKNONE</i></span>**

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_speciesMatching.JPG" width=800>

<sup>*Figura 2. Detalle de la selección de Reino.*

<div class="notification is-info is-light">
  <b>Recomendación:</b> incluir el elemento <i>kingdom</i> cuando los datos pertenecen a reinos diferentes, y siempre que sea posible, en el archivo de validación. De esta forma, se evitan problemas ocasionados por homónimos de distintos reinos.
</div>

### 2.2. Resultados de la validación en línea

Una vez validado el archivo, verá una tabla con las siguientes columnas o elementos (Fig. 3):

* <span class="tag is-success is-light"><i>verbatimScientificName</i></span>: el nombre original del nombre científico.
* _**"preferedKingdom"**_: reino seleccionado para la validación.
* _**"matchType"**_: nivel de coincidencia entre el nombre científico original y el árbol taxonómico de GBIF.
* _**"confidence"**_: grado de confianza del cruce de información.
* <span class="tag is-success is-light"><i>scientificName</i></span>: nombre científico sugerido de acuerdo al árbol taxonómico de GBIF.
* _**"status"**_: estado taxonómico del nombre científico.
* _**"rank"**_: rango taxonómico del nombre taxonómico.
* _**Taxonomía superior**_: clasificación taxonómica sugerida para: <span class="tag is-success is-light"><i>kingdom</i></span>,  <span class="tag is-success is-light"><i>phylum</i></span>, <span class="tag is-success is-light"><i>class</i></span>, <span class="tag is-success is-light"><i>order</i></span>, <span class="tag is-success is-light"><i>family</i></span> y <span class="tag is-success is-light"><i>genus</i></span>.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_speciesMatching.JPG" width=800>

<sup>*Figura 3. Detalles del resultado de la validación en Species Matching.*</sup>

### 2.3. Corrección y edición de nombres científicos

Diríjase a la columna _**"matchType"**_ y haga clic en el encabezado para reorganizar los registros de menor a mayor coincidencia (Fig. 4).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_speciesMatching.JPG" width=800>

<sup>*Figura 4. Resultados organizados en orden de coincidencia en la columna matchType.*</sup>

Revise y ajuste los nombres científicos identificados con la etiqueta <span class="tag is-warning is-light"><i>HIGHERRANK</i></span>. Diríjase a la columna <span class="tag is-success is-light"><i>scientificName</i></span> y seleccione el ícono del lápiz (Fig. 5A). Posteriormente, aparecerá una ventana que le permitirá seleccionar el nombre científico válido para el registro (Fig. 5B). 

<div class="notification is-info is-light">
  <b>Nota:</b> Para el registro de <i>Dendrophidium percarinatus</i>, seleccione la segunda opción: <i>Dendrophidion percarinatum</i> (Cope, 1893). Note que el nombre original tenía un error de tipeo.
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_speciesMatching.jpg" width=800>

<sup>*Figura 5. Edición del nombre científico.*</sup>

La herramienta lápiz le permite editar el nombre interpretado por GBIF para cualquier registro.

<article class="message is-warning">
  <div class="message-header">
    <p>¡Advertencia!</p>    
  </div>
  <div class="message-body">
    No es necesario que ajuste todos los nombres con la etiqueta <b><i>FUZZY</i></b>,  esto lo puede hacer de forma masiva en los siguientes pasos.
  </div>
</article>

### 2.4. Descarga del archivo validado

En la parte inferior derecha, encontrará la opción <span class="tag is-warning is-light"><i>GENERATE CSV</i></span>(Fig. 6), haga clic sobre ese botón y seleccione una ubicación en su ordenador para guardar el archivo. El conjunto de datos descargado tendrá como nombre <FONT FACE="monospace"><b>«normalized.csv»</b></FONT>.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_speciesMatching.JPG" width=800>

<sup>*Figura 6. Descarga del archivo validado con Species Matching.*</sup>


## Paso 3 - Carga de archivo validado en OpenRefine

_OpenRefine_ le otorga la ventaja de poder realizar filtros y _facets_ para explorar con más detalle los resultados obtenidos a partir la herramienta _Species Matching_.

Cargue en _OpenRefine_ el archivo <FONT FACE="monospace"><b>«normalized.csv»</b></FONT> que obtuvo en el paso anterior. Para ello, abra OpenRefine y siga la ruta <span class="tag is-info is-light"><i>Create Project > Get data from > This computer > Choose Files</i></span> en el menú lateral. Luego, seleccione el archivo que descargó en el paso anterior y dé clic en la opción <span class="tag is-warning is-light"><i>Next >></i></span> (Fig. 7).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_speciesMatching.JPG" width=800>

<sup>*Figura 7. Carga del archivo en Open Refine.*</sup>

Modifique el nombre del proyecto en el cuadro de texto <span class="tag is-warning is-light"><i>Project name</i></span>, dejando solamente *normalized*. En el campo <span class="tag is-warning is-light"><i>Character encoding</i></span>, asegurese de seleccionar UTF-8. Finalmente, elija la opción <span class="tag is-warning is-light"><i>Create Project >></i></span>(Fig. 8).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_speciesMatching.JPG" width=800>

<sup>*Figura 8. Modificación de nombre y creación de proyecto.*</sup>

## Paso 4 - Exploración de resultados en OpenRefine

Explore el archivo que subió a OpenRefine e identifique los elementos _**"matchType"**_, _**"confidence"**_, _**"status"**_ y _**"rank"**_, los cuales le permitirán validar y decidir qué acciones tomar en caso de que necesite corregir el nombre científico de los registros biológicos (Fig. 9A)

Adicionalmente, las columnas que contienen la jerarquía taxonómica (Fig. 9B) son útiles validar y completar la taxonomía superior de su conjunto de datos. 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.9_speciesMatching.JPG" width=800>

<sup>*Figura 9. Contenido de las columnas en OpenRefine.*</sup>

### 4.1. Creación de filtros en OpenRefine

Realice un _Text facet_ en la columna _**"matchType"**_. Para hacerlo, haga clic en el menú de _**"matchType"**_ y siga la ruta  <span class="tag is-info is-light"><i>Facet > Text facet</i></span> (Fig. 10A). Repita este procedimiento y cree otro _Text facet_ para la columna _**"status"**_.

En el panel lateral izquierdo, aparecerán los dos filtros creados (Fig. 10B). Explore cuántos registros tienen un nombre científico que coincide de manera exacta (<span class="tag is-warning is-light"><i>EXACT</i></span>) con el árbol taxonómico de GBIF, cuántos coinciden parcialmente (<span class="tag is-warning is-light"><i>FUZZY</i></span>) y cuántos coinciden solo a un nivel taxonómico superior al documentado en el nombre científico (<span class="tag is-warning is-light"><i>HIGHERRANK</i></span>). Revise también cuántos registros tienen un nombre científico con estatus taxonómico aceptado (<span class="tag is-warning is-light"><i>ACCEPTED</i></span>) y cuántos son sinónimos (<span class="tag is-warning is-light"><i>SYNONYM</i></span>). Al hacer estos filtros, podrá identificar aquellos registros cuyo nombre científico tiene errores de tipeo para corregir estos casos posteriormente.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.10_speciesMatching.JPG" width=800>

<sup>*Figura 10. Creación de filtros y visualización de resultados en OpenRefine.*</sup>

### 4.2. Comparación

Compare los elementos <span class="tag is-success is-light"><i>verbatimScientificName</i></span> (el nombre original en su conjunto de datos) y <span class="tag is-success is-light"><i>scientificName</i></span> (el nombre válido según GBIF) en los registros que tengan el valor <span class="tag is-warning is-light"><i>FUZZY</i></span> para el _**"matchtype"**_. Después de este proceso, observará que algunos registros tienen errores de tipeo. Por lo tanto, puede utilizar sus nuevos conocimientos en _OpenRefine_ para hacer los ajustes que considere pertinentes.

## Paso 5 - Datos propios
  
Si cuenta con un conjunto de datos propio, intente validar los nombres científicos siguiendo los pasos de este laboratorio.

**¡Felicitaciones!** 
Terminó la revisión de los nombres científicos con la herramienta _Species Matching_.

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
