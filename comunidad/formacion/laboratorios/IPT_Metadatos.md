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

**Sobre la herramienta**

El [IPT](https://www.gbif.org/es/ipt) es un software gratuito y de código abierto que se utiliza para publicar y compartir conjuntos de datos de biodiversidad a través del SiB Colombia, GBIF y OBIS. Permite integrar datos y metadatos en un mismo archivo conocido como _DwC-A_. Una de las ventajas de esta herramienta frente a otros mecanismos de publicación es que provee una interfaz que permite documentar fácilmente los metadatos, además contempla la documentación de los autores del recurso promoviendo así el adecuado reconocimeinto a quienes publican datos sobre biodiversidad.

La instancia de publicación principal es el [IPT SiB](https://ipt.biodiversidad.co/sib/), adicionalmente los institutos del SINA administar su propio IPT.

**Enlace**
IPT Test: [https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/)

**Requerimientos** 

Creceniales de ingreso al [IPT test](https://ipt.biodiversidad.co/sib-test/)
- Usuario: talleresCFV@gmail.com
- Contraseña: FxKVSjOg

``` warning
Estas credenciales estarán habilitadas del **8 al 16 de Octubre del 2020**. Si usted realiza el laboratorio por fuera de estas fechas solicite las credenciales a _sib@humboldt.org.co_
```

**Archivo de trabajo**

Se provee un caso de uso para realizar el ejercicio sin embargo se recomienda realizar el laboratorio con base en un informe o artículo de sus propios datos.

- Descargue el caso de uso [```Informe Expedición Parulidae 2001.pdf```](https://drive.google.com/file/d/10ygXD9rD4_mmQhTrLn3VnM0OXUnNJt4h/view?usp=sharing) 


:warning: Estamos puliendo este laboratorio, la guía puede presentar cambios menores de formato y estilo para una mejor navegación y aprendizaje.

--------

## Paso 1 - Ingreso al IPT
Ingrese al  [IPT test](https://ipt.biodiversidad.co/sib-test/) con las credenciales proveidas en la sección de requerimientos de esta guía (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig1_meta_ingreso.png" width=600>

<sub>*Figura 1. Página principal del IPT e ingreso a la herramienta.*</sub>


## Paso 2 - Gestión de recursos
Una vez se haya autenticado en el IPT podrá ver su información de usuario (Fig. 2A) y tendra acceso a 3 menús o pestañas (Fig. 2B):

- **Inicio**: menú disponible para todos los usuarios, lista todos los recursos disponibles y públicos del IPT.
- **Gestión de recursos**: menú disponible solo para los usuarios registrados que han iniciado sesión.
- **Acerca de**: menú para todos los usuarios, con la información general del IPT.

El menú activo se mostrará en un color más oscuro (Fig. 2B)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig2_meta_ingreso2.png" width=600>

<sub>*Figura 2. Página principal del IPT disponible para los usuarios que han iniciado sesión. A. Detalle del usuario activo, B. menús disponiles.*</sub>

**2.1 Explore el menú Gestión de recursos**

Selecione el menú ```Gestión de recursos``` (Fig. 3),  aparecerá una tabla de resumen con todos los recursos que puede administrar con su usuario (Fig. 3A), esta tabla se puede filtrar por texto (Fig. 3B) y reorganizar de forma ascendente y desendente según los contenidos de cada columna (Fig. 3C). Puede ingresar a los recursos bajo su administración haciendo clic sobre el nombre del recurso en la tabla (Fig. 3). Explore las opciones de la tabla del menú  ```Gestión de recursos``` mencionadas anteriormente.

Al final de la página del el menú ```Gestión de recursos``` encontrará la seción para crear un nuevo recurso (Fig. 3D).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig3_meta_gestion.png" width=600>

<sub>*Figura 3. Menú de Gestión de recursos. A. Tabla de recursos adminsitrados, B. Filtro para búsqueda por texto de los recursos, C. Filtro de columna para reorganizar la tabla, D.Sección de creación de un recurso.*</sub>


## Paso 3 - Creación de un recurso

**3.1 Nombre corto**

Diríjase a la sección de creación del recurso al final del menú ```Gestión de recursos```, asigne un ```Nombre corto```(no use más de 5 palabras) al recurso que va a crear (Fig. 4A), no incluya  espacios ni carácteres especiales como tíldes o eñes 'ñ'. 

Para este ejercicio cree el ```Nombre corto``` con sus iniciales y el acrónimo de su organización, así podrá encontrarlo fácilmente.

**3.2 Tipo de recurso**

Seleccione el ```Tipo``` de datos a publicar de la lista desplegable (Fig. 4B), en este caso ```Registros Biológicos```. La selección del tipo de datos durante la creación del recurso no es definitiva, puede cambiar el tipo de datos a lo largo de la publicación.

**3.3 Importar _DwC-A_**

Opcionalmente y si posee un _**DwC-A**_ puede usar la función de ```Importar desde archivo``` , esta opción acepta solo _**DwC-A**_, NO permite archivos excel o de texto plano. **Para este ejercicio NO use esta opción** (Fig. 4C).


**3.4 Crear**

Finalmente haga clic en ```Crear``` (Fig. 4). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig4_meta_crear.png" width=600>

<sub>*Figura 4. Sección de creación del recurso. A. Nombre corto, B .Selección del tipo de datos, C. Carga de un DwC-A (opcional).*</sub>


El IPT lo dirigirá a la ```Vista General``` del recurso, allí encontrará 6 secciones para la administración del recurso (Fig. 5). Para este laboratorio solo debe utilizar la sección **```Metadatos```**; durante el proceso de publicación el Equipo Coordinador del SiB Colombia (EC-SiB) se encarga de configurar y administrar las demás secciones.

> Si quiere conocer más sobre las seciones de la ```Vista General``` del recurso explore la [Guía de referencia rápida del IPT - Vista general](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#vista-general-del-recurso)


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig5_meta_vistageneral.png" width=600>

<sub>*Figura 5. Secciones de la vista general del recurso.*</sub>

## Paso 4 - Documentación de los metadatos

```tip
:movie_camera: Antes de empezar revise [este video](https://youtu.be/9WkH9hoHc8w) que le dará una idea general del proceso de documentación de los metadatos.
```


Desde la ```Vista General``` del recurso ingrese a la sección de ```Metadatos``` haciendo clic en ```Editar```(Fig. 5). Será dirigido al formulario de metadatos que consta de 12 secciones (Fig. 6). A partir del informe del Caso de Uso o de un informe o artículo propio revise y documente cada una de las 12 secciones de metadatos.

```tip
Documente los metadatos enfocandose en el conjunto de datos que va a publicar, más no en el proyecto bajo el cúal fueron tomados.

Por ejemplo, si usted realizó un estudio filogenético y para ello tomó varias muestras de tejido en campo, describa las muestras y observaciones asociadas, más no el estudio filogenético.
```

Esta guía comprende una serie de recomendaciones basadas en las preguntas y errores más frecuentes sobre los metadatos, por lo cúal encontrará explicaciones **solo para algunos campos**, no es una guía paso a paso. Se recomienda complementar este laboratorio con la lectura de la [Guía de referencia rápida del IPT - Metadatos.](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#metadatos-b%C3%A1sicos)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig6_meta_secciones.png" width=600>

<sub>*Figura 6. Secciones de los metadatos.*</sub>

### 4.1. Metadatos básicos

**Título**

Borre el título documentato por el IPT por defecto, y asigne un **título relavante que describa los datos que va a publicar** (Fig. 7A).

**Organización publicadora**

Seleccione la organización principal que respalda la publicación de los datos (Fig. 7B), para efectos del ejercicio seleccione la opción ```Ninguna Organización```. 

> Para este ejercicio se esta utilizando el IPT de prueba por lo cúal no aparecerán las organizaciones registradas, puede revisar si su organización ya es un socio publicador [acá](https://sibcolombia.net/el-sib-colombia/publicadores-sib-colombia/), si no lo es le invitamos a [registrarse](https://sibcolombia.net/registrate-como-publicador/).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig7_meta_basico.png" width=600>

<sub>*Figura 7. Sección metadatos básicos. A. Título, B. Selección de la organización publicadora, C. Selección de la licencia de los datos.*</sub>

**Licencia de los datos**
Para asegurar que sus datos sean abiertos estos deben contar de manera explícita con una licencia que permita su reutilización. Escoja la licencia [_creative commons_](https://co.creativecommons.net/) que refleje hasta donde quiere que lleguen sus datos (Fig. 7C), para ello puede usas la guía interactiva de [Acceso abierto](ttps://sibcolombia.net/acceso-abierto/) (Fig. 8).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig8_meta_licencias.png" width=500>

<sub>*Figura 8. Herramienta interactiva para escojer una licencia, disponible en la guía de acceso abierto del SiB Colombia.*</sub>


**Descripción**

Documente una breve descripción de los datos que se van a publicar, este campo es equivalente a un resumen tipo informe o artículo científico. Debe incorporar de manera sintética la información de las demás secciones de los metadatos (Fig. 7).

**Creadores del Recurso**

En esta sección debe incluir a todas las personas que aportaron significativamente a la toma, manejo, digitalización, custodia y publicación de los datos (Fig. 9). A partir de esta información se crea la citación del recurso que quedará visible a través de todos los portales de datos del SiB Colombia, GBIF y OBIS. Esta sección es equivalente a la lista de autores de un libro o artículo científico.

Puede añadir tantas personas como sea necesario, se recomienda documentar la mayor cantidad de información posible de cada autor (Fig. 9).

```note
Los creadores del recurso deben ser **personas**, no entidades. Por medio del campo organización de cada autor el EC-SiB se encarga de recopilar las autorías a nivel institucional.
````

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig9_meta_autor.png" width=600>

<sub>*Figura 9. Creadores del recurso, sección para documentar los autores del recurso.*</sub>


> Ver más detalles en la [Guía de referencia rápida del IPT - Metadatos básicos](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#metadatos-b%C3%A1sicos)

### 4.2. Cobetura geográfica

En el mapa de esta sección desactive el recuadro  ```Establecer cobertura global```, para que pueda seleccionar en el mapa la ubicación mas cercana a la ubicación del los datos. Use La cobertura global solo si sus datos cubren un amplio rango de países.

Ajuste los marcadores en el recuadro del mapa para que cubra de forma **aproximada** la región donde se tomaron los datos (Fig. 10A).

Ingrese la ```Descripción``` de la cobertura geográfica de acuerdo al área de estudio del *Caso de uso* en el campo. Documente solo lo que hace referencia a la ubicación geográfica de los datos. (Fig. 10B)


```tip
Si está haciendo el ejercicio con sus propios datos y cuenta con coordenadas, puede realizar un filtro en los elementos de latitud y longitud decimales para identificar la latitud y longitud, mínima y máxima, para que el recuadro se ajuste con mayor exactitud a su cobertura geográfica. 
```

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig10_metadatos_cgeografica.PNG" width=500>

<sub>*Figura 10. Sección cobertura geográfica. A. Selección de cobertura en mapa, B. Descripción.*</sub>


> Ver más detalles en la [Guía de referencia rápida del IPT - Cobetura geográfica](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#cobertura-geogr%C3%A1fica)

### 4.3. Cobetura taxonómica

Agregue una nueva cobertura taxonómica con el botón ```Añadir nuevo(a) cobertura taxonómica```. Documente la descripción de acuerdo a la sección Resultados del *Caso de uso*.

Tenga en cuenta que la información mínima a documentar es:

- Descripción textual de las categorias taxonómicas presentes en el conjunto de datos. 
- Número de taxones o registros por categoría taxonómica.


>Ejemplo: 
>Los [Número de registros], pertenecen a [x]ordenes, [x]familias y [x]generos. Un [x%]está identificado a especie, un [x%] género y [x%] a familia.

Para agregar varios taxones en la cobertura, haga clic en ```Añadir varios taxa```. Pegue ahí la lista de taxones, puden ser una listas de géneros, ordenes, clases que describan la cobertura taxonómica del recurso. No es recomendable que agregue listas de taxa a nivel de especies si son muchas especies, intente agruparlas según su taxonomía superior. 

Para este caso, agregue  los nombres de las especies descritas en los Resultados del Caso de Uso (Fig. 11A). y haga clic en ```Agregar```. 

Una vez se agregue la lista de taxa recuerde completar la categoría taxonómica y el nombre común si se tiene (Fig. 11B).

```tip
Si hay varios grupos biológicos cubiertos en su conjunto de datos. (Ej: Animales, plantas, bacterias, etc.), se recomienda añadir nuevas coberturas taxonómicas para cada grupo.
```

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig11_metadatos_ctaxo.PNG" width=500>

<sub>*Figura 11. Sección cobertura taxonómica. A. Añadir varios taxa, B. Documentación de la categoría y nombre común de cada taxa.*</sub>


> Ver más detalles en la [Guía de referencia rápida del IPT - Cobetura taxonómica](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#cobertura-taxon%C3%B3mica)

### 4.4. Cobertura temporal

Por lo general los proyectos o publicaciones cubren más de una fecha, por ello se recomienda en ```Tipo de Cobertura Temporal``` usar la opción ```Rango de Fechas``` (Fig. 12).

Recuerde documentar el rango de fechas usando el formato del estándar ISO 8601, AAAA-MM-DD o usando el botón de calendario. (Fig. 12).


``` tip
El rango de fechas documentado en los metadatos debe ser coherente con el rango de fechas presentes en los datos. 
```

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig12_metadatos_ctemporal.PNG" width=600>

<sub>*Figura 12. Sección cobertura temporal.*</sub>

> Ver más detalles en la [Guía de referencia rápida del IPT - Cobertura temporal](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#cobertura-temporal)

### 4.5 Palabras clave

El IPT crea unas palabras clave por defecto basadas en el [tesauro de GBIF](http://rs.gbif.org/vocabulary/gbif/dataset_type.xml). **NO** borre estos tesauros ni los modifique. Cree un nuevo campo para agregar palabras clave, haciendo clic en ```Añadir nuevo(a) palabras clave```. (Fig. 13)

Si sus palabras clave provienen de un tesauro como: [http://vocabularies.unesco.org/browser/thesaurus/es/page/mt2.70](http://vocabularies.unesco.org/browser/thesaurus/es/page/mt2.70), indique el nombre del tesauro seguido por la URL del tesauro en el campo ```Tesauro/Vocabulario```. Si no esta usando un tesauro para seleccionar las palabras clave documente el campo ```Tesauro/Vocabulario``` como ```n/a``` (No Aplica).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig13_metadatos_pclave.PNG" width=600>

<sub>*Figura 13. Sección palabras clave.*</sub>


> Ver más detalles en la [Guía de referencia rápida del IPT - Palabras clave](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#palabras-clave)


### 4.6. Partes asociadas

Para este ejercicio, y según el *Caso de Uso* la documentación de la sección ```Partes Asociadas``` *no aplica*. Sin embargo lea las siguientes recomendaciones para futuras publicaciones:

En esta sección se documenta la información de las personas u organizaciones adicionales  a las que se documentaron en los metadatos básicos, o se pueden documentar nuevamente si se quiere especificar su rol dentro de la publicación.

```tip
Debe documentar el campo ```Rol``` para todas las partes asocidas documentadas en esta sección. 
```

Se recomienda que las partes (personas e instituciones) involucradas en la generación de los datos sean reconocidas en los metadatos, idealmente como *Creadores del recurso* en la sección de **metadatos básicos** (si se consideran autores del recurso) y en partes asociadas (si estuvieron involucradas en la generación del recurso) y cumplen alguno de los roles del campo ```Rol```.


> Ver más detalles en la [Guía de referencia rápida del IPT - Partes asociadas](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#partes-asociadas)


### 4.7. Datos del proyecto

Documente la sección de ```Datos del proyecto``` de acuerdo al *Caso de Uso*, en el informe encontrará la información necesaria.

Los campos ```Identificador``` y ```Personas asociadas al proyecto``` no están disponibles en el *Caso de Uso*, sin embargo tenga en cuenta las siguiente recomendaciones para futuras publicaciones:


- En el campo ```Identificador``` se documenta un identificador único como el número del contrato, resolución, convenio o acuerdo firmado entre las partes. **No documente** subtítulos o textos libres en este campo. 

- En el campo ```Personas Asociadas al Proyecto``` se documentan las personas involucradas si estas no fueron mencionadas ya como partes asocidas o en los metadatos básicos. Si ingresa personas en este campo, debe documentar de forma obligatoria el campo ```Rol``` o se pueden generar inconvenientes al momento de publicar el recurso.


> Ver más detalles en la [Guía de referencia rápida del IPT - Datos del proyecto](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#datos-del-proyecto)

### 4.8. Métodos de muestreo

Documente la sección de acuerdo al *Caso de Uso*, en la sección de *Metodología* encontrará la información necesaria.

- El campo ```Área de estudio```, puede coincidir con el área de estudio documentada para la sección de ```Datos del Proyecto```.

En el campo de ```Metodología paso a paso``` documente cada paso en un párrafo diferente para que la publicación sea mas ordenada. Para ello haga clic en ```Añadir nuevo(a) paso metodológico```. (Fig. 14)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig14_metadatos_metodpasos.PNG" width=600>

<sub>*Figura 14. Metodología paso a paso de la sección métodos de muestreo.*</sub>

> Ver más detalles en la [Guía de referencia rápida del IPT - Métodos de muestreo](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#m%C3%A9todos-de-muestreo)

### 4.9 Referencias

En el campo ```¿Cómo referenciar este recurso?``` asegurese que esté activada la opción de ```Generación automática```, esta se diligenciará según los datos documentados en las demás secciones de los metadatos. (Fig. 15) 

El formato de la referencia utilizado en la generación automática se basa en el formato recomendado: referencia de DataCite y satisface la [_Joint Declaration of Data Citation Principle_](https://www.force11.org/datacitationprinciples). Este formato incluye un número de versión, que es importante especialmente para los conjuntos de datos que se actualizan continuamente.

``` tip
Una vez se genere la publicación y se asigne el doi (Digital Object Identifier), si está activada la referencia automática la citación incluirá el doi, lo que facilitará rastrear el uso del conjunto de datos publicado.
```

Cuando se genere la citación asegurese que todos los autores involucrados con la publicación sean correctamente mencionados.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig15_metadatos_referencias.PNG" width=600>

<sub>*Figura 15. Sección Referencias.*</sub>

> Ver más detalles en la [Guía de referencia rápida del IPT - Referencias](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#referencias)

### 4.10. Datos de la Colección

Documente esta sección de acuerdo al *Caso de Uso*, en la portada e introducción encontrará la información necesaria para completar la información e la colección.

Esta sección se deble documentar en los siguientes casos:
1) El conjunto de datos corresponde a una colección biológica.
2) Una o varias de las observaciones del conjunto de datos esta asociada a un especímen que fue entregado y depositado en una colección biológica.

Es recomendable documentar los campos de manera acorde al [Registro Nacional de Colecciones Biológicas](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones). Puede añadir tantas coleciones como sea necesario (Fig. 16).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig16_meta_colecciones.png" width=600>

<sub>*Figura 16. Sección datos de la colección documentados de acuerdo al Registro Nacional de Colecciones Biológicas.*</sub>

> Ver más detalles en la [Guía de referencia rápida del IPT - Datos de la Colección](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#datos-de-la-colecci%C3%B3n)

### 4.11 Enlaces Externos
Esta es una sección opcional, puede incluir la URL a otro repositorio donde también se encuentren los datos publicados como [DRYAD](https://datadryad.org/stash), [NCBI](https://www.ncbi.nlm.nih.gov/), [BOLD](https://boldsystems.org/), entre otros.

> Ver más detalles en la [Guía de referencia rápida del IPT - Enlaces Externos](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#enlaces-externos)

### 4.12 Metadatos Adicionales
Esta es una sección opcional, por lo general el publicador no debe documentar ningún campo. El EC-SiB añadira el logo de la organización publicadora principal (Fig. 17A) y una vez se publique el recurso el IPT completará automáticamente los ```Identificadores Alternativos``` que incluyen la url del recurso en el IPT, el DOI, y el id del recurso en el SiB Colombia y GBIF (Fig. 17B).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab03/_images/Fig17_meta_adicionales.png" width=600>

<sub>*Figura 17. Sección metadatos adicionales. A. Logo estandarizado del publicador, B. identificadores alternativos.*</sub>


> Ver más detalles en la [Guía de referencia rápida del IPT - Metadatos Adicionales](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#metadatos-adicionales)

## Paso 5 - Datos propios
Si realizo este laboratorio con el Caso de Uso, ahora intente crear un nuevo recurso y documentar los metadatos basado en sus propios informes o artículos.

****
**¡Felicitaciones!** :raised_hands:
Ha aprendido a documentar metadatos asociados a datos sobre biodiversidad a través del IPT.

****

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> SiB Colombia (2020). Laboratorios de datos, Ciclo de formación virtual. Consultado a través del SiB Colombia. Disponible en https://sib-colombia.github.io/Formacion/
