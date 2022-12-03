let board = document.querySelector(".board");
let spaceZero = document.getElementById("0");

spaceZero.addEventListener("click", function() {
    console.log(spaceZero.id); 
    spaceZero.style.backgroundColor = "darkred";
})

//create the 42 game spaces
for(let i=1; i<42; i++) {
    let newSpace = document.createElement("div");
    newSpace.classList.add("space");
    //adds a unique ID number to each div in the 'space' class
    newSpace.setAttribute("id", i); 
    //After creating them, add them to the screen
    board.append(newSpace);
    newSpace.addEventListener("click", function() {
        //console.log(newSpace.id); 
        let newSpaceID = newSpace.id;
        let numberID = Number(newSpaceID);
        //console.log(numberID + 7); 
        let newSpaceNumber = numberID; 
        
        
        newSpace.style.backgroundColor = "darkred";
    
    }) 
}

// function to call when spaces are clicked

function dropPiece() {

}

