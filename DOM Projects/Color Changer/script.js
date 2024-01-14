const container = document.querySelector(".container");
const box = document.querySelector(".color-box");
const reset = document.querySelector(".restart");

box.addEventListener("click", (ev) => {
    const currBox = ev.target;
    console.log(currBox);
    container.style.backgroundColor = currBox.id;

});

reset.addEventListener("click", () => {
    container.style.backgroundColor = "paleturquoise";
})