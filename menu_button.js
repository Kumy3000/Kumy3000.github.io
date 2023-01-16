function acciones(e) {
    var menu = document.querySelector("ul");
    var button = document.getElementById("botoncito");
    var expanded = button.getAttribute("aria-expanded");
    if (expanded === "true") {
        menu.style.display = "none";
        button.setAttribute("aria-expanded", "true");
    }
    else {
        menu.style.display = "block";
        button.setAttribute("aria-expanded", "false");
    }
}
var button = document.getElementById("botoncito");
button.addEventListener("click", acciones);