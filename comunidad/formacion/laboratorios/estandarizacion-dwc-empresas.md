---
layout: documentation
permalink: /formacion/laboratorios/estandarizacion-dwc-empresas 
title: "Estandarización de datos de observaciones al Darwin Core para el sector empresarial"
description: "Objetivo: Estructurar un conjunto de datos bajo el estándar Darwin Core (Dwc), siguiendo los vocabularios controlados y las buenas prácticas de documentación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estandarización de datos de observaciones al _Darwin Core_ para el sector empresarial

**Objetivo**

Estructurar un conjunto de datos con base en el estándar [_Darwin Core (DwC)_](https://dwc.tdwg.org/terms/){:target="_blank"}, siguiendo los vocabularios controlados y las buenas prácticas de documentación.

**Sobre la actividad**

Estructurar un conjunto de datos según el estándar DwC, usando la plantilla de [<FONT FACE="monospace"><b>«Registros biológicos»</b></FONT>](https://biodiversidad.co/recursos/plantillas-dwc/#registros-biol%C3%B3gicos){:target="_blank"}. Los datos tienen problemas de completitud y formato, los cuales deben ser resueltos para que el conjunto se ajuste a las definiciones y contenga los elementos mínimos requeridos por el estándar.

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

Descargar el archivo [<FONT FACE="monospace"><b>«Datos_CasoEmpresa_20reg»</b></FONT>](https://docs.google.com/spreadsheets/d/1o5I_5mVrtaKhwNMZRhGVLP2vQY9-wXH1/edit#gid=97635514){:target="_blank"} para realizar el laboratorio.

Descargar la última versión de la [<FONT FACE="monospace"><b>«Plantilla de publicación de registros biológicos»</b></FONT>](https://biodiversidad.co/recursos/plantillas-dwc/#registros-biol%C3%B3gicos){:target="_blank"}.


--------

## Paso 1 - Caso de estudio 

Leer detenidamente el caso de estudio, donde se encuentra la información relevante para completar el conjunto de datos a publicar. Este caso está basado en una historia ficticia y fue creado solo para propósitos educativos.

>La empresa Ambiental Buenaventura Consultores (ABC), identificada con el NIT 890.123.456-1, es reconocida en el país por su compromiso con la conservación de la biodiversidad. Por este motivo, han decidido comenzar a publicar a través del SiB Colombia los datos sobre biodiversidad obtenidos en sus proyectos y hacerlos visibles para que sirvan como insumo en investigación, educación y toma de decisiones.
En el marco de sus actividades, la empresa realiza diferentes tipos de evaluación, entre los que se encuentran: estudios de impacto ambiental, monitoreos de fauna y flora en predios de conservación, informes de cumplimiento ambiental, entre otros.
En esta oportunidad, el Gerente ambiental ha decidido comenzar a publicar los datos de un monitoreo de Flora y Fauna que se realizó en el predio Albania, ubicado en el  Parque Municipal Natural Campo Alegre. Los datos fueron documentados en una plantilla de campo elaborada por la empresa. En este estudio se establecieron transectos de muestreo para evaluar los grupos de vertebrados terrestres. Además, se realizó un inventario forestal para la flora completa en el predio.
Algunas muestras, consideradas de importancia científica, se colectaron y se depositaron en la colección del Museo de Historia Natural C.J Marinkelle-Universidad de los Andes (ANDES). Los especímenes recolectados están amparados bajo un permiso marco de recolección vigente.


Tu misión en este laboratorio es  estructurar los datos de la empresa con base en los lineamientos del estándar _Darwin Core_ (DwC).


## Paso 2 - Mapeo de los datos

Descargar y abrir los archivos de trabajo [<FONT FACE="monospace"><b>«Datos_CasoEmpresa_20reg»</b></FONT>](https://docs.google.com/spreadsheets/d/1o5I_5mVrtaKhwNMZRhGVLP2vQY9-wXH1/edit#gid=97635514){:target="_blank"} y la [<FONT FACE="monospace"><b>«Plantilla de publicación de registros biológicos»</b></FONT>](https://biodiversidad.co/recursos/plantillas-dwc/#registros-biol%C3%B3gicos){:target="_blank"}. 

En primer lugar, se debe revisar detenidamente el nombre y contenido de cada columna del archivo<FONT FACE="monospace"><b>«Datos_CasoEmpresa_20reg»</b></FONT> e identificar a qué elemento DwC de la **Plantilla de publicación** corresponde. Este proceso recibe el nombre de mapeo de datos. Luego es necesario copiar y pegar el contenido de esa columna en la plantilla, como se muestra en la siguiente imagen (Fig. 1):

![Figura 1. Mapeo de datos en la plantilla DwC.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estandarizacion-darwincore-empresas/Fig1_C3Registros_Mapeo.png)
<sup>_Figura 1. Mapeo de datos en la plantilla DwC._</sup>

## Paso 3 - Identificar los elementos obligatorios 

En la plantilla de publicación de registros biológicos hay 4 pestañas:

- **Instrucciones**: contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de los registros biológicos.
- **Plantilla**: contiene la tabla de los elementos DwC para documentar los registros biológicos.
- **Definiciones**: contiene las definiciones para cada uno de los elementos del estándar DwC, recomendaciones de documentación y ejemplos.
- **Vocabulario**: contiene los vocabularios controlados para algunos de los elementos DwC.

En la pestaña de instrucciones, se encuentra una sección adicional titulada “**Elementos obligatorios según el origen de los datos**” (Fig. 2). Allí se deben identificar los elementos obligatorios para el ejercicio, de acuerdo a la lectura del caso de estudio.

![Figura 2. Instrucciones de la plantilla DwC. Elementos obligatorios según el origen de los datos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estandarizacion-darwincore-empresas/Fig2_C3Registros_Obligatorios.png)
<sup>_Figura 2. Instrucciones de la plantilla DwC. Elementos obligatorios según el origen de los datos._</sup>

## Paso 4 - Crear los elementos obligatorios 

Crear los elementos obligatorios faltantes en la plantilla de publicación a partir de la información del caso de estudio y los datos presentes en el archivo <FONT FACE="monospace"><b>«Datos_CasoEmpresa_20reg.xlsx»</b></FONT>.

>Pistas:
1. Se debe crear un identificador único del registro biológico que corresponde al elemento <span class="tag is-success is-light"><i>occurrenceID</i></span> en el estándar DwC . Esto se puede hacer a partir del código de la institución (<span class="tag is-success is-light"><i>institutionCode</i></span>), las palabras clave del recurso “MonitoreoAlbania” y el número en campo (<span class="tag is-success is-light"><i>recordNumber</i></span>). Se recomienda revisar la definición del elemento <span class="tag is-success is-light"><i>occurrenceID</i></span> y las recomendaciones para construirlo. Ejemplo: ABC:MonitoreoAlbania:IF_1.
2. En este caso es posible usar la coordenada inicial del transecto para las coordenadas decimales. En la sección de preguntas frecuentes, se enlistan las opciones para resolver estos casos: [https://biodiversidad.co/compartir/faq/#est%C3%A1ndar-darwin-core](https://biodiversidad.co/compartir/faq/#est%C3%A1ndar-darwin-core){:target="_blank"}.

<div class="notification is-info is-light">
  <b>Nota:</b> La extensión <b>Permisos GGBN</b>, que es obligatoria para este tipo de datos, se aborda en la  guía <b>“Estandarización de información asociada a permisos de recolección”</b>, pero su documentación no es obligatoria para el desarrollo de esta guía.
</div>

## Paso 5 - Ajustar los datos  

Una vez que se hayan trasladado todos los datos del archivo <FONT FACE="monospace"><b>«Datos_CasoEmpresa_20reg.xlsx»</b></FONT> a la plantilla de publicación, es necesario ajustar las columnas de acuerdo a las definiciones y vocabularios controlados del estándar _Darwin Core_ para cada elemento mapeado (Fig. 3A). Algunos elementos tienen un vocabulario controlado. En estos casos, se recomienda hacer clic para ir a la pestaña **"Vocabulario"** para encontrar el término asociado (Fig. 3B).

![Figura 3. Estructura de la plantilla de publicación.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estandarizacion-darwincore-empresas/Fig3_C3Registros_Vocabulario.png)
<sup>_Figura 3. Estructura de la plantilla de publicación. A. Información del elemento en la pestaña **“Definiciones”**. B. Vocabulario controlado asociado al elemento presente en la pestaña **“Vocabulario”**._</sup>

## Paso 6 - Eliminar los elementos vacíos

Eliminar los elementos DwC que quedaron vacíos en la plantilla de **Registros biológicos**. Es importante recordar que para la publicación solo se deben mantener los elementos que hayan sido documentados.

Al finalizar, la plantilla debe verse similar a la siguiente imagen (Fig. 4):

![Figura 4. Resultado final del mapeo de datos y la eliminación de elementos vacíos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estandarizacion-darwincore-empresas/Fig4_C3Registros_Resultado.png)
<sup>_Figura 4. Resultado final del mapeo de datos y la eliminación de elementos vacíos._</sup>

## Paso 7 - Verificación del resultado

Descarga y compara el siguiente archivo, estandarizado según las definiciones del _Darwin Core_, con el archivo que trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Fue posible completar más elementos del conjunto de datos en la plantilla?

- [<FONT FACE="monospace"><b>«Archivo estandarizado»</b></FONT>](https://docs.google.com/spreadsheets/d/1SsnrmaWVjbiGaFEiTAVT9n-HNqY7lRHP/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}

****
**¡Felicitaciones!**

El conjunto de datos de registros biológicos ha sido estandarizado según el _Darwin Core_.

****

**Citación**

> Plata C., Ortíz R., Marentes E., Lozano J. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
