---
layout: documentation
permalink: /formacion/laboratorios/estructuracion-medidas-bioticas-bd-geografica
title: "Estructurando una base de datos geográfica al DwC, observaciones y medidas bióticas"
description: "Objetivo: Estructurar los registros biológicos presentes en una Base de datos geográfica, basada en el Diccionario Geográfico de la ANLA, para que sigan el estándar Darwin Core y cumplan los requisitos de publicación a través del SiB Colombia."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estructurando una base de datos geográfica al DwC, observaciones y medidas bióticas

**Objetivo**

Estructurar los registros biológicos presentes en una Base de datos geográfica, basada en el Diccionario Geográfico de la ANLA, para que sigan el estándar Darwin Core y cumplan los requisitos de publicación a través del SiB Colombia.

**Introducción**

Las bases de datos geográficas utilizadas por la ANLA tienen información de los registros biológicos que se tomaron en campo, estructurados de acuerdo al [Diccionario de Datos Geográficos](https://www.anla.gov.co/01_anla/documentos/informacion_geografica/diccionario_datos_geograficos_anla.xlsx). El diccionario contiene la información del nombre de las tablas de componente biótico, el nombre y definición de los elementos en cada una de las tablas.

Para realizar la publicación de esta información a través del SiB Colombia, es necesario realizar un proceso de estructuración de los registros biológicos al estándar _Darwin Core_. En esta guía se usará una Base de datos geográfica de ejemplo, la cual tiene algunas capas presentes en este tipo de archivos. Sin embargo, el número de capas puede variar, dependiendo del proyecto y de la versión del diccionario de la ANLA que se utilizó para construirlo.

En este ejercicio, se desarrollará el proceso de estructuración con los registros de **flora fustal**, documentados en una Base de datos geográfica con el modelo ANLA. No obstante, este mismo proceso se puede realizar con todas las tablas de registros biológicos incluidas en estas fuentes de datos, siguiendo los mismos pasos generales que se describen en la guía. Para ello, existen algunas notas informativas sobre el proceso de estructuración de otros eventos de muestreo. Adicionalmente, los datos de flora de las bases de datos del ANLA normalmente contienen medidas bióticas asociadas , las cuales también se pueden  mapear y estructurar en la extensión **Medidas o hechos**. Este procedimiento también se abordará en la guía.

**Requerimientos**

- QGIS (Revisar el proceso de instalación en el primer paso de la guía de [Validación geográfica con QGIS](https://biodiversidad.co/formacion/laboratorios/QGIS#paso-1---instalaci%C3%B3n-de-qgis))
- Procesador de archivos de texto como Excel.
- Contar con un mínimo de 4GB de memoria RAM para el desarrollo de esta guía. Para procesos con más de 20 000 registros biológicos, se recomienda tener como mínimo 8GB.

**Archivos de trabajo**

- Descargar la [Base de datos geográfica](https://drive.google.com/file/d/1sJfJ_8msYnYcZ1c9GWJ8zUZLebTSVzKG/view?usp=share_link) comprimida.


--------

## Paso 1. Carga de los datos a QGIS

Descargar el archivo «BaseDatosGeografica_prueba.zip», y extraer  su contenido: «BaseDatosGeografica.gdb». Esta carpeta debe conservarse con la terminación “.gdb”. Para descomprimir el archivo descargado, se puede usar cualquier  programa de descompresión de archivos que se tenga instalado. Por ejemplo,  _WinZip_, _WinRAR_, _7Z_ u otros. 

Posteriormente, abrir el software QGIS y crear un nuevo proyecto. En el nuevo proyecto, seguir la ruta _Capa > Añadir capa > Añadir capa vectorial…_ para cargar la Base de datos geográfica (Fig. 1).

![Figura 1. Adición de una capa de tipo vectorial.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig1_C4Registros_Vectorial.png)
<sup>_Figura 1. Adición de una capa de tipo vectorial._</sup>

En la ventana emergente, hacer clic en la opción Directorio (Fig. 2A) y seleccionar _AbrirArchivoGDB_ en el desplegable de la opción “Tipo” (Fig. 2B). 

![Figura 2. Selección de directorio para abrir un archivo .gdb.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig2_C4Registros_Directorio.png)
<sup>_Figura 2. Selección de directorio para abrir un archivo .gdb: A. Selección de Directorio como tipo de fuente, B. Selección del tipo de archivo a cargar._</sup>

En la opción _Conjunto (s) de datos vectoriales_,  hacer clic en el botón con los tres puntos (Fig. 3). Posteriormente, en la ventana emergente, seleccionar la ubicación de la carpeta que se ha descomprimido: «BaseDatosGeografica.gdb» (Fig. 3) y dar clic en abrir (Fig. 3).

![Figura 3. Selección carpeta descomprimida.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig3_C4Registros_Archivo.png)
<sup>_Figura 3. Selección carpeta descomprimida._</sup>

Para finalizar el proceso de carga, hacer clic en el botón “Añadir” (Fig. 4). Se abrirá una nueva ventana emergente que mostrará todas las capas que se encuentran al interior de la Base de datos geográfica. Es recomendable seleccionar todas las capas (Fig. 4). Luego, dar clic en “Añadir capas” (Fig. 4). Este proceso puede tomar algunos minutos si la base de datos es muy compleja y pesa varias megas.

![Figura 4. Selección y adición de capas.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig4_C4Registros_Capas.png)
<sup>_Figura 4. Selección y adición de capas._</sup>

Si se están cargando datos en MAGNA SIRGAS origen único (CTM12) y dependiendo de la versión de QGIS que esté utilizando, es posible que luego de hacer clic en Añadir se presente alguna de las siguientes opciones: 

1. QGIS identifica el Sistema de Referencia de Coordenadas (SRC) automáticamente y no se abre ninguna ventana emergente. Si este es su caso pase directamente al paso 2 de esta guía. 
2. Aparece una nueva ventana con la opción de cargar los datos sugiriendo otro Sistema de Referencia de Coordenadas (SRC). Haga clic en Cancel (Fig. 5) en la esquina inferior derecha de QGIS (Fig. 6A), aparece automáticamente el SRC MAGNA SIRGNA/CTM12. (Ej: USER:100000). En ese caso siga al paso 2 de esta guía.
3. Aparece una nueva ventana con la opción de cargar los datos sugiriendo otro Sistema de Referencia de Coordenadas (SRC). Haga clic en Cancel (Fig. 5). Si aparece SRC desconocido en la esquina inferior derecha (Fig. 6A) asegúrese de haber configurado el SRC del proyecto creando el sistema de origen único siguiendo el paso 1.1. de la guía de Transformación de coordenadas Magna-Sirgas a coordenadas decimales en WGS84.

![Figura 5. Opciones  sugiriendo otro Sistema de Referencia para los datos cargados.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig5_C4Registros_Cancelar.png)
<sup>_Figura 5. Opciones  sugiriendo otro Sistema de Referencia para los datos cargados._</sup>

![Figura 6. Selección del SRC del proyecto.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig6_C4Registros_SRCDesconocido.png)
<sup>_Figura 6. Selección del SRC del proyecto: A. Selección de la opción SRC desconocido, B. Selección del SRC creado por el usuario._</sup>

## Paso 2 - Identificación de los archivos asociados a registros biológicos

Una vez se tenga la información cargada en QGIS, explorar las capas que contienen información de los registros biológicos, Los archivos que contienen esta información se encuentran representados en la Tabla 1.

Tabla 1. Nombre de las capas que contienen información de los registros biológicos.

|Componente del Diccionario Geográfico ANLA|Nombre del archivo en la Base de datos Geográfica|Tipo de geometría|
|---|---|---|
|BIOTICO_CONTI_COSTE|AprovechaForestalPT|Punto|
|BIOTICO_CONTI_COSTE|MuestreoFloraFustalTB|Tabla|
|BIOTICO_CONTI_COSTE|MuestreoFloraRegeneracionTB|Tabla|
|BIOTICO_CONTI_COSTE|MuestreoFaunaTB|Tabla|
|HIDROLOGIA|MuestreoHidrobioTB|Tabla|
|MARINO|MuestreoHidrobioMarinoTB|Tabla|
|MARINO|MuestreoFloraMarinaTB|Tabla|
|MARINO|MuestreoFaunaMarinaTB|Tabla|
|MARINO|MamiferosOFM_TB|Tabla|
|MARINO|AvesOFM_TB|Tabla|
|MARINO|PecesOFM_TB|Tabla|
|MARINO|TortugasOFM_TB|Tabla|
|MARINO|OtraFaunaOFM_TB|Tabla|

**Nota**: En algunas ocasiones, las Bases de datos geográficas pueden tener capas adicionales asociadas a información extra que fue tomada en el marco de un proyecto particular. Por esta razón, se recomienda realizar una revisión general de los nombres de las capas para identificar posible información adicional.

En esta guía se propone el archivo MuestreoFloraFustalTB como ejemplo para el proceso de estructuración. Para revisar el contenido del archivo, hacer clic derecho y seleccionar “Abrir tabla de atributos” en el menú lateral izquierdo (Fig. 7). En la nueva ventana, se puede ver la tabla con todos los puntos de muestreo. Cada fila representa un punto de muestreo y cada columna un atributo de la tabla según el [Diccionario de Datos Geográficos](https://www.anla.gov.co/01_anla/documentos/informacion_geografica/diccionario_datos_geograficos_anla.xlsx). Después de realizar una revisión general de la tabla, es necesario cerrar la ventana y regresar al menú principal de QGIS.

![Figura 7. Información contenida en la tabla MuestreoFloraFustalTB.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig7_C4Registros_Tabla.png)
<sup>_Figura 7. Información contenida en la tabla MuestreoFloraFustalTB._</sup>

## Paso 3. Exportar las capas de los registros biológicos

Para exportar la tabla de registros de flora fustal, hacer clic derecho sobre la tabla MuestreoFloraFustalTB y seguir la ruta _Exportar>Guardar objetos como…_

En la ventana emergente, vamos a  seleccionar las siguientes opciones:
- Formato: dar clic en el desplegable y seleccionar XLSX  (Fig. 8A).
- Nombre de archivo: dar clic en el botón con los tres puntos para  elegir la ubicación y el nombre que se le va a dar al archivo (Fig. 8B). En este caso, se recomienda guardarlo como **Registros_FloraFustal.xlsx**.

Por último, dejar las otras opciones por defecto y dar clic en OK (Fig. 8).

![Figura 8. Opciones para exportar la tabla de registros biológicos de flora fustal como un archivo tipo excel.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig8_C4Registros_ExportarExcel.png)
<sup>_Figura 8. Opciones para exportar la tabla de registros biológicos de flora fustal como un archivo tipo excel: A. Selección del formato utilizado para exportar los datos, B. Selección del nombre y la ubicación del archivo._</sup>

## Paso 4. Mapeo de los datos 

Después de haber exportado el archivo de flora fustal, abrir el resultado en Excel.

Debido a que los atributos  de las tablas en una Base de datos geográfica, organizada bajo el Diccionario Geográfico de la ANLA, deben ser los mismos, desde el Equipo Coordinador del SiB Colombia se ha construido el archivo [Mapeo diccionario ANLA 2020-Eventos al DwC](https://docs.google.com/spreadsheets/d/17ys5dkCNZDXpeguHbnnTI-RYiJPyMQz4HuRO-FLcaUE/edit#gid=0). Este archivo contiene el nombre de los atributos en la GDB, el tipo de coincidencia de cada atributo con el estándar Darwin Core, el nombre del elemento Darwin Core con el que tiene coincidencia  y un comentario adicional cuando sea necesario. Por consiguiente, se debe abrir este archivo y utilizarlo para realizar el proceso de mapeo.

A continuación, se describe la definición de la coincidencia del atributo con el Darwin Core:

- **Total**: el contenido del atributo coincide completamente con la definición del elemento Darwin Core.
- **Parcial**:  coincidencia parcial del atributo con algún elemento del Darwin Core. Es necesario realizar ajustes en el contenido del atributo para que haya coincidencia con el elemento Darwin Core. Se recomienda revisar la definición del elemento en la documentación en línea del estándar y hacer los ajustes necesarios.   		 
- **Nula**: no hay coincidencia con ningún elemento del Darwin Core y por tanto no debe ser mapeado.

### 4.1 Mapeo de los registros biológicos

Cambiar los nombres en las columnas en el archivo **Registros_FloraFustal.xlsx** por el de los elementos Darwin Core que tengan una coincidencia total en el mapeo. Posteriormente, ajustar los elementos que tienen una coincidencia parcial y eliminar los que no tienen ningún tipo de correspondencia con el estándar Darwin Core. Para ello, se debe usar la pestaña “**MuestreoFloraFustalTB**” en el archivo [Mapeo diccionario ANLA 2020 al Darwin Core -Registros biológicos](https://docs.google.com/spreadsheets/d/1cX3ayuk6A-Fq2XcsTiIrkoQ2XetU9Y9rkgy0iUjk4RY/edit#gid=1272242277).

Para realizar el mapeo siga estos pasos:

- Modificar el nombre de las columnas documentadas como coincidencia total  en el archivo **Registros_FloraFustal.xlsx** (Fig. 9).
- Revisar el contenido de las columnas documentadas como coincidencia parcial, realizando los ajustes de acuerdo a las definiciones, recomendaciones y ejemplos de la [documentación en línea  del elemento  Darwin Core](https://biodiversidad.co/compartir/estandar-darwin-core/) para cada elemento (Fig. 9). Normalmente, estos ajustes implican combinar información de varias columnas antes de hacer el mapeo.
- En el archivo **Registros_FloraFustal.xlsx**, eliminar las columnas que tienen una coincidencia nula según el archivo de mapeo. (Fig. 9)

![Figura 9. Proceso de mapeo al estándar Darwin Core del archivo de registros biológicos presente en la Base de datos geográfica.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig9_C4Registros_Mapeo.png)
<sup>_Figura 9. Proceso de mapeo al estándar Darwin Core del archivo de registros biológicos presente en la Base de datos geográfica._</sup>

- Al finalizar el proceso de mapeo con las columnas existentes, se deben eliminar las columnas que estén vacías o documentadas con "<Null>".

### 4.2 Mapeo de las medidas bióticas

Para el mapeo con las medidas bióticas, es necesario crear los elementos _measurementType_ y _measurementUnit_ para cada una de las medidas presentes en el archivo. Se debe documentar el tipo de medida (ej. Diámetro a la altura del pecho, Biomasa aérea) y la unidad con la que fue tomada (ej. m, kg) según lo documentado en el archivo [Mapeo diccionario ANLA 2020-Registros al DwC](https://docs.google.com/spreadsheets/d/1cX3ayuk6A-Fq2XcsTiIrkoQ2XetU9Y9rkgy0iUjk4RY/edit#gid=1272242277).

En el archivo de Excel, insertar dos nuevas columnas para cada una de las medidas. En la primera columna del lado izquierdo, documentar el elemento _measurementType_; en la segunda columna del lado derecho, documentar  el elemento _measurementUnit_.

A continuación, se observa cómo realizar el proceso con la primera medida  DAP_INDIV:

- Crear la columna  measurementType con el valor “Diámetro a la altura del pecho (DAP)” (Fig. 10). 
- Insertar la segunda columna con el elemento _measurementUnit_ y como valor “m”(Fig. 10). 
- Reemplazar el nombre original de la columna DAP_INDIV por _measurementValue_. (Fig. 10). 

![Figura 10. Mapeo de la medida biótica DAP_INDIV al estándar DwC.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estructuraci%C3%B3n-observaciones-medidas-bioticas-base-de-datos-geografica/Fig10_C4Registros_Medidas.png)
<sup>_Figura 10. Mapeo de la medida biótica DAP_INDIV al estándar DwC._</sup>

- Repetir este procedimiento con el resto de medidas bióticas, teniendo en cuenta los diferentes valores de tipo y unidad para cada una de las medidas.

**Nota**: En algunas tablas de fauna marina, se pueden encontrar medidas abióticas, por ejemplo, la distancia del animal a la popa del barco o la dirección en la que viaja el animal con respecto al barco. En tal caso, se debe seguir el mismo proceso que se ejecutó con las medidas bióticas asociadas a flora, realizando el mapeo y poniendo el tipo y unidad de medida si es necesario.
 
## Paso 5. Creación de elementos obligatorios y ajuste de elementos documentados
  
### Paso 5.1 Creación de los elementos obligatorios

  
  
  
  
