---
layout: documentation
permalink: /formacion/laboratorios/mapeo-datos-ipt
title: "Cómo mapear los datos al IPT"
description: "Objetivo: Realizar el mapeo de datos en la herramienta de publicación IPT."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Cómo mapear los datos al IPT

**Objetivo**

Realizar el mapeo de datos en la herramienta de publicación IPT.

**Introducción**

El proceso de mapeo de datos consiste en identificar la correspondencia entre las columnas del archivo de datos con los elementos del estándar _Darwin Core_. Dentro de la herramienta de publicación IPT (del inglés _Integrated Publishing Toolkit_), es posible hacer este proceso al establecer la correspondencia entre las columnas de un archivo de datos cargado en el IPT y los elementos del estándar. 

Sin embargo, desde el Equipo Coordinador del SiB Colombia, hemos establecido varias estrategias que permiten realizar el mapeo de los datos en una etapa previa. Lo anterior con el objetivo de que dicha correspondencia ya se haya establecido al momento de cargar los datos al IPT. Esto ahorra tiempo a la hora de realizar el mapeo dentro del IPT, donde solo se verifica una vez el mapeo del archivo cargado en la plataforma. 

En este laboratorio se explica el proceso de mapeo desde el IPT, continuando con el ejercicio realizado en la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt). Por consiguiente, es necesario realizar primero la carga de los datos para proseguir con el proceso de mapeo.

**Sobre la herramienta**

La herramienta de publicación [IPT](https://www.gbif.org/es/ipt){:target="_blank"} es un _software_ gratuito y de código abierto que se utiliza para publicar y compartir conjuntos de datos sobre biodiversidad a través del [SiB Colombia](https://biodiversidad.co), [GBIF](https://www.gbif.org/){:target="_blank"} y [OBIS](https://obis.org/){:target="_blank"}. Este _software_ permite integrar datos y metadatos en un mismo formato de archivo, conocido como _Darwin Core Archive_ (DwC-A). Además, esta herramienta sirve para cargar datos de múltiples fuentes y en diversos formatos de archivo, lo que facilita la integración de los mismos y su proceso de publicación. 

Las instancias de publicación principales son: [IPT SiB](https://ipt.biodiversidad.co/sib/){:target="_blank"}, el [IPT SiB Marino](https://ipt.biodiversidad.co/sibm/){:target="_blank"} para los datos marino-costeros y el [IPT Permisos](https://ipt.biodiversidad.co/permisos/){:target="_blank"} para los datos compartidos con la única finalidad de obtener certificados de reporte. Para el desarrollo de esta guía, se usará la instancia de pruebas IPT-Test, la cual es una instancia de pruebas del SiB Colombia creada principalmente para fines pedagógicos.

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Enlace**

IPT Test: [https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/){:target="_blank"}

## Paso 1 - Ingreso al conjunto de datos dentro del IPT

En primer lugar, se debe ingresar a la herramienta de publicación [IPT de pruebas](https://ipt.biodiversidad.co/sib-test/){:target="_blank"}. En la parte superior derecha, hacer clic en <span class="tag is-warning is-light"><i>Iniciar Sesión</i></span>. Luego, diligenciar las siguientes credenciales (Fig. 1):

- **Usuario**: <span class="tag is-light"><b>laboratorio_formacion@gmail.com</b></span>
- **Contraseña**: <span class="tag is-light"><b>S64i6E8SD</b></span>

![Figura 1. Inicio de sesión en el IPT test (Ambiente de pruebas) con las credenciales proporcionadas para el desarrollo de la guía.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig1_C5Mapeo_Ingresar.png)
<sup>_Figura 1. Inicio de sesión en el IPT test (Ambiente de pruebas) con las credenciales proporcionadas para el desarrollo de la guía._</sup>

Cuando se haya ingresado al IPT, seleccionar la opción <span class="tag is-warning is-light"><i>Gestión de recursos</i></span> en el menú, donde se verá una tabla de resumen con todos los recursos que puede administrar con este  usuario (Fig. 2). En esta vista se encuentran los recursos que han creado otros estudiantes previamente a partir de este usuario.

A continuación, ubicar el recurso creado en el desarrollo de la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt){:target="_blank"}.

Para realizar la búsqueda de su recurso, utilizar la opción de filtro y hacer la búsqueda con el nombre que se utilizó para crear el conjunto de datos. Este procedimiento se realizó previamente en la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt){:target="_blank"} (Fig. 2).

Para acceder al recurso, hacer clic sobre el título que está en la columna “**Nombre**” (Fig. 2).

![Figura 2. Búsqueda y selección del recurso creado en la guía Cómo cargar los datos al IPT desde el Menú de Gestión de recursos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig2_C5Mapeo_Busqueda.png)
<sup>_Figura 2. Búsqueda y selección del recurso creado en la guía Cómo cargar los datos al IPT desde el Menú de Gestión de recursos._</sup>

<div class="notification is-info is-light">
  <b>Nota:</b> Es posible que en esta vista se encuentren los recursos creados por otros estudiantes que han realizado esta guía. Estos recursos <b>no se deben modificar</b>.
</div>

## Paso 2 - Mapeo de los datos en el IPT

### 2.1. Selección de los archivos a mapear.

Después de hacer clic e ingresar al recurso, aparecerá la **“Vista General”**. El proceso de mapeo se realiza en la sección “**Mapeo Darwin Core**” (Fig. 3A).

En esta sección se puede seleccionar (Fig. 3A) el tipo de core al que pertenecen los datos en un desplegable (Fig. 3B):

- <span class="tag is-warning is-light"><i>Darwin Core Occurrence</i></span>: para mapear registros biológicos.
- <span class="tag is-warning is-light"><i>Darwin Core Taxon</i></span>: para mapear listas de chequeo.
- <span class="tag is-warning is-light"><i>Darwin Core Event</i></span>: para mapear eventos de muestreo.

Los datos de esta guía pertenecen al <span class="tag is-warning is-light"><i>Darwin Core Occurrence</i></span>, que es la opción por defecto en el mapeo (Fig. 3B) y corresponde al tipo de datos cargado en la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt){:target="_blank"}. Para iniciar el mapeo, se debe seleccionar <span class="tag is-warning is-light"><i>Darwin Core Occurrence</i></span> y hacer clic en <span class="tag is-warning is-light"><i>Agregar</i></span> (Fig. 3C).

![Figura 3. Selección del tipo de mapeo core a realizar.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig3_C5Mapeo_TipoMapeo.png)
<sup>_Figura 3. Selección del tipo de mapeo core a realizar: A. Menú para seleccionar el Core de la publicación. B. Opciones de Core para seleccionar, con énfasis en la selección del Core de Registros Biológicos (Occurrence). C. Clic en <span class="tag is-warning is-light"><i>Agregar</i></span> para iniciar el mapeo._</sup>

Posteriormente, se abrirá una nueva ventana para seleccionar el archivo con el que se va a realizar el mapeo al _core_ de _occurrence_ del _Darwin Core_ (Fig. 4). Para ello, se recomienda seguir las instrucciones:

- Dar clic en la lista desplegable, donde se pueden ver todos los archivos cargados en este recurso (Fig. 4).
- Seleccionar el archivo donde están los registros biológicos en formato de texto plano, que en este caso corresponde a <FONT FACE="monospace"><b>«Datos_estandarizados_textoplano»</b></FONT> (Fig. 4). Para finalizar, hacer clic en el botón <span class="tag is-warning is-light"><i>Guardar</i></span>.

![Figura 4. Detalle de la selección del archivo de registros biológicos (core occurrence) a mapear.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig4_C5Mapeo_Conjunto.png)
<sup>_Figura 4. Detalle de la selección del archivo de registros biológicos (core occurrence) a mapear._</sup>

<div class="notification is-info is-light">
  <b>Nota:</b>  Si se desarrolló adecuadamente la guía <a href="https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt" target="_blank">Cómo cargar los datos al IPT</a>, habrá dos archivos cargados en el recurso que creó en el IPT. El archivo de la extensión permisos puede ser <FONT FACE="monospace"><b>«extension_permisos_textoplano»</b></FONT> o <FONT FACE="monospace"><b>«extension_permisos_excel»</b></FONT>, dependiendo del tipo que se haya elegido al cargar los datos en el paso 6.
</div>

### 2.2. Mapeo de datos 

Una vez seleccionado el archivo a mapear, se abrirá una nueva ventana con información del número de columnas automapeadas.

El primer error común es que no se mapean todas las columnas. Esto puede corroborarse a través del número de columnas automapeadas, identificando si es diferente al número de columnas en el archivo (Fig. 5).

![Figura 5. El número de columnas automapeadas (52) es inferior al número total de columnas del archivo (54).](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig5_C5Mapeo_Columnas.png)
<sup>_Figura 5. El número de columnas automapeadas (52) es inferior al número total de columnas del archivo (54)._</sup>

Para revisar cuáles fueron las columnas que no se mapearon, hacer clic en la opción  <span class="tag is-warning is-light"><i>Columnas sin mapear</i></span> que está en el menú lateral izquierdo (Fig. 6). En la parte inferior de la página, aparecerá la lista de las columnas que no fueron mapeadas (Fig.6).

![Figura 6. Información de las columnas sin mapear accesible desde la opción en el menú lateral izquierdo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig6_C5Mapeo_SinMapear.png)
<sup>_Figura 6. Información de las columnas sin mapear accesible desde la opción en el menú lateral izquierdo._</sup>

Existen dos tipos principales de columnas que no se mapean:

- Las columnas que no hacen parte del estándar _Darwin Core_ y son internas de la base de datos. Por ejemplo, información de la persona que digitaliza los datos que no tiene correspondencia con ningún elemento del estándar DwC. En este caso, se recomienda eliminar esas columnas antes de subir el archivo para evitar que aparezcan sin mapear.
- Las columnas que sí pertenecen al estándar darwinCore, pero el nombre del elemento no se encuentra bien escrito o está en español. Para estos casos, es necesario realizar el proceso de mapeo de forma manual al interior del IPT o ajustar los datos y volverlos a cargar con el nombre correcto del elemento _Darwin Core_.

En este caso, ambas columnas pertenecen al segundo tipo. Para ajustar el mapeo, es necesario buscar el nombre del elemento _Darwin Core_ al que corresponde la columna sin mapear. El elemento que corresponde a  **“occurrencel”** es el <span class="tag is-success is-light"><i>occurrenceID</i></span> y el que corresponde a **“preparaciones"** es <span class="tag is-success is-light"><i>preparations</i></span>. 

Con el fin de realizar el ajuste, se deben seguir los pasos:

- Buscar los elementos sin mapear en la página de mapeo. Es válido usar la búsqueda en el navegador con <span class="tag is-warning is-light"><i>ctrl+f</i></span> (o class="tag is-warning is-light"><i>cmd+f</i></span> para iOS) y escribir el nombre del elemento: <span class="tag is-warning is-light"><i>occurrenceID</i></span> (Fig. 7A).
- Una vez que se haya ubicado el elemento, hacer clic en el botón de la lista desplegable para ese elemento. Allí se encuentra el nombre de todas las columnas del archivo cargado. Se debe seleccionar el nombre de la columna equivalente al elemento _Darwin Core_ que se está mapeando. En este caso, la columna **“occurrenceI”**(Fig. 7B).

![Figura 7. Mapeo manual de las columnas que no mapean de forma automática.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig7_C5Mapeo_MapeoManual.png)
<sup>_Figura 7. Mapeo manual de las columnas que no mapean de forma automática: A. Búsqueda del campo occurrenceID en el navegador con la opción Ctrl + F o Cmd +f (iOS). B. Selección del campo **“occurrenceI”** del archivo original y mapeado como <span class="tag is-success is-light"><i>occurrenceID</i></span> en el IPT._</sup>

- Repetir este procedimiento con el elemento preparations que corresponde a la columna **“preparaciones”** (Fig. 8).

![Figura 8. Mapeo manual de las columnas que no mapean de forma automática. Selección del campo “preparaciones” del archivo original y mapeado como “preparations” en el IPT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig8_C5Mapeo_Preparaciones.png)
<sup>_Figura 8. Mapeo manual de las columnas que no mapean de forma automática. Selección del campo **“preparaciones”** del archivo original y mapeado como <span class="tag is-success is-light"><i>preparations</i></span> en el IPT._</sup>

- Hacer clic en la opción <span class="tag is-warning is-light"><i>Guardar</i></span> del menú lateral izquierdo (Fig. 9). Cuando se haya guardado la página, la vista se refrescará y desaparecerá la sección **“Columnas sin mapear”**.

![Figura 9. Botón ubicado en el menú izquierdo de la sección de metadatos que permite guardar los cambios realizados en el mapeo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig9_C5Mapeo_Guardar.png)
<sup>_Figura 9. Botón ubicado en el menú izquierdo de la sección de metadatos que permite guardar los cambios realizados en el mapeo._</sup>

- Hacer clic en <span class="tag is-warning is-light"><i>Regresar</i></span> para volver a la sección de “**Vista general del recurso**”.

## Paso 3 - Mapeo de extensiones

Después de completar exitosamente el proceso de mapeo del core de registros biológicos, es posible realizar el mapeo de las extensiones del estándar _Darwin Core_ que están disponibles, las cuales se pueden consultar en la página web [Extensiones DwC](https://biodiversidad.co/compartir/estandar-darwin-core/#extensiones-dwc){:target="_blank"}. 

Las instrucciones para realizar el mapeo de la extensión de permisos se muestran a continuación:

- Ir a la sección **"Mapeo Darwin Core"** y hacer clic en el desplegable. Luego, en la sección de **"Extensiones"**, seleccionar <span class="tag is-warning is-light"><i>GGBN Permit</i></span> (Fig. 10A).
- Dar clic en <span class="tag is-warning is-light"><i>Agregar</i></span> para pasar a la siguiente ventana, donde se podrá seleccionar el archivo a mapear (Fig. 10B).

![Figura 10. Mapeo de extensiones Darwin Core en el IPT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig10_C5Mapeo_Agregar.png)
<sup>_Figura 10. Mapeo de extensiones Darwin Core en el IPT: A. Selección en el desplegable de la extensión <span class="tag is-warning is-light"><i>GGBN Permit</i></span> entre las opciones de extensiones disponibles según el tipo de Core (Ocurrence). B. Clic al botón <span class="tag is-warning is-light"><i>Agregar</i></span> para comenzar el proceso de mapeo._</sup>

Las extensiones disponibles dependen del _core_ que se haya seleccionado. En este caso, hay dos disponibles para el _core_ de registros biológicos. Sin embargo, si se desea publicar una lista de especies o un evento de muestreo, hay diferentes opciones de extensiones. Por ejemplo, para la publicación de un evento de muestreo, se debe cargar el archivo de eventos como _Core_ y el archivo de registros biológicos como la extensión <span class="tag is-warning is-light"><i>Darwin Core Occurrence</i></span>.

- En la siguiente ventana, seleccionar el archivo a mapear, que puede ser <FONT FACE="monospace"><b>«extension_permisos_textoplano»</b></FONT> o <FONT FACE="monospace"><b>«extension_permisos_excel»</b></FONT>, según el desarrollo del paso 6 de la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt).{:target="_blank"} Por último, dar clic en <span class="tag is-warning is-light"><i>Guardar</i></span> (Fig 11).

![Figura 11. Selección de archivo con los datos para el mapeo de la extensión GGBN Permit.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig11_C5Mapeo_SeleccionGGBN.png)
<sup>_Figura 11. Selección de archivo con los datos para el mapeo de la extensión <span class="tag is-warning is-light"><i>GGBN Permit</i></span>._</sup>

En la venta de Mapeo del conjunto de datos, el proceso de mapeo se realizará de manera automática si los datos contenían los encabezados correctamente documentados según el estándar. En este caso, el archivo cuenta con los elementos necesarios documentados para esta extensión, por lo que el número de elementos mapeados debe coincidir con el número de columnas del archivo (Fig 12). Por consiguiente, es necesario revisar que los cuatro elementos hayan sido mapeados correctamente y finalizar dando clic en span class="tag is-warning is-light"><i>Guardar</i></span> (Fig. 12). 

![Figura 12. Visualización de las columnas auto mapeadas para la extensión GGBN permit.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig12_C5Mapeo_MapeoGGBN.png)
<sup>_Figura 12. Visualización de las columnas auto mapeadas para la extensión <span class="tag is-warning is-light"><i>GGBN Permit</i></span>._</sup>

Cuando se hayan guardado los cambios, hacer clic en <span class="tag is-warning is-light"><i>Regresar</i></span> para volver a la **"Vista General del recurso"**, donde se visualizarán los dos archivos mapeados para el _Core_ y para la extensión. Luego, se recomienda verificar nuevamente que el número de filas y columnas coincida con el archivo cargado. También se puede hacer clic en el ícono del ojo para acceder a la previsualización de los datos cargados (Fig. 13).

![Figura 13. Visualización del mapeo de los datos del Core y de la extensión en la vista general del recurso con 54 elementos para el Core Ocurrence y 3 elementos para la extensión GGBN Permit.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig13_C5Mapeo_Visualizacion.png)
<sup>_Figura 13. Visualización del mapeo de los datos del Core y de la extensión en la vista general del recurso con 54 elementos para el Core Ocurrence y 3 elementos para la extensión <span class="tag is-warning is-light"><i>GGBN Permit</i></span>._</sup>

Se puede notar que en la vista general para la extensión <span class="tag is-warning is-light"><i>GGBN Permit</i></span> solo aparecen tres elementos y no los cuatro mapeados originalmente. Esto se debe a que el IPT no contabiliza el <span class="tag is-success is-light"><i>occurrenceID</i></span>, ya que es el elemento que tienen en común la extensión y el archivo _Core_ para relacionar cada registro biológico con la extensión. Por lo tanto, no hace parte de los elementos de la extensión. 

## Paso 4 - Reto para reforzar los conocimientos

Si se desea ampliar el conocimiento adquirido, aquí se propone un ejercicio adicional de mapeo de datos.

El primer paso es eliminar el mapeo de la extensión de permisos que se acabó de completar y repetirlo.

<div class="notification is-info is-light">
  <b>Nota:</b> Para realizar la eliminación de un mapeo, dar clic en el botón <span class="tag is-warning is-light"><i>Editar</i></span> y seleccionar la opción <span class="tag is-warning is-light"><i>Eliminar</i></span> al final del menú izquierdo de la ventana de edición del mapeo. Por último, confirmar la instrucción haciendo clic en <span class="tag is-warning is-light"><i>Sí</i></span> (Fig. 14).
</div>

![Figura 14. Proceso de eliminación de mapeo en el IPT. Primero se hace clic en Eliminar en la vista de edición del mapeo, a la cual se accede a través de la opción Editar. Posteriormente, se confirma la eliminación haciendo clic en Sí.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig14_C5Mapeo_Eliminar.png)
<sup>_Figura 14. Proceso de eliminación de mapeo en el IPT._</sup>


****
**¡Felicitaciones!**

¡Felicitaciones! El proceso de mapeo de datos en el IPT ha culminado satisfactoriamente.
  
****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
 
