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

<iframe width="560" height="315" src="https://www.youtube.com/embed/9WkH9hoHc8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
**Sobre la herramienta**

El [IPT](https://www.gbif.org/es/ipt) (del inglés Integrated Publishing Toolkit) es un _software_ gratuito y de código abierto que se utiliza para publicar y compartir conjuntos de datos de biodiversidad a través del [SiB Colombia](https://sibcolombia.net/), [GBIF](https://www.gbif.org/) y [OBIS](https://obis.org/). Este _software_ permite integrar datos y metadatos en un mismo formato de archivo, conocido como _Darwin Core Archive_ (DwC-A). Una de las ventajas de esta herramienta, frente a otros mecanismos de publicación, es que provee una interfaz para documentar fácilmente los metadatos. Además, contempla la documentación de los autores del recurso, promoviendo así el adecuado reconocimiento a quienes publican datos sobre biodiversidad.

La instancia de publicación principal es el [IPT SiB](https://ipt.biodiversidad.co/sib/). Adicionalmente, los institutos del SINA administran su propio IPT.

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Enlace**
IPT Test: [https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/)

**Requerimientos** 

Credeniales de ingreso al [IPT _test_](https://ipt.biodiversidad.co/sib-test/):
- Usuario:LaboratoriosCFV2021@gmail.com
- Contraseña:FxKVSjOg


**Archivo de trabajo**

Esta guía provee un caso de ejemplo para realizar el ejercicio. Sin embargo, se recomienda realizar el laboratorio con base en un informe o artículo de sus propios datos.

- Descargue el caso de ejemplo [<FONT FACE="monospace"><b>«Informe Expedición Parulidae 2001.pdf»</b></FONT>](https://drive.google.com/file/d/10ygXD9rD4_mmQhTrLn3VnM0OXUnNJt4h/view?usp=sharing) 


--------

## Paso 1 - Ingreso al IPT

Ingrese al  [IPT _test_](https://ipt.biodiversidad.co/sib-test/) con las credenciales que se encuentran en la sección de requerimientos (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig1_meta_ingreso.png" width=800>

<sub>_Figura 1. Página principal del IPT e ingreso a la herramienta_.</sub>

Despues de 

## Paso 2 - Gestión de recursos

Una vez que se haya autenticado en el IPT, podrá ver su información de usuario (Fig. 2A) y tendrá acceso a 3 menús o pestañas (Fig. 2B):

- **Inicio**: menú disponible para todos los usuarios, el cual lista todos los recursos disponibles y públicos del IPT.
- **Gestión de recursos**: menú disponible solo para los usuarios registrados que han iniciado sesión.
- **Acerca de**: menú para todos los usuarios, el cual presenta información general del IPT.

>El menú activo se mostrará en un color más oscuro (Fig. 2B).
>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig2_meta_ingreso2.png" width=800>

<sub>_Figura 2. Página principal del IPT disponible para los usuarios que han iniciado sesión. A. Detalle del usuario activo, B. Menús disponiles_.</sub>

**2.1 Explore el menú Gestión de recursos**

Selecione el menú <span class="tag is-warning is-light"><i>Gestión de recursos</i></span> (Fig. 3). Aparecerá una tabla de resumen con todos los recursos que puede administrar con su usuario (Fig. 3A), la cual se puede filtrar por texto (Fig. 3B) y reorganizar de forma ascendente o desendente según los contenidos de cada columna (Fig. 3C). Para ingresar a los recursos bajo su administración, haga clic sobre el nombre del recurso en la tabla (Fig. 3). Por último, explore las opciones de la tabla mencionadas anteriormente.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig3_meta_gestion.png" width=800>

<sub>_Figura 3. Menú de Gestión de recursos. A. Tabla de recursos adminsitrados, B. Filtro para búsqueda por texto de los recursos, C. Filtro de columna para reorganizar la tabla, D. Sección de creación de un recurso_.</sub>


## Paso 3 - Creación de un recurso

Para crear un recurso diríjase a la sección de creación del recurso al final del menú <span class="tag is-warning is-light"><i>Gestión de recursos</i></span> y siga estos pasos:

### 3.1. Agignación de nombre corto

Asigne un <span class="tag is-light"><b>Nombre corto</b></span> (no use más de 5 palabras) al recurso que va a crear (Fig. 4A). No incluya espacios ni carácteres especiales como tildes (´) o eñes (ñ). Para este ejercicio, cree el <span class="tag is-light"><b>Nombre corto</b></span> con sus iniciales y el acrónimo de su organización, así podrá encontrarlo fácilmente.

### 3.2. Selección del tipo de recurso**

En la lista desplegable de la sección **"Tipo"**, seleccione la opción que corresponda a los datos que se van publicar (Fig. 4B). En este caso, <span class="tag is-warning is-light"><i>Registros Biológicos</i></span>. La elección del tipo de datos durante la creación del recurso no es definitiva, ya que puede cambiar el tipo de datos a lo largo de la publicación.

### 3.3. Opción para importar un archivo *DwC-A*

Si posee un _Darwin Core Archive_ (DwC-A), puede usar la función de <span class="tag is-warning is-light"><i>Importar desde archivo</i></span>. Esta opción solo acepta el formato DwC-A, **no** permite archivos Excel ni de texto plano. Por consiguiente, dicha opción no se debe usar para este ejercicio (Fig. 4C).

### 3.4. Creación del recurso

Finalmente, dé clic en la opción <span class="tag is-warning is-light"><i>Crear</i></span> (Fig. 4). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig4_meta_crear.png" width=600>

<sub>_Figura 4. Sección de creación del recurso. A. Nombre corto, B .Selección del tipo de datos, C. Carga de un DwC-A (opcional)_.</sub>

Después de crear el recurso, el IPT lo dirigirá a la **"Vista General"** del recurso, donde encontrará 6 secciones para la administración del recurso (Fig. 5). Para este laboratorio, solo debe utilizar la sección **"Metadatos"**, ya que el Equipo Coordinador del SiB Colombia (EC-SiB) se encarga de configurar y administrar las demás secciones durante el proceso de publicación.

Puede conocer más sobre las seciones de la **"Vista General"** del recurso en la [Guía de referencia rápida del IPT - Vista general].(https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#vista-general-del-recurso)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig5_meta_vistageneral.png" width=800>

<sub>_Figura 5. Secciones de la vista general del recurso_.</sub>

## Paso 4 - Documentación de los metadatos

<div class="notification is-info is-light">
  <b>Tip:</b> el grado de incertidumbre de la identificación puede indicarse agregando varios calificativos, como “aff.” y “cf.”, al nombre científico. El calificativo se escribe después del elemento al que corresponde la incertidumbre de identificación (género o especie).
</div>

Desde la **"Vista General"** del recurso, ubique la sección de **"Metadatos"** hacien y haga clic en <span class="tag is-warning is-light"><i>Editar</i></span> (Fig. 5). Será dirigido al formulario de metadatos, que consta de 12 secciones (Fig. 6). A partir del informe del caso de ejemplo o de un informe o artículo propio, revise y documente cada una de las 12 secciones de metadatos.

> Al documentar los metadatos, enfóquese en el conjunto de datos que va a publicar y no en el proyecto bajo el que fueron tomados.
Por ejemplo, si usted realizó un estudio filogenético y desea publicar los datos de las muestras de tejido que tomó en campo, describa solo las muestras y observaciones asociadas, no el estudio filogenético.
>

Esta guía comprende una serie de recomendaciones basadas en las preguntas y errores más frecuentes sobre los metadatos. Por lo tanto, solo encontrará explicaciones para algunos campos. Para complementar este laboratorio y tener acceso a una guía paso a paso, se recomienda revisar la [Guía de referencia rápida del IPT - Metadatos.](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#metadatos-b%C3%A1sicos)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig6_meta_secciones.png" width=600>

<sub>_Figura 6. Secciones de los metadatos._</sub>

### 4.1. Metadatos básicos

**"Título"**

Borre el título por defecto del IPT y asigne un **título relevante que describa los datos a publicar** (Fig. 7A).

**"Organización publicadora"**

Seleccione la organización principal que respalda la publicación de los datos (Fig. 7B). Para efectos de este ejercicio, elija la opción <span class="tag is-warning is-light"><i>Ninguna Organización</i></span>. 

<div class="notification is-info is-light">
  <b>Nota:</b> en esta guía se está utilizando el IPT de prueba, por lo que no aparecerán las organizaciones registradas, Puede revisar si su organización ya es un socio publicador en esta [lista](https://sibcolombia.net/el-sib-colombia/publicadores-sib-colombia/); si no lo es, lo invitamos a registrarla [aquí](https://sibcolombia.net/registrate-como-publicador/).
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig7_meta_basico.png" width=800>

<sub>*Figura 7. Sección metadatos básicos. A. Título, B. Selección de la organización publicadora, C. Selección de la licencia de los datos.*</sub>

**"Licencia de los datos"**

Para asegurar que sus datos sean abiertos, estos deben contar de manera explícita con una licencia que permita su reutilización. Escoja una de las licencias [_Creative Commons_](https://co.creativecommons.net/) que regule hasta dónde quiere que lleguen sus datos (Fig. 7C). Puede usar la [guía interactiva de acceso abierto] (https://sibcolombia.net/acceso-abierto/) para realizar la elección (Fig. 8).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig8_meta_licencias.png" width=600>

<sub>_Figura 8. Herramienta interactiva para escojer una licencia, disponible en la guía de acceso abierto del SiB Colombia._</sub>

**"Descripción"**

Describa brevemente los datos que se van a publicar. Este campo es equivalente a un resumen tipo informe o artículo científico. Por consiguiente, debe incorporar de manera sintética la información de las demás secciones de los metadatos, incluyendo el objetivo del proyecto o estudio, la cobertura temporal, geográfica y taxonómica (Fig. 7).

**"Creadores del Recurso"**

En esta sección debe incluir a todas las personas que aportaron significativamente a la toma, manejo, digitalización, custodia y publicación de los datos (Fig. 9). A partir de esta información, se crea la citación del recurso que quedará visible a través de todos los portales de datos del SiB Colombia, GBIF y OBIS. Por lo tanto, es equivalente a la lista de autores de un libro o artículo científico. Además, puede añadir tantas personas como sea necesario. Se recomienda documentar la mayor cantidad de información posible de cada autor (Fig. 9).

<div class="notification is-info is-light">
  <b>Tip:</b> Los creadores del recurso deben ser personas, no entidades, ya que el EC-SiB se encarga de recopilar las autorías a nivel institucional por medio del campo <b>"Organización"</b>.
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig9_meta_autor.png" width=600>

<sub>_Figura 9. Creadores del recurso, sección para documentar los autores del recurso._</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Metadatos básicos.](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#metadatos-b%C3%A1sicos)

### 4.2. Cobetura geográfica

En el mapa de esta sección, desactive el recuadro <span class="tag is-warning is-light"><i>Establecer cobertura global</i></span> para seleccionar el punto más cercano a la ubicación del los datos en el mapa. Use La cobertura global solo si sus datos cubren un amplio rango de países. Adicionalmente, ajuste los marcadores en el recuadro del mapa para que cubra de forma **aproximada** la región donde se tomaron los datos (Fig. 10A).

Ingrese la **"Descripción"** de la cobertura geográfica, de acuerdo al área de estudio del caso de ejemplo. Recuerde documentar solo lo que hace referencia a la ubicación geográfica de los datos (Fig. 10B).

<div class="notification is-info is-light">
  <b>Nota:</b> si está haciendo el ejercicio con sus propios datos y cuenta con coordenadas, puede realizar un filtro en los elementos de latitud y longitud decimales para identificar la latitud y longitud, mínima y máxima. De esta formas, el recuadro se ajustará con mayor exactitud a su cobertura geográfica. 
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig10_metadatos_cgeografica.png" width=500>

<sub>_Figura 10. Sección cobertura geográfica. A. Selección de cobertura en mapa, B. Descripción_.</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Cobetura geográfica.](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#cobertura-geogr%C3%A1fica)

### 4.3. Cobetura taxonómica

Agregue una nueva cobertura taxonómica con el botón <span class="tag is-warning is-light"><i>Añadir nuevo(a) cobertura taxonómica</i></span> y complete la descripción, teniendo en cuenta la sección **"Resultados"** del caso de ejemplo.

Tenga en cuenta que la información mínima a documentar es:

- Descripción textual de las categorias taxonómicas presentes en el conjunto de datos. 
- Número de taxones o registros por categoría taxonómica.

>Ejemplo: 
Los [Número de registros] pertenecen a [x] ordenes, [x] familias y [x] géneros. Un [x%] está identificado a nivel de especie, un [x%] género y [x%] a familia.
>

Para agregar varios taxones a la cobertura, haga clic en <span class="tag is-warning is-light"><i>Añadir varios taxa</i></span>. Luego, pegue ahí la lista de taxones, la cual puede ser de géneros, órdenes o clases que describan la cobertura taxonómica del recurso. No es recomendable que agregue listas de taxa a nivel de especies, así que intente agruparlas según su taxonomía superior. 

Para este caso, agregue  los nombres de las especies descritas en los **"Resultados"** del caso de ejemplo (Fig. 11A) y haga clic en <span class="tag is-warning is-light"><i>Agregar</i></span>. 

Cuando se haya añadido la lista de taxa, recuerde completar la **"Categoría"** con una de las opciones del desplegable y el nombre común, si está disponible (Fig. 11B).

<div class="notification is-info is-light">
  <b>Nota:</b> si hay varios grupos biológicos cubiertos en su conjunto de datos (como animales, plantas, bacterias, etc.), se recomienda añadir nuevas coberturas taxonómicas para cada grupo.
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig11_metadatos_ctaxo.PNG" width=500>

<sub>*Figura 11. Sección cobertura taxonómica. A. Añadir varios taxa, B. Documentación de la categoría y nombre común de cada taxa.*</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Cobetura taxonómica](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#cobertura-taxon%C3%B3mica).

### 4.4. Cobertura temporal

Generalmente, los proyectos o publicaciones cubren más de una fecha. Por esta razón, se recomienda usar la opción <span class="tag is-warning is-light"><i>Rango de Fechas</i></span> en **""Tipo de Cobertura Temporal"**.
Recuerde documentar el rango de fechas con el formato del estándar ISO 8601 (AAAA-MM-DD) o usando el botón de calendario (Fig. 12).

>El rango de fechas documentado en los metadatos debe ser coherente con el rango de fechas presentes en los datos. 
>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig12_metadatos_ctemporal.PNG" width=600>

<sub>*Figura 12. Sección cobertura temporal.*</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Cobertura temporal](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#cobertura-temporal).

### 4.5 Palabras clave

El IPT crea unas palabras clave por defecto con base en el [tesauro de GBIF](http://rs.gbif.org/vocabulary/gbif/dataset_type.xml). Es importante que **no** borre estos tesauros ni los modifique. En cambio, dé clic en <span class="tag is-warning is-light"><i>Añadir nuevo(a) palabras clave</i></span> para crear un nuevo campo y agregar palabras clave (Fig. 13).

Si sus palabras clave provienen de un tesauro como este: [http://vocabularies.unesco.org/browser/thesaurus/es/page/mt2.70](http://vocabularies.unesco.org/browser/thesaurus/es/page/mt2.70), indique el nombre del tesauro seguido por la URL en el campo **"Tesauro/Vocabulario"**. Si no esta usando un tesauro para seleccionar las palabras clave, documente el campo **"Tesauro/Vocabulario"** con <span class="tag is-light"><b>n/a</b></span> (No Aplica).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig13_metadatos_pclave.PNG" width=600>

<sub>_Figura 13. Sección palabras clave._</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Palabras clave](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#palabras-clave).


### 4.6. Partes asociadas

Para este ejercicio, y según el caso de ejemplo, la documentación de la sección **"Partes Asociadas"** no aplica. Sin embargo, lea las siguientes recomendaciones para futuras publicaciones:

En esta sección, se documenta la información de las personas u organizaciones adicionales que se incluyeron en los metadatos básicos. También se pueden documentar por completo nuevamente si se quiere especificar su rol dentro de la publicación.

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
    Es indispensable que el elemento <b><i>occurrenceID</i></b> esté documentado para que el <i>DataValidator</i> reconozca el archivo.
  </div>
</article>

Se recomienda que las partes (personas e instituciones) involucradas en la generación de los datos sean reconocidas en los metadatos, idealmente como "Creadores del recurso" en la sección de **"Metadatos básicos"** (si se consideran autores del recurso) y en **"Partes asociadas"** (si estuvieron involucradas en la generación del recurso y cumplen alguno de los roles del campo **"Rol"**).

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Partes asociadas](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#partes-asociadas).


### 4.7. Datos del proyecto

Documente la sección **"Datos del proyecto"**, teniendo en cuenta la información proporcionada en el caso de ejemplo.

Los campos **"Identificador"** y **"Personas asociadas al proyecto"** no están disponibles en el caso de ejemplo. Sin embargo, tenga en cuenta las siguiente recomendaciones para futuras publicaciones:


- En el campo **"Identificador"**, se documenta un código único como el número del contrato, la resolución, el convenio o acuerdo firmado entre las partes. No documente subtítulos o textos libres en este campo. 

- En el campo **"Personas Asociadas al Proyecto"**, se documentan las personas involucradas si estas no fueron mencionadas en los metadatos básicos o como partes asocidas o. Si ingresa personas en este campo, debe añadir obligatoriamente el campo **"Rol"**. De lo contrario, se pueden generar inconvenientes al momento de publicar el recurso.

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Datos del proyecto](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#datos-del-proyecto).

### 4.8. Métodos de muestreo

Documente esta sección de acuerdo al apartado de **"Metodología"** en el caso de ejemplo.

- El campo **"Área de estudio"** puede coincidir con el espacio documentado en la sección **"Datos del Proyecto"**.

En el campo **"Metodología paso a paso"**, es conveniente redactar cada paso en un párrafo diferente para que la publicación sea más ordenada. Por consiguiente, haga clic en  <span class="tag is-warning is-light"><i>Añadir nuevo(a) paso metodológico</i></span> (Fig. 14).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig14_metadatos_metodpasos.PNG" width=600>

<sub>_Figura 14. Metodología paso a paso de la sección métodos de muestreo._</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Métodos de muestreo](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#m%C3%A9todos-de-muestreo).

### 4.9 Referencias

En el campo **"¿Cómo referenciar este recurso?"**, asegurese de que esté activada la opción <span class="tag is-warning is-light"><i>Generación automática</i></span>. De esta forma, dicha sección se diligenciará según lo documentado en los apartados de **"Creadores del Recurso"** y **"Proveedores de los Metadatos"**, compilados en la sección **"Metadatos Básicos"**, en (Fig. 15). 

El formato de la referencia utilizado en la generación automática se basa en el formato recomendado (referencia de _DataCite_) y satisface la [_Joint Declaration of Data Citation Principle_](https://www.force11.org/datacitationprinciples). Este formato incluye un número de versión, el cual es particularmente importante para los conjuntos de datos que se actualizan continuamente.

<div class="notification is-info is-light">
  <b>Nota:</b> si está activada la referencia automática, la citación incluirá el DOI (previamente asignado a la publicación), lo cual facilitará el rastreo del historial de uso del conjunto de datos.
</div>

Cuando se genere la citación, asegúrese de que todos los autores involucrados con la publicación estén correctamente referenciados.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig15_metadatos_referencia.PNG" width=600>

<sub>*Figura 15. Sección Referencias.*</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Referencias](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#referencias).

### 4.10. Datos de la Colección

Documente esta sección con base en la información sobre la colección de la portada e introducción del caso de ejemplo, solo en los siguientes casos:

1. El conjunto de datos corresponde a una colección biológica.
2. Una o varias de las observaciones del conjunto de datos está asociada a un especímen que fue entregado y depositado en una colección biológica.

Es recomendable documentar los campos de acuerdo al [Registro Nacional de Colecciones Biológicas](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones). Puede añadir tantas coleciones como sea necesario (Fig. 16).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig16_meta_colecciones.png" width=600>

<sub>*Figura 16. Sección datos de la colección documentados de acuerdo al Registro Nacional de Colecciones Biológicas.*</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Datos de la Colección](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#datos-de-la-colecci%C3%B3n).

### 4.11 Enlaces Externos
Esta es una sección opcional. Puede incluir la URL de otro repositorio donde también se encuentren los datos publicados. Por ejemplo, [DRYAD](https://datadryad.org/stash), [NCBI](https://www.ncbi.nlm.nih.gov/), [BOLD](https://boldsystems.org/), entre otros.

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Enlaces Externos](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#enlaces-externos).

### 4.12 Metadatos Adicionales
Esta es una sección opcional. Generalmente, el publicador no debe documentar ningún campo. El EC-SiB añadirá el logo de la organización publicadora principal (Fig. 17A) y el IPT completará automáticamente los **"Identificadores Alternativos"**, que incluyen la url del recurso en el IPT, el DOI y el ID del recurso en el SiB Colombia y GBIF, una vez que se publique el recurso (Fig. 17B).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig17_meta_adicionales.png" width=600>

<sub>_Figura 17. Sección metadatos adicionales. A. Logo estandarizado del publicador, B. identificadores alternativos._</sub>

Puede ver más detalles acerca de esta sección en la [Guía de referencia rápida del IPT - Metadatos Adicionales](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#metadatos-adicionales).

## Paso 5 - Datos propios

Si realizó este laboratorio con el caso de ejemplo, ahora intente crear un nuevo recurso para documentar los metadatos con base en sus propios informes o artículos.

****
**¡Felicitaciones!** Ha aprendido a documentar los metadatos asociados a datos sobre biodiversidad a través del IPT.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/)  permite usar, redistribuir y construir sobre estos contenidos libremente. 

¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
