let move = Math.floor(Math.random()*100);
console.log(move);

const decor1 = document.getElementById("#decor1");
const decor2 = document.getElementById("#decor2");
const decor3 = document.getElementById("#decor3");
const decor4 = document.getElementById("#decor4");
const decor5 = document.getElementById("#decor5");

function moveLocation(ball) {
    ball.style.top = move + "vh"; 
    ball.style.left = Math.floor(Math.random()*100) + "vw";
}

decor1.addEventListener("click", moveLocation(decor1){console.log(move);});

/*
decor1.addEventListener("click", function() {decor1.style.top = move+"vh"; decor1.style.left = move+"vw"});
decor2.addEventListener("click", function() {decor2.style.top = "move"; decor2.style.left = "move"});
decor3.addEventListener("click", function() {decor3.style.top = "move"; decor3.style.left = "move"});
decor4.addEventListener("click", function() {decor4.style.top = "move"; decor4.style.left = "move"});
decor5.addEventListener("click", function() {decor5.style.top = "move"; decor5.style.left = "move"});
*/