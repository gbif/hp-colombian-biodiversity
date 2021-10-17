---
layout: documentation
permalink: /formacion/laboratorios/TNRS
title: "TNRS"
description: "Objetivo: Realizar una validación taxonómica de los nombres científicos para detectar posibles errores de formato o taxonomía"
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Validación taxonómica - Taxonomic Name Resolution Service (TNRS) para plantas

**Objetivo**

Realizar una validación taxonómica automática de los nombres científicos de plantas con TNRS.

**Introducción**

Video introductorio de las tres guías de validación taxonómica, el cual da un contexto general sobre las herramientas y su uso. Si lo prefiere, puede seguir el paso a paso de la guía directamente.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ve7CgZlZhj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/>
**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Sobre la herramienta**

La herramienta TNRS, por su sigla en inglés (_Taxonomic Name Resolution Service_), es una aplicación originalmente desarrollada por _iPlant_ que permite estandarizar los nombres científicos botánicos a partir de fuentes taxonómicas como [_Tropicos_](https://www.tropicos.org/home), [USDA](https://plants.sc.egov.usda.gov/home/) y [TPL](http://www.theplantlist.org/). La validación taxonómica con TNRS sirve para:
- Identificar errores ortográficos o de tipeo.
- Separar el nombre científico en diferentes elementos _Darwin Core_ (<span class="tag is-success is-light"><i>genus</i></span>, <span class="tag is-success is-light"><i>specificEpithet</i></span>, <span class="tag is-success is-light"><i>scientificNameAuthorship</i></span>).
- Evaluar la coincidencia del nombre científico, familia, género, epiteto específico e infraespecífico y autoría, al comparar los datos con las fuentes taxonómicas de referencia.
- Listar otras posibles coincidencias de un nombre científico con su respectivo enlace a la fuente.
- Identificar sinonimias y nombres actualmente aceptados.

**Enlace**

_Taxonomic Name Resolution Service_ (TNRS): [https://tnrs.biendata.org/](https://tnrs.biendata.org/)

**Requerimientos** 

* Para realizar este ejercicio, es necesario contar con un procesador de archivos de texto como Excel.

**Archivo de trabajo**

Descargue el archivo [<FONT FACE="monospace"><b>«Datos_TNRS.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Datos_TNRS.xlsx) para realizar el laboratorio.

--------

## Paso 1 - Ingreso

Ingrese a la aplicación [TNRS](https://tnrs.biendata.org/) y familiarícese con las opciones. La herramienta está divida en dos partes: la primera (Fig. 1A) parmite colocar la lista de nombres científicos; la segunda (Fig. 1B) permite seleccionar las configuraciones.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_TNRS_Aplicacion.png" width=800>

<sup>_Figura 1. Descripción de las opciones de la herramienta: A. Lista de nombres científicos a validar, B. Configuraciones de la herramienta._</sup>


## Paso 2 - Carga de los datos

Ingrese al archivo [<FONT FACE="monospace"><b>«Datos_TNRS.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Datos_TNRS.xlsx), seleccione la columna <span class="tag is-success is-light"><i>scientificName</i></span> y copie la totalidad de esta sin incluir el encabezado.

Diríjase a la herramienta de TNRS y pegue los datos previamente copiados en la sección _**"Scientific names to check"**_ (Fig. 1A). Asegúrese de que haya un solo nombre por línea y haga clic en <span class="tag is-warning is-light"><i>SUBMIT</i></span> (Fig. 2).

<div class="notification is-info is-light">
  <b>Tip:</b> La herramienta evalúa hasta 5 000 nombres científicos por ejecución. Por lo tanto, si intenta evaluar un mayor número, obtendrá un mensaje de error.
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_TNRS_Submit.png" width=800>

<sup>_Figura 2. Carga de datos en la herramienta._</sup>

## Paso 3- Selección de configuraciones

### 3.1. Modo de procesamiento 

En la configuración _**"Processing Mode"**_ (Modo de procesamiento), tiene dos opciones:

* <span class="tag is-warning is-light"><i>Perform name resolution</i></span> **(Ejecutar resolución de nombres)**: separa el nombre científico en sus componentes y los valida con base en una o varias fuentes (resolución).
* <span class="tag is-warning is-light"><i>Parse names only</i></span> **(Separar nombres únicamente)**: separa el nombre científico en sus componentes sin evaluar la coincidencia del nombre con las fuentes.

Para efectos de este ejercicio, seleccione la opción <span class="tag is-warning is-light"><i>Perform name resolution</i></span>.

<div class="notification is-info is-light">
  <b>Nota:</b> Si selecciona la opción <b><i>Parse names only</i></b>, no es posible escoger la fuente de datos porque el proceso de validación no se lleva a cabo.
</div>

### 3.2. Clasificación

La configuración de _**"Family Classification"**_ permite seleccionar las familias según la clasificación APG IV. En este momento, solo está disponible la opción <span class="tag is-warning is-light"><i>TROPICOS</i></span>. Sin embargo, otras opciones pueden ser agregadas a futuro.

### 3.3. Fuente

En la configuración de _**"Source"**_, puede elegir las fuentes base para contrastar los datos. Es posible elegir una o varias fuentes: 
* [_Tropicos_](https://www.tropicos.org/home)
* [USDA](https://plants.sc.egov.usda.gov/home/) 
* [TPL](http://www.theplantlist.org/)

Mantenga todas las fuentes seleccionadas. Por último, haga clic en el botón <span class="tag is-warning is-light"><i>submit</i></span> para iniciar la validación y espere a que se generen los resultados.


## Paso 4 - Revisión preliminar de resultados

Esta revisión se realiza directamente en la herramienta, donde verá una tabla con los resultados del proceso si la ejecución fue exitosa y algunas opciones de configuración adicionales (Fig 3).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_TNRS_TablaResultados.png" width=800>

<sup>_Figura 3. Configuraciones presentes en la revisión preliminar: A. Opciones adicionales de configuración, B. Columnas para la revisión de los resultados de validación, C. Paginación de los resultados._</sup>

### 4.1. Configuraciones adicionales

Después de realizar la validación, se activan algunas opciones adicionales para filtrar los resultados, cambiar el puntaje de coincidencia y descargar la validación.

* <span class="tag is-warning is-light"><i>BEST MATCH SETTINGS</i></span>: filtra los resultados según el puntaje de coincidencia (_Overall Score_) o según la taxonomía superior (_Higher Taxonomy_). 

<div class="notification is-info is-light">
  <b>Nota:</b> Esta opción está temporalmente fuera de servicio, así que no verá ningún cambio en los resultados si la usa.
</div>

* <span class="tag is-warning is-light"><i>MATCH</i></span>: permite cambiar el puntaje de coincidencia (_Match_) de la validación. Entre más alto sea (cercano o igual a 1), la coincidencia tendrá que ser más exacta respecto a la fuente. Entre más cercano a 0, la coincidencia será menos precisa y le mostrará más resultados posibles de contraste (Fig 4).

Para este ejercicio, lo ideal es dejar el valor por defecto (<span class="tag is-warning is-light"><i>SET DEFAULT</i></span>), el cual corresponde a 0.53.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_TNRS_Threshold.png" width=800>

<sup>_Figura 4. Cambio en el valor de MATCH._</sup>

* <span class="tag is-warning is-light"><i>DOWNLOAD DATA</i></span>: descarga de los resultados. Al hacer clic en esta opción, una ventana emergenten mostrará las opciones de descarga (se abordará detalladamente en el paso 5).

* <span class="tag is-warning is-light"><i>DOWNLOAD SETTINGS</i></span>: se descarga un archivo de texto plano con todas las configuraciones de la validación.


### 4.2. Tabla de resultados

Los resultados se muestran en 8 columnas, las cuales se enlistan a continuación: 

> Puede organizar la información de forma ascendente o descendente, haciendo clic en el nombre de cada columna (Fig. 3B).
>

* _**"Warnings"**_: señala las inconsistencias del nombre validado a partir de un ícono de alerta (Fig 5). Haga clic en el símbolo para obtener una explicación adicional del problema. Las alertas más comunes son:

    - <span class="tag is-light"><b><i>Ambiguos match</i></b></span>: hay más de un nombre sugerido con el mismo puntaje de coincidencia y estado taxonómico.
    - <span class="tag is-light"><b><i>Partial match</i></b></span>: el nombre sugerido pertenece a una catageoría taxonómica superior a la del nombre original.
    - <span class="tag is-light"><b><i>Better higher taxonomic match available</i></b></span>: existe otro nombre que tiene mejor coincidencia con la taxonomía superior. 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_TNRS_warning.png" width=800>

<sup>_Figura 5. Ejemplos de problemas._</sup>

* _**"Name submitted"**_: el nombre científico original ingresado en la herramienta.
* _**"Name Matched"**_: Nombre científico con el mejor puntaje de coincidencia. En esta columna, puede encontrar un mensaje <span class="tag is-warning is-light"><i>+n more</i></span>. La expresión <span class="tag is-warning is-light"><i>+n</i></span> es el número de posibles coincidencias encontradas para ese nombre. Dé clic al botón <span class="tag is-warning is-light"><i>+n more</i></span> para ver la pestaña adicional, donde puede seleccionar qué taxonomía prefiere.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_TNRS_changeselected.png" width=800>

<sup>_Figura 6. Cambio en el tipo de taxonomía._</sup>

<div class="notification is-info is-light">
  <b>Nota:</b> Por el momento, la herramienta está presentando fallas al momento de cambiar la taxonomía con la opción <b><i>+n more</i></b>.
</div>

* _**"Source"**_: la fuente donde se encontró el nombre con el mejor puntaje.
* _**"Overall Score"**_: un puntaje que indica la similitud entre el nombre original y el encontrado, donde 1 es el valor mas alto de coincidencia.
* _**"Taxonomic Status"**_: el estado taxonómico del nombre con el mejor puntaje. Por ejemplo, aceptado, inválido, sinónimo, etc.
* _**"Accepted Name"**_: el nombre canónico aceptado para el taxón.
* _**"Details"**_: muestra mayor detalle de la validación a partir de columnas con información adicional.

Finalmente, se puede modificar el número de filas visualizadas por página y navegar entre las diferentes páginas (Fig. 3C). 

## Paso 5 - Descarga de resultados

Haga clic en el botón <span class="tag is-warning is-light"><i>DOWNLOAD DATA</i></span>. Posteriormente, encontrará las siguientes secciones en la ventana emergente: 

* _**"File Name"**_: nombre del archivo de descarga. Por defecto, aparece <span class="tag is-light"><b>tnrs_result</b></span>.

* _**"Download format"**_: formato de descarga del archivo. Esta sección brinda dos opciones:

    * <span class="tag is-warning is-light"><i>CSV</i></span>: del inglés "_Comma separted value_", es un archivo de texto plano separado por comas (,). 
    * <span class="tag is-warning is-light"><i>TSV</i></span>: del inglés "_Tab separted value_", es un achivo de texto plano separado por tabuladores.

* _**Results to Download**_: permite seleccionar el tipo de resultado a descargar. Esta sección brinda dos opciones:

    * <span class="tag is-warning is-light"><i>Best Matches Only</i></span>: en caso de que un nombre científico tenga varias coincidencias, se descargará la alternativa con el puntaje de coincidencia más alto.
    * <span class="tag is-warning is-light"><i>All Matches</i></span>: en caso de que un nombre científico tenga varias coincidencias, se descargan todas las alternativas para dicho nombre (<span class="tag is-warning is-light"><i>+n more</i></span>).

Configure las descargas como se muestra en la Figura 7 y haga clic en <span class="tag is-warning is-light"><i>DOWNLOAD</i></span>.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_TNRS_Download.png" width=800>

<sup>_Figura 7. Descarga de los datos._</sup>


## Paso 6 - Visualización de resultados

Los resultados se descargarán como un archivo de texto plano. Por consiguiente, puede abrirlos en un editor de texto como Excel u _OpenRefine_. Si necesita una guía de cómo abrir este tipo de archivo en Excel, lo invitamos a consultar la [Guía de importación de resultados en Excel](https://sib-colombia.github.io/Formacion/LAB/otros/txt_to_excel.html).

## Paso 7 - Revisión de resultados y modificación de datos

El archivo de la validación tiene un total de 47 columnas. Entre estas, se encuentran las 7 columnas vistas en la previsualización de resultados y varias columnas adicionales que indican la taxonomía obtenida.

<div class="notification is-info is-light">
  <b>Tip:</b> La herramienta descarga solamente el resultado correspondiente a los nombres científicos únicos. Es decir, aunque en este ejercicio se cargaron 34 nombres científicos, solo se descargarán las 31 filas con nombres científicos únicos.
</div>

A continuación, se describen algunas de las columnas adicionales que encontrará en la descarga para validar los resultados con mayor detalle:

- _**"Author_matched"**_: autoría del nombre científico con el mayor puntaje de coincidencia.
- _**"Genus_submitted"**_: género ingresado.
- _**"Genus_matched"**_: género con el mejor puntaje de coincidencia.
- _**"Specific_epithet_submitted"**_: epíteto específico ingresado.
- _**"Specific_epithet_matched"**_: género con el mayor puntaje de coincidencia.
- _**"Accepted_name"**_: nombre canónico aceptado para el taxón.
- _**"Accepted_name_author"**_: autor del nombre canónico aceptado para el taxón.
- _**"Accepted_family"**_: familia aceptada para el nombre con el mayor puntaje.
- _**"Accepted_name_rank"**_: categoría taxonómica del nombre aceptado del taxón.
- _**"Source"**_: fuente donde se encontró el nombre con el mayor puntaje.
- _**"Warnings"**_: si no hay coincidencias, aparecerá una alerta.
- _**"Accepted_name_lsid"**_: identificador del nombre aceptado para el taxón, el cual se obtiene solo cuando la fuente es GCC.


Luego de familiarizarse con los resultados de la tabla, realice los siguiente ajustes en el archivo <FONT FACE="monospace"><b>«Datos_TNRS.xlsx»</b></FONT>:

* Identifique el nombre científico validado como una sinonimia y realice los respectivos ajustes. Tenga en cuenta revisar también los elementos <span class="tag is-success is-light"><i>genus</i></span> y <span class="tag is-success is-light"><i>specificEpithet</i></span> si realizó cambios en <span class="tag is-success is-light"><i>scientificName</i></span>.

* En los géneros hay 3 errores de tipeo, identifiquelos y ajústelos en el elemento <span class="tag is-success is-light"><i>genus</i></span>. 

* En los epítetos específicos hay 3 errores de tipeo, identifiquelos y ajústelos en el elemento <span class="tag is-success is-light"><i>specificEpithet</i></span>.

* Ajuste los nombres científicos (<span class="tag is-success is-light"><i>scientificName</i></span>), de acuerdo a los anteriores cambios.

* Complete las autorias de los nombres cientítificos en el elemento <span class="tag is-success is-light"><i>scienficNameAuthorship</i></span>.

* Ajuste las categorías taxonómicas al nombre científico validado en el elemento <span class="tag is-success is-light"><i>taxonRank</i></span>, según corresponda.

¿Identificó otros ajustes a realizar en el conjunto de datos a partir de la validación?

<div class="notification is-info is-light">
  <b>Nota:</b> La herramienta no provee una validación de la taxonomía superior más allá de la familia. Por lo tanto, es necesario utilizar otras herramientas para completar la información taxonómica superior si se requiere.
</div>

## Paso 8 - Verificación del resultado

Descargue y compare el siguiente archivo, validado según las definiciones del estándar Darwin Core, con el archivo que trabajó en el laboratorio e identifique aciertos y oportunidades de mejora.

**¿Qué diferencias encontró con sus resultados?**

* [Archivo validado](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/Solucion_Datos_TNRS.xlsx)

****
**¡Felicitaciones!** Terminó la revisión de los nombres científicos con la herramienta TNRS.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) permite usar, redistribuir y construir sobre estos contenidos libremente. 

¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!
  
**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>

**Referencias**

Boyle, B., Hopkins, N., Lu, Z., Garay, J. A. R., Mozzherin, D., Rees, T., Matasci, N., Narro, M. L., Piel, W. H., McKay, S. J., Lowry, S., Freeland, C., Peet, R. K., & Enquist, B. J. (2013). _The taxonomic name resolution service: an online tool for automated standardization of plant names_. BMC _Bioinformatics_, 14(1), 16. [https://doi.org/10.1186/1471-2105-14-16](https://doi.org/10.1186/1471-2105-14-16).
