---
layout: heroImage
title: Guía para reportar datos
description: Procedimiento para reportar datos sobre biodiversidad derivados de permisos de recolección y contratos de acceso a recursos genéticos.
background: https://live.staticflickr.com/687/31549418194_3fd0b768f8_h.jpg
imageLicense: |
 _Stilpnia cyanicollis_ Fotografía de: Alejandro Bayer Tamayo vía [Flickr](https://flickr.com/photos/alejobayer/31549418194){:target="_blank"}
height: 41vh
permalink: /pruebapublicacion/
toc: true
---

**Antes de empezar: reportar y publicar tienen alcances distintos**. La publicación de datos abiertos sobre biodiversidad es un ejercicio voluntario; por otro lado, el reporte es un proceso para dar cumplimento a la regulación ambiental.

Una explicación sobre ambos modelos y su alcance está disponible en este artículo: [Reportar y publicar datos sobre biodiversidad tienen alcances diferentes: ¿los conoces?](https://biodiversidad.co/post/2022/diferencias-entre-publicar-reportar-datos-biodiversidad/){:target="_blank"}


<div class="mx-auto">
  <a href="#modal" class="button is-primary">Encuentra aquí las diferencias y ventajas entre publicaciones</a>
<div>



## Guía para reportar

![](/compartir/Imagenes/guia-para-reportar-datos.png)

<p align="center"><iframe width="100%" height="400" src="https://www.youtube.com/embed/tGzANPQWi7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
<br/>

**Enlaces a las herramientas para reportar los datos y generar el certificado de reporte**:

   [Herramienta IPT](http://ipt.biodiversidad.co/permisos){:target="_blank" .button .is-primary}      [Herramienta CR-SiB](http://biodiversidad.co//certificados/publicacion-permisos/){:target="_blank" .button .is-primary}


## 1. Crear el nuevo recurso

La creación del recurso se hace mediante la herramienta de publicación integrada de datos (IPT, del inglés Integrated Publishing Toolkit), para esto se debe contar con el **conjunto de datos estandarizado y las credenciales de acceso**.


### 1.1 Solicitar credenciales de acceso

Las credenciales de acceso, compuestas por el nombre de usuario y la contraseña, se obtienen **registrando al titular del permiso de recolección como proveedor de datos**. Esto se solicita en la sección de [registro](https://biodiversidad.co/compartir/registro){:target="_blank"} de nuestro sitio web.

Este paso **solo hay que hacerlo la primera vez que se van a reportar datos**. Para verificar si un titular del permiso ya es proveedor, se puede consultar este [enlace](https://docs.google.com/spreadsheets/d/e/2PACX-1vTtemvwzoSXYFG10wJBqhhbpGlaUK2m96qYdri8utfCsFJ3C_-R1eJG9LexkawUvJkziu8mJv_qA900/pubhtml?gid=0&single=true){:target="_blank"}.

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

Antes de cargar, es indispensable que la primera fila del archivo contenga los **encabezados con el nombre de los elementos DwC en inglés y exportar la hoja de cálculo en formato de texto plano delimitado por tabulaciones** con extensión _.txt_; estos son los archivos que se cargarán.

¿Necesitas ayuda para transformar el formato de los archivos? Consulta nuestra sección de [preguntas frecuentes](https://biodiversidad.co/compartir/faq/#otras){:target="_blank"}.

La carga de los dos archivos: plantilla con los datos y extensión de permisos, debe hacerse por separado.

Para cargar cada archivo, desde la franja _Conjunto de datos,_ elegir la opción _Archivo_ del desplegable_,_ seleccionar el archivo a cargar y hacer clic en el botón _Agregar_. Se debe ingresar el valor 1 en el campo _Número de filas del encabezado_. Si el archivo está en formato de Excel (extensión .xlsx), se debe indicar la hoja en la que están documentados los registros biológicos o la extensión y hacer clic en _Guardar_.


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

Nota: Las organizaciones que únicamente reportan datos no se encuentran registradas como publicadoras ante GBIF. Por lo tanto, en su proceso de documentación de metadatos, la plataforma arrojará el siguiente mensaje de alerta que puede omitirse: 

![](/compartir/Imagenes/alerta-IPT.png)

Para aclarar las diferencias entre los modelos de reporte y de publicación, consulta el artículo de nuestro blog _[Reportar y publicar datos sobre biodiversidad tienen alcances diferentes: ¿los conoces?](https://biodiversidad.co/post/2022/diferencias-entre-publicar-reportar-datos-biodiversidad/)_{:target="_blank"}

## 4. Hacer público el conjunto de datos

Este paso permite que el recurso quede disponible en la instancia de la herramienta IPT, mediante una URL persistente, para la generación del certificado. Para esto, es necesario que el conjunto de datos aparezca como _Público_ en la franja _Visibilidad_.

Este ajuste se hace desde la sección _Vista general del recurso_. Es necesario que primero se cambie el estado del recurso a _público_ y luego clic en _publicar_; siempre en este orden._ _ 

La URL del reporte ya publicado se consulta en la sección _Vista general del recurso en la franja_ _Versiones publicadas / última versión. _Esta URL es indispensable en el siguiente paso.

Con este reporte, es posible aumentar el reconocimiento y atribución de la organización, como publicadora de datos del SiB Colombia. Si estás interesado en que esto suceda, escribe a [sib@humboldt.org.co](mailto:sib@humboldt.org.co){:target="_blank"}.


## 5. Generar el certificado

Ingresa a la herramienta CR-SiB con las mismas credenciales de acceso asignadas al IPT. Está disponible en el enlace [http://biodiversidad.co/certificados/publicacion-permisos/](http://biodiversidad.co/certificados/publicacion-permisos/){:target="_blank"}.

Completa la información solicitada en los formularios. Para esto es indispensable contar con la URL o DOI del recurso publicado y toda la información del titular del permiso.

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

---
Última actualización: 2022-05-06



  <!-- Modal -->
      <div id="modal" class="modal">
        <div class="modal-content">
          <a href="#" class="close">×</a>
          <p class="Contenedor">
              Tenga en <strong>cuenta las opciones disponibles al momento de realizar una publicación</strong>. Es fundamental considerar los <strong>beneficios</strong> y <strong>características</strong> de las diferentes
              <strong>plataformas</strong> y <strong>licencias</strong> para asegurar que sus <strong>datos sean accesibles</strong>, reutilizables y tengan el <strong>impacto esperado</strong>.
          </p>
          <table>
              <tbody>
                  <tr>
                      <td class="Encabezado"> <i class="fas fa-people-arrows"></i> <strong>Característica</strong></td>
                      <td class="Encabezado"><i class="fas fa-trophy"> </i>  <strong>Publicación</strong></td>
                      <td class="Encabezado"><i class="far fa-clipboard"></i> <strong>Publicación</strong></td>
                  </tr>
                  <tr>
                      <td><strong>Objetivo principal</strong></td>
                      <td><i class="fas fa-check"></i> Compartir datos de biodiversidad para <str5ong>acceso abierto y reutilización</str5ong>.</td>
                      <td>Cumplir con la regulación ambiental.</td>
                  </tr>
                  <tr>
                      <td><strong>Alcance y visibilidad</strong></td>
                      <td><i class="fas fa-check"></i> <str5ong>Datos accesibles a nivel nacional e internacional</str5ong>  (SiB Colombia, GBIF, OBIS).</td>
                      <td>Datos visibles solo para la autoridad ambiental y terceros interesados.</td>
                  </tr>
                  <tr>
                      <td><strong>Reconocimiento y atribución</strong></td>
                      <td><i class="fas fa-check"></i> Publicadores pueden ser <strong>citados</strong> y <strong>reconocidos</strong> en <strong>investigaciones</strong>.</td>
                      <td>Sin reconocimiento formal, solo cumplimiento normativo.</td>
                  </tr>
                  <tr>
                      <td><strong>Valor agregado</strong></td>
                      <td><i class="fas fa-check"></i> Genera <strong>DOI</strong>, métricas de impacto y <strong>posibilidad</strong> de <strong>publicar artículos científicos</strong>.</td>
                      <td>Solo se obtiene un <strong>certificado de reporte</strong>.</td>
                  </tr>
                  <tr>
                      <td><strong>Flexibilidad y actualización</strong></td>
                      <td><i class="fas fa-check"></i> Los datos pueden <strong>actualizarse</strong> y <strong>mejorarse en el tiempo</strong>.</td>
                      <td>Se presentan una sola vez sin posibilidad de modificación posterior.</td>
                  </tr>
                  <tr>
                      <td><strong>Acceso y reutilización</strong></td>
                      <td><i class="fas fa-check"></i> Datos disponibles para <strong>múltiples audiencias</strong> bajo licencias abiertas.</td>
                      <td>Se presentan una sola vez sin posibilidad de modificación posterior.</td>
                  </tr>
                  <tr>
                      <td><strong>Apoyo técnico y curaduría</strong></td>
                      <td><i class="fas fa-check"></i> Asesoría y herramientas para <strong>garantizar calidad</strong> y <strong>formato de datos</strong>.</td>
                      <td>Proceso automatizado sin curaduría de datos.</td>
                  </tr>
                  <tr>
                      <td><strong>Tipos de datos permitidos</strong></td>
                      <td><i class="fas fa-check"></i> <strong>Registros biológicos, eventos de muestreo y listas de chequeo</strong>.</td>
                      <td>Solo registros biológicos.</td>
                  </tr>
                  <tr>
                      <td><strong>Repositorio y plataformas</strong></td>
                      <td><i class="fas fa-check"></i> Publicación en <strong>SiB Colombia</strong>, <strong>GBIF</strong>, <strong>OBIS</strong> y <strong>repositorio IPT</strong>.</td>
                      <td>Solo en el repositorio <strong>IPT</strong>.</td>
                  </tr>
              </tbody>
          </table>
      </div>
      </div>

      <style>
          .mx-auto {
              display: inline-flex;
              justify-content: center;
              width: 100%;
          }
          td.Encabezado strong {
              color: white;
          }
          .Encabezado {
              background-color: #9fc56d;
              color: white;
          }
          table td:nth-child(1) {
              border-right: 1px solid#dddddd;
          }

          table td:nth-child(2) {
              border-right: 1px solid #dddddd;
          }
          p.Contenedor {
              border: 1px solid #dddddd;
              border-radius: 9px;
              padding: 16px;
          }

          .btn:hover {
              background-color: #0056b3;
          }

          /* Estilos del Modal */
          .modal {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              display: none; /* Oculto por defecto */
          }

          /* Mostrar modal cuando es objetivo (clic en el enlace) */
          .modal:target {
              display: flex;
              align-items: center;
              justify-content: center;
          }

          /* Contenido del Modal */
          .modal-content {
              background-color: #fff;
              padding: 36px;
              border-radius: 5px;
              width: 80%;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
              border-radius: 22px;
          }
          .modal-content tr {
              border-bottom: 1px solid #ddd;
          }

          /* Botón para cerrar */
          .close {
              background-color: #e8ebeb;
              color: #aaa;
              font-size: 28px;
              font-weight: bold;
              text-decoration: none;
              position: absolute;
              right: 9px;
              top: 8px;
              display: inline-flex;
              border-radius: 50%;
              height: 39px;
              width: 39px;
              align-items: center;
              justify-content: center;
          }

          .close:hover {
              color: #ffffff;
              background-color: #9fc56d;
          }
      </style>
  </div>
</div>
