---
layout: documentation
permalink: /formacion/laboratorios/RutinasOpenRefine
title: "Rutinas Open Refine"
description: "Objetivo: Utilizar Open Refine para manejar, validar y limpiar de manera eficiente datos sobre biodiversidad, asegurando una mejor calidad para su publicación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---


# Rutinas _Open Refine_

**Objetivo**

Profundizar en el uso de _OpenRefine_ para validar de datos sobre biodiversidad de manera automática, utilizando las APIs de varias herramientas en línea.

**Introducción**

>Próximamente, video introductorio.
>

**Sobre la Herramienta**

[_OpenRefine_](https://openrefine.org/) es un _software_ creado con el objetivo de pulir datos crudos hasta convertirlos en diamantes, los cuales son activos valiosos en la era del _BigData_.

Este programa permite visualizar y manipular datos tabulares, facilitando el mejoramiento de la calidad general de un conjunto de datos. Tiene la apariencia de un software tradicional de hoja de cálculo (similar a Excel), pero funciona como una base de datos. Esto significa que _OpenRefine_ no es adecuado para adicionar nuevas filas de datos, pero **es extremadamente poderoso cuando se trata de explorar, limpiar y vincular datos**.

_OpenRefine_ es un _software_ de código abierto bajo una licencia BSD y se instala localmente, por lo que funciona como una aplicación web personal y de acceso privado a la que se accede desde un navegador web.

Esta herramienta sirve para **todo tipo de datos**. Sin embargo, en este laboratorio se explica su funcionamiento en el contexto de datos sobre biodiversidad, estandarizados en Darwin Core. Puede consultar más información de la herramienta en el [manual de usuario](https://docs.openrefine.org/) (en inglés).

Para saber más acerca de GREL, el lenguaje de programación de _OpenRefine_ que se utiliza en las rutinas, consulte el [manual de usuario](https://docs.openrefine.org/manual/grel) (en inglés).

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

>Esta guía adapta y profundiza en los procesos correspondientes a la sección 5 de la [Guía para la limpieza de datos sobre biodiversidad con _OpenRefine_](https://docs.gbif.org/openrefine-guide/3.0/es/).
>

**Requerimientos** 

- _Google Chrome_ instalado y configurado como navegador predeterminado.
- Haber realizado la [Guía general de _Open Refine_](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/OpenRefine).
- Para obtener mejores resultados, se recomienda ampliar la memoria RAM disponible para el uso de _OpenRefine_. Para ello, siga las instrucciones del [manual de usuario](https://docs.openrefine.org/manual/installing#increasing-memory-allocation) (en inglés) para permitir que el programa utilice hasta el 75% de la memoria RAM de su computador, siempre y cuando reserve como mínimo 2GB para el funcionamiento básico del equipo. Por ejemplo:
    -  Si su computador tiene 4GB de RAM, disponga hasta 2GB para _OpenRefine_ y reserve los 2GB restantes para el funcionamiento del equipo.
    -  Si su computador tiene 8GB de RAM, disponga hasta 6GB para _OpenRefine_ y reserve los 2GB restantes para el funcionamiento del equipo.

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
      No utilice <i>Internet Explorer</i> para este laboratorio, ya que <i>OpenRefine</i> no funciona bien con este navegador <i>web</i>.
  </div>
</article>

## Sobre las rutinas

Las rutinas comparan la información documentada en el conjunto de datos con diferentes fuentes de referencia y crean columnas de validación a partir de dicha comparación. En estas columnas se puede evidenciar la correspondencia entre el archivo original y la fuente de referencia a través de operadores lógicos, unos (<span class="tag is-light"><b>1</b></span>) y ceros (<span class="tag is-light"><b>0</b></span>), que funcionan como indicadores de validación.

Los indicadores de validación se interpretan así:

<span class="tag is-light"><b>0</b></span>: el valor documentado en el conjunto de datos NO coincide con la fuente de referencia, así que el valor debe ser revisado y ajustado en caso de ser necesario.

<span class="tag is-light"><b>1</b></span>: el valor documentado en el conjunto de datos coincide con la fuente de referencia, así que no es necesario tomar acciones adicionales.

Observe el ejemplo de la Figura 1. En la primera fila, el valor original de la columna <span class="tag is-success is-light"><i>family</i></span> no coincide con la columna _**"familySuggested"¨**_, ya que tiene un error de tipeo. Por lo tanto, el indicador de validación (columna _**"familyValidation"**_) es cero (<span class="tag is-light"><b>0</b></span>). Note que el indicador de validación (_**"familyValidation"**_) de las filas donde sí hay coincidencia es uno (<span class="tag is-light"><b>1</b></span>).

Las rutinas utilizan API’s (Interfaces de Programación de Aplicaciones) de repositorios globales taxonómicos como fuentes de validación. Las API's pueden ser de carácter geográfico o archivos de texto plano obtenidos a partir de herramientas externas de validación.

Hay seis rutinas disponibles (Tabla 1), en esta guía se profundizará en 4 de ellas.

<sup>_Tabla 1. Lista de rutinas para la validación de datos primarios sobre biodiversidad_.</sup>

| Nombre | Uso | Requerimientos 
| -------- | -------- | -------- |
| Validación taxonómica con el API de GBIF | Validación taxonómica que usa como referencia el [árbol taxonómico de GBIF](https://doi.org/10.15468/39omei). Permite validar registros de varios grupos biológicos a la vez, así como obtener la taxonomía superior de cada taxa.| Requiere como mínimo la documentación de los elementos DwC <span class="tag is-success is-light"><i>scientificName</i></span> y <span class="tag is-success is-light"><i>kingdom</i></span> y acceso a Internet para hacer la solicitud al API de GBIF.
|Validación taxonómica con _Species Matching_ de GBIF| Validación taxonómica que usa como referencia el [árbol taxonómico de GBIF](https://doi.org/10.15468/39omei). A diferencia de la rutina anterior, realiza la validación con base en el archivo de resultados <FONT FACE="monospace"><b>«<i>normalized</i>»</b></FONT>, obtenido de [_Species Matching_](https://www.gbif.org/es/tools/species-lookup). Por lo tanto, permite aprovechar las funcionalidades de validación y limpieza de esta herramienta. La rutina facilita el cruce de los resultados obtenidos con [_Species Matching_](https://www.gbif.org/es/tools/species-lookup) respecto al conjunto de datos original. | Requiere como mínimo que el elemento DwC <span class="tag is-success is-light"><i>scientificName</i></span> esté documentado y que el archivo <FONT FACE="monospace"><b>«<i>normalized</i>»</b></FONT> sea previamente cargado en _OpenRefine_ para ejecutar la rutina.
| Validación taxonómica con el API de WoRMS | Validación taxonómica específica para organismos marinos, que usa como referencia el [árbol taxonómico de _LifeWatch_ (LW-SIBb)](https://www.lifewatch.be/en/lifewatch-species-information-backbone) por medio de la API de [WoRMS (_World Register of Marine Species_)](http://www.marinespecies.org/aphia.php?p=webservice). Permite obtener la taxonomía superior de cada taxa, así como elementos taxonómicos obligatorios para la publicación de datos a través de [OBIS](https://obis.org/).| Requiere como mínimo la documentación del elemento DwC <span class="tag is-success is-light"><i>scientificName</i></span> y acceso a Internet para hacer la solicitud al API de GBIF.
|Validación de elevaciones con el API de _GeoNames_ | Validación y obtención de la elevación a partir de las coordenadas con el servicio geográfico de _GeoNames_. | Requiere como mínimo la documentación de los elementos DwC <span class="tag is-success is-light"><i>decimalLatitude</i></span> y <span class="tag is-success is-light"><i>decimalLongitude</i></span> y acceso a Internet para hacer la solicitud al API de _GeoNames_.
|Validación de nombres geográficos con DIVIPOLA | Validación de los nombres oficiales de departamentos, municipios y centros poblados | Requiere como mínimo que el elemento DwC <span class="tag is-success is-light"><i>stateProvince</i></span> (departamento) esté documentado. Adicionalmente, valida los elementos <span class="tag is-success is-light"><i>county</i></span> (municipio) y <span class="tag is-success is-light"><i>municipality</i></span> (centro poblado) si están documentados.|
|Transformación de fechas con el API de _Canadensys_| Transformación de fechas en múltiples formatos al estándar ISO 8601.| Requiere la documentación del elemento DwC <span class="tag is-success is-light"><i>eventDate</i></span> y acceso a Internet para hacer la solicitud al API de _Canadensys_.|

Las rutinas cuya fuente de referencia es un API consultan a un servicio externo y obtienen una respuesta en formato JSON. Cada rutina interpreta esta respuesta y la hace legible en forma de columnas dentro del conjunto de datos. Posteriormente, el resultado de la consulta al API es comparado con el valor documentado en el conjunto de datos y se generan nuevas columnas con los indicadores de la validación (unos y ceros).

Las rutinas que usan como fuente archivos de texto plano consultan con base en un archivo subido previamente a _OpenRefine_, el cual es comparado con el valor documentado en el conjunto de datos. Como resultado de la comparación se generan nuevas columnas con los indicadores de la validación.

Todas las rutinas se ejecutan de manera similar, los detalles específicos para cada una se explican más adelante. Esta guía se enfoca en 4 rutinas: dos taxonómicas y dos geográficas, por lo que se divide en dos partes.


## Parte 1 - Validación taxonómica con GBIF y WoRMS en _OpenRefine_

La primera parte de la guía aborda la validación taxonómica con el API de GBIF y WoRMS, lo cual permite consultar estos árboles taxonómicos de manera directa, sin utilizar las aplicaciones en línea [_Species Matching_](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/SpeciesMatching) o [WoRMS _TaxonMatch_](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/Worms). Esta ruta directa también le permite hacer consultas para una mayor cantidad datos y elementos, sin los limitantes de las aplicaciones en línea.

Dependiendo de su interés particular, realice esta guía con alguna de las suguientes opciones:

**Datos de grupos biológicos principalmente continentales**

- Descargue el archivo [<FONT FACE="monospace"><b>«datos_Estructurados.xlsx»</b></FONT>](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/datos_Estructurados.xlsx) para realizar el laboratorio.
- Utilice la rutina [Validación taxonómica con el API de GBIF](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValTaxonomicAPIGBIF_ValTaxonomicaAPIGBIF.txt)

**Datos de grupos biológicos marino-costeros**
- Descargue el archivo [<FONT FACE="monospace"><b>«datos_CasoMarinoCosteros.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_casomarinocosteros.xlsx) para realizar el laboratorio.
- Utilice la rutina [Validación taxonómica con el API de WoRMS](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValTaxonomicAPIWoRMS_ValTaxonomicaAPIWoRMS.txt)

### Paso 1 - Carga del archivo

Cree un proyecto en _OpenRefine_ con el conjunto de datos que desea validar. Si tiene dudas sobre cómo hacerlo, revise el **paso 2** de la [Guía general de OpenRefine](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/OpenRefine#paso-2---crear-un-proyecto). 

### Paso 2 - Revisión de elementos requeridos

Asegúrese de que el conjunto de datos cumpla con los elementos y requerimientos mínimos de cada rutina:

**Validación taxonómica con el API de GBIF - Datos continentales**

Requiere como mínimo la documentación de los elementos DwC <span class="tag is-success is-light"><i>scientificName</i></span> y <span class="tag is-success is-light"><i>kingdom</i></span> y acceso a Internet para hacer la solicitud al API de GBIF.

Haga un <span class="tag is-warning is-light"><i>Text facet</i></span> en los elementos <span class="tag is-success is-light"><i>kingdom</i></span> y <span class="tag is-success is-light"><i>class</i></span> (Fig. 2). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig 2. Filtro reino.png" width=800>

<sup>_Figura 2. <span class="tag is-warning is-light"><i>Text facet</i></span> en los elementos <span class="tag is-success is-light"><i>kingdom</i></span> y <span class="tag is-success is-light"><i>class</i></span>._</sup>

Observe que el conjunto de datos no tiene documentado el elemento <span class="tag is-success is-light"><i>kingdom</i></span> para ningún registro. Sin embargo, a partir del filtro sobre el elemento <span class="tag is-success is-light"><i>class</i></span>,  se puede inferir que todos los datos corresponden a animales. Por consiguiente, complete el reino para todos los registros (Fig. 3).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig 3. OR_avanzado.png" width=800>

<sup>_Figura 3. Ajuste previo a correr la rutina del elemento <span class="tag is-success is-light"><i>kingdom</i></span>._</sup>


Haga una limpieza previa del elemento <span class="tag is-success is-light"><i>scientificName</i></span> para obtener mejores resultados:

1. Eliminar elementos que no correspondan a la estructura del nombre cientÍfico, como **sp.**. Si necesita ayuda, siga el **paso 4.1.1** de la [guía general](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/OpenRefine#41-correcci%C3%B3n-combinando-filtros-y-funciones).
3. Elimine los calificadores de la identificación y ubíquelos en el elemento correspondiente. Si necesita ayuda, siga el **paso 4.2.2** de la [guía general](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/OpenRefine#42-filtros-con-expresiones-regulares).


**Validación taxonómica con el API de WoRMS - Datos marino-costeros**

Requiere como mínimo la documentación del elemento DwC <span class="tag is-success is-light"><i>scientificName</i></span> y acceso a Internet para hacer la solicitud al API de GBIF.

Haga una limpieza previa del elemento <span class="tag is-success is-light"><i>scientificName</i></span> para obtener mejores resultados. Puede ver las recomendaciones enteriores en la sección de **"Datos continentales"**.

### Paso 3 - Ejecución de la rutina

Seleccione la rutina de interés según la validación que desee realizar:

- Rutina de [Validación taxonómica con el API de GBIF](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValTaxonomicAPIGBIF_ValTaxonomicaAPIGBIF.txt) - Datos continentales.

- Rutina de [Validación taxonómica con el API de WoRMS](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValTaxonomicAPIWoRMS_ValTaxonomicaAPIWoRMS.txt) - Datos marino-costeros.

Haga clic en el enlace a la rutina y será redirigido a GitHub, donde encontrará un archivo de texto plano con la rutina. Luego, copie el texto de la rutina de validación (Fig. 4). Asegúrese de seleccionar solo la rutina -sin las instrucciones- y copiar todos los corchetes iniciales (<span class="tag is-light"><b>{</b></span>) y finales (<span class="tag is-light"><b>}</b></span>), ya que estos son fundamentales para que la rutina se ejecute correctamente.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-59.jpg" width=600>

<sup>_Figura 4. Selección de la rutina a ejecutar._</sup>

En el conjunto de datos a validar en _OpenRefine_, diríjase al menú superior izquierdo, seleccione la pestaña <span class="tag is-warning is-light"><i>Deshacer/Rehacer</i></span> y haga clic en el botón <span class="tag is-warning is-light"><i>Aplicar...</i></span>. A continuación, se abrirá una ventana de texto vacía. Pegue la rutina a ejecutar en el cuadro de texto y dé clic en <span class="tag is-warning is-light"><i>Ejecutar Operaciones</i></span> (Fig. 5).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-58.jpg" width=600>

<sup>_Figura 5. Ejecución de la rutina en OpenRefine._</sup>

El avance de la ejecución de la rutina se observa en la parte superior de la pantalla (Fig. 6).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-60.jpg" width=400>

<sup>_Figura 6. Avance de la ejecución de la rutina en OpenRefine._</sup>

Espere a que finalice la ejecución de la rutina. Las rutinas que requieren hacer llamados a servicios externos dependen de la conexión a Internet. Por consiguiente, estas consultas toman un tiempo en ejecutarse, el cual varía según el número de filas del conjunto de datos, de la velocidad de la conexión y de la memoria RAM de su equipo.

### Paso 4 - Resultados de la validación

Al terminar la ejecución de la rutina, obtendrá nuevas columnas en el conjunto de datos. Puede identificarlas por su terminación:

- _**"Suggested"**_: son valores sugeridos por la validación con las fuentes de referencia. Dependiendo de la rutina seleccionada, pueden ser sugerencias taxonómicas, geográficas o temporales.

- _**"Validation"**_: corresponde a los indicadores de validación (unos y ceros) que permiten rastrear diferencias entre el valor original y el valor sugerido para realizar posteriormente una limpieza de los datos.

En la Figura 7 se muestra un ejemplo de cómo se ven los identificadores de la validación y las nuevas columnas con las sugerencias después de ejecutar la rutina. El ejemplo muestra una validación taxonómica, pero las columnas de resultado pueden variar según el objetivo de cada rutina.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-61.jpg" width=800>

<sup>_Figura 7. Identificadores de validación y columnas resultantes de la rutina_.</sup>


**4.1 Datos de grupos biológicos principalmente continentales**

**Funcionamiento:**

Esta rutina valida la información taxonómica de un conjunto de datos, usando como referencia el árbol taxonómico de GBIF. Esto se logra a través de un llamado al API de GBIF con base en los elementos del estándar DwC <span class="tag is-success is-light"><i>scientificName</i></span> y <span class="tag is-success is-light"><i>kingdom</i></span> que se documentan en el conjunto de datos. Como resultado, el llamado retorna la taxonomía superior, nombres aceptados, estatus taxonómico y autoría del nombre científico de acuerdo al árbol taxonómico de GBIF. La rutina toma los valores obtenidos del árbol y los compara con los elementos documentados en el archivo base, generando los indicadores de validación que se explican a continuación.

<div class="notification is-info is-light">
  <b>Nota:</b> si también desea validar la taxonomía superior de su conjunto de datos, se requieren los elementos DwC <b><i>scientificName</i></b>, <b><i>kingdom</i></b>, <b><i>phylum</i></b>, <b><i>class</i></b>, <b><i>order</i></b>, <b><i>family</i></b> y <b><i>genus</i></b>.
</div>

**Resultados:**

En las primeras columnas del proyecto, encontrará los datos taxonómicos reorganizados junto con las nuevas columnas, resultado de la rutina. Primero encontrará las columnas asociadas al cruce con el árbol taxonómico y luego, de manera intercalada, las columnas con el valor taxonómico original, un valor sugerido de acuerdo al árbol taxonómico de GBIF y el indicador de validación que establece si los valores coinciden (<span class="tag is-light"><b>1</b></span>) o difieren (<span class="tag is-light"><b>0</b></span>).

A continuación, se listan las columnas que encontrará después de ejecutar la rutina:

- _**"taxonMatchType"**_: indica el resultado del cruce de los datos originales con el árbol taxonómico de GBIF a partir de los elementos <span class="tag is-success is-light"><i>scientificName</i></span> y <span class="tag is-success is-light"><i>kingdom</i></span>. Los valores que encontrará en esta columna son:

     - <span class="tag is-light"><b>EXACT</b></span>: significa que la correspondencia entre el <span class="tag is-success is-light"><i>scientificName</i></span> del conjunto de datos y el del árbol taxonómico es completa.

     - <span class="tag is-light"><b><i>FUZZY</i></b></span>: implica que la correspondencia entre el <span class="tag is-success is-light"><i>scientificName</i></span> del conjunto de datos y el del árbol taxonómico es parcial. Probablemente, el nombre difiere en su escritura, lo que indica errores de tipeo o diferencias por correcciones nomenclaturales. Por ejemplo, la terminación "i" o "ii" cuando la especie se dedica a una persona.

     - <span class="tag is-light"><b><i>HIGHERRANK</i></b></span>: significa que la correspondencia entre el nombre científico del conjunto de datos y el del árbol taxonómico fue parcial. No se identificó el <span class="tag is-success is-light"><i>scientificName</i></span> del taxón, pero sí en un nivel superior. Por ejemplo, si el <span class="tag is-success is-light"><i>scientificName</i></span> corresponde a una especie, la correspondencia con el árbol taxonómico de GBIF fue a nivel de género. Esto sucede cuando el taxón aún no está en el árbol taxonómico de GBIF o cuando hay errores de tipeo mayores.

     - <span class="tag is-light"><b><i>NONE</i></b></span> y <span class="tag is-light"><b><i>BLANK</i></b></span>: implica que la correspondencia entre el <span class="tag is-success is-light"><i>scientificName</i></span> del conjunto de datos y el del árbol taxonómico fue nula o hubo varias coincidencias con muy poca información para determinar un resultado. Esto sucede cuando hay homónimos o cuando el taxón aún no se encuentra en el árbol taxonómico de GBIF, como es el caso de especies recientemente descritas o algunas endémicas.
<br>
<br>
- <span class="tag is-success is-light"><i>scientificName</i></span>: columna original del conjunto de datos.
<br>
<br>
- _**"acceptedScientificName"**_: nombre científico aceptado por el árbol taxonómico de GBIF.
<br>
<br>
- _**"canonicalNameSuggested"**_: nombre canónico sugerido por el árbol taxonómico de GBIF.
<br>
<br>
- _**"taxonRankSuggested"**_: categoría del taxon sugerido por el árbol taxonómico de GBIF (por ejemplo: <span class="tag is-light"><b><i>SPECIES</i></b></span>, <span class="tag is-light"><b><i>GENUS</i></b></span>, <span class="tag is-light"><b><i>FAMILY</i></b></span>).
<br>
<br>
- _**"taxonomicStatusSuggested"**_: estado del taxon sugerido por el árbol taxonómico de GBIF (por ejemplo: <span class="tag is-light"><b><i>ACCEPTED</i></b></span>, <span class="tag is-light"><b><i>SYNONYM</i></b></span>).
<br>
<br>
- **Tripleta de elementos validados**: encontrará la columna original del conjunto de datos, la columna de validación y la columna con la sugerencia del árbol taxonómico de GBIF. Por ejemplo: <span class="tag is-success is-light"><i>class</i></span>, _**"classValidation"**_, _**"classSuggested"**_. 

> Si los siguientes elementos están documentados en el conjunto de datos original, tendrán la tripleta mencionada: <span class="tag is-success is-light"><i>scientificNameAuthorship</i></span>, <span class="tag is-success is-light"><i>kingdom</i></span>, <span class="tag is-success is-light"><i>phylum</i></span>, <span class="tag is-success is-light"><i>class</i></span>, <span class="tag is-success is-light"><i>order</i></span>, <span class="tag is-success is-light"><i>family</i></span>, <span class="tag is-success is-light"><i>genus</i></span> y <span class="tag is-success is-light"><i>specificEpithet</i></span>.
>

- _**"callAPI"**_: respuesta del API a la rutina que contiene todos los resultados en formato JSON.

<div class="notification is-info is-light">
  <b>Nota:</b> el llamado al API permite hacer una consulta sobre un número ilimitado de registros. Sin embargo, si su conjunto de datos tiene muchas filas, se recomienda ejecutar la rutina en los nombres científicos únicos, lo cual disminuirá el tiempo de respuesta y agilizará la ejecución de la rutina. 
</div>

**4.2 Datos de grupos biológicos Marino Costeros**

**Funcionamiento:**

Esta rutina está diseñada para ser implementada en conjuntos de datos de grupos biológicos marinos, ya que emplea como fuente de referencia los taxones marinos del árbol taxonómico de _LifeWatch_ (LW-SIBb) a través de un llamado al API de WoRMS (_World Register of Marine Species_). La rutina retorna la taxonomía superior, nombres aceptados, estatus taxonómico y autoría del nombre científico de acuerdo al árbol taxonómico mencionado y los compara con los elementos documentados en el archivo base, generando los indicadores de validación.

En adición a los elementos taxonómicos, esta rutina retorna otros elementos útiles que brindan información sobre el tipo de hábitat del taxón y el LSID de WoRMS o AphiaID, elemento requerido para la publicación de datos a través de OBIS (_Ocean Biodiversity Information System_).

<div class="notification is-info is-light">
  <b>Nota:</b> si también desea validar la taxonomía superior de su conjunto de datos, se requieren los elementos DwC: <b><i>scientificName</i></b>, <b><i>kingdom</i></b>, <b><i>phylum</i></b>, <b><i>class</i></b>, <b><i>order</i></b>, <b><i>family</i></b> y <b><i>genus</i></b>.
</div>

**Resultados:**

En las primeras columnas del proyecto, encontrará una columna con el valor taxonómico original, un valor por el al árbol taxonómico y el indicador de validación que establece si los valores coinciden (<span class="tag is-light"><b>1</b></span>) o difieren (<span class="tag is-light"><b>0</b></span>), como se muestra en la las rutinas previas (Fig. 7).

A continuación, se listan las columnas que encontrará después de ejecutar la rutina, sin incluir las que ya se mencionaron en las rutinas previas de validación taxonómica (Fig. 8):

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-64.jpg" width=800>

<sup>_Figura 8. Algunas columnas adicionales resultantes del proceso de validación con la rutina de WoRMS._</sup>

- _**"matchType"**_: es el resultado del cruce de los datos originales con el árbol taxonómico de WoRMS a partir del elemento <span class="tag is-success is-light"><i>scientificName</i></span>. Los valores que encontrará en esta columna son:

    - <span class="tag is-light"><b><i>exact</i></b></span>: significa que la correspondencia entre el <span class="tag is-success is-light"><i>scientificName</i></span> del conjunto de datos y el del árbol taxonómico es completa.

    - <span class="tag is-light"><b><i>phonetic</i></b></span>: implica que la correspondencia entre el <span class="tag is-success is-light"><i>scientificName</i></span> del conjunto de datos y el del árbol taxonómico es completa a nivel fonético, a pesar de algunas diferencias menores en la escritura.

    - <span class="tag is-light"><b><i>near_1</i></b></span>: hay una diferencia de un carácter entre el <span class="tag is-success is-light"><i>scientificName</i></span> del conjunto de datos y el del árbol taxonómico. Es una correspondencia bastante confiable.

    - <span class="tag is-light"><b><i>near_2</i></b></span>: hay una diferencia de dos caracteres entre el <span class="tag is-success is-light"><i>scientificName</i></span> del conjunto de datos y el del árbol taxonómico. Se sugiere una revisión del nombre.

    - <span class="tag is-light"><b><i>near_3</i></b></span>: hay una diferencia de tres caracteres entre el <span class="tag is-success is-light"><i>scientificName</i></span> del conjunto de datos y el del árbol taxonómico. Se requiere una revisión del nombre.

    - Otras posibilidades poco frecuentes: <span class="tag is-success is-light"><i>match_quarantine</i></span> y <span class="tag is-success is-light"><i>match_deleted</i></span>. En estos casos, WoRMS recomienda contactarlos directamente.
<br>
<br>
- <span class="tag is-success is-light"><i>scientificNameID</i></span>: identificador del taxón construido a partir del AphiaID que proviene del árbol taxonómico de WoRMS.
<br>
<br>
- _**"nameAccordingTo"**_: referencia bibliográfica del nombre científico según WoRMS.
<br>
<br>
- _**"nameAccordingToID"**_: identificador de la referencia bibliográfica del nombre científico según WoRMS.
<br>
<br>
- _**"isMarine¨**_: valor booleano (<span class="tag is-success is-light"><i>TRUE</i></span> o <span class="tag is-success is-light"><i>FALSE</i></span>) que indica si el registro corresponde a un taxón marino.
<br>
<br>
- _**"isBrackish"**_: valor booleano (<span class="tag is-success is-light"><i>TRUE</i></span> o <span class="tag is-success is-light"><i>FALSE</i></span> que indica si el registro corresponde a un taxón de aguas salobres.
<br>
<br>
- _**"isFreshwater"**_: valor booleano (<span class="tag is-success is-light"><i>TRUE</i></span> o <span class="tag is-success is-light"><i>FALSE</i></span>) que indica si el registro corresponde a un taxón de aguas continentales. Por ejemplo, taxones asociados a ríos o lagos.
<br>
<br>
- _**"isTerrestial"**_: valor booleano (<span class="tag is-success is-light"><i>TRUE</i></span> o <span class="tag is-success is-light"><i>FALSE</i></span>) que indica si el registro corresponde a un taxón terrestre.
<br>
<br>
- _**"callAPIworms"**_: respuesta del API a la rutina que contiene todos los resultados en formato JSON.

### Paso 5 - Realizar Ajustes

**5.1 Datos de grupos biológicos principalmente continentales**

1. Realice un <span class="tag is-warning is-light"><i>Facet</i></span> en _**"taxonMatchType"**_ e identifique los posibles errores señalados como <span class="tag is-light"><b><i>FUZZY</i></b></span> y <span class="tag is-light"><b><i>NONE</i></b></span>. Generalmente, este último se presentará si no realizó una limpieza de los calificadores de identificación como "cf." y "sp." en el <span class="tag is-success is-light"><i>scientificName</i></span> antes de ejecutar la rutina. Por lo tanto, es pertinente que realice los ajustes en esos nombres científicos según corresponda.

2. Realice la limpieza de los <span class="tag is-light"><b><i>FUZZY</i></b></span>, teniendo en cuenta que algunos de los nombres son sinónimos (lo cual puede verificar en el elemento _**"taxonomicStatusSuggested"**_. Deje el nombre aceptado para este caso y haga los respectivos cambios en <span class="tag is-success is-light"><i>scientificName</i></span>, al igual que en <span class="tag is-success is-light"><i>genus</i></span> y <span class="tag is-success is-light"><i>specificEpithet</i></span>, segun corresponda, para que tengan coherencia con el <span class="tag is-success is-light"><i>scientificName</i>.

3. Realice un <span class="tag is-warning is-light"><i>Facet</i></span> en los elementos de validación como _**"classValidation"**_ y  _**"familyValidation"**_. Seleccione el buleano <span class="tag is-warning is-light"><i>0</i></span> e identifique y ajuste los errores que le muestre la validación.

4. Complete la información para la taxonomía superior incompleta (<span class="tag is-success is-light"><i>phylum</i></span>, <span class="tag is-success is-light"><i>order</i></span>, <span class="tag is-success is-light"><i>genus</i></span> y <span class="tag is-success is-light"><i>specificEpithet</i></span>) de acuerdo a los campos sugeridos (_**"suggested"**_) por la tripleta de resultados. 

5. Complete el elemento <span class="tag is-success is-light"><i>taxonRank</i></span> a partir del _**"suggestedTaxonRank"**_, teniendo en cuenta el vocabulario controlado para este elemento.

>En _OpenRefine_ puede ir a la columna que quiere completar (por ejemplo, <span class="tag is-success is-light"><i>phylum</i></span>), seguir la ruta <span class="tag is-warning is-light"><b><i>Edit cells>Transform</i></b></span> y escribir la siguiente expresión en el recuadro de edición: <span class="tag is-light"><b>cells['phylumSuggested'].value</b></span>. De esta manera, el programa remplazará el contenido vacío por el sugerido en _**"phylumSuggested"**_. Haga lo mismo para los demás elementos, cambiando la expresión según corresponda.
>

**5.2 Datos de grupos biológicos marino-costeros**

1.  Revise la columna _**"matchType"**_ e identifique los nombres científicos que no coinciden con el árbol taxonómico de WoRMS. Posteriormente, ajústelos según corresponda.

2. Revise las columnas adicionales que trae el script y examine las tripletas de validación haciendo <span class="tag is-warning is-light"><i>Facet</i></span> en estos elementos con _OpenRefine_ y seleccione la opción <span class="tag is-warning is-light"><i>0</i></span>. Por último, identifique dónde hay inconsistencias y corríjalas.

3. **Reto**: ¿Hay registros que sean completamente terrestres y no del medio marino según la validación?. Identifique el error en la validación con los elementos _**"isMarine"**_, _**"isBrackish"**_, _**"isFresh"**_, _**"isTerrestrial"**_.

### Paso 6 - Verificación del resultado

Compare sus resultados con los siguientes archivos, validados según las definiciones del estándar Darwin Core, para las rutinas con el API de GBIF y WoRMS, identificando aciertos y oportunidades de mejora.

¿Qué diferencias encontró con sus resultados?

[<FONT FACE="monospace"><b>«Archivo validado para datos continentales»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Solución_datos_Estructurados_GBIF.xlsx).

[<FONT FACE="monospace"><b>«Archivo validado para datos marino-costeros»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Solución_datos_casomarinocosteros.xlsx).

### Paso 7 - Datos propios
    
Si tiene datos propios que desea publicar, intente realizar la validación correspondiente con las rutinas para datos continentales o marino-costeros.

****
**¡Felicitaciones!** Ha finalizado la validación taxonómica con GBIF (Datos continentales) y WoRMS (Datos marino-costeros), utilizando las rutinas de validación en _OpenRefine_ que fueron desarrolladas por el EC-SiB Colombia.

****

## Parte 2 - Validación geográfica


### Parte 2.1 Validación de nombres geográficos

Desarrollada para estandarizar los contenidos de los elementos de la geografía superior, especialmente <span class="tag is-success is-light"><i>stateProvince</i></span>, <span class="tag is-success is-light"><i>county</i></span> y <span class="tag is-success is-light"><i>municipality</i></span> con base en una fuente de referencia nacional. La rutina contrasta los valores documentados con la información oficial para Colombia, a partir de un archivo de referencia previamente cargado en _OpenRefine_, y genera indicadores de validación. Los indicadores permiten establecer dos tipos de errores en la geografía superior: errores de tipeo y gramática y errores de consistencia relacionados con la correspondencia entre entidades geográficas, como municipios (<span class="tag is-success is-light"><i>county</i></span>) o centros poblados (<span class="tag is-success is-light"><i>municipality</i></span>), que no pertenecen al departamento (<span class="tag is-success is-light"><i>stateProvince</i></span>).

El archivo oficial de referencia del repositorio se genera con la información geográfica de la División Político Administrativa definida por el DANE (Divipola). Vale la pena precisar que esta rutina puede implementarse para otros países, pero con la información geográfica oficial del país de interés y empleando la misma estructura del archivo mencionado para Colombia.

**Datos de validación**
    
- Descargue el archivo [<FONT FACE="monospace"><b>«datos_ValidacionGeografia.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_ValidacionGeografia.xlsx).
- Descargue el archivo [<FONT FACE="monospace"><b>«DIVIPOLA_2021-0416.xls»</b></FONT>](https://github.com/SIB-Colombia/data-quality-open-refine/raw/master/DIVIPOLA_20210416.zip).
- Utilice la rutina [Validación de nombres geográficos con DIVIPOLA](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValNamesGeo_ValNombresGeo.txt).

### Paso 1 - Carga del archivo

Cree un proyecto en _OpenRefine_ a partir del conjunto de datos <FONT FACE="monospace"><b>«datos_ValidacionGeografia.xlsx»</b></FONT> y asígnele el nombre de <span class="tag is-light"><b>datos_ValidacionGeografia</b></span>. Si tiene dudas sobre cómo hacerlo, revise el **paso 2** de la [guía general de _OpenRefine_](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/OpenRefine#paso-2---crear-un-proyecto).

### Paso 2 - Revisión de elementos requeridos

Asegúrese de que el conjunto de datos o los elementos a validar estén estructurados según el estándar _Darwin Core_ (<span class="tag is-success is-light"><i>stateProvince</i></span>, <span class="tag is-success is-light"><i>county</i></span> y <span class="tag is-success is-light"><i>municipality</i></span>).
    
<div class="notification is-info is-light">
  <b>Nota:</b> no es necesario que cuente con los tres elementos para que la validación funcione. En el caso de tener solo uno o dos, la rutina se ejecutará igualmente, pero solo validará la información que tenga disponible. Es decir, si solo tiene <b><i>stateProvince</i></b>, la validación de los otros dos elementos quedará vacía. 
</div>

### Paso 3 - Carga del archivo Divipola para la validación

Para ejecutar esta rutina, es necesario que cargue el archivo <FONT FACE="monospace"><b>«DIVIPOLA_2021-0416.xls»</b></FONT> en _OpenRefine_. Si tiene dudas sobre cómo hacerlo, revise el **paso 2** de la [guía general de _OpenRefine_](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/OpenRefine#paso-2---crear-un-proyecto).

Luego, nombre el proyecto en OpenRefine como <span class="tag is-light"><b>DIVIPOLA_20210416</b></span> (Fig. 9). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig1_OR_A_Divipola_DivipolaenOR.png" width=600>

<sup>_Figura 9. Carga de archivo DIVIPOLA 20210416 en OpenRefine._</sup>

### Paso 4 - Ejecutar la rutina

**4.1. Copiado de la rutina**

Diríjase a la rutina de [Validación de nombres geográficos con DIVIPOLA](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValNamesGeo_ValNombresGeo.txt). Será redirigido a GitHub, donde encontrará un archivo de texto plano. Copie el texto de la rutina de validación (Fig. 10), asegurándose de seleccionar solo la rutina -sin las instrucciones- y de copiar todos los corchetes iniciales (<span class="tag is-light"><b>{</b></span>) y finales (<span class="tag is-light"><b>}</b></span>), ya que estos son fundamentales para que la rutina se ejecute correctamente.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig2_OR_A_CopiaRutinaGeoNames.PNG" width=600>

<sup>_Figura 10. Copia de la rutina en GitHub._</sup>

**4.2. Ejecución de la rutina**

En el conjunto de datos a validar en _OpenRefine_ (<FONT FACE="monospace"><b>«datos_ValidacionGeografia.xlsx»</b></FONT>), diríjase al menú superior izquierdo, seleccione la pestaña <span class="tag is-warning is-light"><i>Deshacer/Rehacer</i></span> y haga clic en el botón <span class="tag is-warning is-light"><i>Aplicar...</i></span>. A continuación, se abrirá una ventana de texto vacía. Pegue la rutina a ejecutar en el cuadro de texto y dé clic en <span class="tag is-warning is-light"><i>Ejecutar Operaciones</i></span> (Fig. 11).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig3_OR_A_Divipola_EjecucionRutina.png" width=800>

<sup>_Figura 11. Pasos para la ejecución de la rutina en OpenRefine._</sup>

Espere a que finalice la ejecución de la rutina. Particularmente, esta rutina necesita consultar información en otro proyecto en _OpenRefine_, por lo que no depende de la conexión a Internet, pero su tiempo de ejecución varía según el número de filas del conjunto de datos y de la memoria RAM de su equipo.

### Paso 5 - Revisión de resultados

Luego de ejecutar el script, algunas columnas adicionales se añadirán al conjunto de datos. El contenido de dichas columbas se describe a continuación: 

- _**"spValidation"**_: resultado de la validación entre el <span class="tag is-success is-light"><i>stateProvince</i></span> y el de departamento del archivo Divipola. El resultado será <span class="tag is-light"><b>1</b></span> si hay coincidencia y <span class="tag is-light"><b>0</b></span> si no la hay.
    
- **"spc"**: unión de los elementos <span class="tag is-success is-light"><i>stateProvince</i></span> y <span class="tag is-success is-light"><i>county</i></span> del conjunto de datos para realizar la validación por municipios. 

- _**"spcValidation"**_: resultado de la validación para <span class="tag is-success is-light"><i>stateProvince</i></span> y <span class="tag is-success is-light"><i>county</i></span> respecto al departamento y municipio del archivo Divipola. El resultado será <span class="tag is-light"><b>1</b></span> si hay coincidencia y <span class="tag is-light"><b>0</b></span> si no la hay.
    
- **"spcm"**: unión de los elementos<span class="tag is-success is-light"><i>stateProvince</i></span>, <span class="tag is-success is-light"><i>county</i></span> y <span class="tag is-success is-light"><i>municipality</i></span> del conjunto de datos para realizar la validación de centros poblados.
    
- _**"spcmValidation"**_: resultado de la validación para <span class="tag is-success is-light"><i>stateProvince</i></span>, <span class="tag is-success is-light"><i>county</i></span> y <span class="tag is-success is-light"><i>municipality</i></span> respecto al departamento, municipio y centro poblado del archivo Divipola. El resultado será <span class="tag is-light"><b>1</b></span> si hay coincidencia y <span class="tag is-light"><b>0</b></span> si no la hay.

<div class="notification is-info is-light">
    <b>Nota:</b> los campos <b>"spc"</b> y <b>spcm</b> se crean para que haya coherencia en la validación de departamentos, municipios y centros poblados documentados. Por ejemplo, un municipio puede estar bien documentado, pero no necesariamente pertenecer a determinado departamento. 
</div>

**Paso 5.1. Ajuste de los departamentos**

Realice un <span class="tag is-warning is-light"><i>Text facet</i></span> en las columnas <span class="tag is-success is-light"><i>stateProvince</i></span> y _**"spValidation"**_. En el <span class="tag is-warning is-light"><i>Text facet</i></span> de _**"spValidation"**_, seleccione los resultados no coindicentes <span class="tag is-light"><b>0</b></span> (Fig. 12).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig4_OR_A_Divipola_FacetResultados.png" width=800>

<sup>_Figura 12. <span class="tag is-warning is-light"><i>Text facet</i></span> en OpenRefine para identificar los registros donde debe hacer ajustes sobre el elemento <span class="tag is-success is-light"><i>stateProvince</i></span>._</sup>

Revise los departamentos en <span class="tag is-success is-light"><i>stateProvince</i></span> y haga los ajustes que considere necesarios con base en el archivo de <FONT FACE="monospace"><b>«DIVIPOLA_20210416»</b></FONT>.

<div class="notification is-info is-light">
  <b>Nota:</b> puede usar el archivo de <FONT FACE="monospace"><b>«DIVIPOLA_20210416»</b></FONT> que está en OpenRefine para realizar <i>text filters</i> (filtros de texto) y facets (facetas) con el fin encontrar la forma correcta de documentar los nombres oficiales en <b>stateProvince</b> y <b>county</b>.
</div>

**Paso 5.2. Ajuste de los municipios**

Ahora realice un <span class="tag is-warning is-light"><i>Text facet</i></span> en el elemento <span class="tag is-success is-light"><i>county</i></span> y el elemento _**"spcValidation"**_. En el <span class="tag is-warning is-light"><i>Facet</i></span>, seleccione los resultados no coincidentes <span class="tag is-light"><b>0</b></span> (Fig. 13).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig5_OR_A_Divipola_FacetResultadosCounty.png" width=800>

<sup>_Figura 13. <span class="tag is-warning is-light"><i>Text facet</i></span> en OpenRefine para identificar los registros donde debe hacer ajustes sobre el elemento <span class="tag is-success is-light"><i>county</i></span>._</sup>

    Revise los municipios en <span class="tag is-success is-light"><i>county</i></span> y haga los ajustes que considere necesarios según el archivo <FONT FACE="monospace"><b>«DIVIPOLA_20210416»</b></FONT>.

<div class="notification is-info is-light">
  <b>Nota:</b> puede usar el archivo de <FONT FACE="monospace"><b>«DIVIPOLA_20210416»</b></FONT> que está en OpenRefine para realizar <i>text filters</i> (filtros de texto) y facets (facetas) con el fin de encontrar la forma correcta de documentar los nombres oficiales en <b>stateProvince</b> y <b>county</b>.
</div>


### Paso 6 - Verificación del resultado

Compare sus resultados con el siguiente archivo, validado según las definiciones del estándar, e identifique aciertos y oportunidades de mejora. **¿Qué diferencias encontró con sus resultados?**

[<FONT FACE="monospace"><b>«Archivo validado»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/solución_datos_ValidacionGeografia.xlsx)

## Parte 2.2 Validación de elevaciones

Realiza un llamado al API de GeoNames (servicio SRTM-1) a partir de los elementos _Darwin Core_ de latitud (<span class="tag is-success is-light"><i>decimalLatitude</i></span>) y longitud (<span class="tag is-success is-light"><i>decimalLongitude</i></span>) en grados decimales. En este sentido, retorna la elevación con una resolución de 30 metros por pixel y la compara con los elementos documentados en el archivo base, generando los indicadores de validación.

Para esta parte, utilice la rutina [Validación y recuperación de elevaciones a partir del API de Geonames](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValElevationAPIGeoNames_ValElevacionAPIGeoNames.txt)

### Paso 1 - Cargar el archivo

Descargue el archivo [<FONT FACE="monospace"><b>«datos_ValidacionElevaciones.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_ValidacionElevaciones.xlsx) y cárguelo en _OpenRefine_. Si tiene dudas sobre cómo hacerlo, revise el **paso 2** de la [guía general de _OpenRefine_](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/OpenRefine#paso-2---crear-un-proyecto).

### Paso 2 - Revisar elementos requeridos

El conjunto de datos a validar debe tener como mínimo los elemento DwC <span class="tag is-success is-light"><i>decimalLatitude</i></span> y <span class="tag is-success is-light"><i>decimalLongitude</i></span> documentados adecuadamente. De lo contrario, la rutina no se ejecutará adecuadamente.

Si cuenta con elevaciones, es importante que estas estén documentadas en el elemento <span class="tag is-success is-light"><i>minimumElevationInMeters</i></span>. Si están documentadas solo como <span class="tag is-success is-light"><i>verbatimElevation</i></span>, el script solo traerá las elevaciones sugeridas y no habrá validaciones con las elevaciones documentadas.

### Paso 3 - Registro en Geonames

Para este paso, es necesario tener una cuenta activa en _GeoNames_. Si no tiene una, regístrese [aquí](http://www.geonames.org/login) antes de correr la rutina.

Es muy importante tener en cuenta las siguientes indicaciones para habilitar su cuenta y poder usar los servicios _web_.

    <b>1).</b> Cree su cuenta con un correo electrónico y contraseña. Asegúrese de que el correo esté bien escrito y recuerde su nombre de usuario, ya que será necesario para los siguientes pasos (Fig. 14).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig1_OR_A_Geonames_loginGeonames.PNG" width=500>

<sup>_Figura 14. Creación de usuario en Geonames._</sup>

    <b>2).</b> Abra el mensaje que recibirá en el correo que usó para el paso anterior (es posible que llegue a la carpeta de _Spam_) y haga clic en el link de confirmación (Fig. 15).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig2_OR_A_Geonames_correoGeonames.PNG" width=800>

<sup>_Figura 15. Correo de confirmación de Geonames._</sup>

    <b>3).</b> En la esquina superior derecha, dé clic en su nombre de usuario. En la parte inferior, verá un mensaje indicando que la cuenta aún no está activada para hacer uso de los servicios _web_ gratuitos. Haga clic en <span class="tag is-warning is-light"><i>Click here to enable</i></span> para activarlos (Fig. 3).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig3_OR_A_Geonames_habilitarServicios.png" width=800>

<sup>_Figura 16. Habilitar opciones de uso de servicios web gratuitos de Geonames._</sup>

    <b>4).</b> Recibirá un mensaje que confirma la habilitación de los servicios _web_ para su cuenta (Fig. 17).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig4_OR_A_Geonames_ConfirmacionHabilitacion.PNG" width=800>

<sup>_Figura 17. Mensaje de confirmación de habilitación de servicios web._</sup>

### Paso 4 - Ejecución de la rutina

**4.1 Copiado de la rutina**
    
Diríjase a la rutina de [Validación y recuperación de elevaciones a partir del API de _Geonames_](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValElevationAPIGeoNames_ValElevacionAPIGeoNames.txt). Será redirigido a GitHub, donde encontrará un archivo de texto plano. Copie el texto de la rutina de validación (Fig. 18), asegurándose de seleccionar solo la rutina -sin las instrucciones- y de copiar todos los corchetes iniciales (<span class="tag is-light"><b>{</b></span>) y finales (<span class="tag is-light"><b>}</b></span>), ya que estos son fundamentales para que la rutina se ejecute correctamente.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig5_OR_A_Geonames_CopiaRutina.PNG" width=800>

<sup>_Figura 18. Copia de la rutina en repositorio en GitHub._</sup>

**4.2 Ajuste de la rutina**
    
Antes de ejecutar la rutina, remplace la palabra <span class="tag is-light"><b>demo</b></span> en la expresión <span class="tag is-light"><b>username=demo</b></span> por el nombre de su usuario en _GeoNames_. Por ejemplo, <span class="tag is-light"><b>username=gzitror</b></span>. Para ello, abra un editor de texto como el **Bloc de notas** de _Windows_ y dé clic la opción <span class="tag is-warning is-light"><i>Remplazar...</i></span> del menú <span class="tag is-warning is-light"><i>Edición</i></span>. Luego, introduzca <span class="tag is-light"><b>demo</b></span> en el cuadro de texto **"Buscar:"** y escriba su usuario en el cuadro de texto **"Reemplazar por:"** (Fig. 19).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig7_OR_A_Geonames_ReemplazoUsuario.png" width=800>

<sup>_Figura 19. Busqueda y reemplazo del nombre de usuario para ejecutar la rutina usando el Bloc de notas de Windows._</sup>

Si ejecuta la rutina sin hacer este cambio, incorporará por defecto la opción de prueba (<span class="tag is-warning is-light"><i>demo</i></span>). Esta opción tiene un límite de 20.000 consultas diarias mundiales, por lo que es posible que el servicio esté agotado y no obtenga resultados.

>Esta rutina captura la elevación a partir de las coordenadas decimales documentadas en los elementos DwC <span class="tag is-success is-light"><i>decimalLatitude</i></span> y <span class="tag is-success is-light"><i>decimalLongitude</i></span> del archivo base, a través de una consulta a los servicios de GeoNames. Además, se ejecuta sobre valores únicos de pares de coordenadas para evitar superar el límite de consultas diarias por usuario.
>

La rutina de elevaciones utiliza el modelo de elevación SRTM-1 ("srtm1") por defecto, el cual cuenta con una resolución aproximada de 30 metros. Sin embargo, el usuario puede usar otro de los modelos de elevación disponibles:

* SRTM3 (<span class="tag is-warning is-light"><i>srtm3</i></span>): datos de elevación de la _Shuttle Radar Topography Mission_ (SRTM). Tienen una resolución aproximada de 90 x 90 metros.

* Astergdemv2 (<span class="tag is-warning is-light"><i>astergdem</i></span>): datos de elevación del _Aster Global Digital Elevation Model V2_ (2011). Tienen una resolución aproximada de 30 x 30 metros.

* GTOPO30 (<span class="tag is-warning is-light"><i>gtopo30</i></span>): modelo de elevación global con resolución aproximada de 30 arcos por segundo. Es equivalente a una grilla de 1 km x 1 km.

Para cambiar el modelo de elevación, reemplace el valor <span class="tag is-warning is-light"><i>srtm3</i></span> en la expresión grel <span class="tag is-warning is-light"><i>\"http://api.geonames.org/srtm1</i></span> por el valor que corresponda al servicio que desea utilizar (<span class="tag is-warning is-light"><i>astergdem</i></span> o <span class="tag is-warning is-light"><i>gtopo30</i></span> en la rutina. En este ejercicio, se utiliza el modelo por defecto: <span class="tag is-warning is-light"><i>srtm3</i></span>.

**4.3. Ejecución de la rutina**

En el conjunto de datos a validar en _OpenRefine_ (<FONT FACE="monospace"><b>«datos_ValidacionElevaciones.xlsx»</b></FONT>), diríjase al menú superior izquierdo, seleccione la pestaña <span class="tag is-warning is-light"><i>Deshacer/Rehacer</i></span> y haga clic en el botón <span class="tag is-warning is-light"><i>Aplicar...</i></span>. A continuación, se abrirá una ventana de texto vacía. Pegue la rutina a ejecutar en el cuadro de texto y dé clic en <span class="tag is-warning is-light"><i>Ejecutar Operaciones</i></span> (Fig. 20).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig6_OR_A_Geonames_EjecucionRutina.png" width=800>

<sup>_Figura 20. Pasos para la ejecución de la rutina en OpenRefine._</sup>

### Paso 5 - Revisión de resultados

**5.1 Interpretación de resultados**

En las primeras columnas del proyecto, encontrará los elementos de elevación reorganizados y las tres columnas de validación obtenidas de la rutina (Fig. 21). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig8_OR_A_Geonames_Resultados.png" width=800>

<sup>_Figura 21. Columnas resultantes de la validación en OpenRefine._</sup>

Encontrará, de manera intercalada, las columnas originales, un valor sugerido por el servicio de elevación (_**"elevationSuggested"**_) y dos indicadores de validación (Figura 21):
    
- El indicador _**"elevationValidation**"_ compara el valor registrado en el elemento <span class="tag is-success is-light"><i>minimumElevationInMeters</i></span> con lo sugerido por servicio de elevación. El resultado debe ser interpretado así:

    - <span class="tag is-warning is-light"><i>1</i></span>: indica que la diferencia entre la elevación documentada en el <span class="tag is-success is-light"><i>minimumElevationInMeters</i></span> y el valor sugerido en _**"elevationSuggested"**_ es menor a 100 m.

    - <span class="tag is-warning is-light"><i>0</i></span>: significa que diferencia entre la elevación documentada en el <span class="tag is-success is-light"><i>minimumElevationInMeters</i></span> y el valor sugerido en _**"elevationSuggested"**_ es mayor a 100 m.

>No hay elevación mínima documentada.
>
<br>
<br>
- El indicador _**"elevationRangeValidation"** contrasta compara el rango registrado en los elementos <span class="tag is-success is-light"><i>minimumElevationInMeters</i></span> y <span class="tag is-success is-light"><i>maximumElevationInMeters</i></span> con lo sugerido por el servicio de elevación. El resultado debe ser interpretado así:

    - <span class="tag is-warning is-light"><i>1</i></span>: indica que el rango de elevaciones contiene la elevación sugerida.

    - <span class="tag is-warning is-light"><i>0</i></span>: significa que el rango de elevaciones **no** contiene la elevación sugerida.

> La validación de rangos de elevaciones en ocasiones suele presentar inconvenientes. El equipo del SiB Colombia está ajustando el script para facilitar su uso.
>
    
<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
      Si al hacer la validación en la columna <b><i>"elevationSuggested</i></b> obtiene el mensaje de error <i>"ERR:18:the daily limit of 20000 credits for demo has been exceeded. Please use an application specific account. Do not use the demo account for your application."</i>, significa que está usando la versión <i>demo</i> y no modificó adecuadamente el nombre del usuario en el <i>script</i>.
  </div>
</article>

**5.2 Revisión de los resultados**

- ¿Cúantas elevaciones vacías logro completar con el uso del script?
- ¿Encontró alguna inconsistencia entre la elevación identificada con _Geonames_ y la previamente documentada (valores de<span class="tag is-warning is-light"><i>0</i></span> en _**"elevationValidation"**_).

<div class="notification is-info is-light">
  <b>Tip:</b> en ocasiones, es posible que el servicio no encuentre un dato de elevación para determinada coordenada o que haya errores en la base de datos, por lo que verá valores negativos (por ejemplo, -1). En ese caso, debe ignorar la sugerencia.
</div>

### Paso 6 - Verificación del resultado

Compare sus resultados con el siguiente archivo, validado según las definiciones del estándar, e identifique aciertos y oportunidades de mejora. **¿Qué diferencias encontró con sus resultados?**

[<FONT FACE="monospace"><b>«Archivo validado»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/solución_ValidacionElevaciones.xlsx)

### Paso 7 - Datos propios
    
Si tiene datos propios que desea publicar, intente realizar la validación correspondiente con las rutinas y procure incorporarlas a su flujo de trabajo.

****
**¡Felicitaciones!** Terminó el laboratorio de uso avanzado de _OpenRefine_.
    
****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) permite usar, redistribuir y construir sobre estos contenidos libremente. 
    
¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!
    
**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
