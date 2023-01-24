---
layout: documentation
permalink: /formacion/laboratorios/extensiones-dwc-permisos
title: "Estandarización de información de permisos de colecta y contratos de acceso a recursos genéticos con la extensión GGBN Permit"
description: "Objetivo: Estructurar la información asociada al permiso de recolección según la Extensión Permiso GGBN, siguiendo las buenas prácticas de documentación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estandarización de información de permisos de colecta y contratos de acceso a recursos genéticos con la extensión _GGBN Permit_

**Objetivo**

Estructurar la información asociada al permiso de recolección según la extensión [**Permisos GGBN**](https://biodiversidad.co/compartir/estandar-darwin-core/#permiso-ggbn){:target="_blank"}, siguiendo las buenas prácticas de documentación.

**Sobre la actividad**

Estructurar la información asociada a un permiso de colecta, usando la Plantilla de la extensión [**Permisos GGBN**](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones){:target="_blank"}. Los datos tienen problemas de completitud y formato, los cuales deben ser resueltos para que el conjunto se ajuste a las definiciones y contenga los elementos mínimos requeridos.

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

- Descargar el archivo [<FONT FACE="monospace"><b>«Permisos_CasoEmpresa_20regs»</b></FONT>](https://docs.google.com/spreadsheets/d/1TJZfZJ-dWbxmy0zGrduTrZTSIYOPLrft/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} para realizar el laboratorio.

- Descargar la última versión de la plantilla de la extensión [**Permisos GGBN**](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones){:target="_blank"}.


--------

## Paso 1 - Caso de estudio 

>La empresa ambiental Buenaventura Consultores ABC quiere publicar los registros biológicos asociados a los eventos de monitoreo que se realizaron a lo largo del año. Estos registros han sido obtenidos a través de permisos de exportación, permisos para la recolección de especímenes de especies silvestre y contratos de acceso a recursos genéticos, todos **vigentes** y otorgados por diferentes autoridades. 
Como parte de los requerimientos para obtener el certificado de reporte a través del SiB Colombia y poder reportarlo a las autoridades que lo requieran, la empresa documentó esta información en un archivo adicional para asociar cada colecta realizada con su respectivo permiso.

Tu misión  en este laboratorio es estructurar los datos de los permisos, utilizando la extensión **Permisos GGBN** (_GGBN Permit Extension_), de forma que estos puedan incluirse en la publicación de registros biológicos a través del SiB Colombia.

## Paso 2 - Exploración de la plantilla

Descargar y abrir la plantilla de la extensión [**Permisos GGBN**](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones){:target="_blank"}, allí hay tres pestañas:

- **Instrucciones**: contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de la extensión.
- **Plantilla**: contiene la tabla con los elementos DwC para documentar la extensión y unas filas de ejemplo.
- **Definiciones** contiene las descripciones de cada uno de los elementos del estándar DwC, recomendaciones de documentación y ejemplos.

En la pestaña de instrucciones se encuentra una sección titulada **"Elementos obligatorios según el tipo de los datos"** (Fig. 1). De acuerdo a la lectura del Paso 1 y los datos de ejemplo <FONT FACE="monospace"><b>«Permisos_CasoEmpresa_20regs»</b></FONT>, se deben identificar los elementos obligatorios para el uso de la extensión y tenerlos en cuenta para el paso 2. 

![Figura 1. Elementos obligatorios de la extensión para publicar registros biológicos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-permisos/Fig1_C3Permisos_Obligatorios.png)
<sup>_Figura 1. Elementos obligatorios de la extensión para publicar registros biológicos._</sup>

La plantilla contiene algunos ejemplos pre-documentados en gris para facilitar la interpretación y el alcance de los elementos. Los ejemplos pueden mantenerse como referencia o se pueden eliminar antes de usar la plantilla. Estos marcan un punto de partida, pero no representan todas las posibilidades de la extensión, ya que los elementos a documentar pueden variar según las fuentes de datos.

## Paso 3 - Mapeo de los datos

Después de explorar la extensión e identificar los elementos obligatorios, es necesario revisar detenidamente el archivo <FONT FACE="monospace"><b>«Permisos_CasoEmpresa_20regs»</b></FONT>. Luego, se debe copiar y pegar el contenido de esas columnas en la plantilla de la extensión **Permisos GGBN**. Esta actividad recibe el nombre de mapeo de datos. Por último, revisar la definición de los elementos y sus ejemplos para corroborar la correspondencia del mapeo. Esto implica asegurar que todos los elementos obligatorios estén documentados y ajustar las columnas de acuerdo a las definiciones del estándar DwC.

### 3.1. Mapeo del elemento permitText 

Utilizar la información del archivo <FONT FACE="monospace"><b>«Permisos_CasoEmpresa_20regs»</b></FONT> para documentar la plantilla de **Permisos GGBN**. Algunas de las columnas del archivo original se deben unir en un único elemento <span class="tag is-success is-light"><i>permitText</i></span>. Esto es común en algunos procesos de mapeo, donde varias columnas se combinan en un solo elemento _DarwinCore_; o viceversa, donde de una columna se pueden derivar varios elementos, de acuerdo a las recomendaciones y definiciones del estándar (Fig. 2)

Ejemplo del elemento <span class="tag is-success is-light"><i>permitText</i></span>: Corantioquia:160-RES1811-6441:2005:ABC

![Figura 2. Datos mapeados y ajustados en la plantilla de la extensión Permisos GGBN.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-permisos/Fig2_C3Permisos_Mapeo.png)
<sup>_Figura 2. Datos mapeados y ajustados en la plantilla de la extensión **Permisos GGBN**._</sup>

### 3.2. Estructurar el elemento occurrenceID

Para hacer uso de la extensión, es necesario contar con un identificador (ID) que enlace la extensión con los datos del Core del estándar DwC; en este caso, registros biológicos. Por consiguiente, es necesario ajustar el <span class="tag is-success is-light"><i>occurrenceID</i></span> de la extensión **Permisos GGBN** para que coincida exactamente con el del conjunto de datos estructurado en <FONT FACE="monospace"><b>«Datos_CasoEmpresa_20reg_estandarizado»</b></FONT> (Fig. 3).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-permisos/Fig3_C3Permisos_Occurrence.png" width=600>

<sup>_Figura 3. Diferencia entre el <span class="tag is-success is-light"><i>occurrenceID</i></span> del conjunto de datos de registros biológicos y el del elemento mapeado en la extensión._</sup>

## Paso 4 - Ajustar los datos

Eliminar las columnas de los elementos DwC que quedaron vacías en la plantilla. Es importante recordar que para la publicación solo se deben mantener los elementos que hayan sido documentados (Fig. 4). También se deben eliminar los ejemplos resaltados en gris, ya que estos solo son una ayuda para el mapeo de los elementos en la plantilla.

![Figura 4. Datos ajustados según las definiciones y los vocabularios controlados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-permisos/Fig4_C3Permisos_Resultados.png)
<sup>_Figura 4. Datos ajustados según las definiciones y los vocabularios controlados._</sup>

## Paso 5 - Verificación del resultado

Compara el [<FONT FACE="monospace"><b>«archivo estandarizado»</b></FONT>](https://docs.google.com/spreadsheets/d/1XVmqHsbVM20w-ubQIlPv6cEV2edIcR8C/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} con el archivo que se trabajó en el ejercicio para identificar aciertos y posibilidades de mejora. ¿La información de la extensión de permisos quedó correctamente estandarizada?


****
**¡Felicitaciones!**

La información asociada a los permisos de colecta ha sido estandarizada según la extensión de Permisos GGBN.

****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C.(2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
