---
title: Register version 3
description: This is the most complicated version. Unless you think it is fun and want to maintain it I wouldn't bother.
background: /assets/images/moss.jpg
imageLicense: |
  Photo by mhoefft via [gbif.org](https://www.gbif.org/occurrence/1580487687)
height: 70vh
---
See also [simples version 1](/test/register1) and [simple version 2](/test/register2)

<form id="test" onsubmit="myFunction(event)">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" value="John">

  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" value="Doe">

  <input type="submit" value="Submit">
</form> 

<script>
console.log('Hi Camilla, you can see this if you open the developer tools in the browser');

function myFunction(e) {
  console.log('Someone pressed submit');
  e.preventDefault();
  alert('You could send the form data programatically here');
  return false;
}
</script>