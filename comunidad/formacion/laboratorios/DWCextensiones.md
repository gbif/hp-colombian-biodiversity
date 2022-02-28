---
layout: documentation
permalink: /formacion/laboratorios/DWCextensiones
title: "Estandarización de datos usando las extensiones del Darwin Core"
description: "Objetivo: Estructurar un conjunto de datos usando las extensionde del estándar Darwin Core (DwC)."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estandarización con las extensiones *Darwin Core*


**Objetivo**

Conocer y utilizar las extensiones del estándar *Darwin Core* (DwC), siguiendo las buenas prácticas de documentación. 

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Sobre la actividad**

Utilizar tres de las extensiones más comunes del estándar DwC para incorporar información sobre rasgos funcionales, recursos multimedia y datos de la distribución de especies. Para esto se proporcionarán conjuntos de prueba y plantillas de publicación enfocadas en el uso de las extensiones DwC.

**Requisitos**

* Para realizar este ejercicio, es necesario contar con un programa que procese archivos de texto. Por ejemplo, Excel.

## Ejercicio 1 - Rasgos funcionales


### Paso 1 - Caso de estudio
A partir de las notas de campo de algunos especímenes de la colección de la Universidad de Ciencias Naturales, la cual se encuentra publicada a través del SiB Colombia como un conjunto de datos de **registros biológicos**, se decide incorporar información sobre los rasgos funcionales de los especímenes. Usted cuenta con los datos de la colección, debidamente estructurados en DwC, y una tabla (sin estructurar) que relaciona rasgos funcionales de aves y reptiles a partir del número de catálogo. Su misión es estructurar los datos de los rasgos funcionales, utilizando la extensión **Medidas o hechos** (*Measurement or Facts*), para que estos puedan incluirse en la publicación de la colección.

### Paso 2 - Exploración de la plantilla
 
Descargue y abra la [<FONT FACE="monospace"><b>«Plantilla de la extensión Medidas o hechos (<i>Measurement or Facts</i>)»</b></FONT>](https://drive.google.com/uc?export=download&id=1s05MAYDixYt6wPp9V8de8qrCHxuOOw-o), allí encontrará 4 pestañas:

- **Instrucciones**: contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de la extensión.
- **Plantilla**: contiene la tabla con los elementos DwC para documentar la extensión.
- **Definiciones**: contiene las descripciones de cada uno de los elementos del estándar DwC, recomendaciones de documentación y ejemplos.

#### 2.1. Pestaña Instrucciones

Lea las instrucciones de esta primera pestaña para familiarizarse con el contenido y alcance de la misma. Encontrará una sección titulada Elementos obligatorios según el tipo de los datos (Fig. 1). De acuerdo a la lectura del Paso 1 y los datos de ejemplo [<FONT FACE="monospace"><b>«Ejercicio1_MedidasoHechos_porEstructurar.xlsx»</b></FONT>](https://drive.google.com/uc?id=1fHWfwjQ8s_4j12uHHleUw4JFyIRoeq0V&authuser=0&export=download), identifique cuáles son los elementos obligatorios para el uso de la extensión y téngalos en cuenta para el paso 3. 

![Figura 1. Elementos obligatorios de la extensión para publicar registros biológicos](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWCextensiones/Fig1_Extensiones_Elementosobligatorios.png)

<sup>*Figura 1. Elementos obligatorios de la extensión para publicar registros biológicos.*</sup>

#### 2.2. Plantilla
Explore los elementos de la extensión en la pestaña de plantilla. Allí encontrará algunos ejemplos pre-documentados en gris para facilitar la interpretación y el alcance de los elementos. Puede mantener estos ejemplos como referencia o eliminarlos antes de usar la plantilla. Estos marcan un punto de partida, pero no representan todas las posibilidades de la extensión, ya que las medidas pueden variar según las fuentes de datos.

#### 2.3. Definiciones 
Revise la definición de los elementos de la extensión, haciendo clic en los elementos de la plantilla. Esto le permitirá ver la definición del elemento y algunos ejemplos de documentación.

### Paso 3 - Mapeo de los datos

Una vez que haya explorado la extensión e identificado los elementos obligatorios, revise detenidamente el archivo <FONT FACE="monospace"><b>«Ejercicio1_MedidasoHechos_porEstructurar.xlsx»</b></FONT> y ubique los elementos de la extensión que le permitirán estructurar las medidas. Esta actividad recibe el nombre de **mapeo de datos**. Revise la definición de los elementos y sus ejemplos para corroborar la correspondencia del mapeo. 

#### 3.1. Identificar el tipo de medidas o hechos

Teniendo en cuenta que las medidas se pueden dividir en dos categorías, identifique el tipo de cada una.

* **Cuantitativas** (medidas): son variables cuantificables que cuenta con una unidad de medida. Por lo tanto, se asocian a los elementos <span class="tag is-success is-light"><i>measurementType</i></span>, <span class="tag is-success is-light"><i>measurementValue</i></span> y <span class="tag is-success is-light"><i>measurementUnit</i></span>. Por ejemplo:
    - <span class="tag is-success is-light"><i>measurementType</i></span>: largo del pico.
    - <span class="tag is-success is-light"><i>measurementValue</i></span>: 20.
    - <span class="tag is-success is-light"><i>measurementUnit</i></span>: mm.

* **Cualitativas** (hechos): son variables categóricas que guardan algún tipo de lógica, pero no están asociadas directamente a una unidad de medida. Por consiguiente, se asocian a los elementos <span class="tag is-success is-light"><i>measurementType</i></span> y <span class="tag is-success is-light"><i>measurementValue</i></span>. Por ejemplo:
    - <span class="tag is-success is-light"><i>measurementType</i></span>: color del pico.
    - <span class="tag is-success is-light"><i>measurementValue</i></span>: amarillo.

#### 3.2. Mapeo de elementos 
De acuerdo al paso anterior, ahora deberá mapear las medidas en los elementos de la extensión. Puede duplicar los elementos tantas veces como se requiera. Por ejemplo, puede duplicar los elementos <span class="tag is-success is-light"><i>measurementType</i></span>, <span class="tag is-success is-light"><i>measurementValue</i></span>, <span class="tag is-success is-light"><i>measurementUnit</i></span> y <span class="tag is-success is-light"><i>measurementDeterminatedBy</i></span> para documentar las medidas de **«Altura de percha»** y **«Longitud rostro cloacal»** (Fig 2). Haga lo mismo para las medidas faltantes.

![Figura 2. Mapeo de la medida 1 «Altura de la percha» y la medida 2 «Longitud rostro cloacal» con duplicación de los elementos de la plantilla](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWCextensiones/Fig2_Extensiones_mapeo.png)

<sup>_Figura 2. Mapeo de la medida 1 «Altura de la percha» y la medida 2 «Longitud rostro cloacal» con duplicación de los elementos de la plantilla._</sup>

#### 3.3. Estructurar el elemento occurrenceID
Para usar cualquier extensión, es necesario contar con un identificador (ID). Este permite enlazar la extensión con los datos. En este ejercicio, el <span class="tag is-success is-light"><i>occurrenceID</i></span> cumple el rol de identificador, ya que los datos corresponden a registros biológicos ([<FONT FACE="monospace"><b>«Ejercicio1_Registrosbiológicos_Estructurado.xlsx»</b></FONT>](https://drive.google.com/uc?id=1KslrtjZAwFbOWsQJ9NdBi2BLBbxNoVJo&authuser=0&export=download)). Por lo tanto, es necesario asegurarse de que el <span class="tag is-success is-light"><i>occurrenceID</i></span> de la extensión **Medidas o hechos** coincida exactamente con el del conjunto de datos estructurado. Haga los ajustes necesarios para que coincidan (Fig. 3).

![Figura 3. Diferencia entre el occurrenceID del conjunto de datos de registros biológicos y el del elemento mapeado en la extensión](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWCextensiones/Fig3_Extensiones_occurrenceID.png)

<sup>_Figura 3. Diferencia entre el <span class="tag is-success is-light"><i>occurrenceID</i></span> del conjunto de datos de registros biológicos y el del elemento mapeado en la extensión._</sup>
 
### Paso 4 - Ajustar los datos

#### 4.1. Ajustar según definiciones y ejemplos
Una vez mapeados los datos del archivo <FONT FACE="monospace"><b>«Ejercicio1_MedidasoHechos_porEstructurar.xlsx»</b></FONT> en la plantilla de la extensión, ajuste las columnas de acuerdo a las definiciones del estándar DwC para cada elemento (Fig. 4).

![Figura 4. Datos ajustados según las definiciones y los vocabularios controlados](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWCextensiones/Fig4_Extensiones_ajustados.png)

<sup>_Figura 4. Datos ajustados según las definiciones y los vocabularios controlados._</sup>

#### 4.2. Eliminar los elementos vacíos y filas de ejemplo
Elimine las columnas de los elementos DwC que quedaron vacías en la plantilla de **Medidas o hechos**. Recuerde que para la publicación solo debe mantener los elementos que hayan sido documentados (Fig. 5). También puede eliminar los ejemplos resaltados en gris, ya que que estos solo son una ayuda para el mapeo de los elementos en la plantilla.

![Figura 5. Cómo eliminar los elementos vacíos](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWCextensiones/Fig5_Extensiones_eliminar.png)

<sup>_Figura 5. Cómo eliminar los elementos vacíos. <span class="tag is-warning is-light"><b><i>Clic derecho en la columna > Eliminar</i></b></span>._</sup>

### Paso 5 - Verificación del resultado
Compare el siguiente [<FONT FACE="monospace"><b>«archivo estandarizado»</b></FONT>](https://drive.google.com/uc?id=1E6_oUh53Du3wTIGilKeyvwQZWbwjR_Wv&authuser=0&export=download) con el archivo que trabajó en el ejercicio para identificar aciertos y posibilidades de mejora. ¿Logró construir correctamente las extensiones?

Tenga en cuenta que existen dos formas válidas de documentar esta extensión. La primera es añadir los elementos DwC tantas veces como sea necesario, al igual que en el ejercicio anterior. La segunda es insertar una fila para cada medida. Esto es posible porque cada fila se puede relacionar al espécimen por medio del identificador, en este caso, el <span class="tag is-success is-light"><i>occurrenceID</i></span> (Fig. 6). 

![Figura 6. Segundo mecanismo de documentación de la extensión de Medidas o hechos en forma de filas sin duplicar elementos DwC](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWCextensiones/Fig6_Extensiones_tiposmapeo.png)

<sup>_Figura 6. Segundo mecanismo de documentación de la extensión de **Medidas o hechos** en forma de filas sin duplicar elementos DwC._</sup>

En el archivo descargado, encontrará las dos formas de estructurar la extensión.

## Ejercicio 2 - Distribución de especies

### Paso 1 - Caso de estudio
Está participando en un proyecto para realizar una lista de especies de las aves en la reserva del Pantano de Martos, en el municipio de Guatavita (Código Divipola: 25326), y definir su estrategia de conservación. El investigador principal ha revisado los datos publicados a través del SiB Colombia y la literatura del municipio para crear y estructurar la lista de especies según el estándar DwC. Adicionalmente, usted quiere añadir los datos de la distribución de las especies y sus estados de amenaza. Estos datos deben ser incorporados en la publicación de la lista por medio de la extensión **Distribución de especies** (*Species Distribution*). Su misión es usar la extensión para estructurar los datos de distribución de especies.

### Paso 2 - Exploración de la plantilla
Descargue y abra la [<FONT FACE="monospace"><b>«Plantilla de la extensión Distribución de especies (<i>Species Distribution</i>)»</b></FONT>](https://drive.google.com/uc?export=download&id=1kqyGIkeP6KdR0-hz7CbGvriQuSitWqwp), allí encontrará 4 pestañas:

* **Instrucciones**: contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de la extensión.
* **Plantilla**: contiene la tabla con los elementos DwC para documentar la extensión.
* **Definiciones**: contiene las descripciones de cada uno de los elementos del estándar DwC, recomendaciones de documentación y ejemplos.
* **Vocabulario**: contiene los vocabularios controlados para algunos elementos del *Darwin Core*.

En la pestaña de instrucciones, encontrará una sección adicional titulada **"Elementos obligatorios según el tipo de los datos"**. El único elemento obligatorio para esta extensión es el <span class="tag is-success is-light"><i>taxonID</i></span>, el cual se construye a partir del archivo [<FONT FACE="monospace"><b>«Ejercicio2_ListadeEspecies_Estructurado.xlsx»</b></FONT>](https://drive.google.com/uc?id=1YoBeJIxmH5LdVNWglcyeFcuxJT83MryO&authuser=0&export=download), como se indica en el siguiente paso. 

Explore los elementos de la extensión en la plantilla, haciendo clic en los elementos para acceder a las definiciones y vocabularios controlados (cuando corresponda). Allí encontrará algunos ejemplos pre-documentados en gris para facilitar la interpretación y el alcance de los elementos. Puede mantener estos ejemplos como referencia o eliminarlos antes de usar la plantilla. Estos marcan un punto de partida, pero no representan todas las posibilidades de la extensión, ya que el alcance temático y geográfico de cada lista de especies es diferente.

### Paso 3 - Mapeo de los datos

Observe detenidamente el nombre y contenido de cada columna del archivo [<FONT FACE="monospace"><b>«Ejercicio2_DistribuciónEspecies_porEstructurar.xlsx»</b></FONT>](https://drive.google.com/uc?id=1FRUsnhRglZ11eRQnn2mL0XCQp1W3WicZ&authuser=0&export=download), identificando a cuál elemento de la extensión corresponde. Revise la definición de los elementos y sus ejemplos para corroborar la correspondencia del mapeo (Fig. 7).

![Figura 7. Mapeo de datos en la plantilla Distribución de especies (Species Distribution)](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWCextensiones/Fig7_Extensiones_sd_mapeo.png)

<sup>_Figura 7. Mapeo de datos en la plantilla **Distribución de especies** (Species Distribution)._</sup>

Para usar cualquier extensión, es necesario contar con un identificador (ID). Este permite enlazar la extensión con los datos. En este ejercicio, el <span class="tag is-success is-light"><i>taxonID</i></span> cumple el rol de identificador, ya que los datos corresponden a una lista de especies. Por consiguiente, a partir del nombre científico en <FONT FACE="monospace"><b>«Ejercicio2_DistribucionEspecies_porEstructurar.xlsx»</b></FONT>, identifique el <span class="tag is-success is-light"><i>taxonID</i></span> en el archivo <FONT FACE="monospace"><b>«Ejercicio2_ListadeEspecies_Estructurado.xlsx»</b></FONT> y cópielo en el elemento <span class="tag is-success is-light"><i>taxonID</i></span> de la <FONT FACE="monospace"><b>«Plantilla de la extensión Distribución de especies (<i>Species Distribution</i>)»</b></FONT> (Fig. 8).

![Figura 8. Documentación del taxonID en la plantilla Distribución de especies a partir de la lista de especies](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWCextensiones/Fig8_Extensiones_sd_taxonID.png)

<sup>_Figura 8. Documentación del <span class="tag is-success is-light"><i>taxonID</i></span> en la plantilla **Distribución de especies** a partir de la lista de especies._</sup>

### Paso 4 - Ajustar los datos

#### 4.1. Ajustar según definiciones y ejemplos
Una vez mapeados todos los datos del archivo <FONT FACE="monospace"><b>«Ejercicio2_DistribucionEspecies_porEstructurar.xlsx»</b></FONT> en la plantilla de la extensión, ajuste las columnas de acuerdo a las definiciones y vocabularios controlados del estándar para cada elemento. 

#### 4.2 Completar la información geográfica
En el caso de estudio se le proporcionó el ID de la geografía superior según Divipola. Documente los elementos <span class="tag is-success is-light"><i>countryCode</i></span> y <span class="tag is-success is-light"><i>locationID</i></span>, según esta información y la definición del elemento (Fig. 9).

![Figura 9. Estandarización de elementos de acuerdo a las definiciones del estándar Darwin Core](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWCextensiones/Fig9_Extensiones_sd_ajustados.png)

<sup>_Figura 9. Estandarización de elementos de acuerdo a las definiciones del estándar Darwin Core._</sup>

####  4.3. Eliminar los elementos vacíos y filas de ejemplo
Elimine las columnas de los elementos DwC que quedaron vacías en la <FONT FACE="monospace"><b>«Plantilla de la extensión Distribución de especies (<i>Species Distribution</i>)»</b></FONT>. Recuerde que para la publicación solo debe mantener los elementos que hayan sido documentados. También puede eliminar los ejemplos resaltados en gris, ya que que estos solo son una ayuda para el mapeo de los elementos en la plantilla. 

### Paso 5 - Verificación del resultado
Compare el siguiente archivo, estandarizado según las definiciones del *Darwin Core*, con el archivo que trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Logró construir correctamente las extensiones?

Descargue el [<FONT FACE="monospace"><b>«archivo estandarizado»</b></FONT>](https://drive.google.com/uc?id=1Kk5UjFbWbLM-12W8L1cmNd58mrDXK-Jz&authuser=0&export=download).

## Ejercicio 3. - Recursos multimedia

### Paso 1 - Aplicar lo aprendido
A partir de los ejercicios previos, se puede deducir que las extensiones funcionan de forma similar. Por lo tanto, este ejercicio consiste en estructurar la extensión **Multimedia simple** (*Simple Multimedia*) a partir de lo aprendido anteriormente. 

El archivo [<FONT FACE="monospace"><b>«Ejercicio3_Registrosbiológicos_Estructurado.xlsx»</b></FONT>](https://drive.google.com/uc?id=1wm7ZvwBqywuROZ-xqTmx00dsAZUY_oQO&authuser=0&export=download) se encuentra estructurado en DwC y contiene los datos de una colección de microorganismos. Se desea asociar las cepas de dichos microorganismos a imágenes de referencia, las cuales se encuentran enlazadas en el archivo [<FONT FACE="monospace"><b>«Ejercicio3_Multimedia_porEstructurar.xlsx»</b></FONT>](https://drive.google.com/uc?id=1ghJuuEc9TDBvwu0vaWAuuu1d113nNpa7&authuser=0&export=download). El primer paso consiste en estructurar las imágenes, usando la [<FONT FACE="monospace"><b>«Plantilla de la extensión Multimedia simple (<i>Simple Multimedia</i>)»</b></FONT>](https://drive.google.com/uc?export=download&id=1Bfdgnl-KXwvLHs8H-bSe8yBXVyD8qrx8).

 ### Paso 2 - Verificación del resultado
Compare el siguiente archivo, estandarizado según las definiciones del *Darwin Core*, con el archivo que trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Logró construir correctamente las extensiones?

**[<FONT FACE="monospace"><b>«Archivo estandarizado»</b></FONT>](https://drive.google.com/uc?id=1pODwB1jELAvpTa9CvujyOd6vcFyA0Nld&authuser=0&export=download)**

## Ejercicio 4 - Datos propios

Si tiene datos propios que desee publicar, estandarícelos siguiendo los pasos de esta guía. Recuerde usar la plantilla de acuerdo al tipo y origen de los datos.

En este ejercicio, notará que las imágenes se encuentran en un repositorio. Si a futuro desea publicar imágenes asociadas a un registro biológico, es recomendable usar el recurso que mejor se adapte a sus necesidades. Algunos de los repositorios disponibles son:

* [*Wikimedia Commons*](https://commons.wikimedia.org/wiki/Main_Page){:target="_blank"}
    * Fotografías ilimitadas.
    * Sobre las galerías: [https://commons.wikimedia.org/wiki/Commons:Galleries](https://commons.wikimedia.org/wiki/Commons:Galleries){:target="_blank"}.
    * Ejemplo galería: [https://commons.wikimedia.org/wiki/London](https://commons.wikimedia.org/wiki/London){:target="_blank"}.
    
* [Internet Archive](https://archive.org/index.php){:target="_blank"}
    * Fotografías ilimitadas.
    * Sobre las colecciones: [https://help.archive.org/hc/en-us/articles/360017502272-How-to-request-a-collection-](https://help.archive.org/hc/en-us/articles/360017502272-How-to-request-a-collection-){:target="_blank"}.
    * Ejemplo colecciones: [https://archive.org/details/brooklynmuseum](https://archive.org/details/brooklynmuseum){:target="_blank"}.
    
* [Flickr](https://www.flickr.com/){:target="_blank"}
    * Opción de almacenamiento gratuito.
    * Limitado a 1000 fotografías.
    * Ejemplo: [https://www.flickr.com/photos/98788120@N02/](https://www.flickr.com/photos/98788120@N02/){:target="_blank"}.
    
* [SmugMug](https://www.smugmug.com/){:target="_blank"}
    * El almacenamiento está sujeto a pago, puede consultar aquí los planes disponibles.
    * Almacenamiento ilimitado en cualquier plan.


****
**¡Felicitaciones!**
Ha aprendido a estructurar datos adicionales con las extensiones del estándar *Darwin Core*.
****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/){:target="_blank"} permite usar, redistribuir y construir sobre estos contenidos libremente.

¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!

**Citación sugerida**

> Plata C., Ortíz R., Marentes E., Lozano J. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>

**Fuentes:**

* _Datos y caso de uso del Ejercicio 2 basado en_: 
Asociación Bogotana de Ornitología (2011). Aves del Pantano de Martos, Guatavita, Cundinamarca, 94 especies aportadas por Ruiz-Ovalle, J. (Coordinador de Proyecto), Camargo, P. (Investigador Principal, Proveedor de Contenido, Proveedor de Metadatos y Publicador), En línea, [https://doi.org/10.15472/7p2n83](https://doi.org/10.15472/7p2n83){:target="_blank"}.

* _Datos y caso de uso del Ejercicio 3 basado en_:
Alvarado Fernández A M, Rodríguez Gómez E R, Palacios Calderón L M, Trespalacios Rangel A A, Ballesteros Ballesteros J A (2021): Colección de Microorganismos-Pontificia Universidad Javeriana. v1.7. Pontificia Universidad Javeriana. Dataset/Occurrence. [https://doi.org/10.15472/ppbz1y](https://doi.org/10.15472/ppbz1y){:target="_blank"}.

