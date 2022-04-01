---
layout: heroImage
title: Guía para reportar datos
description: Procedimiento para reportar datos sobre biodiversidad derivados de permisos de recolección y contratos de acceso a recursos genéticos.
background: https://live.staticflickr.com/687/31549418194_3fd0b768f8_h.jpg
imageLicense: |
 _Stilpnia cyanicollis_ Fotografía de: Alejandro Bayer Tamayo vía [Flickr](https://flickr.com/photos/alejobayer/31549418194){:target="_blank"}
height: 41vh
toc: true
---

## Guía para reportar
<br/>
<img src="/compartir/Imagenes/guia-para-reportar-datos.png">
<br/>
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/tGzANPQWi7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
<br/>

**Enlaces a las herramientas para reportar los datos y generar el certificado de reporte.**

[Herramienta IPT](http://ipt.biodiversidad.co/permisos){:target="_blank" .button .is-primary}   [Herramienta CR-SiB](http://biodiversidad.co//certificados/publicacion-permisos/){:target="_blank" .button .is-primary}


## 1. Crear el nuevo recurso

La creación del recurso se hace mediante la herramienta de publicación integrada de datos (IPT, del inglés Integrated Publishing Toolkit), para esto se debe contar con el **conjunto de datos estandarizado y las credenciales de acceso**.


### 1.1 Solicitar credenciales de acceso

Las credenciales de acceso, compuestas por el nombre de usuario y la contraseña, se obtienen **registrando al titular del permiso de recolección como proveedor de datos**. Esto se solicita en la sección de [registro](https://biodiversidad.co/compartir/registro){:target="_blank"} de nuestro sitio web.

Este paso **solo hay que hacerlo la primera vez que se van a reportar datos**. Para verificar si un titular del permiso ya es proveedor, se puede consultar este enlace:[https://docs.google.com/spreadsheets/d/1RAVjVpb0pt2eWEiscqqbWObb7m-Oqqdu2NAt_qJNLiQ/edit#gid=0](https://docs.google.com/spreadsheets/d/1RAVjVpb0pt2eWEiscqqbWObb7m-Oqqdu2NAt_qJNLiQ/edit#gid=0){:target="_blank"}  

En caso de ya ser proveedor y desconocer las credenciales de acceso, comunícate con el contacto consignado en el registro para obtenerlas.


### 1.2 Preparar los datos para el reporte 

Los datos deben ser organizados en una estructura de tabla utilizando el estándar Darwin Core (DwC). Para esto se puede usar la versión más reciente de la [plantilla](https://drive.google.com/u/0/uc?id=1mj0XG8GcABmTcZefQfHdHi8_ugJV3roA&export=download){:target="_blank"} de Excel creada para registros biológicos y la [extensión de permisos](https://drive.google.com/uc?export=download&id=1vwX9JUx_219CVTF2HrDj7eEukFJyZd2P){:target="_blank"}, disponible en la sección [Plantillas Darwin Core](https://biodiversidad.co/recursos/plantillas-dwc/){:target="_blank"} de este sitio. 

¿Necesitas ayuda para poner los datos en la plantilla? Consulta el [laboratorio de estandarización de datos en DwC](https://biodiversidad.co/formacion/laboratorios/DWC){:target="_blank"}.

La calidad del conjunto de datos se puede evaluar antes de reportarlo usando la herramienta GBIF [Data Validator](https://www.gbif.org/es/tools/data-validator){:target="_blank"}. Si necesitas ayuda validando los datos, puedes consultar el [laboratorio y videotutorial de esta herramienta](https://biodiversidad.co/formacion/laboratorios/DataValidator){:target="_blank"}.


### 1.3 Crear el recurso en el IPT

Usa las credenciales para ingresar a la herramienta IPT, disponible en el enlace [ipt.biodiversidad.co/permisos](http://ipt.biodiversidad.co/permisos){:target="_blank"}.

Para crear el nuevo recurso, selecciona la opción _Gestión de recursos_ del menú. Allí se debe asignar un nombre corto al recurso (este debe ser todo en minúsculas, sin espacios y, preferiblemente, descriptivo; ya que será asignado a la URL del reporte) y el tipo de conjunto de datos a reportar, para este caso: _Registros biológicos_.

Con esos dos aspectos definidos, solo falta hacer clic en el botón _Crear_.


## 2. Cargar el conjunto de datos y la extensión de permisos

Una vez creado el recurso, se debe cargar la plantilla DwC, con los datos validados y estandarizados, y la extensión de permisos. Antes de hacer la carga se debe eliminar de la plantilla la traducción en español de los encabezados.

### 2.1 Cargar los archivos

La carga de los dos archivos: plantilla con los datos y extensión de permisos, debe hacerse por separado.

Para cargar cada archivo, desde la franja _Conjunto de datos_ elegir la opción _Archivo_ del desplegable_,_ seleccionar el archivo a cargar y hacer clic en el botón _Agregar_. Se debe ingresar el valor 1 en el campo _Número de filas del encabezado_, seleccionar la hoja del archivo Excel que corresponda con los registros biológicos y hacer clic en _Guardar_.

Es indispensable que los archivos cargados solo contengan los **encabezados con el nombre de los elementos DwC en inglés**.


### 2.2 Mapear los elementos Darwin Core

La carga del conjunto de datos no está completa hasta que se haga el mapeo DwC. Esta verificación está **automatizada en la herramienta, siempre y cuando los encabezados del archivo coincidan con el estándar en inglés**.

Para iniciar esta verificación, desde la franja _Mapeo Darwin Core_ se debe seleccionar de la lista desplegable la opción _Darwin Core Occurrence_ y hacer clic en el botón _Agregar_, validar que se aplicará sobre el archivo que se está cargando y hacer clic en _Guardar_. 

En caso de que un encabezado presente algún problema, éste se mostrará en la parte inferior de la página, después de las columnas automapeadas. Esto servirá para verificar la correspondencia de las columnas con los elementos del estándar y hacer las correcciones pertinentes.

Para mapear la extensión se deben seguir los mismos pasos pero seleccionando de la lista desplegable la opción _GGBN Permit Extension_.

La verificación que hace el mapeo DwC, en los archivos de la plantilla con los datos y la extensión de permisos, es necesaria para garantizar la correcta carga de toda la información.


## 3. Documentar los metadatos

Este paso permite dar contexto a los datos cargados. Para esto, es importante conocer las características del proyecto y las condiciones en las que se llevó a cabo la toma de los datos. Preguntas como qué, cómo, cuándo, dónde y quién, ayudan a tener claridad sobre los especímenes recolectados, la metodología de recolección, las coordenadas de georreferenciación y los involucrados.

Para documentar los metadatos del reporte, selecciona _Editar_ desde la franja _Metadatos_ y completa la información solicitada en los formularios de los _Metadatos básicos_, la _Descripción_, los _Contactos del recurso_, los _Creadores del recurso_ y los _Proveedores de los metadatos_. 

¿Necesitas ayuda para crear el recurso y cargar los datos? Consulta el [laboratorio de documentación de metadatos](https://biodiversidad.co/formacion/laboratorios/IPT_Metadatos){:target="_blank"}.


## 4. Hacer público el conjunto de datos

Este paso permite que el recurso quede disponible en la instancia de la herramienta IPT, mediante una URL, para la generación del certificado. Para esto, es necesario que el conjunto de datos aparezca como _Público_ en la franja _Visibilidad_.

Con este reporte, es posible aumentar el reconocimiento y atribución de la organización, como publicadora de datos del SiB Colombia. Si estás interesado en que esto suceda, escribe a [sib@humboldt.org.co](mailto:sib@humboldt.org.co){:target="_blank"}.


## 5. Generar el certificado

Ingresa a la herramienta CR-SiB con las mismas credenciales de acceso asignadas al IPT. Está disponible en el enlace [http://biodiversidad.co/certificados/publicacion-permisos/](http://biodiversidad.co/certificados/publicacion-permisos/){:target="_blank"}.

Completa la información solicitada en los formularios. Para esto es indispensable contar con el enlace del conjunto de datos que entrega el IPT o el DOI y toda la información del titular del permiso.

Este certificado es el soporte exigido por parte de la autoridad ambiental como evidencia del reporte de los datos a través del SiB Colombia.


_____

Si tienes dudas sobre el reporte de datos, puedes consultar la sección [Preguntas frecuentes](https://biodiversidad.co/compartir/faq/#certificado-de-reporte){:target="_blank"} de este sitio.

_____


## Insumos útiles para reportar datos 

**Estandarización de los datos**

* [Laboratorio de estructuración y calidad de datos](https://biodiversidad.co/formacion/laboratorios/LabEstructuracionCalidad){:target="_blank"}
* [Guía de estandarización de datos en DwC](https://biodiversidad.co/formacion/laboratorios/DWC){:target="_blank"}
* [Guía de estandarización con extensiones DwC](https://biodiversidad.co/formacion/laboratorios/DWCextensiones){:target="_blank"}
* [Estandarización de datos al estándar DwC (video)](https://www.youtube.com/watch?v=YAoc9QZ9cBw){:target="_blank"}

**Validación de la calidad de los datos**

* [Validación de datos con GBIF data Validator](https://biodiversidad.co/formacion/laboratorios/DataValidator){:target="_blank"}
* [Laboratorio de validación y limpieza](https://biodiversidad.co/formacion/laboratorios/ContextoValidacionLimpieza){:target="_blank"}
* [Guía de open refine](https://biodiversidad.co/formacion/laboratorios/OpenRefine){:target="_blank"}
* [Guía de validación taxonómica con Species Matching](https://biodiversidad.co/formacion/laboratorios/SpeciesMatching){:target="_blank"}
* [Guía de conversión de coordenadas](https://biodiversidad.co/formacion/laboratorios/ConversionCoordenadas){:target="_blank"}
* [Guía de conversión de fechas](https://biodiversidad.co/formacion/laboratorios/ConversionFechas){:target="_blank"}

