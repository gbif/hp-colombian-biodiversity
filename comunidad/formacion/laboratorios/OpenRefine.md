---
layout: documentation
permalink: /formacion/laboratorios/OpenRefine
title: "Open Refine"
description: "Objetivo: Utilizar Open Refine para manejar, validar y limpiar de manera eficiente datos sobre biodiversidad, asegurando una mejor calidad para su publicación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# OpenRefine


**Objetivo**

Utilizar _OpenRefine_ para administrar, validar y limpiar de manera eficiente datos sobre biodiversidad, asegurando una mejor calidad para su publicación.

**Introducción**

<iframe width="560" height="315" src="https://www.youtube.com/embed/qsqihcrgtc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


**Sobre la Herramienta**

[_OpenRefine_](https://openrefine.org/) es un software creado con el objetivo de pulir datos crudos hasta convertirlos en diamantes, los cuales son activos valiosos en la era del _BigData_.

Este sofware permite visualizar y manipular datos tabulares, facilitando el mejoramiento de la calidad general de un conjunto de datos. Tiene la apariencia de un software tradicional de hoja de cálculo (similar a Excel), pero funciona como una base de datos. Esto significa que _OpenRefine_ no es adecuado para adicionar nuevas filas de datos, pero **es extremadamente poderoso cuando se trata de explorar, limpiar y vincular datos**. 

_OpenRefine_ es un _software_ de código abierto bajo una [licencia BSD](https://github.com/OpenRefine/OpenRefine/blob/master/LICENSE.txt) y se instala localmente, por lo que funciona como una aplicación web personal y de acceso privado a la que se accede desde un navegador web.

Esta herramienta sirve para **todo tipo de datos**. Sin embargo, en este laboratorio se explica su funcionamiento en el contexto de datos sobre biodiversidad, estandarizados en _Darwin Core_. Puede consultar mayor información de la herramienta en el [manual de usuario](https://docs.openrefine.org/) (en inglés).

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color azul y cursiva. Por ejemplo:  <span class="tag is-info is-light"><i>Paso 1 > Paso 2</i></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Requerimientos** 

- Navegador Chrome instalado y configurado como navegador predeterminado.

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
    No utilice _Internet Explorer_ para este laboratorio, ya que _OpenRefine_ no funciona bien en este navegador.
  </div>
</article>

**Archivo de trabajo**

- Descargue el archivo [<FONT FACE="monospace"><b>«datos_Estructurados.xlsx»</b></FONT>](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/datos_Estructurados.xlsx) para realizar el laboratorio.

--------

## Paso 1 - Instalación 

### Instalación en Windows
1. Descargue [<FONT FACE="monospace"><b>«OpenRefine versión 3.4.1 + Java para Windows»</b></FONT>](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-win-with-java-3.4.1.zip).
2. Descomprima el archivo descargado y copie la carpeta resultante en el disco local (C:/).
3. Abra la carpeta y haga doble clic en <FONT FACE="monospace"><b>«openrefine.exe»</b></FONT>.
4. Aparecerá una ventana de comando (que no debe cerrar) e inmediatamente después su navegador web mostrará una nueva ventana con la aplicación.


### Instalación en Mac
1. Descargue [<FONT FACE="monospace"><b>«OpenRefine versión 3.4.1 + Java para Mac»</b></FONT>](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-mac-3.4.1.dmg).
2. Haga doble clic sobre el archivo de descarga y arrastre el icono en la carpeta Aplicaciones.
4. Haga doble clic en el icono y su navegador web mostrará una nueva ventana con la aplicación.
5. Si al dar doble clic no abre _OpenRefine_ en el navegador,  escriba la siguiente dirección en el buscador: [http://127.0.0.1:3333/](http://127.0.0.1:3333/)

> Asegúrese de que su navegador predeterminado sea Google Chrome o Mozilla Firefox.

## Paso 2 - Crear un proyecto

Puede cargar datos con diferentes formatos y extensiones: TSV, CSV, SV, Excel (.xls y .xlsx), JSON, XML, RDF as XML y datos de Google Docs.


**2.1. Abrir un nuevo proyecto**

Abra _OpenRefine_ y seleccione la pestaña _**"Create Project"**_. Para cargar el archivo, siga la ruta <span class="tag is-info is-light"><i>Get data from > This Computer</i></span> y haga clic en <span class="tag is-warning is-light"><i>Choose Files</i></span> (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig1_OR_cargar.png" width=800>

<sup>_Figura 1. Creación de un proyecto en OpenRefine._</sup>

**2.2. Selección del archivo**

Seleccione el archivo <FONT FACE="monospace"><b>«datos_Estructurados.xlsx»</b></FONT> que descargó al incio del laboratorio y haga clic en <span class="tag is-warning is-light"><i>New project</i></span>Next (Fig. 1).

> Puede subir varios archivos a la vez, el software unirá los archivos con base en los encabezados de las columnas.
> 

**2.3. Configuración del archivo**

Tras seleccionar el archivo, aparecerá un panel de configuración. Este permite especificar el tipo de archivo que cargó y configurar la manera en la que los datos son leídos (Fig. 2). 

_OpenRefine_ hace una interpretación automática del tipo de archivo, la codificación del texto, las filas de encabezado, entre otros. El conjunto de datos de ejemplo de este laboratorio es interpretado de manera correcta y no necesita ajustes adicionales. 

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
    Si sube sus propios datos o utiliza otro formato, debe fijarse en la vista previa del archivo y ajustar la configuración de lectura detenidamente (Fig. 2).
  </div>
</article>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig2._OR_config.png">

<sup>_Figura 2. Opciones para configurar la lectura y carga de los datos para un archivo Excel (.xls y .xlsx)_: A. Tipo de archivo, B. Hojas a importar, C. Elección de filas, D. Carga de filas.</sup>

 - **A.** Tipo de archivo: permite configurar el tipo de la fuente de datos.
 - **B.** Hojas a importar: si carga uno o varios archivos con múltiples hojas, puede seleccionar cuáles hojas desea importar y cuáles no.
 - **C.** Selección de filas: permite seleccionar la fila que se convertirá en el encabezado de las columnas, ignorar filas, entre otros.
 - **D.** Carga de filas en blanco: permite especificar si se cargan filas vacías cargadas y cómo se realizará la carga. 

> **Character encoding**: al cargar datos en formato de texto plano, es posible que la previsualización muestre las tíldes (í) y las eñes (ñ) remplazadas por caracteres extraños. Si esto ocurre, seleccione la codificación UTF-8. Esto le permitirá resolver el problema, a menos que haya otro tipo de error en los datos. 

**2.4. Personalización del proyecto y carga del archivo**

En la esquina superior derecha, verá un cuadro de texto en el que puede modificar el nombre del proyecto. En ese cuadro, escriba **"Datos_OR"** y haga clic en el botón <span class="tag is-warning is-light"><i>Create Project</i></span> (Fig. 3). Opcionalmente, puede añadir _Tags_ (etiquetas) para organizar y filtrar los proyectos en la aplicación.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig3_OR_renombrar.png" width=700>

<sup>_Figura 3. Configuración del proyecto, ajuste de nombre, adición de etiquetas y creación._</sup>


Espere a que cargue el archivo. Este proceso puede tomar un tiempo, dependiendo del tamaño que tenga archivo.


## Paso 3 - _Faceting_

Es un método para filtrar los datos en conjuntos más pequeños, facilitando la validación y limpieza de los datos. Puede implementarse para texto, números y fechas.

### 3.1 Correcciones masivas

**3.1.1. Crear un _Text facet_**

Diríjase a la columna <span class="tag is-success is-light"><i>class</i></span>, haga clic en el menú de la columna y siga la ruta <span class="tag is-info is-light"><i>Facet > Text facet</i></span> (Fig. 4).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig4_OR_facet.png" width=350>

<sup>_Figura 4. Creación de un Text facet._</sup>

**3.1.2. Organizar el _Text facet_**

El <span class="tag is-warning is-light"><i>Text facet</i></span> creado aparecerá a la izquierda de la aplicación. Verá una ventana con el nombre de la columna y el _Facet_ que acaba de crear (Fig. 5). Haga clic en <span class="tag is-warning is-light"><i>count</i></span> para organizar las clases de la más a la menos abundante y en <span class="tag is-warning is-light"><i>name</i></span> para organizarlas en orden alfabético.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig5_OR_facet2.png" width=350>

<sup>_Figura 5. Vista del Text facet y las opciones para organizar las opciones de texto de la columna._</sup>

**3.1.3. Corrección de los datos**

Corrija las inconsistencias en los nombres de las clases **Aves** y **Mammalia**. Para esto, acerque el cursor al valor que desea corregir y haga clic en <span class="tag is-warning is-light"><i>Edit</i></span>. Luego, en el cuadro de texto que aparece, corrija el error y haga clic en <span class="tag is-warning is-light"><i>Apply</i></span> (Fig. 6). Todos los valores serán corregidos de manera automática y las celdas se transformarán de forma masiva.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig6_OR_classCorrect.png" width=500>

<sup>_Figura 6. Corrección masiva de la columna <span class="tag is-success is-light"><i>class</i></span> por medio de un Text facet._</sup>

Realice el mismo proceso con la columna <span class="tag is-success is-light"><i>basisOfRecord</i></span> y <span class="tag is-success is-light"><i>sex</i></span>, ajustándolas al vocabulario controlado de cada elemento (Revise el [Laboratorio de estandarización](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/DWC)) (Fig. 7).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig7_OR_otrosCorrect.png" width=500>

<sup>_Figura 7. Corrección masiva de las columnas <span class="tag is-success is-light"><i>basisOfRecord</i></span> y <span class="tag is-success is-light"><i>sex</i></span> por medio de un Text facet._</sup>


Al finalizar este ejercicio, diríjase al menú lateral y seleccione la opción <span class="tag is-warning is-light"><i>Remove All</i></span> (Fig. 8) para quitar todos los _facets_ y filtros que tenga en uso.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig8_OR_remover.png" width=350>

<sup>_Figura 8. Remover todos los facets y filtros activos_.</sup>


### 3.2 Limpieza de espacios en blanco

Diríjase a la columna <span class="tag is-success is-light"><i>individualCount</i></span>, haga clic en el menú de la columna y realice un _Text facet_.
A su izquierda aparecerá la ventana con el nombre de la columna y el facet que se realizó (Fig. 9).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig9_OR_individual.png" width=300>

<sup>_Figura 9. Vista del Text facet y las diferentes formas de documentación del elemento <span class="tag is-success is-light"><i>individualCount</i></span>._</sup>

Aunque parece que los datos no tienen errores, este procedimiento evidencia que el programa ha detectado espacios extra. Por tal motivo, el _facet_ muestra cuatro opciones diferentes para el valor **"1"**.
Corrija las inconsistencias desde el menú de la columna <span class="tag is-success is-light"><i>individualCount</i></span>, siguiendo la ruta <span class="tag is-info is-light"><i>Edit Cells > Common transforms > Trim leading and trailing whitespace</i></span>. Posteriormente, verá un mensaje de notificación, el cual indicará en cuántas celdas se eliminaron espacios (Fig. 10).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig10_OR_trimSpaces.png" width=600>

<sup>_Figura 10. Transformación de la columna para eliminar dobles espacios y espacios al final del texto._</sup>

Si observa la ventana del _facet_ de <span class="tag is-success is-light"><i>individualCount</i></span>, notará que ahora solo existe una opción y los espacios fueron eliminados.

Al finalizar este ejercicio, diríjase al menú lateral y seleccione la opción <span class="tag is-warning is-light"><i>Remove All</i></span> para quitar todos los _facets_ y filtros que tenga en uso.

### 3.3 Detección de duplicados

Diríjase a la columna <span class="tag is-success is-light"><i>catalogNumber</i></span>, haga clic en el menú de la columna y siga la ruta <span class="tag is-info is-light"><i>Facet > Customized facets > Duplicates facet</i></span>. La ventana del _facet_ aparecerá a la izquierda (Fig. 11).

Se evidencia que el programa ha detectado valores únicos <span class="tag is-warning is-light"><i>false</i></span> y valores duplicados <span class="tag is-warning is-light"><i>true</i></span> (Fig. 11). Haga clic en <span class="tag is-warning is-light"><i>true</i></span> y verá los registros. De esta manera, se pueden detectar los duplicados para un análisis posterior. En este caso, cambie el registro de **"Feb 2001"** por <span class="tag is-light"><b>46-2300MI2008AV0248</b></span>, tanto en <span class="tag is-success is-light"><i>catalogNumber</i></span> como en <span class="tag is-success is-light"><i>occurrenceIDr</i></span> (Fig. 11).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig11_OR_duplicates.png" width=600>

<sup>_Figura 11. Revisión de los registros duplicados y corrección de los identificadores._</sup>

Al finalizar este ejercicio, diríjase al menú lateral y seleccione la opción <span class="tag is-warning is-light"><i>Remove All</i></span> (Fig. 8) para quitar todos los _facets_ y filtros que tenga en uso.

## Paso 4 - Filtros

### 4.1 Corrección combinando filtros y funciones

**4.1.1. Corrección elemento <span class="tag is-success is-light"><i>scientificName</i></span>

Diríjase a la columna <span class="tag is-success is-light"><i>scientificName</i></span>, haga clic en el menú de la columna y luego en <span class="tag is-warning is-light"><i>Text filter</i></span>. Cuando aparezca la ventana del filtro, escriba <span class="tag is-light"><b>sp.</b> en el campo de texto y realice un <span class="tag is-warning is-light"><i>TText facet</i></span> en <span class="tag is-success is-light"><i>scientificName</i></span> para visualizar los registros que tienen el valor mencionado (Fig. 12).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig12_OR_sp.png" width=450>

<sup>_Figura 12. Aplicación de un filtro de texto a la columna <span class="tag is-success is-light"><i>scientificName</i></span> e identificación de nombres científicos a corregir._</sup>


Este tipo de identificación parcial (sp.) no debe documentarse en el elemento <span class="tag is-success is-light"><i>scientificName</i></span>. Para ello, se emplea el elemento _DwC_ <span class="tag is-success is-light"><i>verbatimTaxonRank</i></span>.

Realice un <span class="tag is-warning is-light"><i>Text facet</i></span> en <span class="tag is-success is-light"><i>verbatimTaxonRank</i></span> y reemplace masivamente las celdas vacías (<span class="tag is-light"><b>blank</b></span>) con <span class="tag is-light"><b>sp.</b></span>. Después, haga clic en <span class="tag is-warning is-light"><i>Apply</i></span> (Fig. 13).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig13_OR_sp2.png" width=450>

<sup>_Figura 13. Documentación masiva del elemento <span class="tag is-success is-light"><i>verbatimTaxonRank</i></span>._</sup>


Diríjase nuevamente al menú de la columna de <span class="tag is-success is-light"><i>scientificName</i></span> y siga la ruta <span class="tag is-info is-light"><i>Edit cells > Transform</i></span>. Posteriormente, ingrese el comando <span class="tag is-light"><b>value.replace</b></span> en el cuadro de texto **"_Expression_"**. Note que la pestaña **"_Preview_"** muestra una vista previa del resultado al aplicar el comando. Corrobore si es el cambio deseado (Fig. 14) y haga clic en <span class="tag is-warning is-light"><i>OK</i></span>. De inmediato, aparecerá un mensaje de confirmación de los cambios.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig14_OR_replace.png" width=800>

<sup>_Figura 14. Transformación masiva de los datos con el comando <span class="tag is-light"><b>value.replace</b></span> del lenguaje GREL de OpenRefine._</sup>

Empleando el comando <span class="tag is-light"><b>value.replace</b></span> se puede sustituir cualquier valor de una columna. Para ello, es necesario cambiar el contenido del paréntesis, escribiendo el valor a buscar encerrado entre comillas [ “ ] (ej. " sp.") y separado por una coma [ , ], seguido del valor de reemplazo entre comillas. En este caso, no hay valores de reemplazo, así que solamente se ponen las comillas [""].

> Para conocer más sobre el lenguaje de programación GREL de _OpenRefine_, diríjase a la [documentación de OpenRefine](https://docs.openrefine.org/manual/grelfunctions).

**4.1.2. Corrección elementos <span class="tag is-success is-light"><i>recordedBy</i></span> e <span class="tag is-success is-light"><i>ridentifiedBy</i></span>**

Corrija las columnas <span class="tag is-success is-light"><i>recordedBy</i></span> e <span class="tag is-success is-light"><i>ridentifiedBy</i></span>, empleando el comando <span class="tag is-light"><b>value.replace</b></span> del punto anterior. Para ello, reemplace en ambos elementos el carácter de separación entre los nombres <span class="tag is-light"><b>"; "</b></span> por el que acepta el estándar _Darwin Core_ para este elemento <<span class="tag is-light"><b>" | "</b></span>. (Revise el [Laboratorio de estandarización](https://hp-colombian-biodiversity.gbif-staging.org/formacion/laboratorios/DWC)).

Al finalizar este ejercicio, diríjase al menú lateral y seleccione la opción <span class="tag is-warning is-light"><i>Remove All</i></span> (Fig. 8) para quitar todos los _facets_ y filtros que tenga en uso.

### 4.2 Filtros con expresiones regulares

**4.2.1. Corrección elemento <span class="tag is-success is-light"><i>family</i></span>**

Diríjase a la columna <span style="color:MediumSeaGreen">**_family_**</span> y realice un <span class="tag is-warning is-light"><i>Text facet</i></span>. Haga clic en el menú de la columna y luego en <span class="tag is-warning is-light"><i>Text filter</i></span> para que aparezca la ventana del filtro.
Marque la casilla <span class="tag is-warning is-light"><i>regular expression</i></span> y escriba en el cuadro de texto la expresión <span class="tag is-success is-light"><i>.*(?:(?!ae).).$</i></span>. Esta expresión permite excluir todas las palabras de la columna que no terminan en <span class="tag is-success is-light"><i>ae</i></span>, que corresponden a las últimas letras de la declinación en latín para la categoría taxonómica de familia (*idae*, *ceae*) (Fig, 15).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig16_OR_regulasExp.png" width=500>

<sup>_Figura 15. Uso de expresiones regulares en GREL para filtrar la columna <span class="tag is-success is-light"><i>family</i></span>._</sup>

Luego de realizar el procedimiento anterior, observará que los registros que no corresponden a la categoría de familia han sido filtrados. Para editarlos, utilice las opciones aprendidas en pasos previos. En este caso particular, reemplace  <span class="tag is-success is-light"><i>Bolitoglossa</i>, que corresponde a un género, por <span class="tag is-success is-light"><i>Plethodontidae</i>, la familia a la que pertenece el nombre científico (Fig. 15).

> Para conocer más acerca de las expresiones regulares, visite la [documentación de OpenRefine](https://docs.openrefine.org/manual/expressions#regular-expressions).

Al finalizar este ejercicio, diríjase al menú lateral y seleccione la opción <span class="tag is-warning is-light"><i>Remove All</i></span> (Fig. 8) para quitar todos los _facets_ y filtros que tenga en uso.

**4.2.2. Corrección elementos <span class="tag is-success is-light"><i>scientificName</i></span> e <span class="tag is-success is-light"><i>identificationQualifier</i></span>** 

Diríjase a la columna <span class="tag is-success is-light"><i>scientificName</i></span>, haga clic en el menú y elija la opción <span class="tag is-warning is-light"><i>Text filter</i></span>. Cuando aparezca la ventana del filtro, marque la casilla <span class="tag is-warning is-light"><i>regular expression</i></span> y escriba en el campo de texto la expresión <span class="tag is-success is-light"><i>[.]</i></span>. Luego, realice un <span class="tag is-warning is-light"><i>Text facet</i></span> para visualizar los registros con este  elemento (Fig. 16).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig17_OR_qualifier.png" width=500>

<sup>_Figura 16. Uso de expresiones regulares en GREL para filtrar y corregir las columnas <span class="tag is-success is-light"><i>scientificName</i></span> e <span class="tag is-success is-light"><i>identificationQualifier</i></span>._</sup>

Al terminar el procedimiento anterior, observará los registros que cumplen con el criterio de la expresión regular. Dado que el elemento <span class="tag is-success is-light"><i>identificationQualifier</i></span> está diseñado para almacenar este tipo de información, el elemento <span class="tag is-success is-light"><i>scientificName</i></span> no debe tener estos calificadores.

Para ajustar ambos elementos, aplique un <span class="tag is-warning is-light"><i>Text facet</i></span> en <span class="tag is-success is-light"><i>identificationQualifier</i></span> y reemplace el <span class="tag is-light"><b>blank</b></span> por <span class="tag is-light"><b>cf. sowelli</b></span>; además, borre este mismo texto en el <span class="tag is-success is-light"><i>scientificName</i></span> (Fig. 16). De esta manera, se corregirán masivamente todos los campos.

<div class="notification is-info is-light">
  <b>Nota:</b>El grado de incertidumbre de la identificación puede indicarse agregando varios calificativos, como **"aff."** y **"cf."**, al nombre científico. El calificativo se escribe después del elemento al que corresponde la incertidumbre de identificación (género o especie).
</div>


- **aff.**: similar o limítrofe, indica que otra especie tiene afinidad con la especie mencionada, pero no es idéntica a ella.
- **cf.**: comparar con, describe un espécimen que es difícil de identificar e indica diversos grados o tipos de incertidumbre sobre el taxon, los cuales pueden usarse de manera diferente según el autor.
````

Finalmente, debe documentarse el género <span class="tag is-light"><b>Carollia</b></span> en <span class="tag is-success is-light"><i>scientificName</i></span> y asociarlo con el calificativo <span class="tag is-light"><b>cf. sowelli</b></span> en <span class="tag is-success is-light"><i>identificationQualifier</i></span> (Fig. 17).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig17_OR_Resulqualifier.png" width=500>

<sup>_Figura 17. Documentación corregida y correcta de los elementos <span class="tag is-success is-light"><i>scientificName</i></span> e <span class="tag is-success is-light"><i>identificationQualifier</i></span>._</sup>

Al finalizar este ejercicio, diríjase al menú lateral y seleccione la opción <span class="tag is-warning is-light"><i>Remove All</i></span> (Fig. 8) para quitar todos los _facets_ y filtros que tenga en uso.

## Paso 5 - Conjuntos

Diríjase a la columna <span class="tag is-success is-light"><i>recordedBy</i></span> y despliegue el menú. Posteriormente, haga clic en <span class="tag is-warning is-light"><i>Text facet</i></span> para que la ventana del facet con más de 200 opciones (_choices_) diferentes (Fig. 18).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig19_OR_cluster1.png" width=320>

<sup>_Figura 18. Facet y opciones del elemento <span class="tag is-success is-light"><i>recordedBy</i></span>._</sup>


En la parte superior derecha, verá el botón <span class="tag is-warning is-light"><i>Cluster</i></span>. Al hacer clic en él (Fig. 18), aparecerá la ventana de **"_Cluster &  Edit_"** para la columna <span class="tag is-success is-light"><i>recordedBy</i></span> (Fig. 19).

Podrá ver la siguiente información:

- ***Cluster size***: indica la cantidad de versiones del dato que el algoritmo identifica como similares.
- ***Row count:*** es el número de registros por cluster.
- ***Values in cluster:*** son los valores seleccionados por el algoritmo para esa agrupación y el número de registros por valor.
- ***Merge?:*** un cuadro para seleccionar si los valores se fusionan en el valor que propone el algoritmo por defecto o el documentado por el usuario. 
- ***New cell value:*** en este campo de texto, se puede escribir un valor completamente nuevo para el _cluster_. Además, permite asignar cualquier valor por defecto haciendo clic sobre dicho valor.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig20_OR_cluster2.png" width=800>

<sup>_Figura 19. Detalle de la ventana **"Cluster & Edit"** para hacer realizar clusters y las opciones de configuración disponibles._</sup>


Vaya a <span class="tag is-warning is-light"><i>Keying Function</i></span>, seleccione <span class="tag is-warning is-light"><i>ngram-fingerprint</i></span> y escriba <span class="tag is-light"><b>1</b></span> en <span class="tag is-warning is-light"><i>Ngram Size</i></span> (Fig. 19).

> Para conocer más acerca de los algoritmos, visite la [documentación de _OpenRefine_](https://docs.openrefine.org/manual/cellediting#clustering-methods).

- Asigne un valor nuevo para el primer _cluster_. Para hacerlo, vaya al cuadro de texto de <span class="tag is-warning is-light"><i>New cell value</i></span> y escriba <span class="tag is-light"><b>David H | Arango A | Bedoya J</b></span> (con espacios sencillos). Posteriormente, haga check en el cuadro de <span class="tag is-warning is-light"><i>Merge?</i></span> para ese _cluster_ (Fig. 19).

- Para el segundo _cluster_, haga clic en <span class="tag is-warning is-light"><i>Vargas I</i></span> (la primera opción sin espacios adicionales). Al hacer esto, el valor en <span class="tag is-warning is-light"><i>New cell value</i></span> cambiará y la casilla <span class="tag is-warning is-light"><i>Merge?</i></span> se marcará automáticamente (Fig. 19).

- Con respecto a los _clusters_ restantes, evalúe si se deben agrupar o no, de acuerdo a las opciones disponibles. Si considera que se deben a grupar, marque la casilla <span class="tag is-warning is-light"><i>Merge?</i></span>.

Una vez que elija las entradas que desee fusionar en los _clusters_ mencionados, haga clic en <span class="tag is-warning is-light"><i>Merge Selected & close</i></span> para agrupar los valores y volver a la ventana principal. 

Observe que la cantidad de opciones de datos disminuyó y que la primera entrada de nombres ha cambiado. Es decir, la información se simplificó y organizó correctamente gracias a este proceso.

Al finalizar este ejercicio, diríjase al menú lateral y seleccione la opción <span class="tag is-warning is-light"><i>Remove All</i></span> (Fig. 8) para quitar todos los _facets_ y filtros que tenga en uso.


## Paso 6 - Servicios externos vía API's

En este ejercicio se utiliza el [API](https://www.gbif.org/developer/species)([Ver definición en el glosario](/Formacion/LAB/lab02/#glosario)) de [GBIF](https://www.gbif.org) para validar la taxonomía de una lista de nombres.

**Árbol taxonómico GBIF**

GBIF fácilita un árbol taxonómico robusto a partir de la agrupación de reconciliación de diversos grupos biológicos y proveedores de contenido (Tabla 1), los cuales se encuentran respaldados por comunidades de científicos. Este árbol integra múltiples fuentes de datos, lo que facilita las búsquedas y descargas del portal. Además, se actualiza constantemente.


<sup>Tabla 1. Principales fuentes que contribuyen a la consolidación del árbol taxonómico de GBIF.</sup>

| Proveedor * | Enlace | 
| -------- | -------- | 
| CoL | [http://www.catalogueoflife.org/](http://www.catalogueoflife.org/) |
| _International Barcode of Life project_ (iBOL)   | [https://ibol.org/](https://ibol.org/)  |
| _World Register of Marine Species_ (WoRMS)   | [http://www.marinespecies.org/](http://www.marinespecies.org/)   |
| _Index Fungorum_	   | [http://www.indexfungorum.org/](http://www.indexfungorum.org/)   |
| _Integrated Taxonomic Information System_ (ITIS)  | [http://www.itis.gov/](http://www.itis.gov/)  |
| _International Plant Names Index_	   | [http://www.ipni.org/](http://www.ipni.org/)   |
| _The Paleobiology Database_   | [http://www.paleodb.org/](http://www.paleodb.org/)   |

> Para acceder a una lista completa de los proveedores y descripción de los mismos, ingrese al [GBIF _Backbone Taxonomy_](http://www.gbif.org/dataset/d7dddbf4-2cf0-4f39-9b2a-bb099caae36c)
>

**Preparación de los datos**

En primer lugar, elimine los _facets_ o filtros que tenga activos. Para tener una aproximación inicial al funcionamiento del API. diríjase a la columna <span class="tag is-success is-light"><i>recordedBy</i></span> y realice un _Text facet_. Haga clic en la opción <span class="tag is-warning is-light"><i>count</i></span> y seleccione al investigador con más registros asociados (Vargas I) (Fig. 20).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava1.png" width=700>

<sup>_Figura 20. Filtro por conteo en <span class="tag is-success is-light"><i>recordedBy</i></span> y selección de la opción con más registros._</sup>

Vaya a la columna <span class="tag is-success is-light"><i>scientificName</i></span>. Es importante que estos nombres no contengan calificadores como "aff.", "cf.", "sp." o "spp.". Si este el caso, elimínelos como se mostró en los pasos anteriores y deje solamente el nombre científico sin autoría.

**Creación de la columna NomAPI**

Para realizar la validación a través del API, es necesario que los espacios en blanco de cada nombre científico sean reemplazados por un valor que reconozca el API (“%20”).

Para ello vaya a <span class="tag is-info is-light"><i>Edit column > Add column based on this column</i></span> y escriba la expresión (tal y como aparece)  <span class="tag is-light"><b>value.replace(" ","%20")</b></span>. Por último, nombre la columna como **"NomAPI"** (Fig. 21).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava2.PNG" width=700>

<sup>_Figura 21. Creación de la nueva columna **"NomAPI"**._</sup>


**LLamado al API a partir del nombre científico**

Cree una nueva columna llamada _**"validTax"**_ a partir de la columna _**"NomAPI"**_. Para esto, siga la ruta <span class="tag is-info is-light"><i>Edit column >  Add column by fetching URLs…</i></span>Edit column > y escriba la expresión <span class="tag is-light"><b>"http://api.gbif.org/v1/species/match?strict=true&name="+value</b></span>. En el cuadro de texto <span class="tag is-warning is-light"><i>Throttle delay</i></span>, escriba <span class="tag is-light"><b>5</b></span>, haga clic en <span class="tag is-warning is-light"><i>OK</i></span> y espere a que finalice el proceso (Fig. 22).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava3.PNG" width=700>

<sup>_Figura 22. Creación de la nueva columna **"validTax"**._</sup>

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
    El tiempo de consulta depende de la cantidad de información, la velocidad de la red, y la memoria RAM del computador. Para este ejercicio, solo tardará  un par de minutos.
  </div>
</article>

Podrá observar que en cada celda de la columna **"validTax"** aparecen expresiones a partir del llamado al API de GBIF para cada nombre científico consultado (Fig. 23).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava4.PNG" width=800>

<sup>_Figura 23. Visualización de la columna **"validTax"**._</sup>

**Extracción de la información obtenida**

Con el fin de evidenciar claramente los resultados de la validación del nombre científico, agregue una columna basada en _**"validTax"**_. Para esto, siga la ruta <span class="tag is-info is-light"><i>Edit column > Add column based on this column</i></span>. Luego, nombre la columna como <span class="tag is-light"><b>Match</b></span> y escriba la expresión <span class="tag is-light"><b>value.parseJson().get("matchType")</b></span>. Por último, haga clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig. 24).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava5.PNG" width=700>

<sup>_Figura 24. Creación de la columna **"Match"** a partir de la información obtenida del API._</sup>


**Validación del nombre científico**

Realice un _Text facet_ en la columna _**"Match"**_ y seleccione <span class="tag is-warning is-light"><i>Fuzzy</i></span>. Esta opción denota los nombres científicos con los que no hubo coincidencia exacta entre el conjunto de datos y el árbol taxonómico de GBIF. En este ejercicio, no se encuentra coincidencia total con *Dermanura cinereus* ni *Dermanura glaucus* (Fig. 25).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava6.JPG" width=350>

<sup>_Figura 25. Resultado del Facet para <span class="tag is-warning is-light"><i>Fuzzy</i></span>._</sup>

> A través del API, GBIF también ofrece una posible opción de nombres científicos válidos de acuerdo a los que no reconoció totalmente. Es pertinente que evalué estos nombres e indentifique si debe hacer una corrección.
>

Agregue una nueva columna llamada _**"validName"**_ a partir de la columna  _**validTax*¨_. Para hacerlo, siga la ruta <span class="tag is-info is-light"><i>Edit column > Add column based on this column</i></span>. Luego, nombre la columna como <span class="tag is-light"><b>Match</b></span> y escriba la expresión <span class="tag is-light"><b>value.parseJson().get("species")</b></span>. Por último, haga clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig. 26).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava7.PNG" width=700>

<sup>_Figura 26. Creación de la nueva columna **"validName"**._</sup>

Haciendo un _Text facet_ en  la columna _**"validName"**_, verá que GBIF reconoce que las especies a documentar son *Artibeus cinereus* y *Artibereus glaucus*, respectivamente (Fig. 27A).
Corrija y edite entonces las inconsistencias en la columna <span class="tag is-success is-light"><i>scientificName</i></span>, de acuerdo al **"validName"** (Fig. 27B).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava8.png" width=700>

<sup>_Figura 27. Corrección del nombre científico en OpenRefine. A. Filtro para el nombre científico y la sugerencia de GBIF. B. Corrección en el nombre científico._</sup>

Después de realizar el proceso de verificación y la limpieza de nombres científicos, elimine las columnas adicionales que se crearon para este fín (_**"NomAPI"**_, _**"validTax"**_, _**"Match"**_ y **"validName"**). Para ello, siga la ruta <span class="tag is-info is-light"><i>Edit column > Remove this column</i></span> (Fig. 28).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava9.png" width=400>

<sup>_Figura 28. Ruta para eliminar una columna._</sup>

## Paso 7 - Modificación masiva de celdas

Para hacer una modificación en todas las celdas del archivo, diríjase a la primera columna presente _**"All"**_, despliegue el menú y seleccione la opción <span class="tag is-warning is-light"><i>Transform</i></span> (Fig. 29).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava10.jpg" width=600>

<sup>_Figura 29. Selección del menú para hacer el cambio masivo._</sup>

En la pestaña emergente, introduzca la fórmula <span class="tag is-light"><b>value.trim().replace(/\u00A0/,' ').replace(/\s+/,' ')</b></span>. Este comando elimina dobles espacios, saltos de línea y algunos caracteres no reconocibles. Al hacer clic en <span class="tag is-warning is-light"><i>OK</i></span>, verá otra pestaña para elegir las columnas a modificar. Deje la opción por defecto con todas las columnas y de clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig. 30).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ava11.png" width=800>

<sup>_Figura 30. Pestaña para introducir la función de transformación y seleccionar las columnas a las cuales se aplica la función._</sup>

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
   El proceso puede tardar algunos segundos dependiendo del número de columnas y celdas.
  </div>
</article>

## Paso 8 - Exportación

### 8.1 Exportar un archivo

Existen múltiples maneras de exportar los archivos en _OpenRefine_. La siguiente es la más confiable porque cuenta con la mayor cantidad de opciones:
  
Dirijase a la esquina superior derecha y siga la ruta <span class="tag is-info is-light"><i>Export > Custom tabular exporter</i></span> para acceder a la ventana de exportación (Fig. 31).

En la pestaña _**"Content"**_ de la ventana emergente, encontrará varias opciones para personalizar la exportación. Algunas de esas opciones son:

- **_Select and Order Columns to Export_**: le permite seleccionar las columnas y el orden en que se van a exportar.
- **_Ignore facets and filters and export all rows_**: si al momento de exportar el archivo tiene _facets_ y filtros activos, esta opción le permitirá ignorarlos para descargar todo el conjunto de datos. 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ex1.png" width=800>

<sup>_Figura 31. Ruta para expotar el archivo y ventana **"content"**._</sup>

Vaya a la pestaña _**Download**_, allí podrá configurar el formano en el cuál se descargan los datos:

- **_Line-based text formats/Other formats_**: permite ajustar el separado de las columnas si se van a descargar los datos en formato de texto plano.
- **_Line separator_**: permite seleccionar el separador de las filas si se van a descargar los datos en formato de texto plano.
- **_Character encoding_**: permite seleccionar la codificación de los datos. Se recomienda siempre utilizar [**UTF-8**](https://es.wikipedia.org/wiki/UTF-8).

Para este caso, use *Other formats* y elija la opción <span class="tag is-warning is-light"><i>Excel in XML(.xlsx)</i></span>, haga clic en <span class="tag is-warning is-light"><i>Download(.xlsx)</i></span> y guarde su archivo (Fig. 32).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_EX2.png" width=700>

<sup>_Figura 32. Selección del formato de descarga del conjunto de datos._</sup>

### 8.2 Exportar e importar un proyecto

_OpenRefine_ también le ofrece la posibilidad de exportar el proyeco completo. Lo anterior permite descargar un archivo que contiene toda la información del proyecto (datos e histórico de cambios). Este archivo se puede utilizar para trabajar en el mismo proyecto de _OpenRefine_ desde otro equipo. 
Para hacerlo, diríjase a la esquina superior derecha, siga la ruta <span class="tag is-info is-light"><i>Export > OpenRefine project archive to file</i></span> y guarde su archivo (Fig. 33).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ex3.png" width=350>

<sup>_Figura 33. Exportación del proyecto._</sup>

<div class="notification is-info is-light">
  <b>Tip:</b> Los proyectos exportados tienen la extensión".openrefine.tar.gz" y no es necesario descomprimirlos para usarlos. Solamente abralos con el siguiente procedimiento.
</div>

Para importar el proyecto, abra _OpenRefine_ y diríjase a la pestaña <span class="tag is-warning is-light"><i>Import Project</i></span>. Posteriormente, haga clic en <span class="tag is-warning is-light"><i>Choose File</i></span>, seleccione el archivo <FONT FACE="monospace"><b>«Datos_OR.openrefine.tar.gz»</b></FONT> y elija la opción <span class="tag is-warning is-light"><i>Import Project</i></span> (Fig. 34).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig_OR_Ex4.png" width=600>

<sup>_Figura 34. Importación de un proyecto en OpenRefine._</sup>

## Paso 9 - Verificación del resultado

Compare sus resultados con el siguiente archivo, validado según las definiciones del estándar *Darwin Core*, para identificar aciertos y posibilidades de mejora. Recuerde importarlo como un proyecto en _OpenRefine_. (Paso 8.2).

**¿Qué diferencias encontró con sus resultados?**

* [<FONT FACE="monospace"><b>«Archivo validado»</b></FONT>](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/Datos_OR_Solucion.openrefine.tar.gz)

****
**¡Felicitaciones!**
Ha aprendido a utilizar _OpenRefine_ para validar y limpiar sus datos sobre biodiversidad.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>

**Fuentes:**

Verborgh, R., & De Wilde, M. (2013). Using OpenRefine. Packt Publishing Ltd.

