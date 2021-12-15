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
| [**basisOfRecord**<br> (Base del registro)](#elem001) | [**type**<br> (Tipo)](#elem002) | [**institutionCode**<br> (Código de la institución)](#elem003) | [**institutionID**<br> (ID de la institución)](#elem004) |
| [**collectionCode**<br> (Código de la colección)](#elem005) | [**collectionID**<br> (ID de la colección)](#elem006) | [**datasetName**<br> (Nombre del conjunto de datos)](#elem007) | [**datasetID**<br> (ID del conjunto de datos)](#elem008) |
| [**modified**<br> (Modificado)](#elem009) | [**language**<br> (Idioma)](#elem010) | [**license**<br> (Licencia)](#elem011) | [**rightsHolder**<br> (Titular de los derechos)](#elem012) | 
| [**accessRights**<br> (Derechos de acceso)](#elem013) | [**bibliographicCitation**<br> (Citación bibliográfica)](#elem014) | [**references**<br> (Referencias)](#elem015) | [**ownerInstitutionCode**<br> (Código de la institución propietaria)](#elem016) |
| [**informationWithheld**<br> (Información retenida)](#elem017) | [**dataGeneralizations**<br> (Generalización de los datos)](#elem018) | [**dynamicProperties**<br> (Propiedades dinámicas)](#elem019) | |

<br>
<br>

<a name="elem001">**basisOfRecord** (Base del registro)</a>

|    |    |
| ---|--- |
| Definición | Denota el origen o evidencia específica de la que se deriva el organismo. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| Comentarios | Sólo las colecciones biológicas pueden documentar PreservedSpecimen, si el registro corresponde a un espécimen depositado, pero el reporte no lo genera la colección biológica, se documenta HumanObservation y se documentan los elementos collectionCode, catalogNumber y disposition. |
| Elementos relacionados | type |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_ |
| [Vocabulario controlado](https://hp-colombian-biodiversity.gbif-staging.org/compartir/prueba_dwc#vocabularios-controlados) | PreservedSpecimen<br> HumanObservation<br> LivingSpecimen<br> FossilSpecimen<br> MachineObservation<br> MaterialSample<br> MaterialCitation |
|    |    |

<a name="elem002">**type (Tipo)**</a>

|    |    |
| ---|--- |
| Definición | Especifica el tipo de evidencia que da origen al registro, ampliando la información presente en el elemento basisOfRecord. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| Elementos relacionados | basisOfRecord |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](https://hp-colombian-biodiversity.gbif-staging.org/compartir/prueba_dwc#vocabularios-controlados) | Stillmage<br> MovingImage<br> Sound<br> PhysicalObject<br> Event |
|    |    |

<a name="elem003">**institutionCode** (Código de la institución)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la institución que custodia el espécimen o la información del registro; seguido por su acrónimo en paréntesis, si tiene. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS)<br> Universidad de Antioquia (UdeA)<br> Jardín Botanico de Bogotá José Celestino Mutis (JBB) |
| Elementos relacionados | institutionID |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem004">**institutionID** (ID de la institución)</a>

|    |    |
| ---|--- |
| Definición | Un identificador, preferiblemente el NIT, de la institución registrada en el elemento institutionCode. |
| Ejemplo | 586.697.465-1<br> 890.105.528-3<br> 860.030.197-0 |
| Elementos relacionados | institutionCode |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem005">**collectionCode** (Código de la colección)</a>

|    |    |
| ---|--- |
| Definición | El nombre, acrónimo, código alfanumérico, o iniciales que identifican la colección o conjunto de datos del que procede el organismo. Si corresponde a una colección biológica registrada en el Registro Único Nacional de Colecciones Biológicas - RNC (http://rnc.humboldt.org.co/admin/index.php/registros/colecciones), se puede emplear el acrónimo allí registrado, aunque también es válido el uso del acrónimo que implemente la colección internamente. |
| Ejemplo | COL<br> ANDES-E<br> FMB |
| Elementos relacionados | collectionID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="elem006">**collectionID** (ID de la colección)</a>

|    |    |
| ---|--- |
| Definición | EUn identificador de la colección registrada en el elemento collectionCode. Si corresponde a una colección biológica registrada en el Registro Único Nacional de Colecciones Biológicas - RNC (http://rnc.humboldt.org.co/admin/index.php/registros/colecciones), se debe emplear el identificador allí registrado. En tal caso documentar: [RNC:]+[Número de la colección], sin espacios. |
| Ejemplo | RNC:001<br> RNC:010<br> RNC:250 |
| Elementos relacionados | collectionCode |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="elem007">**datasetName** (Nombre del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | El nombre del conjunto de datos del cual se deriva el registro biológico (observación, colecta o evento).<br><br> De acuerdo al origen del registro biológico, identifique a cuál de los siguientes casos corresponde y construya este identificador según las indicaciones del caso:<br><br> (i) El registro biológico proviene de una entidad vinculada y adscrita al Ministerio de Medio Ambiente y Desarrollo Sostenible que no requiere un permiso de recolección. Nombre del convenio o proyecto marco de acuerdo a lo documentado en el elemento datasetID<br><br> (ii) El registro biológico proviene de un proyecto amparado por un permiso de recolección de especímenes o acceso a recursos genéticos de acuerdo a lo establecido en el Decreto 1076 de 2015. Nombre del titular del permiso<br><br> (iii) El registro biológico proviene de un espécimen depositado en una colección biológica por solicitud expresa de una autoridad ambiental o gubernamental mediante un acto legal. Por ejemplo, en los casos de incautación de fauna y flora silvestre por tráfico de especies. Se documentan las palabras ‘Acto Legal’<br><br> (iv) El registro biológico proviene de un espécimen preservado en una colección biológica y legalizado a través de una amnistía. Se documentan la palabra ‘Amnistía’<br><br> (v) El registro biológico proviene de un espécimen obtenido por medio de una colecta fortuita, por ejemplo en los casos de pesca accidental, atropellamiento y choqué contra edificaciones, entre otros. Se documentan las palabras ‘Colecta Fortuita’ |
| Ejemplo | Colombia Bio<br> Fondo Adaptación<br> Boyacá Bio<br><br> Universidad de Caldas<br> Cenipalma<br> Pedro Pérez<br><br> Acto Legal<br><br> Amnistía<br><br> Colecta Fortuita |
| Elementos relacionados | datasetNameID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |

<a name="elem008">**datasetID** (ID del conjunto de datos)</a>


|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro biológico (observación, colecta o evento).<br><br> De acuerdo al origen del registro biológico, identifique a cuál de los siguientes casos corresponde y construya este identificador según las indicaciones del caso:<br><br> (i) El registro biológico proviene de una entidad vinculada y adscrita al Ministerio de Medio Ambiente y Desarrollo Sostenible que no requiere un permiso de recolección.<br> Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios:<br> - Acrónimo de la entidad<br> - Número del convenio, proyecto marco o programa<br> - Número del sub-proyecto, o sub-convenio, si existen<br> - Año de inicio del convenio o proyecto.<br><br> (ii) El registro biológico proviene de un proyecto amparado por un permiso de recolección de especímenes o acceso a recursos genéticos de acuerdo a lo establecido en el Decreto 1076 de 2015.<br> Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios:<br> - Acrónimo de la autoridad ambiental que otorgó el permiso<br> - Número de la resolución donde se otorga el permiso<br> - Año de expedición del permiso<br><br> (iii) El registro biológico proviene de un espécimen depositado en una colección biológica por solicitud expresa de una autoridad ambiental o gubernamental mediante un acto legal. Por ejemplo, en los casos de incautación de fauna y flora silvestre por tráfico de especies.<br> Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios:<br> -La palabra ‘ACTO_LEGAL’<br> -  Acrónimo de la autoridad ambiental o gubernamental que genera el acto legal<br> - Identificador del proceso, corresponde el número del acto legal emitido por la autoridad competente. Cuando la autoridad no genere un identificador del acto legal, corresponde al identificador del proceso asignado internamente por la colección<br> - Año de expedición del acto legal.<br><br> (iv) El registro biológico proviene de un espécimen preservado en una colección biológica y legalizado a través de una amnistía.<br> Formato: incluya los siguientes elementos separados por dos puntos (:) y sin espacios:<br> - La palabra ‘AMNISTÍA’<br> - Número de la resolución donde se otorga la amnistía<br> - Año de expedición de la amnistía |
| Ejemplo | IAvH:CE16-062:8956:2016<br> SINCHI:CE17-845:2017<br><br> ANLA:1608:2017<br>CORNARE:5D800FGH:2015<br><br> ACTO_LEGAL:CORMACARENA:34f-19:2017<br>ACTO_LEGAL:POLICIA_AMBIENTAL:PF-19075C:201<br><br> AMNISTÍA:8962:2019<br>AMNISTÍA:59VI-196:2018 |
| Elementos relacionados | datasetName |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem009">**modified** (Modificado)</a>

|    |    |
| ---|--- |
| Definición | La fecha más reciente en la que se haya modificado el registro. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/2010-01<br> 2009-02/10 <br>2009-02-12/2009-10-08<br> 2010-01-17/18 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem010">**language** (Idioma)</a>

|    |    |
| ---|--- |
| Definición | El idioma del conjunto de datos. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 639-1 de 2 letras en minúscula, como se muestra a continuación:<br><br> es (=Para español)<br> en (=Para inglés) |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_<br> Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](https://hp-colombian-biodiversity.gbif-staging.org/compartir/prueba_dwc#vocabularios-controlados) | Consultar en: http://www.loc.gov/standards/iso639-2/php/code_list.php |
|    |    |

<a name="elem011">**license** (Licencia)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos, licencias o permisos que establece el publicador sobre el uso del recurso. Se recomienda no documentar este elemento debido a que la licencia se especifica con mayor detalle en los metadatos que acompañan la publicación del conjunto de datos. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem012">**rightsHolder** (Titular de los derechos)</a>

|    |    |
| ---|--- |
| Definición | El nombre de persona u organización propietaria o administradora de los derechos sobre el recurso. |
| Ejemplo | Secretaria de Agricultura<br> Ministerio de Medio Ambiente<br> Secretaría Distrital de Ambiente |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem013">**accessRights** (Derechos de acceso)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos de acceso o restricciones basadas en políticas de privacidad, seguridad, u otras. |
| Ejemplo | Sólo para uso no comercial |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem014">**bibliographicCitation** (Citación bibliográfica)</a>

|    |    |
| ---|--- |
| Definición | Indica la manera de citar el registro cuando sea utilizado, incluyendo la referencia del recurso al que pertenece el registro. Se recomienda incluir el doi si se tiene junto con los detalles bibliográficos para identificar el recurso claramente. |
| Ejemplo | Raz L, Agudelo H (2019). Herbario Nacional Colombiano (COL). Versión 13.12. Universidad Nacional de Colombia. Occurrence dataset https://doi.org/10.15472/ea8sek. occurrenceID: 1a399be0-9ca9-4efe-84be-b8974a5548fc |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem015">**references** (Referencias)</a>

|    |    |
| ---|--- |
| Definición | Una URL a un recurso asociado, el cual es de alguna forma referenciado o citado por el registro descrito. |
| Ejemplo | http://arctos.database.museum/guid/MVZ:Mamm:165861<br> https://www.gbif.org/species/2474724 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem016">**ownerInstitutionCode** (Código de la institución propietaria)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo (o acrónimo) de la institución que tiene la propiedad del objeto o de la información consignada en el registro. Usar sólo si la organización propietaria de los datos es diferente a la organización publicadora consignada en el elemento institutionCode. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS)<br> Celsia S.A. E.S.P. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem017">**informationWithheld** (Información retenida)</a>

|    |    |
| ---|--- |
| Definición | Información adicional que existe sobre el registro, pero que no ha sido compartida en la publicación. |
| Ejemplo | La información de ubicación no es provista para especies amenazadas<br> La identidad de los colectores es retenida<br> Pregunte acerca de muestras de tejido |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem018">**dataGeneralizations** (Generalización de los datos)</a>

|    |    |
| ---|--- |
| Definición | Medidas adoptadas para que los datos compartidos sean menos específicos o completos. Sugiere que los datos con mayor detalle existen y pueden estar disponibles bajo petición. |
| Ejemplo | Coordenadas generalizadas a partir de las coordenadas originales del GPS a la celda más cercana de la grilla. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem019">**dynamicProperties** (Propiedades dinámicas)</a>

|    |    |
| ---|--- |
| Definición | Una lista de las medidas, hechos o características adicionales sobre el organismo. Su intención es proporcionar un mecanismo estructurado para la representación de los datos. Debe estar documentado en el esquema de codificación JSON {"Medida":"Valor"}. Por facilidad en la documentación se recomienda el uso de la extensión del estándar Darwin Core de Medidas y Hechos en lugar de este elemento. |
| Ejemplo | {"pesoEnGramos":"120", "evidenciaDeLaIdentificación": "secuencia de citocromo B"}<br> {"alturaEnMetros":"1.5", "distribuciónDelTaxón": "Amazonas, Colombia", "temperaturaDelAireEnCelsius": "22"}<br> {"naturalezaDelID":"identificación de experto"} |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

### Registro Biológico

|    |    |    |    |    |
| ---|--- |--- |--- |--- |
| [**occurrenceID**<br> (ID del Registro biológico)](#elem020) | [**catalogNumber**<br> (Número de catálogo)](#elem021) | [**recordNumber**<br> (Número del registro)](#elem022) | [**recordedBy**<br> (Registrado por)](#elem023) |
| [**recordedByID**<br> (ID del registrador)](#elem024) | [**individualCount**<br> (Número de individuos)](#elem025) | [**organismQuantity**<br> (Cantidad del organismo)](#elem026) | [**organismQuantityType**<br> (Tipo de cantidad del organismo)](#elem027) |
| [**sex**<br> (Sexo)](#elem028) | [**lifeStage**<br> (Etapa de desarrollo)](#elem029) | [**reproductiveCondition**<br> (Condición reproductiva)](#elem030) | [**behavior**<br> (Comportamiento)](#elem031) | 
| [**establishmentMeans**<br> (Medios de establecimiento)](#elem032) | [**degreeOfEstablishment**<br> (Grado de establecimiento)](#elem033) | [**pathway**<br> (Ruta de introducción)](#elem034) | [**occurrenceStatus**<br> (Estado del registro biológico)](#elem035) |
| [**preparations**<br> (Preparaciones)](#elem036) | [**disposition**<br> (Disposición)](#elem037) | [**otherCatalogNumbers**<br> (Otros números de catálogo)](#elem038) | [**associatedMedia**<br> (Medios asociados)](#elem039) |
| [**associatedOccurrences**<br> (Registros biológicos asociados)](#elem040) | [**associatedReferences**<br> (Referencias asociadas)](#elem041) | [**associatedSequences**<br> (Secuencias asociadas)](#elem042) | [**associatedTaxa**<br> (Taxones asociados)](#elem043) |
| [**occurrenceRemarks**<br> (Comentarios del registro biológico)](#elem044) |  |  |  |

<br>
<br>

<a name="elem020">**occurrenceID** (ID del Registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único del registro biológico (observación, ejemplar, fotografía, etc.).<br><br> En ausencia de un identificador único global persistente, se recomienda construir uno a partir de la combinación:<br><br> Cuando pertenece a una observación: [código corto de la institución]:[palabra(s) clave del recurso]:[número de campo/número consecutivo]<br> Cuando pertenece a una colección: [código corto de la institución]:[código de la colección]:[número de catálogo].<br> No debe contener espacios en blanco o caracteres especiales.<br><br> Si usted ya maneja en su conjunto de datos un identificador único por registros biológico, puede usarlo como identificador en el conjunto de datos. |
| Ejemplo | Promigas:Compensacion-SanJuan:Fauna-00001<br> UCO:RESCATE_FAUNA_MULATOSII:1<br> UNIVALLE:CRM-UV:1974-001-1 |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_ |
|    |    |

<a name="elem021">**catalogNumber** (Número de catálogo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador (preferiblemente único) asignado al espécimen, muestra o lote en la colección biológica. Puede repetirse en caso de que los especímenes están agrupados en la colección (Lote, Frasco, Caja, etc).<br><br> Debe documentarse de la misma forma que está en la etiqueta. |
| Ejemplo | 00001<br> 1974-001-1<br> 1732a<br> ANDES-E0813<br> Lepid0784 |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="elem022">**recordNumber** (Número del registro)</a>

|    |    |
| ---|--- |
| Definición | Un identificador dado al registro biológico en el momento en que fue registrado, sirve como un vínculo entre las anotaciones de campo y el registro biológico. No es el mismo catalogNumber, el cual es usualmente asignado una vez el espécimen ingresa a la colección. |
| Ejemplo | OPP 7107<br>  JARM-0008<br>  AFT 143 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_. |
|    |    |

<a name="elem023">**recordedBy** (Registrado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical " | ") de los nombres de las personas (observadores o recolectores) responsables de realizar el registro.<br><br> El colector u observador principal, especialmente si está asociado al recordNumber tomado en campo, se debe listar en primer lugar. Se debe mantener el mismo formato del nombre a lo largo de todos los registros y se recomienda evitar el uso de solo iniciales ya que esto genera ambigüedades para reconocer a las personas que realizaron el registro, de ser posible siempre escriba nombres completos. Documente el nombre de las personas y evite documentar nombres de grupos u organizaciones. |
| Ejemplo | Eduardo Amat García<br> Javier Maldonado Ocampo<br> Mónica Andrea Sánchez Torres | Esteban Andrés Novoa López |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |
|    |    |

<a name="elem024">**recordedByID** (ID del registrador)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical " | ") de los ID de las personas (observadores o recolectores), grupos u organizaciones responsables de realizar el registro. Estos identificadores deben corresponder al ORCID, Wikidata u algún otro identificador único controlado. El orden en este elemento no indica una prioridad en la citación ni ningún otro tipo de relación jerárquica. |
| Ejemplo | https://orcid.org/0000-0001-6215-3617 | https://orcid.org/0000-0003-1691-239X<br> https://www.wikidata.org/entity/Q28913658 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_. |
|    |    |

<a name="elem025">**individualCount** (Número de individuos)</a>

|    |    |
| ---|--- |
| Definición | Número de individuos presentes en el momento del registro biológico (observación, ejemplar, fotografía, etc.). Utilice este elemento si todos los conteos corresponden a individuos, de lo contrario utilice organismQuantity y organismQuanitityType. |
| Ejemplo | 1<br> 25<br> 282 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_. |
|    |    |

### Organismo

### Muestra del Material

### Evento

### Ubicación

### Contexto Geológico

### Identificación

### Taxón

<br>
<br>

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

