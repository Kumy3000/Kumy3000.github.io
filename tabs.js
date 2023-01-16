console.log("Hollaa");
function init() {
    var tabs = document.querySelectorAll("#sample [role=tab]");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", selectTab);
    }
}
function selectTab(e) {
    var tabs = document.querySelectorAll("#sample [role=tab]");
    var panels = document.querySelectorAll("#sample [role=tabpanel]");
    for (var i = 0; i < tabs.length; i++) {
        if (e.target.id == tabs[i].id) {
            tabs[i].setAttribute('aria-selected', 'true');
            panels[i].classList.remove("hidden");
        }
        else {
            tabs[i].setAttribute('aria-selected', 'false');
            panels[i].classList.add("hidden");
        }
    }
}
init();