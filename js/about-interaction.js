let getId = function (id) {
    return document.getElementById(id)
}
let getClass = function (className, index) {
    return document.getElementsByClassName(className)[index]
}

function fadeIn() {
    let fadeInClass = document.querySelectorAll(".fade-in")

    for (let i = 0; i < fadeInClass.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = fadeInClass[i].getBoundingClientRect().top;
            const elementVisible = 300;
            
        if (elementTop < windowHeight - elementVisible) {
            fadeInClass[i].classList.add("is-visible");
        }
    }

}

window.addEventListener("scroll", fadeIn)