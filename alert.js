function mostrarAlerta(e) {
    var entrada = document.getElementById("entrada");
    var alert = document.getElementById("alerta");
    console.log(entrada.value);
    console.log(typeof entrada.value);
    if (5+5 === parseInt(entrada.value)) {
        alert.innerHTML = "OLE CAMPEÓN!!";
    }
    else {
        alert.innerHTML = "Ves a estudiar va...";
    }
    alert.style.display = "block";
}
var button = document.querySelector("button");
button.addEventListener("click", mostrarAlerta);