// document.getElementById("person").onclick = function(){
//     alert("Person");
// }

// attachEvent()
// jQuery - on

// document.getElementById("images").addEventListener("click", function(ev){
//     console.log("Clicked inside ul");
// }, false);   // false - bubbling (child to parent)
// // true - capturing (parent to child)

// document.getElementById("person").addEventListener("click", function(ev){
//     console.log("Person Clicked");
//     ev.stopPropagation();
// });

document.getElementById("google").addEventListener("click", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    console.log("Google clicked");
}, false);

// Click on image then hide

document.querySelector("#images").addEventListener("click", (ev) => {
    console.log(ev.target.parentNode);
    if(ev.target.tagName === "IMG"){
        let removeNode = ev.target.parentNode;
        removeNode.remove();
    }
    // removeNode.parentNode.removeChild(removeNode);
})
