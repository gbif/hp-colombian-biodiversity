---
layout: documentation
permalink: /formacion/laboratorios/datos-en-contexto-reporte
title: "Datos en contexto para reporte"
description: "Objetivo: Aprender a documentar los metadatos en la herramienta de publicación IPT."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Datos en contexto para reporte

**Objetivo**

Aprender a documentar los metadatos en la herramienta de publicación IPT.

**Introducción**

Los metadatos son la información de contexto asociada a los datos que se van a publicar, contienen información descriptiva y estandarizada sobre aspectos como el “quién, qué, dónde, cuándo, por qué y cómo”. En términos prácticos es el contexto de los datos e información. Se documentan siguiendo una estructura similar a un artículo científico, con un resumen, unos autores, metodología, etc. Esto permite dar suficiente información para que una persona pueda ver si está interesada en utilizar los datos sin tener que descargarlos necesariamente.

**Sobre la herramienta**

La herramienta de publicación [IPT](https://www.gbif.org/es/ipt){:target="_blank"} es un _software_ gratuito y de código abierto que se utiliza para publicar y compartir conjuntos de datos sobre biodiversidad a través del [SiB Colombia](https://biodiversidad.co), [GBIF](https://www.gbif.org/){:target="_blank"} y [OBIS](https://obis.org/){:target="_blank"}. Este _software_ permite integrar datos y metadatos en un mismo formato de archivo, conocido como _Darwin Core Archive_ (DwC-A). Además, esta herramienta sirve para cargar datos de múltiples fuentes y en diversos formatos de archivo, lo que facilita la integración de los mismos y su proceso de publicación. 

Las instancias de publicación principales son: [IPT SiB](https://ipt.biodiversidad.co/sib/){:target="_blank"}, el [IPT SiB Marino](https://ipt.biodiversidad.co/sibm/){:target="_blank"} para los datos marino-costeros y el [IPT Permisos](https://ipt.biodiversidad.co/permisos/){:target="_blank"} para los datos compartidos con la única finalidad de obtener certificados de reporte. Para el desarrollo de esta guía, se usará la instancia de pruebas IPT-Test, la cual es una instancia de pruebas del SiB Colombia creada principalmente para fines pedagógicos.

**Enlace**

IPT Test: [https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/){:target="_blank"}

**Caso de estudio**

Esta guía provee un caso de ejemplo para realizar el ejercicio. Sin embargo, se recomienda realizar el laboratorio con base en un informe o artículo de datos propios. El caso de estudio  está basado en una historia ficticia y fue creado solo para propósitos educativos.

**Título**: Evaluación de la fauna y flora presente en el Parque Municipal Natural Campo Alegre como parte de la socialización de resultados con los habitantes de la zona

- **1. Introducción**
El presente informe es el resultado del estudio de flora y fauna realizado en el Parque Municipal Natural Campo Alegre, con el objetivo de identificar las especies que están presentes en ese predio. El estudio se llevó a cabo en octubre del 2020.

Este documento contiene información acerca de los métodos y resultados obtenidos en el estudio de flora y fauna. Además, hace parte del compromiso que tiene la empresa Ambiental Buenaventura Consultores (ABC) de socializar el resultado de sus monitoreos ambientales y hacerlo accesible a todos los interesados. El estudio fue financiado por la alcaldía de Santa Rosa de Cabal para conocer mejor sus áreas protegidas.

- **2. Área de estudio**

El Parque Municipal Natural Campo Alegre está ubicado al interior de la finca La Albania, propiedad del municipio de Santa Rosa de Cabal, en el departamento de Risaralda. Tiene dos hábitats principales: el Bosque húmedo y el Bosque húmedo premontano, los cuales se ubican en una altura de 1701 msnm a 1800 msnm.

- **3. Metodología**

Se realizó el levantamiento de información con metodologías diferenciadas para fauna y flora. Para las plantas, se realizó un inventario forestal que tuvo en cuenta todos los individuos presentes en el transecto realizado atravesando el parque, allí se registraron los individuos con diámetros superiores a 10 cm de DAP y se tomaron datos de altura total, comercial, georreferenciación y marcación de los individuos, entre otras. Las especies se identificaron en campo con la guía de Bernal et al.(2016).

Para las especies que no se pudieron identificar en campo, se realizó la colecta botánica por medio de prensado y se depositó en el Museo de Historia Natural C.J. Marinkelle-Universidad de los Andes para su identificación y custodia. 

Para los animales, se realizó un transecto de muestreo delimitado a través del parque, en el que se iban realizando observaciones libres con ayuda de binoculares y guías de campo para los diferentes grupos biológicos.

La identificación de las aves se efectuó con la ayuda de las guías de Hilty y Brown (2001), los mamíferos se identificaron con la guía de Solari et al. (2013) y los herpetos con la guía de Suarez y Alzate (2014).

En ambos casos, se documentaba la información de la especie observada, la fecha y las coordenadas en una libreta de campo.

- **4. Resultados**

Se registraron un total de 20 individuos, discriminados de la siguiente forma: 8 para flora y 12 para fauna. Se observaron 6 especies y 1 género de fauna, y 3 especies y 2 géneros en flora. La información recopilada se estructuró y estandarizó con base en las plantillas del SiB Colombia.

- **5. Conclusiones**

Al comparar el número de especies con otras reservas de tamaño y conservación similar, se evidencia una bajo número de diversidad debido a la metodología utilizada para un levantamiento rápido de información. Para futuras evaluaciones de biodiversidad, se recomienda aumentar la intensidad de muestreo y abarcar otros grupos de importancia, como insectos y líquenes.

Como parte del proceso de estructuración, lo ideal es incluir las recomendaciones del estándar DarwinCore desde la toma de datos para evitar los reprocesos de calidad. Adicionalmente, se recomienda realizar un proceso de enriquecimiento de los datos, complementando la información con la taxonomía superior más actualizada.

- **6. Referencias**
  - Hilty, S. y Brown W. 1986. A guide to the birds of Colombia. Princeton University Press, New Jersey, NJ.
  - Rodrigo Bernal, S. Robbert Gradstein, Marcela Celis, editores. 2016. Catálogo de plantas y líquenes de Colombia -- Primera edición. -- Bogotá : Universidad Nacional de Colombia (Sede Bogotá). Facultad de Ciencias. Instituto de Ciencias Naturales.
  - Solari, S., Muñoz-Saba, Y., Rodríguez-Mahecha, J. V., Defler, T. R., Ramírez-Chaves, H. E., & Trujillo, F. (2013). Riqueza, endemismo y conservación de los mamíferos de Colombia. Mastozoología neotropical, 20(2), 301-365.
  - Suárez, Ana María y Esteban Alzate Basto. 2014. Guía Ilustrada Anfibios y reptiles Cañón del río Porce, Antioquia. EPM E.S.P. Universidad de Antioquia, Herbario Universidad de Antioquia - Medellín, Colombia. 138 pp.

## Paso 1 - Ingreso al conjunto de datos dentro del IPT

En primer lugar, se debe ingresar a la herramienta de publicación IPT de pruebas ([https://ipt.biodiversidad.co/sib-test/](https://ipt.biodiversidad.co/sib-test/){:target="_blank"}). En la parte superior derecha, hacer clic en Iniciar Sesión. Luego, diligenciar las siguientes credenciales (Fig. 1):

**Usuario**: laboratorio_formacion@gmail.com
**Contraseña**: S64i6E8SD

![Figura 1. Página de Iniciar sesión dentro del IPT test.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig1_C5Metadatos_Ingresar.png)
<sup>_Figura 1. Página de Iniciar sesión dentro del IPT test._</sup>

Cuando se haya ingresado al IPT, seleccionar la opción _Gestión de recursos_ en el menú, donde se verá una tabla de resumen con todos los recursos que puede administrar con este  usuario (Fig. 2). En esta vista se encuentran los recursos que han creado otros estudiantes previamente a partir de este usuario.

A continuación, ubicar el recurso creado en el desarrollo de la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt).

Para realizar la búsqueda de su recurso, utilizar la opción de filtro y hacer la búsqueda utilizando el nombre que utilizó para crear el conjunto de datos, un procedimiento realizado previamente en la guía [Cómo cargar los datos al IPT](https://biodiversidad.co/formacion/laboratorios/carga-datos-ipt) (Fig. 2).

Para acceder al recurso, haga clic sobre el título que está en la columna “**Nombre**” (Fig. 2).

![Figura 2. Menú de Gestión de recursos y opción de búsqueda de los recursos en el filtro.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig2_C5Metadatos_Busqueda.png)
<sup>_Figura 2. Menú de Gestión de recursos y opción de búsqueda de los recursos en el filtro._</sup>

**Nota**: Es posible que en esta vista se encuentren los recursos creados por otros estudiantes que han realizado esta guía. Estos recursos **no se deben modificar**.

## Paso 2 - Documentación de los metadatos

Después de hacer clic e ingresar al recurso, aparecerá la “**Vista General**”. El proceso de mapeo se realiza en la sección “**Metadatos**”.

Hay dos formas de documentar los metadatos, la primera es utilizar la opción de subir un archivo con los metadatos en el formato “.xml” (Fig. 3A). Esta opción acepta únicamente los archivos en este formato, no acepta archivos word o de texto plano. Solo es recomendada si previamente se tiene un archivo eml.xml que fue generado en otro IPT.

La segunda forma es documentar los metadatos directamente en la herramienta IPT, utilizando la opción “Editar” (Fig. 3B). Esta es la forma recomendada debido a su facilidad de aplicación al utilizar una interfaz web y al guardado automático de los metadatos.

![Figura 3. Opciones para la documentación de los metadatos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig3_C5Metadatos_Editar.png)
<sup>_Figura 3. Opciones para la documentación de los metadatos: A. Botón para subir un archivo .xml con los metadatos. B. Botón para editar los metadatos directamente en el IPT._</sup>

En esta guía se utilizará el método que implica editar directamente los metadatos. Para comenzar, dar clic en Editar (Fig. 3B). Se abrirá el formulario de metadatos, que consta de 12 secciones, los cuales se pueden ver en el menú de la derecha (Fig. 4). A partir del informe del caso de ejemplo, se van a documentar las secciones de los metadatos.

Los elementos que es obligatorio documentar están marcados con un asterisco (Fig. 4). Adicionalmente, es posible consultar la información adicional de cada elemento dando clic al botón de información (Fig. 4).

![Figura 4. Vista general de los metadatos, todos los elementos cuentan con un botón de información y los elementos obligatorios están marcados con un asterisco.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig4_C5Metadatos_General.png)
<sup>_Figura 4. Vista general de los metadatos, todos los elementos cuentan con un botón de información y los elementos obligatorios están marcados con un asterisco._</sup>

**Nota**: Al documentar los metadatos, es importante enfocarse en el conjunto de datos que se va a publicar y no en el proyecto bajo el que fueron tomados. Por ejemplo, si se realizó un estudio filogenético y se desea publicar los datos de las muestras de tejido tomadas en campo, se recomienda describir solo las muestras y observaciones asociadas, no el estudio filogenético.

Esta guía hace una revisión general de las secciones y sus apartados más importantes. Para complementar la información de cada uno de los elementos, se recomienda revisar el [Manual del Usuario del IPT - Metadatos](https://ipt.gbif.org/manual/es/ipt/latest/manage-resources#metadatos){:target="_blank"}.

### 2.1 - Metadatos básicos

Esta sección contiene información general de los datos que se van a publicar, como el título, el tipo de datos, una descripción general de los mismos y los autores asociados. Se debe documentar las secciones con base en estas recomendaciones:

2.1 - Metadatos básicos
Esta sección contiene información general de los datos que se van a publicar, como el título, el tipo de datos, una descripción general de los mismos y los autores asociados. Se debe documentar las secciones con base en estas recomendaciones:


- **Título**: Borrar el título por defecto del IPT y asignar un título relevante que describa los datos a publicar; debe ser representativo de los datos y no el título del proyecto (Fig. 5A). Para efectos de esta guía, debes poner tu nombre y apellido al inicio del título para identificarlo fácilmente.
- **Organización publicadora**: Seleccionar la organización principal que respalda la publicación de los datos (Fig. 5B). Para efectos de este ejercicio, se debe elegir la opción Ninguna organización.

**Nota**: en esta guía se utiliza el IPT de prueba, por lo que no aparecerán las organizaciones registradas. Es posible revisar si una organización determinada ya es un socio publicador en la [página de socios publicadores del SiB Colombia](https://biodiversidad.co/comunidad/socios-publicadores/). Si no lo es, se puede registrar [aquí](https://biodiversidad.co/compartir/registro/).

**Licencia de los datos**: Para asegurar que los datos sean abiertos, estos deben contar de manera explícita con una licencia que permita su reutilización. En este sentido, es necesario seleccionar una de las licencias Creative Commons que regule el alcance de los datos (Fig. 5C). Las licencias disponibles son:
- **CC0**: Permite cualquier uso sin restricciones, incluso con fines comerciales.
- **CC BY**: Permite cualquier uso, incluso con fines comerciales, siempre que sea reconocida la autoría de la publicación.
- **CC BY-NC**: Permite al público cualquier uso no comercial, siempre que sea reconocida la autoría de la publicación.

**Tipo y Subtipo**: En esta sección se puede seleccionar el tipo de datos (core) que se va a publicar y el subtipo asociado. En esta guía se van a publicar Registros biológicos, subtipo observación.
**Descripción**: Describir brevemente los datos que se van a publicar. Este campo es equivalente a un resumen tipo informe o artículo científico. Por consiguiente, debe incorporar brevemente la información de las demás secciones de los metadatos, incluyendo el objetivo del proyecto o estudio y la cobertura temporal, geográfica y taxonómica (Fig. 5D).

![Figura 5. Sección metadatos básicos.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig5_C5Metadatos_Basicos.png)
<sup>_Figura 5. Sección metadatos básicos: A. Título, B. Selección de la organización publicadora, C. Selección de la licencia de los datos. D. Descripción general del recurso._</sup>

#### 2.1.1 - Autores del recurso

Las siguientes tres secciones están relacionadas con las personas asociadas al recurso. En primer lugar, los contactos del recurso pueden responder preguntas y brindar información del conjunto de datos. En segundo lugar, los creadores del recurso son las personas que aportaron significativamente a la toma, manejo, digitalización, custodia y publicación de los datos y van a aparecer en la citación del recurso. Por último, los proveedores de los metadatos son las personas que generaron y documentaron los metadatos del recurso, estos también aparecen en la citación.

La sección más relevante es la de creadores del recurso, dado que a partir de esta información se crea la citación del recurso que quedará visible a través de todos los portales de datos del SiB Colombia, GBIF y OBIS. Por lo tanto, es equivalente a la lista de autores de un libro o artículo científico. Adicionalmente, es posible añadir a tantas personas como sea necesario. Por lo tanto, se recomienda documentar la mayor cantidad de información posible de cada autor.

**Nota**: los creadores del recurso deben ser personas, no entidades, ya que el EC-SiB se encarga de recopilar las autorías a nivel institucional por medio del campo "**Organización**".

Para documentar la información, hacer clic en “_Añadir contacto del recurso_” y diligenciar la siguiente información para el creador (Fig. 6):

- **Nombre**: Documenta tus nombres.
- **Apellido**: Documenta tus apellidos.
- **Posición**: Documentar el rol de la persona al interior de la organización. En este ejemplo, “Contratista”.
- **Organización**: Ambiental Buenaventura Consultores.
- **Dirección**: Carrera 1 #2A-3
- **Ciudad**: Buenaventura
- **Departamento/Estado/Provincia**: Valle del Cauca
- **País**: Seleccionar Colombia en la lista desplegable.
- **Correo electrónico**: Documente el correo “pperez@abc.com.co”.

Para las siguientes secciones, añadir un nuevo creador del recurso y hacer clic en la opción “_Copiar los datos del contacto del recurso_” (Fig. 6), Esto copiará los datos del primer contacto documentado en la sección de contactos del recurso.

![Figura 6. Contactos del recurso, sección para documentar los autores del recurso y opción para copiar los datos del recurso.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig6_C5Metadatos_Autores.png)
<sup>_Figura 6. Contactos del recurso, sección para documentar los autores del recurso y opción para copiar los datos del recurso._</sup>

Una vez que se hayan documentado los autores del recurso, hacer clic en el botón “_Guardar_” que se encuentra al final de la página o en el que se encuentra debajo del menú. Es indispensable dar clic en guardar al terminar de documentar cada una de las secciones de los metadatos, utilizando el botón que está al final de la sección o el que está en el menú de la derecha. De lo contrario, la información no se guardará.

Luego de guardar, el IPT mostrará la siguiente sección para continuar documentando los metadatos.

### 2.1.2 - Cobertura geográfica

En el mapa de esta sección, desactivar el recuadro _Establecer cobertura global_ para seleccionar el punto más cercano a la ubicación de los datos en el mapa. Luego, usar la cobertura global solamente si los datos cubren un amplio rango de países. Adicionalmente, ajustar los marcadores en el recuadro del mapa para que cubra de forma **aproximada** la región donde se tomaron los datos (Fig. 7A).

Ingresar la “**Descripción**” de la cobertura geográfica, de acuerdo al área de estudio del caso de ejemplo. Es importante documentar solo lo que hace referencia a la ubicación geográfica de los datos de una manera general, a nivel de departamento o municipio (Fig. 7B).

**Nota**: si se está haciendo el ejercicio con datos propios y estos tienen coordenadas, se puede realizar un filtro en los elementos de latitud y longitud decimales para identificar la latitud y longitud mínima y máxima. De esta manera, el recuadro se ajustará con mayor exactitud a la cobertura geográfica.

![Figura 7. Sección cobertura geográfica.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig7_C5Metadatos_Geografica.png)
<sup>_Figura 7. Sección cobertura geográfica: A. Selección de cobertura en el mapa utilizando las coordenadas, B. Descripción general de la cobertura, enfocada en el departamento y municipio._</sup>

Para finalizar, hacer clic en _Guardar_ para continuar con la siguiente sección.

### 2.1.3 - Cobertura taxonómica
Lo siguiente es agregar una nueva cobertura taxonómica con el botón _Añadir cobertura taxonómica_ y completar la descripción, teniendo en cuenta la sección “**Resultados**” del caso de ejemplo (Fig. 8A).

Es importante tener en cuenta que la información mínima a documentar es:
- Descripción textual de las categorías taxonómicas presentes en el conjunto de datos.
- Número de taxones o registros por categoría taxonómica.

**Ejemplo**: los [Números de registros] pertenecen a [x] ordenes, [x] familias y [x] géneros. Un [x%] está identificado a nivel de especie, un [x%] a nivel de género y un [x%] a nivel de familia.

Para agregar varios taxones a la cobertura, dar clic en _Añadir varios taxa_. Luego, pegar la lista de taxones, que puede ser de géneros, órdenes o clases que describen la cobertura taxonómica del recurso. No es recomendable agregar listas de taxones a nivel de especies, así que es mejor agruparlas según su taxonomía superior. Para este caso, agregar los nombres de las clases presentes en los datos de ejemplo y hacer clic en _Agregar_ (Fig. 8B).

Cuando se haya añadido la lista de taxones, se debe completar la “**Categoría**” con una de las opciones del desplegable y el nombre común si está disponible (Fig. 8C). Después, usar la información presente en la sección de resultados para documentar la “Descripción” y los datos para documentar la lista de taxones.

**Nota**: si hay varios grupos biológicos cubiertos en el conjunto de datos (como animales, plantas, bacterias, etc.), se recomienda añadir nuevas coberturas taxonómicas para cada grupo.

![Figura 8. Sección cobertura taxonómica.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig8_C5Metadatos_Taxonomica.png)
<sup>_Figura 8. Sección cobertura taxonómica: A. Descripción de la cobertura taxonómica. B. Añadir varios taxones, C. Documentación de la categoría y nombre común de cada taxón._</sup>

**Nota**: Desde el SiB Colombia se suele separar la taxonomía por reino para facilitar su documentación y lectura, pero puede documentar esta sección dependiendo de algún criterio taxonómico (líquenes, hidrobiología, fauna, etc).

Para finalizar, hacer clic en Guardar para continuar en la siguiente sección.

### 2.1.4 - Cobertura temporal

Para documentar la cobertura temporal, hacer clic en la opción “_Añadir cobertura temporal_”. Luego, seleccionar la opción más adecuada según el tipo de datos en el desplegable “**Tipo de Cobertura Temporal**”. Generalmente, los proyectos o publicaciones cubren más de una fecha. Por esta razón, se recomienda usar la opción Rango de Fechas (Fig. 9A). Es necesario documentar el rango de fechas con el formato del estándar ISO 8601 (AAAA-MM-DD) o usar el botón de calendario (Fig. 9B). Para esta guía, se debe usar la opción Rango de fechas y documentar el día inicial y final de octubre del 2020.

**Nota**: El rango de fechas documentado en los metadatos debe ser coherente con el rango de fechas presentes en los datos, aunque no tiene que ser exactamente el mismo. 

![Figura 9. Sección cobertura temporal.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig9_C5Metadatos_Temporal.png)
<sup>_Figura 9. Sección cobertura temporal: A. Selección de la opción rango de fechas. B. Documentación de las fechas utilizando el calendario._</sup>

Para finalizar, dar clic en Guardar para continuar con la siguiente sección.

### 2.1.5 - Palabras clave

El IPT crea unas palabras clave por defecto con base en el [tesauro de GBIF](http://rs.gbif.org/vocabulary/gbif/dataset_type.xml){:target="_blank"} y en la información documentada en **Tipo** y **Subtipo** en los metadatos básicos. Es importante **no borrar ni modificar** los tesauros mencionados (Fig. 10A). En cambio, se debe hacer clic en “_Añadir palabras clave_” para crear el nuevo campo donde se van a documentar las palabras clave.

Si las palabras clave provienen de un tesauro establecido, es necesario indicar el nombre del tesauro seguido por la URL en el campo “**Tesauro/Vocabulario**”. Y en la lista de palabras clave, documentar las palabras tal cual como se encuentran en el tesauro (Fig. 10B).

Si no se está usando un tesauro para seleccionar las palabras clave, el campo “**Tesauro/Vocabulario**” se documenta con **n/a** (No Aplica) y solo se agregan las palabras que se consideren apropiadas para el recurso (Fig. 10C). En este sentido, se debe documentar la información de las palabras clave siguiendo la estructura de la figura 10.

![Figura 10. Sección palabras clave.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig10_C5Metadatos_Palabras.png)
<sup>_Figura 10. Sección palabras clave: A. Palabras claves documentadas automáticamente por el IPT que no deben ser modificadas. B. Palabras clave utilizando un tesauro controlado. C. Palabras clave libres sin tesauro controlado._</sup>

Al finalizar, hacer clic en Guardar para continuar con la siguiente sección.

### 2.1.6 - Partes asociadas

En esta sección, se documenta la información de las personas u organizaciones adicionales que se incluyeron en los metadatos básicos. También se pueden documentar por completo nuevamente si se quiere especificar su rol dentro de la publicación.

Se recomienda que las partes (personas e instituciones) involucradas en la generación de los datos sean reconocidas en los metadatos como “Creadores del recurso” en la sección de “**Metadatos básicos**” (si se consideran autores del recurso), y en “**Partes asociadas**” si estuvieron involucradas en la generación del recurso y cumplen alguno de los roles del campo “**Rol**”.

En este caso, se va a documentar a la alcaldía de Santa Rosa de Cabal como entidad coautora del recurso. En primer lugar, seleccionar la opción “_Eliminar parte asociada_” para quitar la opción por defecto que se asigna con la información de la cuenta que se creó el recurso en el IPT. Luego de eliminarla, dar clic en “_Añadir parte asociada_” y documentar la información con base en la figura 11.

**Nota**: Es indispensable que el elemento "**Rol**" esté documentado para todas las partes asociadas que se incluyan en esta sección. La definición de cada rol se mostrará al dar clic en el botón de información.

![Figura 11. Documentación de la alcaldía de Santa Rosa como parte asociada.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig11_C5Metadatos_Asociados.png)
<sup>_Figura 11. Documentación de la alcaldía de Santa Rosa como parte asociada._</sup>

Al finalizar, hacer clic en Guardar para continuar con la siguiente sección.

### 2.1.7 - Datos del proyecto

Esta sección se utiliza para documentar información si los datos están asociados a uno o varios proyectos. El proyecto puede ser más amplio que los datos que se están publicando y se puede detallar en este rubro.

En esta guía, no es necesario documentar esta sección, pero sí se debe documentar la información en futuras publicaciones. También se puede obtener más detalle en cada campo con el botón Información. Es importante tener en cuenta que si se documenta esta sección, debe incluirse al menos una persona asociada al proyecto en el campo “**Rol**”. 

### 2.1.8 - Métodos de muestreo

En esta sección se documentan los métodos de muestreo utilizados para recolectar los datos y está dividida en cuatro partes:

- **Área de Estudio**: una descripción más específica del área de estudio donde se recolectaron los datos. Puede contener el detalle de las áreas que se seleccionaron para muestrear y el motivo.
- **Descripción del muestreo**: descripción general de los métodos utilizados para recolectar las datos.
- **Control de Calidad**: redacción de los pasos utilizados para asegurar la calidad de los datos, puede ser la información de los métodos utilizados en campo o post-campo.
- **Metodología paso a paso**: el detalle de la metodología aplicada para recolectar los datos.
 
Documentar esta sección de acuerdo al apartado de “**Metodología**” en el caso de ejemplo. El campo “**Área de estudio**”, puede coincidir con el espacio documentado con la sección “**Datos del Proyecto**”. Por otro lado, en el campo “**Metodología paso a paso**”, es conveniente redactar cada paso en un párrafo diferente para que la publicación sea más ordenada. Por consiguiente, hacer clic en _Añadir nuevo paso metodológico_ (Fig. 12).

![Figura 12. Metodología paso a paso de la sección métodos de muestreo.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig12_C5Metadatos_Metodos.png)
<sup>_Figura 12. Metodología paso a paso de la sección métodos de muestreo._</sup>

### 2.1.9 - Referencias

En esta sección se documenta la forma en la que se va a citar el recurso y las referencias que se han citado a lo largo de los metadatos.

En el campo “**¿Cómo referenciar este recurso?**”, es necesario corroborar que esté activada la opción _Generación automática_. De esta forma, dicha sección se diligenciará según lo documentado en los apartados de “**Creadores del Recurso**” y “**Proveedores de los Metadatos**”, compilados en la sección “**Metadatos Básicos**” (Fig. 13).

El formato de referencia utilizado en la generación automática se basa en el formato recomendado (referencia de _DataCite_) y satisface la _Joint Declaration of Data Citation Principle_. Además, incluye un número de versión, el cual es particularmente importante para los conjuntos de datos que se actualizan continuamente.

**Nota**: Si está activada la referencia automática, la citación incluirá el DOI (previamente asignado a la publicación), lo que facilitará el rastreo del historial de uso del conjunto de datos.

Cuando se genere la citación, se debe verificar que todos los autores involucrados en la publicación estén correctamente referenciados.

![Figura 13. Sección Referencias.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig13_C5Metadatos_Referencias.png)
<sup>_Figura 13. Sección Referencias._</sup>

Adicionalmente, esta sección se usa para documentar la bibliografía citada a lo largo del recurso o algún referente bibliográfico que sea importante resaltar. En este caso, se debe pegar la información de las referencias del caso de ejemplo en un nuevo cuadro. Para ello, utilizar la opción “_Añadir referencia bibliográfica_”.

No es necesario seguir un estilo de citación en particular, aunque la recomendación es utilizar el mismo en todas las referencias para mantener la consistencia.

Al finalizar, dar clic en _Guardar_ para continuar con la siguiente sección.

### 2.1.10 - Datos de la Colección

Documentar esta sección con la información documentada en el elemento collectionCode de los datos. Se debe utilizar este código para buscar la información completa en el [Registro Nacional de Colecciones Biológicas](http://rnc.humboldt.org.co/admin/index.php/registros/colecciones){:target="_blank"} y documentar la información de la siguiente manera (Fig. 14):

- **Nombre de la Colección**: Colocar el nombre completo de la colección; en este caso, “Museo de Historia Natural C.J. Marinkelle-Universidad de los Andes”.
- **Identificador de la Colección**: Escribir el número de la colección según el RNC; en este caso, “Registro Nacional de Colecciones Biológicas: 158”.
- **Identificador de la Colección Parental**: Poner el código de la colección que está documentado en los datos; en este caso, “ANDES”.

![Figura 14. Sección datos de la colección documentados de acuerdo al Registro Nacional de Colecciones Biológicas.](https://raw.githubusercontent.com/gbif/hp-colombian-biodiversity/master/comunidad/formacion/laboratorios/Repositorio_Imagenes/Lab_datos-en-contexto-reporte/Fig14_C5Metadatos_Coleccion.png)
<sup>_Figura 14. Sección datos de la colección documentados de acuerdo al Registro Nacional de Colecciones Biológicas._</sup>

Esta sección se documenta en dos casos: cuando el conjunto de datos corresponde a una colección biológica o cuando una o varias de las observaciones del conjunto de datos está asociada a un espécimen que fue entregado y depositado en una colección biológica.

Por último, dar clic en Guardar para continuar con la siguiente sección.

### 2.1.11 - Enlaces Externos

Esta es una sección opcional. Se puede incluir la URL de otro repositorio, donde también se encuentren los datos publicados. Por ejemplo, [DRYAD](https://datadryad.org/stash){:target="_blank"}, [NCBI](https://www.ncbi.nlm.nih.gov/){:target="_blank"}, [BOLD](https://boldsystems.org/){:target="_blank"}, entre otros. Adicionalmente, se puede documentar si los datos están publicados en un artículo científico o página web. Esta sección no es necesaria para el caso de estudio.

### 2.1.12 - Metadatos Adicionales

Esta también es una sección opcional. Generalmente, el publicador no debe documentar ningún campo. Si es necesario agregar información adicional a los metadatos, se puede documentar en esta sección.

### 2.1.13 - Cambio en la visibilidad del recurso

Si se está realizando el proceso de documentación de metadatos de forma autónoma para la generación de un certificado en el IPT permisos, es necesario realizar un último paso para cambiar la visibilidad del recurso y generar el certificado. Para realizar este proceso, se debe consultar el video [Cómo hacer público el reporte en el IPT](https://www.youtube.com/watch?v=ynV2kWcC2hg){:target="_blank"} y seguir los pasos que se indican allí.


****
**¡Felicitaciones!**

¡Felicitaciones! Los metadatos han sido documentados correctamente en el IPT.
  
****

**Citación**

> Plata C., Ortíz R., Marentes E., Lozano J. (2023). Laboratorio de datos, Ciclo de formación. Consultado a través del SiB Colombia. Disponible en [https://biodiversidad.co/formacion/laboratorios](https://biodiversidad.co/formacion/laboratorios).
> 
 
