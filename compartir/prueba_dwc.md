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

## Categorías DwC

### Elementos de Registro

|    |    |    |    |    |
| ---|--- |--- |--- |--- |
| [**basisOfRecord** (Base del registro)](#elem001) | [**type** (Tipo)](#elem002) | [**institutionCode** (Código de la institución)](#elem003) | [**institutionID** (ID de la institución)](#elem004) |
| [**collectionCode** (Código de la colección)](#elem005) | [**collectionID** (ID de la colección)](#elem006) | [**datasetName** (Nombre del conjunto de datos)](#elem007) | [**datasetID** (ID del conjunto de datos)](#elem008) |
| [**modified** (Modificado)](#elem009) | [**language** (Idioma)](#elem010) | [**license**(Licencia)](#elem011) | [**rightsHolder** (Titular de los derechos)](#elem012) | 
| [**accessRights** (Derechos de acceso)](#elem013) | [**bibliographicCitation** (Citación bibliográfica)](#elem014) | [**references** (Referencias)](#elem015) | [**ownerInstitutionCode** (Código de la institución propietaria)](#elem016) |
| [**informationWithheld** (Información retenida)](#elem017) | [**dataGeneralizations** (Generalización de los datos)](#elem018) | [**dynamicProperties** (Propiedades dinámicas)](#elem019) | |

<a name="elem001">**basisOfRecord** (Base del registro)</a>

|    |    |
| ---|--- |
| Definición | Denota el origen o evidencia específica de la que se deriva el organismo. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| Comentarios | Sólo las colecciones biológicas pueden documentar PreservedSpecimen, si el registro corresponde a un espécimen depositado, pero el reporte no lo genera la colección biológica, se documenta HumanObservation y se documentan los elementos collectionCode, catalogNumber y disposition. |
| Elementos relacionados | type |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_ |
| [Vocabulario controlado](https://hp-colombian-biodiversity.gbif-staging.org/compartir/prueba_dwc#vocabularios-controlados) | PreservedSpecimen, HumanObservation, LivingSpecimen, FossilSpecimen, MachineObservation, MaterialSample, MaterialCitation |
|    |    |

<a name="elem002">**type (Tipo)**</a>

|    |    |
| ---|--- |
| Definición | Especifica el tipo de evidencia que da origen al registro, ampliando la información presente en el elemento basisOfRecord. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| Elementos relacionados | basisOfRecord |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_, Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](https://hp-colombian-biodiversity.gbif-staging.org/compartir/prueba_dwc#vocabularios-controlados) | Stillmage, MovingImage, Sound, PhysicalObject, Event |
|    |    |

<a name="elem003">**institutionCode** (Código de la institución)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la institución que custodia el espécimen o la información del registro; seguido por su acrónimo en paréntesis, si tiene. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS), Universidad de Antioquia (UdeA), Jardín Botanico de Bogotá José Celestino Mutis (JBB) |
| Elementos relacionados | institutionID |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem004">**institutionID** (ID de la institución)</a>

|    |    |
| ---|--- |
| Definición | Un identificador, preferiblemente el NIT, de la institución registrada en el elemento institutionCode. |
| Ejemplo | 586.697.465-1, 890.105.528-3, 860.030.197-0 |
| Elementos relacionados | institutionCode |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem005">**collectionCode** (Código de la colección)</a>

|    |    |
| ---|--- |
| Definición | El nombre, acrónimo, código alfanumérico, o iniciales que identifican la colección o conjunto de datos del que procede el organismo. Si corresponde a una colección biológica registrada en el Registro Único Nacional de Colecciones Biológicas - RNC (http://rnc.humboldt.org.co/admin/index.php/registros/colecciones), se puede emplear el acrónimo allí registrado, aunque también es válido el uso del acrónimo que implemente la colección internamente. |
| Ejemplo | COL, ANDES-E, FMB |
| Elementos relacionados | collectionID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="elem006">**collectionID** (ID de la colección)</a>

|    |    |
| ---|--- |
| Definición | EUn identificador de la colección registrada en el elemento collectionCode. Si corresponde a una colección biológica registrada en el Registro Único Nacional de Colecciones Biológicas - RNC (http://rnc.humboldt.org.co/admin/index.php/registros/colecciones), se debe emplear el identificador allí registrado. En tal caso documentar: [RNC:]+[Número de la colección], sin espacios. |
| Ejemplo | RNC:001, RNC:010, RNC:250 |
| Elementos relacionados | collectionCode |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="elem007">**datasetName** (Nombre del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | El nombre del conjunto de datos del cual se deriva el registro biológico (observación, colecta o evento).<br> De acuerdo al origen del registro biológico, identifique a cuál de los siguientes casos corresponde y construya este identificador según las indicaciones del caso: (i) El registro biológico proviene de una entidad vinculada y adscrita al Ministerio de Medio Ambiente y Desarrollo Sostenible que no requiere un permiso de recolección. Nombre del convenio o proyecto marco de acuerdo a lo documentado en el elemento datasetID (ii) El registro biológico proviene de un proyecto amparado por un permiso de recolección de especímenes o acceso a recursos genéticos de acuerdo a lo establecido en el Decreto 1076 de 2015. Nombre del titular del permiso (iii) El registro biológico proviene de un espécimen depositado en una colección biológica por solicitud expresa de una autoridad ambiental o gubernamental mediante un acto legal. Por ejemplo, en los casos de incautación de fauna y flora silvestre por tráfico de especies. Se documentan las palabras ‘Acto Legal’ (iv) El registro biológico proviene de un espécimen preservado en una colección biológica y legalizado a través de una amnistía. Se documentan la palabra ‘Amnistía’ (v) El registro biológico proviene de un espécimen obtenido por medio de una colecta fortuita, por ejemplo en los casos de pesca accidental, atropellamiento y choqué contra edificaciones, entre otros. Se documentan las palabras ‘Colecta Fortuita’ |
| Ejemplo | Colombia Bio-Fondo Adaptación-Boyacá Bio, Universidad de Caldas-Cenipalma- Pedro Pérez, Acto Legal, Amnistía,Colecta Fortuita |
| Elementos relacionados | datasetNameID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |

<a name="elem008">**datasetID** (ID del conjunto de datos)</a>


|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro biológico (observación, colecta o evento). De acuerdo al origen del registro biológico, identifique a cuál de los siguientes casos corresponde y construya este identificador según las indicaciones del caso (i) El registro biológico proviene de una entidad vinculada y adscrita al Ministerio de Medio Ambiente y Desarrollo Sostenible que no requiere un permiso de recolección. Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios: Acrónimo de la entidad, Número del convenio, proyecto marco o programa, Número del sub-proyecto, o sub-convenio, si existen, Año de inicio del convenio o proyecto.(ii) El registro biológico proviene de un proyecto amparado por un permiso de recolección de especímenes o acceso a recursos genéticos de acuerdo a lo establecido en el Decreto 1076 de 2015.Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios: Acrónimo de la autoridad ambiental que otorgó el permiso, Número de la resolución donde se otorga el permiso, Año de expedición del permiso (iii) El registro biológico proviene de un espécimen depositado en una colección biológica por solicitud expresa de una autoridad ambiental o gubernamental mediante un acto legal. Por ejemplo, en los casos de incautación de fauna y flora silvestre por tráfico de especies. Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios: La palabra ‘ACTO_LEGAL’, Acrónimo de la autoridad ambiental o gubernamental que genera el acto legal, Identificador del proceso, corresponde el número del acto legal emitido por la autoridad competente. Cuando la autoridad no genere un identificador del acto legal, corresponde al identificador del proceso asignado internamente por la colección. Año de expedición del acto legal.(iv) El registro biológico proviene de un espécimen preservado en una colección biológica y legalizado a través de una amnistía.Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios: La palabra ‘AMNISTÍA’, Número de la resolución donde se otorga la amnistía, Año de expedición de la amnistía |
| Ejemplo | IAvH:CE16-062:8956:2016/SINCHI:CE17-845:2017, ANLA:1608:2017/CORNARE:5D800FGH:2015, ACTO_LEGAL:CORMACARENA:34f-19:2017/ACTO_LEGAL:POLICIA_AMBIENTAL:PF-19075C:201, AMNISTÍA:8962:2019/AMNISTÍA:59VI-196:2018 |
| Elementos relacionados | datasetName |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem009">**modified** (Modificado)</a>

|    |    |
| ---|--- |
| Definición | La fecha más reciente en la que se haya modificado el registro. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010, 2010-01,2010-01-17,2009/2010,2009-02/2010-01,2009-02/10,2009-02-12/2009-10-08,2010-01-17/18 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem010">**language** (Idioma)</a>

|    |    |
| ---|--- |
| Definición | El idioma del conjunto de datos. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 639-1 de 2 letras en minúscula, como se muestra a continuación:es (=Para español), en (=Para inglés) |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_, Lista de chequeo _(Recomendado)_, Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](https://hp-colombian-biodiversity.gbif-staging.org/compartir/prueba_dwc#vocabularios-controlados) | Consultar en: http://www.loc.gov/standards/iso639-2/php/code_list.php |
|    |    |

<a name="elem011">**license** (Licencia)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos, licencias o permisos que establece el publicador sobre el uso del recurso. Se recomienda no documentar este elemento debido a que la licencia se especifica con mayor detalle en los metadatos que acompañan la publicación del conjunto de datos. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem012">**rightsHolder** (Titular de los derechos)</a>

|    |    |
| ---|--- |
| Definición | El nombre de persona u organización propietaria o administradora de los derechos sobre el recurso. |
| Ejemplo | Secretaria de Agricultura, Ministerio de Medio Ambiente, Secretaría Distrital de Ambiente |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem013">**accessRights** (Derechos de acceso)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos de acceso o restricciones basadas en políticas de privacidad, seguridad, u otras. |
| Ejemplo | Sólo para uso no comercial |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem014">**bibliographicCitation** (Citación bibliográfica)</a>

|    |    |
| ---|--- |
| Definición | Indica la manera de citar el registro cuando sea utilizado, incluyendo la referencia del recurso al que pertenece el registro. Se recomienda incluir el doi si se tiene junto con los detalles bibliográficos para identificar el recurso claramente. |
| Ejemplo | Raz L, Agudelo H (2019). Herbario Nacional Colombiano (COL). Versión 13.12. Universidad Nacional de Colombia. Occurrence dataset https://doi.org/10.15472/ea8sek. occurrenceID: 1a399be0-9ca9-4efe-84be-b8974a5548fc |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem015">**references** (Referencias)</a>

|    |    |
| ---|--- |
| Definición | Una URL a un recurso asociado, el cual es de alguna forma referenciado o citado por el registro descrito. |
| Ejemplo | http://arctos.database.museum/guid/MVZ:Mamm:165861, https://www.gbif.org/species/2474724 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem016">**ownerInstitutionCode** (Código de la institución propietaria)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo (o acrónimo) de la institución que tiene la propiedad del objeto o de la información consignada en el registro. Usar sólo si la organización propietaria de los datos es diferente a la organización publicadora consignada en el elemento institutionCode. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS), Celsia S.A. E.S.P. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem017">**informationWithheld** (Información retenida)</a>

|    |    |
| ---|--- |
| Definición | Información adicional que existe sobre el registro, pero que no ha sido compartida en la publicación. |
| Ejemplo | La información de ubicación no es provista para especies amenazadas, La identidad de los colectores es retenida, Pregunte acerca de muestras de tejido |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Lista de chequeo _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem018">**dataGeneralizations** (Generalización de los datos)</a>

|    |    |
| ---|--- |
| Definición | Medidas adoptadas para que los datos compartidos sean menos específicos o completos. Sugiere que los datos con mayor detalle existen y pueden estar disponibles bajo petición. |
| Ejemplo | Coordenadas generalizadas a partir de las coordenadas originales del GPS a la celda más cercana de la grilla. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem018">**dynamicProperties** (Propiedades dinámicas)</a>

|    |    |
| ---|--- |
| Definición | Una lista de las medidas, hechos o características adicionales sobre el organismo. Su intención es proporcionar un mecanismo estructurado para la representación de los datos. Debe estar documentado en el esquema de codificación JSON {"Medida":"Valor"}. Por facilidad en la documentación se recomienda el uso de la extensión del estándar Darwin Core de Medidas y Hechos en lugar de este elemento. |
| Ejemplo | {"pesoEnGramos":"120", "evidenciaDeLaIdentificación": "secuencia de citocromo B"}, {"alturaEnMetros":"1.5", "distribuciónDelTaxón": "Amazonas, Colombia", "temperaturaDelAireEnCelsius": "22"}, {"naturalezaDelID":"identificación de experto"} |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_, Evento de muestreo _(Opcional)_ |
|    |    |

### Registro Biológico

### Organismo

### Muestra del Material

### Evento

### Ubicación

### Contexto Geológico

### Identificación

### Taxón




## Extensiones DwC

### Relación del Recurso

### Medidas o Hechos Extendida

### Multimedia Simple

### Referencias de Literatura

### Distribución de la Especie

### Descripción del Taxón

### Perfil de la Especie

### Tipos y Especímenes

### Muestra del Material GGBN

### Preservación GGBN

### Permiso GGBN

### Preparación GGBN

### Amplificación GGBN

### Preestamo GGBN


## Vocabularios Controlados

