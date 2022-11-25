---
preTitle: 24 de noviembre, 2022
title: "¡Qué ningún dato se te escape! Conoce las plantillas de extensiones del estándar Darwin Core"
description: |
 _Conoce la documentación en español de las extensiones del estándar Darwin Core. Serán de utilidad para publicar datos sobre biodiversidad a través del SiB Colombia._
date: 2022-11-24
categories: ["Estándar DwC", "Datos abiertos", "Documentos", "TDWG", "2022"]
background: /assets/images/noticias_eventos/2022/2022-11-24-extensiones-dwc.jpg
imageLicense: |
---

_Con el fin de apoyar la publicación de datos sobre biodiversidad y expandir el conocimiento, hemos ampliado la sección de nuestra página web enfocada en la explicación y abordaje del estándar Darwin Core, aterrizado a las necesidades colombianas._

**El estándar Darwin Core (DwC) llega como una solución a la necesidad de compartir datos sobre biodiversidad a través de un lenguaje estructurado** que facilita el acceso, la disponibilidad y el intercambio de estos datos abiertos que pueden utilizarse globalmente en estudios y en la toma de decisiones para la conservación de los ecosistemas. 

El DwC cuenta con 171 términos que representan todas las posibilidades que el investigador tiene para describir los datos; sin embargo, estos elementos no son suficientes, en algunas ocasiones, para describir la información recolectada. Por ello, pensando en ofrecer un estándar lo suficientemente flexible, **el DwC cuenta con plantillas de extensiones que permiten incluir información adicional que enriquece las investigaciones, pero que no puede registrarse en las plantillas de datos.**

| :---: |
| Encuentra aquí la **última versión de las [plantillas del estándar Darwin Core](https://biodiversidad.co/recursos/plantillas-dwc/){:target="_blank"}**. |

Antes de definir si es necesario usar una extensión es importante que el socio publicador: 

1. Identifique si los datos son de uso interno, en caso de ser así no deben incluirse. 
2. Utilizar algunos elementos de comentarios. Si hay información que no tiene una estructura clara, pero se considera importante se puede incluir a nivel de comentario. 

En caso de contar con datos estructurados, se debe recurrir al uso de las extensiones del Darwin Core. **Estas extensiones permiten cubrir las necesidades adicionales que puede tener una comunidad específica y permiten que el estándar vaya evolucionando al responder a las nuevas fuentes de datos existentes hoy en día**. Estas extensiones se caracterizan por: 

1. **Asociarse al core por medio de un ID**. En el caso de los registros biológicos es un Occurrence ID, para eventos Event ID y para las listas un Taxon ID.

2. **Tener una relación de uno a muchos.** Por ejemplo, un registro biológico y muchas características representadas en una extensión. 

3. **Permiten conectar diferentes recursos externos al conjunto de datos**, estos recursos pueden ser recursos multimedia, genéticos, literatura, entre otros. Estas extensiones permiten enlazar a repositorios externos especializados en determinados formatos de información (imágenes, videos, etc.).

4. **Pueden estructurarse con el conjunto de datos principal o en plantillas independientes**.

También te puede interesar: [Actualización de la plantilla del estándar Darwin Core para publicar datos sobre biodiversidad](https://biodiversidad.co/post/2022/actualizacion-plantilla-dwc/){:target="_blank"}.

Las extensiones disponibles del DwC se agrupan según las organizaciones que las mantiene y al tipo de datos que se pueden publicar:

## Extensiones [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/es/){:target="_blank"} 

**Las siguientes extensiones son exclusivas para la publicación de datos asociados a listas de especies,** ya que ofrecen información complementaria de este tipo de datos, por ser adicional del taxón.

* **Descripción del taxón**: pueden ser del hábitat, la taxonomía, entre otros.
* **Distribución de especies**: país y/o localidad. Permite documentar si una especie es endémica, invasora, categoría de amenaza o si es una especie objeto de comercio.
* **Perfil de especies**: perfil en términos de hábitos. Por ejemplo, especies acuáticas de agua dulce o salobre. Permite entender dónde se pueden encontrar las especies.
* **Tipos y especímenes**: es de utilidad sobre todo para listas de especies de referencia, en este caso tienen que estar sustentadas por una evidencia.
* **Nombres comunes**: una especie puede tener uno o varios nombres comunes y con esta extensión se puede documentar ese nombre común y la región específica donde se utiliza. 

Entre las **extensiones exclusivas para eventos de muestreo** tenemos:  

* **GBIF Relevé**: permite documentar coberturas. Las coberturas de árboles, coberturas de arbustos, y diferentes tipos de cobertura en eventos de monitoreo principalmente asociados a flora. 

También hay **extensiones transversales que permiten complementar la información de los [diferentes tipos de datos que se pueden publicar](https://biodiversidad.co/compartir/tipos-de-datos/)**{:target="_blank"} (registros biológicos, eventos de muestreo, listas de especies): 

* **Identificadores alternativos**: podría documentar todos los ID que tenía ese registro biológico en toda su historia.
* **Referencias de literatura.**
* **Multimedia.**

## Extensiones [Global Genome Biodiversity Network (GGBN)](https://www.ggbn.org/ggbn_portal/){:target="_blank"} 

Estas extensiones son específicas para registros biológicos y fueron creadas con el objetivo de tener la información del voucher, de los tejidos y de la información genética.

Las primeras tres extensiones permiten documentar cómo se amplificó el gen de interés, si se hizo algún tipo de clonación y la información de la imagen del gen. 

* GGBN Amplification extension
* GGBN DNA cloning extension 
* GGBN Gel Image extension

Otras extensiones, aunque son pensadas en el contexto de información genética, también son muy útiles para información de colecciones, por ejemplo hay una extensión para términos de préstamos, muestras, permisos, preparación y preservación. 

* GGBN Loan Extension 
* GGBN Material Sample Extension 
* GGBN Permit Extension 
* GGBN Preparation Extension 
* GGBN Preservation Extension

Para el caso de Colombia, la extensión de permisos GGBN es de gran utilidad para todas aquellas organizaciones o investigadores que en cumplimiento con los decretos 1376 y 3016, hoy compilados en el decreto 1076 de 2015, necesitan reportar los datos para obtener **los permisos de recolección de especímenes y acceso a recursos genéticos con fines de investigación científica y elaboración de estudios ambientales**. Una regulación que se puso en marcha desde el año 2013 por el [Ministerio de Ambiente y Desarrollo Sostenible](https://www.minambiente.gov.co/){:target="_blank"}. Para comprender más sobre la diferencia entre publicar y reportar datos, te recomendamos este artículo: [Reportar y publicar datos sobre biodiversidad tienen alcances diferentes: ¿los conoces?](https://biodiversidad.co/post/2022/diferencias-entre-publicar-reportar-datos-biodiversidad/){:target="_blank"}.

También te puede interesar: [Guía para reportar datos](https://biodiversidad.co/compartir/guia-para-reportar/){:target="_blank"}.

## Extensiones [Biodiversity Information Standars (TDWG)](https://www.tdwg.org/){:target="_blank"}[ ](https://www.tdwg.org/)

Todas son para registros biológicos. Tres de ellas se incluyeron desde que se creó el estándar. 

* **Darwin Core Identification History**: permite saber la historia de identificación. Cuántas identificaciones se le han dado a un espécimen desde su origen. 
* **Measurement Or Facts**: Medidas y hechos.
* **Resource Relationship**: se puede describir si diferentes registros biológicos tienen una relación de parentesco, parasitismo o polinización. 
* **Chronometric Age**: se documenta todo el tema de datación, este tipo de extensión es importante para temas de fósiles.
* **Adubon Media Description / Simple Multimedia**: permite describir información multimedia. 

| :---: |
| Encuentra aquí la **última versión de las [plantillas de extensiones del estándar Darwin Core](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones){:target="_blank"}**. |

## ¿Qué voy a encontrar en las plantillas extensiones y cómo debo usarlas?

Debido a que la documentación que se tenía anteriormente a través de [GBIF](https://rs.gbif-uat.org/extensions.html){:target="_blank"} era muy técnica y a veces no tan descriptiva. Desde el SiB Colombia preparamos una documentación mucho más detallada y utilizando el mismo esquema de plantillas del Darwin Core. 

Estas extensiones funcionan muy similar al estándar mismo, hay elementos con definiciones y estructuras muy claras, y recomendaciones de uso. Los términos incluidos en estas plantillas se pueden utilizar según la necesidad de acuerdo al conjunto de datos. 

Conoce aquí la documentación en español que hemos preparado sobre las [extensiones del estándar Darwin Core](https://biodiversidad.co/compartir/estandar-darwin-core/#extensiones-dwc){:target="_blank"}. 
