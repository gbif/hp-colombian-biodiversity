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

La herramienta [_Date parsing_](https://data.canadensys.net/tools/dates), desarrollada por [Canadensys](http://www.canadensys.net/) (nodo GBIF Canadá), permite transformar y estandarizar fechas de forma masiva, de acuerdo al estándar ISO 8601: AAAA-MM-DD, que es el requerido en el estándar _Darwin Core_.

**Enlace**
[http://data.canadensys.net/tools/dates](http://data.canadensys.net/tools/dates)

**Requerimientos** 
* Para realizar este ejercicio debe contar con un programa procesador de archivos de texto como Excel.

**Archivo de trabajo**

Descargue el archivo [```datos_canadensys.xlsx```](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_docs/datos_canadensys.xlsx) para realizar el laboratorio

--------

## Paso 1 - Ingreso
Ingrese a la aplicación en línea [_Date parsing_](https://data.canadensys.net/tools/dates). Revise cuidadosamente las opciones disponibles para ingresar las fechas.

>**Nota**: las fechas pueden estar escritas en múltiples formatos siempre y cuando **no hayan ambiguedades**, por ejemplo que el año sea imposible de distinguir del mes y el día. Opcionalmente las fechas pueden ir precedidas por un identificador propio seguido por una tabulación o una barra vertical.
>
>Ejemplos de valores de entrada:
>
> Jun 13, 2008
> 15 Jan 2011
> 2009 IV 02
> 2 VII 1986
> 1 | 1999/02/24
> 2 | 02/17/1921

## Paso 2 - Carga de las fechas
Abra en Excel el archivo ```datos_canadensys.xlsx``` y busque la información temporal, encontrará la columna _```verbatimEventDate```_ (fecha en el formato original en el cual fue tomada) con fechas de colecta en formatos diferentes.

Seleccione la columna  _```verbatimEventDate```_ que corresponde a la fecha del evento y cópiela sin el encabezado (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.1_dateParsing.JPG" width=400>

*Figura 1. Seleccion y copia de las fechas originales ```verbatimEventDate```*

Ingrese a la aplicación [Date parsing](https://data.canadensys.net/tools/dates) y pegue los datos previamente copiados. Luego de clic en _```Submit```_ para iniciar la conversión de fechas (Fig. 2).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.2_dateParsing.JPG" width=800>

*Figura 2. Fechas originales en diversos formatos ingresadas en la herramienta*

## Paso 3 - Resultados

Las fechas originales ingresadas apareceran en la columna _```original```_ (que corresponde al elmento _```verbatimEventDate```_) junto con 4 nuevas columas: _```year```, ```month```, ```day```_ correspondintes  al estándar _DwC_ y una columna denominada ```ISO 8601```, que es el resultado de la estandarización y corresponderá al elemento _DwC_ _```eventDate```_ (Fig. 3).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.3_dateParsing.JPG" width=800>

*Figura 3. Elementos resultado del uso de la herramienta*

```warning
Cuando las fechas son ambiguas la herramienta no puede reconocer el formato de la fecha y muesta en rojo la fecha (Fig. 4).

Esto ocurre cuando no es posible identificar los componentes (año, mes, día) con claridad por ejemplo con la fecha 02/05/07 ¿El año es 2002 o 2007?. 
Si se presenta este tipo de ambiguedad, es necesario hacer una corrección manual basado en el contexto de los datos.

También se pueden generar inconvenientes cuando hay convinaciones de texto y número ya que la herramienta esta construida en ingles.
```
<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.4_dateParsing.JPG" width=500>

*Figura 4. Ejemplo de fechas ambiguas donde la herramienta no reconoce el formato y no puede hacer la transformación*


## Paso 4 - Copiar resultados

En el archivo de Excel ```datos_canadensys.xlsx```, agregue 5 columnas a la izquierda de la columna con las fechas originales. Para esto haga clic en el encabezado de la columna _```verbatimEventDate```_ > *clic derecho* > *Insertar*. Repita este paso 4 veces más (Fig. 5).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.5_dateParsing.jpg" width=600>

*Figura 5. Proceso para insertar nuevas columnas en Excel*

Desde la herramienta _Date Parsisng_ seleccione y copie con le _mouse_ toda la tabla arrojada como resultado, incluyendo encabezado (Fig. 6).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.6_dateParsing.jpg" width=800>

*Figura 6. Selección y copia de los resultados*

Antes de pegar los datos, asegurese de asignarle el formato de texto a las columnas que creo en el documento de Excel (Fig. 7)

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_DateParsing.png" width=800>

*Figura 7. Configuración del formato de las columnas a tipo texto*

Pegue la tabla copiada en el archivo Excel con los siguientes pasos:

1) Ubíquese sobre las celdas insertadas en el paso 5 (Fig. 8A).
2) De clic en *Inicio* en el menú superior y seleccione *Pegar* > *Pegado especial* (Fig. 8B).
3) En el menú de pegado especial seleccione *Texto* y luego *Aceptar* (Fig. 8C).

```tip
El pegado especial en formato texto es indispensable para que Excel no haga interpretaciones erróneas sobre las fechas ya estandarizadas. Si no se realiza, Excel revertirá las fechas a otro formato y usted perdera su trabajo :sob:
```

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.7_dateParsing.jpg" width=800>

*Figura 8. Pasos para insertar las fechas copiadas con formato texto.*

```tip
El pegado especial en formato texto es indispensable para que Excel no haga interpretaciones erróneas sobre las fechas ya estandarizadas. Si no se realiza, Excel revertirá las fechas a otro formato y usted perdera su trabajo :sob:
```

Verá las columnas incorporadas en el Excel (Fig. 9). Sin embargo note que la columna con la fecha del evento original se ha duplicado.

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/lab02/_images/Fig.8_dateParsing.JPG" width=600>

*Figura 9. Resultados de las fechas en la hoja de Excel*

Para finalizar la estandarización debe renombrar y eliminar algunas columnas. 
- Eliminar la columna _```original```_ 
- Renombrar la columna ```ISO 8601```, por _```eventDate```_

> Recuerde que puede aplicar este procedimiento a todos los elementos asociados a fechas en el estándar DwC como _```dateIdentified```_ (Fecha de identificación), _```georeferencedDate```_ (Fecha de georreferenciación), etc.

## Paso 5 - Datos propios
Si tiene datos propios que desee publicar, intente convertir las fechas al formato ISO 8601 siguiendo los pasos de este laboratorio.

****
**¡Felicitaciones!** :raised_hands: 
Terminó la conversión de las fechas del conjunto de datos a el estándar ISO 8601. 

__________________


