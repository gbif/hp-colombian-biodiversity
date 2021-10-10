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

Realizar la validación taxonómica de los nombres científicos para detectar posibles errores de formato o precisión. 

**Sobre la herramienta**

La herramienta [_Species-matching_](https://www.gbif.org/es/tools/species-lookup) es un servicio de [GBIF](https://www.gbif.org) que permite validar de manera automática y masiva hasta 5.000 nombres científicos en un conjunto de datos, la herramienta compara los nombres científicos del conjunto contra el árbol taxonómico de GBIF, a partir del cual obtiene la jerarquía taxonómica de cada taxón (Reino, Filo, Clase, Orden, Familia, Género) y su estatus taxonómico (Sinónimo, Aceptado, Dudoso). 

```tip
GBIF Backbone Taxonomy. El árbol taxonómico de GBIF está basado en 56 fuentes taxonómicas mundiales, permitiendo la integración de nombres científicos independientemente de la fuente de los datos, registros biológicos, taxa, eventos, fichas de especies doi.org/10.15468/39omei
```

**Enlace**

_Species Matching - GBIF_: [https://www.gbif.org/es/tools/species-lookup](https://www.gbif.org/es/tools/species-lookup)

**Requerimientos**

* El conjunto de datos debe tener como mínimo una columna llamada ```scientificName``` (Nombre científico) y debe estar documentada para todos los casos.

* La herramienta solo admite archivos en formato CSV. 

**Archivo de trabajo**

Descargue el archivo [```Datos_speciesmatching.zip```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Datos_speciesmatching.zip). Descomprima el archivo y en el encontrará un archivo ```Datos_speciesmatching.csv``` para realizar el laboratorio.

--------

## Paso 1 - Carga de archivos en Species-Matching
Ingrese a la herramienta en línea [Species-Matching]( https://www.gbif.org/es/tools/species-lookup) y cargue el archivo ```Datos_speciesmatching.csv``` (Fig. 1); Para ello tiene dos opciones:

* Haga clic en *SELECT FILE* y seleccione el archivo desde la ubicación en su ordenador.
* Arrastre el archivo desde su explorador de archivos y suéltelo en el ícono *DROP HERE*.

>:warning: Para que un archivo sea leído por la herramienta, debe estar en formato .csv y tener como mínimo una columna con nombres científicos llamada  *scientificName*

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_speciesMatching.JPG" width=800>

*Figura 1. Página principal de la herramienta Species Matching*


## Paso 2 - Manejo de la herramienta

### 2.1. Selección de reino 

Luego de cargar el archivo la herramienta le permite al usuario seleccionar un reino (*kingdom*) contra el cual contrastar los nombres científicos, esto solo es recomendable cuando todos los registros pertenecen al mismo reino.

**a) Seleccione el reino *animalia***
**b) Haga clic en ```MATCH TO GBIF BACKNONE```**

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_speciesMatching.JPG" width=800>

*Figura 2. Detalle de la selección de Reino*


>:ligth: **Recomendación:**:ligth: incluir el elemento ```kingdom``` cuando pertenecen a reinos diferentes y siempre que sea posible en el archivo de validación, de esta forma se evitan problemas ocasionados por homónimos entre distintos reinos. 

### 2.2. Resultados de la validación en línea

Una vez validado el archivo, visualizará en la herramienta en línea una tabla con las siguientes columnas/elementos (Fig. 3):

* *verbatimScientificName*: el nombre original del nombre científico.
* *preferedKingdom*: reino seleccionado para la validación.
* *matchType*: tipo de coincidencia entre el nombre científico original contra el árbol taxonómico de GBIF.
* *confidence*: grado de confianza del cruce de información.
* *scientificName*: nombre científico sugerido de acuerdo al árbol taxonómico de GBIF.
* *status*: estatus taxonómico del nombre científico.
* *rank*: rango taxonómico del nombre taxonómico.
* *Taxonomía superior*: Clasificación taxonómica sugerida para: *kingdom*,  *phylum*, *class*, *order*, *family* y *genus*.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_speciesMatching.JPG" width=800>

*Figura 3. Detalles del resultado de la validación en Species Matching*

### 2.3. Corrección y edición de nombres científicos

Diríjase a la columna *matchType*, al hacer clic en el encabezado podrá reorganizar los registros de menor a mayor coincidencia (Fig. 4).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_speciesMatching.JPG" width=800>

*Figura 4. Resultados organizados en orden de coincidencia en la columna matchType*

Revise y ajuste los nombres científicos identificados con la etiqueta ```[HIGHERRANK]```. Diríjase a la columna ScientificName, y haga clic en el ícono del lápiz (Fig. 5A), luego aparecerá una ventana que le permitirá seleccionar el nombre científico válido para el registro (Fig. 5B). 

> :rotating_light: Para el caso del registro *Dendrophidium percarinatus*, seleccione la segunda opción: *Dendrophidion percarinatum* (Cope,1893), note que el nombre original tenía un error de tipeo.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_speciesMatching.jpg" width=800>

*Figura 5. Edición del nombre científico*

La herramienta lápiz le permite editar el nombre interpretado por GBIF para cualquier registro.

> :warning: **Advertencia**, no es necesario que ajuste todos los nombres con la etiqueta ```FUZZY```,  esto lo puede realizar de forma masiva en los siguientes pasos.
> 

### 2.4. Descarga del archivo validado

Descargue el archivo con la validación taxonómica, en la parte inferior derecha encontrará la opción ```GENERATE CSV``` (Fig. 6). Haga clic sobre el botón y seleccione la ubicación en su ordenador donde guardará el archivo. El  programa descargará un archivo llamado ```normalized.csv```

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_speciesMatching.JPG" width=800>

*Figura 6. Descarga del archivo validado con Species Matching.*


## Paso 3 - Carga de archivo validado en OpenRefine

En OpenRefine tiene la ventaja de poder realizar filtros y facets que le permiten explorar con mas detalle los resultados obtenidos de la herramienta Species Matching.

Cargue en OpenRefine el archivo ```normalized.csv``` obtenido del paso anterior. Para ello, abra OpenRefine y en el menú lateral seleccione la opción *Create Project* > *Get data from* > *This computer* > *Choose Files*.
Seleccione el archivo que descargó en el paso anterior y de clic en la opción *Next*>> (Fig. 7).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_speciesMatching.JPG" width=800>

*Figura 7. Carga del archivo en Open Refine*

Modifique el nombre del proyecto en la opción *Project name* dejando solamente *normalized*. En el campo *Character encoding* asegurese de seleccionar UTF-8 y finalmente seleccione la opción *Create Project>>*(Fig. 8).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_speciesMatching.JPG" width=800>

*Figura 8. Modificación de nombre y creación de proyecto*

## Paso 4 - Exploración de resultados en OpenRefine

Explore el archivo que subió a OpenRefine e identifique los elementos *matchType*, *confidence*, *status* y *rank*, que le permitirán validar y decidir que acciones tomar en caso de que necesite corregir el nombre científico de los registros biológicos (Fig. 9A)

Adicionalmente cuenta con las columnas que contienen la jerarquía taxonómica (Fig. 9B), con las cuales podrá validar y completar la taxonomía superior en su conjunto de datos. 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.9_speciesMatching.JPG" width=800>

*Figura 9. Contenido de las columnas en OpenRefine*

### 4.1. Creación de filtros en OpenRefine

Realice un *Text facet* en la columna *matchType*. Para hacerlo, haga clic en *matchType* > *Facet* > *Text facet* (Fig. 10A). Repita este procedimiento y cree otro *Text facet* para la columna *status*.

En el panel lateral izquierdo aparecerá los dos filtros creados (Fig. 10B), explore cuantos registros tiene un nombre científico que coincide de manera exacta *EXACT* con el árbol taxonómico de GBIF, cuantos coinciden parcialmente *FUZZY* y cuantos coinciden solo a un nivel taxonómico superior al documentado en el nombre científico *HIGHERRANK*. Explore también cuantos registros tienen un nombre científico con estatus taxonómico aceptado *ACCEPTED* y cuántos son sinónimos *SYNONYM*. Al hacer estos filtros usted podrá identificar aquellos registros cuyo nombre científico tiene errores de tipeo y corregirlos. 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.10_speciesMatching.JPG" width=800>

*Figura 10. Creación de filtros y visualización de resultados en OpenRefine*

### 4.2. Comparación

Compare los elementos ```verbatimScientificName``` (el nombre original en su conjunto de datos) y ```scientificName```(el nombre válido según GBIF) para los registros con ```matchtype = FUZZY```, observará que algunos registros tienen errores de tipeo. Utilice su nuevo conocimiento en OpenRefine para hacer los ajustes que considere pertinentes.

## Paso 5 - Datos propios
Si cuenta con un conjunto de datos propio, intente validar los nombres científicos siguiendo los pasos de este laboratorio.

**¡Felicitaciones!** 
Terminó la revisión de los nombres científicos con la herramienta species-matching

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
