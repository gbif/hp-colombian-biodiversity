---
layout: documentation
permalink: /formacion/laboratorios/administracion-certificados-cr-sib
title: "Administración de certificados"
description: "Objetivo: Administrar los certificados de reporte en la plataforma CR-SiB incluyendo la generación, anulación y revisión de los certificados expedidos por una organización."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Administración de certificados

**Objetivo**

Administrar los certificados de reporte en la plataforma CR-SiB, incluyendo la generación, anulación y revisión de los certificados expedidos por una organización.

**Introducción**

El último paso del [proceso de reporte](https://biodiversidad.co/compartir/guia-para-reportar/){:target="_blank"} es la generación del certificado en la herramienta CR-SiB, como constancia de cumplimiento de un permiso de recolección o contrato de acceso a recursos genéticos ante la autoridad ambiental. Esta guía aborda el paso a paso de la generación del certificado y los procesos posteriores de administración que se pueden realizar en CR-SiB, tales como la anulación y revisión de los certificados.

Con este fin, se propone un ejemplo de generación de certificado para una empresa ficticia, utilizando unas credenciales de prueba que son válidas únicamente para efectos pedagógicos.

**Sobre la herramienta**

La [herramienta de gestión de certificados CR-SiB](https://biodiversidad.co/certificados/publicacion-permisos/){:target="_blank"}, es una plataforma de autogestión para administrar certificados del reporte  de los datos asociados a permisos de recolección o acceso a recursos genéticos. Se usa para dar cumplimiento a las obligaciones establecidas en el Decreto 1076 de 2015.

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Enlaces**

- Herramienta de gestión de certificados CR-SiB: [https://biodiversidad.co/certificados/publicacion-permisos/](https://biodiversidad.co/certificados/publicacion-permisos/){:target="_blank"}
- Recurso ficticio creado con fines pedagógicos: [https://ipt.biodiversidad.co/permisos/resource?r=abc_monitoreo-albania](https://ipt.biodiversidad.co/permisos/resource?r=abc_monitoreo-albania){:target="_blank"}
- Video: [Soy un publicador, cómo obtener el certificado de reporte](https://youtu.be/pRwzLTd279I){:target="_blank"}

**Requisitos** 

Para el desarrollo de esta guía, se ha creado un recurso ficticio en la herramienta de publicación de Permisos (IPT - Permisos de recolección) con base en los resultados esperados de las guías: 

- [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt). 
- [Cómo mapear los datos al IPT](https://biodiversidad.co/formacion/laboratorios/mapeo-datos-ipt). 
- [Datos en contexto para reporte](https://biodiversidad.co/formacion/laboratorios/datos-en-contexto-reporte). 

Se recomienda abordar las demás guías antes de iniciar con esta. 

## Paso 1 - Ingreso a la herramienta CR-SiB

Ingresar a la [herramienta de gestión de certificados CR-SiB](https://biodiversidad.co/certificados/publicacion-permisos/){:target="_blank"} con estas credenciales, las cuales solo son válidas para este ejercicio:

- **Usuario**: <span class="tag is-light"><b>abc-sas-formacion@correo.com</b></span>
- **Contraseña**: <span class="tag is-light"><b>X2Y0OMRWiy</b></span>

Hacer clic en <span class="tag is-warning is-light"><i>Iniciar sesión</i></span> (Fig. 1).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig1_C5Certificado_Ingresar.png" width=450>

<sup>_Figura 1. Inicio de sesión en la herramienta CR-SiB con las credenciales proporcionadas en la guía._</sup>

<div class="notification is-info is-light">
  <b>Nota:</b> Si se requiere obtener el certificado para una organización, es necesario comunicarse con la persona encargada del proceso de reporte al interior de dicha organización, ya que es quien realizó el trámite de registro en el SiB Colombia. Esta persona también es la encargada de recibir las credenciales para la carga de datos en el IPT de Permisos, las cuales generalmente son las mismas credenciales con las que se accede a la herramienta CR-SiB.
</div>

Al ingresar, aparecerá el panel general de administración de certificados. Allí hay varias opciones: <span class="tag is-warning is-light"><i>Generar certificado</i></span>, <span class="tag is-warning is-light"><i>Consultar certificados</i></span> y <span class="tag is-warning is-light"><i>Salir</i></span>, así como una tabla con la lista de certificados generados por la organización (Fig. 2).

![Figura 2. Vista general de la herramienta CR-SiB al ingresar con las credenciales asignadas, se observan las funciones generales y la lista de certificados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig2_C5Certificado_Lista.png)
<sup>_Figura 2. Vista general de la herramienta CR-SiB al ingresar con las credenciales asignadas, se observan las funciones generales y la lista de certificados._</sup>

## Paso 2 - Generar un certificado

Dar clic en el botón <span class="tag is-warning is-light"><i>Generar certificado</i></span> de la parte superior derecha (Fig. 3). Esto abrirá una nueva ventana con el paso 1 de la generación del certificado.

![Figura 3. Clic en la opción de Generar certificado en el menú de la herramienta CR-SiB.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig3_C5Certificado_Generar.png)
<sup>_Figura 3. Clic en la opción de Generar certificado en el menú de la herramienta CR-SiB._</sup>

### 2.1 - Validación de la URL o DOI del conjunto de datos

Ingresar la URL del conjunto de datos a partir del que se quiere generar el certificado. Para este ejercicio práctico, se debe usar la siguiente URL, proveniente de un recurso de permisos reportado en el IPT con fines pedagógicos: [https://ipt.biodiversidad.co/permisos/resource?r=abc_monitoreo-albania](https://ipt.biodiversidad.co/permisos/resource?r=abc_monitoreo-albania){:target="_blank"}

Posteriormente, pegar el enlace en el cuadro **"URL o DOI de la publicación"** y hacer clic en <span class="tag is-warning is-light"><i>Validar publicación</i></span> (Fig. 4).

![Figura 4. Ingreso de la URL pública en la herramienta CR-SiB para validar si el recurso está disponible y es válido para la generación de un certificado.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig4_C5Certificado_Validar.png)
<sup>_Figura 4. Ingreso de la URL pública en la herramienta CR-SiB para validar si el recurso está disponible y es válido para la generación de un certificado._</sup>

En este primer paso, se realizan las siguientes validaciones:

1. Que el recurso corresponda al core de registros biológicos o eventos de muestreo. El core de listas no es admitido para fines de generación de certificados de reporte.
2. Que la URL o DOI del recurso se haya ingresado de forma correcta.
3. Que el recurso tenga una visibilidad pública. Si el recurso es privado, no se podrá generar el certificado. 

<div class="notification is-info is-light">
  <b>Nota:</b> Si ya eres publicador de datos a través del SiB Colombia y quieres saber cómo generar el certificado, te invitamos a ver el video <a href="https://youtu.be/pRwzLTd279I" target="_blank">Soy un publicador, cómo obtener el certificado de reporte</a>.
Para los recursos de permisos reportados a través del IPT, como el ejemplo de este ejercicio, solo es posible realizar las validaciones a través de la URL.
</div>

### 2.2 - Verificación de la información del certificado

Verificar que la información del conjunto de datos sea consistente. Para ello, se debe revisar el título del conjunto de datos, la fecha en la que se hizo público, la versión del conjunto de datos, el número de registros y la URL del recurso (Fig. 5). Es posible hacer clic en el botón <span class="tag is-warning is-light"><i>Ver la publicación</i></span> para ir al conjunto de datos. Adicionalmente, es necesario corroborar que la información del titular del permiso y la identificación del titular correspondan. En este caso, es una organización de prueba (Ambiental Buenaventura Consultores S.A.S) con un NIT ficticio (NIT 890.123.456-1) (Fig. 5).

![Figura 5. Paso 2 de la herramienta CR-SiB. Verificación de la información de la publicación para generar el certificado e información del titular del permiso.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig5_C5Certificado_Paso2.png)
<sup>_Figura 5. Paso 2 de la herramienta CR-SiB. Verificación de la información de la publicación para generar el certificado e información del titular del permiso._</sup>

La información del titular del permiso se obtiene de forma automática a partir de la información del usuario creado en la herramienta CR-SiB, la cual se solicita en la sección de [**"registro"**](https://biodiversidad.co/compartir/registro/){:target="_blank"} del sitio web [**biodiversidad.co**](https://biodiversidad.co/){:target="_blank"}. Para más información, ver la [**Guía para reportar datos**](https://biodiversidad.co/compartir/guia-para-reportar/){:target="_blank"}.

### 2.3 - Documentación de la información del permiso de recolección y del solicitante

En el tercer paso se documenta la información del permiso de recolección con el que se tomaron los datos, la información de la persona que solicita el certificado y las observaciones.

Por consiguiente, es necesario documentar la siguiente información en la sección de permiso de recolección:

- **Autoridad ambiental que emite el permiso**: hacer clic en la lista desplegable de autoridades ambientales y seleccionar la autoridad ambiental que emitió el permiso. Esta información está disponible en el elemento <span class="tag is-success is-light"><i>permitText</i></span> de la extensión de permisos. En este caso, corresponde a <span class="tag is-warning is-light"><i>CARDER - Corporación Autónoma Regional de Risaralda</i></span> (Fig. 6).
- **Tipo de documento mediante el cual se expide**: dar clic en la lista desplegable de tipos de permisos y seleccionar el permiso adecuado. Para este ejercicio, elegir <span class="tag is-warning is-light"><i>Permiso individual de recolección</i></span> (Fig. 6).
- **Número de permiso**: corresponde al número del permiso con el que  se recolectaron los datos. Esta información está disponible en el elemento <span class="tag is-success is-light"><i>permitText</i></span> en la extensión de permisos. En este caso, corresponde a <span class="tag is-light"><b>120-RES1181-3698</b></span> (Fig. 6).
- **Fecha de emisión del permiso**: hacer clic en el botón del calendario y seleccionar la fecha en la que se emitió el permiso. Para este ejemplo, seleccionar como fecha el <span class="tag is-warning is-light"><i>10 de febrero del 2020</i></span> (Fig. 6).

![Figura 6. Detalle de la documentación de la información del permiso de recolección para el caso de ejemplo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig6_C5Certificado_Paso3.png)
<sup>_Figura 6. Detalle de la documentación de la información del permiso de recolección para el caso de ejemplo._</sup>

En la sección “**Información del solicitante**”, se ingresan los datos de la persona que solicita el certificado al interior de la organización para poder llevar un seguimiento de los certificados creados. En este sentido, debes documentar tus datos para este ejercicio (Fig. 7).

En la sección “**Observaciones**”, ingresar información adicional o comentarios asociados a los datos reportados que faciliten la revisión del certificado por parte de la autoridad ambiental. Adicionalmente, se recomienda poner en la zona de comentarios el título exacto del proyecto para el que se solicitó el permiso y demás aclaraciones sobre el alcance de los datos en el marco del permiso; por ejemplo: <span class="tag is-light"><b>Certificado generado para el proyecto [Nombre del proyecto]</b></span>. Por otro lado, en cuanto a las colecciones biológicas, se recomienda escribir "Este conjunto de datos comprende la información histórica reportada para la [Nombre de la colección] junto con [Número de registros] nuevos registros biológicos incorporados en el periodo [Periodo y año (ej: Primer trimestre del 2022)] y asociadas al  proyecto [Nombre del proyecto]".

Para este ejercicio, se debe documentar la siguiente observación: "Certificado generado para el proyecto “Evaluación de la fauna y flora presente en el Parque Municipal Natural Campo Alegre - Finca Albania, como parte de la socialización de resultados con los habitantes de la zona" (Fig. 7).

![Figura 7. Documentación de la información del solicitante y observaciones.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig7_C5Certificado_Solicitante.png)
<sup>_Figura 7. Documentación de la información del solicitante y observaciones._</sup>

### 2.4 - Generación del certificado

Antes de generar el certificado, se recomienda revisar la información documentada por última vez, ya que no se podrán hacer modificaciones cuando se genere el certificado. En este sentido, si se identifica un error, se tendrá que anular el certificado para crear uno nuevo. Al dar clic en el botón <span class="tag is-warning is-light"><i>Generar certificado</i></span>, se abrirá una ventana de confirmación. Si no se encontraron errores en la revisión, hacer clic en el botón <span class="tag is-warning is-light"><i>Continuar</i></span> para generar el certificado (Fig. 8).

![Figura 8. Generación del certificado dando clic en la opción Generar certificado. Confirmación de la expedición del certificado aclarando que luego de dar clic en Continuar ya no podrán hacerse más modificaciones.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig8_C5Certificado_Generar.png)
<sup>_Figura 8. Generación del certificado dando clic en la opción <span class="tag is-warning is-light"><i>Generar certificado</i></span>. Confirmación de la expedición del certificado, aclarando que luego de dar clic en <span class="tag is-warning is-light"><i>Continuar</i></span> ya no podrán hacerse más modificaciones._</sup>

Posteriormente, se abrirá una nueva pestaña informando que el certificado fue generado de forma exitosa, la cual arrojará también la información básica del certificado (Fig. 9). 

![Figura 9. Vista del certificado generado exitosamente a través de CR-SiB, la cuál contiene información general del certificado con su respectivo identificador persistente.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig9_C5Certificado_Certificado.png)
<sup>_Figura 9. Vista del certificado generado exitosamente a través de CR-SiB, la cuál contiene información general del certificado con su respectivo identificador persistente._</sup>

Es posible consultar el certificado completo en la parte inferior de la página, el cual incluye la información documentada en los pasos anteriores. Para descargar el certificado en formato PDF, hacer clic en el botón <span class="tag is-warning is-light"><i>Descargar certificado</i></span> de la parte inferior (Fig. 10). Para posteriores ejercicios, se recomienda copiar y guardar el ID del certificado. 

![Figura 10. Vista general del certificado generado junto con la opción de descarga del certificado en formato PDF.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig10_C5Certificado_Descarga.png)
<sup>_Figura 10. Vista general del certificado generado junto con la opción de descarga del certificado en formato PDF._</sup>

## Paso 3 - Consultar los certificados generados 

Para revisar los certificados que han sido generados por cada titular, hacer clic en la opción <span class="tag is-warning is-light"><i>Consultar certificados</i></span> de la parte superior derecha. En esta lista se pueden ver los certificados que han sido generados por el titular, organizados en una tabla con las siguientes columnas (Fig. 11): 

- **Conjunto de datos**: Nombre del conjunto de datos a partir del que se generó el certificado. Es posible hacer clic sobre el nombre para ir al conjunto de datos original.
- **ID del certificado**: ID único del certificado, se utiliza para realizar búsquedas o para compartirlo con la autoridad.
- **Número de permiso**: Número del permiso de colecta.
- **Autoridad Ambiental**: Nombre de la autoridad ambiental que emitió el permiso de colecta.
- **Estado**: Estado del certificado, puede ser “Vigente” o “Anulado”.
- **Acciones**: Lista de las acciones que se pueden ejecutar, <span class="tag is-warning is-light"><i>Ver certificado</i></span>, <span class="tag is-warning is-light"><i>Descargar</i></span> y <span class="tag is-warning is-light"><i>Anular certificado</i></span>. 

![Figura 11. Lista de los certificados generados por el titular con la información básica y acciones específicas para cada uno.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig11_C5Certificado_Lista.png)
<sup>_Figura 11. Lista de los certificados generados por el titular con la información básica y acciones específicas para cada uno._</sup>

Sin embargo, cuando se han generado muchos certificados, es posible que sean difíciles de encontrar, incluso usando las opciones de paginación (<span class="tag is-warning is-light"><i>Certificados por página</i></span>). Por tal motivo, la herramienta incluye un filtro para encontrar un certificado específico.

Para utilizar el filtro, hacer clic en el botón <span class="tag is-warning is-light"><i>Buscar</i></span> (Fig. 12).

![Figura 12. Botón para buscar certificados generados dentro de la vista de Listado de certificados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig12_C5Certificado_Buscar.png)
<sup>_Figura 12. Botón para buscar certificados generados dentro de la vista de **"Listado de certificados"**._</sup>

Se abrirá una pestaña que ofrece dos criterios de búsqueda:

- **"ID del certificado"**: utilizar el ID completo del certificado (Fig. 13).
- **"Nombre de conjunto de datos"**: poner el nombre del conjunto de datos o unas palabras clave que estén presentes en el título (Fig. 13).

Para realizar la búsqueda, ingresar el ID del certificado que se generó y guardó en el paso anterior. Luego, dar clic en el botón <span class="tag is-warning is-light"><i>Buscar</i></span> para ver el conjunto de datos que cumple el criterio de búsqueda (Fig. 13).

![Figura 13. Opciones de búsqueda de certificados usando la opción ID del certificado.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig13_C5Certificado_BuscaCodigo.png)
<sup>_Figura 13. Opciones de búsqueda de certificados usando la opción **"ID del certificado"**._</sup>

## Paso 4 - Acciones disponibles para los certificados

Para cada uno de los certificados publicados por la entidad hay tres acciones: <span class="tag is-warning is-light"><i>Ver certificado</i></span>, <span class="tag is-warning is-light"><i>Descargar</i></span> y <span class="tag is-warning is-light"><i>Anular certificado</i></span>. En este ejercicio, se probarán las tres opciones con el certificado generado previamente.

### 4.1 - Ver certificado

Hacer clic en el ícono <span class="tag is-warning is-light"><i>Ver certificado</i></span>, ubicado en la columna **"Acciones"** (Fig. 14). Se abrirá una nueva pestaña en el navegador, donde se podrá visualizar el certificado de la misma que se mostró al momento de generarlo.

![Figura 14. Acciones del certificado. Botón para ver el certificado.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig14_C5Certificado_Ver.png)
<sup>_Figura 14. Acciones del certificado. Opción para ver el certificado._</sup>

### 4.2 - Descargar certificado

Hacer clic en el ícono <span class="tag is-warning is-light"><i>Descargar</i></span>, ubicado en la columna Acciones (Fig. 15). Se abrirá una nueva ventana, donde se podrá seleccionar el nombre y la ubicación para guardar el certificado en formato PDF.

Seleccionar la ubicación y dar clic en <span class="tag is-warning is-light"><i>Descargar</i></span>.

![Figura 15. Acciones del certificado. Botón para descargar el certificado.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig15_C5Certificado_Descargar.png)
<sup>_Figura 15. Acciones del certificado. Opción para descargar el certificado._</sup>

### 4.3 - Anular certificado

Finalmente, es posible realizar el proceso de anulación de un certificado. Este proceso se realiza al cometer algún error en la generación del certificado o cuando se hace la solicitud de ajuste desde alguna autoridad ambiental. La anulación es definitiva, pero el certificado seguirá disponible para ser consultado y descargado con una marca de anulación, que incluye los motivos correspondientes.

Para realizar el proceso de anulación, dar clic en el ícono <span class="tag is-warning is-light"><i>Anular certificado</i></span>, ubicado en la sección **"Acciones"** (Fig. 16). Es necesario asegurarse de que el certificado a anular corresponda al certificado que se creó en el paso 2 para **evitar anular el certificado generado por otro participante**.

![Figura 16. Acciones del certificado. Botón para anular el certificado.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig16_C5Certificado_Anular.png)
<sup>_Figura 16. Acciones del certificado. Opción para anular el certificado._</sup>

Después se abrirá una nueva ventana donde se debe diligenciar la información de la persona que está haciendo la anulación y el motivo correspondiente. Para este ejercicio, documenta tus nombres, correo y el resto del formulario como se muestra en la Figura 17. Por último, dar clic en el botón <span class="tag is-warning is-light"><i>Anular certificado</i></span>:

![Figura 17. Acciones del certificado. Formulario de anulación de certificado.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig17_C5Certificado_Anulacion.png)
<sup>_Figura 17. Acciones del certificado. Formulario de anulación de certificado._</sup>

Luego de terminar el proceso de anulación, el estado del certificado cambiará a **Anulado** en el listado de certificados. Se recomienda intentar descargar el certificado para verificar que aparezca un banner como prueba de que el certificado fue anulado, los motivos y la fecha de anulación (Fig. 18).

![Figura 18. Vista de un certificado anulado. En el recuadro rojo se detalla la información de la anulación, como el responsable de la anulación, motivo y fecha.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_administracion-certificados/Fig18_C5Certificado_Certificado.png)
<sup>_Figura 18. Vista de un certificado anulado. En el recuadro rojo se detalla la información de la anulación, como el responsable de la anulación, motivo y fecha._</sup>

****
**¡Felicitaciones!**

¡Felicitaciones! La prueba de administración de certificados ha sido completada satisfactoriamente.

****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
