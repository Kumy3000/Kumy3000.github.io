function acciones(e) {
    var respuesta = document.getElementById("respuesta");
    var button = document.getElementById("botoncito");
    respuesta.classList.toggle("hidden");
    var state = button.getAttribute("aria-expanded");
if (state == "true") 
{
 state = "false";
}
else {
    state = "true";
}
}
var button = document.getElementById("botoncito");
button.addEventListener("click", acciones);