let balloonLocation = [Math.floor(Math.random())*100, Math.floor(Math.random())*100];
let leftMove = balloonLocation[0];
let topMove = balloonLocation[1];

const balloon1 = document.querySelector("#balloon1");
const balloon2 = document.querySelector("#balloon2");
const balloon3 = document.querySelector("#balloon3");
const balloon4 = document.querySelector("#balloon4");
const balloon5 = document.querySelector("#balloon5");

function balloonMove(whichBalloon) {
    whichBalloon.style.left = "leftMove vw";
    whichBalloon.style.top = "topMove vh";
}



// balloon1.addEventListener(onclick, top = x, left = y);
