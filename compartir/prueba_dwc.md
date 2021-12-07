---
layout: heroImage
title: Socios publicadores
description: Conoce a la red de organizaciones que aportan al conocimiento libre y gratuito sobre biodiversidad en el país.
background:  https://live.staticflickr.com/6164/6170947918_dc421f3980_b.jpg
imageLicense: |
  Fotografía de: Luis Alejandro Bernal Romero vía [Flickr](https://flic.kr/p/apiHPL) 
height: 41vh
toc: true
---

# CATEGORÍAS DWC

## ELEMENTOS DE REGISTRO

|    |    |    |    |    |
| ---|--- |--- |--- |--- |
| **basisOfRecord** (Base del registro) | **type** (Tipo) | **institutionCode** (Código de la institución) | **institutionID** (ID de la institución) |
| **collectionCode** (Código de la colección) | **collectionID** (ID de la colección) | **datasetName** (Nombre del conjunto de datos) | **datasetID** (ID del conjunto de datos) |
| **modified** (Modificado) | **language** (Idioma) | **license**(Licencia) | **rightsHolder** (Titular de los derechos) | 
| **accessRights** (Derechos de acceso) | **bibliographicCitation** (Citación bibliográfica) | **references** (Referencias) | **ownerInstitutionCode** (Código de la institución propietaria) |
| **informationWithheld** (Información retenida) | **dataGeneralizations**] (Generalización de los datos) | **dynamicProperties** (Propiedades dinámicas) | |


|  **basisOfRecord (Base del registro)**  |    |
| ---|--- |
| Definición | Denota el origen o evidencia específica de la que se deriva el organismo. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| Comentarios | Sólo las colecciones biológicas pueden documentar PreservedSpecimen, si el registro corresponde a un espécimen depositado, pero el reporte no lo genera la colección biológica, se documenta HumanObservation y se documentan los elementos collectionCode, catalogNumber y disposition. |
| Elementos relacionados | type |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_ |
| [Vocabulario controlado](https://hp-colombian-biodiversity.gbif-staging.org/compartir/prueba_dwc#vocabularios-controlados) | PreservedSpecimen, HumanObservation, LivingSpecimen, FossilSpecimen, MachineObservation, MaterialSample, MaterialCitation |
|    |    |


|  **type (Tipo)** |    |
| ---|--- |
| Definición | Especifica el tipo de evidencia que da origen al registro, ampliando la información presente en el elemento basisOfRecord. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| Elementos relacionados | basisOfRecord |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_, Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](https://hp-colombian-biodiversity.gbif-staging.org/compartir/prueba_dwc#vocabularios-controlados) | Stillmage, MovingImage, Sound, PhysicalObject, Event |
|    |    |

|  **institutionCode (Código de la institución)**  |    |
| ---|--- |
| Definición | El nombre completo de la institución que custodia el espécimen o la información del registro; seguido por su acrónimo en paréntesis, si tiene. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS), Universidad de Antioquia (UdeA), Jardín Botanico de Bogotá José Celestino Mutis (JBB) |
| Elementos relacionados | institutionID |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_, Evento de muestreo _(Opcional)_ |
|    |    |


|  **institutionID (ID de la institución)**  |    |
| ---|--- |
| Definición | Un identificador, preferiblemente el NIT, de la institución registrada en el elemento institutionCode. |
| Ejemplo | 586.697.465-1, 890.105.528-3, 860.030.197-0 |
| Elementos relacionados | institutionCode |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_, Evento de muestreo _(Opcional)_ |
|    |    |

|  **collectionCode (Código de la colección)**  |    |
| ---|--- |
| Definición | El nombre, acrónimo, código alfanumérico, o iniciales que identifican la colección o conjunto de datos del que procede el organismo. Si corresponde a una colección biológica registrada en el Registro Único Nacional de Colecciones Biológicas-RNC(http://rnc.humboldt.org.co/admin/index.php/registros/colecciones), se puede emplear el acrónimo allí registrado, aunque también es válido el uso del acrónimo que implemente la colección internamente. |
| Ejemplo | COL, ANDES-E, FMB |
| Elementos relacionados | collectionID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

|  **collectionID (ID de la colección)**  |    |
| ---|--- |
| Definición | EUn identificador de la colección registrada en el elemento collectionCode. Si corresponde a una colección biológica registrada en el Registro Único Nacional de Colecciones Biológicas-RNC (http://rnc.humboldt.org.co/admin/index.php/registros/colecciones), se debe emplear el identificador allí registrado. En tal caso documentar: [RNC:]+[Número de la colección], sin espacios. |
| Ejemplo | RNC:001, RNC:010, RNC:250 |
| Elementos relacionados | collectionCode |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

|   **datasetName (Nombre del conjunto de datos)** |    |
| ---|--- |
| Definición | El nombre del conjunto de datos del cual se deriva el registro biológico (observación, colecta o evento). De acuerdo al origen del registro biológico, identifique a cuál de los siguientes casos corresponde y construya este identificador según las indicaciones del caso: (i) El registro biológico proviene de una entidad vinculada y adscrita al Ministerio de Medio Ambiente y Desarrollo Sostenible que no requiere un permiso de recolección. Nombre del convenio o proyecto marco de acuerdo a lo documentado en el elemento datasetID (ii) El registro biológico proviene de un proyecto amparado por un permiso de recolección de especímenes o acceso a recursos genéticos de acuerdo a lo establecido en el Decreto 1076 de 2015. Nombre del titular del permiso (iii) El registro biológico proviene de un espécimen depositado en una colección biológica por solicitud expresa de una autoridad ambiental o gubernamental mediante un acto legal. Por ejemplo, en los casos de incautación de fauna y flora silvestre por tráfico de especies. Se documentan las palabras ‘Acto Legal’ (iv) El registro biológico proviene de un espécimen preservado en una colección biológica y legalizado a través de una amnistía. Se documentan la palabra ‘Amnistía’ (v) El registro biológico proviene de un espécimen obtenido por medio de una colecta fortuita, por ejemplo en los casos de pesca accidental, atropellamiento y choqué contra edificaciones, entre otros. Se documentan las palabras ‘Colecta Fortuita’ |
| Ejemplo | Colombia Bio-Fondo Adaptación-Boyacá Bio, Universidad de Caldas-Cenipalma- Pedro Pérez, Acto Legal, Amnistía,Colecta Fortuita |
| Elementos relacionados | datasetNameID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |

|  **datasetID (ID del conjunto de datos)**  |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro biológico (observación, colecta o evento). De acuerdo al origen del registro biológico, identifique a cuál de los siguientes casos corresponde y construya este identificador según las indicaciones del caso (i) El registro biológico proviene de una entidad vinculada y adscrita al Ministerio de Medio Ambiente y Desarrollo Sostenible que no requiere un permiso de recolección. Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios: Acrónimo de la entidad, Número del convenio, proyecto marco o programa, Número del sub-proyecto, o sub-convenio, si existen, Año de inicio del convenio o proyecto.(ii) El registro biológico proviene de un proyecto amparado por un permiso de recolección de especímenes o acceso a recursos genéticos de acuerdo a lo establecido en el Decreto 1076 de 2015.Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios: Acrónimo de la autoridad ambiental que otorgó el permiso, Número de la resolución donde se otorga el permiso, Año de expedición del permiso (iii) El registro biológico proviene de un espécimen depositado en una colección biológica por solicitud expresa de una autoridad ambiental o gubernamental mediante un acto legal. Por ejemplo, en los casos de incautación de fauna y flora silvestre por tráfico de especies. Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios: La palabra ‘ACTO_LEGAL’, Acrónimo de la autoridad ambiental o gubernamental que genera el acto legal, Identificador del proceso, corresponde el número del acto legal emitido por la autoridad competente. Cuando la autoridad no genere un identificador del acto legal, corresponde al identificador del proceso asignado internamente por la colección. Año de expedición del acto legal.(iv) El registro biológico proviene de un espécimen preservado en una colección biológica y legalizado a través de una amnistía.Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios: La palabra ‘AMNISTÍA’, Número de la resolución donde se otorga la amnistía, Año de expedición de la amnistía |
| Ejemplo | IAvH:CE16-062:8956:2016/SINCHI:CE17-845:2017, ANLA:1608:2017/CORNARE:5D800FGH:2015, ACTO_LEGAL:CORMACARENA:34f-19:2017/ACTO_LEGAL:POLICIA_AMBIENTAL:PF-19075C:201, AMNISTÍA:8962:2019/AMNISTÍA:59VI-196:2018 |
| Elementos relacionados | datasetName |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

|  **modified (Modificado)** |    |
| ---|--- |
| Definición | La fecha más reciente en la que se haya modificado el registro. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010, 2010-01,2010-01-17,2009/2010,2009-02/2010-01,2009-02/10,2009-02-12/2009-10-08,2010-01-17/18 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

|  **language (Idioma)**  |    |
| ---|--- |
| Definición | El idioma del conjunto de datos. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 639-1 de 2 letras en minúscula, como se muestra a continuación:es (=Para español), en (=Para inglés) |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_, Lista de chequeo _(Recomendado)_, Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](https://hp-colombian-biodiversity.gbif-staging.org/compartir/prueba_dwc#vocabularios-controlados) | Consultar en: http://www.loc.gov/standards/iso639-2/php/code_list.php |
|    |    |

## REGISTRO BIOLÓGICO

## ORGANISMO

## MUESTRA DEL MATERIAL

## EVENTO

## UBICACIÓN

## CONTEXTO GEOLÓGICO

## IDENTIFICACIÓN

## TAXÓN




# EXTENSIONES DWC

## RELACIÓN DEL RECURSO

## MEDIDAS O HECHOS EXTENDIDA

## MULTIMEDIA SIMPLE

## REFERENCIAS DE LITERATURA

## DISTRIBUCIÓN DE LA ESPECIE

## DESCRIPCIÓN DEL TAXÓN

## PERFIL DE LA ESPECIE

## TIPOS Y ESPECÍMENES

## MUESTRA DEL MATERIAL GGBN

## PRESERVACIÓN GGBN

## PERMISO GGBN

## PREPARACIÓN GGBN

## AMPLIFICACIÓN GGBN

## PRÉSTAMO GGBN


# VOCABULARIOS CONTROLADOS

