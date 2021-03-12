---
layout: documentation
permalink: /formacion/laboratorios/DataValidator
title: "Validador de datos - GBIF"
description: "Objetivo: Detectar posibles problemas en  la estructura y contenido de su conjunto de datos, y mejorar la calidad de los mismos para ser publicados a través del SiB Colombia, GBIF y/o OBIS."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Validador de datos - GBIF


**Objetivo**

Detectar posibles problemas en  la estructura y contenido de su conjunto de datos, y mejorar la calidad de los mismos para ser publicados a través del SiB Colombia, GBIF y/o OBIS.

**Sobre la Herramienta**

El [validador de datos](https://www.gbif.org/es/tools/data-validator/) es un servicio de [GBIF](https://www.gbif.org) que permite evaluar de manera automática la completitud y algunos aspectos de la calidad de un conjunto de datos estructurado en el estándar [*Darwin Core (DwC)*](https://dwc.tdwg.org/terms/), el validador genera un informe sobre la sintaxis y la calidad de los datos que le permitirá detectar posibles problemas en sus datos antes de publicarlos. Si se valida un [*DwC-A*](https://www.gbif.org/darwin-core) el validador también evalua la completitud y estructura de los metadatos en el estándar [EML](https://www.gbif.org/sites/default/files/gbif_resource/resource-80640/gbif_metadata_profile_guide_en_v1.pdf).

**Enlace**

*Data validator*: [https://www.gbif.org/es/tools/data-validator/](https://www.gbif.org/es/tools/data-validator/)

**Requerimientos** 
* La primera fila del conjunto de datos a validar debe tener el nombre de los elementos *DwC* en inglés.

* El conjunto de datos debe tener la columna del ID de tipo de datos que corresponda, *```occurenceID ```*(registros biológicos), *```eventID```* (eventos de muestreo)o *```taxonID```* (listas de especies). La columna debe estar documentada para todas las filas y los ID's deben ser únicos.

* El validador admite archivos con los siguientes formatos:
  * Formato Excel (.xls,.xlsx)
  * Formato CSV.
  * Archivos Darwin Core comprimidos (DwC-A)

**Archivo de trabajo**
Descargue el archivo [```datos_Estructurados.xls```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_docs/datos_Estructurados.xlsx) para realizar el laboratorio

----


## Paso 1 - Ingreso a GBIF 

Cree una cuenta de usuario en [GBIF](https://www.gbif.org) o, si ya está registrado, ingrese con sus credenciales al [validador de datos.](https://www.gbif.org/es/tools/data-validator/) (Fig. 1).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig.1_dataValidator.png" width=800>

<sup>*Figura 1. Ingreso/registro en la página de GBIF*</sup>

## Paso 2 - Cargar el archivo
Cargue el archivo ```datos_Estructurados.xls```  al validador; (1) haciendo clic en SELECCIONAR UN ARCHIVO o (2) arrastrando el archivo desde una carpeta a el ícono SOLTAR AQUÍ. 

```warning
Es indispensable que el elemento *occurrenceID* este documentado para que el _DataValidator_ reconozca el archivo.
```


El validador le indicará si el conjunto de datos tiene la estructura adecuada para ser publicado a través del SiB Colombia, GBIF y OBIS, o si es necesario realizar ajustes. El informe de validación contiene la siguiente información:

**2.1. Resumen**
* Un indicador semaforizado (rojo y verde) que indica si puede el conjunto de datos puede ser indexado (Fig. 2 A).
* Resumen del tipo de conjunto de datos (Fig. 2 B).
* Alertas de validación que indican **potenciales** problemas en la estructuración y calidad del conjunto de datos (Fig. 2 C).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig2_datavalid_Informe.PNG" width=800>

<sup>*Figura 2. Componentes del informe - Resumen de validación del conjunto de datos*</sup>

**2.2. Frecuencia del término**
* Número de registros (filas) interpretados con éxito (Fig. 3 A).
* Reporte del porcentaje de documentación de cada uno de los elementos del estándar *DwC* utilizados en el conjunto de datos (Fig. 3 B).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig3_datavalid_Informe_frecuencia.PNG" width=700>

<sup>*Figura 3. Componentes del informe - Frecuencia del término*</sup>

**2.3. Problemas de validación**

* Reporte detallado de los problemas encontrados en el conjunto de datos por elemento DwC.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig4_datavalid_Informe_problemas.png" width=700>

<sup>*Figura 4. Componentes del informe - Problemas de validación.*</sup>


## Paso 3 - Validación

### 3.1. Resultado general de la validación 

Revise el encabezado del reporte, si aparece en rojo significa que no puede ser indexado (Fig. 5A), si aparece en verde significa que si lo puede indexar (Fig. 5B).


<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig5_datavalid_semaforo.PNG" width=600>

<sup>*Figura 5. Posibles resultados de la validación. A. VERDE, el conjunto de datos puede ser indexado. B. ROJO, no puede indexarse.*</sup>

>:thinking: ¿Su conjunto de datos puede ser indexado?

Los casos más frecuentes por los cuales un archivo no puede ser indexado son:

**Mensaje:** Registro no identificado de forma única, indica que los ID's documentados en el elemento DwC  *occurrenceID* (*taxonID, eventID*, según el tipo de datos) no son únicos.

**Mensaje:** No se encontró o determinó un *rowType*, indica que algunas de las columnas obligatorias para realizar la validación no se encuentran en el conjunto de datos, por ejemplo occurrenceID, taxonID, o eventID, según el tipo de datos. 

### 3.2. Ajuste elementos críticos

Si el conjunto no puede ser indexado revise el mensaje de alerta de la herramienta (Fig. 6). Realice los ajustes necesarios y vuelva a correr la validación, en esta ocasión el validador le debe indicar que el conjunto de datos se puede indexar.

> :rotating_light: En la sección Problemas de validación encontrará los ID’s que están duplicados.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig6_datavalid_detalleerror.PNG" width=800>

*Figura 6. Mensaje de alerta - Estructura del recurso. Al hacer clic en las alertas podrá ver el detalle de los registros que presentan el error y que debe ajustar. Al hacer clic en el ícono de información tendrá mas detalle acerca del problema*

### 3.3. Problemas de validación

Diríjase a la sección **Problemas de validación**. Allí encontrá varias alertas, para cada una el validador indica el número de registros a revisar. 

Haga clic sobre las flechas de cada una de las alertas para obtener un desglose de los registros que deben ser revisados y/o ajustados. Para interpretar las alertas de validación utilice el botón de ayuda, y obtendrá una breve explicación. (Fig. 7).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_images/Fig7_datavalid_detalleerror_2.png" width=1000>

*Figura 7. Mensaje de alerta - Interpretación de registro de GBIF. Al hacer clic en las alertas podrá ver el detalle de los registros que presentan el error y que debe ajustar. Al hacer clic en el ícono de información tendrá mas detalle acerca del problema*


**:vertical_traffic_light: Las alertas se agrupan en 3 categorías según su color:**


* Alertas de color **ROJO** - Indican un error estructura que no permite la indexación del recurso y debe ser corregido.

* Alertas de color **AMARILLO** - Indican potenciales errores, deben ser revisadas con detalle para determinar si se debe o no hacer una corrección en los datos.

* Alertas de color **GRIS** - Indican el proceso de interpretación realizado por el validador, no necesariamente requiere que se realicen ajustes en los datos.

### 3.4. Revisión de alertas

Revise todas las alertas de validación y ajuste los datos de acuerdo a estas (Fig. 7).

**A continuación se explican las alertas más frecuentes**, como interpretarlas y solucionarlas:

**:warning: Alerta**: Base del registro inválida

**Problema**: la base del registro  (*basisOfRecord*) no cumple con los requerimientos del estándar.

**Solución 1**: revise que todos los registros (filas) tengan este elemento documentado.

**Solución 2**: documente el elemento siguiendo el vocabulario controlado en inglés, *```HumanObservation, PreservedSpecimen, LivingSpecimen, MachineObservation, MaterialSample FossilSpecimen.```*


**:warning: Alerta**: *Coordenada inválida*

**Problema**: coordenadas inválidas, las coordenadas documentadas no se encuentran estandarizadas en coordenadas decimales y/o las coordenadas originales no se pueden interpretar.

**Solución**: asegúrese que los elementos darwin core *decimalLatitude*, *decimalLatitude*  estén documentados con las coordenadas en formato decimal y/o que las coordenadas originales *verbatimCoordinates* hayan sido digitalizadas adecuadamente. 


**:warning: Alerta**: Se presume latitud negativa

**Problema**: posible error en la latitud, se documentó como latitud sur pero posiblemente corresponda a  latitud norte (en coordenadas decimales se indica con un signo menos antes de la latitud).

**Solución**: asegúrese que los elementos darwin core *decimalLatitude*, *decimalLatitude*  estén documentados con las coordenadas en formato decimal y/o que las coordenadas originales *verbatimCoordinates*, *verbatimLatitud*, *verbatimLongitude* hayan sido digitalizadas adecuadamente. 

También puede obtener el mensaje *Se presume longitud negativa*, pero es menos común para los datos de Colombia, y posiblenete corresponda a un problema de digitalización.

**:warning: Alerta**: Coincidencia Taxón - Taxonomía superior

**Problema**: el nombre científico fue validado a un nivel taxonómico superior al documentado, por ejemplo si el nombre científico corresponde a una especie (género + epíteto específico) significa que el validador solo pudo interpretar el género más no el epíteto específico.

**Solución 1.**: revise que el nombre científico no contenga calificadores de la identificación  (cf., aff.) u otros calificadores como *sp.* 
**Solución 2.**: que el nombre científico esté escrito correctamente.


> Es posible que algunos nombres válidos y correctamente escritos sean marcados con esta alerta si es que estos no se encuentran en el árbol taxonómico de GBIF. Esto es común en el caso de especíes endémicas o recientemente descritas. En tal caso ignore la alerta.


**:warning: Alerta**: Coincidencia aproximada del taxón

**Problema**: hay una coincidencia parcial del nombre cíentífico y el [árbol taxonómico de GBIF](https://www.gbif.org/dataset/d7dddbf4-2cf0-4f39-9b2a-bb099caae36c), por lo general esta alerta se genera cuando hay errores de tipeo menores en el nombre científico.

**Solución**: asegúrese que el nombre científico esté escrito correctamente.


**:warning: Alerta**: Fecha registrada inválida

**Problema**: el formato de la fecha no cumple con el formato ISO 8601: ```AAAA-MM-DD; AAAA-MM; AAAA; AAAA-MM-DD/AAAA-MM-DD```

**Solución**: estandarice las fechas al formato ISO 8601


**:warning: Alerta**: Datum geodésico WGS84 asumido

**Problema**: el datum geodésico no fue documentado, pero el validador lo identificó como WGS84.

**Solución 1**: documentar el elemento DwC  ```geodeticDatum``` como WGS84.

**Solución 2**: si las coordenadas tienen un datum diferente a WGS84 documentelo para evitar que este sea asumido.


**:warning: Alerta**: Coordenadas redondeadas

**Problema**: las coordenadas decimales tienen más de 5 cifras significativas. Más allá de 6 cifras, las coordenadas no mejoran su precisión por lo cual es más eficiente redondearlas.

**Solución 1**: no es necesarios ajustar las coordenadas ya que es solo una alerta de interpretación, sin embargo, si lo desea puede hacer cambios en el conjunto de datos.

## Paso 4 - Verificación del resultado

Despues de resolver las alertas cargue nuevamente el conjunto de datos en el validador para confirmar el estado de calidad de los datos.

Compare sus resultados con el siguiente archivo validado según las definiciones del estándar, verifique en que acertó y que puede mejorar.
**¿Logró solucionar todas las alertas?**

* [Descargue el archivo validado](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab01/_docs/datos_Estandarizados.xlsx)

## Paso 5 - Datos propios

Si tiene datos propios que desee publicar, pruebe validarlos siguiendo los pasos de este laboratorio.

Recomendaciones:

Según el origen de sus datos (colecciones biológicas, permisos de recolección, datos marinos, eventos de muestreo) compruebe que los elementos obligatorios, e idealmente los recomendados, esten documentados el 100%. Para ello utilice de referencia la última [plantilla DwC Registros biológicos](https://sites.google.com/humboldt.org.co/wikisib/publicar/plantillas?authuser=0) y la sección del Validador de datos **Frecuencia del término** (Fig. 3 B). 

****
**¡Felicitaciones!** :raised_hands:
Ha mejorado la calidad de su conjunto de datos 

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> SiB Colombia (2020). Laboratorios de datos, Ciclo de formación virtual. Consultado a través del SiB Colombia. Disponible en https://sib-colombia.github.io/Formacion/
