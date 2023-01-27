---
layout: documentation
permalink: /formacion/laboratorios/estructuracion-medidas-abioticas-bd-geografica
title: "Estructuración de  medidas bióticas al DwC desde una Base de datos geográficas"
description: "Objetivo: Estructurar al estándar Darwin Core las medidas abióticas presentes en las Bases de datos geográficas elaboradas a partir del Diccionario Geográfico de la ANLA, cumpliendo  los requisitos de publicación a través del SiB Colombia."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

**Objetivo**

Estructurar al estándar Darwin Core las medidas abióticas presentes en las Bases de datos geográficas elaboradas a partir del Diccionario Geográfico de la ANLA, cumpliendo  los requisitos de publicación a través del SiB Colombia.

**Introducción**

Las Bases de datos geográficas generadas para la ANLA no solo contienen información relacionada con los eventos de muestreo y los registros biológicos. También compilan medidas abióticas, tales como: temperatura, nubosidad, turbidez, nitrógeno amoniacal, entre otras. Estas medidas se estructuran siguiendo el [Diccionario de Datos Geográficos](https://www.anla.gov.co/01_anla/documentos/informacion_geografica/diccionario_datos_geograficos_anla.xlsx){:target="_blank"}, pero también pueden ser estructuradas con base en el estándar _Darwin Core_.

Las medidas abióticas suelen estar asociadas a los componentes HIDROLOGIA y MARINO del diccionario de la ANLA. En esta guía se realizará el proceso de estructuración con las medidas abióticas para registros hidrobiológicos. Sin embargo, los mismos pasos aplican para las medidas abióticas del componente MARINO.

Para realizar la publicación de este tipo de medidas a través del SiB Colombia, es necesario realizar un proceso de estructuración a partir de la extensión Medidas o hechos del estándar _Darwin Core_. En esta guía se usará como ejemplo una Base de datos geográfica bajo el modelo de la ANLA. No obstante, el número de capas dentro de una Base de datos o el tipo de capas puede variar dependiendo de la naturaleza del proyecto y de la versión del diccionario de la ANLA.

**Requerimientos**

- QGIS (revisar el proceso de instalación en el primer paso de la guía de [Validación geográfica con QGIS](https://biodiversidad.co/formacion/laboratorios/QGIS#paso-1---instalaci%C3%B3n-de-qgis)).
- Procesador de archivos de texto como Excel.
- Contar con un mínimo de 4GB de memoria RAM para el desarrollo de esta guía. Para procesos con más de 20 000 registros biológicos, se recomienda tener como mínimo 8GB.

**Archivos de trabajo**

- Descargar el archivo comprimido con la [Base de datos geográfica](https://drive.google.com/file/d/1sJfJ_8msYnYcZ1c9GWJ8zUZLebTSVzKG/view?usp=share_link){:target="_blank"}.


--------

## Paso 1. Carga de los datos a QGIS

Descargar el archivo «BaseDatosGeografica_prueba.zip», y extraer  su contenido: «BaseDatosGeografica.**gdb**». Esta carpeta debe conservarse con la terminación “.gdb”. Para descomprimir el archivo descargado, se puede usar cualquier  programa de descompresión de archivos que se tenga instalado. Por ejemplo,  _WinZip_, _WinRAR_, _7Z_ u otros. 

Posteriormente, abrir el software QGIS y crear un nuevo proyecto. En el nuevo proyecto, seguir la ruta para cargar la Base de datos geográfica: _Capa > Añadir capa > Añadir capa vectorial…_ (Fig. 1).

![Figura 1. Adición de una capa de tipo vectorial.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig1_C4Medidas_Vectorial.png)
<sup>_Figura 1. Adición de una capa de tipo vectorial._</sup>

En la ventana emergente, hacer clic en la opción Directorio (Fig. 2A) y seleccionar _AbrirArchivoGDB_ en el desplegable de la opción “Tipo” (Fig. 2B). 

![Figura 2. Selección de directorio: A. Selección de Directorio como tipo de fuente, B. Selección del tipo de archivo a cargar.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig2_C4Medidas_Directorio.png)
<sup>_Figura 2. Selección de directorio: A. Selección de Directorio como tipo de fuente, B. Selección del tipo de archivo a cargar._</sup>

En la opción _Conjunto (s) de datos vectoriales_,  hacer clic en el botón con los tres puntos (Fig. 3). Posteriormente, seleccionar la ubicación de la carpeta que se ha descomprimido: «BaseDatosGeografica.gdb» en la ventana emergente y hacer clic en abrir (Fig. 3).

![Figura 3. Selección carpeta descomprimida.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig3_C4Medidas_Archivo.png)
<sup>_Figura 3. Selección carpeta descomprimida._</sup>

Para finalizar el proceso de carga, hacer clic en el botón “Añadir” (Fig. 4). Se abrirá una nueva ventana emergente que mostrará todas las capas que se encuentran al interior de la Base de datos geográfica. Es recomendable seleccionar todas las capas (Fig. 4). Luego, dar clic en “Añadir capas” (Fig. 4). Este proceso puede tomar algunos minutos si la base de datos es muy compleja y pesa varias megas.

![Figura 4. Selección y adición de capas.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig4_C4Medidas_Capas.png)
<sup>_Figura 4. Selección y adición de capas._</sup>

Si se están cargando datos en MAGNA SIRGAS origen único (CTM12) y dependiendo de la versión de QGIS que se esté utilizando, es posible que luego de hacer clic en Añadir aparezca alguna de las siguientes opciones: 

1. QGIS identifica el Sistema de Referencia de Coordenadas (SRC) automáticamente y no se abre ninguna ventana emergente. Si este es su caso pase directamente al paso 2 de esta guía. 
2. Aparece una nueva ventana con la opción de cargar los datos sugiriendo otro Sistema de Referencia de Coordenadas (SRC). Haga clic en Cancel (Fig. 5) en la esquina inferior derecha de QGIS (Fig. 6A), aparece automáticamente el SRC MAGNA SIRGNA/CTM12. (Ej: USER:100000). En ese caso siga al paso 2 de esta guía.
3. Aparece una nueva ventana con la opción de cargar los datos sugiriendo otro Sistema de Referencia de Coordenadas (SRC). Haga clic en Cancel (Fig. 5). Si aparece SRC desconocido en la esquina inferior derecha (Fig. 6A) asegúrese de haber configurado el SRC del proyecto creando el sistema de origen único siguiendo el paso 1.1. de la guía de Transformación de coordenadas Magna-Sirgas a coordenadas decimales en WGS84.

![Figura 5. Opciones  sugiriendo otro Sistema de Referencia para los datos cargados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig5_C4Medidas_Cancelar.png)
<sup>_Figura 5. Opciones  sugiriendo otro Sistema de Referencia para los datos cargados._</sup>

![Figura 6. Selección del SRC del proyecto.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig6_C4Medidas_SRCDesconocido.png)
<sup>_Figura 6. Selección del SRC del proyecto: A. Selección de la opción SRC desconocido, B. Selección del SRC creado por el usuario._</sup>

## Paso 2. Identificación de los archivos asociados a medidas abióticas

Una vez que se haya cargado la información cargada en QGIS, explorar las capas que contienen información de los eventos de muestreo. Los archivos que contienen esta información se encuentran representados en la Tabla 1.

Tabla 1. Nombre de las capas que contienen información de los eventos de muestreo.

|Componente del Diccionario Geográfico ANLA|Nombre del archivo en la Base de datos Geográfica|Tipo de geometría|
|---|---|---|
|HIDROLOGIA|MuestreoFisicoquimSuperTB|Tabla|
|HIDROLOGIA|ParamFisicoquimSuperTB|Tabla|
|MARINO|MuestreoFisicoquimMarinoTB|Punto|

Para organizar las medidas abióticas asociadas a datos hidrobiológicos, es necesario trabajar con los siguientes archivos: MuestreoFisicoquimSuperTB, que contiene las medidas que se tomaron en campo,  el código del evento (ID_PUNTO_M), el código de la muestra (ID_MUESTRA) y ParamFisicoquimSuperTB, que contiene las medidas tomadas en el laboratorio y el código de la muestra (ID_MUESTRA).

Por lo tanto, lo que se debe hacer a continuación es ubicar las tablas MuestreoFisicoquimSuperTB y ParamFisicoquimSuperTB en el menú lateral izquierdo. Luego, hacer clic derecho en cada una  y seleccionar la opción _Abrir tabla de atributos_ (Fig. 7).

Es necesario revisar que ambas tablas tengan la columna ID_MUESTRA documentada y que los valores sean consistentes entre las tablas MuestreoFisicoquimSuperTB y ParamFisicoquimSuperTB. Esta característica será la llave para crear el eventID en el archivo ParamFisicoquimSuperTB (Fig. 7).

![Figura 7. Comparación de la columna ID_MUESTRA en las dos tablas de medidas abióticas.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig7_C4Medidas_Tablas.png)
<sup>_Figura 7. Comparación de la columna ID_MUESTRA en las dos tablas de medidas abióticas._</sup>

Después de hacer una revisión general de las tablas, es necesario cerrar las ventanas y regresar al menú principal de QGIS.

## Paso 3. Añadir el identificador del evento en la tabla ParamFisicoquimSuperTB

Debido a que la tabla ParamFisicoquimSuperTB solo tiene el identificador de la muestra, se debe hacer un cruce con la tabla MuestreoFisicoquimSuperTB  para añadir el identificador del muestreo (ID_PUNTO_M). De esta forma, ambas tablas contarán con un identificador del evento que  pueda asociarse a los eventos de muestreo. 

Para ello,  hacer doble clic en  la tabla ParamFisicoquimSuperTB del menú de capas. Luego, seleccionar Uniones (Fig. 8A) y dar clic en el símbolo verde + (Fig. 8B).

![Figura 8. Selección de la opción Uniones en la ventana de propiedades.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig8_C4Medidas_Union.png)
<sup>_Figura 8. Selección de la opción Uniones en la ventana de propiedades: A. Selección de la opción "Uniones", B. Selección del botón utilizado para agregar un nuevo campo por medio de una unión._</sup>

En la ventana emergente, seleccionar las siguientes opciones para los campos:

- Unir capa: En la lista desplegable, elegir la tabla MuestreoFisicoquimSuperTB para extraer la información (Fig. 9A).
- Unir campo: Seleccionar el campo ID_MUESTRA, que es la llave para completar la tabla MuestreoFisicoquimSuperTB(Fig. 9B).
- Campo objetivo: Elegir el campo ID_MUESTRA, que es la llave para completar la tabla ParamFisicoquimSuperTB (Fig. 9C).
- Joined fields: Dar clic en el botón Joined fields y seleccionar el campo ID_PUNTO_M en la lista de la tabla MuestreoFisicoquimSuperTB (Fig. 9D).

Para finalizar, hacer clic en OK en la ventana emergente y en la ventana general (Fig. 9).

![Figura 9. Selección de opciones en la ventana Añadir unión vectorial.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig9_C4Medidas_OpcionesUnion.png)
<sup>_Figura 9. Selección de opciones en la ventana Añadir unión vectorial: A. Selección de la capa objetivo, B. Selección del campo de la capa base que se va a utilizar como llave, C. Selección del campo de la capa objetivo que se va a utilizar como llave, D. Selección del elemento de la capa objetivo que se va a agregar a la capa base._</sup>

Para revisar que el proceso se realizó correctamente, abrir la tabla de atributos de la capa ParamFisicoquimSuperTB y revisar la última columna. Debe haber una columna llamada “GDB_Prueba — MuestreoFisicoquimSuperTB_ID_PUNTO_M” con la información del código del punto de muestreo.

## Paso 4. Exportar las capas de las medidas abióticas en formato Excel

Después de tener el identificador del muestreo en la columna ID_PUNTO_M en ambas tablas, es necesario exportar el resultado obtenido para comenzar con el proceso de estructuración. Para ello, dar clic derecho sobre la capa MuestreoFisicoquimSuperTB y seguir la ruta de opciones _Exportar>Guardar objetos como…_

En la ventana emergente, seleccione  las siguientes opciones:
- Formato: dar clic en el desplegable y seleccionar XLSX  (Fig. 10A).
- Nombre de archivo: dar clic en el botón con los tres puntos para  elegir la ubicación y el nombre que se le va a dar al archivo. En este caso, se recomienda guardarlo como  MuestreoFisicoquimSuperTB.

Por último, dejar las otras opciones por defecto y dar clic en OK (Fig. 10).

![Figura 10. Opciones para exportar el archivo MuestreoFisicoquimSuperTB como un archivo tipo excel.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig10_C4Medidas_ExportarExcel.png)
<sup>_Figura 10. Opciones para exportar el archivo MuestreoFisicoquimSuperTB como un archivo tipo excel: A. Selección del formato utilizado para exportar los datos, B. Selección del nombre y la ubicación del archivo._</sup>

Se debe repetir el proceso  para exportar el archivo ParamFisicoquimSuperTB.

## Paso 5. Mapeo y estructuración de las medidas abióticas

Al finalizar la exportación de  ambos archivos, abrir el resultado en Excel.

Debido a que los atributos  de las tablas en una Base de datos geográfica, organizada bajo el Diccionario Geográfico de la ANLA, deben ser los mismos, el Equipo Coordinador del SiB Colombia ha construido el archivo [Mapeo diccionario ANLA 2020-Medidas Abióticas al DwC](https://docs.google.com/spreadsheets/d/1xS28Pwx6INx14Fag1-UXghLrvawb92KUQYcIfl4wf-M/edit#gid=1102842752){:target="_blank"}, el cual contiene el nombre de los atributos en la Base de datos geográ, el tipo de  coincidencia de cada atributo con el estándar _Darwin Core_, el nombre del elemento Darwin Core con el que tiene coincidencia  y un comentario adicional cuando sea necesario. Se debe abrir este archivo y utilizarlo para realizar el proceso de mapeo.

A continuación, se describe la definición de la coincidencia del atributo con el _Darwin Core_:

- **Total**: el contenido del atributo coincide completamente con la definición del elemento Darwin Core.
- **Parcial**:  coincidencia parcial del atributo con algún elemento del Darwin Core. Es necesario realizar ajustes en el contenido del atributo para que haya coincidencia con el elemento Darwin Core. Se recomienda revisar la definición del elemento en la documentación en línea del estándar y hacer los ajustes necesarios.   		 
- **Nula**: no hay coincidencia con ningún elemento del Darwin Core y por tanto no debe ser mapeado.

### Paso 5.1. Mapeo y estructuración del archivo MuestreoFisicoquimSuperTB

Este proceso consiste en cambiar los nombres de las columnas del archivo **MuestreoFisicoquimSuperTB.xlsx** por el de los elementos _Darwin Core_ que tengan una coincidencia total en el mapeo, ajustar los elementos que tiene un coincidencia parcial y eliminar los elementos que no tienen ningún tipo de correspondencia con el estándar.
Para realizar el mapeo siga estos pasos:

- Modificar el nombre de las columnas documentadas como coincidencia total  en el archivo **MuestreoFisicoquimSuperTB.xlsx** (Fig. 11)
- Revisar el contenido de las columnas documentadas como coincidencia parcial, realizando los ajustes de acuerdo a las definiciones, recomendaciones y ejemplos de la [documentación en línea  del elemento Darwin Core](https://biodiversidad.co/compartir/estandar-darwin-core/), antes de hacer el mapeo (Fig. 11)
- En el archivo **MuestreoFisicoquimSuperTB.xlsx**,  eliminar las columnas que tienen una coincidencia nula en el archivo de mapeo (Fig. 11).

**Nota**: En algunos casos, varias columnas pueden aportar información a un mismo elemento Darwin Core, como sucede con el elemento _measurementMethod_. Para estos casos, se recomienda compilar toda la información disponible en una sola columna, separando los datos con plecas ( | ).
Ejemplo: Número de verticales definido: 5 | Intervalo en horas entre las muestras: 8

![Figura 11.  Proceso de mapeo para los elementos de medidas abióticas.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig11_C4Medidas_Mapeo.png)
<sup>_Figura 11.  Proceso de mapeo para los elementos de medidas abióticas._</sup>

Las medidas abióticas de este archivo están organizadas de forma que  cada medida se debe documentar en una columna adicional. Para realizar un correcto mapeo, es necesario insertar dos nuevas columnas para cada una de las medidas. En la primera columna del lado izquierdo, documentar el elemento measurementType (Fig. 12). Después, en la segunda columna del lado derecho, diligenciar el elemento _measurementUnit_ (Fig. 12).

![Figura 12. Mapeo de la medida abiótica TEMP_AIRE.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig12_C4Medidas_Medidaa.png)
<sup>_Figura 12. Mapeo de la medida abiótica TEMP_AIRE._</sup>

Se debe repetir este procedimiento con el resto de medidas abióticas, teniendo en cuenta los diferentes valores de tipo y unidad para cada una de las medidas.

Al terminar el proceso de mapeo con las columnas existentes, eliminar las columnas vacías o documentadas con “<Null>”.

### Paso 5.2. Mapeo y estructuración del archivo ParamFisicoquimSuperTB
  
El  archivo **ParamFisicoquimSuperTB** tiene una estructura diferente al de la tabla **MuestreoFisicoquimSuperTB.xlsx**, mapeada en el paso 5.1.  Este archivo está organizado de forma que cada tipo de  medida se documenta en filas adicionales y no en nuevas columnas. Por este motivo, solamente es necesario realizar el proceso de mapeo de las columnas una vez. Para ello, utilizar la segunda hoja del archivo **Mapeo diccionario ANLA 2020-Medidas Abióticas al DwC** con el fin de realizar el mapeo. El proceso es similar al del paso 5.1. respecto a las coincidencias nulas, parciales y totales (Fig 13).  
  
![Figura 13. Proceso de mapeo para los elementos de medidas abióticas.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig13_C4Medidas_Mapeo.png)
<sup>_Figura 13. Proceso de mapeo para los elementos de medidas abióticas._</sup>

## Paso 6. Ajustes de elementos

### Paso 6.1. Verificación de la consistencia en el eventID para las medidas y los eventos

Para que los datos se publiquen correctamente, es necesario que todas las medidas abióticas tengan documentado un _eventID_ y que este sea exactamente igual al que está documentado en el archivo de eventos. En caso de haber realizado alguna modificación al _eventID_ en el archivo de eventos de muestreo, se deben hacer los ajustes necesarios para que coincidan los _eventID_ de los archivos de medidas abióticas.

**Nota**: En los archivos de ejemplo de esta guía,  el valor del _eventID_ no se modificó. Por lo tanto,  es equivalente al _eventID_  de la tabla PuntoMuestreoAguaSuper y no requiere ninguna modificación.

### Paso 6.2. Ajuste de los elementos documentados y los vocabularios controlados

Para el archivo _ParamFisicoquimSuperTB_, se deben realizar ajustes en el elemento _measurementType_ porque la información está documentada con los  dominios del diccionario geográfico. Para ello, abrir el [Diccionario de Datos Geográficos](https://www.anla.gov.co/01_anla/documentos/informacion_geografica/diccionario_datos_geograficos_anla.xlsx){:target="_blank"} y ubicarla pestaña DOMINIOS, donde se puede buscar el dominio Dom_Parametro y realizar el ajuste en el archivo de estructuración. Esto se hace reemplazando el código por el nombre de la medida. Ver ejemplo en la Figura 14A.
  
Adicionalmente, crear y documentar la columna _measurementUnit_ según la información de la medida en del diccionario (Fig. 14B).  
  
![Figura 14. Proceso de mapeo del código y unidad de medida usando la pestaña de dominios del Diccionario Geográfico de la ANLA.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig14_C4Medidas_Diccionario.png)
<sup>_Figura 14. Proceso de mapeo del código y unidad de medida usando la pestaña de dominios del Diccionario Geográfico de la ANLA: A. Correspondencia del código 1002 con el parámetro Alcalinidad Total. B. Correspondencia del código 1002 con la unidad del parámetro mg/L CaCO3._</sup>  
  
Después de realizar este proceso,la información de la unidad y la medida del respectivo código (Fig. 15) estará disponible. Este procedimiento se debe realizar para todas las medidas.

![Figura 15. Resultado del proceso de mapeo del código y unidad para el código 1002.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuracion-medidas-abioticas-base-de-datos-geografica/Fig15_C4Medidas_Resultado.png)
<sup>_Figura 15. Resultado del proceso de mapeo del código y unidad para el código 1002._</sup>  

**Nota**: Si se quiere completar esta información de forma automática en Excel,  se puede utilizar la opción BUSCARV(). Para ello, usar como elemento en común la columna PARAMETRO en el archivo ParamFisicoquimSuperTB y la columna CÓDIGO en la pestaña de dominios del Diccionario geográfico de la ANLA.

### Paso 6.3. Ajuste de los elementos Darwin Core 
  
Finalmente, es necesario realizar ajustes en algunas columnas para que sigan el formato sugerido del estándar _Darwin Core_. Para ello, revisar las definiciones del estándar para cada elemento mapeado.
  
Es importante poner especial atención a los siguientes elementos:
- **[measurementDeterminedDate](https://biodiversidad.co/compartir/estandar-darwin-core/#measurementDeterminedDate)**: Revisar que la fecha esté en formato  ISO 8601 AAAA-MM-DDTHH:MM.
- **[measurementUnit](https://biodiversidad.co/compartir/estandar-darwin-core/#measurementUnit)**: Revisar que las medidas están documentadas según el Sistema Internacional de Unidades (SI).
- **[measurementValue](https://biodiversidad.co/compartir/estandar-darwin-core/#measurementValue)**: Revisar que los valores utilicen un punto como separador decimal.  
  
## Paso 7. Verificación del resultado

Descarga y compara el siguiente archivo, estandarizado según las definiciones del Darwin Core, con el archivo que se trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Las medidas abióticas de los eventos de muestreo quedaron correctamente estructuradas?
  
- [Archivo estandarizado](https://docs.google.com/spreadsheets/d/1Gtm-scS0Fgoxcl5cSQ0JKS2N1mh4xxtj/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}   
  
 
****
**¡Felicitaciones!**

El conjunto de datos de medidas abióticas derivadas de una Base de datos geográfica ha sido estandarizado según el Darwin Core.
  
****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
 
