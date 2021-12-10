---
layout: documentation
permalink: /formacion/laboratorios/ConversionFechas
title: "Conversión Fechas"
description: "Realizar la transformación y estandarización de fechas al formato ISO 8601 (AAAA-MM-DD), de manera automática y masiva."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Conversión Fechas

**Objetivo**

Realizar la estandarización y conversión de fechas al formato ISO 8601 (AAAA-MM-DD), de manera automática y masiva.

**Sobre la herramienta**

La herramienta [_Date parsing_](https://data.canadensys.net/tools/dates), desarrollada por [_Canadensys_](http://www.canadensys.net/) (nodo GBIF de Canadá), permite transformar y estandarizar fechas de forma masiva, de acuerdo al estándar ISO 8601 (AAAA-MM-DD), requerido para la documentación de fechas en el estándar _Darwin Core_.

**Enlace**

_Date parsing - Canadensys_ [http://data.canadensys.net/tools/dates](http://data.canadensys.net/tools/dates){:target="_blank"}

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Requerimientos** 

* Para realizar este ejercicio, es necesario contar con un procesador de archivos de texto como Excel.

**Archivo de trabajo**

Descargue el archivo [<FONT FACE="monospace"><b>«datos_canadensys.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_canadensys.xlsx) para realizar el laboratorio.

--------

## Paso 1 - Ingreso
Ingrese a la aplicación en línea [_Date parsing_](https://data.canadensys.net/tools/dates) y revise cuidadosamente las opciones disponibles para ingresar las fechas.

<div class="notification is-info is-light">
  <b>Tip:</b> las fechas pueden estar escritas en múltiples formatos, siempre y cuando no haya ambiguedades. Por ejemplo, cuando el año no se puede distinguir del mes o del día. Opcionalmente, las fechas pueden cargarse a la herramienta por medio del identificador de registro, seguido por una tabulación o una barra vertical, como se muestra en los siguientes ejemplos.
</div>

**Ejemplos de valores de entrada:**

* Jun 13, 2008
* 15 Jan 2011
* 2009 IV 02
* VII 1986
* 1 \| 1999/02/24 (incluyendo un identificador del registro).
* 2 \| 02/17/1921 (incluyendo un identificador del registro).

## Paso 2 - Carga de las fechas

Entre a Excel, abra el archivo <FONT FACE="monospace"><b>«datos_canadensys.xlsx»</b></FONT> y busque la información temporal de los registros. Encontrará la columna <span class="tag is-success is-light"><i>verbatimEventDate</i></span>, la cual contiene las fechas de colecta en el formato original. Luego, seleccione la columna <span class="tag is-success is-light"><i>verbatimEventDate</i></span> y cópiela sin el encabezado (Fig. 1).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ConversionFechas/Fig.1_dateParsing.jpg" width=400>

<sup>_Figura 1. Seleccion y copia de las fechas originales (<span class="tag is-success is-light"><i>verbatimEventDate</i></span>)._<sup>

Entre a la aplicación _Date parsing_ y pegue los datos previamente copiados. Luego, haga clic en <span class="tag is-warning is-light"><i>Submit</i></span> para iniciar la conversión de fechas (Fig. 2).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ConversionFechas/Fig.2_dateParsing.jpg" width=800>

<sup>*Figura 2. Fechas originales ingresadas en la herramienta en diversos formatos.*<sup>

## Paso 3 - Resultados

Las fechas originales ingresadas apareceran en la columna **"original"**, que corresponde al elemento <span class="tag is-success is-light"><i>verbatimEventDate</i></span>, junto con cuatro nuevas columas: <span class="tag is-success is-light"><i>year</i></span>, <span class="tag is-success is-light"><i>month</i></span>, <span class="tag is-success is-light"><i>day</i></span> (equivalentes al estándar DwC) e **"ISO 8601"**, que es el resultado de la estandarización y corresponde al elemento DwC <span class="tag is-success is-light"><i>eventDate</i></span> (Fig. 3).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ConversionFechas/Fig.3_dateParsing.jpg" width=800>

<sup>*Figura 3. Resultado de convertir las fechas al formato ISO 8601 con Date Parsing de Candensys.*<sup>

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
    Cuando las fechas son ambiguas, la herramienta no puede reconocer el formato de la fecha y muesta la fila de la fecha en rojo (Fig. 4). Esto ocurre cuando no es posible identificar los componentes (año, mes, día) con claridad. Por ejemplo, en la fecha 02/05/07, ¿el año es 2002 o 2007? Además, pueden haber inconvenientes cuando existen combinaciones de texto y número (Ej. Abr-2009), ya que el idioma original de la herramienta es el inglés. Por lo tanto, ocasionalmente no reconoce algunos meses en español.
    Si se presentan estas ambiguedades, es necesario hacer una corrección manual con base en el contexto de los datos.
  </div>
</article>

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ConversionFechas/Fig.4_dateParsing.jpg" width=500>

<sup>*Figura 4. Ejemplo de fechas ambiguas, donde la herramienta no reconoce el formato y no puede hacer la conversión (en rojo).*<sup>


## Paso 4 - Incorporar resultados en tabla DwC.

### 4.1. Preparar el archivo para incorporar los resultados
 
En el archivo <FONT FACE="monospace"><b>«datos_canadensys.xlsx»</b></FONT>, agregue cinco columnas a la izquierda de la columna con las fechas originales. Para esto, ubíquese en el encabezado de la columna <span class="tag is-success is-light"><i>verbatimEventDate</i></span> y dé *clic derecho* en <span class="tag is-warning is-light"><i>Insertar</i></span>. Repita este paso 4 veces (Fig. 5).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ConversionFechas/Fig.5_dateParsing.jpg" width=600>

<sup>*Figura 5. Proceso para insertar nuevas columnas en Excel.*<sup>

En las opciones de Excel, configure las columnas que creó en formato de texto (Fig. 6)

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ConversionFechas/Fig.6_DateParsing.png" width=800>

<sup>*Figura 6. Configuración de columnas en formato texto.*<sup>

 
### 4.2. Copiar resultados
 
Diríjase a la herramienta _Date Parsing_, seleccione y copie toda la tabla con el resultado de la conversión, incluyendo el encabezado. Para facilitar la selección y el copiado, puede apoyarse en el _mouse_ de su equipo, desplazándose desde el inicio hasta el final de la tabla con el clic izquierdo sostenido. (Fig. 7).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ConversionFechas/Fig.7_dateParsing.jpg" width=800>

<sup>*Figura 7. Selección y copia de los resultados.*<sup>
 
### 4.3. Pegar resultados
 
 Siga estos pasos para pegar la tabla copiada en el archivo Excel:

 1. Ubíquese sobre las celdas insertadas en el paso 5 (Fig. 8A).
 2. En el menú superior, haga clic en <span class="tag is-warning is-light"><i>Inicio</i></span> y seleccione <span class="tag is-light is-warning"><b><i>Pegar > Pegado especial</i></b></span> (Fig. 8B).
 3. En el menú de <span class="tag is-warning is-light"><i>Pegado especial</i></span>, seleccione <span class="tag is-warning is-light"><i>Texto</i></span> y luego <span class="tag is-warning is-light"><i>Aceptar</i></span> (Fig. 8C).

<div class="notification is-info is-light">
  <b>Tip:</b> el pegado especial en formato de texto es indispensable para que Excel no haga interpretaciones erróneas sobre las fechas ya estandarizadas. Si no se tiene en cuenta, el programa revertirá las fechas a otro formato y el trabajo realizado podría perderse.
</div>

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ConversionFechas/Fig.8_dateParsing.jpg" width=800>

<sup>*Figura 8. Pasos para insertar las fechas copiadas con formato texto: A. Ubicar la celda en donde se pegarán los resultados, B. Desplegar las opciones de pegado especial, C. Seleccionar la opción texto en el menú de pegado especial.*</sup>

Luego de realizar este procedimiento, verá las columnas incorporadas en el Excel (Fig. 9). Sin embargo, la columna con la fecha del evento original estará duplicada.

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ConversionFechas/Fig.9_dateParsing.jpg" width=600>

<sup>*Figura 9. Resultados de las fechas en la hoja de Excel.*<sup>

Por consiguiente, para finalizar la estandarización, es pertinente renombrar y eliminar algunas columnas:

- Eliminar la columna **"original"**.
- Cambiar el nombre de la columna **"ISO 8601"** por <span class="tag is-success is-light"><i>eventDate</i></span>.

> Recuerde que puede aplicar este procedimiento a todos los elementos asociados a fechas en el estándar DwC, tales como <span class="tag is-warning is-light"><i>dateIdentified</i></span>(fecha de identificación), <span class="tag is-warning is-light"><i>georeferencedDate</i></span> (fecha de georreferenciación), etc.
>
 
## Paso 5 - Verificación del resultado

Descargue y compare el siguiente archivo, estandarizado según los pasos de esta guía, con el archivo que trabajó en el laboratorio e identifique aciertos y oportunidades de mejora. ¿Qué diferencias encontró con sus resultados?

* [<FONT FACE="monospace"><b>«Archivo validado»</b></FONT>](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/Solución_datos_canadensys.xlsx)

 
## Paso 6 - Datos propios
Si tiene datos propios y desea publicarlos, intente seguir los pasos de este laboratorio para convertir las fechas al formato ISO 8601.

****
**¡Felicitaciones!** Terminó la conversión de las fechas del conjunto de datos a el estándar ISO 8601. 

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) permite usar, redistribuir y construir sobre estos contenidos libremente. 

¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!

**Citación sugerida**

>Plata C., Ortíz R., Marentes E., Lozano J. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
