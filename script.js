let balloonLocation = [Math.floor(Math.random())*100, Math.floor(Math.random())*100];
let leftMove = balloonLocation[0];
let topMove = balloonLocation[1];

const balloon1 = document.getElementById("#balloon1");
const balloon2 = document.querySelector("#balloon2");
const balloon3 = document.querySelector("#balloon3");
const balloon4 = document.querySelector("#balloon4");
const balloon5 = document.querySelector("#balloon5");

/*
function balloonMove() {
    style.left = "leftMove vw";
    style.top = "topMove vh";
}

 balloon1.addEventListener("click", balloonMove());
 balloon2.addEventListener("click", balloonMove());
 balloon3.addEventListener("click", balloonMove());
 balloon4.addEventListener("click", balloonMove());
 balloon5.addEventListener("click", balloonMove());
*/

 balloon5.addEventListener("click", function() {balloon5.style.top = "topMove vh"; balloon5.style.left = "leftMove vw"});
