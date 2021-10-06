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

Realizar una validación taxonómica de los nombres científicos de especies marino-costeras de manera automática para detectar posibles errores de formato o taxonomía, usando el servicio [WoRMS *TaxonMatch*](http://www.marinespecies.org/aphia.php?p=match).

**Introducción**

Video introductorio de las 3 guías de validación taxonómica, da un contexto general sobre las herramientas y su uso. Si lo prefiere pude realizar la guía siguiendo el paso a paso sin necesidad de ver el video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ve7CgZlZhj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Sobre la Herramienta**

La herramienta [WoRMS TaxonMatch](http://www.marinespecies.org/aphia.php?p=match) es un servicio del Registro Mundial de especies Marinas- [WoRMS](https://www.marinespecies.org/), que permite validar de manera automática y masiva hasta 1.500 nombres científicos. La herramienta compara los nombres científicos sometidos contra la base de datos **Aphia** que combina [múltiples bases de datos marinas](http://www.marinespecies.org/subregisters.php) verificadas por taxónomos expertos de los diferentes grupos marinos documentados en WoRMS. 

Esta herramienta le permite al usuario obtener el nombre válido con sus fuentes y la jerarquía taxonómica de cada taxón (kingdom, phylum, class, order, family, genus) y su estatus taxonómico (Sinónimo, Aceptado, Dudoso). Adicionalmente permite obtener los identificadores de WoRMS (equivalente al campo DwC scientificNameID) que son requeridos para la publicación de datos en el [SiB Marino](https://siam.invemar.org.co/sibm) y  [Ocean Biogepgraphic Information System - OBIS](https://obis.org/).


**Enlace**

*WoRMS TaxonMatch*: [http://www.marinespecies.org/aphia.php?p=match](http://www.marinespecies.org/aphia.php?p=match)

**Requerimientos** 


* La herramienta admite archivos con los siguientes formatos:
    - Formato Excel (.xls o .xlsx).
    - Formato CSV.
    - Formato TXT.
    
* Para realizar este ejercicio debe contar con un procesador de archivos de texto como Excel.



**Archivo de trabajo**

Descargue el archivo [datos_CasoMarinoCosteros.xls](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_casomarinocosteros.xls) para realizar el laboratorio.

```warning
Esta guía se encuentra en construcción peden haber algunas modificaciones de forma y contenidos en los próximos días
```

--------

## Paso 1 - Exploración del archivo

Abra el archivo [datos_CasoMarinoCosteros.xls](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_casomarinocosteros.xls) del ejercicio y explore su contenido. Encontrará una columna con el elemento _```occurrenceID```_, y tres columnas con información taxonómica _```class```, ```family```,y ```scientificName```_. Podrá observar que este archivo no tiene la taxonomía superior completa y puede que algunos taxones no correspondan a grupos marino-costeros, el servicio de WoRMS TaxonMatch le facilitará la tarea de compeltar la taxonOmía y de identificar los taxones no marinos.

>**Nota**: Revise que los nombres en la columna del elemento _```scientificName```_ no tengan calificadores como sp., morfotipo, cf., indet. larva, etc. Si los hay elimínelos, estos no forman parte del nombre científico.

## Paso 2 - Configuración de la herramienta 

En [WoRMS](https://www.marinespecies.org/index.php) vaya al módulo _```Tools```_ > _```MatchTaxa```_ o ingrese directamente al vínculo [https://www.marinespecies.org/aphia.php?p=match](https://www.marinespecies.org/aphia.php?p=match).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_WoRMS.png" width=800>


<sup>_Figura 1. Vista de la herramienta WoRMS TaxonMatch y las diferentes opciones  de carga y configuración; A.Sección de carga; B. Configuración de la lectura del archivo; C.Configuración de la validación taxonómica; D. Configuración de la descarga._</sup>

### 2.1. Selección del archivo

En la opción _```File```_ seleccione el archivo que descargó previamente, buscando la ubicación del archivo en su computador (Fig. 1A).


### 2.2. Configuración de la lectura del archivo

Dependiendo del tipo de archivo que vaya a cargar, Excel, csv. o txt., puede configurar la lectura del mismo con las siguientes opciones (Fig. 1B):

- ```Row delimiter```: Cuando se carga un archivo de texto plano (.csv, .txt) permite seleccionar el carácter que delimita las filas: \n (_Linefeed_), \r (_Return_), tabulación (Tab), punto y coma (;), coma (,), pleca (|).
- ```First row contains column names```: Permite indicar si la primera fila del archivo contiene los nombres de las columnas - estos nombre corresponden a los elementos DwC asociados a la taxonomía-, de no tenerlos la herramienta le solicitará darles un nombre antes de procesar el archivo.
- ```Column delimiter```: Cuando se carga un archivo de texto plano (.csv, .txt) permite seleccionar el carácter que delimita las columnas: tabulación (Tab), punto y coma (;), coma (,), pleca (|).

Como usted cargó un archivo Excel, el delimitador estará dado automáticamente por el sistema y no debe hacer ajustes en las opciones _```Row delimiter```_ y _```Column delimiter```_.

Marque la casilla _```First row contains column names```_ ya que la primera fila del archivo contiene los nombres de las columnas (Fig. 1B). 

### 2.3. Configuración de la validación

Para validar la taxonomía del conjunto de datos la herramienta le permite especificar las siguientes opciones:

- ```Match authority```: Seleccione esta opción cuando su conjunto de datos contiene la autoría del nombre científico en una columna adicional (_```scientificNameAuthorship```_) y desee incluirla como criterio para validar el nombre.	
- ```Match upto```: Si se tiene la taxonomía superior completa del taxon (_```kingdom```,```phylum```, ```class```,```order```, ```family```, ```genus```_) puede añadir esta opción para incluir estos parámetros en la validación. Por lo genera es suficiente usar la opción _```scientificName```_, también hace que la validación sea mucho más rápida.
- ```Limit to taxa belonging to```: Permite limitar la consulta a un grupo biológio particular dentro de WoRMS, por ejemplo Porifera, Copepoda etc. Esta funcionalidad es útil principalmente cuando hay homónimos. Para usar esta opción introduzca los primeros caracteres del nombre del taxon y aparecerá una lista de selección. 

Para este ejercicio deje la opción _```Match authority```_ sin seleccionar ya que no se cuenta con esta información, en _```Match upto```_ seleccione de  la lista desplegable la opción _```scientificName```_ y deje vacía la opción _```Limit to taxa belonging to```_ (Fig. 1C).

### 2.3. Configuración de la descarga

Antes de iniciar la consulta debe seleccionar los datos que desea obtener de WoRMS, puede seleccionar una o varias de las siguientes opciones en la sección _```Output```_:

  - ```AphiaID```: Identificador único de la base de datos Aphia para cada taxón.
  - ```LSID```: _Life Science Identifier_  de WoRms, que incluye el AphiaID y que es obligatorio para la publicación a través del SiB Marino y OBIS, este corresponde al elemento DwC _```scientificNameID```_.
  - ```TSN```: Identificador único de ITIS para cada taxón.
  - ```ScientificName```: El nombre científico del taxón contra el cual hubo una coincidencia dentro de WoRMS.
  - ```Authority```: Nombre del autor del nombre científico, corresponde al elemento DwC _```scientificNameAuthorship```_.
  - ```Accepted name```: Nombre científico aceptado del taxón.
  - ```Classification```: Taxonomía superior del taxón (_```kingdom```,```phylum```, ```class```,```order```, ```family```, ```genus```_).
  - ```Qualitystatus```: Indica el tipo de revisión taxonómica que a realizado el equipo de WoRMS sobre el taxón.
  - ```Taxon status```: Estatus taxonómico del nombre científico del taxón: aceptado, no acepetado, ambiguo, entre otros.
  - ```Environment```: Corresponde a los elementos DwC que describen el tipo de ambiente donde habita el taxón: _```isMarine```_ (habitat marino),	_```isBrackish```_(habitat salobre), _```isFresh```_(habitat de agua dulce),	_```isTerrestrial```_(habitat terrestre). Donde ```1``` indica que el taxon habita en dicho ambiente y ```0``` que no habita.
  - ```Citation ```: Citación sugerida de la fuente taxonómica utilizada para validad el conjunto de datos.

Para este ejercicio - y para validaciones futuras- marque lascasillas de las opciones: _```LSID```,```ScientificName```,```Authority```,```Accepted name```, ```Classification```, ```Taxon status```, y ```Environment```_ (Fig. 1D).

Una vez haya realizado la configuración como se muestra en la Figura 1 de clic en _```Next```_.


## Paso 3 - Previsualización del archivo

Luego de cargar los datos se abrira una vista previa de las primeras 20 filas (Fig. 2). Si el conjunto de datos selecionado tienes las columnas nombradas bajo el estándar DwC, estas seran reconocidas y mapeadas de manera automática; sin embargo siempre se debe comprobar que el nombre de la columna desplegable coincida con el nombre de la columna de los datos cargados (Fig. 2).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_WoRMS.png" width=800>

<sup>_Figura 2. Vista previa de los datos y verificación del mapeo de las columnas._</sup>

Una vez haya verificado que la herramienta realizó una lectura correcta de los datos y qué las columnas están bien mapeadas de clic en _```Match```_(Fig. 2).

Dependiendo del volumen de los datos la validación puede tardar de segundos a minutos, sea paciente y no cierre o cambie la ventana de navegación (Fig. 3).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_WoRMS.png" width=800>

<sup>_Figura 3. Mensaje de procesamiento del archivo, debe permanecer abierta mientras el proceso finaliza._</sup>

## Paso 4 - Revisión de los resultados

Al finalizar la validación, en la parte superior de la herramienta encontrará  el porcentaje de coincidencia global encontrado durante la validación (Fig. 4A), explore los datos y los nombres con los que hubo coincidencia en la columna _```WoRMS match```_ (Fig. 4B). En esta columna encontrará diferentes tipos de resultados:

- Nombres en color verde: Cuando el nombre científico ingresado obtuvo una coincidencia exacta o que difiere por máximo 3 caracteres, este aparece en color verde y la información de dicho nombre aparecerá en la descarga.
- Nombres ambiguos (lista desplegable): Cuando el taxón tiene un homónimo verá un recuadro con una lista desplegable para que seleccione el que corresponda al nombre aceptado o al del autor requerido.
- (none): No hubo coincidencias entre el nombre ingresado y WoRMS y deberán ser corroborados con otro referente. Posiblemente el taxón sea unicamente terreste y por ello no se encuentra en la base de datos de WoRMS.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_WoRMS.png" width=800>

<sup>_Figura 4. Resultados; A.Porcentaje de coincidencia con WoRMS; B. Diferentes tipos de resultados en la columna ```WoRMS match```_.</sup>

Revise  los nombres de la columna _```WoRMS match```_ y haga los ajustes necesarios cuando haya nombres ambiguos, para decidir que nombre seleccionar puede hacer una búsqueda manual en WoRMS. Por ejemplo para el género _Apogon_ la lista deslegable muestra dos opciones (Fig. 5).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_WoRMS.png" width=800>

<sup>_Figura 5. Ejemplo de un nombre ambiguo -Apogon- que requiere revisión, en la lista desplegable se muestran las coincidencias con WoRMS.</sup>

Usando la barra de búsqueda general de WoRMS ([https://www.marinespecies.org/index.php](https://www.marinespecies.org/index.php)) busque los dos nombres que aparecen en la lista desplegable (Fig. 6). 


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_WoRMS.png" width=600>

<sup>_Figura 6. Búsqueda general en WoRMS_.</sup>

Tras la búsqueda llegará a los siguientes enlaces:

- [_Apogon Lacepède, 1801_](https://www.marinespecies.org/aphia.php?p=taxdetails&id=125913)
- [_Apogon Elliott_](https://www.marinespecies.org/aphia.php?p=taxdetails&id=1077675) accepted as [_Krigia Schreb_](https://www.marinespecies.org/aphia.php?p=taxdetails&id=1076104)

Al ver en detalle cada una de las opciones podrá identificar que la segunda corresponde a una planta y no a un pez - sabemos que este género es un pez ya que en el conjunto de datos se documenta bajo la clase Actinopterygii- y por lo tanto se descarta la segunda opción.

Puede hacer este mismo ejercicio de búsqueda para algunos o todos los nombres ambiguos.


## Paso 5 - Descarga de los resultados

En la parte inferior de la ventana que contiene los resultados, podrá configurar el formato del archivo de la descarga. Seleccione la primera opción  _```Excel sheet XLS```_   y de clic en  _```Download```_ (Fig. 7). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_WoRMS.png" width=800>

<sup>_Figura 7. Configuración y descarga_.</sup>

Obtendrá un archivo con el nombre original del conjunto de datos seguido de la palabra _matched_ así: _```datos_casomarinocosteros_matched.xls```_.

## Paso 6 - Exploración de los resultados


### 6.1. Comprender el contendio del archivo

Abra el archivo de resultados usando Excel u OpenRefine, y explore las columnas obtenidas y su contenido. El archivo tendra la sigueinte estructura:

- Columnas originales, al inicio del archivo encontrará las columnas que cargó originalmene en la herramienta y en el mismo orden.
- ```Match type```, una columna que detalla el tipo de conicidencia que hubo entre el nombre científico ingresado y WoRMS. **Este elemento le permitirá identificar que nombres debe revisar en detalle.** Las opciones que  encontrará en orden de mejor a menor coincidencia son:

     - ```exact```: Todos los caracteres coinciden de manera exacta.
     - ```exact_subgenus```: Coincidencia exacta, pero incluyendo el subgénero.
    - ```phonetic```:   Sonidos fonéticos similares a pesar de diferencias menores en la escritura (algoritmo soundex).
    - ```near_1```: Coincidencia exacta, excepto por un carácter. **Esta es una coincidencia bastante confiable**.
    - ```near_2```: Buena coincidencia, excepto por dos caracteres. **Se requiere una revisión adicional del nombre.**
    - ```near_3```: Buena coincidencia, excepto por tres caracteres. **Se requiere una revisión adicional del nombre.**
    - ```match_quarantine```: Coincide con un nombre que se encuentra actualmente en cuarentena. Se recomienda ponerse en contacto con el equipo de WoRMS (info@marinespecies.org).
    - ```match_deleted```: Coincidencia con un nombre que ha sido eliminado y no hay una alternativa disponible en WoRms. Se recomienda ponerse en contacto con el equipo de WoRMS (info@marinespecies.org).

- ```LSID```: _Life Science Identifier_ de WoRms qué incluye el AphiaID y que es obligatorio para la publicación a través de el SiB Marino y OBIS, este corresponde al elemento DwC _```scientificNameID```_.

- ```Taxon status```: Estatus taxonómico del nombre científico del taxón: aceptado, no acepetado, ambiguo, entre otros. **Este elemento le permitirá identificar que nombres debe revisar en detalle.**
- ```ScientificName```: El nombre científico del taxón contra el cual hubo una coincidencia dentro de WoRMS.
- ```Authority```: Nombre del autor del nombre científico, corresponde al elemento DwC _```scientificNameAuthorship```_.
- ```ScientificName_accepted```:Nombre científico aceptado del taxón. En caso de que el ```Taxon status``` del nombre sea diferente a ```accepted``` puede revisar y decidir usar el nombre aceptado.
- ```Authority_accepted```: Nombre del autor del nombre científico del nombre aceptado, corresponde al elemento DwC _```scientificNameAuthorship```_.
- ```Clasification```:Elementos de la taxonomía superior del taxón según WoRMS,: _```kingdom```,```phylum```, ```class```,```order```, ```family```, ```genus```_, ```subgenus```,	```Species```,	```Subspecies```; puede utilizarla estos elementos para completar el conjunto de datos o hacer correcciones respecto al archivo original.
- Columnas ```Environment```:Elementos DwC que describen el tipo de ambiente donde habita el taxón: _```isMarine```_ (habitat marino),	_```isBrackish```_(habitat salobre), _```isFresh```_(habitat de agua dulce),	_```isTerrestrial```_(habitat terrestre). Donde ```1``` indica que el taxon habita en dicho ambiente y ```0``` que no habita.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_WoRMS.png" width=800>

<sup>_Figura 8. Vista del archivo de resultados descargado_.</sup>

### 6.1. Identificar y resolver inconsistencias

 - Explore la columna ```Match type``` y revise los nombres que tuvieron un valor distinto a ```exact``` o vacíos. Ajuste los nombres científicos y la taxonomía superior de acuerdo a los elementos _```ScientificName```_ y _```ScientificName_accepted```_ si aplican. 

```tip
Los nombres sugeridos por WoRMS corresponden a especies marinas. Revise con cuidado la taxonomía sugerida para el género Carollia, respecto a la información y Clase original de los datos. 
```

 - Nuevamente en la columna ```Match type``` revise los nombres que están vacíos y no tuvieron ninguna coincidencia con WoRMS. ¿Podría explicar por que no hubo coindicencia?.

> Es posible que algunos nombres de taxones marinos no esten aún en WoRMS. Para que se sean incluidos deben ser agregados siguiendo las recomendaciones de la documentación de WoRMS en las secciones [_Add a new accepted taxon_](https://www.marinespecies.org/aphia.php?p=manual#topic2). y [_Add a new unaccepted taxon_](https://www.marinespecies.org/aphia.php?p=manual#topic3).

 - Explore la columna ```Taxon status``` y revise los nombres que tuvieron un ```Taxon status``` distinto a ```accepted``` o vacíos. Revise contra la columna _```ScientificName_accepted```_ y realice los respectivos ajustes.

 - Explore las columnas _```isMarine```_ (habitat marino),	_```isBrackish```_(habitat salobre), _```isFresh```_(habitat de agua dulce),	_```isTerrestrial```_(habitat terrestre) e identifiqué si hay registros que solo correspondan a habitats terrestres. Si los hay verifique la especie y ajuste la taxonomía superior de ser necesario.


¿Identificó otros ajustes a realizar en el conjunto de datos a partir de la validación?.


## Paso 7 - Verificación del resultado

Compare sus resultados con el siguiente archivo validado según las definiciones del estándar, verifique en que acertó y que puede mejorar. En la hoja 1 encontrará el archivo descargado de la herramienta con los ajustes mencionados en el paso 6, y en la hoja 2 los datos estructurados en DwC.

**¿Qué diferencias encontró con sus resultados?**

* [Descargue el archivo validado](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/Solucion_datos_casomarinocosteros.xlsx)

**¡Felicitaciones!**
Terminó la revisión de los nombres científicos con la herramienta WoRMS.

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
