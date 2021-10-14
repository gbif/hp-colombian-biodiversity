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
<input onclick="window.location='#mostrar1';" type="button" value="Mostrar"/>
<input onclick="window.location='#';" type="button" value="Ocultar" />
<div id="spoiler1">
<div id="mostrar1">
Convertir las coordenadas geográficas que están en sistema de Grados, minutos, segundos (GMS) a grados decimales, de manera automática y masiva.
</div>
</div>
<style>
#spoiler1 > div {display: none;}
#spoiler1 > div:target {display: block;}
</style>

Convertir las coordenadas geográficas que están en sistema de Grados, minutos, segundos (GMS) a grados decimales, de manera automática y masiva.

**Introducción**

Video introductorio de la herramienta, el cual da un contexto general sobre su uso. Si lo prefiere, puede seguir el paso a paso de la guía directamente.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ngOPiIOpwU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Sobre la herramienta**

La herramienta [_Coordinate conversion_](https://data.canadensys.net/tools/coordinates), desarrollada por [Canadensys](http://www.canadensys.net/) (nodo GBIF Canadá), es una aplicación sencilla con una interfaz amigable que permite convertir coordenadas geográficas en sistema de grados minutos a grados decimales.

**Enlace**

_Coordinate conversion_: [https://data.canadensys.net/tools/coordinates](https://data.canadensys.net/tools/coordinates)

**Requerimientos** 

* Para realizar este ejercicio debe contar con un programa procesador de archivos de texto como Excel.

**Archivo de trabajo**

Descargue el archivo [```datos_canadensys.xlsx```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_canadensys.xlsx) para realizar el laboratorio

--------

## Paso 1 - Exploración de la herramienta

Ingrese a la aplicación en línea [_Coordinate conversion_](https://data.canadensys.net/tools/coordinates) y revise cuidadosamente las opciones disponibles para ingresar las coordenadas.

Las coordenadas deben estar escritas en pares de coordenadas, un par por línea. Opcionalmente pueden estar precedidas por un identificador propio seguido por una tabulación o una barra vertical.

```
Ejemplos de valores de entrada:


45° 32' 25" N, 129° 40' 31" W
1 | 45.5° N, 129.6° W
2 | 40°26′47″N,74° 0' 21.5022"W
```

## Paso 2 - Estandarización coordenadas originales
Abra el archivo ```datos_canadensys.xlsx``` con el conjunto de datos de ejemplo. Ubique los elementos que describen la latitud y longitud originales, _```verbatimLatitude```_ y _```verbatimLongitude```_. Verifique que el separador decimal es un punto (.) y **no** una coma (,) de lo contrario la herramienta no podrá convertir las coordenadas. 

Para cambiar el separador decimal en Excel, seleccione las columnas de ```verbatimLatitude``` y ```verbatimLongitude```, usando la herramienta de **Buscar y reemplazar (Ctrl+L)** realice el cambio de coma (,) a punto (.) (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_coordinateConversion.jpg" width=500>

<sub>*Figura 1. Reemplazo del separador decimal de coma (,) a punto (.).*</sub>

Adicionalmente asegurese de usar la notación adecuada de las coordenadas en *Grados, minutos y segundos*.

- **Grados**: usar símbolo de grado (°).
- **Minutos**: usar apostrofe sencillo (').
- **Segundos**: usar apostrofe doble (''). Si los segundos tiene decimales, recuerde que el separador decimal debe ser un punto (.) y no una (,).
- **Hemisferio**: Para la longitud usar Oeste (W) y Este (E), para la latitud usar Norte (N) y Sur (S).

## Paso 3 - Carga de las coordenadas

Copie desde el archivo Excel las celdas de los elementos  _```verbatimLatitude```_ y _```verbatimLongitude```_ (sin incluir el encabezado) y péguelos directamente en el cuadro de texto de la herramienta (Fig. 2). 

```tip
Copie las coordenadas incluyendo los espacios en blanco.
```

Haga clic en el botón _```Submit```_ para procesar los datos (Fig. 2).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_coordinateConversion.jpg" width=800>

<sub>*Figura 2. Coordendas originales en sistema de Grados, minutos, segundos (GMS) ingresadas en la herramienta.*</sub>

## Paso 4 - Resultados

Las coordenadas originales ingresadas apreceran  en la columna _```original```_ junto con dos nuevas columnas de las coordenadas geográficas decimales: _```decimalLatitude```_ y _```decimalLongitude```_ (Fig. 3). 

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_coordinateConversion.JPG" width=600>

<sub>*Figura 3. Resultado de la conversión de coordenadas.*</sub>

>**Nota**:  Si ingresa coordenadas que ya se encuentran en coordenadas decimales, Canadensys no cambiará la información original.

## Paso 5 - Copiar resultados


**5.1. Configuración de la hoja de Excel de destino**

Añada una nueva Hoja de cálculo en el archivo Excel ```datos_canadensys.xlsx``` y nombrela **Coordenadas Canadensys**. Seleccione las 3 primeras columnas (A, B, C) y asígneles formato de texto (Fig. 4).

```tip
El cambio de formato a texto es necesario para que Excel no haga interpretaciones sobre las nuevas coordenadas que puedan afectar la calidad de los datos. 
```

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_coordinateConversion.jpg" width=600>

<sub>*Figura 4. Configuración del formato de las columnas de Excel a texto.*</sub>

**5.2. Copiar coordenadas a Excel**

Desde la herramienta de conversión de coordenadas seleccione y copie  toda la tabla de los resultados (Fig.5).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_coordinateConversion.JPG" width=600>

<sub>*Figura 5. Selección del resultado de la conversión mostarndo coordenadas originales y decimales.*</sub>

Pegue el resultado en la hoja de Excel que creó y configuró en el paso anterior, **usando clic derecho** y seleccionando la opción **Coincidir con formato de destino** (Fig. 6).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_coordinateConversion.jpg" width=500>

<sub>*Figura 6. Opción de pegado correcto en Excel para no alterarl el formato de las coordenadas decimales.*</sub>

Ahora copie unicamente los valores de las columnas ```decimalLatitude``` y ```decimalLongitude``` seleccionando toda la columna B y C del Excel (Fig. 7).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_coordinateConversion.jpg" width=500>

<sub>*Figura 7. Copiado de las columnas de coordenadas decimales.*</sub>

**5.3. Copiar coordenadas al conjunto de datos**

Pegue los valores copiados en la Hoja de excel con el conjunto de datos completo, dando clic derecho sobre la columna donde desea pegar los valores y  seleccionando la opción *Insertar  las celdas copiadas* (Fig. 8).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_coordinateConversion.jpg" width=500>

<sub>*Figura 8. Pasos para insertar las columnas copiadas.*</sub>

Como resultado verá las columnas de las coordenadas decimales en **formato texto** incorporadas en la Hoja del conjunto de datos (Fig. 9).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.9_coordinateConversion.JPG" width=500>

<sub>*Figura 9. Conjunto de datos final con coordenadas decimales.*</sub>

## Paso 6 - Verificación del resultado

Compare sus resultados con el siguiente archivo validado según los pasos de la guía, verifique en que acertó y que puede mejorar. 

¿Qué diferencias encontró con sus resultados?

[Descargue el archivo validado](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/solucion_datos_canadensys_coordenadas.xlsx)


## Paso 7 - Datos propios

Si tiene datos propios que desee publicar, intente transformar las coordenadas a grados decimales siguiendo los pasos de este laboratorio.

## Preguntas frecuentes sobre la conversión de coordenadas.

### ¿Qué hago si mis coordenadas no son geográficas?

 * 1. Verificar sistema de coordenadas y el datum**

Identifique en que sistema están las coordenadas (UTM, cartesiano) y si es un sistema de coordenadas planas, identifique el Datum y su origen (Bogotá, MAGNA-SIRGAS origen Bogotá, Este central, Oeste, etc). 

Si no conoce el sistema de coordenadas ni el Datum, se requiere hacer **pruebas de ensayo y error** hasta determinar estos parámetros que finalmente permitirán transformar las coordenadas. Para hacer estas pruebas, utilice una calculadora geodésica como [Sumapa](http://www.sumapa.com/).


 * 2. Transformación de coordenadas**

Una vez identificados el sistema de coordenadas y el datum, utilice un software GIS como [Quantum GIS](https://www.qgis.org/es/site/) o [ArcGIS](https://esri.co/arcgis/) para transformarlas todas de manera simultánea.


### ¿Cómo transformar el nuevo origen CTM12 a WGS84?

Las versiones de software SIG actuales no cuentan aún con el nuevo sistema de referencia espacial CTM 12 incorporado, por lo cuál es necesario crearlo antes de poder convertir nuestras coordenadas originales en el nuevo origen al Sistema de referencia WGS84. A continuación se comparten algunos recursos que explican como incorporar este sistema de referencia espacial para que puedan visualizar las coordenadas en este nuevo sistema. 

**QGIS**
[Configurando la proyección CTM12 en QGIS](https://qgisusers.co/es/blog/configurando-la-proyeccion-ctm12-en-qgis/) 

**ArcGIS (ArcMap)**
[Tutorial ARCGIS Cap.27-01 - Crear Sistema de Coordenadas Proyectadas en ARCGIS](https://www.youtube.com/watch?v=jteR27jFlYg)

**ArcGIS Pro**
[Crear Origen Nacional, CTM12, en ArcGis Pro](https://www.youtube.com/watch?v=ozg_DHkBXzE)

Una vez hayan incorporado el nuevo sistema de coordenadas y hayan cargado sus datos, pueden convertirlos usando las respectivas herramientas de proyección o exportación en QGIS o ArcGIS.


### Tome las coordenadas en otro sistema de referencia y necesito proyectarlas al nuevo sistema CTM12

Para ello puede hacer una conversión a CTM12 haciendo uso de una herramienta SIG o usar el [Servicio de conversión de coordenadas](https://origen.igac.gov.co/herramientas.html) con el cuál puede realizar la conversión de una sola coordenada o conversiones masivas.



****
**¡Felicitaciones!** :raised_hands:
Terminó la conversión de coordenadas del conjunto de datos al formato frados decimales.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
