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
| Obligatoriedad | Obligatorio |
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
| Definición | Distancia horizontal expresada en metros desde la latitud y longitud dadas que describe el círculo más pequeño que contiene la ubicación del Evento de muestreo. Especialmente relevante cuando las coordenadas se redondean para proteger especies sensibles. |
| Ejemplo | 100 |

<br>

<a id="deploymentStart">deploymentStart (Inicio del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Fecha y hora en la que se inició el Evento de muestreo. Debe estar documentada en el esquema de codificación ISO 8601 con designador de zona horaria (AAAA-MM-DDThh:mm:ssZ o AAAA-MM-DDThh:mm:ss±hh:mm). |
| Ejemplo | 2025-04-01T22:00:00Z<br>2025-04-01T22:00:00-05:00 |

<br>

<a id="deploymentEnd">deploymentEnd (Fin del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Fecha y hora en la que finalizó el Evento de muestreo. Debe estar documentada en el esquema de codificación ISO 8601 con designador de zona horaria(AAAA-MM-DDThh:mm:ssZ o AAAA-MM-DDThh:mm:ss±hh:mm). |
| Ejemplo | 2025-04-01T22:00:00Z<br>2025-04-01T22:00:00-05:00 |

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
| Definición | Verdadero (true) si se sabe que la fecha y hora en los recursos multimedia (timestamp) del Evento de muestreo tienen problemas imposibles de solucionar (ej. zona horaria desconocida, cambio am/pm). Falso (false) si no hay ningún recurso multimedia con problemas en el Evento de muestreo. |
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
| [Vocabulario controlado](#vc_featureType) | culvert<br> roadPaved<br> fruitingTree |


<br>

<a id="habitat">habitat (Hábitat)</a>

| ---: | :--- |
| Definición | Caracterización breve del hábitat presente en la ubicación del Evento de muestreo. |
| Ejemplo | Bosque húmedo tropical |

<br>

<a id="deploymentGroups">deploymentGroups (Grupos de Eventos de muestreo)</a>

| ---: | :--- |
| Definición | Grupo(s) de Eventos de muestreo asociados con el registro. Los eventos pueden tener un contexto espacial (matrices, cuadrículas, clústeres), temporal (sesiones, temporadas, años) u otro contexto. Para valores múltiples se debe usar la estructura como lista (en una fila continua y separada por una barra vertical “\|”), preferiblemente organizados como pares clave:valor. |
| Ejemplo | Temporada:Seca 2020 \| Grilla:A1 |

<br>

<a id="deploymentTags">deploymentTags (Etiquetas del Evento de muestreo)</a>

| ---: | :--- |
| Definición | Etiqueta(s) asociada(s) con el Evento de muestreo. Para valores múltiples se debe usar la estructura como lista (en una fila continua y separada por una barra vertical “\|”), opcionalmente organizados como pares clave:valor. |
| Ejemplo | Límite de bosque \| Cebo:comida |

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
| Obligatoriedad | Recomendado |
| [Vocabulario controlado](#vc_captureMethod) | activityDetection<br> timeLapse |


<br>

<a id="timestamp">timestamp (Fecha y hora del archivo multimedia)</a>

| ---: | :--- |
| Definición | Fecha y hora en la que se tomó el archivo multimedia. Debe estar documentada en el esquema de codificación ISO 8601 con designador de zona horaria (AAAA-MM-DDThh:mm:ssZ o AAAA-MM-DDThh:mm:ss±hh:mm). |
| Ejemplo | 2020-03-24T11:21:46Z<br>2020-03-24T06:21:46-05:00 |

<br>

<a id="filePath">filePath (Ruta del archivo multimedia)</a>

| ---: | :--- |
| Definición | URL o ruta relativa al archivo multimedia, para archivos alojados externamente o para archivos que son parte de un paquete de datos, respectivamente. |
| Ejemplo | https://multimedia.agouti.eu/assets/6d65f3e4-4770-407b-b2bf-878983bf9872/file |

<br>

<a id="filePublic">filePublic (Archivo multimedia público)</a>

| ---: | :--- |
| Definición | Verdadero (true) si el archivo multimedia se puede acceder públicamente. Falso (false) si no es accesible públicamente (ej. para proteger la privacidad de las personas). |
| Elementos relacionados | timestamp, fileName |
| Obligatoriedad | Recomendado |
| Ejemplo | true |

<br>

<a id="fileName">fileName (Nombre del archivo multimedia)</a>

| ---: | :--- |
| Definición | Nombre del archivo multimedia. Si se proporciona, debería permitir ordenar los archivos cronológicamente dentro de un Evento de muestreo usando el elemento timestamp (primero) y el elemento fileName (segundo). |
| Ejemplo | IMG0001.jpg |

<br>

<a id="fileMediatype">fileMediatype (Tipo de archivo multimedia)</a>

| ---: | :--- |
| Definición | Tipo de archivo multimedia. Expresado utilizando uno de los tipos IANA (Internet Assigned Numbers Authority: [https://www.iana.org/assignments/media-types/media-types.xhtml](https://www.iana.org/assignments/media-types/media-types.xhtml){:target="_blank"}). |
| Ejemplo | image/jpeg |

<br>

<a id="exifData">exifData (Datos EXIF)</a>

| ---: | :--- |
| Definición | Datos EXIF del archivo multimedia. Deben estar documentados como un objeto JSON válido. |
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
| Definición | Comportamiento dominante del individuo(s) observado(s). Para valores múltiples se debe usar la estructura como lista (en una fila continua y separada por una barra vertical “\|”). |
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
| Definición | Etiqueta(s) asociada(s) con la observación. Para valores múltiples se debe usar la estructura como lista (en una fila continua y separada por una barra vertical “\|”). |
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
| [**featureType**<br> (Tipo de rasgo del paisaje)](#vc_featureType) | [**captureMethod**<br> (Método de captura)](#vc_captureMethod) | [**observationLevel**<br> (Nivel de la observación)](#vc_observationLevel) | [**observationType**<br> (Tipo de observación)](#vc_observationType) |
| [**cameraSetupType**<br> (Tipo de acción en la instalación de la cámara)](#vc_cameraSetupType) | [**lifeStage**<br> (Etapa de desarrollo)](#vc_lifeStage) | [**sex**<br> (Sexo)](#vc_sex) | [**classificationMethod**<br> (Método de clasificación)](#vc_classificationMethod) |

<br>
<br>

<a id="vc_featureType">**featureType** (Tipo de rasgo del paisaje)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| roadPaved | Carretera pavimentada |
| roadDirt | Vía sin pavimentar |
| trailHiking | Sendero de excursionismo |
| trailGame | Sendero de fauna |
| roadUnderpass | Paso de fauna subterráneo |
| roadOverpass | Paso de fauna superior |
| roadBridge | Puente de carretera |
| culvert | Alcantarilla |
| burrow | Madriguera |
| nestSite | Sitio de anidación |
| carcass | Cadáver |
| waterSource | Fuente de agua |
| fruitingTree | Árbol en fructificación |

<br>

<a id="vc_captureMethod">**captureMethod** (Método de captura)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| activityDetection | Detección de actividad |
| timeLapse | Lapso temporal |

<br>

<a id="vc_observationLevel">**observationLevel** (Nivel de la observación)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| media | Observación realizada a nivel de un archivo multimedia individual, donde cada foto o video es un solo registro independiente |
| event | Observación realizada a nivel de evento de registro, donde se agrupan varios archivos multimedia en un solo registro. |

<br>

<a id="vc_observationType">**observationType** (Tipo de observación)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| animal | Animal |
| human | Humano |
| vehicle | Vehículo |
| blank | Blanco |
| unknown | Desconocido |
| unclassified | No clasificado |

<br>

<a id="vc_cameraSetupType">**cameraSetupType** (Tipo de acción en la instalación de la cámara)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| setup | Instalación |
| calibration | Calibración |

<br>

<a id="vc_lifeStage">**lifeStage** (Etapa de desarrollo)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| adult | Adulto |
| subadult | Subadulto |
| juvenile | Juvenil |

<br>

<a id="vc_sex">**sex** (Sexo)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| female | Hembra |
| male | Macho |

<br>

<a id="vc_classificationMethod">**classificationMethod** (Método de clasificación)</a>

|  Vocabulario |  Definición  |
| ---|--- |
| human | Humana |
| machine | Máquina |
