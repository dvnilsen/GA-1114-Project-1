
let currentPlayer = "red";
let currentStatus = document.querySelector("h2"); 
let isRunning = true; 

let board = document.querySelector(".board");
let resetButton = document.querySelector(".reset");
//let spaceZero = document.getElementById("0");

let redPlayerArray = [];
let blackPlayerArray = []; 
const winningArray = [
//Row 1
[1,2,3,4],
[2,3,4,5],
[3,4,5,6],
[4,5,6,7],
//Row 2
[8,9,10,11],
[9,10,11,12],
[10,11,12,13],
[11,12,13,14],
//Row 3
[15,16,17,18],
[16,17,18,19],
[17,18,19,20],
[18,19,20,21],
//Row 4
[22,23,24,25],
[23,24,25,26],
[24,25,26,27],
[25,26,27,28],
//Row 5
[29,30,31,32],
[30,31,32,33],
[31,32,33,34],
[32,33,34,35],
//Row 6
[36,37,38,39],
[37,38,39,40],
[38,39,40,41],
[39,40,41,42],
//Column 1
[1,8,15,22],
[8,15,22,29],
[15,22,29,36],
//Column 2
[2,9,16,23],
[9,16,23,30],
[16,23,30,37],
//Column 3
[3,10,17,24],
[10,17,24,31],
[17,24,31,38],
//Column 4
[4,11,18,25],
[11,18,25,32],
[18,25,32,39],
//Column 5
[5,12,19,26],
[12,19,26,33],
[19,26,33,40],
//Column 6
[6,13,20,27],
[13,20,27,34],
[20,27,34,41],
//Column 7
[7,14,21,28],
[14,21,28,35],
[21,28,35,42],
//diagonal
[15,23,31,39],
[8,16,24,32],
[16,24,32,40],
[1,9,17,25],
[9,17,25,33],
[17,25,33,41],
[2,10,18,26],
[10,18,26,34],
[18,26,34,42],
[3,11,19,27],
[11,19,27,35],
[4,12,20,28],
//diagonal
[21,27,33,39],
[14,20,26,32],
[20,26,32,38],
[7,13,19,25],
[13,19,25,31],
[19,25,31,37],
[6,12,18,24],
[12,18,24,30],
[18,24,30,36],
[5,11,17,23],
[11,17,23,29],
[4,10,16,22]
]; 

//spaceZero.addEventListener("click", function() {
    //console.log(spaceZero.id); 
    //spaceZero.style.backgroundColor = "darkred";
//})

//create the 42 game spaces
for(let i=1; i<43; i++) {
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
let space42 = document.getElementById("42");

//EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW ONE
spaceOne.addEventListener("click", rowOne);
spaceEight.addEventListener("click", rowOne);
space15.addEventListener("click", rowOne);
space22.addEventListener("click", rowOne);
space29.addEventListener("click", rowOne);
space36.addEventListener("click", rowOne);

//EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW TWO
spaceTwo.addEventListener("click", rowTwo);
spaceNine.addEventListener("click", rowTwo);
space16.addEventListener("click", rowTwo);
space23.addEventListener("click", rowTwo);
space30.addEventListener("click", rowTwo);
space37.addEventListener("click", rowTwo);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW THREE
spaceThree.addEventListener("click", rowThree);
spaceTen.addEventListener("click", rowThree);
space17.addEventListener("click", rowThree);
space24.addEventListener("click", rowThree);
space31.addEventListener("click", rowThree);
space38.addEventListener("click", rowThree);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW FOUR
spaceFour.addEventListener("click", rowFour);
space11.addEventListener("click", rowFour);
space18.addEventListener("click", rowFour);
space25.addEventListener("click", rowFour);
space32.addEventListener("click", rowFour);
space39.addEventListener("click", rowFour);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW FIVE
spaceFive.addEventListener("click", rowFive);
space12.addEventListener("click", rowFive);
space19.addEventListener("click", rowFive);
space26.addEventListener("click", rowFive);
space33.addEventListener("click", rowFive);
space40.addEventListener("click", rowFive);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW SIX
spaceSix.addEventListener("click", rowSix);
space13.addEventListener("click", rowSix);
space20.addEventListener("click", rowSix);
space27.addEventListener("click", rowSix);
space34.addEventListener("click", rowSix);
space41.addEventListener("click", rowSix);

// EVENT LISTENERS TO CALL DROP FUNCTION FOR ROW SEVEN
spaceSeven.addEventListener("click", rowSeven);
space14.addEventListener("click", rowSeven);
space21.addEventListener("click", rowSeven);
space28.addEventListener("click", rowSeven);
space35.addEventListener("click", rowSeven);
space42.addEventListener("click", rowSeven);

// DROP FUNCTION FOR ROW ONE
function rowOne() {
// if player is red  
if(currentPlayer === "red" && isRunning === true) { 
  if(space36.innerText === "." && space29.innerText === "." && space22.innerText === "." && space15.innerText === "." && spaceEight.innerText === ".") {
    space36.style.backgroundColor = "darkred";
    space36.innerText = " ";
    redPlayerArray.push(36)
    currentPlayer = "black"
    currentStatus.innerText = "Player 2, it's your turn!"
    //console.log(redPlayerArray)
    checkWinner();
  }
  else if(space29.innerText === "." && space22.innerText === "." && space15.innerText === "." && spaceEight.innerText === ".") {
    space29.style.backgroundColor = "darkred"
    space29.innerText = " ";
    redPlayerArray.push(29)
    currentPlayer = "black"
    currentStatus.innerText = "Player 2, it's your turn!"
    //console.log(redPlayerArray)
    checkWinner();
  }
  else if(space22.innerText === "." && space15.innerText === "." && spaceEight.innerText === ".") {
    space22.style.backgroundColor = "darkred"
    space22.innerText = " ";
    redPlayerArray.push(22)
    currentPlayer = "black"
    currentStatus.innerText = "Player 2, it's your turn!"
    //console.log(redPlayerArray)
    checkWinner(); 
  }
  else if(space15.innerText === "." && spaceEight.innerText === ".") {
    space15.style.backgroundColor = "darkred"
    space15.innerText = " ";
    redPlayerArray.push(15)
    currentPlayer = "black"
    currentStatus.innerText = "Player 2, it's your turn!"
    //console.log(redPlayerArray)
    checkWinner();
  }
  else if(spaceEight.innerText === ".") {
    spaceEight.style.backgroundColor = "darkred"
    spaceEight.innerText = " ";
    redPlayerArray.push(8)
    currentPlayer = "black"
    currentStatus.innerText = "Player 2, it's your turn!"
    //console.log(redPlayerArray)
    checkWinner(); 
  }
  else if (spaceOne.innerText === ".") {
    spaceOne.style.backgroundColor = "darkred"
    spaceOne.innerText = " ";
    redPlayerArray.push(1)
    currentPlayer = "black"
    currentStatus.innerText = "Player 2, it's your turn!"
    //console.log(redPlayerArray)
    checkWinner();
  }
  // catch so the top space cannot be clicked again 
  else {
    currentStatus.innerText = "That row is full. Try again."
  }
}
// if player is black
else if(currentPlayer === "black" && isRunning === true){
    if(space36.innerText === "." && space29.innerText === "." && space22.innerText === "." && space15.innerText === "." && spaceEight.innerText === ".") {
        space36.style.backgroundColor = "black";
        space36.innerText = " ";
        blackPlayerArray.push(36)
        currentPlayer = "red"
        currentStatus.innerText = "Player 1, it's your turn!"
        checkWinner();
      }
      else if(space29.innerText === "." && space22.innerText === "." && space15.innerText === "." && spaceEight.innerText === ".") {
        space29.style.backgroundColor = "black"
        space29.innerText = " ";
        blackPlayerArray.push(29)
        currentPlayer = "red"
        currentStatus.innerText = "Player 1, it's your turn!"
        checkWinner();
      }
      else if(space22.innerText === "." && space15.innerText === "." && spaceEight.innerText === ".") {
        space22.style.backgroundColor = "black"
        space22.innerText = " ";
        blackPlayerArray.push(22)
        currentPlayer = "red"
        currentStatus.innerText = "Player 1, it's your turn!"
        checkWinner();
      }
      else if(space15.innerText === "." && spaceEight.innerText === ".") {
        space15.style.backgroundColor = "black"
        space15.innerText = " ";
        blackPlayerArray.push(15)
        currentPlayer = "red"
        currentStatus.innerText = "Player 1, it's your turn!"
        checkWinner();
      }
      else if(spaceEight.innerText === ".") {
        spaceEight.style.backgroundColor = "black"
        spaceEight.innerText = " ";
        blackPlayerArray.push(8)
        currentPlayer = "red"
        currentStatus.innerText = "Player 1, it's your turn!"
        checkWinner();
      }
      else if(spaceOne.innerText === ".") {
        spaceOne.style.backgroundColor = "black"
        spaceOne.innerText = " "; 
        blackPlayerArray.push(1)
        currentPlayer = "red"
        currentStatus.innerText = "Player 1, it's your turn!"
        checkWinner();
}     else {
      currentStatus.innerText = "That row is full. Try again."
}
}
}

// DROP FUNCTION FOR ROW TWO
function rowTwo() {
  // if player is red
  if(currentPlayer === "red" && isRunning === true) {
    if(space37.innerText === "." && space30.innerText === "." && space23.innerText === "." && space16.innerText === "." && spaceNine.innerText === ".") {
      space37.style.backgroundColor = "darkred";
      space37.innerText = " ";
      redPlayerArray.push(37)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space30.innerText === "." && space23.innerText === "." && space16.innerText === "." && spaceNine.innerText === ".") {
      space30.style.backgroundColor = "darkred"
      space30.innerText = " ";
      redPlayerArray.push(30)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space23.innerText === "." && space16.innerText === "." && spaceNine.innerText === ".") {
      space23.style.backgroundColor = "darkred"
      space23.innerText = " ";
      redPlayerArray.push(23)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space16.innerText === "." && spaceNine.innerText === ".") {
      space16.style.backgroundColor = "darkred"
      space16.innerText = " ";
      redPlayerArray.push(16)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(spaceNine.innerText === ".") {
      spaceNine.style.backgroundColor = "darkred"
      spaceNine.innerText = " ";
      redPlayerArray.push(9)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(spaceTwo.innerText === ".") {
      spaceTwo.style.backgroundColor = "darkred"
      spaceTwo.innerText = " "; 
      redPlayerArray.push(2)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  // if player is black  
  }
 else if(currentPlayer === "black" && isRunning === true){
  if(space37.innerText === "." && space30.innerText === "." && space23.innerText === "." && space16.innerText === "." && spaceNine.innerText === ".") {
    space37.style.backgroundColor = "black";
    space37.innerText = " ";
    blackPlayerArray.push(37)
    currentPlayer = "red"
    currentStatus.innerText = "Player 1, it's your turn!"
    checkWinner();
  }
  else if(space30.innerText === "." && space23.innerText === "." && space16.innerText === "." && spaceNine.innerText === ".") {
    space30.style.backgroundColor = "black"
    space30.innerText = " ";
    blackPlayerArray.push(30)
    currentPlayer = "red"
    currentStatus.innerText = "Player 1, it's your turn!"
    checkWinner();
  }
  else if(space23.innerText === "." && space16.innerText === "." && spaceNine.innerText === ".") {
    space23.style.backgroundColor = "black"
    space23.innerText = " ";
    blackPlayerArray.push(23)
    currentPlayer = "red"
    currentStatus.innerText = "Player 1, it's your turn!"
    checkWinner();
  }
  else if(space16.innerText === "." && spaceNine.innerText === ".") {
    space16.style.backgroundColor = "black"
    space16.innerText = " ";
    blackPlayerArray.push(16)
    currentPlayer = "red"
    currentStatus.innerText = "Player 1, it's your turn!"
    checkWinner();
  }
  else if(spaceNine.innerText === ".") {
    spaceNine.style.backgroundColor = "black"
    spaceNine.innerText = " ";
    blackPlayerArray.push(9)
    currentPlayer = "red"
    currentStatus.innerText = "Player 1, it's your turn!"
    checkWinner();
  }
  else if(spaceTwo.innerText === ".") {
    spaceTwo.style.backgroundColor = "black"
    blackPlayerArray.push(2)
    currentPlayer = "red"
    currentStatus.innerText = "Player 1, it's your turn!"
    checkWinner();
  }
  else {
    currentStatus.innerText = "That row is full. Try again."
  }

 }
}

// DROP FUNCTION FOR ROW THREE
function rowThree() {
  // if player is red
  if(currentPlayer === "red" && isRunning === true) {
    if(space38.innerText === "." && space31.innerText === "." && space24.innerText === "." && space17.innerText === "." && spaceTen.innerText === ".") {
      space38.style.backgroundColor = "darkred";
      redPlayerArray.push(38)
      space38.innerText = " ";
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space31.innerText === "." && space24.innerText === "." && space17.innerText === "." && spaceTen.innerText === ".") {
      space31.style.backgroundColor = "darkred"
      redPlayerArray.push(31)
      space31.innerText = " ";
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space24.innerText === "." && space17.innerText === "." && spaceTen.innerText === ".") {
      space24.style.backgroundColor = "darkred"
      redPlayerArray.push(24)
      space24.innerText = " ";
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space17.innerText === "." && spaceTen.innerText === ".") {
      space17.style.backgroundColor = "darkred"
      redPlayerArray.push(17)
      space17.innerText = " ";
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(spaceTen.innerText === ".") {
      spaceTen.style.backgroundColor = "darkred"
      redPlayerArray.push(10)
      spaceTen.innerText = " ";
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(spaceThree.innerText === ".") {
      spaceThree.style.backgroundColor = "darkred"
      redPlayerArray.push(3)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  // if player is black  
  } else if(currentPlayer === "black" && isRunning === true){
    if(space38.innerText === "." && space31.innerText === "." && space24.innerText === "." && space17.innerText === "." && spaceTen.innerText === ".") {
      space38.style.backgroundColor = "black";
      blackPlayerArray.push(38)
      space38.innerText = " ";
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space31.innerText === "." && space24.innerText === "." && space17.innerText === "." && spaceTen.innerText === ".") {
      space31.style.backgroundColor = "black"
      blackPlayerArray.push(31)
      space31.innerText = " ";
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space24.innerText === "." && space17.innerText === "." && spaceTen.innerText === ".") {
      space24.style.backgroundColor = "black"
      blackPlayerArray.push(24)
      space24.innerText = " ";
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space17.innerText === "." && spaceTen.innerText === ".") {
      space17.style.backgroundColor = "black"
      blackPlayerArray.push(17)
      space17.innerText = " ";
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(spaceTen.innerText === ".") {
      spaceTen.style.backgroundColor = "black"
      blackPlayerArray.push(10)
      spaceTen.innerText = " ";
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(spaceThree.innerText === ".") {
      spaceThree.style.backgroundColor = "black"
      blackPlayerArray.push(3)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  }
  }

  // DROP FUNCTION FOR ROW FOUR
  function rowFour() {
  // if player is red  
  if(currentPlayer === "red" && isRunning === true) {
    if(space39.innerText === "." && space32.innerText === "." && space25.innerText === "." && space18.innerText === "." && space11.innerText === ".") {
      space39.style.backgroundColor = "darkred";
      redPlayerArray.push(39)
      space39.innerText = " ";
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space32.innerText === "." && space25.innerText === "." && space18.innerText === "." && space11.innerText === ".") {
      space32.style.backgroundColor = "darkred"
      space32.innerText = " ";
      redPlayerArray.push(32)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space25.innerText === "." && space18.innerText === "." && space11.innerText === ".") {
      space25.style.backgroundColor = "darkred"
      space25.innerText = " ";
      redPlayerArray.push(25)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space18.innerText === "." && space11.innerText === ".") {
      space18.style.backgroundColor = "darkred"
      space18.innerText = " ";
      redPlayerArray.push(18)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space11.innerText === ".") {
      space11.style.backgroundColor = "darkred"
      space11.innerText = " ";
      redPlayerArray.push(11)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(spaceFour.innerText === ".") {
      spaceFour.style.backgroundColor = "darkred"
      spaceFour.innerText = " ";
      redPlayerArray.push(4)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  //if player is black  
  } else if(currentPlayer === "black" && isRunning === true){
    if(space39.innerText === "." && space32.innerText === "." && space25.innerText === "." && space18.innerText === "." && space11.innerText === ".") {
      space39.style.backgroundColor = "black";
      blackPlayerArray.push(39)
      space39.innerText = " ";
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space32.innerText === "." && space25.innerText === "." && space18.innerText === "." && space11.innerText === ".") {
      space32.style.backgroundColor = "black"
      space32.innerText = " ";
      blackPlayerArray.push(32)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space25.innerText === "." && space18.innerText === "." && space11.innerText === ".") {
      space25.style.backgroundColor = "black"
      space25.innerText = " ";
      blackPlayerArray.push(25)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space18.innerText === "." && space11.innerText === ".") {
      space18.style.backgroundColor = "black"
      space18.innerText = " ";
      blackPlayerArray.push(18)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space11.innerText === ".") {
      space11.style.backgroundColor = "black"
      space11.innerText = " ";
      blackPlayerArray.push(11)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(spaceFour.innerText === ".") {
      spaceFour.style.backgroundColor = "black"
      spaceFour.innerText = " ";
      blackPlayerArray.push(4)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  }
  }

  // DROP FUNTION FOR ROW FIVE
  function rowFive() {
  // if player is red
  if(currentPlayer === "red" && isRunning === true) {
    if(space40.innerText === "." && space33.innerText === "." && space26.innerText === "." && space19.innerText === "." && space12.innerText === ".") {
      space40.style.backgroundColor = "darkred";
      space40.innerText = " ";
      redPlayerArray.push(40)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space33.innerText === "." && space26.innerText === "." && space19.innerText === "." && space12.innerText === ".") {
      space33.style.backgroundColor = "darkred"
      space33.innerText = " ";
      redPlayerArray.push(33)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space26.innerText === "." && space19.innerText === "." && space12.innerText === ".") {
      space26.style.backgroundColor = "darkred"
      space26.innerText = " ";
      redPlayerArray.push(26)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space19.innerText === "." && space12.innerText === ".") {
      space19.style.backgroundColor = "darkred"
      space19.innerText = " ";
      redPlayerArray.push(19)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space12.innerText === ".") {
      space12.style.backgroundColor = "darkred"
      space12.innerText = " ";
      redPlayerArray.push(12)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(spaceFive.innerText === ".") {
      spaceFive.style.backgroundColor = "darkred"
      spaceFive.innerText = " "; 
      redPlayerArray.push(5)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  // if player is black  
  } else if(currentPlayer === "black" && isRunning === true){
    if(space40.innerText === "." && space33.innerText === "." && space26.innerText === "." && space19.innerText === "." && space12.innerText === ".") {
      space40.style.backgroundColor = "black";
      space40.innerText = " ";
      blackPlayerArray.push(40)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space33.innerText === "." && space26.innerText === "." && space19.innerText === "." && space12.innerText === ".") {
      space33.style.backgroundColor = "black"
      space33.innerText = " ";
      blackPlayerArray.push(33)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space26.innerText === "." && space19.innerText === "." && space12.innerText === ".") {
      space26.style.backgroundColor = "black"
      space26.innerText = " ";
      blackPlayerArray.push(26)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space19.innerText === "." && space12.innerText === ".") {
      space19.style.backgroundColor = "black"
      space19.innerText = " ";
      blackPlayerArray.push(19)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space12.innerText === ".") {
      space12.style.backgroundColor = "black"
      space12.innerText = " ";
      blackPlayerArray.push(12)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(spaceFive.innerText === ".") {
      spaceFive.style.backgroundColor = "black"
      spaceFive.innerText = " "; 
      blackPlayerArray.push(5)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  }
  }

  // DROP FUNCTION FOR ROW SIX
  function rowSix() {
  // if player is red
  if(currentPlayer === "red" && isRunning === true) {
    if(space41.innerText === "." && space34.innerText === "." && space27.innerText === "." && space20.innerText === "." && space13.innerText === ".") {
      space41.style.backgroundColor = "darkred";
      space41.innerText = " ";
      redPlayerArray.push(41)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space34.innerText === "." && space27.innerText === "." && space20.innerText === "." && space13.innerText === ".") {
      space34.style.backgroundColor = "darkred"
      space34.innerText = " ";
      redPlayerArray.push(34)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space27.innerText === "." && space20.innerText === "." && space13.innerText === ".") {
      space27.style.backgroundColor = "darkred"
      space27.innerText = " ";
      redPlayerArray.push(27)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space20.innerText === "." && space13.innerText === ".") {
      space20.style.backgroundColor = "darkred"
      space20.innerText = " ";
      redPlayerArray.push(20)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space13.innerText === ".") {
      space13.style.backgroundColor = "darkred"
      space13.innerText = " ";
      redPlayerArray.push(13)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(spaceSix.innerText === ".") {
      spaceSix.style.backgroundColor = "darkred"
      redPlayerArray.push(6)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  // if current player is black  
  } else if(currentPlayer === "black" && isRunning === true){
    if(space41.innerText === "." && space34.innerText === "." && space27.innerText === "." && space20.innerText === "." && space13.innerText === ".") {
      space41.style.backgroundColor = "black";
      space41.innerText = " ";
      blackPlayerArray.push(41)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space34.innerText === "." && space27.innerText === "." && space20.innerText === "." && space13.innerText === ".") {
      space34.style.backgroundColor = "black"
      space34.innerText = " ";
      blackPlayerArray.push(34)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space27.innerText === "." && space20.innerText === "." && space13.innerText === ".") {
      space27.style.backgroundColor = "black"
      space27.innerText = " ";
      blackPlayerArray.push(27)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space20.innerText === "." && space13.innerText === ".") {
      space20.style.backgroundColor = "black"
      space20.innerText = " ";
      blackPlayerArray.push(20)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space13.innerText === ".") {
      space13.style.backgroundColor = "black"
      space13.innerText = " ";
      blackPlayerArray.push(13)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(spaceSix.innerText === ".") {
      spaceSix.style.backgroundColor = "black"
      blackPlayerArray.push(6)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
  }
  else {
    currentStatus.innerText = "That row is full. Try again."
  }
  }
}

// DROP FUNCTION FOR ROW SEVEN
  function rowSeven() {
  // if player is red
  if(currentPlayer === "red" && isRunning === true) { 
    if(space42.innerText === "." && space35.innerText === "." && space28.innerText === "." && space21.innerText === "." && space14.innerText === ".") {
      space42.style.backgroundColor = "darkred";
      space42.innerText = " ";
      redPlayerArray.push(42)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space35.innerText === "." && space28.innerText === "." && space21.innerText === "." && space14.innerText === ".") {
      space35.style.backgroundColor = "darkred"
      space35.innerText = " ";
      redPlayerArray.push(35)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space28.innerText === "." && space21.innerText === "." && space14.innerText === ".") {
      space28.style.backgroundColor = "darkred"
      space28.innerText = " ";
      redPlayerArray.push(28)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space21.innerText === "." && space14.innerText === ".") {
      space21.style.backgroundColor = "darkred"
      space21.innerText = " ";
      redPlayerArray.push(21)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(space14.innerText === ".") {
      space14.style.backgroundColor = "darkred"
      space14.innerText = " ";
      redPlayerArray.push(14)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else if(spaceSeven.innerText === ".") {
      spaceSeven.style.backgroundColor = "darkred"
      spaceSeven.innerText = " "; 
      redPlayerArray.push(7)
      currentPlayer = "black"
      currentStatus.innerText = "Player 2, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  // if player is black
  } else if(currentPlayer === "black" && isRunning === true){
    if(space42.innerText === "." && space35.innerText === "." && space28.innerText === "." && space21.innerText === "." && space14.innerText === ".") {
      space42.style.backgroundColor = "black";
      space42.innerText = " ";
      blackPlayerArray.push(42)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space35.innerText === "." && space28.innerText === "." && space21.innerText === "." && space14.innerText === ".") {
      space35.style.backgroundColor = "black"
      space35.innerText = " ";
      blackPlayerArray.push(35)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space28.innerText === "." && space21.innerText === "." && space14.innerText === ".") {
      space28.style.backgroundColor = "black"
      space28.innerText = " ";
      blackPlayerArray.push(28)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space21.innerText === "." && space14.innerText === ".") {
      space21.style.backgroundColor = "black"
      space21.innerText = " ";
      blackPlayerArray.push(21)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(space14.innerText === ".") {
      space14.style.backgroundColor = "black"
      space14.innerText = " ";
      blackPlayerArray.push(14)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else if(spaceSeven.innerText === ".") {
      spaceSeven.style.backgroundColor = "black"
      spaceSeven.innerText = " "; 
      blackPlayerArray.push(7)
      currentPlayer = "red"
      currentStatus.innerText = "Player 1, it's your turn!"
      checkWinner();
    }
    else {
      currentStatus.innerText = "That row is full. Try again."
    }
  }
}

function checkWinner() {
  winningArray.forEach((i) => {
      if (i.every((j)=> redPlayerArray.includes(j))) {
          isRunning = false;
          currentStatus.innerText = "Player 1 wins! Please reset to play again.";
      } else if (i.every((j)=> blackPlayerArray.includes(j))) { 
          isRunning = false;
          currentStatus.innerText = "Player 2 wins! Please reset to play again.";
      } else if (redPlayerArray.length === 21 && blackPlayerArray.length === 21 ) {
          isRunning = false;
          currentStatus.innerText = "Tie game! Please reset to try again."
      }
  })  
}


resetButton.addEventListener("click", function() {
  redPlayerArray = [];
  blackPlayerArray = [];
  currentPlayer = "red";
  isRunning = true; 
  currentStatus.innerText = "Player 1: Start the game!";
  spaceOne.innerText = ".";
  spaceTwo.innerText = ".";
  spaceThree.innerText = ".";
  spaceFour.innerText = ".";
  spaceFive.innerText = ".";
  spaceSix.innerText = ".";
  spaceSeven.innerText = ".";
  spaceEight.innerText = ".";
  spaceNine.innerText = ".";
  spaceTen.innerText = ".";
  space11.innerText = ".";
  space12.innerText = ".";
  space13.innerText = ".";
  space14.innerText = ".";
  space15.innerText = ".";
  space16.innerText = ".";
  space17.innerText = ".";
  space18.innerText = ".";
  space19.innerText = ".";
  space20.innerText = ".";
  space21.innerText = ".";
  space22.innerText = ".";
  space23.innerText = ".";
  space24.innerText = ".";
  space25.innerText = ".";
  space26.innerText = ".";
  space27.innerText = ".";
  space28.innerText = ".";
  space29.innerText = ".";
  space30.innerText = ".";
  space31.innerText = ".";
  space32.innerText = ".";
  space33.innerText = ".";
  space34.innerText = ".";
  space35.innerText = ".";
  space36.innerText = ".";
  space37.innerText = ".";
  space38.innerText = ".";
  space39.innerText = ".";
  space40.innerText = ".";
  space41.innerText = ".";
  space42.innerText = ".";
  spaceOne.style.backgroundColor = "antiquewhite";
  spaceTwo.style.backgroundColor = "antiquewhite";
  spaceThree.style.backgroundColor = "antiquewhite";
  spaceFour.style.backgroundColor = "antiquewhite";
  spaceFive.style.backgroundColor = "antiquewhite";
  spaceSix.style.backgroundColor = "antiquewhite";
  spaceSeven.style.backgroundColor = "antiquewhite";
  spaceEight.style.backgroundColor = "antiquewhite";
  spaceNine.style.backgroundColor = "antiquewhite";
  spaceTen.style.backgroundColor = "antiquewhite";
  space11.style.backgroundColor = "antiquewhite";
  space12.style.backgroundColor = "antiquewhite";
  space13.style.backgroundColor = "antiquewhite";
  space14.style.backgroundColor = "antiquewhite";
  space15.style.backgroundColor = "antiquewhite";
  space16.style.backgroundColor = "antiquewhite";
  space17.style.backgroundColor = "antiquewhite";
  space18.style.backgroundColor = "antiquewhite";
  space19.style.backgroundColor = "antiquewhite";
  space20.style.backgroundColor = "antiquewhite";
  space21.style.backgroundColor = "antiquewhite";
  space22.style.backgroundColor = "antiquewhite";
  space23.style.backgroundColor = "antiquewhite";
  space24.style.backgroundColor = "antiquewhite";
  space25.style.backgroundColor = "antiquewhite";
  space26.style.backgroundColor = "antiquewhite";
  space27.style.backgroundColor = "antiquewhite";
  space28.style.backgroundColor = "antiquewhite";
  space29.style.backgroundColor = "antiquewhite";
  space30.style.backgroundColor = "antiquewhite";
  space31.style.backgroundColor = "antiquewhite";
  space32.style.backgroundColor = "antiquewhite";
  space33.style.backgroundColor = "antiquewhite";
  space34.style.backgroundColor = "antiquewhite";
  space35.style.backgroundColor = "antiquewhite";
  space36.style.backgroundColor = "antiquewhite";
  space37.style.backgroundColor = "antiquewhite";
  space38.style.backgroundColor = "antiquewhite";
  space39.style.backgroundColor = "antiquewhite";
  space40.style.backgroundColor = "antiquewhite";
  space41.style.backgroundColor = "antiquewhite";
  space42.style.backgroundColor = "antiquewhite";
})

