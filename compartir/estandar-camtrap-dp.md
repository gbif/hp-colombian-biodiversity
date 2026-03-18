---
layout: heroImage
title: Estándar Camtrap DP
description: Conoce sus elementos y definiciones
background:  https://inaturalist-open-data.s3.amazonaws.com/photos/514423294/large.jpg
imageLicense: |
  Fotografía de: Esteban Marentes vía [Inaturalist](https://www.inaturalist.org/observations/286172070)
height: 41vh
toc: true
permalink: /elementos-camtrap-dp
---

El estándar **Camtrap DP** permite la consolidación de datos sobre cámaras trampa para compartir, usar y reusar la información de manera organizada, clara y completa.

El modelo de datos conceptual del estándar es un esquema con tres tablas para los datos y un archivo .json para los metadatos. Las tablas de datos corresponden a:

El **DwC** está compuesto por **categorías** que se utilizan para agrupar conjuntos de **elementos** de acuerdo a su naturaleza. Cada **elemento** a su vez, está compuesto por una definición, especificaciones y requerimientos. Los **elementos** pueden hacer parte de todos o algunos de los _core_.
 
Adicionalmente, existen **extensiones** que se pueden asociar principalmente al _core_. Las **extensiones** también están conformadas por **elementos** los cuales son usados para documentar información adicional y específica que no se relaciona dentro del _core_ (ej., descripción de las especies, rasgos funcionales, información genética, entre otros). Las **extensiones** pueden ser compatibles con todos o algunos de los _core_.

En esta página se presenta una aplicación del **CamtrapDP** en español y enfocada a la necesidades de país, la cual contiene a mano derecha una tabla de contenido con las **categorías** del estándar, que llevan a su vez al listado de **elementos** que conforman cada **categoría**. Dentro del listado de **elementos** es posible dirigirse directamente al **elemento** de interés en donde se encontrará la siguiente información detallada:

-    **Definición**: Texto que describe el alcance del **elemento**.
-    **Comentarios**:  Texto que complementa, a manera de anotación o aclaración, la información de la definición.
-    **Ejemplo**: Ejemplos textuales que hacen referencia a cómo se puede documentar el **elemento**.
-    **Elementos relacionados**: **Elementos** del estándar **DwC** que tienen relación estrecha con el **elemento** que esta siendo descrito.
-    _**(Obligatoriedad)**_: Obligatoriedad del  **elemento** dentro del estándar (opcional, condicional, obligatorio).
-    **Vocabulario controlado**: Opciones de textos preestablecidos que deben documentarse de manera obligatoria dentro del elemento. No se puede documentar información diferente a la relacionada en los vocabularios controlados. Adicionalmente, en este campo se puede hacer un redireccionamiento al listado y definiciones de los vocabularios controlados del **elemento**.

- La documentación oficial y en inglés del estándar se puede consultar en: [https://camtrap-dp.tdwg.org/](https://camtrap-dp.tdwg.org/){:target="_blank"}

*Fecha de última actualización: abril de 2026.*

## Categorías CamtrapDP

### Deployments - Evento de muestreo

|  Índice  |	|	|	|
| ---|--- |--- |--- |
| [**basisOfRecord**<br> (Base del registro)](#basisOfRecord) | [**type**<br> (Tipo)](#type) | [**institutionCode**<br> (Código de la institución)](#institutionCode) | [**institutionID**<br> (ID de la institución)](#institutionID) |
| [**collectionCode**<br> (Código de la colección)](#collectionCode) | [**collectionID**<br> (ID de la colección)](#collectionID) | [**datasetName**<br> (Nombre del conjunto de datos)](#datasetName) | [**datasetID**<br> (ID del conjunto de datos)](#datasetID) |
| [**modified**<br> (Modificado)](#modified) | [**language**<br> (Idioma)](#language) | [**license**<br> (Licencia)](#license) | [**rightsHolder**<br> (Titular de los derechos)](#rightsHolder) |
| [**accessRights**<br> (Derechos de acceso)](#accessRights) | [**bibliographicCitation**<br> (Citación bibliográfica)](#bibliographicCitation) | [**references**<br> (Referencias)](#references) | [**ownerInstitutionCode**<br> (Código de la institución propietaria)](#ownerInstitutionCode) |
| [**informationWithheld**<br> (Información retenida)](#informationWithheld) | [**dataGeneralizations**<br> (Generalización de los datos)](#dataGeneralizations) | [**dynamicProperties**<br> (Propiedades dinámicas)](#dynamicProperties) | |


|  Índice  |	|	|	|
| ---|--- |--- |--- |
| [**deploymentID**<br> (ID del Evento de muestreo)](#deploymentID) | [**locationID**<br> (ID de la ubicación)](#locationID) | [**locationName**<br> (Nombre de la ubicación)](#locationName) | [**latitude**<br> (Latitud)](#latitude) |
| [**longitude**<br> (Longitud)](#longitude) | [**coordinateUncertainty**<br> (Incertidumbre de las coordenadas)](#coordinateUncertainty) | [**deploymentStart**<br> (Inicio del Evento de muestreo)](#deploymentStart) | [**deploymentEnd**<br> (Fin del Evento de muestreo)](#deploymentEnd) |
| [**setupBy**<br> (Instalado por)](#setupBy) | [**cameraID**<br> (ID de la cámara)](#cameraID) | [**cameraModel**<br> (Modelo de la cámara)](#cameraModel) | [**cameraDelay**<br> (Demora de la cámara)](#cameraDelay) |
| [**cameraHeight**<br> (Altura de la cámara)](#cameraHeight) | [**cameraDepth**<br> (Profundidad de la cámara)](#cameraDepth) | [**cameraTilt**<br> (Inclinación de la cámara)](#cameraTilt) | [**cameraHeading**<br> (Orientación de la cámara)](#cameraHeading) |
| [**detectionDistance**<br> (Distancia de detección)](#detectionDistance) | [**timestampIssues**<br> (Problemas con las fechas)](#timestampIssues) | [**baitUse**<br> (Uso de cebo)](#baitUse) | [**featureType**<br> (Tipo de rasgo del paisaje)](#featureType) |
| [**habitat**<br> (Hábitat)](#habitat) | [**deploymentGroups**<br> (Grupos de Eventos de muestreo)](#deploymentGroups) | [**deploymentTags**<br> (Etiquetas del Evento de muestreo)](#deploymentTags) | [**deploymentComments**<br> (Comentarios del Evento de muestreo)](#deploymentComments) |

<br>
<br>

<a id="deploymentID">deploymentID (ID del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Identificador único del Evento de muestreo. |
| Ejemplo | dep1 |

<br>

<a id="locationID">locationID (ID de la ubicación)</a>

| ---: | :--- |
| Definición | Identificador de la ubicación del Evento de muestreo. |
| Ejemplo | loc1 |

<br>

<a id="locationName">locationName (Nombre de la ubicación)</a>

| ---: | :--- |
| Definición | Nombre asignado a la ubicación del Evento de muestreo. |
| Ejemplo | Chingaza MRI 01 |

<br>

<a id="latitude">latitude (Latitud)</a>

| ---: | :--- |
| Definición | Latitud de la ubicación del Evento de muestreo en grados decimales, utilizando el datum WGS84. |
| Ejemplo | 6.05486 |

<br>

<a id="longitude">longitude (Longitud)</a>

| ---: | :--- |
| Definición | Longitud de la ubicación del Evento de muestreo en grados decimales, utilizando el datum WGS84. |
| Ejemplo | -75.05486 |

<br>

<a id="coordinateUncertainty">coordinateUncertainty (Incertidumbre de las coordenadas)</a>

| ---: | :--- |
| Definición | Distancia horizontal expresada en mestros desde la latitud y longitud dadas que describe el círculo más pequeño que contiene la ubicación del Evento de muestreo. Especialmente relevante cuando las coordenadas se redondean para proteger especies sensibles. |
| Ejemplo | 100 |

<br>

<a id="deploymentStart">deploymentStart (Inicio del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Fecha y hora en la que se inició el Evento de muestreo. Debe estar documentada en el esquema de codificación ISO 8601 con designador de zona horaria (AAAA-MM-DDThh:mm:ssZ o AAAA-MM-DDThh:mm:ss±hh:mm). |
| Ejemplo | 2025-03-01T22:00:00Z |

<br>

<a id="deploymentEnd">deploymentEnd (Fin del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Fecha y hora en la que finalizó el Evento de muestreo. Debe estar documentada en el esquema de codificación ISO 8601 (AAAA-MM-DDThh:mm:ssZ o AAAA-MM-DDThh:mm:ss±hh:mm). |
| Ejemplo | 2025-04-01T22:00:00-05:00 |

<br>

<a id="setupBy">setupBy (Instalado por)</a>

| ---: | :--- |
| Definición | Nombre o identificador de la persona u organización que instaló la cámara. |
| Ejemplo | Ricardo Plata |

<br>

<a id="cameraID">cameraID (ID de la cámara)</a>

| ---: | :--- |
| Definición | Identificador de la cámara utilizada para el Evento de muestreo (ej. el número de serie del dispositivo). |
| Ejemplo | P800HG08192031 |

<br>

<a id="cameraModel">cameraModel (Modelo de la cámara)</a>

| ---: | :--- |
| Definición | Fabricante y modelo de la cámara. Debe estar documentado como fabricante-modelo. |
| Ejemplo | Reconyx-PC800 |

<br>

<a id="cameraDelay">cameraDelay (Demora de la cámara)</a>

| ---: | :--- |
| Definición | Duración predefinida después de una detección durante la cual se ignora cualquier actividad adicional. Expresada en segundos. |
| Ejemplo | 120 |

<br>

<a id="cameraHeight">cameraHeight (Altura de la cámara)</a>

| ---: | :--- |
| Definición | Altura en metros a la que se colocó la cámara. No debe combinarse con cameraDepth. |
| Ejemplo | 1.2 |

<br>

<a id="cameraDepth">cameraDepth (Profundidad de la cámara)</a>

| ---: | :--- |
| Definición | Profundidad en metros a la que se colocó la cámara. No debe combinarse con cameraHeight. |
| Ejemplo | 4.8 |

<br>

<a id="cameraTilt">cameraTilt (Inclinación de la cámara)</a>

| ---: | :--- |
| Definición | Ángulo expresado en grados en el que se colocó la cámara en el plano vertical. Con -90 mirando hacia abajo, 0 horizontal y 90 mirando hacia arriba. |
| Ejemplo | -90 |

<br>

<a id="cameraHeading">cameraHeading (Orientación de la cámara)</a>

| ---: | :--- |
| Definición | Ángulo en el que se colocó la cámara en el plano horizontal. Expresado en grados decimales en sentido horario desde el norte, con valores de 0 a 360: 0 = norte, 90 = este, 180 = sur, 270 = oeste. |
| Ejemplo | 225 |

<br>

<a id="detectionDistance">detectionDistance (Distancia de detección)</a>

| ---: | :--- |
| Definición | Distancia máxima expresada en metros a la cual la cámara puede detectar actividad de manera confiable. Típicamente medida haciendo que un humano se mueva frente a la cámara. |
| Ejemplo | 9.5 |

<br>

<a id="timestampIssues">timestampIssues (Problemas con las fechas)</a>

| ---: | :--- |
| Definición | Verdadero (true) si se sabe que la fecha y hora en los recursos multimedia (timestamp) del Evento de muestreo tienen problemas imposibles de solucionar (ej. zona horaria desconocida, cambio am/pm). |
| Ejemplo | false |

<br>

<a id="baitUse">baitUse (Uso de cebo)</a>

| ---: | :--- |
| Definición | Verdadero (true) si se utilizó cebo o atrayente para el Evento de muestreo. Se puede proporcionar más información en las etiquetas o comentarios. |
| Ejemplo | true |

<br>

<a id="featureType">featureType (Tipo de rasgo del paisaje)</a>

| ---: | :--- |
| Definición | Tipo de rasgo del paisaje (si lo hay) asociado con el Evento de muestreo. |
| Ejemplo | culvert |

<br>

<a id="habitat">habitat (Hábitat)</a>

| ---: | :--- |
| Definición | Caracterización breve del hábitat presente en la ubicación del Evento de muestreo. |
| Ejemplo | Bosque húmedo tropical |

<br>

<a id="deploymentGroups">deploymentGroups (Grupos de Eventos de muestreo)</a>

| ---: | :--- |
| Definición | Grupo(s) de Eventos de muestreo asociados con el registro. Los eventos pueden tener un contexto espacial (matrices, cuadrículas, clústeres), temporal (sesiones, temporadas, años) u otro contexto. Para valores múltiples se debe usar la estructurar como lista (en una fila continua y separada por una barra vertical “|”), preferiblemente organizados como pares clave:valor. |
| Ejemplo | Temporada:Seca 2020 | Grilla:A1 |

<br>

<a id="deploymentTags">deploymentTags (Etiquetas del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Etiqueta(s) asociada(s) con el Evento de muestreo. Para valores múltiples se debe usar la estructurar como lista (en una fila continua y separada por una barra vertical “|”), opcionalmente organizados como pares clave:valor. |
| Ejemplo | Límite de bosque | Cebo:comida |

<br>


<a id="deploymentComments">deploymentComments (Comentarios del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Comentarios o notas sobre el Evento de muestreo. |
| Ejemplo | Después de las lluvias recientes, el río estuvo cercano a un estado de desbordamiento |

<br>
<br>

### Media - Archivo multimedia

|  Índice  |    |    |    |
| ---|--- |--- |--- |
| [**occurrenceID**<br> (ID del Registro biológico)](#occurrenceID) | [**catalogNumber**<br> (Número de catálogo)](#catalogNumber) | [**recordNumber**<br> (Número del registro)](#recordNumber) | [**recordedBy**<br> (Registrado por)](#recordedBy) |
| [**recordedByID**<br> (ID del registrador)](#recordedByID) | [**individualCount**<br> (Número de individuos)](#individualCount) | [**organismQuantity**<br> (Cantidad del organismo)](#organismQuantity) | [**organismQuantityType**<br> (Tipo de cantidad del organismo)](#organismQuantityType) |
| [**sex**<br> (Sexo)](#sex) | [**lifeStage**<br> (Etapa de desarrollo)](#lifeStage) | [**reproductiveCondition**<br> (Condición reproductiva)](#reproductiveCondition) | [**caste**<br> (Casta)](#caste) |
| [**behavior**<br> (Comportamiento)](#behavior) | [**vitality**<br> (Estado de vitalidad)](#vitality) | [**establishmentMeans**<br> (Medios de establecimiento)](#establishmentMeans) | [**degreeOfEstablishment**<br> (Grado de establecimiento)](#degreeOfEstablishment) |
| [**pathway**<br> (Ruta de introducción)](#pathway) | [**occurrenceStatus**<br> (Estado del registro biológico)](#occurrenceStatus) | [**preparations**<br> (Preparaciones)](#preparations) | [**disposition**<br> (Disposición)](#disposition) |
| [**verbatimLabel**<br> (Etiqueta original)](#verbatimLabel) | [**otherCatalogNumbers**<br> (Otros números de catálogo)](#otherCatalogNumbers) | [**associatedMedia**<br> (Medios asociados)](#associatedMedia) | [**associatedOccurrences**<br> (Registros biológicos asociados)](#associatedOccurrences)
| [**associatedReferences**<br> (Referencias asociadas)](#associatedReferences) | [**associatedSequences**<br> (Secuencias asociadas)](#associatedSequences) | [**associatedTaxa**<br> (Taxones asociados)](#associatedTaxa) | [**occurrenceRemarks**<br> (Comentarios del registro biológico)](#occurrenceRemarks) |

<br>
<br>

<a id="occurrenceID">**occurrenceID** (ID del Registro biológico)</a>

| ---: | :--- |
| Definición | Un identificador único del registro biológico (observación, ejemplar, fotografía, etc.).<br><br> En ausencia de un identificador único global persistente, se recomienda construir uno a partir de la combinación:<br><br> Cuando pertenece a una observación: [código corto de la institución]:[palabra(s) clave del recurso]:[número de campo/número consecutivo]<br> Cuando pertenece a una colección: [código corto de la institución]:[código de la colección]:[número de catálogo].<br> No debe contener espacios en blanco o caracteres especiales.<br><br> Si usted ya maneja en su conjunto de datos un identificador único por registros biológico, puede usarlo como identificador en el conjunto de datos. |
| Ejemplo | Promigas:Compensacion-SanJuan:Fauna-00001<br> UCO:RESCATE_FAUNA_MULATOSII:1<br> UNIVALLE:CRM-UV:1974-001-1 |
| Core _(Obligatoriedad)_ | Registros _(Obligatorio)_ |

<br>

<a id="catalogNumber">**catalogNumber** (Número de catálogo)</a>

| ---: | :--- |
| Definición | Un identificador (preferiblemente único) asignado al espécimen, muestra o lote en la colección biológica. Puede repetirse en caso de que los especímenes están agrupados en la colección (Lote, Frasco, Caja, etc).<br><br> Debe documentarse de la misma forma que está en la etiqueta. |
| Ejemplo | 00001<br> 1974-001-1<br> 1732a<br> ANDES-E0813<br> Lepid0784 |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para especímenes depositados en una colección biológica |

<br>

<a id="recordNumber">**recordNumber** (Número del registro)</a>

| ---: | :--- |
| Definición | Un identificador dado al registro biológico en el momento en que fue registrado, sirve como un vínculo entre las anotaciones de campo y el registro biológico. No es el mismo catalogNumber, el cual es usualmente asignado una vez el espécimen ingresa a la colección. |
| Ejemplo | OPP 7107<br>  JARM-0008<br>  AFT 143 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |

<br>

<a id="recordedBy">**recordedBy** (Registrado por)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los nombres de las personas (observadores o recolectores) responsables de realizar el registro.<br><br> El colector u observador principal, especialmente si está asociado al recordNumber tomado en campo, se debe listar en primer lugar. Se debe mantener el mismo formato del nombre a lo largo de todos los registros y se recomienda evitar el uso de solo iniciales ya que esto genera ambigüedades para reconocer a las personas que realizaron el registro, de ser posible siempre escriba nombres completos. Documente el nombre de las personas y evite documentar nombres de grupos u organizaciones. |
| Ejemplo | Eduardo Amat García<br> Javier Maldonado Ocampo<br> Mónica Andrea Sánchez Torres \| Esteban Andrés Novoa López |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |

<br>

<a id="recordedByID">**recordedByID** (ID del registrador)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los ID de las personas (observadores o recolectores), grupos u organizaciones responsables de realizar el registro. Estos identificadores deben corresponder al ORCID, Wikidata u algún otro identificador único controlado. El orden en este elemento no indica una prioridad en la citación ni ningún otro tipo de relación jerárquica. |
| Ejemplo | https://orcid.org/0000-0001-6215-3617 \| https://orcid.org/0000-0003-1691-239X<br> https://www.wikidata.org/entity/Q28913658 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |

<br>

<a id="individualCount">**individualCount** (Número de individuos)</a>

| ---: | :--- |
| Definición | Número de individuos presentes en el momento del registro biológico (observación, ejemplar, fotografía, etc.). Utilice este elemento si todos los conteos corresponden a individuos, de lo contrario utilice organismQuantity y organismQuanitityType. |
| Ejemplo | 1<br> 25<br> 282 |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |

<br>

<a id="organismQuantity">**organismQuantity** (Cantidad del organismo)</a>

| ---: | :--- |
| Definición | Valor que representa una cantidad colectada u observada del organismo, expresada en un sistema de medida estándar para el organismo como cepas, células, porcentaje de biomasa, etc. Documentar este elemento junto con el elemento organismQuantityType. |
| Comentarios| El sistema de medida se debe documentar en el elemento organismQuantityType, como se muestra en el ejemplo a continuación:<br><br> Para el registro de cobertura de líquenes: organismQuantity: 30 / organismQuantityType: % de cobertura<br> Para la abundancia de fitoplancton: organismQuantity: 253 / organismQuantityType: Células por litro<br> Para comunidades vegetales: organismQuantity: r / organismQuantityType: Escala Braun-Blanquet |
| Ejemplo | 30<br> 253<br> r |
| Elementos relacionados | organismQuantityType |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |

<br>

<a id="organismQuantityType">**organismQuantityType** (Tipo de cantidad del organismo)</a>

| ---: | :--- |
| Definición | Sistema de medida estándar asociado a la cantidad de organismos. Documentar este elemento junto con el elemento organismQuantity. |
| Comentarios| La cantidad de organismos se debe documentar en el elemento organismQuantity, como se muestra a continuación:<br><br> Para el registro de cobertura de líquenes: organismQuantity: 30 / organismQuantityType: % de cobertura<br> Para la abundancia de fitoplancton: organismQuantity: 253 / organismQuantityType: Células por litro<br> Para comunidades vegetales: organismQuantity: r / organismQuantityType: Escala Braun-Blanquet |
| Ejemplo | Porcentaje de cobertura<br> Células por litro<br> Escala Braun-Blanquet |
| Elementos relacionados | organismQuantity |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos - Recomendado para la buena documentación de un registro biológico |

<br>

<a id="sex">**sex** (Sexo)</a>

| ---: | :--- |
| Definición | El sexo de el(los) organismo(s) representado(s) en el registro. Si en un mismo registro cuenta con varios organismos de diferentes sexos, genere registros (filas) diferentes por cada sexo. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Hembra<br> Hermafrodita<br> Macho<br> Desconocido<br> Indeterminado<br> Ginandromorfo |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |

<br>

<a id="lifeStage">**lifeStage** (Etapa de desarrollo)</a>

| ---: | :--- |
| Definición | La etapa de vida de el(los) organismo(s) en el momento del registro. Si en un mismo registro cuenta con varios organismos en diferentes etapas de vida, genere registros (filas) diferentes por cada etapa de vida. Se recomienda el uso del vocabulario sugerido disponible para este elemento. |
| Ejemplo | Huevo<br> Juvenil<br> Adulto<br> Cigoto<br> Embrión<br> Larva<br> Esporófito<br> Espora<br> Gametofito<br> Gameto<br> Pupa<br> Plántula<br> Floración<br> Fructificación |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |

<br>

<a id="reproductiveCondition">**reproductiveCondition** (Condición reproductiva)</a>

| ---: | :--- |
| Definición | Condición reproductiva de el(los) organismo(s) en el momento del registro. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | No reproductiva<br> En gestación<br> Floración<br> Fructificación |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="caste">**caste** (Casta)</a>

| ---: | :--- |
| Definición | La categorización de individuos para especies eusociales de algunos artrópodos. |
| Comentarios | Se recomienda el uso de un vocabulario controlado para cada taxón específico. |
| Ejemplo | Reina<br> Macho alado<br> Intercasta<br> Trabajador menor<br>  Soldado<br> Ergatoide |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_<br> Lista de chequeo _(Opcional)_|

<br>


<a id="behavior">**behavior** (Comportamiento)</a>

| ---: | :--- |
| Definición | Descripción del comportamiento de el(los) organismo(s) en el momento del registro. Se recomienda el uso de un vocabulario controlado. |
| Ejemplo | Posando<br> Alimentándose<br> Corriendo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="vitality">**vitality** (Estado de vitalidad)</a>

| ---: | :--- |
| Definición | Indicación de la vitalidad del organismo en el momento de la colecta u observación (vivo o muerto). |
| Comentarios | Se requiere el uso de un vocabulario controlado. Usar este elemento en registros documentados como PreservedSpecimen, MaterialSample, o HumanObservation en el elemento basisOfRecord. |
|  Ejemplo |  Vivo<br> Muerto<br> Grupo mixto<br> Incierto<br> No evaluado |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="establishmentMeans">**establishmentMeans** (Medios de establecimiento)</a>

| ---: | :--- |
| Definición | Una afirmación que de cuenta si un organismo ha sido introducido a un lugar y tiempo determinado a través de actividad humana directa o indirecta. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos degreeOfEstablishment y pathway. |
| Comentarios| Actualmente el estándar DwC no posee un elemento que permita documentar de manera adecuada la información de endemismos, este elemento es el más cercano para la documentación de esta información por lo cual se incluye el vocabulario 'Endémica'.|
| Elementos relacionados | degreeOfEstablishment, pathway |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#vc_establishmentMeans) | native<br> nativeReintroduced<br> introduced<br> introducedAssistedColonisation<br> vagrant<br> uncertain<br> Endémica |

<br>

<a id="degreeOfEstablishment">**degreeOfEstablishment** (Grado de establecimiento)</a>

| ---: | :--- |
| Definición | El grado en cual el organismo sobrevive, se reproduce y expande su rango de distribución en un lugar y tiempo determinado. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos establishmentMeans y pathway. |
| Elementos relacionados | establishmentMeans, pathway |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#vc_degreeOfEstablishment) | native<br> cultivated<br> released<br> established<br> colonising<br> widespreadInvasive |

<br>

<a id="pathway">**pathway** (Ruta de introducción)</a>

| ---: | :--- |
| Definición | El proceso por el cual un organismo llegó a un lugar y tiempo determinado. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. Se recomienda documentar este elemento acompañado de los elementos establishmentMeans y degreeOfEstablishment. |
| Elementos relacionados | establishmentMeans, degreeOfEstablishment |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |
|  [Vocabulario controlado](#vc_pathway) | releasedForUse<br> otherEscape<br> transportContaminant<br> transportStowaway<br> corridor<br> unaided |

<br>

<a id="occurrenceStatus">**occurrenceStatus** (Estado del registro biológico)</a>

| ---: | :--- |
| Definición | Estado que da cuenta de la presencia o ausencia de un taxón en una ubicación. Documente este elemento de acuerdo a las definiciones e indicaciones que acompañan el vocabulario controlado. Para este elemento se debe emplear el vocabulario controlado en inglés. |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio para registros marinos - Recomendado para la buena documentación de un registro biológico |
|  [Vocabulario controlado](#vc_occurrenceStatus) | present<br> absent |

<br>

<a id="preparations">**preparations** (Preparaciones)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de las preparaciones y los métodos de conservación de un ejemplar o una muestra del ejemplar.<br><br> Adicionalmente, si el espécimen fue colectado bajo un permiso de recolección de especímenes o acceso a recursos genéticos, debe indicar si fue una colecta temporal o una colecta definitiva seguido por el tipo de preparación. |
| Ejemplo | Colecta definitiva: Animal completo (ETOH)<br> Colecta definitiva: Preparación de muestra microbiológica<br> Colecta temporal: Extracción de ADN<br> Piel \| Cráneo \| Esqueleto<br> Animal completo (ETOH) \| Tejido (EDTA)<br> Fósil<br> Molde<br> Fotografía |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos |

<br>

<a id="disposition">**disposition** (Disposición)</a>

| ---: | :--- |
| Definición | El estado actual de un espécimen en relación a la colección identificada en collectionCode o collectionID. Se recomienda el uso de un vocabulario controlado. Si el espécimen fue colectado bajo un permiso de recolección de especímenes o acceso a recursos genéticos y fue entregado a una colección biológica se debe documentar "En colección", de lo contrario dejar vacío el elemento. |
| Ejemplo | En colección<br> Extraviado<br> Ejemplar testigo<br> Duplicados en otro lugar |
| Elementos relacionados| collectionCode, collectionID |
| Core _(Obligatoriedad)_ | Registros _(Condicional)_. Obligatorio cuando el registro está asociado a un permiso de recolección o de acceso a recursos genéticos |

<br>

<a id="verbatimLabel">**verbatimLabel** (Etiqueta original)</a>

| ---: | :--- |
| Definición | Texto que representa la información literal que está presente en la etiqueta, carácter por carácter. Libre de interpretación, traducción o transliteración. |
| Comentarios | El contenido de este elemento no debe incluir ningún tipo de embellecimiento, prefijos, encabezados u otras adiciones al texto original. Las abreviaciones no deben ser extendidas y posibles errores de tipeo no deben ser corregidos. Las nuevas líneas presentes en la etiqueta se deben representar utilizando una barra vertical “ \| ”. La práctica recomendada es utilizar solamente caracteres en la codificación UTF-8 y poner el comentario "El elemento verbatimLabel es derivado de una transcripción humana" en el elemento occurrenceRemarks. |
| Ejemplo | CARACTERIZACION DE LA FLORA DEL DEPARTAMENTO DEL CASANARE \| PIPER* \| Peperomia quadrangularis (J.V.Thmps.) A. Dietr. \| Det: M.P. Córdoba /sep 2011 \| Enredadera \| COLOMBIA: Dpto Casanare, Mpio Tauramena, Vda La Urama, Localidad La Mata de la Urama Lat: 5° 03’,19,2” N, Long: 72° 48’ 58,8” W . Altitud: 182 m s.n.m., 28 Enero 2011. \| Col: M .P.Córdoba, R. Ávila, L.Miranda y C. Pérez. \| No. Col.: M.P.Córdoba 6161 \| GOBERNACIÓN DEL CASANARE-WWF-FUNDACIÓN OMACHA \| 119 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>


<a id="otherCatalogNumbers">**otherCatalogNumbers** (Otros números de catálogo)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de números de catálogos anteriores o alternos, u otros identificadores usados por personas para el mismo registro biológico, ya sea en el actual o cualquier otro conjunto de datos o colección. |
| Ejemplo | CFMNH:Mammal:1234<br> NPS YELLO6778 \| MBG 33424 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="associatedMedia">**associatedMedia** (Medios asociados)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (publicación, referencia bibliográfica, identificador único global, URI) de los medios asociados al registro biológico. Se recomienda usar la extensión Simple Multimedia o Audubon Media Description las cuales cuentan con más elementos para describir la información multimedia asociada. |
| Ejemplo | https://sinchi.org.co/ciacol/ficha/24/Hypoclinemus%20mentalis<br> https://ia801004.us.archive.org/0/items/staphylococcusaureus.JPG \| https://ia903100.us.archive.org/33/items/CMPUJH012-macro.jpg |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="associatedOccurrences">**associatedOccurrences** (Registros biológicos asociados)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores de otros registros biológicos y su relación con este registro. Aplica para relaciones con organismos de diferente grupo taxonómico y se recomiendo documentar junto a el elemento associatedTaxa. Se recomienda hacer uso de la extensión Resource Relationship para documentar en más detalle la relación entre los registros biológicos asociados. |
| Ejemplo | http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067 \| http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393<br>  SELVA:Anillamiento:AA7330a |
| Elementos relacionados| associatedTaxa |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="associatedReferences">**associatedReferences** (Referencias asociadas)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (publicación, referencia bibliográfica, identificador único global, URI) de la literatura asociada al registro biológico. Se recomienda hacer uso de la extensión Literature References la cual cuenta con más elementos para describir la información de referencias asociada. |
| Ejemplo | http://www.sciencemag.org/cgi/content/abstract/322/5899/261<br> Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="associatedSequences">**associatedSequences** (Secuencias asociadas)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores (publicación, identificador único global, URI) de la información de la secuencia genética asociada al registro biológico. Se recomienda hacer uso de la extensión GGBN Amplification Extension la cual cuenta con más elementos para describir la información de secuencia genética asociada. |
| Ejemplo | https://www.ncbi.nlm.nih.gov/nuccore/U34853.1<br>  https://www.boldsystems.org/index.php/Public_RecordView?processid=ABBAC141-12 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="associatedTaxa">**associatedTaxa** (Taxones asociados)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores o nombres de taxones y su asociación con el registro biológico. |
| Ejemplo | Huésped: Quercus alba<br> Parásito: Apis mellifera |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="occurrenceRemarks">**occurrenceRemarks** (Comentarios del registro biológico)</a>

| ---: | :--- |
| Definición | Comentarios o anotaciones sobre el registro biológico. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Muerto en la vía<br> Registrado en el campus de la Universidad |
| Core _(Obligatoriedad)_ | Registros _(Recomendado)_ |

<br>
<br>

### Observations - Observaciones

| Índice |	|	|	|
| ---|--- |--- |--- |
| [**organismID**<br> (ID del organismo)](#organismID) | [**organismName**<br> (Nombre del organismo)](#organismName) | [**organismScope**<br> (Alcance del organismo)](#organismScope) | [**associatedOrganisms**<br> (Organismos asociados)](#associatedOrganisms) |
| [**previousIdentifications**<br> (Identificaciones previas)](#previousIdentifications) | [**organismRemarks**<br> (Comentarios del organismo)](#organismRemarks) |  |  |

<br>
<br>

<a id="organismID">**organismID** (ID del organismo)</a>

| ---: | :--- |
| Definición | Un identificador del organismo. Pretende facilitar el remuestreo del mismo individuo con fines generalmente de monitoreo. Aves anilladas, fotos de mamíferos acuáticos, árboles remuestreados, etc. |
| Ejemplo | U.amer. 44<br> CC09477<br> Orca J 23 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="organismName">**organismName** (Nombre del organismo)</a>

| ---: | :--- |
| Definición | El nombre textual dado a un organismo en un estudio o el nombre en la etiqueta asignada originalmente. |
| Ejemplo | Huberta<br> Willy la Ballena Asesina<br> Cheeta |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="organismScope">**organismScope** (Alcance del organismo)</a>

| ---: | :--- |
| Definición | Puede ser utilizado para indicar si la instancia del organismo representa un organismo discreto o un tipo particular de agregación. Se recomienda el uso de un vocabulario controlado. Este elemento no está destinado a ser utilizado para especificar una categoría taxonómica. |
| Ejemplo | Organismo multicelular<br> Manada<br> Clon<br> Colonia |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="associatedOrganisms">**associatedOrganisms** (Organismos asociados)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de los identificadores de otros organismos y su relación con el organismo documentado. Aplica para relaciones con organismos del mismo grupo taxonómico. Se recomienda hacer uso la extensión Resource Relationship para documentar en más detalle la relación entre los organismos asociados. |
| Ejemplo | Hermano de: FMNH:Mamífero:1234 \| Hermano de: FMNH:Mamífero:1235<br> Hijo de: MLS:sau:438 |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="previousIdentifications">**previousIdentifications** (Identificaciones previas)</a>

| ---: | :--- |
| Definición | Una lista (en una fila continua y separada por una barra vertical "\|") de asignaciones taxonómicas que se le han dado al organismo anteriormente. Puede contener la información de quién y cuándo realizó la identificación anterior. Se recomienda hacer uso de la extensión Identification [(https://tools.gbif.org/dwca-validator/extension.do?id=dwc:Identification#Identification)](https://tools.gbif.org/dwca-validator/extension.do?id=dwc:Identification#Identification){:target="_blank"}para el caso de colecciones biológicas. |
| Ejemplo | Pinus abies<br> Anthus sp., identificado en campo por G. Iglesias \| Anthus correndera, Identificado por el experto C. Cicero 2009-02-12 basado en morfología<br> Leptolyngbya cf. polysiphoniae \| Leptolyngbya sp. |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>

<a id="organismRemarks">**organismRemarks** (Comentarios del organismo)</a>

| ---: | :--- |
| Definición | Comentarios o anotaciones sobre el organismo registrado. Se recomienda que la longitud de la descripción no supere 20 palabras. |
| Ejemplo | Uno de una camada de seis<br> Fruto inmaduro cubierto por un indumento rojizo |
| Core _(Obligatoriedad)_ | Registros _(Opcional)_ |

<br>
<br>


<br>
<br>


## Vocabularios Controlados

| Índice |	|	|	|
| ---|--- |--- |--- |
| [**basisOfRecord**<br> (Base del registro)](#vc_basisOfRecord) | [**type**<br> (Tipo)](#vc_type) | [**language**<br> (Idioma)](#vc_language) | [**establishmentMeans**<br> (Medios de establecimiento)](#vc_establishmentMeans) |
| [**degreeOfEstablishment**<br> (Grado de establecimiento](#vc_degreeOfEstablishment) | [**pathway**<br> (Ruta de introducción)](#vc_pathway) | [**occurrenceStatus**<br> (Estado del registro biológico)](#vc_occurrenceStatus) | [**continent**<br> (Continente)](#vc_continent) |
| [**countryCode**<br> (Código del país)](#vc_countryCode) | [**threatStatus**<br> (Estado de amenaza)](#vc_threatStatus) | [**appendixCITES**<br> (Apéndice CITES)](#vc_appendixCITES) | [**type**<br> (Tipo)](#vc_multimedia_type) |


<br>
<br>

<a id="vc_basisOfRecord">**basisOfRecord** (Base del registro)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| PreservedSpecimen | El organismo está preservado (muerto), vivió dentro de tiempos históricos y existe (o alguna vez existió) una parte física que podría ser evaluada nuevamente.<br><br> Exclusivo para uso de las colecciones biológicas, las cuales custodian la evidencia física del espécimen preservado.<br><br> Siempre va acompañado del elemento type documentado como “PhysicalObject”. |
| LivingSpecimen | Existe un espécimen vivo (crece o metaboliza) disponible en una colección.<br><br> Exclusivo para uso de las colecciones biológicas vivas y zoológicos, las cuales custodian la evidencia física del espécimen. No aplica para partes dormantes de un espécimen preservado.<br><br> Siempre va acompañado del elemento type documentado como “PhysicalObject”. |
| HumanObservation | Se emplea para observaciones directas de un organismo completo y colectas temporales (captura y liberación del espécimen in situ).<br><br> También se emplea este valor si el espécimen observado fue posteriormente colectado y depositado en una colección biológica, pero el conjunto de datos no corresponde a la publicación de la colección biológica. En dicho caso se deben documentar los elementos collectionID y collectionCode para informar en qué colección se depositó el espécimen, y el Número de Catálogo (catalogNumber) dentro de la colección (o número de catálogo provisional), si este ya fue asignado.<br><br> Por lo general va acompañado del elemento type documentado como “Event”; en caso de ser un registro sonoro detectado de forma directa por un humano, el elemento type se documenta como “Sound”. |
| MachineObservation | Se emplea para cualquier tipo de observación indirecta de un organismo por medio de un equipo o medio digital (grabadora de sonido, cámara trampa, entre otros), donde la evidencia del registro puede ser evaluada nuevamente:<br><br> Según el caso, va acompañado del elemento type documentado como “StillImage”, “MovingImage” o “Sound”. |
| MaterialSample | Se emplea cuando la evidencia del organismo es indirecta y corresponde solo a una parte de este, por ejemplo: sangre, tejido, pelo, heces, etc.<br><br> Siempre va acompañado del elemento type documentado como “PhysicalObject”. |
| FossilSpecimen | Se emplea con organismos prehistóricos con evidencia fósil que soporta su existencia.<br><br> Siempre va acompañado del elemento type documentado como “PhysicalObject”. |

<br>

<a id="vc_type">**type** (Tipo)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| PhysicalObject | Evidencia física que soporta el registro biológico.<br> Siempre complementa la base del registro (basisOfRecord): PreservedSpecimen, LivingSpecimen, MaterialSample y FossilSpecimen |
| StillImage | Una fotografía.<br> Complementa la base del registro (basisOfRecord): MachineObservation |
| MovingImage | Un video, puede incluir sonido.<br> Complementa la base del registro (basisOfRecord): MachineObservation |
| Sound | Registro de audio.<br> Puede complementar la base del registro (basisOfRecord): MachineObservation y HumanObservation |
| Event | Observación de los especímenes en campo.<br> Siempre complementa la base del registro (basisOfRecord): HumanObservation |

<br>

<a id="vc_language">**language** (Idioma)</a>

| ---|
| Utilizar el vocabulario controlado para el idioma en la norma ISO 639-1. Solamente se usan 2 letras en minúscula, consulte la información en la página oficial de ISO [http://www.loc.gov/standards/iso639-2/php/code_list.php](http://www.loc.gov/standards/iso639-2/php/code_list.php) |

<br>

<a id="vc_establishmentMeans">**establishmentMeans** (Medios de establecimiento)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| native | Nativo |
| nativeReintroduced | Nativo reintroducido |
| introduced | Introducido |
| introducedAssistedColonisation | Introducido con colonización asistida |
| vagrant | Errante |
| uncertain | Incierto |

<br>

<a id="vc_degreeOfEstablishment">**degreeOfEstablishment** (Grado de establecimiento)</a>

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

<br>

<a id="vc_pathway">**pathway** (Ruta de introducción)</a>

La lista completa de vocabularios controlados se encuentra disponible en [https://dwc.tdwg.org/pw/#4-vocabulary](https://dwc.tdwg.org/pw/#4-vocabulary){:target="_blank"}. Utilice la palabra en la columna llamada controlled value. Se presentan los vocabularios más comunes a continuación:

|  Vocabulario |  Definición  |
| ---|--- |
| releasedForUse | Liberado |
| otherEscape | Escape accidental |
| transportContaminant | Contaminación en transporte |
| transportStowaway | Polizón en transporte |
| corridor | Corredor |
| unaided | Sin ayuda |

<br>

<a id="vc_occurrenceStatus">**occurrenceStatus** (Estado del registro biológico)</a>

| Vocabulario |  Definición |  Uso  |
| ---| ---|--- |
| Presente | Existe al menos un registro bien documentado de la presencia del taxón en el área. | Extensión Distribución de la Especie |
| Ausente | Existe evidencia para documentar la ausencia del taxón en el área. | Extensión Distribución de la Especie |
| present | Se encontró evidencia de la presencia de un organismo en el momento y lugar del registro biológico  | Core Registros |
| absent | No se encontró evidencia de la presencia de un organismo en el momento y lugar de la toma del registro biológico bajo un protocolo establecido específicamente para su detección  | Core Registros |

<br>

<a id="vc_continent">**continent** (Continente)</a>

|  Vocabulario |
| ---|
| América del Sur |
| América del Norte |
| Europa |
| África |
| Asia |
| Oceanía |
| Antártida |

<br>

<a id="vc_countryCode">**countryCode** (Código del país)</a>

| ---: | :--- |
| Utilizar el vocabulario controlado de la norma ISO 3166-1-alfa-2 de códigos de países. Solamente se usan 2 letras en mayúscula, consulte la información en la página [https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO](https://es.wikipedia.org/wiki/ISO_3166-1_alfa-2#CO){:target="_blank"} |

<br>

<a id="vc_threatStatus">**threatStatus** (Estado de amenaza)</a>

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

<br>

<a id="vc_appendixCITES">**appendixCITES** (Apéndice CITES)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| I | Apéndice I que incluye todas las especies en peligro de extinción que están o pueden verse afectadas por el comercio. |
| II | Apéndice II  que incluye las especies que aunque no están amenazadas pueden llegar a estarlo  de no reglamentar su comercio de manera estricta. |
| III | Apéndice III que incluye las especies que sujetas a regulación dentro de cualquier jurisdicción con el propósito de prevenir o restringir la explotación, y que necesitan la cooperación de otras Partes en el control del comercio. |

<br>

<a id="vc_multimedia_type">**type** (Tipo)</a>

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
