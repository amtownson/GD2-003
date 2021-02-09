console.log("Arcade");

// START SCREEN

// var CB = document.getElementById("CoinBlock");
// var HB = document.getElementById("HeartBlock");
var PB1 = document.getElementById("PlayerBlock1");
var PB2 = document.getElementById("PlayerBlock2");
var door = document.getElementById("Enter");
var GameTitle = document.getElementById("GameTitle");
var Select = document.getElementById("Select");
var controls1 = document.getElementById("Controls1");
var controls2 = document.getElementById("Controls2");
var	keyCodes = { left: 37, leftA: 65, up: 38, upW: 87, right: 39, rightD: 68, down: 40, downS: 83, enter: 13 },
	keys = [];



PB1.addEventListener("click", P1Start);
PB2.addEventListener("click", P2Start);	

function P1Start(){
	PB2.classList.replace("PlayerBlock2", "Hide");
	false;
	Move1();
	door.style.display = "block";
	Select.style.display = "none";
	GameTitle.style.display = "block";
	controls1.style.display = "block";
};

function P2Start(){
	PB1.classList.replace("PlayerBlock1", "Hide");
	false;
	Move2();
	door.style.display = "block";
	Select.style.display = "none";
	GameTitle.style.display = "block";
	controls2.style.display = "block";
};

window.addEventListener("load", () => {
	PB1.style.position = "absolute";
	PB1.style.left = 0;
	PB1.style.top = 0; 
	PB2.style.position = "absolute";
	PB2.style.left = 0;
	PB2.style.top = 0; 
});

function Move1 (){
	
	window.addEventListener("keydown", function (e) {
	    keys[e.keyCode] = true;
	});
	
	window.addEventListener("keyup", function (e) {
	    keys[e.keyCode] = false;
	});
	
	setInterval(function () {
	    
	    var x = parseInt(PB1.style.left, 10),
	        y = parseInt(PB1.style.top, 10),
	       winWidMar = window.innerWidth - 200,
	       winHeiMar = window.innerHeight - 500;
	    
  		  if (keys[keyCodes.left] || keys[keyCodes.leftA]) {
	        x -= 1;
	    } else if (keys[keyCodes.right] || keys[keyCodes.rightD]) {
	        x += 1;
	    };
	
	    if (keys[keyCodes.up] || keys[keyCodes.upW ]) {
	        y -= 1;
	    } else if (keys[keyCodes.down] || keys[keyCodes.downS]) {
	        y += 1;
	    };
	    
	    PB1.style.left = x + "px";
	    PB1.style.top = y + "px";

	    if (x<0 || x>0) {
	    	controls1.style.display = "none";
	    }else if(y<0 || y>0){
	    	controls1.style.display = "none";
	    }

	    // go off screen

		if (x< -350){
		PB1.style.left = winWidMar +"px";
		} else if (x>winWidMar){
		PB1.style.left= -350 +"px";
		};

		if (y< -790){
		PB1.style.top= winHeiMar +"px";
		} else if (y> winHeiMar){
		PB1.style.top= -790 + "px";	
		};

		// Enter the door
		
		if (x>936 && x<1237 && y> -430 && y<275 && keys[keyCodes.enter]){
		window.location.href = "Arcade.html"};

		var player = "player1";
		localStorage.setItem("player", player);

	}, 1/30);
};


function Move2 (){

	
	window.addEventListener("keydown", function (e) {
	    keys[e.keyCode] = true;
	});
	
	window.addEventListener("keyup", function (e) {
	    keys[e.keyCode] = false;
	});
	
	setInterval(function () {
	    
	    var x = parseInt(PB2.style.left, 10),
	        y = parseInt(PB2.style.top, 10),
	       winWidMar = window.innerWidth - 490,
	       winHeiMar = window.innerHeight - 500;
	    
   		 if (keys[keyCodes.left] || keys[keyCodes.leftA]) {
	        x -= 1;
	    } else if (keys[keyCodes.right] || keys[keyCodes.rightD]) {
	        x += 1;
	    };
	
	    if (keys[keyCodes.up] || keys[keyCodes.upW ]) {
	        y -= 1;
	    } else if (keys[keyCodes.down] || keys[keyCodes.downS]) {
	        y += 1;
	    };
	    
	    PB2.style.left = x + "px";
	    PB2.style.top = y + "px";

	    if (x<0 || x>0) {
	    	controls2.style.display = "none";
	    }else if(y<0 || y>0){
	    	controls2.style.display = "none";
	    }

		if (x< -640){
		PB2.style.left = winWidMar +"px";
		} else if (x>winWidMar){
		PB2.style.left= -640 +"px";
		};

		if (y< -790){
		PB2.style.top= winHeiMar +"px";
		} else if (y> winHeiMar){
		PB2.style.top= -790 + "px";	
		};

		if (x>657 && x<1000 && y> -418 && y<267 && keys[keyCodes.enter]){
		window.location.href = "Arcade.html"};
	    
		var player = "player2";
		localStorage.setItem("player", player);

	}, 1/30);
};




