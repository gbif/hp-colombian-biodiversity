---
layout: heroImage
title: Estándar EML
description: El estándar de los metadatos
background: https://live.staticflickr.com/4688/38867942014_c05053282c_b.jpg
imageLicense: |
  _Sula leucogaster_ Fotografía de: A.Davey via [Flickr](https://flic.kr/p/22dCn2h)
height: 41vh
permalink: /estandar-eml/
toc: true
---

Para facilitar la interpretación de los datos y poderlos categorizar, organizar y publicar con un contexto adecuado, estos se acompañan con una serie de metadatos, comúnmente definidos como los datos sobre los datos. Por ejemplo, gracias a los metadatos es posible rastrear el uso de los datos y dar correcta atribución a sus autores. Los metadatos también requieren de un estándar para lograr una documentación estable y organizada. Por consiguiente, la publicación de datos a partir de la herramienta de publicación IPT (_Integrated Publishing Toolkit_), desarrollada por GBIF, adopta el [estándar EML](https://eml.ecoinformatics.org/){:target="_blank"}(Ecological Metadata Language) y lo adapta en el [GMP](https://www.google.com/url?q=https://www.gbif.org/sites/default/files/gbif_resource/resource-80640/gbif_metadata_profile_guide_en_v1.pdf&sa=D&source=docs&ust=1675484029146074&usg=AOvVaw2zt8OblrIbv8WVYMcCJqfy){:target="_blank"} (_GBIF Metadata Profile_).

El lenguaje de metadatos ecológicos (EML) tiene una sintaxis basada en el lenguaje de marcado XML y encapsula o etiqueta la información documentada respecto a la investigación a publicar. Por lo tanto, ha tenido un uso generalizado en las ciencias ambientales, de la tierra y también en otras disciplinas. Por este motivo, GBIF lo usa como referencia para construir el estándar que permite documentar la información de los conjuntos de datos que se publican a través de su infraestructura (GBIF, 2022).

El estándar EML define el vocabulario y la sintaxis para documentar datos de investigación en las ciencias ambientales y de la tierra, permitiendo describir el alcance espacial, temporal, taxonómico y temático de los datos, así como describir métodos y protocolos de investigación. De esta manera, el GMP toma algunos de los componentes del EML e incluye otras secciones para lograr responder las preguntas básicas de qué, quién, cuándo, dónde y cómo se obtuvieron los datos que enmarcan el contenido de la publicación. Esto se realiza a través de doce secciones, las cuales se describen a continuación: 

* Metadatos básicos
* Cobertura geográfica
* Cobertura taxonómica
* Cobertura temporal
* Palabras clave
* Partes asociadas
* Datos del proyecto
* Métodos de muestreo
* Referencias
* Datos de la colección
* Enlaces externos
* Metadatos adicionales

Todas las descripciones de los conjuntos de datos disponibles a través del SiB Colombia se basan en metadatos y utilizan el estándar *EML* de código abierto, que actualmente administra y mantiene _The Knowledge Network for Biocomplexity_. Cada Darwin Core Archive generado para los conjuntos de datos publicados a través del SiB Colombia incluye un archivo *EML* (escrito en formato XML), que contiene un perfil específico para estos conjuntos de datos.

Enlaces para conocer más sobre este estándar:
* [Ecological Metadata Language (EML)](https://eml.ecoinformatics.org/){:target="_blank"}
* [Guía práctica del perfil de metadatos de GBIF](https://ipt.gbif.org/manual/es/ipt/latest/gbif-metadata-profile){:target="_blank"}

Así mismo el GMP facilita la consolidación de artículos de datos que se pueden publicar en revistas especializadas para el intercambio y la preservación de datos científicos. El IPT incluye la funcionalidad de exportar los metadatos con el formato de un artículo de datos en un archivo de texto enriquecido (RTF). Para conocer más acerca de los artículos de datos, se pueden consultar los siguientes enlaces:

* [¿Por qué son importantes los artículos de datos?](https://youtu.be/SNcEf47CUCE){:target="_blank"}
* [Ciclo de formación 2020. Artículos de datos](https://youtu.be/z0JhWOdJKpI){:target="_blank"}
* [Data papers: Bringing data to light](https://vimeo.com/768543362){:target="_blank"}
