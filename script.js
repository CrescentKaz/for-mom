let move = Math.floor(Math.random()*100);
console.log(move);

const balloon1 = document.getElementById("#balloon1");
const balloon2 = document.getElementById("#balloon2");
const balloon3 = document.getElementById("#balloon3");
const balloon4 = document.getElementById("#balloon4");
const balloon5 = document.getElementById("#balloon5");

balloon1.addEventListener("click", function() {balloon1.style.top = move+"vh"; balloon1.style.left = move+"vw"});
balloon2.addEventListener("click", function() {balloon2.style.top = "move"; balloon2.style.left = "move"});
balloon3.addEventListener("click", function() {balloon3.style.top = "move"; balloon3.style.left = "move"});
balloon4.addEventListener("click", function() {balloon4.style.top = "move"; balloon4.style.left = "move"});
balloon5.addEventListener("click", function() {balloon5.style.top = "move"; balloon5.style.left = "move"});