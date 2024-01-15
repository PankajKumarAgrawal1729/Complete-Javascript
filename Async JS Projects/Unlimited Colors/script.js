const start = document.getElementById("start");
const stop = document.getElementById("stop");
const mainContainer = document.querySelector(".container");

//generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        const randomIndex = parseInt(Math.random() * 16);
        color += hex[randomIndex];
    }
    return color;
}

// change color
function changeColor() {
    const color = randomColor();
    mainContainer.style.backgroundColor = color;
}
let timer;
start.addEventListener("click", () => {
    if(!timer){
        timer = setInterval(changeColor, 1000);
    }
}
)

stop.addEventListener("click", () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
})
