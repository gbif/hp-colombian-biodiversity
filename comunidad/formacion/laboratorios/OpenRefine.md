---
layout: documentation
permalink: /formacion/laboratorios/OpenRefine
title: "Open Refine"
description: "Objetivo: Utilizar Open Refine para manejar, validar y limpiar de manera eficiente datos sobre biodiversidad, asegurando una mejor calidad para su publicación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Open Refine :gem:


**Objetivo**

´´´Utilizar _Open Refine_ para manejar, validar y limpiar de manera eficiente datos sobre biodiversidad, asegurando una mejor calidad para su publicación.```

**Sobre la Herramienta**

[_Open Refine_](https://openrefine.org/) es un software creado con el objetivo de pulir datos crudos hasta convertirlos en diamantes :gem:, activos valiosos en la era del _BigData_ .

Este sofware permite visualizar y manipular datos tabulares facilitando mejorar la calidad general de un conjunto de datos. Tiene la apariencia de un software tradicional de hoja de cálculo -similar a Excel, pero funciona como una base de datos. Esto significa que _OpenRefine_ no es adecuado para adicionar nuevas filas de datos, pero **es extremadamente poderoso cuando se trata de explorar, limpiar y vincular datos**. 

_Open Refine_ es un _software_ de código abierto bajo una [licencia BSD](https://github.com/OpenRefine/OpenRefine/blob/master/LICENSE.txt), se instala localmente por lo cual funciona como una aplicación web personal y de acceso privado, al que se accede desde un navegador web.

Esta herramienta sirve para **todo tipo de datos**, en este laboratorio se explica su funcionamiento en el contexto de datos sobre biodiversidad estandarizados en _Darwin Core_

**Requerimientos** 

- Navegador Chrome o Mozilla Firefox instalado, y configurado como navegador predeterminado.

``` warning
No utilice Internet Explorer para este laboratorio ya que Open Refine no funciona bien con este navegador web.
```

**Archivo de trabajo**

- Descargue el archivo [```datos_Estructurados.xlsx```](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/datos_Estructurados.xlsx) para realizar el laboratorio.

:warning: Estamos puliendo este laboratorio, la guía puede presentar cambios menores de formato y estilo para una mejor navegación y aprendizaje.

--------

## Paso 1 - Instalación 


> Asegúrese de que su navegador predeterminado sea Chrome o Mozilla


### Instalación en Windows
1. Descargue [Open Refine versión 3.4.1 + Java para Windows](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-win-with-java-3.4.1.zip).
2. Descomprima el archivo descargado y copie la carpeta resultante en el disco local (C:/).
3. Abra la carpeta y haga doble clic en ```openrefine.exe.```
4. Aparecerá una ventana de comando (que no debe cerrar) e inmediatamente después su navegador web mostrará una nueva ventana con la aplicación.


### Instalación en Mac
1. Descargue [Open Refine versión 3.4.1 + Java para Mac](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-mac-3.4.1.dmg).
2. Haga doble clic sobre el archivo de descarga y arrastre el icono en la carpeta Aplicaciones.
4. Haga doble clic en el icono y su navegador web mostrará una nueva ventana con la aplicación.
5. Si al dar doble clic no abre _Open Refine_ en el navegador,  escriba la siguiente dirección en el buscador: [http://127.0.0.1:3333/](http://127.0.0.1:3333/)

## Paso 2 - Crear un proyecto

Puede cargar datos con diferentes formatos y extensiones: TSV, CSV, SV, Excel (.xls y .xlsx), JSON, XML, RDF as XML y datos de Google Docs.


**2.1. Abrir un nuevo proyecto**

Abra _Open Refine_ y diríjase a la pestaña _```Create Project```_. Para cargar el archivo siga la ruta _```Get data from > This Computer```_, y haga clic en _```Choose Files```_ (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig1_OR_cargar.png" width=800>

<sup>_Figura 1. Creación de un proyecto en Open Refine._</sup>

**2.2. Selección del archivo**

Seleccione el archivo ```Datos_Estructurado.xlsx``` que descargó al incio del laboratorio y haga clic en _```Next```_ (Fig. 1).


> Puede subir varios archivos a la vez, el software unirá los archivos basados en los encabezados de las columnas.
> 

**2.3. Configuración del archivo**

Tras seleccionar el archivo aparecerá un panel de configuración, este le permite especificar el tipo de archivo que cargó y configurar la manera en la que los datos son leídos (Fig. 2). 

_Open Refine_ hace una interpretación automática del tipo de archivo, codificación del texto y filas de encabezado, entre otros. El conjunto de datos de ejemplo de este laboratorio es interpretado de manera correcta y no necesita ajustes adicionales. 

```warning
Si sube sus propios datos o utiliza otro formato debe fijarse en la vista previa del archivo y ajustar la configuración de lectura detenidamente (Fig. 2).
````


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig2._OR_config.png">

<sup>_Figura 2. Opciones para configurar la lectura y carga de los datos para un archivo Excel (.xls y .xlsx)_: A. tipo de archivo, B. hojas a importar, C.selección de filas, D. carga de filas. </sup>

 - **A.** Tipo de archivo, permite configurar el tipo de la fuente de datos
 - **B.** Hojas a importar, si carga uno o varios archivos con múltiples hojas, puede seleccionar que hojas desea importar y cuáles no.
 - **C.** Selección de filas, permite seleccionar la fila que se convertirá en el encabezado de las columnas, ignorar filas, entre otros.
 - **D.** Carga de filas en blanco, permite especificar si serán cargadas y como se realizará la carga. 

**2.4. Personalización del proyecto y carga del archivo**

Cambie el nombre del proyecto, en la esquina superior derecha verá un cuadro de texto en el que  puede cambiar el nombre del proyecto, nómbrelo ```Datos_OR``` y haga clic en el botón ```Create Project``` (Fig. 3). Opcionalmente puede añadir _Tags_ (etiquetas) para poder organizar y filtrar los proyectos en la aplicación.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig3._OR_renombrar.png" width=800>

<sup>_Figura 3. Configuración del proyecto, ajuste de nombre, adición de etiquetas y creación._</sup>


Espere a que cargue el archivo, esto puede tomar un tiempo dependiendo del tamaño del mismo.

## Paso 3 - _Faceting_

Es un método para filtrar los datos en conjuntos más pequeños facilitando la validación y limpieza de los datos, puede hacerse para texto, números y fechas.

### 3.1 Correcciones masivas

**3.1.1. Crear un _Text Facet_**

Diríjase a la columna _```class```_, haga clic en el menú de la columna y siga la ruta _```Facet >Text Facet```_ (Fig. 4).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig4_OR_facet.png" width=400>

<sup>_Figura 4. Creación de un Text Facet._</sup>

**3.1.2. Organizar el _Text Facet_**

El _Text Facet_ creado aparecerá a la izquierda de la aplicación, verá una ventana con el nombre de la columna y el _Facet_ que acaba de crear (Fig. 5). Haga clic en _count_ para organizar las clases de la más a la menos abundante y en _name_ para organizarlas en orden alfabético.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig5_OR_facet2.png" width=400>

<sup>_Figura 5. Vista del Text Facet y las opciones para organizar las opciones de texto de la columna._</sup>

**3.1.3. Corrección de los datos**

Corrija las inconsistencias en los nombres de las clases ```Aves``` y ```Mammalia```. Para esto acerque el cursor al valor que desea corregir y haga clic en *```Edit```*, luego en el cuadro de texto que aparece corrija el error y haga clic en _```Apply```_ (Fig. 6). Todos los valores serán corregidos de manera automática y las celdas se transformarán de forma masiva.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig6_OR_classCorrect.png" width=400>

<sup>_Figura 6. Corrección masiva de la columna class usando un Text Facet._</sup>

Realice el mismo proceso con la columna _```basisOfRecord```_ y _```sex```_  ajustándolas al vocabulario controlado de cada elemento (Refiérase al [laboratorio de estandarización](https://sib-colombia.github.io/Formacion/LAB/lab01/lab_dwc.html)) (Fig. 7).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig7_OR_otrosCorrect.png" width=400>

<sup>_Figura 7. Corrección masiva de las columnas basisOfRecord y sex usando un Text Facet._</sup>


Al finalizar este ejercicio diríjase en el menú lateral y seleccione la opción _```Remove All```_ (Fig. 8). Así removerá todos los _Facets_ y Filtros que tenga en uso.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig8_OR_remover.png" width=400>

<sup>_Figura 8. Remover todos los facets y filtros activos_.</sup>


### 3.2 Limpieza de espacios en blanco

Diríjase a la columna _```individualCount```_, haga clic en el menú  de la columna y realice un _```Text Facet```_.
A su izquierda aparecerá la ventana con el nombre de la columna y el Facet que se realizó (Fig. 9).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig9_OR_individual.png" width=400>

<sup>_Figura 9. Vista del Text Facet y las diferentes formas de documentación del elemento individualCount._</sup>

Aunque a simple vista los datos se encuentran sin errores, al realizar este procedimiento vemos que el programa ha detectado espacios extra y por eso nos muestra cuatro opciones diferentes para el valor ```1```.
Corrija las inconsistencias desde el menú de la columna _```individualCount```_, siguiendo la ruta _```Edit Cells > Common transforms > Trim leading and trailing whitespace```_, verá un mensaje de notificación que le indicará en cuéntas celdas se eliminaron espacios (Fig. 10).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig10_OR_trimSpaces.png" width=600>

<sup>_Figura 10. Transformación de la columna para eliminar dobles espacios y espacios al final del texto._</sup>

Observe la ventana del _Facet_ de _```individualCount```_, notará que ahora solo existe una opción y que los espacios fueron eliminados.

Al finalizar este ejercicio diríjase al menú lateral y seleccione la opción _```Remove All```_. Así removerá todos los _Facets_ y Filtros que tenga en uso.

### 3.2 Detección de duplicados

Diríjase a la columna _```catalogNumber```_, haga clic en el menú de la columna y siga la ruta _```Facet > Customized facets > Duplicates facet```_, a su izquierda verá la ventana del _Facet_ (Fig. 11).


Podemos ver que el programa ha detectado valores únicos _```false```_ y valores duplicados _```true```_ (Fig. 11). Haga clic en true y verá los registros. De esta manera se pueden detectar los duplicados para un análisis posterior. En este caso corrija el registro de ```Feb 2001``` cambiando por ```46-2300MI2008AV0248``` tanto en _```catalogNumber```_ como en _```occurrenceID```_ (Fig. 11).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig12_OR_fixDuplicates.png" width=600>

<sup>_Figura 11. Revisión de los registros duplicados y corrección de los identificadores._</sup>

Al finalizar este ejercicio diríjase al menú lateral y seleccione la opción _```Remove All```_ (Fig. 8). Así removerá todos los _Facets_ y Filtros que tenga en uso.

## Paso 4 - Filtros

### 4.1 Corrección combinando filtros y funciones

**4.1.1. Corrección elemento _```scientificName```_**

Diríjase a la columna _```scientificName```_, haga clic en el menú de la columna  y luego en _```Text filter```_, aparecerá la ventana del Filtro.
Escriba en el campo de texto ```sp.``` y realice un _```Text Facet```_ en _```scientificName```_ para visualizar los registros con este valor (Fig. 12).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig13_OR_sp.png" width=400>

<sup>_Figura 12. Aplicación de un filtro de texto a la columna scientificName e identificación de nombres científicos a corregir._</sup>


Este tipo de identificación parcial (sp.) no debe documentarse en el elemento _```scientificName```_, para ello se emplea el elemento _DwC_ _```verbatimTaxonRank```_.

Realice un _```Text Facet```_ en _```verbatimTaxonRank```_ y edite masivamente reemplazando las celdas vacías (_blank_) con ```sp.```, haga clic en _```Apply```_ (Fig. 13).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig14_OR_sp2.png" width=400>

<sup>_Figura 13. Documentación masiva del elemento verbatimTaxonRank._</sup>


Diríjase nuevamente al menú de la columna de _```scientificName```_ y siga la ruta _```Edit cells > Transform```_, luego ingrese la fórmula  _```value.replace(" sp.","")```_, note que en la pestaña _```Preview```_ puede ver la vista previa del resultado al aplicar la fórmula, y corroborar si es el cambio deseado (Fig. 14). Haga clic en _```OK```_ y aparecerá un mensaje de confirmación de que los cambios se han realizado.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig15_OR_replace.png" width=800>

<sup>_Figura 14. Transformación masiva de los datos usando comando value.replace() del lenguaje GREL de Open Refine._</sup>

Empleando el comando _```value.replace```_ se puede sustituir cualquier valor de una columna poniendo dentro de un paréntesis el valor a buscar (ej. " sp."), entre comillas [ “ ] y luego separado por una coma [ , ] el valor de reemplazo - en este caso ninguno por lo cual se ponen unas comillas vacías [""].

> :brain: Para conocer más del lenguaje de programación GREL de diríjase a la [documentación de Open Refine](https://github.com/OpenRefine/OpenRefine/wiki/GREL-Functions).

**2. Corrección elementos _```recordedBy```  ```identifiedBy```_**

Corrija las columnas _```recordedBy```_ e _```identifiedBy```_ empleando la función _```value.replace```_ del punto anterior, reemplace en cada una el carácter de separación entre los nombres ```"; "``` por el que acepta el estándar Darwin Core actualmente para este elemento ```" | "``` ( Refiérase al [laboratorio de estandarización](https://sib-colombia.github.io/Formacion/LAB/lab01/lab_dwc.html)).

Al finalizar este ejercicio diríjase al menú lateral y seleccione la opción _```Remove All```_ (Fig. 8). Así removerá todos los _Facets_ y Filtros que tenga en uso.

### 4.2 Filtros con expresiones regulares

**4.2.1. Corrección elemento _```family```_** 

Diríjase a la columna _```family```_  y realice un _```Text Facet```_. Haga clic en el menú de la columna y luego en _```Text filter```_. Aparecerá la ventana del Filtro.
Marque la casilla _regular expression_. Escriba en el campo de texto la expresión regular  ```.*(?:(?!ae).).$``` esta expresión permite excluir todas las palabras de la columna que no terminan en ```ae```, correspondiente a las últimas letras de la declinación en latín para la categoría taxonómica de familia (*idae*, *ceae*) (Fig, 15).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig16_OR_regulasExp.png" width=400>

<sup>_Figura 15. Uso de expresiones regulares en GREL para filtrar la columna family._</sup>

Podrá observar como los registros que no corresponden a la categoría de familia han sido filtrados, usted puede editarlos haciendo uso de las opciones aprendidas en pasos previos. En este caso particular reemplace ```Bolitoglossa```, que corresponde a un género, por ```Plethodontidae```, la familia a la que pertenece el nombre científico (Fig. 15).

> :brain: Para conocer más de las expresiones regulares diríjase a la [documentación de _Open Refine_](https://github.com/OpenRefine/OpenRefine/wiki/Understanding-Regular-Expressions).

Al finalizar este ejercicio diríjase en el menú lateral y seleccione la opción _```Remove All```_ (Fig. 8). Así removerá todos los Facets y Filtros que tenga en uso.

**4.2.2. Corrección elmentos _```scientificName```_ _```identificationQualifier```_** 

Diríjase a la columna _```scientificName```_, haga clic en el menú de la columna  y luego en _```Text filter```_, aparecerá la ventana del Filtro. Marque la casilla _regular expression_. Escriba en el campo de texto la expresión regular  ```[.]``` y realice un _```Text Facet```_ para visualizar los registros con este  elemento (Fig. 16).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig17_OR_qualifier.png" width=400>

<sup>_Figura 16. Uso de expresiones regulares en GREL para filtrar y corregir las columnas scientificName identificationQualifier._</sup>

Podrá observar los registros que cumplen con el criterio de la expresión regular. El elemento _```identificationQualifier```_ está diseñado para almacenar este tipo de información y por su parte el elemento _```scientificName```_ debe encontrarse sin calificadores.

Para hacer el ajuste realice un _```Text Facet```_ en el elemento _```identificationQualifier```_ para editar masivamente, de manera que en los blank se documente “cf. sowelli” y se borre en el _```scientificName```_ (Fig. 16).

```note
El grado de incertidumbre de la identificación puede indicarse agregando varios términos, como **aff.** y **cf.** al nombre científico. El término calificativo se aplica a la parte del nombre que sigue inmediatamente al calificador y se pueden colocar delante de cualquier elemento del nombre.

- **aff.** Similar o limítrofe, indica que una especie tiene afinidad con la especie mencionada, pero no es idéntica a ella.
- **cf.** Comparar con, describe que un espécimen que es difícil de identificar e indica diversos grados o tipos de incertidumbre sobre el taxon, y pueden usarse de manera diferente según el autor.
````

Finalmente estos registros deben quedar documentados con el género _Carollia_ en _```scientificName```_ y en _```identificationQualifier```_ el valor ```cf. sowelli``` (Fig. 17).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig18_OR_qualifierFix.png" width=400>

<sup>_Figura 17. Documentación corregida y correcta de los elementos scientificName identificationQualifier._</sup>

Al finalizar este ejercicio diríjase al menú lateral y seleccione la opción _```Remove All```_ (Fig. 8). Así removerá todos los _Facets_ y Filtros que tenga en uso.
## Paso 5 - Conjuntos

Diríjase a la columna _```recordedBy```_, haga clic en el menú de la columna y luego en _```Text facet```_, aparecerá la ventana del Facet con más de 200 opciones  (_choices_) diferentes (Fig. 18).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig19_OR_cluster1.png" width=400>

<sup>_Figura 18. Facet y opciones del elemento recordedBy._</sup>


En la parte superior derecha verá el botón _```Cluster```_ haga clic (Fig. 18), aparecerá la ventana de _Cluster &  Edit_ para la columna _recordedBy_ (Fig. 19).

Podrá ver la siguiente información:

- ***Cluster size***: La cantidad de versiones del dato que el algoritmo identifica como similares.
- ***Row count:*** El número de registros por cluster.
- ***Values in cluster:*** Los valores seleccionados por el algoritmo para esa agrupación y el número de registros por valor.
- ***Merge?:*** En este cuadro se selecciona si los valores se fusionan en el valor que propone el algoritmo por defecto o el documentado por el usuario. 
- ***New cell value:*** En este campo de texto se puede escribir un valor completamente nuevo para el _cluster_. También se puede hacer clic en cualquier valor para asignarlo como valor por defecto.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig20_OR_cluster2.png" width=800>

<sup>_Figura 19. Detalle de la ventana ventana de Cluster &  Edit para hacer realizar clusters y las opciones de configuración disponibles._</sup>


Vaya a _```Keying Function```_, seleccione _```ngram-fingerprint```_ y en _```Ngram Size```_ escriba ```1``` (Fig. 19).

> :brain: Para conocer más acerca de los algoritmos diríjase a la [documentación de _Open Refine_](https://github.com/OpenRefine/OpenRefine/wiki/Understanding-Regular-Expressions).

- Para el primer cluster asigne un valor nuevo, para esto vaya al cuadro de texto de _```New cell value```_ y escriba ```David H | Arango A | Bedoya J``` (dejando espacios sencillos). Luego haga check en el cuadro de _```Merge?```_ para ese _cluster_ (Fig. 19).

- Para el segundo _cluster_ haga clic en ```Vargas I``` (la primera opción: sin espacios adicionales), automáticamente el valor en _```New cell value```_ cambiará y la casilla _```Merge?```_ se chequeará (Fig. 19).

- Con los restantes evalúe si se deben o no agrupar dependiendo de las opciones disponibles y escoja en tal caso si selecciona o no la casilla.

Una vez escoja las entradas que desee fusionar vaya a _```Merge Selected & close```_ para agrupar los valores y volver a la ventana principal. 


Observe que la cantidad de opciones de datos disminuyó y que la primera entrada de nombres ha cambiado, es decir la información se simplificó y organizó correctamente gracias a este proceso.

Al finalizar este ejercicio diríjase al menú lateral y seleccione la opción _```Remove All```_. Así removerá todos los _Facets_ y Filtros que tenga en uso.


## Paso 6 - Servicios externos vía API's

En este ejercicio se utiliza el [API](https://www.gbif.org/developer/species) de [GBIF](https://www.gbif.org) para verificar la validez taxonómica de una lista de nombres determinada.

**Árbol taxonómico GBIF**

GBIF fácilita un árbol taxonómico robusto a partir de la agrupación de reconciliación de diversos grupos biológicos y proveedores de contenido (Tabla 1), cada uno de las cuales es soportado por una comunidad de científicos. Este árbol permite la integración de múltiples fuentes de datos fácilitando las busquedad y descargas del portal, y esta en constante actualización.


<sup>Tabla 1. Principales fuentes a partir de las cuales se consolida el árbol taxonómico de GBIF</sup>

| Proveedor * | Enlace | 
| -------- | -------- | 
| CoL | http://www.catalogueoflife.org/ |
| International Barcode of Life project (iBOL)   | https://ibol.org/  |
| World Register of Marine Species (WoRMS)   | http://www.marinespecies.org/   |
| Index Fungorum	   | http://www.indexfungorum.org/   |
| Integrated Taxonomic Information System (ITIS)  | http://www.itis.gov/  |
| International Plant Names Index	   | http://www.ipni.org/   |
| The Paleobiology Database   | http://www.paleodb.org/   |

<sub>*Para una lista completa de los proveedores y descripción de los mismos ingrese al [_GBIF Backbone Taxonomy_](http://www.gbif.org/dataset/d7dddbf4-2cf0-4f39-9b2a-bb099caae36c)</sub>


**Preparación de los datos**

Elimine los facets o filtros que tenga activos. Para tener una aproximación inicial al funcionamiento del API diríjase a la columna _```recordedBy```_ y realice un _Text Facet_. Haga clic en la opción _```count```_ y seleccione al investigador(es) con mayor número de registros asociados (Vargas I) (Fig. 20).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava1.JPG" width=500>

<sup>_Figura 20. Filtro por conteo en ```recordedBy``` y selección de la opción con más registros._</sup>

Vaya a la columna _```scientificName```_. Es importante que estos nombres no contengan calificadores como ```aff.```, ```cf.```, ```sp.``` o ```spp.```, de ser este el caso, elimínelos como se mostró en los pasos anteriores y deje solamente como valor el nombre científico sin autoría.

**Cree la columna NomAPI**

Para realizar la validación a través del API es necesario que los espacios en blanco en cada nombre científico sean reemplazados por un valor que reconozca el API (“%20”).

Para ello vaya a _```Edit column > Add column based on this column```_ e introduzca la expresión (tal y como aparece) _```value.replace(" ","%20")_``` y nombre la columna *NomAPI* (Fig. 21).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava2.JPG" width=500>

<sup>_Figura 21. Creación de la nueva columna NomAPI_</sup>


**LLamado al API a partir del nombre científico**

Cree una nueva columna llamada *validTax* a partir de la columna NomAPI, para esto siga la ruta _```Edit column >  Add column by fetching URLs…```_ e introduzca la expresión _```"http://api.gbif.org/v1/species/match?strict=true&name="+value```_. En el campo _```Throttle delay```_ escriba ```5```, haga clic en _```OK```_ y espere a que finalice el proceso (Fig. 22).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava3.JPG" width=500>

<sup>_Figura 22. Creación de la nueva columna validTax_</sup>

``` warning
El tiempo de consulta depende de la cantidad de información, la velocidad de la red, y la memoria RAM del computador - para este caso solo tardará  un par de minutos.
```

Podrá observar que en cada celda de la columna _validTax_ aparecen expresiones  a partir del llamado al API de GBIF para cada nombre científico consultado (Fig. 23).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava4.JPG" width=500>

<sup>_Figura 23. Visualización de la columna validTax_</sup>

**Extracción de la información obtenida**

Para observar claramente los resultados, y obtener la validación delnombre científico agregue una columna basada en *validTax* _```Edit column >  Add column based on this column```_ llamada *Match* a partir de la columna *validTax*, para esto siga la ruta _```Edit column >  Add column based on this column```_ e introduzca la expresión _```value.parseJson().get("matchType")```_(Fig. 24).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava5.JPG" width=500>

<sup>_Figura 24. Creación de la columna Match a partir de la información obtenida del API_</sup>


**Validación del nombre científico**

Realice un Text facet en la columna *match* y seleccione _Fuzzy_, esta opción denota los nombres científicos con los que no hubo coincidencia exacta entre el conjunto de datos y el árbol taxonómico de GBIF. No se encuentra coincidencia total para este caso con *Dermanura cinereus* ni *Dermanura glaucus* (Fig. 25).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava6.JPG" width=400>

<sup>_Figura 25. Resultado del Facet para Fuzzy_</sup>

GBIF también le retorna a través del API una posible opción de nombres científicos válidos de acuerdo a los que no reconoció totalmente, evalué estos nombres e indentifique si debe hacer una corrección.

Agregue una nueva columna llamada *validName* a partir de la columna  *validTax*, para esto siga la ruta _```Edit column >  Add column based on this column```_ e introduzca la expresión _```value.parseJson().get("species")```_(Fig. 27) y haga clic en _```OK```_(Fig. 26).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava7.JPG" width=400>

<sup>_Figura 26. Creación de la nueva columna validName_</sup>

Haciendo un Text Facet en  la columna *validName* verá que GBIF reconoce que la especie que seguramente desea documentar es *Dermanura cinerea* y *Dermanura glauca*, respectivamente (Fig. 27A).
Corrija y edite entonces las inconsistencias en la columna _```scientificName```_ de acuerdo al *validName* (Fig. 27B).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava8.jpg" width=800>

<sup>_Figura 27. Corrección del nombre científico en OpenRefine_</sup>

Habiendo realizado el proceso de verificación y limpieza de nombres científicos elimine las columnas adicionales que se crearon para este fín (```NomAPI```, ```validTax```, ```Match``` y ```validName```). Para ello siga la ruta _```Edit column > Remove this column```_ (Fig. 28).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava9.jpg" width=400>

<sup>_Figura 28. Ruta para eliminar una columna_</sup>

## Paso 7 - Modificación masiva de celdas

Para hacer una modificación en todas las celdas del archivo, diríjase a la primera columna presente _```All```_ ,seleccione el menu desplegable y la opción _```Transform```_ (Fig. 29).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava10.jpg" width=400>

<sup>_Figura 29. Selección del menu para hacer el cambio masivo_</sup>

En la pestaña emergente introduzca la fórmula _```value.trim().replace(/\u00A0/,' ').replace(/\s+/,' ')```_, esta elimina dobles espacios, saltos de línea y algunos carácteres no reconocibles. Al hacer clic en _```OK```_ le mostrará otra pestaña donde puede elegir las columnas a las que desea aplicarles la modificación. Deje la opción por defecto con todas las columnas y de clic en _```OK```_ (Fig. 30).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava11.jpg" width=400>

<sup>_Figura 30. Pestaña para introducir la función de transformaciñon, y para seleccionar las columnas a las cuales se aplica la función _</sup>

``` warning
El proceso puede tardar algunos segundos dependiendo del número de columnas y celdas.
```

## Paso 8 - Exportación

### 8.1 Exportar un archivo

Existen múltiples maneras de exportar los archivos en _Open Refine_, la siguiente es la más confiable y con la mayor cantidad de opciones. Dirijase a la esquina superior derecha y siga la ruta _```Export >   Custom tabular exporter…```_ y le mostrara la ventada de exportación (Fig. 31).

En la pestaña _Content_ de la ventana emergente tiene encontrará varias opciones para personalizar la exportación, entre estas:

- **_Select and Order Columns to Export_**: le permite seleccionar las columnas y el orden en que se van a exportar.
- **_Ignore facets and filters and export all rows_**: si al momento de exportar el archivo tiene _Facets_ y Filtros activos, esta opción le permitirá ignorarlos, descargando así todo el conjunto de datos. 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ex1.jpg" width=800>

<sup>_Figura 31. Ruta para expotar el archivo y ventana content_</sup>

Vaya a la pestaña _Download_, donde podrá configurar el formano en el cuál se descargan los datos:

- **_Line-based text formats/Other formats_**: si va a descargar los datos en formato de texto plano le permite selecionar el separado de las olumnas.
- **_Line separator**_:si va a descargar los datos en formato de texto plano le permite seleccionar el separador de las filas.
- **_Character encoding_**: le permite seleccionar la codificación de los datos. Se recomienda siempre utilizar [**UTF-8**](https://es.wikipedia.org/wiki/UTF-8)

Para este caso, use *Other formats* y elija la opción ```Excel in XML(.xlsx)```, haga clic en ```Download``` y guarde su archivo (Fig. 32).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ex2.jpg" width=800>

<sup>_Figura 32. Selección del formato de descarga del conjunto de datos_</sup>

### 8.2 Exportar e importar un proyecto

_Open Refine_ también le ofrece la posibilidad de exportar el proyeco completo, esto permite descargar un archivo que contiene toda la información que tenia el proyecto (datos e histórico de cambios). Este archivo se puede utilizar para trabajar OpenRefine desde otro equipo. 
Para hacerlo diríjase a la esquina superior derecha y siga la ruta _```Export > OpenRefine project archive to file```_ y guarde su archivo (Fig. 33)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ex3.jpg" width=400>

<sup>_Figura 33. Exportación del proyecto_</sup>

```tip
Los proyectos exportados tienen la extensión".openrefine.tar.gz" y no es necesario descomprimirlos para usarlos. Solamente abralos con el siguiente procedimiento.
```

Para importar el proyecto, abra _Open Refine_ y diríjase a la pestaña _```Import Project```_. Haga clic en _```Choose File```_ y seleccione el archivo ```datos_Estructurados.openrefine.tar.gz``` y escoja la opción  _```Import Project```_ (Fig. 34).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ex4.jpg" width=400>

<sup>_Figura 34. Importación de un proyecto en OpenRefine_</sup>

****
**¡Felicitaciones!** :raised_hands: 
Has aprendido a utilizar _Open Refine_ para validdar y limpiar tus datos sobte biodiversidad.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> SiB Colombia (2020). Laboratorios de datos, Ciclo de formación virtual. Consultado a través del SiB Colombia. Disponible en https://sib-colombia.github.io/Formacion/

****

**Fuentes:**

Verborgh, R., & De Wilde, M. (2013). Using OpenRefine. Packt Publishing Ltd.

****
