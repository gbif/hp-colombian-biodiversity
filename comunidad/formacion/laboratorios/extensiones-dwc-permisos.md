---
layout: documentation
permalink: /formacion/laboratorios/extensiones-dwc-permisos
title: "Estandarización de información de permisos de colecta y contratos de acceso a recursos genéticos con la extensión GGBN Permit"
description: "Objetivo: Estructurar la información asociada al permiso de recolección según la Extensión Permiso GGBN, siguiendo las buenas prácticas de documentación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estandarización de información de permisos de colecta y contratos de acceso a recursos genéticos con la extensión GGBN Permit

**Objetivo**

Estructurar la información asociada al permiso de recolección según la [Extensión Permiso GGBN](https://biodiversidad.co/compartir/estandar-darwin-core/#permiso-ggbn), siguiendo las buenas prácticas de documentación.

**Sobre la actividad**

Estructurar la información asociada a un permiso de colecta, usando la [Plantilla de Permisos GGBN](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones). Los datos tienen problemas de completitud y formato, los cuales deben ser resueltos para que el conjunto se ajuste a las definiciones y contenga los elementos mínimos requeridos.

**Requisitos** 

Para realizar este ejercicio, es necesario contar con un programa que procese archivos de texto. Por ejemplo, Excel.

**Archivo de trabajo**

Descargar el archivo ([Permisos_CasoEmpresa_20reg](https://docs.google.com/spreadsheets/d/1TJZfZJ-dWbxmy0zGrduTrZTSIYOPLrft/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}) para realizar el laboratorio.

Descargar la última versión de la «[Plantilla de la extensión Permisos GGBN](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones)».


--------

## Paso 1 - Caso de estudio 

La empresa Ambiental Buenaventura Consultores ABC quiere publicar los registros biológicos asociados a los eventos de monitoreo que se realizaron a lo largo del año. Estos registros han sido obtenidos a través de permisos de exportación, permisos para la recolección de especímenes de especies silvestre y contratos de acceso a recursos genéticos, todos **vigentes** y otorgados por diferentes autoridades. 

Como parte de los requerimientos para obtener el certificado de reporte a través del SiB Colombia y poder reportarlo a las autoridades que lo requieran, la empresa documentó esta información en un archivo adicional para asociar cada colecta realizada con su respectivo permiso.

Tu misión  en este laboratorio es estructurar los datos de los permisos, utilizando la extensión **Permisos GGBN** (GGBN Permit Extension), para que estos puedan incluirse en la publicación de registros biológicos a través del SiB Colombia.

## Paso 2 - Exploración de la plantilla

Descargar y abrir la [Plantilla de la extensión Permisos GGBN](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones), allí hay tres pestañas:

- **Instrucciones**: contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de la extensión.
- **Plantilla**: contiene la tabla con los elementos DwC para documentar la extensión y unas filas de ejemplo.
- **Definiciones** contiene las descripciones de cada uno de los elementos del estándar DwC, recomendaciones de documentación y ejemplos.

En la pestaña de instrucciones se encuentra una sección titulada "Elementos obligatorios según el tipo de los datos" (Fig. 1). De acuerdo a la lectura del Paso 1 y los datos de ejemplo ([Permisos_CasoEmpresa_20reg](https://docs.google.com/spreadsheets/d/1TJZfZJ-dWbxmy0zGrduTrZTSIYOPLrft/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}), identifique cuáles son los elementos obligatorios para el uso de la extensión y téngalos en cuenta para el paso 2. 

![Figura 1. Elementos obligatorios de la extensión para publicar registros biológicos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-permisos/Fig1_C3Permisos_Obligatorios.png)
<sup>_Figura 1. Elementos obligatorios de la extensión para publicar registros biológicos._</sup>

La plantilla contiene algunos ejemplos pre-documentados en gris para facilitar la interpretación y el alcance de los elementos. Los ejemplos pueden mantenerse como referencia o se pueden eliminar antes de usar la plantilla. Estos marcan un punto de partida, pero no representan todas las posibilidades de la extensión, ya que los elementos a documentar pueden variar según las fuentes de datos.

## Paso 3 - Mapeo de los datos

Después de explorar la extensión e identificar los elementos obligatorios, es necesario revisar detenidamente el archivo [Permisos_CasoEmpresa_20reg](https://docs.google.com/spreadsheets/d/1TJZfZJ-dWbxmy0zGrduTrZTSIYOPLrft/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}. Luego, se debe copiar y pegar el contenido de esas columnas en la plantilla de la extensión de permisos. Esta actividad recibe el nombre de mapeo de datos. Por último, revisar la definición de los elementos y sus ejemplos para corroborar la correspondencia del mapeo. Esto implica asegurar que todos los elementos obligatorios estén documentados y ajustar las columnas de acuerdo a las definiciones del estándar DwC.

### 3.1. Mapeo del elemento permitText 

Utilizar la información del archivo [Permisos_CasoEmpresa_20reg](https://docs.google.com/spreadsheets/d/1TJZfZJ-dWbxmy0zGrduTrZTSIYOPLrft/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} para documentar la plantilla de Permisos GGBN. Algunas de las columnas del archivo original se deben unir en un único elemento permitText. Esto es común en algunos procesos de mapeo, donde varias columnas se combinan en un solo elemento DarwinCore; o viceversa, donde de una columna se pueden derivar varios elementos, de acuerdo a las recomendaciones y definiciones del estándar (Fig. 2)

Ejemplo del elemento permitText: Corantioquia:160-RES1811-6441:2005:ABC

![Figura 2. Datos mapeados y ajustados en la plantilla de la extensión de permisos GGBN.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-permisos/Fig2_C3Permisos_Mapeo.png)
<sup>_Figura 2. Datos mapeados y ajustados en la plantilla de la extensión de permisos GGBN._</sup>

### 3.2. Estructurar el elemento occurrenceID

Para hacer uso de la extensión, es necesario contar con un identificador (ID) que enlace la extensión con los datos del Core del estándar DwC; en este caso, registros biológicos. Por consiguiente, es necesario ajustar el _occurrenceID_ de la extensión **Permisos GGBN** para que coincida exactamente con el del conjunto de datos estructurado en Datos_CasoEmpresa_20reg_estandarizado (Fig. 3).

![Figura 3. Diferencia entre el occurrenceID del conjunto de datos de registros biológicos y el del elemento mapeado en la extensión.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-permisos/Fig3_C3Permisos_Occurrence.png)
<sup>_Figura 3. Diferencia entre el occurrenceID del conjunto de datos de registros biológicos y el del elemento mapeado en la extensión._</sup>

## Paso 4 - Ajustar los datos

Eliminar las columnas de los elementos DwC que quedaron vacías en la plantilla. Es importante recordar que para la publicación solo se deben mantener los elementos que hayan sido documentados (Fig. 4). También se deben eliminar los ejemplos resaltados en gris, ya que estos solo son una ayuda para el mapeo de los elementos en la plantilla.

![Figura 4. Datos ajustados según las definiciones y los vocabularios controlados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-permisos/Fig4_C3Permisos_Resultados.png)
<sup>_Figura 4. Datos ajustados según las definiciones y los vocabularios controlados._</sup>

## Paso 5 - Verificación del resultado

Compara el [archivo estandarizado](https://docs.google.com/spreadsheets/d/1XVmqHsbVM20w-ubQIlPv6cEV2edIcR8C/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} con el archivo que se trabajó en el ejercicio para identificar aciertos y posibilidades de mejora. ¿La información de la extensión de permisos quedó correctamente estandarizada?


****
**¡Felicitaciones!**

La información asociada a los permisos de colecta ha sido estandarizada según la extensión de Permisos GGBN.

****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C.(2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
