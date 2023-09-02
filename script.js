// document.getElementById("1").addEventListener("click",function(){
//     console.log("click")
// })

// document.getElementById("2").addEventListener("click",function(){
//     console.log("click")
// })

const tiles = document.getElementsByClassName("childBox");
const marks = document.getElementsByClassName("mark");

let mark = "o"
let numOfTiles = 0

const winCombo = [
    [1,2,3],
    [4,5,6],
    [7,8,9],

    [1,4,7],
    [2,5,8],
    [3,6,9],

    [1,5,9],
    [3,5,7]

]

for(const tile of tiles){
    tile.addEventListener("click",function(){

        //if inner div is empty
        if(!tile.firstChild){

            if(mark=="o"){
                mark = "x"
                tile.innerHTML = "<div class='mark'>"+mark+"</div>"
                numOfTiles++    
                // console.log(numOfTiles)
            }else{
                mark = "o"
                tile.innerHTML = "<div class='mark'>"+mark+"</div>"
                numOfTiles++
                // console.log(numOfTiles)
            }
        }
        // for(const mark of marks){
        //     console.log(mark.innerHTML)
        // }
        // let arr = [[]]
        console.log(document.getElementById("2").firstChild.innerHTML)
        
        // win if same mark sa
        // 123
        // 456
        // 789

        // 147
        // 258
        // 369

        // 159
        // 357
            
        
       
    })
}
// document.getElementsByClassName("childBox").addEventListener("click",function(){
//     console.log("click")
// })