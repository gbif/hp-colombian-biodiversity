---
layout: heroImage
title: Estándar Darwin Core
description: Conoce sus elementos, definiciones y extensiones
background:  https://live.staticflickr.com/8362/8324738633_63da9ea6ce_h.jpg
imageLicense: |
  Fotografía de: Luis Alejandro Bernal Romero vía [Flickr](https://flic.kr/p/apiHPL) 
height: 41vh
toc: true
---

El estándar **Darwin Core (DwC)** permite la consolidación de datos sobre biodiversidad para compartir, usar y rehusar la información de manera organizada, clara y completa.

El modelo de datos conceptual del estándar es un esquema con una tabla principal, mejor conocida como _core_. Los _core_ del **DwC** son: **listas de especies** (taxon Core), **registros biológicos** (occurrence Core) o registros de **eventos de muestreo** (event Core).

El **DwC** está compuesto por **categorías** que se utilizan para agrupar conjuntos de **elementos** de acuerdo a su naturaleza. Cada **elemento** a su vez, está compuesto por una definición, especificaciones y requerimientos. Los **elementos** pueden hacer parte de todos o algunos de los _core_.
  
Adicionalmente, existen **extensiones** que se pueden asociar principalmente al _core_. Las **extensiones** también están conformadas por **elementos** los cuales son usados para documentar información adicional y específica que no se relaciona dentro del _core_ (ej., descripción de las especies, rasgos funcionales, información genética, entre otros). Las **extensiones** pueden ser compatibles con todos o algunos de los _core_.

En esta página se presenta una aplicación del **DwC** en español y enfocada a la necesidades de país, la cual contiene a mano derecha una tabla de contenido con las **categorías** y **extensiones** del estándar, que llevan a su vez al listado de **elementos** que conforman cada **categoría** o **extensión**. Dentro del listado de **elementos** es posible dirigirse directamente al **elemento** de interés en donde se encontrará la siguiente información detallada:

-	**Definición**: Texto que describe el alcance del **elemento**.
-	**Comentarios**:  Texto que complementa, a manera de anotación o aclaración, la información de la definición.
-	**Ejemplo**: Ejemplos textuales que hacen referencia a cómo se puede documentar el **elemento**.
-	**Elementos relacionados**: **Elementos** del estándar **DwC** que tienen relación estrecha con el **elemento** que esta siendo descrito.
-	_**Core (Obligatoriedad)**_: _core_ al que hace parte el **elemento** y su obligatoriedad dentro de cada uno de estos (opcional, condicional, obligatorio). 
-	**Vocabulario controlado**: Opciones de textos preestablecidos que deben documentarse de manera obligatoria dentro del elemento. No se puede documentar información diferente a la relacionada en los vocabularios controlados. Adicionalmente, en este campo se puede hacer un redireccionamiento al listado y definiciones de los vocabularios controlados del **elemento**.

- La documenteación oficial y en inglés del estándar se puede consultar en: [https://dwc.tdwg.org/terms/](https://dwc.tdwg.org/terms/)
- La documenteación oficial y en inglés de las extensiones:[https://tools.gbif.org/dwca-validator/extensions.do](https://tools.gbif.org/dwca-validator/extensions.do)

## Categorías DwC

### Elementos de Registro

|    |    |    |    |
| ---|--- |--- |--- |
| [**basisOfRecord**<br> (Base del registro)](#basisOfRecord) | [**type**<br> (Tipo)](#type) | [**institutionCode**<br> (Código de la institución)](#institutionCode) | [**institutionID**<br> (ID de la institución)](#institutionID) |
| [**collectionCode**<br> (Código de la colección)](#collectionCode) | [**collectionID**<br> (ID de la colección)](#collectionID) | [**datasetName**<br> (Nombre del conjunto de datos)](#datasetName) | [**datasetID**<br> (ID del conjunto de datos)](#datasetID) |
| [**modified**<br> (Modificado)](#modified) | [**language**<br> (Idioma)](#language) | [**license**<br> (Licencia)](#license) | [**rightsHolder**<br> (Titular de los derechos)](#rightsHolder) | 
| [**accessRights**<br> (Derechos de acceso)](#accessRights) | [**bibliographicCitation**<br> (Citación bibliográfica)](#bibliographicCitation) | [**references**<br> (Referencias)](#references) | [**ownerInstitutionCode**<br> (Código de la institución propietaria)](#ownerInstitutionCode) |
| [**informationWithheld**<br> (Información retenida)](#informationWithheld) | [**dataGeneralizations**<br> (Generalización de los datos)](#dataGeneralizations) | [**dynamicProperties**<br> (Propiedades dinámicas)](#dynamicProperties) | |
|    |    |    |    |

<br>
<br>

<a name="basisOfRecord">**basisOfRecord** (Base del registro)</a>

|    |    |
| ---|--- |
| Definición | Denota el origen o evidencia específica de la que se deriva el organismo. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| Comentarios | Sólo las colecciones biológicas pueden documentar PreservedSpecimen, si el registro corresponde a un espécimen depositado, pero el reporte no lo genera la colección biológica, se documenta HumanObservation y se documentan los elementos collectionCode, catalogNumber y disposition. |
| Elementos relacionados | type |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_ |
| [Vocabulario controlado](#vc_basisOfRecord) | PreservedSpecimen<br> HumanObservation<br> LivingSpecimen<br> FossilSpecimen<br> MachineObservation<br> MaterialSample<br> MaterialCitation |
|    |    |

<a name="type">**type** (Tipo)</a>

|    |    |
| ---|--- |
| Definición | Especifica el tipo de evidencia que da origen al registro, ampliando la información presente en el elemento basisOfRecord. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| Elementos relacionados | basisOfRecord |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](#vc_type) | Stillmage<br> MovingImage<br> Sound<br> PhysicalObject<br> Event |
|    |    |

<a name="institutionCode">**institutionCode** (Código de la institución)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la institución que custodia el espécimen o la información del registro; seguido por su acrónimo en paréntesis, si tiene. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS)<br> Universidad de Antioquia (UdeA)<br> Jardín Botánico de Bogotá José Celestino Mutis (JBB) |
| Elementos relacionados | institutionID |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="institutionID">**institutionID** (ID de la institución)</a>

|    |    |
| ---|--- |
| Definición | Un identificador, preferiblemente el NIT, de la institución registrada en el elemento institutionCode. |
| Ejemplo | 586.697.465-1<br> 890.105.528-3<br> 860.030.197-0 |
| Elementos relacionados | institutionCode |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="collectionCode">**collectionCode** (Código de la colección)</a>

|    |    |
| ---|--- |
| Definición | El nombre, acrónimo, código alfanumérico, o iniciales que identifican la colección o conjunto de datos del que procede el organismo. Aunque es válido el uso del acrónimo que implemente la colección internamente se recomienda hacer uso del acrónimo registrado en:<br><br> - GBIF Registry of Scientific Collections [(https://www.gbif.org/grscicoll/collection/search)](https://www.gbif.org/grscicoll/collection/search)<br> - Registro Único Nacional de Colecciones Biológicas-RNC [(http://rnc.humboldt.org.co/admin/index.php/registros/colecciones)](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones) |
| Ejemplo | COL<br> ANDES-E<br> FMB |
| Elementos relacionados | collectionID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="collectionID">**collectionID** (ID de la colección)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la colección registrada en el elemento collectionCode. Se recomienda hacer uso de los identificadores registrados en:<br><br> - GBIF Registry of Scientific Collections [(https://www.gbif.org/grscicoll/collection/search)](https://www.gbif.org/grscicoll/collection/search)<br> - Registro Único Nacional de Colecciones Biológicas-RNC [(http://rnc.humboldt.org.co/admin/index.php/registros/colecciones)](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones) |
| Ejemplo | GRSciColl:223644<br> RNC:250 |
| Elementos relacionados | collectionCode |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="datasetName">**datasetName** (Nombre del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | El nombre del conjunto de datos del cual se deriva el registro biológico (observación, colecta o evento).<br><br> De acuerdo al origen del registro biológico, identifique a cuál de los siguientes casos corresponde y construya este identificador según las indicaciones del caso:<br><br> (i) El registro biológico proviene de una entidad vinculada y adscrita al Ministerio de Medio Ambiente y Desarrollo Sostenible que no requiere un permiso de recolección. Nombre del convenio o proyecto marco de acuerdo a lo documentado en el elemento datasetID<br><br> (ii) El registro biológico proviene de un proyecto amparado por un permiso de recolección de especímenes o acceso a recursos genéticos de acuerdo a lo establecido en el Decreto 1076 de 2015. Nombre del titular del permiso<br><br> (iii) El registro biológico proviene de un espécimen depositado en una colección biológica por solicitud expresa de una autoridad ambiental o gubernamental mediante un acto legal. Por ejemplo, en los casos de incautación de fauna y flora silvestre por tráfico de especies. Se documentan las palabras ‘Acto Legal’<br><br> (iv) El registro biológico proviene de un espécimen preservado en una colección biológica y legalizado a través de una amnistía. Se documentan la palabra ‘Amnistía’<br><br> (v) El registro biológico proviene de un espécimen obtenido por medio de una colecta fortuita, por ejemplo, en los casos de pesca accidental, atropellamiento y choqué contra edificaciones, entre otros. Se documentan las palabras ‘Colecta Fortuita’ |
| Ejemplo | Colombia Bio<br> Fondo Adaptación<br> Boyacá Bio<br><br> Universidad de Caldas<br> Cenipalma<br> Pedro Pérez<br><br> Acto Legal<br><br> Amnistía<br><br> Colecta Fortuita |
| Elementos relacionados | datasetNameID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |

<a name="datasetID">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro biológico (observación, colecta o evento).<br><br> De acuerdo al origen del registro biológico, identifique a cuál de los siguientes casos corresponde y construya este identificador según las indicaciones del caso:<br><br> (i) El registro biológico proviene de una entidad vinculada y adscrita al Ministerio de Medio Ambiente y Desarrollo Sostenible que no requiere un permiso de recolección.<br> Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios:<br> - Acrónimo de la entidad<br> - Número del convenio, proyecto marco o programa<br> - Número del sub-proyecto, o sub-convenio, si existen<br> - Año de inicio del convenio o proyecto.<br><br> (ii) El registro biológico proviene de un proyecto amparado por un permiso de recolección de especímenes o acceso a recursos genéticos de acuerdo a lo establecido en el Decreto 1076 de 2015.<br> Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios:<br> - Acrónimo de la autoridad ambiental que otorgó el permiso<br> - Número de la resolución donde se otorga el permiso<br> - Año de expedición del permiso<br><br> (iii) El registro biológico proviene de un espécimen depositado en una colección biológica por solicitud expresa de una autoridad ambiental o gubernamental mediante un acto legal. Por ejemplo, en los casos de incautación de fauna y flora silvestre por tráfico de especies.<br> Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios:<br> -La palabra ‘ACTO_LEGAL’<br> -  Acrónimo de la autoridad ambiental o gubernamental que genera el acto legal<br> - Identificador del proceso, corresponde el número del acto legal emitido por la autoridad competente. Cuando la autoridad no genere un identificador del acto legal, corresponde al identificador del proceso asignado internamente por la colección<br> - Año de expedición del acto legal.<br><br> (iv) El registro biológico proviene de un espécimen preservado en una colección biológica y legalizado a través de una amnistía.<br> Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios:<br> - La palabra ‘AMNISTÍA’<br> - Número de la resolución donde se otorga la amnistía<br> - Año de expedición de la amnistía |
| Ejemplo | IAvH:CE16-062:8956:2016<br> SINCHI:CE17-845:2017<br><br> ANLA:1608:2017<br>CORNARE:5D800FGH:2015<br><br> ACTO_LEGAL:CORMACARENA:34f-19:2017<br>ACTO_LEGAL:POLICIA_AMBIENTAL:PF-19075C:201<br><br> AMNISTÍA:8962:2019<br>AMNISTÍA:59VI-196:2018 |
| Elementos relacionados | datasetName |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="modified">**modified** (Modificado)</a>

|    |    |
| ---|--- |
| Definición | La fecha más reciente en la que se haya modificado el registro. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/2010-01<br> 2009-02/10 <br>2009-02-12/2009-10-08<br> 2010-01-17/18 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="language">**language** (Idioma)</a>

|    |    |
| ---|--- |
| Definición | El idioma del conjunto de datos. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 639-1 de 2 letras en minúscula, como se muestra a continuación:<br><br> es (=Para español)<br> en (=Para inglés) |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_<br> Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](#vc_language) | Consultar en: [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php) |
|    |    |

<a name="license">**license** (Licencia)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos, licencias o permisos que establece el publicador sobre el uso del recurso. Se recomienda no documentar este elemento debido a que la licencia se especifica con mayor detalle en los metadatos que acompañan la publicación del conjunto de datos. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="rightsHolder">**rightsHolder** (Titular de los derechos)</a>

|    |    |
| ---|--- |
| Definición | El nombre de persona u organización propietaria o administradora de los derechos sobre el recurso. |
| Ejemplo | Secretaria de Agricultura<br> Ministerio de Medio Ambiente<br> Secretaría Distrital de Ambiente |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="accessRights">**accessRights** (Derechos de acceso)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos de acceso o restricciones basadas en políticas de privacidad, seguridad, u otras. |
| Ejemplo | Sólo para uso no comercial. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="bibliographicCitation">**bibliographicCitation** (Citación bibliográfica)</a>

|    |    |
| ---|--- |
| Definición | Indica la manera de citar el registro cuando sea utilizado, incluyendo la referencia del recurso al que pertenece el registro. Se recomienda incluir el doi si se tiene junto con los detalles bibliográficos para identificar el recurso claramente. |
| Ejemplo | Raz L, Agudelo H (2019). Herbario Nacional Colombiano (COL). Versión 13.12. Universidad Nacional de Colombia. Occurrence dataset https://doi.org/10.15472/ea8sek. occurrenceID: 1a399be0-9ca9-4efe-84be-b8974a5548fc |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="references">**references** (Referencias)</a>

|    |    |
| ---|--- |
| Definición | Una URL a un recurso asociado, el cual es de alguna forma referenciado o citado por el registro descrito. |
| Ejemplo | http://arctos.database.museum/guid/MVZ:Mamm:165861<br> https://www.gbif.org/species/2474724 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="ownerInstitutionCode">**ownerInstitutionCode** (Código de la institución propietaria)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo (o acrónimo) de la institución que tiene la propiedad del objeto o de la información consignada en el registro. Usar sólo si la organización propietaria de los datos es diferente a la organización publicadora consignada en el elemento institutionCode. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS)<br> Celsia S.A. E.S.P. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="informationWithheld">**informationWithheld** (Información retenida)</a>

|    |    |
| ---|--- |
| Definición | Información adicional que existe sobre el registro, pero que no ha sido compartida en la publicación. |
| Ejemplo | La información de ubicación no es provista para especies amenazadas<br> La identidad de los colectores es retenida<br> Pregunte acerca de muestras de tejido |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="dataGeneralizations">**dataGeneralizations** (Generalización de los datos)</a>

|    |    |
| ---|--- |
| Definición | Medidas adoptadas para que los datos compartidos sean menos específicos o completos. Sugiere que los datos con mayor detalle existen y pueden estar disponibles bajo petición. |
| Ejemplo | Coordenadas generalizadas a partir de las coordenadas originales del GPS a la celda más cercana de la grilla |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="dynamicProperties">**dynamicProperties** (Propiedades dinámicas)</a>

|    |    |
| ---|--- |
| Definición | Una lista de las medidas, hechos o características adicionales sobre el organismo. Su intención es proporcionar un mecanismo estructurado para la representación de los datos. Debe estar documentado en el esquema de codificación JSON {"Medida":"Valor"}. Por facilidad en la documentación se recomienda el uso de la extensión del estándar Darwin Core de Medidas y Hechos en lugar de este elemento. |
| Ejemplo | {"pesoEnGramos":"120", "evidenciaDeLaIdentificación": "secuencia de citocromo B"}<br> {"alturaEnMetros":"1.5", "distribuciónDelTaxón": "Amazonas, Colombia", "temperaturaDelAireEnCelsius": "22"}<br> {"naturalezaDelID":"identificación de experto"} |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

### Registro Biológico

|    |    |    |    |
| ---|--- |--- |--- |
| [**occurrenceID**<br> (ID del Registro biológico)](#occurrenceID) | [**catalogNumber**<br> (Número de catálogo)](#catalogNumber) | [**recordNumber**<br> (Número del registro)](#recordNumber) | [**recordedBy**<br> (Registrado por)](#recordedBy) |
| [**recordedByID**<br> (ID del registrador)](#recordedByID) | [**individualCount**<br> (Número de individuos)](#individualCount) | [**organismQuantity**<br> (Cantidad del organismo)](#organismQuantity) | [**organismQuantityType**<br> (Tipo de cantidad del organismo)](#organismQuantityType) |
| [**sex**<br> (Sexo)](#sex) | [**lifeStage**<br> (Etapa de desarrollo)](#lifeStage) | [**reproductiveCondition**<br> (Condición reproductiva)](#reproductiveCondition) | [**behavior**<br> (Comportamiento)](#behavior) | 
| [**establishmentMeans**<br> (Medios de establecimiento)](#establishmentMeans) | [**degreeOfEstablishment**<br> (Grado de establecimiento)](#degreeOfEstablishment) | [**pathway**<br> (Ruta de introducción)](#pathway) | [**occurrenceStatus**<br> (Estado del registro biológico)](#occurrenceStatus) |
| [**preparations**<br> (Preparaciones)](#preparations) | [**disposition**<br> (Disposición)](#disposition) | [**otherCatalogNumbers**<br> (Otros números de catálogo)](#otherCatalogNumbers) | [**associatedMedia**<br> (Medios asociados)](#associatedMedia) |
| [**associatedOccurrences**<br> (Registros biológicos asociados)](#associatedOccurrences) | [**associatedReferences**<br> (Referencias asociadas)](#associatedReferences) | [**associatedSequences**<br> (Secuencias asociadas)](#associatedSequences) | [**associatedTaxa**<br> (Taxones asociados)](#associatedTaxa) |
| [**occurrenceRemarks**<br> (Comentarios del registro biológico)](#occurrenceRemarks) |  |  |  |
|    |    |    |    |

<br>
<br>

<a name="occurrenceID">**occurrenceID** (ID del Registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único del registro biológico (observación, ejemplar, fotografía, etc.).<br><br> En ausencia de un identificador único global persistente, se recomienda construir uno a partir de la combinación:<br><br> Cuando pertenece a una observación: [código corto de la institución]:[palabra(s) clave del recurso]:[número de campo/número consecutivo]<br> Cuando pertenece a una colección: [código corto de la institución]:[código de la colección]:[número de catálogo].<br> No debe contener espacios en blanco o caracteres especiales.<br><br> Si usted ya maneja en su conjunto de datos un identificador único por registros biológico, puede usarlo como identificador en el conjunto de datos. |
| Ejemplo | Promigas:Compensacion-SanJuan:Fauna-00001<br> UCO:RESCATE_FAUNA_MULATOSII:1<br> UNIVALLE:CRM-UV:1974-001-1 |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_ |
|    |    |

<a name="catalogNumber">**catalogNumber** (Número de catálogo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador (preferiblemente único) asignado al espécimen, muestra o lote en la colección biológica. Puede repetirse en caso de que los especímenes están agrupados en la colección (Lote, Frasco, Caja, etc).<br><br> Debe documentarse de la misma forma que está en la etiqueta. |
| Ejemplo | 00001<br> 1974-001-1<br> 1732a<br> ANDES-E0813<br> Lepid0784 |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="recordNumber">**recordNumber** (Número del registro)</a>

|    |    |
| ---|--- |
| Definición | Un identificador dado al registro biológico en el momento en que fue registrado, sirve como un vínculo entre las anotaciones de campo y el registro biológico. No es el mismo catalogNumber, el cual es usualmente asignado una vez el espécimen ingresa a la colección. |
| Ejemplo | OPP 7107<br>  JARM-0008<br>  AFT 143 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="recordedBy">**recordedBy** (Registrado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas (observadores o recolectores) responsables de realizar el registro.<br><br> El colector u observador principal, especialmente si está asociado al recordNumber tomado en campo, se debe listar en primer lugar. Se debe mantener el mismo formato del nombre a lo largo de todos los registros y se recomienda evitar el uso de solo iniciales ya que esto genera ambigüedades para reconocer a las personas que realizaron el registro, de ser posible siempre escriba nombres completos. Documente el nombre de las personas y evite documentar nombres de grupos u organizaciones. |
| Ejemplo | Eduardo Amat García<br> Javier Maldonado Ocampo<br> Mónica Andrea Sánchez Torres \| Esteban Andrés Novoa López |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |
|    |    |

<a name="recordedByID">**recordedByID** (ID del registrador)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los ID de las personas (observadores o recolectores), grupos u organizaciones responsables de realizar el registro. Estos identificadores deben corresponder al ORCID, Wikidata u algún otro identificador único controlado. El orden en este elemento no indica una prioridad en la citación ni ningún otro tipo de relación jerárquica. |
| Ejemplo | https://orcid.org/0000-0001-6215-3617 \| https://orcid.org/0000-0003-1691-239X<br> https://www.wikidata.org/entity/Q28913658 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="individualCount">**individualCount** (Número de individuos)</a>

|    |    |
| ---|--- |
| Definición | Número de individuos presentes en el momento del registro biológico (observación, ejemplar, fotografía, etc.). Utilice este elemento si todos los conteos corresponden a individuos, de lo contrario utilice organismQuantity y organismQuanitityType. |
| Ejemplo | 1<br> 25<br> 282 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |
|    |    |

<a name="organismQuantity">**organismQuantity** (Cantidad del organismo)</a>

|    |    |
| ---|--- |
| Definición | Valor que representa una cantidad colectada u observada del organismo, expresada en un sistema de medida estándar para el organismo como cepas, células, porcentaje de biomasa, etc. Documentar este elemento junto con el elemento organismQuantityType. |
| Comentarios| El sistema de medida se debe documentar en el elemento organismQuantityType, como se muestra en el ejemplo a continuación:<br><br> Para el registro de cobertura de líquenes: organismQuantity: 30 / organismQuantityType: Porcentaje de cobertura<br> Para la abundancia de fitoplancton: organismQuantity: 253 / organismQuantityType: Células por litro<br> Para comunidades vegetales: organismQuantity: r / organismQuantityType: Escala Braun-Blanquet |
| Ejemplo | 30<br> 253<br> r |
| Elementos relacionados | organismQuantityType |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |
|    |    |

<a name="organismQuantityType">**organismQuantityType** (Tipo de cantidad del organismo)</a>

|    |    |
| ---|--- |
| Definición | Sistema de medida estándar asociado a la cantidad de organismos. Documentar este elemento junto con el elemento organismQuantity. |
| Comentarios| La cantidad de organismos se debe documentar en el elemento organismQuantity, como se muestra a continuación:<br><br> Para el registro de cobertura de líquenes: organismQuantity: 30 / organismQuantityType: Porcentaje de cobertura<br> Para la abundancia de fitoplancton: organismQuantity: 253 / organismQuantityType: Células por litro<br> Para comunidades vegetales: organismQuantity: r / organismQuantityType: Escala Braun-Blanquet |
| Ejemplo | Porcentaje de cobertura<br> Células por litro<br> Escala Braun-Blanquet |
| Elementos relacionados | organismQuantity |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |
|    |    |


<a name="sex">**sex** (Sexo)</a>

|    |    |
| ---|--- |
| Definición | El sexo de el(los) organismo(s) representado(s) en el registro. Si en un mismo registro cuenta con varios organismos de diferentes sexos, genere registros (filas) diferentes por cada sexo. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Hembra<br> Hermafrodita<br> Macho<br> Desconocido<br> Indeterminado<br> Ginandromorfo |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |
|    |    |

<a name="lifeStage">**lifeStage** (Etapa de desarrollo)</a>

|    |    |
| ---|--- |
| Definición | La etapa de vida de el(los) organismo(s) en el momento del registro. Si en un mismo registro cuenta con varios organismos en diferentes etapas de vida, genere registros (filas) diferentes por cada etapa de vida. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Huevo<br> Juvenil<br> Adulto<br> Cigoto<br> Embrión<br> Larva<br> Esporófito<br> Espora<br> Gametofito<br> Gameto<br> Pupa<br> Plántula<br> Floración<br> Fructificación |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |
|    |    |

<a name="reproductiveCondition">**reproductiveCondition** (Condición reproductiva)</a>

|    |    |
| ---|--- |
| Definición | Condición reproductiva de el(los) organismo(s) en el momento del registro. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | No reproductiva<br> En gestación<br> Floración<br> Fructificación |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="behavior">**behavior** (Comportamiento)</a>

|    |    |
| ---|--- |
| Definición | Descripción del comportamiento de el(los) organismo(s) en el momento del registro. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Posando<br> Alimentándose<br> Corriendo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="establishmentMeans">**establishmentMeans** (Medios de establecimiento)</a>

|    |    |
| ---|--- |
| Definición | Una afirmación que de cuenta si un organismo ha sido introducido a un lugar y tiempo determinado a través de actividad humana directa o indirecta. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos degreeOfEstablishment y pathway. |
| Elementos relacionados | degreeOfEstablishment, pathway |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#vc_establishmentMeans) | native<br> nativeReintroduced<br> introduced<br> introducedAssistedColonisation<br> vagrant<br> uncertain |
|    |    |

<a name="degreeOfEstablishment">**degreeOfEstablishment** (Grado de establecimiento)</a>

|    |    |
| ---|--- |
| Definición | El grado en cual el organismo sobrevive, se reproduce y expande su rango de distribución en un lugar y tiempo determinado. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos establishmentMeans y pathway. |
| Elementos relacionados | establishmentMeans, pathway |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#vc_degreeOfEstablishment) | native<br> cultivated<br> released<br> established<br> colonising<br> widespreadInvasive |
|    |    |

<a name="pathway">**pathway** (Ruta de introducción)</a>

|    |    |
| ---|--- |
| Definición | El proceso por el cual un organismo llegó a un lugar y tiempo determinado. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos establishmentMeans y degreeOfEstablishment. |
| Elementos relacionados | establishmentMeans, degreeOfEstablishment |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#vc_pathway) | releasedForUse<br> otherEscape<br> transportContaminant<br> transportStowaway<br> corridor<br> unaided |
|    |    |

<a name="occurrenceStatus">**occurrenceStatus** (Estado del registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Estado que da cuenta de la presencia o ausencia de un taxón en una ubicación. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#vc_occurrenceStatus) | present<br> absent |
|    |    |

<a name="preparations">**preparations** (Preparaciones)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de las preparaciones y los métodos de conservación de un ejemplar o una muestra del ejemplar.<br><br> Adicionalmente, si el espécimen fue colectado bajo un permiso de recolección de especímenes o acceso a recursos genéticos, debe indicar si fue una colecta temporal o una colecta definitiva seguido por el tipo de preparación. |
| Ejemplo | Colecta definitiva: Animal completo (ETOH)<br> Colecta definitiva: Preparación de muestra microbiológica<br> Colecta temporal: Extracción de ADN<br> Piel \| Cráneo \| Esqueleto<br> Animal completo (ETOH) \| Tejido (EDTA)<br> Fósil<br> Molde<br> Fotografía |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos |
|    |    |

<a name="disposition">**disposition** (Disposición)</a>

|    |    |
| ---|--- |
| Definición | El estado actual de un espécimen en relación a la colección identificada en collectionCode o collectionID. Se recomienda el uso de un vocabulario controlado. Si el espécimen fue colectado bajo un permiso de recolección de especímenes o acceso a recursos genéticos y fue entregado a una colección biológica se debe documentar "En colección", de lo contrario dejar vacío el elemento. |
| Ejemplo | En colección<br> Extraviado<br> Ejemplar testigo<br> Duplicados en otro lugar |
| Elementos relacionados| collectionCode, collectionID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos |
|    |    |

<a name="otherCatalogNumbers">**otherCatalogNumbers** (Otros números de catálogo)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de números de catálogos anteriores o alternos, u otros identificadores usados por personas para el mismo registro biológico, ya sea en el actual o cualquier otro conjunto de datos o colección. |
| Ejemplo | CFMNH:Mammal:1234<br> NPS YELLO6778 \| MBG 33424 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="associatedMedia">**associatedMedia** (Medios asociados)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (publicación, referencia bibliográfica, identificador único global, URI) de los medios asociados al registro biológico. Se recomienda usar la extensión Simple Multimedia o Audobon Media Description las cuales cuentan con más elementos para describir la información multimedia asociada. |
| Ejemplo | https://sinchi.org.co/ciacol/ficha/24/Hypoclinemus%20mentalis<br> https://ia801004.us.archive.org/0/items/staphylococcusaureus.JPG \| https://ia903100.us.archive.org/33/items/CMPUJH012-macro.jpg |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="associatedOccurrences">**associatedOccurrences** (Registros biológicos asociados)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores de otros registros biológicos y su relación con este registro. Aplica para relaciones con organismos de diferente grupo taxonómico y se recomiendo documentar junto a el elemento associatedTaxa. Se recomienda hacer uso de la extensión Resource Relationship para documentar en más detalle la relación entre los registros biológicos asociados. |
| Ejemplo | http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067 \| http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393<br>  SELVA:Anillamiento:AA7330a |
| Elementos relacionados| associatedTaxa |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="associatedReferences">**associatedReferences** (Referencias asociadas)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (publicación, referencia bibliográfica, identificador único global, URI) de la literatura asociada al registro biológico. Se recomienda hacer uso de la extensión Literature References la cual cuenta con más elementos para describir la información de referencias asociada. |
| Ejemplo | http://www.sciencemag.org/cgi/content/abstract/322/5899/261<br> Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="associatedSequences">**associatedSequences** (Secuencias asociadas)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (publicación, identificador único global, URI) de la información de la secuencia genética asociada al registro biológico. Se recomienda hacer uso de la extensión GGBN Amplification Extension la cual cuenta con más elementos para describir la información de secuencia genética asociada. |
| Ejemplo | https://www.ncbi.nlm.nih.gov/nuccore/U34853.1<br>  https://www.boldsystems.org/index.php/Public_RecordView?processid=ABBAC141-12 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="associatedTaxa">**associatedTaxa** (Taxones asociados)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores o nombres de taxones y su asociación con el registro biológico. |
| Ejemplo | Huésped: Quercus alba<br> Parásito: Apis mellifera |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="occurrenceRemarks">**occurrenceRemarks** (Comentarios del registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre el registro biológico. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Muerto en la vía<br> Registrado en el campus de la Universidad |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |
|    |    |

### Organismo

|    |    |    |    |
| ---|--- |--- |--- |
| [**organismID**<br> (ID del organismo)](#organismID) | [**organismName**<br> (Nombre del organismo)](#organismName) | [**organismScope**<br> (Alcance del organismo)](#organismScope) | [**associatedOrganisms**<br> (Organismos asociados)](#associatedOrganisms) |
| [**previousIdentifications**<br> (Identificaciones previas)](#previousIdentifications) | [**organismRemarks**<br> (Comentarios del organismo)](#organismRemarks) |  |  |
|    |    |    |    |

<br>
<br>

<a name="organismID">**organismID** (ID del organismo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del organismo. Pretende facilitar el remuestreo del mismo individuo con fines generalmente de monitoreo. Aves anilladas, fotos de mamíferos acuáticos, árboles remuestreados, etc. |
| Ejemplo | U.amer. 44<br> CC09477<br> Orca J 23 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="organismName">**organismName** (Nombre del organismo)</a>

|    |    |
| ---|--- |
| Definición | El nombre textual dado a un organismo en un estudio o el nombre en la etiqueta asignada originalmente. |
| Ejemplo | Huberta<br> Willy la Ballena Asesina<br> Cheeta |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="organismScope">**organismScope** (Alcance del organismo)</a>

|    |    |
| ---|--- |
| Definición | Puede ser utilizado para indicar si la instancia del organismo representa un organismo discreto o un tipo particular de agregación. Se recomienda el uso de un vocabulario controlado. Este elemento no está destinado a ser utilizado para especificar una categoría taxonómica. |
| Ejemplo | Organismo multicelular<br> Manada<br> Clon<br> Colonia |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="associatedOrganisms">**associatedOrganisms** (Organismos asociados)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores de otros organismos y su relación con el organismo documentado. Aplica para relaciones con organismos del mismo grupo taxonómico. Se recomienda hacer uso la extensión Resource Relationship para documentar en más detalle la relación entre los organismos asociados. |
| Ejemplo | Hermano de: FMNH:Mamífero:1234 \| Hermano de: FMNH:Mamífero:1235<br> Hijo de: MLS:sau:438 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="previousIdentifications">**previousIdentifications** (Identificaciones previas)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de asignaciones taxonómicas que se le han dado al organismo anteriormente. Puede contener la información de quién y cuándo realizó la identificación anterior. Se recomienda hacer uso de la extensión Identification [(https://tools.gbif.org/dwca-validator/extension.do?id=dwc:Identification#Identification)](https://tools.gbif.org/dwca-validator/extension.do?id=dwc:Identification#Identification) para el caso de colecciones biológicas. |
| Ejemplo | Pinus abies<br> Anthus sp., identificado en campo por G. Iglesias \| Anthus correndera, Identificado por el experto C. Cicero 2009-02-12 basado en morfología<br> Leptolyngbya cf. polysiphoniae \| Leptolyngbya sp. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="organismRemarks">**organismRemarks** (Comentarios del organismo)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre el organismo registrado. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Uno de una camada de seis<br> Fruto inmaduro cubierto por un indumento rojizo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

### Muestra del Material

|    |    |    |    |
| ---|--- |--- |--- |
| [**materialSampleID**<br> (ID de muestra del material)](#materialSampleID) |  |  |  |
|    |    |    |    |

<br>
<br>

<a name="materialSampleID">**materialSampleID** (ID de muestra del material)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para muestras de material (no hace referencia a muestras digitales sino físicas, como exicados o tejidos). En ausencia de un identificador único global persistente, puede construir uno usando una combinación a partir del occurrenceID, de tal forma que el materialSampleID sea globalmente único. Se recomienda hacer uso de la extensión GGBN Material Sample Extension para documentar en más detalle la información relacionada con la muestra. |
| Ejemplo | IAvH:IAvH-CT-1:Tejido<br> 06809dc5-f143-459a-be1a-6f03e63fc083<br> IAvH-ABJ788 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

### Evento

|    |    |    |    |
| ---|--- |--- |--- |
| [**parentEventID**<br> (ID parental del evento)](#parentEventID) | [**eventID**<br> (ID del evento)](#eventID) | [**samplingProtocol**<br> (Protocolo de muestreo)](#samplingProtocol) | [**sampleSizeValue**<br> (Valor del tamaño de la muestra)](#sampleSizeValue) |
| [**sampleSizeUnit**<br> (Unidad del tamaño de la muestra)](#sampleSizeUnit) | [**samplingEffort**<br> (Esfuerzo de muestreo)](#samplingEffort) | [**eventDate**<br> (Fecha del evento)](#eventDate) | [**startDayOfYear**<br> (Día inicial del año)](#startDayOfYear) |
| [**endDayOfYear**<br> (Día final del año)](#endDayOfYear) | [**year**<br> (Año)](#year) | [**month**<br> (Mes)](#month) | [**day**<br> (Día)](#day) | 
| [**verbatimEventDate**<br> (Fecha original del evento)](#verbatimEventDate) | [**eventTime**<br> (Hora del evento)](#eventTime) | [**habitat**<br> (Hábitat)](#habitat) | [**fieldNumber**<br> (Número de campo)](#fieldNumber) |
| [**fieldNotes**<br> (Notas de campo)](#fieldNotes) | [**eventRemarks**<br> (Comentarios del evento)](#eventRemarks) |  |  |
|    |    |    |    |    |

<br>
<br>

<a name="parentEventID">**parentEventID** (ID parental del evento)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único para la categoría superior del evento de muestreo. Por ejemplo, el identificador del muestreo de un cuadrante, parcela o transecto independientemente del tiempo o temporada cuando se realice el muestro. Este identificador es más general que el eventID y puede agrupar varios eventID. |
| Comentarios | Este elemento debe estar acompañado siempre del elemento eventID, como se muestra en el ejemplo a continuación:<br><br> A1 como parentEventID para identificar una parcela, cada sub-parcela con su propio eventID (A1:1, A1:2, etc.)<br> BENTOS como parentEventID para identificar un evento de muestreo y cada parte del evento con su propio eventID (BENTOS:E-1, BENTOS:E-2, etc.) |
| Ejemplo | A1<br> BENTOS |
| Elementos relacionados | eventID |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="eventID">**eventID** (ID del evento)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único para el Evento de muestreo, que ocurre en un lugar y tiempo determinado. Por ejemplo, el identificador del muestreo de un cuadrante, parcela o transecto en un tiempo o temporada específicos. Este identificador es más específico que el parentEventID. |
| Comentarios | Este elemento puede estar acompañado del elemento parentEventID, como se muestra en el ejemplo a continuación:<br><br> A1:1 \| A1:2 como eventID para identificar cada sub-parcela perteneciente a la parcela A1<br> BENTOS:E-1 \| BENTOS:E-2 como EventID para identificar cada parte del evento de muestreo perteneciente al evento BENTOS |
| Ejemplo | A1:1<br> BENTOS:E-1 |
| Elementos relacionados | parentEventID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro es marino - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Obligatorio)_ |
|    |    |

<a name="samplingProtocol">**samplingProtocol** (Protocolo de muestreo)</a>

|    |    |
| ---|--- |
| Definición | El nombre, la descripción o la referencia del método o protocolo de muestreo usado para realizar el muestreo. Se recomienda acompañar este elemento con el elemento samplingEffort. |
| Ejemplo | Trampa de luz UV<br> Red de niebla<br> Arrastre de fondo<br> Observación ad hoc<br> Punto de conteo |
| Elementos relacionados | samplingEffort |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="sampleSizeValue">**sampleSizeValue** (Valor del tamaño de la muestra)</a>

|    |    |
| ---|--- |
| Definición | Un valor numérico para una medición del tamaño (duración de tiempo, longitud, área o volumen) de una muestra en un evento de muestreo. Documentar este elemento junto con el elemento sampleSizeUnit. Se recomienda hacer uso del Sistema Internacional de Unidades (SI). |
| Ejemplo | 5.5<br> 10<br> 1 |
| Elementos relacionados | sampleSizeUnit |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="sampleSizeUnit">**sampleSizeUnit** (Unidad del tamaño de la muestra)</a>

|    |    |
| ---|--- |
| Definición | La unidad de medida de la magnitud (tiempo de duración, longitud, área o volumen) de una muestra en un evento de muestreo. Documentar este elemento junto con el elemento sampleSizeValue. |
| Ejemplo | Metros<br> Horas<br> Trampa<br> Metros cuadrados |
| Elementos relacionados | sampleSizeValue |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="samplingEffort">**samplingEffort** (Esfuerzo de muestreo)</a>

|    |    |
| ---|--- |
| Definición | El esfuerzo de muestreo en tiempo y/o espacio realizado durante el evento de muestreo. Documentar este elemento junto con el elemento samplingProtocol. |
| Ejemplo | 40 trampas-noche<br> 10 horas-observador<br> 10 km caminando<br> 30 km en carro<br> 7 días-trampa<br> 5 horas muestra por 30 eventos de muestreo |
| Elementos relacionados | samplingProtocol |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="eventDate">**eventDate** (Fecha del evento)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo durante la cual se produjo el evento de observación o colecta de un organismo o muestra. No es adecuado para una fecha en un contexto geológico. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Obligatorio)_ |
|    |    |

<a name="startDayOfYear">**startDayOfYear** (Día inicial del año)</a>

|    |    |
| ---|--- |
| Definición | Día inicial del evento, contando a partir del primer día del año del evento y documentado en formato de números ordinales (siendo "1" el primero de enero y "365" el 31 de diciembre en año no bisiesto). |
| Ejemplo | 1<br> 220<br> 365 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="endDayOfYear">**endDayOfYear** (Día final del año)</a>

|    |    |
| ---|--- |
| Definición | Día final del evento, contando a partir del primer día del año del evento y documentado en formato de números ordinales (siendo "1" el primero de enero y "365" el 31 de diciembre en año no bisiesto). |
| Ejemplo | 30<br> 300<br> 366 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="year">**year** (Año)</a>

|    |    |
| ---|--- |
| Definición | Los cuatro dígitos del año durante el cual se produjo el evento de observación o colecta de un organismo o muestra. |
| Ejemplo | 2008<br> 1901 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="month">**month** (Mes)</a>

|    |    |
| ---|--- |
| Definición | El mes en números enteros en que ocurrió durante el cual se produjo el evento de observación o colecta de un organismo o muestra. |
| Ejemplo | 01<br> 11 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="day">**day** (Día)</a>

|    |    |
| ---|--- |
| Definición | El día en números enteros durante el cual se produjo el evento de observación o colecta de un organismo o muestra. |
| Ejemplo | 09<br> 28 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="verbatimEventDate">**verbatimEventDate** (Fecha original del evento)</a>

|    |    |
| ---|--- |
| Definición | La representación textual original (según la libreta de campo, formato de datos, o etiqueta de colección) de la información de fecha durante la cual se produjo el evento de observación o colecta de un organismo o muestra. |
| Ejemplo | primavera 1910<br> 4/11/2020<br> marzo 2002<br> 1999-03-XX<br> 17IV1934 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="eventTime">**eventTime** (Hora del evento)</a>

|    |    |
| ---|--- |
| Definición | La hora o el intervalo de horas en la cual se produjo el evento de observación o colecta de un organismo o muestra. Debe estar documentado en el esquema de codificación ISO 8601. |
| Ejemplo | 14:07<br> 08:40:21<br> 13:00:00/15:30:00 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="habitat">**habitat** (Hábitat)</a>

|    |    |
| ---|--- |
| Definición | Una categoría estandarizada o la descripción del hábitat en el que ocurrió el evento. |
| Ejemplo | Sabana de roble<br> Estepa de la pre-cordillera |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="fieldNumber">**fieldNumber** (Número de campo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador dado al evento en campo. A menudo sirve como un vínculo entre las anotaciones de campo y el evento. |
| Ejemplo | RV Sol 87-03-08<br> MBZ-067 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="fieldNotes">**fieldNotes** (Notas de campo)</a>

|    |    |
| ---|--- |
| Definición | Un indicador sobre la existencia o referencia (publicación URI) a las notas de campo; o el texto de las notas tomadas en campo sobre el evento. |
| Ejemplo | Notas disponibles en la Biblioteca Grinnell-Miller<br> Este espécimen fue colectado en un árbol de caracolí, una nota de campo fue descrita para mencionar este evento, eran depredados por Epicrates maurus |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="eventRemarks">**eventRemarks** (Comentarios del evento)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre el evento. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Después de las lluvias recientes, el río estuvo cercano a un estado de desbordamiento |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

### Ubicación

|    |    |    |
| ---|--- |--- |
| [**locationID**<br> (ID de la ubicación)](#locationID) | [**higherGeography**<br> (Geografía superior)](#higherGeography) | [**higherGeographyID**<br> (ID de la geografía superior)](#higherGeographyID) |
| [**continent**<br> (Continente)](#continent) | [**waterBody**<br> (Cuerpo de agua)](#waterBody) | [**islandGroup**<br> (Grupo de islas)](#islandGroup) | 
| [**island**<br> (Isla)](#island) | [**country**<br> (País)](#country) | [**countryCode**<br> (Código del país)](#countryCode) |
| [**stateProvince**<br> (Departamento)](#stateProvince) | [**county**<br> (Municipio)](#county) | [**municipality**<br> (Cabecera municipal/<br>Centro poblado)](#municipality) | 
| [**locality**<br> (Localidad)](#locality) | [**verbatimLocality**<br> (Localidad original)](#verbatimLocality) | [**verbatimElevation**<br> (Elevación original)](#verbatimElevation) | 
| [**minimumElevationInMeters**<br> (Elevación mínima en metros)](#minimumElevationInMeters) | [**maximumElevationInMeters**<br> (Elevación máxima en metros)](#maximumElevationInMeters) | [**verticalDatum**<br> (Datum vertical)](#verticalDatum) |
| [**verbatimDepth**<br> (Profundidad original)](#verbatimDepth) | [**minimumDepthInMeters**<br> (Profundidad mínima en metros)](#minimumDepthInMeters) | [**maximumDepthInMeters**<br> (Profundidad máxima en metros)](#maximumDepthInMeters) | 
| [**minimumDistanceAbove<br>SurfaceInMeters**<br> (Distancia mínima de la superficie en metros)](#minimumDistanceAboveSurfaceInMeters) | [**maximumDistanceAbove<br>SurfaceInMeters**<br> (Distancia máxima de la superficie en metros)](#maximumDistanceAboveSurfaceInMeters) | [**locationAccordingTo**<br> (Ubicación de acuerdo con)](#locationAccordingTo) |
| [**locationRemarks**<br> (Comentarios de la ubicación)](#locationRemarks) | [**verbatimLatitude**<br> (Latitud original)](#verbatimLatitude) | [**verbatimLongitude**<br> (Longitud original)](#verbatimLongitude) |
| [**verbatimCoordinates**<br> (Coordenadas originales)](#verbatimCoordinates) | [**verbatimCoordinateSystem**<br> (Sistema original de coordenadas)](#verbatimCoordinateSystem) | [**verbatimSRS**<br> (SRS original)](#verbatimSRS) |
| [**decimalLatitude**<br> (Latitud decimal)](#decimalLatitude) | [**decimalLongitude**<br> (Longitud decimal)](#decimalLongitude) | [**geodeticDatum**<br> (Datum geodésico)](#geodeticDatum) |
| [**coordinateUncertaintyInMeters**<br> (Incertidumbre de las coordenadas en metros)](#coordinateUncertaintyInMeters) | [**coordinatePrecision**<br> (Precisión de las coordenadas)](#coordinatePrecision) | [**pointRadiusSpatialFit**<br> (Ajuste espacial del radio-punto)](#pointRadiusSpatialFit) |
| [**footprintWKT**<br> (WKT footprint)](#footprintWKT) | [**footprintSRS**<br> (SRS footprint)](#footprintSRS) | [**footprintSpatialFit**<br> (Ajuste espacial de footprint)](#footprintSpatialFit) |
| [**georeferencedBy**<br> (Georreferenciado por)](#georeferencedBy) | [**georeferencedDate**<br> (Fecha de georreferenciación)](#georeferencedDate) | [**georeferenceProtocol**<br> (Protocolo de georreferenciaciónt)](#georeferenceProtocol) |
| [**georeferenceSources**<br> (Fuentes de georreferenciación)](#georeferenceSources) | [**georeferenceVerificationStatus**<br> (Estado de la verificación de la georreferenciación)](#georeferenceVerificationStatus) | [**georeferenceRemarks**<br> (Comentarios de la georreferenciación)](#georeferenceRemarks) |
|    |    |    |

<br>
<br>

<a name="locationID">**locationID** (ID de la ubicación)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la región geográfica, división político administrativa o del sitio específico donde se realizó el registro. |
| Comentarios | Se sugiere utilizar un identificador persistente, como el código de la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD) precedida por "CO:" o utilizar MarineRegions [(https://www.marineregions.org/)](https://www.marineregions.org/) para regiones marinas, como se muestra a continuación:<br><br> CO:15572 (Código Divipola para el Municipio de Puerto Boyacá en Boyacá)<br> CO:68 (Código Divipola para el Departamento de Santander)<br> http://marineregions.org/mrgid/32556 (Islas del Rosario) |
| Ejemplo | CO:15572<br> CO:68<br> http://marineregions.org/mrgid/32556<br> geonames.org/3674545/ |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="higherGeography">**higherGeography** (Geografía superior)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de la geografía inmediatamente superior al sitio o ubicación donde se realizó el registro. Si hay modificaciones en la localidad para estandarizar su contenido puede documentar en este elemento los datos originales (sin estandarizar) de esos términos. |
| Comentarios | Este elemento debe estar acompañado de otros elementos del estándar, como se muestra en el ejemplo a continuación:<br><br> América \| Sudamérica \| Colombia \| Región del Pacífico \| Valle del Cauca \| La Cumbre \| Bitaco (Con los valores resultantes de SA en continent, Colombia en country, Valle del Cauca en stateProvince, La Cumbre en county y Bitaco en municipality). |
| Ejemplo | América \| Sudamérica \| Colombia \| Región del Pacífico \| Valle del Cauca \| La Cumbre \| Bitaco |
| Elementos relacionados | higherGeographyID, continent, country, stateProvince, county, municipality |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="higherGeographyID">**higherGeographyID** (ID de la geografía superior)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la región geográfica inmediatamente superior a la ubicación donde se realizó el registro. Este identificador debe ser acorde con la geografía superior documentada en el elemento higherGeography. |
| Comentarios | Se recomienda utilizar un identificador persistente de un vocabulario controlado como el código de la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD) precedida por "CO:" o el Tesauro Getty de Nombres Geográficos, como se muestra a continuación:<br><br> CO:15572 (Código Divipola para el Municipio de Puerto Boyacá en Boyacá)<br> CO:68 (Código Divipola para el Departamento de Santander)<br> TGN: 7005075 (San Agustín (Huila), Colombia) |
| Ejemplo | CO:15572<br> CO:68<br> TGN: 7005075 |
| Elementos relacionados | higherGeography, continent, country, stateProvince, county, municipality |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="continent">**continent** (Continente)</a>

|    |    |
| ---|--- |
| Definición | El nombre del continente en el que tiene lugar la ubicación. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
| [Vocabulario controlado](#vc_continent) | América del Sur<br> América del Norte<br> Europa<br> África<br> Asia<br> Oceanía<br> Antártida |
|    |    |

<a name="waterBody">**waterBody** (Cuerpo de agua)</a>

|    |    |
| ---|--- |
| Definición | El nombre y tipo del cuerpo de agua en el que tiene lugar la ubicación. Se recomienda usar este elemento solamente si el evento ocurrió en el cuerpo de agua propiamente dicho, no en cercanías de este. |
| Ejemplo | Mar Caribe<br> Océano Pacífico <br>Río Lebrija<br> Golfo de Urabá<br> Caño Mojana |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="islandGroup">**islandGroup** (Grupo de islas)</a>

|    |    |
| ---|--- |
| Definición | El nombre del grupo de islas en que tiene lugar la ubicación. |
| Ejemplo | Cayos de Albuquerque<br> Islas del Rosario |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="island">**island** (Isla)</a>

|    |    |
| ---|--- |
| Definición | El nombre de la isla en o cerca al lugar de la ubicación. |
| Ejemplo | Isla de Providencia<br> Isla Gorgona<br> Isla de Tierra Bomba |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="country">**country** (País)</a>

|    |    |
| ---|--- |
| Definición | El nombre del país o unidad administrativa de mayor jerarquía de la ubicación. Se recomienda utilizar un identificador persistente de un vocabulario controlado como el Tesauro Getty de Nombres Geográficos o la norma ISO 3166. Se recomienda acompañar este elemento con el elemento countryCode. |
| Ejemplo | Colombia<br> España<br> Dinamarca |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Obligatorio)_ |
|    |    |

<a name="countryCode">**countryCode** (Código del país)</a>

|    |    |
| ---|--- |
| Definición | El código estándar para el país de la ubicación. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 3166-1-alfa-2 de códigos de países, como se muestra a continuación:<br><br> CO (=Para Colombia)<br> AR (=Para Argentina) |
| Elementos relacionados | country |
| Ejemplo | Colombia<br> España<br> Dinamarca |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
| [Vocabulario controlado](#vc_countryCode) | Consultar en: [https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO](https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO) |
|    |    |

<a name="stateProvince">**stateProvince** (Departamento)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo y sin abreviar de la siguiente región administrativa de menor jerarquía que País de la ubicación (Departamento). Se recomienda usar los nombres asignados en la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD). |
| Ejemplo | Antioquia<br> Atlántico<br> Bogotá, D.C. |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="county">**county** (Municipio)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo y sin abreviar de la siguiente región administrativa de menor jerarquía que Departamento de la ubicación (Municipio). Se recomienda usar los nombres asignados en la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD). |
| Ejemplo | Medellín<br> Puerto Colombia<br> Bogotá, D.C. |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos  - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="municipality">**municipality** (Cabecera municipal / Centro poblado)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo y sin abreviar de la siguiente región administrativa de menor jerarquía que Municipio de la ubicación. Puede ser un centro poblado, cabecera municipal, corregimiento o inspección de policía. No utilice este elemento para el nombre de un lugar cercano que no contiene la ubicación real. Se recomienda usar los nombres asignados en la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD). |
| Ejemplo | Palmitas<br> Puerto Colombia<br> Bogotá, D.C. |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos  - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="locality">**locality** (Localidad)</a>

|    |    |
| ---|--- |
| Definición | La información geográfica más específica de la ubicación. Información geográfica de menor especificidad puede ser provista en otros elementos geográficos (higherGeography, continent, country, stateProvince, county, municipality, waterBody, island, islandGroup). Este elemento puede contener información modificada de la original para corregir errores o estandarizar la descripción. |
| Ejemplo | Ruta del Sol, kilómetro 25 entre Guaduas y La Dorada<br> Vereda Santa Ana<br> Quebrada Aguasclaras<br> Parque Nacional Natural Serranía de Chiribiquete |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos  - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="verbatimLocality">**verbatimLocality** (Localidad original)</a>

|    |    |
| ---|--- |
| Definición | La descripción textual original del lugar (como fue tomada en campo o documentada en el voucher). |
| Ejemplo | km 25 Rutal del Sol, Guaduas-La Dorada<br> Vda Santa ana<br> Q. Aguasclaras<br> PNN Chiribiquete |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="verbatimElevation">**verbatimElevation** (Elevación original)</a>

|    |    |
| ---|--- |
| Definición | La descripción textual de la elevación (altitud, por lo general por encima del nivel del mar) de la ubicación. |
| Ejemplo | 100-200 m<br> 1560 msnm |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="minimumElevationInMeters">**minimumElevationInMeters** (Elevación mínima en metros)</a>

|    |    |
| ---|--- |
| Definición | El límite inferior del rango de elevación (altitud, generalmente por encima del nivel del mar), no utilice ningún indicador de unidad (metros, m, msnm) ya que el elemento especifica que los valores anotados son en metros. |
| Ejemplo | 100<br> 1600 |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="maximumElevationInMeters">**maximumElevationInMeters** (Elevación máxima en metros)</a>

|    |    |
| ---|--- |
| Definición | El límite superior del rango de elevación (altitud, generalmente por encima del nivel del mar), no utilice ningún indicador de unidad (metros, m, msnm) ya que el elemento especifica que los valores anotados son en metros. |
| Ejemplo | 200<br> 3050 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="verticalDatum">**verticalDatum** (Datum vertical)</a>

|    |    |
| ---|--- |
| Definición | El datum vertical usado como referencia para la obtención de los valores de elevación. Se recomienda usar un vocabulario controlado a partir de código epsg o el código del geoide de referencia. |
| Ejemplo | GRS80<br> EGM84<br> EGM96<br> EGM2008<br> epsg:7030<br> Desconocido |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="verbatimDepth">**verbatimDepth** (Profundidad original)</a>

|    |    |
| ---|--- |
| Definición | La descripción textual de la profundidad bajo la superficie local. |
| Ejemplo | 0-20 m<br> -15 a -30 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="minimumDepthInMeters">**minimumDepthInMeters** (Profundidad mínima en metros)</a>

|    |    |
| ---|--- |
| Definición | La menor profundidad de un rango de profundidad por debajo de la superficie local. No utilice ningún indicador de unidad (metros, m) ya que el elemento especifica que los valores anotados son en metros. |
| Ejemplo | 0<br> 10 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="maximumDepthInMeters">**maximumDepthInMeters** (Profundidad máxima en metros)</a>

|    |    |
| ---|--- |
| Definición | La mayor profundidad de un rango de profundidad por debajo de la superficie local. No utilice ningún indicador de unidad (metros, m) ya que el campo especifica que los valores anotados son en metros. |
| Ejemplo | 2<br> 50 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="minimumDistanceAboveSurfaceInMeters">**minimumDistanceAboveSurfaceInMeters** (Distancia mínima de la superficie en metros)</a>

|    |    |
| ---|--- |
| Definición | La menor distancia en metros en un rango de distancias, desde una superficie de referencia en dirección vertical. Si las medidas de profundidad son proporcionadas, la superficie de referencia es la ubicación determinada por la profundidad, de lo contrario la superficie de referencia es la ubicación dada por la elevación. |
| Comentarios | Utilice valores positivos para las ubicaciones por encima de la superficie y valores negativos para ubicaciones por debajo, como se muestra a continuación:<br><br> -1.5 (Para un evento entre 1.5 metros y 4.5 metros desde el fondo de un lago) |
| Ejemplo | -1.5<br> 2.8 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="maximumDistanceAboveSurfaceInMeters">**maximumDistanceAboveSurfaceInMeters** (Distancia máxima de la superficie en metros)</a>

|    |    |
| ---|--- |
| Definición | La mayor distancia en metros, en un rango de distancia desde una superficie de referencia en dirección vertical. Si las medidas de profundidad son proporcionadas, la superficie de referencia es la ubicación determinada por la profundidad, de lo contrario la superficie de referencia es la ubicación dada por la elevación. |
| Comentarios | Utilice valores positivos para las ubicaciones por encima de la superficie, valores negativos para las ubicaciones por debajo, como se muestra a continuación:<br><br> -4.5 (Para un evento entre 1.5 metros y 4.5 metros desde el fondo de un lago) |
| Ejemplo | -4.5<br> 8.2 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="locationAccordingTo">**locationAccordingTo** (Ubicación de acuerdo con)</a>

|    |    |
| ---|--- |
| Definición | La información sobre la fuente de la ubicación. Podría ser una publicación (gacetero), institución o grupo de individuos. |
| Ejemplo | Tesauro Getty de Nombres Geográficos<br> GADM<br> Geonames<br> Google Earth |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="locationRemarks">**locationRemarks** (Comentarios de la ubicación)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la ubicación. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Bajo agua desde 2005 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="verbatimLatitude">**verbatimLatitude** (Latitud original)</a>

|    |    |
| ---|--- |
| Definición | La latitud original de la ubicación. El elipsoide de coordenadas, el datum geodésico o el sistema de referencia espacial completo (SRS) para estas coordenadas debe ser documentado en el elemento verbatimSRS, y el sistema de coordenadas en el elemento verbatimCoordinateSystem. |
| Ejemplo | 41° 05' 56.03" S<br> 1631599 |
| Elementos relacionados | verbatimCoordinates, verbatimCoordinateSystem, verbatimSRS, verbatimLongitude |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="verbatimLongitude">**verbatimLongitude** (Longitud original)</a>

|    |    |
| ---|--- |
| Definición | La longitud original de la ubicación. El elipsoide de coordenadas, datum geodésico o el sistema de referencia espacial completo (SRS) para estas coordenadas, debe ser documentado en el elemento verbatimSRS y el sistema de coordenadas en el elemento verbatimCoordinateSystem. |
| Ejemplo | 75° 08' 36.83" W<br> 834549 |
| Elementos relacionados | verbatimCoordinates, verbatimCoordinateSystem, verbatimSRS, verbatimLatitude |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="verbatimCoordinates">**verbatimCoordinates** (Coordenadas originales)</a>

|    |    |
| ---|--- |
| Definición | Las coordenadas de la ubicación en su formato original. El elipsoide de las coordenadas, el datum geodésico, o el sistema de referencia espacial completo (SRS) para estas coordenadas, debe ser documentado en el elemento verbatimSRS, y el sistema de coordenadas en el elemento verbatimCoordinateSystem. |
| Ejemplo | 4° 05' 56.03" S, 75° 08' 36.83" W<br> 17T 1631599  834549 |
| Elementos relacionados | verbatimLatitude, verbatimLongitude, verbatimCoordinateSystem, verbatimSRS |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="verbatimCoordinateSystem">**verbatimCoordinateSystem** (Sistema original de coordenadas)</a>

|    |    |
| ---|--- |
| Definición | El sistema de coordenadas espaciales para verbatimLatitude y verbatinLongitude original o verbatimCoordinates de la ubicación. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Grados decimales<br> Grados, minutos decimales<br> Grados, minutos, segundos<br> UTM<br> Coordenadas planas<br> Coordenadas proyectadas |
| Elementos relacionados | verbatimLatitude, verbatimLongitude, verbatimCoordinates, verbatimSRS |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="verbatimSRS">**verbatimSRS** (SRS original)</a>

|    |    |
| ---|--- |
| Definición | El elipsoide, datum geodésico, o sistema de referencia espacial (SRS) en el que se basan las coordenadas provistas en verbatimLatitude y verbatinLongitude o verbatimCoordinates. Se recomienda usar el código EPSG, si se conoce. Caso contrario, utilice un lenguaje controlado para el nombre o código del datum geodésico, o un vocabulario controlado para el nombre o código del elipsoide, si se conoce. Si ninguno de estos se conoce, utilice el valor "Desconocido". |
| Ejemplo | EPSG: 4326<br> EPSG: 3116<br> WGS84<br> UTM zone 17T<br> MAGNA-SIRGAS origen Bogotá<br> MAGNA-SIRGAS origen Oeste<br> MAGNA-SIRGAS origen CTM-12<br> Desconocido |
| Elementos relacionados | verbatimLatitude, verbatimLongitude, verbatimCoordinates, verbatimCoordinateSystem |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="decimalLatitude">**decimalLatitude** (Latitud decimal)</a>

|    |    |
| ---|--- |
| Definición | La latitud geográfica (en grados decimales, utilizando el sistema de referencia espacial provisto en geodeticDatum) del centro geográfico de una ubicación. Los valores positivos se encuentran al norte del ecuador, los valores negativos están al sur del mismo. Los valores admitidos se encuentran entre -90 y 90. |
| Ejemplo | 6.05486<br> 12.584877 |
| Elementos relacionados | geodeticDatum |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="decimalLongitude">**decimalLongitude** (Longitud decimal)</a>

|    |    |
| ---|--- |
| Definición | La longitud geográfica (en grados decimales, mediante el sistema de referencia espacial provisto en geodeticDatum) del centro geográfico de una ubicación. Los valores positivos se encuentran al este del meridiano de Greenwich, los valores negativos se encuentran al oeste de la misma. Los valores admitidos se encuentran entre -180 y 180. |
| Ejemplo | -75.05486<br> -72.78945 |
| Elementos relacionados | geodeticDatum |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="geodeticDatum">**geodeticDatum** (Datum geodésico)</a>

|    |    |
| ---|--- |
| Definición | El elipsoide, datum geodésico, o sistema de referencia espacial (SRS) en el que se basan las coordenadas geográficas provistas en decimalLatitude y decimalLongitude. Se recomienda usar el código EPSG, si se conoce. Caso contrario, utilice un lenguaje controlado para el nombre o código del datum geodésico, o utilice un lenguaje controlado para el nombre o código del elipsoide, si se conoce. Si ninguno de estos se conoce, utilice el valor "Desconocido".<br><br> Aunque el estandar no es restrictivo en el datum a usar, desde el SiB Colombia se recomienda documentar las coordenadas decimales usando el datum WGS84 dado que facilita la espacialización de los datos publicados por diferentes organizaciones bajo un mismo sistema de referencia espacial, lo que minimiza el riesgo de desplazamiento de las coordenadas. |
| Ejemplo | WGS84<br> EPSG:4326<br> Desconocido |
| Elementos relacionados | decimalLatitude, decimalLongitude |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="coordinateUncertaintyInMeters">**coordinateUncertaintyInMeters** (Incertidumbre de las coordenadas en metros)</a>

|    |    |
| ---|--- |
| Definición | La distancia horizontal (en metros) de la decimalLatitude y decimalLongitude provistas describiendo el círculo más pequeño que contiene la totalidad de la ubicación. Deje el valor vacío si la incertidumbre es desconocida, no se puede estimar, o no es aplicable (porque no hay coordenadas). Cero no es un valor válido para este elemento. |
| Comentarios | Documente este elemento de acuerdo a las siguientes explicaciones:<br><br> 30 (límite inferior razonable para lecturas de GPS tomadas bajo buenas condiciones después de 2020-05-01, si la precisión no fue tomada en campo)<br> 100 (Límite inferior razonable para lecturas de GPS tomadas bajo buenas condiciones antes de 2020-05-1, si la precisión no fue tomada en campo)<br> 71 (Incertidumbre para coordenadas originales tomadas bajo el sistema de coordenadas UTM teniendo 100 metros de precisión y un sistema de referencia espacial conocido)<br> 2100 |
| Ejemplo | 30<br> 100<br> 71<br> 2100 |
| Elementos relacionados | decimalLatitude, decimalLongitude |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="coordinatePrecision">**coordinatePrecision** (Precisión de las coordenadas)</a>

|    |    |
| ---|--- |
| Definición | Una representación decimal de la precisión de las coordenadas provistas en decimalLatitude y decimalLongitude. |
| Comentarios | Documente este elemento de acuerdo a las siguientes explicaciones:<br><br> 0.00001 (Límite normal de GPS para grados decimales)<br> 0.000278 (Para coordenadas reportadas al minuto más cercano. 1/3600)<br> 0.01 (Para una coordenada decimal con dos grados decimales)<br> 1.0 (Grado más próximo) |
| Ejemplo | 0.00001<br> 0.000278<br> 0.01<br> 1.0 |
| Elementos relacionados | decimalLatitude, decimalLongitude |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="pointRadiusSpatialFit">**pointRadiusSpatialFit** (Ajuste espacial del radio-punto)</a>

|    |    |
| ---|--- |
| Definición | La relación entre el área del radio-punto (decimalLatitude, decimalLongitude y coordinateUncertaintyInMeters) y el área de la verdadera (original, o más específica) representación espacial de la ubicación. Los valores válidos son 0, mayor que o igual a 1, o indefinido. Un valor de 1 es una coincidencia exacta o superposición de 100%. Un valor de 0 se debe utilizar si el radio-punto dado no contiene por completo la representación original. El Ajuste espacial del radio-punto no está definido (y se debe dejar en blanco) si la representación original es un punto sin incertidumbre y la georreferencia dada no es ese mismo punto (sin incertidumbre). Si tanto el original como la georreferencia dada están en el mismo punto el ajuste espacial del radio-punto es 1. |
| Ejemplo | 0<br> 1<br> 0.5708 |
| Elementos relacionados | decimalLatitude, decimalLongitude, coordinateUncertaintyInMeters |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="footprintWKT">**footprintWKT** (WKT footprint)</a>

|    |    |
| ---|--- |
| Definición | Una representación Well-Known Text (WKT) de la forma (footprint, geometría) que define la ubicación. Una ubicación puede tener una representación de radio-punto (véase decimalLatitude) y una representación footprint, y pueden diferir entre sí. |
| Comentarios | Documente este elemento de acuerdo a las siguientes explicaciones:<br><br> POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20)) (Para un cuadrante con esquinas opuestas (longitud=10, latitud=20) y (longitud=11, latitud=21))<br> LINESTRING (10.689195 -74.139299, 10.689422 -74.13791) (Para un transecto de muestro con coordenadas iniciales 10.689195 -74.139299 y finales 10.689422 -74.13791) |
| Ejemplo | POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20))<br> LINESTRING (10.689195 -74.139299, 10.689422 -74.13791) |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="footprintSRS">**footprintSRS** (SRS footprint)</a>

|    |    |
| ---|--- |
| Definición | El Elipsoide, datum geodésico o sistema de referencia espacial sobre el cual está referenciada la geometría en el elemento footprintWKT.<br><br> Se recomienda usar un código EPSG para el sistema de referencia si este es conocido. De lo contrario usar un nombre del sistema de referencia, datum, o elipsoide (SRS) bajo un vocabulario controlado. También es permitida la representación en Well-Known Text (WKT) del sistema de referencia espacial (SRS). No utilice este elemento para describir el SRS de decimalLatitude y decimalLongitude, incluso si es la misma que para WKT footprint - utilice el geodeticDatum en su lugar. |
| Ejemplo | EPSG:4326<br> WGS84<br> SRS GEOGCS["GCS_WGS_1984", DATUM["D_WGS_1984", SPHEROID["WGS_1984",6378137,298.257223563]], PRIMEM["Greenwich",0], UNIT["Degree",0.0174532925199433]] |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="footprintSpatialFit">**footprintSpatialFit** (Ajuste espacial de footprint)</a>

|    |    |
| ---|--- |
| Definición | La relación del área de footprint (WKT footprint) y el área de la verdadera (original, o más específica) representación espacial de la ubicación. Los valores válidos son 0, mayor que, igual a 1, o indefinido. Un valor de 1 es una coincidencia exacta o superposición de 100%. Un valor de 0 debe ser utilizado si el footprint dado no contiene la representación original completamente. El footprintSpatialFit es indefinido (y se debe dejar en blanco) si la representación original es un punto y la georreferencia dada no es ese mismo punto. Si el original y la georreferencia dada son el mismo punto, el footprintSpatialFit es 1. |
| Ejemplo | 0<br> 1 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="georeferencedBy">**georeferencedBy** (Georreferenciado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas, grupos u organizaciones que determinaron la georreferencia (representación espacial) para la ubicación. |
| Ejemplo | Kristina Yamamoto (MVZ)<br> Miguel B. \|  María Isabel H. |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="georeferencedDate">**georeferencedDate** (Fecha de georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que fue georreferenciada la ubicación. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/2010-01<br> 2009-02/10<br> 2009-02-12/2009-10-08<br> 2010-01-17/18 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="georeferenceProtocol">**georeferenceProtocol** (Protocolo de georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | Una descripción o referencia a los métodos utilizados para determinar el footprint espacial, coordenadas, e incertidumbres. |
| Ejemplo | Chapman AD & Wieczorek JR (2020) Georeferencing Best Practices. Copenhagen: GBIF Secretariat. https://doi.org/10.15468/doc-gg7h-s853<br> MaNIS/HerpNet/ORNIS Georeferencing Guidelines<br> BioGeomancer |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="georeferenceSources">**georeferenceSources** (Fuentes de georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los mapas, gaceteros, u otros recursos utilizados para georreferenciar la ubicación, lo suficientemente específica como para permitir que cualquier persona en el futuro utilice los mismos recursos. |
| Ejemplo | USGS 1:24000 Florence Montana Quad<br> Google. (n.d.). Jardín Botánico de la Universidad de Caldas. Recuperado de:  https://goo.gl/maps/zPCiUySVnZ7CN2Vs7<br> IGAC. Cartografía básica 1:100000. Plancha 124<br> Google Maps, 2020, maps.google.com |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="georeferenceVerificationStatus">**georeferenceVerificationStatus** (Estado de la verificación de la georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | Una descripción categórica sobre la verificación de la georreferencia usada para representar la descripción espacial de la ubicación del registro. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Inviable para georreferenciar<br> Requiere georreferenciación<br> Requiere verificación<br> Verificado por el custodio de los datos<br> Verificado por el proveedor de los datos |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="georeferenceRemarks">**georeferenceRemarks** (Comentarios de la georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones acerca de la determinación de la descripción espacial, los supuestos hechos que explican las adiciones formalizadas en el método referido en  georeferenceProtocol. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Distancia asumida a partir de la carretera (Autopista 101) |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

### Contexto Geológico

|    |    |    |
| ---|--- |--- |
| [**geologicalContextID**<br> (ID del contexto geológico)](#geologicalContextID) | [**earliestEonOrLowestEonothem**<br> (Eón temprano o eonotema inferior)](#earliestEonOrLowestEonothem) | [**latestEonOrHighestEonothem**<br> (Eón tardío o eonotema superior)](#latestEonOrHighestEonothem) |
| [**earliestEraOrLowestErathem**<br> (Era temprana o eratema inferior)](#earliestEraOrLowestErathem) | [**latestEraOrHighestErathem**<br> (Era tardía o eratema superior)](#latestEraOrHighestErathem) | [**earliestPeriodOrLowestSystem**<br> (Periodo temprano o sistema inferior)](#earliestPeriodOrLowestSystem) | 
| [**latestPeriodOrHighestSystem**<br> (Periodo tardío o sistema superior)](#latestPeriodOrHighestSystem) | [**earliestEpochOrLowestSeries**<br> (Época temprana o serie inferior)](#earliestEpochOrLowestSeries) | [**latestEpochOrHighestSeries**<br> (Época tardía o serie superior)](#latestEpochOrHighestSeries) |
| [**earliestAgeOrLowestStage**<br> (Edad temprana o piso inferior)](#earliestAgeOrLowestStage) | [**latestAgeOrHighestStage**<br> (Edad tardía o piso superior)](#latestAgeOrHighestStage) | [**lowestBiostratigraphicZone**<br> (Zona bioestratigráfica inferior)](#lowestBiostratigraphicZone) | 
| [**highestBiostratigraphicZone**<br> (Zona bioestratigráfica superior)](#highestBiostratigraphicZone) | [**lithostratigraphicTerms**<br> (Términos litoestratigráficos)](#lithostratigraphicTerms) | [**group**<br> (Grupo)](#group) | 
| [**formation**<br> (Formación)](#formation) | [**member**<br> (Miembro)](#member) | [**bed**<br> (Capa)](#bed) |
|    |    |    |

<br>
<br>

<a name="geologicalContextID">**geologicalContextID** (ID del contexto geológico)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el conjunto de la información asociada con un contexto geológico (la ubicación dentro de un contexto geológico, tal como estratigrafía). Puede ser un identificador único global o un identificador específico para el conjunto de datos. |
| Ejemplo | https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="earliestEonOrLowestEonothem">**earliestEonOrLowestEonothem** (Eón temprano o eonotema inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del eón geocronológico más temprano o el eratema cronoestratigráfico más bajo, o el nombre informal ("Precámbrico") atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Fanerozoico<br> Proterozoico |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="latestEonOrHighestEonothem">**latestEonOrHighestEonothem** (Eón tardío o eonotema superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del eón geocronológico más tardío o el eratema cronoestratigráfico más alto posible, o el nombre informal ("Precámbrico") atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Fanerozoico<br> Proterozoico |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="earliestEraOrLowestErathem">**earliestEraOrLowestErathem** (Era temprana o eratema inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la era geocronológica más temprana o el eratema cronoestratigráfico más bajo, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Cenozoicoo<br> Mesozoico |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="latestEraOrHighestErathem">**latestEraOrHighestErathem** (Era tardía o eratema superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la era geocronológica más tardía o el eratema cronoestratigráfico más alto posible, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Cenozoicoo<br> Mesozoico |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="earliestPeriodOrLowestSystem">**earliestPeriodOrLowestSystem** (Periodo temprano o sistema inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del periodo geocronológico más temprano posible o el sistema cronoestratigráfico más bajo, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Neógeno<br> Terciario<br> Cuaternario |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="latestPeriodOrHighestSystem">**latestPeriodOrHighestSystem** (Periodo tardío o sistema superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del período geocronológico más tardío posible o del sistema cronoestratigráfico más alto, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Neógeno<br> Terciario<br> Cuaternario |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="earliestEpochOrLowestSeries">**earliestEpochOrLowestSeries** (Época temprana o serie inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la época geocronológica más temprana o la serie cronoestratigráfica más baja posible, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Holoceno<br> Pleistoceno<br> Serie Ibexian |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="latestEpochOrHighestSeries">**latestEpochOrHighestSeries** (Época tardía o serie superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la época geocronológica más tardía posible o la serie cronoestratigráfica más alta, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Holoceno<br> Pleistoceno<br> Serie Ibexian |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="earliestAgeOrLowestStage">**earliestAgeOrLowestStage** (Edad temprana o piso inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la edad geocronológica más temprana posible o piso cronoestratigráfico más bajo, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Atlántico<br> Boreal |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="latestAgeOrHighestStage">**latestAgeOrHighestStage** (Edad tardía o piso superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la edad geocronológica más tardía posible o piso cronoestratigráfico más alto, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Atlántico<br> Boreal |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="lowestBiostratigraphicZone">**lowestBiostratigraphicZone** (Zona bioestratigráfica inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la zona geológica bioestratigráfica más baja posible del horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Maastrichtiense |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="highestBiostratigraphicZone">**highestBiostratigraphicZone** (Zona bioestratigráfica superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la zona geológica bioestratigráfica más alta posible del horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Blancan |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="lithostratigraphicTerms">**lithostratigraphicTerms** (Términos litoestratigráficos)</a>

|    |    |
| ---|--- |
| Definición | La combinación de todos los nombres litoestratigráficos de la roca de donde se colectó el objeto catalogado. |
| Ejemplo | Pleistoceno-Weichseliense |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="group">**group** (Grupo)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del grupo litoestratigráfico del cual se colectó el objeto catalogado. |
| Ejemplo | Grupo Bathurst |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="formation">**formation** (Formación)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la formación litoestratigráfica de la cual se colectó el objeto catalogado. |
| Ejemplo | Formación Notch Peak<br> Formación Fillmore |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="member">**member** (Miembro)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del miembro litoestratigráfico del cual se colectó el elemento catalogado. |
| Ejemplo | Miembro Hellnmaria |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="bed">**bed** (Capa)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la capa litoestratigráfica de la cual se colectó el elemento catalogado. |
| Ejemplo | Carbón Harlem |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

### Identificación

|    |    |    |    |
| ---|--- |--- |--- |
| [**identificationID**<br> (ID de la identificación)](#identificationID) | [**identifiedBy**<br> (Identificado por)](#identifiedBy) | [**identifiedByID**<br> (ID del identificador)](#identifiedByID) | [**dateIdentified**<br> (Fecha de la identificación)](#dateIdentified) |
| [**identificationReferences**<br> (Referencias de la identificación)](#identificationReferences) | [**identificationVerification<br>Status**<br> (Estado de la verificación de la identificación)](#identificationVerificationStatus) | [**typeStatus**<br> (Tipo nomeclatural)](#typeStatus) | [**verbatimIdentification**<br> (Identificación original)](#verbatimIdentification) |
|  [**identificationRemarks**<br> (Comentarios de la identificación)](#identificationRemarks) | [**identificationQualifier**<br> (Calificador de la identificación)](#identificationQualifier) |  |  |
|    |    |    |    |

<br>
<br>

<a name="identificationID">**identificationID** (ID de la identificación)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para la identificación (el cuerpo de la información asociada con la asignación de un nombre científico) del organismo. Puede ser un identificador único global o un identificador específico para el conjunto de datos. |
| Ejemplo | 1231135<br> 10560964 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="identifiedBy">**identifiedBy** (Identificado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas responsables de identificar el organismo.<br><br> Se debe mantener el mismo formato del nombre a lo largo de todos los registros y se recomienda evitar el uso de solo iniciales ya que esto genera ambigüedades para reconocer a las personas que realizaron la identificación, de ser posible siempre escriba nombres completos. Documente el nombre de las personas y evite documentar nombres de grupos u organizaciones. |
| Ejemplo | Luis Gabriel Pérez Salamanca<br> Jennifer Andrea Parra Ortíz \| Jaime Enrique Correa Sánchez |
| Elementos relacionados | identifiedByID |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_
|    |    |

<a name="identifiedByID">**identifiedByID** (ID del identificador)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (ORCID o Wikidata) de las personas que identificaron el organismo. Mantenga el mismo orden de las personas documentadas en el elemento identifiedBy; el orden en este campo no indica una prioridad en la citación ni ningún otro tipo de relación jerárquica. |
| Ejemplo | https://orcid.org/0000-0001-6215-3617 \| https://orcid.org/0000-0003-1691-239X<br> https://www.wikidata.org/entity/Q28913658 |
| Elementos relacionados | identifiedBy |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_
|    |    |

<a name="dateIdentified">**dateIdentified** (Fecha de la identificación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo durante la cual fue identificado taxonómicamente la observación, colecta o muestra. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_
|    |    |

<a name="identificationReferences">**identificationReferences** (Referencias de la identificación)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|")  de las referencias (publicación, identificador único global, URI) usadas en la identificación. |
| Ejemplo | Aves del Noroeste Patagónico. Christie et al. 2004 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="identificationVerificationStatus">**identificationVerificationStatus** (Estado de la verificación de la identificación)</a>

|    |    |
| ---|--- |
| Definición | Un indicador sobre el nivel de verificación de la identificación taxonómica. Puede ser un valor categórico o un porcentaje para los registros identificados con métodos genéticos. |
| Comentarios | Se recomienda el uso de categorías claras o un vocabulario controlado como el de [HISPID/ABCD](https://hiscom.rbg.vic.gov.au/wiki/Talk:HISPID/ABCD_Workshop_Executive_Summary#Verification_Level_Flag_.28vlev.29), como se muestra a continuación:<br><br> 0 - El nombre del registro no ha sido revisado por ninguna autoridad (del vocabulario HISPID/ABCD)<br> 1 - El nombre del registro se determinó por medio de comparación contra otro ejemplar (del vocabulario HISPID/ABCD)<br> 2 - El nombre del registro fue determinado por un taxónomo usando material de una colección (del vocabulario HISPID/ABCD)<br> 3 - El nombre del registro fue determinado por un taxónomo involucrado en la revisión sistemática del grupo (del vocabulario HISPID/ABCD)<br> 4 - El registros es derivado de forma asexual de un material tipo (del vocabulario HISPID/ABCD)<br> Verificado |
| Ejemplo | 0<br> 1<br> 2<br> 3<br> 4<br> Verificado<br> No verificado<br> 97.3% a género |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="typeStatus">**typeStatus** (Tipo nomeclatural)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los tipos de nomenclatura (estado del tipo, nombre científico tipificado, publicación) aplicados al organismo. Se recomienda el uso del vocabulario sugerido disponible para este elemento con traducción a español (https://tools.gbif.org/dwca-validator/vocabulary.do?id=http://rs.gbif.org/vocabulary/gbif/type_status). |
| Ejemplo | Holotipo de Ctenomys sociabilis. Pearson O. P.; y M. I. Christie. 1985. Historia Natural; 5(37):388<br> Paratipo<br> Alotipo<br> Isotipo<br> Neotipo<br> Plastotipo<br> Sintipo<br> Topotipo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="verbatimIdentification">**verbatimIdentification** (Identificación original)</a>

|    |    |
| ---|--- |
| Definición | La identificación original del organismo (como fue tomada en campo o documentada en el voucher). Este elemento permite documentar la identificación o determinación original inalterada, incluidos los calificadores de identificación, fórmulas híbridas, incertidumbres, etc. |
| Ejemplo | Peromyscus sp.<br> Ministrymon sp. nov. 1 <br> Anser anser X Branta canadensis<br> Pachyporidae? |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="identificationRemarks">**identificationRemarks** (Comentarios de la identificación)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la identificación. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Se distingue entre Anthus correndera y Anthus hellmayri basado en las longitudes comparativas de las uñas<br> Amplificación del gen 16S rRNA \| Identificación bioquímica |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_
|    |    |

<a name="identificationQualifier">**identificationQualifier** (Calificador de la identificación)</a>

|    |    |
| ---|--- |
| Definición | El grado de incertidumbre de la identificación puede indicarse agregando varios términos, como aff. y cf. al nombre científico. El calificador se aplica a la parte del nombre que sigue inmediatamente al calificador y se pueden colocar delante de cualquier elemento del nombre.<br><br>  cf.  del latín confer significa comparado con. Su uso indica que no hay certeza de la identidad de la especie (o rango taxonómico superior) hasta que se pueda hacer una comparación más detallada, por ejemplo, con algún tipo o material de referencia. <br><br>  aff. del latín affinis significa similar o limítrofe. Su uso indica que el material o la evidencia disponible sugiere que la especie propuesta está relacionada, tiene afinidad, pero no es idéntica, a la especie o taxón que le sigue. |
| Comentarios| Documente este elemento de acuerdo a las siguientes explicaciones:<br><br> cf. agrifolia  (Para Quercus cf. agrifolia, con valores acompañantes scientificName: Quercus , genus: Quercus, taxonRank: Género.)<br><br> aff. Sparassidae (Para cf. Sparassidae, con valores acompañantes  scientificName: Araneae, order: Araneae, taxonRank: Orden.) |
| Ejemplo | cf. agrifolia<br> aff. Sparassidae |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_
|    |    |

### Taxón

|    |    |    |    |
| ---|--- |--- |--- |
| [**scientificName**<br> (Nombre científico)](#scientificName) | [**scientificNameAuthorship**<br> (Autoría del nombre científico)](#scientificNameAuthorship) | [**taxonID**<br> (ID del Taxón)](#taxonID) | [**scientificNameID**<br> (ID del nombre científico)](#scientificNameID) |
| [**higherClassification**<br> (Clasificación superior)](#higherClassification) | [**kingdom**<br> (Reino)](#kingdom) | [**phylum**<br> (Filo)](#phylum) | [**class**<br> (Clase)](#class) |
| [**order**<br> (Orden)](#order) | [**family**<br> (Familia)](#family) | [**subfamily**<br> (Subfamilia)](#subfamily) | [**genus**<br> (Género)](#genus) | 
| [**genericName**<br> (Nombre genérico)](#genericName) | [**subgenus**<br> (Subgénero)](#subgenus) | [**infragenericEpithet**<br> (Epíteto infragenérico)](#infragenericEpithet) | [**specificEpithet**<br> (Epíteto Específico)](#specificEpithet) |
| [**infraspecificEpithet**<br> (Epíteto infraespecífico)](#infraspecificEpithet) | [**cultivarEpithet**<br> (Epíteto cultivar)](#cultivarEpithet) | [**taxonRank**<br> (Categoría del taxón)](#taxonRank) | [**verbatimTaxonRank**<br> (Categoría original del taxón)](#verbatimTaxonRank) |
| [**vernacularName**<br> (Nombre común)](#vernacularName) | [**taxonomicStatus**<br> (Estado taxonómico)](#taxonomicStatus) | [**acceptedNameUsage**<br> (Nombre aceptado usado)](#acceptedNameUsage) | [**acceptedNameUsageID**<br> (ID del nombre aceptado usado)](#acceptedNameUsageID) |
| [**parentNameUsage**<br> (Nombre parental usado)](#parentNameUsage) | [**parentNameUsageID**<br> (ID del Nombre Parental usado)](#parentNameUsageID) | [**originalNameUsage**<br> (Nombre original usado)](#originalNameUsage) | [**originalNameUsageID**<br> (ID del Nombre original usado)](#originalNameUsageID) |
| [**nameAccordingTo**<br> (Nombre de acuerdo con)](#nameAccordingTo) | [**nameAccordingToID**<br> (ID del nombre de acuerdo con)](#nameAccordingToID) | [**namePublishedIn**<br> (Nombre publicado en)](#namePublishedIn) | [**namePublishedInID**<br> (ID del nombre publicado en)](#namePublishedInID) |
| [**namePublishedInYear**<br> (Nombre publicado en el año)](#namePublishedInYear) | [**taxonConceptID**<br> (ID del concepto del taxón)](#taxonConceptID) | [**nomenclaturalCode**<br> (Código nomenclatural)](#nomenclaturalCode) | [**nomenclaturalStatus**<br> (Estado nomenclatural)](#nomenclaturalStatus) |
| [**taxonRemarks**<br> (Comentarios del taxón)](#taxonRemarks) |  |  |  |
|    |    |    |    |    |

<br>
<br>

<a name="scientificName">**scientificName** (Nombre científico)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico canónico (sin la autoría) correspondiente a la categoría taxonómica a la que se logró la determinación del organismo observado o colectado. El nombre debe ser congruente con el elemento taxonRank, de modo que se informe a que nivel (especie, género, familia, etc.) se encuentra el nombre documentado. |
| Comentarios| Para tener en cuenta:<br><br> - El nombre científico puede pertenecer a cualquier categoría taxonómica (reino, filo, clase, orden, familia, género, especie entre otros), en ningún caso es obligatorio la identificación a nivel de especie.<br> - No debe documentar la autoría del taxón en este elemento, para ello utilice el elemento scientificNameAuthorship.<br> - No debe documentar calificadores de identificación (“cf.”, “aff.”, etc.), para ello utilice el elemento identificationQualifier y deje en el nombre científico la categoría superior sobre la cual se tiene certeza.<br> - No debe documentar abreviaciones que no dan cuenta de el nombre específico o hacen referencia  a morfotipos (“sp.”, “sp1.”, “spp.”), para ello utilice el elemento verbatimTaxonRank.<br><br> *Aunque oficialmente scientificName se define como el "nombre científico completo, con información de autoría y fecha si se conoce", desde el SiB Colombia se recomienda documentar solo el nombre canónico ya que hemos notado un detrimento de la calidad de este elemento por errores de tipeo cuando se incluye siguiendo la definición oficial. |
| Ejemplo | Coleoptera<br> Bacteria<br> Ctenomys sociabilis<br> Abrus pulchellus subsp. tenuiflorus |
| Elementos relacionados | taxonRank, scientificNameAuthorship, identificationQualifier, verbatimTaxonRank |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Lista de chequeo _(Obligatorio)_
|    |    |

<a name="scientificNameAuthorship">**scientificNameAuthorship** (Autoría del nombre científico)</a>

|    |    |
| ---|--- |
| Definición | La información de autoría correspondiente al scientificName, usando el formato acorde a las convenciones del Código Nomenclatural aplicable. |
| Ejemplo | (Torr.) J.T. Howell<br> (Martinovský) Tzvelev<br> (Györfi, 1952) |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="taxonID">**taxonID** (ID del Taxón)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único global del taxón (datos asociados a la clasificación del Taxón) de acuerdo al nombre científico documentado en el elemento scientificName. Puede ser un identificador único global o un identificador específico para el conjunto de datos.<br><br> Este puede ser obtenido de bases de datos o catálogos taxonómicos globales. |
| Ejemplo | (gbif.org/species/3056437<br> urn:lsid:marinespecies.org:taxname:124821<br> urn:lsid:gbif.org:usages:32567<br> 8fa58e08-08de-4ac1-b69c-1235340b7001 |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Obligatorio)_
|    |    |

<a name="scientificNameID">**scientificNameID** (ID del nombre científico)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de los detalles de la nomenclatura (no taxonómica) de acuerdo al nombre científico documentado en el elemento scientificName.<br><br><br> Este puede ser obtenido de catálogos taxonómicos globales. |
| Ejemplo | (urn:lsid:ipni.org:names:37829-1:1.3<br> urn:lsid:marinespecies.org:taxname:493567 |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Condicinal)_. Obligatorio cuando el registro es marino<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="higherClassification">**higherClassification** (Clasificación superior)</a>

|    |    |
| ---|--- |
| Definición | Una lista de los nombres de los taxones inmediatamente superiores a la categoría del taxón del scientificName. Se recomienda ordenar la lista comenzando con la categoría más alta y separando los nombres de cada categoría, con una barra vertical "\|". Permite documentar categorías taxonómicas que no incluye el estándar (suborden, superfamilia, etc). |
| Ejemplo | Animalia \| Chordata \| Vertebrata \| Mammalia \| Theria \| Eutheria \| Rodentia \| Hystricognatha \| Hystricognathi \| Ctenomyidae \| Ctenomyini \| Ctenomys<br> Animalia \| Arthropoda \| Arachnida \| Araneae \| Paratropididae \| Paratropis |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="kingdom">**kingdom** (Reino)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del reino al que pertenece el taxón. |
| Ejemplo | Animalia<br> Plantae<br> Bacteria<br> Chromista<br> Fungi<br> Protozoa<br> Archaea |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="phylum">**phylum** (Filo)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del filo o división al que pertenece el taxón. |
| Ejemplo | Chordata<br> Bryophyta |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="class">**class** (Clase)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo de la clase al que pertenece el taxón. |
| Ejemplo | Mammalia<br> Hepaticopsida |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="order">**order** (Orden)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del orden al que pertenece el taxón. |
| Ejemplo | Carnivora<br> Monocleales |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="family">**family** (Familia)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo de la familia al que pertenece el taxón. |
| Ejemplo | Felidae<br> Monocleaceae |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="subfamily">**subfamily** (Subfamilia)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo de la subfamilia al que pertenece el taxón. |
| Ejemplo | Periptyctinae<br> Orchidoideae<br> Sphindociinae |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |


<a name="genus">**genus** (Género)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del género al que pertenece el taxón. |
| Ejemplo | Puma<br> Monoclea |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="genericName">**genericName** (Nombre genérico)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del género no aceptado al que pertenece el taxón. |
| Comentarios | El elemento genericName solo debe usarse para combinaciones como se muestra a continuación:<br><br> Felis (para el scientificName "Felis concolor", con los valores correspondientes de "Puma concolor" en acceptNameUsage y "Puma" en genus). |
| Ejemplo | Felis |
| Elementos relacionados | scientificName, acceptNameUsage, genus |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="subgenus">**subgenus** (Subgénero)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del subgénero al que pertenece el taxón. Se debe incluir el género para evitar la confusión de homonimia. |
| Ejemplo | Strobus (Pinus)<br> Puma (Puma)<br> Loligo (Amerigo)<br> Hieracium subgen. Pilosella |
| Elementos relacionados | genus |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="infragenericEpithet">**infragenericEpithet** (Epíteto infragenérico)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico del epíteto infragenérico (por encima de la especie, pero por debajo del género) al que pertenece el taxón. |
| Comentarios | Se usa por ejemplo para secciones en botánica como se muestra a continuación:<br><br> Cracca (para scientificName Vicia sect. Cracca |
| Ejemplo | Cracca |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="specificEpithet">**specificEpithet** (Epíteto Específico)</a>

|    |    |
| ---|--- |
| Definición | El nombre del epíteto específico presente en el scientificName cuando la determinación se hizo hasta especie u otra categoría menor. |
| Comentarios | Se usa por ejemplo para secciones en botánica como se muestra a continuación:<br><br> Cracca (para scientificName Vicia sect. Cracca |
| Ejemplo | concolor<br> gottsche |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="infraspecificEpithet">**infraspecificEpithet** (Epíteto infraespecífico)</a>

|    |    |
| ---|--- |
| Definición | El nombre del epíteto infraespecífico presente en el scientificName cuando la determinación se hizo con la categoría de taxón más baja o más especifica por debajo del epíteto específico (parte terminal del nombre), excluyendo cualquier otra denominación de categoría. |
| Comentarios | Se usa por ejemplo para secciones en botánica como se muestra a continuación:<br><br> Cracca (para scientificName Vicia sect. Cracca |
| Ejemplo | concolor<br> oxyadenia<br> sayi |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="cultivarEpithet">**cultivarEpithet** (Epíteto cultivar)</a>

|    |    |
| ---|--- |
| Definición | El nombre de un cultivar, grupo de cultivares, o grex (horticultura) que sigue al nombre científico.<br><br> De acuerdo con las Reglas del Código de Plantas Cultivadas, el nombre de un cultivar consiste en un nombre botánico seguido de un epíteto de cultivar. |
| Comentarios | Documentar de acuerdo a como se muestra a continuación:<br><br> King Edward (para el scientificName "Solanum tuberosum 'King Edward'" y taxonRank "cultivar")<br> Mishmiense (para el scientificName "Rhododendron boothii Mishmiense Group" y taxonRank "grupo de cultivares")<br> Atlantis (para scientificName "Paphiopedilum Atlantis grex" y taxonRank "grex") |
| Ejemplo | King Edward<br> Mishmiense<br> Atlantis |
| Elementos relacionados | scientificName, taxonRank |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="taxonRank">**taxonRank** (Categoría del taxón)</a>

|    |    |
| ---|--- |
| Definición | La categoría taxonómica del nombre más específico presente en el scientificName. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Reino<br> Subreino<br> Filo<br> División<br> Subfilo<br> Subdivisión<br> Clase<br> Subclase<br> Orden<br> Suborden<br> Familia<br> Subfamilia<br> Tribu<br> Subtribu<br> Género<br> Subgénero<br> Sección<br> Subsección<br> Serie<br> Subserie<br> Especie<br> Subespecie<br> Variedad<br> Subvariedad<br> Forma<br> Subforma |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="verbatimTaxonRank">**verbatimTaxonRank** (Categoría original del taxón)</a>

|    |    |
| ---|--- |
| Definición | La categoría taxonómica del nombre más específico tal y como aparece en el registro original. Se utiliza para documentar abreviaciones que dan cuenta de incertidumbres o morfotipos en el registro. |
| Ejemplo | sp1.<br> sp2.<br> Morfotipo1.<br> sub-lesus<br> prole<br> apomict<br> spp. |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="vernacularName">**vernacularName** (Nombre común)</a>

|    |    |
| ---|--- |
| Definición | El nombre o nombres comunes del taxón (en una fila continua y separada por una barra vertical "\|"). |
| Ejemplo | Cóndor Andino<br> Águila Americana<br> Buitre \| Chulo |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="taxonomicStatus">**taxonomicStatus** (Estado taxonómico)</a>

|    |    |
| ---|--- |
| Definición | El estado taxonómico que define el uso del scientificName de acuerdo a un árbol taxonómico u opinión de experto. |
| Ejemplo | Inválido<br> Válido<br> Aceptado<br> Sinónimo<br> Sinónimo homotípico<br> Sinónimo heterotípico<br> Ambiguo<br> Mal aplicado |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="acceptedNameUsage">**acceptedNameUsage** (Nombre aceptado usado)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo, con autoría e información de fecha si se conoce, del taxón actualmente válido (zoológico) o aceptado (botánico) cuando el nombre documentado en scientificName no corresponda al nombre válido o aceptado. |
| Ejemplo | Tamias minimus Bachman, 1839 |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="acceptedNameUsageID">**acceptedNameUsageID** (ID del nombre aceptado usado)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el acceptedNameUsage (significado del nombre, documentado de acuerdo con alguna fuente) del taxón actualmente válido (zoológico) o aceptado (botánico).<br><br> Este elemento debe usarse cuando el elemento scientificName hace referencia a un sinónimo o a un nombre ambiguo mal aplicado, para dar claridad sobre el taxón válido al que hace referencia. <br><br> Este puede ser obtenido de bases de datos o catálogos taxonómicos globales. |
| Ejemplo | gbif.org/species/2435099<br> tsn:552479<br> urn:lsid:ipni.org:names:320035-2 |
| Elementos relacionados | acceptedNameUsage |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="parentNameUsage">**parentNameUsage** (Nombre parental usado)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo, con autoría e información de fecha si se conoce, del taxón parental directo válido (zoológico) o aceptado (botánico), más próximo de nivel superior (en una clasificación) del elemento más específico presente en el scientificName. |
| Ejemplo | Rubiaceae<br> Arcytophyllum Willd.<br> Testudinae |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="parentNameUsageID">**parentNameUsageID** (ID del Nombre Parental usado)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el uso del nombre (significado del nombre, documentado de acuerdo con alguna fuente) del taxón parental directo del taxón indicado en el scientificName.<br><br> Por ejemplo si el scientificName corresponde a una especie, el parentNameUsageID corresponder al nombre científico del género si este hace referencia a un sinónimo o a un nombre ambiguo mal aplicado<br><br> Este puede ser obtenido de bases de datos o catálogos taxonómicos globales. |
| Ejemplo | gbif.org/species/2435099<br> tsn:552479<br> urn:lsid:ipni.org:names:320035-2 |
| Elementos relacionados | parentNameUsage |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="originalNameUsage">**originalNameUsage** (Nombre original usado)</a>

|    |    |
| ---|--- |
| Definición | El nombre del taxón, con autoría e información de fecha si se conoce, tal como apareció originalmente cuando se estableció por primera vez bajo las reglas del nomenclaturalCode asociado. El basiónimo (botánica) o basónimo (bacteriología) correspondiente al scientificName o el homónimo anterior de los nombres sustituidos. |
| Ejemplo | Gasterosteus saltatrix Linnaeus 1768 |
| Elementos relacionados | scientificName, nomeclaturalCode |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="originalNameUsageID">**originalNameUsageID** (ID del Nombre original usado)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el uso del nombre (significado del nombre, documentado de acuerdo con alguna fuente) en el que se estableció originalmente el scientificName, bajo las reglas del nomenclaturalCode asociado (el protónimo en zoología, basiónimo en botánica).<br><br> Este puede ser obtenido de bases de datos o catálogos taxonómicos globales. |
| Ejemplo | gbif.org/species/2435099<br> tsn:552479<br> urn:lsid:ipni.org:names:320035-2 |
| Elementos relacionados | originalNameUsage |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="nameAccordingTo">**nameAccordingTo** (Nombre de acuerdo con)</a>

|    |    |
| ---|--- |
| Definición | La referencia a la fuente en la que está definida o implícita la definición conceptual del taxón documentado en scientificName, tradicionalmente representado por el Latín "sensu" o "sec." (de secundum, que significa "según"). Para los taxones que resultan de las identificaciones, una referencia a las claves, monografías, expertos y otras fuentes debe ser provista. |
| Ejemplo | Franz NM, Cardona-Duque J (2013) Description of two new species and phylogenetic reassessment of Perelleschus Wibmer & O’Brien, 1986 (Coleoptera:<br> Curculionidae), with a complete taxonomic concept history of Perelleschus sec. Franz & Cardona-Duque, 2013. Syst Biodivers. 11: 209–236 |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="nameAccordingToID">**nameAccordingToID** (ID del nombre de acuerdo con)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la fuente/publicación en la que está definida o implícita la definición conceptual del taxón específico. Véase nameAccordingTo.<br><br> Este término debe usarse para referirse al ID de taxón de un registro de taxón que representa la combinación original del nombre (el protónimo en zoología, el basiónimo en botánica).  |
| Ejemplo | doi:10.1016/S0269-915X(97)80026-2<br> 19thcenturyscience.org/HMSC/HMSC-Reports/Zool-40/README.htm |
| Elementos relacionados | nameAccordingTo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="namePublishedIn">**namePublishedIn** (Nombre publicado en)</a>

|    |    |
| ---|--- |
| Definición | Una referencia para la publicación en que se estableció originalmente el taxón presente en el scientificName, bajo las reglas del nomeclaturalCode asociado. |
| Ejemplo | Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388; Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886 |
| Elementos relacionados | scientificName, nomeclaturalCode |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="namePublishedInID">**namePublishedInID** (ID del nombre publicado en)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la publicación en que se estableció originalmente el taxón presente en el scientificName, bajo las reglas del nomeclaturalCode asociado. |
| Ejemplo | doi:10.1016/S0269-915X(97)80026-2<br> 19thcenturyscience.org/HMSC/HMSC-Reports/Zool-40/README.htm |
| Elementos relacionados | namePublishedIn |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="namePublishedInYear">**namePublishedInYear** (Nombre publicado en el año)</a>

|    |    |
| ---|--- |
| Definición | El año de cuatro dígitos en el que se publicó el taxón presente en el scientificName. |
| Ejemplo | 1915<br> 2008 |
| Elementos relacionados | namePublishedIn |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="taxonConceptID">**taxonConceptID** (ID del concepto del taxón)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el concepto taxonómico al que se refiere el registro, no para los detalles de nomenclatura de un taxón. |
| Ejemplo | urn:lsid:zoobank.org:act:040832DB-2A58-4EFE-B234-AEBF222586FC |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="nomenclaturalCode">**nomenclaturalCode** (Código nomenclatural)</a>

|    |    |
| ---|--- |
| Definición | El código nomenclatural (o códigos en el caso de un nombre ambireinal) en virtud del cual se construye el scientificName. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | ICBN<br> ICZN<br> BC<br> ICNCP<br> BioCode<br> PhyloCode |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="nomenclaturalStatus">**nomenclaturalStatus** (Estado nomenclatural)</a>

|    |    |
| ---|--- |
| Definición | El estado nomenclarural en la publicación original del scientificName y su conformidad con las normas pertinentes de nomenclatura. Está basado en las definiciones del nomenclaturalCode en uso y no requiere una opinión taxonómica. |
| Ejemplo | nom. ambig.<br> nom. illeg.<br> nom. subnud. |
| Elementos relacionados | scientificName, nomenclaturalCode |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="taxonRemarks">**taxonRemarks** (Comentarios del taxón)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre el taxón o nombre. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Este nombre está mal escrito en uso común<br> Sin estado de amenaza reportada |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

## Extensiones DwC


### Relación del Recurso

|    |    |    |
| ---|--- |--- |
| [**resourceRelationshipID**<br> (ID de la relación de los recursos)](#resourceRelationshipID) | [**resourceID**<br> (ID del recurso)](#resourceID) | [**relatedResourceID**<br> (ID del recurso relacionado)](#relatedResourceID) | 
| [**relationshipOfResource**<br> (Tipo de relación del recurso)](#relationshipOfResource) | [**relationshipOfResourceID**<br> (ID del tipo de relación del recurso)](#relationshipOfResourceID) | [**relationshipAccordingTo**<br> (Relación de acuerdo con)](#relationshipAccordingTo) |
| [**relationshipEstablishedDate**<br> (Fecha en que se estableció la relación)](#relationshipEstablishedDate) | [**relationshipRemarks**<br> (Comentarios de la relación)](#relationshipRemarks) |  |
|    |    |    |

<br>
<br>

<a name="resourceRelationshipID">**resourceRelationshipID** (ID de la relación de los recursos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para una instancia de relación entre un recurso (resourceID, el sujeto) y otro (relatedResource, el objeto).<br><br> En caso de no contar con un identificador, se puede construir a partir de la concatenación de los occurrenceID separados por /. |
| Ejemplo | UANDES:ANDES-M:20054/UANDES:ANDES-E:1054 |
| Elementos relacionados | occurrenceID, resourceID, relatedResourceID |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="resourceID">**resourceID** (ID del recurso)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del recurso que es sujeto de la relación. Si el registro se encuentra publicado, se recomienda documentar el mismo occurrenceID o una URL asociada. |
| Ejemplo | IAvH:CBB:PARAMOS:ANFIBIA:MUESTRA:001<br> UANDES:ANDES-M:20054<br> urn:uuid:bab4d024-b931-42b0-aa34-88e7d7f8a747 |
| Elementos relacionados | occurrenceID |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="relatedResourceID">**relatedResourceID** (ID del recurso relacionado)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el recurso biológico que es el objeto de la relación. Si el registro se encuentra publicado, se recomienda documentar el mismo occurrenceID o una URL asociada. |
| Ejemplo | IAvH:CBB:PARAMOS:ANFIBIA:ESPECIMENPRESERVADO:001<br> UANDES:ANDES-E:1054<br> urn:catalog:Berggren:KB07001 |
| Elementos relacionados | occurrenceID |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="relationshipOfResource">**relationshipOfResource** (Tipo de relación del recurso)</a>

|    |    |
| ---|--- |
| Definición | La relación del objeto respecto al sujeto. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Duplicado de<br> Madre de<br> Secuencia de<br> Huésped de<br> Tejido de<br> Sinonimia válida de<br> Ubicado dentro de<br> Muestra de<br> Parásito de<br> Cría de<br> Simbionte con |
| Elementos relacionados | relationshipOfResourceID |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="relationshipOfResourceID">**relationshipOfResourceID** (ID del tipo de relación del recurso)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para la relación del objeto respecto al sujeto (relationshipOfResource). |
| Comentarios | Se recomienda hacer uso de los identificadores de los términos en vocabularios controlados, como la ontología de relación OBO., como se muestra a continuación:<br><br> http://purl.obolibrary.org/obo/RO_0002456 (para la relación "polinizado por")<br> https://www.inaturalist.org/observation_fields/879 (para la relación "comido por") |
| Ejemplo | http://purl.obolibrary.org/obo/RO_0002456br> https://www.inaturalist.org/observation_fields/879 |
| Elementos relacionados | relationshipOfResource |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="relationshipAccordingTo">**relationshipAccordingTo** (Relación de acuerdo con)</a>

|    |    |
| ---|--- |
| Definición | La fuente (persona, organización, publicación, referencia) que establece la relación entre los dos registros. |
| Ejemplo | Paola Andrea Salamanca Torres<br> Luis Alejandro Morales Mina |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="relationshipEstablishedDate">**relationshipEstablishedDate** (Fecha en que se estableció la relación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se estableció la relación. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/2010-01<br> 2009-02/10<br> 2009-02-12/2009-10-08<br> 2010-01-17/18 |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="relationshipRemarks">**relationshipRemarks** (Comentarios de la relación)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la relación entre los dos registros. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Madre y cría colectadas del mismo nido<br> Polinizador capturado en el acto<br> Ejemplar bien conservado para extracción de ADN<br> Parásito que genera enfermedad mortal para la especie |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

### Medidas o Hechos Extendida

|    |    |    |
| ---|--- |--- |
| [**occurrenceID**<br> (ID del Registro biológico)](#medidas_occurrenceID) | [**measurementID**<br> (ID de la medida)](#measurementID) | [**measurementType**<br> (Tipo de medida)](#measurementType) | 
| [**measurementTypeID**<br> (ID del tipo de medida)](#measurementTypeID) | [**measurementValue**<br> (Valor de la medida)](#measurementValue) | [**measurementValueID**<br> (ID del valor de la medida)](#measurementValueID) |
| [**measurementAccuracy**<br> (Precisión de la medida)](#measurementAccuracy) | [**measurementUnit**<br> (Unidad de la medida)](#measurementUnit) | [**measurementUnitID**<br> (ID de la unidad de la medida)](#measurementUnitID) |
| [**measurementDeterminedDate**<br> (Fecha de la determinación de la medida)](#measurementDeterminedDate) | [**measurementDeterminedBy**<br> (Medida tomada por)](#measurementDeterminedBy) | [**measurementMethod**<br> (Método de medida)](#measurementMethod) |
| [**measurementRemarks**<br> (Comentarios de la medida)](#measurementRemarks) |  |  |
|    |    |    |

<br>
<br>

<a name="medidas_occurrenceID">**occurrenceID** (ID del Registro biológico)</a>

|    |    |
| ---|--- |
| Definición | El identificador del registro biológico asociado a la medida o hecho. Se puede utilizar para asociar más de una medida con el mismo registro biológico. |
| Ejemplo | ILVO_macro_aggregate_59206<br> ANH-I:2008:EH253:SUP:MHNMC:Consec.71957:Zoo1 |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="measurementID">**measurementID** (ID de la medida)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para la medida o hecho. Puede ser un identificador único global o un identificador específico para el conjunto de datos. El identificador puede construirse a partir de tesauros específicos como NERC (https://www.bodc.ac.uk/resources/vocabularies/vocabulary_search/) comúnmente usado para datos marinos.<br><br> Puede construirse a partir de la siguiente estructura: [measurementTypeID]:[consecutivo]. |
| Ejemplo | P01/current/AREABEDS:001 |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="measurementType">**measurementType** (Tipo de medida)</a>

|    |    |
| ---|--- |
| Definición | El nombre de la medida, hecho o característica. Puede ser abiótica, biótica o relacionada al protocolo de muestreo. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | **Bióticos**<br> Estado fitosanitario<br> Peso<br> Longitud total<br> Descripción gónadas<br> Largo de cuerpo<br> Grupo funcional<br> **Abióticos**<br> pH<br> Clima<br> Longitud del tramo muestreado<br> Nombre del instrumento de muestreo<br> Temperatura<br> Superficie del área<br> Altura de la orilla<br> Tamaño del grano<br> Color de muestra |
| Elementos relacionados | measurementTypeID, measurementValue, measurementUnit |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="measurementTypeID">**measurementTypeID** (ID del tipo de medida)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el valor documentado en measurementType (Identificador único global, URI), este identificador debe ser un vocabulario controlado. |
| Comentarios | Se recomienda el uso del vocabulario NERC (https://www.bodc.ac.uk/resources/vocabularies/vocabulary_search/) para datos marinos, como se muestra a continuación:<br><br> http://vocab.nerc.ac.uk/collection/P01/current/LENTRACK/ (= Longitud del tramo muestreado)<br> http://vocab.nerc.ac.uk/collection/Q01/current/Q0100002/ (= Nombre del instrumento de muestreo)<br> P01/current/AREABEDS (= Área del fondo marino muestreada) |
| Ejemplo | http://vocab.nerc.ac.uk/collection/P01/current/LENTRACK/<br> http://vocab.nerc.ac.uk/collection/Q01/current/Q0100002/<br> P01/current/AREABEDS |
| Elementos relacionados | measurementType |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="measurementValue">**measurementValue** (Valor de la medida)</a>

|    |    |
| ---|--- |
| Definición | El valor de la medida, hecho o característica documentada en el elemento measurementType. |
| Ejemplo | **Bióticos**<br> Bueno<br> Agar sangre<br> 80.1<br> 1.20<br> 38<br> C3743<br> Gónadas en estado inmaduro, con tamaño uniforme<br> **Abióticos**<br> 7.8<br> Nublado<br> 30<br> Balde |
| Elementos relacionados | measurementValueID, measurementType |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="measurementValueID">**measurementValueID** (ID del valor de la medida)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para los hechos documentados en measurementValue. Este puede referenciar un vocabulario controlado o una metodología en un artículo con un DOI. Cuando el campo measurementValue contiene una medida y no un hecho, debe dejarse vacío. |
| Comentarios | Se recomienda el uso del vocabulario NERC (https://www.bodc.ac.uk/resources/vocabularies/vocabulary_search/), como se muestra a continuación:<br><br> http://vocab.nerc.ac.uk/collection/L22/current/TOOL0536/ (= Balde)<br> L22/current/TOOL0653/ (= Muestreo Van Veen) |
| Ejemplo | http://vocab.nerc.ac.uk/collection/L22/current/TOOL0536/<br> L22/current/TOOL0653/ |
| Elementos relacionados | measurementValue |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="measurementAccuracy">**measurementAccuracy** (Precisión de la medida)</a>

|    |    |
| ---|--- |
| Definición | La descripción de los errores potenciales asociados con el measurementValue. |
| Ejemplo | 0.01<br> Distribución normal con variación de 2 m |
| Elementos relacionados | measurementValue |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="measurementUnit">**measurementUnit** (Unidad de la medida)</a>

|    |    |
| ---|--- |
| Definición | Las unidades asociadas al measurementValue. Sólo aplica para variables cuantitativas. |
| Comentarios | La práctica recomendada es utilizar el Sistema Internacional de Unidades (SI) (http://www.sc.ehu.es/sbweb/fisica_/unidades/unidades/unidades_1.html), como se muestra a continuación:<br><br> g (= Gramos)<br> m (= Metros)<br> °C (= Grados Centígrados) |
| Ejemplo | g<br> m<br> °C<br> cm<br> s |
| Elementos relacionados | measurementUnitID, measurementValue |
| _(Obligatoriedad)_ | _(Condicional)_. Obligatorio para variables cuantitativas |
|    |    |

<a name="measurementUnitID">**measurementUnitID** (ID de la unidad de la medida)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el valor documentado en measurementUnit (Identificador único global, URI), este identificador debe ser un vocabulario controlado. |
| Comentarios | Se recomienda el uso del vocabulario NERC (https://www.bodc.ac.uk/resources/vocabularies/vocabulary_search/) para datos marinos, como se muestra a continuación:<br><br> P06/current/ULAA/ (= Metros)<br> <http://vocab.nerc.ac.uk/collection/P06/current/UGRM (= Gramos)<br> http://vocab.nerc.ac.uk/collection/P06/current/UMSQ/ (= Metros cuadrados) |
| Ejemplo | P06/current/ULAA/<br> http://vocab.nerc.ac.uk/collection/P06/current/UGRM<br> http://vocab.nerc.ac.uk/collection/P06/current/UMSQ/ |
| Elementos relacionados | measurementUnit |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="measurementDeterminedDate">**measurementDeterminedDate** (Fecha de la determinación de la medida)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se realizó la medida o hecho. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/2010-01<br> 2009-02/10<br> 2009-02-12/2009-10-08<br> 2010-01-17/18 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="measurementDeterminedBy">**measurementDeterminedBy** (Medida tomada por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por "\|") de los nombres de las personas, grupos u organizaciones que determinan el measuremenetValue. |
| Ejemplo | Javier Andrés de la Torre Sánchez<br> Julie Woodruff Paerson \| Eileen Lacey Smith |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="measurementMethod">**measurementMethod** (Método de medida)</a>

|    |    |
| ---|--- |
| Definición | Una descripción o referencia (publicación, URI) del método o protocolo utilizado para determinar la medida, hecho o característica. |
| Ejemplo | Polígono alrededor de las madrigueras<br> Altímetro barométrico |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="measurementRemarks">**measurementRemarks** (Comentarios de la medida)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o notas que acompañan a la medida o hecho. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Falta la punta de la cola<br> Largo del pico por encima del promedio<br> Aleta dorsal mordida<br> Ejemplar conservado en buen estado<br> El medio de cultivo es modificado |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Multimedia Simple

|    |    |    |    |
| ---|--- |--- |--- |
| [**type**<br> (Tipo)](#multimedia_type) | [**format**<br> (Formato)](#format) | [**identifier**<br> (Identificador)](#multimedia_identifier) | [**references**<br> (Referencias)](#multimedia_references) |
| [**title**<br> (Título)](#multimedia_title) | [**description**<br> (Descripción)](#multimedia_description) | [**created**<br> (Fecha de creación)](#multimedia_created) | [**creator**<br> (Creador)](#multimedia_creator) |
| [**contributor**<br> (Contribuidor)](#multimedia_contributor) | [**publisher**<br> (Publicador)](#multimedia_publisher) | [**audience**<br> (Audiencia)](#multimedia_audience) | [**source**<br> (Fuente)](#multimedia_source) |
| [**license**<br> (Licencia)](#multimedia_license) | [**rightsHolder**<br> (Titular de los derechos)](#multimedia_rightsHolder) | [**datasetID**<br> (ID del conjunto de datos)](#multimedia_datasetID) |  |
|    |    |    |    |

<br>
<br>

<a name="multimedia_type">**type** (Tipo)</a>

|    |    |
| ---|--- |
| Definición | El tipo de recurso multimedia. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
| [Vocabulario controlado](#vc_type) | StillImage<br> MovingImage<br> Sound<br> PhysicalObject<br> Event<br><br> (Para mas opciones, se puede consultar el vocabulario controlado completo en la siguiente URL: [https://tools.gbif.org/dwca-validator/vocabulary.do?id=http://dublincore.org/documents/dcmi-type-vocabulary/](https://tools.gbif.org/dwca-validator/vocabulary.do?id=http://dublincore.org/documents/dcmi-type-vocabulary/)) |
|    |    |

<a name="format">**format** (Formato)</a>

|    |    |
| ---|--- |
| Definición | Formato en el que se encuentra la información multimedia asociada. Es recomendado usar un formato que esté registrado en IANA [(http://www.iana.org/assignments/media-types/media-types.xhtml)](http://www.iana.org/assignments/media-types/media-types.xhtml). |
| Ejemplo | jpeg<br> tiff<br> mp4<br> mp3<br> MPV<br> 3gp |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_identifier">**identifier** (Identificador)</a>

|    |    |
| ---|--- |
| Definición | Enlace a la página que muestre la imagen o sus metadatos. |
| Ejemplo | https://live.staticflickr.com/65535/49971003886_9fb3569bf8_b.jpg<br> https://www.xeno-canto.org/sounds/uploaded/DGVLLRYDXS/ZONCAP54.mp3<br> https://web.corral.tacc.utexas.edu/MVZ/audio/mp3/222_6560.mp3<br> https://static.inaturalist.org/sounds/15665.3gp?1506898805 |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="multimedia_references">**references** (Referencias)</a>

|    |    |
| ---|--- |
| Definición | Una página web html que muestre la imagen o sus metadatos. |
| Ejemplo | https://www.flickr.com/photos/victorsaavedramartinez/with/1866107071/<br> https://www.flickr.com/photos/arthur_chapman/4094078241/<br> https://ww2.bgbm.org/herbarium/specimen.cfm?SpecimenPK=103730<br> https://monarch.calacademy.org/collections/individual/index.php?occid=700648&clid=0 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_title">**title** (Título)</a>

|    |    |
| ---|--- |
| Definición | El título del objeto multimedia. |
| Ejemplo | Andorinha-do-rio (Tachycineta albiventer)<br> Puma chileno<br> MCZ:Herp:R-17603 Caiman crocodilus fuscus<br> 125692 Dircenna olyras d IN |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_description">**description** (Descripción)</a>

|    |    |
| ---|--- |
| Definición | Descripción textual y corta de la información multimedia. |
| Ejemplo | Hembra de Tachycineta albiventer fotografiada en el Amazonas, Colombia, en noviembre de 2010<br> Puma chileno juvenil reposando, Chile, diciembre 2020 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_created">**created** (Fecha de creación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se obtuvo la información multimedia. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_creator">**creator** (Creador)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas que tomaron la información multimedia. |
| Ejemplo | Adriana Catalina Saenz Espinoza<br> Field Museum of Natural History - Fishes Division \| Kevin Andrew Swagel |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_contributor">**contributor** (Contribuidor)</a>

|    |    |
| ---|--- |
| Definición | Cualquier persona que haya contribuido a la recolección, edición o procesamiento de la información multimedia. |
| Ejemplo | Camilo David Paez Zapata |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_publisher">**publisher** (Publicador)</a>

|    |    |
| ---|--- |
| Definición | Entidad responsable de hacer la información multimedia pública. |
| Ejemplo | Herbario de la Universidad Icesia<br> Royal Botanic Garden Edinburgh |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_audience">**audience** (Audiencia)</a>

|    |    |
| ---|--- |
| Definición | La audiencia a quien va dirigida la información multimedia. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Expertos<br> Académicos<br> Científicos<br> Ornitólogos<br> Público en general |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_source">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Si el elemento multimedia se derivó o se tomó de otra fuente, esta es la referencia a ese recurso. Por ejemplo, un libro del que se escaneó una imagen o el proveedor original de una foto / gráfico, como agencias de fotografía. |
| Ejemplo | https://proaves.org/listado-de-las-aves-de-colombia/ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_license">**license** (Licencia)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos, licencias o permisos que establece el publicador sobre el uso de la información multimedia. Se recomienda hacer uso de licencias abiertas o creative commons. |
| Ejemplo | http://creativecommons.org/licenses/by-nc-sa/2.0/deed.en |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_rightsHolder">**rightsHolder** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro multimedia. |
| Ejemplo | J002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/v24ppe |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="multimedia_datasetID">**datasetID** (Titular de los derechos)</a>

|    |    |
| ---|--- |
| Definición | Persona u organización propietaria o administradora de los derechos de la información multimedia. |
| Ejemplo | Jardín Botánico de Quindío |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |


### Referencias de Literatura

|    |    |    |    |
| ---|--- |--- |--- |
| [**identifier**<br> (Identificador)](#referencias_identifier) | [**bibliographicCitation**<br> (Citación bibliográfica)](#referencias_bibliographicCitation) | [**title**<br> (Título)](#referencias_title) | [**creator**<br> (Creador)](#referencias_creator) |
| [**date**<br> (Fecha)](#date) | [**source**<br> (Fuente)](#referencias_source) | [**description**<br> (Descripción)](#referencias_description) | [**subject**<br> (Tema)](#subject) |
| [**language**<br> (Idioma)](#referencias_language) | [**rights**<br> (Derechos)](#rights) | [**taxonRemarks**<br> (Comentarios del taxón)](#referencias_taxonRemarks) | [**type**<br> (Tipo)](#referencias_type) |
| [**datasetID**<br> (ID del conjunto de datos)](#referencias_datasetID) |  |  |  |
|    |    |    |    |

<br>
<br>

<a name="referencias_identifier">**identifier** (Identificador)</a>

|    |    |
| ---|--- |
| Definición | Un enlace a la referencia, puede ser un DOI, ISBN, URI ,etc. La referencia puede ser repetida en múltiples filas para incluir múltiples identificadores que lleven al artículo o a un pdf del artículo. |
| Ejemplo | https://link.springer.com/article/10.1007/s10722-020-00960-1<br> https://doi.org/10.15472/jeh0ic<br> http://www.nature.com/ng/journal/v41/n6/pdf/ng0609-637.pdf |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="referencias_bibliographicCitation">**bibliographicCitation** (Citación bibliográfica)</a>

|    |    |
| ---|--- |
| Definición | Citación bibliográfica completa en formato de texto plano. |
| Ejemplo | Granados-Martínez, C. y A. Batista. 2017. Macroinvertebrados acuáticos. Pp. 47-65. En: Lasso, C. A. y M. A. Morales-Betancourt (Eds.). III. Fauna de Caño Cristales, sierra La Macarena, Meta, Colombia. Serie Editorial Fauna Silvestre Neotropical. Instituto de Investigación de Recursos Biológicos Alexander von<br> Humboldt (IAvH). Bogotá, D. C., Colombia<br> Brander, K. (2015). Improving the Reliability of Fishery Predictions Under Climate Change. Current Climate Change Reports, 1(1): 40-48.  doi: 10.1007/s40641-015-0005-7 |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="referencias_title">**title** (Título)</a>

|    |    |
| ---|--- |
| Definición | Título del artículo, libro o fuente de citación bibliográfica documentada en bibliographicCitation. |
| Ejemplo | Macroinvertebrados acuáticos<br> Improving the Reliability of Fishery Predictions Under Climate Change |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="referencias_creator">**creator** (Creador)</a>

|    |    |
| ---|--- |
| Definición | Autores de la citación bibliográfica documentada en bibliographicCitation. |
| Ejemplo | Granados-Martínez, C. y A. Batista<br> Brander, K |
| Elementos relacionados | bibliographicCitation |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="date">**date** (Fecha)</a>

|    |    |
| ---|--- |
| Definición | Fecha de la citación bibliográfica documentada en bibliographicCitation. |
| Ejemplo | 2017<br> 2015 |
| Elementos relacionados | bibliographicCitation |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="referencias_source">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la citación bibliográfica documentada en bibliographicCitation. Para artículos científicos, documentar el nombre de la revista. Para capítulos de libros, documentar el nombre del libro. |
| Ejemplo | Serie Editorial Fauna Silvestre Neotropical. Instituto de Investigación de Recursos Biológicos Alexander von Humboldt<br> Current Climate Change Reports |
| Elementos relacionados | bibliographicCitation |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="referencias_description">**description** (Descripción)</a>

|    |    |
| ---|--- |
| Definición | Resumen, notas o comentarios de la publicación referenciada. |
| Ejemplo | La Corporación para el Desarrollo Sostenible del Área de Manejo Especial La Macarena-Cormacarena y el Instituto de Investigación de Recursos Biológicos Alexander von Humboldt, decidieron realizar estudios sobre la fauna en Caño Cristales (sierra de La Macarena). Se realizó entonces una evaluación rápida de la biodiversidad de Caño Cristales en octubre 2016 a fin de caracterizar los siguientes grupos: macroinvertebrados acuáticos, peces, anfibios, reptiles, aves y mamíferos |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="subject">**subject** (Tema)</a>

|    |    |
| ---|--- |
| Definición | Lista de palabras claves (en una fila continua y separada por una barra vertical "\|") de la publicación referenciada, puede incluir la información específica de la relación del trabajo citado y la taxonomía de los registros. |
| Ejemplo | Fauna \| Orinoquía \| Colombia \| Caño Cristales \| Serranía de la Macarena \| Región Neotropical \| Peces \| Anfibios \| Reptiles |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="referencias_language">**language** (Idioma)</a>

|    |    |
| ---|--- |
| Definición | Idioma de la publicación referenciada. |
| Ejemplo | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 639-1 de 2 letras en minúscula, como se muestra a continuación:<br><br> es (=Para español)<br> en (=Para inglés) |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | Consultar en: [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php) |
|    |    |

<a name="rights">**rights** (Derechos)</a>

|    |    |
| ---|--- |
| Definición | Información de los derechos de autor de la publicación referenciada. |
| Ejemplo | Todos los derechos reservados, Instituto de Investigación de Recursos Biológicos Alexander von Humboldt, Corporación para el Desarrollo Sostenible del Área de Manejo Especial La Macarena Cormacarena 2017 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="referencias_taxonRemarks">**taxonRemarks** (Comentarios del taxón)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre información específica del taxón relacionado con la publicación referenciada. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Se registra la especie Podocnemis unifilis (tortuga terecay) como amenazada |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="referencias_type">**type** (Tipo)</a>

|    |    |
| ---|--- |
| Definición | Usado para asignar una referencia bibliográfica a la lista de categorías taxonómicas o nomenclaturales. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Publicación<br> Original<br> Combinación<br> Monografía<br> Flora-Fauna<br> Lista de chequeo<br> Legal<br> Sitio web<br> Experto<br> Otro |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="referencias_datasetID">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro de la publicación referenciada. |
| Ejemplo | 002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/v24ppe |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Distribución de la Especie

|    |    |    |    |
| ---|--- |--- |--- |
| [**locationID**<br> (ID de la ubicación)](#distribucion_locationID) | [**locality**<br> (Localidad)](#distribucion_locality) | [**countryCode**<br> (Código del país)](#distribucion_countryCode) | [**lifeStage**<br> (Etapa de desarrollo)](#distribucion_lifeStage) |
| [**occurrenceStatus**<br> (Estado del registro biológico)](#distribucion_occurrenceStatus) | [**threatStatus**<br> (Estado de amenaza)](#threatStatus) | [**appendixCITES**<br> (Apéndice CITES)](#appendixCITES) | [**establishmentMeans**<br> (Medios de establecimiento)](#distribucion_establishmentMeans) |
| [**eventDate**<br> (Fecha del evento)](#distribucion_eventDate) | [**startDayOfYear**<br> (Día inicial del año)](#distribucion_startDayOfYear) | [**endDayOfYear**<br> (Día final del año)](#distribucion_endDayOfYear) | [**source**<br> (Fuente)](#distribucion_source) |
| [**occurrenceRemarks**<br> (Comentarios de la distribución)](#distribucion_occurrenceRemarks) | [**datasetID**<br> (ID del conjunto de datos)](#distribucion_datasetID) |  |  |
|    |    |    |    |

<br>
<br>

<a name="distribucion_locationID">**locationID** (ID de la ubicación)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la región geográfica, división político administrativa o del sitio específico donde se distribuye el taxón. |
| Comentarios | Se sugiere utilizar un identificador persistente, como el código de la División Política Administrativa de Colombia - DANE, [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD) precedida por "CO:" o utilizar MarineRegions [(https://www.marineregions.org/)](https://www.marineregions.org/)) para regiones marinas, como se muestra a continuación:<br><br> CO:15572 (Código Divipola para el Municipio de Puerto Boyacá en Boyacá)<br> CO:68 (Código Divipola para el Departamento de Santander)<br> CO:81 \| CO:05 (para el Departamento Arauca y  el Departamento Antioquia)<br> http://marineregions.org/mrgid/32556 (Islas del Rosario)<br><br> Si la ubicación corresponde a varias áreas geográficas, separar por una barra vertical "\|". Para otras áreas o código específicos de lugares nombrados (Topónimos) puede hacer uso de otros estándares. Ver: [http://rs.gbif.org/areas/](http://rs.gbif.org/areas/) |
| Ejemplo | CO:15572<br> CO:68<br> CO:81 \| CO:05<br> http://marineregions.org/mrgid/32556<br> geonames.org/3674545/ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="distribucion_locality">**locality** (Localidad)</a>

|    |    |
| ---|--- |
| Definición | El nombre general del área en la que se distribuye el taxón. |
| Ejemplo | Región Orinoquía<br> Región Caribe<br> Región Orinoquía<br> Parque Nacional Natural El Tuparro |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="distribucion_countryCode">**countryCode** (Código del país)</a>

|    |    |
| ---|--- |
| Definición | El código estándar para el país de la ubicación. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 3166-1-alfa-2 de códigos de países, como se muestra a continuación:<br><br> CO (=Para Colombia)<br> AR (=Para Argentina) |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | Consultar en: [https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO](https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO) |
|    |    |

<a name="distribucion_lifeStage">**lifeStage** (Etapa de desarrollo)</a>

|    |    |
| ---|--- |
| Definición | Elemento para indicar que la información de distribución pertenece solamente a una etapa de vida específica del taxón. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Huevo<br> Juvenil<br> Adulto<br> Cigoto<br> Embrión<br> Larva<br> Esporófito<br> Espora<br> Gametofito<br> Gameto<br> Pupa<br> Plántula<br> Floración<br> Fructificación |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="distribucion_occurrenceStatus">**occurrenceStatus** (Estado del registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Estado que da cuenta de la presencia o ausencia de un taxón en una ubicación. Se recomienda el uso de un vocabulario controlado, preferiblemente en inglés. |
| Ejemplo | present<br> absent<br> Presente<br> Ausente |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="threatStatus">**threatStatus** (Estado de amenaza)</a>

|    |    |
| ---|--- |
| Definición | Estado de amenaza de una especie de acuerdo a la IUCN (International Union for Conservation of Nature): https://www.iucnredlist.org/ o el estado en la lista del MADS (Ministerio de Medio ambiente y Desarrollo Sostenible): https://doi.org/10.15472/5an5tz. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](#vc_threatStatus) | EX<br> EW<br> RE<br> CR<br> EN<br> VU<br> NT<br> LC<br> DD<br> NA<br> NE |
|    |    |

<a name="appendixCITES">**appendixCITES** (Apéndice CITES)</a>

|    |    |
| ---|--- |
| Definición | El número de los apéndices CITES- Convention on International Trade in Endangered Species of Wild Fauna and Flora, en el que el taxón es categorizado. Es posible tener diferentes números de los apéndices para diferentes áreas. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](#vc_appendixCITES) | I<br> II<br> III |
|    |    |

<a name="distribucion_establishmentMeans">**establishmentMeans** (Medios de establecimiento)</a>

|    |    |
| ---|--- |
| Definición | Una afirmación que de cuenta si un taxón ha sido introducido a un lugar y tiempo determinado a través de actividad humana directa o indirecta. Se recomienda el uso de un vocabulario controlado, preferiblemente en inglés. |
| Comentarios | Este elemento también esta siendo utilizado para documentar endemismo. |
| Ejemplo | native<br> nativeReintroduced<br> introduced<br> introducedAssistedColonisation<br> vagrant<br> uncertain<br> Endémica |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="distribucion_eventDate">**eventDate** (Fecha del evento)</a>

|    |    |
| ---|--- |
| Definición | Contexto temporal relevante para el registro de la distribución, preferiblemente documentar como un rango de años o un año específico en el que el registro de la distribución es válido. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD, para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD), para un intervalo de años: AAAA/AAAA. |
| Ejemplo | 1939/1945<br> 1900 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="distribucion_startDayOfYear">**startDayOfYear** (Día inicial del año)</a>

|    |    |
| ---|--- |
| Definición | Subcontexto temporal, útil para especies migratorias. El primer día ordinal del año en el cual hay presencia del taxón. |
| Comentarios | La numeración comienza con 1 para el 1 de enero y termina con 365 o 366 para el 31 de diciembre, como se muestra a continuación:<br><br> 1 (Para el 1 de enero)<br> 60 (Para el 1 de marzo)<br> 160 (Para el 8 de junio) |
| Ejemplo | 1<br> 60<br> 160 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="distribucion_endDayOfYear">**endDayOfYear** (Día final del año)</a>

|    |    |
| ---|--- |
| Definición | Subcontexto temporal, útil para especies migratorias. El último día ordinal del año en el cual hay presencia del taxón.  |
| Comentarios | La numeración comienza con 1 para el 1 de enero y termina con 365 o 366 para el 31 de diciembre, como se muestra a continuación:<br><br> 120 (Para el 29 de abril)<br> 306 (Para el 1 de noviembre)<br> 365 (Para el 31 de diciembre) |
| Ejemplo | 120<br> 306<br> 365 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="distribucion_source">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la cual se obtuvo la información de distribución. Puede ser una cita bibliográfica (se recomienda formato APA), una URL de página web, etc. |
| Ejemplo | https://catalogo.biodiversidad.co/file/5f8e304877e76556702a20b8/summary<br> Euro+Med Plantbase - the information resource for Euro-Mediterranean plant diversity (2006). Published on the Internet http://ww2.bgbm.org/EuroPlusMed/ July, 2009 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="distribucion_occurrenceRemarks">**occurrenceRemarks** (Comentarios de la distribución)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la distribución. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Especie migratoria presente en Colombia durante el mes de junio |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="distribucion_datasetID">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro de distribución. |
| Ejemplo | 002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/ea8sek |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Descripción del Taxón

|    |    |    |    |
| ---|--- |--- |--- |
| [**type**<br> (Tipo)](#descripcion_type) | [**description**<br> (Descripción)](#descripcion_description)| [**source**<br> (Fuente)](#descripcion_source) | [**language**<br> (Idioma)](#descripcion_language) |
| [**created**<br> (Fecha de creación)](#descripcion_created) | [**creator**<br> (Creador)](#descripcion_creator) | [**contributor**<br> (Contribuidor)](#descripcion_contributor) | [**audience**<br> (Audiencia)](#descripcion_audience) |
| [**license**<br> (Licencia)](#descripcion_license) | [**rightsHolder**<br> (Titular de los derechos)](#descripcion_rightsHolder) | [**datasetID**<br> (ID del conjunto de datos)](#descripcion_datasetID) |  |
|    |    |    |    |

<br>
<br>

<a name="descripcion_type">**type** (Tipo)</a>

|    |    |
| ---|--- |
| Definición | Elemento categórico que mejor se ajuste a lo que se quiera describir del taxón. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Morfología<br>Reproducción<br> Fisiología |
| Elementos relacionados | description |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="descripcion_description">**description** (Descripción)</a>

|    |    |
| ---|--- |
| Definición | Texto libre y descriptivo del taxón que coincida con la temática de la categoría dada en el elemento type. |
| Ejemplo | Dimorfismo sexual<br> De 1 a 8 crías por evento reproductivo<br> Las características de las aletas posteriores corresponden a la especie Schistochlamys melanopis<br> Esta especie de rana presenta distribuciones altamente restringidas |
| Elementos relacionados | type |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="descripcion_source">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la cual se obtuvo la información de la descripción del taxón. Puede ser una cita bibliográfica (se recomienda formato APA), una URL de página web, etc. |
| Ejemplo | https://catalogo.biodiversidad.co/file/5f8e304b77e76556702a222b/summary<br> Acosta-Galvis, A.R. 2000. Ranas, Salamandras y Caecilias (Tetrapoda: Amphibia) de Colombia. Biota Colombiana: 289-319 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="descripcion_language">**language** (Idioma)</a>

|    |    |
| ---|--- |
| Definición | El idioma de la descripción. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 639-1 de 2 letras en minúscula, como se muestra a continuación:<br><br> es (=Para español)<br> en (=Para inglés) |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | Consultar en: [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php]) |
|    |    |

<a name="descripcion_created">**created** (Fecha de creación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se realizó la descripción. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="descripcion_creator">**creator** (Creador)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas responsables de realizar la descripción. |
| Ejemplo | Eduardo Amat García<br> Javier Maldonado Ocampo<br> Mónica Andrea Sánchez Torres \| Esteban Andrés Novoa López |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="descripcion_contributor">**contributor** (Contribuidor)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las entidades responsables de realizar la descripción. |
| Ejemplo | Universidad Nacional de Colombia |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="descripcion_audience">**audience** (Audiencia)</a>

|    |    |
| ---|--- |
| Definición | La audiencia a quien va dirigida la información de la descripción. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Expertos<br> Académicos<br> Científicos<br> Ornitólogos<br> Público en general |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="descripcion_license">**license** (Licencia)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos, licencias o permisos que establece el publicador sobre el uso de la información de la descripción. Se recomienda hacer uso de licencias abiertas o creative commons. |
| Ejemplo | http://creativecommons.org/licenses/by-nc-sa/2.0/eed.en |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="descripcion_rightsHolder">**rightsHolder** (Titular de los derechos)</a>

|    |    |
| ---|--- |
| Definición | Persona u organización propietaria o administradora de los derechos de la información de la descripción. |
| Ejemplo | Secretaria de Agricultura<br> Ministerio de Medio Ambiente<br> Secretaría Distrital de Ambiente |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="descripcion_datasetID">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro de la descripción. |
| Ejemplo | 002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/v24ppe |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Perfil de la Especie

|    |    |    |    |
| ---|--- |--- |--- |
| [**isMarine**<br> (Es marino)](#isMarine) | [**isFreshWater**<br> (Es dulceacuícola)](#isFreshWater) | [**isTerrestrial**<br> (Es terrestre)](#isTerrestrial) | [**isInvasive**<br> (Es invasor)](#isInvasive) |
| [**isHybrid**<br> (Es híbrido)](#isHybrid) | [**isExtinct**<br> (Está extinto)](#isExtinct) | [**livingPeriod**<br> (Periodo en el que vivió)](#livingPeriod) | [**ageInDays**<br> (Edad en días)](#ageInDays) |
| [**sizeInMillimeters**<br> (Tamaño en milímetros)](#sizeInMillimeters) | [**massInGrams**<br> (Masa en gramos)](#massInGrams) | [**lifeForm**<br> (Forma de vida)](#lifeForm) | [**habitat**<br> (Hábitat)](#perfil_habitat) |
| [**sex**<br> (Sexo)](#perfil_sex) | [**source**<br> (Fuente)](#perfil_source) | [**datasetID**<br> (ID del conjunto de datos)](#perfil_datasetID) |  |
|    |    |    |    |

<br>
<br>

<a name="isMarine">**isMarine** (Es marino)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), marino. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="isFreshWater">**isFreshWater** (Es dulceacuícola)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), dulceacuícola. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="isTerrestrial">**isTerrestrial** (Es terrestre)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), terrestre. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="isInvasive">**isInvasive** (Es invasor)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), invasor. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="isHybrid">**isHybrid** (Es híbrido)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), híbrido. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="isExtinct">**isExtinct** (Está extinto)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón está (=TRUE), o no está (=FALSE), extinto. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="livingPeriod">**livingPeriod** (Periodo en el que vivió)</a>

|    |    |
| ---|--- |
| Definición | El periodo geológico en el cual un organismo extinto estuvo vivo. Para tiempo geológicos de fósiles, lo ideal es usar un vocabulario controlado como [https://es.wikipedia.org/wiki/Escala_temporal_geol%C3%B3gica](https://es.wikipedia.org/wiki/Escala_temporal_geol%C3%B3gica). |
| Ejemplo | Paleógeno<br> Cretácico<br> Jurásico<br> Triásico<br> Pérmico |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="ageInDays">**ageInDays** (Edad en días)</a>

|    |    |
| ---|--- |
| Definición | Edad máxima del taxón expresada como número de días. |
| Ejemplo | 29000<br> 5 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="sizeInMillimeters">**sizeInMillimeters** (Tamaño en milímetros)</a>

|    |    |
| ---|--- |
| Definición | Tamaño máximo observado del taxón, dado en milímetros. Puede ser la altura, longitud o el ancho, la que sea mayor. |
| Ejemplo | 10<br> 1700 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="massInGrams">**massInGrams** (Masa en gramos)</a>

|    |    |
| ---|--- |
| Definición | Peso máximo observado del taxón, dado en gramos. |
| Ejemplo | 12<br> 3000 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="lifeForm">**lifeForm** (Forma de vida)</a>

|    |    |
| ---|--- |
| Definición | Un término describiendo la forma de vida o crecimiento de un taxón. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Epífita<br> Fanerófito<br> Criptófito |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="perfil_habitat">**habitat** (Hábitat)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|"), de los hábitats conocidos donde el taxón vive o vivió. |
| Ejemplo | Sabana de roble Estepa de la pre-cordillera<br> Bosque templado<br> Sabana seca<br> Cavernas y hábitats subterráneos |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="perfil_sex">**sex** (Sexo)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") , de los sexos conocidos para el taxón. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Hembra<br> Hermafrodita<br> Macho<br> Desconocido<br> Indeterminado<br> Ginandromorfo |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="perfil_source">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la cual se obtuvo la información del perfil del taxón. Puede ser una cita bibliográfica (se recomienda formato APA), una URL de página web, etc. |
| Ejemplo | Acosta-Galvis, A. R. (2000). Ranas, salamandras y caecilias (Tetrapoda: Amphibia) de Colombia. Biota colombiana, 1(3).<br> Agarwal S. K. 2018. Fundamentals of Ecology. APH Publishing, 813130342X, 9788131303429, 460 pages |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="perfil_datasetID">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro del perfil del taxón. |
| Ejemplo | 002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/ea8sek |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Tipos y Especímenes

|    |    |    |    |
| ---|--- |--- |--- |
| [**typeStatus**<br> (Estado del tipo)](#tipos_typeStatus) | [**typeDesignationType**<br> (Tipo de designación del tipo)](#typeDesignationType) | [**typeDesignatedBy**<br> (Tipo designado por)](#typeDesignatedBy) | [**scientificName**<br> (Nombre científico)](#tipos_scientificName) |
| [**taxonRank**<br> (Categoría del taxón)](#tipos_taxonRank) | [**bibliographicCitation**<br> (Citación bibliográfica)](#tipos_bibliographicCitation) | [**occurrenceID**<br> (ID del registro biológico)](#tipos_occurrenceID) | [**institutionCode**<br> (Código de la institución)](#tipos_institutionCode) |
| [**collectionCode**<br> (Código de la colección)](#tipos_collectionCode) | [**catalogNumber**<br> (Número de catálogo)](#tipos_catalogNumber) | [**locality**<br> (Localidad)](#tipos_locality) | [**sex**<br> (Sexo)](#tipos_sex) |
| [**recordedBy**<br> (Registrado por)](#tipos_recordedBy) | [**source**<br> (Fuente)](#tipos_source) | [**verbatimEventDate**<br> (Fecha original del evento)](#tipos_verbatimEventDate) | [**verbatimLabel**<br> (Etiqueta original)](#verbatimLabel) |
| [**verbatimLongitude**<br> (Longitud original)](#tipos_verbatimLongitude) | [**verbatimLatitude**<br> (Latitud original)](#tipos_verbatimLatitude) | [**datasetID**<br> (ID del conjunto de datos)](#tipos_datasetID) |  |
|    |    |    |    |

<br>
<br>

<a name="tipos_typeStatus">**typeStatus** (Estado del tipo)</a>

|    |    |
| ---|--- |
| Definición | El tipo nomenclatural del espécimen. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Alotipo<br> Holotipo<br> Alolectotipo |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="typeDesignationType">**typeDesignationType** (Tipo de designación del tipo)</a>

|    |    |
| ---|--- |
| Definición | La razón por la que el espécimen se designa como tipo nomenclatural. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Designación original<br> Monotipo<br> Designación presente |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="typeDesignatedBy">**typeDesignatedBy** (Tipo designado por)</a>

|    |    |
| ---|--- |
| Definición | La cita bibliográfica de la publicación donde se encuentra la designación de tipo nomenclatural. |
| Ejemplo | Sutherland CHN. 2009. Redescubrimiento del holotipo de Epidendrum × doroteae P.H. Allen (Orchidaceae). CEIBA, Vol. 50 Núm. 1 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_scientificName">**scientificName** (Nombre científico)</a>

|    |    |
| ---|--- |
| Definición | Para especímenes tipo nomenclatural, documentar el nombre científico originalmente utilizado en la etiqueta. No necesariamente es el mismo nombre reconocido actualmente. En el caso de especies o géneros tipo, debe ser la especie o el nombre del género que tipifique al taxón superior. |
| Ejemplo | Ctenomys sociabilis<br> Ctenomys |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_taxonRank">**taxonRank** (Categoría del taxón)</a>

|    |    |
| ---|--- |
| Definición | La categoría taxonómica del nombre más específico presente en el scientificName. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Reino<br> Subreino<br> Filo<br> División<br> Subfilo<br> Subdivisión<br> Clase<br> Subclase<br> Orden<br> Suborden<br> Familia<br> Subfamilia<br> Tribu<br> Subtribu<br> Género<br> Subgénero<br> Sección<br> Subsección<br> Serie<br> Subserie<br> Especie<br> Subespecie<br> Variedad<br> Subvariedad<br> Forma<br> Subforma |
| Elementos relacionados | scientificName |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_bibliographicCitation">**bibliographicCitation** (Citación bibliográfica)</a>

|    |    |
| ---|--- |
| Definición | Citación del espécimen descrito. |
| Ejemplo | Iraq: Mosul: Jabal Khantur prope Sharanish N. Zakho, in fissures rupium calc., 1200 m, Rech. 12083 (W!) |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_occurrenceID">**occurrenceID** (ID del registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único para el espécimen, preferiblemente un identificador único global que se pueda resolver.<br><br> En ausencia de un identificador único global persistente, se recomienda construir uno a partir de la combinación: [código corto de la institución]:[código de la colección]:[número de catálogo]. No debe contener espacios en blanco o caracteres especiales. |
| Ejemplo | UCO:RESCATE_FAUNA_MULATOSII:1<br> UNIVALLE:CRM-UV:1974-001-1 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_institutionCode">**institutionCode** (Código de la institución)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la institución que custodia el espécimen; seguido por su acrónimo en paréntesis, si tiene. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS)<br> Universidad de Antioquia (UdeA)<br> Jardín Botánico de Bogotá José Celestino Mutis (JBB)<br> Universidad de los Andes (UNIANDES) |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_collectionCode">**collectionCode** (Código de la colección)</a>

|    |    |
| ---|--- |
| Definición | El nombre, acrónimo, código alfanumérico, o iniciales que identifican la colección o conjunto de datos del que procede el organismo. Aunque es válido el uso del acrónimo que implemente la colección internamente se recomienda hacer uso del acrónimo registrado en:<br><br> - GBIF Registry of Scientific Collections [(https://www.gbif.org/grscicoll/collection/search)](https://www.gbif.org/grscicoll/collection/search)<br> - Registro Único Nacional de Colecciones Biológicas-RNC [(http://rnc.humboldt.org.co/admin/index.php/registros/colecciones)](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones). |
| Ejemplo | COL<br> ANDES<br> FMB |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_catalogNumber">**catalogNumber** (Número de catálogo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador (preferiblemente único) asignado al espécimen en la colección biológica. Puede repetirse en caso de que los especímenes están agrupados en la colección (Lote, Frasco, Caja, etc).<br><br> Debe documentarse de la misma forma que está en la etiqueta. |
| Ejemplo | 00001<br> 1974-001-1<br> 1732a<br> ANDES-E0813<br> Lepid0784 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_locality">**locality** (Localidad)</a>

|    |    |
| ---|--- |
| Definición | La ubicación donde se colectó el espécimen. En el caso de especímenes tipo, la localidad tipo. |
| Ejemplo | Ruta del Sol, kilómetro 25 entre Guaduas y La Dorada<br> Vereda Santa Ana<br> Quebrada Aguasclaras<br> Parque Nacional Natural Serranía de Chiribiquete |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_sex">**sex** (Sexo)</a>

|    |    |
| ---|--- |
| Definición | El sexo del espécimen. |
| Ejemplo | Hembra<br> Hermafrodita<br> Macho<br> Desconocido<br> Indeterminado<br> Ginandromorfo |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_recordedBy">**recordedBy** (Registrado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas responsables de la colecta u observación del espécimen.<br><br> El colector u observador principal, especialmente si está asociado al recordNumber tomado en campo, se debe listar en primer lugar. Se debe mantener el mismo formato del nombre a lo largo de todos los registros y se recomienda evitar el uso de solo iniciales ya que esto genera ambigüedades para reconocer a las personas que realizaron el registro, de ser posible siempre escriba nombres completos. Documente el nombre de las personas y evite documentar nombres de grupos u organizaciones. |
| Ejemplo | Eduardo Amat García<br> Javier Maldonado Ocampo<br> Mónica Andrea Sánchez Torres \| Esteban Andrés Novoa López |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_source">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la cual se obtuvo la información del espécimen. |
| Ejemplo | https://camjol.info/index.php/CEIBA/article/view/193 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_verbatimEventDate">**verbatimEventDate** (Fecha original del evento)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se colectó el espécimen. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="verbatimLabel">**verbatimLabel** (Etiqueta original)</a>

|    |    |
| ---|--- |
| Definición | El texto completo y literal de la etiqueta del espécimen. |
| Ejemplo | Herbario de la facultad de farmacia \| Universidad de Valencia \| Sideritis juryi \| Peris, Stubing & Figuerola sp.nov \| Valencia: Entre Lliria y Casinos, sobre colina calcaréas degradadas \| Leg.: Stubing & J.B. Peris, 25-V-1989 \| ISOTYPUS |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_verbatimLongitude">**verbatimLongitude** (Longitud original)</a>

|    |    |
| ---|--- |
| Definición | La longitud original donde se observó o colectó el espécimen. |
| Ejemplo | 75° 08' 36.83" W<br> 834549 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_verbatimLatitude">**verbatimLatitude** (Latitud original)</a>

|    |    |
| ---|--- |
| Definición | La latitud original donde se observó o colectó el espécimen. |
| Ejemplo | 41° 05' 56.03" S<br> 1631599 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="tipos_datasetID">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro del espécimen. |
| Ejemplo | I2D-BIO_2015_089<br>001_BIO-RRBB_SC_2019027<br> https://doi.org/10.15472/ympw2s  |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |


### Muestra del Material GGBN

|    |    |    |
| ---|--- |--- |
| [**materialSampleType**<br> (Tipo de muestra)](#materialSampleType) | [**concentration**<br> (Concentración)](#concentration) | [**concentrationUnit**<br> (Unidad de la concentración)](#concentrationUnit) | 
| [**methodDetermination<br>ConcentrationAndRatios**<br> (Método para determinación <br>de la concentración)](#methodDeterminationConcentrationAndRatios) | [**ratioOfAbsorbance260_230**<br> (Relación de absorbancia<br> 260/230)](#ratioOfAbsorbance260_230) | [**ratioOfAbsorbance260_280**<br> (Relación de absorbancia<br> 260/280)](#ratioOfAbsorbance260_280) |
| [**purificationMethod**<br> (Método de purificación)](#purificationMethod) | [**quality**<br> (Calidad)](#quality) | [**qualityCheckDate**<br> (Fecha de revisión de la calidad)](#qualityCheckDate) |
| [**qualityRemarks**<br> (Comentarios sobre la calidad)](#qualityRemarks) | [**volume**<br> (Volumen)](#volume) | [**volumeUnit**<br> (Unidad del volumen)](#volumeUnit) |
| [**weigh**<br> (Peso)](#weigh) | [**weighUnit**<br> (Unidad del peso)](#weighUnit) | [**methodDeterminationWeight**<br> (Método de determinación<br> del peso)](#methodDeterminationWeight) |
| [**samp_size**<br> (Tamaño de la muestra)](#samp_size) | [**DNAMeltingPoint**<br> (Temperatura de<br> denaturación del ADN)](#DNAMeltingPoint) | [**sieving**<br> (Tamizado)](#sieving) |
| [**DNADNAHybridization**<br> (Hibridación ADN-ADN)](#DNADNAHybridization) | [**estimated_size**<br> (Tamaño estimado)](#estimated_size) | [**pool_dna_extracts**<br> (Combinación de<br> extractos de ADN)](#pool_dna_extracts) | 
| [**sampleDesignation**<br> (Designación de la muestra)](#sampleDesignation) |  |  |
|    |    |    |

<br>
<br>

<a name="materialSampleType">**materialSampleType** (Tipo de muestra)</a>

|    |    |
| ---|--- |
| Definición | El tipo de muestra que representa el registro biológico. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Muestra ambiental<br> ADN<br> Tejido<br> Cepa cultivada<br> Cepa conservada <br> Clon |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="concentration">**concentration** (Concentración)</a>

|    |    |
| ---|--- |
| Definición | Recuento de la muestra (células totales, unidades formadoras de colonia, cantidad de biomasa o cantidad de ADN) por unidad de volumen. |
| Comentarios | Se recomienda expresar los valores en notación científica utilizando E como equivalente a x10^n. |
| Ejemplo | 0.81<br>6.74E8<br> >1E7<br> <1E2 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="concentrationUnit">**concentrationUnit** (Unidad de la concentración)</a>

|    |    |
| ---|--- |
| Definición | Unidad en la que fue medida la concentración. |
| Ejemplo | ng/uL<br> UFC/mL<br> propágulos/mL<br> μg/mL |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="methodDeterminationConcentrationAndRatios">**methodDeterminationConcentrationAndRatios** (Método para determinación de la concentración)</a>

|    |    |
| ---|--- |
| Definición | Descripción del método utilizado para medir la concentración. |
| Ejemplo | Espectrofotometría<br> Recuento en placa<br> Recuento en cámara de Neubauer<br> Cuantificación por Nanodrop |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="ratioOfAbsorbance260_230">**ratioOfAbsorbance260_230** (Relación de absorbancia 260/230)</a>

|    |    |
| ---|--- |
| Definición | Para ADN conservado: Relación de absorbancia a 260 nm y 230 nm para evaluar la pureza del ADN. |
| Ejemplo | 1.85<br> 1.5 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="ratioOfAbsorbance260_280">**ratioOfAbsorbance260_280** (Relación de absorbancia 260/280)</a>

|    |    |
| ---|--- |
| Definición | Para ADN conservado: Relación de absorbancia a 260 nm y 280 nm para evaluar la pureza del ADN. |
| Ejemplo | 1.85<br> 2.0 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="purificationMethod">**purificationMethod** (Método de purificación)</a>

|    |    |
| ---|--- |
| Definición | Para ADN conservado: Nombre del kit, institución o protocolo que realizó o se utilizó en la extracción del ADN. |
| Ejemplo | Extracción orgánica<br>  Fenol-Cloroformo, Purelink Genomic DNA extraction kit (Invitrogen)<br>  DNeasy Blood and Tissue Kit (Qiagen) |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="quality">**quality** (Calidad)</a>

|    |    |
| ---|--- |
| Definición | Calidad en la que se encuentra la muestra. |
| Ejemplo | Viable<br> Muerto o inviable<br> Contaminada<br> Pura<br> Degradado |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="qualityCheckDate">**qualityCheckDate** (Fecha de revisión de la calidad)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo más reciente en la que se revisó la calidad o viabilidad de la muestra. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="qualityRemarks">**qualityRemarks** (Comentarios sobre la calidad)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la calidad de la muestra. |
| Ejemplo | Se observó contaminación por un hongo<br> ADN degradado |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="volume">**volume** (Volumen)</a>

|    |    |
| ---|--- |
| Definición | Volumen de la muestra. |
| Ejemplo | 8<br> 10 |
| Elementos relacionados | volumeUnit |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="volumeUnit">**volumeUnit** (Unidad del volumen)</a>

|    |    |
| ---|--- |
| Definición | Unidad en la que fue medido el volumen. |
| Ejemplo | µL<br> ml |
| Elementos relacionados | volume |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="weigh">**weigh** (Peso)</a>

|    |    |
| ---|--- |
| Definición | Peso de la muestra. |
| Ejemplo | 1<br> 0.2 |
| Elementos relacionados | weighUnit |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="weighUnit">**weighUnit** (Peso)</a>

|    |    |
| ---|--- |
| Definición | Unidad en la que fue medido el peso. |
| Ejemplo | g<br> µg<br> g/mol |
| Elementos relacionados | weigh |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="methodDeterminationWeight">**methodDeterminationWeight** (Método de determinación del peso)</a>

|    |    |
| ---|--- |
| Definición | Método que se usó para determinar el peso de la muestra. |
| Ejemplo | Gel de agarosa<br> Pesa |
| Elementos relacionados | weigh |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="samp_size">**samp_size** (Tamaño de la muestra)</a>

|    |    |
| ---|--- |
| Definición | Cantidad de la muestra colectada. |
| Ejemplo | 20g de suelo<br> 1g de tejido |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="DNAMeltingPoint">**DNAMeltingPoint** (Temperatura de denaturación del ADN)</a>

|    |    |
| ---|--- |
| Definición | Para ADN conservado: Resultado del análisis de la curva de denaturación. Los valores deben estar en °C y 3 cifras decimales. |
| Ejemplo | 85.347<br> 94.000 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="sieving">**sieving** (Tamizado)</a>

|    |    |
| ---|--- |
| Definición | Diseño de la selección de muestras agrupadas y / o tamaño del tamiz y cantidad de muestra tamizada. |
| Ejemplo | Tamaño del tamiz: 20 µm<br> Cantidad de muestra tamizada: 2 g |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="DNADNAHybridization">**DNADNAHybridization** (Hibridación ADN-ADN)</a>

|    |    |
| ---|--- |
| Definición | Resultado de la hibridación ADN-ADN. |
| Ejemplo | 70%<br> 85% |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="estimated_size">**estimated_size** (Tamaño estimado)</a>

|    |    |
| ---|--- |
| Definición | El tamaño estimado del genoma antes de la secuenciación. |
| Ejemplo | 400 Mpb<br> 1000 pb<br> 50 Kpb |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="pool_dna_extracts">**pool_dna_extracts** (Combinación de extractos de ADN)</a>

|    |    |
| ---|--- |
| Definición | Cantidad de extracciones de ADN combinados (si es el caso). |
| Ejemplo | 15<br> 18 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="sampleDesignation">**sampleDesignation** (Designación de la muestra)</a>

|    |    |
| ---|--- |
| Definición | Números adicionales de laboratorio o proyecto utilizados para identificar la muestra de ADN o tejido. |
| Ejemplo | ADN_bac_cep04<br> TEJ_fung_muestra01 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |


### Preservación GGBN

|    |    |    |
| ---|--- |--- |
| [**preservationType**<br> (Tipo de preservación)](#preservationType) | [**preservationTemperature**<br> (Temperatura de preservación)](#preservationTemperature) | [**preservationDateBegin**<br> (Fecha inicial de preservación)](#preservationDateBegin) | 
| [**sequence**<br> (Secuencia)](#sequence) |  |  |
|    |    |    |

<br>
<br>

<a name="preservationType">**preservationType** (Tipo de preservación)</a>

|    |    |
| ---|--- |
| Definición | Método utilizado para la preservación de la muestra. |
| Ejemplo | Crioconservación (Medio BHI + Glicerol 20%)<br> Liofilización<br> Papel |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="preservationTemperature">**preservationTemperature** (Temperatura de preservación)</a>

|    |    |
| ---|--- |
| Definición | Temperatura en la que está preservada la muestra. |
| Ejemplo | -196°C |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="preservationDateBegin">**preservationDateBegin** (Fecha inicial de preservación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que inicia la preservación de la muestra. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="sequence">**sequence** (Secuencia)</a>

|    |    |
| ---|--- |
| Definición | Descripción de la secuencia (orden) de diferentes observaciones realizadas a la muestra. Por ejemplo como se muestra a continuación:<br><br> 1 (= Más antigua)<br> 4 (= Más reciente) |
| Ejemplo | 1<br> 4 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Permiso GGBN

|    |    |    |
| ---|--- |--- |
| [**permitType**<br> (Tipo de permiso)](#permitType) | [**permitStatus**<br> (Estado del permiso)](#permitStatus) | [**permitStatusQualifier**<br> (Calificador del estado del permiso)](#permitStatusQualifier) |
| [**permitURI**<br> (Identificador del permiso)](#permitURI) | [**permitText**<br> (Texto del permiso)](#permitText) |  |
|    |    |    |

<br>
<br>

<a name="permitType">**permitType** (Tipo de permiso)</a>

|    |    |
| ---|--- |
| Definición | El tipo del permiso (documento que le permite a alguien tomar una acción que de otra manera no estaría permitida). Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Permiso de acceso a recursos genéticos<br> Permiso para la recolección de especímenes de especies silvestres<br> Permiso de colecta<br> Permiso de importación<br> Permiso de exportación<br> Derechos de propiedad intelectual<br> Derechos de autor<br> Patente<br> Fitosanitario<br> Acuerdo de transferencia de material<br> Contrato<br> Memorando de entendimiento<br> Organismo modificado genéticamente |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="permitStatus">**permitStatus** (Estado del permiso)</a>

|    |    |
| ---|--- |
| Definición | La información sobre la presencia, ausencia u otro estado básico de los permisos asociados a la(s) muestra(s). Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Permiso disponible<br> Permiso no requerido<br> Permiso no disponible<br> Desconocido |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="permitStatusQualifier">**permitStatusQualifier** (Calificador del estado del permiso)</a>

|    |    |
| ---|--- |
| Definición | La descripción de por qué no se requirió cierto permiso o por qué se desconoce el estado del permiso. |
| Ejemplo | Ningún requisito nacional para un permiso en la fecha de acceso<br> Recolectado en tierras privadas<br> Pre-Nagoya |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="permitURI">**permitURI** (Identificador del permiso)</a>

|    |    |
| ---|--- |
| Definición | Un enlace a la referencia del permiso con la información de recolección o envío. |
| Ejemplo | https://corponor.gov.co/ACTOSJURIDICOS/RESOLUCIONES/2015/ene0200.pdf |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="permitText">**permitText** (Texto del permiso)</a>

|    |    |
| ---|--- |
| Definición | El texto del permiso con la información de recolección, envío y/o más detalles. |
| Ejemplo | Permiso de recolección otorgado por la Autoridad Nacional de Licencias Ambientales mediante resolución 1271 del 23 de octubre de 2014 para la recolección es especímenes de especies silvestres de la biodiversidad biológica con fines de investigación científica no comerciales. Vigencia de 10 años |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Preparación GGBN

|    |    |    |
| ---|--- |--- |
| [**preparationType**<br> (Tipo de preparación)](#preparationType) | [**preparationProcess**<br> (Proceso de la preparación)](#preparationProcess) | [**preparationMaterials**<br> (Materiales de la preparación)](#preparationMaterials) |
| [**preparedBy**<br> (Preparado por)](#preparedBy) | [**preparationDate**<br> (Fecha de la preparación)](#preparationDate) |  |
|    |    |    |

<br>
<br>

<a name="preparationType">**preparationType** (Tipo de preparación)</a>

|    |    |
| ---|--- |
| Definición | La descripción del tipo de preparación (muestras, tejidos, ADN). |
| Ejemplo | Hoja<br> Músculo<br> Sangre<br> gDNA |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="preparationProcess">**preparationProcess** (Proceso de la preparación)</a>

|    |    |
| ---|--- |
| Definición | El proceso utilizado para preparar el espécimen o la muestra. También se puede utilizar para describir la propagación de fagos o plásmidos, o el proceso utilizado para extraer el ADN o ARN. |
| Ejemplo | Prensado y secado<br> En alcohol<br> Homogeneización química del tejido |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="preparationMaterials">**preparationMaterials** (Materiales de la preparación)</a>

|    |    |
| ---|--- |
| Definición | Los materiales y/o productos químicos utilizados en la preparación de la muestra, tejido, muestra de ADN o ARN. |
| Ejemplo | Prensa botánica, cartón corrugado, papel periódico, horno, tijeras, lápiz<br> Kit de Macherey-Nagel<br> Kit sangre y tejido DNeasy |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="preparedBy">**preparedBy** (Preparado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas que prepararon el espécimen o la muestra. |
| Ejemplo | Daniel Enrique Muñoz Silva<br> Ana María Sánchez Ortíz \| Juliana Novoa Gracia |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="preparationDate">**preparationDate** (Fecha de la preparación)</a>

|    |    |
| ---|--- |
| Definición | ULa fecha o el intervalo durante la cual se realizó la preparación del espécimen o la muestra. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br>2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Amplificación GGBN

|    |    |    |
| ---|--- |--- |
| [**amplificationDate**<br> (Fecha de la amplificación)](#amplificationDate) | [**amplificationStaff**<br> (Amplificado por)](#amplificationStaff) | [**amplificationSuccess**<br> (Éxito de la amplificación)](#amplificationSuccess) |
| [**amplificationSuccessDetails**<br> (Detalle del éxito de la amplificación)](#amplificationSuccessDetails) | [**amplificationMethod**<br> (Método de la amplificación)](#amplificationMethod) | [**primerSequenceForward**<br> (Cebador directo)](#primerSequenceForward) |
| [**primerNameForward**<br> (Nombre del cebador directo)](#primerNameForward) | [**primerReferenceCitationForward**<br> (Citación del cebador directo)](#primerReferenceCitationForward) | [**primerReferenceLinkForward**<br> (URL del cebador directo)](#primerReferenceLinkForward) |
| [**primerSequenceReverse**<br> (Cebador inverso)](#primerSequenceReverse) | [**primerNameReverse**<br> (Nombre del cebador inverso)](#primerNameReverse) | [**primerReferenceCitationReverse**<br> (Citación del cebador inverso)](#primerReferenceCitationReverse) |
| [**primerReferenceLinkReverse**<br> (URL del cebador inverso)](#primerReferenceLinkReverse) | [**purificationMethod**<br> (Método de purificación)](#purificationMethod) | [**consensusSequence**<br> (Secuencia consenso)](#consensusSequence) |
| [**consensusSequenceLength**<br> (Longitud de la secuencia consenso)](#consensusSequenceLength) | [**consensusSequence<br>ChromatogramFileURI**<br> (Identificador del archivo del<br> cromatograma de la secuencia consenso)](#consensusSequenceChromatogramFileURI) | [**barcodeSequence**<br> (Secuencia código de barras)](#barcodeSequence) |
| [**haplotype**<br> (Haplotipo)](#haplotype) | [**marker**<br> (Marcador)](#marker) | [**markerSubfragment**<br> (Subfragmento del marcador)](#markerSubfragment) |
| [**geneticAccessionNumber**<br> (Número de accesión genético)](#geneticAccessionNumber) | [**BOLDProcessID**<br> (ID del proceso de BOLD)](#BOLDProcessID) | [**geneticAccessionURI**<br> (Identificador de accesión genético)](#geneticAccessionURI) |
| [**GC-content**<br> (Contenido GC)](#GC-content) | [**chimera_check**<br> (Verificación de secuencia quimérica)](#chimera_check) | [**assembly**<br> (Ensamblaje)](#assembly) |
| [**sop**<br> (Compensación](#sop) | [**finishing_strategy**<br> (Estrategia de finalización)](#finishing_strategy) | [**annot_source**<br> (Fuente de la anotación)](#annot_source) |
| [**markerAccordance**<br> (Marcador acordado)](#markerAccordance) | [**seq_quality_check**<br> (Verificación de la calidad de la secuencia)](#seq_quality_check) | [**adapters**<br> (Adaptadores)](#adapters) |
| [**mid**<br> (Identificadores multiplex)](#mid) |  |  |
|    |    |    |

<br>
<br>

<a name="amplificationDate">**amplificationDate** (Fecha de la amplificación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo durante la cual se realizó la amplificación. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br>2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="amplificationStaff">**amplificationStaff** (Amplificado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas encargadas de realizar la amplificación. |
| Ejemplo | Daniel Enrique Muñoz Silva<br> Ana María Sánchez Ortíz \| Juliana Novoa Gracia |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="amplificationSuccess">**amplificationSuccess** (Éxito de la amplificación)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si el proceso de la amplificación resultó exitoso, o no. Altamente recomendado para documentar amplificaciones fallidas. |
| Ejemplo | Verdadero<br> Falso<br> Sí<br> No |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="amplificationSuccessDetails">**amplificationSuccessDetails** (Detalle del éxito de la amplificación)</a>

|    |    |
| ---|--- |
| Definición | Texto que describe el éxito o fallido del proceso de amplificación. |
| Ejemplo | ADN degradado<br> Contaminación |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="amplificationMethod">**amplificationMethod** (Método de la amplificación)</a>

|    |    |
| ---|--- |
| Definición | El método implementado para el proceso de amplificación. |
| Ejemplo | Reacción en cadena de la polimerasa (PCR) |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="primerSequenceForward">**primerSequenceForward** (Cebador directo)</a>

|    |    |
| ---|--- |
| Definición | La secuencia del cebador directo utilizado para el proceso de amplificación. |
| Ejemplo | 5′-GGCGGTACCCAAATTCCTGTGAATTAGC-3<br> 5′-CAATGTGGATCAGGATCAACC-3′ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="primerNameForward">**primerNameForward** (Nombre del cebador directo)</a>

|    |    |
| ---|--- |
| Definición | El nombre del cebador directo utilizado para el proceso de amplificación. |
| Ejemplo | Csp5K<br> Imd5<br> Gfp5 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="primerReferenceCitationForward">**primerReferenceCitationForward** (Citación del cebador directo)</a>

|    |    |
| ---|--- |
| Definición | Citación bibliográfica completa en formato de texto plano, donde se referencia el cebador directo utilizado para el proceso de amplificación. |
| Ejemplo | Fujikawa T & Iwanami T. 2012. Sensitive and robust detection of citrus greening (huanglongbing) bacterium “Candidatus Liberibacter asiaticus” by DNA amplification with new 16S rDNA-specific primers. Molecular and Cellular Probes, Volume 26, Issue 5, pages 194-197 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="primerReferenceLinkForward">**primerReferenceLinkForward** (URL del cebador directo)</a>

|    |    |
| ---|--- |
| Definición | Un enlace a la referencia, puede ser un DOI, ISBN, URI, donde fue descrito por primera vez el cebador directo utilizado para el proceso de amplificación. |
| Ejemplo | https://www.sciencedirect.com/science/article/abs/pii/S0890850812000710 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="primerSequenceReverse">**primerSequenceReverse** (Cebador inverso)</a>

|    |    |
| ---|--- |
| Definición | La secuencia del cebador inverso utilizado para el proceso de amplificación. |
| Ejemplo | 5′-GCCGGATCCCTGAGGGCGGGAACCCCGA-3<br> 5′-GCCGGATCCTGCAGTTATTTGTATAGTTCATC-3′ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="primerNameReverse">**primerNameReverse** (Nombre del cebador inverso)</a>

|    |    |
| ---|--- |
| Definición | El nombre del cebador inverso utilizado para el proceso de amplificación. |
| Ejemplo | Csp-Imd<br> Imd3<br> Gfp3 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="primerReferenceCitationReverse">**primerReferenceCitationReverse** (Citación del cebador inverso)</a>

|    |    |
| ---|--- |
| Definición | Citación bibliográfica completa en formato de texto plano, donde se referencia el cebador inverso utilizado para el proceso de amplificación. |
| Ejemplo | Fujikawa T & Iwanami T. 2012. Sensitive and robust detection of citrus greening (huanglongbing) bacterium “Candidatus Liberibacter asiaticus” by DNA amplification with new 16S rDNA-specific primers. Molecular and Cellular Probes, Volume 26, Issue 5, pages 194-197 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="primerReferenceLinkReverse">**primerReferenceLinkReverse** (URL del cebador inverso)</a>

|    |    |
| ---|--- |
| Definición | Un enlace a la referencia, puede ser un DOI, ISBN, URI, donde fue descrito por primera vez el cebador inverso utilizado para el proceso de amplificación. |
| Ejemplo | https://www.sciencedirect.com/science/article/abs/pii/S0890850812000710 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="purificationMethod">**purificationMethod** (Método de purificación)</a>

|    |    |
| ---|--- |
| Definición | El método o protocolo utilizado para purificar el producto de PCR. |
| Ejemplo | Qiagen<br> Germantown<br> ExoSAP-IT |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="consensusSequence">**consensusSequence** (Secuencia consenso)</a>

|    |    |
| ---|--- |
| Definición | Secuencia consenso derivada de todas las secuencias individuales. |
| Ejemplo | ATGAACCATATACCTGTGCAATATTTTAACTTAGCAAAGGAAAGTTATTTT<br> AAGTATGGATTATCGGTAATCCAGCTTATNCAGATTGGTAAGTTCTAT<br> GAACTTTGGCATGAGCCTGATACTCCTAGTGTACAACAAGTATACTC<br> ACAAGCCGAGTTATTAGTTGGGCCATCCATGCGAAGTAGGCCTTTGG<br> AGGTGACGCCCCCCATAGAACAAATTGCCTCGTTACTTGATATGAGA<br>ATAATATCGCCCGGCAAAAGATCCTTNCTTCAAATGGGGTTTCCAA<br> TTTATTCCCTTACTACTCATCTAAGTACTTTGTTGGATAAAGGTT |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="consensusSequenceLength">**consensusSequenceLength** (Longitud de la secuencia consenso)</a>

|    |    |
| ---|--- |
| Definición | Longitud de la secuencia consenso dado en número de pares de bases. |
| Ejemplo | 697<br> 849 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="consensusSequenceChromatogramFileURI">**consensusSequenceChromatogramFileURI** (Identificador del archivo del cromatograma de la secuencia consenso)</a>

|    |    |
| ---|--- |
| Definición | Un enlace al cromatograma de la secuencia consenso. |
| Ejemplo | https://www.boldsystems.org/index.php/Public_RecordView?processid=ABBAC141-12 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="barcodeSequence">**barcodeSequence** (Secuencia código de barras)</a>

|    |    |
| ---|--- |
| Definición | Secuencia de código de barras de ADN (parte o el 100% de la secuencia consenso). |
| Ejemplo | GTTAATGCTGCTATTATGTTTATATCGTTGGGATTAGACTATATAGGCTT<br>AATATTTATAATTGTCTATGTGGGGGCTATCGCGATTTTATTCCTGTT<br> CGTAATTATGTTAATTCAACAGCCTAATAAGGTAGATTCTCAAGATCAC<br> TCGCATTTTTTACCTGTAGGATTATCTGTTATATTTTTATTTTATAGTC<br> TACTAACCAATAGCCCCAAATATATCAGCAATCCTGTTATAGGATCTAG<br> AACTAACATTGGGGCAATTGGAAGTCATCTTTATACAACTTATTATGAA<br> TTAGTGTTAATTGCTAGTTTGGTGCTACTAGTCGCTATGATAGGGGCGA<br> TATTATTAGCTAAGCAGCCAAATTCACCTTTTTTATATA |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="haplotype">**haplotype** (Haplotipo)</a>

|    |    |
| ---|--- |
| Definición | El nombre del haplotipo (si aplica). |
| Ejemplo | TA + CA |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="marker">**marker** (Marcador)</a>

|    |    |
| ---|--- |
| Definición | El marcador genético o fragmento de ADN amplificado por PCR. |
| Ejemplo | COI<br> rbcL<br> 16S<br> ITS2 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="markerSubfragment">**markerSubfragment** (Subfragmento del marcador)</a>

|    |    |
| ---|--- |
| Definición | El nombre del subfragmento de un gen o locus. |
| Ejemplo | V6 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="geneticAccessionNumber">**geneticAccessionNumber** (Número de accesión genético)</a>

|    |    |
| ---|--- |
| Definición | El identificador único bajo el cual se deposita la secuencia de ADN en una base de datos pública (número de acceso GenBank / EMBL / DDBJ / Bold Systems). |
| Ejemplo | AJ675356<br> ABBAC141-12 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="BOLDProcessID">**BOLDProcessID** (ID del proceso de BOLD)</a>

|    |    |
| ---|--- |
| Definición | El identificador único del proceso (Process ID) con el que se deposita la secuencia de ADN en la base de datos BOLD (https://www.boldsystems.org/). |
| Ejemplo | CCOIV001-19 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="geneticAccessionURI">**geneticAccessionURI** (Identificador de accesión genético)</a>

|    |    |
| ---|--- |
| Definición | Un enlace del registro relacionado en una base de datos pública (registro GenBank / DDBJ / EMBL / Bold Systems). |
| Ejemplo | https://www.ncbi.nlm.nih.gov/nuccore/AY126426<br> https://www.boldsystems.org/index.php/Public_RecordView?processid=ABBAC141-12 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="GC-content">**GC-content** (Contenido GC)</a>

|    |    |
| ---|--- |
| Definición | Contenido de guanina-citosina dado en mol %. |
| Ejemplo | 35<br> 60 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="chimera_check">**chimera_check** (Verificación de secuencia quimérica)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si hay una secuencia quimérica. Una secuencia quimérica es una secuencia compuesta por dos o más secuencias parentales filogenéticamente distintas. Las quimeras son generalmente artefactos de PCR que se cree que ocurren cuando un amplicón terminado prematuramente se vuelve a sellar en una cadena de ADN extraño y se copia hasta su finalización en los siguientes ciclos de PCR. El punto en el que la secuencia quimérica cambia de un padre al siguiente se llama punto de ruptura o punto de conversión. |
| Ejemplo | Verdadero<br> Falso<br> Sí<br> No |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="assembly">**assembly** (Ensamblaje)</a>

|    |    |
| ---|--- |
| Definición | Descripción o método en cómo se realizó el ensamblaje (por ejemplo, con un ensamblador basado en texto como phrap o un ensamblador de diagrama de flujo, etc.). |
| Ejemplo | phrap |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="sop">**sop** (Compensación)</a>

|    |    |
| ---|--- |
| Definición | Procedimientos operativos estándar relevantes. |
| Ejemplo |  |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="finishing_strategy">**finishing_strategy** (Estrategia de finalización)</a>

|    |    |
| ---|--- |
| Definición | Descripción para definir si el proyecto del genoma tenía la intención de producir un genoma completo o en borrador, el pliegue de cobertura de la secuenciación expresada como 2x, 3x, 18x, etc., y cuántos cóntigos se produjeron para el genoma. |
| Ejemplo | Genoma completo, 2x, 3 cóntigos |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="annot_source">**annot_source** (Fuente de la anotación)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la anotación para los casos en que fue proporcionada por un jamboree comunitario o una base de datos de organismos modelo, en lugar de un remitente específico. |
| Ejemplo |  |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="markerAccordance">**markerAccordance** (Marcador acordado)</a>

|    |    |
| ---|--- |
| Definición | El resultado de la comparación de dos marcadores de dos especímenes o cepas. Se debe proporcionar el nombre o el identificador (NCBI) de los especímenes o cepas comparadas y el porcentaje de identidad relativo. |
| Ejemplo |  |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="seq_quality_check">**seq_quality_check** (Verificación de la calidad de la secuencia)</a>

|    |    |
| ---|--- |
| Definición | Elemento para indicar si la secuencia ha sido nombrada por sistemas automáticos (= Ninguno) o si se ha sometido a un procedimiento de edición manual (por ejemplo, inspeccionando los datos crudos o los cromatogramas). Se aplica solo para secuencias que no se envían a SRA o DRA. |
| Ejemplo | Ninguno<br> Editado manualmente |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="adapters">**adapters** (Adaptadores)</a>

|    |    |
| ---|--- |
| Definición | Nombre de los adaptadores. Los adaptadores proporcionan secuencias cebador tanto para la amplificación como para la secuenciación de los fragmentos de la librería de muestras. Se deben informar ambos adaptadores; en letras mayúsculas. |
| Ejemplo | EcoRI-adapterI, EcoRI-adapterIIo<br> Msel forward adapter, Msel reverse adapter |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="mid">**mid** (Identificadores multiplex)</a>

|    |    |
| ---|--- |
| Definición | Códigos de barras moleculares, denominados Identificadores Multiplex (MIDs), que se utilizan específicamente para etiquetar muestras únicas en un ciclo de secuenciación. La secuencia se debe informar en letras mayúsculas. |
| Ejemplo | MID1 5′-ACGAGTGCGT-3′ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Préstamo GGBN

|    |    |    |    |
| ---|--- |--- |--- |
| [**blocked**<br> (Bloqueado)](#blocked) | [**blockedUntil**<br> (Bloqueado hasta)](#blockedUntil) | [**loanConditions**<br> (Condiciones del préstamo)](#loanConditions) | [**loanDate**<br> (Fecha del préstamo)](#loanDate) |
| [**loanDestination**<br> (Destino del préstamo)](#loanDestination) | [**loanIdentifier**<br> (Identificador del préstamo)](#loanIdentifier) | [**disposition**<br> (Disposición)](#disposition) | [**receivedFrom**<br> (Recibido de)](#receivedFrom) |
|    |    |    |    |

<br>
<br>

<a name="blocked">**blocked** (Bloqueado)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si una muestra o espécimen se puede, o no se puede, prestar. |
| Ejemplo | Si<br> No |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="blockedUntil">**blockedUntil** (Bloqueado hasta)</a>

|    |    |
| ---|--- |
| Definición | La fecha a partir de la cual se puede prestar la muestra o espécimen. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="loanConditions">**loanConditions** (Condiciones del préstamo)</a>

|    |    |
| ---|--- |
| Definición | Condiciones bajo las cuales se puede prestar la muestra o espécimen. |
| Ejemplo | Únicamente para instituciones no comerciales<br> Únicamente con permiso del proveedor del material |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="loanDate">**loanDate** (Fecha del préstamo)</a>

|    |    |
| ---|--- |
| Definición | La fecha en la que fue prestada la muestra o espécimen. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="loanDestination">**loanDestination** (Destino del préstamo)</a>

|    |    |
| ---|--- |
| Definición | El nombre de la persona y/o organización a la que se le prestó la muestra o espécimen. |
| Ejemplo | Pontificia Universidad Javeriana, Carlos Alberto Prieto López |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="loanIdentifier">**loanIdentifier** (Identificador del préstamo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador asociado al préstamo realizado. |
| Ejemplo | PRT020 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="disposition">**disposition** (Disposición)</a>

|    |    |
| ---|--- |
| Definición | El estado actual de un espécimen o muestra con respecto a la colección identificada en collectionCode o collectionID. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | En colección<br> Perdido<br> Voucher en otra parte<br> Duplicado en otra parte<br> Consumido |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="receivedFrom">**receivedFrom** (Recibido de)</a>

|    |    |
| ---|--- |
| Definición | El nombre de la persona y/o organización de la que se recibió y autorizó el préstamo de la muestra o espécimen. |
| Ejemplo | Universidad de los Andes, María Isabel Cárdenas Contreras |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

## Vocabularios Controlados

|    |    |    |    |
| ---|--- |--- |--- |
| [**basisOfRecord**<br> (Base del registro)](#vc_basisOfRecord) | [**type**<br> (Tipo)](#vc_type) | [**language**<br> (Idioma)](#vc_language) | [**establishmentMeans**<br> (Medios de establecimiento)](#vc_establishmentMeans) |
| [**degreeOfEstablishment**<br> (Grado de establecimiento](#vc_degreeOfEstablishment) | [**pathway**<br> (Ruta de introducción)](#vc_pathway) | [**occurrenceStatus**<br> (Estado del registro biológico)](#vc_occurrenceStatus) | [**continent**<br> (Continente)](#vc_continent) |
| [**countryCode**<br> (Código del país)](#vc_countryCode) | [**threatStatus**<br> (Estado de amenaza)](#vc_threatStatus) | [**appendixCITES**<br> (Apéndice CITES)](#vc_appendixCITES) | [**type**<br> (Tipo)](#vc_multimedia_type) |
|    |    |    |    |

<br>
<br>

<a name="vc_basisOfRecord">**basisOfRecord** (Base del registro)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| PreservedSpecimen | El organismo está preservado (muerto), vivió dentro de tiempos históricos y existe (o alguna vez existió) una parte física que podría ser evaluada nuevamente.<br><br> Exclusivo para uso de las colecciones biológicas, las cuales custodian la evidencia física del espécimen preservado.<br><br> Siempre va acompañado del elemento type documentado como “Objeto físico”. |
| LivingSpecimen | Existe un espécimen vivo (crece o metaboliza) disponible en una colección.<br><br> Exclusivo para uso de las colecciones biológicas vivas y zoológicos, las cuales custodian la evidencia física del espécimen. No aplica para partes dormantes de un espécimen preservado.<br><br> Siempre va acompañado del elemento type documentado como “Objeto físico”. |
| HumanObservation | Se emplea para observaciones directas de un organismo completo y colectas temporales (captura y liberación del espécimen in situ).<br><br> También se emplea este valor si el espécimen observado fue posteriormente colectado y depositado en una colección biológica, pero el conjunto de datos no corresponde a la publicación de la colección biológica. En dicho caso se deben documentar los elementos collectionID y collectionCode para informar en qué colección se depositó el espécimen, y el Número de Catálogo (catalogNumber) dentro de la colección (o número de catálogo provisional), si este ya fue asignado.<br><br> Por lo general va acompañado del elemento type documentado como “Evento”; en caso de ser un registro sonoro detectado de forma directa por un humano, el elemento type se documenta como “Sonido”. |
| MachineObservation | Se emplea para cualquier tipo de observación indirecta de un organismo por medio de un equipo o medio digital (grabadora de sonido, cámara trampa, entre otros), donde la evidencia del registro puede ser evaluada nuevamente:<br><br> Según el caso, va acompañado del elemento type documentado como “Imagen estática”, “Imagen en movimiento” o “Sonido”. |
| MaterialSample | Se emplea cuando la evidencia del organismo es indirecta y corresponde solo a una parte de este, por ejemplo: sangre, tejido, pelo, heces, etc.<br><br> Siempre va acompañado del elemento type documentado como “Objeto físico”. |
| FossilSpecimen | Se emplea con organismos prehistóricos con evidencia fósil que soporta su existencia.<br><br> Siempre va acompañado del elemento type documentado como “Objeto físico”. |
|    |    |

<a name="vc_type">**type** (Tipo)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| Objeto físico | Evidencia física que soporta el registro biológico.<br> Siempre complementa la base del registro (basisOfRecord): PreservedSpecimen, LivingSpecimen, MaterialSample y FossilSpecimen |
| Imagen estática | Una fotografía.<br> Complementa la base del registro (basisOfRecord): MachineObservation |
| Imagen en movimiento | Un video, puede incluir sonido.<br> Complementa la base del registro (basisOfRecord): MachineObservation |
| Sonido | Registro de audio.<br> Puede complementar la base del registro (basisOfRecord): MachineObservation y HumanObservation |
| Evento | Observación de los especímenes en campo.<br> Siempre complementa la base del registro (basisOfRecord): HumanObservation |
|    |    |

<a name="vc_language">**language** (Idioma)</a>

|   |
| ---|
| Utilizar el vocabulario controlado para el idioma en la norma ISO 639-1. Solamente se usan 2 letras en minúscula, consulte la información en la página oficial de ISO [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php) |
|    |

<a name="vc_establishmentMeans">**establishmentMeans** (Medios de establecimiento)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| native | Nativo |
| nativeReintroduced | Nativo reintroducido |
| introduced | Introducido |
| introducedAssistedColonisation | Introducido con colonización asistida |
| vagrant | Errante |
| uncertain | Incierto |
|    |    |

<a name="vc_degreeOfEstablishment">**degreeOfEstablishment** (Grado de establecimiento)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| native | Nativo |
| captive | Cautivo |
| cultivated | Cultivado |
| released | Liberado |
| failing | Fallido |
| casual | Casual |
| reproducing | Reproduciéndose |
| established | Establecido |
| colonising | Colonizando |
| invasive | Invasor |
| widespreadInvasive | Invasor ampliamente distribuido |
|    |    |

<a name="vc_pathway">**pathway** (Ruta de introducción)</a>
<br>
<br>
La lista completa de vocabularios controlados se encuentra disponible en [https://dwc.tdwg.org/pw/#4-vocabulary](https://dwc.tdwg.org/pw/#4-vocabulary). Utilice la palabra en la columna llamada controlled value. Se presentan los vocabularios más comunes a continuación:

|  Vocabulario |  Definición  |
| ---|--- |
| releasedForUse | Liberado |
| otherEscape | Escape accidental |
| transportContaminant | Contaminación en transporte |
| transportStowaway | Polizón en transporte |
| corridor | Corredor |
| unaided | Sin ayuda |
|    |    |

<a name="vc_occurrenceStatus">**occurrenceStatus** (Estado del registro biológico)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| Presente | Existe al menos un registro bien documentado de la presencia del taxón en el área. |
| Ausente | Existe evidencia para documentar la ausencia del taxón en el área. |
| present | Presente. Es obligatorio el uso del vocabulario en ingles para los registros marino-costeros. |
| absent | Ausente. Es obligatorio el uso del vocabulario en ingles para los registros marino-costeros. |
|    |    |

<a name="vc_continent">**continent** (Continente)</a>

|  Vocabulario |
| ---|
| América del Sur |
| América del Norte |
| Europa |
| África |
| Asia |
| Oceanía |
| Antártida |
|    |

<a name="vc_countryCode">**countryCode** (Código del país)</a>

|    |
| ---|--- |
| Utilizar el vocabulario controlado de la norma ISO 3166-1-alfa-2 de códigos de países. Solamente se usan 2 letras en mayúscula, consulte la información en la página [https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO](https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO) |
|    |

<a name="vc_threatStatus">**threatStatus** (Estado de amenaza)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| EX | Especies extintas |
| EW | Especies extintas en vida silvestre |
| RE | Especies extintas regionalmente |
| CR | Especies en peligro crítico |
| EN | Especies en peligro |
| VU | Especies en estado vulnerable |
| NT | Especies casi amenazadas |
| LC | Especies en estado de amenaza de menor preocupación |
| DD | Especies con datos deficientes del estado de amenaza |
| NA | Especies que no aplica el estado de amenaza |
| NE | Especies no evaluadas en términos de estado de amenaza |
|    |    |

<a name="vc_appendixCITES">**appendixCITES** (Apéndice CITES)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| I | Apéndice I que incluye todas las especies en peligro de extinción que están o pueden verse afectadas por el comercio. |
| II | Apéndice II  que incluye las especies que aunque no están amenazadas pueden llegar a estarlo  de no reglamentar su comercio de manera estricta. |
| III | Apéndice III que incluye las especies que sujetas a regulación dentro de cualquier jurisdicción con el propósito de prevenir o restringir la explotación, y que necesitan la cooperación de otras Partes en el control del comercio. |
|    |    |

<a name="vc_multimedia_type">**type** (Tipo)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| Collection | Colección |
| Dataset | Conjunto de datos |
| Event | Evento |
| Image | Imagen |
| InteractiveResource | Recurso interactivo |
| Service | Servicio |
| Software | Programa |
| Sound | Sonido |
| Text | Texto |
| PhysicalObject  | Objeto físico |
| StillImage | Fotografía |
| MovingImage | Video |
|    |    |
