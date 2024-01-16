let getId = function (id) {
    return document.getElementById(id)
}
let getClass = function (className, index) {
    return document.getElementsByClassName(className)[index]
}

let buttonSketch = getClass('click')

buttonSketch.onclick = () => {
    window.open("https://Imposter_Syndrome/sketcbook_door.html")
}