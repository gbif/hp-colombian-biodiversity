---
layout: documentation
permalink: /formacion/laboratorios/carga-datos-ipt
title: "Cómo cargar los datos al IPT"
description: "Objetivo: Crear un recurso y cargar los datos en la herramienta de publicación IPT en formato Excel y de texto plano."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Cómo cargar los datos al IPT

**Objetivo**

Crear un recurso y cargar los datos en la herramienta de publicación IPT en formato Excel y de texto plano.

**Introducción**

En los procesos de publicación o reporte de datos a través del SiB Colombia, se hace uso de la herramienta de publicación IPT (del inglés _Integrated Publishing Toolkit_) para la carga de datos sobre biodiversidad. Los archivos se pueden cargar en diversos formatos, como archivos de texto plano o tipo Excel. Con este fin, los datos deben estar debidamente estructurados en el estándar _Darwin Core_ para que sean validados por la herramienta.

En este laboratorio se explica paso a paso el proceso de carga de datos a partir de un conjunto de datos de prueba. Para sacar el máximo provecho de la guía, también se recomienda seguir el procedimiento con un conjunto de datos propio.

**Sobre la herramienta**

La herramienta de publicación [IPT](https://www.gbif.org/es/ipt){:target="_blank"} es un _software_ gratuito y de código abierto que se utiliza para publicar y compartir conjuntos de datos sobre biodiversidad a través del [SiB Colombia](https://biodiversidad.co), [GBIF](https://www.gbif.org/){:target="_blank"} y [OBIS](https://obis.org/){:target="_blank"}. Este _software_ permite integrar datos y metadatos en un mismo formato de archivo, conocido como _Darwin Core Archive_ (DwC-A). Además, esta herramienta sirve para cargar datos de múltiples fuentes y en diversos formatos de archivo, lo que facilita la integración de los mismos y su proceso de publicación. 

Las instancias de publicación principales son: [IPT SiB](https://ipt.biodiversidad.co/sib/){:target="_blank"}, el [IPT SiB Marino](https://ipt.biodiversidad.co/sibm/){:target="_blank"} para los datos marino-costeros y el [IPT Permisos](https://ipt.biodiversidad.co/permisos/){:target="_blank"} para los datos compartidos con la única finalidad de obtener certificados de reporte. Para el desarrollo de esta guía, se usará la instancia de pruebas IPT-Test, la cual es una instancia de pruebas del SiB Colombia creada principalmente para fines pedagógicos.

**Enlace**

IPT Test: [https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/){:target="_blank"}

**Archivos de trabajo**

En esta guía se utilizarán las plantillas Excel de registros biológicos y de la extensión de permisos diligenciados con datos de prueba. Los mismos archivos también se encuentran en formato de texto plano. Los archivos están disponibles en los siguientes enlaces:

- Archivo core de registros biológicos en formato Excel: [Datos Estandarizados Excel.xlsx](https://docs.google.com/spreadsheets/d/1TiQR0j_i6w0aM2Mme1G4ThbTA7XAkktj/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true) {:target="_blank"}
- Archivo extensión de permisos en formato Excel: [Extension_permisos_Excel.xlsx](https://docs.google.com/spreadsheets/d/1l_C4wlU98AdsdaGeOtt1wdAGZR_OSeWS/edit?usp=share_link&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}
- Archivo core de registros biológicos en formato de texto plano: [Datos_estandarizados_textoplano.txt](https://drive.google.com/file/d/15KqcdxH2LZ1gnxJs3mwaCD47jHBF93H9/view?usp=sharing){:target="_blank"}
- Archivo extensión de permisos en formato de texto plano: [Extension_permisos_textoplano.txt](https://drive.google.com/file/d/1s27XhUCt8ebhADVZFwKa6cEfTHSa6u2-/view?usp=share_link){:target="_blank"}


--------

## Paso 1 - Ajustes previos al proceso de carga

Como primer paso, abrir el archivo [Datos_estandarizados_Excel.xlsx](https://docs.google.com/spreadsheets/d/1TiQR0j_i6w0aM2Mme1G4ThbTA7XAkktj/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} para realizar algunas modificaciones que facilitarán el proceso de carga de los datos en IPT. 

Para subir los datos a partir de una plantilla de publicación del SiB Colombia, es necesario eliminar la fila con los encabezados de los elementos en español en la pestaña “**Plantilla**”.  Para ello, seleccionar la segunda fila, hacer clic derecho y elegir la opción Eliminar (Fig. 1). 

Al finalizar, guardar los cambios para conservar las modificaciones que se realizaron en el archivo.

![Figura 1. Eliminar la fila con los elementos Darwin Core en español desde la plantilla de registros biológicos en Excel.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig1_C5Carga_EliminarFila.png)
<sup>_Figura 1. Eliminar la fila con los elementos Darwin Core en español desde la plantilla de registros biológicos en Excel._</sup>

## Paso 2 - Ingreso al IPT y creación del recurso

### 2.1. Ingreso al IPT

Ingresar a la herramienta de publicación IPT de pruebas ([https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/)), 

En la parte superior derecha, hacer clic en _Iniciar Sesión_ y diligenciar las siguientes credenciales (Fig. 2):

- **Usuario**: laboratorio_formacion@gmail.com
- **Contraseña**: S64i6E8SD

![Figura 2. Inicio de sesión en el IPT test (Ambiente de pruebas) con las credenciales proporcionadas para el desarrollo de la guía.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig2_C5Carga_Ingresar.png)
<sup>_Figura 2. Inicio de sesión en el IPT test (Ambiente de pruebas) con las credenciales proporcionadas para el desarrollo de la guía._</sup>

**Nota**: En los procesos de reporte a través del IPT con el fin de solicitar permisos para la obtención de certificados, se deben consultar las credenciales al interior de la organización con la persona encargada de realizar el trámite de registro ante el SiB Colombia. En los procesos de publicación, estas credenciales se suministran durante el proceso de acompañamiento.

### 2.2. Creación del recurso en el IPT

Una vez dentro del IPT, seleccionar la opción Gestión de recursos en el menú. En esta aparecerán dos secciones: una tabla con todos los conjuntos de datos que se pueden administrar con el usuario (Fig. 3A) y un formulario para crear nuevos recursos (Fig. 3B).

![Figura 3. Detalle de la vista de Gestión de recursos dentro del IPT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig3_C5Carga_Gestion.png)
<sup>_Figura 3. Detalle de la vista de Gestión de recursos dentro del IPT: A. Sección que lista los recursos que pueden ser administrados por el usuario. B. Sección para la creación de un nuevo recurso._</sup>

Posteriormente, ir a _Crear nuevo recurso_ y documentar las opciones con base en estos parámetros:

- **Nombre corto**: asignar el nombre corto del nuevo recurso, el cual será parte de la URL del mismo dentro del IPT (Fig. 4). Para ello, escribir el nombre corto “abc_monitoreo-albania” antecedido de su nombre y apellido, así:
**[Nombre]-[Apellido]**_abc_monitoreo-albania (Fig. 4).
  Tenga en cuenta que para crear los nombres cortos se recomienda: 
  - Usar la estructura: [Acrónimo de la entidad]_[palabras clave del recurso].
  - Usar máximo 25 caracteres. 
  - Opcionalmente, se puede incluir el año del proyecto dentro del nombre corto si se considera necesario.
  - No usar espacios, se recomienda separar las palabras que conformen el nombre corto con guiones (-) o guiones bajos (_).
  - No incluir espacios ni carácteres especiales como tildes (´) o eñes (ñ).
- **Selección del tipo de recurso**: En la lista desplegable de la sección “**Tipo**”, seleccionar la opción que corresponda a los datos a publicar (Fig. 4). En este caso, _Registros Biológicos_. La elección del tipo de datos durante la creación del recurso no es definitiva y se puede cambiar este ítem a lo largo de la publicación.  
- **Opción para importar un archivo DwC-A**: Esta opción no se usará en este ejercicio, ya que solo es necesaria si se cuenta con un _Darwin Core Archive_ (DwC-A). En ese caso, se puede usar la función Importar desde archivo. Esta opción solo acepta el formato DwC-A, que corresponde a un archivo comprimido (Ver: [¿Qué es un archivo DwC-A y que contiene?](https://biodiversidad.co/compartir/faq/#otras)).

Para finalizar, hacer clic en _Crear_ (Fig. 4).

![Figura 4. Creación de un nuevo recurso con un ejemplo de Nombre corto y la selección del Tipo de datos a cargar en el recurso. La opción Carga de un DwC-A no se usará en esta guía.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig4_C5Carga_Crear.png)
<sup>_Figura 4. Creación de un nuevo recurso con un ejemplo de Nombre corto y la selección del Tipo de datos a cargar en el recurso. La opción Carga de un DwC-A no se usará en esta guía._</sup>

**Nota**: Es posible que en esta vista se encuentren los recursos creados por otros estudiantes que han realizado esta guía. Estos recursos no se deben modificar.

Después de crear el recurso, aparecerá la “**Vista General**”, allí se podrá administrar el recurso. Esta guía se enfoca en la sección  “**Conjunto de Datos**”, donde se realiza el proceso de carga de los datos (Fig. 5).

![Figura 5. Vista general del nuevo recurso. Se resalta la sección “Conjunto de datos”.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig5_C5Carga_Carga.png)
<sup>_Figura 5. Vista general del nuevo recurso. Se resalta la sección “Conjunto de datos”._</sup>

## Paso 2 - Carga de los datos provenientes de las plantillas de publicación del SiB Colombia

Se abordará el proceso de carga de datos a partir de las plantillas de publicación de registros biológicos y una extensión del estándar _Darwin Core_. Este proceso es replicable para cualquier otro core, ya sean listas de chequeo o eventos de muestreo, y para cualquier extensión del estándar.

### 2.1 Carga de la plantilla de registros en el IPT 

En la vista general del recurso de la sección “**Conjunto de Datos**”, se encuentran las opciones para la carga de los datos. Aparecerá una lista desplegable con las distintas posibilidades para realizar el proceso de carga de datos en el IPT:

- **Base de datos**: conecta una base de datos directamente al IPT. Esta opción requiere un mayor conocimiento técnico. Para conectar una base de datos, se debe consultar la información en el [manual del IPT](https://ipt.gbif.org/manual/es/ipt/2.5/manage-resources#base-de-datos-como-conjunto-de-datos){:target="_blank"}.
- **Archivo**: subir un archivo directamente desde el ordenador. Esta es la opción más frecuente para la carga de datos.
- **URL**: llamar los datos de texto directamente desde una URL. Para conectar los datos desde una URL, se debe consultar la información en el [manual del IPT](https://ipt.gbif.org/manual/es/ipt/2.5/manage-resources#url-como-conjunto-de-datos){:target="_blank"}.

Seleccionar la opción Archivo (Fig. 6) y hacer clic en “_Examinar_” para seleccionar el archivo a cargar (Fig. 6). En la nueva ventana, elegir la plantilla que se editó en el paso 1 “**Datos_estandarizados_Excel.xlsx**” y hacer clic en Abrir.

Para completar el proceso de carga, hacer clic en el botón “_Agregar_” que aparece al seleccionar el archivo (Fig. 6).

![Figura 6. Selección de la fuente de datos (Archivo) y carga de la plantilla en el IPT ( Datos_estandarizados_Excel.xlsx).](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig6_C5Carga_Archivo.png)
<sup>_Figura 6. Selección de la fuente de datos (Archivo) y carga de la plantilla en el IPT ( Datos_estandarizados_Excel.xlsx)._</sup>

### 2.2 Configuración de formato de la plantilla excel en el IPT

En la nueva vista debe especificar algunas opciones según el formato del archivo cargado, ya sea Excel o texto plano. Para el caso de las plantillas del SiB Colombia en excel, se deben completar estos pasos:

1. En la opción Número de filas del encabezado, cambiar el valor de “0” por un “1” (Fig. 7). Esto indica que la primera fila del archivo tiene los encabezados (elementos DwC).

2. En la opción Seleccione una hoja, hacer clic en el desplegable y elegir la hoja “Plantilla” que contiene los datos  (Fig. 7). Para que los cambios realizados sean leídos correctamente, dar clic en la opción Analizar. Si no se da clic en Analizar, la nueva configuración no será leída y el archivo cargará con la primera hoja (instrucciones) por defecto. (Fig. 7).

![Figura 7. Selección de opciones para cargar una plantilla SiB Colombia en formato de archivo Excel. Cambio en el número de filas del encabezado de 0 a 1. Selección de la hoja Plantilla con los datos a cargar. Analizar los datos para asegurar que los cambios se interpreten correctamente.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig7_C5Carga_Opciones.png)
<sup>_Figura 7. Selección de opciones para cargar una plantilla SiB Colombia en formato de archivo Excel. Cambio en el número de filas del encabezado de 0 a 1. Selección de la hoja Plantilla con los datos a cargar. Analizar los datos para asegurar que los cambios se interpreten correctamente._</sup>

Antes de finalizar el proceso de carga, se recomienda previsualizar los datos para corroborar que la información se cargó correctamente. Para esto, dar clic en el botón con el ícono del ojo (Fig. 8). Esto abrirá una pestaña general donde se puede revisar que los datos estén cargados correctamente (Fig. 9).

![Figura 8. Selección de la opción Previsualización para corroborar la correcta interpretación de la plantilla Excel.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig8_C5Carga_Analizar.png)
<sup>_Figura 8. Selección de la opción Previsualización para corroborar la correcta interpretación de la plantilla Excel._</sup>

![Figura 9. Detalle de la previsualización de los datos cargados antes de guardar los cambios. Se puede observar que los encabezados corresponden al estándar Darwin Core y que los contenidos de cada elemento son coherentes.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig9_C5Carga_Vista.png)
<sup>_Figura 9. Detalle de la previsualización de los datos cargados antes de guardar los cambios. Se puede observar que los encabezados corresponden al estándar Darwin Core y que los contenidos de cada elemento son coherentes._</sup>

Para salir de la previsualización, hacer clic sobre la tabla que se está previsualizando o presionar ESC en su teclado.

Al volver a la vista de configuración del archivo, dar clic en Guardar (Fig. 10). 

![Figura 10. Clic en la opción Guardar para conservar los cambios y finalizar la carga del archivo en el IPT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig10_C5Carga_Guardar.png)
<sup>_Figura 10. Clic en la opción Guardar para conservar los cambios y finalizar la carga del archivo en el IPT._</sup>

### 2.3 Verificación de la carga de los datos 

Después de cargar el  archivo de registros biológicos, se pueden validar los siguientes valores: peso del archivo, número de filas, número de columnas y tipo de archivo (Fig. 11).
En este caso, ¿coincide el número de filas y columnas cargadas con el archivo Excel?

El número de filas de la plantilla es 21 contando el encabezado y 54 columnas, mientras que el archivo cargado tiene 32 filas (Fig. 11). Esto se debe a caracteres ocultos que pueden quedar en los archivos Excel y que el IPT reconoce como filas. Este error fue incorporado intencionalmente para explicar algunos errores comunes que se presentan al momento de cargar los datos.

Cuando aparece este tipo de error, hay dos opciones: hacer clic en el botón Editar para regresar a la ventana y revisar si hubo un error en la  configuración del formato (Ver paso 2.2) o cargar el archivo en formato de texto, como se explica en el siguiente paso:

![Figura 11. Verificación del número de filas y columnas cargados desde una plantilla al IPT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig11_C5Carga_Verificar.png)
<sup>_Figura 11. Verificación del número de filas y columnas cargados desde una plantilla al IPT._</sup>

## Paso 3 - Carga de los datos provenientes de un archivo de texto plano

También es posible realizar el proceso de carga de datos en el IPT desde un archivo de texto plano con la extensión .csv o .txt. En esta guía se ejemplifica el proceso utilizando un formato .txt.

Para ello usaremos el archivo: [Datos_estandarizados_textoplano.txt](https://drive.google.com/file/d/15KqcdxH2LZ1gnxJs3mwaCD47jHBF93H9/view?usp=sharing){:target="_blank"} 

Nota: Para saber cómo convertir un archivo excel en un archivo de texto, se recomienda ver el video: [Archivo de texto plano ¿qué es y porqué lo necesito?](https://www.youtube.com/watch?v=6TwIR0740J8){:target="_blank"}

Ir a la sección “**Conjunto de Datos**” en el IPT y seleccionar la opción Archivo en la lista desplegable (Fig. 12). Luego, hacer clic en el botón “Seleccionar archivo” (Fig. 12). En la  ventana emergente, elegir el archivo de texto plano **Datos_estandarizados_textoplano.txt** y dar clic en abrir.

Para completar el proceso de carga, hacer clic en el botón “_Agregar_” que aparece al seleccionar el archivo (Fig. 12). 

![Figura 12. Selección de la fuente de datos (Archivo) y carga de un archivo de texto plano en el IPT (Datos_estandarizados_textoplano.txt).](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig12_C5Carga_TextoPlano.png)
<sup>_Figura 12. Selección de la fuente de datos (Archivo) y carga de un archivo de texto plano en el IPT (Datos_estandarizados_textoplano.txt)._</sup>

### 3.1 Configuración del formato del archivo de texto en el IPT

En el caso de los archivos de texto, las opciones seleccionadas por defecto suelen ser correctas. Por este motivo, **no** se sugiere hacer cambios en las mismas. Solamente es necesario verificar el número de filas y columnas cargadas (Fig. 13) y revisar por medio de la opción de previsualización (Fig. 13). Esto abrirá una ventana donde es posible verificar que los datos se cargaron correctamente. Para salir de la previsualización, hacer clic sobre la misma.

![Figura 13. Opciones para la configuración de un archivo de texto plano. Conteo del número de columnas y filas. Botón para acceder a la previsualización del archivo cargado.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig13_C5Carga_OpcionesTextoPlano.png)
<sup>_Figura 13. Opciones para la configuración de un archivo de texto plano. Conteo del número de columnas y filas. Botón para acceder a la previsualización del archivo cargado._</sup>

Si en previsualización se identifica que hay caracteres extraños, particularmente las ñ y las tildes, es necesario cambiar la configuración de la _Codificación de caracteres_ a opciones como Latin 1 o ISO 8951. Si se identifica que las columnas no fueron interpretadas correctamente, es probable que se deba cambiar el delimitador de las columnas por coma (,) o punto y coma (;). Para este ejercicio, se recomienda dejar la configuración por defecto.

Finalmente, hacer clic en Guardar para regresar a la vista general del recurso. 

Después de terminar el proceso de carga del archivo de texto, se puede comparar la información del archivo cargado en formato Excel con el que se cargó en formato de texto. Se evidencia que en el archivo de texto el número de filas (20 + encabezado) y columnas (54) sí coincide con el número de filas y columnas que se querían cargar inicialmente, a diferencia del archivo cargado en Excel. (Fig. 14).

![Figura 14. Comparación del número de filas y columnas cargadas desde las plantillas en formato excel y en formato de archivo de texto plano.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig14_C5Carga_VerificarTextoPlano.png)
<sup>_Figura 14. Comparación del número de filas y columnas cargadas desde las plantillas en formato excel y en formato de archivo de texto plano._</sup>

## Paso 4 - Eliminación de un archivo

En algunas ocasiones es necesario eliminar un archivo cargado en el IPT, sobre todo si se presentaron errores en el proceso de carga o si necesita actualizar el archivo por un ajuste en los datos.  En el caso de esta guía, se han subido los datos múltiples veces en diferentes formatos (Excel y texto plano). Por lo tanto, en este punto, habrá dos archivos cargados en el IPT. 

Posteriormente, es necesario eliminar los datos cargados en formato Excel. Para ello, se debe hacer clic en el botón _Editar_ de la sección Conjunto de Datos al frente del archivo **datos_estandarizados_excel** (Fig. 15).

![Figura 15. Selección de la opción Editar en un archivo previamente cargado para el proceso de eliminación.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig15_C5Carga_Editar.png)
<sup>_Figura 15. Selección de la opción Editar en un archivo previamente cargado para el proceso de eliminación._</sup>

En la vista de edición, dar clic en la opción Eliminar archivo (Fig. 16). Esto abrirá la nueva pestaña que solicitará confirmación. Por último, hacer clic en Sí para realizar el proceso de eliminación (Fig. 16).

![Figura 16. Opciones a seleccionar para eliminar un archivo previamente cargado en el IPT.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig16_C5Carga_Eliminar.png)
<sup>_Figura 16. Opciones a seleccionar para eliminar un archivo previamente cargado en el IPT._</sup>

## Paso 5 - Carga de extensiones

Si se requiere cargar extensiones, es necesario subir el archivo con la extensión _Darwin Core_ de permisos. Para ello, se debe seguir de nuevo esta guía desde el Paso 2. Es posible realizar el ejercicio con un archivo Excel o con un archivo de texto.

- Archivo extensión de permisos en formato Excel (Fig. 17) [Extension_permisos_Excel.xlsx](https://docs.google.com/spreadsheets/d/1l_C4wlU98AdsdaGeOtt1wdAGZR_OSeWS/edit?usp=share_link&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}.
- Archivo extensión de permisos en formato de texto plano .txt (Fig. 18) [Extension_permisos_textoplano.txt](https://drive.google.com/file/d/1s27XhUCt8ebhADVZFwKa6cEfTHSa6u2-/view?usp=share_link){:target="_blank"}.

Al finalizar, se debería visualizar el siguiente resultado según el formato de archivo seleccionado: 

![Figura 17. Vista final del archivo de extensiones cargado en el IPT junto con el archivo de registros biológicos y la extensión cargada en formato Excel y la extensión cargada en formato de texto plano.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig17_C5Carga_VistaFinal.png)
<sup>_Figura 17. Vista final del archivo de extensiones cargado en el IPT junto con el archivo de registros biológicos y la extensión cargada en formato Excel yla extensión cargada en formato de texto plano._</sup>

![Figura 18. Vista final del archivo de extensiones cargado en el IPT junto con el archivo de registros biológicos y la extensión cargada en formato de texto plano.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_carga-datos-ipt/Fig18_C5Carga_VistaFinal.png)
<sup>_Figura 18. Vista final del archivo de extensiones cargado en el IPT junto con el archivo de registros biológicos y la extensión cargada en formato de texto plano._</sup>

**Nota**: Cuando se cargan archivos de texto, el IPT cuenta las filas sin el encabezado. Por otro lado, cuando se realiza la carga desde Excel, el IPT cuenta el encabezado. Eso explica la diferencia entre las 20 y 21 filas, respectivamente, de los archivos cargados en la figura 17.

****
**¡Felicitaciones!**

¡Felicitaciones! El proceso de carga de datos en el IPT ha culminado satisfactoriamente.
  
****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
 
