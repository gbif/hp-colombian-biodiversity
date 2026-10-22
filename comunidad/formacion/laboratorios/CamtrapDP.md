---
layout: documentation
permalink: /formacion/laboratorios/CamtrapDP
title: "Estandarización de datos de cámaras trampa a CamtrapDP"
description: "Objetivo: Estructurar un conjunto de datos con base en el estándar Camtrap DP, siguiendo los vocabularios controlados y las buenas prácticas de documentación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

### Estandarización de datos de cámaras trampa a CamtrapDP

**Objetivo**

Estructurar un conjunto de datos con base en el estándar Camtrap DP, siguiendo los vocabularios controlados y las buenas prácticas de documentación.

**Sobre la actividad**

*Esta actividad está diseñada para que se familiarice con la estructura del estándar Camtrap DP,* utilizado en la publicación de datos de cámaras trampa. La estructuración se realizará sobre una plantilla desarrollada por el SiB Colombia, la cual facilita el proceso al incluir las definiciones de los campos completamente en español.

Se trabajará con un conjunto de datos de diagnóstico (basado en registros reales) que presenta problemas de formato y completitud. El ejercicio práctico consistirá en estructurar estos datos para que cumplan con los requerimientos del estándar.

**Requisitos**

* Para realizar este ejercicio, es necesario contar con un programa que procese archivos de texto. Por ejemplo, Excel.

**Archivos de trabajo**

* Descargue el archivo [<FONT FACE="monospace"><b>«Datos EjemploCamtrapDP»</b></FONT>] para realizar el laboratorio.
* Descargue la última versión de la [<FONT FACE="monospace"><b>«plantilla de publicación de cámaras trampa»</b></FONT>].

**Documentación**

Para facilitar el mapeo de la información, le sugerimos familiarizarse previamente con los *elementos del estándar Camtrap DP.* Puede consultar la documentación técnica en los siguientes recursos:

* Documentación oficial: `https://camtrap-dp.tdwg.org/data/`
* Documentación en Español (SiB Colombia): `https://hp-colombian-biodiversity.gbif-staging.org/elementos-camtrap-dp`

---

#### Paso 1 - Caso de estudio

Lea detenidamente el caso de estudio, donde se encuentra la información relevante para contextualizarse sobre el conjunto de datos a estructurar. *(Este caso está basado en una historia ficticia y fue creado solo para propósitos educativos).*

La Asociación Comunitaria El Mosqueral es un referente nacional en conservación comunitaria, que con el objetivo de respaldar la investigación científica, la educación ambiental y la toma de decisiones locales, han decidido monitorear la biodiversidad presente en la Reserva Natural “El Desentendido” y publicar los datos a través de GBIF.

Para el monitoreo se utilizaron cámaras trampa activadas por sensor de movimiento configuradas para operar de manera continua. La instalación, el mantenimiento de los equipos en campo y la posterior identificación taxonómica fueron liderados por Paula Sánchez, quien a su vez utilizó Software especializado para apoyarse en la organización de los datos e identificación automatizada de algunas especies. Los datos se encuentran almacenados temporalmente en matrices de Excel organizadas manualmente. 

A continuación se comparten algunas especificaciones técnicas compartidas por la investigadora Paula Sánchez, para la estructuración de los datos:

* Todos los dispositivos se configuraron y registraron los eventos en la zona horaria UTC -5 (Hora legal de Colombia).
* El monitoreo está enfocado en mamíferos pequeños y aves principalmente.
* En este ejercicio de monitoreo, cada archivo multimedia se deriva en una identificación.

Tu misión en este laboratorio es apoyar a Paula Sánchez en la estructuración de los datos de la comunidad con base en los lineamientos del estándar CamtrapDP para su posterior publicación a través de GBIF.

#### Paso 2 - Mapeo de los datos

Descargue y abra el archivo de trabajo `<FONT FACE="monospace"><b>«DatosEjemploCamtrapDP.xlsx»</b></FONT>`. Encontrará que estos datos se encuentran divididos en 3 diferentes hojas del archivo como: Proyecto, Despliegue e Imágenes.

Con el propósito de estructurar los datos bajo el Camtrap DP, se generarán 3 tablas:

* `Deployments`: con la ubicación geográfica, fechas de inicio/fin y estado de la cámara trampa instalada por la investigadora y la comunidad.
* `Media`: listado de los archivos de imágenes capturados por los sensores.
* `Observations`: contiene los registros biológicos de aves y mamíferos identificados por Paula Sánchez en cada evento de captura.

Ahora, descargue la «plantilla de publicación de cámaras trampa» formateada en un archivo Excel, de la cual haremos uso para el desarrollo de esta actividad para el mapeo de las 3 tablas, de acuerdo al esquema del CamTrapDP.

> ⚠️ **Nota:** Examine todas las tablas del archivo `DatosEjemploCamtrapDP.xlsx`. Los atributos esenciales para construir el esquema de CamtrapDP están distribuidos en las diferentes hojas, por lo que será necesario explorar el archivo en su totalidad.

#### Paso 2.1. - Mapeo de la tabla Deployments

En esta tabla se documenta información descriptiva de las cámaras trampa, su ubicación, modelo, así como algunas características del muestreo. Abra el archivo `Datos EjemploCamtrapDP.xlsx` y revise detenidamente el nombre y contenido de cada columna e identifique a qué elemento (columna) de la «plantilla de publicación de cámaras trampa» corresponde dentro de la tabla `Deployments`. 

Este proceso recibe el nombre de **mapeo de datos**. Después de identificar el elemento correspondiente, es necesario copiar y pegar el contenido de esa columna en la plantilla, como se muestra en la siguiente imagen (Fig. 1):

<sup> *Figura 1. Mapeo de datos originales en la plantilla Camtrap DP - Deployments.* </sup>

#### Paso 2.2. - Mapeo de la tabla Media

En esta tabla se documenta la información de todos los archivos multimedia que se tomaron en el muestreo.

En el archivo `DatosEjemploCamtrapDP.xlsx` revise detenidamente el nombre y contenido de cada columna e identifique a qué elemento CamtrapDP de la «plantilla de publicación» corresponde dentro de la tabla `Media`. Copie y pegue los elementos en la plantilla como se muestra en la siguiente imagen (Fig. 2):

<sup> *Figura 2. Mapeo de datos originales en la plantilla Camtrap DP - Media.* </sup>

#### Paso 2.3. - Mapeo de la tabla Observations

En esta Tabla se documenta la información de los registros biológicos observados en el muestreo. 

Para finalizar, en el archivo `DatosEjemploCamtrapDP.xlsx` revise detenidamente el nombre y contenido de cada columna e identifique a qué elemento CamtrapDP de la «plantilla de publicación» corresponde dentro de la tabla `Observations`. Copie y pegue los elementos en la plantilla como se muestra en la siguiente imagen (Fig. 3):

<sup> *Figura 3. Mapeo de datos originales en la plantilla Camtrap DP - Observations.* </sup>

#### Paso 3 - Identificar los elementos obligatorios

Como quizás pudo notar durante la fase de mapeo, en la plantilla de publicación existe la siguiente convención de colores:

* **Naranja:** Elemento Camtrap DP Obligatorio para la publicación de los registros biológicos a través del SiB Colombia.
* **Amarillo:** Elemento Camtrap DP Esencial o recomendado en la documentación de un buen registro biológico.
* **Gris:** Elemento Camtrap DP Opcional y que puede documentarse si posee la información o si el publicador lo desea.

Dado que el esquema de Camtrap DP es bastante riguroso en la documentación de los elementos obligatorios, el siguiente paso consistirá en asegurarse de que todos los elementos en naranja quedaron completos. De lo contrario, será necesario crearlos. A continuación abordaremos algunos de ellos:

#### Paso 3.1. - Revisión de completitud de identificadores obligatorios entre tablas

Uno de los elementos obligatorios y más relevantes de este esquema son los identificadores. El siguiente esquema ejemplifica la conexión de estos identificadores entre las 3 tablas.

<sup> *Figura 4. Mapeo de datos originales en la plantilla Camtrap DP - Deployments. (Fuente: GBIF, 2023)* </sup>

1. Realice la revisión de cada uno de los elementos obligatorios en la plantilla ¿Están todos documentados?
2. Como resultado del paso 2, seguramente habrá notado que no hubo ningún elemento original con correspondencia exacta para el elemento `observationID`. Cree un identificador único del registro biológico. Para el propósito de este ejercicio, simplemente genere un consecutivo con el prefijo "OBS-" seguido por el número de la fila. (Ej. `OBS-3f036dde-695f-4672-8ad8-f80218f9768`). Adicionalmente, verifique que cuenta con los identificadores obligatorios (`deploymentID` y `mediaID`).

#### Paso 3.2. - Nivel de la observación - observationLevel

El elemento `observationLevel` (Nivel de Observación) es uno de los campos conceptuales más importantes y críticos del estándar Camtrap DP, ya que define cómo se contaron e identificaron los especímenes dentro del conjunto de datos.

* **A. media** (Basado en el archivo multimedia): La clasificación taxonómica está amarrada directamente a una foto (o video) específica (`mediaID`). Si una ráfaga tiene 3 fotos del mismo animal, habrá 3 filas en la tabla de observaciones (una por foto).
* **B. event** (Basado en el evento o secuencia): La clasificación considera el conjunto completo de fotos que componen la ráfaga o secuencia (el "evento"). Si una ráfaga de 10 fotos muestra a un jaguar cruzando, solo se genera una fila de observación para todo el evento, sin importar cuántas fotos individuales capturaron al animal.

*Para efectos de esta guía, los datos están configurados a nivel de media.* Completa el elemento `observationLevel` con esta instrucción.

> ⚠️ **Nota:** Por lo general, el identificador de las ráfagas o secuencias es el que se asocia al campo `eventID`. Tenga en cuenta que en este ejemplo práctico, al estar documentado a nivel de archivo individual (media), no existen eventos agrupados que deban asociarse a este identificador.

#### Paso 4 - Ajustar los datos

Una vez que se hayan trasladado todos los datos del archivo `DatosEjemploCamtrapDP.xlsx` a la plantilla de publicación y los elementos obligatorios se hayan completado, es necesario ajustar las columnas de acuerdo a las definiciones y vocabularios controlados del estándar para cada elemento mapeado. Para ello, se recomienda hacer clic en cada elemento para revisar si este cuenta con un vocabulario controlado asociado y con base en esto realizar el respectivo ajuste.

#### Paso 4.1. - Vocabularios controlados

Los siguientes elementos del Camtrap DP tienen vocabularios controlados, revisa cada uno y verifica que ha sido documentado de acuerdo al vocabulario. Para ello, ve a la plantilla, haz click en el elemento y revisa el vocabulario:

*Deployments*
* `featureType` (Tipo de rasgo del paisaje)

*Media*
* `captureMethod` (Método de captura)

*Observations*
* `observationLevel` (Nivel de la observación)
* `observationType` (Tipo de observación)
* `cameraSetupType` (Tipo de acción en la instalación de la cámara)
* `lifeStage` (Etapa de desarrollo)
* `sex` (Sexo)
* `classificationMethod` (Método de clasificación)

<sup> *Figura 5. Estructura de la plantilla de publicación. Vocabulario controlado asociado a la definición del elemento presente en la pestaña “Vocabulario” de la plantilla.* </sup>

#### Paso 4.2. - Fechas en CamtrapDP

Al estructurar la tabla de `Deployments`, los registros deberán formatearse bajo el estándar ISO 8601 (ej. `2026-05-18T09:30:00Z`). Revisa todos los elementos de fechas y ajusta según corresponda.

> ⚠️ **Nota:** En los casos en que no se cuenta con la hora, se recomienda documentar como `T00:00:00Z` para la fechas iniciales y `T23:59:59Z` para las fechas finales.

#### Paso 5 - Eliminar los elementos vacíos

Nos encontramos en la etapa final, ahora debe proceder a eliminar los elementos que quedaron vacíos en la plantilla de datos de cámaras trampa. Es importante recordar que para la publicación solo se deben mantener los elementos que hayan sido documentados.

*Elimina la segunda fila con los nombres en español para las 3 plantillas: Deployments, Media y Observations.*

Al finalizar, la plantilla debe verse similar a la siguiente imagen (Fig. 6):

<sup> *Figura 6. Resultado final del mapeo de datos y la eliminación de elementos vacíos.* </sup>

Por último, exporta cada hoja en formato `.txt` para facilitar su carga a la herramienta de publicación IPT. Así tendrás los datos listos.

#### Paso 6 - Verificación del resultado

Descarga y compara el siguiente archivo, estandarizado según las definiciones del Camtrap DP, con el archivo que trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Fue posible completar más elementos del conjunto de datos en la plantilla?

* [<FONT FACE="monospace"><b>«Archivo estandarizado»</b></FONT>]

---

**¡Felicitaciones!** El conjunto de datos de cámaras trampa ha sido estandarizado según el Camtrap DP.

---

**Citación sugerida**

Ortíz R., Castro, C., Marentes E., Salinas P., Sanchez L., Murillo D. (2026). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en: `https://biodiversidad.co/formacion/laboratorios` (muy pronto).

**Referencias**

Silva C, Diaz A (2026). Monitoreo de biodiversidad utilizando cámaras trampa en la Estructura Ecológica Principal de Santiago de Cali. Version 3. Departamento Administrativo de Gestión del Medio Ambiente. Camtrap DP dataset. `https://ipt.biodiversidad.co/sib/resource?r=dagma-otus_fototrampeo&v=3`

Bubnicki JW, Norton B, Baskauf SJ, Bruce T, Cagnacci F, Casaer J, Churski M, Cromsigt JPGM, Farra SD, Fiderer C, Forrester TD, Hendry H, Heurich M, Hofmeester TR, Jansen PA, Kays R, Kuijper DPJ, Liefting Y, Linnell JDC, Luskin MS, Mann C, Milotic T, Newman P, Niedballa J, Oldoni D, Ossi F, Robertson T, Rovero F, Rowcliffe M, Seidenari L, Stachowicz I, Stowell D, Tobler MW, Wieczorek J, Zimmermann F, Desmet P (2023). Camtrap DP: an open standard for the FAIR exchange and archiving of camera trap data. Remote Sensing in Ecology and Conservation. `https://doi.org/10.1002/rse2.374`
