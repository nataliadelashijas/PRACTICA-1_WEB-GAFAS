console.log ("a ver si esto funciona")

// PANTALLA DE CARGA
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".carga").style.display = "flex";
        document.querySelector(".carga").style.display = "none";
    }, 2000);
});


$(document).ready(function () {
    "use strict";    

    window.onload = function () {
        "use strict";
        loading();
    };
    
  
    $("#menu i").click(function () {
  
      $("#menu ul").css("left", "0vw");
  
    });
  
    $("#menu .option").click(function () {
  
      $("#menu ul").css("left", "-100vw");
  
    });

    $(".galeria-marcas #marca").click(function () {
  
      $(".marca").toggle();
  
    });
    
    $("#menu-products i").click(function () {
  
      $("#menu-products ul").css("left", "0vw");
  
    });
  
    $("#menu-products .option").click(function () {
  
      $("#menu-products ul").css("left", "-100vw");
  
    });

  
});
  