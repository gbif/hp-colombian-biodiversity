---
layout: heroImage
title: Darwin Core - DwC
description: Estándar internacional para el manejo de datos sobre biodiversidad
background: https://inaturalist-open-data.s3.amazonaws.com/photos/239910960/large.jpg
imageLicense: |
  _Sula leucogaster_ Fotografía de: A.Davey via [Flickr](https://flic.kr/p/22dCn2h)
height: 41vh
permalink: /estandar-eml/
toc: true
---


Siguiendo las recomendaciones y acciones a nivel global, el modelo de publicación del SiB Colombia implementa el Darwin Core debido a su filosofía de fácil uso, lo que ha permitido adaptarlo a las necesidades nacionales de múltiples organizaciones que comparten sus datos sobre biodiversidad a través del sistema. El principio fundamental de este estándar es tener un lenguaje común para referirse a los diferentes componentes que puede tener un dato sobre biodiversidad, casi como aprender un nuevo idioma universalmente aceptado para hablar del nombre científico, el colector, la fecha, entre otros.

El estándar consiste en una serie de términos o elementos que tiene asociada una definición semántica fácilmente reconocible por personas y por máquinas, de forma que sea interpretable para asociar a cada término los datos que mejor se ajustan a su definición (Darwin Core Task Group, 2022). Estos términos se agrupan en clases o categorías para facilitar la navegación entre sus más de 180 definiciones, estas categorías son: 


* Elementos de Registro
* Registro Biológico
* Organismo
* Muestra del Material
* Evento
* Ubicación
* Contexto Geológico
* Identificación
* Taxón

El modelo de datos conceptual del estándar es un esquema con una tabla principal, mejor conocida como core. Los core del DwC son: listas de especies (taxon Core), registros biológicos (occurrence Core) y registros de eventos de muestreo (event Core). Por otro lado, el DwC se compone de categorías que se utilizan para agrupar conjuntos de elementos según su naturaleza. A su vez, cada elemento está conformado por una definición, especificaciones y requerimientos. Los elementos pueden hacer parte de todos o algunos de los core.

Adicionalmente, existen extensiones que se pueden asociar principalmente al core. Las extensiones también están conformadas por elementos, los cuales son usados para documentar información adicional y específica que no se relaciona dentro del core, Por ejemplo, la descripción de las especies, rasgos funcionales, información genética, entre otros. En este sentido, las extensiones pueden ser compatibles con todos o algunos de los core.

Estas definiciones son administradas y mantenidas por  TDWG, específicamente por el Darwin Core maintenance group en el sitio web oficial (Darwin Core Task Group, 2022). Sin embargo, desde el EC-SiB hemos realizado un esfuerzo por hacer más accesible esta documentación y superar las posibles barreras del idioma. Por tal motivo, disponemos en nuestro sitio web (biodiversidad.co) de una documentación adaptada en la que se pueden encontrar todos los elementos definidos en español y con ejemplos aterrizados al contexto nacional para facilitar la interpretación y uso del estándar:

Botón [Documentación en línea] https://biodiversidad.co/compartir/estandar-darwin-core/
Botón [Conoce las Plantillas DwC] https://biodiversidad.co/recursos/plantillas-dwc
 

El estándar Darwin Core (DwC) permite la consolidación de datos sobre biodiversidad para compartir, usar y reusar la información de manera organizada, clara y completa a través de un marco estable, sencillo y flexible para consolidar datos sobre biodiversidad procedentes de diferentes fuentes. 
Los datos publicados bajo el estándar se comparten en el formato Darwin Core Archive (DwC-A), que es el formato de archivo de intercambio de datos más utilizado en la red GBIF y consiste en un archivo comprimido que contiene:
Archivo de datos: un archivo de datos separado por tabulaciones que contiene, según el tipo de publicación, los registros biológicos (occurrence.txt), especies (taxon.txt) o eventos (event.txt), asociados a la publicación.
Archivo de metadatos: este archivo "eml.xml" almacena toda la información que describe el contenido del conjunto de datos descargado en un formato de lenguaje de marcado conocido como XML.
Un archivo de metadatos: este archivo "meta.xml" describe la estructura del archivo Darwin Core para que el software pueda procesar todo el archivo automáticamente basado en el estándar EML.
Archivos de extensiones: Si la publicación cuenta con extensiones Darwin Core, estas también se incluyen dentro del archivo DwC-A. El nombre del archivo varía según la extensión. Algunos ejemplos son: multimedia.txt, measurementorfact.txt, description.txt, resourcerelationship.txt, distribution.txt.
Por último, el estándar Darwin Core no es estático, por lo que se encuentra en constante evolución, manteniéndose siempre bajo los principios que lo originaron. En ese sentido, el grupo de trabajo de TDWG recibe retroalimentación por parte de sus usuarios a través de su repositorio en GitHub y realiza mesas de discusión y socialización anuales sobre los cambios en el estándar. Las actualizaciones pueden verse en la página oficial de TDWG.

Enlaces para conocer más sobre este estándar:

* [¿Qué es Darwin Core y por qué es importante?](https://www.gbif.org/es/darwin-core)
* [Aprendiendo un nuevo idioma, Darwin Core](https://youtu.be/nYGu8KY_K6U)
* [Manual Darwin Core de OBIS](https://obis.org/manual/)
