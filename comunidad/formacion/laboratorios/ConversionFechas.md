---
layout: documentation
permalink: /formacion/laboratorios/ConversionFechas
title: "Conversión Fechas"
description: "Realizar la transformación y estandarización de fechas en distintos formatos, al formato ISO 8601 (AAAA-MM-DD), de manera automática y masiva."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Conversión Fechas

**Objetivo**

Realizar la transformación y estandarización de fechas en distintos formatos, al formato ISO 8601 (AAAA-MM-DD), de manera automática y masiva.

**Sobre la herramienta**

La herramienta [_Date parsing_](https://data.canadensys.net/tools/dates), desarrollada por [Canadensys](http://www.canadensys.net/) (nodo GBIF Canadá), permite transformar y estandarizar fechas de forma masiva, de acuerdo al estándar ISO 8601: AAAA-MM-DD, requerido para la documentación de fechas en el estándar _Darwin Core_.

**Enlace**

_Date parsing -Canadensys_ [http://data.canadensys.net/tools/dates](http://data.canadensys.net/tools/dates){:target="_blank"}

**Requerimientos** 
* Para realizar este ejercicio debe contar con un procesador de archivos de texto como Excel.

**Archivo de trabajo**

Descargue el archivo [```datos_canadensys.xlsx```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_canadensys.xlsx) para realizar el laboratorio.

--------

## Paso 1 - Ingreso
Ingrese a la aplicación en línea [_Date parsing_](https://data.canadensys.net/tools/dates){:target="_blank"}. Revise cuidadosamente las opciones disponibles para ingresar las fechas.

```tip
Las fechas pueden estar escritas en múltiples formatos siempre y cuando **no haya ambiguedades**, por ejemplo, que el año sea imposible de distinguir del mes y el día. Opcionalmente las fechas pueden cargarse a la herramienta incluyendo el identificador del reegistro seguido por una tabulación o una barra vertical, como se muestra en los siguientes ejemplos.

Ejemplos de valores de entrada:

* Jun 13, 2008
* 15 Jan 2011
* 2009 IV 02
* VII 1986
* 1 | 1999/02/24 (Incluyendo un identificador del registro)
* 2 | 02/17/1921 (Incluyendo un identificador del registro)
```

## Paso 2 - Carga de las fechas
Abra en Excel el archivo ```datos_canadensys.xlsx``` y busque la información temporal, encontrará la columna _```verbatimEventDate```_ (fecha en el formato original en el cual fue tomada) con fechas de colecta en formatos diferentes.

Seleccione la columna  _```verbatimEventDate```_ que corresponde a la fecha del evento y cópiela sin el encabezado (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_dateParsing.JPG" width=400>

<sup>_Figura 1. Seleccion y copia de las fechas originales ```verbatimEventDate```._<sup>

En la aplicación Date parsing pegue los datos previamente copiados. Luego haga clic en _```Submit```_ para iniciar la conversión de fechas (Fig. 2).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_dateParsing.JPG" width=800>

<sup>*Figura 2. Fechas originales en diversos formatos ingresadas en la herramienta.*<sup>

## Paso 3 - Resultados

Las fechas originales ingresadas apareceran en la columna _```original```_ (que corresponde al elmento _```verbatimEventDate```_) junto con 4 nuevas columas: _```year```, ```month```, ```day```_ correspondintes  al estándar _DwC_ y una columna denominada ```ISO 8601```, que es el resultado de la estandarización y corresponderá al elemento _DwC_ _```eventDate```_ (Fig. 3).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_dateParsing.JPG" width=800>

<sup>*Figura 3. Resultado de la transformación de las fechas al formato ISO 8601 con Date Parsing de Candensys.*<sup>

```warning
Cuando las fechas son ambiguas la herramienta no puede reconocer el formato de la fecha y muesta la fila de la fecha en rojo (Fig. 4).

Esto ocurre cuando no es posible identificar los componentes (año, mes, día) con claridad por ejemplo con la fecha 02/05/07 ¿El año es 2002 o 2007?. 
Si se presenta este tipo de ambiguedad, es necesario hacer una corrección manual basado en el contexto de los datos.

También se pueden generar inconvenientes cuando hay combinaciones de texto y número (e.g. Abr-2009) ya que el idioma original de la herramienta es el inglés y puede que no reconozca algunos meses en español.
```
<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_dateParsing.JPG" width=500>

<sup>*Figura 4. Ejemplo de fechas ambiguas donde la herramienta no reconoce el formato y no puede hacer la transformación (En rojo).*<sup>


## Paso 4 - Incorporar resultados en tabla DwC.

### 4.1. Preparar el archivo para incorporar los resultados
 
En el archivo de Excel ```datos_canadensys.xlsx```, agregue 5 columnas a la izquierda de la columna con las fechas originales. Para esto haga clic en el encabezado de la columna _```verbatimEventDate```_ > *clic derecho* > *Insertar*. Repita este paso 4 veces más (Fig. 5).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_dateParsing.jpg" width=600>

<sup>*Figura 5. Proceso para insertar nuevas columnas en Excel.*<sup>

Configure las columnas que creo en el documento de Excel en formato texto (Fig. 6)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_DateParsing.png" width=800>

<sup>*Figura 6. Configuración del formato de las columnas a tipo texto.*<sup>

 
### 4.2. Copiar resultados
 
En la herramienta _Date Parsisng_ seleccione y copie toda la tabla con el resultado de la conversión incluyendo el encabezado. Para el copiado pude ayudarse del _mouse_ de su equipo, desplazandose desde el inicio hasta el final de la tabla manteniendo el clic izquierdo obturado. (Fig. 7).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_dateParsing.jpg" width=800>

<sup>*Figura 7. Selección y copia de los resultados.*<sup>

 
### 4.3. Pegar resultados
 
 Pegue la tabla copiada en el archivo Excel siguiendo estos pasos:

 1. Ubíquese sobre las celdas insertadas en el paso 5 (Fig. 8A).
 2. Haga clic en ```Inicio``` en el menú superior y seleccione ```Pegar``` > ```Pegado especial``` (Fig. 8B).
 3. En el menú de ```Pegado Especial``` seleccione ```Texto``` y luego ```Aceptar``` (Fig. 8C).

```tip
El pegado especial en formato texto es indispensable para que Excel no haga interpretaciones erróneas sobre las fechas ya estandarizadas. Si no se realiza, Excel revertirá las fechas a otro formato y usted perdera su trabajo :sob:
```

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_dateParsing.jpg" width=800>

<sup>*Figura 8. Pasos para insertar las fechas copiadas con formato texto. A. Ubicarse en el sitio donde pegará los resultados; B. Selección de opciones de pegado especial; C. Selección de texto como opción de pegado especial.*</sup>

```tip
El pegado especial en formato texto es indispensable para que Excel no haga interpretaciones erróneas sobre las fechas ya estandarizadas, si no se realiza Excel revertirá las fechas a otro formato y usted perdera su trabajo :sob:
```

Verá las columnas incorporadas en el Excel (Fig. 9). Sin embargo note que la columna con la fecha del evento original se ha duplicado.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_dateParsing.JPG" width=600>

<sup>*Figura 9. Resultados de las fechas en la hoja de Excel.*<sup>

Para finalizar la estandarización debe renombrar y eliminar algunas columnas. 
- Eliminar la columna _```original```_ 
- Renombrar la columna ```ISO 8601```, por _```eventDate```_

> Recuerde que puede aplicar este procedimiento a todos los elementos asociados a fechas en el estándar DwC como _```dateIdentified```_ (Fecha de identificación), _```georeferencedDate```_ (Fecha de georreferenciación), etc.

 
## Paso 5 - Verificación del resultado

Compare sus resultados con el siguiente archivo validado según las definiciones del estándar, verifique en que acertó y que puede mejorar. 

**¿Qué diferencias encontró con sus resultados?**

* [Descargue el archivo validado](https://github.com/SIB-Colombia/Formacion/raw/master/LAB/lab02/_docs/Solución_datos_canadensys.xlsx)

 
## Paso 6 - Datos propios
Si tiene datos propios que desee publicar, intente convertir las fechas al formato ISO 8601 siguiendo los pasos de este laboratorio.

****
**¡Felicitaciones!** :raised_hands: 
Terminó la conversión de las fechas del conjunto de datos a el estándar ISO 8601. 

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

> Plata C., Ortíz R., Marentes E. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
>
