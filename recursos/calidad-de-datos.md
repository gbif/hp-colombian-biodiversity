---
layout: heroImage
title: Calidad de datos
description: Herramientas para la validación y limpieza de los datos que permiten asegurar el uso de los datos por una amplia variedad de audiencias.
background: https://static.inaturalist.org/photos/20946687/large.jpg?1530983172
imageLicense: |
  Salamandra Manchada Fotografía de: Andrés Forero vía [Flickr](https://colombia.inaturalist.org/observations/14136879) 
toc: true
height: 41vh
---

La **calidad de datos** se puede definir como una característica esencial y necesaria para que los datos sean “adecuados para su uso” o tengan un “uso potencial valioso” [(Chapman, 2005)](https://assets.ctfassets.net/uo17ejk9rkwj/2gupj7dJIw62UeOUYiqSsm/0a4bb732bd7fd8cf28f7703dc20a43ba/Data_Quality_-_ENGLISH.pdf){:target="_blank"}.

Cuando los datos se utilizan sin tener una visión crítica sobre los posibles errores que contienen, los resultados de sus análisis pueden conducir a conclusiones erróneas y decisiones imprudentes basadas en evidencia poco confiable. Los datos tendrán calidad cuando la información derivada de los mismos representa correctamente el mundo real (los hechos). 

Con el fin de que los datos generados influyan en la toma de decisiones, es importante tener en cuenta el concepto de **calidad de datos** a lo largo de toda la cadena de la información. A continuación se listan varias herramientas útiles para la validación y limpieza de los datos.



# Limpieza de datos

Nombre | Uso | Descripción
------------ | ------------- | -------------
[OpenRefine](https://openrefine.org/){:target="_blank"} | Estructuración, estandarización y validación | Permite limpiar, transformar y dar formato a los datos, usar servicios web, corrección masiva campos, entre muchas otras. <br>[Formación - Uso básico](/formacion/laboratorios/OpenRefine){: .button .is-primary}
<br>[Formación - Rutinas](/formacion/laboratorios/RutinasOpenRefine){: .button .is-primary}
[Guía para la limpieza de datos sobre biodiversidad con OpenRefine](https://docs.gbif.org/openrefine-guide/3.0/es/){:target="_blank"} | Estructuración, estandarización y validación | Guía de uso de [OpenRefine](https://openrefine.org/){:target="_blank"} para la validación y limpieza de datos sobre biodiversidad.
[OpenRefine - Guía  básica](http://repository.humboldt.org.co/handle/20.500.11761/35350){:target="_blank"} | Estructuración, estandarización y validación | Guía básica de uso de [OpenRefine](https://openrefine.org/){:target="_blank"} para la validación y limpieza de datos sobre biodiversidad.
[OpenRefine - Guía  de validación y limpieza de datos sobre biodiversidad](http://repository.humboldt.org.co/handle/20.500.11761/35350){:target="_blank"} | Estructuración, estandarización y validación | Guía de uso de rutinas de calidad de datos implementando en el entorno del software de código abierto [OpenRefine](https://openrefine.org/){:target="_blank"}, y permiten crear flujos de trabajo específicos para cada conjunto de datos (Registros, Listas, Eventos).
[OpenRefine - Scripts for biodiversity Data Quality ](https://github.com/SIB-Colombia/data-quality-open-refine){:target="_blank"} | Estructuración, estandarización y validación | Repositorio de rutinas de calidad de datos implementadas en el software de código abierto [OpenRefine](https://openrefine.org/){:target="_blank"}, basado en herramientas informáticas libres, gratuitas y fáciles de utilizar.
[R Project](https://www.r-project.org/){:target="_blank"} | Estructuración, estandarización y validación | Permite limpiar y transformar datos  a través de paquetes que son cargados al software.
[R Studio](https://rstudio.com/){:target="_blank"} | Extensión de software |  Facilita la visualización de la herramienta R project Integra distintas ventanas funcionales.
[LifeWatch - Data Services](https://www.lifewatch.be/data-services/){:target="_blank"} | Validación , servicios geográficos y taxonómicos | A través de la conexión con diferentes servicios web la herramienta permite validar formatos, elementos DwC de publicación en OBIS, taxonomía y geografía.

# Limpieza de fechas


Nombre | Uso | Descripción
------------ | ------------- | -------------
[Canadensys - Date parsing](https://data.canadensys.net/tools/dates){:target="_blank"} | Estandarización de fechas | Realiza la conversión masiva de fechas al formato ISO8601: AAAA-MM-DD.

# Validación de información geográfica

Nombre | Uso | Descripción
------------ | ------------- | -------------
[Canadensys - Coordinate conversion](https://data.canadensys.net/tools/coordinates){:target="_blank"} | Estandarización de coordenadas | Realiza la conversión masiva de coordenadas geográficas (grados, minutos y segundos) a grados decimales.
[Divipola](https://geoportal.dane.gov.co/geovisores/territorio/consulta-divipola-division-politico-administrativa-de-colombia/){:target="_blank"} | Validación de nombres geográficos  | Permite la consulta de la División Político Administrativa de Colombia para la verificación de nombres y niveles.
[MarineRegions](https://www.marineregions.org/){:target="_blank"} | Validación de nombres geográficos  | Es una lista estándar de nombres y áreas marinas georeferenciadas a nivel global. Integra y brinda información geográfica desde el índice geográfico VLIMAR y la base de datos MARBOUND, y propone un estándar de ubicaciones, límites y regiones georeferenciadas marinas.
<a href= "/consultar/gacetero">Gacetero SiB</a> | Validación geográfica | Permite conocer la ubicación y nombre de las localidades, documentadas en diferentes proyectos asociados a la publicación de datos de biodiversidad a través del SiB Colombia, que han sido sometidas a un proceso de georreferenciación.
[Protocolo de georreferenciación de localidades](http://repository.humboldt.org.co/handle/20.500.11761/35180){:target="_blank"} | Georreferenciación | Define la metodología para la asignación de coordenadas en datos primarios sobre biodiversidad. 
[infoXY](http://splink.cria.org.br/infoxy?criaLANG=en){:target="_blank"} | Validación geográfica |Al ingresar coordenadas decimales la herramienta retorna información sobre cada punto, como el nombre del país, departamento y otras divisiones politico-administrativas. Si el punto cae en el mar la herramienta calcula la distancia más cercana a la costa, indicando el nombre del país. 
[Plexscape ](http://ws.plexscape.com/Services/CoordSysWS/Pages/Transformations.aspx){:target="_blank"} | Conversión de coordenadas |Realiza la conversión de coordenadas entre mas de 2500 diferentes sistemas ( grados decimales, planas) y datums a nivel mundial. Permite visualizar el resultado de la conversión en un mapa. 
[ispecies](https://ispecies.org/){:target="_blank"} | Espacialización de registros | Permite visualizar sobre un mapa los registros biológicos de una especie específica. Los registros están enlazados al Portal de datos de GBIF, donde se puede consultar información específica del espécimen.
[GEOLocate](https://www.geo-locate.org/){:target="_blank"} | Validación geográfica | Permite georreferenciar y confirmar localidades. Se encuentra también disponible la aplicación para escritorio. 
[GPS Visualizer](https://www.gpsvisualizer.com/){:target="_blank"} | Validación y visualización geográfica | Permite crear mapas y perfiles a partir de datos geográficos. La entrada de los datos puede ser en forma de datos de GPS, rutas, direcciones de calles o coordenadas simples.
[GeoNames](http://www.geonames.org/){:target="_blank"} | Validación geográfica | Facilita la consulta de más de 10 millones de nombres geográficos, disponibles para descargar gratuitamente. Permite georreferenciar y confirmar localidades. 
[OBIS map tool](https://obis.org/maptool/){:target="_blank"} | Validación geográfica | Se puede utilizar para geocodificar ubicaciones para  emparejar pares de coordenadas o cadenas de coordenadas en formato WKT. Las cadenas WKT son representaciones textuales de geometrías como puntos, polígonos y líneas.
[Calculadora Geodésica](http://sumapa.com/geocalc/geocalc.cfm){:target="_blank"} | Conversión y validación geográfica | Permite la conversión o transformación coordenadas en hasta 18 sistemas diferentes. 
[OBIS Plotter](http://iobis.github.io/plotter/){:target="_blank"} | Visualización geográfica | Es una herramienta muy simple para revisar rápidamente puntos en un mapa. Requiere de entrada un formato de texto delimitado (por ejemplo, CSV o pegado de Excel) y que los datos tengan una columna de longitud decimal: 'decimalLongitude'; y latitud decimal: 'decimalLatitude' para las corrdenadas . Así, es posible seleccionar un campo de interés a partir de la tabla original para cambiar el color de los puntos y la etiqueta que se muestra cuando se hace clic en un punto específico.
[geo:truc ](http://www.geotruc.net/?hl=es_ES){:target="_blank"} | Visualización geográfica | Permite obtener las coordenadas de un punto seleccionado en el mapa a través de google maps. 
[CartoDB ](https://carto.com/){:target="_blank"} | Validación y visualización geográfica | Permite importar y visualizar datos geoespaciales mediante la creación de mapas dinámicos.

# Validación de nombres y taxonomía

Nombre | Uso | Descripción
------------ | ------------- | -------------
[Species Matching](https://www.gbif.org/tools/species-lookup){:target="_blank"} | Validación de nombres científicos | Normaliza nombres de especies a partir de un archivo CSV de acuerdo al árbol taxonómico de GBIF. El archivo a someter debe contener una columna nombrada como 'scientificName' y opcionalmente la columna 'kingdom' (para el Reino) y 'id' (para un identificador).
[List Matching Service](https://www.catalogueoflife.org/listmatching/){:target="_blank"} | Validación de nombres científicos | Permite comparar y validar los nombres ingresados (incluyendo nombres aceptados y sinónimos) con la lista dinámica del Catálogo de la Vida (Catalogue of Life). 
[WoRMS Taxon match](http://www.marinespecies.org/aphia.php?p=match){:target="_blank"} | Validación de nombres científicos de organismos marinos | Contrasta automáticamente una lista de especies o lista de taxones con World Register of Marine Species - WoRMS. Después de la coincidencia, la herramienta devolverá su archivo con los AphiaID, nombres válidos, autoridades, clasificación WoRMS y / o cualquier otra salida que haya seleccionado. Valida máx. 1500 registros.
[GBIF - Name parser](https://www.gbif.org/tools/name-parser){:target="_blank"} | Estandarización de nombres científicos | Separa los nombres científicos en sus distintos componentes a partir del nombre introducido. Permite interpretar la mayoría de nombres científicos y atomizarlos independientemente de su código nomenclatural. 
[Global Names Index](http://gni.globalnames.org/){:target="_blank"} | Validación de nombres científicos | Permite corregir y/o enlazar la información acerca de cualquier taxón por medio de un proceso de "reconciliación" entre los nombres ya que contiene ejemplos de nombres científicos escritos con alguna variación.



