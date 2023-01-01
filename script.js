"use strict"
let boxEl = document.getElementsByClassName("box");
let statusEl = document.getElementById("status");
let btnEl = document.getElementById("btn");
// winning pattern
let winningPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  [0, 4, 8], [2, 4, 6]];

let arr = ["", "", "", "", "", "", "", "", ""];
// winning logic
let checkWinner = function (){
    winningPattern.forEach(e=>{
        if(
            (arr[0] != null && arr[0] == arr[1] && arr[1] ==arr[2]) ||
            (arr[3] != null && arr[3] == arr[4] && arr[4] ==arr[5]) ||
            (arr[6] != null && arr[6] == arr[7] && arr[7] ==arr[8]) ||
            (arr[0] != null && arr[0] == arr[3] && arr[3] ==arr[6]) ||
            (arr[1] != null && arr[1] == arr[4] && arr[4] ==arr[7]) ||
            (arr[2] != null && arr[2] == arr[5] && arr[5] ==arr[8]) ||
            (arr[0] != null && arr[0] == arr[4] && arr[4] ==arr[8]) ||
            (arr[2] != null && arr[2] == arr[4] && arr[4] ==arr[6])
        ){
            statusEl.innerHTML = turn + "WON!";
            console.log("Won")
        }
    })
}
// player x plays first
let turn = "X";
// change player
let changePlayer = function(){
    return turn=="X"?"0":"X"
}
// game logic
Array.from(boxEl).forEach(function(ele)  {
    ele.addEventListener("click", ()=> {
        if(ele.innerText ==""){
            ele.innerText = turn;
            checkWinner();
            turn = changePlayer();
            statusEl.innerHTML = "Turn for " + turn;
        }
    })
});
// restart game logic
let reset = function (){
    Array.from(boxEl).forEach(function(ele){
        ele.innerText = "";
    })
}
