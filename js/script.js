console.log ("a ver si esto funciona")

// PANTALLA DE CARGA
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".loading-screen").style.opacity = 0;
        document.querySelector("header").style.display = "block";
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
  
});
  