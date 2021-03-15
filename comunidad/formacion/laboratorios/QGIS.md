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

Visualizar y validar con la herramienta QGIS la coherencia de la ubicación de las coordenadas respecto a la geografía superior documentada en los datos.

**Sobre la herramienta**

:earth_americas:  [QGIS](https://qgis.org/es/site/about/index.html) es un software para manejo de información geográfica que se ejecuta sobre multiples sistemas operativos como Linux, Unix, Mac OSX, Windows y Android y soporta numerosos formatos y funcionalidades de datos vector, datos ráster y bases de datos. QGIS proporciona una creciente gama de capacidades a través de sus funciones básicas y complementos con los que podrá visualizar, gestionar, editar, analizar datos y diseñar mapas imprimibles. 

QGIS es un _software_ libre y de código abierto licenciado bajo GNU - 
General Public License, soportado como un proyecto de la Open Source Geospatial Foundation (OSGeo)por lo cuual no requiere el pago de licencias. Es impulsado por un grupo de voluntarios que mantienen el software actualizado y las versiones estables, lo que lo mantiene a la par de otros software geográficos mas conocidos.


**Requerimientos** 

* Instalar QGIS, aquí se detallan las instrucciones básicas de instalación.

* Contar con un programa procesador de archivos de texto como Excel.

* Para este ejercicio su computador debe contar con un mínimo de 4GB de memoría RAM, sin embargo para procesos con más de 20.000 registros se recomienda tener por lo menos 8GB. 

* Para un mejor rendimiento,  no habra junto a QGIS otros programas que consuman muchos recursos del computador.

**Archivos de trabajo.**

* Descargue el archivo [```datos_geografia.zip```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_geografia.zip) para realizar el laboratorio.

* Descargue la carpeta [```ValidacionGeografica_SiB-QGIS```](https://gitlab.com/sib-colombia/data-quality/-/raw/master/ValidacionGeografica_SiB-QGIS.zip?inline=false) con el proyecto de QGIS con todas las capas necesarias para realizar el laboratorio.

:warning: Estamos puliendo este laboratorio, la guía puede presentar cambios menores de formato y estilo para una mejor navegación y aprendizaje. 

--------

## Paso 1 - Instalación de QGIS

1. Diríjase al [enlace de descarga de QGIS](  https://qgis.org/es/site/forusers/download.html), acá encontrará los instaladores para todos los sistemas operativos. 
2. Descargue preferiblemente la versión disponible con soporte a largo plazo (más estable) de acuerdo al sistema operativo de su ordenador. A la fecha es la versión 3.10.
3. Una vez finalice la descarga, ejecute el archivo descargado, haciendo clic sobre el archivo.
4. Siga los pasos de instalación en su ordenador. Si es usuario de Windows seleccione la opción de descarga (32 bits o 64 bits) según su sistema operativo.

``` tip
Puede encontrar instrucciones más específicas de instalación en la [página de descargas](https://qgis.org/es/site/forusers/alldownloads.html). 

:film_projector: También puede consultar este [video tutorial] (https://www.youtube.com/watch?v=4lSee2ewWsY) 
```

## Paso 2 - Descarga de datos

Descargue el archivo comprimido [```datos_geografia.zip```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_geografia.zip), descomprímalo y extraiga el archivo ```datos_geografia.csv```. El formato para cargar archivos de texto en QGIS puede ser ```.csv```  o ```.txt``` (separado por comas o tabulaciones).

<!--- el archivo debe contar con un par de coordenadas que son interpretadas permitiendo la visualización de los registros en una vista de mapa -->


## Paso 3 - Descarga del proyecto

El EC- SiB ha elaborado un proyecto en QGIS con capas geográficas de referencia que le facilitarán realizar la validación geográfica de los datos. Descargue el [proyecto de validación geográfica](https://gitlab.com/sib-colombia/data-quality/-/raw/master/ValidacionGeografica_SiB-QGIS.zip?inline=false) de QGIS.

``` tip
- Guarde el proyecto de validación en una ubicación corta como ```Mis documentos``` o el ```Disco local (C:)```.

- Si usted es un usuario de GitLab puede clonar el repositorio.

```

Cuando finalice la descarga, ubique el archivo desargado en su ordenador, descomprima el archivo usando algun programa como WinZip, WinRar, 7zip o similares. Dentro de la carpeta resultante ubique el archivo ```ValidacionGeoQGIS.qgs``` y haga doble clic sobre este para abrirlo o haga clic derecho sobre el ```archivo > Abrir con> QGIS 3.10```.


## Paso 4 - Exploración del proyecto

Se ejecutará QGIS 3.10 y verá un entorno similar al siguiente (Fig. 1). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig1_validQGIS_firstview.PNG" width=800>

*Figura 1. Entorno de trabajo en el proyecto de QGIS de validación geográfica. A. Menú de herramientas; B. Panel de capas; C. Vista del mapa.*

Contenido del proyecto en QGIS:

* **MGN_DPTO_POlÍTICO**: división departamental de Colombia de acuerdo al Marco Geoestadístico Nacional del DANE.
* **MGN_MPIO_POLÍTICO**: división municipal de Colombia de acuerdo al Marco Geoestadístico Nacional del DANE.
* **MGN_MPIO_Buffer_530m**: buffer de 530 metros generado al rededor de los límites municipales para identificar registros que se encuentran muy cerca del límite municipal.
* **Capas de interés**
    * *RUNAP_202007*: capa del Regitro Único Nacional de Áreas Protegidas.
    * *RegionesMarítimas*: división de las regiones marítimas de Colombia.
    * *Planchas WGS84*: consulta de planchas en escala 1:100.000.
    * *Veredas de Colombia_2017*: división veredal de Colombia.
    * *World_Countries*: capa de referencia general de paises del mundo.
* **Mapas base**: 
    * Google Maps
    * OSM Black and white
    * OpenStreetMap

## Paso 5 - Carga de datos de validación en QGIS. 

**5.1. Añadir capa de texto delimitado**
Para cargar los datos de validación del paso 2 en QGIS, diríjase al menú y seleccione  ```Layer> Add Layer> Add Delimited Text Layer```. (Fig. 2)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig2_validQGIS_addTextfile.PNG" width=800>

*Figura 2. Pasos para carga de archivos de texto delimitados en QGIS.*


**5.2. Seleccione el archivo a validar**
En la ventana emergente, haga clic en *```File Name```* y ubique el archivo en formato .csv ```datos_geografía.csv``` que guardó en el paso 2. (Fig. 3A)

**5.3. Seleccione el tipo de archivo y delimitador de texto**
QGIS llenará los campos de la ventana emergente de manera automática, sin embargo verifique que el formato del archivo corresponda con el tipo de archivo y delimitador usado. En este caso es ```CSV```. (Fig. 3B).

**5.4. Revise la codificación.**
Observe si en la vista previa los nombres de las entidades geográficas muestran problemas de codificación como símbolos de interrogación u otros reemplazando tildes y 'eñes'. Si hay problemas de codificación ajuste en *```Encoding:```*(Fig. 3C), la codificación, use ```UTF-8```.

**5.5. Seleccione las coordenadas decimales**
En _```Geometry definitions ```_ seleccione _```Point coordinates```_ y verifique que _```X field```_ corresponde a _```decimalLongitude```_ y la _```X field```_ a _```decimalLatitude```_ del archivo.(Fig. 3D).

**5.6. Seleccione el sistema de referencia**
En el campo _```Geometry CRS```_ seleccionar el sistema de referencia de coordenadas: ```WGS84``` (*World Geodetic System*). Si no se selecciona el sistema, QGIS tomará por defecto el sistema usado en este proyecto (WGS84). (Fig. 3E). Para finalizar la carga del archivo haga clic en _```Add```_.


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig3_validQGIS_addTextfileOptions.PNG" width=800>

*Figura 3. Pasos para cargar archivos de texto delimitados en QGIS. A. Ubicar el archivo de validación. B. formato del archivo tipo .csv., C. Selección de la codificación. D. Selección de campos de coordenadas, E. Selección del sistema de referencia.* 

```tip
Si realiza este ejercicio con su propio set de datos (Paso 7) es importante que conozca el sistema de referencia o datum de sus datos.
```

**5.7. Verifique el resultado**
Una vez cargado el archivo una nube de puntos se desplegará en la ventana de visualización de QGIS. (Fig. 4) 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig4_validQGIS_nubepuntos.PNG" width=800>

*Figura 4. Visualización de los datos de validación en QGIS.* 


## Paso 6. Validación geográfica

Con estos pasos podemos validar la coherencia entre la ubicación de las coordenadas y la geografía superior, para ello realizaremos un cruce geográfico entre los datos  y la capa de Municipios de Colombia (```MGN_MPIO_POLITICO```).

**6.1. Intersección de datos y capas**

Ahora realiazará una intersección de la capa de municipios y los datos. Seleccione de la barra de herramientas superior de QGIS la opción *```Vectorial> Data Management Tools > Join Attributes by Location```* (Fig. 5).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig5_validQGIS_seleccJoin.PNG" width=800>

<sup>*Figura 5. Selección de la función Join Attributes by Location en el menú de herramientas.*</sup>

Dentro del menú emergente configure la intersección de las capas así (Fig. 6):
- *```Input Layer ```*: seleccione la capa de puntos que contiene sus coordenadas```datos_geografia```.
- *```Overlay Layer```*_ seleccione la capa de municipios de Colombia ```MGN_MPIO_POLITICO```.
- *```Join type```*: seleccione la opción *Take Attributes of the first located Feature* 

Haga clic en _```Run```_.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig6_validQGIS_seleccJoin_options.PNG" width=700>

<sup>*Figura 6. Configuracuón de la intersección de las capas.* </sup>


**6.2. Exploración de los resultados**

Una vez termine la ejecución obtendrá una nueva capa llamada _```Joined_layer```_ con la intersección de los datos y la capa de municipios, revise que esta se encuentre en el panel de capas _```Layers```_ . Proceda a abrir la tabla de atributos de esta capa haciendo clic derecho sobre la capa y elija la opción _```Open Attribute Table```_ (Fig. 7).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig7_validQGIS_AttribT.PNG" width=800>

<sup>*Figura 7. Acceder a la tabla de atributos de la capa resultante.* </sup>

Dentro de la tabla de atributos de esta capa encontrará los datos ingresados y unas nuevas columnas con los nombres y códigos del municipio y departamento de acuerdo a la ubicación de las coordenadas respecto a la capa de municipios (Fig. 8)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig8_validQGIS_AttribDetalle.PNG" width=600>

<sup>*Figura 8. Detalle de la Tabla de atributos de la capa resultante de la unión.* </sup>


**6.3. Validación del municipio.**

Para poder realizar una comparación entre los nombres sugeridos de la capa y los nombres documentados en los datos, abra la calculadora de campos dentro de la tabla de atributos digitando el comando (Ctrl + i) o haciendo clic en el icono en la barra de herramientas dentro de la tabla de atributos (Fig. 9 ).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig9_validQGIS_SelecCalculadora.PNG" width=600>

<sup>*Figura 9. Sellección de la calculadora de campos desde el menú de herramientas de la tabla de atributos.*</sup>


* Una vez en  _```Field calculator```_, en el campo _```Output field Name```_, nombre el archivo como: ```countyValidation```. (Fig. 10).

* En la caja de dialogo _```Expression```_ digite el siguiente comando: 

```
if( "county"  =  "suggestedC" ,'1',if("county" is null, '','0'))
```

Este comando revisa si el campo _county_ está vacío, si está vacío, el campo _countyValidation_ queda vacío, de no estarlo, revisa que sea igual que el campo _suggestedC_, si ambos campos son iguales lo documenta como ```1``` que significa que la geografía superior coincide con la coordenada, sino se documenta como ```0```. 

* Finalmente, de clic en _```OK```_ (Fig. 10). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig10_validQGIS_Calculadora.PNG" width=600>

<sup>*Figura 10. Documentación de la Calculadora de campos para obtener un campo con la validación geográfica del municipio (county).*</sup>

En la tabla de atributos verá una nueva columna _contyValidation_, con el resultado de la validación geográfica (Fig. 11).

**Interpretación de resultados**

* **1**: El departamento o municipio documentados en _stateProvince_ y _county_ **coinciden** con el departamento y municipio donde se ubica la coordenada.
* **0**: El departamento o municipio documentados en _stateProvince_ y _county_ **NO coinciden** con el departamento y municipio donde se ubica la coordenada.
* **NULL o vacío**: NO había un _stateProvince_ o _county_ documentados por lo tanto no se realizó la validación.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig11_validQGIS_VlidCounty.PNG" width=600>

<sup>*Figura 11. Verificación de resultados de la creación del campo con la validación del municipio (county).*</sup>

**6.4. Validación del Departamento**

Repita el paso 6.3. para la validación del Departamento. Cree un nuevo campo para esta validación denominado _```stateProvinceValidation```_, para la validación del departamento deberá usar el siguiente comando (Fig. 12).

```
if( "stateProvince"  =  "suggestedS" ,'1',if("stateProvince" is null, '','0'))
```
<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig12_validQGIS_CalculadoraSP.PNG" width=600>

<sup>*Figura 12. Documentación de la Calculadora de campos para obtener un campo con la validación geográfica del departamento .*</sup>


**6.5. Visualización de la validación.**

A continuación va a generar un filtro para visualizar los datos que no coinciden (```0's```) entre la ubicación y la geografía superior.

1. Abra nuevamente la tabla de atributos de la capa _```Joined_layer```_
2. En la parte inferior de la tabla de atributos haga clic en el botón _```Show all features```>```Field filter```>```countyValidation```_ (Fig. 13).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig13_validQGIS_SelectError.PNG" width=600>

<sup>*Figura 13. Filtro de campos a partir de la tabla de atributos.*</sup>

3. Se abrirá un cuadro de diálogo en la parte inferior de la tabla de atributos donde digitalizará un cero (```0```) para filtrar los datos inconsistentes (Fig. 14).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig14_validQGIS_Escriba0.PNG" width=600>

<sup>*Figura 14. Filtro de campos a partir de la tabla de atributos.*</sup>

4. Como resultado verá en la parte superior de la tabla de atributos el número de registros filtrados. Seleccione la esquina superior izquierda de los datos como se muestra en la Fig. 15. 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig15_validQGIS_Select0s.PNG" width=800>

<sup>*Figura 15. Seleccion y verificación de resultados del filtro a partir de resultados de la validación del campo countyValidation.*</sup>

5. Minimice la tabla de atributos, verá los puntos con inconsistencias (```0's```) seleccionados en la pantalla de visualización del mapa (Fig. 16).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig16_validQGIS_VisualizacionPuntosErrores.PNG" width=800>

*<sup>Figura 16. Visualización de registros seleccionados por no coincidir (0's) su ubicación con el municipio documentado en el elemento county (resaltados en amarillo)*</sup>

**6.6. Exporte el resultado de la validación.**

Por último guarde el archivo de validación en formato de texto (Excel) en su equipo. Para ello haga lo siguiente:

1. Clic derecho sobre la capa resultante y siga la ruta _```Joined_layer > Export > Save feature as```_ (Fig. 17).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig17_validQGIS_ExportExcel.PNG" width=600>

<sup>*Figura 17. Opciones para exportar el resultado de la validación geográfica en formato Excel.*</sup>

2. En la ventana emergente seleccione el formato _```MS Office Open XML [XLSX]```_ . En _```File name```_ ubique la carpeta donde quiere guardar el resultado y luego haga clic en _```Ok```_ (Fig. 18.)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig18_validQGIS_ExportExcel.PNG" width=600>

<sup>*Figura 18. Documentación de ventana emergente para exportar resultados de la validación geográfica en formato Excel.*</sup>


3. Abra el archivo excel con el resultado de la validación, aplique filtros en las columnas _```countyValidation```_ y _```stateProvinceValidation```_. 

> :thinking: **¿Puede identificar los errores?** Tenga en cuenta que uno de los errores presentes en el cojunto de datos de prueba, y que es muy común en este tipo de validaciones, son los errores de tipeo en los nombres del municipios  como *Abejorrral*, por este motivo aunque su municipio coincida con la ubicación puede detectar con esta validación, errores en la documentación del elemento *stateProvince* y *county*.


> Esta guía es de validación, para los fines de este ejercicio no es necesario corregir los errores identificados en la validación geográfica.


## Paso 7 - Datos propios

Si tiene datos propios, pruebe validarlos siguiendo los pasos de este laboratorio.


****
**¡Felicitaciones!** :raised_hands:
Ha mejorado la calidad de su conjunto de datos 

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> SiB Colombia (2020). Laboratorios de datos, Ciclo de formación virtual. Consultado a través del SiB Colombia. Disponible en https://sib-colombia.github.io/Formacion/

****

****
**Fuentes:**

* Departamento Administrativo Nacional de Estadística DANE (2018), Marco Geoestadístico Nacional, Escala: No definida. Datum: MAGNA-SIRGAS), Recuperado de: https://geoportal.dane.gov.co/servicios/descarga-y-metadatos/descarga-mgn-marco-geoestadistico-nacional/

* Parques Nacionales Naturales de Colombia (2020), Límite de los Parques Nacionales Naturales de Colombia, Multiescala (1:1.000 y 1:100.000). Datum: MAGNA-SIRGAS, Recuperado de: http://mapas.parquesnacionales.gov.co/services/pnn/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pnn:runap2&maxFeatures=10000&outputFormat=SHAPE-ZIP. Fecha. 2020-07-08.

* Departamento Administrativo Nacional de Estadística (DANE). Descarga Nivel de referencia de veredas. Recuperado de:https://geoportal.dane.gov.co/servicios/descarga-y-metadatos/descarga-nivel-de-referencia-de-veredas/, fecha de consulta: 2020-02-24.

* [Marco Geoestadístico Nacional - Guía de descarga y visualización](https://geoportal.dane.gov.co/descargas/metadatos/descarga_mgn/descargas/GuiaDescargaVisualiz_CO.pdf)

--------
