---
layout: compose
title: Estándares 
description: Los estándares para compartir datos e información son un elemento principal para integrar en el SiB Colombia millones de registros primarios sobre biodiversidad.
background: https://live.staticflickr.com/4438/36979624526_78c0abc66d_b.jpg
imageLicense: |
  Corales de Providencia Fotografía de: Waywuwei vía [Flickr](https://flic.kr/p/YkLf2d)
toc: true
height: 41vh
composition:
  - type: heroImage # the block type
  - type: pageMarkdown
  - data: estandares.tarjetas
    type: features # the block type
---


La forma como se han documentado los datos sobre biodiversidad alrededor del mundo a lo largo de los siglos es casi tan diversa como la biología de los seres que habitan el planeta. Muchos de estos datos se han estado depositando de forma sistemática en las colecciones biológicas para salvaguardar la historia natural de las especies que habitan la Tierra. En este sentido, algunas prácticas de documentación han sido similares. Sin embargo, la variabilidad en la documentación que se ve entre colecciones, repositorios o fuentes académicas es alta. Al momento de querer compartir dichos datos para temas de investigación, educación o toma de decisiones, es común que sea problemático combinar diferentes fuentes, pues están todas organizadas en diferentes formatos (tablas, listas, documentos) o tipos de archivo (excel, txt, csv, json, shapefile, gdb, etc.). En este punto es donde se hace necesario homogeneizar la documentación de la biodiversidad y los estándares cobran relevancia, particularmente en los Sistemas de Información sobre Biodiversidad como el SiB Colombia. 

Los datos e información disponible a través del SiB Colombia y sus servicios asociados son una realidad gracias al aporte de cientos de organizaciones y personas que utilizan un lenguaje común para describir, registrar y estructurar miles de conjuntos de datos muy diversos. El uso de estándares comunes y globalmente aceptados es el mecanismo principal para integrar y publicar a través del SiB Colombia los millones de registros primarios sobre biodiversidad disponibles.

Los estándares funcionan como un modelo o patrón de referencia para vincular información de manera homogénea y controlada. En el contexto de la biodiversidad, uno de los grupos más activos en el desarrollo y mantenimiento de estándares de datos a nivel mundial es [Biodiversity Information Standards](http://www.tdwg.org/){:target="_blank"}. Esta asociación científica y académica sin ánimo de lucro se enfoca en el desarrollo de estándares para el intercambio de datos e información sobre biodiversidad. Los miembros de esta comunidad se refieren a dicho grupo como TDWG (pronunciado tad-wig), en honor a sus orígenes como Taxonomic Databases Working Group.

La lista de estándares sobre biodiversidad que ha desarrollado TDWG es amplia. Algunos se encuentran bajo evaluación y en proceso de admisión por parte de los países y grupos participantes; otros perdieron vigencia y fueron reemplazados por estándares nuevos o recibieron mejoras con el pasar de los años para contar con lineamientos claros y robustos. En ciertos casos, se realiza la incorporación o eliminación de conceptos que permiten que cada estándar llene las expectativas de los actores que los usan, siendo consensuados por las comunidades de expertos de TDWG en temas de informática de la biodiversidad y muchas otras disciplinas.

Actualmente, el SiB Colombia adopta y promueve el uso de tres estándares para la estructuración, integración, intercambio y publicación de datos e información a través de sus plataformas en línea, los cuales se dan a conocer a continuación:


___

## Darwin Core
El estándar **Darwin Core** (DwC) ofrece un marco estable, sencillo y flexible para consolidar datos sobre biodiversidad procedentes de diferentes fuentes. La mayoría de los conjuntos de datos compartidos a través del SiB Colombia se publican utilizando el formato *Darwin Core Archive (DwC-A)*.

- [Conoce más sobre el Darwin Core](https://www.gbif.org/es/darwin-core){:target="_blank"}.
- [Conoce más en el Ciclo de formación](https://youtu.be/nYGu8KY_K6U){:target="_blank"}.
- [Explora el Manual Darwin Core de OBIS](https://obis.org/manual/){:target="_blank"}.
- [Conoce los elementos del Darwin Core (a través de la Wiki de Gcube)](https://gcube.wiki.gcube-system.org/gcube/Darwin_Core_Terms){:target="_blank"}.
- [Conoce los diferentes plantillas Darwin Core](/recursos/plantillas-dwc).

___

## EML

**EML** o Ecological Metadata Language, es un estándar para metadatos que consolida información sobre conjuntos de datos ecológicos en una serie de documentos XML modulares y extensibles. Todas las descripciones de los conjuntos de datos disponibles a través del SiB Colombia se basan en ‘metadatos’ —es decir, la información sobre los datos— y utilizan el estándar **EML** de código abierto, que administra y mantiene The Knowledge Network for Biocomplexity.

 
Cada *Darwin Core Archive* incluye como uno de sus componentes un archivo **EML** (escrito en formato XML), que contiene un perfil específico para estos conjuntos de datos. Este perfil del EML es conocido como **Perfil de Metadatos de GBIF** o **GMP** (GBIF *Metadata Profile*)

- [Conoce más sobre el EML](https://eml.ecoinformatics.org/){:target="_blank"}.
- [Conoce más sobre el GMP, Perfil de Metadatos de GBIF](https://github.com/gbif/ipt/wiki/GMPHowToGuide){:target="_blank"}.
