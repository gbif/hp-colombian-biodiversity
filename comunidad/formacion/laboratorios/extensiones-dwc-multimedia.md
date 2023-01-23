---
layout: documentation
permalink: /formacion/laboratorios/extensiones-dwc-multimedia
title: "Estandarización de datos con la extensión Multimedia simple"
description: "Objetivo: Estructurar un grupo de recursos multimedia según la Extensión Multimedia Simple del estándar Darwin Core, siguiendo las buenas prácticas de documentación"
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estandarización de datos con la extensión Multimedia simple

**Objetivo**

Estructurar un grupo de recursos multimedia según la [extensión Multimedia simple del estándar Darwin Core](https://biodiversidad.co/compartir/estandar-darwin-core/#multimedia-simple), siguiendo las buenas prácticas de documentación.

**Sobre la actividad**

Estructurar un conjunto de recursos multimedia de ejemplo, usando la [Plantilla de Multimedia Simple](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones). Los datos tienen problemas de completitud y formato, los cuales deben ser resueltos para que el conjunto se ajuste a las definiciones y contenga los elementos mínimos requeridos.

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Requisitos** 

Para realizar este ejercicio, es necesario contar con un programa que procese archivos de texto. Por ejemplo, Excel.

**Archivo de trabajo**

Descargar el archivo [<FONT FACE="monospace"><b>«Multimedia_sonidos_20reg»</b></FONT>](https://docs.google.com/spreadsheets/d/1aYWf8O5VchUmJPIO01al0E6cZ6AxiWjm/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}) para realizar el laboratorio.

Descargar el archivo ([Registros multimedia casoSonidos](https://docs.google.com/spreadsheets/d/1cHf6D-QBReyybqAoRwmFTk7NlzydAJTB/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}), el cual contiene registros biológicos estandarizados.

Descargar la última versión de la  [<FONT FACE="monospace"><b>«Plantilla de la extensión Multimedia Simple»</b></FONT>](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones)».


--------

## Paso 1 - Caso de estudio 

La empresa turística Awake Travel realiza ejercicios de monitoreos acústicos para aves en algunos de los destinos de viaje que ofrece. Esto con el fin de evaluar el estado de los ecosistemas. Para visibilizar esta actividad de monitoreo, la empresa decidió publicar los registros biológicos a través del SiB Colombia. Sin embargo, ahora quieren complementar dicha publicación con las grabaciones de las aves, que se encuentran publicadas en un repositorio externo.

Este ejemplo cuenta con algunas de las grabaciones realizadas por Awake, documentadas en un archivo de trabajo sin estructurar, algunos detalles de los cantos y los enlaces al repositorio. Tu misión en este laboratorio es estructurar los datos de las grabaciones, utilizando la extensión **Multimedia simple** (_Simple Multimedia_), para que puedan incluirse en la publicación de los registros biológicos.

## Paso 2 - Exploración de la plantilla

Descargar y abrir la [Plantilla de Multimedia simple](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones), que se compone de cuatro pestañas:

- **Instrucciones**: contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de la extensión.
- **Plantilla**: contiene la tabla con los elementos DwC para documentar la extensión y unas filas de ejemplo.
- **Definiciones** contiene las descripciones de cada uno de los elementos del estándar DwC, recomendaciones de documentación y ejemplos.
- **Vocabulario**: contiene los vocabularios controlados para el elemento type.

En la hoja de instrucciones hay una sección titulada **“Elementos obligatorios según el tipo de los datos”** (Fig. 1). De acuerdo a la lectura del Paso 1 y los datos de ejemplo <FONT FACE="monospace"><b>«Multimedia_sonidos_20reg»</b></FONT>, se deben identificar los elementos obligatorios para el uso de la extensión.

![Figura 1. Elementos obligatorios de la extensión para publicar los datos asociados a  registros biológicos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-multimedia/Fig1_C3Medidas_Obligatorios.png)
<sup>_Figura 1. Elementos obligatorios de la extensión para publicar los datos asociados a registros biológicos._</sup>

Se evidencia que algunos ejemplos están pre-documentados en gris para facilitar la interpretación y el alcance de los elementos. Los ejemplos pueden mantenerse como referencia o se pueden eliminar antes de usar la plantilla. Estos marcan un punto de partida, pero no representan todas las posibilidades de la extensión, ya que los elementos a documentar pueden variar según las fuentes de datos.

## Paso 3 - Mapeo de los datos

Luego de haber explorado la extensión e identificado los elementos obligatorios, es necesario revisar detenidamente el archivo <FONT FACE="monospace"><b>«Multimedia_sonidos_20reg»</b></FONT>. Posteriormente, se debe copiar y pegar el contenido de las columnas en la plantilla de la extensión de **Multimedia simple**. Esta actividad recibe el nombre de mapeo de datos. Por último, revisar la definición de los elementos y sus ejemplos para corroborar la correspondencia del mapeo. 

![Figura 2. Mapeo de datos a los elementos de la plantilla.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-multimedia/Fig2_C3Medidas_Mapeo.png)
<sup>_Figura 2. Mapeo de datos a los elementos de la plantilla._</sup>

### 3.1. Estructurar el elemento occurrenceID

Para usar la extensión, es necesario contar con un identificador. Este permite enlazar la extensión con los registros biológicos. En este ejercicio, el <span class="tag is-success is-light"><i>occurrenceIDt</i></span> cumple el rol de identificador, ya que los datos corresponden a registros biológicos <FONT FACE="monospace"><b>«Registros_multimedia_casoSonidos»</b></FONT>. Por lo tanto, es necesario asegurarse de que el <span class="tag is-success is-light"><i>occurrenceIDt</i></span> de la extensión **Multimedia simple** coincida exactamente con el del conjunto de datos estructurado. Para hacerlos coincidir, es necesario realizar los ajustes pertinentes (Fig. 3).

![Figura 3. Diferencia entre el occurrenceID del conjunto de datos de registros biológicos y el del elemento mapeado en la extensión.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-multimedia/Fig3_C3Medidas_Occurrence.png)
<sup>_Figura 3. Diferencia entre el <span class="tag is-success is-light"><i>occurrenceIDt</i></span> del conjunto de datos de registros biológicos y el del elemento mapeado en la extensión._</sup>

## Paso 4 - Ajustar los datos

### 4.1. Ajustar según definiciones y ejemplos

Una vez mapeados los datos del archivo <FONT FACE="monospace"><b>«Multimedia_sonidos_20reg»</b></FONT> en la plantilla de la extensión **Multimedia simple**, se deben ajustar las columnas de acuerdo a las definiciones del estándar DwC para cada elemento (Fig. 4).

![Figura 4. Datos ajustados según las definiciones y los vocabularios controlados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-multimedia/Fig4_C3Medidas_Resultados.png)
<sup>_Figura 4. Datos ajustados según las definiciones y los vocabularios controlados._</sup>

### 4.2. Eliminar los elementos vacíos y filas de ejemplo

Eliminar las columnas de los elementos DwC que quedaron vacías en la plantilla de **Multimedia simple**. Es importante recordar que para la publicación solo deben mantenerse los elementos que hayan sido documentados. También se deben eliminar los ejemplos resaltados en gris, ya que estos son solo una ayuda para el mapeo de los elementos en la plantilla.

## Paso 5 - Verificación del resultado

Compara el siguiente [<FONT FACE="monospace"><b>«archivo estandarizado»</b></FONT>](https://docs.google.com/spreadsheets/d/1YmgHq5lVYKGu8iK5hU4dMUj83UHBl4_w/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} con el archivo que trabajó en el ejercicio para identificar aciertos y posibilidades de mejora. ¿Los registros multimedia quedaron correctamente construidos?


****
**¡Felicitaciones!**

Los elementos multimedia que estaban en el formato de trabajo interno han sido estandarizados según la extensión **Multimedia simple**.

****

## Reto: Imágenes multimedia

### Paso 1 - Aplicar lo aprendido

Teniendo en cuenta lo aprendido en este laboratorio, se puede deducir que las extensiones funcionan de forma similar en diferentes casos. Por lo tanto, el siguiente reto consiste en estructurar la extensión **Multimedia simple** (_Simple Multimedia_), aplicando el mismo procedimiento para otro tipo de recurso: imágenes.

El archivo [<FONT FACE="monospace"><b>«Ejercicio2_Registrosbiológicos_Estructurado.xlsx»</b></FONT>](https://drive.google.com/uc?id=1wm7ZvwBqywuROZ-xqTmx00dsAZUY_oQO&authuser=0&export=download){:target="_blank"} se encuentra estructurado en DwC y contiene los datos de una colección de microorganismos. Se desea asociar las cepas de dichos microorganismos a imágenes de referencia, las cuales se encuentran enlazadas en el archivo [<FONT FACE="monospace"><b>«Ejercicio2_Multimedia_porEstructurar.xlsx»</b></FONT>](https://drive.google.com/uc?id=1ghJuuEc9TDBvwu0vaWAuuu1d113nNpa7&authuser=0&export=download){:target="_blank"}». El primer paso consiste en estructurar las imágenes, usando la [<FONT FACE="monospace"><b>«Plantilla de la extensión Multimedia simple»</b></FONT>](https://drive.google.com/uc?export=download&id=1Bfdgnl-KXwvLHs8H-bSe8yBXVyD8qrx8){:target="_blank"}.

### Paso 2 - Verificación del resultado 

Compara el siguiente archivo, estandarizado según las definiciones del Darwin Core, con el archivo que trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Las extensiones quedaron correctamente construidas?

[<FONT FACE="monospace"><b>«Archivo estandarizado»</b></FONT>](https://drive.google.com/uc?id=1pODwB1jELAvpTa9CvujyOd6vcFyA0Nld&authuser=0&export=download){:target="_blank"}

En el reto se puede observar que las imágenes están en un repositorio. Si a futuro se desean publicar imágenes asociadas a un registro biológico, es recomendable usar el repositorio que mejor se adapte a cada caso. Algunos de los que están disponibles son:


- [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page){:target="_blank"}
  - Fotografías ilimitadas.
  - Sobre las galerías: [https://commons.wikimedia.org/wiki/Commons:Galleries](https://commons.wikimedia.org/wiki/Commons:Galleries){:target="_blank"}.
  - Ejemplo galería: [https://commons.wikimedia.org/wiki/London](https://commons.wikimedia.org/wiki/London){:target="_blank"}.
- [Internet Archive](https://archive.org/index.php){:target="_blank"}
  - Fotografías ilimitadas.
  - Sobre las colecciones: [https://help.archive.org/help/how-to-request-a-collection/](https://help.archive.org/help/how-to-request-a-collection/){:target="_blank"}.
  - Ejemplo colecciones: [https://archive.org/details/cmpuj](https://archive.org/details/cmpuj){:target="_blank"}.
- [Flickr](https://www.flickr.com/){:target="_blank"}
  - Opción de almacenamiento gratuito.
  - Limitado a 1000 fotografías.
  - Ejemplo: [https://www.flickr.com/photos/98788120@N02/](https://www.flickr.com/photos/98788120@N02/){:target="_blank"}.
- [SmugMug](https://www.smugmug.com/){:target="_blank"}
  - El almacenamiento está sujeto a pago, hay varios planes disponibles.
  - Almacenamiento ilimitado en cualquier plan.

**¡Felicitaciones!** Ha aprendido a estructurar datos de imágenes con base en la extensión **Multimedia simple**.

****

**Citación**

> Marentes E., Plata C., Ortíz R., Lozano J. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 

**Fuentes:**

- Datos y caso de uso basado en: Lizcano D, Pedraza C, Romero L, Campos-Cerqueira M (2022): Acoustic monitoring in nature travel destinations of Colombia. v1.2. Awake Travel. Dataset/Occurrence. [https://doi.org/10.15472/kzo6hg](https://doi.org/10.15472/kzo6hg){:target="_blank"}.
- Datos y caso de uso del Reto basado en: Alvarado Fernández A M, Rodríguez Gómez E R, Palacios Calderón L M, Trespalacios Rangel A A, Ballesteros Ballesteros J A (2021): Colección de Microorganismos-Pontificia Universidad Javeriana. v1.7. Pontificia Universidad Javeriana. Dataset/Occurrence. [https://doi.org/10.15472/ppbz1y](https://doi.org/10.15472/ppbz1y){:target="_blank"}.
