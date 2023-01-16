function init() {
    var nextButton = document.querySelector("[aria-label='següent']");
    var previousButton = document.querySelector("[aria-label='anterior']");
    nextButton.addEventListener("click", nextSlide);
    previousButton.addEventListener("click", previousSlide);
}
function nextSlide() {
    var slides = document.querySelectorAll("[aria-roledescription='slide']");
    for (i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            slides[i].classList.remove("active");
            if (i == slides.length - 1) {
                slides[0].classList.add("active");
            }
            else {
                slides[i + 1].classList.add("active");
                break;
            }
        }
    }
}
function previousSlide() {
    var slides = document.querySelectorAll("[aria-roledescription='slide']");
    for (i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            slides[i].classList.remove("active");
            if (i == 0) {
                slides[slides.length - 1].classList.add("active");
                break;
            }
            else {
                slides[i - 1].classList.add("active");
                break;
            }
        }
    }
}
init();