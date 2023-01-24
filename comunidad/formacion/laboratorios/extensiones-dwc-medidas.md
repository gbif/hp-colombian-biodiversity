---
layout: documentation
permalink: /formacion/laboratorios/extensiones-dwc-medidas
title: "Estandarización con la extensión de medidas o hechos"
description: "Objetivo: Estructurar un grupo de medidas bióticas según la extensión de Medidas o hechos, siguiendo las buenas prácticas de documentación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estandarización con la extensión Medidas o hechos

**Objetivo**

Estructurar un grupo de medidas bióticas según la extensión [**Medidas o hechos**](https://biodiversidad.co/compartir/estandar-darwin-core/#medidas-o-hechos-extendida), siguiendo las buenas prácticas de documentación.

**Sobre la actividad**

Estructurar la información asociada a un permiso de colecta, usando la plantilla de la extensión [**Medidas o hechos**](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones). Los datos tienen problemas de completitud y formato, los cuales deben ser resueltos para que el conjunto se ajuste a las definiciones y contenga los elementos mínimos requeridos.

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

- Descargar el archivo [<FONT FACE="monospace"><b>«MedidasoHechos_20reg»</b></FONT>](https://docs.google.com/spreadsheets/d/1P5Yy0oz0U6bplllmkeGlyBIFG2uUuVZr/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} para realizar el laboratorio.

- Descargar la última versión de la plantilla de la extensión [<FONT FACE="monospace"><b>«Medidas o hechos»</b></FONT>](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones).


--------

## Paso 1 - Caso de uso

>Los conjuntos de datos de **registros biológicos** suelen complementarse con información sobre los rasgos funcionales de los especímenes, como la longitud de su pico, el diámetro a la altura del pecho (DAP), entre otros. Pese a ser información complementaria, estos datos adquieren una gran importancia en ciertos contextos. Por ejemplo, para los monitoreos de flora, las autoridades ambientales requieren la toma de ciertas medidas bióticas.
Este ejercicio parte de algunas medidas tomadas en campo, las cuales se encuentran compiladas en un documento Excel sin estructurar. Además, el documento mencionado relaciona rasgos funcionales de vertebrados terrestres y flora fustal. 

Tu misión en este laboratorio es estructurar los datos de los rasgos funcionales, usando la plantilla de la extensión <FONT FACE="monospace"><b>«Medidas o hechos»</b></FONT> (_Measurement or Facts_) del estándar _Darwin Core_, para que estos puedan incluirse en la publicación de un monitoreo.

## Paso 2 - Identificar los elementos obligatorios

Descargar y abrir la plantilla de la extensión [<FONT FACE="monospace"><b>«Medidas o hechos»</b></FONT>](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones){:target="_blank"}, allí se encuentran tres pestañas:

- **Instrucciones**: contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de la extensión.
- **Plantilla**: contiene la tabla con los elementos DwC para documentar la extensión y unas filas de ejemplo.
- **Definiciones** contiene las descripciones de cada uno de los elementos del estándar DwC, recomendaciones de documentación y ejemplos.

En la pestaña **"Instrucciones"** hay una sección titulada **“Elementos obligatorios según el tipo de los datos”**. Para el caso de los datos de ejemplo [<FONT FACE="monospace"><b>«MedidasoHechos_20reg»</b></FONT>](https://docs.google.com/spreadsheets/d/1P5Yy0oz0U6bplllmkeGlyBIFG2uUuVZr/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}, se usarán los elementos obligatorios  que corresponden a la publicación del core de registros biológicos (Fig. 1). 

![Figura 1. Elementos obligatorios de la extensión para publicar registros biológicos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-medidas%26hechos/Fig1_C3Medidas_Obligatorios.png)
<sup>_Figura 1. Elementos obligatorios de la extensión para publicar registros biológicos._</sup>

En la plantilla hay algunos ejemplos pre-documentados en gris para facilitar la interpretación del alcance de los elementos. Puede mantener estos ejemplos como referencia o eliminarlos antes de usar la plantilla. Estos marcan un punto de partida, pero no representan todas las posibilidades de la extensión, ya que las medidas pueden variar según las fuentes de datos.

## Paso 3 - Mapeo de los datos

Después de explorar la extensión e identificar los elementos obligatorios, navegar detenidamente por el archivo <FONT FACE="monospace"><b>«MedidasoHechos_20reg»</b></FONT>. Posteriormente, se debe copiar y pegar el contenido de las columnas en la plantilla de la extensión de **Medidas y hechos**. Esta actividad recibe el nombre de **mapeo de datos**. Por último, revisar la definición de los elementos y sus ejemplos para corroborar la correspondencia del mapeo. 

### 3.1 Mapeo de elementos 

Cuando hay varias medidas asociadas a un espécimen, se pueden duplicar los elementos de la extensión tantas veces como se requiera. Por ejemplo, es posible duplicar los elementos <span class="tag is-success is-light"><i>measurementType</i></span>, <span class="tag is-success is-light"><i>measurementValue</i></span>, <span class="tag is-success is-light"><i>measurementUnit</i></span>, <span class="tag is-success is-light"><i>measurementDeterminatedBy</i></span> y <span class="tag is-success is-light"><i>measurementDeterminedDate</i></span> para documentar las medidas de longitud de la cola y longitud del ala, como se muestra en la Figura 2. 

![Figura 2. Mapeo de la medida 1 «Altura de la percha» y la medida 2 «Longitud rostro cloacal» con duplicación de los elementos de la plantilla.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-medidas%26hechos/Fig2_C3Medidas_Mapeo.png)
<sup>_Figura 2. Mapeo de la medida 1 (altura de la percha) y la medida 2 (longitud rostro cloacal) con duplicación de los elementos de la plantilla._</sup>

Hacer el mapeo de las medidas de grasa subcutánea, estado sanitario, DAP en cm, área basal en m2 y altura total en m con base en el ejemplo. Es importante tener en cuenta que, en este caso, la fecha y las personas asociadas a cada medida también se repetirán.

<div class="notification is-info is-light">
  <b>Nota:</b> Las medidas se pueden dividir en dos categorías.

Cuantitativas (medidas): son variables cuantificables que cuenta con una unidad de medida. Por lo tanto, se asocian a los elementos <span class="tag is-success is-light"><i>measurementType</i></span>, <span class="tag is-success is-light"><i>measurementValue</i></span> y <span class="tag is-success is-light"><i>measurementUnit</i></span>. Por ejemplo:

- <span class="tag is-success is-light"><i>measurementType</i></span>: Longitud de la cola
- <span class="tag is-success is-light"><i>measurementValue</i></span>: 50
- <span class="tag is-success is-light"><i>measurementUnit</i></span>: cm

Cualitativas (hechos): son variables categóricas que guardan algún tipo de lógica, pero no están asociadas directamente a una unidad de medida. Por consiguiente, se asocian a los elementos <span class="tag is-success is-light"><i>measurementType</i></span> y <span class="tag is-success is-light"><i>measurementValue</i></span>. Por ejemplo:

- <span class="tag is-success is-light"><i>measurementType</i></span>: Estado Sanitario.
- <span class="tag is-success is-light"><i>measurementValue</i></span>: Malo.
</div>


### 3.2 Estructurar el elemento occurrenceID

Para hacer uso de la extensión, es necesario contar con un identificador (ID) que enlace la extensión con los datos del Core del estándar DwC; en este caso, registros biológicos. Por lo tanto, se debe ajustar el <span class="tag is-success is-light"><i>occurrenceID</i></span> de la extensión **Medidas o hechos** para que coincida exactamente con el del conjunto de datos estructurado en [<FONT FACE="monospace"><b>«Datos_observaciones_20reg_estandarizado»</b></FONT>](https://docs.google.com/spreadsheets/d/1SsnrmaWVjbiGaFEiTAVT9n-HNqY7lRHP/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} (Fig. 3).

<img src="[https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-permisos/Fig3_C3Permisos_Occurrence.png](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-medidas%26hechos/Fig3_C3Medidas_Occurrence.png)" width=600>

<sup>_Figura 3. Diferencia entre el <span class="tag is-success is-light"><i>occurrenceID</i></span> del conjunto de datos de registros biológicos y el del elemento mapeado en la extensión._</sup>

## Paso 4 - Ajustar los datos

### 4.1. Ajustar según definiciones y ejemplos

Una vez que se hayan mapeado los datos del archivo <FONT FACE="monospace"><b>«MedidasoHechos_20reg»</b></FONT> en la plantilla de la extensión, modificar las columnas de acuerdo a las definiciones del estándar DwC para cada elemento (Fig. 4).

![Figura 4. Datos ajustados según las definiciones y los vocabularios controlados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-medidas%26hechos/Fig4_C3Medidas_AjusteElemento.png)
<sup>_Figura 4. Datos ajustados según las definiciones y los vocabularios controlados._</sup>

### Eliminar los elementos vacíos y filas de ejemplo

Eliminar las columnas de los elementos DwC que quedaron vacías en la plantilla de **Medidas o hechos**. Es importante recordar que para la publicación solo se deben mantener los elementos que hayan sido documentados (Fig. 5). También, es necesario eliminar los ejemplos resaltados en gris, ya que estos solo son una ayuda para el mapeo de los elementos en la plantilla.

![Figura 5. Cómo eliminar los elementos vacíos. Clic derecho en la columna > Eliminar.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-medidas%26hechos/Fig5_C3Medidas_EliminarColumna.png)
<sup>_Figura 5. Cómo eliminar los elementos vacíos. <span class="tag is-warning is-light"><b><i>Clic derecho en la columna > Eliminar</i></b></span>._</sup>

## Paso 5 - Verificación del resultado

Descarga y compara el siguiente [<FONT FACE="monospace"><b>«archivo estandarizado»</b></FONT>](https://docs.google.com/spreadsheets/d/1eID1TUF5mUW6yyRxqPFs3xq6wczX3Aln/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} de la extensión **Medidas y hechos** con el archivo que se trabajó en el ejercicio para identificar aciertos y posibilidades de mejora. ¿La  extensión de medidas y hechos quedó correctamente construida?

Se recomienda tener en cuenta que existen dos formas válidas de documentar esta extensión. La primera es añadir los elementos DwC tantas veces como sea necesario, al igual que en el ejercicio anterior. La segunda es insertar una fila para cada medida. Esto es posible porque cada fila se puede relacionar al espécimen por medio del identificador; en este caso, el <span class="tag is-success is-light"><i>occurrenceID</i></span> (Fig. 6). Hay un ejemplo de esta forma de documentar la extensión en el [<FONT FACE="monospace"><b>«archivo estandarizado»</b></FONT>](https://docs.google.com/spreadsheets/d/1eID1TUF5mUW6yyRxqPFs3xq6wczX3Aln/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true) de la extensión **Medidas y hechos**, específicamente en la hoja denominada **“Plantilla 2”**.

![Figura 6. Segundo mecanismo de documentación de la extensión de **Medidas o hechos** en forma de filas sin duplicar elementos DwC.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_extensiones-dwc-medidas%26hechos/Fig6_C3Medidas_Resultados.png)
<sup>_Figura 6. Segundo mecanismo de documentación de la extensión de **Medidas o hechos** en forma de filas sin duplicar elementos DwC._</sup>

****
**¡Felicitaciones!**

Las medidas y hechos que se documentaron en campo han sido estandarizadas según la extensión _Measurement or Fact_.

****

**Citación**

> Plata C., Ortíz R., Marentes E., Lozano J. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
