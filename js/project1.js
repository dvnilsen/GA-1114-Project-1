let board = document.querySelector(".board");
let spaceZero = document.getElementById("0");

spaceZero.addEventListener("click", function() {
    console.log(spaceZero.id); 
    spaceZero.style.backgroundColor = "red";
})

//create the 42 game spaces
for(let i=1; i<42; i++) {
    let newSpace = document.createElement("div");
    newSpace.classList.add("space");
    newSpace.setAttribute("id", i); 
    //After creating them, add them to the screen
    board.append(newSpace);
    newSpace.addEventListener("click", function() {
        console.log(newSpace.id); 
        newSpace.style.backgroundColor = "red";
    })
}

