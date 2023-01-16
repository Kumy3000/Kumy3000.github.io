function init() {
    var switchButton = document.querySelector("#sample button");
    switchButton.addEventListener("click", toggleStatus);
}
function toggleStatus() {
    var switchButton = document.querySelector("#sample button");
    var state = switchButton.getAttribute('aria-checked') === "true";
    if (!state) {
        document.body.style.backgroundColor = "#fce";
    }
    else {
        document.body.style.backgroundColor = "bisque";
    }
    switchButton.setAttribute('aria-checked', !state);
}
init();