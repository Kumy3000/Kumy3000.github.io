function obrirdialec(e) {
    var dialog = document.getElementById("dialec");
    dialog.style.display = "block";
    var closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", tancardialec);
    var main = document.querySelector("main");
    main.style.opacity = 0.2;
    main.style.filter = "blur(1em)";
}
function tancardialec(e) {
    var dialog = document.getElementById("dialec");
    dialog.style.display = "none";
    var main = document.querySelector("main");
    main.style.opacity = 1;
    main.style.filter = "blur(0)";
}
var openButton = document.getElementById("megaboton");
openButton.addEventListener("click", obrirdialec);