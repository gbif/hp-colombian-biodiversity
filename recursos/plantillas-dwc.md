---
layout: heroImage
title: Plantillas Darwin Core
description: Esta serie de plantillas son punto de partida para facilitar la estandarización de datos haciendo uso del Darwin Core (DwC).
background: https://live.staticflickr.com/123/317357065_73ad4e89df_b.jpg
imageLicense: |
  _Amanita muscaria_ Fotografía de: Quimbaya [Flickr](https://flic.kr/p/u3xcx)
toc: true
height: 41 vh
---

Para la publicación de datos sobre biodiversidad se han creado tres plantillas de acuerdo a los [tipo de datos](/compartir/tipos-de-datos) que se pueden compartir a través del SiB Colombia. Estas plantilla están estructuradas bajo el estándar [Darwin Core](/compartir/estandares) y cuenta con los elementos necesarios del _Core_ del estándar para la publicación. 

Si su conjunto de datos cuenta con datos relacionados como rasgos funcionales, referencias bibliográficas, secuencias genéticas, imágenes, vídeo, sonidos, entre otros, y desea que hagan parte de la publicación, recuerde mencionarlo en el correo que envíes para inciar el [proceso de acompañamiento a la publicación](/compartir/guia-para-publicar) y se te apoyará en la estructuración y ajuste de estos datos adicionales, posiblemente con el uso de las [extensiones](https://biodiversidad.co/recursos/plantillas-dwc#extensiones){:target="_blank"} del estándar Darwin Core.


## Cómo usar las plantillas

1. Lea la hoja de instrucciones de cada plantilla para conocer su estructura, modo de navegación y uso.
2. Dependiendo del origen de sus datos identifique en la primera hoja de la plantilla los elementos obligatorios.
3. Identifique a que elemento DwC corresponde cada una de las columnas en su conjunto de datos original.
4. Revise la definición del elemento DwC y verifique su coherente con el contenido de sus datos.
5. Verifique que el contenido cumpla con el formato y el vocabulario controlado para el elemento DwC.
6. Copie y pegue sus datos bajo el elemento (columna) correspondiente dentro de la plantilla, documente sólo las columnas para las que posea o pueda inferir información.
7. Repita el proceso con todas las columnas de sus datos. Si no encuentra similitud entre sus datos y un elemento de esta plantilla, puede revisar las plantillas de [extensiones](https://biodiversidad.co/recursos/plantillas-dwc#extensiones){:target="_blank"} o comunicar su inquietud al correo sib@humboldt.org.co.
8. Elimine los elementos de la plantilla que no documentó.
9. Consulte los [laboratorios de datos](/formacion/laboratorios) o la [caja de herramientas](/recursos/calidaddedatos) para validar y mejorar la calidad de sus datos.
10. Para la publicación de los datos envíe esta plantilla a sib@humboldt.org.co. Para mas información sobre el proceso de publciación consulte la [guía de publicación](https://biodiversidad.co/compartir/guiadepublicacion).

Para un ejemplo práctico sobre el uso de las plantillas consulte el laboratorio de estructuración y calidad: https://biodiversidad.co/formacion/laboratorios/LabEstructuracionCalidad				
		

## Plantillas


### Registros biológicos

Use esta plantilla si sus datos:

* Corresponden a avistamientos directos de especímenes, colectas temporales  o capturas _in situ_ (en su hábitat natural) que estarán asociadas a un voucher o soporte de referencia físico.
* Documentan atributos como: nombre científico, fecha de colecta, ubicación, sexo, edad, comportamiento, etc., de un organismo o grupo de organismos dentro de un contexto específico.
* Estan soportados por una fotografía, un sonido u otro tipo de soporte digital, o por el espécimen en físico do en una colección biológica, museo de historia natural, herbario, etc.
* Corresponden a  eventos de muestreo siempre y cuando se documenten los elementos obligatorios para esta fuente de datos y no se requiera documentar datos abioticos asociados al evento.


<details>
    <summary markdown="span"><b><a href="https://drive.google.com/u/0/uc?id=1mj0XG8GcABmTcZefQfHdHi8_ugJV3roA&export=download">Descargar última versión v4.0</a></b></summary>
<p>
    <i>Cambios realizados respecto a la versión 3.5:</i>
</p>

<ul>
  <li>Se incluyen 10 nuevos elementos incorporados en la úlrima versión del estándar (2021-08-24).
    <ul>
      <li>degreeOfEstablishment (Medios de establecimiento)</li>
      <li>pathway (Medios de establecimiento)</li>
      <li>recordedByID (ID del organismo)</li>
      <li>identifiedByID (ID de la identificación)</li>
      <li>verticalDatum (Datum vertical)</li>
      <li>verbatimIdentification (Identificación original)</li>
      <li>subfamily (Subfamilia)</li>
      <li>genericName (Nombre genérico)</li>
      <li>infragenericEpithet (Epíteto infragenérico)</li>
      <li>cultivarEpithet (Epíteto cultivar)
    </ul>
  </li>

  <li>Cambio de obligatoriedad
    <ul>
      <li>El elemento <i>datasetId<i> deja de ser obligatorio para datos asociados a un permiso de recolección o acceso a recursos genéticos.</li>
      <li>El elemento <i>datasetName</i> deja de ser obligatorio para datos asociados a un permiso de recolección o acceso a recursos genéticos.</li>
      <li>La Extensión de permisos GGBN pasa a ser obligatoria para registros biológicos colectados bajo un permiso de recolección de especímenes o acceso a recursos genéticos y remplaza el uso de los elementos <i>datasetId<i> y <i>datasetName</i>.</li>
      <li>El elemento <i>disposition</i> deja de ser opcional y pasa a ser obligatorio para registros biológicos colectados bajo un permiso de recolección de especímenes o acceso a recursos genéticos.</li>
    </ul>   
  </li> 
      <li>Cambios en las instrucciones
    <ul>
      <li>Se mejoran las instrucciones</li>
      <li>Se incluye enlaces a la documentación oficial del estándar</li>
    </ul>
  </li>      

</ul>
  
</details>  

<details>
    <summary markdown="span"><B>Historial de versiones</B></summary>
  
   <a href="https://drive.google.com/u/0/uc?id=16oIiR09yAbm8B63CpR0h2phY7tqsFXSk&export=download"><b>Plantilla de Registros Biológicos v3.5</b></a>
<p><i>Cambios realizados respecto a la versión 3.4:</i></p>
<ul>
  <li>Definiciones actualizadas
    <ul>
      <li>basisOfrecord</li>
      <li>disposition</li>
      <li>preparations</li>
      <li>organismQuantity</li>
      <li>organismQuantityType</li>
    </ul>
  </li>
  <li>Cambio de obligatoriedad
    <ul>
      <li>El elemento individualCount deja de ser obligatorio y pasa a ser recomendado.</li>
      <li>El elemento <i>organismQuantity</i> deja de ser opcional y pasa a ser obligatorio para registros biológicos colectados bajo un permiso de recolección de especímenes o acceso a recursos genéticos.</li>
      <li>El elemento <i>organismQuantityType</i> deja de ser opcional y pasa a ser obligatorio para registros biológicos colectados bajo un permiso de recolección de especímenes o acceso a recursos genéticos.</li>
      <li>El elemento <i>disposition</i> deja de ser opcional y pasa a ser obligatorio para registros biológicos colectados bajo un permiso de recolección de especímenes o acceso a recursos genéticos.</li>
      <li>El elemento <i>preparations</i> deja  de ser recomendado y pasa a ser obligatorio para registros biológicos colectados bajo un permiso de recolección de especímenes o acceso a recursos genéticos.</li>
    </ul>   
  </li> 
      <li>Cambios en las instrucciones
    <ul>
      <li>Se añaden elementos obligatorios a la tabla de instrucciones</li>
      <li>Actualización citación</li>
    </ul>
  </li>      

</ul>
  
    <a href="https://drive.google.com/a/humboldt.org.co/uc?authuser=2&id=18QECbc_8aobmpxsLLKU8QFsRJIm-QBF6&export=download"><b>Plantilla de Registros Biológicos v3.4</b></a>
<p><i>Cambios realizados respecto a la versión 3.3:</i></p>
<ul>
  <li>Definiciones actualizadas
    <ul>
      <li>basisOfrecord</li>
      <li>institutionCode</li>
      <li>collectionCode</li>
      <li>catalogNumber</li>
      <li>type</li>
      <li>institutionID</li>
      <li>collectionID</li>
      <li>datasetID</li>
      <li>datasetName</li>
      <li>scientificName</li>
    </ul>
  </li>
  <li>Cambio de obligatoriedad
    <ul>
      <li>El elemento <i>catalogNumber</i> deja de ser obligatorio y pasa a ser condicional.</li>
      <li>El elemento type deja de ser recomendado y pasa a ser obligatorio.</li>
      <li>El elemento <i>otherCatalogNumbers</i> deja de ser obligatorio para registros biológicos colectados bajo un permiso de recolección de especímenes o acceso a recursos genéticos.</li>
      <li>El elemento datasetName pasa a ser obligatorio para registros biológicos colectados bajo un permiso de recolección de especÌmenes o acceso a recursos genéticos.</li>
      <li>El elemento <i>datasetID</i> pasa a ser obligatorio para los registros biológicos colectados bajo un permiso de recolección de especímenes o acceso a recursos genéticos.</li>
      <li>El elemento <i>preparations</i> pasa a ser recomendado.</li>
      <li>El elemento <i>taxonRank</i> pasa a ser obligatorio.</li>
    </ul>
 </li>  
 <li>Cambios en las instrucciones
    <ul>
      <li>Actualización enlaces.</li>
      <li>Se incluye una tabla describiendo los elementos obligatorios según el origen de los registros biológicos.</li>
      <li>Creación de una nueva categoría de obligatoriedad: 'Elemento obligatorio para al menos un tipo de registro biológico y recomendado en al documentación de un buen registro biológico'.</li>
      <li>Actualización menor en los textos.</li>
      <li>Cambios menores en el diseño para mejor visibilidad de la tabla.</li> 
      <li>Actualización citación</li>
    </ul>
 </li>      
    
</ul>
    
<a href="https://drive.google.com/uc?export=download&id=1ik_etAy1SAGplzanh5D9OA7-1IVDAQsq"><b>Plantilla de Registros Biológicos v3.3</b></a> 
    <p><i>Revisada y editada 2017-11</i></p>
    
<a href="https://drive.google.com/a/humboldt.org.co/uc?authuser=2&id=1NwpYvbragT62gS5Pa6bE4YWGSIE6jxao&export=download"><b>Plantilla de Registros Biológicos v3.1</b></a> 
 <p><i>Revisada y editada 2017-04</i></p>   
    
<a href="https://drive.google.com/a/humboldt.org.co/uc?authuser=2&id=197GjqdIAVXppnc798nW656UDPiAn28xx&export=download"><b>Plantilla de Registros Biológicos v3.0</b></a> 
 <p><i>Revisada y editada 2013-11</i></p>    
    
<a href="https://drive.google.com/a/humboldt.org.co/uc?authuser=2&id=1qE-1rCfFklxyUR9xvim9tqoGAj-iU3U4&export=download"><b>Plantilla de Registros Biológicos v2.0</b></a> 
 <p><i>Revisada y editada 2013-05</i></p>   

<a href="https://drive.google.com/a/humboldt.org.co/uc?authuser=2&id=1bEfdcGc31NLjLlWMZ62keHRLicSWn37M&export=download"><b>Plantilla de Registros Biológicos v1.0</b></a> 
 <p><i>Revisada y editada 2012</i></p> 
    
<a href="https://drive.google.com/a/humboldt.org.co/uc?authuser=2&id=1bEfdcGc31NLjLlWMZ62keHRLicSWn37M&export=download"><b>Plantilla CR-SiB v1.0</b></a>
     <p><i>Creada en 2014-05. A partir de 2019-09 se unifica con las plantillas de publicación de registros biológicos v3.5.</i></p> 
    
</details>  

---

### Listas de especies

Use esta plantilla si sus datos:

* Describen principalmente los atributos taxonómicos (nombre científico, taxonomía superior, nombre común, etc.) válidos para una especie o taxón.
* Se les puede dar un alcance temático, filogenético o geográfico común a todos los taxones en la lista. Por ejemplo: "Lista de animales amenazados"; o un alcance espacial que establece límites geográficos a todos los taxones en la lista , por ejemplo "Plantas de Chocó".
* Tienen idealmente un soporte que permite confirmar su alcance: registro biológico, información secundaria (literatura), etc.


<details>
    <summary markdown="span"><b><a href="https://drive.google.com/uc?export=download&id=1p2j1KYHsNPyt50LopUkdhdaMlI6SZd4Q">Descargar última versión v3.2</a></b></summary>
    <p><i>Revisada y editada 2017-11</i></p>
    
</details>
<details>
    <summary markdown="span"><B>Historial de versiones</B></summary>
    <a href="https://drive.google.com/a/humboldt.org.co/uc?authuser=2&id=11rXim-K9OvEX3icT10sA5FE67NNvPIdd&export=download"><b>Plantilla de Listas v3.0</b></a>
    <p><i>Revisada y editada  2013-11</i></p>
    
<a href="https://drive.google.com/a/humboldt.org.co/uc?authuser=2&id=1YaQewpHUEo7br_OjaEH5_mum60KxV8bh&export=download"><b>Plantilla de Listas v2.0</b></a>
    <p><i>Revisada y editada 2013-05</i></p>

<a href="https://drive.google.com/a/humboldt.org.co/uc?authuser=2&id=1ZJwCYee7w_XF2RglSwhpv2VFI-cVdt1k&export=download"><b>Plantilla de Listas v1.0</b></a>
   <p><i>Revisada y editada 2012</i></p>

</details>

---

### Eventos de muestreo

Use esta plantilla si sus datos:

* Provienen de protocolos estandarizados para medir y observar la biodiversidad, con una medida de la abundancia de especies en la muestra.
* Corresponden a muestreos realizados a lo largo del tiempo en parcelas permanentes, censos estandarizados, muestras de suelos para análisis metagenómicos, caracterizaciones de fitoplancton, etc., con un identificador del evento claramente establecido.
* No solo documentan atributos de un registro biológico, sino también el detalle suficiente para determinar la composición de una comunidad o abundancia relativa de las especies en diferentes momentos del tiempo.

<details>
    <summary markdown="span"><b><a href="https://drive.google.com/uc?id=1N3zTljnFujY7MC8Y_R4vd7vr1IhjgeXp&authuser=2&export=download">Descargar última versión v1.1</a></b></summary>
    <p><i>Revisada y editada 2014-05</i></p>
    
</details>


### Extensiones

https://tools.gbif.org/dwca-validator/extensions.do
Use esta plantillas si sus datos:

* Incluyen rasgos funcionales (medidas) del organismo representado en los registros biológicos.
* Incluyen recursos multimedia como imágenes, videos, sonidos, etc. almacenados en un repositorio externo y cuyos contenidos pueden ser accedidos vía URL. 
* Corresponde a listas de especies con información de distribución de la especie, tales como país, localidad, habitat, estado de amenaza, etc.

<details>
    <summary markdown="span"><b><a href="https://drive.google.com/uc?export=download&id=1s05MAYDixYt6wPp9V8de8qrCHxuOOw-o">Medidas o Hechos</a></b></summary>
    <p><i>Revisada y editada 2021-06</i></p>
    
</details>

<details>
    <summary markdown="span"><b><a href="https://drive.google.com/uc?export=download&id=1Bfdgnl-KXwvLHs8H-bSe8yBXVyD8qrx8">Multimedia Simple</a></b></summary>
    <p><i>Revisada y editada 2021-06</i></p>
    
</details>

<details>
    <summary markdown="span"><b><a href="https://drive.google.com/uc?export=download&id=1kqyGIkeP6KdR0-hz7CbGvriQuSitWqwp">Distribución de especies</a></b></summary>
    <p><i>Revisada y editada 2021-06</i></p>
    
</details>
 
