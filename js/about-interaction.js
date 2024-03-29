let getId = function (id) {
    return document.getElementById(id)
}
let getClass = function (className, index) {
    return document.getElementsByClassName(className)[index]
}

function fadeIn() {
    //pulls the fade-in class
    let fadeInClass = document.querySelectorAll(".fade-in")

    for (let i = 0; i < fadeInClass.length; i++) {

            const windowHeight = window.innerHeight;
            const elementTop = fadeInClass[i].getBoundingClientRect().top;
            const elementVisible = 300;
            //checks the height of the object within the window and changes the class to make it visible
        if (elementTop < windowHeight - elementVisible) {
            fadeInClass[i].classList.add("is-visible");
        }
    }

}

//creates an event that activates the fade-in process when the elements scroll into view
window.addEventListener("scroll", fadeIn)