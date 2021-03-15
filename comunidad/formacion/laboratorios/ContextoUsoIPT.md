---
layout: documentation
permalink: /formacion/laboratorios/ContextoUsoIPT
title: "Laboratorio datos en contexto"
description: "Realizar la transformación y estandarización de fechas en distintos formatos, al formato ISO 8601 (AAAA-MM-DD), de manera automática y masiva."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Laboratorio datos en contexto

### Metas de aprendizaje

Al finalizar este laboratorio habrás aprendido:

1. Que son los metadatos de un recurso.
2. Crear un recurso en la herramienta de publicación IPT.
3. Utilizar el IPT para la documentación de metadatos.


### Guías

1. Metadatos
2. Carga de datos
3. Mapeo de los datos

### Glosario


- **Metadatos**: Información de contexto para un conjunto de datos, organización publicadora o colección biológica.

- **IPT**: [Herramienta de publicación](https://www.gbif.org/es/ipt), es un software gratuito y de código abierto que se utiliza para publicar y compartir conjuntos de datos de biodiversidad a través del SiB Colombia, GBIF y OBIS. Permite integrar datos y metadatos en un mismo archivo conocido como _DwC-A_.

- **EML**: es un estándar para metadatos que consolida información sobre conjuntos de datos ecológicos en una serie de documentos XML modulares y extensibles. Todas las descripciones de los conjuntos de datos disponibles a través del SiB Colombia se basan en ‘metadatos’ —es decir, la información sobre los datos— y utilizan el estándar EML de código abierto, que administra y mantiene The Knowledge Network for Biocomplexity.
Cada Darwin Core Archive incluye como uno de sus componentes un archivo EML (escrito en formato XML), que contiene un perfil específico para estos conjuntos de datos. Este perfil del EML es conocido como Perfil de Metadatos de GBIF o GMP ([GBIF Metadata Profile](https://eml.ecoinformatics.org/)).


- **DwC-A**: Este es el formato de archivo de intercambio de datos más utilizado en datos sobre biodiversidad, y consiste en un archivo comprimido que contiene:
  - **Archivo de datos de ocurrencia**: un archivo de datos separado por tabulaciones que contiene según el tipo de publicación, los registros (occurrence.txt), especies (taxon.txt) o eventos (event.txt), asociados a la publicación.
  - **Archivo de metadatos, "eml.xml"**: este archivo xml almacena toda la información que describe el contenido del conjunto de datos descargado.
  - **Archivo de metadatos de descriptor, "meta.xml"**: este archivo xml describe la estructura del archivo Darwin Core para que el software pueda procesar todo el archivo automáticamente.
  - **Archivos de extensiones**: Si la publicación contaba con extensiones Darwin Core, estas también se incluyen dentro del archivo DwC-A. El nombre del archivo varía según la extensión, algunos ejemplos son multimedia.txt, measurementorfact.txt, description.txt, resourcerelationship.txt, distribution.txt.


- **Datos abiertos:** Los datos abiertos son datos que cualquiera puede usar y que representan una filosofía y una práctica. Para que un dato sea verdaderamente abierto debe cumplir ciertas características:
  - Se pueden usar con cualquier fin, no tienen restricciones legales, ni técnicas.
  - El acceso debe ser gratuito
  - Su formato debe ser accesible, y legible por computadores.
  - Es explícito que cuenta con una licencia que permite su reutilización

- **Atribución**: dar crédito de manera adecuada, dando por ejemplo el nombre de los autores y partes atribuidas, brindando un enlace a la licencia, e indicando si se han realizado cambios. Ver [CCBY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es).


- **Licencias Creative Commons**:Creative Commons (**CC**) es una organización sin ánimo de lucro creada en Estados Unidos, que cuenta con una red de afiliados voluntarios en todo el mundo. Desarrolló una serie de licencias que facilitan compartir legalmente el conocimiento y la creatividad. A continuación se listan las licencias disponibles a través del IPT.
  - **Herramienta Creative Commons Cero**: permite al público copiar, modificar, distribuir tu obra y hacer comunicación pública de ella, incluso para fines comerciales, sin pedirte permiso. Al usar esta licencia, dedicas tu obra al dominio público y renuncias a todos tus derechos patrimoniales de autor en todo el mundo, incluyendo todos los derechos conexos y afines, en la medida permitida por la ley.
  - **Creative Commons Atribución 4.0 internacional**: permite al público distribuir, mezclar, ajustar y construir a partir de tu obra,incluso con fines comerciales, siempre quete sea reconocida la autoría de la creación original. Esta es la licencia más abierta de las ofrecidas. Recomendada para una máxima difusión y 
  - **Creative Commons Atribución No Comercial 4.0 internacional** : permite al público distribuir, remezclar, retocar, y crear a partir de tu obra de manera no comercial. A pesar de que sus nuevas obras deben siempre mencionarte y mantenerse sin fines comerciales, no están obligados a licenciar sus obras derivadas bajo las mismas condiciones.

- **DOI:** DOI es la sigla para Digital Object Identifier (Objeto de identificación digital), y consiste en un enlace permanente y abreviado que permite identificar un contenido electrónico, en este caso un recurso publicado a través del SiB Colombia. Todos los recursos publicados a través del SiB Colombia tienen asignados un DOI proporcionado por la agencia de registro Datacite. Entre los beneficios del uso del DOI está la persistencia del recurso en el tiempo sin importar si hay cambios en el nombre, la citación o los datos, y la facilidad de rastrear el uso de los datos en artículos, revistas, libros, etc. a través de la web.

- **Recurso**: agrupación de un conjunto de datos y sus metadatos, refleja la unidad de datos e información que se puede publicar y consultar.

### Lecturas y recursos externos

:wrench: **Recursos**

* [Video documentación de metadatos en la herramienta de publicación IPT](https://youtu.be/9WkH9hoHc8w)
* [Guía de referencia rápida del IPT](https://github.com/gbif/ipt/wiki/IPT2ManualNotes_ES.wiki#gu%C3%ADa-de-referencia-r%C3%A1pida)
* [Video _Introduction to publishing using the GBIF Integrated Publishing Toolkit (IPT)_](https://youtu.be/eDH9IoTrMVE)

:books: **Lecturas**

* [Guía de acceso abierto del SiB Colombia](http://repository.humboldt.org.co/bitstream/handle/20.500.11761/35015/abc-sibcolombia.pdf?sequence=1&isAllowed=y)

