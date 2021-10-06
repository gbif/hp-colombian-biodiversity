---
layout: documentation
permalink: /formacion/laboratorios/RutinasOpenRefine
title: "Rutinas Open Refine"
description: "Objetivo: Utilizar Open Refine para manejar, validar y limpiar de manera eficiente datos sobre biodiversidad, asegurando una mejor calidad para su publicación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---


# Rutinas Open Refine

**Objetivo**

Profundizar en el uso de _OpenRefine_ para validar de datos sobre biodiversidad de manera automática utilizando las APIs de varias herramientas en línea.

**Introducción**

``` warning
Próximamente, video introductorio
```

**Sobre la Herramienta**

[_OpenRefine_](https://openrefine.org/) es un software creado con el objetivo de pulir datos crudos hasta convertirlos en diamantes :gem:, activos valiosos en la era del _BigData_.

A partir del uso de servicios o archivos externo y la posibilidad que ofrece OpenRefine de guardar y rehacer pasos es posible crear rutinas para ejecutar de manera automática varias acciones de validación de calidad.

Aprovechando las múltiples herramientas de calidad de datos soportados por diferentes instituciones y personas de la comunidad de GBIF es posible abordar de manera semi-automatizada a través de OpenRefine los retos y problemas más comunes de calidad que se presentan a nivel taxonómico y geográfico en un conjunto de datos. Acá se presentan diferentes rutinas que validan la calidad de los datos contrastando un conjunto de datos contra dichos servicios externos agilizando la obtención de resultados y asegurando una metodología de validación replicable.

Puede consultar mayor información sobre GREL, el lenguaje de programación de OpenRefine que es  utilizado en las rutinas, en el [manual de usuario](https://docs.openrefine.org/manual/grel) (en inglés).

Esta guía adapta y profundiza sobre la sección 5 de la **Zermoglio PF, Plata Corredor CA, Wieczorek JR, Ortiz Gallego R & Buitrago L (2021) Guía para la limpieza de datos sobre biodiversidad con OpenRefine. Versión 3. Copenhagen: GBIF Secretariat. [https://doi.org/10.15468/doc-gzjg-af18](https://doi.org/10.15468/doc-gzjg-af18).**

**Requerimientos** 

- Navegador Chrome instalado, y configurado como navegador predeterminado.
- Haber realizado la [guía general de Open Refine](https://sib-colombia.github.io/Formacion/LAB/lab02/lab_or1.html).
- Para obtener mejores resultados se recomienda ampliar la memoria RAM que puede usar OpenRefine. Para ello siga las instrucciones del [manual de usuario](https://docs.openrefine.org/manual/installing#increasing-memory-allocation) (en inglés), pemitale al programa utilizar hasta el 75% de la memoria RAM de su computador siempre y cuando reserve como mínimo 2GB para el funcionamiento del computador, por ejemplo:
    -  Si su computador tiene 4GB de RAM disponga hasta 2GB para OpenRefine y las otras 2GB reservelas para el funcionamiento del equipo.
    -  Si su computador tiene 8GB de RAM disponga hasta 6GB para OpenRefine y las otras 2GB reservelas para el funcionamiento del equipo.

``` warning
No utilice Internet Explorer para este laboratorio ya que OpenRefine no funciona bien con este navegador web.
```



## Sobre las rutinas

Las rutinas comparan la información documentada en el conjunto de datos contra diferentes fuentes de referencia, y a partir de dicha comparación crean columnas de validación donde se puede identificar la correspondencia entre el archivo original y la fuente de referencia a través de operadores lógicos, unos (1) y ceros (0), que funcionan como indicadores de validación.

Los indicadores de validación se interpretan así:

```0```: El valor documentado en el conjunto de datos NO coincide con la fuente de referencia, el valor debe ser revisado y ajustado en caso de ser necesario.

```1```: El valor documentado en el conjunto de datos coincide con la fuente de referencia, no es necesario tomar acciones adicionales.

Observe el ejemplo de la Figura 1 en la primera fila el valor original de la columna _```family```_ no coincide con la columna _```familySuggested```_ ya que tiene un error de tipeo, por lo tanto el indicador de validación (columna _```familyValidation```_) es cero ```0```. Note que en las filas donde sí hay coincidencia el indicador de validación (_```familyValidation_```) es uno ```1```.

Las rutinas utilizan como fuentes de validación API’s (Interfaces de Programación de Aplicaciones) de repositorios globales taxonómicos, geográficos o archivos de texto plano obtenidos como resultado de herramientas de validación externas.

Se encuentran disponibles seis (6) rutinas (Tabla 1), en esta guía se profundizará en 4 de ellas.


<sup>_Tabla 1. Lista de rutinas para la validación de datos primarios sobre biodiversidad_.</sup>

| Nombre | Uso | Requerimientos 
| -------- | -------- | -------- |
| Validación taxonómica con el API de GBIF | Validación taxonómica que usa como referencia el [árbol taxonómico de GBIF](https://doi.org/10.15468/39omei). Permite validar registros de varios grupos biológicos a la vez, así como obtener la taxonomía superior de cada taxa.| Requiere como mínimo los elementos DwC _```scientificName```_ y _```kingdom```_ documentados y acceso a internet para hacer la petición al API de GBIF.
|Validación taxonómica con Species Matching de GBIF| Validación taxonómica que usa como referencia el [árbol taxonómico de GBIF](https://doi.org/10.15468/39omei), a diferencia de la rutina anterior realiza la validación contra el archivo de resultados _normalized_ obtenido de link:[_Species Matching_](https://www.gbif.org/es/tools/species-lookup) permitiendo así aprovechar las funcionalidades de validación y limpieza de esta herramienta. La rutina facilita el cruce de los resultados obtenidos con link:[_Species Matching_](https://www.gbif.org/es/tools/species-lookup) con el conjunto de datos original. | Requiere como mínimo el elemento DwC _```scientificName```_ documentado y que el archivo _normalized_ sea previamente cargado en OpenRefine para la ejecución de la rutina.
| Validación taxonómica con el API de WoRMS | Validación taxonómica específica para organismos marinos, que usa como referencia el [árbol taxonómico de LifeWatch (LW-SIBb)](https://www.lifewatch.be/en/lifewatch-species-information-backbone) por medio de la API de [WoRMS (_World Register of Marine Species_)](http://www.marinespecies.org/aphia.php?p=webservice). Permite obtener la taxonomía superior de cada taxa, así como elementos taxonómicos obligatorios para la publicación de datos a través de [OBIS](https://obis.org/).| Requiere como mínimo el elemento DwC _```scientificName```_ documentado y acceso a internet para hacer la petición al API de WoRMS.
|Validación de elevaciones con el API de GeoNames | Validación y/o obtención de la elevación a partir de las coordenadas usando el servicio geográfico de GeoNames. | Requiere los elementos DwC _```decimalLatitude```_ y _```decimalLongitude```_ documentados adecuadamente y acceso a internet para hacer la petición al API de  GeoNames.
|Validación de nombres geográficos con DIVIPOLA | Validación de los nombres oficiales de departamentos, municipios y centros poblados | Requiere como mínimo el elemento DwC _```stateProvince```_ (departamento) documentado, también valida los elementos _```county```_ (municipio) y _```municipality```_ (centro poblado) si están documentados.|
|Transformación de fechas con el API de Canadensys| Transformación de fechas en múltiples formatos al estándar ISO 8601.| Requiere el elemento DwC _```eventDate```_ documentado y acceso a internet para hacer la petición al API de  Canadensys.|

Las rutinas cuya fuente de referencia es un API, hacen una consulta a un servicio externo y obtienen una respuesta en formato JSON, la rutina interpreta esta respuesta y la hace legible en forma de columnas dentro del conjunto de datos. Posteriormente el resultado de la consulta al API es comparado con el valor documentado en el conjunto de datos y se generan nuevas columnas con los indicadores de la validación (unos y ceros).

Las rutinas que usan como fuente archivos de texto plano, hacen una consulta sobre un archivo cargado previamente en OpenRefine que posteriormente es comparado con el valor documentado en el conjunto de datos. Como resultado de la comparación se generan nuevas columnas con los indicadores de la validación.

Todas las rutinas se ejecutan de manera similar, los detalles específicos para cada una se explican más adelante. Esta guía se enfoca en 4 rutinas, 2 taxonómicas y dos geográficas por lo cual la guía se divide en dos partes.


## Parte 1 - Validación taxonómica con GBIF y WoRMS en OpenRefine

La primera aprte de la guía aborda la validación taxonómica utilizanda el API de GBIF y WoRMS, permitiendole consultar estos árboles taxonómicos de manera directa sin utilizar las aplicaciones en línea [SpeciesMatch](https://sib-colombia.github.io/Formacion/LAB/lab02/lab_spmatch.html) o [WoRMS taxonMatch](https://sib-colombia.github.io/Formacion/LAB/lab02/lab_worms.html). Esta ruta directa también le permitrá hacer consultas para más datos y más elementos sin los limitantes de las aplicaciones en línea.

Dependiendo de su interés particular realice esta guía con alguna de las suguientes opciones:

**Datos de grupos biológicos principalmente continentales**

- Descargue el archivo [```datos_Estructurados.xlsx```](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/datos_Estructurados.xlsx) para realizar el laboratorio.
- Utilice la rutina [Validación taxonómica con el API de GBIF](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValTaxonomicAPIGBIF_ValTaxonomicaAPIGBIF.txt)

**Datos de grupos biológicos marino-costeros**
- Descargue el archivo [```datos_CasoMarinoCosteros.xlsx```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_casomarinocosteros.xlsx) para realizar el laboratorio.
- Utilice la rutina [Validación taxonómica con el API de WoRMS](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValTaxonomicAPIWoRMS_ValTaxonomicaAPIWoRMS.txt)

## Paso 1 - Cargar el archivo

Cree un proyecto en OpenRefine con el conjunto de datos que desea validar, si tiene dudas sobre cómo hacerlo revise el [paso 2 de la guía general de OpenRefine](https://sib-colombia.github.io/Formacion/LAB/lab02/lab_or1.html#paso-2---crear-un-proyecto). 


## Paso 2 - Revisar elementos requeridos

Asegúrese que el conjunto de datos cumpla con los elementos  y requerimientos mínimos de cada rutina:

**Validación taxonómica con el API de GBIF - Datos Continentales**

Requiere como mínimo los elementos DwC ```scientificName``` y ```kingdom``` documentados y acceso a internet para hacer la petición al API de GBIF.

Haga un  ```Text facet``` sobre los elementos ```kingdom``` y ```class``` (Fig. 2). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig 2. Filtro reino.png" width=800>


<sup>_Figura 2. Text facet sobre los elementos kingdom y class._</sup>

Observe que el conjunto de datos no tiene documentado el elemento ```kingdom``` para ningún registro, sin embargo a partir del filtro sobre el elemento ```class```  se puede inferir que todos los datos corresponden a animales. Complete el reino para todos los registros (Fig. 3).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig 3. OR_avanzado.png" width=800>


<sup>_Figura 3. Ajuste en el elemento kingdom previo a correr la rutina._</sup>


Haga una limpieza previa del elemento _```scientificName```_ para obtener mejores resultados:

1. Eliminar elementos que no correspondan a la estructura del nombre cientÍfico como **sp.**, si necesita ayuda siga el [paso 4.1.1 de la guía general](https://sib-colombia.github.io/Formacion/LAB/lab02/lab_or1.html#41-correcci%C3%B3n-combinando-filtros-y-funciones).
3. Elimine los calificadores de la identificación y ubíquelos en el elemento correspondiente, si necesita ayuda siga el [paso 4.2.2 de la guía general](https://sib-colombia.github.io/Formacion/LAB/lab02/lab_or1.html#42-filtros-con-expresiones-regulares).


**Validación taxonómica con el API de WoRMS - Datos Marino Costeros**

Requiere como mínimo el elemento DwC ```scientificName``` documentado y acceso a internet para hacer la petición al API de WoRMS.

Haga una limpieza previa del elemento scientificName para obtener mejores resultados, puede ver las recomendaciones enteriores en la sección de datos continentales.


## Paso 3 - Ejecutar la rutina

Seleccione la rutina de interés según la validación que desee realizar:

- Rutina de [Validación taxonómica con el API de GBIF](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValTaxonomicAPIGBIF_ValTaxonomicaAPIGBIF.txt) - Datos Continentales.

- Rutina de [Validación taxonómica con el API de WoRMS](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValTaxonomicAPIWoRMS_ValTaxonomicaAPIWoRMS.txt) - Datos Marino Costeros.


Haga clic en el enlace a la rutina y será redirigido a GitHub donde encontrará un archivo de texto plano con la rutina, copie el texto de la rutina de validación (Fig. 4). Asegúrese de seleccionar solo la rutina -sin las instrucciones- y copiar todos los corchetes iniciales { y finales }.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-59.jpg" width=600>

<sup>_Figura 4. Selección de la rutina a ejecutar._</sup>

Ubíquese en el conjunto de datos a validar en OpenRefine, diríjase al menú arriba a la izquierda, seleccione la pestaña “Deshacer/Rehacer” y haga clic en el botón “Aplicar…​”. A continuación se abrirá una ventana de texto vacía, pegue en el cuadro de texto la rutina a ejecutar y haga clic en “Ejecutar Operaciones” (Fig. 5). Si tiene dudas sobre este proceso revise la sección 2.5.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-58.jpg" width=600>

<sup>_Figura 5. Ejecución de la rutina en OpenRefine._</sup>

El avance de la ejecución de la rutina se observa en la parte superior de la pantalla (Fig. 6).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-60.jpg" width=400>

<sup>_Figura 6. Avance de la ejecución de la rutina en OpenRefine._</sup>


Espere a que finalice la ejecución de la rutina. Las rutinas que requieren hacer llamados a servicios externos, dependen de la conexión a internet, estas consultas toman un tiempo en ejecutarse que varía según el número de filas del conjunto de datos, de la velocidad de la conexión y de la memoria RAM de su equipo.


## Paso 4 - Resultados de la validación

Al terminar la ejecución de la rutina, obtendrá nuevas columnas en el conjunto de datos, puede identificarlas por su terminación:

- _```Suggested```_ Valores sugeridos resultantes de la validación con las fuentes de referencia, dependiendo de la rutina seleccionada pueden ser sugerencias taxonómicas, geográficas, o temporales.

- _```Validation```_: Corresponde a los indicadores de validación (unos y ceros) que permiten rastrear diferencias entre el valor original y el valor sugerido, y realizar posteriormente una limpieza de los datos.

En la Figura 7 se muestra un ejemplo de cómo se ven los identificadores de la validación y las nuevas columnas con las sugerencias después de ejecutar la rutina; en el ejemplo se observa una validación taxonómica, las columnas de resultado varían según el objetivo de cada rutina.


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-61.jpg" width=800>

<sup>_Figura 7. Identificadores de validación y columnas resultantes de la rutina_.</sup>


### 4.1 Datos de grupos biológicos principalmente continentales


**Funcionamiento:**

Esta rutina valida la información taxonómica de un conjunto de datos usando como referencia el árbol taxonómico de GBIF, esto se hace a través de un llamado al API de GBIF basado en los elementos del estándar Darwin Core "scientificName" y "kingdom" documentados en el conjunto de datos. Como resultado, el llamado retorna la taxonomía superior, nombres aceptados, estatus taxonómico y autoría del nombre científico de acuerdo al árbol taxonómico de GBIF. La rutina toma los valores obtenidos del árbol y los compara con los elementos documentados en el archivo base, generando los indicadores de validación, explicadas a continuación.


```note
Si también desea validar la taxonomía superior de su conjunto de datos se requieren los elementos DwC: "scientificName", "kingdom", "phylum", "class", "order", "family", y "genus".
```


**Resultados:**

En las primeras columnas del proyecto encontrará las columnas con los datos taxonómicos reorganizadas junto con nuevas columnas resultantes de la rutina. Primero encontrará las columnas asociadas al cruce con el árbol taxonómico y luego de manera intercalada columnas con el valor taxonómico original, un valor sugerido de acuerdo al árbol taxonómico de GBIF y el indicador de validación indicando si los valores son iguales (1) o difieren (0).

A continuación se listan las columnas que encontrará después de ejecutar la rutina:

_```taxonMatchType```_: Indica el resultado del cruce de los datos originales con el árbol taxonómico de GBIF a partir de los elementos "scientificName" y "kingdom". Los valores que encontrará en esta columna son:

   - _EXACT_: La correspondencia entre el "scientificName" del conjunto de datos y el árbol taxonómico es completa.

   -_FUZZY_: La correspondencia entre el "scientificName" del conjunto de datos y el árbol taxonómico es parcial, el nombre difiere en su escritura. Comúnmente indica errores de tipeo o diferencias por correcciones nomenclaturales (ejem: la terminación i vs. ii cuando la especie se dedica a una persona).

   - _HIGHERRANK_: La correspondencia entre el nombre científico del conjunto de datos y el árbol taxonómico fue parcial. No se identificó el taxon a nivel taxonómico de "scientificName" si no a un nivel superior. Por ejemplo si el "scientificName" corresponde a una especie, la correspondencia con el árbol taxonómico de GBIF fue a nivel de género. Esto sucede porque el taxon aún no está en el árbol taxonómico de GBIF o por errores de tipeo mayores.

   _NONE_ y _BLANK_: La correspondencia entre el "scientificName" del conjunto de datos y el árbol taxonómico fue nula o hubo varias coincidencias con muy poca información para determinar un resultado, esto sucede comunmente cuando hay homónimos o si el taxon aún no se encuentra en el árbol taxonómico de GBIF, como es el caso de especies recientemente descritas o algunas endémicas.

_```scientificName```_: Columna original del conjunto de datos.

_```acceptedScientificName```_: Nombre científico aceptado según el árbol taxonómico de GBIF.

_```canonicalNameSuggested```_: Nombre canónico sugerido según el árbol taxonómico de GBIF.

_```taxonRankSuggested```_: Categoría del taxon sugerido según el árbol taxonómico de GBIF (e.g.: SPECIES, GENUS, FAMILY).

_```taxonomicStatusSuggested```_: Estado del taxon sugerido según el árbol taxonómico de GBIF (e.g.: ACCEPTED, SYNONYM).

_Tripleta de elementos validados_:  Encontrará la columna original del conjunto de datos, la columna de validación y la columna con la sugerencia según el árbol taxonómico de GBIF, por ejemplo: _```class```_, _```classValidation```_, _```classSuggested```_. Los siguientes elementos de estar documentados en el conjunto de datos original tendrán dicha tripleta: _```scientificNameAuthorship```, ```kingdom```, ```phylum```, ```class```, ```order```, ```family```, ```genus```, ```specificEpithet```.

_```callAPI```_: Respuesta del API a la rutina, contiene todos los resultados en formato JSON.

```note
El llamado al API permite hacer una consulta sobre un número ilimitado de registros, sin embargo si su conjunto de datos tiene muchas filas se recomienda ejecutar la rutina sobre nombres científicos únicos, lo cual disminuirá el tiempo de respuesta y agilizará la ejecución de la rutina. 
```


### 4.2 Datos de grupos biológicos Marino Costeros

**Funcionamiento:**

Esta rutina está diseñada para ser implementada en conjuntos de datos de grupos biológicos marinos, emplea como fuente de referencia los taxones marinos del árbol taxonómico de LifeWatch (LW-SIBb) a través de un llamado al API de WoRMS (World Register of Marine Species). La rutina retorna la taxonomía superior, nombres aceptados, estatus taxonómico y autoría del nombre científico de acuerdo al árbol taxonómico de LifeWatch y los compara con los elementos documentados en el archivo base, generando los indicadores de validación.

Adicionalmente a los elementos taxonómicos, esta rutina retorna otros elementos útiles que dan información sobre el tipo de hábitat del taxon y el LSID de WoRMS o AphiaID, elemento requerido para la publicación de datos a través de OBIS (Ocean Biodiversity Information System).


```note
Si también desea validar la taxonomía superior de su conjunto de datos se requieren los elementos DwC: "scientificName", "kingdom", "phylum", "class", "order", "family", y "genus".
```

**Resultados:**

En las primeras columnas del proyecto encontrará de manera intercalada una columna con el valor taxonómico original, un valor sugerido de acuerdo al árbol taxonómico y el indicador de validación indicando si los valores son iguales (```1```) o si difieren (```0```) como se muestra en la las rutinas previas (Fig. 7).


A continuación se listan las columnas que encontrará despues de ejecutar la rutina, adicionales a las ya mencionadas en las rutinas previas de validación taxonómica (Fig. 8):

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/es.figure-64.jpg" width=800>

<sup>_Figura 8. Algunas columnas resultantes del proceso de validación con la rutina de WoRMS adicionales a las columnas de validación._</sup>

_```matchType```_: Indica el resultado del cruce de los datos originales con el árbol taxonómico de WoRMS a partir del elemento "scientificName". Los valores que encontrará en esta columna son:

    - _exact_: La correspondencia entre el _```scientificName```_ del conjunto de datos y el árbol taxonómico es completa.

    - _phonetic_: La correspondencia entre el _```scientificName```_ del conjunto de datos y el árbol taxonómico es completa a nivel fonético a pesar de algunas diferencias menores en la escritura.

    - _near_1 _: Hay una diferencia de un carácter entre el _```scientificName```_ del conjunto de datos y el árbol taxonómico. Es una correspondencia bastante confiable.

    - _near_2 _: Hay una diferencia de dos caracteres entre el _```scientificName```_ del conjunto de datos y el árbol taxonómico. Se sugiere una revisión del nombre.

    - _near_3 _: Hay una diferencia de tres caracteres entre el _```scientificName```_ del conjunto de datos y el árbol taxonómico. Se requiere una revisión del nombre.

    - Otras posibilidades poco frecuentes como _```match_quarantine```_ y _```match_deleted```_, WoRMS recomienda contactarlos directamente.

_```scientificNameID```_: Identificador del taxón construido a partir del AphiaID proveniente del árbol taxonómico de WoRMS.

_```nameAccordingTo```_: La referencia bibliográfica del nombre científico según WoRMS

_```nameAccordingToID```_: Identificador de la referencia bibliográfica del nombre científico según WoRMS.

_```isMarine```_: Valor booleano (_TRUE_ o _FALSE_) que indica si el registro corresponde a un taxon marino.

_```isBrackish```_: Valor booleano (_TRUE_ o _FALSE_) que indica si el registro corresponde a un taxon de aguas salobres.

_```isFreshwater```_: Valor booleano (_TRUE_ o _FALSE_) que indica si el registro corresponde a un taxon de aguas continentales, i.e. taxones asociados a ríos o lagos.

_```isTerrestial```_: Valor booleano (_TRUE_ o _FALSE_) que indica si el registro corresponde a un taxon terrestre.

_```callAPIworms```_: Respuesta del API a la rutina, contiene todos los resultados en formato JSON.


## Paso 5 - Realizar Ajustes

### 5.1 Datos de grupos biológicos principalmente continentales

1. Relice un facet en _```taxonMatchType```_ e identifique los posibles errores señalados como _```Fuzzy```_ y _```None```_. Este último sobretodo estará presente si no se realizó una limpieza de los calificadores de identificación como _cf._ y _sp._ en el _```scientificName```_ antes de ejecutar la rutina. Realice los ajustes según corresponda en esos nombres científicos

2. Realice la limpieza de los _```FUZZY```_ tenga en cuenta que algunos de los nombres son sinónimos (lo cual puede verificar revisano el elemento _```taxonomicStatusSuggested```_. Deje el nombre aceptado para este caso y en _```scientificName```_ haga los respectivos cambios, al igual que en _```genus```_ y _```specificEpithet```_, segun corresponda para que tengan coherencia con el _```scientificName```_.

3. Realice facets en los elementos de validación como _```classValidation```_ y  _```familyValidation```_. Seleccione el buleano ```0``` e identifique y ajuste los errores que le muestre la validación.

4. Complete la información para la taxonomía superior incompleta (_```phylum```_, _```order```_, _```genus```_ y _```specificEpithet```_) de acuerdo a los campos sugeridos (_suggested_) de la tripleta de resultados. 

5. Complete el elemento _```taxonRank```_ a partir del _```suggestedTaxonRank```_ de acuerdo al vocabulario controlado para este elemento.

```tip
En OpenRefine puede ir a la columna que quiere completar (ej. phylum), ir a edit cells>transform y en el recuadro de edición usar la siguiente expresión cells['phylumSuggested'].value. De esta forma remplazará el contenido vacío por el sugerido en phylumSuggested. Haga lo mismo para los demás elementos cambiando la expresión según corresponda.
```


### 5.2 Datos de grupos biológicos Marino Costeros

1.  Revise la columna _```matchType```_ e identifique los nombres científicos que no coinciden con el árbol taxonómico de WoRMS. Ajustelos según corresponda.

2. Revise las columnas adicionales que trae el script, revise las tripletas de validación haciendo _facets_ en los elementos de validación en OpenRefine y seleccione la opción ```0```. Idenfique donde debe realizar ajustes.

3. **Reto**: ¿Hay registros que sean completamente terrestres y no del medio marino según la validación?. Identifique el error en la validación usando los elementos _```isMarine```_, _```isBrackish```_, _```isFresh```_, _```isTerrestrial```_.



## Paso 6 - Verificación del resultado

Compare sus resultados con los siguientes archivos validados según las definiciones del estándar para la rutina con el API de GBIF y WoRMS, verifique en que acertó y en que puede mejorar.

¿Qué diferencias encontró con sus resultados?

[Descargue el archivo validado ](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Solución_datos_Estructurados_GBIF.xlsx) para datos continentales.

[Descargue el archivo validado](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Solución_datos_casomarinocosteros.xlsx) para datos marino costeros.


## Paso 7 - Datos propios
Si tiene datos propios que desee publicar, intente realizar la validación según coresponda con la rutina para datos continentales o marino-costeros.

****
**¡Felicitaciones!** :raised_hands: 
Ha finalizado la validación taxonómica con GBIF (Datos continentales) y WoRMS (Datos marino-costeros) utilizando las rutinas de validación en OpenRefine desarrolladas por el EC-SiB Colombia.

****


## Parte 2 - Validación geográfica


## Parte 2.1 Validación de nombres geográficos

Desarrollada para estandarizar los contenidos de los elementos de la geografía superior, especialmente stateProvince, county y municipality, de acuerdo a una fuente de referencia nacional. La rutina contrasta los valores documentados con la información oficial para el país, a partir de un archivo de referencia previamente cargado en OpenRefine, y genera indicadores de validación. Los indicadores permiten identificar dos tipos de errores en la geografía superior; 1) errores de tipeo y gramática y 2) errores de consistencia relacionados con la correspondencia entre entidades geográficas, como municipios (county), o centros poblados (municipality) que no pertenecen al departamento (stateProvince).

El archivo oficial de referencia disponible en el repositorio es generado con la información geográfica para Colombia suministrada por la División Político Administrativa definida por el DANE (Divipola). Vale la pena precisar que esta rutina puede implementarse para otros países, empleando la misma estructura del archivo de la división político administrativa oficial de Colombia, pero con la información geográfica oficial del país de interés.

**Datos de validación**
- Descargue el archivo [datos_ValidacionGeografia.xlsx](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_ValidacionGeografia.xlsx) 
- Descargue el archivo [DIVIPOLA_2021-0416.xls](https://github.com/SIB-Colombia/data-quality-open-refine/raw/master/DIVIPOLA_20210416.zip)

- Utilice la rutina [Validación de nombres geográficos con DIVIPOLA](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValNamesGeo_ValNombresGeo.txt){:target="_blank"}

## Paso 1 - Cargar el archivo

Cree un proyecto en OpenRefine con el conjunto de datos ```datos_ValidacionGeografia.xls```, con el nombre ```datos_ValidacionGeografia``` Si tiene dudas sobre cómo hacerlo revise el [paso 2 de la guía general de OpenRefine](https://sib-colombia.github.io/Formacion/LAB/lab02/lab_or1.html#paso-2---crear-un-proyecto){:target="_blank"}. 


## Paso 2 - Revisar elementos requeridos

Asegúrese que el conjunto de datos o los elementos que desea validar estén estructurados en el estándar Darwin Core (```stateProvince```, ```county```, ```municipality```).

```note
No es necesario que cuente con los 3 campos de stateProvince, county y municipality para que la validación funcione, la rutina se ejecutará igualmente pero solo validará la información que tenga disponible. Es decir, si solo tiene stateProvince la validación de county y municipality quedará vacía. 
```

## Paso 3 - Cargue el archivo Divipola para la validación

Antes de ejecutar esta rutina se requiere que cargue el archivo ```DIVIPOLA_20210416.xls``` en OpenRefine. Si tiene dudas sobre cómo hacerlo revise el [paso 2 de la guía general de OpenRefine](https://sib-colombia.github.io/Formacion/LAB/lab02/lab_or1.html#paso-2---crear-un-proyecto){:target="_blank"}. Asegurese que el nombre del proyecto en OpenRefine sea ```DIVIPOLA_20210416``` (Fig. 9). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig1_OR_A_Divipola_DivipolaenOR.png" width=600>

<sup>_Figura 9. Carga de archivo DIVIPOLA 20210416 en OpenRefine._</sup>


## Paso 4 - Ejecutar la rutina

### 4.1. Copie la rutina
Diríjase a la rutina de [Validación y recuperación de elevaciones a partir del API de Geonames](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValElevationAPIGeoNames_ValElevacionAPIGeoNames.txt). Será redirigido a GitHub donde encontrará un archivo de texto plano. Copie el texto de la rutina de validación (Fig. 10). Asegúrese de seleccionar solo la rutina -sin las instrucciones- y copiar todos los corchetes iniciales ```{``` y finales ```}```.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig2_OR_A_CopiaRutinaGeoNames.PNG" width=600>

<sup>_Figura 10. Copia de la rutina en GitHub._</sup>

### 4.2. Ejecute la rutina
Ubíquese en el conjunto de datos a validar en OpenRefine ```datos_ValidacionGeografia```, diríjase al menú arriba a la izquierda, seleccione la pestaña _```Undo/Redo```_ (Deshacer/Rehacer) y haga clic en el botón ```Apply``` (Aplicar). A continuación se abrirá una ventana de texto vacía. Pegue en el cuadro de texto la rutina copiada en el paso 4.1. y haga clic en ```Perform operations``` (Ejecutar Operaciones) (Figura 11).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig3_OR_A_Divipola_EjecucionRutina.png" width=800>

<sup>_Figura 11. Pasos para la ejecución de la rutina en OpenRefine._</sup>

Espere a que finalice la ejecución de la rutina. Esta rutina necesita consultar información en otro proyecto en OpenRefine, por lo que no depende de la conexión a internet, pero su tiempo de ejecución varía según el número de filas del conjunto de datos y de la memoria RAM de su equipo.


## Paso 5 - Revisión de resultados

Luego de ejecutar el script unas columnas adicionales se añadirán al conjunto de datos, su contenido se describe a continuación 

- ```spValidation```: Resultado de la validación entre el _```stateProvince```_ y el de Departamento coincidente con el archivo Divipola. El resultado será ```1``` si hay coincidencia y ```0``` en caso contrario.
- ```spc```: Unión de los elementos stateProvince y county del conjunto de datos para realizar la validación por municipios. 

- ```spcValidation```: Resultado de la validación para _```stateProvince```_ y _```county```_, respecto al Departamento y Municipio coincidentes con el archivo Divipola. El resultado será ```1``` si hay coincidencia y ```0``` en caso contrario.
- ```spcm```: Unión de los elementos _```stateProvince```_,  _```county```_ y municipality del conjunto de datos para realizar la validación de centros poblados 
- ```spcmValidation```: Resultado de la validación para _```stateProvince```_, _```county```_ y  _```municipality```_ , respecto al Departamento, Municipio y Centro Poblado coincidentes con el archivo Divipola. El resultado será ```1``` si hay coincidencia y ```0``` en caso contrario.

```note
Los campos  spc y spcm se crean para que en la validación haya coherencia entre el departamento, municipio y centros poblados documentados, ya que por ejemplo, un municipio puede estar bien documentado pero no necesariamente pertenecer a determinado departamento. 
```

### Paso 5.1. Ajustes los departamentos

Realice un ```Text Facet``` sobre el elemento _```stateProvince```_ y el elemento ```spValidation```. En el facet de ```spValidation``` seleccione los resultados no coindicentes ```0``` (Fig. 11).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig4_OR_A_Divipola_FacetResultados.png" width=800>

<sup>_Figura 4. Facets en OpenRefine para identificar los registros donde debe hacer ajustes sobre el elemento stateProvince._</sup>


Revise los departamentos en _```stateProvince```_ y haga los ajustes que considere necesarios según el archivo de ```DIVIPOLA_20210416```.

```tip
Use el archivo de ```DIVIPOLA_20210416``` cargado en OpenRefine y realice text filters (filtros de texto) y facets (Facetas) para encontrar la forma correcta de documentar los nombres oficiales en stateProvince y county.
```

### Paso 5.2. Ajuste los municipios

Ahora realice un ```Text Facet``` sobre el elemento _```county```_ y el elemento ```spcValidation```. En el facet de ```spcValidation``` seleccione los resultados no coindicentes ```0``` (Fig X).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig5_OR_A_Divipola_FacetResultadosCounty.png" width=800>

<sup>_Figura 5. Facets en OpenRefine para identificar los registros donde debe hacer ajustes sobre el elemento county._</sup>

Revise los municipios en _```county```_ y haga los ajustes que considere necesarios según el archivo de ```DIVIPOLA_20210416```.

```tip
Use el archivo de ```DIVIPOLA_20210416``` cargado en OpenRefine y realice text filters (filtros de texto) y facets (Facetas) para encontrar la forma correcta de documentar los nombres oficiales en stateProvince y county.
```

## Paso 6 - Verificación del resultado

Compare sus resultados con el siguiente archivo validado según las definiciones del estándar, verifique en que acertó y que puede mejorar.

¿Qué diferencias encontró con sus resultados?

[Descargue el archivo validado](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/solución_datos_ValidacionGeografia.xlsx)


## Parte 2.2 Validación de elevaciones


Realiza un llamado al API de GeoNames (servicio SRTM-1) a partir de los elementos Darwin Core de latitud (‘decimalLatitude’) y longitud (‘decimalLongitude’) en grados decimales y retorna la elevación con una resolución de 30 metros por pixel y la compara con los elementos documentados en el archivo base, generando los indicadores de validación.


Enlace al repositorio: 
https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValElevationAPIGeoNames_ValElevacionAPIGeoNames.txt



## Paso 1 - Cargar el archivo

Usaremos el  archivo [datos_ValidacionGeografia.xlsx](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_ValidacionElevaciones.xlsx). Descargue el archivo y carguelo en OpenRefine. Si tiene dudas sobre cómo hacerlo revise el [paso 2 de la guía general de OpenRefine](https://sib-colombia.github.io/Formacion/LAB/lab02/lab_or1.html#paso-2---crear-un-proyecto){:target="_blank"}. 


## Paso 2 - Revisar elementos requeridos

El conjunto de datos a validar debe tener como mínimo los elemento DwC _```decimalLatitude```_ y _```decimalLongitude```_ documentados adecuadamente, de lo contrario la rutina no se ejecutará adecuadamente.

Si cuenta con elevaciones es importante que estas esten documentadas como mínimo en el elemento _```minimumElevationInMeters```_.Si están documentadas solo como _```verbatimElevation```_ el script solo traerá las elevaciones sugeridas pero no habrá validaciones con las elevaciones documentadas.

## Paso 3 - Registro en Geonames

Tener una cuenta activa en GeoNames, si no tiene una regístrese [aquí](http://www.geonames.org/login){:target="_blank"} antes de correr la rutina.

Es muy importante tener en cuenta los siguientes pasos de forma que habilite su cuenta para el uso de servicios web.

1. Cree su cuenta con un correo electrónico y contraseña. Asegurese de que el correo este bien escrito y recuerde su nombre de usuario, lo a a necesitar para siguientes pasos (Fig. x).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig1_OR_A_Geonames_loginGeonames.PNG" width=500>

<sup>_Figura 1. Creación de usuario en Geonames._</sup>


2. Recibirá un mail de confirmación al correo que uso en el paso anterior. Es posible que este llegue como _Spam_. Abra el correo y haga clic al link de confirmación (Fig. X).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig2_OR_A_Geonames_correoGeonames.PNG" width=800>

<sup>_Figura 2. Correo de confirmación de Geonames._</sup>


3. En la esquina superior derecha, haga clic en su nombre de usuario. En la parte inferior verá un mensaje que le indica que la cuenta aun no está activida para hacer uso de los servicios web gratuitos y lo invita a hacer clic para activarlos. Haga clic en _```Click here to enable```_ (Fig. x).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig3_OR_A_Geonames_habilitarServicios.png" width=800>

<sup>_Figura 3. Habilitar opciones de uso de servicios web gratuitos de Geonames._</sup>

4. Recibirá un mensaje de confirmación indicando que los servicios web han sido habilitados para su cuenta (Fig. x).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig4_OR_A_Geonames_ConfirmacionHabilitacion.PNG" width=800>

<sup>_Figura 4. Mensaje de confirmación de habilitación de servicios web._</sup>

## Paso 4 - Ejecute la rutina

### 4.1 Copie la rutina
Diríjase a la rutina de [Validación de nombres geográficos con DIVIPOLA](https://github.com/SIB-Colombia/data-quality-open-refine/blob/master/ValElevationAPIGeoNames_ValElevacionAPIGeoNames.txt). Será redirigido a GitHub donde encontrará un archivo de texto plano. Copie el texto de la rutina de validación (Fig. XX). Asegúrese de seleccionar solo la rutina -sin las instrucciones- y copiar todos los corchetes iniciales ```{``` y finales ```}```.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig5_OR_A_Geonames_CopiaRutina.PNG" width=800>

<sup>_Figura 5. Copia de la rutina en repositorio en GitHub._</sup>

### 4.2 Ajuste la rutina
Antes de ejecutar la rutina remplace la palabra ```demo``` en la expresión ```username=demo``` por el nombre de usuario en GeoNames que creo en el paso 3, por ejemplo username=gzitror. Para ello abra un editor de texto como el ```Bloc de notas``` de Windows y use la opción de ```Remplazar...```. Busque ```demo``` y remplacelo por su usuario (Fig. X).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig7_OR_A_Geonames_ReemplazoUsuario.png" width=800>

<sup>_Figura 5. Busqueda y reemplazo del nombre de usuario para ejecutar la rutina usando el Bloc de notas de Windows._</sup>

Si ejecuta la rutina sin hacer este cambio utilizará la opción de prueba (demo) incorporada por defecto en la rutina, la cual tiene un límite de 20.000 consultas diarias mundiales, por lo que puede que el servicio esté agotado y no obtenga resultados.



```note
La rutina captura la elevación a partir de las coordenadas decimales documentadas en los elementos DwC "decimalLatitude" y "decimalLongitude" del archivo base, a través de una consulta a los servicios de GeoNames. La rutina se ejecuta sobre valores únicos de pares de coordenadas para evitar superar el límite de consultas diarias por usuario.
```

La rutina utiliza por defecto el modelo de elevación SRTM-1 ("srtm1"), que cuenta con una resolución aproximada de 30 metros. Sin embargo, el usuario puede usar otro de los modelos de elevación disponibles:

* SRTM3 (```srtm3```): Datos de elevación de la Shuttle Radar Topography Mission (SRTM), con resolución aproximada de 90 x 90 metros.

* Astergdemv2 (```astergdem```): Datos de elevación del Aster Global Digital Elevation Model V2 (2011) con resolución aproximada de 30 x 30 metros.

* GTOPO30 (```gtopo30```): Modelo de elevación global con resolución aproximada de 30 arcos por segundo, equivalente a una grilla de 1 km x 1 km.

Para cambiar el modelo de elevación reemplace en la rutina el valor ```srtm1``` en la expresión grel:\"http://api.geonames.org/srtm1 por el valor que corresponda al servicio que desea utilizar ```srtm3```, ```astergdem``` o ```gtopo30```. Para este ejercicio usaremos el modelo por defecto ```srtm1```.

### 4.3. Ejecute la rutina
Ubíquese en el conjunto de datos a validar en OpenRefine ```datos_ValidacionElevaciones```, diríjase al menú arriba a la izquierda, seleccione la pestaña _```Undo/Redo```_ (Deshacer/Rehacer) y haga clic en el botón ```Apply``` (Aplicar). A continuación se abrirá una ventana de texto vacía. Pegue en el cuadro de texto la rutina copiada en el paso 4.1. y haga clic en ```Perform operations``` (Ejecutar Operaciones) (Figura XX).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig6_OR_A_Geonames_EjecucionRutina.png" width=800>

<sup>_Figura 3. Pasos para la ejecución de la rutina en OpenRefine._</sup>



## Paso 5 - Revisión de resultados

### 5.1 Interpretación de resultados

El script genera 3 columnas de validación como se describen a continuación. 

En las primeras columnas del proyecto encontrará las columnas con los datos de elevación reorganizadas junto con nuevas columnas resultantes de la rutina (Fig. X). 


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig8_OR_A_Geonames_Resultados.png" width=800>

<sup>_Figura 5. Columnas resultantes de la validación en OpenRefine._</sup>

Encontrará de manera intercalada las columnas originales, un valor sugerido de acuerdo al servicio de elevación (_```elevationSuggested```_) y dos indicadores de validación (Figura X). El indicador _```elevationValidation```_ contrasta la elevación obtenida con el servicio y el elemento _```minimumElevationInMeters```_. El resultado debe ser interpretado así:

    1: La diferencia entre la elevación en "minimumElevationInMeters" y "elevationSuggested" es menor a 100 m.

    0: La diferencia entre la elevación en "minimumElevationInMeters" y "elevationSuggested" es mayor a 100 m.

    blank: No hay elevación mínima documentada.

El indicador _```elevationRangeValidation```_: contrasta la elevación obtenida con el servicio contra el rango de elevación indicado por los elementos _```minimumElevationInMeters```_ y _```maximumElevationInMeters```_ y debe ser interpretado así:

    1: El rango de elevaciones contiene la elevación sugerida.

    0: El rango de elevaciones NO contiene la elevación sugerida.

```note
La validación de rangos de elevaciones en ocasiones suele presentar inconvenientes. Estamos ajustando el script para facilitar su uso.
```


```note
Si al hacer la validación en la columna elevationSuggested obtiene el siguiente mensaje de error:

ERR:18:the daily limit of 20000 credits for demo has been exceeded. Please use an application specific account. Do not use the demo account for your application.

Significa que esta usando la versión demo y no cambio adecuadamente el nombre del usuario en el script.
```

### 5.2 Revisión de resultados

- ¿Cúantas elevaciones vacías logro completar con el uso del script?
- ¿Encontró alguna inconsistencia entre la elevación identificada con Geonames y la previamente documentada (_0's_ en elevationValidation).

```tip
En ocasiones el servicio puede no encontra un dato de elevación para determinada coordenada o la fuente tiene un error por lo que vera valores negativos (ej. -1). En ese caso debe ignorar la sugerencia.
```


## Paso 6 - Verificación del resultado

Compare sus resultados con el siguiente archivo validado según las definiciones del estándar, verifique en que acertó y que puede mejorar.

¿Qué diferencias encontró con sus resultados?

[Descargue el archivo validado](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/solución_ValidacionElevaciones.xlsx)

## Datos propios
Si tiene datos propios que desee publicar, intente identificar las rutinas que le serán útiles e intente incorporarlas a su flujo de trabajo.

**¡Felicitaciones!** :raised_hands: 
Terminó el laboratorio de uso avanzado de OpenRefine.

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
