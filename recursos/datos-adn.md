---
layout: heroImage
title: Datos de ADN
description: Conoce sobre la importancia de esto datos, las categorías admitidas, los recursos y términos de publicación.
background: https://live.staticflickr.com/3785/9659881785_3a805c4b65_b.jpg
imageLicense: |
   Microscopia _Coccinella septempunctata_ Fotografía de: Dr. Jan Michels vía [Flickr](https://flic.kr/p/fHBqiX) 
height: 41vh
---

En los últimos 20 años, los métodos moleculares han demostrado un enorme potencial para documentar la diversidad de la vida en la Tierra. Incluso, sustratos aparentemente inertes como suelo o agua de mar están llenos de señales de vida. Gracias al análisis de ADN, sabemos que organismos como hongos, insectos, bacterias, archaeas y oomycetes están presentes en todas partes, aunque no los veamos directamente<sup>1</sup>.

## El valor de publicar datos de ADN

La aplicación de métodos moleculares no se limita a los organismos invisibles; también son útiles para especies que se pueden observar, como algunos peces; sin embargo, registrarlos con métodos tradicionales puede ser costoso, invasivo y demandante. El ADN ambiental permite detectarlos de forma no invasiva y con menor esfuerzo<sup>2</sup>.
Los datos de ADN permiten registrar la presencia —incluso pasada— de organismos, sin necesidad de contar siempre con muestras físicas. Su publicación bajo licencias de acceso abierto permite realizar estudios sobre organismos, que sean visibles o no, aportan información clave sobre la biodiversidad y sus posibilidades de conservación.

## Categorías de datos

Los datos de ADN pueden organizarse en cinco categorías principales de acuerdo a la guía de publicación de datos derivados de ADN, publicada por GBIF. Para definir en qué categoría se ubican tus datos, utiliza el siguiente **árbol de decisión** que guía el proceso:

![Arbol de decisión](/recursos/images/arbol-de-decision-categorizacion-de-datos-derivados-de-adn.png "image_tooltip")

> Si tus datos son **marinos**, aplica esta estructura pero con las [recomendaciones respectivas](https://docs.gbif.org/publishing-dna-derived-data/es/#conjuntos-de-datos-marinos-y-el-sistema-de-informaci%C3%B3n-sobre-la-biodiversidad-oce%C3%A1nica-obis).

| Una vez identificada la categoría de tus datos, consulta el capítulo 2 de [Mapeo de datos de metabarcoding (eDNA) y barcoding ](https://docs.gbif.org/publishing-dna-derived-data/es/#empaquetado-y-mapeo-de-datos)de la guía, donde se explica cómo estructurarlos y compartirlos, acompañado de una descripción sencilla de cada categoría con ejemplos prácticos. |

Conoce algunos detalles y ejemplos de cada una de las categorías de datos de ADN.

### (desplegable por categoría)

1 **Registros biológicos derivados de ADN**: datos donde el ADN o detección a través de PCR es la única evidencia de la presencia de un organismo o comunidad, como en estudios de metagenómica, metabarcoding y eDNA. Ejemplos:

[Bacterias identificadas por medio de metabarcoding asociadas al proyecto piloto de investigación integral - PPII Platero, departamento de Santander](https://doi.org/10.15472/aiswoa) | Ecopetrol S.A.

[Bacterias y Arqueas de la transición Andino-Amazónica del departamento del Caquetá - Proyecto Colombia BIO](https://doi.org/10.15472/6sg16z) | Instituto Amazónico de Investigaciones Científicas - SINCHI

[Marine metagenomes from the bioGEOTRACES project](https://doi.org/10.15468/oifcho) | MGnify

2 **Registros biológicos enriquecidos**: material genético asociado a una observación o espécimen. Incluye datos de códigos de barras (barcoding) y algunos casos de metabarcoding con referencia a especímenes o colecciones de tejidos, lo que garantiza trazabilidad completa del material biológico. Ejemplos:

[Banco de tejidos de la Colección Biológica Grupo de Estudio Relación Parásito Hospedero](https://doi.org/10.15472/mbt7jq) | Universidad Nacional de Colombia

[Cepario del Laboratorio de Microbiología y Mutagénesis Ambiental de la UIS](https://doi.org/10.15472/uq6pal) | Universidad Industrial de Santander

[Chironomid Specimen records in the Chironomid DNA Barcode Database](https://doi.org/10.15468/hxhow5) | National Institute of Genetics, ROIS

> Para publicar en esta categoría se recomienda seguir la sección [2.2.1. mapeo de datos derivados de metabarcoding (eDNA) y barcoding](https://docs.gbif.org/publishing-dna-derived-data/en/#mapping-metabarcoding-edna-and-barcoding-data), que utiliza el core de registros biológicos y elementos específicos de la extensión de datos derivados de ADN.

> Las colecciones de tejidos requieren una documentación más detallada que incluye preparación, amplificación, permisos, préstamos y métodos de preservación, lo que permite relacionar especímenes preservados o eVouchers con los resultados genéticos. Cada muestra se puede rastrear mediante el número de catálogo y el conjunto de datos asociado, garantizando trazabilidad total del origen de la información molecular, todo interconectado a través del estándar Darwin Core y sus extensiones.

![Conjunto de datos - Tejidos registros biológicos](/recursos/images/conjunto-de-datos-tejidos-registros-biologicos-colecciones-de-especimenes.png "image_tooltip")

**Esquema**: ideal de publicación para colecciones de tejidos con información molecular, en el que los especímenes preservados se asocian a resultados genéticos mediante el estándar Darwin Core y sus extensiones.

3 **Detección de especies objetivo (qPCR/ddPCR)**: uso de ensayos moleculares específicos para confirmar la presencia o ausencia de una especie en muestras ambientales. El registro depende del resultado del análisis, no necesariamente de secuencias. Ejemplo:

[Location and transport of early life stages of Western Australian Dhufish Glaucosoma hebraicum](http://hdl.handle.net/102.100.100/97533) | Fisheries Research and Development Corporation

> Para realizar la publicación de datos en esta categoría, se recomienda seguir la sección [2.2.2. mapeo de datos derivdados de ddPCR/qPCR](https://docs.gbif.org/publishing-dna-derived-data/es/#mapping-ddpcr-qpcr-data), que utiliza el core de registros biológicos y algunos elementos específicos de la extensión de datos derivados de ADN.

4 **Referencia de nombres científicos**: nombres científicos derivados de ADN, provenientes de agrupamientos o denoising (modelos basados en corrección de errores), fuera de la taxonomía clásica (ej. Unidad taxonómicas operativas—OTU, Variantes de secuencia de amplicón—ASV, Barcode Index Numbers—BIN). Pueden generar librerías locales de referencia, pero tienen valor limitado si se publican como listas independientes. Ejemplo:

[International Barcode of Life project (iBOL) Barcode Index Numbers (BINs)](https://doi.org/10.15468/wvfqoi) | The International Barcode of Life Consortium

5 **Conjuntos de solo metadatos**: colecciones o estudios sin datos en línea (ej. no digitalizados). Publicada por medio del IPT bajo el estándar EML que ya utiliza el SiB Colombia, admite información general (autores, filiaciones, objetivos, DOIs, coberturas) que permite documentar información detallada de los métodos usados para la extracción, secuenciación y protocolos bioinformáticos usados en el procesamiento de los datos genéticos. Ejemplos:

[Muestras de suelo de bosque nublado en Cundinamarca para su caracterización: diversidad taxonómica y ecológica mediante una aproximación metagenómica](https://doi.org/10.15472/sqbcic)

[New Zealand Terrestrial Biocomplexity Survey](https://doi.org/10.15468/xnzrhq)

## Proceso para publicarlos

El **SiB Colombia** cuenta con un modelo de publicación que facilita compartir datos y hacerlos visibles en plataformas nacionales e internacionales, usando **estándares internacionales**. Los **datos genéticos** se pueden publicar principalmente a través de dos [tipos de datos](https://biodiversidad.co/compartir/tipos-de-datos/):

* **Registros biológicos:** presencia o ausencia de un organismo en un momento y lugar específicos (unidad mínima de información).
* **Eventos de muestreo:** acción metodológica realizada en un lugar y tiempo, a partir de la cual se generan observaciones de organismos.

### Paso a paso para publicar

1. **Prepara y organiza los datos**
    * Organiza los datos recolectados usando el [estándar Darwin Core](https://biodiversidad.co/estandar-darwin-core/).
    * Aplica plantillas de[ registros biológicos](https://biodiversidad.co/recursos/plantillas-dwc/#registros-biol%C3%B3gicos) o [eventos de muestreo](https://biodiversidad.co/recursos/plantillas-dwc/#eventos-de-muestreo).
    * Sigue la guía de GBIF, especialmente la sección de [mapeo de datos](https://docs.gbif.org/publishing-dna-derived-data/es/).
2. **Carga los datos en el IPT**
    * La herramienta *Integrated Publishing Toolkit (IPT)* es el repositorio oficial del SiB Colombia.
    * Si tu organización aún no es publicador del SiB Colombia, escríbenos a [sib@humboldt.org.co](mailto:sib@humboldt.org.co) para iniciar el proceso de inscripción. Si ya hace, continúa con tus credenciales hacia el IPT señalado por el Equipo Coordinador en: [Herramienta de publicación - SiB Colombia](https://biodiversidad.co/recursos/ipt/)
    * Documenta los **metadatos** que respondan: qué, cómo, cuándo, dónde y quién. Conoce el paso a paso en la [lista de tutoriales](https://www.youtube.com/watch?v=48biUad7aKk&list=PL_KzX3Rxxwb3FwwtGQPhbDgYYLN_b7hDv&index=6) en nuestro canal de Youtube.
3. **Selecciona la licencia de uso**
    * Escoger licencia de atribución y uso, según la [guía de acceso abierto del SiB Colombia](https://biodiversidad.co/recursos/acceso-abierto/).
4. **Publica los datos**
    * Los conjuntos obtienen un **DOI**.
    * Se integran automáticamente en plataformas como [SiB Colombia](https://biodiversidad.co/data), [GBIF](https://www.gbif.org), [OBIS ](https://www.gbif.org)y [GGBN](https://www.ggbn.org/ggbn_portal) para su consulta y uso abierto.

> *Disclaimer*: El SiB Colombia no es un repositorio de datos genéticos, sino un facilitador de acceso a los registros derivados y conectados a repositorios externos (NCBI, BOLD, etc.).

| **Conoce más en:**[ Guía de GBIF “Publicación de datos derivados de ADN”](https://docs.gbif.org/publishing-dna-derived-data/es) |

## Recursos para publicar

En el Equipo Coordinador del SiB Colombia hemos compilado algunos materiales y recursos para facilitar el proceso de publicación de los datos, entre los que se encuentra:

* 📑[ Plantilla con la extensión datos derivados de ADN](https://biodiversidad.co/recursos/plantillas-dwc/#extensiones): contiene todos los elementos disponibles en la extensión, las definiciones, ejemplos y elementos obligatorios.
* 🛠️[ Herramienta MDT (Metabarcoding Data Toolkit)](https://edna.biodiversidad.co): para datos que vienen estructurados bajo la estructura de tabla de OTU, tabla de muestras y de taxonomía.

> El ADN ambiental (eDNA) se reconoce como una nueva fuente clave de datos sobre biodiversidad. Para su publicación, el SiB Colombia está probando esta herramienta piloto desarrollada por GBIF, que convierte las tablas generadas en análisis de eDNA en formato [Darwin Core](https://biodiversidad.co/elementos-darwin-core). Esta herramienta trabaja con tres tablas: OTUs (conteo de lecturas detectadas por unidad taxonómica), Eventos (información del muestreo, fechas, métodos, ubicación y variables asociadas) y Taxones (secuencias y clasificación taxonómica lograda). Una vez cargados, los datos se mapean a Darwin Core, se procesan, se documentan con metadatos y quedan listos para publicación. Actualmente en fase de pruebas, el SiB invita a organizaciones interesadas a participar en el piloto compartiendo sus datos para evaluar la eficiencia de la herramienta y el proceso de publicación.


* 🎥 Tutoriales en nuestro canal de YouTube.
* Busca datos con información genética con la extensión de ADN, usando como base: [https://biodiversidad.co/data/?dwcaExtension=http%3A%2F%2Frs.gbif.org%2Fterms%2F1.0%2FDNADerivedData](https://biodiversidad.co/data/?dwcaExtension=http%3A%2F%2Frs.gbif.org%2Fterms%2F1.0%2FDNADerivedData). Para usar filtros mira:; para descargarlos:  

## Aclaraciones sobre licencias

El **SiB Colombia** no almacena datos genéticos, sino que enlaza los registros biológicos con repositorios externos como **NCBI** o **BOLD**, facilitando su búsqueda y acceso.

Además, promueve el uso de las **licencias asignadas por los publicadores** para garantizar un manejo adecuado de la información. Puedes revisar las licencias disponibles para la publicación [aquí](https://biodiversidad.co/recursos/acceso-abierto/).

## Más información

*Quizás te interese*:

Desde Minciencias con apoyo del grupo BIOS (Centro de Bioinformática y Biología computacional de Colombia), se ha desarrollado una herramienta que cuenta con módulos y bases de datos para facilitar estudios en **genómica y transcriptómica**, abarcando flujos de trabajo modulares que van desde el preprocesamiento de secuencias crudas hasta la anotación de genes y perfiles de expresión diferencial.

Para ejecutar estos análisis y visualizar los resultados finales, pueden acceder a **[3Bio](https://3bio.bios-io.co/#/dashboard/scientometric/Search)**. Tenga en cuenta que esta es una **herramienta externa** al SiB Colombia, diseñada para integrar estos procesos y facilitar la interpretación de sus datos.

## Referencias

1. Debroas D, Domaizon I, Humbert JF, Jardillier L, Lepère C, Oudart A & Taïb N (2017) Overview of freshwater microbial eukaryotes diversity: a first analysis of publicly available metabarcoding data. FEMS Microbiology Ecology 93(4): fix023. [https://doi.org/10.1093/femsec/fix023](https://doi.org/10.1093/femsec/fix023) 
2. Boussarie G, Bakker J, Wangensteen OS, Mariani S, Bonnin L, Juhel JB, Kiszka JJ, Kulbicki M, Manel S, Robbins WD & Vigliola L (2018) Environmental DNA illuminates the dark diversity of sharks. Science Advances 4(5): eaap9661. [https://doi.org/10.1126/sciadv.aap9661](https://doi.org/10.1126/sciadv.aap9661)
3. Abarenkov K, Andersson AF, Bissett A, Finstad AG, Fossøy F, Grosjean M, Hope M, Jeppesen TS, Kõljalg U, Lundin D, Nilsson RN, Prager M, Provoost P, Schigel D, Suominen S, Svenningsen C & Frøslev TG (2023) Publicación de datos derivados de ADN a través de plataformas de datos sobre biodiversidad, v1.3. Copenhagen: GBIF Secretariat.[ https://doi.org/10.35035/doc-vf1a-nr22](https://doi.org/10.35035/doc-vf1a-nr22).
