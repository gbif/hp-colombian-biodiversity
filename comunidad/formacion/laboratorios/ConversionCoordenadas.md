---
layout: documentation
permalink: /formacion/laboratorios/ConversionCoordenadas
title: "Conversión Coordenadas"
description: "Convertir las coordenadas geográficas que están en sistema de Grados, minutos, segundos (GMS) a grados decimales, de manera automática y masiva."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Conversión Coordenadas

**Objetivo**

Convertir las coordenadas geográficas que están en sistema de grados, minutos, segundos (GMS) a grados decimales, de manera automática y masiva.

**Introducción**

Video introductorio de la herramienta, el cual da un contexto general sobre su uso. Si lo prefiere, puede seguir el paso a paso de la guía directamente.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ngOPiIOpwU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
**Sobre la herramienta**

La herramienta [_Coordinate conversion_](https://data.canadensys.net/tools/coordinates), desarrollada por [_Canadensys_](http://www.canadensys.net/) (nodo GBIF de Canadá), es una aplicación sencilla con una interfaz amigable que permite convertir coordenadas geográficas en sistema de grados minutos a grados decimales.

**Enlace**

_Coordinate conversion_: [https://data.canadensys.net/tools/coordinates](https://data.canadensys.net/tools/coordinates)

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Requerimientos** 

* Para realizar este ejercicio, es necesario contar con un programa procesador de archivos de texto como Excel.

**Archivo de trabajo**

Descargue el archivo [<FONT FACE="monospace"><b>«datos_canadensys.xlsx»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_canadensys.xlsx) para realizar el laboratorio

--------

## Paso 1 - Exploración de la herramienta

Ingrese a la aplicación en línea [_Coordinate conversion_](https://data.canadensys.net/tools/coordinates) y revise cuidadosamente las opciones disponibles para ingresar las coordenadas.

Las coordenadas deben estar escritas en pares de coordenadas, un par por línea. Opcionalmente, pueden estar precedidas por un identificador propio seguido por una tabulación o una barra vertical.

<b>Ejemplos de valores de entrada</b>:

* 45° 32' 25" N, 129° 40' 31" W
* 1 \| 45.5° N, 129.6° W
* 2 \| 40°26′47″N,74° 0' 21.5022"W


## Paso 2 - Estandarización coordenadas originales

Abra el archivo <FONT FACE="monospace"><b>«datos_canadensys.xlsx»</b></FONT>, el cual contiene el conjunto de datos de ejemplo. Luego, ubique los elementos que describen la latitud y longitud originales, <span class="tag is-success is-light"><i>verbatimLatitude</i></span> y <span class="tag is-success is-light"><i>verbatimLongitude</i></span>. Recuerde verificar que el separador decimal sea un punto (.) y **no** una coma (,). De lo contrario, la herramienta no podrá convertir las coordenadas. 

Para cambiar el separador decimal en Excel, seleccione las columnas de <span class="tag is-success is-light"><i>verbatimLatitude</i></span> y <span class="tag is-success is-light"><i>verbatimLongitude</i></span>. Posteriormente, use la herramienta  <span class="tag is-warning is-light"><i>Buscar y reemplazar</i></span> (Ctrl+L) para hacer el cambio de coma (,) a punto (.) (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_coordinateConversion.jpg" width=500>

<sub>*Figura 1. Reemplazo del separador decimal de coma (,) a punto (.).*</sub>

Adicionalmente, asegúrese de usar la notación adecuada de las coordenadas en grados, minutos y segundos.

- **Grados**: usar símbolo de grado (°).
- **Minutos**: usar apostrofe sencillo (').
- **Segundos**: usar apostrofe doble (''). Si los segundos tiene decimales, recuerde que el separador decimal debe ser un punto (.) y no una (,).
- **Hemisferio**: para la longitud, usar Oeste (W) y Este (E); para la latitud, usar Norte (N) y Sur (S).

## Paso 3 - Carga de las coordenadas

Copie las celdas de los elementos  <span class="tag is-success is-light"><i>verbatimLatitude</i></span> y <span class="tag is-success is-light"><i>verbatimLongitude</i></span> (sin incluir el encabezado) desde el archivo Excel y péguelos directamente en el cuadro de texto de la herramienta (Fig. 2). 

<div class="notification is-info is-light">
  <b>Tip:</b> cuando copie las coordenadas, incluya los espacios en blanco.
</div>

Haga clic en el botón <span class="tag is-warning is-light"><i>Submit</i></span> para procesar los datos (Fig. 2).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_coordinateConversion.jpg" width=800>

<sub>*Figura 2. Coordendas originales en sistema de grados, minutos, segundos (GMS) ingresadas en la herramienta.*</sub>

## Paso 4 - Resultados

Las coordenadas originales ingresadas aprecerán en la columna **"original"**, junto con dos nuevas columnas de las coordenadas geográficas decimales: <span class="tag is-success is-light"><i>decimalLatitude</i></span> y <span class="tag is-success is-light"><i>decimalLongitude</i></span> (Fig. 3). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_coordinateConversion.JPG" width=600>

<sub>*Figura 3. Resultado de la conversión de coordenadas.*</sub>

<div class="notification is-info is-light">
  <b>Nota:</b> si ingresa coordenadas que ya se encuentran en coordenadas decimales, <i>Canadensys</i> no cambiará la información original.
</div>

## Paso 5 - Copiar resultados


**5.1. Configuración de la hoja de Excel de destino**

Añada una nueva hoja de cálculo en el archivo Excel <FONT FACE="monospace"><b>«datos_canadensys.xlsx»</b></FONT> y nómbrela como <span class="tag is-light"><b>Coordenadas Canadensys</b></span>. Después, seleccione las tres primeras columnas (A, B, C) y asígneles el formato de texto (Fig. 4).

<div class="notification is-info is-light">
  <b>Nota:</b> el cambio de formato a texto es necesario para que Excel no haga interpretaciones sobre las nuevas coordenadas que puedan afectar la calidad de los datos. 
</div>

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_coordinateConversion.jpg" width=600>

<sub>*Figura 4. Configuración del formato de las columnas de Excel a texto.*</sub>

**5.2. Copiar coordenadas a Excel**

Desde la herramienta de conversión de coordenadas, seleccione y copie  toda la tabla de los resultados (Fig.5).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_coordinateConversion.JPG" width=600>

<sub>*Figura 5. Selección del resultado de la conversión mostarndo coordenadas originales y decimales.*</sub>

Haga clic derecho en la esquina superior izquierda de la hoja y seleccione la opción <span class="tag is-warning is-light">Coincidir con formato de destino</span> (Fig. 6) para pegar el resultado en la hoja de Excel que creó y configuró en el paso anterior. 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_coordinateConversion.jpg" width=500>

<sub>*Figura 6. Opción de pegado correcto en Excel para no alterar el formato de las coordenadas decimales.*</sub>

Posteriormente, seleccione las columnas <span class="tag is-success is-light"><i>decimalLatitude</i></span> y <span class="tag is-success is-light"><i>decimalLongitude</i></span> (B y C en el Excel) y copie el contenido (Fig. 7).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_coordinateConversion.jpg" width=500>

<sub>*Figura 7. Copiado de las columnas de coordenadas decimales.*</sub>

**5.3. Copiar coordenadas al conjunto de datos**

Pegue los valores copiados en la hoja de excel con el conjunto de datos completo. Para ello, haga clic derecho sobre la columna donde desea pegar los valores y seleccione la opción <span class="tag is-warning is-light"><i>Insertar  las celdas copiadas</i></span> (Fig. 8).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_coordinateConversion.jpg" width=500>

<sub>*Figura 8. Pasos para insertar las columnas copiadas.*</sub>

Al obtener los resultados, verá las columnas de las coordenadas decimales incorporadas en formato texto en la hoja del conjunto de datos (Fig. 9).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.9_coordinateConversion.JPG" width=500>

<sub>*Figura 9. Conjunto de datos final con coordenadas decimales.*</sub>

## Paso 6 - Verificación del resultado

Descargue y compare el siguiente archivo, estandarizado según los pasos de esta guía, con el archivo que trabajó en el laboratorio e identifique aciertos y oportunidades de mejora. ¿Qué diferencias encontró con sus resultados?

[<FONT FACE="monospace"><b>«Archivo validado»</b></FONT>](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/solucion_datos_canadensys_coordenadas.xlsx)


## Paso 7 - Datos propios

Si tiene datos propios y desea publicarlos, intente seguir los pasos de este laboratorio para convertir las coordenadas a grados decimales.

## Preguntas frecuentes sobre la conversión de coordenadas.

### ¿Qué hago si mis coordenadas no son geográficas?

 * **1. Verificar sistema de coordenadas y el _datum_**

Identifique en que sistema están las coordenadas (UTM, cartesiano) y si es un sistema de coordenadas planas, identifique el _datum_ y su origen (Ej. Bogotá, _MAGNA-SIRGAS_ origen Bogotá, Este central, Oeste, etc). 

Si no conoce el sistema de coordenadas ni el _datum_, se requiere hacer **pruebas de ensayo y error** hasta determinar estos parámetros, que finalmente permitirán transformar las coordenadas. Para hacer estas pruebas, utilice una calculadora geodésica como [Sumapa](http://www.sumapa.com/).


 * **2. Transformación de coordenadas**

Una vez identificados el sistema de coordenadas y el _datum_, utilice un software GIS como [_Quantum_ GIS](https://www.qgis.org/es/site/) o [ArcGIS](https://esri.co/arcgis/) para transformarlas todas de manera simultánea.


### ¿Cómo transformar el nuevo origen CTM12 a WGS84?

Las versiones de software SIG actuales aún no cuentan con el nuevo sistema de referencia espacial CTM 12 incorporado, por lo que es necesario crearlo antes de poder convertir nuestras coordenadas originales en el nuevo origen al sistema de referencia WGS84. A continuación, se comparten algunos recursos que explican cómo incorporar este sistema de referencia espacial para visualizar las coordenadas:

**QGIS**:
[Configurando la proyección CTM12 en QGIS](https://qgisusers.co/es/blog/configurando-la-proyeccion-ctm12-en-qgis/) 

**ArcGIS (ArcMap)**:
[Tutorial ARCGIS Cap.27-01 - Crear sistema de coordenadas proyectadas en ARCGIS](https://www.youtube.com/watch?v=jteR27jFlYg)

**ArcGIS Pro**:
[Crear origen nacional, CTM12, en ArcGis Pro](https://www.youtube.com/watch?v=ozg_DHkBXzE)

Una vez que se haya incorporado el nuevo sistema de coordenadas y los datos estén cargados, es posible convertirlos con las respectivas herramientas de proyección o exportación en QGIS o ArcGIS.


### Tome las coordenadas en otro sistema de referencia y necesito proyectarlas al nuevo sistema CTM12

Para ello, puede hacer la conversión a CTM12 por medio de una herramienta SIG o usar el [Servicio de conversión de coordenadas](https://origen.igac.gov.co/herramientas.html). Este último permite realizar conversiones individuales o masivas.

****
**¡Felicitaciones!** Terminó la conversión de coordenadas del conjunto de datos al formato frados decimales.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) permite usar, redistribuir y construir sobre estos contenidos libremente.

¡La difusión de estos laboratorios contribuirá a la publicación de más y mejores conjuntos de datos sobre biodiversidad!

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
