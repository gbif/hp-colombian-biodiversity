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

Estructurar un conjunto de datos bajo el estándar [*Darwin Core (DwC)*](https://dwc.tdwg.org/terms/) siguiendo las buenas prácticas de documentación y vocabularios controlados del estándar.

**Sobre la actividad**

Estructurar un conjunto de datos de prueba en el estándar *DwC* haciendo uso de la plantilla de publicación de registros biológicos del [SiB Colombia](https://sibcolombia.net/). El conjunto de datos tiene problemas de completitud y formato que deben ser resueltos para que se ajuste a las definiciones del estándar y a los elementos mínimos requeridos.

**Requerimientos** 
* Para realizar este ejercicio debes contar con un programa procesador de archivos de texto como Excel.


**Archivo de trabajo**
* Descargue el archivo [```Datos_Caso1_20reg.xls```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_docs/Datos_Caso1_20reg.xlsx) para realizar el laboratorio.
* Descargue la última versión de la [plantilla de publicación ](https://sites.google.com/humboldt.org.co/wikisib/publicar/plantillas?authuser=0)de registros biológicos.

--------

 
## Paso 1 - Caso de estudio 
Lea detenidamente el Caso de estudio, acá encontrará información relevante para completar el conjunto de datos a publicar.

*Tenga presente que este es un caso de uso basado en una historia ficticia construido solo para propósitos educativos.*


>La ‘Universidad de Ciencias Naturales’ (UCN) es reconocida en el país como una institución de referencia para la investigación sobre biodiversidad. El  Departamento de Biología Animal mantiene el Museo de Historia Natural (Registro Nacional de Colecciones Biologicas: 123), en donde la Colección Zoológica se encuentra bien representada con cerca de 700 especímenes recolectados y algunos datos de observaciones en campo a lo largo de todo el territorio nacional, desde mediados del siglo 20 hasta la actualidad.

>En la actualidad, su cuidado se encuentra a cargo del profesor de Sistemática Animal, Juan Travolta; quien realiza tareas curatoriales, investigativas y de docencia. Profesores del departamento y algunos estudiantes colaboran  casionalmente con la identificación de las muestras y toma de datos. El Coordinador del Departamento de Biología Animal (convencido de los beneficios y bondades que brinda la publicación de los datos a través del SiB Colombia) desea que se publiquen en línea los datos sobre Aves de la **colección  ornitológica (MH-ORNIT)**, Anfibios y Reptiles de la **colección de herpetología (MH-HERP)**, además de algunos **Mamíferos (MH-MAM)**. Esto permitirá ampliar la visibilidad de las colecciones biológicas de la Universidad y disponer estos datos de manera abierta para que sean consultados o usados en diferentes campos de investigación y lleguen incluso a ser empleados por tomadores de decisiones a nivel regional o nacional.

Su misión a lo largo de este laboratorio consiste en estructurar los datos del Museo siguiendo los lineamientos del estándar *Darwin Core (DwC)*.


## Paso 2 - Identificar elementos obligatorios 
Ingrese a la plantilla de publicación, donde encontrará 4 pestañas:

* **Instrucciones**: Contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de los registros biológicos.
* **Plantilla**: Contiene la tabla con los elementos *DwC* para documentar los registros biológicos 
* **Definiciones**: Contiene las definiciones para cada uno de los elementos del estándar *DwC*, recomendaciones de documentación y ejemplos.
* **Vocabulario**: Contiene los vocabularios controlados para algunos de los elementos *DwC*.

En la pestaña de instrucciones encontrará adicionalmente una sección titulada *Elementos obligatorios según el origen de los datos* (Fig. 1). De acuerdo a la lectura del **Paso 1** identifique cuales son los elementos obligatorios para el caso de estudio.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig1_Estandarizacion_datosobligatorios.png" width=1000>

<sup>*Figura 1. Instrucciones de la plantilla DwC. Elementos obligatorios según el origen de los datos.*</sup>

## Paso 3 - Crear elementos obligatorios 
Abra el archivo de trabajo [```Datos_Caso1_20reg.xls```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_docs/Datos_Caso1_20reg.xlsx)  y cree los elementos obligatorios faltantes a partir de la información que encuenta en el caso de estudio y en los mismos datos.

 
> **Pista**: Debe crear un identificador único del registro biológico (*occurenceID*) a partir del código de la institucion (*institutionCode*), código de la colección (*collectionCode*) y número de catálogo (*catalogNumber*). Revise la definición del elemento occurrenceID en la pestaña plantilla para saber como construirlo.

Ejemplo:
occurrenceID: UCN:MH-ORNIT:46-2300MI2008AV0954


## Paso 4 - Mapeo de los datos 
Una vez haya creado los elementos obligatorios, revise detenidamente el nombre y contenido de cada columna del archivo [```Datos_Caso1_20reg.xls```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_docs/Datos_Caso1_20reg.xlsx)  e identifique a cuál elemento *DwC* de la plantilla de publicación corresponde. A esta actividad la llamamos **mapeo de datos**. Cuando identifique a cual elemento corresponde, copie y pegue el contenido en la plantilla, como se muestra en la siguiente imagen (Fig. 2).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig2_Estandarizacion_mapeo.png" width=1000>

<sup>*Figura 2. Mapeo de datos en la plantilla DwC.*</sup>

## Paso 5 - Ajustar los datos  

Una vez esten todos los datos del archivo ```Datos_Caso1_20reg.xls``` en la plantilla de publicación, ajuste los datos de acuerdo a las definiciones y vocabularios controlados del estándar para cada elemento mapeado (Fig. 3).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig4_Estandarizacion_EstructuraPlantilla.png" width=800>

<sup>*Figura 3. Estructura de la plantilla de publicación.*</sup>

## Paso 6 - Eliminar elementos vacíos 
Elimine en la plantilla de registros biológicos los elementos *DwC* que quedaron vacíos, recuerde que para la publicación solo debe mantener los elementos que hayan sido documentados.

Al finalizar su plantilla se debe ver similar a la siguiente imagen (Fig. 4):

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig3_Estandarizacion_mapeofinal.png" width=1000>

<sup>*Figura 4. Resultado final del mapeo de datos y eliminación de elementos vacíos.*</sup>


## Paso 7 - Verificación del resultado

Compare el siguiente archivo estandarizado según las definiciones del estándar con el archivo que trabajó en el laboratorio y verifique en que acertó y que puede mejorar. ¿Logró completar mas información en la plantilla?.

* [Descargue el archivo estandarizado](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_docs/Datos_Caso1_20reg_estandarizado.xlsx)

## Paso 8 - Datos propios

Si tiene datos propios que desee publicar, estandarízelos siguiendo los pasos de esta guía. Recuerde usar la plantilla de acuerdo al tipo y origen de los datos.

****

**¡Felicitaciones!** :raised_hands:
Su conjunto de datos ha sido estandarizado en *Darwin Core*.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> SiB Colombia (2020). Laboratorios de datos, Ciclo de formación virtual. Consultado a través del SiB Colombia. Disponible en https://sib-colombia.github.io/Formacion/
