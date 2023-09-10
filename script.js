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
      let tileId = tile.id;
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
  let winLetter
  let indexNum
  //check the indexes of winning combo array
  for (index of winComboArr) {
    //if index is full, check if contents are the same value
    if (index.length == 3) {
      if (index[0] == index[1] && index[1] == index[2]) {
        win = true;
        winLetter= index[2].toUpperCase() + " is the winner";
        indexNum = winComboArr.indexOf(index);//returns the index of the array which satisfied the condition
      } 
    }
  }
  if(win==true){
    console.log(winLetter)
    drawLine(indexNum);
    setTimeout(function(){alert(winLetter)},0)
  }else if(numOfTiles == 9 && win==false){
    console.log("draw")
    setTimeout(function(){alert("Draw")},10)
    }
}
function drawLine(indexNum){
  let winningArray = possibleWinningCombo[indexNum]
  for(index of winningArray){
    let winId = document.getElementById(index);
    winId.style.backgroundColor = "#FB4570"
  }

}
