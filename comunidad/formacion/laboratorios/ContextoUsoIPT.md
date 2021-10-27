---
layout: documentation
permalink: /formacion/laboratorios/ContextoUsoIPT
title: "Laboratorio datos en contexto"
description: "Objetivo: aprender a utilizar la herramienta de publicación IPT."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Laboratorio datos en contexto

### Metas de aprendizaje

Las metas de aprendizaje de este laboratorio son:

1. Entender qué son los metadatos de un recurso.
2. Crear un recurso en la herramienta de publicación IPT.
3. Utilizar el IPT para la documentación de metadatos.


### Guías

1. Metadatos
2. Carga de datos
3. Mapeo de los datos

### Glosario


- **Metadatos**: información de contexto para un conjunto de datos, organización publicadora o colección biológica.
<br>

- **IPT**: es un software gratuito y de código abierto que se utiliza para publicar y compartir conjuntos de datos de biodiversidad a través del SiB Colombia, GBIF y OBIS. Además, permite integrar datos y metadatos en un mismo archivo conocido como DwC-A (_Darwin Core Archive_). Para una definición más detallada, puede consultar el artículo de GBIF sobre esta  herramienta de publicación:[https://www.gbif.org/es/ipt](https://www.gbif.org/es/ipt).
<br>

- **EML**: es un estándar para metadatos que consolida información sobre conjuntos de datos ecológicos en una serie de documentos XML modulares y extensibles. Todas las descripciones de los conjuntos de datos disponibles a través del SiB Colombia se basan en "metadatos" —es decir, la información sobre los datos— y utilizan el estándar EML de código abierto, eñ cual administra y mantiene _The Knowledge Network for Biocomplexity_.
Cada _Darwin Core Archive_ incluye un archivo EML (escrito en formato XML) en sus componentes, el cual contiene un perfil específico para estos conjuntos de datos. Este perfil es conocido como **Perfil de Metadatos de GBIF o GMP** ([GBIF Metadata Profile](https://eml.ecoinformatics.org/)).
<br>

- **DwC-A**: acrónimo del formato de archivo de intercambio de datos más utilizado en datos sobre biodiversidad. El formato corresponde a un archivo comprimido que contiene:
  - _Archivo de datos de ocurrencia_: un archivo de datos separado por tabulaciones que contiene, según el tipo de publicación, los registros (_occurrence.txt_), especies (_taxon.txt_) o eventos (event.txt) asociados a la publicación.
  - _Archivo de metadatos, "eml.xml"_: este archivo xml almacena una descripción de toda la información que contiene del conjunto de datos descargado.
  - _Archivo de metadatos de descriptor, "meta.xml"_: este archivo xml describe la estructura del archivo _Darwin Core_ para que el software pueda procesar todo el archivo automáticamente.
  - _Archivos de extensiones_: si la publicación cuenta con extensiones _Darwin Core_, estas también se incluyen dentro del archivo DwC-A. El nombre del archivo varía según la extensión. Algunos ejemplos son _multimedia.txt_, _measurementorfact.txt_, _description.txt_, _resourcerelationship.txt_, _distribution.txt_.
<br>

- **Datos abiertos:** información que cualquiera puede usar, la cual representa una filosofía y una práctica. Para que un dato sea verdaderamente abierto, debe cumplir ciertas características:
  - Permitir su uso para cualquier fin, sin restricciones legales ni técnicas.
  - Contar con acceso gratuito.
  - Tener un formato accesible y legible por computadores.
  - Estar publicados bajo una licencia que permita explícitamente su reutilización
<br>

- **Atribución**: dar crédito de manera adecuada. Esto se hace reconociendo la autoría de los publicadores (a través de sus nombres) y sus partes atribuidas, brindando un enlace a la licencia e indicando si se han realizado cambios. Ver [CCBY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es).
<br>

- **Licencias Creative Commons**: _Creative Commons_ (**CC**) es una organización sin ánimo de lucro creada en Estados Unidos, la cual cuenta con una red de afiliados voluntarios en todo el mundo. Desarrolló una serie de licencias que facilitan compartir legalmente el conocimiento y la creatividad. A continuación, se listan las licencias disponibles a través del IPT.
  - _Herramienta Creative Commons Cero**_: permite al público copiar, modificar, distribuir la obra y hacer comunicación pública de ella, incluso para fines comerciales, sin necesidad de pedir autorización. Al usar esta licencia, la obra publicada se dedica al dominio público y los publicadores renuncian a todos los derechos patrimoniales de autor en todo el mundo, incluyendo todos los derechos conexos y afines, en la medida permitida por la ley.
  - _Creative Commons Atribución 4.0 internacional_: permite al público distribuir, mezclar, ajustar y construir a partir de la obra, incluso con fines comerciales, siempre que su autoría sea reconocida. Esta es la licencia más abierta de las ofrecidas y se recomienda para una máxima difusión.
  - _Creative Commons Atribución No Comercial 4.0 internacional_: permite al público distribuir, remezclar, retocar y crear a partir de la obra de manera no comercial. Las obras derivadas deberán mencionar la autoría de la original y mantenerse sin fines comerciales, pero sus publicadores no están obligados a licenciarlas bajo las mismas condiciones.
<br>

- **DOI:** es la sigla para _Digital Object Identifier_ (Objeto de identificación digital). Consiste en un enlace permanente y abreviado que permite identificar un contenido electrónico. En este caso, un recurso publicado a través del SiB Colombia. Todos los recursos publicados a través del SiB Colombia tienen asignados un DOI, los cuales son proporcionados por la agencia de registro _Datacite_. Entre los beneficios del uso del DOI está la persistencia del recurso en el tiempo, sin importar si hay cambios en el nombre, la citación o los datos. Adicionalmente, el DOI permite rastrear el uso que se le da a los conjuntos de datos en artículos, revistas, libros, entre otros, a través de la web.
<br>

- **Recurso**: agrupación de un conjunto de datos y sus metadatos. Refleja la unidad de datos y la información que se puede publicar y consultar.

### Lecturas y recursos externos

**Recursos**

* [Video documentación de metadatos en la herramienta de publicación IPT](https://youtu.be/9WkH9hoHc8w)
* [Guía de referencia rápida del IPT](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#gu%C3%ADa-de-referencia-r%C3%A1pida)
* [Video _Introduction to publishing using the GBIF Integrated Publishing Toolkit (IPT)_](https://youtu.be/eDH9IoTrMVE)

**Lecturas**

* [Guía de acceso abierto del SiB Colombia](http://repository.humboldt.org.co/bitstream/handle/20.500.11761/35015/abc-sibcolombia.pdf?sequence=1&isAllowed=y)

