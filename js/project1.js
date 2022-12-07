let board = document.querySelector(".board");
let spaceZero = document.getElementById("0");

//spaceZero.addEventListener("click", function() {
    //console.log(spaceZero.id); 
    //spaceZero.style.backgroundColor = "darkred";
//})

//create the 42 game spaces
for(let i=1; i<42; i++) {
    let newSpace = document.createElement("div");
    newSpace.classList.add("space");
    //adds a unique ID number to each div in the 'space' class
    newSpace.setAttribute("id", i); 
    //After creating them, add them to the screen
    board.append(newSpace);
    newSpace.innerText = ".";
    newSpace.addEventListener("click", function() {
        console.log(newSpace.id); 
                
   }) 
}

let spaceOne = document.getElementById("1");
let spaceTwo = document.getElementById("2");
let spaceThree = document.getElementById("3");
let spaceFour = document.getElementById("4");
let spaceFive = document.getElementById("5");
let spaceSix = document.getElementById("6");
let spaceSeven = document.getElementById("7");
let spaceEight = document.getElementById("8");
let spaceNine = document.getElementById("9");
let spaceTen = document.getElementById("10");
let space11 = document.getElementById("11");
let space12 = document.getElementById("12");
let space13 = document.getElementById("13");
let space14 = document.getElementById("14");
let space15 = document.getElementById("15");
let space16 = document.getElementById("16");
let space17 = document.getElementById("17");
let space18 = document.getElementById("18");
let space19 = document.getElementById("19");
let space20 = document.getElementById("20");
let space21 = document.getElementById("21");
let space22 = document.getElementById("22");
let space23 = document.getElementById("23");
let space24 = document.getElementById("24");
let space25 = document.getElementById("25");
let space26 = document.getElementById("26");
let space27 = document.getElementById("27");
let space28 = document.getElementById("28");
let space29 = document.getElementById("29");
let space30 = document.getElementById("30");
let space31 = document.getElementById("31");
let space32 = document.getElementById("32");
let space33 = document.getElementById("33");
let space34 = document.getElementById("34");
let space35 = document.getElementById("35");
let space36 = document.getElementById("36");
let space37 = document.getElementById("37");
let space38 = document.getElementById("38");
let space39 = document.getElementById("39");
let space40 = document.getElementById("40");
let space41 = document.getElementById("41");

//EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW ONE
spaceZero.addEventListener("click", rowOne);
spaceSeven.addEventListener("click", rowOne);
space14.addEventListener("click", rowOne);
space21.addEventListener("click", rowOne);
space28.addEventListener("click", rowOne);
space35.addEventListener("click", rowOne);

//EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW TWO
spaceOne.addEventListener("click", rowTwo);
spaceEight.addEventListener("click", rowTwo);
space15.addEventListener("click", rowTwo);
space22.addEventListener("click", rowTwo);
space29.addEventListener("click", rowTwo);
space36.addEventListener("click", rowTwo);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW THREE
spaceTwo.addEventListener("click", rowThree);
spaceNine.addEventListener("click", rowThree);
space16.addEventListener("click", rowThree);
space23.addEventListener("click", rowThree);
space30.addEventListener("click", rowThree);
space37.addEventListener("click", rowThree);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW FOUR
spaceThree.addEventListener("click", rowFour);
spaceTen.addEventListener("click", rowFour);
space17.addEventListener("click", rowFour);
space24.addEventListener("click", rowFour);
space31.addEventListener("click", rowFour);
space38.addEventListener("click", rowFour);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW FIVE
spaceFour.addEventListener("click", rowFive);
space11.addEventListener("click", rowFive);
space18.addEventListener("click", rowFive);
space25.addEventListener("click", rowFive);
space32.addEventListener("click", rowFive);
space39.addEventListener("click", rowFive);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW SIX
spaceFive.addEventListener("click", rowSix);
space12.addEventListener("click", rowSix);
space19.addEventListener("click", rowSix);
space26.addEventListener("click", rowSix);
space33.addEventListener("click", rowSix);
space40.addEventListener("click", rowSix);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW SEVEN
spaceSix.addEventListener("click", rowSeven);
space13.addEventListener("click", rowSeven);
space20.addEventListener("click", rowSeven);
space27.addEventListener("click", rowSeven);
space34.addEventListener("click", rowSeven);
space41.addEventListener("click", rowSeven);

// DROP FUNCTION FOR ROW ONE
function rowOne() {
  if(space35.innerText === "." && space28.innerText === "." && space21.innerText === "." && space14.innerText === "." && spaceSeven.innerText === ".") {
    space35.style.backgroundColor = "darkred";
    space35.innerText = " ";
  }
  else if(space28.innerText === "." && space21.innerText === "." && space14.innerText === "." && spaceSeven.innerText === ".") {
    space28.style.backgroundColor = "darkred"
    space28.innerText = " ";
  }
  else if(space21.innerText === "." && space14.innerText === "." && spaceSeven.innerText === ".") {
    space21.style.backgroundColor = "darkred"
    space21.innerText = " ";
  }
  else if(space14.innerText === "." && spaceSeven.innerText === ".") {
    space14.style.backgroundColor = "darkred"
    space14.innerText = " ";
  }
  else if(spaceSeven.innerText === ".") {
    spaceSeven.style.backgroundColor = "darkred"
    spaceSeven.innerText = " ";
  }
  else {
    spaceZero.style.backgroundColor = "darkred"
  }
}

// DROP FUNCTION FOR ROW TWO
function rowTwo() {
    if(space36.innerText === "." && space29.innerText === "." && space22.innerText === "." && space15.innerText === "." && spaceEight.innerText === ".") {
      space36.style.backgroundColor = "darkred";
      space36.innerText = " ";
    }
    else if(space29.innerText === "." && space22.innerText === "." && space15.innerText === "." && spaceEight.innerText === ".") {
      space29.style.backgroundColor = "darkred"
      space29.innerText = " ";
    }
    else if(space22.innerText === "." && space15.innerText === "." && spaceEight.innerText === ".") {
      space22.style.backgroundColor = "darkred"
      space22.innerText = " ";
    }
    else if(space15.innerText === "." && spaceEight.innerText === ".") {
      space15.style.backgroundColor = "darkred"
      space15.innerText = " ";
    }
    else if(spaceEight.innerText === ".") {
      spaceEight.style.backgroundColor = "darkred"
      spaceEight.innerText = " ";
    }
    else {
      spaceOne.style.backgroundColor = "darkred"
    }
  }

// DROP FUNCTION FOR ROW THREE
function rowThree() {
    if(space37.innerText === "." && space30.innerText === "." && space23.innerText === "." && space16.innerText === "." && spaceNine.innerText === ".") {
      space37.style.backgroundColor = "darkred";
      space37.innerText = " ";
    }
    else if(space30.innerText === "." && space23.innerText === "." && space16.innerText === "." && spaceNine.innerText === ".") {
      space30.style.backgroundColor = "darkred"
      space30.innerText = " ";
    }
    else if(space23.innerText === "." && space16.innerText === "." && spaceNine.innerText === ".") {
      space23.style.backgroundColor = "darkred"
      space23.innerText = " ";
    }
    else if(space16.innerText === "." && spaceNine.innerText === ".") {
      space16.style.backgroundColor = "darkred"
      space16.innerText = " ";
    }
    else if(spaceNine.innerText === ".") {
      spaceNine.style.backgroundColor = "darkred"
      spaceNine.innerText = " ";
    }
    else {
      spaceTwo.style.backgroundColor = "darkred"
    }
  }

  // DROP FUNCTION FOR ROW FOUR
  function rowFour() {
    if(space38.innerText === "." && space31.innerText === "." && space24.innerText === "." && space17.innerText === "." && spaceTen.innerText === ".") {
      space38.style.backgroundColor = "darkred";
      space38.innerText = " ";
    }
    else if(space31.innerText === "." && space24.innerText === "." && space17.innerText === "." && spaceTen.innerText === ".") {
      space31.style.backgroundColor = "darkred"
      space31.innerText = " ";
    }
    else if(space24.innerText === "." && space17.innerText === "." && spaceTen.innerText === ".") {
      space24.style.backgroundColor = "darkred"
      space24.innerText = " ";
    }
    else if(space17.innerText === "." && spaceTen.innerText === ".") {
      space17.style.backgroundColor = "darkred"
      space17.innerText = " ";
    }
    else if(spaceTen.innerText === ".") {
      spaceTen.style.backgroundColor = "darkred"
      spaceTen.innerText = " ";
    }
    else {
      spaceThree.style.backgroundColor = "darkred"
    }
  }

  // DROP FUNTION FOR ROW FIVE
  function rowFive() {
    if(space39.innerText === "." && space32.innerText === "." && space25.innerText === "." && space18.innerText === "." && space11.innerText === ".") {
      space39.style.backgroundColor = "darkred";
      space39.innerText = " ";
    }
    else if(space32.innerText === "." && space25.innerText === "." && space18.innerText === "." && space11.innerText === ".") {
      space32.style.backgroundColor = "darkred"
      space32.innerText = " ";
    }
    else if(space25.innerText === "." && space18.innerText === "." && space11.innerText === ".") {
      space25.style.backgroundColor = "darkred"
      space25.innerText = " ";
    }
    else if(space18.innerText === "." && space11.innerText === ".") {
      space18.style.backgroundColor = "darkred"
      space18.innerText = " ";
    }
    else if(space11.innerText === ".") {
      space11.style.backgroundColor = "darkred"
      space11.innerText = " ";
    }
    else {
      spaceFour.style.backgroundColor = "darkred"
    }
  }

  // DROP FUNCTION FOR ROW SIX
  function rowSix() {
    if(space40.innerText === "." && space33.innerText === "." && space26.innerText === "." && space19.innerText === "." && space12.innerText === ".") {
      space40.style.backgroundColor = "darkred";
      space40.innerText = " ";
    }
    else if(space33.innerText === "." && space26.innerText === "." && space19.innerText === "." && space12.innerText === ".") {
      space33.style.backgroundColor = "darkred"
      space33.innerText = " ";
    }
    else if(space26.innerText === "." && space19.innerText === "." && space12.innerText === ".") {
      space26.style.backgroundColor = "darkred"
      space26.innerText = " ";
    }
    else if(space19.innerText === "." && space12.innerText === ".") {
      space19.style.backgroundColor = "darkred"
      space19.innerText = " ";
    }
    else if(space12.innerText === ".") {
      space12.style.backgroundColor = "darkred"
      space12.innerText = " ";
    }
    else {
      spaceFive.style.backgroundColor = "darkred"
    }
  }

// DROP FUNCTION FOR ROW SEVEN
  function rowSeven() {
    if(space41.innerText === "." && space34.innerText === "." && space27.innerText === "." && space20.innerText === "." && space13.innerText === ".") {
      space41.style.backgroundColor = "darkred";
      space41.innerText = " ";
    }
    else if(space34.innerText === "." && space27.innerText === "." && space20.innerText === "." && space13.innerText === ".") {
      space34.style.backgroundColor = "darkred"
      space34.innerText = " ";
    }
    else if(space27.innerText === "." && space20.innerText === "." && space13.innerText === ".") {
      space27.style.backgroundColor = "darkred"
      space27.innerText = " ";
    }
    else if(space20.innerText === "." && space13.innerText === ".") {
      space20.style.backgroundColor = "darkred"
      space20.innerText = " ";
    }
    else if(space13.innerText === ".") {
      space13.style.backgroundColor = "darkred"
      space13.innerText = " ";
    }
    else {
      spaceSix.style.backgroundColor = "darkred"
    }
  }