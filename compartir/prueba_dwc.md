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
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | PreservedSpecimen<br> HumanObservation<br> LivingSpecimen<br> FossilSpecimen<br> MachineObservation<br> MaterialSample<br> MaterialCitation |
|    |    |

<a name="elem002">**type (Tipo)**</a>

|    |    |
| ---|--- |
| Definición | Especifica el tipo de evidencia que da origen al registro, ampliando la información presente en el elemento basisOfRecord. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. |
| Elementos relacionados | basisOfRecord |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_<br> Evento de muestreo _(Opcional)_ |
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | Stillmage<br> MovingImage<br> Sound<br> PhysicalObject<br> Event |
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
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados#vocabularios-controlados) | Consultar en: [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php) |
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
|  [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | native<br> nativeReintroduced<br> introduced<br> introducedAssistedColonisation<br> vagrant<br> uncertain |
|    |    |

<a name="elem033">**degreeOfEstablishment** (Grado de establecimiento)</a>

|    |    |
| ---|--- |
| Definición | El grado en cual el organismo sobrevive, se reproduce y expande su rango de distribución en un lugar y tiempo determinado. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos establishmentMeans y pathway. |
| Elementos relacionados | establishmentMeans, pathway |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | native<br> cultivated<br> released<br> established<br> colonising<br> widespreadInvasive |
|    |    |

<a name="elem034">**pathway** (Ruta de introducción)</a>

|    |    |
| ---|--- |
| Definición | El proceso por el cual un organismo llegó a un lugar y tiempo determinado. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos establishmentMeans y degreeOfEstablishment. |
| Elementos relacionados | establishmentMeans, degreeOfEstablishment |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | releasedForUse<br> otherEscape<br> transportContaminant<br> transportStowaway<br> corridor<br> unaided |
|    |    |

<a name="elem035">**occurrenceStatus** (Estado del registro biológico)</a>

|    |    |
| ---|--- |
| Definición | Estado que da cuenta de la presencia o ausencia de un taxón en una ubicación. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | present<br> absent |
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
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de números de catálogos anteriores o alternos, u otros identificadores usado por personas para el mismo registro biológico, ya sea en el actual o cualquier otro conjunto de datos o colección. |
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
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de asignaciones taxonómicas que se le han dado al organismo anteriormente. Puede contener la información de quién y cuándo realizó la identificación anterior. Se recomienda hacer uso de la extensión Identification [(https://tools.gbif.org/dwca-validator/extension.do?id=dwc:Identification#Identification)](https://tools.gbif.org/dwca-validator/extension.do?id=dwc:Identification#Identification) para el caso de colecciones bológicas. |
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
| Definición | Un identificador único para la categoría superior del evento de muestreo. Por ejemplo el identificador del muestreo de un cuadrante, parcela o transecto independientemente del tiempo o temporada cuando se realice el muestro. Este identificador es más general que el eventID y puede agrupar varios eventID. |
| Comentarios | Este elemento debe estar acompañado siempre del elemento eventID, como se muestra en el ejemplo a continuación:<br><br> A1 como parentEventID para identificar una parcela, cada sub-parcela con su propio eventID (A1:1, A1:2, etc.)<br> BENTOS como parentEventID para identificar un evento de muestreo y cada parte del evento con us propio eventID (BENTOS:E-1, BENTOS:E-2, etc.) |
| Ejemplo | A1<br> BENTOS |
| Elementos relacionados | eventID |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Evento de muestreo _(Opcional)_ |
|    |    |

<a name="elem053">**eventID** (ID del evento)</a>

|    |    |
| ---|--- |
| Definición | Un identificador único para el Evento de muestreo, que ocurre en un lugar y tiempo determinado. Por ejemplo el identificador del muestreo de un cuadrante, parcela o transecto en un tiempo o temporada específicos. Este identificador es más específico que el parentEventID. |
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
| Ejemplo | Notas disponibles en la Biblioteca Grinnell-Miller<br> Este espécimen fue colectado en un arbol de caracoli, una nota de campo fue descrita para mencionar este evento, eran depredados por Epicrates maurus |
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
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de la geografía inmediatamente superior al sitio o ubicación donde se realizó el registro. Si hay modificaciones en la localidad para estandarizar su contenido puede documentar en este elemento los los datos originales (sin estandarizar) de esos términos. |
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
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | SA<br> AF<br> AS<br> EU<br> NA<br> OC<br> AN |
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
| [Vocabulario controlado](https://biodiversidad.co/compartir/dwc#vocabularios-controlados) | Consultar en: [https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO](https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO) |
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
| Definición | La latitud geográfica (en grados decimales, utilizando el sistema de referencia espacial provisto en geodeticDatum) del centro geográfico de una ubicación. Los valores positivos se encuentran al norte del ecuador, los valores negativos estan al sur del mismo. Los valores admitidos se encuentran entre -90 y 90. |
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
| Definición | Comentarios o anotaciones acerca de la determinación de la descripción espacial, los supuestos hechos que explican las adiciones formalizadas en el método referido en  georeferenceProtocol. Se recomienda que la longitud de la descripción no supere 20 palabras.. |
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
| [**identificationReferences**<br> (Referencias de la identificación)](#elem137) | [**identificationVerificationStatus**<br> (Estado de la verificación de la identificación)](#elem138) | [**typeStatus**<br> (Tipo nomeclatural)](#elem139) | [**verbatimIdentification**<br> (Identificación original)](#elem140) |
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

