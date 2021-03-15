var PB1IN = document.getElementById("PlayerBlockIN1");
var PB2IN = document.getElementById("PlayerBlockIN2");
var player = localStorage.getItem("player");
var arcadeBody = document.getElementById("arcadeBody");
var exit1 = document.getElementById("exit1");
var exitSign = document.getElementById("exitSign");


exit1.addEventListener("click", exitClick);
exitSign.addEventListener("click", exitClick);

function exitClick(){
	window.location.href = "index.html"
}


window.addEventListener("load", () => {
	PB1IN.style.position = "absolute";
	PB1IN.style.left = 0;
	PB1IN.style.top = 0; 
	PB2IN.style.position = "absolute";
	PB2IN.style.left = 0;
	PB2IN.style.top = 0; 
	arcadeBody.style.position = "absolute";
	arcadeBody.style.left = 0;
	arcadeBody.style.top = 0;
	if(player == "player1"){
		MoveIN1();
		PB2IN.style.display = "none"
	}else if(player == "player2")
	{MoveIN2();
	PB1IN.style.display = "none";
	}
});


function MoveIN1 (){
	
	var	keyCodes = { left: 37, leftA: 65, up: 38, upW: 87, right: 39, rightD: 68, down: 40, downS: 83, enter: 13 },
			keys = [];

	window.addEventListener("keydown", function (e) {
	    keys[e.keyCode] = true;
});
	
	window.addEventListener("keyup", function (e) {
	    keys[e.keyCode] = false;
	});
	
	setInterval(function () {
	  
	    var x = parseInt(PB1IN.style.left, 10);
	    var y = parseInt(PB1IN.style.top, 10);
		var	arcadex = parseInt(arcadeBody.style.left, 10);
		var	arcadey = parseInt(arcadeBody.style.top, 10);
		var	winWidMar = window.innerWidth - 45;
		var	winHeiMar = window.innerHeight - 410;
		var	WinHalfx = window.innerWidth /2;
		var	WinHalfy = window.innerHeight /2;
		var urlArray = [
    	"https://hwajn.github.io/testing/",
    	"https://rhewryk.github.io/Project-2/",
   		"https://sissichen108.github.io/GD2-003/index.html",
   		"https://chael66.github.io/GD2-003/web/space1.html",
   		"https://lucy3751.github.io/GD2-003/ramp/assignment2before.html#rampBottomFloorPattern4",
   		"https://yuyifan325.github.io/GD2-003/"
		];


	    
	       // moving

	    
   		 if (x> -57 &&  keys[keyCodes.left] && x>=WinHalfx || x> -57 && keys[keyCodes.leftA] && x>=WinHalfx) 
	        {arcadex +=1;
	    	x -=1;
	    }else if (x> -57 && keys[keyCodes.left] || x> -57 && keys[keyCodes.leftA])
	        {x -=1;};

	    if (x<4600 && keys[keyCodes.right] && x>=WinHalfx || x<4600 && keys[keyCodes.rightD] && x>=WinHalfx) 
	    	{arcadex -=1;
	    	x +=1;
	    }else if (x<4600 && keys[keyCodes.right]|| x<4600 && keys[keyCodes.rightD]) 
	        {x +=1;};
	

	    if (y> -85 && keys[keyCodes.up] || y> -85 && keys[keyCodes.upW])
	        {arcadey+=1;
	    	y -=1;}
	  
	    if (y<1100 && keys[keyCodes.down]|| y<1100 && keys[keyCodes.downS]) 
	        {arcadey-=1;
	        y +=1;}

	    	    // exit 

		if (x > -100 && x < 170 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "index.html"};

			    // exit2 

		if (x > 4300 && x < 4600 && y > -200 && y < 170 && keys[keyCodes.enter]){
		randomUrl();
		keys[keyCodes.enter]=false;
		keys[keyCodes.left] = false;
		keys[keyCodes.leftA] = false;
		keys[keyCodes.up] = false;
		keys[keyCodes.upW] = false;
		keys[keyCodes.right] = false;
		keys[keyCodes.rightD] = false;
		keys[keyCodes.down] = false;
		keys[keyCodes.downS] = false;
		keys[keyCodes.enter]  = false;
		};

		// go to a random link in an array: https://stackoverflow.com/questions/40274250/random-html-link-selector-from-group-of-links

		function randomUrl() {
    	var randomNumber = Math.floor(Math.random() * urlArray.length);
   		var newUrl = urlArray[randomNumber];
    	window.open(newUrl);};

				//bookshelf

		if (x > 3400 && x < 3802 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.open("Bookshelf.html")
		keys[keyCodes.enter]=false;
		keys[keyCodes.left] = false;
		keys[keyCodes.leftA] = false;
		keys[keyCodes.up] = false;
		keys[keyCodes.upW] = false;
		keys[keyCodes.right] = false;
		keys[keyCodes.rightD] = false;
		keys[keyCodes.down] = false;
		keys[keyCodes.downS] = false;
		keys[keyCodes.enter]  = false;
		};

				//bar

		if (x > 225 && x < 900 && y > -200 && y < 280 && keys[keyCodes.enter]){
		window.open("https://quarantine-connect.glitch.me/");
		keys[keyCodes.enter]=false;
		keys[keyCodes.left] = false;
		keys[keyCodes.leftA] = false;
		keys[keyCodes.up] = false;
		keys[keyCodes.upW] = false;
		keys[keyCodes.right] = false;
		keys[keyCodes.rightD] = false;
		keys[keyCodes.down] = false;
		keys[keyCodes.downS] = false;
		keys[keyCodes.enter]  = false;
		};

				//Game1

		if (x > 1050 && x < 1350 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game2

		if (x > 1360 && x < 1650 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game3

		if (x > 1660 && x < 2000 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game4

		if (x > 2850 && x < 3150 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game5

		if (x > 3160 && x < 3450 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game6

		if (x > 3460 && x < 3800 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};


				//Game1 lower

		if (x > 1050 && x < 1350 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game2 lower

		if (x > 1360 && x < 1650 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game3 lower

		if (x > 1660 && x < 2000 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game4 lower

		if (x > 2850 && x < 3350 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};



	    PB1IN.style.left = x + "px";
	    PB1IN.style.top = y + "px";
	    arcadeBody.style.left = arcadex + "px";
	    arcadeBody.style.top = arcadey + "px";


		}, 1/30);
};
    

function MoveIN2 (){

 	var	keyCodes = { left: 37, leftA: 65, up: 38, upW: 87, right: 39, rightD: 68, down: 40, downS: 83, enter: 13 },
		keys = [];

	window.addEventListener("keydown", function (e) {
	    keys[e.keyCode] = true;

	});
	
	window.addEventListener("keyup", function (e) {
	    keys[e.keyCode] = false;
	});
	
	setInterval(function () {
	    
	    var x = parseInt(PB2IN.style.left, 10);
	    var    y = parseInt(PB2IN.style.top, 10);
		var	arcadex = parseInt(arcadeBody.style.left, 10);
		var	arcadey = parseInt(arcadeBody.style.top, 10);
		var	winWidMar = window.innerWidth - 45;
		var	winHeiMar = window.innerHeight - 410;
		var	WinHalfx = window.innerWidth /2;
		var	WinHalfy = window.innerHeight /2;
		var urlArray = [
    	"https://hwajn.github.io/testing/",
    	"https://rhewryk.github.io/Project-2/",
   		"https://sissichen108.github.io/GD2-003/index.html",
   		"https://chael66.github.io/GD2-003/web/space1.html",
   		"https://lucy3751.github.io/GD2-003/ramp/assignment2before.html#rampBottomFloorPattern4",
   		"https://yuyifan325.github.io/GD2-003/"
		];
	    
	       // moving
	    
   		 if (x> -57 && keys[keyCodes.left] && x>=WinHalfx || x> -57 && keys[keyCodes.leftA] && x>=WinHalfx) 
	        {arcadex +=1;
	    	x -=1;
	    }else if (x> -57 && keys[keyCodes.left] || x> -57 && keys[keyCodes.leftA])
	        {x -=1;};

	    if (x<4600 && keys[keyCodes.right] && x>=WinHalfx || x<4600 && keys[keyCodes.rightD] && x>=WinHalfx) 
	    	{arcadex -=1;
	    	x +=1;
	    }else if (x<4600 && keys[keyCodes.right]|| x<4600 && keys[keyCodes.rightD]) 
	        {x +=1;};
	

	    if (y> -85 && keys[keyCodes.up] || y> -85 && keys[keyCodes.upW])
	        {arcadey+=1;
	    	y -=1;}
	  
	    if (y<1100 && keys[keyCodes.down]|| y<1100 && keys[keyCodes.downS]) 
	        {arcadey-=1;
	        y +=1;}

	    
	    PB2IN.style.left = x + "px";
	    PB2IN.style.top = y + "px";
	    arcadeBody.style.left = arcadex + "px";
	    arcadeBody.style.top = arcadey + "px";

	    	    // exit 

		if (x > -100 && x < 170 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "index.html";};

			    // exit2 

		if (x > 4300 && x < 4600 && y > -200 && y < 170 && keys[keyCodes.enter]){
		randomUrl();
		keys[keyCodes.enter]=false;
		keys[keyCodes.left] = false;
		keys[keyCodes.leftA] = false;
		keys[keyCodes.up] = false;
		keys[keyCodes.upW] = false;
		keys[keyCodes.right] = false;
		keys[keyCodes.rightD] = false;
		keys[keyCodes.down] = false;
		keys[keyCodes.downS] = false;
		keys[keyCodes.enter]  = false;
		};

		// go to a random link in an array: https://stackoverflow.com/questions/40274250/random-html-link-selector-from-group-of-links

		function randomUrl() {
    	var randomNumber = Math.floor(Math.random() * urlArray.length);
   		var newUrl = urlArray[randomNumber];
    	window.open(newUrl);};

				//bookshelf

		if (x > 3400 && x < 3802 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.open("Bookshelf.html");
		keys[keyCodes.enter]=false;
		keys[keyCodes.left] = false;
		keys[keyCodes.leftA] = false;
		keys[keyCodes.up] = false;
		keys[keyCodes.upW] = false;
		keys[keyCodes.right] = false;
		keys[keyCodes.rightD] = false;
		keys[keyCodes.down] = false;
		keys[keyCodes.downS] = false;
		keys[keyCodes.enter]  = false;
		};

				//bar

		if (x > 225 && x < 900 && y > -200 && y < 280 && keys[keyCodes.enter]){
		window.open("https://quarantine-connect.glitch.me/");
		keys[keyCodes.enter]=false;
		keys[keyCodes.left] = false;
		keys[keyCodes.leftA] = false;
		keys[keyCodes.up] = false;
		keys[keyCodes.upW] = false;
		keys[keyCodes.right] = false;
		keys[keyCodes.rightD] = false;
		keys[keyCodes.down] = false;
		keys[keyCodes.downS] = false;
		keys[keyCodes.enter]  = false;
		};

				//Game1

		if (x > 1050 && x < 1350 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game2

		if (x > 1360 && x < 1650 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game3

		if (x > 1660 && x < 2000 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game4

		if (x > 2850 && x < 3150 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game5

		if (x > 3160 && x < 3450 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game6

		if (x > 3460 && x < 3800 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};


				//Game1 lower

		if (x > 1050 && x < 1350 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game2 lower

		if (x > 1360 && x < 1650 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game3 lower

		if (x > 1660 && x < 2000 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};

				//Game4 lower

		if (x > 2850 && x < 3350 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Game/startGame.html"};





		}, 1/30);
};

