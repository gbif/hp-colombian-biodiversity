---
layout: documentation
permalink: /formacion/laboratorios/ConversionCoordenadas
title: "Conversión Coordenadas"
description: "Objetivo: Convertir coordenadas geográficas en sistema de Grados, minutos, segundos (GMS) a grados decimales, de manera automática y masiva."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Conversión Coordenadas

**Objetivo**

Convertir coordenadas geográficas en sistema de Grados, minutos, segundos (GMS) a grados decimales, de manera automática y masiva.

**Sobre la herramienta**

La herramienta [_Coordinate conversion_](https://data.canadensys.net/tools/coordinates), desarrollada por [Canadensys](http://www.canadensys.net/) (nodo GBIF Canadá), permite convertir coordenadas geográficas (grados minutos segundos) de manera masiva y automática a grados decimales.

**Enlace**

_Coordinate conversion_: [https://data.canadensys.net/tools/coordinates](https://data.canadensys.net/tools/coordinates)

**Requerimientos** 

* Para realizar este ejercicio debe contar con un programa procesador de archivos de texto como Excel.

**Archivo de trabajo**

Descargue el archivo [```datos_canadensys.xlsx```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_canadensys.xlsx) para realizar el laboratorio

--------

## Paso 1 - Ingreso

Ingrese a la aplicación en línea [_Coordinate conversion_](https://data.canadensys.net/tools/coordinates). Revise cuidadosamente las opciones disponibles para ingresar las coordenadas.

>**Nota**: las coordenadas deben estar escritas en pares de coordenadas, un par por línea, opcionalmente precedidas por un identificador propio seguido por una tabulación o una barra vertical.
>
>Ejemplos de valores de entrada:
>
>45° 32' 25" N, 129° 40' 31" W
>1 | 45.5° N, 129.6° W
>2 | 40°26′47″N,74° 0' 21.5022"W

## Paso 2 - Estandarización coordenadas originales
Abra el archivo ```datos_canadensys.xlsx``` con el conjunto de datos de ejemplo. Ubique los elementos que describen la latitud y longitud originales, _```verbatimLatitude``` y ```verbatimLongitude```_. Verifique que el separador decimal ses  punto (.) y **no** coma (,) de lo contrario la herramienta no podrá convertir las coordenadas. 

Para cambiar el separador decimal en Excel, seleccione las columnas de ```verbatimLatitude``` y ```verbatimLongitude```, usando la herramienta de **Buscar y reemplazar (Ctrl+L)** realice el cambio de coma (,) a punto (.) (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_coordinateConversion.jpg" width=500>

*Figura 1. Reemplazo del separador decimal de coma (,) a punto (.)*

Adicionalmente asegurese de usar la notación adecuada de las coordenadas en *Grados, minutos y segundos*.

- **Grados**: usar símbolo de grado(°)
- **Minutos**: usar apostrofe sencillo (')
- **Segundos**: usar apostrofe doble (''). Si los segundos tiene decimales, recuerde que el separador decimal debe ser un punto (.) y no una (,)
- **Hemisferio**: Para la longitud usar Oeste (W) y Este (E), para la latitud usar Norte (N) y Sur (S).

## Paso 3 - Carga de las coordenadas

Copie del archivo Excel las celdas de los elementos  _```verbatimLatitude```_ y _```verbatimLongitude```_ (sin incluir el encabezado) y péguelos directamente en el cuadro de texto de la herramienta (Fig. 2.). 

```tip
Copie las coordenadas incluyendo los espacios en blanco.
```

Haga clic en el botón _```Submit```_ para procesar los datos (Fig. 2).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_coordinateConversion.jpg" width=800>

*Figura 2. Coordendas originales en sistema de Grados, minutos, segundos (GMS) ingresadas en la herramienta*

## Paso 4 - Resultados

Las coordenadas originales ingresadas apreceran  en la columna _```original```_ junto con dos nuevas columnas con las coordenadas geográficas decimales: _```decimalLatitude```_ y _```decimalLongitude```_. 



<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_coordinateConversion.JPG" width=600>

*Figura 3. Resultado de la conversión de coordenadas*


>**Nota**:  Si ingresa coordenadas que ya se encuentran en coordenadas decimales, Canadensys no cambiará la información original

## Paso 5 - Copiar resultados


**5.1. Configuración de la hoja de Excel de destino**

Añada una nueva Hoja de cálculo en el archivo Excel ```datos_canadensys.xlsx``` y nombrela **Coordenadas Canadensys**. Seleccione las 3 primeras columnas (A, B, C) y asígneles formato de texto (Fig. 4).

```tip
El cambio de formato a texto es necesario para que Excel no haga interpretaciones sobre las nuevas coordenadas afectando así la calidad de los datos. 
```

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_coordinateConversion.jpg" width=600>

*Figura 4. Configuración del formato de las columnas de Excel a texto*

**5.2. Copiar coordenadas a Excel**

Desde la herramienta de conversión de coordenadas seleccione y copie  toda la tabla de los resultados (Fig. 4).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_coordinateConversion.JPG" width=600>

*Figura 5. Selección del resultado de la conversión mostarndo coordenadas originales y decimales*

Pegue el resultado en la hoja de Excel que creó y configuró en el paso anterior, **usando clic derecho** y seleccionando la opción **Coincidir con formato de destino** (Fig. 5).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_coordinateConversion.jpg" width=500>

*Figura 6. Opción de pegado correcto en Excel para no alterarl el formato de las coordenadas decimales*

Ahora copie unicamente los valores de las columnas ```decimalLatitude``` y ```decimalLongitude``` seleccionando toda la columna B y C del Excel (Fig. 6).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_coordinateConversion.jpg" width=500>

*Figura 7. Copiado de las columnas de coordenadas decimales*

**5.3. Copiar coordenadas al conjunto de datos**

Pegue los valores copiados en la Hoja de excel con el conjunto de datos completo, dando clic derecho sobre la columna donde desea pegar los valores y  seleccionando la opción *Insertar  las celdas copiadas* (Fig. 7).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_coordinateConversion.jpg" width=500>

*Figura 8. Pasos para insertar las columnas copiadas*

Como resultado verá las columnas de las coordenadas decimales en formato texto incorporadas en la Hoja del conjunto de datos (Fig. 8).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.9_coordinateConversion.JPG" width=500>

*Figura 9. Conjunto de datos final con coordenadas decimales*

## Paso 6 - Datos propios

Si tiene datos propios que desee publicar, intente transformar las coordenadas a grados decimales siguiendo los pasos de este laboratorio.

### ¿Qué hago? mis coordenadas no son geográficas

**1. Verificar sistema de coordenadas y el datum**

Identifique en que sistema están las coordenadas (UTM, cartesiano), y si es un sistema de coordenadas planas, identifique el Datum y su origen  (Bogotá, MAGNA-SIRGAS origen Bogotá, Este central, Oeste, etc). 

Si no conce el sistema de coordenadas ni el Datum se requiere hacer **pruebas de ensayo y error** hasta determinar estos parámetros que finalmente permitirán transformar las coordenadas. Para hacer estas pruebas  utilice una calculadoras geodésica como:

* [Plexcape](http://ws.plexscape.com/Services/CoordSysWS/Pages/Transformations.aspx)
* [Sumapa](http://www.sumapa.com/)

**2. Transformación de coordenadas**

Una vez identificados el sistema de coordenadas y el datum utilice un software GIS como Quantum GIS o ArcGIS para transformarlas todas de manera simultánea. 


****
**¡Felicitaciones!** :raised_hands:
Terminó la conversión de coordenadas del conjunto de datos al formato frados decimales.



