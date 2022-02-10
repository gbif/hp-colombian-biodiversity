---
layout: heroImage
title: Estándar Darwin Core
description: Conoce sus elementos, definiciones y extensiones
background:  https://live.staticflickr.com/6164/6170947918_dc421f3980_b.jpg
imageLicense: |
  Fotografía de: Luis Alejandro Bernal Romero vía [Flickr](https://flic.kr/p/apiHPL) 
height: 41vh
toc: true
---

## Categorías DwC

### Elementos de Registro

|    |    |    |    |
| ---|--- |--- |--- |
| [**basisOfRecord**<br> (Base del registro)](#elem001) | [**type**<br> (Tipo)](#elem002) | [**institutionCode**<br> (Código de la institución)](#elem003) | [**institutionID**<br> (ID de la institución)](#elem004) |
| [**collectionCode**<br> (Código de la colección)](#elem005) | [**collectionID**<br> (ID de la colección)](#elem006) | [**datasetName**<br> (Nombre del conjunto de datos)](#elem007) | [**datasetID**<br> (ID del conjunto de datos)](#elem008) |
| [**modified**<br> (Modificado)](#elem009) | [**language**<br> (Idioma)](#elem010) | [**license**<br> (Licencia)](#elem011) | [**rightsHolder**<br> (Titular de los derechos)](#elem012) | 
| [**accessRights**<br> (Derechos de acceso)](#elem013) | [**bibliographicCitation**<br> (Citación bibliográfica)](#elem014) | [**references**<br> (Referencias)](#elem015) | [**ownerInstitutionCode**<br> (Código de la institución propietaria)](#elem016) |
| [**informationWithheld**<br> (Información retenida)](#elem017) | [**dataGeneralizations**<br> (Generalización de los datos)](#elem018) | [**dynamicProperties**<br> (Propiedades dinámicas)](#elem019) | |
|    |    |    |    |

<br>
<br>

<a name="elem001">**basisOfRecord** (Base del registro)</a>

|    |    |
| ---|--- |
| Definición | Denota el origen o evidencia específica de la que se deriva el organismo. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| Comentarios | Sólo las colecciones biológicas pueden documentar PreservedSpecimen, si el registro corresponde a un espécimen depositado, pero el reporte no lo genera la colección biológica, se documenta HumanObservation y se documentan los elementos collectionCode, catalogNumber y disposition. |
| Elementos relacionados | type |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_ |
| [Vocabulario controlado](#elem365) | PreservedSpecimen<br> HumanObservation<br> LivingSpecimen<br> FossilSpecimen<br> MachineObservation<br> MaterialSample<br> MaterialCitation |
|    |    |

<a name="elem002">**type (Tipo)**</a>

|    |    |
| ---|--- |
| Definición | Especifica el tipo de evidencia que da origen al registro, ampliando la información presente en el elemento basisOfRecord. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| Elementos relacionados | basisOfRecord |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](#elem366) | Stillmage<br> MovingImage<br> Sound<br> PhysicalObject<br> Event |
|    |    |

<a name="elem003">**institutionCode** (Código de la institución)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la institución que custodia el espécimen o la información del registro; seguido por su acrónimo en paréntesis, si tiene. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS)<br> Universidad de Antioquia (UdeA)<br> Jardín Botánico de Bogotá José Celestino Mutis (JBB) |
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
| Definición | El nombre, acrónimo, código alfanumérico, o iniciales que identifican la colección o conjunto de datos del que procede el organismo. Si corresponde a una colección biológica registrada en el Registro Único Nacional de Colecciones Biológicas - RNC [(http://rnc.humboldt.org.co/admin/index.php/registros/colecciones)](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones), se puede emplear el acrónimo allí registrado, aunque también es válido el uso del acrónimo que implemente la colección internamente. |
| Ejemplo | COL<br> ANDES-E<br> FMB |
| Elementos relacionados | collectionID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="elem006">**collectionID** (ID de la colección)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la colección registrada en el elemento collectionCode. Si corresponde a una colección biológica registrada en el Registro Único Nacional de Colecciones Biológicas - RNC [(http://rnc.humboldt.org.co/admin/index.php/registros/colecciones)](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones), se debe emplear el identificador allí registrado. En tal caso documentar: [RNC:]+[Número de la colección], sin espacios. |
| Ejemplo | RNC:001<br> RNC:010<br> RNC:250 |
| Elementos relacionados | collectionCode |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |
|    |    |

<a name="elem007">**datasetName** (Nombre del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | El nombre del conjunto de datos del cual se deriva el registro biológico (observación, colecta o evento).<br><br> De acuerdo al origen del registro biológico, identifique a cuál de los siguientes casos corresponde y construya este identificador según las indicaciones del caso:<br><br> (i) El registro biológico proviene de una entidad vinculada y adscrita al Ministerio de Medio Ambiente y Desarrollo Sostenible que no requiere un permiso de recolección. Nombre del convenio o proyecto marco de acuerdo a lo documentado en el elemento datasetID<br><br> (ii) El registro biológico proviene de un proyecto amparado por un permiso de recolección de especímenes o acceso a recursos genéticos de acuerdo a lo establecido en el Decreto 1076 de 2015. Nombre del titular del permiso<br><br> (iii) El registro biológico proviene de un espécimen depositado en una colección biológica por solicitud expresa de una autoridad ambiental o gubernamental mediante un acto legal. Por ejemplo, en los casos de incautación de fauna y flora silvestre por tráfico de especies. Se documentan las palabras ‘Acto Legal’<br><br> (iv) El registro biológico proviene de un espécimen preservado en una colección biológica y legalizado a través de una amnistía. Se documentan la palabra ‘Amnistía’<br><br> (v) El registro biológico proviene de un espécimen obtenido por medio de una colecta fortuita, por ejemplo, en los casos de pesca accidental, atropellamiento y choqué contra edificaciones, entre otros. Se documentan las palabras ‘Colecta Fortuita’ |
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
| [Vocabulario controlado](#elem367) | Consultar en: [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php) |
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

|    |    |    |    |
| ---|--- |--- |--- |
| [**occurrenceID**<br> (ID del Registro biológico)](#elem020) | [**catalogNumber**<br> (Número de catálogo)](#elem021) | [**recordNumber**<br> (Número del registro)](#elem022) | [**recordedBy**<br> (Registrado por)](#elem023) |
| [**recordedByID**<br> (ID del registrador)](#elem024) | [**individualCount**<br> (Número de individuos)](#elem025) | [**organismQuantity**<br> (Cantidad del organismo)](#elem026) | [**organismQuantityType**<br> (Tipo de cantidad del organismo)](#elem027) |
| [**sex**<br> (Sexo)](#elem028) | [**lifeStage**<br> (Etapa de desarrollo)](#elem029) | [**reproductiveCondition**<br> (Condición reproductiva)](#elem030) | [**behavior**<br> (Comportamiento)](#elem031) | 
| [**establishmentMeans**<br> (Medios de establecimiento)](#elem032) | [**degreeOfEstablishment**<br> (Grado de establecimiento)](#elem033) | [**pathway**<br> (Ruta de introducción)](#elem034) | [**occurrenceStatus**<br> (Estado del registro biológico)](#elem035) |
| [**preparations**<br> (Preparaciones)](#elem036) | [**disposition**<br> (Disposición)](#elem037) | [**otherCatalogNumbers**<br> (Otros números de catálogo)](#elem038) | [**associatedMedia**<br> (Medios asociados)](#elem039) |
| [**associatedOccurrences**<br> (Registros biológicos asociados)](#elem040) | [**associatedReferences**<br> (Referencias asociadas)](#elem041) | [**associatedSequences**<br> (Secuencias asociadas)](#elem042) | [**associatedTaxa**<br> (Taxones asociados)](#elem043) |
| [**occurrenceRemarks**<br> (Comentarios del registro biológico)](#elem044) |  |  |  |
|    |    |    |    |

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
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem023">**recordedBy** (Registrado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas (observadores o recolectores) responsables de realizar el registro.<br><br> El colector u observador principal, especialmente si está asociado al recordNumber tomado en campo, se debe listar en primer lugar. Se debe mantener el mismo formato del nombre a lo largo de todos los registros y se recomienda evitar el uso de solo iniciales ya que esto genera ambigüedades para reconocer a las personas que realizaron el registro, de ser posible siempre escriba nombres completos. Documente el nombre de las personas y evite documentar nombres de grupos u organizaciones. |
| Ejemplo | Eduardo Amat García<br> Javier Maldonado Ocampo<br> Mónica Andrea Sánchez Torres \| Esteban Andrés Novoa López |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |
|    |    |

<a name="elem024">**recordedByID** (ID del registrador)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los ID de las personas (observadores o recolectores), grupos u organizaciones responsables de realizar el registro. Estos identificadores deben corresponder al ORCID, Wikidata u algún otro identificador único controlado. El orden en este elemento no indica una prioridad en la citación ni ningún otro tipo de relación jerárquica. |
| Ejemplo | https://orcid.org/0000-0001-6215-3617 \| https://orcid.org/0000-0003-1691-239X<br> https://www.wikidata.org/entity/Q28913658 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem025">**individualCount** (Número de individuos)</a>

|    |    |
| ---|--- |
| Definición | Número de individuos presentes en el momento del registro biológico (observación, ejemplar, fotografía, etc.). Utilice este elemento si todos los conteos corresponden a individuos, de lo contrario utilice organismQuantity y organismQuanitityType. |
| Ejemplo | 1<br> 25<br> 282 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |
|    |    |

<a name="elem026">**organismQuantity** (Cantidad del organismo)</a>

|    |    |
| ---|--- |
| Definición | Valor que representa una cantidad colectada u observada del organismo, expresada en un sistema de medida estándar para el organismo como cepas, células, porcentaje de biomasa, etc. Documentar este elemento junto con el elemento organismQuantityType. |
| Comentarios| El sistema de medida se debe documentar en el elemento organismQuantityType, como se muestra en el ejemplo a continuación:<br><br> Para el registro de cobertura de líquenes: organismQuantity: 30 / organismQuantityType: Porcentaje de cobertura<br> Para la abundancia de fitoplancton: organismQuantity: 253 / organismQuantityType: Células por litro<br> Para comunidades vegetales: organismQuantity: r / organismQuantityType: Escala Braun-Blanquet |
| Ejemplo | 30<br> 253<br> r |
| Elementos relacionados | organismQuantityType |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |
|    |    |

<a name="elem027">**organismQuantityType** (Tipo de cantidad del organismo)</a>

|    |    |
| ---|--- |
| Definición | Sistema de medida estándar asociado a la cantidad de organismos. Documentar este elemento junto con el elemento organismQuantity. |
| Comentarios| La cantidad de organismos se debe documentar en el elemento organismQuantity, como se muestra a continuación:<br><br> Para el registro de cobertura de líquenes: organismQuantity: 30 / organismQuantityType: Porcentaje de cobertura<br> Para la abundancia de fitoplancton: organismQuantity: 253 / organismQuantityType: Células por litro<br> Para comunidades vegetales: organismQuantity: r / organismQuantityType: Escala Braun-Blanquet |
| Ejemplo | Porcentaje de cobertura<br> Células por litro<br> Escala Braun-Blanquet |
| Elementos relacionados | organismQuantity |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |
|    |    |


<a name="elem028">**sex** (Sexo)</a>

|    |    |
| ---|--- |
| Definición | El sexo de el(los) organismo(s) representado(s) en el registro. Si en un mismo registro cuenta con varios organismos de diferentes sexos, genere registros (filas) diferentes por cada sexo. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Hembra<br> Hermafrodita<br> Macho<br> Desconocido<br> Indeterminado<br> Ginandromorfo |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |
|    |    |

<a name="elem029">**lifeStage** (Etapa de desarrollo)</a>

|    |    |
| ---|--- |
| Definición | La etapa de vida de el(los) organismo(s) en el momento del registro. Si en un mismo registro cuenta con varios organismos en diferentes etapas de vida, genere registros (filas) diferentes por cada etapa de vida. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Huevo<br> Juvenil<br> Adulto<br> Cigoto<br> Embrión<br> Larva<br> Esporófito<br> Espora<br> Gametofito<br> Gameto<br> Pupa<br> Plántula<br> Floración<br> Fructificación |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |
|    |    |

<a name="elem030">**reproductiveCondition** (Condición reproductiva)</a>

|    |    |
| ---|--- |
| Definición | Condición reproductiva de el(los) organismo(s) en el momento del registro. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | No reproductiva<br> En gestación<br> Floración<br> Fructificación |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem031">**behavior** (Comportamiento)</a>

|    |    |
| ---|--- |
| Definición | Descripción del comportamiento de el(los) organismo(s) en el momento del registro. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Posando<br> Alimentándose<br> Corriendo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem032">**establishmentMeans** (Medios de establecimiento)</a>

|    |    |
| ---|--- |
| Definición | Una afirmación que de cuenta si un organismo ha sido introducido a un lugar y tiempo determinado a través de actividad humana directa o indirecta. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos degreeOfEstablishment y pathway. |
| Elementos relacionados | degreeOfEstablishment, pathway |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#elem368) | native<br> nativeReintroduced<br> introduced<br> introducedAssistedColonisation<br> vagrant<br> uncertain |
|    |    |

<a name="elem033">**degreeOfEstablishment** (Grado de establecimiento)</a>

|    |    |
| ---|--- |
| Definición | El grado en cual el organismo sobrevive, se reproduce y expande su rango de distribución en un lugar y tiempo determinado. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos establishmentMeans y pathway. |
| Elementos relacionados | establishmentMeans, pathway |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#elem369) | native<br> cultivated<br> released<br> established<br> colonising<br> widespreadInvasive |
|    |    |

<a name="elem034">**pathway** (Ruta de introducción)</a>

|    |    |
| ---|--- |
| Definición | El proceso por el cual un organismo llegó a un lugar y tiempo determinado. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos establishmentMeans y degreeOfEstablishment. |
| Elementos relacionados | establishmentMeans, degreeOfEstablishment |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#elem370) | releasedForUse<br> otherEscape<br> transportContaminant<br> transportStowaway<br> corridor<br> unaided |
|    |    |

<a name="elem035">**occurrenceStatus** (Estado del registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Estado que da cuenta de la presencia o ausencia de un taxón en una ubicación. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#elem371) | present<br> absent |
|    |    |

<a name="elem036">**preparations** (Preparaciones)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de las preparaciones y los métodos de conservación de un ejemplar o una muestra del ejemplar.<br><br> Adicionalmente, si el espécimen fue colectado bajo un permiso de recolección de especímenes o acceso a recursos genéticos, debe indicar si fue una colecta temporal o una colecta definitiva seguido por el tipo de preparación. |
| Ejemplo | Colecta definitiva: Animal completo (ETOH)<br> Colecta definitiva: Preparación de muestra microbiológica<br> Colecta temporal: Extracción de ADN<br> Piel \| Cráneo \| Esqueleto<br> Animal completo (ETOH) \| Tejido (EDTA)<br> Fósil<br> Molde<br> Fotografía |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos |
|    |    |

<a name="elem037">**disposition** (Disposición)</a>

|    |    |
| ---|--- |
| Definición | El estado actual de un espécimen en relación a la colección identificada en collectionCode o collectionID. Se recomienda el uso de un vocabulario controlado. Si el espécimen fue colectado bajo un permiso de recolección de especímenes o acceso a recursos genéticos y fue entregado a una colección biológica se debe documentar "En colección", de lo contrario dejar vacío el elemento. |
| Ejemplo | En colección<br> Extraviado<br> Ejemplar testigo<br> Duplicados en otro lugar |
| Elementos relacionados| collectionCode, collectionID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos |
|    |    |

<a name="elem038">**otherCatalogNumbers** (Otros números de catálogo)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de números de catálogos anteriores o alternos, u otros identificadores usados por personas para el mismo registro biológico, ya sea en el actual o cualquier otro conjunto de datos o colección. |
| Ejemplo | CFMNH:Mammal:1234<br> NPS YELLO6778 \| MBG 33424 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem039">**associatedMedia** (Medios asociados)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (publicación, referencia bibliográfica, identificador único global, URI) de los medios asociados al registro biológico. Se recomienda usar la extensión Simple Multimedia o Audobon Media Description las cuales cuentan con más elementos para describir la información multimedia asociada. |
| Ejemplo | https://sinchi.org.co/ciacol/ficha/24/Hypoclinemus%20mentalis<br> https://ia801004.us.archive.org/0/items/staphylococcusaureus.JPG \| https://ia903100.us.archive.org/33/items/CMPUJH012-macro.jpg |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem040">**associatedOccurrences** (Registros biológicos asociados)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores de otros registros biológicos y su relación con este registro. Aplica para relaciones con organismos de diferente grupo taxonómico y se recomiendo documentar junto a el elemento associatedTaxa. Se recomienda hacer uso de la extensión Resource Relationship para documentar en más detalle la relación entre los registros biológicos asociados. |
| Ejemplo | http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067 \| http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393<br>  SELVA:Anillamiento:AA7330a |
| Elementos relacionados| associatedTaxa |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem041">**associatedReferences** (Referencias asociadas)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (publicación, referencia bibliográfica, identificador único global, URI) de la literatura asociada al registro biológico. Se recomienda hacer uso de la extensión Literature References la cual cuenta con más elementos para describir la información de referencias asociada. |
| Ejemplo | http://www.sciencemag.org/cgi/content/abstract/322/5899/261<br> Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem042">**associatedSequences** (Secuencias asociadas)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (publicación, identificador único global, URI) de la información de la secuencia genética asociada al registro biológico. Se recomienda hacer uso de la extensión GGBN Amplification Extension la cual cuenta con más elementos para describir la información de secuencia genética asociada. |
| Ejemplo | https://www.ncbi.nlm.nih.gov/nuccore/U34853.1<br>  https://www.boldsystems.org/index.php/Public_RecordView?processid=ABBAC141-12 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem043">**associatedTaxa** (Taxones asociados)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores o nombres de taxones y su asociación con el registro biológico. |
| Ejemplo | Huésped: Quercus alba<br> Parásito: Apis mellifera |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem044">**occurrenceRemarks** (Comentarios del registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre el registro biológico. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Muerto en la vía<br> Registrado en el campus de la Universidad |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |
|    |    |

### Organismo

|    |    |    |    |
| ---|--- |--- |--- |
| [**organismID**<br> (ID del organismo)](#elem045) | [**organismName**<br> (Nombre del organismo)](#elem046) | [**organismScope**<br> (Alcance del organismo)](#elem047) | [**associatedOrganisms**<br> (Organismos asociados)](#elem048) |
| [**previousIdentifications**<br> (Identificaciones previas)](#elem049) | [**organismRemarks**<br> (Comentarios del organismo)](#elem050) |  |  |
|    |    |    |    |

<br>
<br>

<a name="elem045">**organismID** (ID del organismo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del organismo. Pretende facilitar el remuestreo del mismo individuo con fines generalmente de monitoreo. Aves anilladas, fotos de mamíferos acuáticos, árboles remuestreados, etc. |
| Ejemplo | U.amer. 44<br> CC09477<br> Orca J 23 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem046">**organismName** (Nombre del organismo)</a>

|    |    |
| ---|--- |
| Definición | El nombre textual dado a un organismo en un estudio o el nombre en la etiqueta asignada originalmente. |
| Ejemplo | Huberta<br> Willy la Ballena Asesina<br> Cheeta |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem047">**organismScope** (Alcance del organismo)</a>

|    |    |
| ---|--- |
| Definición | Puede ser utilizado para indicar si la instancia del organismo representa un organismo discreto o un tipo particular de agregación. Se recomienda el uso de un vocabulario controlado. Este elemento no está destinado a ser utilizado para especificar una categoría taxonómica. |
| Ejemplo | Organismo multicelular<br> Manada<br> Clon<br> Colonia |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem048">**associatedOrganisms** (Organismos asociados)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores de otros organismos y su relación con el organismo documentado. Aplica para relaciones con organismos del mismo grupo taxonómico. Se recomienda hacer uso la extensión Resource Relationship para documentar en más detalle la relación entre los organismos asociados. |
| Ejemplo | Hermano de: FMNH:Mamífero:1234 \| Hermano de: FMNH:Mamífero:1235<br> Hijo de: MLS:sau:438 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem049">**previousIdentifications** (Identificaciones previas)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de asignaciones taxonómicas que se le han dado al organismo anteriormente. Puede contener la información de quién y cuándo realizó la identificación anterior. Se recomienda hacer uso de la extensión Identification [(https://tools.gbif.org/dwca-validator/extension.do?id=dwc:Identification#Identification)](https://tools.gbif.org/dwca-validator/extension.do?id=dwc:Identification#Identification) para el caso de colecciones biológicas. |
| Ejemplo | Pinus abies<br> Anthus sp., identificado en campo por G. Iglesias \| Anthus correndera, Identificado por el experto C. Cicero 2009-02-12 basado en morfología<br> Leptolyngbya cf. polysiphoniae \| Leptolyngbya sp. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

<a name="elem050">**organismRemarks** (Comentarios del organismo)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre el organismo registrado. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Uno de una camada de seis<br> Fruto inmaduro cubierto por un indumento rojizo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

### Muestra del Material

|    |    |    |    |
| ---|--- |--- |--- |
| [**materialSampleID**<br> (ID de muestra del material)](#elem051) |  |  |  |
|    |    |    |    |

<br>
<br>

<a name="elem051">**materialSampleID** (ID de muestra del material)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para muestras de material (no hace referencia a muestras digitales sino físicas, como exicados o tejidos). En ausencia de un identificador único global persistente, puede construir uno usando una combinación a partir del occurrenceID, de tal forma que el materialSampleID sea globalmente único. Se recomienda hacer uso de la extensión GGBN Material Sample Extension para documentar en más detalle la información relacionada con la muestra. |
| Ejemplo | IAvH:IAvH-CT-1:Tejido<br> 06809dc5-f143-459a-be1a-6f03e63fc083<br> IAvH-ABJ788 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|    |    |

### Evento

|    |    |    |    |
| ---|--- |--- |--- |
| [**parentEventID**<br> (ID parental del evento)](#elem052) | [**eventID**<br> (ID del evento)](#elem053) | [**samplingProtocol**<br> (Protocolo de muestreo)](#elem054) | [**sampleSizeValue**<br> (Valor del tamaño de la muestra)](#elem055) |
| [**sampleSizeUnit**<br> (Unidad del tamaño de la muestra)](#elem056) | [**samplingEffort**<br> (Esfuerzo de muestreo)](#elem057) | [**eventDate**<br> (Fecha del evento)](#elem058) | [**startDayOfYear**<br> (Día inicial del año)](#elem059) |
| [**endDayOfYear**<br> (Día final del año)](#elem060) | [**year**<br> (Año)](#elem061) | [**month**<br> (Mes)](#elem062) | [**day**<br> (Día)](#elem063) | 
| [**verbatimEventDate**<br> (Fecha original del evento)](#elem064) | [**eventTime**<br> (Hora del evento)](#elem065) | [**habitat**<br> (Hábitat)](#elem066) | [**fieldNumber**<br> (Número de campo)](#elem067) |
| [**fieldNotes**<br> (Notas de campo)](#elem068) | [**eventRemarks**<br> (Comentarios del evento)](#elem069) |  |  |
|    |    |    |    |    |

<br>
<br>

<a name="elem052">**parentEventID** (ID parental del evento)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único para la categoría superior del evento de muestreo. Por ejemplo, el identificador del muestreo de un cuadrante, parcela o transecto independientemente del tiempo o temporada cuando se realice el muestro. Este identificador es más general que el eventID y puede agrupar varios eventID. |
| Comentarios | Este elemento debe estar acompañado siempre del elemento eventID, como se muestra en el ejemplo a continuación:<br><br> A1 como parentEventID para identificar una parcela, cada sub-parcela con su propio eventID (A1:1, A1:2, etc.)<br> BENTOS como parentEventID para identificar un evento de muestreo y cada parte del evento con su propio eventID (BENTOS:E-1, BENTOS:E-2, etc.) |
| Ejemplo | A1<br> BENTOS |
| Elementos relacionados | eventID |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem053">**eventID** (ID del evento)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único para el Evento de muestreo, que ocurre en un lugar y tiempo determinado. Por ejemplo, el identificador del muestreo de un cuadrante, parcela o transecto en un tiempo o temporada específicos. Este identificador es más específico que el parentEventID. |
| Comentarios | Este elemento puede estar acompañado del elemento parentEventID, como se muestra en el ejemplo a continuación:<br><br> A1:1 \| A1:2 como eventID para identificar cada sub-parcela perteneciente a la parcela A1<br> BENTOS:E-1 \| BENTOS:E-2 como EventID para identificar cada parte del evento de muestreo perteneciente al evento BENTOS |
| Ejemplo | A1:1<br> BENTOS:E-1 |
| Elementos relacionados | parentEventID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro es marino - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Obligatorio)_ |
|    |    |

<a name="elem054">**samplingProtocol** (Protocolo de muestreo)</a>

|    |    |
| ---|--- |
| Definición | El nombre, la descripción o la referencia del método o protocolo de muestreo usado para realizar el muestreo. Se recomienda acompañar este elemento con el elemento samplingEffort. |
| Ejemplo | Trampa de luz UV<br> Red de niebla<br> Arrastre de fondo<br> Observación ad hoc<br> Punto de conteo |
| Elementos relacionados | samplingEffort |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem055">**sampleSizeValue** (Valor del tamaño de la muestra)</a>

|    |    |
| ---|--- |
| Definición | Un valor numérico para una medición del tamaño (duración de tiempo, longitud, área o volumen) de una muestra en un evento de muestreo. Documentar este elemento junto con el elemento sampleSizeUnit. Se recomienda hacer uso del Sistema Internacional de Unidades (SI). |
| Ejemplo | 5.5<br> 10<br> 1 |
| Elementos relacionados | sampleSizeUnit |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem056">**sampleSizeUnit** (Unidad del tamaño de la muestra)</a>

|    |    |
| ---|--- |
| Definición | La unidad de medida de la magnitud (tiempo de duración, longitud, área o volumen) de una muestra en un evento de muestreo. Documentar este elemento junto con el elemento sampleSizeValue. |
| Ejemplo | Metros<br> Horas<br> Trampa<br> Metros cuadrados |
| Elementos relacionados | sampleSizeValue |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem057">**samplingEffort** (Esfuerzo de muestreo)</a>

|    |    |
| ---|--- |
| Definición | El esfuerzo de muestreo en tiempo y/o espacio realizado durante el evento de muestreo. Documentar este elemento junto con el elemento samplingProtocol. |
| Ejemplo | 40 trampas-noche<br> 10 horas-observador<br> 10 km caminando<br> 30 km en carro<br> 7 días-trampa<br> 5 horas muestra por 30 eventos de muestreo |
| Elementos relacionados | samplingProtocol |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem058">**eventDate** (Fecha del evento)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo durante la cual se produjo el evento de observación o colecta de un organismo o muestra. No es adecuado para una fecha en un contexto geológico. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Obligatorio)_ |
|    |    |

<a name="elem059">**startDayOfYear** (Día inicial del año)</a>

|    |    |
| ---|--- |
| Definición | Día inicial del evento, contando a partir del primer día del año del evento y documentado en formato de números ordinales (siendo "1" el primero de enero y "365" el 31 de diciembre en año no bisiesto). |
| Ejemplo | 1<br> 220<br> 365 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem060">**endDayOfYear** (Día final del año)</a>

|    |    |
| ---|--- |
| Definición | Día final del evento, contando a partir del primer día del año del evento y documentado en formato de números ordinales (siendo "1" el primero de enero y "365" el 31 de diciembre en año no bisiesto). |
| Ejemplo | 30<br> 300<br> 366 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem061">**year** (Año)</a>

|    |    |
| ---|--- |
| Definición | Los cuatro dígitos del año durante el cual se produjo el evento de observación o colecta de un organismo o muestra. |
| Ejemplo | 2008<br> 1901 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem062">**month** (Mes)</a>

|    |    |
| ---|--- |
| Definición | El mes en números enteros en que ocurrió durante el cual se produjo el evento de observación o colecta de un organismo o muestra. |
| Ejemplo | 01<br> 11 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem063">**day** (Día)</a>

|    |    |
| ---|--- |
| Definición | El día en números enteros durante el cual se produjo el evento de observación o colecta de un organismo o muestra. |
| Ejemplo | 09<br> 28 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem064">**verbatimEventDate** (Fecha original del evento)</a>

|    |    |
| ---|--- |
| Definición | La representación textual original (según la libreta de campo, formato de datos, o etiqueta de colección) de la información de fecha durante la cual se produjo el evento de observación o colecta de un organismo o muestra. |
| Ejemplo | primavera 1910<br> 4/11/2020<br> marzo 2002<br> 1999-03-XX<br> 17IV1934 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem065">**eventTime** (Hora del evento)</a>

|    |    |
| ---|--- |
| Definición | La hora o el intervalo de horas en la cual se produjo el evento de observación o colecta de un organismo o muestra. Debe estar documentado en el esquema de codificación ISO 8601. |
| Ejemplo | 14:07<br> 08:40:21<br> 13:00:00/15:30:00 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem066">**habitat** (Hábitat)</a>

|    |    |
| ---|--- |
| Definición | Una categoría estandarizada o la descripción del hábitat en el que ocurrió el evento. |
| Ejemplo | Sabana de roble<br> Estepa de la pre-cordillera |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem067">**fieldNumber** (Número de campo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador dado al evento en campo. A menudo sirve como un vínculo entre las anotaciones de campo y el evento. |
| Ejemplo | RV Sol 87-03-08<br> MBZ-067 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem068">**fieldNotes** (Notas de campo)</a>

|    |    |
| ---|--- |
| Definición | Un indicador sobre la existencia o referencia (publicación URI) a las notas de campo; o el texto de las notas tomadas en campo sobre el evento. |
| Ejemplo | Notas disponibles en la Biblioteca Grinnell-Miller<br> Este espécimen fue colectado en un árbol de caracolí, una nota de campo fue descrita para mencionar este evento, eran depredados por Epicrates maurus |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem069">**eventRemarks** (Comentarios del evento)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre el evento. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Después de las lluvias recientes, el río estuvo cercano a un estado de desbordamiento |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

### Ubicación

|    |    |    |
| ---|--- |--- |
| [**locationID**<br> (ID de la ubicación)](#elem070) | [**higherGeography**<br> (Geografía superior)](#elem071) | [**higherGeographyID**<br> (ID de la geografía superior)](#elem072) |
| [**continent**<br> (Continente)](#elem073) | [**waterBody**<br> (Cuerpo de agua)](#elem074) | [**islandGroup**<br> (Grupo de islas)](#elem075) | 
| [**island**<br> (Isla)](#elem076) | [**country**<br> (País)](#elem077) | [**countryCode**<br> (Código del país)](#elem078) |
| [**stateProvince**<br> (Departamento)](#elem079) | [**county**<br> (Municipio)](#elem080) | [**municipality**<br> (Cabecera municipal/<br>Centro poblado)](#elem081) | 
| [**locality**<br> (Localidad)](#elem082) | [**verbatimLocality**<br> (Localidad original)](#elem083) | [**verbatimElevation**<br> (Elevación original)](#elem084) | 
| [**minimumElevationInMeters**<br> (Elevación mínima en metros)](#elem085) | [**maximumElevationInMeters**<br> (Elevación máxima en metros)](#elem086) | [**verticalDatum**<br> (Datum vertical)](#elem087) |
| [**verbatimDepth**<br> (Profundidad original)](#elem088) | [**minimumDepthInMeters**<br> (Profundidad mínima en metros)](#elem089) | [**maximumDepthInMeters**<br> (Profundidad máxima en metros)](#elem090) | 
| [**minimumDistanceAbove<br>SurfaceInMeters**<br> (Distancia mínima de la superficie en metros)](#elem091) | [**maximumDistanceAbove<br>SurfaceInMeters**<br> (Distancia máxima de la superficie en metros)](#elem092) | [**locationAccordingTo**<br> (Ubicación de acuerdo con)](#elem093) |
| [**locationRemarks**<br> (Comentarios de la ubicación)](#elem094) | [**verbatimLatitude**<br> (Latitud original)](#elem095) | [**verbatimLongitude**<br> (Longitud original)](#elem096) |
| [**verbatimCoordinates**<br> (Coordenadas originales)](#elem097) | [**verbatimCoordinateSystem**<br> (Sistema original de coordenadas)](#elem098) | [**verbatimSRS**<br> (SRS original)](#elem099) |
| [**decimalLatitude**<br> (Latitud decimal)](#elem100) | [**decimalLongitude**<br> (Longitud decimal)](#elem101) | [**geodeticDatum**<br> (Datum geodésico)](#elem102) |
| [**coordinateUncertaintyInMeters**<br> (Incertidumbre de las coordenadas en metros)](#elem103) | [**coordinatePrecision**<br> (Precisión de las coordenadas)](#elem104) | [**pointRadiusSpatialFit**<br> (Ajuste espacial del radio-punto)](#elem105) |
| [**footprintWKT**<br> (WKT footprint)](#elem106) | [**footprintSRS**<br> (SRS footprint)](#elem107) | [**footprintSpatialFit**<br> (Ajuste espacial de footprint)](#elem108) |
| [**georeferencedBy**<br> (Georreferenciado por)](#elem109) | [**georeferencedDate**<br> (Fecha de georreferenciación)](#elem110) | [**georeferenceProtocol**<br> (Protocolo de georreferenciaciónt)](#elem111) |
| [**georeferenceSources**<br> (Fuentes de georreferenciación)](#elem112) | [**georeferenceVerificationStatus**<br> (Estado de la verificación de la georreferenciación)](#elem113) | [**georeferenceRemarks**<br> (Comentarios de la georreferenciación)](#elem114) |
|    |    |    |

<br>
<br>

<a name="elem070">**locationID** (ID de la ubicación)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la región geográfica, división político administrativa o del sitio específico donde se realizó el registro. |
| Comentarios | Se sugiere utilizar un identificador persistente, como el código de la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD) precedida por "CO:" o utilizar MarineRegions [(https://www.marineregions.org/)](https://www.marineregions.org/) para regiones marinas, como se muestra a continuación:<br><br> CO:15572 (Código Divipola para el Municipio de Puerto Boyacá en Boyacá)<br> CO:68 (Código Divipola para el Departamento de Santander)<br> http://marineregions.org/mrgid/32556 (Islas del Rosario) |
| Ejemplo | CO:15572<br> CO:68<br> http://marineregions.org/mrgid/32556<br> geonames.org/3674545/ |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem071">**higherGeography** (Geografía superior)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de la geografía inmediatamente superior al sitio o ubicación donde se realizó el registro. Si hay modificaciones en la localidad para estandarizar su contenido puede documentar en este elemento los datos originales (sin estandarizar) de esos términos. |
| Comentarios | Este elemento debe estar acompañado de otros elementos del estándar, como se muestra en el ejemplo a continuación:<br><br> América \| Sudamérica \| Colombia \| Región del Pacífico \| Valle del Cauca \| La Cumbre \| Bitaco (Con los valores resultantes de SA en continent, Colombia en country, Valle del Cauca en stateProvince, La Cumbre en county y Bitaco en municipality). |
| Ejemplo | América \| Sudamérica \| Colombia \| Región del Pacífico \| Valle del Cauca \| La Cumbre \| Bitaco |
| Elementos relacionados | higherGeographyID, continent, country, stateProvince, county, municipality |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem072">**higherGeographyID** (ID de la geografía superior)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la región geográfica inmediatamente superior a la ubicación donde se realizó el registro. Este identificador debe ser acorde con la geografía superior documentada en el elemento higherGeography. |
| Comentarios | Se recomienda utilizar un identificador persistente de un vocabulario controlado como el código de la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD) precedida por "CO:" o el Tesauro Getty de Nombres Geográficos, como se muestra a continuación:<br><br> CO:15572 (Código Divipola para el Municipio de Puerto Boyacá en Boyacá)<br> CO:68 (Código Divipola para el Departamento de Santander)<br> TGN: 7005075 (San Agustín (Huila), Colombia) |
| Ejemplo | CO:15572<br> CO:68<br> TGN: 7005075 |
| Elementos relacionados | higherGeography, continent, country, stateProvince, county, municipality |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem073">**continent** (Continente)</a>

|    |    |
| ---|--- |
| Definición | El nombre del continente en el que tiene lugar la ubicación. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
| [Vocabulario controlado](#elem372) | América del Sur<br> América del Norte<br> Europa<br> África<br> Asia<br> Oceanía<br> Antártida |
|    |    |

<a name="elem074">**waterBody** (Cuerpo de agua)</a>

|    |    |
| ---|--- |
| Definición | El nombre y tipo del cuerpo de agua en el que tiene lugar la ubicación. Se recomienda usar este elemento solamente si el evento ocurrió en el cuerpo de agua propiamente dicho, no en cercanías de este. |
| Ejemplo | Mar Caribe<br> Océano Pacífico <br>Río Lebrija<br> Golfo de Urabá<br> Caño Mojana |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem075">**islandGroup** (Grupo de islas)</a>

|    |    |
| ---|--- |
| Definición | El nombre del grupo de islas en que tiene lugar la ubicación. |
| Ejemplo | Cayos de Albuquerque<br> Islas del Rosario |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem076">**island** (Isla)</a>

|    |    |
| ---|--- |
| Definición | El nombre de la isla en o cerca al lugar de la ubicación. |
| Ejemplo | Isla de Providencia<br> Isla Gorgona<br> Isla de Tierra Bomba |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem077">**country** (País)</a>

|    |    |
| ---|--- |
| Definición | El nombre del país o unidad administrativa de mayor jerarquía de la ubicación. Se recomienda utilizar un identificador persistente de un vocabulario controlado como el Tesauro Getty de Nombres Geográficos o la norma ISO 3166. Se recomienda acompañar este elemento con el elemento countryCode. |
| Ejemplo | Colombia<br> España<br> Dinamarca |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Obligatorio)_ |
|    |    |

<a name="elem078">**countryCode** (Código del país)</a>

|    |    |
| ---|--- |
| Definición | El código estándar para el país de la ubicación. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 3166-1-alfa-2 de códigos de países, como se muestra a continuación:<br><br> CO (=Para Colombia)<br> AR (=Para Argentina) |
| Elementos relacionados | country |
| Ejemplo | Colombia<br> España<br> Dinamarca |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
| [Vocabulario controlado](#elem373) | Consultar en: [https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO](https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO) |
|    |    |

<a name="elem079">**stateProvince** (Departamento)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo y sin abreviar de la siguiente región administrativa de menor jerarquía que País de la ubicación (Departamento). Se recomienda usar los nombres asignados en la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD). |
| Ejemplo | Antioquia<br> Atlántico<br> Bogotá, D.C. |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem080">**county** (Municipio)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo y sin abreviar de la siguiente región administrativa de menor jerarquía que Departamento de la ubicación (Municipio). Se recomienda usar los nombres asignados en la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD). |
| Ejemplo | Medellín<br> Puerto Colombia<br> Bogotá, D.C. |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos  - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem081">**municipality** (Cabecera municipal / Centro poblado)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo y sin abreviar de la siguiente región administrativa de menor jerarquía que Municipio de la ubicación. Puede ser un centro poblado, cabecera municipal, corregimiento o inspección de policía. No utilice este elemento para el nombre de un lugar cercano que no contiene la ubicación real. Se recomienda usar los nombres asignados en la División Política Administrativa de Colombia - DANE [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD). |
| Ejemplo | Palmitas<br> Puerto Colombia<br> Bogotá, D.C. |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos  - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem082">**locality** (Localidad)</a>

|    |    |
| ---|--- |
| Definición | La información geográfica más específica de la ubicación. Información geográfica de menor especificidad puede ser provista en otros elementos geográficos (higherGeography, continent, country, stateProvince, county, municipality, waterBody, island, islandGroup). Este elemento puede contener información modificada de la original para corregir errores o estandarizar la descripción. |
| Ejemplo | Ruta del Sol, kilómetro 25 entre Guaduas y La Dorada<br> Vereda Santa Ana<br> Quebrada Aguasclaras<br> Parque Nacional Natural Serranía de Chiribiquete |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos  - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem083">**verbatimLocality** (Localidad original)</a>

|    |    |
| ---|--- |
| Definición | La descripción textual original del lugar (como fue tomada en campo o documentada en el voucher). |
| Ejemplo | km 25 Rutal del Sol, Guaduas-La Dorada<br> Vda Santa ana<br> Q. Aguasclaras<br> PNN Chiribiquete |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem084">**verbatimElevation** (Elevación original)</a>

|    |    |
| ---|--- |
| Definición | La descripción textual de la elevación (altitud, por lo general por encima del nivel del mar) de la ubicación. |
| Ejemplo | 100-200 m<br> 1560 msnm |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem085">**minimumElevationInMeters** (Elevación mínima en metros)</a>

|    |    |
| ---|--- |
| Definición | El límite inferior del rango de elevación (altitud, generalmente por encima del nivel del mar), no utilice ningún indicador de unidad (metros, m, msnm) ya que el elemento especifica que los valores anotados son en metros. |
| Ejemplo | 100<br> 1600 |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem086">**maximumElevationInMeters** (Elevación máxima en metros)</a>

|    |    |
| ---|--- |
| Definición | El límite superior del rango de elevación (altitud, generalmente por encima del nivel del mar), no utilice ningún indicador de unidad (metros, m, msnm) ya que el elemento especifica que los valores anotados son en metros. |
| Ejemplo | 200<br> 3050 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem087">**verticalDatum** (Datum vertical)</a>

|    |    |
| ---|--- |
| Definición | El datum vertical usado como referencia para la obtención de los valores de elevación. Se recomienda usar un vocabulario controlado a partir de código epsg o el código del geoide de referencia. |
| Ejemplo | GRS80<br> EGM84<br> EGM96<br> EGM2008<br> epsg:7030<br> Desconocido |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem088">**verbatimDepth** (Profundidad original)</a>

|    |    |
| ---|--- |
| Definición | La descripción textual de la profundidad bajo la superficie local. |
| Ejemplo | 0-20 m<br> -15 a -30 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem089">**minimumDepthInMeters** (Profundidad mínima en metros)</a>

|    |    |
| ---|--- |
| Definición | La menor profundidad de un rango de profundidad por debajo de la superficie local. No utilice ningún indicador de unidad (metros, m) ya que el elemento especifica que los valores anotados son en metros. |
| Ejemplo | 0<br> 10 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem090">**maximumDepthInMeters** (Profundidad máxima en metros)</a>

|    |    |
| ---|--- |
| Definición | La mayor profundidad de un rango de profundidad por debajo de la superficie local. No utilice ningún indicador de unidad (metros, m) ya que el campo especifica que los valores anotados son en metros. |
| Ejemplo | 2<br> 50 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem091">**minimumDistanceAboveSurfaceInMeters** (Distancia mínima de la superficie en metros)</a>

|    |    |
| ---|--- |
| Definición | La menor distancia en metros en un rango de distancias, desde una superficie de referencia en dirección vertical. Si las medidas de profundidad son proporcionadas, la superficie de referencia es la ubicación determinada por la profundidad, de lo contrario la superficie de referencia es la ubicación dada por la elevación. |
| Comentarios | Utilice valores positivos para las ubicaciones por encima de la superficie y valores negativos para ubicaciones por debajo, como se muestra a continuación:<br><br> -1.5 (Para un evento entre 1.5 metros y 4.5 metros desde el fondo de un lago) |
| Ejemplo | -1.5<br> 2.8 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem092">**maximumDistanceAboveSurfaceInMeters** (Distancia máxima de la superficie en metros)</a>

|    |    |
| ---|--- |
| Definición | La mayor distancia en metros, en un rango de distancia desde una superficie de referencia en dirección vertical. Si las medidas de profundidad son proporcionadas, la superficie de referencia es la ubicación determinada por la profundidad, de lo contrario la superficie de referencia es la ubicación dada por la elevación. |
| Comentarios | Utilice valores positivos para las ubicaciones por encima de la superficie, valores negativos para las ubicaciones por debajo, como se muestra a continuación:<br><br> -4.5 (Para un evento entre 1.5 metros y 4.5 metros desde el fondo de un lago) |
| Ejemplo | -4.5<br> 8.2 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem093">**locationAccordingTo** (Ubicación de acuerdo con)</a>

|    |    |
| ---|--- |
| Definición | La información sobre la fuente de la ubicación. Podría ser una publicación (gacetero), institución o grupo de individuos. |
| Ejemplo | Tesauro Getty de Nombres Geográficos<br> GADM<br> Geonames<br> Google Earth |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem094">**locationRemarks** (Comentarios de la ubicación)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la ubicación. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Bajo agua desde 2005 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem095">**verbatimLatitude** (Latitud original)</a>

|    |    |
| ---|--- |
| Definición | La latitud original de la ubicación. El elipsoide de coordenadas, el datum geodésico o el sistema de referencia espacial completo (SRS) para estas coordenadas debe ser documentado en el elemento verbatimSRS, y el sistema de coordenadas en el elemento verbatimCoordinateSystem. |
| Ejemplo | 41° 05' 56.03" S<br> 1631599 |
| Elementos relacionados | verbatimCoordinates, verbatimCoordinateSystem, verbatimSRS, verbatimLongitude |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem096">**verbatimLongitude** (Longitud original)</a>

|    |    |
| ---|--- |
| Definición | La longitud original de la ubicación. El elipsoide de coordenadas, datum geodésico o el sistema de referencia espacial completo (SRS) para estas coordenadas, debe ser documentado en el elemento verbatimSRS y el sistema de coordenadas en el elemento verbatimCoordinateSystem. |
| Ejemplo | 75° 08' 36.83" W<br> 834549 |
| Elementos relacionados | verbatimCoordinates, verbatimCoordinateSystem, verbatimSRS, verbatimLatitude |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem097">**verbatimCoordinates** (Coordenadas originales)</a>

|    |    |
| ---|--- |
| Definición | Las coordenadas de la ubicación en su formato original. El elipsoide de las coordenadas, el datum geodésico, o el sistema de referencia espacial completo (SRS) para estas coordenadas, debe ser documentado en el elemento verbatimSRS, y el sistema de coordenadas en el elemento verbatimCoordinateSystem. |
| Ejemplo | 4° 05' 56.03" S, 75° 08' 36.83" W<br> 17T 1631599  834549 |
| Elementos relacionados | verbatimLatitude, verbatimLongitude, verbatimCoordinateSystem, verbatimSRS |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem098">**verbatimCoordinateSystem** (Sistema original de coordenadas)</a>

|    |    |
| ---|--- |
| Definición | El sistema de coordenadas espaciales para verbatimLatitude y verbatinLongitude original o verbatimCoordinates de la ubicación. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Grados decimales<br> Grados, minutos decimales<br> Grados, minutos, segundos<br> UTM<br> Coordenadas planas<br> Coordenadas proyectadas |
| Elementos relacionados | verbatimLatitude, verbatimLongitude, verbatimCoordinates, verbatimSRS |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem099">**verbatimSRS** (SRS original)</a>

|    |    |
| ---|--- |
| Definición | El elipsoide, datum geodésico, o sistema de referencia espacial (SRS) en el que se basan las coordenadas provistas en verbatimLatitude y verbatinLongitude o verbatimCoordinates. Se recomienda usar el código EPSG, si se conoce. Caso contrario, utilice un lenguaje controlado para el nombre o código del datum geodésico, o un vocabulario controlado para el nombre o código del elipsoide, si se conoce. Si ninguno de estos se conoce, utilice el valor "Desconocido". |
| Ejemplo | EPSG: 4326<br> EPSG: 3116<br> WGS84<br> UTM zone 17T<br> MAGNA-SIRGAS origen Bogotá<br> MAGNA-SIRGAS origen Oeste<br> MAGNA-SIRGAS origen CTM-12<br> Desconocido |
| Elementos relacionados | verbatimLatitude, verbatimLongitude, verbatimCoordinates, verbatimCoordinateSystem |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem100">**decimalLatitude** (Latitud decimal)</a>

|    |    |
| ---|--- |
| Definición | La latitud geográfica (en grados decimales, utilizando el sistema de referencia espacial provisto en geodeticDatum) del centro geográfico de una ubicación. Los valores positivos se encuentran al norte del ecuador, los valores negativos están al sur del mismo. Los valores admitidos se encuentran entre -90 y 90. |
| Ejemplo | 6.05486<br> 12.584877 |
| Elementos relacionados | geodeticDatum |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem101">**decimalLongitude** (Longitud decimal)</a>

|    |    |
| ---|--- |
| Definición | La longitud geográfica (en grados decimales, mediante el sistema de referencia espacial provisto en geodeticDatum) del centro geográfico de una ubicación. Los valores positivos se encuentran al este del meridiano de Greenwich, los valores negativos se encuentran al oeste de la misma. Los valores admitidos se encuentran entre -180 y 180. |
| Ejemplo | -75.05486<br> -72.78945 |
| Elementos relacionados | geodeticDatum |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem102">**geodeticDatum** (Datum geodésico)</a>

|    |    |
| ---|--- |
| Definición | El elipsoide, datum geodésico, o sistema de referencia espacial (SRS) en el que se basan las coordenadas geográficas provistas en decimalLatitude y decimalLongitude. Se recomienda usar el código EPSG, si se conoce. Caso contrario, utilice un lenguaje controlado para el nombre o código del datum geodésico, o utilice un lenguaje controlado para el nombre o código del elipsoide, si se conoce. Si ninguno de estos se conoce, utilice el valor "Desconocido".<br><br> Aunque el estandar no es restrictivo en el datum a usar, desde el SiB Colombia se recomienda documentar las coordenadas decimales usando el datum WGS84 dado que facilita la espacialización de los datos publicados por diferentes organizaciones bajo un mismo sistema de referencia espacial, lo que minimiza el riesgo de desplazamiento de las coordenadas. |
| Ejemplo | WGS84<br> EPSG:4326<br> Desconocido |
| Elementos relacionados | decimalLatitude, decimalLongitude |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem103">**coordinateUncertaintyInMeters** (Incertidumbre de las coordenadas en metros)</a>

|    |    |
| ---|--- |
| Definición | La distancia horizontal (en metros) de la decimalLatitude y decimalLongitude provistas describiendo el círculo más pequeño que contiene la totalidad de la ubicación. Deje el valor vacío si la incertidumbre es desconocida, no se puede estimar, o no es aplicable (porque no hay coordenadas). Cero no es un valor válido para este elemento. |
| Comentarios | Documente este elemento de acuerdo a las siguientes explicaciones:<br><br> 30 (límite inferior razonable para lecturas de GPS tomadas bajo buenas condiciones después de 2020-05-01, si la precisión no fue tomada en campo)<br> 100 (Límite inferior razonable para lecturas de GPS tomadas bajo buenas condiciones antes de 2020-05-1, si la precisión no fue tomada en campo)<br> 71 (Incertidumbre para coordenadas originales tomadas bajo el sistema de coordenadas UTM teniendo 100 metros de precisión y un sistema de referencia espacial conocido)<br> 2100 |
| Ejemplo | 30<br> 100<br> 71<br> 2100 |
| Elementos relacionados | decimalLatitude, decimalLongitude |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem104">**coordinatePrecision** (Precisión de las coordenadas)</a>

|    |    |
| ---|--- |
| Definición | Una representación decimal de la precisión de las coordenadas provistas en decimalLatitude y decimalLongitude. |
| Comentarios | Documente este elemento de acuerdo a las siguientes explicaciones:<br><br> 0.00001 (Límite normal de GPS para grados decimales)<br> 0.000278 (Para coordenadas reportadas al minuto más cercano. 1/3600)<br> 0.01 (Para una coordenada decimal con dos grados decimales)<br> 1.0 (Grado más próximo) |
| Ejemplo | 0.00001<br> 0.000278<br> 0.01<br> 1.0 |
| Elementos relacionados | decimalLatitude, decimalLongitude |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem105">**pointRadiusSpatialFit** (Ajuste espacial del radio-punto)</a>

|    |    |
| ---|--- |
| Definición | La relación entre el área del radio-punto (decimalLatitude, decimalLongitude y coordinateUncertaintyInMeters) y el área de la verdadera (original, o más específica) representación espacial de la ubicación. Los valores válidos son 0, mayor que o igual a 1, o indefinido. Un valor de 1 es una coincidencia exacta o superposición de 100%. Un valor de 0 se debe utilizar si el radio-punto dado no contiene por completo la representación original. El Ajuste espacial del radio-punto no está definido (y se debe dejar en blanco) si la representación original es un punto sin incertidumbre y la georreferencia dada no es ese mismo punto (sin incertidumbre). Si tanto el original como la georreferencia dada están en el mismo punto el ajuste espacial del radio-punto es 1. |
| Ejemplo | 0<br> 1<br> 0.5708 |
| Elementos relacionados | decimalLatitude, decimalLongitude, coordinateUncertaintyInMeters |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem106">**footprintWKT** (WKT footprint)</a>

|    |    |
| ---|--- |
| Definición | Una representación Well-Known Text (WKT) de la forma (footprint, geometría) que define la ubicación. Una ubicación puede tener una representación de radio-punto (véase decimalLatitude) y una representación footprint, y pueden diferir entre sí. |
| Comentarios | Documente este elemento de acuerdo a las siguientes explicaciones:<br><br> POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20)) (Para un cuadrante con esquinas opuestas (longitud=10, latitud=20) y (longitud=11, latitud=21))<br> LINESTRING (10.689195 -74.139299, 10.689422 -74.13791) (Para un transecto de muestro con coordenadas iniciales 10.689195 -74.139299 y finales 10.689422 -74.13791) |
| Ejemplo | POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20))<br> LINESTRING (10.689195 -74.139299, 10.689422 -74.13791) |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem107">**footprintSRS** (SRS footprint)</a>

|    |    |
| ---|--- |
| Definición | El Elipsoide, datum geodésico o sistema de referencia espacial sobre el cual está referenciada la geometría en el elemento footprintWKT.<br><br> Se recomienda usar un código EPSG para el sistema de referencia si este es conocido. De lo contrario usar un nombre del sistema de referencia, datum, o elipsoide (SRS) bajo un vocabulario controlado. También es permitida la representación en Well-Known Text (WKT) del sistema de referencia espacial (SRS). No utilice este elemento para describir el SRS de decimalLatitude y decimalLongitude, incluso si es la misma que para WKT footprint - utilice el geodeticDatum en su lugar. |
| Ejemplo | EPSG:4326<br> WGS84<br> SRS GEOGCS["GCS_WGS_1984", DATUM["D_WGS_1984", SPHEROID["WGS_1984",6378137,298.257223563]], PRIMEM["Greenwich",0], UNIT["Degree",0.0174532925199433]] |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem108">**footprintSpatialFit** (Ajuste espacial de footprint)</a>

|    |    |
| ---|--- |
| Definición | La relación del área de footprint (WKT footprint) y el área de la verdadera (original, o más específica) representación espacial de la ubicación. Los valores válidos son 0, mayor que, igual a 1, o indefinido. Un valor de 1 es una coincidencia exacta o superposición de 100%. Un valor de 0 debe ser utilizado si el footprint dado no contiene la representación original completamente. El footprintSpatialFit es indefinido (y se debe dejar en blanco) si la representación original es un punto y la georreferencia dada no es ese mismo punto. Si el original y la georreferencia dada son el mismo punto, el footprintSpatialFit es 1. |
| Ejemplo | 0<br> 1 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem109">**georeferencedBy** (Georreferenciado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas, grupos u organizaciones que determinaron la georreferencia (representación espacial) para la ubicación. |
| Ejemplo | Kristina Yamamoto (MVZ)<br> Miguel B. \|  María Isabel H. |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Evento de muestreo _(Recomendado)_ |
|    |    |

<a name="elem110">**georeferencedDate** (Fecha de georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que fue georreferenciada la ubicación. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/2010-01<br> 2009-02/10<br> 2009-02-12/2009-10-08<br> 2010-01-17/18 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem111">**georeferenceProtocol** (Protocolo de georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | Una descripción o referencia a los métodos utilizados para determinar el footprint espacial, coordenadas, e incertidumbres. |
| Ejemplo | Chapman AD & Wieczorek JR (2020) Georeferencing Best Practices. Copenhagen: GBIF Secretariat. https://doi.org/10.15468/doc-gg7h-s853<br> MaNIS/HerpNet/ORNIS Georeferencing Guidelines<br> BioGeomancer |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem112">**georeferenceSources** (Fuentes de georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los mapas, gaceteros, u otros recursos utilizados para georreferenciar la ubicación, lo suficientemente específica como para permitir que cualquier persona en el futuro utilice los mismos recursos. |
| Ejemplo | USGS 1:24000 Florence Montana Quad<br> Google. (n.d.). Jardín Botánico de la Universidad de Caldas. Recuperado de:  https://goo.gl/maps/zPCiUySVnZ7CN2Vs7<br> IGAC. Cartografía básica 1:100000. Plancha 124<br> Google Maps, 2020, maps.google.com |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem113">**georeferenceVerificationStatus** (Estado de la verificación de la georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | Una descripción categórica sobre la verificación de la georreferencia usada para representar la descripción espacial de la ubicación del registro. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Inviable para georreferenciar<br> Requiere georreferenciación<br> Requiere verificación<br> Verificado por el custodio de los datos<br> Verificado por el proveedor de los datos |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem114">**georeferenceRemarks** (Comentarios de la georreferenciación)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones acerca de la determinación de la descripción espacial, los supuestos hechos que explican las adiciones formalizadas en el método referido en  georeferenceProtocol. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Distancia asumida a partir de la carretera (Autopista 101) |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

### Contexto Geológico

|    |    |    |
| ---|--- |--- |
| [**geologicalContextID**<br> (ID del contexto geológico)](#elem115) | [**earliestEonOrLowestEonothem**<br> (Eón temprano o eonotema inferior)](#elem116) | [**latestEonOrHighestEonothem**<br> (Eón tardío o eonotema superior)](#elem117) |
| [**earliestEraOrLowestErathem**<br> (Era temprana o eratema inferior)](#elem118) | [**latestEraOrHighestErathem**<br> (Era tardía o eratema superior)](#elem119) | [**earliestPeriodOrLowestSystem**<br> (Periodo temprano o sistema inferior)](#elem120) | 
| [**latestPeriodOrHighestSystem**<br> (Periodo tardío o sistema superior)](#elem121) | [**earliestEpochOrLowestSeries**<br> (Época temprana o serie inferior)](#elem122) | [**latestEpochOrHighestSeries**<br> (Época tardía o serie superior)](#elem123) |
| [**earliestAgeOrLowestStage**<br> (Edad temprana o piso inferior)](#elem124) | [**latestAgeOrHighestStage**<br> (Edad tardía o piso superior)](#elem125) | [**lowestBiostratigraphicZone**<br> (Zona bioestratigráfica inferior)](#elem126) | 
| [**highestBiostratigraphicZone**<br> (Zona bioestratigráfica superior)](#elem127) | [**lithostratigraphicTerms**<br> (Términos litoestratigráficos)](#elem128) | [**group**<br> (Grupo)](#elem129) | 
| [**formation**<br> (Formación)](#elem130) | [**member**<br> (Miembro)](#elem131) | [**bed**<br> (Capa)](#elem132) |
|    |    |    |

<br>
<br>

<a name="elem115">**geologicalContextID** (ID del contexto geológico)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el conjunto de la información asociada con un contexto geológico (la ubicación dentro de un contexto geológico, tal como estratigrafía). Puede ser un identificador único global o un identificador específico para el conjunto de datos. |
| Ejemplo | https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem116">**earliestEonOrLowestEonothem** (Eón temprano o eonotema inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del eón geocronológico más temprano o el eratema cronoestratigráfico más bajo, o el nombre informal ("Precámbrico") atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Fanerozoico<br> Proterozoico |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem117">**latestEonOrHighestEonothem** (Eón tardío o eonotema superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del eón geocronológico más tardío o el eratema cronoestratigráfico más alto posible, o el nombre informal ("Precámbrico") atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Fanerozoico<br> Proterozoico |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem118">**earliestEraOrLowestErathem** (Era temprana o eratema inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la era geocronológica más temprana o el eratema cronoestratigráfico más bajo, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Cenozoicoo<br> Mesozoico |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem119">**latestEraOrHighestErathem** (Era tardía o eratema superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la era geocronológica más tardía o el eratema cronoestratigráfico más alto posible, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Cenozoicoo<br> Mesozoico |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem120">**earliestPeriodOrLowestSystem** (Periodo temprano o sistema inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del periodo geocronológico más temprano posible o el sistema cronoestratigráfico más bajo, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Neógeno<br> Terciario<br> Cuaternario |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem121">**latestPeriodOrHighestSystem** (Periodo tardío o sistema superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del período geocronológico más tardío posible o del sistema cronoestratigráfico más alto, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Neógeno<br> Terciario<br> Cuaternario |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem122">**earliestEpochOrLowestSeries** (Época temprana o serie inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la época geocronológica más temprana o la serie cronoestratigráfica más baja posible, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Holoceno<br> Pleistoceno<br> Serie Ibexian |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem123">**latestEpochOrHighestSeries** (Época tardía o serie superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la época geocronológica más tardía posible o la serie cronoestratigráfica más alta, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Holoceno<br> Pleistoceno<br> Serie Ibexian |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem124">**earliestAgeOrLowestStage** (Edad temprana o piso inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la edad geocronológica más temprana posible o piso cronoestratigráfico más bajo, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Atlántico<br> Boreal |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem125">**latestAgeOrHighestStage** (Edad tardía o piso superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la edad geocronológica más tardía posible o piso cronoestratigráfico más alto, atribuible al horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Atlántico<br> Boreal |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem126">**lowestBiostratigraphicZone** (Zona bioestratigráfica inferior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la zona geológica bioestratigráfica más baja posible del horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Maastrichtiense |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem127">**highestBiostratigraphicZone** (Zona bioestratigráfica superior)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la zona geológica bioestratigráfica más alta posible del horizonte estratigráfico donde se recolectó el objeto catalogado. |
| Ejemplo | Blancan |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem128">**lithostratigraphicTerms** (Términos litoestratigráficos)</a>

|    |    |
| ---|--- |
| Definición | La combinación de todos los nombres litoestratigráficos de la roca de donde se colectó el objeto catalogado. |
| Ejemplo | Pleistoceno-Weichseliense |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem129">**group** (Grupo)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del grupo litoestratigráfico del cual se colectó el objeto catalogado. |
| Ejemplo | Grupo Bathurst |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem130">**formation** (Formación)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la formación litoestratigráfica de la cual se colectó el objeto catalogado. |
| Ejemplo | Formación Notch Peak<br> Formación Fillmore |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem131">**member** (Miembro)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo del miembro litoestratigráfico del cual se colectó el elemento catalogado. |
| Ejemplo | Miembro Hellnmaria |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem132">**bed** (Capa)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la capa litoestratigráfica de la cual se colectó el elemento catalogado. |
| Ejemplo | Carbón Harlem |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

### Identificación

|    |    |    |    |
| ---|--- |--- |--- |
| [**identificationID**<br> (ID de la identificación)](#elem133) | [**identifiedBy**<br> (Identificado por)](#elem134) | [**identifiedByID**<br> (ID del identificador)](#elem135) | [**dateIdentified**<br> (Fecha de la identificación)](#elem136) |
| [**identificationReferences**<br> (Referencias de la identificación)](#elem137) | [**identificationVerification<br>Status**<br> (Estado de la verificación de la identificación)](#elem138) | [**typeStatus**<br> (Tipo nomeclatural)](#elem139) | [**verbatimIdentification**<br> (Identificación original)](#elem140) |
|  [**identificationRemarks**<br> (Comentarios de la identificación)](#elem141) | [**identificationQualifier**<br> (Calificador de la identificación)](#elem142) |  |  |
|    |    |    |    |

<br>
<br>

<a name="elem133">**identificationID** (ID de la identificación)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para la identificación (el cuerpo de la información asociada con la asignación de un nombre científico) del organismo. Puede ser un identificador único global o un identificador específico para el conjunto de datos. |
| Ejemplo | 1231135<br> 10560964 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem134">**identifiedBy** (Identificado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas responsables de identificar el organismo.<br><br> Se debe mantener el mismo formato del nombre a lo largo de todos los registros y se recomienda evitar el uso de solo iniciales ya que esto genera ambigüedades para reconocer a las personas que realizaron la identificación, de ser posible siempre escriba nombres completos. Documente el nombre de las personas y evite documentar nombres de grupos u organizaciones. |
| Ejemplo | Luis Gabriel Pérez Salamanca<br> Jennifer Andrea Parra Ortíz \| Jaime Enrique Correa Sánchez |
| Elementos relacionados | identifiedByID |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_
|    |    |

<a name="elem135">**identifiedByID** (ID del identificador)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (ORCID o Wikidata) de las personas que identificaron el organismo. Mantenga el mismo orden de las personas documentadas en el elemento identifiedBy; el orden en este campo no indica una prioridad en la citación ni ningún otro tipo de relación jerárquica. |
| Ejemplo | https://orcid.org/0000-0001-6215-3617 \| https://orcid.org/0000-0003-1691-239X<br> https://www.wikidata.org/entity/Q28913658 |
| Elementos relacionados | identifiedBy |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_
|    |    |

<a name="elem136">**dateIdentified** (Fecha de la identificación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo durante la cual fue identificado taxonómicamente la observación, colecta o muestra. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_
|    |    |

<a name="elem137">**identificationReferences** (Referencias de la identificación)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|")  de las referencias (publicación, identificador único global, URI) usadas en la identificación. |
| Ejemplo | Aves del Noroeste Patagónico. Christie et al. 2004. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem138">**identificationVerificationStatus** (Estado de la verificación de la identificación)</a>

|    |    |
| ---|--- |
| Definición | Un indicador sobre el nivel de verificación de la identificación taxonómica. Puede ser un valor categórico o un porcentaje para los registros identificados con métodos genéticos. |
| Comentarios | Se recomienda el uso de categorías claras o un vocabulario controlado como el de [HISPID/ABCD](https://hiscom.rbg.vic.gov.au/wiki/Talk:HISPID/ABCD_Workshop_Executive_Summary#Verification_Level_Flag_.28vlev.29), como se muestra a continuación:<br><br> 0 - El nombre del registro no ha sido revisado por ninguna autoridad (del vocabulario HISPID/ABCD)<br> 1 - El nombre del registro se determinó por medio de comparación contra otro ejemplar (del vocabulario HISPID/ABCD)<br> 2 - El nombre del registro fue determinado por un taxónomo usando material de una colección (del vocabulario HISPID/ABCD)<br> 3 - El nombre del registro fue determinado por un taxónomo involucrado en la revisión sistemática del grupo (del vocabulario HISPID/ABCD)<br> 4 - El registros es derivado de forma asexual de un material tipo (del vocabulario HISPID/ABCD)<br> Verificado |
| Ejemplo | 0<br> 1<br> 2<br> 3<br> 4<br> Verificado<br> No verificado<br> 97.3% a género |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem139">**typeStatus** (Tipo nomeclatural)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los tipos de nomenclatura (estado del tipo, nombre científico tipificado, publicación) aplicados al organismo. Se recomienda el uso del vocabulario sugerido disponible para este elemento con traducción a español (https://tools.gbif.org/dwca-validator/vocabulary.do?id=http://rs.gbif.org/vocabulary/gbif/type_status). |
| Ejemplo | Holotipo de Ctenomys sociabilis. Pearson O. P.; y M. I. Christie. 1985. Historia Natural; 5(37):388<br> Paratipo<br> Alotipo<br> Isotipo<br> Neotipo<br> Plastotipo<br> Sintipo<br> Topotipo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem140">**verbatimIdentification** (Identificación original)</a>

|    |    |
| ---|--- |
| Definición | La identificación original del organismo (como fue tomada en campo o documentada en el voucher). Este elemento permite documentar la identificación o determinación original inalterada, incluidos los calificadores de identificación, fórmulas híbridas, incertidumbres, etc. |
| Ejemplo | Peromyscus sp.<br> Ministrymon sp. nov. 1 <br> Anser anser X Branta canadensis<br> Pachyporidae? |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_
|    |    |

<a name="elem141">**identificationRemarks** (Comentarios de la identificación)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la identificación. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Se distingue entre Anthus correndera y Anthus hellmayri basado en las longitudes comparativas de las uñas<br> Amplificación del gen 16S rRNA \| Identificación bioquímica |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_
|    |    |

<a name="elem142">**identificationQualifier** (Calificador de la identificación)</a>

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
| [**scientificName**<br> (Nombre científico)](#elem143) | [**scientificNameAuthorship**<br> (Autoría del nombre científico)](#elem144) | [**taxonID**<br> (ID del Taxón)](#elem145) | [**scientificNameID**<br> (ID del nombre científico)](#elem146) |
| [**higherClassification**<br> (Clasificación superior)](#elem147) | [**kingdom**<br> (Reino)](#elem148) | [**phylum**<br> (Filo)](#elem149) | [**class**<br> (Clase)](#elem150) |
| [**order**<br> (Orden)](#elem151) | [**family**<br> (Familia)](#elem152) | [**subfamily**<br> (Subfamilia)](#elem153) | [**genus**<br> (Género)](#elem154) | 
| [**genericName**<br> (Nombre genérico)](#elem155) | [**subgenus**<br> (Subgénero)](#elem156) | [**infragenericEpithet**<br> (Epíteto infragenérico)](#elem157) | [**specificEpithet**<br> (Epíteto Específico)](#elem158) |
| [**infraspecificEpithet**<br> (Epíteto infraespecífico)](#elem159) | [**cultivarEpithet**<br> (Epíteto cultivar)](#elem160) | [**taxonRank**<br> (Categoría del taxón)](#elem161) | [**verbatimTaxonRank**<br> (Categoría original del taxón)](#elem162) |
| [**vernacularName**<br> (Nombre común)](#elem163) | [**taxonomicStatus**<br> (Estado taxonómico)](#elem164) | [**acceptedNameUsage**<br> (Nombre aceptado usado)](#elem165) | [**acceptedNameUsageID**<br> (ID del nombre aceptado usado)](#elem166) |
| [**parentNameUsage**<br> (Nombre parental usado)](#elem167) | [**parentNameUsageID**<br> (ID del Nombre Parental usado)](#elem168) | [**originalNameUsage**<br> (Nombre original usado)](#elem169) | [**originalNameUsageID**<br> (ID del Nombre original usado)](#elem170) |
| [**nameAccordingTo**<br> (Nombre de acuerdo con)](#elem171) | [**nameAccordingToID**<br> (ID del nombre de acuerdo con)](#elem172) | [**namePublishedIn**<br> (Nombre publicado en)](#elem173) | [**namePublishedInID**<br> (ID del nombre publicado en)](#elem174) |
| [**namePublishedInYear**<br> (Nombre publicado en el año)](#elem175) | [**taxonConceptID**<br> (ID del concepto del taxón)](#elem176) | [**nomenclaturalCode**<br> (Código nomenclatural)](#elem177) | [**nomenclaturalStatus**<br> (Estado nomenclatural)](#elem178) |
| [**taxonRemarks**<br> (Comentarios del taxón)](#elem179) |  |  |  |
|    |    |    |    |    |

<br>
<br>

<a name="elem143">**scientificName** (Nombre científico)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico canónico (sin la autoría) correspondiente a la categoría taxonómica a la que se logró la determinación del organismo observado o colectado. El nombre debe ser congruente con el elemento taxonRank, de modo que se informe a que nivel (especie, género, familia, etc.) se encuentra el nombre documentado. |
| Comentarios| Para tener en cuenta:<br><br> - El nombre científico puede pertenecer a cualquier categoría taxonómica (reino, filo, clase, orden, familia, género, especie entre otros), en ningún caso es obligatorio la identificación a nivel de especie.<br> - No debe documentar la autoría del taxón en este elemento, para ello utilice el elemento scientificNameAuthorship.<br> - No debe documentar calificadores de identificación (“cf.”, “aff.”, etc.), para ello utilice el elemento identificationQualifier y deje en el nombre científico la categoría superior sobre la cual se tiene certeza.<br> - No debe documentar abreviaciones que no dan cuenta de el nombre específico o hacen referencia  a morfotipos (“sp.”, “sp1.”, “spp.”), para ello utilice el elemento verbatimTaxonRank.<br><br> *Aunque oficialmente scientificName se define como el "nombre científico completo, con información de autoría y fecha si se conoce", desde el SiB Colombia se recomienda documentar solo el nombre canónico ya que hemos notado un detrimento de la calidad de este elemento por errores de tipeo cuando se incluye siguiendo la definición oficial. |
| Ejemplo | Coleoptera<br> Bacteria<br> Ctenomys sociabilis<br> Abrus pulchellus subsp. tenuiflorus |
| Elementos relacionados | taxonRank, scientificNameAuthorship, identificationQualifier, verbatimTaxonRank |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Lista de chequeo _(Obligatorio)_
|    |    |

<a name="elem144">**scientificNameAuthorship** (Autoría del nombre científico)</a>

|    |    |
| ---|--- |
| Definición | La información de autoría correspondiente al scientificName, usando el formato acorde a las convenciones del Código Nomenclatural aplicable. |
| Ejemplo | (Torr.) J.T. Howell<br> (Martinovský) Tzvelev<br> (Györfi, 1952) |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem145">**taxonID** (ID del Taxón)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único global del taxón (datos asociados a la clasificación del Taxón) de acuerdo al nombre científico documentado en el elemento scientificName. Puede ser un identificador único global o un identificador específico para el conjunto de datos.<br><br> Este puede ser obtenido de bases de datos o catálogos taxonómicos globales. |
| Ejemplo | (gbif.org/species/3056437<br> urn:lsid:marinespecies.org:taxname:124821<br> urn:lsid:gbif.org:usages:32567<br> 8fa58e08-08de-4ac1-b69c-1235340b7001 |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Obligatorio)_
|    |    |

<a name="elem146">**scientificNameID** (ID del nombre científico)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de los detalles de la nomenclatura (no taxonómica) de acuerdo al nombre científico documentado en el elemento scientificName.<br><br><br> Este puede ser obtenido de catálogos taxonómicos globales. |
| Ejemplo | (urn:lsid:ipni.org:names:37829-1:1.3<br> urn:lsid:marinespecies.org:taxname:493567 |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Condicinal)_. Obligatorio cuando el registro es marino<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem147">**higherClassification** (Clasificación superior)</a>

|    |    |
| ---|--- |
| Definición | Una lista de los nombres de los taxones inmediatamente superiores a la categoría del taxón del scientificName. Se recomienda ordenar la lista comenzando con la categoría más alta y separando los nombres de cada categoría, con una barra vertical "\|". Permite documentar categorías taxonómicas que no incluye el estándar (suborden, superfamilia, etc). |
| Ejemplo | Animalia \| Chordata \| Vertebrata \| Mammalia \| Theria \| Eutheria \| Rodentia \| Hystricognatha \| Hystricognathi \| Ctenomyidae \| Ctenomyini \| Ctenomys<br> Animalia \| Arthropoda \| Arachnida \| Araneae \| Paratropididae \| Paratropis |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem148">**kingdom** (Reino)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del reino al que pertenece el taxón. |
| Ejemplo | Animalia<br> Plantae<br> Bacteria<br> Chromista<br> Fungi<br> Protozoa<br> Archaea |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem149">**phylum** (Filo)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del filo o división al que pertenece el taxón. |
| Ejemplo | Chordata<br> Bryophyta |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem150">**class** (Clase)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo de la clase al que pertenece el taxón. |
| Ejemplo | Mammalia<br> Hepaticopsida |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem151">**order** (Orden)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del orden al que pertenece el taxón. |
| Ejemplo | Carnivora<br> Monocleales |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem152">**family** (Familia)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo de la familia al que pertenece el taxón. |
| Ejemplo | Felidae<br> Monocleaceae |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem153">**subfamily** (Subfamilia)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo de la subfamilia al que pertenece el taxón. |
| Ejemplo | Periptyctinae<br> Orchidoideae<br> Sphindociinae |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |


<a name="elem154">**genus** (Género)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del género al que pertenece el taxón. |
| Ejemplo | Puma<br> Monoclea |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem155">**genericName** (Nombre genérico)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del género no aceptado al que pertenece el taxón. |
| Comentarios | El elemento genericName solo debe usarse para combinaciones como se muestra a continuación:<br><br> Felis (para el scientificName "Felis concolor", con los valores correspondientes de "Puma concolor" en acceptNameUsage y "Puma" en genus). |
| Ejemplo | Felis |
| Elementos relacionados | scientificName, acceptNameUsage, genus |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem156">**subgenus** (Subgénero)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico completo del subgénero al que pertenece el taxón. Se debe incluir el género para evitar la confusión de homonimia. |
| Ejemplo | Strobus (Pinus)<br> Puma (Puma)<br> Loligo (Amerigo)<br> Hieracium subgen. Pilosella |
| Elementos relacionados | genus |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem157">**infragenericEpithet** (Epíteto infragenérico)</a>

|    |    |
| ---|--- |
| Definición | El nombre científico del epíteto infragenérico (por encima de la especie, pero por debajo del género) al que pertenece el taxón. |
| Comentarios | Se usa por ejemplo para secciones en botánica como se muestra a continuación:<br><br> Cracca (para scientificName Vicia sect. Cracca |
| Ejemplo | Cracca |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem158">**specificEpithet** (Epíteto Específico)</a>

|    |    |
| ---|--- |
| Definición | El nombre del epíteto específico presente en el scientificName cuando la determinación se hizo hasta especie u otra categoría menor. |
| Comentarios | Se usa por ejemplo para secciones en botánica como se muestra a continuación:<br><br> Cracca (para scientificName Vicia sect. Cracca |
| Ejemplo | concolor<br> gottsche |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem159">**infraspecificEpithet** (Epíteto infraespecífico)</a>

|    |    |
| ---|--- |
| Definición | El nombre del epíteto infraespecífico presente en el scientificName cuando la determinación se hizo con la categoría de taxón más baja o más especifica por debajo del epíteto específico (parte terminal del nombre), excluyendo cualquier otra denominación de categoría. |
| Comentarios | Se usa por ejemplo para secciones en botánica como se muestra a continuación:<br><br> Cracca (para scientificName Vicia sect. Cracca |
| Ejemplo | concolor<br> oxyadenia<br> sayi |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem160">**cultivarEpithet** (Epíteto cultivar)</a>

|    |    |
| ---|--- |
| Definición | El nombre de un cultivar, grupo de cultivares, o grex (horticultura) que sigue al nombre científico.<br><br> De acuerdo con las Reglas del Código de Plantas Cultivadas, el nombre de un cultivar consiste en un nombre botánico seguido de un epíteto de cultivar. |
| Comentarios | Documentar de acuerdo a como se muestra a continuación:<br><br> King Edward (para el scientificName "Solanum tuberosum 'King Edward'" y taxonRank "cultivar")<br> Mishmiense (para el scientificName "Rhododendron boothii Mishmiense Group" y taxonRank "grupo de cultivares")<br> Atlantis (para scientificName "Paphiopedilum Atlantis grex" y taxonRank "grex"). |
| Ejemplo | King Edward<br> Mishmiense<br> Atlantis |
| Elementos relacionados | scientificName, taxonRank |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem161">**taxonRank** (Categoría del taxón)</a>

|    |    |
| ---|--- |
| Definición | La categoría taxonómica del nombre más específico presente en el scientificName. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Reino<br> Subreino<br> Filo<br> División<br> Subfilo<br> Subdivisión<br> Clase<br> Subclase<br> Orden<br> Suborden<br> Familia<br> Subfamilia<br> Tribu<br> Subtribu<br> Género<br> Subgénero<br> Sección<br> Subsección<br> Serie<br> Subserie<br> Especie<br> Subespecie<br> Variedad<br> Subvariedad<br> Forma<br> Subforma |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem162">**verbatimTaxonRank** (Categoría original del taxón)</a>

|    |    |
| ---|--- |
| Definición | La categoría taxonómica del nombre más específico tal y como aparece en el registro original. Se utiliza para documentar abreviaciones que dan cuenta de incertidumbres o morfotipos en el registro. |
| Ejemplo | sp1.<br> sp2.<br> Morfotipo1.<br> sub-lesus<br> prole<br> apomict<br> spp. |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem163">**vernacularName** (Nombre común)</a>

|    |    |
| ---|--- |
| Definición | El nombre o nombres comunes del taxón (en una fila continua y separada por una barra vertical "\|"). |
| Ejemplo | Cóndor Andino<br> Águila Americana<br> Buitre \| Chulo |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_<br> Lista de chequeo _(Recomendado)_
|    |    |

<a name="elem164">**taxonomicStatus** (Estado taxonómico)</a>

|    |    |
| ---|--- |
| Definición | El estado taxonómico que define el uso del scientificName de acuerdo a un árbol taxonómico u opinión de experto. |
| Ejemplo | Inválido<br> Válido<br> Aceptado<br> Sinónimo<br> Sinónimo homotípico<br> Sinónimo heterotípico<br> Ambiguo<br> Mal aplicado |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem165">**acceptedNameUsage** (Nombre aceptado usado)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo, con autoría e información de fecha si se conoce, del taxón actualmente válido (zoológico) o aceptado (botánico) cuando el nombre documentado en scientificName no corresponda al nombre válido o aceptado. |
| Ejemplo | Tamias minimus Bachman, 1839 |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem166">**acceptedNameUsageID** (ID del nombre aceptado usado)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el acceptedNameUsage (significado del nombre, documentado de acuerdo con alguna fuente) del taxón actualmente válido (zoológico) o aceptado (botánico).<br><br> Este elemento debe usarse cuando el elemento scientificName hace referencia a un sinónimo o a un nombre ambiguo mal aplicado, para dar claridad sobre el taxón válido al que hace referencia. <br><br> Este puede ser obtenido de bases de datos o catálogos taxonómicos globales. |
| Ejemplo | gbif.org/species/2435099<br> tsn:552479<br> urn:lsid:ipni.org:names:320035-2 |
| Elementos relacionados | acceptedNameUsage |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem167">**parentNameUsage** (Nombre parental usado)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo, con autoría e información de fecha si se conoce, del taxón parental directo válido (zoológico) o aceptado (botánico), más próximo de nivel superior (en una clasificación) del elemento más específico presente en el scientificName. |
| Ejemplo | Rubiaceae<br> Arcytophyllum Willd.<br> Testudinae |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem168">**parentNameUsageID** (ID del Nombre Parental usado)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el uso del nombre (significado del nombre, documentado de acuerdo con alguna fuente) del taxón parental directo del taxón indicado en el scientificName.<br><br> Por ejemplo si el scientificName corresponde a una especie, el parentNameUsageID corresponder al nombre científico del género si este hace referencia a un sinónimo o a un nombre ambiguo mal aplicado<br><br> Este puede ser obtenido de bases de datos o catálogos taxonómicos globales. |
| Ejemplo | gbif.org/species/2435099<br> tsn:552479<br> urn:lsid:ipni.org:names:320035-2 |
| Elementos relacionados | parentNameUsage |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem169">**originalNameUsage** (Nombre original usado)</a>

|    |    |
| ---|--- |
| Definición | El nombre del taxón, con autoría e información de fecha si se conoce, tal como apareció originalmente cuando se estableció por primera vez bajo las reglas del nomenclaturalCode asociado. El basiónimo (botánica) o basónimo (bacteriología) correspondiente al scientificName o el homónimo anterior de los nombres sustituidos. |
| Ejemplo | Gasterosteus saltatrix Linnaeus 1768 |
| Elementos relacionados | scientificName, nomeclaturalCode |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem170">**originalNameUsageID** (ID del Nombre original usado)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el uso del nombre (significado del nombre, documentado de acuerdo con alguna fuente) en el que se estableció originalmente el scientificName, bajo las reglas del nomenclaturalCode asociado (el protónimo en zoología, basiónimo en botánica).<br><br> Este puede ser obtenido de bases de datos o catálogos taxonómicos globales. |
| Ejemplo | gbif.org/species/2435099<br> tsn:552479<br> urn:lsid:ipni.org:names:320035-2 |
| Elementos relacionados | originalNameUsage |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem171">**nameAccordingTo** (Nombre de acuerdo con)</a>

|    |    |
| ---|--- |
| Definición | La referencia a la fuente en la que está definida o implícita la definición conceptual del taxón documentado en scientificName, tradicionalmente representado por el Latín "sensu" o "sec." (de secundum, que significa "según"). Para los taxones que resultan de las identificaciones, una referencia a las claves, monografías, expertos y otras fuentes debe ser provista. |
| Ejemplo | Franz NM, Cardona-Duque J (2013) Description of two new species and phylogenetic reassessment of Perelleschus Wibmer & O’Brien, 1986 (Coleoptera:<br> Curculionidae), with a complete taxonomic concept history of Perelleschus sec. Franz & Cardona-Duque, 2013. Syst Biodivers. 11: 209–236. |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem172">**nameAccordingToID** (ID del nombre de acuerdo con)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la fuente/publicación en la que está definida o implícita la definición conceptual del taxón específico. Véase nameAccordingTo.<br><br> Este término debe usarse para referirse al ID de taxón de un registro de taxón que representa la combinación original del nombre (el protónimo en zoología, el basiónimo en botánica).  |
| Ejemplo | doi:10.1016/S0269-915X(97)80026-2<br> 19thcenturyscience.org/HMSC/HMSC-Reports/Zool-40/README.htm |
| Elementos relacionados | nameAccordingTo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem173">**namePublishedIn** (Nombre publicado en)</a>

|    |    |
| ---|--- |
| Definición | Una referencia para la publicación en que se estableció originalmente el taxón presente en el scientificName, bajo las reglas del nomeclaturalCode asociado. |
| Ejemplo | Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388; Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886 |
| Elementos relacionados | scientificName, nomeclaturalCode |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem174">**namePublishedInID** (ID del nombre publicado en)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la publicación en que se estableció originalmente el taxón presente en el scientificName, bajo las reglas del nomeclaturalCode asociado. |
| Ejemplo | doi:10.1016/S0269-915X(97)80026-2<br> 19thcenturyscience.org/HMSC/HMSC-Reports/Zool-40/README.htm |
| Elementos relacionados | namePublishedIn |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem175">**namePublishedInYear** (Nombre publicado en el año)</a>

|    |    |
| ---|--- |
| Definición | El año de cuatro dígitos en el que se publicó el taxón presente en el scientificName. |
| Ejemplo | 1915<br> 2008 |
| Elementos relacionados | namePublishedIn |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem176">**taxonConceptID** (ID del concepto del taxón)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el concepto taxonómico al que se refiere el registro, no para los detalles de nomenclatura de un taxón. |
| Ejemplo | urn:lsid:zoobank.org:act:040832DB-2A58-4EFE-B234-AEBF222586FC |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem177">**nomenclaturalCode** (Código nomenclatural)</a>

|    |    |
| ---|--- |
| Definición | El código nomenclatural (o códigos en el caso de un nombre ambireinal) en virtud del cual se construye el scientificName. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | ICBN<br> ICZN<br> BC<br> ICNCP<br> BioCode<br> PhyloCode |
| Elementos relacionados | scientificName |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem178">**nomenclaturalStatus** (Estado nomenclatural)</a>

|    |    |
| ---|--- |
| Definición | El estado nomenclarural en la publicación original del scientificName y su conformidad con las normas pertinentes de nomenclatura. Está basado en las definiciones del nomenclaturalCode en uso y no requiere una opinión taxonómica. |
| Ejemplo | nom. ambig.<br> nom. illeg.<br> nom. subnud. |
| Elementos relacionados | scientificName, nomenclaturalCode |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_
|    |    |

<a name="elem179">**taxonRemarks** (Comentarios del taxón)</a>

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
| [**resourceRelationshipID**<br> (ID de la relación de los recursos)](#elem180) | [**resourceID**<br> (ID del recurso)](#elem181) | [**relatedResourceID**<br> (ID del recurso relacionado)](#elem182) | 
| [**relationshipOfResource**<br> (Tipo de relación del recurso)](#elem183) | [**relationshipOfResourceID**<br> (ID del tipo de relación del recurso)](#elem184) | [**relationshipAccordingTo**<br> (Relación de acuerdo con)](#elem185) |
| [**relationshipEstablishedDate**<br> (Fecha en que se estableció la relación)](#elem186) | [**relationshipRemarks**<br> (Comentarios de la relación)](#elem187) |  |
|    |    |    |

<br>
<br>

<a name="elem180">**resourceRelationshipID** (ID de la relación de los recursos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para una instancia de relación entre un recurso (resourceID, el sujeto) y otro (relatedResource, el objeto).<br><br> En caso de no contar con un identificador, se puede construir a partir de la concatenación de los occurrenceID separados por /. |
| Ejemplo | UANDES:ANDES-M:20054/UANDES:ANDES-E:1054 |
| Elementos relacionados | occurrenceID, resourceID, relatedResourceID |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="elem181">**resourceID** (ID del recurso)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del recurso que es sujeto de la relación. Si el registro se encuentra publicado, se recomienda documentar el mismo occurrenceID o una URL asociada. |
| Ejemplo | IAvH:CBB:PARAMOS:ANFIBIA:MUESTRA:001<br> UANDES:ANDES-M:20054<br> urn:uuid:bab4d024-b931-42b0-aa34-88e7d7f8a747 |
| Elementos relacionados | occurrenceID |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="elem182">**relatedResourceID** (ID del recurso relacionado)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el recurso biológico que es el objeto de la relación. Si el registro se encuentra publicado, se recomienda documentar el mismo occurrenceID o una URL asociada. |
| Ejemplo | IAvH:CBB:PARAMOS:ANFIBIA:ESPECIMENPRESERVADO:001<br> UANDES:ANDES-E:1054<br> urn:catalog:Berggren:KB07001 |
| Elementos relacionados | occurrenceID |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="elem183">**relationshipOfResource** (Tipo de relación del recurso)</a>

|    |    |
| ---|--- |
| Definición | La relación del objeto respecto al sujeto. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Duplicado de<br> Madre de<br> Secuencia de<br> Huésped de<br> Tejido de<br> Sinonimia válida de<br> Ubicado dentro de<br> Muestra de<br> Parásito de<br> Cría de<br> Simbionte con |
| Elementos relacionados | relationshipOfResourceID |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="elem184">**relationshipOfResourceID** (ID del tipo de relación del recurso)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para la relación del objeto respecto al sujeto (relationshipOfResource). |
| Comentarios | Se recomienda hacer uso de los identificadores de los términos en vocabularios controlados, como la ontología de relación OBO., como se muestra a continuación:<br><br> http://purl.obolibrary.org/obo/RO_0002456 (para la relación "polinizado por")<br> https://www.inaturalist.org/observation_fields/879 (para la relación "comido por") |
| Ejemplo | http://purl.obolibrary.org/obo/RO_0002456br> https://www.inaturalist.org/observation_fields/879 |
| Elementos relacionados | relationshipOfResource |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="elem185">**relationshipAccordingTo** (Relación de acuerdo con)</a>

|    |    |
| ---|--- |
| Definición | La fuente (persona, organización, publicación, referencia) que establece la relación entre los dos registros. |
| Ejemplo | Paola Andrea Salamanca Torres<br> Luis Alejandro Morales Mina |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="elem186">**relationshipEstablishedDate** (Fecha en que se estableció la relación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se estableció la relación. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/2010-01<br> 2009-02/10<br> 2009-02-12/2009-10-08<br> 2010-01-17/18 |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="elem187">**relationshipRemarks** (Comentarios de la relación)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la relación entre los dos registros. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Madre y cría colectadas del mismo nido<br> Polinizador capturado en el acto<br> Ejemplar bien conservado para extracción de ADN<br> Parásito que genera enfermedad mortal para la especie |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

### Medidas o Hechos Extendida

|    |    |    |
| ---|--- |--- |
| [**occurrenceID**<br> (ID del Registro biológico)](#elem188) | [**measurementID**<br> (ID de la medida)](#elem189) | [**measurementType**<br> (Tipo de medida)](#elem190) | 
| [**measurementTypeID**<br> (ID del tipo de medida)](#elem191) | [**measurementValue**<br> (Valor de la medida)](#elem192) | [**measurementValueID**<br> (ID del valor de la medida)](#elem193) |
| [**measurementAccuracy**<br> (Precisión de la medida)](#elem194) | [**measurementUnit**<br> (Unidad de la medida)](#elem195) | [**measurementUnitID**<br> (ID de la unidad de la medida)](#elem196) |
| [**measurementDeterminedDate**<br> (Fecha de la determinación de la medida)](#elem197) | [**measurementDeterminedBy**<br> (Medida tomada por)](#elem198) | [**measurementMethod**<br> (Método de medida)](#elem199) |
| [**measurementRemarks**<br> (Comentarios de la medida)](#elem200) |  |  |
|    |    |    |

<br>
<br>

<a name="elem188">**occurrenceID** (ID del Registro biológico)</a>

|    |    |
| ---|--- |
| Definición | El identificador del registro biológico asociado a la medida o hecho. Se puede utilizar para asociar más de una medida con el mismo registro biológico. |
| Ejemplo | ILVO_macro_aggregate_59206<br> ANH-I:2008:EH253:SUP:MHNMC:Consec.71957:Zoo1 |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="elem189">**measurementID** (ID de la medida)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para la medida o hecho. Puede ser un identificador único global o un identificador específico para el conjunto de datos. El identificador puede construirse a partir de tesauros específicos como NERC (https://www.bodc.ac.uk/resources/vocabularies/vocabulary_search/) comúnmente usado para datos marinos.<br><br> Puede construirse a partir de la siguiente estructura: [measurementTypeID]:[consecutivo] |
| Ejemplo | P01/current/AREABEDS:001 |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="elem190">**measurementType** (Tipo de medida)</a>

|    |    |
| ---|--- |
| Definición | El nombre de la medida, hecho o característica. Puede ser abiótica, biótica o relacionada al protocolo de muestreo. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | **Bióticos**<br> Estado fitosanitario<br> Peso<br> Longitud total<br> Descripción gónadas<br> Largo de cuerpo<br> Grupo funcional<br> **Abióticos**<br> pH<br> Clima<br> Longitud del tramo muestreado<br> Nombre del instrumento de muestreo<br> Temperatura<br> Superficie del área<br> Altura de la orilla<br> Tamaño del grano<br> Color de muestra |
| Elementos relacionados | measurementTypeID, measurementValue, measurementUnit |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="elem191">**measurementTypeID** (ID del tipo de medida)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el valor documentado en measurementType (Identificador único global, URI), este identificador debe ser un vocabulario controlado. |
| Comentarios | Se recomienda el uso del vocabulario NERC (https://www.bodc.ac.uk/resources/vocabularies/vocabulary_search/) para datos marinos, como se muestra a continuación:<br><br> http://vocab.nerc.ac.uk/collection/P01/current/LENTRACK/ (= Longitud del tramo muestreado)<br> http://vocab.nerc.ac.uk/collection/Q01/current/Q0100002/ (= Nombre del instrumento de muestreo)<br> P01/current/AREABEDS (= Área del fondo marino muestreada) |
| Ejemplo | http://vocab.nerc.ac.uk/collection/P01/current/LENTRACK/<br> http://vocab.nerc.ac.uk/collection/Q01/current/Q0100002/<br> P01/current/AREABEDS |
| Elementos relacionados | measurementType |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="elem192">**measurementValue** (Valor de la medida)</a>

|    |    |
| ---|--- |
| Definición | El valor de la medida, hecho o característica documentada en el elemento measurementType. |
| Ejemplo | **Bióticos**<br> Bueno<br> Agar sangre<br> 80.1<br> 1.20<br> 38<br> C3743<br> Gónadas en estado inmaduro, con tamaño uniforme<br> **Abióticos**<br> 7.8<br> Nublado<br> 30<br> Balde |
| Elementos relacionados | measurementValueID, measurementType |
| _(Obligatoriedad)_ | _(Obligatorio)_
|    |    |

<a name="elem193">**measurementValueID** (ID del valor de la medida)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para los hechos documentados en measurementValue. Este puede referenciar un vocabulario controlado o una metodología en un artículo con un DOI. Cuando el campo measurementValue contiene una medida y no un hecho, debe dejarse vacío. |
| Comentarios | Se recomienda el uso del vocabulario NERC (https://www.bodc.ac.uk/resources/vocabularies/vocabulary_search/), como se muestra a continuación:<br><br> http://vocab.nerc.ac.uk/collection/L22/current/TOOL0536/ (= Balde)<br> L22/current/TOOL0653/ (= Muestreo Van Veen) |
| Ejemplo | http://vocab.nerc.ac.uk/collection/L22/current/TOOL0536/<br> L22/current/TOOL0653/ |
| Elementos relacionados | measurementValue |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="elem194">**measurementAccuracy** (Precisión de la medida)</a>

|    |    |
| ---|--- |
| Definición | La descripción de los errores potenciales asociados con el measurementValue. |
| Ejemplo | 0.01<br> Distribución normal con variación de 2 m |
| Elementos relacionados | measurementValue |
| _(Obligatoriedad)_ | _(Opcional)_
|    |    |

<a name="elem195">**measurementUnit** (Unidad de la medida)</a>

|    |    |
| ---|--- |
| Definición | Las unidades asociadas al measurementValue. Sólo aplica para variables cuantitativas. |
| Comentarios | La práctica recomendada es utilizar el Sistema Internacional de Unidades (SI) (http://www.sc.ehu.es/sbweb/fisica_/unidades/unidades/unidades_1.html), como se muestra a continuación:<br><br> g (= Gramos)<br> m (= Metros)<br> °C (= Grados Centígrados) |
| Ejemplo | g<br> m<br> °C<br> cm<br> s |
| Elementos relacionados | measurementUnitID, measurementValue |
| _(Obligatoriedad)_ | _(Condicional)_. Obligatorio para variables cuantitativas |
|    |    |

<a name="elem196">**measurementUnitID** (ID de la unidad de la medida)</a>

|    |    |
| ---|--- |
| Definición | Un identificador para el valor documentado en measurementUnit (Identificador único global, URI), este identificador debe ser un vocabulario controlado. |
| Comentarios | Se recomienda el uso del vocabulario NERC (https://www.bodc.ac.uk/resources/vocabularies/vocabulary_search/) para datos marinos, como se muestra a continuación:<br><br> P06/current/ULAA/ (= Metros)<br> <http://vocab.nerc.ac.uk/collection/P06/current/UGRM (= Gramos)<br> http://vocab.nerc.ac.uk/collection/P06/current/UMSQ/ (= Metros cuadrados) |
| Ejemplo | P06/current/ULAA/<br> http://vocab.nerc.ac.uk/collection/P06/current/UGRM<br> http://vocab.nerc.ac.uk/collection/P06/current/UMSQ/ |
| Elementos relacionados | measurementUnit |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem197">**measurementDeterminedDate** (Fecha de la determinación de la medida)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se realizó la medida o hecho. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/2010-01<br> 2009-02/10<br> 2009-02-12/2009-10-08<br> 2010-01-17/18 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem198">**measurementDeterminedBy** (Medida tomada por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por "\|") de los nombres de las personas, grupos u organizaciones que determinan el measuremenetValue. |
| Ejemplo | Javier Andrés de la Torre Sánchez<br> Julie Woodruff Paerson \| Eileen Lacey Smith |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem199">**measurementMethod** (Método de medida)</a>

|    |    |
| ---|--- |
| Definición | Una descripción o referencia (publicación, URI) del método o protocolo utilizado para determinar la medida, hecho o característica. |
| Ejemplo | Polígono alrededor de las madrigueras<br> Altímetro barométrico |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem200">**measurementRemarks** (Comentarios de la medida)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o notas que acompañan a la medida o hecho. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Falta la punta de la cola<br> Largo del pico por encima del promedio<br> Aleta dorsal mordida<br> Ejemplar conservado en buen estado<br> El medio de cultivo es modificado |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Multimedia Simple

|    |    |    |    |
| ---|--- |--- |--- |
| [**type**<br> (Tipo)](#elem201) | [**format**<br> (Formato)](#elem202) | [**identifier**<br> (Identificador)](#elem203) | [**references**<br> (Referencias)](#elem204) |
| [**title**<br> (Título)](#elem205) | [**description**<br> (Descripción)](#elem206) | [**created**<br> (Fecha de creación)](#elem207) | [**creator**<br> (Creador)](#elem208) |
| [**contributor**<br> (Contribuidor)](#elem209) | [**publisher**<br> (Publicador)](#elem210) | [**audience**<br> (Audiencia)](#elem211) | [**source**<br> (Fuente)](#elem212) |
| [**license**<br> (Licencia)](#elem213) | [**rightsHolder**<br> (Titular de los derechos)](#elem214) | [**datasetID**<br> (ID del conjunto de datos)](#elem215) |  |
|    |    |    |    |

<br>
<br>

<a name="elem201">**type** (Tipo)</a>

|    |    |
| ---|--- |
| Definición | El tipo de recurso multimedia. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
| [Vocabulario controlado](#elem376) | StillImage<br> MovingImage<br> Sound<br> PhysicalObject<br> Event<br><br> (Para mas opciones, se puede consultar el vocabulario controlado completo en la siguiente URL: [https://tools.gbif.org/dwca-validator/vocabulary.do?id=http://dublincore.org/documents/dcmi-type-vocabulary/](https://tools.gbif.org/dwca-validator/vocabulary.do?id=http://dublincore.org/documents/dcmi-type-vocabulary/)) |
|    |    |

<a name="elem202">**format** (Formato)</a>

|    |    |
| ---|--- |
| Definición | Formato en el que se encuentra la información multimedia asociada. Es recomendado usar un formato que esté registrado en IANA [(http://www.iana.org/assignments/media-types/media-types.xhtml)](http://www.iana.org/assignments/media-types/media-types.xhtml). |
| Ejemplo | jpeg<br> tiff<br> mp4<br> mp3<br> MPV<br> 3gp |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem203">**identifier** (Identificador)</a>

|    |    |
| ---|--- |
| Definición | Enlace a la página que muestre la imagen o sus metadatos. |
| Ejemplo | https://live.staticflickr.com/65535/49971003886_9fb3569bf8_b.jpg<br> https://www.xeno-canto.org/sounds/uploaded/DGVLLRYDXS/ZONCAP54.mp3<br> https://web.corral.tacc.utexas.edu/MVZ/audio/mp3/222_6560.mp3<br> https://static.inaturalist.org/sounds/15665.3gp?1506898805 |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem204">**references** (Referencias)</a>

|    |    |
| ---|--- |
| Definición | Una página web html que muestre la imagen o sus metadatos. |
| Ejemplo | https://www.flickr.com/photos/victorsaavedramartinez/with/1866107071/<br> https://www.flickr.com/photos/arthur_chapman/4094078241/<br> https://ww2.bgbm.org/herbarium/specimen.cfm?SpecimenPK=103730<br> https://monarch.calacademy.org/collections/individual/index.php?occid=700648&clid=0 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem205">**title** (Título)</a>

|    |    |
| ---|--- |
| Definición | El título del objeto multimedia. |
| Ejemplo | Andorinha-do-rio (Tachycineta albiventer)<br> Puma chileno<br> MCZ:Herp:R-17603 Caiman crocodilus fuscus<br> 125692 Dircenna olyras d IN |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem206">**description** (Descripción)</a>

|    |    |
| ---|--- |
| Definición | Descripción textual y corta de la información multimedia. |
| Ejemplo | Hembra de Tachycineta albiventer fotografiada en el Amazonas, Colombia, en noviembre de 2010<br> Puma chileno juvenil reposando, Chile, diciembre 2020 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem207">**created** (Fecha de creación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se obtuvo la información multimedia. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem208">**creator** (Creador)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas que tomaron la información multimedia. |
| Ejemplo | Adriana Catalina Saenz Espinoza<br> Field Museum of Natural History - Fishes Division \| Kevin Andrew Swagel |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem209">**contributor** (Contribuidor)</a>

|    |    |
| ---|--- |
| Definición | Cualquier persona que haya contribuido a la recolección, edición o procesamiento de la información multimedia. |
| Ejemplo | Camilo David Paez Zapata |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem210">**publisher** (Publicador)</a>

|    |    |
| ---|--- |
| Definición | Entidad responsable de hacer la información multimedia pública. |
| Ejemplo | Herbario de la Universidad Icesia<br> Royal Botanic Garden Edinburgh |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem211">**audience** (Audiencia)</a>

|    |    |
| ---|--- |
| Definición | La audiencia a quien va dirigida la información multimedia. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Expertos<br> Académicos<br> Científicos<br> Ornitólogos<br> Público en general |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem212">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Si el elemento multimedia se derivó o se tomó de otra fuente, esta es la referencia a ese recurso. Por ejemplo, un libro del que se escaneó una imagen o el proveedor original de una foto / gráfico, como agencias de fotografía. |
| Ejemplo | https://proaves.org/listado-de-las-aves-de-colombia/ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem213">**license** (Licencia)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos, licencias o permisos que establece el publicador sobre el uso de la información multimedia. Se recomienda hacer uso de licencias abiertas o creative commons. |
| Ejemplo | http://creativecommons.org/licenses/by-nc-sa/2.0/deed.en |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem214">**rightsHolder** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro multimedia. |
| Ejemplo | J002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/v24ppe |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem215">**datasetID** (Titular de los derechos)</a>

|    |    |
| ---|--- |
| Definición | Persona u organización propietaria o administradora de los derechos de la información multimedia. |
| Ejemplo | Jardín Botánico de Quindío |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |


### Referencias de Literatura

|    |    |    |    |
| ---|--- |--- |--- |
| [**identifier**<br> (Identificador)](#elem216) | [**bibliographicCitation**<br> (Citación bibliográfica)](#elem217) | [**title**<br> (Título)](#elem218) | [**creator**<br> (Creador)](#elem219) |
| [**date**<br> (Fecha)](#elem220) | [**source**<br> (Fuente)](#elem221) | [**description**<br> (Descripción)](#elem222) | [**subject**<br> (Tema)](#elem223) |
| [**language**<br> (Idioma)](#elem224) | [**rights**<br> (Derechos)](#elem225) | [**taxonRemarks**<br> (Comentarios del taxón)](#elem226) | [**type**<br> (Tipo)](#elem227) |
| [**datasetID**<br> (ID del conjunto de datos)](#elem228) |  |  |  |
|    |    |    |    |

<br>
<br>

<a name="elem216">**identifier** (Identificador)</a>

|    |    |
| ---|--- |
| Definición | Un enlace a la referencia, puede ser un DOI, ISBN, URI ,etc. La referencia puede ser repetida en múltiples filas para incluir multiples identificadores que lleven al artículo o a un pdf del artículo. |
| Ejemplo | https://link.springer.com/article/10.1007/s10722-020-00960-1<br> https://doi.org/10.15472/jeh0ic<br> http://www.nature.com/ng/journal/v41/n6/pdf/ng0609-637.pdf |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem217">**bibliographicCitation** (Citación bibliográfica)</a>

|    |    |
| ---|--- |
| Definición | Citación bibliográfica completa en formato de texto plano. |
| Ejemplo | Granados-Martínez, C. y A. Batista. 2017. Macroinvertebrados acuáticos. Pp. 47-65. En: Lasso, C. A. y M. A. Morales-Betancourt (Eds.). III. Fauna de Caño Cristales, sierra La Macarena, Meta, Colombia. Serie Editorial Fauna Silvestre Neotropical. Instituto de Investigación de Recursos Biológicos Alexander von<br> Humboldt (IAvH). Bogotá, D. C., Colombia.<br> Brander, K. (2015). Improving the Reliability of Fishery Predictions Under Climate Change. Current Climate Change Reports, 1(1): 40-48.  doi: 10.1007/s40641-015-0005-7 |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem218">**title** (Título)</a>

|    |    |
| ---|--- |
| Definición | Título del artículo, libro o fuente de citación bibliográfica documentada en bibliographicCitation. |
| Ejemplo | Macroinvertebrados acuáticos<br> Improving the Reliability of Fishery Predictions Under Climate Change |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem219">**creator** (Creador)</a>

|    |    |
| ---|--- |
| Definición | Autores de la citación bibliográfica documentada en bibliographicCitation. |
| Ejemplo | Granados-Martínez, C. y A. Batista<br> Brander, K |
| Elementos relacionados | bibliographicCitation |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem220">**date** (Fecha)</a>

|    |    |
| ---|--- |
| Definición | Fecha de la citación bibliográfica documentada en bibliographicCitation. |
| Ejemplo | 2017<br> 2015 |
| Elementos relacionados | bibliographicCitation |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem221">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la citación bibliográfica documentada en bibliographicCitation. Para artículos científicos, documentar el nombre de la revista. Para capítulos de libros, documentar el nombre del libro. |
| Ejemplo | Serie Editorial Fauna Silvestre Neotropical. Instituto de Investigación de Recursos Biológicos Alexander von Humboldt<br> Current Climate Change Reports |
| Elementos relacionados | bibliographicCitation |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem222">**description** (Descripción)</a>

|    |    |
| ---|--- |
| Definición | Resumen, notas o comentarios de la publicación referenciada. |
| Ejemplo | La Corporación para el Desarrollo Sostenible del Área de Manejo Especial La Macarena-Cormacarena y el Instituto de Investigación de Recursos Biológicos Alexander von Humboldt, decidieron realizar estudios sobre la fauna en Caño Cristales (sierra de La Macarena). Se realizó entonces una evaluación rápida de la biodiversidad de Caño Cristales en octubre 2016 a fin de caracterizar los siguientes grupos: macroinvertebrados acuáticos, peces, anfibios, reptiles, aves y mamíferos. |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem223">**subject** (Tema)</a>

|    |    |
| ---|--- |
| Definición | Lista de palabras claves (en una fila continua y separada por una barra vertical "\|") de la publicación referenciada, puede incluir la información específica de la relación del trabajo citado y la taxonomía de los registros. |
| Ejemplo | Fauna \| Orinoquía \| Colombia \| Caño Cristales \| Serranía de la Macarena \| Región Neotropical \| Peces \| Anfibios \| Reptiles |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem224">**language** (Idioma)</a>

|    |    |
| ---|--- |
| Definición | Idioma de la publicación referenciada. |
| Ejemplo | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 639-1 de 2 letras en minúscula, como se muestra a continuación:<br><br> es (=Para español)<br> en (=Para inglés) |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | Consultar en: [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php) |
|    |    |

<a name="elem225">**rights** (Derechos)</a>

|    |    |
| ---|--- |
| Definición | Información de los derechos de autor de la publicación referenciada. |
| Ejemplo | Todos los derechos reservados, Instituto de Investigación de Recursos Biológicos Alexander von Humboldt, Corporación para el Desarrollo Sostenible del Área de Manejo Especial La Macarena Cormacarena 2017. |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem226">**taxonRemarks** (Comentarios del taxón)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre información específica del taxón relacionado con la publicación referenciada. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Se registra la especie Podocnemis unifilis (tortuga terecay) como amenazada |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem227">**type** (Tipo)</a>

|    |    |
| ---|--- |
| Definición | Usado para asignar una referencia bibliográfica a la lista de categorías taxonómicas o nomenclaturales. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Publicación<br> Original<br> Combinación<br> Monografía<br> Flora-Fauna<br> Lista de chequeo<br> Legal<br> Sitio web<br> Experto<br> Otro |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem228">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro de la publicación referenciada. |
| Ejemplo | 002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/v24ppe |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Distribución de la Especie

|    |    |    |    |
| ---|--- |--- |--- |
| [**locationID**<br> (ID de la ubicación)](#elem229) | [**locality**<br> (Localidad)](#elem230) | [**countryCode**<br> (Código del país)](#elem231) | [**lifeStage**<br> (Etapa de desarrollo)](#elem232) |
| [**occurrenceStatus**<br> (Estado del registro biológico)](#elem233) | [**threatStatus**<br> (Estado de amenaza)](#elem234) | [**appendixCITES**<br> (Apéndice CITES)](#elem235) | [**establishmentMeans**<br> (Medios de establecimiento)](#elem236) |
| [**eventDate**<br> (Fecha del evento)](#elem237) | [**startDayOfYear**<br> (Día inicial del año)](#elem238) | [**endDayOfYear**<br> (Día final del año)](#elem239) | [**source**<br> (Fuente)](#elem240) |
| [**occurrenceRemarks**<br> (Comentarios de la distribución)](#elem241) | [**datasetID**<br> (ID del conjunto de datos)](#elem242) |  |  |
|    |    |    |    |

<br>
<br>

<a name="elem229">**locationID** (ID de la ubicación)</a>

|    |    |
| ---|--- |
| Definición | Un identificador de la región geográfica, división político administrativa o del sitio específico donde se distribuye el taxón. |
| Comentarios | Se sugiere utilizar un identificador persistente, como el código de la División Política Administrativa de Colombia - DANE, [(https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD)](https://www.datos.gov.co/api/views/gdxc-w37w/rows.pdf?accessType=DOWNLOAD) precedida por "CO:" o utilizar MarineRegions [(https://www.marineregions.org/)](https://www.marineregions.org/)) para regiones marinas, como se muestra a continuación:<br><br> CO:15572 (Código Divipola para el Municipio de Puerto Boyacá en Boyacá)<br> CO:68 (Código Divipola para el Departamento de Santander)<br> CO:81 \| CO:05 (para el Departamento Arauca y  el Departamento Antioquia)<br> http://marineregions.org/mrgid/32556 (Islas del Rosario)<br><br> Si la ubicación corresponde a varias áreas geográficas, separar por una barra vertical "\|". Para otras áreas o código específicos de lugares nombrados (Topónimos) puede hacer uso de otros estándares. Ver: [http://rs.gbif.org/areas/](http://rs.gbif.org/areas/) |
| Ejemplo | CO:15572<br> CO:68<br> CO:81 \| CO:05<br> http://marineregions.org/mrgid/32556<br> geonames.org/3674545/ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem230">**locality** (Localidad)</a>

|    |    |
| ---|--- |
| Definición | El nombre general del área en la que se distribuye el taxón. |
| Ejemplo | Región Orinoquía<br> Región Caribe<br> Región Orinoquía<br> Parque Nacional Natural El Tuparro |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem231">**countryCode** (Código del país)</a>

|    |    |
| ---|--- |
| Definición | El código estándar para el país de la ubicación. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 3166-1-alfa-2 de códigos de países, como se muestra a continuación:<br><br> CO (=Para Colombia)<br> AR (=Para Argentina) |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | Consultar en: [https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO](https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO) |
|    |    |

<a name="elem232">**lifeStage** (Etapa de desarrollo)</a>

|    |    |
| ---|--- |
| Definición | Elemento para indicar que la información de distribución pertenece solamente a una etapa de vida específica del taxón. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Huevo<br> Juvenil<br> Adulto<br> Cigoto<br> Embrión<br> Larva<br> Esporófito<br> Espora<br> Gametofito<br> Gameto<br> Pupa<br> Plántula<br> Floración<br> Fructificación |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem233">**occurrenceStatus** (Estado del registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Estado que da cuenta de la presencia o ausencia de un taxón en una ubicación. Se recomienda el uso de un vocabulario controlado, preferiblemente en inglés. |
| Ejemplo | present<br> absent<br> Presente<br> Ausente |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem234">**threatStatus** (Estado de amenaza)</a>

|    |    |
| ---|--- |
| Definición | Estado de amenaza de una especie de acuerdo a la IUCN (International Union for Conservation of Nature): https://www.iucnredlist.org/ o el estado en la lista del MADS (Ministerio de Medio ambiente y Desarrollo Sostenible): https://doi.org/10.15472/5an5tz. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](#elem374) | EX<br> EW<br> RE<br> CR<br> EN<br> VU<br> NT<br> LC<br> DD<br> NA<br> NE |
|    |    |

<a name="elem235">**appendixCITES** (Apéndice CITES)</a>

|    |    |
| ---|--- |
| Definición | El número de los apéndices CITES- Convention on International Trade in Endangered Species of Wild Fauna and Flora, en el que el taxón es categorizado. Es posible tener diferentes números de los apéndices para diferentes áreas. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](#elem375) | I<br> II<br> III |
|    |    |

<a name="elem236">**establishmentMeans** (Medios de establecimiento)</a>

|    |    |
| ---|--- |
| Definición | Una afirmación que de cuenta si un taxón ha sido introducido a un lugar y tiempo determinado a través de actividad humana directa o indirecta. Se recomienda el uso de un vocabulario controlado, preferiblemente en inglés. |
| Comentarios | Este elemento también esta siendo utilizado para documentar endemismo. |
| Ejemplo | native<br> nativeReintroduced<br> introduced<br> introducedAssistedColonisation<br> vagrant<br> uncertain<br> Endémica |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem237">**eventDate** (Fecha del evento)</a>

|    |    |
| ---|--- |
| Definición | Contexto temporal relevante para el registro de la distribución, preferiblemente documentar como un rango de años o un año específico en el que el registro de la distribución es válido. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD, para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD), para un intervalo de años: AAAA/AAAA. |
| Ejemplo | 1939/1945<br> 1900 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem238">**startDayOfYear** (Día inicial del año)</a>

|    |    |
| ---|--- |
| Definición | Subcontexto temporal, útil para especies migratorias. El primer día ordinal del año en el cual hay presencia del taxón. |
| Comentarios | La numeración comienza con 1 para el 1 de enero y termina con 365 o 366 para el 31 de diciembre, como se muestra a continuación:<br><br> 1 (Para el 1 de enero)<br> 60 (Para el 1 de marzo)<br> 160 (Para el 8 de junio) |
| Ejemplo | 1<br> 60<br> 160 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem239">**endDayOfYear** (Día final del año)</a>

|    |    |
| ---|--- |
| Definición | Subcontexto temporal, útil para especies migratorias. El último día ordinal del año en el cual hay presencia del taxón.  |
| Comentarios | La numeración comienza con 1 para el 1 de enero y termina con 365 o 366 para el 31 de diciembre, como se muestra a continuación:<br><br> 120 (Para el 29 de abril)<br> 306 (Para el 1 de noviembre)<br> 365 (Para el 31 de diciembre) |
| Ejemplo | 120<br> 306<br> 365 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem240">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la cual se obtuvo la información de distribución. Puede ser una cita bibliográfica (se recomienda formato APA), una URL de página web, etc. |
| Ejemplo | https://catalogo.biodiversidad.co/file/5f8e304877e76556702a20b8/summary<br> Euro+Med Plantbase - the information resource for Euro-Mediterranean plant diversity (2006). Published on the Internet http://ww2.bgbm.org/EuroPlusMed/ July, 2009 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem241">**occurrenceRemarks** (Comentarios de la distribución)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la distribución. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Especie migratoria presente en Colombia durante el mes de junio |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem242">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro de distribución. |
| Ejemplo | 002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/ea8sek |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Descripción del Taxón

|    |    |    |    |
| ---|--- |--- |--- |
| [**type**<br> (Tipo)](#elem242) | [**description**<br> (Descripción)](#elem243)| [**source**<br> (Fuente)](#elem244) | [**language**<br> (Idioma)](#elem245) |
| [**created**<br> (Fecha de creación)](#elem246) | [**creator**<br> (Creador)](#elem247) | [**contributor**<br> (Contribuidor)](#elem248) | [**audience**<br> (Audiencia)](#elem249) |
| [**license**<br> (Licencia)](#elem250) | [**rightsHolder**<br> (Titular de los derechos)](#elem251) | [**datasetID**<br> (ID del conjunto de datos)](#elem252) |  |
|    |    |    |    |

<br>
<br>

<a name="elem242">**type** (Tipo)</a>

|    |    |
| ---|--- |
| Definición | Elemento categórico que mejor se ajuste a lo que se quiera describir del taxón. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Morfología<br>Reproducción<br> Fisiología |
| Elementos relacionados | description |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem243">**description** (Descripción)</a>

|    |    |
| ---|--- |
| Definición | Texto libre y descriptivo del taxón que coincida con la temática de la categoría dada en el elemento type. |
| Ejemplo | Dimorfismo sexual<br> De 1 a 8 crías por evento reproductivo<br> Las características de las aletas posteriores corresponden a la especie Schistochlamys melanopis<br> Esta especie de rana presenta distribuciones altamente restringidas |
| Elementos relacionados | type |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem244">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la cual se obtuvo la información de la descripción del taxón. Puede ser una cita bibliográfica (se recomienda formato APA), una URL de página web, etc. |
| Ejemplo | https://catalogo.biodiversidad.co/file/5f8e304b77e76556702a222b/summary<br> Acosta-Galvis, A.R. 2000. Ranas, Salamandras y Caecilias (Tetrapoda: Amphibia) de Colombia. Biota Colombiana: 289-319.a |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem245">**language** (Idioma)</a>

|    |    |
| ---|--- |
| Definición | El idioma de la descripción. |
| Comentarios | Documente este elemento de acuerdo al vocabulario controlado de la norma ISO 639-1 de 2 letras en minúscula, como se muestra a continuación:<br><br> es (=Para español)<br> en (=Para inglés) |
| _(Obligatoriedad)_ | _(Opcional)_ |
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | Consultar en: [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php]) |
|    |    |

<a name="elem246">**created** (Fecha de creación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se realizó la descripción. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem247">**creator** (Creador)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas responsables de realizar la descripción. |
| Ejemplo | Eduardo Amat García<br> Javier Maldonado Ocampo<br> Mónica Andrea Sánchez Torres \| Esteban Andrés Novoa López |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem248">**contributor** (Contribuidor)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las entidades responsables de realizar la descripción. |
| Ejemplo | Universidad Nacional de Colombia |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem249">**audience** (Audiencia)</a>

|    |    |
| ---|--- |
| Definición | La audiencia a quien va dirigida la información de la descripción. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Expertos<br> Académicos<br> Científicos<br> Ornitólogos<br> Público en general |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem250">**license** (Licencia)</a>

|    |    |
| ---|--- |
| Definición | Información sobre los derechos, licencias o permisos que establece el publicador sobre el uso de la información de la descripción. Se recomienda hacer uso de licencias abiertas o creative commons. |
| Ejemplo | http://creativecommons.org/licenses/by-nc-sa/2.0/eed.en |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem251">**rightsHolder** (Titular de los derechos)</a>

|    |    |
| ---|--- |
| Definición | Persona u organización propietaria o administradora de los derechos de la información de la descripción. |
| Ejemplo | Secretaria de Agricultura<br> Ministerio de Medio Ambiente<br> Secretaría Distrital de Ambiente |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem252">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro de la descripción. |
| Ejemplo | 002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/v24ppe |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Perfil de la Especie

|    |    |    |    |
| ---|--- |--- |--- |
| [**isMarine**<br> (Es marino)](#elem253) | [**isFreshWater**<br> (Es dulceacuícola)](#elem254) | [**isTerrestrial**<br> (Es terrestre)](#elem255) | [**isInvasive**<br> (Es invasor)](#elem256) |
| [**isHybrid**<br> (Es híbrido)](#elem257) | [**isExtinct**<br> (Está extinto)](#elem258) | [**livingPeriod**<br> (Periodo en el que vivió)](#elem259) | [**ageInDays**<br> (Edad en días)](#elem260) |
| [**sizeInMillimeters**<br> (Tamaño en milímetros)](#elem261) | [**massInGrams**<br> (Masa en gramos)](#elem262) | [**lifeForm**<br> (Forma de vida)](#elem263) | [**habitat**<br> (Hábitat)](#elem264) |
| [**sex**<br> (Sexo)](#elem265) | [**source**<br> (Fuente)](#elem266) | [**datasetID**<br> (ID del conjunto de datos)](#elem267) |  |
|    |    |    |    |

<br>
<br>

<a name="elem253">**isMarine** (Es marino)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), marino. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem254">**isFreshWater** (Es dulceacuícola)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), dulceacuícola. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem255">**isTerrestrial** (Es terrestre)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), terrestre. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem256">**isInvasive** (Es invasor)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), invasor. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem257">**isHybrid** (Es híbrido)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón es (=TRUE), o no es (=FALSE), híbrido. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem258">**isExtinct** (Está extinto)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si un taxón está (=TRUE), o no está (=FALSE), extinto. |
| Ejemplo | TRUE<br> FALSE |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem259">**livingPeriod** (Periodo en el que vivió)</a>

|    |    |
| ---|--- |
| Definición | El periodo geológico en el cual un organismo extinto estuvo vivo. Para tiempo geológicos de fósiles, lo ideal es usar un vocabulario controlado como [https://es.wikipedia.org/wiki/Escala_temporal_geol%C3%B3gica](https://es.wikipedia.org/wiki/Escala_temporal_geol%C3%B3gica). |
| Ejemplo | Paleógeno<br> Cretácico<br> Jurásico<br> Triásico<br> Pérmico |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem260">**ageInDays** (Edad en días)</a>

|    |    |
| ---|--- |
| Definición | Edad máxima del taxón expresada como número de días. |
| Ejemplo | 29000<br> 5 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem261">**sizeInMillimeters** (Tamaño en milímetros)</a>

|    |    |
| ---|--- |
| Definición | Tamaño máximo observado del taxón, dado en milímetros. Puede ser la altura, longitud o el ancho, la que sea mayor. |
| Ejemplo | 10<br> 1700 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem262">**massInGrams** (Masa en gramos)</a>

|    |    |
| ---|--- |
| Definición | Peso máximo observado del taxón, dado en gramos. |
| Ejemplo | 12<br> 3000 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem263">**lifeForm** (Forma de vida)</a>

|    |    |
| ---|--- |
| Definición | Un término describiendo la forma de vida o crecimiento de un taxón. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Epífita<br> Fanerófito<br> Criptófito |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem264">**habitat** (Hábitat)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|"), de los hábitats conocidos donde el taxón vive o vivió. |
| Ejemplo | Sabana de roble Estepa de la pre-cordillera<br> Bosque templado<br> Sabana seca<br> Cavernas y hábitats subterráneos |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem265">**sex** (Sexo)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") , de los sexos conocidos para el taxón. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Hembra<br> Hermafrodita<br> Macho<br> Desconocido<br> Indeterminado<br> Ginandromorfo |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem266">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la cual se obtuvo la información del perfil del taxón. Puede ser una cita bibliográfica (se recomienda formato APA), una URL de página web, etc. |
| Ejemplo | Acosta-Galvis, A. R. (2000). Ranas, salamandras y caecilias (Tetrapoda: Amphibia) de Colombia. Biota colombiana, 1(3).<br> Agarwal S. K. 2018. Fundamentals of Ecology. APH Publishing, 813130342X, 9788131303429, 460 pages |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem267">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro del perfil del taxón. |
| Ejemplo | 002_BIO-RRBB_SC_2021032<br> https://doi.org/10.15472/ea8sek |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Tipos y Especímenes

|    |    |    |    |
| ---|--- |--- |--- |
| [**typeStatus**<br> (Estado del tipo)](#elem268) | [**typeDesignationType**<br> (Tipo de designación del tipo)](#elem269) | [**typeDesignatedBy**<br> (Tipo designado por)](#elem270) | [**scientificName**<br> (Nombre científico)](#elem271) |
| [**taxonRank**<br> (Categoría del taxón)](#elem272) | [**bibliographicCitation**<br> (Citación bibliográfica)](#elem273) | [**occurrenceID**<br> (ID del registro biológico)](#elem274) | [**institutionCode**<br> (Código de la institución)](#elem275) |
| [**collectionCode**<br> (Código de la colección)](#elem276) | [**catalogNumber**<br> (Número de catálogo)](#elem277) | [**locality**<br> (Localidad)](#elem278) | [**sex**<br> (Sexo)](#elem279) |
| [**recordedBy**<br> (Registrado por)](#elem280) | [**source**<br> (Fuente)](#elem281) | [**verbatimEventDate**<br> (Fecha original del evento)](#elem282) | [**verbatimLabel**<br> (Etiqueta original)](#elem283) |
| [**verbatimLongitude**<br> (Longitud original)](#elem284) | [**verbatimLatitude**<br> (Latitud original)](#elem285) | [**datasetID**<br> (ID del conjunto de datos)](#elem286) |  |
|    |    |    |    |

<br>
<br>

<a name="elem268">**typeStatus** (Estado del tipo)</a>

|    |    |
| ---|--- |
| Definición | El tipo nomenclatural del espécimen. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Alotipo<br> Holotipo<br> Alolectotipo |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem269">**typeDesignationType** (Tipo de designación del tipo)</a>

|    |    |
| ---|--- |
| Definición | La razón por la que el espécimen se designa como tipo nomenclatural. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Designación original<br> Monotipo<br> Designación presente |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem270">**typeDesignatedBy** (Tipo designado por)</a>

|    |    |
| ---|--- |
| Definición | La cita bibliográfica de la publicación donde se encuentra la designación de tipo nomenclatural. |
| Ejemplo | Sutherland CHN. 2009. Redescubrimiento del holotipo de Epidendrum × doroteae P.H. Allen (Orchidaceae). CEIBA, Vol. 50 Núm. 1. |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem271">**scientificName** (Nombre científico)</a>

|    |    |
| ---|--- |
| Definición | Para especímenes tipo nomenclatural, documentar el nombre científico originalmente utilizado en la etiqueta. No necesariamente es el mismo nombre reconocido actualmente. En el caso de especies o géneros tipo, debe ser la especie o el nombre del género que tipifique al taxón superior. |
| Ejemplo | Ctenomys sociabilis<br> Ctenomys |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem272">**taxonRank** (Categoría del taxón)</a>

|    |    |
| ---|--- |
| Definición | La categoría taxonómica del nombre más específico presente en el scientificName. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Reino<br> Subreino<br> Filo<br> División<br> Subfilo<br> Subdivisión<br> Clase<br> Subclase<br> Orden<br> Suborden<br> Familia<br> Subfamilia<br> Tribu<br> Subtribu<br> Género<br> Subgénero<br> Sección<br> Subsección<br> Serie<br> Subserie<br> Especie<br> Subespecie<br> Variedad<br> Subvariedad<br> Forma<br> Subforma |
| Elementos relacionados | scientificName |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem273">**bibliographicCitation** (Citación bibliográfica)</a>

|    |    |
| ---|--- |
| Definición | Citación del espécimen descrito. |
| Ejemplo | Iraq: Mosul: Jabal Khantur prope Sharanish N. Zakho, in fissures rupium calc., 1200 m, Rech. 12083 (W!) |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem274">**occurrenceID** (ID del registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único para el espécimen, preferiblemente un identificador único global que se pueda resolver.<br><br> En ausencia de un identificador único global persistente, se recomienda construir uno a partir de la combinación: [código corto de la institución]:[código de la colección]:[número de catálogo]. No debe contener espacios en blanco o caracteres especiales. |
| Ejemplo | UCO:RESCATE_FAUNA_MULATOSII:1<br> UNIVALLE:CRM-UV:1974-001-1 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem275">**institutionCode** (Código de la institución)</a>

|    |    |
| ---|--- |
| Definición | El nombre completo de la institución que custodia el espécimen; seguido por su acrónimo en paréntesis, si tiene. |
| Ejemplo | Ministerio de Ambiente y Desarrollo Sostenible (MADS)<br> Universidad de Antioquia (UdeA)<br> Jardín Botánico de Bogotá José Celestino Mutis (JBB)<br> Universidad de los Andes (UNIANDES) |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem276">**collectionCode** (Código de la colección)</a>

|    |    |
| ---|--- |
| Definición | El nombre, acrónimo, código alfanumérico, o iniciales que identifican la colección o conjunto de datos del que procede el espécimen. Si corresponde a una colección biológica registrada en el Registro Único Nacional de Colecciones Biológicas-RNC [(http://rnc.humboldt.org.co/admin/index.php/registros/colecciones)](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones), se debe emplear el acrónimo allí registrado. |
| Ejemplo | COL<br> ANDES<br> FMB |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem277">**catalogNumber** (Número de catálogo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador (preferiblemente único) asignado al espécimen en la colección biológica. Puede repetirse en caso de que los especímenes están agrupados en la colección (Lote, Frasco, Caja, etc).<br><br> Debe documentarse de la misma forma que está en la etiqueta. |
| Ejemplo | 00001<br> 1974-001-1<br> 1732a<br> ANDES-E0813<br> Lepid0784 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem278">**locality** (Localidad)</a>

|    |    |
| ---|--- |
| Definición | La ubicación donde se colectó el espécimen. En el caso de especímenes tipo, la localidad tipo. |
| Ejemplo | Ruta del Sol, kilómetro 25 entre Guaduas y La Dorada<br> Vereda Santa Ana<br> Quebrada Aguasclaras<br> Parque Nacional Natural Serranía de Chiribiquete |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem279">**sex** (Sexo)</a>

|    |    |
| ---|--- |
| Definición | El sexo del espécimen. |
| Ejemplo | Hembra<br> Hermafrodita<br> Macho<br> Desconocido<br> Indeterminado<br> Ginandromorfo |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem280">**recordedBy** (Registrado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas responsables de la colecta u observación del espécimen.<br><br> El colector u observador principal, especialmente si está asociado al recordNumber tomado en campo, se debe listar en primer lugar. Se debe mantener el mismo formato del nombre a lo largo de todos los registros y se recomienda evitar el uso de solo iniciales ya que esto genera ambigüedades para reconocer a las personas que realizaron el registro, de ser posible siempre escriba nombres completos. Documente el nombre de las personas y evite documentar nombres de grupos u organizaciones. |
| Ejemplo | Eduardo Amat García<br> Javier Maldonado Ocampo<br> Mónica Andrea Sánchez Torres \| Esteban Andrés Novoa López |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem281">**source** (Fuente)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la cual se obtuvo la información del espécimen. |
| Ejemplo | https://camjol.info/index.php/CEIBA/article/view/193 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem282">**verbatimEventDate** (Fecha original del evento)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que se colectó el espécimen. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem283">**verbatimLabel** (Etiqueta original)</a>

|    |    |
| ---|--- |
| Definición | El texto completo y literal de la etiqueta del espécimen. |
| Ejemplo | Herbario de la facultad de farmacia \| Universidad de Valencia \| Sideritis juryi \| Peris, Stubing & Figuerola sp.nov \| Valencia: Entre Lliria y Casinos, sobre colina calcaréas degradadas \| Leg.: Stubing & J.B. Peris, 25-V-1989 \| ISOTYPUS |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem284">**verbatimLongitude** (Longitud original)</a>

|    |    |
| ---|--- |
| Definición | La longitud original donde se observó o colectó el espécimen. |
| Ejemplo | 75° 08' 36.83" W<br> 834549 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem285">**verbatimLatitude** (Latitud original)</a>

|    |    |
| ---|--- |
| Definición | La latitud original donde se observó o colectó el espécimen. |
| Ejemplo | 41° 05' 56.03" S<br> 1631599 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem286">**datasetID** (ID del conjunto de datos)</a>

|    |    |
| ---|--- |
| Definición | Un identificador del conjunto de datos del cual se deriva el registro del espécimen. |
| Ejemplo | I2D-BIO_2015_089<br>001_BIO-RRBB_SC_2019027<br> https://doi.org/10.15472/ympw2s  |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |


### Muestra del Material GGBN

|    |    |    |
| ---|--- |--- |
| [**materialSampleType**<br> (Tipo de muestra)](#elem287) | [**concentration**<br> (Concentración)](#elem288) | [**concentrationUnit**<br> (Unidad de la concentración)](#elem289) | 
| [**methodDetermination<br>ConcentrationAndRatios**<br> (Método para determinación <br>de la concentración)](#elem290) | [**ratioOfAbsorbance260_230**<br> (Relación de absorbancia<br> 260/230)](#elem291) | [**ratioOfAbsorbance260_280**<br> (Relación de absorbancia<br> 260/280)](#elem292) |
| [**purificationMethod**<br> (Método de purificación)](#elem293) | [**quality**<br> (Calidad)](#elem294) | [**qualityCheckDate**<br> (Fecha de revisión de la calidad)](#elem295) |
| [**qualityRemarks**<br> (Comentarios sobre la calidad)](#elem296) | [**volume**<br> (Volumen)](#elem297) | [**volumeUnit**<br> (Unidad del volumen)](#elem298) |
| [**weigh**<br> (Peso)](#elem299) | [**weighUnit**<br> (Unidad del peso)](#elem300) | [**methodDeterminationWeight**<br> (Método de determinación<br> del peso)](#elem301) |
| [**samp_size**<br> (Tamaño de la muestra)](#elem302) | [**DNAMeltingPoint**<br> (Temperatura de<br> denaturación del ADN)](#elem303) | [**sieving**<br> (Tamizado)](#elem304) |
| [**DNADNAHybridization**<br> (Hibridación ADN-ADN)](#elem305) | [**estimated_size**<br> (Tamaño estimado)](#elem306) | [**pool_dna_extracts**<br> (Combinación de<br> extractos de ADN)](#elem307) | 
| [**sampleDesignation**<br> (Designación de la muestra)](#elem308) |  |  |
|    |    |    |

<br>
<br>

<a name="elem287">**materialSampleType** (Tipo de muestra)</a>

|    |    |
| ---|--- |
| Definición | El tipo de muestra que representa el registro biológico. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Muestra ambiental<br> ADN<br> Tejido<br> Cepa cultivada<br> Cepa conservada <br> Clon |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem288">**concentration** (Concentración)</a>

|    |    |
| ---|--- |
| Definición | Recuento de la muestra (células totales, unidades formadoras de colonia, cantidad de biomasa o cantidad de ADN) por unidad de volumen. |
| Comentarios | Se recomienda expresar los valores en notación científica utilizando E como equivalente a x10^n. |
| Ejemplo | 0.81<br>6.74E8<br> >1E7<br> <1E2 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem289">**concentrationUnit** (Unidad de la concentración)</a>

|    |    |
| ---|--- |
| Definición | Unidad en la que fue medida la concentración. |
| Ejemplo | ng/uL<br> UFC/mL<br> propágulos/mL<br> μg/mL |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem290">**methodDeterminationConcentrationAndRatios** (Método para determinación de la concentración)</a>

|    |    |
| ---|--- |
| Definición | Descripción del método utilizado para medir la concentración. |
| Ejemplo | Espectrofotometría<br> Recuento en placa<br> Recuento en cámara de Neubauer<br> Cuantificación por Nanodrop |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem291">**ratioOfAbsorbance260_230** (Relación de absorbancia 260/230)</a>

|    |    |
| ---|--- |
| Definición | Para ADN conservado: Relación de absorbancia a 260 nm y 230 nm para evaluar la pureza del ADN. |
| Ejemplo | 1.85<br> 1.5 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem292">**ratioOfAbsorbance260_280** (Relación de absorbancia 260/280)</a>

|    |    |
| ---|--- |
| Definición | Para ADN conservado: Relación de absorbancia a 260 nm y 280 nm para evaluar la pureza del ADN. |
| Ejemplo | 1.85<br> 2.0 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem293">**purificationMethod** (Método de purificación)</a>

|    |    |
| ---|--- |
| Definición | Para ADN conservado: Nombre del kit, institución o protocolo que realizó o se utilizó en la extracción del ADN. |
| Ejemplo | Extracción orgánica<br>  Fenol-Cloroformo, Purelink Genomic DNA extraction kit (Invitrogen)<br>  DNeasy Blood and Tissue Kit (Qiagen) |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem294">**quality** (Calidad)</a>

|    |    |
| ---|--- |
| Definición | Calidad en la que se encuentra la muestra. |
| Ejemplo | Viable<br> Muerto o inviable<br> Contaminada<br> Pura<br> Degradado |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem295">**qualityCheckDate** (Fecha de revisión de la calidad)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo más reciente en la que se revisó la calidad o viabilidad de la muestra. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem296">**qualityRemarks** (Comentarios sobre la calidad)</a>

|    |    |
| ---|--- |
| Definición | Comentarios o anotaciones sobre la calidad de la muestra. |
| Ejemplo | Se observó contaminación por un hongo<br> ADN degradado |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem297">**volume** (Volumen)</a>

|    |    |
| ---|--- |
| Definición | Volumen de la muestra. |
| Ejemplo | 8<br> 10 |
| Elementos relacionados | volumeUnit |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem298">**volumeUnit** (Unidad del volumen)</a>

|    |    |
| ---|--- |
| Definición | Unidad en la que fue medido el volumen. |
| Ejemplo | µL<br> ml |
| Elementos relacionados | volume |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem299">**weigh** (Peso)</a>

|    |    |
| ---|--- |
| Definición | Peso de la muestra. |
| Ejemplo | 1<br> 0.2 |
| Elementos relacionados | weighUnit |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem300">**weighUnit** (Peso)</a>

|    |    |
| ---|--- |
| Definición | Unidad en la que fue medido el peso. |
| Ejemplo | g<br> µg<br> g/mol |
| Elementos relacionados | weigh |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem301">**methodDeterminationWeight** (Método de determinación del peso)</a>

|    |    |
| ---|--- |
| Definición | Método que se usó para determinar el peso de la muestra. |
| Ejemplo | Gel de agarosa<br> Pesa |
| Elementos relacionados | weigh |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem302">**samp_size** (Tamaño de la muestra)</a>

|    |    |
| ---|--- |
| Definición | Cantidad de la muestra colectada. |
| Ejemplo | 20g de suelo<br> 1g de tejido |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem303">**DNAMeltingPoint** (Temperatura de denaturación del ADN)</a>

|    |    |
| ---|--- |
| Definición | Para ADN conservado: Resultado del análisis de la curva de denaturación. Los valores deben estar en °C y 3 cifras decimales. |
| Ejemplo | 85.347<br> 94.000 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem304">**sieving** (Tamizado)</a>

|    |    |
| ---|--- |
| Definición | Diseño de la selección de muestras agrupadas y / o tamaño del tamiz y cantidad de muestra tamizada. |
| Ejemplo | Tamaño del tamiz: 20 µm<br> Cantidad de muestra tamizada: 2 g |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem305">**DNADNAHybridization** (Hibridación ADN-ADN)</a>

|    |    |
| ---|--- |
| Definición | Resultado de la hibridación ADN-ADN. |
| Ejemplo | 70%<br> 85% |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem306">**estimated_size** (Tamaño estimado)</a>

|    |    |
| ---|--- |
| Definición | El tamaño estimado del genoma antes de la secuenciación. |
| Ejemplo | 400 Mpb<br> 1000 pb<br> 50 Kpb |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem307">**pool_dna_extracts** (Combinación de extractos de ADN)</a>

|    |    |
| ---|--- |
| Definición | Cantidad de extracciones de ADN combinados (si es el caso). |
| Ejemplo | 15<br> 18 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem308">**sampleDesignation** (Designación de la muestra)</a>

|    |    |
| ---|--- |
| Definición | Números adicionales de laboratorio o proyecto utilizados para identificar la muestra de ADN o tejido. |
| Ejemplo | ADN_bac_cep04<br> TEJ_fung_muestra01 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |


### Preservación GGBN

|    |    |    |
| ---|--- |--- |
| [**preservationType**<br> (Tipo de preservación)](#elem309) | [**preservationTemperature**<br> (Temperatura de preservación)](#elem310) | [**preservationDateBegin**<br> (Fecha inicial de preservación)](#elem311) | 
| [**sequence**<br> (Secuencia)](#elem312) |  |  |
|    |    |    |

<br>
<br>

<a name="elem309">**preservationType** (Tipo de preservación)</a>

|    |    |
| ---|--- |
| Definición | Método utilizado para la preservación de la muestra. |
| Ejemplo | Crioconservación (Medio BHI + Glicerol 20%)<br> Liofilización<br> Papel |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem310">**preservationTemperature** (Temperatura de preservación)</a>

|    |    |
| ---|--- |
| Definición | Temperatura en la que está preservada la muestra. |
| Ejemplo | -196°C |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem311">**preservationDateBegin** (Fecha inicial de preservación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo en la que inicia la preservación de la muestra. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem312">**sequence** (Secuencia)</a>

|    |    |
| ---|--- |
| Definición | Descripción de la secuencia (orden) de diferentes observaciones realizadas a la muestra. Por ejemplo como se muestra a continuación:<br><br> 1 (= Más antigua)<br> 4 (= Más reciente) |
| Ejemplo | 1<br> 4 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Permiso GGBN

|    |    |    |
| ---|--- |--- |
| [**permitType**<br> (Tipo de permiso)](#elem313) | [**permitStatus**<br> (Estado del permiso)](#elem314) | [**permitStatusQualifier**<br> (Calificador del estado del permiso)](#elem315) |
| [**permitURI**<br> (Identificador del permiso)](#elem316) | [**permitText**<br> (Texto del permiso)](#elem317) |  |
|    |    |    |

<br>
<br>

<a name="elem313">**permitType** (Tipo de permiso)</a>

|    |    |
| ---|--- |
| Definición | El tipo del permiso (documento que le permite a alguien tomar una acción que de otra manera no estaría permitida). Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Permiso de acceso a recursos genéticos<br> Permiso para la recolección de especímenes de especies silvestres<br> Permiso de colecta<br> Permiso de importación<br> Permiso de exportación<br> Derechos de propiedad intelectual<br> Derechos de autor<br> Patente<br> Fitosanitario<br> Acuerdo de transferencia de material<br> Contrato<br> Memorando de entendimiento<br> Organismo modificado genéticamente |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem314">**permitStatus** (Estado del permiso)</a>

|    |    |
| ---|--- |
| Definición | La información sobre la presencia, ausencia u otro estado básico de los permisos asociados a la(s) muestra(s). Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Permiso disponible<br> Permiso no requerido<br> Permiso no disponible<br> Desconocido |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem315">**permitStatusQualifier** (Calificador del estado del permiso)</a>

|    |    |
| ---|--- |
| Definición | La descripción de por qué no se requirió cierto permiso o por qué se desconoce el estado del permiso. |
| Ejemplo | Ningún requisito nacional para un permiso en la fecha de acceso<br> Recolectado en tierras privadas<br> Pre-Nagoya |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem316">**permitURI** (Identificador del permiso)</a>

|    |    |
| ---|--- |
| Definición | Un enlace a la referencia del permiso con la información de recolección o envío. |
| Ejemplo | https://corponor.gov.co/ACTOSJURIDICOS/RESOLUCIONES/2015/ene0200.pdf |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem317">**permitText** (Texto del permiso)</a>

|    |    |
| ---|--- |
| Definición | El texto del permiso con la información de recolección, envío y/o más detalles. |
| Ejemplo | Permiso de recolección otorgado por la Autoridad Nacional de Licencias Ambientales mediante resolución 1271 del 23 de octubre de 2014 para la recolección es especímenes de especies silvestres de la biodiversidad biológica con fines de investigación científica no comerciales. Vigencia de 10 años. |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Preparación GGBN

|    |    |    |
| ---|--- |--- |
| [**preparationType**<br> (Tipo de preparación)](#elem318) | [**preparationProcess**<br> (Proceso de la preparación)](#elem319) | [**preparationMaterials**<br> (Materiales de la preparación)](#elem320) |
| [**preparedBy**<br> (Preparado por)](#elem321) | [**preparationDate**<br> (Fecha de la preparación)](#elem322) |  |
|    |    |    |

<br>
<br>

<a name="elem318">**preparationType** (Tipo de preparación)</a>

|    |    |
| ---|--- |
| Definición | La descripción del tipo de preparación (muestras, tejidos, ADN). |
| Ejemplo | Hoja<br> Músculo<br> Sangre<br> gDNA |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem319">**preparationProcess** (Proceso de la preparación)</a>

|    |    |
| ---|--- |
| Definición | El proceso utilizado para preparar el espécimen o la muestra. También se puede utilizar para describir la propagación de fagos o plásmidos, o el proceso utilizado para extraer el ADN o ARN. |
| Ejemplo | Prensado y secado<br> En alcohol<br> Homogeneización química del tejido |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem320">**preparationMaterials** (Materiales de la preparación)</a>

|    |    |
| ---|--- |
| Definición | Los materiales y/o productos químicos utilizados en la preparación de la muestra, tejido, muestra de ADN o ARN. |
| Ejemplo | Prensa botánica, cartón corrugado, papel periódico, horno, tijeras, lápiz<br> Kit de Macherey-Nagel<br> Kit sangre y tejido DNeasy |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem321">**preparedBy** (Preparado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas que prepararon el espécimen o la muestra. |
| Ejemplo | Daniel Enrique Muñoz Silva<br> Ana María Sánchez Ortíz \| Juliana Novoa Gracia |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem322">**preparationDate** (Fecha de la preparación)</a>

|    |    |
| ---|--- |
| Definición | ULa fecha o el intervalo durante la cual se realizó la preparación del espécimen o la muestra. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br>2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Amplificación GGBN

|    |    |    |
| ---|--- |--- |
| [**amplificationDate**<br> (Fecha de la amplificación)](#elem323) | [**amplificationStaff**<br> (Amplificado por)](#elem324) | [**amplificationSuccess**<br> (Éxito de la amplificación)](#elem325) |
| [**amplificationSuccessDetails**<br> (Detalle del éxito de la amplificación)](#elem326) | [**amplificationMethod**<br> (Método de la amplificación)](#elem327) | [**primerSequenceForward**<br> (Cebador directo)](#elem328) |
| [**primerNameForward**<br> (Nombre del cebador directo)](#elem329) | [**primerReferenceCitationForward**<br> (Citación del cebador directo)](#elem330) | [**primerReferenceLinkForward**<br> (URL del cebador directo)](#elem331) |
| [**primerSequenceReverse**<br> (Cebador inverso)](#elem332) | [**primerNameForward**<br> (Nombre del cebador inverso)](#elem333) | [**primerReferenceCitationForward**<br> (Citación del cebador inverso)](#elem334) |
| [**primerReferenceLinkForward**<br> (URL del cebador inverso)](#elem335) | [**purificationMethod**<br> (Método de purificación)](#elem336) | [**consensusSequence**<br> (Secuencia consenso)](#elem337) |
| [**consensusSequenceLength**<br> (Longitud de la secuencia consenso)](#elem338) | [**consensusSequence<br>ChromatogramFileURI**<br> (Identificador del archivo del<br> cromatograma de la secuencia consenso)](#elem339) | [**barcodeSequence**<br> (Secuencia código de barras)](#elem340) |
| [**haplotype**<br> (Haplotipo)](#elem341) | [**marker**<br> (Marcador)](#elem342) | [**markerSubfragment**<br> (Subfragmento del marcador)](#elem343) |
| [**geneticAccessionNumber**<br> (Número de accesión genético)](#elem344) | [**BOLDProcessID**<br> (ID del proceso de BOLD)](#elem345) | [**geneticAccessionURI**<br> (Identificador de accesión genético)](#elem346) |
| [**GC-content**<br> (Contenido GC)](#elem347) | [**chimera_check**<br> (Verificación de secuencia quimérica)](#elem348) | [**assembly**<br> (Ensamblaje)](#elem349) |
| [**sop**<br> (Compensación](#elem350) | [**finishing_strategy**<br> (Estrategia de finalización)](#elem351) | [**annot_source**<br> (Fuente de la anotación)](#elem352) |
| [**markerAccordance**<br> (Marcador acordado)](#elem353) | [**seq_quality_check**<br> (Verificación de la calidad de la secuencia)](#elem354) | [**adapters**<br> (Adaptadores)](#elem355) |
| [**mid**<br> (Identificadores multiplex)](#elem356) |  |  |
|    |    |    |

<br>
<br>

<a name="elem323">**amplificationDate** (Fecha de la amplificación)</a>

|    |    |
| ---|--- |
| Definición | La fecha o el intervalo durante la cual se realizó la amplificación. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br>2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem324">**amplificationStaff** (Amplificado por)</a>

|    |    |
| ---|--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas encargadas de realizar la amplificación. |
| Ejemplo | Daniel Enrique Muñoz Silva<br> Ana María Sánchez Ortíz \| Juliana Novoa Gracia |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem325">**amplificationSuccess** (Éxito de la amplificación)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si el proceso de la amplificación resultó exitoso, o no. Altamente recomendado para documentar amplificaciones fallidas. |
| Ejemplo | Verdadero<br> Falso<br> Sí<br> No |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem326">**amplificationSuccessDetails** (Detalle del éxito de la amplificación)</a>

|    |    |
| ---|--- |
| Definición | Texto que describe el éxito o fallido del proceso de amplificación. |
| Ejemplo | ADN degradado<br> Contaminación |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem327">**amplificationMethod** (Método de la amplificación)</a>

|    |    |
| ---|--- |
| Definición | El método implementado para el proceso de amplificación. |
| Ejemplo | Reacción en cadena de la polimerasa (PCR) |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem328">**primerSequenceForward** (Cebador directo)</a>

|    |    |
| ---|--- |
| Definición | La secuencia del cebador directo utilizado para el proceso de amplificación. |
| Ejemplo | 5′-GGCGGTACCCAAATTCCTGTGAATTAGC-3<br> 5′-CAATGTGGATCAGGATCAACC-3′ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem329">**primerNameForward** (Nombre del cebador directo)</a>

|    |    |
| ---|--- |
| Definición | El nombre del cebador directo utilizado para el proceso de amplificación. |
| Ejemplo | Csp5K<br> Imd5<br> Gfp5 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem330">**primerReferenceCitationForward** (Citación del cebador directo)</a>

|    |    |
| ---|--- |
| Definición | Citación bibliográfica completa en formato de texto plano, donde se referencia el cebador directo utilizado para el proceso de amplificación. |
| Ejemplo | Fujikawa T & Iwanami T. 2012. Sensitive and robust detection of citrus greening (huanglongbing) bacterium “Candidatus Liberibacter asiaticus” by DNA amplification with new 16S rDNA-specific primers. Molecular and Cellular Probes, Volume 26, Issue 5, pages 194-197. |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem331">**primerReferenceLinkForward** (URL del cebador directo)</a>

|    |    |
| ---|--- |
| Definición | Un enlace a la referencia, puede ser un DOI, ISBN, URI, donde fue descrito por primera vez el cebador directo utilizado para el proceso de amplificación. |
| Ejemplo | https://www.sciencedirect.com/science/article/abs/pii/S0890850812000710 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem332">**primerSequenceReverse** (Cebador inverso)</a>

|    |    |
| ---|--- |
| Definición | La secuencia del cebador inverso utilizado para el proceso de amplificación. |
| Ejemplo | 5′-GCCGGATCCCTGAGGGCGGGAACCCCGA-3<br> 5′-GCCGGATCCTGCAGTTATTTGTATAGTTCATC-3′ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem333">**primerNameForward** (Nombre del cebador inverso)</a>

|    |    |
| ---|--- |
| Definición | El nombre del cebador inverso utilizado para el proceso de amplificación. |
| Ejemplo | Csp-Imd<br> Imd3<br> Gfp3 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem334">**primerReferenceCitationForward** (Citación del cebador inverso)</a>

|    |    |
| ---|--- |
| Definición | Citación bibliográfica completa en formato de texto plano, donde se referencia el cebador inverso utilizado para el proceso de amplificación. |
| Ejemplo | Fujikawa T & Iwanami T. 2012. Sensitive and robust detection of citrus greening (huanglongbing) bacterium “Candidatus Liberibacter asiaticus” by DNA amplification with new 16S rDNA-specific primers. Molecular and Cellular Probes, Volume 26, Issue 5, pages 194-197. |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem335">**primerReferenceLinkForward** (URL del cebador inverso)</a>

|    |    |
| ---|--- |
| Definición | Un enlace a la referencia, puede ser un DOI, ISBN, URI, donde fue descrito por primera vez el cebador inverso utilizado para el proceso de amplificación. |
| Ejemplo | https://www.sciencedirect.com/science/article/abs/pii/S0890850812000710 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem336">**purificationMethod** (Método de purificación)</a>

|    |    |
| ---|--- |
| Definición | El método o protocolo utilizado para purificar el producto de PCR. |
| Ejemplo | Qiagen<br> Germantown<br> ExoSAP-IT |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem337">**consensusSequence** (Secuencia consenso)</a>

|    |    |
| ---|--- |
| Definición | Secuencia consenso derivada de todas las secuencias individuales. |
| Ejemplo | ATGAACCATATACCTGTGCAATATTTTAACTTAGCAAAGGAAAGTTATTTT<br> AAGTATGGATTATCGGTAATCCAGCTTATNCAGATTGGTAAGTTCTAT<br> GAACTTTGGCATGAGCCTGATACTCCTAGTGTACAACAAGTATACTC<br> ACAAGCCGAGTTATTAGTTGGGCCATCCATGCGAAGTAGGCCTTTGG<br> AGGTGACGCCCCCCATAGAACAAATTGCCTCGTTACTTGATATGAGA<br>ATAATATCGCCCGGCAAAAGATCCTTNCTTCAAATGGGGTTTCCAA<br> TTTATTCCCTTACTACTCATCTAAGTACTTTGTTGGATAAAGGTT |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem338">**consensusSequenceLength** (Longitud de la secuencia consenso)</a>

|    |    |
| ---|--- |
| Definición | Longitud de la secuencia consenso dado en número de pares de bases. |
| Ejemplo | 697<br> 849 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem339">**consensusSequenceChromatogramFileURI** (Identificador del archivo del cromatograma de la secuencia consenso)</a>

|    |    |
| ---|--- |
| Definición | Un enlace al cromatograma de la secuencia consenso. |
| Ejemplo | https://www.boldsystems.org/index.php/Public_RecordView?processid=ABBAC141-12 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem340">**barcodeSequence** (Secuencia código de barras)</a>

|    |    |
| ---|--- |
| Definición | Secuencia de código de barras de ADN (parte o el 100% de la secuencia consenso). |
| Ejemplo | GTTAATGCTGCTATTATGTTTATATCGTTGGGATTAGACTATATAGGCTT<br>AATATTTATAATTGTCTATGTGGGGGCTATCGCGATTTTATTCCTGTT<br> CGTAATTATGTTAATTCAACAGCCTAATAAGGTAGATTCTCAAGATCAC<br> TCGCATTTTTTACCTGTAGGATTATCTGTTATATTTTTATTTTATAGTC<br> TACTAACCAATAGCCCCAAATATATCAGCAATCCTGTTATAGGATCTAG<br> AACTAACATTGGGGCAATTGGAAGTCATCTTTATACAACTTATTATGAA<br> TTAGTGTTAATTGCTAGTTTGGTGCTACTAGTCGCTATGATAGGGGCGA<br> TATTATTAGCTAAGCAGCCAAATTCACCTTTTTTATATA |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem341">**haplotype** (Haplotipo)</a>

|    |    |
| ---|--- |
| Definición | El nombre del haplotipo (si aplica). |
| Ejemplo | TA + CA |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem342">**marker** (Marcador)</a>

|    |    |
| ---|--- |
| Definición | El marcador genético o fragmento de ADN amplificado por PCR. |
| Ejemplo | COI<br> rbcL<br> 16S<br> ITS2 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem343">**markerSubfragment** (Subfragmento del marcador)</a>

|    |    |
| ---|--- |
| Definición | El nombre del subfragmento de un gen o locus. |
| Ejemplo | V6 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem344">**geneticAccessionNumber** (Número de accesión genético)</a>

|    |    |
| ---|--- |
| Definición | El identificador único bajo el cual se deposita la secuencia de ADN en una base de datos pública (número de acceso GenBank / EMBL / DDBJ / Bold Systems). |
| Ejemplo | AJ675356<br> ABBAC141-12 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem345">**BOLDProcessID** (ID del proceso de BOLD)</a>

|    |    |
| ---|--- |
| Definición | El identificador único del proceso (Process ID) con el que se deposita la secuencia de ADN en la base de datos BOLD (https://www.boldsystems.org/). |
| Ejemplo | CCOIV001-19 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem346">**geneticAccessionURI** (Identificador de accesión genético)</a>

|    |    |
| ---|--- |
| Definición | Un enlace del registro relacionado en una base de datos pública (registro GenBank / DDBJ / EMBL / Bold Systems). |
| Ejemplo | https://www.ncbi.nlm.nih.gov/nuccore/AY126426<br> https://www.boldsystems.org/index.php/Public_RecordView?processid=ABBAC141-12 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem347">**GC-content** (Contenido GC)</a>

|    |    |
| ---|--- |
| Definición | Contenido de guanina-citosina dado en mol % |
| Ejemplo | 35<br> 60 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem348">**chimera_check** (Verificación de secuencia quimérica)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si hay una secuencia quimérica. Una secuencia quimérica es una secuencia compuesta por dos o más secuencias parentales filogenéticamente distintas. Las quimeras son generalmente artefactos de PCR que se cree que ocurren cuando un amplicón terminado prematuramente se vuelve a sellar en una cadena de ADN extraño y se copia hasta su finalización en los siguientes ciclos de PCR. El punto en el que la secuencia quimérica cambia de un padre al siguiente se llama punto de ruptura o punto de conversión. |
| Ejemplo | Verdadero<br> Falso<br> Sí<br> No |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem349">**assembly** (Ensamblaje)</a>

|    |    |
| ---|--- |
| Definición | Descripción o método en cómo se realizó el ensamblaje (por ejemplo, con un ensamblador basado en texto como phrap o un ensamblador de diagrama de flujo, etc.). |
| Ejemplo | phrap |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem350">**sop** (Compensación)</a>

|    |    |
| ---|--- |
| Definición | Procedimientos operativos estándar relevantes. |
| Ejemplo |  |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem351">**finishing_strategy** (Estrategia de finalización)</a>

|    |    |
| ---|--- |
| Definición | Descripción para definir si el proyecto del genoma tenía la intención de producir un genoma completo o en borrador, el pliegue de cobertura de la secuenciación expresada como 2x, 3x, 18x, etc., y cuántos cóntigos se produjeron para el genoma. |
| Ejemplo | Genoma completo, 2x, 3 cóntigos |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem352">**annot_source** (Fuente de la anotación)</a>

|    |    |
| ---|--- |
| Definición | Fuente de la anotación para los casos en que fue proporcionada por un jamboree comunitario o una base de datos de organismos modelo, en lugar de un remitente específico. |
| Ejemplo |  |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem353">**markerAccordance** (Marcador acordado)</a>

|    |    |
| ---|--- |
| Definición | El resultado de la comparación de dos marcadores de dos especímenes o cepas. Se debe proporcionar el nombre o el identificador (NCBI) de los especímenes o cepas comparadas y el porcentaje de identidad relativo. |
| Ejemplo |  |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem354">**seq_quality_check** (Verificación de la calidad de la secuencia)</a>

|    |    |
| ---|--- |
| Definición | Elemento para indicar si la secuencia ha sido nombrada por sistemas automáticos (= Ninguno) o si se ha sometido a un procedimiento de edición manual (por ejemplo, inspeccionando los datos crudos o los cromatogramas). Se aplica solo para secuencias que no se envían a SRA o DRA. |
| Ejemplo | Ninguno<br> Editado manualmente |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem355">**adapters** (Adaptadores)</a>

|    |    |
| ---|--- |
| Definición | Nombre de los adaptadores. Los adaptadores proporcionan secuencias cebador tanto para la amplificación como para la secuenciación de los fragmentos de la librería de muestras. Se deben informar ambos adaptadores; en letras mayúsculas. |
| Ejemplo | EcoRI-adapterI, EcoRI-adapterIIo<br> Msel forward adapter, Msel reverse adapter |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem356">**mid** (Identificadores multiplex)</a>

|    |    |
| ---|--- |
| Definición | Códigos de barras moleculares, denominados Identificadores Multiplex (MIDs), que se utilizan específicamente para etiquetar muestras únicas en un ciclo de secuenciación. La secuencia se debe informar en letras mayúsculas. |
| Ejemplo | MID1 5′-ACGAGTGCGT-3′ |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

### Préstamo GGBN

|    |    |    |    |
| ---|--- |--- |--- |
| [**blocked**<br> (Bloqueado)](#elem357) | [**blockedUntil**<br> (Bloqueado hasta)](#elem358) | [**loanConditions**<br> (Condiciones del préstamo)](#elem359) | [**loanDate**<br> (Fecha del préstamo)](#elem360) |
| [**loanDestination**<br> (Destino del préstamo)](#elem361) | [**loanIdentifier**<br> (Identificador del préstamo)](#elem362) | [**disposition**<br> (Disposición)](#elem363) | [**receivedFrom**<br> (Recibido de)](#elem364) |
|    |    |    |    |

<br>
<br>

<a name="elem357">**blocked** (Bloqueado)</a>

|    |    |
| ---|--- |
| Definición | Elemento que indica si una muestra o espécimen se puede, o no se puede, prestar. |
| Ejemplo | Si<br> No |
| _(Obligatoriedad)_ | _(Obligatorio)_ |
|    |    |

<a name="elem358">**blockedUntil** (Bloqueado hasta)</a>

|    |    |
| ---|--- |
| Definición | La fecha a partir de la cual se puede prestar la muestra o espécimen. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem359">**loanConditions** (Condiciones del préstamo)</a>

|    |    |
| ---|--- |
| Definición | Condiciones bajo las cuales se puede prestar la muestra o espécimen. |
| Ejemplo | Únicamente para instituciones no comerciales<br> Únicamente con permiso del proveedor del material |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem360">**loanDate** (Fecha del préstamo)</a>

|    |    |
| ---|--- |
| Definición | La fecha en la que fue prestada la muestra o espécimen. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DD o para un intervalo de fechas: AAAA-MM-DD/AAAA-MM-DD). |
| Ejemplo | 2010<br> 2010-01<br> 2010-01-17<br> 2009/2010<br> 2009-02/10<br> 2010-01-17/18<br> 2009-02/2010-01<br> 2009-08-08/2009-10-26 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem361">**loanDestination** (Destino del préstamo)</a>

|    |    |
| ---|--- |
| Definición | El nombre de la persona y/o organización a la que se le prestó la muestra o espécimen. |
| Ejemplo | Pontificia Universidad Javeriana, Carlos Alberto Prieto López |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem362">**loanIdentifier** (Identificador del préstamo)</a>

|    |    |
| ---|--- |
| Definición | Un identificador asociado al préstamo realizado. |
| Ejemplo | PRT020 |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem363">**disposition** (Disposición)</a>

|    |    |
| ---|--- |
| Definición | El estado actual de un espécimen o muestra con respecto a la colección identificada en collectionCode o collectionID. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | En colección<br> Perdido<br> Voucher en otra parte<br> Duplicado en otra parte<br> Consumido |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

<a name="elem364">**receivedFrom** (Recibido de)</a>

|    |    |
| ---|--- |
| Definición | El nombre de la persona y/o organización de la que se recibió y autorizó el préstamo de la muestra o espécimen. |
| Ejemplo | Universidad de los Andes, María Isabel Cárdenas Contreras |
| _(Obligatoriedad)_ | _(Opcional)_ |
|    |    |

## Vocabularios Controlados

|    |    |    |    |
| ---|--- |--- |--- |
| [**basisOfRecord**<br> (Base del registro)](#elem365) | [**type**<br> (Tipo)](#elem366) | [**language**<br> (Idioma)](#elem367) | [**establishmentMeans**<br> (Medios de establecimiento)](#elem368) |
| [**degreeOfEstablishment**<br> (Grado de establecimiento](#elem369) | [**pathway**<br> (Ruta de introducción)](#elem370) | [**occurrenceStatus**<br> (Estado del registro biológico)](#elem371) | [**continent**<br> (Continente)](#elem372) |
| [**countryCode**<br> (Código del país)](#elem373) | [**threatStatus**<br> (Estado de amenaza)](#elem374) | [**appendixCITES**<br> (Apéndice CITES)](#elem375) | [**type**<br> (Tipo)](#elem376) |
|    |    |    |    |

<br>
<br>

<a name="elem365">**basisOfRecord** (Base del registro)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| PreservedSpecimen | El organismo está preservado (muerto), vivió dentro de tiempos históricos y existe (o alguna vez existió) una parte física que podría ser evaluada nuevamente.<br><br> Exclusivo para uso de las colecciones biológicas, las cuales custodian la evidencia física del espécimen preservado.<br><br> Siempre va acompañado del elemento type documentado como “Objeto físico”. |
| LivingSpecimen | Existe un espécimen vivo (crece o metaboliza) disponible en una colección.<br><br> Exclusivo para uso de las colecciones biológicas vivas y zoológicos, las cuales custodian la evidencia física del espécimen. No aplica para partes dormantes de un espécimen preservado.<br><br> Siempre va acompañado del elemento type documentado como “Objeto físico”. |
| HumanObservation | Se emplea para observaciones directas de un organismo completo y colectas temporales (captura y liberación del espécimen in situ).<br><br> También se emplea este valor si el espécimen observado fue posteriormente colectado y depositado en una colección biológica, pero el conjunto de datos no corresponde a la publicación de la colección biológica. En dicho caso se deben documentar los elementos collectionID y collectionCode para informar en qué colección se depositó el espécimen, y el Número de Catálogo (catalogNumber) dentro de la colección (o número de catálogo provisional), si este ya fue asignado.<br><br> Por lo general va acompañado del elemento type documentado como “Evento”; en caso de ser un registro sonoro detectado de forma directa por un humano, el elemento type se documenta como “Sonido”. |
| MachineObservation | Se emplea para cualquier tipo de observación indirecta de un organismo por medio de un equipo o medio digital (grabadora de sonido, cámara trampa, entre otros), donde la evidencia del registro puede ser evaluada nuevamente:<br><br> Según el caso, va acompañado del elemento type documentado como “Imagen estática”, “Imagen en movimiento” o “Sonido”. |
| MaterialSample | Se emplea cuando la evidencia del organismo es indirecta y corresponde solo a una parte de este, por ejemplo: sangre, tejido, pelo, heces, etc.<br><br> Siempre va acompañado del elemento type documentado como “Objeto físico”. |
| FossilSpecimen | Se emplea con organismos prehistóricos con evidencia fósil que soporta su existencia.<br><br> Siempre va acompañado del elemento type documentado como “Objeto físico”. |
|    |    |

<a name="elem366">**type** (Tipo)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| Objeto físico | Evidencia física que soporta el registro biológico.<br> Siempre complementa la base del registro (basisOfRecord): PreservedSpecimen, LivingSpecimen, MaterialSample y FossilSpecimen |
| Imagen estática | Una fotografía.<br> Complementa la base del registro (basisOfRecord): MachineObservation |
| Imagen en movimiento | Un video, puede incluir sonido.<br> Complementa la base del registro (basisOfRecord): MachineObservation |
| Sonido | Registro de audio.<br> Puede complementar la base del registro (basisOfRecord): MachineObservation y HumanObservation |
| Evento | Observación de los especímenes en campo.<br> Siempre complementa la base del registro (basisOfRecord): HumanObservation |
|    |    |

<a name="elem367">**language** (Idioma)</a>

|   |
| ---|
| Utilizar el vocabulario controlado para el idioma en la norma ISO 639-1. Solamente se usan 2 letras en minúscula, consulte la información en la página oficial de ISO [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php) |
|    |

<a name="elem368">**establishmentMeans** (Medios de establecimiento)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| native | Nativo |
| nativeReintroduced | Nativo reintroducido |
| introduced | Introducido |
| introducedAssistedColonisation | Introducido con colonización asistida |
| vagrant | Errante |
| uncertain | Incierto |
|    |    |

<a name="elem369">**degreeOfEstablishment** (Grado de establecimiento)</a>

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

<a name="elem370">**pathway** (Ruta de introducción)</a>
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

<a name="elem371">**occurrenceStatus** (Estado del registro biológico)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| Presente | Existe al menos un registro bien documentado de la presencia del taxón en el área. |
| Ausente | Existe evidencia para documentar la ausencia del taxón en el área. |
| present | Presente. Es obligatorio el uso del vocabulario en ingles para los registros marino-costeros. |
| absent | Ausente. Es obligatorio el uso del vocabulario en ingles para los registros marino-costeros. |
|    |    |

<a name="elem372">**continent** (Continente)</a>

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

<a name="elem373">**countryCode** (Código del país)</a>

|    |
| ---|--- |
| Utilizar el vocabulario controlado de la norma ISO 3166-1-alfa-2 de códigos de países. Solamente se usan 2 letras en mayúscula, consulte la información en la página [https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO](https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO) |
|    |

<a name="elem374">**threatStatus** (Estado de amenaza)</a>

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

<a name="elem375">**appendixCITES** (Apéndice CITES)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| I | Apéndice I que incluye todas las especies en peligro de extinción que están o pueden verse afectadas por el comercio. |
| II | Apéndice II  que incluye las especies que aunque no están amenazadas pueden llegar a estarlo  de no reglamentar su comercio de manera estricta. |
| III | Apéndice III que incluye las especies que sujetas a regulación dentro de cualquier jurisdicción con el propósito de prevenir o restringir la explotación, y que necesitan la cooperación de otras Partes en el control del comercio. |
|    |    |

<a name="elem376">**type** (Tipo)</a>

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
