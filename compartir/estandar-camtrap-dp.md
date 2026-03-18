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
| [**mediaID**<br> (ID del archivo multimedia)](#mediaID) | [**deploymentID**<br> (ID del Evento de muestreo)](#deploymentID_media) | [**captureMethod**<br> (Método de captura)](#captureMethod) | [**timestamp**<br> (Fecha y hora del archivo multimedia)](#timestamp) |
| [**filePath**<br> (Ruta del archivo multimedia)](#filePath) | [**filePublic**<br> (Archivo multimedia público)](#filePublic) | [**fileName**<br> (Nombre del archivo multimedia)](#fileName) | [**fileMediatype**<br> (Tipo de archivo multimedia)](#fileMediatype) |
| [**exifData**<br> (Datos EXIF)](#exifData) | [**favorite**<br> (Archivo multimedia destacado)](#favorite) | [**mediaComments**<br> (Comentarios del archivo multimedia)](#mediaComments) | |

<br>
<br>

<a id="mediaID">mediaID (ID del archivo multimedia)</a>

| ---: | :--- |
| Definición | Identificador único del archivo multimedia. |
| Ejemplo | m1 |

<br>

<a id="deploymentID_media">deploymentID (ID del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Identificador del Evento de muestreo a la que pertenece el archivo multimedia. Clave foránea al elemento deployments.deploymentID. |
| Ejemplo | dep1 |

<br>

<a id="captureMethod">captureMethod (Método de captura)</a>

| ---: | :--- |
| Definición | Método utilizado para capturar el archivo multimedia. |
| Ejemplo | activityDetection |

<br>

<a id="timestamp">timestamp (Fecha y hora del archivo multimedia)</a>

| ---: | :--- |
| Definición | Fecha y hora en la que se tomó el archivo multimedia. Debe estar documentada en el esquema de codificación ISO 8601 con designador de zona horaria (AAAA-MM-DDThh:mm:ssZ o AAAA-MM-DDThh:mm:ss±hh:mm). |
| Ejemplo | 2020-03-24T11:21:46Z |

<br>

<a id="filePath">filePath (Ruta del archivo multimedia)</a>

| ---: | :--- |
| Definición | URL o ruta relativa al archivo multimedia, para archivos alojados externamente o para archivos que son parte de un paquete de datos, respectivamente. |
| Ejemplo | https://multimedia.agouti.eu/assets/6d65f3e4-4770-407b-b2bf-878983bf9872/file |

<br>

<a id="filePublic">filePublic (Archivo multimedia público)</a>

| ---: | :--- |
| Definición | Falso (false) si el archivo multimedia no es accesible públicamente (ej. para proteger la privacidad de las personas). |
| Ejemplo | true |

<br>

<a id="fileName">fileName (Nombre del archivo multimedia)</a>

| ---: | :--- |
| Definición | Nombre del archivo multimedia. Si se proporciona, debería permitir ordenar los archivos cronológicamente dentro de un Evento de muestreo usando el elemento timestamp (primero) y el elemento fileName (segundo). |
| Ejemplo | IMG0001.jpg |

<br>

<a id="fileMediatype">fileMediatype (Tipo de archivo multimedia)</a>

| ---: | :--- |
| Definición | Tipo de archivo multimedia. Expresado utilizando uno de los tipos IANA (Internet Assigned Numbers Authority). |
| Ejemplo | image/jpeg |

<br>

<a id="exifData">exifData (Datos EXIF)</a>

| ---: | :--- |
| Definición | Datos EXIF del archivo multimedia. Debe estar documentados como un objeto JSON válido. |
| Ejemplo | {"EXIF":{"ISO":200,"Make":"RECONYX"}} |

<br>

<a id="favorite">favorite (Archivo multimedia destacado)</a>

| ---: | :--- |
| Definición | Verdadero (true) si el archivo multimedia se considera de interés (ej. una imagen ejemplar de un individuo). |
| Ejemplo | true |

<br>

<a id="mediaComments">mediaComments (Comentarios del archivo multimedia)</a>

| ---: | :--- |
| Definición | Comentarios o notas sobre el archivo multimedia. |
| Ejemplo | Archivo corrupto |

<br>
<br>

### Observations - Observaciones

| Índice |	|	|	|
| ---|--- |--- |--- |
| [**observationID**<br> (ID de la observación)](#observationID) | [**deploymentID**<br> (ID del Evento de muestreo)](#deploymentID_obs) | [**mediaID**<br> (ID del archivo multimedia)](#mediaID_obs) | [**eventID**<br> (ID del evento de registro)](#eventID) |
| [**eventStart**<br> (Fecha y hora de inicio del evento)](#eventStart) | [**eventEnd**<br> (Fecha y hora de fin del evento)](#eventEnd) | [**observationLevel**<br> (Nivel de la observación)](#observationLevel) | [**observationType**<br> (Tipo de observación)](#observationType) |
| [**cameraSetupType**<br> (Tipo de acción en la instalación de la cámara)](#cameraSetupType) | [**scientificName**<br> (Nombre científico)](#scientificName) | [**count**<br> (Número de individuos)](#count) | [**lifeStage**<br> (Etapa de desarrollo)](#lifeStage) |
| [**sex**<br> (Sexo)](#sex) | [**behavior**<br> (Comportamiento)](#behavior) | [**individualID**<br> (ID del individuo)](#individualID) | [**individualPositionRadius**<br> (Radio de posición del individuo)](#individualPositionRadius) |
| [**individualPositionAngle**<br> (Ángulo de posición del individuo)](#individualPositionAngle) | [**individualSpeed**<br> (Velocidad del individuo)](#individualSpeed) | [**bboxX**<br> (Coordenada X del Bbox)](#bboxX) | [**bboxY**<br> (Coordenada Y del Bbox)](#bboxY) |
| [**bboxWidth**<br> (Ancho del Bbox)](#bboxWidth) | [**bboxHeight**<br> (Alto del Bbox)](#bboxHeight) | [**classificationMethod**<br> (Método de clasificación)](#classificationMethod) | [**classifiedBy**<br> (Clasificado por)](#classifiedBy) |
| [**classificationTimestamp**<br> (Fecha y hora de clasificación)](#classificationTimestamp) | [**classificationProbability**<br> (Probabilidad de la clasificación)](#classificationProbability) | [**observationTags**<br> (Etiquetas de la observación)](#observationTags) | [**observationComments**<br> (Comentarios de la observación)](#observationComments) |


<br>
<br>

<a id="observationID">observationID (ID de la observación)</a>

| ---: | :--- |
| Definición | Identificador único de la observación. |
| Ejemplo | obs1 |

<br>

<a id="deploymentID_obs">deploymentID (ID del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Identificador del Evento de muestreo a la que pertenece la observación. Clave foránea al elemento deployments.deploymentID. |
| Ejemplo | dep1 |

<br>

<a id="mediaID_obs">mediaID (ID del archivo multimedia)</a>

| ---: | :--- |
| Definición | Identificador del archivo multimedia que fue clasificado. Solo aplicable para observaciones a nivel de archivo multimedia (observationLevel = media). Clave foránea al elemento media.mediaID. |
| Ejemplo | m1 |

<br>

<a id="eventID">eventID (ID del evento de registro)</a>

| ---: | :--- |
| Definición | Identificador del evento al que pertenece la observación. Facilita la vinculación de observaciones a nivel de eventos y de observaciones a nivel de archivo multimedia con un identificador permanente. |
| Ejemplo | sequence1 |

<br>

<a id="eventStart">eventStart (Fecha y hora de inicio del evento)</a>

| ---: | :--- |
| Definición | Fecha y hora en la que inició el evento. Debe estar documentada en el esquema de codificación ISO 8601 con designador de zona horaria (AAAA-MM-DDThh:mm:ssZ o AAAA-MM-DDThh:mm:ss±hh:mm). |
| Ejemplo | 2020-03-01T22:00:00Z |

<br>

<a id="eventEnd">eventEnd (Fecha y hora de fin del evento)</a>

| ---: | :--- |
| Definición | Fecha y hora en la que finalizó el evento. Debe estar documentada en el esquema de codificación ISO 8601 con designador de zona horaria (AAAA-MM-DDThh:mm:ssZ o AAAA-MM-DDThh:mm:ss±hh:mm). |
| Ejemplo | 2020-04-01T22:00:00-05:00 |

<br>

<a id="observationLevel">observationLevel (Nivel de la observación)</a>

| ---: | :--- |
| Definición | Nivel al cual se clasificó la observación. Para observaciones a nivel de archivos multimedia documentar "media" y para observaciones a nivel de evento documentar (varios archivos multimedia agrupados en una misma observación) "event". |
| Ejemplo | media |

<br>

<a id="observationType">observationType (Tipo de observación)</a>

| ---: | :--- |
| Definición | Tipo de la observación (animal, human, vehicle, blank, unknown, unclassified). |
| Ejemplo | animal |

<br>

<a id="cameraSetupType">cameraSetupType (Tipo de acción en la instalación de la cámara)</a>

| ---: | :--- |
| Definición | Tipo de acción en la instalación de la cámara (si la hay) asociada con la observación. |
| Ejemplo | calibration |

<br>

<a id="scientificName">scientificName (Nombre científico)</a>

| ---: | :--- |
| Definición | Nombre científico del individuo(s) observado(s). |
| Ejemplo | Chloroceryle amazona |

<br>

<a id="count">count (Número de individuos)</a>

| ---: | :--- |
| Definición | Número de individuos observados (opcionalmente de una etapa de desarrollo, sexo y comportamiento). |
| Ejemplo | 5 |

<br>

<a id="lifeStage">lifeStage (Etapa de desarrollo)</a>

| ---: | :--- |
| Definición | Etapa de desarrollo o estadio de vida del individuo(s) observado(s). |
| Ejemplo | adult |

<br>

<a id="sex">sex (Sexo)</a>

| ---: | :--- |
| Definición | Sexo del individuo(s) observado(s). |
| Ejemplo | female |

<br>

<a id="behavior">behavior (Comportamiento)</a>

| ---: | :--- |
| Definición | Comportamiento dominante del individuo(s) observado(s). Para valores múltiples se debe usar la estructurar como lista (en una fila continua y separada por una barra vertical “\|”). |
| Ejemplo | Vigilante |

<br>

<a id="individualID">individualID (ID del individuo)</a>

| ---: | :--- |
| Definición | Identificador del individuo observado. |
| Ejemplo | RD213 |

<br>

<a id="individualPositionRadius">individualPositionRadius (Radio de posición del individuo)</a>

| ---: | :--- |
| Definición | Distancia expresada en metros desde la cámara hasta el individuo observado. |
| Ejemplo | 6.81 |

<br>

<a id="individualPositionAngle">individualPositionAngle (Ángulo de posición del individuo)</a>

| ---: | :--- |
| Definición | Distancia angular expresada en grados desde la línea central de visión de la cámara hasta el individuo observado. |
| Ejemplo | -8.56 |

<br>

<a id="individualSpeed">individualSpeed (Velocidad del individuo)</a>

| ---: | :--- |
| Definición | Velocidad de movimiento promedio expresada en metros por segundo del individuo observado. |
| Ejemplo | 1.75 |

<br>

<a id="bboxX">bboxX (Coordenada X del Bbox)</a>

| ---: | :--- |
| Definición | Posición horizontal de la esquina superior izquierda de un cuadro delimitador (bounding box) relativa al ancho del archivo multimedia. |
| Ejemplo | 0.2 |

<br>

<a id="bboxY">bboxY (Coordenada Y del Bbox)</a>

| ---: | :--- |
| Definición | Posición vertical de la esquina superior izquierda de un cuadro delimitador (bounding box) relativa al alto del archivo multimedia. |
| Ejemplo | 0.25 |

<br>

<a id="bboxWidth">bboxWidth (Ancho del Bbox)</a>

| ---: | :--- |
| Definición | Ancho del cuadro delimitador relativo al ancho del archivo multimedia. |
| Ejemplo | 0.4 |

<br>

<a id="bboxHeight">bboxHeight (Alto del Bbox)</a>

| ---: | :--- |
| Definición | Alto del cuadro delimitador relativo al alto del archivo multimedia. |
| Ejemplo | 0.5 |

<br>

<a id="classificationMethod">classificationMethod (Método de clasificación)</a>

| ---: | :--- |
| Definición | Método utilizado (más recientemente) para clasificar la observación. |
| Ejemplo | human |

<br>

<a id="classifiedBy">classifiedBy (Clasificado por)</a>

| ---: | :--- |
| Definición | Nombre o identificador de la persona o algoritmo de IA que clasificó la observación. |
| Ejemplo | MegaDetector V5 |

<br>

<a id="classificationTimestamp">classificationTimestamp (Fecha y hora de clasificación)</a>

| ---: | :--- |
| Definición | Fecha y hora de la clasificación más reciente. Debe estar documentada en el esquema de codificación ISO 8601 con designador de zona horaria (AAAA-MM-DDThh:mm:ssZ o AAAA-MM-DDThh:mm:ss±hh:mm). |
| Ejemplo | 2020-08-22T10:25:19Z |

<br>

<a id="classificationProbability">classificationProbability (Probabilidad de la clasificación)</a>

| ---: | :--- |
| Definición | Grado de certeza de la clasificación más reciente (valor de 0 a 1). |
| Ejemplo | 0.95 |

<br>

<a id="observationTags">observationTags (Etiquetas de la observación)</a>

| ---: | :--- |
| Definición | Etiqueta(s) asociada(s) con la observación. Para valores múltiples se debe usar la estructurar como lista (en una fila continua y separada por una barra vertical “\|”). |
| Ejemplo | DirecciónDeViaje:Izquierda |

<br>

<a id="observationComments">observationComments (Comentarios de la observación)</a>

| ---: | :--- |
| Definición | Comentarios o notas sobre la observación. |
| Ejemplo | Especie migratoria presente en Colombia durante el mes de junio |

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
