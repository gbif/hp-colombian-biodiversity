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

**Enlace**

IPT Test: [https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/){:target="_blank"}

## Paso 1 - Ingreso al conjunto de datos dentro del IPT

En primer lugar, se debe ingresar a la herramienta de publicación IPT de pruebas ([https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/){:target="_blank"}). En la parte superior derecha, hacer clic en Iniciar Sesión. Luego, diligenciar las siguientes credenciales (Fig. 1):

- **Usuario**: laboratorio_formacion@gmail.com
- **Contraseña**: S64i6E8SD

![Figura 1. Inicio de sesión en el IPT test (Ambiente de pruebas) con las credenciales proporcionadas para el desarrollo de la guía.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig1_C5Mapeo_Ingresar.png)
<sup>_Figura 1. Inicio de sesión en el IPT test (Ambiente de pruebas) con las credenciales proporcionadas para el desarrollo de la guía._</sup>

Cuando se haya ingresado al IPT, seleccionar la opción _Gestión de recursos_ en el menú, donde se verá una tabla de resumen con todos los recursos que puede administrar con este  usuario (Fig. 2). En esta vista se encuentran los recursos que han creado otros estudiantes previamente a partir de este usuario.

A continuación, ubicar el recurso creado en el desarrollo de la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt).

Para realizar la búsqueda de su recurso, utilizar la opción de filtro y hacer la búsqueda utilizando el nombre que utilizó para crear el conjunto de datos, un procedimiento realizado previamente en la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt) (Fig. 2).

Para acceder al recurso, haga clic sobre el título que está en la columna “**Nombre**” (Fig. 2).

![Figura 2. Búsqueda y selección del recurso creado en la guía Cómo cargar los datos al IPT desde el Menú de Gestión de recursos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig2_C5Mapeo_Busqueda.png)
<sup>_Figura 2. Búsqueda y selección del recurso creado en la guía Cómo cargar los datos al IPT desde el Menú de Gestión de recursos._</sup>

**Nota**: Es posible que en esta vista se encuentren los recursos creados por otros estudiantes que han realizado esta guía. Estos recursos **no se deben modificar**.

## Paso 2 - Mapeo de los datos en el IPT

### 2.1. Selección de los archivos a mapear.

Después de hacer clic e ingresar al recurso, aparecerá la “Vista General”. El proceso de mapeo se realiza en la sección “**Mapeo Darwin Core**” (Fig. 3A).

En esta sección, puede seleccionar (Fig. 3A) el tipo de core al que pertenecen los datos en un desplegable (Fig. 3B):

- Darwin Core Occurrence: para mapear registros biológicos.
- Darwin Core Taxon: para mapear listas de chequeo.
- Darwin Core Event: para mapear eventos de muestreo.

Los datos de esta guía pertenecen al core de Occurrence, que es la opción por defecto en el mapeo (Fig. 3B) y que corresponde al tipo de datos cargado en la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt). Para iniciar el mapeo, se debe seleccionar Darwin Core Occurrence y hacer clic en Agregar (Fig. 3C).

![Figura 3. Selección del tipo de mapeo core a realizar.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig3_C5Mapeo_TipoMapeo.png)
<sup>_Figura 3. Selección del tipo de mapeo core a realizar: A. Menú para seleccionar el Core de la publicación. B. Opciones de Core para seleccionar, con énfasis en la selección del Core de Registros Biológicos (Occurrence). C. Clic en Agregar para iniciar el mapeo._</sup>

Posteriormente, se abrirá una nueva ventana para seleccionar el archivo con el que se va a realizar el mapeo al core de occurrence del _Darwin Core_ (Fig. 4). Para ello, se recomienda seguir las instrucciones:

- Dar clic en la lista desplegable, donde se pueden ver todos los archivos cargados en este recurso (Fig. 4).
- Seleccionar el archivo donde están los registros biológicos en formato de texto plano, que en este caso corresponde a: “Datos_estandarizados_textoplano” (Fig. 4). Para finalizar, hacer clic en el botón “_Guardar_”.

![Figura 4. Detalle de la selección del archivo de registros biológicos (core occurrence) a mapear.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig4_C5Mapeo_Conjunto.png)
<sup>_Figura 4. Detalle de la selección del archivo de registros biológicos (core occurrence) a mapear._</sup>

**Nota**: Si se desarrolló adecuadamente la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt), habrá dos archivos cargados en el recurso que creó en el IPT. El archivo de la extensión permiso puede ser extension_permisos_textoplano o extension_permisos_excel, dependiendo del tipo que se haya elegido al cargar los datos en el paso 6.

### 2.2. Mapeo de datos 

Una vez seleccionado el archivo a mapear, se abrirá una nueva ventana con información del número de columnas automapeadas.

El primer error común es que no se mapean todas las columnas. Esto puede corroborarse a través del número de columnas automapeadas, identificando si es diferente al número de columnas en el archivo (Fig. 5).

![Figura 5. El número de columnas automapeadas (52) es inferior al número total de columnas del archivo (54).](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig5_C5Mapeo_Columnas.png)
<sup>_Figura 5. El número de columnas automapeadas (52) es inferior al número total de columnas del archivo (54)._</sup>

Para revisar cuáles fueron las columnas que no se mapearon, hacer clic en la opción “Columnas sin mapear” que está en el menú lateral izquierdo (Fig. 6). En la parte inferior de la página, aparecerá la lista de las columnas que no fueron mapeadas (Fig.6).

![Figura 6. Información de las columnas sin mapear accesible desde la opción en el menú lateral izquierdo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig6_C5Mapeo_SinMapear.png)
<sup>_Figura 6. Información de las columnas sin mapear accesible desde la opción en el menú lateral izquierdo._</sup>

Existen dos tipos principales de columnas que no se mapean:

- Las columnas que no hacen parte del estándar _Darwin Core_ y son internas de la base de datos. Por ejemplo, información de la persona que digitaliza los datos que no tiene correspondencia con ningún elemento del estándar DwC. En este caso, se recomienda eliminar esas columnas antes de subir el archivo para evitar que aparezcan sin mapear.
- Las columnas que sí pertenecen al estándar darwinCore, pero el nombre del elemento no se encuentra bien escrito o está en español. Para estos casos, es necesario realizar el proceso de mapeo de forma manual al interior del IPT o ajustar los datos y volverlos a cargar con el nombre correcto del elemento _Darwin Core_.

En este caso, ambas columnas pertenecen a la opción b. Para ajustar el mapeo, es necesario buscar el nombre del elemento _Darwin Core_ al que corresponde la columna sin mapear. El elemento que corresponde a  “occurrencel” es el _occurrenceID_ y el que corresponde a“preparaciones es preparations. 

Con el fin de realizar el ajuste, se deben seguir los pasos:

- Buscar los elementos sin mapear en la página de mapeo. Es válido usar la búsqueda en el navegador utilizando ctrl+f  (o cmd+f para iOS) y escribir el nombre del elemento: _occurrenceID_ (Fig. 7A).
- Una vez se haya ubicado el elemento, hacer clic en el botón de la lista desplegable para ese elemento. Allí se encuentra el nombre de todas las columnas del archivo cargado. Se debe seleccionar el nombre de la columna equivalente al elemento Darwin Core que se está mapeando. En este caso, la columna “occurrenceI” (Fig. 7B).

![Figura 7. Mapeo manual de las columnas que no mapean de forma automática.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig7_C5Mapeo_MapeoManual.png)
<sup>_Figura 7. Mapeo manual de las columnas que no mapean de forma automática: A. Búsqueda del campo occurrenceID en el navegador con la opción Ctrl + F o Cmd +f (iOS). B. Selección del campo “occurrenceI” del archivo original y mapeado como “occurrenceID” en el IPT._</sup>

- Repita este procedimiento con el elemento preparations que corresponde a la columna “preparaciones” (Fig. 8).

![Figura 8. Mapeo manual de las columnas que no mapean de forma automática. Selección del campo “preparaciones” del archivo original y mapeado como “preparations” en el IPT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig8_C5Mapeo_Preparaciones.png)
<sup>_Figura 8. Mapeo manual de las columnas que no mapean de forma automática. Selección del campo “preparaciones” del archivo original y mapeado como “preparations” en el IPT._</sup>

- Hacer clic en la opción Guardar del menú lateral izquierdo (Fig. 9). Cuando se haya guardado la página, la vista se refrescará y desaparecerá la sección “Columnas sin mapear”.

![Figura 9. Botón ubicado en el menú izquierdo de la sección de metadatos que permite guardar los cambios realizados en el mapeo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig9_C5Mapeo_Guardar.png)
<sup>_Figura 9. Botón ubicado en el menú izquierdo de la sección de metadatos que permite guardar los cambios realizados en el mapeo._</sup>

- Hacer clic en regresar para volver a la sección de “**Vista general del recurso**”.

### Paso 3 - Mapeo de extensiones

Después de completar exitosamente el proceso de mapeo del core de registros biológicos, es posible realizar el mapeo de las extensiones del estándar Darwin Core que están disponibles, las cuales se pueden consultar en la página web [Extensiones DwC](https://biodiversidad.co/compartir/estandar-darwin-core/#extensiones-dwc). 

Las instrucciones para realizar el mapeo de la extensión de permisos se muestran a continuación:

- Ir a la sección de Mapeo Darwin Core y hacer clic en el desplegable. Luego, en la sección de Extensiones, seleccionar GGBN Permit (Fig. 10A).
- Dar clic en Agregar para pasar a la siguiente ventana, donde se podrá seleccionar el archivo a mapear (Fig. 10B).

![Figura 10. Mapeo de extensiones Darwin Core en el IPT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig10_C5Mapeo_Agregar.png)
<sup>_Figura 10. Mapeo de extensiones Darwin Core en el IPT: A. Selección en el desplegable de la extensión **GGBN Permit** entre las opciones de extensiones disponibles según el tipo de Core (Ocurrence). B. Clic al botón Agregar para comenzar el proceso de mapeo._</sup>

Las extensiones disponibles dependen del core que se haya seleccionado. En este caso, hay dos disponibles para el core de registros biológicos. Sin embargo, si se desea publicar una lista de especies o un evento de muestreo, hay diferentes opciones de extensiones. Por ejemplo, para la publicación de un evento de muestreo, se debe cargar el archivo de eventos como Core y el archivo de registros biológicos como la extensión **Darwin Core Occurrence**.

- En la siguiente ventana, seleccionar el archivo a mapear, que puede ser  extension_permisos_textoplano o extension_permisos_excel, según el desarrollo del paso 6 de la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt). Por último, dar clic en Guardar (Fig 11).

![Figura 11. Selección de archivo con los datos para el mapeo de la extensión GGBN Permit.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig11_C5Mapeo_SeleccionGGBN.png)
<sup>_Figura 11. Selección de archivo con los datos para el mapeo de la extensión **GGBN Permit**._</sup>

En la venta de Mapeo del conjunto de datos, el proceso de mapeo se realizará de manera automática si los datos contenían los encabezados correctamente documentados según el estándar. En este caso, el archivo cuenta con los elementos necesarios documentados para esta extensión, por lo que el número de elementos mapeados debe coincidir con el número de columnas del archivo (Fig 12). Por consiguiente, es necesario revisar que los 4 elementos hayan sido mapeados correctamente y finalizar dando clic en Guardar. (Fig. 12). 

![Figura 12. Visualización de las columnas auto mapeadas para la extensión GGBN permit.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig12_C5Mapeo_MapeoGGBN.png)
<sup>_Figura 12. Visualización de las columnas auto mapeadas para la extensión GGBN permit._</sup>

Cuando se hayan guardado los cambios, hacer clic en Regresar para volver a la Vista General del recurso, donde se visualizarán los dos archivos mapeados para el Core y para la extensión. Luego, se recomienda verificar nuevamente que el número de filas y columnas coincida con el archivo cargado. También se puede hacer clic en el ícono del ojo para acceder a la previsualización de los datos cargados (Fig. 13).

![Figura 13. Visualización del mapeo de los datos del Core y de la extensión en la vista general del recurso con 54 elementos para el Core Ocurrence y 3 elementos para la extensión GGBN Permit.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig13_C5Mapeo_Visualizacion.png)
<sup>_Figura 13. Visualización del mapeo de los datos del Core y de la extensión en la vista general del recurso con 54 elementos para el Core Ocurrence y 3 elementos para la extensión **GGBN Permit**._</sup>

Se puede notar que en la vista general para la extensión de **GGBN Permit** solo aparecen 3 elementos y no los 4 mapeados originalmente. Esto se debe a que el IPT no cuenta el occurrenceID, ya que es el elemento que tienen en común la extensión y el archivo Core para relacionar cada registro biológico con la extensión y no hace parte de los elementos de la extensión. 

## Paso 4 - Reto para reforzar los conocimientos

Si se desea ampliar el conocimiento adquirido, aquí se propone un ejercicio adicional de mapeo de datos.

El primer paso es eliminar el mapeo de la extensión de permisos que se acabó de completar y repetirlo.

**Nota**: Para realizar la eliminación de un mapeo, dar clic en el botón Editar y seleccionar la opción de Eliminar al final del menú izquierdo de la ventana de edición del mapeo. Por último, confirmar la instrucción haciendo clic en Sí (Fig. 14).

![Figura 14. Proceso de eliminación de mapeo en el IPT. Primero se hace clic en Eliminar en la vista de edición del mapeo, a la cual se accede a través de la opción Editar. Posteriormente, se confirma la eliminación haciendo clic en Sí.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_mapeo_datos_ipt/Fig14_C5Mapeo_Eliminar.png)
<sup>_Figura 14. Proceso de eliminación de mapeo en el IPT. Primero se hace clic en Eliminar en la vista de edición del mapeo, a la cual se accede a través de la opción Editar. Posteriormente, se confirma la eliminación haciendo clic en Sí._</sup>


****
**¡Felicitaciones!**

¡Felicitaciones! El proceso de mapeo de datos en el IPT ha culminado satisfactoriamente.
  
****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
 
