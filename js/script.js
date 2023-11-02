console.log ("a ver si esto funciona")

// PANTALLA DE CARGA
function loading() {
    "use strict";
  
    setTimeout(function () {
        $("#carga").toggleClass("desaparecer");
    }, 2000);
  
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

