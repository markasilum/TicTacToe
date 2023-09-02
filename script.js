//get the id and class names
const tiles = document.getElementsByClassName("childBox");
const marks = document.getElementsByClassName("mark");
const result = document.getElementById("result");

let mark = "o"
let numOfTiles = 0
let win = false

//guide
const possibleWinningCombo = [
    [1,2,3],//0 
    [4,5,6],//1
    [7,8,9],//2

    [1,4,7],//3
    [2,5,8],//4
    [3,6,9],//5

    [1,5,9],//6
    [3,5,7]//7

]

let winComboArr = [
    //rows
    [],//row 1
    [],//row 2
    [],//row 3

    //columns
    [],//column 1
    [],//column 2
    [],//column 3

    //diagonal
    [],//1-9
    []//3-7

]

//add mark if tile is clicked
for (const tile of tiles) {
  tile.addEventListener("click", function () {
    //if inner div is empty and no winner
    if (!tile.firstChild && win == false) {
      if (mark == "o") {
        mark = "x";
        tile.innerHTML = "<div class='mark'>" + mark + "</div>";
        numOfTiles++;
      } else {
        mark = "o";
        tile.innerHTML = "<div class='mark'>" + mark + "</div>";
        numOfTiles++;
      }
      tileId = tile.id;
      pushMarks(tileId);
      winOrNot();
    }
  });
}

function pushMarks(tileId) {
  //push mark on corresponding index of array
  if (tileId == "1") {
    winComboArr[0].push(mark);
    winComboArr[3].push(mark);
    winComboArr[6].push(mark);
  } else if (tileId == "2") {
    winComboArr[0].push(mark);
    winComboArr[4].push(mark);
  } else if (tileId == "3") {
    winComboArr[0].push(mark);
    winComboArr[5].push(mark);
    winComboArr[7].push(mark);
  } else if (tileId == "4") {
    winComboArr[1].push(mark);
    winComboArr[3].push(mark);
  } else if (tileId == "5") {
    winComboArr[1].push(mark);
    winComboArr[4].push(mark);
    winComboArr[6].push(mark);
    winComboArr[7].push(mark);
  } else if (tileId == "6") {
    winComboArr[1].push(mark);
    winComboArr[5].push(mark);
  } else if (tileId == "7") {
    winComboArr[2].push(mark);
    winComboArr[3].push(mark);
    winComboArr[7].push(mark);
  } else if (tileId == "8") {
    winComboArr[2].push(mark);
    winComboArr[4].push(mark);
  } else if (tileId == "9") {
    winComboArr[2].push(mark);
    winComboArr[5].push(mark);
    winComboArr[6].push(mark);
  }
}
function winOrNot() {
  //check the indexes of winning combo array
  for (index of winComboArr) {
    //if index is full, check if contents are the same value
    if (index.length == 3) {
      if (index[0] == index[1] && index[1] == index[2]) {
        win = true;
        result.innerHTML = index[2].toUpperCase() + " won!";
        let indexNum = winComboArr.indexOf(index);//returns the index of the array which satisfied the condition
        drawLine(indexNum);
      } else {
        if (numOfTiles == 9 && win == false) {
          result.innerHTML = "Draw";
        }
      }
    }
  }
}

function drawLine(indexNum) {
  const line = document.getElementById("winLine");
  line.style.display = "block";
  if (indexNum == 0 || indexNum == 1 || indexNum == 2) {
    line.style.height = "5px";
    line.style.width = "600px";

    if (indexNum == 0) {
      line.style.top = "185px";
    } else if (indexNum == 1) {
      line.style.top = "390px";
    } else {
      line.style.top = "595px";
    }
  } else if (indexNum == 3 || indexNum == 4 || indexNum == 5) {
    line.style.height = "600px";
    line.style.width = "5px";

    if (indexNum == 3) {
      line.style.left = "565px";
    } else if (indexNum == 4) {
      line.style.left = "770px";
    } else {
      line.style.left = "970px";
    }
  } else {
    if (indexNum == 6) {
      line.style.transform = "rotate(-45deg)";
      line.style.height = "800px";
      line.style.width = "5px";
    } else {
      line.style.transform = "rotate(45deg)";
      line.style.height = "800px";
      line.style.width = "5px";
    }
  }
}