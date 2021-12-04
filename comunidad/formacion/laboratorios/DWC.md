---
layout: documentation
permalink: /formacion/laboratorios/DWC 
title: "Estandarización de datos en Darwin Core"
description: "Objetivo: Estructurar un conjunto de datos bajo el estándar Darwin Core (DwC)."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estandarización de datos en Darwin Core


**Objetivo**

Estructurar un conjunto de datos bajo el estándar [*Darwin Core* (DwC)](https://dwc.tdwg.org/terms/), siguiendo sus vocabularios controlados y las buenas prácticas de documentación.

**Sobre la actividad**

Estructurar un conjunto de datos de prueba según el estándar DwC, usando la plantilla de publicación de registros biológicos del [SiB Colombia](https://sibcolombia.net/). El conjunto de datos tiene problemas de completitud y formato, los cuales deben ser resueltos para que el conjunto se ajuste a las definiciones y contenga los elementos mínimos requeridos por el estándar.

**Requisitos** 
* Para realizar este ejercicio, es necesario contar con un programa que procese archivos de texto. Por ejemplo, Excel.


**Archivo de trabajo**
* Descargue el archivo [<FONT FACE="monospace"><b>«Datos_Caso1_20reg.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_docs/Datos_Caso1_20reg.xlsx) para realizar el laboratorio.
* Descargue la última versión de la [<FONT FACE="monospace"><b>«Plantilla de publicación»</b></FONT>](https://sites.google.com/humboldt.org.co/wikisib/publicar/plantillas?authuser=0) de registros biológicos.

--------

 
## Paso 1 - Caso de estudio 
Lea detenidamente el caso de estudio, allí encontrará información relevante para completar el conjunto de datos a publicar.

(Tenga presente que este caso está basado en una historia ficticia y fue creado solo para propósitos educativos).


>La «Universidad de Ciencias Naturales» (UCN) es reconocida en el país como una institución de referencia para la investigación sobre biodiversidad. El  Departamento de Biología Animal mantiene el Museo de Historia Natural (Registro Nacional de Colecciones Biológicas: 123), en donde la Colección Zoológica se encuentra bien representada con cerca de 700 especímenes recolectados a lo largo del territorio nacional, desde mediados del siglo 20 hasta la fecha. En la actualidad, su cuidado se encuentra a cargo del profesor de Sistemática Animal, Juan Travolta, quien realiza tareas curatoriales, investigativas y de docencia. Además, otros profesores del departamento y algunos estudiantes colaboran ocasionalmente con la identificación de muestras y la toma de datos. El Coordinador del Departamento de Biología Animal, convencido de los beneficios y bondades que brinda la publicación de información a través del SiB Colombia, desea que se publiquen en línea los datos sobre aves de la **colección  ornitológica (MH-ORNIT)**, anfibios y reptiles de la **colección de herpetología (MH-HERP)** y algunos **mamíferos (MH-MAM)**. Esto permitirá ampliar la visibilidad de las colecciones biológicas de la universidad y dar acceso abierto a dichos datos para que sean consultados o usados en diferentes campos de investigación, llegando incluso a ser utilizados por tomadores de decisiones a nivel regional o nacional.

Su misión, a lo largo de este laboratorio, consiste en estructurar los datos del museo con base los lineamientos del estándar *Darwin Core* (DwC).


## Paso 2 - Identificar los elementos obligatorios 
Ingrese a la plantilla de publicación, allí encontrará 4 pestañas:

* **Instrucciones**: contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de los registros biológicos.
* **Plantilla**: contiene la tabla de los elementos DwC para documentar los registros biológicos.
* **Definiciones**: contiene las definiciones para cada uno de los elementos del estándar DwC, recomendaciones de documentación y ejemplos.
* **Vocabulario**: contiene los vocabularios controlados para algunos de los elementos DwC.

En la pestaña de instrucciones, encontrará adicionalmente una sección titulada «Elementos obligatorios según el origen de los datos» (Fig. 1). De acuerdo a la lectura del caso de estudio, identifique cuáles son los elementos obligatorios para el ejercicio.

![Figura 1. Instrucciones de la plantilla DwC: Elementos obligatorios según el origen de los datos](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWC/Fig1_Estandarizacion_datosobligatorios.png)

<sup>*Figura 1. Instrucciones de la plantilla DwC: Elementos obligatorios según el origen de los datos.*</sup>

## Paso 3 - Crear los elementos obligatorios 
Abra el archivo de trabajo [<FONT FACE="monospace"><b>«Datos_Caso1_20reg.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_docs/Datos_Caso1_20reg.xlsx) y cree los elementos obligatorios faltantes a partir de la información del caso de estudio y los mismos datos.

 
> **Pista**: Debe crear un identificador único del registro biológico (<span class="tag is-success is-light"><i>occurrenceID</i></span>) a partir del código de la institución (<span class="tag is-success is-light"><i>institutionCode</i></span>), código de la colección (<span class="tag is-success is-light"><i>collectionCode</i></span>) y número de catálogo (<span class="tag is-success is-light"><i>catalogNumber</i></span>). Revise la definición del elemento <span class="tag is-success is-light"><i>occurrenceID</i></span> en la plantilla para saber cómo construirlo.

Ejemplo de <span class="tag is-success is-light"><i>occurrenceID</i></span>: UCN:MH-ORNIT:46-2300MI2008AV0954.


## Paso 4 - Mapeo de los datos 
Una vez que haya creado los elementos obligatorios, revise detenidamente el nombre y contenido de cada columna del archivo [<FONT FACE="monospace"><b>«Datos_Caso1_20reg.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/docs/Datos_Caso1_20reg.xlsx) e identifique a cuál elemento DwC de la plantilla de publicación corresponde. Este proceso recibe el nombre de **mapeo de datos**. Cuando identifique el elemento correspondiente, copie y pegue el contenido de esa columna en la plantilla, como se muestra en la siguiente imagen (Fig. 2):

![Figura 2. Mapeo de datos en la plantilla DwC](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWC/Fig2_Estandarizacion_mapeo.png)

<sup>*Figura 2. Mapeo de datos en la plantilla DwC.*</sup>

## Paso 5 - Ajustar los datos  

Una vez que haya trasladado todos los datos del archivo [<FONT FACE="monospace"><b>«Datos_Caso1_20reg.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/docs/Datos_Caso1_20reg.xlsx) a la plantilla de publicación, ajuste las columnas de acuerdo a las definiciones y vocabularios controlados del estándar *Darwin Core* para cada elemento mapeado (Fig. 3).

![Figura 3. Estructura de la plantilla de publicación](https://github.com/gbif/hp-colombian-biodiversity/blob/ea80d729c149794b7f4dd6c0dc878710eedf14ff/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWC/Fig3_Estandarizacion_EstructuraPlantilla.png)

<sup>*Figura 3. Estructura de la plantilla de publicación.*</sup>

## Paso 6 - Eliminar los elementos vacíos 
Elimine en la plantilla de registros biológicos los elementos DwC que quedaron vacíos. Recuerde que para la publicación solo debe mantener los elementos que hayan sido documentados.

Al finalizar, su plantilla debe verse similar a la siguiente imagen (Fig. 4):

![Figura 4. Resultado final del mapeo de datos y la eliminación de elementos vacíos](https://github.com/gbif/hp-colombian-biodiversity/blob/ea80d729c149794b7f4dd6c0dc878710eedf14ff/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_DWC/Fig4_Estandarizacion_mapeofinal.png)

<sup>*Figura 4. Resultado final del mapeo de datos y la eliminación de elementos vacíos.*</sup>


## Paso 7 - Verificación del resultado

Descargue y compare el siguiente archivo, estandarizado según las definiciones del *Darwin Core*, con el archivo que trabajó en el laboratorio e identifique aciertos y oportunidades de mejora. ¿Logró completar más información del conjunto de datos en la plantilla?


* [<FONT FACE="monospace"><b>«Archivo estandarizado»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_docs/Datos_Caso1_20reg_estandarizado.xlsx)

## Paso 8 - Datos propios

Si tiene datos propios que desee publicar, estandarícelos siguiendo los pasos de esta guía. Recuerde usar la plantilla de acuerdo al tipo y origen de los datos.

****

**¡Felicitaciones!**
Su conjunto de datos ha sido estandarizado según el *Darwin Core*.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) permite usar, redistribuir y construir sobre estos contenidos libremente.

¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!

**Citación sugerida**

> Plata C., Ortíz R., Marentes E., Lozano J. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
