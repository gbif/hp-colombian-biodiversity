---
layout: documentation
permalink: /formacion/laboratorios/IPT_Metadatos
title: "Documentación de Metadatos"
description: "Objetivo: Aprender a documentar los metadatos en la herramienta de publicación IPT."
sideNavigation: sidenav_laboratorios.terms
toc: true
---


# Documentación de Metadatos

**Objetivo**

Aprender a documentar los metadatos en la herramienta de publicación IPT.

**Introducción**

Si es la primera vez que va a documentar metadatos utilizando la herramienta de publicación IPT, le recomendamos ver detenidamente el siguiente video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sFcbZC9A4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>

**Sobre la herramienta**

El [IPT](https://www.gbif.org/es/ipt){:target="_blank"} (del inglés Integrated Publishing Toolkit) es un _software_ gratuito y de código abierto que se utiliza para publicar y compartir conjuntos de datos de biodiversidad a través del [SiB Colombia](https://biodiversidad.co){:target="_blank"}, [GBIF](https://www.gbif.org/){:target="_blank"} y [OBIS](https://obis.org/){:target="_blank"}. Este _software_ permite integrar datos y metadatos en un mismo formato de archivo, conocido como _Darwin Core Archive_ (DwC-A). Una de las ventajas de esta herramienta, frente a otros mecanismos de publicación, es que provee una interfaz para documentar fácilmente los metadatos. Además, contempla la documentación de los autores del recurso, promoviendo así el adecuado reconocimiento a quienes publican datos sobre biodiversidad.

La instancia de publicación principal es el [IPT SiB](https://ipt.biodiversidad.co/sib/){:target="_blank"}. Adicionalmente, los institutos del SINA administran su propio IPT.

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Enlace**
<br>
IPT Test: [https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/){:target="_blank"}

**Requerimientos** 

Credenciales de ingreso al [IPT _test_](https://ipt.biodiversidad.co/sib-test/){:target="_blank"}:
- Usuario: <span class="tag is-light"><b>Laboratorios_SiB@gmail.com</b></span>.
- Contraseña: <span class="tag is-light"><b>FxKVSjOg</b></span>.


**Archivo de trabajo**

Esta guía provee un caso de ejemplo para realizar el ejercicio. Sin embargo, se recomienda realizar el laboratorio con base en un informe o artículo de sus propios datos.

- Descargue el caso de ejemplo [<FONT FACE="monospace"><b>«Informe Expedición Parulidae 2001.pdf»</b></FONT>](https://drive.google.com/file/d/10ygXD9rD4_mmQhTrLn3VnM0OXUnNJt4h/view?usp=sharing){:target="_blank"} 

<br>
--------

## Paso 1 - Ingreso al IPT

Ingrese al  [IPT _test_](https://ipt.biodiversidad.co/sib-test/){:target="_blank"} y de clic en la opción <span class="tag is-warning is-light"><i>Iniciar Sesión</i></span> (Fig. 1).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/refs/heads/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_MetadatosIPT/Fig1_meta_ingreso.jpg" width=800>

<sub>_Figura 1. Página principal del IPT_.</sub>

En la nueva vista, ingrese las credenciales que se encuentran en la sección de requerimientos y de clic en la opción <span class="tag is-warning is-light"><i>Iniciar Sesión</i></span> (Fig. 2).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/refs/heads/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_MetadatosIPT/Fig2_meta_ingreso.jpg" width=400>

[Se redujo de 800 a 600 y luego 400]: #

<sub>_Figura 2. Página de inicio de sesión_.</sub>

<br>

## Paso 2 - Gestión de recursos

Una vez que se haya autenticado en el IPT, podrá ver su información de usuario (Fig. 3A) y tendrá acceso a tres menús o pestañas (Fig. 3B):

- <span class="tag is-warning is-light"><i>Inicio</i></span>: menú disponible para todos los usuarios, el cual lista los recursos disponibles y públicos del IPT.
- <span class="tag is-warning is-light"><i>Gestión de recursos</i></span>: menú disponible solo para los usuarios registrados que han iniciado sesión.
- <span class="tag is-warning is-light"><i>Acerca de</i></span>: menú para todos los usuarios, el cual presenta información general del IPT.

>El menú activo se mostrará con una línea azul en la parte inferior (Fig. 3B).
>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig2_meta_ingreso2.png" width=800>

<sub>_Figura 3. Página principal del IPT disponible para los usuarios que han iniciado sesión. A. Acrónimo del usuario activo, B. Menús disponiles_.</sub>

### 2.1. Explore el menú Gestión de recursos

[Estaba en negrilla sencilla]: #

Selecione el menú <span class="tag is-warning is-light"><i>Gestión de recursos</i></span> (Fig. 4). Aparecerá una tabla de resumen con todos los recursos que puede administrar con su usuario (Fig. 4A), la cual se puede filtrar por texto (Fig. 4B) y reorganizar de forma ascendente o desendente según los contenidos de cada columna (Fig. 4C). Para ingresar a los recursos bajo su administración, haga clic sobre el nombre del recurso en la tabla (Fig. 4). Por último, explore las opciones de la tabla mencionadas anteriormente.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig3_meta_gestion.png" width=800>

<sub>_Figura 4. Menú de Gestión de recursos. A. Tabla de recursos adminsitrados, B. Filtro para búsqueda por texto de los recursos, C. Filtro de columna para reorganizar la tabla_.</sub>

<br>

## Paso 3 - Creación de un recurso

Adicionalmente, en esta sección puedes crear un nuevo recurso. Para eso, en la parte superior dé clic a <span class="tag is-warning is-light"><i>Crear nuevo</i></span> (Fig. 5) y siga estos pasos:

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig3_meta_gestion.png" width=800>

<sub>_Figura 5. Menú para crear el nuevo recurso_.</sub>

### 3.1. Asignación de nombre corto

En **"Nombre corto"** (Fig. 6A) asigna un nombre relacionado al recurso que se va a crear. No use más de 5 palabras, y no incluya espacios ni carácteres especiales como tildes (´) o eñes (ñ). Para este ejercicio, cree el <span class="tag is-light"><b>Nombre corto</b></span> con sus iniciales y el acrónimo de su organización. De esa forma, podrá encontrarlo fácilmente.

### 3.2. Selección del tipo de recurso

En la lista desplegable de la sección **"Tipo"**, seleccione la opción que corresponda a los datos que se van publicar (Fig. 6B). En este caso, <span class="tag is-warning is-light"><i>Registros biológicos</i></span>. La elección del tipo de datos durante la creación del recurso no es definitiva, ya que puede cambiar este ítem a lo largo de la publicación.

### 3.3. Opción para importar un archivo *DwC-A*

Si posee un _Darwin Core Archive_ (DwC-A), puede seleccionar la casilla <span class="tag is-warning is-light"><i>Importar desde archivo</i></span>, y se le habilitará una opción para buscar el archivo en formato DwC-A. Esta opción **no** permite archivos Excel ni de texto plano. Por consiguiente, dicha opción no se debe usar en este ejercicio (Fig. 6C).

### 3.4. Creación del recurso

Finalmente, dé clic en la opción <span class="tag is-warning is-light"><i>Crear</i></span> (Fig. 6D). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig4_meta_crear.png" width=600>

<sub>_Figura 6. Sección de creación del recurso. A. Nombre corto, B. Selección del tipo de datos, C. Carga de un DwC-A (opcional), D. Botón para crear el recurso_.</sub>

Después de crear el recurso, el IPT lo dirigirá a la **"Vista General"**, donde encontrará 9 franjas para la administración del recurso (Fig. 7). Para este laboratorio, solo debe utilizar la franja **"Metadatos"**, ya que el Equipo Coordinador del SiB Colombia (EC-SiB) se encarga de configurar y administrar las demás franjas durante el proceso de publicación.

Puedes conocer más sobre las franjas de la **"Vista General"** del recurso en el [Manual del Usuario del IPT - Vista general](https://ipt.gbif.org/manual/es/ipt/latest/overview){:target="_blank"}.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig5_meta_vistageneral.png" width=800>

<sub>_Figura 7. Franjas de la vista general del recurso_.</sub>

<br>

## Paso 4 - Documentación de los metadatos

Desde la **"Vista General"** del recurso, ubique la franja **"Metadatos"** y haga clic en <span class="tag is-warning is-light"><i>Editar</i></span> (Fig. 7). Será dirigido al formulario de metadatos, que consta de 14 secciones (Fig. 8). A partir del informe del caso de ejemplo o de un informe o artículo propio, revise y documente cada una de las 14 secciones de metadatos.

> Al documentar los metadatos, enfóquese en el conjunto de datos que va a publicar y no en el proyecto bajo el que fueron tomados.
Por ejemplo, si usted realizó un estudio filogenético y desea publicar los datos de las muestras de tejido que tomó en campo, describa solo las muestras y observaciones asociadas, no el estudio filogenético.
>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig6_meta_secciones.png" width=600>

<sub>_Figura 8. Secciones de los metadatos_.</sub>

Esta guía comprende una serie de recomendaciones basadas en las preguntas y errores más frecuentes sobre los metadatos. Por lo tanto, solo encontrará explicaciones para algunos campos. Para complementar este laboratorio y tener acceso a un seguimiento paso a paso, se recomienda revisar el [Manual del Usuario del IPT - Guía práctica del perfil de metadatos de GBIF.](https://ipt.gbif.org/manual/es/ipt/latest/gbif-metadata-profile){:target="_blank"}


### 4.1. Metadatos básicos

**"Título"**

Asigne un **título relevante que describa los datos a publicar** (Fig. 9A).

**"Organización publicadora"**

Seleccione la organización principal que respalda la publicación de los datos (Fig. 9B). Para efectos de este ejercicio, elija la opción <span class="tag is-warning is-light"><i>Ninguna organización</i></span>. 

<div class="notification is-info is-light">
  <b>Nota:</b> en esta guía se utiliza el IPT <em>test</em>, por lo que no aparecerán las organizaciones registradas. Puede revisar si su organización ya es un socio publicador en esta <a href="https://biodiversidad.co/comunidad/socios-publicadores/">lista</a>; si no lo es, lo invitamos a registrarla <a href="https://sibcolombia.net/registrate-como-publicador/">aquí</a>.
</div>

**"Licencia de los datos"**

Para asegurar que sus datos sean abiertos, estos deben contar de manera explícita con una licencia que permita su reutilización. En este sentido, escoja una de las licencias [_Creative Commons_](https://co.creativecommons.net/tipos-de-licencias/){:target="_blank"} que regule hasta dónde quiere que lleguen sus datos (Fig. 9C). Puede referirse a la [guía de acceso abierto](https://biodiversidad.co/recursos/acceso-abierto){:target="_blank"} para realizar la elección.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig7_meta_basico.png" width=800>

<sub>_Figura 9. Sección metadatos básicos. A. Título, B. Selección de la organización publicadora, C. Selección de la licencia de los datos_.</sub>

**"Descripción"**

Describa brevemente los datos que se van a publicar. Este campo es equivalente a un resumen tipo informe o artículo científico. Por consiguiente, debe incorporar de manera sintética la información de las demás secciones de los metadatos, incluyendo el objetivo del proyecto o estudio, la cobertura temporal, geográfica y taxonómica (Fig. 10).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig7_meta_basico.png" width=800>

<sub>_Figura 10. Vista del campo **"Descripción"** dentro de la sección metadatos básicos_.</sub>

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Metadatos básicos](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#metadatos-b%C3%A1sicos){:target="_blank"}.

> Después de llenar todos los campos obligatorios de una sección (marcados con *) asegúrate de dar clic al botón <span class="tag is-warning is-light"><i>Guardar</i></span>. De esta forma garantizas que no se pierda la información diligenciada en la sección.
>

### 4.2. Contactos

**"Contactos del Recurso"**

En esta sección debes diligenciar la información de todas las personas que pueden responder dudas técnicas asociadas al recurso. Para esto, dé clic en <span class="tag is-warning is-light"><i>Añadir contacto del recurso</i></span> (Fig. 11), y se desplegará los campos que se pueden documentar. Como mínimo, son necesarios los campos <span class="tag is-light"><b>Nombre</b></span>, <span class="tag is-light"><b>Apellido</b></span>, <span class="tag is-light"><b>Organización</b></span> y <span class="tag is-light"><b>Correo Electrónico</b></span>.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig7_meta_basico.png" width=800>

<sub>_Figura 11. Vista general de la sección Contactos_.</sub>

**"Creadores del Recurso"**

En esta sección debe incluir a todas las personas que aportaron significativamente a la toma, manejo, digitalización, custodia y publicación de los datos (Fig. 11B). A partir de esta información, se crea la citación automática del recurso que quedará visible a través de todos los portales de datos del SiB Colombia, GBIF y OBIS. Por lo tanto, es equivalente a la lista de autores de un libro o artículo científico. Además, puede añadir a tantas personas como sea necesario. Se recomienda documentar la mayor cantidad de información posible de cada autor.

<div class="notification is-info is-light">
  <b>Tip:</b> Desde el EC-SiB recomendamos que los creadores del recurso sean personas, no entidades, ya que el EC-SiB se encarga de recopilar las autorías a nivel institucional por medio del campo <b>"Organización"</b>.
</div>

**"Proveedores de los metadatos"**

En esta sección se documentan las personas que aportaron con la documentación de los metadatos (Fig. 12). Tenga en cuenta que quienes aparezcan en esta sección también quedarán visibles en la citación.

**"Partes asociadas"**

Por defecto aparece la información de la cuenta que creó el conjunto de datos. En caso de que no sea relevante, puedes borrarlo desde <span class="tag is-warning is-light"><i>Eliminar parte asociada</i></span>. Para este ejercicio, y según el caso de ejemplo, la documentación de la sección **"Partes Asociadas"** no aplica. Sin embargo, lea las siguientes recomendaciones para futuras publicaciones:

En esta sección, se documenta la información de las personas u organizaciones adicionales que se incluyeron en los metadatos básicos. También se pueden documentar por completo nuevamente si se quiere especificar su rol dentro de la publicación.

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
    Es indispensable que el elemento <b><i>"Rol"</i></b> esté documentado para todas las partes asocidas que se incluyan en esta sección.
  </div>
</article>

Se recomienda que las partes (personas e instituciones) involucradas en la generación de los datos sean reconocidas en los metadatos, idealmente como **"Creadores del recurso"** (si se consideran autores del recurso), y en **"Partes asociadas"** (si estuvieron involucradas en la generación del recurso y cumplen alguno de los roles del campo **"Rol"**).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig9_meta_autor.png" width=600>

<sub>_Figura 12. Vista de las partes **"Proveedores de los metadatos"** y **"Partes asociadas"** dentro de la sección Contactos_.</sub>

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Contactos](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#contactos){:target="_blank"}.

### 4.3. Agradecimientos

Esta es una sección opcional. En caso de ser necesario, aquí puedes documentar la información de financiadores y otros contribuyentes del estudio.

### 4.4. Cobertura geográfica

En el mapa de esta sección, desactive el recuadro <span class="tag is-warning is-light"><i>Establecer cobertura global</i></span> para seleccionar el punto más cercano a la ubicación de los datos en el mapa. Use la cobertura global solo si sus datos cubren un amplio rango de países. Para seleccionar el área específica donde se tomaron los datos, puedes ajustar los marcadores en el recuadro del mapa para que cubra de forma **aproximada** la región deseada (Fig. 13A), o puedes documentar la latitud y longitud mínima y máxima en los recuadros correspondientes (Fig. 13B). El recuadro <span class="tag is-warning is-light"><i>Inferir automáticamente a partir de la fuente de datos</i></span> (Fig. 13C) sólo funciona si se ha cargado y mapeado el conjunto de datos.

Ingrese la **"Descripción"** de la cobertura geográfica, de acuerdo al área de estudio del caso de ejemplo. Recuerde documentar solo lo que hace referencia a la ubicación geográfica de los datos (Fig. 13D).

<div class="notification is-info is-light">
  <b>Nota:</b> si está haciendo el ejercicio con sus propios datos y cuenta con coordenadas, puede realizar un filtro en los elementos de latitud y longitud decimales para identificar la latitud y longitud mínima y máxima. De esta manera, el recuadro se ajustará con mayor exactitud a su cobertura geográfica. 
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig10_metadatos_cgeografica.png" width=500>

<sub>_Figura 13. Sección cobertura geográfica. A. Selección de cobertura en mapa, B. Recuadros de longitud y latitud mínima y máxima, C. Opción para inferir las coordenadas a partir de los datos, D. Descripción_.</sub>

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Cobertura geográfica](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#cobertura-geogr%C3%A1fica){:target="_blank"}.

### 4.5. Cobertura taxonómica

Agregue una nueva cobertura taxonómica con el botón <span class="tag is-warning is-light"><i>Añadir cobertura taxonómica</i></span> y complete la descripción, teniendo en cuenta la sección **"Resultados"** del caso de ejemplo.

Tenga en cuenta que la información mínima a documentar es:

- Descripción textual de las categorias taxonómicas presentes en el conjunto de datos. 
- Número de taxones o registros por categoría taxonómica.

>**Ejemplo:** los [Números de registros] pertenecen a [x] órdenes, [x] familias y [x] géneros. Un [x%] está identificado a nivel de especie, un [x%] género y un [x%] a familia.
>

Para agregar varios taxones a la cobertura, haga clic en <span class="tag is-warning is-light"><i>Añadir varios taxa</i></span>. Luego, pegue ahí la lista de taxones, la cual puede ser de géneros, órdenes o clases que describan la cobertura taxonómica del recurso. No es recomendable que agregue listas a nivel de especies, así que intente agruparlas según su taxonomía superior.

Para este caso, agregue los nombres de los géneros descritos en los **"Resultados"** del caso de ejemplo (Fig. 14A) y haga clic en <span class="tag is-warning is-light"><i>Agregar</i></span>.

Cuando se haya añadido la lista de taxa, recuerde completar la **"Categoría"** con una de las opciones del desplegable, y si está disponible, documente el **"Nombre Común"** (Fig. 14B). En caso de querer añadir un taxón individualmente, puedes usar la opción <span class="tag is-warning is-light"><i>Añadir taxón</i></span>.

En caso de haber mapeado los datos previamente, también puedes usar la opción <span class="tag is-warning is-light"><i>Inferir automáticamente a partir de la fuente de datos</i></span>, y se documentarán todos los taxones presentes en los datos.

<div class="notification is-info is-light">
  <b>Nota:</b> Si hay varios grupos biológicos cubiertos en su conjunto de datos (como animales, plantas, bacterias, etc.), se recomienda utilizar la opción <span class="tag is-warning is-light"><i>Añadir cobertura taxonómica</i></span> para cada grupo.
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig11_metadatos_ctaxo.PNG" width=500>

<sub>_Figura 14. Sección cobertura taxonómica. A. Lista de Taxa, B. Documentación de la categoría y nombre común de cada taxa_.</sub>

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Cobertura taxonómica](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#cobertura-taxon%C3%B3mica){:target="_blank"}.

### 4.6. Cobertura temporal

Agregue una nueva cobertura taxonómica con el botón <span class="tag is-warning is-light"><i>Añadir cobertura temporal</i></span>. Generalmente, los proyectos o publicaciones cubren más de una fecha. Por esta razón, se recomienda usar la opción <span class="tag is-warning is-light"><i>Rango de Fechas</i></span> en **"Tipo de Cobertura Temporal"** (Fig. 15A). Puede documentar el rango de fechas manualmente en **"Fecha Inicial"** y **"Fecha Final"** o usando el botón de calendario (Fig. 15B). En caso de haber mapeado los datos previamente, esta sección también cuenta con la opción <span class="tag is-warning is-light"><i>Inferir automáticamente a partir de la fuente de datos</i></span> (Fig 15C).

>El rango de fechas documentado en los metadatos debe ser coherente con el rango de fechas presentes en los datos. 
>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig12_metadatos_ctemporal.PNG" width=600>

<sub>_Figura 15. Sección cobertura temporal A. Selección de Tipo de Cobertura Temporal, B. Opción de calendario, C. Opción para inferir las fechas a partir de los datos_.</sub>

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Cobertura temporal](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#cobertura-temporal){:target="_blank"}.

### 4.7. Descripción adicional

Esta es una sección opcional. Aquí puedes documentar información como el propósito del conjunto de datos, su contenido, su estructura, la posible interpretación y una descripción detallada del mismo. Esta sección es muy útil si planeas publicar un artículo de datos en el futuro.

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Descripción adicional](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#descripci%C3%B3n-adicional){:target="_blank"}.


### 4.8. Palabras clave

El IPT crea unas palabras clave por defecto con base en el [tesauro de GBIF](http://rs.gbif.org/vocabulary/gbif/dataset_type_2015-07-10.xml){:target="_blank"}. Es importante que **no** borre estos tesauros ni los modifique. En cambio, dirígase a la parte inferior y dé clic en <span class="tag is-warning is-light"><i>Añadir palabras clave</i></span> para crear un nuevo campo y agregar palabras clave separadas por comas (Fig. 16).

Si sus palabras clave provienen de un tesauro como [este](https://vocabularies.unesco.org/browser/thesaurus/es/){:target="_blank"}, indique el nombre del tesauro seguido por la URL en el campo **"Tesauro/Vocabulario"**. Si no está usando un tesauro para seleccionar las palabras clave, documente el campo **"Tesauro/Vocabulario"** con <span class="tag is-light"><b>n/a</b></span> (No Aplica).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig13_metadatos_pclave.PNG" width=600>

<sub>_Figura 16. Sección Palabras clave_.</sub>

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Palabras clave](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#palabras-clave){:target="_blank"}.


### 4.9. Datos del proyecto

Documente la sección **"Datos del proyecto"**, teniendo en cuenta la información proporcionada en el caso de ejemplo.

Los campos **"Identificador"** y **"Personas asociadas al proyecto"** no están disponibles en el caso de ejemplo. Sin embargo, tenga en cuenta las siguientes recomendaciones para futuras publicaciones:

- En el campo **"Identificador"**, se documenta un código único como el número del contrato, la resolución, el convenio o acuerdo firmado entre las partes, entre otros. No documente subtítulos o textos libres en este campo. 

- En el campo **"Personas Asociadas al Proyecto"**, se documentan las personas involucradas que no se hayan mencionado en la sección de **"Contactos"**. Si ingresa personas en este campo, se debe seleccionar obligatoriamente un valor en el campo **"Rol"**. De lo contrario, se pueden generar inconvenientes al momento de publicar el recurso.

En caso de que tus datos estén asociados a más de un proyecto, puedes utilizar la opción <span class="tag is-warning is-light"><i>Añadir proyecto relacionado</i></span> para documentar más proyectos, y se puede especificar el personal involucrado en cada uno de ellos.

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Datos del proyecto](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#datos-del-proyecto){:target="_blank"}.

### 4.10. Métodos de muestreo

Documente esta sección de acuerdo al apartado de **"Metodología"** en el caso de ejemplo.

- El campo **"Área de Estudio"** puede coincidir con el espacio documentado en la sección **"Datos del Proyecto"**.
- En el campo **"Descripción del muestreo"** va un párrafo general que resume todos los métodos utilizados para la toma de datos.
- En el campo **"Metodología paso a paso"**, es conveniente redactar cada paso en un recuadro diferente para que la publicación sea más ordenada. Por consiguiente, haga clic en <span class="tag is-warning is-light"><i>Añadir paso metodológico</i></span> para añadir tantos recuadros como considere conveniente (Fig. 17).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig14_metadatos_metodpasos.PNG" width=600>

<sub>_Figura 17. Metodología paso a paso de la sección métodos de muestreo._</sub>

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Métodos de muestreo](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#m%C3%A9todos-de-muestreo){:target="_blank"}.

### 4.11. Referencias

En el campo **"¿Cómo referenciar este recurso?"**, dé clic sobre la opción <span class="tag is-warning is-light"><i>Generación automática Desactivada - Activar</i></span>. De esta forma, dicha sección se diligenciará según lo documentado en los apartados de **"Creadores del Recurso"** y **"Proveedores de los Metadatos"**, compilados en la sección **"Contactos"**. Cuando se genere la citación, asegúrese de que todos los autores involucrados con la publicación estén correctamente referenciados (Fig. 18).

El formato de la referencia utilizado en la generación automática se basa en el formato recomendado (referencia de _DataCite_) y satisface la [_Joint Declaration of Data Citation Principle_](https://www.force11.org/datacitationprinciples){:target="_blank"}. Este formato incluye un número de versión, el cual es particularmente importante para los conjuntos de datos que se actualizan continuamente.

<div class="notification is-info is-light">
  <b>Nota:</b> si está activada la referencia automática, la citación incluirá el DOI (previamente asignado a la publicación), lo cual facilitará el rastreo del historial de uso del conjunto de datos.
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig15_metadatos_referencia.PNG" width=600>

<sub>_Figura 18. Sección Referencias_.</sub>

Puede ver más detalles acerca de esta sección en el [Manual del Usuario del IPT - Menú gestión de recursos - Referencias](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#referencias){:target="_blank"}.

### 4.12. Datos de la colección

Esta sección solo se documenta para los conjuntos de datos que corresponden a colecciones biológicas, y no cuando alguna de las observaciones se haya depositado en una colección. Siguiendo el caso de ejemplo, puedes documentar esta sección con la información que está en la portada e introducción.

Es recomendable documentar los campos de acuerdo al [Registro Nacional de Colecciones Biológicas](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones){:target="_blank"}. Puede añadir tantas coleciones como sea necesario (Fig. 19).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig16_meta_colecciones.png" width=600>

<sub>_Figura 19. Sección datos de la colección documentados de acuerdo al Registro Nacional de Colecciones Biológicas_.</sub>


### 4.13. Enlaces externos
Esta es una sección opcional. Puede incluir la URL de otro repositorio donde también se encuentren los datos publicados. Por ejemplo, [DRYAD](https://datadryad.org/stash){:target="_blank"}, [NCBI](https://www.ncbi.nlm.nih.gov/){:target="_blank"}{:target="_blank"}, [BOLD](https://boldsystems.org/){:target="_blank"}, entre otros.

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Enlaces Externos](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#enlaces-externos){:target="_blank"}.

### 4.14. Metadatos adicionales
Esta es una sección opcional. Generalmente, el publicador no debe documentar ningún campo. El EC-SiB añadirá el logo de la organización publicadora principal (Fig. 17A) y el IPT completará automáticamente los **"Identificadores Alternativos"**, que incluyen la url del recurso en el IPT, el DOI y el ID del recurso en el SiB Colombia y GBIF, una vez que se publique el recurso (Fig. 17B).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig17_meta_adicionales.png" width=600>

<sub>_Figura 17. Sección metadatos adicionales. A. Logo estandarizado del publicador, B. identificadores alternativos._</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Metadatos Adicionales](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#metadatos-adicionales){:target="_blank"}.

<br>

## Paso 5 - Datos propios

Si realizó este laboratorio con el caso de ejemplo, ahora intente crear un nuevo recurso para documentar los metadatos con base en sus propios informes o artículos.

****
**¡Felicitaciones!** Ha aprendido a documentar los metadatos asociados a datos sobre biodiversidad a través del IPT.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/){:target="_blank"} permite usar, redistribuir y construir sobre estos contenidos libremente. 

¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
