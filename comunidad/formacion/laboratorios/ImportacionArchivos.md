---
layout: documentation
permalink: /formacion/laboratorios/ImportacionArchivos
title: "Importación de archivos"
description: "Objetivo: Realizar la correcta importación de datos en formato de texto plano a Excel."
sideNavigation: sidenav_laboratorios.terms
toc: true
---


# Cómo importar archivos .txt o .csv en Excel

**Objetivo**

Realizar la correcta importación de datos en formato de texto plano a Excel.

**Sobre la actividad**

Existen dos formatos para el almacenamiento de archivos de texto, los cuales son ampliamente usados para compartir datos y  **no** corresponden al formato de _Microsoft Office Excel®_ (.xls, .xlsx, etc). Estos archivos son los **delimitados por tabulaciones** y los **separados por comas**.

- **Archivos de texto delimitados por tabulaciones (.txt)**: en este formato, el carácter de tabulación (tab) delimita cada campo de contenido almacenado en un archivo de texto. 
- **Archivos de valores separados por comas (.csv)**: en este formato, el carácter de coma (,) o de punto y coma (;) separa cada campo de contenido almacenado.

En este laboratorio, se evidencia la forma que [_Microsoft Office Excel®_](https://www.microsoft.com/es-co/microsoft-365/excel) provee para importar correctamente un archivo de formato  **.txt** o **.csv**. 

**Requerimientos** 

* Para realizar este ejercicio, es necesario contar con _Microsoft Excel_.

**Archivo de trabajo**

Descargue el archivo [<FONT FACE="monospace"><b>«Datos.zip»</b></FONT>](https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/otros/_docs/Datos.zip). Luego, descomprima el archivo para poder acceder a los contenidos que necesitará para realizar la guía: <FONT FACE="monospace"><b>«Datos.txt»</b></FONT> y <FONT FACE="monospace"><b>«Datos.csv»</b></FONT>.

--------

## Paso 1 - Cargar datos

En el menú superior, seleccione la pestaña  <span class="tag is-warning is-light"><b><i>Datos > Obtener datos externos > Desde texto</i></b></span> (Fig. 1).

<img src="https://raw.githubusercontent.com/SIB-Colombia/Formacion/master/LAB/otros/_images/Fig.1_Datos-Importartexto.PNG" width=600>


<sup>_Figura 1. Selección de la fuente de datos._</sup>.

## Paso 2 - Selección del archivo

En el desplegable inferior, seleccione la opción <span class="tag is-warning is-light"><i>Todos los archivos (*.*)</i></span>. Esto le permitira ver todos los archivos presentes en el directorio y seleccionar el adecuado (Fig. 2).

Posteriormente, seleccione el archivo <FONT FACE="monospace"><b>«Datos.txt»</b></FONT> y haga clic en <span class="tag is-warning is-light"><i>Importar</i></span>(Fig. 2). 

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ImportacionArchivos/Fig.2_SeleccionArchivo.png" width=600>

<sup>_Figura 2. Selección del archivo._</sup>.

<div class="notification is-info is-light">
  <b>Nota:</b> Si al dar clic al botón de <span class="tag is-warning is-light"><i>Importar</i></span> le aparecen mensajes referentes al formato de importación, haga clic en <span class="tag is-warning is-light"><i>Sí</i></span> o <span class="tag is-warning is-light"><i>Aceptar</i></span>.
</div>


## Paso 4 - Configuración del asistente para importar texto

_Microsoft Office Excel®_ abrirá el **"Asistente para importar texto"**, el cual cuenta con tres pasos principales.
En el primer paso, deberá seleccionar el tipo de archivo y la codificación:

Seleccione <span class="tag is-warning is-light"><i>Delimitados</i></span> en la sección **"Tipo de los datos originales"**.

Si no ve ningún tipo de carácter extraño en la vista previa, puede dejar seleccionada la opción <span class="tag is-warning is-light"><i>Windows ANSI</i></span> por defecto en _Windows_ o <span class="tag is-warning is-light"><i>Mancintosh</i></span> en MacOS.

Si ve algun caracter extraño donde deben ir tildes (') o eñes (ñ), vaya a la sección **"Origen del archivo:"** y seleccione la codificación correcta de los datos en el desplegable. La codificación más común es <span class="tag is-warning is-light"><i>Unicode (UTF-8)</i></span>. Luego, utilice la vista previa de los datos para revisar que no hayan más carácteres extraños (Fig. 3). 

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ImportacionArchivos/Fig.3_SeleccionCodificacion.png" width=600>

<sup>_Figura 3. Configuración del asistente para importar texto._</sup>.

En caso de persistir el problema, será necesario probar más configuraciones hasta encontrar la adecuada.

## Paso 5 - Configuración del los delimitadores

En el segundo paso del **"Asistente para importar texto"**, debe escoger el tipo de separadores de sus datos. 

Para importar el archivo <FONT FACE="monospace"><b>«Datos.txt»</b></FONT>, seleccione la opción <span class="tag is-warning is-light"><i>Tabulación</i></span> y revise que la separación de las columnas sea adecuada en la vista previa. Posteriormente, dé clic en <span class="tag is-warning is-light"><i>Siguiente ></i></span> (Fig. 4). 

Adicionalmente, debe revisar la opción **"Calificador de texto"**. Para este ejercicio, se debe dejar configurado automáticamente con comillas dobles (").

<div class="notification is-info is-light">
  Normalmente, el separador de los archivos .CSV es una coma (,), pero también pueden separarse por punto y coma (;) si los datos están en español. Por otro lado, el separador en archivos .TXT puede ser cualquier valor.
</div>

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ImportacionArchivos/Fig.4_SeleccionSeparador.png" width=600>

<sup>_Figura 4. Configuración del asistente para importar texto paso 2._</sup>.

## Paso 6 - Configuración del formato de los datos

En el tercer paso del **"Asistente para importar texto"**, haga clic sobre la primer columna del conjunto de datos en la vista previa. Luego, presione la tecla <span class="tag is-warning is-light"><i>Shift</i></span> y, sin soltarla, arrastre la barra de deslizamiento hasta el límite derecho, donde observará la última columna del conjunto de datos. Dé clic sobre esta columna y suelte la tecla <span class="tag is-warning is-light"><i>Shift</i></span>. Esto le permitirá seleccionar todas las columnas del conjunto de datos.

Finalmente, seleccione <span class="tag is-warning is-light"><i>Texto</i></span> en la opción **"Formato de los datos en columnas"** y haga clic en <span class="tag is-warning is-light"><i>Finalizar</i></span> (Fig. 5). 

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ImportacionArchivos/Fig.5_SeleccionSitio.png" width=300>

<sup>_Figura 5. Configuración del asistente para importar texto paso 3._</sup>.


## Paso 7 - Importar datos

Se abrirá una nueva ventana que le solicita indicar el lugar donde va a importar los datos. Por defecto, se importan en la primera hoja, fila 1, columna A. (Fig. 6). Es recomendable importar los datos en este lugar, pero puede seleccionar otra hoja o posición.
Dé clic en <span class="tag is-warning is-light"><i>Aceptar</i></span> para terminar el proceso de importación.

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ImportacionArchivos/Fig.6_SeleccionTexto.png" width=600>

<sup>_Figura 6. Configuración del asistente para importar texto paso 3._</sup>.

## Paso 8 - Importación de los datos en formato .csv

Repita este laboratorio usando los datos **".csv"**. La única diferencia es en el paso 5, donde debe seleccionar como separador la opción <span class="tag is-warning is-light"><i>Coma</i></span> (Fig. 7).

<img src="https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_ImportacionArchivos/Fig.7_SeleccionSeparadorCSV.png" width=600>

<sup>_Figura 7. Selección de separador por coma para los archivos de .csv._</sup>

****
**¡Felicitaciones!**
Terminó la importar los datos correctamente a Excel.

****

**Atribución y uso de los laboratorios**

![](https://licensebuttons.net/l/by/3.0/88x31.png)

La licencia [CC-BY](https://creativecommons.org/licenses/by/4.0/) te permite usar, redistribuir y construir sobre estos contenidos libremente. :open_hands: Queremos que compartas estos laboratorios y que juntos logremos datos sobre biodiversidad de mejor calidad.

**Citación sugerida**

 > Plata C., Ortíz R., Marentes E., Lozano J. (2021). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
