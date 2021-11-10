---
layout: documentation
permalink: /formacion/laboratorios/QGIS
title: "Validación geográfica con QGIS"
description: "Objetivo: Visualizar y validar con la herramienta QGIS la coherencia de la ubicación de las coordenadas respecto a la geografía superior documentada en los datos."
sideNavigation: sidenav_laboratorios.terms
toc: true
---


# Validación geográfica con QGIS

**Objetivo**

Visualizar y validar la coherencia de la ubicación de las coordenadas con respecto a la geografía superior de los datos por medio de la herramienta QGIS.

**Introducción**

Video introductorio de la herramienta, el cual da un contexto general sobre su uso. Si lo prefiere, puede seguir el paso a paso de la guía directamente.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2Fy6aa7pR9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
**Sobre la herramienta**

[QGIS](https://qgis.org/es/site/about/index.html) es un _software_ de gestión de información geográfica que se ejecuta en múltiples sistemas operativos como _Linux_, _Unix_, _Mac OSX_, _Windows_ y _Android_. También soporta numerosos formatos y funcionalidades de datos vector, datos ráster y bases de datos. Esta herramienta proporciona una creciente gama de servicios, a través de sus funciones básicas y complementos, para visualizar, gestionar, editar, analizar datos y diseñar mapas imprimibles. 

QGIS es un _software_ libre y de código abierto, licenciado bajo una GNU (_General Public License_) y soportado como un proyecto de la _Open Source Geospatial Foundation_ (OSGeo). Por lo tanto, no requiere el pago de licencias. Adicionalmente, es impulsado por un grupo de voluntarios que mantienen el _software_ actualizado y las versiones estables, lo cual sostiene a QGIS como uno de los _software_ geográficos mas conocidos.


**Requerimientos** 

* Instalar QGIS (en esta guía se detallan las instrucciones básicas de instalación).

* Contar con un procesador de archivos de texto como Excel.

* Contar con un mínimo de 4GB de memoria RAM para el desarollo de esta guía. Sin embargo, para procesos con más de 20 000 registros biológicos, se recomienda tener por lo menos 8GB. 

* No abrir QGIS junto con otros programas que consuman muchos recursos del computador.

**Archivos de trabajo.**

* Descargue el archivo [<FONT FACE="monospace"><b>«datos_geografia.zip»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_geografia.zip) para realizar el laboratorio.

* Descargue la carpeta [<FONT FACE="monospace"><b>«ValidacionGeografica_SiB-QGIS»</b></FONT>](https://gitlab.com/sib-colombia/data-quality/-/raw/master/ValidacionGeografica_SiB-QGIS.zip?inline=false) con el proyecto de QGIS, el cual tiene todas las capas necesarias para ejecutar la validación.

--------

## Paso 1 - Instalación de QGIS

1. Diríjase al [enlace de descarga de QGIS](https://qgis.org/es/site/forusers/download.html), donde encontrará los instaladores para todos los sistemas operativos. 
2. Preferiblemente, descargue la versión disponible con **soporte a largo plazo (más estable)**, de acuerdo al sistema operativo de su ordenador. Si es usuario de _Windows_, seleccione la opción de descarga de 32 o 64 bits, según la versión de su sistema operativo. Para estar seguro de esto, abra el explorador de archivos, diríjase a <span class="tag is-warning is-light"><i>Este equipo</i></span>, haga clic derecho y seleccione la opción <span class="tag is-warning is-light"><i>Propiedades</i></span>. Luego, revise la sección _**"Tipo de sistema"**_.
3. Una vez que finalice la descarga, haga clic sobre el archivo para ejecutar el instalador del programa.
4. Siga los pasos de instalación en su ordenador.

<div class="notification is-info is-light">
  <b>Nota:</b> puede encontrar instrucciones más específicas de instalación en la <A HREF="https://qgis.org/es/site/forusers/alldownloads.html">página de descargas</A>, y en este <A HREF="https://www.youtube.com/watch?v=8dPRGiRUAV0">video tutorial</A>.
</div>

## Paso 2 - Descarga de datos

Descomprima el archivo <FONT FACE="monospace"><b>«datos_geografia.zip»</b></FONT> y extraiga la base de datos <FONT FACE="monospace"><b>«datos_geografia.csv»</b></FONT>. El formato para cargar archivos de texto en QGIS puede ser **.csv**  o **.txt** (separación por comas o tabulaciones).

<article class="message is-warning">
  <div class="message-header">
    <p>¡Precaución!</p>    
  </div>
  <div class="message-body">
    El archivo debe contar con un par de coordenadas que puedan ser interpretadas, permitiendo la visualización de los registros en una capa de mapa.
  </div>
</article>

## Paso 3 - Descarga del proyecto

El Equipo Coordinador del SiB Colombia (EC- SiB) ha elaborado un proyecto en QGIS con capas geográficas de referencia para la validación geográfica de los datos. Por consiguiente, descargue el [<FONT FACE="monospace"><b>«Proyecto de validación geográfica»</b></FONT>](https://gitlab.com/sib-colombia/data-quality/-/raw/master/ValidacionGeografica_SiB-QGIS.zip?inline=false) y guárdelo en una ubicación corta como **"Mis documentos"** o el **"Disco local (C:)"**.

Cuando finalice la descarga, ubique el archivo en su ordenador y descomprímalo. Dentro de la carpeta resultante, busque el archivo <FONT FACE="monospace"><b>«ValidacionGeoQGIS.qgs»</b></FONT> y ábralo con un doble clic o siguiendo la ruta <span class="tag is-warning is-light"><b><i>Clic derecho > Abrir con > QGIS 3.10</i></b></span>.


## Paso 4 - Exploración del proyecto

Al ejecutar QGIS, verá un entorno similar al siguiente (Fig. 1): 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig1_validQGIS_firstview.PNG" width=800>

<sup>_Figura 1. Entorno de trabajo en el proyecto de QGIS (v.3.10) de validación geográfica: A. Menú de herramientas, B. Panel de capas, C. Vista del mapa._</sup>

Contenido del proyecto en QGIS:

* **"MGN_DPTO_POlITICO"**: división departamental de Colombia de acuerdo al Marco Geoestadístico Nacional del DANE.
* **"MGN_MPIO_POLITICO"**: división municipal de Colombia de acuerdo al Marco Geoestadístico Nacional del DANE.
* **"MGN_MPIO_Buffer_530m"**: buffer de 530 metros generado al rededor de los límites municipales para identificar registros que se encuentran muy cerca del límite municipal.
* **Capas de interés**:
    * RUNAP_202007 (capa del Regitro Único Nacional de Áreas Protegidas).
    * RegionesMarítimas (división de las regiones marítimas de Colombia).
    * Planchas WGS84 (consulta de planchas en escala 1:100.000).
    * Veredas de Colombia_2017 (división veredal de Colombia).
    * *World_Countries* (capa de referencia general de países del mundo).
* **Mapas base**: 
    * _Google Maps_
    * OSM _Black and white_
    * _OpenStreetMap_

## Paso 5 - Carga de los datos 

**5.1. Añadir capa de texto delimitado**

Para cargar los datos descargados en el paso 2, diríjase al menú de QGIS y siga la ruta <span class="tag is-warning is-light"><b><i>Layer > Add Layer > Add Delimited Text Layer</i></b></span> (Fig. 2).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig2_validQGIS_addTextfile.PNG" width=600>

<sup>_Figura 2. Pasos para carga de archivos de texto delimitados en QGIS._</sup>


**5.2. Seleccione el archivo a validar**

En la ventana emergente, dé clic al botón con tres puntos <span class="tag is-warning is-light"><i>...</i></span> que se encuentra en la sección de _**"File name"**_ y ubique el archivo <FONT FACE="monospace"><b>«datos_geografia.csv»</b></FONT> que guardó en el paso 2 (Fig. 3A).

**5.3. Seleccione el tipo de archivo y delimitador de texto**

QGIS llenará los campos de la ventana emergente de manera automática. Sin embargo, verifique que el formato del archivo corresponda con el tipo de archivo y delimitador usado; en este caso, es **.csv** (Fig. 3B).

**5.4. Revise la codificación**

Observe si en la vista previa (Fig. 3F) los nombres de las entidades geográficas muestran problemas de codificación como símbolos de interrogación u otros reemplazando tildes y 'eñes'. Si hay problemas, ajuste la codificación en el desplegable de _**"Encoding"**_ (Fig. 3C). Teniendo en cuenta su sistema operativo, pruebe la opciones <span class="tag is-warning is-light"><i>System</i></span> (para Windows), <span class="tag is-warning is-light"><i>macintosh</i></span> (para Mac) o <span class="tag is-warning is-light"><i>UTF-8</i></span> (para cualquier sistema). Si identifica problemas de codificación en la vista previa, pruebe otro formato de codificación hasta asegurarse de que ha elegido el correcto. Esto es fundamental para evitar inconsistencias más adelante. (Fig. 3F).

**5.5. Seleccione las coordenadas decimales**

En _**"Geometry definitions"**_, seleccione <span class="tag is-warning is-light"><i>Point coordinates</i></span> y verifique que el _**"X field"**_ corresponda al elemento <span class="tag is-success is-light"><i>decimalLongitude</i></span> y el _**"Y field"**_ a la columna <span class="tag is-success is-light"><i>decimalLatitude</i></span> del archivo (Fig. 3D).

**5.6. Seleccione el sistema de referencia**

En el campo _**"Geometry CRS"**_, seleccione el sistema de referencia de coordenadas: <span class="tag is-warning is-light"><i>WGS84</i></span> (*World Geodetic System*). Si no selecciona el sistema, QGIS tomará por defecto el sistema usado en este proyecto (WGS84) (Fig. 3E). Para finalizar la carga del archivo, haga clic en <span class="tag is-warning is-light"><i>Add</i></span>.


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig3_validQGIS_addTextfileOptions.PNG" width=600>

<sup>_Figura 3. Pasos para cargar archivos de texto delimitado en QGIS: A. Ubicar el archivo de validación, B. formato del archivo tipo .csv, C. Selección de la codificación, D. Selección de campos de coordenadas, E. Selección del sistema de referencia, F. Vista previa de los datos a cargar._</sup>

<div class="notification is-info is-light">
  <b>Tip:</b> si realiza este ejercicio con su propio conjunto de datos (Paso 7), es importante que conozca el sistema de referencia o <i>datum</i>.
</div>

**5.7. Visualización de los datos**

Cuando haya cargado el archivo, una nube de puntos se desplegará en la ventana de visualización de QGIS (Fig. 4).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig4_validQGIS_nubepuntos.PNG" width=600>

<sup>_Figura 4. Visualización de los datos en QGIS._</sup>


## Paso 6. Validación geográfica

A continuación, procedará a validar la coherencia entre la ubicación de las coordenadas y la geografía superior. Para ello, realizará un cruce geográfico entre los datos y la capa de Municipios de Colombia (**"MGN_MPIO_POLITICO"**).

**6.1. Intersección de datos y capas**

En la barra de herramientas superior, siga la ruta <span class="tag is-warning is-light"><b><i>Vector > Data Management Tools > Join Attributes by Location</i></b></span> (Fig. 5) para realizar una intersección entre la capa de municipios y los datos.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig5_validQGIS_seleccJoin.PNG" width=600>

<sup>*Figura 5. Selección de la función <span class="tag is-warning is-light"><i>Join Attributes by Location</i></span> en el menú de herramientas.*</sup>

En el menú emergente configure la intersección de las capas así (Fig. 6):
- _**"Input Layer"**_ o _**"Base layer¨**_: seleccione la capa de puntos que contiene sus coordenadas. En este ejercicio, <span class="tag is-warning is-light"><i>datos_geografia</i></span>.
- _**"Overlay Layer"**_: seleccione la capa de municipios de Colombia (<span class="tag is-warning is-light"><i>MGN_MPIO_POLITICO</i></span>).
- _**"Join type"**_: seleccione la opción <span class="tag is-warning is-light"><i>Take Attributes of the first located Feature</i></span>. 

Por último, haga clic en <span class="tag is-warning is-light"><i>Run</i></span>.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig6_validQGIS_seleccJoin_options.PNG" width=600>

<sup>*Figura 6. Configuracuón de la intersección de las capas.* </sup>


**6.2. Exploración de los resultados**

Obtendrá una nueva capa llamada _**"Joined_layer"**_ con la intersección de los datos y la capa de municipios, revise que esta se encuentre en el panel de capas <span class="tag is-warning is-light"><i>Layers</i></span>. Posteriormente, dé clic derecho sobre la capa y elija la opción <span class="tag is-warning is-light"><i>Open Attribute Table</i></span> (Fig. 7) para abrir la tabla de atributos.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig7_validQGIS_AttribT.PNG" width=300>

<sup>*Figura 7. Acceder a la tabla de atributos de la capa resultante.* </sup>

En la tabla de atributos, encontrará los datos ingresados y unas columnas adicionales. Estas corresponden a nombres y códigos de los municipios y departamentos que la capa de municipios asignó a las coordenadas ingresadas en el cruce geográfico (Fig. 8).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig8_validQGIS_AttribDetalle.PNG" width=600>

<sup>*Figura 8. Detalle de la tabla de atributos de la capa resultante de la unión.* </sup>


**6.3. Validación de los municipios**

La calculadora de campos (<span class="tag is-warning is-light"><i>Field Calculator</i></span>) es útil para comparar los nombres sugeridos en el cruce geográfico con los que estaban documentados originalmente. Con este fin, ubíquese en la barra de herramientas de la tabla de atributos y dé clic en el icono del ábaco (Fig. 9 ).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig9_validQGIS_SelecCalculadora.PNG" width=600>

<sup>*Figura 9. Selección de la calculadora de campos desde el menú de herramientas de la tabla de atributos.*</sup>

* Una vez en la calculadora de campos (<span class="tag is-warning is-light"><i>Field Calculator</i></span>), asigne <span class="tag is-light"><b>countyValidation</b></span> como el nombre de la columna en  _**"Output field Name"**_(Fig. 10).

* En el cuadro de texto correspondiente a _**"Expression"**_, digite el siguiente comando: <span class="tag is-light"><b>if( "county"  =  "suggestedC" ,'1',if("county" is null, '','0'))</b></span>. Este comando condicional evalúa el elemento <span class="tag is-success is-light"><i>county</i></span> y lo compara con la columna de _**"suggestedC"**_. Cuando ambas columnas coinciden, se documenta un <span class="tag is-light"><b>1</b></span> en el elemento _**"countyValidation"**_. En cambio, si la geografía superior no coincide con la coordenada, las columnas mostrarán discrepancias y se asignará un <span class="tag is-light"><b>0</b></span> en _**"countyValidation"**_.

* Finalmente, haga clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig. 10). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig10_validQGIS_Calculadora.PNG" width=600>

<sup>*Figura 10. Documentación de la calculadora de campos para obtener un campo con la validación geográfica del municipio (<span class="tag is-light"><b>0</b></span>).*</sup>

Al final del procedimiento anterior, podrá verá la nueva columna, _**"countyValidation"**_, con el resultado de la validación geográfica en la tabla de atributos (Fig. 11).

**Interpretación de los resultados**

* <span class="tag is-light"><b>1</b></span>: el departamento o municipio documentado en <span class="tag is-success is-light"><i>stateProvince</i></span> o <span class="tag is-success is-light"><i>county</i></span> **coincide** con el departamento o municipio donde se ubica la coordenada.
* <span class="tag is-light"><b>0</b></span>: el departamento o municipio documentado en <span class="tag is-success is-light"><i>stateProvince_</i></span> o <span class="tag is-success is-light"><i>county</i></span> **no coincide** con el departamento o municipio donde se ubica la coordenada.
* <span class="tag is-light"><b>NULL o vacío</b></span>: los elementos <span class="tag is-success is-light"><i>stateProvince</i></span> y <span class="tag is-success is-light"><i>county</i></span> no fueron documentados, por lo que no se realizó la validación. Este resultado también se obtiene si las coordenadas caen fuera de los límites de Colombia.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig11_validQGIS_VlidCounty.PNG" width=600>

<sup>*Figura 11. Verificación de resultados de la creación del campo con la validación del municipio (<span class="tag is-success is-light"><i>county</i></span>).*</sup>

**6.4. Validación de los departamentos**

Repita el paso 6.3. para la validación del departamento. En este caso, escriba <span class="tag is-light"><b>stateProvinceValidation</b></span> como nombre de la columna de validación. Después, utilice el siguiente comando (Fig. 12): <span class="tag is-light"><b>if( "stateProvince"  =  "suggestedS" ,'1',if("stateProvince" is null, '','0'))</b></span>.
   
<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig12_validQGIS_CalculadoraSP.PNG" width=600>

<sup>*Figura 12. Documentación de la calculadora de campos para obtener una columna con la validación geográfica del departamento.*</sup>


**6.5. Visualización de la validación**

Genere un filtro para visualizar los datos cuyas coordenadas no coincidem con la geografía superior. Es decir, los que tienen <span class="tag is-light"><b>0</b></span> como resultado de la validación:

1. Abra nuevamente la tabla de atributos de la capa _**"Joined_layer"**_.
2. En la parte inferior de la tabla de atributos, siga la ruta  <span class="tag is-warning is-light"><b><i>Show all features > Field filter > countyValidation</i></b></span> (Fig. 13).

   <img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig13_validQGIS_SelectError.PNG" width=600>

   <sup>*Figura 13. Filtro de campos a partir de la tabla de atributos.*</sup>

3. Una vez que se abra un cuadro de diálogo en la parte inferior de la tabla de atributos, digite un cero (<span class="tag is-light"><b>0</b></span>) para filtrar los datos con inconsistencias (Fig. 14).

   <img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig14_validQGIS_Escriba0.PNG" width=600>

   <sup>*Figura 14. Filtro de campos a partir de la tabla de atributos.*</sup>

4. En la parte superior de la tabla de atributos, verá el número de registros biológicos filtrados. Para seleccionarlos, haga clic la esquina superior izquierda de la tabla, como se muestra en la Figura 15. 

   <img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig15_validQGIS_Select0s.PNG" width=600>

   <sup>*Figura 15. Selección y verificación de resultados del filtro a partir de resultados de la validación del campo countyValidation.*</sup>

5. Al minimizar la tabla de atributos, verá los puntos con inconsistencias (con valores de <span class="tag is-light"><b>0</b></span>) seleccionados en la pantalla de visualización del mapa (Fig. 16).

   <img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig16_validQGIS_VisualizacionPuntosErrores.PNG" width=600>

   <sup>_Figura 16. Visualización de los registros biológicos seleccionados (con valores de <span class="tag is-light"><b>0</b></span>) cuyas coordenadas no coinciden con el municipio documentado en el elemento <span class="tag is-success is-light"><i>county</i></span> (círculos blancos tachados con una "x")._</sup>

**6.6. Exporte el resultado de la validación**

Por último, guarde el archivo de validación en su equipo:

1. Dé clic derecho sobre la capa resultante y siga la ruta <span class="tag is-warning is-light"><b><i>Joined_layer > Export > Save feature as...</i></b></span> (Fig. 17).

   <img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig17_validQGIS_ExportExcel.PNG" width=400>

   <sup>*Figura 17. Opciones para exportar el resultado de la validación geográfica en formato Excel.*</sup>

2. En la ventana emergente, seleccione el formato <span class="tag is-warning is-light"><i>MS Office Open XML [XLSX]</i></span>. En _**"File name"**_, ubique la carpeta donde quiere guardar el resultado y haga clic en <span class="tag is-warning is-light"><i>OK</i></span> (Fig. 18).

   <img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig18_validQGIS_ExportExcel.PNG" width=400>

   <sup>*Figura 18. Documentación de ventana emergente para exportar resultados de la validación geográfica en formato Excel.*</sup>


3. Abra el archivo excel con el resultado de la validación. Después, aplique filtros en las columnas _**"countyValidation"**_ y _**"stateProvinceValidation"**_. 

   > **¿Puede identificar los errores?** 
   > Uno de los problemas de calidad presentes en el cojunto de datos de prueba -y que es muy común- son los errores de tipeo en los nombres del los departamentos y municipios. Por este motivo, aunque el municipio coincida con la ubicación de la coordenada, este proceso de validación puede detectar el error de tipeo en la documentación de los elementos <span class="tag is-success is-light"><i>stateProvince</i></span> y <span class="tag is-success is-light"><i>county</i></span>.
   > Por ejemplo, fíjese en el municipio **Abejorrral**.


Para los fines de este ejercicio, que está enfocado en validación, no es necesario corregir los errores identificados en la validación geográfica.


## Paso 7 - Verificación del resultado

Compare sus resultados con el siguiente archivo, estandarizado según los pasos de esta guía, con el archivo que trabajó en el laboratorio e identifique aciertos y oportunidades de mejora. **¿Qué diferencias encontró con sus resultados?**

* [<FONT FACE="monospace"><b>«Archivo validado»</b></FONT>](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/Solución_ValidacionQGIS.xlsx)


## Paso 8 - Datos propios

Si tiene datos propios y desea publicarlos, intente seguir los pasos de este laboratorio para validarlos geográficamente.


****
**¡Felicitaciones!** Ha mejorado la calidad de su conjunto de datos.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) permite usar, redistribuir y construir sobre estos contenidos libremente.

¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>

**Fuentes:**

* Departamento Administrativo Nacional de Estadística DANE (2018). Marco Geoestadístico Nacional, Escala: No definida. _Datum_: _MAGNA-SIRGAS), Recuperado de: [https://geoportal.dane.gov.co/servicios/descarga-y-metadatos/descarga-mgn-marco-geoestadistico-nacional/](https://geoportal.dane.gov.co/servicios/descarga-y-metadatos/descarga-mgn-marco-geoestadistico-nacional/)

* Parques Nacionales Naturales de Colombia (2020), Límite de los Parques Nacionales Naturales de Colombia, Multiescala (1:1.000 y 1:100.000). Datum: MAGNA-SIRGAS, Recuperado de: [http://mapas.parquesnacionales.gov.co/services/pnn/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pnn:runap2&maxFeatures=10000&outputFormat=SHAPE-ZIP](http://mapas.parquesnacionales.gov.co/services/pnn/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pnn:runap2&maxFeatures=10000&outputFormat=SHAPE-ZIP). Fecha, 2020-07-08.

* Departamento Administrativo Nacional de Estadística (DANE). Descarga Nivel de referencia de veredas. Recuperado de: (https://geoportal.dane.gov.co/servicios/descarga-y-metadatos/descarga-nivel-de-referencia-de-veredas/)[https://geoportal.dane.gov.co/servicios/descarga-y-metadatos/descarga-nivel-de-referencia-de-veredas/](https://geoportal.dane.gov.co/servicios/descarga-y-metadatos/descarga-nivel-de-referencia-de-veredas/), fecha de consulta: 2020-02-24.

* [Marco Geoestadístico Nacional - Guía de descarga y visualización](https://geoportal.dane.gov.co/descargas/metadatos/descarga_mgn/descargas/GuiaDescargaVisualiz_CO.pdf)
