let boxEl = document.getElementsByClassName("box");
let statusEl = document.getElementById("status");
let btnEl = document.getElementById("btn");
// winning pattern
let winningPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  [0, 4, 8], [2, 4, 6]];
// player x plays first
let turn = "X";
// pattern changr fn
changePattern = ()=>{
    return turn ==="X"?"0": "X";
}
// display X/0
Array.from(boxEl).forEach((element) => {element.addEventListener("click", ()=>{
    if(element.innerHTML===""){
    element.innerHtml = turn;
    turn = changePattern;
    }
});
});
