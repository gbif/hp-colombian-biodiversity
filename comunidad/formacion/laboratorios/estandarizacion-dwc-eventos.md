---
layout: documentation
permalink: /formacion/laboratorios/estandarizacion-dwc-eventos
title: "Estandarización de datos de eventos al Darwin Core"
description: "Objetivo: Estructurar un conjunto de Eventos de muestreo bajo el estándar Darwin Core (Dwc), siguiendo sus vocabularios controlados y las buenas prácticas de documentación."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Estandarización de datos de eventos al _Darwin Core_

**Objetivo**

Estructurar un conjunto de Eventos de muestreo bajo el estándar [_Darwin Core_ (Dwc)](https://dwc.tdwg.org/terms/){:target="_blank"}, siguiendo sus vocabularios controlados y las buenas prácticas de documentación.

**Sobre la actividad**

Estructurar un conjunto de eventos de muestreo según el estándar DwC, usando la plantilla de [**Eventos de muestreo**](https://biodiversidad.co/recursos/plantillas-dwc/#eventos-de-muestreo){:target="_blank"} y la plantilla de [**Registros biológicos**](https://biodiversidad.co/recursos/plantillas-dwc/#registros-biol%C3%B3gicos){:target="_blank"}. El conjunto de datos tiene problemas de completitud y formato, los cuales deben ser resueltos para que el conjunto se ajuste a las definiciones y contenga los elementos mínimos requeridos por el estándar.

**Convenciones**

- Los elementos del estándar *Darwin Core* aparecen en color verde y cursiva. Por ejemplo: <span class="tag is-success is-light"><i>measurementUnit</i></span>.
- Los archivos a utilizar en los ejercicios se muestran entre comillas angulares, negrita, y tienen una tipografía diferente. Por ejemplo: <FONT FACE="monospace"><b>«archivo_Ejemplo.xls»</b></FONT>.
- Las secciones, ventanas y componentes de las herramientas utilizadas se muestran entre comillas inglesas y en negrita. Por ejemplo: **"Create Project"**.
- Las opciones de las herramientas que se asocian a instrucciones (dar clic, seleccionar, etc.) aparecen en color amarillo y cursiva. Por ejemplo: <span class="tag is-warning is-light"><i>New project</i></span>.
- Las secuencias de instrucciones y pasos se muestran en color amarillo, cursiva y negrita. Por ejemplo: <span class="tag is-warning is-light"><b><i>Paso 1 > Paso 2</i></b></span>.
- Las líneas que se escriben directamente en las herramientas, para programar o realizar algún proceso en específico, aparecen en formato de código, con una tipografía distinta de color negro. Por ejemplo: <span class="tag is-light"><b>value.replace(" sp.","")</b></span>.

**Requisitos** 

Para realizar este ejercicio, es necesario contar con un programa que procese archivos de texto. Por ejemplo, Excel.

**Archivo de trabajo**

- Descargar el archivo [<FONT FACE="monospace"><b>«Datos_CasoEmpresa_20reg»</b></FONT>](https://docs.google.com/spreadsheets/d/1o5I_5mVrtaKhwNMZRhGVLP2vQY9-wXH1/edit#gid=97635514){:target="_blank"} para realizar
- Descargar el archivo [<FONT FACE="monospace"><b>«Datos_Eventos_20_Registros»</b></FONT>](https://docs.google.com/spreadsheets/d/1Z09ilRuLsnQZO93Fm7aBUeslaDXfoI07/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} para realizar el laboratorio.
- Descargar la última versión de la [<FONT FACE="monospace"><b>«Plantilla de publicación de eventos de muestreo»</b></FONT>](https://biodiversidad.co/recursos/plantillas-dwc/#eventos-de-muestreo){:target="_blank"}
- Descargar la última versión de la [<FONT FACE="monospace"><b>«Plantilla de publicación de registros biológicos»</b></FONT>](https://biodiversidad.co/recursos/plantillas-dwc/#eventos-de-muestreo){:target="_blank"}

--------

## Paso 1 - Caso de estudio 

Leer detenidamente el caso de estudio, allí se encuentra información relevante para completar el conjunto de datos a publicar. Este caso está basado en una historia ficticia y fue creado solo para propósitos educativos:

>La empresa Ambiental Buenaventura Consultores (ABC) desea comenzar a publicar datos de un monitoreo de aves que se realiza anualmente en un predio en la vereda La Niata. Este monitoreo se realiza anualmente por los dos encargados de biodiversidad de la empresa, Carlos Perez y Juan Galeano. Para realizar este monitoreo, se seleccionaron dos puntos al interior del predio. En estos puntos se instalaron redes de niebla y se registró la información de las aves observadas por diez horas. Adicionalmente, cada año se toma la información de humedad relativa y temperatura al iniciar cada evento. Este monitoreo fue realizado desde el 2015 hasta el 2017.
Para compartir esta información al público, la empresa desea organizar y publicar sus datos a través del SiB Colombia. Debido a su estructura, que incluye información detallada del evento, los registros asociados a cada punto de muestreo y la presencia de medidas abióticas, se considera que la mejor forma de hacerlo es a través de un conjunto de datos de eventos de muestreo. Los datos de los eventos de muestreo y los registros biológicos están en un documento de trabajo interno de la empresa en formato Excel.

Tu misión en este laboratorio es estructurar los eventos de muestreo de la empresa con base en los lineamientos del estándar _Darwin Core_.

Para facilitar la realización de este laboratorio, los registros biológicos ya están estructurados en el estándar _Darwin Core_. Para conocer el proceso de estandarización de observaciones, revisa los siguiente enlaces:

- [Estandarización de datos en _Darwin Core_](https://biodiversidad.co/formacion/laboratorios/DWC){:target="_blank"}
- [Estandarización de datos en _Darwin Core_ del sector empresarial](https://biodiversidad.co/formacion/laboratorios/estandarizacion-darwincore-empresas){:target="_blank"}

## Paso 2 - Mapeo de los datos 

Descargar y abrir el archivos de trabajo[<FONT FACE="monospace"><b>«Datos_CasoEmpresa_20reg»</b></FONT>](https://docs.google.com/spreadsheets/d/1o5I_5mVrtaKhwNMZRhGVLP2vQY9-wXH1/edit#gid=97635514){:target="_blank"} y la [<FONT FACE="monospace"><b>«Plantilla de publicación de eventos de muestreo»</b></FONT>](https://biodiversidad.co/recursos/plantillas-dwc/#eventos-de-muestreo){:target="_blank"}

Revisar detenidamente el nombre y contenido de cada columna de la **"Hoja de eventos"** del archivo [<FONT FACE="monospace"><b>«Datos_Eventos_20_Registros»</b></FONT>](https://docs.google.com/spreadsheets/d/1Z09ilRuLsnQZO93Fm7aBUeslaDXfoI07/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"} e identificar a qué elemento DwC de la plantilla de publicación corresponde. Este proceso recibe el nombre de mapeo de datos. 

Después de identificar el elemento correspondiente, copiar y pegar el contenido de esa columna en la plantilla, como se muestra en la siguiente imagen (Fig. 1):

![Figura 1. Mapeo de datos en la plantilla DwC.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estandarizacion-darwincore-eventos/Fig1_C3Eventos_Mapeo.png)
<sup>_Figura 1. Mapeo de datos en la plantilla DwC._</sup>

<div class="notification is-info is-light">
  <b>Nota:</b> Al final de la tabla de eventos, se encuentran algunas medidas abióticas relacionadas con el tipo de suelo, humedad relativa y temperatura del aire. Para estructurar estas medidas en el estándar Darwin Core, es necesario realizar el mapeo de las medidas en la extensión <a href="https://biodiversidad.co/compartir/estandar-darwin-core/#medidas-o-hechos-extendida" target="_blank"><b>Medidas o Hechos</b></a>. En este ejercicio, las medidas ya se encuentran mapeadas en la hoja llamada <b>“MedidasAbioticas”</b> del archivo de trabajo <a href="https://docs.google.com/spreadsheets/d/1Z09ilRuLsnQZO93Fm7aBUeslaDXfoI07/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true" target="_blank"><FONT FACE="monospace"><b>«Datos_Eventos_20_Registros»</b></FONT></a>. Para conocer el proceso de estandarización de estas medidas, consulta la guía de <a href="https://biodiversidad.co/formacion/laboratorios/extensiones-dwc-medidas-hechos" target="_blank"><b>Estandarización de medidas bióticas en la extensión Medidas o hechos</b></a>
</div>

## Paso 3 - Identificar los elementos obligatorios 

Ingresar a la **Plantilla de publicación de eventos de muestreo**, en la cual hay cuatro pestañas:

- **Instrucciones**: contiene la guía de uso y los puntos a tener en cuenta antes de iniciar la documentación de los eventos de muestreo.
- **Plantilla**: contiene la tabla de los elementos DwC para documentar los eventos de muestreo.
- **Definiciones**: contiene las definiciones para cada uno de los elementos del estándar DwC, recomendaciones de documentación y ejemplos.
- **Vocabulario**: contiene los vocabularios controlados para algunos de los elementos DwC.

Navegar en la pestaña **"Plantilla"** para identificar los elementos _Darwin Core_ que están marcados con la convención de letra de color naranja (Fig. 2); estos son los elementos obligatorios.

![Figura 2. Convención en color naranja de los elementos obligatorios en la plantilla de eventos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estandarizacion-darwincore-eventos/Fig2_C3Eventos_Obligatorios.png)
<sup>_Figura 2. Convención en color naranja de los elementos obligatorios en la **Plantilla de eventos**._</sup>

Adicionalmente, cuando se realiza una publicación de eventos de muestreo, también es necesario adicionar los registros biológicos obtenidos durante el muestreo, teniendo en cuenta los elementos obligatorios a documentar en los registros para la publicación de eventos. En este sentido, se debe revisar si los registros biológicos de la **"Hoja de registros"** del archivo <FONT FACE="monospace"><b>«Datos_Eventos_20_Registros»</b></FONT> cuentan con todos los elementos obligatorios para la publicación de eventos de muestreo, de acuerdo a la hoja de instrucciones de la **Plantilla de publicación de registros biológicos**.

## Paso 4 - Crear los elementos obligatorios 

Crear los elementos obligatorios faltantes en la **"Hoja de eventos"** del archivo <FONT FACE="monospace"><b>«Datos_Eventos_20_Registros»</b></FONT> a partir de la información del caso de estudio y los datos presentes en el archivo.
 
Algunos de los elementos obligatorios ya están documentados en el archivo de trabajo. Para estos casos, revise la definición del elemento en la plantilla de eventos y realice los ajustes correspondientes en los elementos.

## Paso 5 - Ajustar los datos  

Una vez que se hayan trasladado todos los datos del archivo a la **Plantilla de publicación**, se deben ajustar las columnas de acuerdo a las definiciones y vocabularios controlados del estándar _Darwin Core_ para cada elemento mapeado (Fig. 3A). Algunos elementos tienen un vocabulario controlado. En estos casos, se recomienda hacer clic en la pestaña **"Vocabulario"**  (Fig. 3B).

![Figura 3. Estructura de la plantilla de publicación.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estandarizacion-darwincore-eventos/Fig3_C3Eventos_Vocabulario.png)
<sup>_Figura 3. Estructura de la plantilla de publicación. A. Información del elemento en la pestaña “Definiciones”. B. Vocabulario controlado asociado al elemento presente en la pestaña **“Vocabulario”**._</sup>

### Paso 5.1 - Correspondencia del elemento eventID con el archivo de registros biológicos

Para la correcta publicación del evento, es necesario que  los registros biológicos tengan un <span class="tag is-success is-light"><i>eventID</i></span> que los relacione con la tabla de eventos, el cual debe ser **exactamente** igual al documentado en el archivo de eventos. 

Realizar los ajustes necesarios en el archivo de registros para que la información coincida (Fig. 4).

![Figura 4. Diferencia entre el eventID del evento de muestreo y el eventID documentado en los registros biológicos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estandarizacion-darwincore-eventos/Fig4_C3Eventos_Occurrence.png)
<sup>_Figura 4. Diferencia entre el <span class="tag is-success is-light"><i>eventID</i></span> del evento de muestreo y el eventID documentado en los registros biológicos._</sup>

## Paso 6 - Eliminar los elementos vacíos 

Eliminar los elementos DwC que quedaron vacíos en la plantilla. Es importante recordar que para la publicación solo se deben mantener los elementos que hayan sido documentados.

Al finalizar, la plantilla debe verse similar a la siguiente imagen (Fig. 5):

![Figura 5. Resultado final del mapeo de datos y la eliminación de elementos vacíos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_estandarizacion-darwincore-eventos/Fig5_C3Eventos_Resultados.png)
<sup>_Figura 5. Resultado final del mapeo de datos y la eliminación de elementos vacíos._</sup>

## Paso 7 - Verificación del resultado

Descarga y compara el siguiente archivo, estandarizado según las definiciones del Darwin Core, con el archivo que se trabajó en el laboratorio para identificar aciertos y posibilidades de mejora. ¿Quedaron correctamente estructurados los eventos de muestreo?

- [<FONT FACE="monospace"><b>«Archivo estandarizado»</b></FONT>](https://docs.google.com/spreadsheets/d/1shjhSdcrs4whaGYtwYgadAwacUXWx1Fq/edit?usp=sharing&ouid=115826178704209548021&rtpof=true&sd=true){:target="_blank"}

****
**¡Felicitaciones!**

El conjunto de datos de eventos de muestreo ha sido estandarizado según el _Darwin Core_ y está listo para ser publicado.

****

**Citación**

> Marentes E., Ortíz R., Lozano J., Plata C. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
