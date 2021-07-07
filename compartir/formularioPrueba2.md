---
layout: heroImage
title: Regístrate Prueba
description: Las entidades ... prueba
background: /assets/images/venado1_cp.jpg
imageLicense: |
  Fotografía por: Camila Plata vía [Flickr](https://www.flickr.com/photos/camisilver/6792589953/)
height: 70vh

---

# Detalles de la organización

Esta es la oportunidad para contarle a la comunidad del SiB Colombia acerca de tu organización ¿Quién es y qué hace?

<form name="submit-to-google-sheet">
  
    <div class="field">
      <label class="label">Nombre de la Organización</label>
      <div class="control">
        <input class="input" name="nombre-organizacion" type="text" placeholder="Nombre de la organización, de preferencia el registrado en la personería jurídica" >
      </div>
    </div>

    <div class="field">
      <label class="label">Nombre corto o acrónimo</label>
      <div class="control">
        <input class="input" name="nombre-acronimo" type="text" placeholder="Este aparecerá asociado a los datos en la plataforma de publicación" >
      </div>
    </div>

    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea class="textarea" name="descripcion-organizacion" placeholder="Describe brevemente la trayectoria de tu organización en relación a la misión del SiB Colombia (ej.: colecciones biológicas custodiadas, enfoque de investigación, gestión de información sobre biodiversidad, etc.) Esta descripción aparecerá en el perfil de la organización como socio publicador" ></textarea>
      </div>
    </div>
  
    <div class="control">
      <button type="submit">Send</button>
    </div>

</form>

<script src="https://wzrd.in/standalone/formdata-polyfill"></script>
<script src="https://wzrd.in/standalone/promise-polyfill@latest"></script>
<script src="https://wzrd.in/standalone/whatwg-fetch@latest"></script>

<script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwdsbfY4tzsndP0fYqr7Xb_k5CO_F87s8_lLh6wmBPivN0rCe0/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>


