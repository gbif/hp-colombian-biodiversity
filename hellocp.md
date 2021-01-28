---
layout: post
title: Estándares
background: https://via.placeholder.com/1000x400
description: Most layout assume the fields `background`, `title` and an optional `description`
---
This is my first table CP

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      | $12   |
| tables        | are useful    | $1    |

Este es el contenido de estándares

# Estándares
```Los estándares para compartir datos e información son elemento principal para integrar en el SiB Colombia millones de registros primarios sobre biodiversidad. ```

Los datos e información disponible a través del SiB Colombia y sus servicios asociados son una realidad gracias al aporte de cientos de organizaciones y personas que utilizan un lenguaje común para describir, registrar y estructurar miles de conjuntos de datos muy diversos. El uso de estándares comunes y globalmente aceptados, son el mecanismo principal para integrar y publicar a través del SiB Colombia los millones de registros primarios sobre biodiversidad disponibles actualmente.

Los **estándares** funcionan como un modelo o patrón de referencia para vincular información de manera homogénea y controlada. En el contexto de la biodiversidad, uno de los grupos más activos en el desarrollo y mantenimiento de **estándares** de datos a nivel mundial es [Biodiversity Information Standards](http://www.tdwg.org/). Como afiliado de la [International Union of Biological Science](http://www.iubs.org/), esta asociación científica y académica sin fines de lucro, se enfoca en el desarrollo de **estándares** para el intercambio de datos e información sobre biodiversidad. Los miembros de esta comunidad generalmente nos referimos a este grupo como TDWG (pronunciado *tad-wig*), en honor a sus orígenes como *Taxonomic Databases Working Group*

La lista de estándares sobre biodiversidad que ha desarrollado TDWG es amplia. Algunos se encuentran bajo evaluación y adopción por parte de los países y grupos participantes; otros han perdido vigencia y han sido reemplazados por nuevos, o simplemente mejorados a través del tiempo para contar con lineamientos claros y robustos para cada uno. En ciertos casos se realiza la incorporación o eliminación de conceptos que permiten que cada estándar llene las expectativas de los actores que hacen uso de ellos, siendo consensuados por las comunidades de expertos de TDWG en temas de informática de la biodiversidad y muchas otras disciplinas.

El SiB Colombia adopta y promueve el uso de algunos de los estándares respaldados por TDWG, para la estructuración, integración, intercambio y publicación a través de sus plataformas en línea.

## Darwin Core
El estándar **Darwin Core** (DwC) ofrece un marco estable, sencillo y flexible para consolidar datos sobre biodiversidad procedentes de diferentes fuentes. La mayoría de los conjuntos de datos compartidos a través del SiB Colombia se publican utilizando el formato *Darwin Core Archive *(DwC-A).

- [Conoce más sobre el Darwin Core](https://www.gbif.org/es/darwin-core).
- [Explora el Manual Darwin Core de iOBIS](https://obis.org/manual/).
- [Conoce los elementos del Darwin Core (a través de la Wiki de Gcube)](https://gcube.wiki.gcube-system.org/gcube/Darwin_Core_Terms).
- [Conoce los diferentes perfiles Darwin Core](https://sites.google.com/humboldt.org.co/wikisib/publicar/est%C3%A1ndares/darwin-core?authuser=0).
## Plinian Core
El estándar **Plinian Core** (PliC) es un estándar para compartir información principalmente a nivel de especie. Fue concebido como una forma de publicar información sobre especies y hacerla interoperable. Por “información de especies” nos referimos a todo tipo de propiedades y rasgos relacionados con los taxones (de cualquier rango), incluidas descripciones, nomenclatura, estado de conservación, manejo, historia natural, etc. Por lo tanto, el alcance de Plinian Core va más allá de las descripciones taxonómicas. Todas las fichas de especies compartidas a través del SiB Colombia se publican utilizando este estándar.

**Plinian Core** se encuentra actualmente en un periodo de consolidación oficial ante TDWG, y ha sido trabajado desde hace varios años por un grupo iberoamericano que busca fichas de especies interoperables, reutilizando tantos elementos como sea posible de otros estándares y evitar la redundancia.

- [Conoce más sobre el Plinian Core](https://github.com/tdwg/PlinianCore/wiki/About.)

## EML
**EML** o Ecological Metadata Language, es un estándar para metadatos que consolida información sobre conjuntos de datos ecológicos en una serie de documentos XML modulares y extensibles. Todas las descripciones de los conjuntos de datos disponibles a través del SiB Colombia se basan en ‘metadatos’ —es decir, la información sobre los datos— y utilizan el estándar **EML** de código abierto, que administra y mantiene The Knowledge Network for Biocomplexity.

 

Cada *Darwin Core Archive* incluye como uno de sus componentes un archivo **EML** (escrito en formato XML), que contiene un perfil específico para estos conjuntos de datos. Este perfil del EML es conocido como **Perfil de Metadatos de GBIF** o **GMP** (GBIF *Metadata Profile*)

- [Conoce más sobre el EML](https://eml.ecoinformatics.org/).
- [Conoce más sobre el GMP, Perfil de Metadatos de GBIF](https://github.com/gbif/ipt/wiki/GMPHowToGuide).

