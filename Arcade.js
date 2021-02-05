console.log("Arcade");

var CB = document.getElementById("CoinBlock");
var HB = document.getElementById("HeartBlock");
var P1B = document.getElementById("Player1Block");
var P2B = document.getElementById("Player2Block");


CB.addEventListener("click",function () {CB.classList.toggle("Hide");}, false);
HB.addEventListener("click", function() {HB.classList.toggle("Hide");}, false);	

P1B.addEventListener("click",function () {P2B.classList.toggle("Hide");}, false);
P2B.addEventListener("click", function() {P1B.classList.toggle("Hide");}, false);	




// Player moving

// let player1 = document.querySelector(".Player1Block");
// let moveBy = 10;

// window.addEventListener("load", () => {
// 	player1.style.position = "absolute";
// 	player1.style.left = 0;
// 	player1.style.top = 0; 
// });

// window.addEventListener("keydown", (e) => {
// 	switch (e.key) {
// 		case "ArrowLeft":
// 			player1.style.left = parseInt(player1.style.left) - moveBy + "px";
// 			break;
// 		case "ArrowRight":
// 			player1.style.left = parseInt(player1.style.left) + moveBy + "px";
// 			break;
// 		case "ArrowUp":
// 			player1.style.top = parseInt(player1.style.top) - moveBy + "px";
// 			break;
// 		case "ArrowDown":
// 			player1.style.top = parseInt(player1.style.top) + moveBy + "px";
// 			break;

// 	}
// });