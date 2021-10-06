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

Realizar una validación taxonómica de los nombres científicos de plantas de manera automática con el uso de TNRS.

**Introducción**

Video introductorio de las 3 guías de validación taxonómica, da un contexto general sobre las herramientas y su uso. Si lo prefiere pude realizar la guía siguiendo el paso a paso sin necesidad de ver el video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ve7CgZlZhj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Sobre la herramienta**

La herramienta TNRS por sus siglas en inglés (Taxonomic Name Resolution Service) es una aplicación originalmente desarrollada por iPlant, que permite estandarizar los nombres científicos botánicos a partir de fuentes taxonómicas como [Tropicos](https://www.tropicos.org/home), [USDA](https://plants.sc.egov.usda.gov/home/) y [TPL](http://www.theplantlist.org/). La validación taxonómica con TNRS permite:
- Identificar errores ortográficos o de tipeo.
- Separar el nombre científico en otros elementos Darwin Core (```genus```, ```specificEpithet```, ```scientificNameAuthorship```).
- Evaluar la coincidencia del nombre científico, familia, género, epiteto específico e infraespecífico y autoría contra las fuentes taxonómicas de referencia.
- Listar otras posibles coincidencias de un nombre científico con su respectivo enlace a la fuente.
- Identificar sinonimias y nombres actualmente aceptados.

**Enlace**

*Taxonomic Name Resolution Service (TNRS)*: [https://tnrs.biendata.org/](https://tnrs.biendata.org/)

**Requerimientos** 

* Para realizar este ejercicio debe contar con un procesador de archivos de texto como Excel.

**Archivo de trabajo**

Descargue el archivo [```Datos_TNRS.xlsx```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Datos_TNRS.xlsx) para realizar el laboratorio.

--------

## Paso 1 - Ingreso

Ingrese a la aplicación [TNRS](https://tnrs.biendata.org/) y familiarícese con las opciones. La herramienta está dividad en dos partes, la primera (Fig. 1A) para colocar la lista de nombres científicos y la segunda (Fig. 1B) para la selección de configuraciones.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_TNRS_Aplicacion.png" width=800>

<sup>_Figura 1. Descripción de las opciones de la herramienta. A. Lista de nombres científicos a validar. B. Configuraciones de la herramienta._</sup>


## Paso 2 - Carga de los datos

Ingrese al archivo [```Datos_TNRS.xlsx```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/Datos_TNRS.xlsx) y seleccione la columna _```scientificName```_, copie la totalidad de la columna sin incluir el encabezado.

Diríjase a la herramienta de TNRS y pegue los datos previamente copiados en la sección ```Scientific names to check``` (Fig. 1A). Asegurese que haya un solo nombre por línea. A continuación haga clic en _```SUBMIT```_(Fig. 2).

```tip
La herramienta evalua hasta 5.000 nombres científicos por ejecución, si intenta un mayor número obtendrá un mensaje de error.
```

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_TNRS_Submit.png" width=800>

<sup>_Figura 2. Carga de datos en la herramienta._</sup>



## Paso 3- Selección de configuraciones

### 2.1. Modo de procesamiento 

En la configuración _```Processing Mode```_(Modo de procesamiento) tiene dos opciones:

* _```Perform name resolution```_ (Ejecutar resolución de nombres): separa el nombre científico en sus componentes y los valida contra una o varias fuentes (resolución).
* _```Parse names only```_ (Separar nombres únicamente): separa el nombre científico en sus componentes sin evaluar la coincidencia del nombre con las fuentes.

Seleccione la opción ```Perform name resolution```.

```note
Si selecciona la opción Parse names only no es posible escoger la fuente de datos pues no hay ningun proceso de validación.
```

### 2.2. Clasificación

La configuración de _```Family Classification```_ permite seleccionar las familias segun la clasificación APG IV. En estos momento solo está disponible la opción **TROPICOS**, sin embargo, otras pueden ser agregadas a futuro.

### 2.3. Fuente

En la configuración de _```Source```_ puede escoger las fuentes sobre las cuales quiere revisar los datos. Puedes escoger una o varias fuentes. 
* [Tropicos](https://www.tropicos.org/home)
* [USDA](https://plants.sc.egov.usda.gov/home/) 
* [TPL](http://www.theplantlist.org/)

Mantenga todas las fuentes seleccionadas. Por último haga clic en el botón _```submit```_ para iniciar la validación y espere a que se generen los resultados.


## Paso 4 - Revisión preliminar de resultados

Esta revisión se realiza directamente en la herramienta, en la cuál verá una tabla con los resultados del proceso si la ejecución fue exitosa y algunas opciones de configuración adicionales (Fig 3).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_TNRS_TablaResultados.png" width=800>

<sup>_Figura 3. Configuraciones presentes en la revisión preliminar. A.Opciones adicionales de configuración; B. Columnas para la revisión de los resultados de validación; C. Paginación de los resultados ._</sup>

### 4.1. Configuraciones adicionales

Luego de realizar la validación se activan algunas opciones adicionales para filtrar los resultados, cambiar el puntaje de coincidencia y descargar la validación.

* _```BEST MATCH SETTINS```_: Filtra los resultados según el puntaje de coincidencia (_Overall Score_) o según la taxonomía superior (_Higher Taxonomy_). 

```note
Esta opción está temporalmente fuera de servicio por lo que no verá ningún cambio en los resultados si la usa.
```
  
* _```MATCH```_: Permite cambiar el puntaje de coincidencia (_Match_) de la validación. Entre mas alto sea (cercano o igual a 1) la coincidencia tendrá que ser más exacta respecto a la fuente. Entre más cercano a 0 la coincidencia será menos precisa y le mostrará más resultados posibles de coincidencia (Fig 4).

Para este ejercicio va a dejar el valor por defecto (_```SET DEFAULT```_) que corresponde a 0.53.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_TNRS_Threshold.png" width=800>


<sup>_Figura 4. Cambio en el valor de MATCH._</sup>

_```DOWNLOAD DATA```_: Descarga de los resultados. Al hacer clic en esta opción una ventana emergenten mostrará las opciones de descarga (se abordará a detalle en el paso 5).

_```DOWNLOAD SETTINGS```_: Descargas un archivo de texto plano con todas las configuraciones de la validación.


### 4.2. Tabla de resultados

Los resultados se muestran en 8 columnas en las que puede organizar la información de forma ascendente o descendente haciendo clic en el nombre de la columna (Fig. 3B). Estas columnas son:

* **Warnings**: Señala las inconsistencias del nombre validado a partir de un ícono de alerta (Fig 5). Haga clic en el símbolo para obtener una explicación adicional del problema. Las alertas más comunes son:

    - _```Ambiguos match```_: Hay más de un nombre sugerido con el mismo puntaje de coincidencia y estado taxonómico.
    - _```Partial match```_: El nombre sugerido pertenece a una catageoría taxonómica superior que el nombre original.
    - _```Better higher taxonomic match available```_: Otro nombre con menor puntaje de coincidencia tiene mejor coincidencia con la taxonomía superior. 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_TNRS_warning.png" width=800>

<sup>_Figura 5. Ejemplos de problemas._</sup>

* **Name submitted**: El nombre científico original ingresado en la herramienta.
* **Name Matched**: Nombre científico con el mejor puntaje de coincidencia. En esta columna puede encontrar un mensaje ```+n more```, siendo ```+n``` el número de posibles coincidencias, lo que indica que fueron encontradas varias coincidencias para ese nombre. De clic al botón ```+n more```. Se mostrará una pestaña adicional en donde puede seleccionar que taxonomía quiere utilizar.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_TNRS_changeselected.png" width=800>

<sup>_Figura 6. Cambio en el tipo de taxonomía._</sup>

```note
De momento la herramienta está presentando fallas al momento de cambiar la taxonomía con la opción +n more.
```

* **Source**: La fuente donde se encontró el nombre con el mejor puntaje.
* **Overall Score**: Este puntaje indica la similitud entre el nombre original y el encontrado, donde 1 es el valor mas alto de coincidencia.
* **Taxonomic Status**: :El estado taxonómico del nombre con el mejor puntaje (ej. aceptado, inválido, sinónimo ).
* **Accepted Name**: El nombre canónico aceptado para el taxón.
* **Details**: Muestra mayor detalle del resultado a partir de columnas con información adicional de la validación.

Finalmente se puede modificar el número de filas visualizadas por página y moverse entre las diferentes páginas (Fig. 3C). 


## Paso 5 - Descarga de resultados

Haga clic en el botón _```DOWNLOAD DATA```_, en la ventana emergente encontrará las siguientes opciones: 


* _**File Name**_: Nombre del archivo de descarga. Por defecto ```tnrs_result```.

* _**Download format**_: Formato de descarga del archivo, la herramienta brinda dos opciones:

    * ```CSV```: Del inglés "_Comma separted value_". Es un archivo de texto plano separado por comas (,). 
    * ```TSV```: Del inglés "_Tab separted value_". Archivo de texto plano separado por tabuladores.


* _**Results to Download**_: Permite seleccionar el tipo de resultado a descargar. La herramienta tiene dos opciones:

    * ```Best matches only```: En el caso de que un nombre científico tenga varias coincidencias, se descargará el nombre científico con el puntaje de coincidencia mas alto.
    * ```All mathces```: En el caso de que un nombre científico tenga varias coincidencias, se descargan todas las posibles coincidencias para un mismo nombre (```+n more```).

Configure las descargas como se muestra en la Figura 7 y haga clic en _```DOWNLOAD```_.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_TNRS_Download.png" width=800>

<sup>_Figura 7. Descarga de los datos._</sup>


## Paso 6 - Visualización de resultados

Los resultados se descargarán en un archivo de texto plano, ábralos en un editor de texto como Excel o en OpenRefine. Si necesita una guía de como abrir este tipo de archivo en Excel, lo invitamos a consultar la siguiente [Guía de importación de resultados en Excel](https://sib-colombia.github.io/Formacion/LAB/otros/txt_to_excel.html)

## Paso 7 - Revisión de resultados y modificación de datos

El archivo resultado tiene un total de 47 columnas, entre las que se encuentran las 7 columnas que se vieron en la previsualización de resultados y varias columnas adicionales indicando el resultado de la taxonomía.

```tip
La herramienta descarga el resultado por nombre científico único. Es decir. en este ejercicio se cargaron en la herramienta 34 nombres científicos pero solo se descargan 31 filas con nombres científicos únicos.
```

A continuación se describen algunas columnas adicionales que encontrará en la descarga que le permitirán validar los resultados con mayor detalle:

- _```Author_matched```_:Autoría del nombre científico con el mejor puntaje de coincidencia.
- _```Genus_submitted```_: El género ingresado.
- _```Genus_matched```_: El género con el mejor puntaje de coincidencia.
- _```Specific_epithet_submitted```_: El epíteto específico ingresado.
- _```Specific_epithet_matched```_: El género con el mejor puntaje de 
- _```Accepted_name```_:El nombre canónico aceptado para el taxón.
- _```Accepted_name_author```_:Autor del nombre canónico aceptado para el taxón.
- _```Accepted_family```_:Familia aceptada para el nombre con el mejor puntaje.
- _```Accepted_name_rank```_:Caegoría taxonómica del nombre aceptado del taxón.
- _```Source```_:La fuente donde se encontró el nombre con el mejor puntaje.
- _```Warnings```_:Si no hay coincidencias aparecerá una alerta.
- _```Accepted_name_lsid```_:El identificador del nombre aceptado para el taxón. Sólo cuando la fuente es GCC, se obtiene este identificador.


Luego de familiarizarse con los resultados de la tabla realice los siguiente ajustes en el archivo ```Datos_TNRS.xlsx```:

* Identifique el nombre científico validado como una sinonimía y realice los respectivos ajustes. Tenga en cuenta revisar también los elementos _```genus```_ y _```specificEpithet```_ si realizó cambios en _```scientificName```_.

* En los géneros hay 3 errores de tipeo. Identifiquelos y ajústelos en el elemento _```genus```_. 

* En los epítetos específicos hay 3 errores de tipeo. Identifiquelos y ajústelos en el elemento _```specificEpithet```_.

* Ajuste los nombres científicos (_```scienficName```_) de acuerdo a los anteriores ajustes.

* Complete las autorias de los nombres cientítificos en el elemento _```scienficNameAuthorship```_.

* Ajuste las categorías taxonómicas según corresponda al nombre científico validado en el elemento _```taxonRank```_.

¿Identificó otros ajustes a realizar en el conjunto de datos a partir de la validación?.

```note
La herramienta no provee una validación de la taxonomía superior más allá de la familia, por lo cuál es necesario utilizar otras herramientas para completar la información taxonómica superior si es requerido.
```


## Paso 8 - Verificación del resultado

Compare sus resultados con el siguiente archivo validado según las definiciones del estándar, verifique en que acertó y que puede mejorar.

**¿Qué diferencias encontró con sus resultados?**

* [Descargue el archivo validado](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/Solucion_Datos_TNRS.xlsx)


****
**¡Felicitaciones!**
Terminó la revisión de los nombres científicos con la herramienta TNRS.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>

**Referencias**

Boyle, B., Hopkins, N., Lu, Z., Garay, J. A. R., Mozzherin, D., Rees, T., Matasci, N., Narro, M. L., Piel, W. H., McKay, S. J., Lowry, S., Freeland, C., Peet, R. K., & Enquist, B. J. (2013). The taxonomic name resolution service: an online tool for automated standardization of plant names. BMC Bioinformatics, 14(1), 16. https://doi.org/10.1186/1471-2105-14-16 
