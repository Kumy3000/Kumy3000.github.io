function acciones(e) {
    console.log(e.target);
    
    var contenidos = document.querySelectorAll(".contenido");
    contenidos[e.target.id -1].classList.toggle("hidden");
if (state == "true") 
{
 state = "false";
}
else {
    state = "true";
}
}
var buttons = document.querySelectorAll(".acordeoncito");
buttons.forEach((button) => {
    button.addEventListener('click', acciones);
  });