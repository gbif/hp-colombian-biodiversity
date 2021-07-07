---
layout: compose
title: Regístrate Prueba
description: Las entidades ... prueba
background: /assets/images/venado1_cp.jpg
imageLicense: |
  Fotografía por: Camila Plata vía [Flickr](https://www.flickr.com/photos/camisilver/6792589953/)
height: 70vh
composition: 
  - type: heroImage
  - type: pageMarkdown

---


# Detalles de la organización

Esta es la oportunidad para contarle a la comunidad del SiB Colombia acerca de tu organización ¿Quién es y qué hace?

<form id="test-form">
  
    var $form = $('form#test-form'),
      url = 'https://script.google.com/macros/s/AKfycbw6Uq8f1j_UC5Oe9cKI8VEX-FHST0igZ-qRWGdGuY1r6yfrQrM/exec'

    $('#submit-form').on('click', function(e) {
      e.preventDefault();
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
      }).success(
        // do something
      );
    })
  
    <div class="field">
      <label class="label">Nombre de la Organización</label>
      <div class="control">
        <input class="input" type="text" placeholder="Nombre de la organización, de preferencia el registrado en la personería jurídica" name="nombre-organizacion">
      </div>
    </div>

    <div class="field">
      <label class="label">Nombre corto o acrónimo</label>
      <div class="control">
        <input class="input" type="text" placeholder="Este aparecerá asociado a los datos en la plataforma de publicación" name="nombre-acronimo">
      </div>
    </div>

    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea class="textarea" placeholder="Describe brevemente la trayectoria de tu organización en relación a la misión del SiB Colombia (ej.: colecciones biológicas custodiadas, enfoque de investigación, gestión de información sobre biodiversidad, etc.) Esta descripción aparecerá en el perfil de la organización como socio publicador" name="descripcion-organizacion"></textarea>
      </div>
    </div>
  
    <div class="control">
      <button id="submit-form" class="button is-primary">Submit</button>
    </div>

  
</form>



