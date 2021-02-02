console.log("Arcade");

var CB = document.getElementById("CoinBlock");
var HB = document.getElementById("HeartBlock");
var P1B = document.getElementById("Player1Block");
var P2B = document.getElementById("Player2Block");


CB.addEventListener("click",function () {CB.classList.toggle("Hide");}, false);
HB.addEventListener("click", function() {HB.classList.toggle("Hide");}, false);	

P1B.addEventListener("click",function () {P2B.classList.toggle("Hide");}, false);
P2B.addEventListener("click", function() {P1B.classList.toggle("Hide");}, false);	

