let getId = function (id) {
    return document.getElementById(id)
}
let getClass = function (className, index) {
    return document.getElementsByClassName(className)[index]
}


// position within the canvas
let xpos, ypos

// creates a div that we will place over the drawn door to create an invisible clickable object
const door = document.createElement("div")
// adds the stopper id to the objext that wil allow it to stop when hovered
door.id = "stopper"
let doorHeight = 200
let doorWidth = 100

// direction and speed the object will go
let speed = 5
let xdirection = 1
let ydirection = 1

// draws the door on the canvas and adds the door div
function setup() {

    createCanvas(innerWidth, innerHeight)
    noStroke()
    frameRate(30)
    loop()

    document.body.appendChild(door)

    xpos = width / 2
    ypos = height / 2
}

function draw() {

    // creates a new drawing of the door every tick
    background (0)

    xpos = xpos + (speed * xdirection)
    ypos = ypos + (speed * ydirection)

    if (xpos > width - 205 || xpos < 105) {
        xdirection *= -1
    }  
    if (ypos > height - 200 || ypos < 0) {
        ydirection *= -1
    }

    // sets the invisible div position to be on top of the door at all times
    let doorPos = [xpos + 'px', ypos + 760 + 'px']
    door.style.left = doorPos[0]
    door.style.top = doorPos[1]




    fill(100, 77, 67)
    rect (xpos, ypos, doorWidth, doorHeight) 
    fill(70, 39, 33) 
    ellipse(xpos + 85, ypos + 105, 13, 13)

    fill(138, 190, 161)
    rect(0, 0, 35, innerHeight)
    rect(innerWidth - 35, 0, 35, innerHeight)
    fill(248, 206, 113)
    rect(35, 0, 35, innerHeight)
    rect(innerWidth - 70, 0, 35, innerHeight)
    fill(155, 60, 35)
    rect(70, 0, 35, innerHeight)
    rect(innerWidth - 105, 0, 35, innerHeight)
}

function stop () {
    noLoop()
}

function move () {
    loop()
}

function openLink () {
    window.open('https://kasdein.github.io/Imposter_Syndrome/sketchbook_door.html')
}

door.addEventListener('click', openLink)
door.addEventListener('mouseover', stop)
door.addEventListener('mouseout', move)