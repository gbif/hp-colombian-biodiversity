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

    <script>
            const scriptURL = 'https://script.google.com/macros/s/AKfycbw6Uq8f1j_UC5Oe9cKI8VEX-FHST0igZ-qRWGdGuY1r6yfrQrM/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
     </script>

     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
</form>



