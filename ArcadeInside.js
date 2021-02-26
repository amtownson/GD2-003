var PB1IN = document.getElementById("PlayerBlockIN1");
var PB2IN = document.getElementById("PlayerBlockIN2");
var player = localStorage.getItem("player");
var arcadeBody = document.getElementById("arcadeBody");


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

	    
	       // moving
	    
   		 if (x> -57 && keys[keyCodes.left] && x>=WinHalfx || x> -57 && keys[keyCodes.leftA] && x>=WinHalfx) 
	        {arcadex +=1;
	    	x -=1;
	    }else if (x> -57 && keys[keyCodes.left] || x> -57 && keys[keyCodes.leftA])
	        {x -=1;};

	    if (x<4100 && keys[keyCodes.right] && x>=WinHalfx || x<4100 && keys[keyCodes.rightD] && x>=WinHalfx) 
	    	{arcadex -=1;
	    	x +=1;
	    }else if (x<4100 && keys[keyCodes.right]|| x<4100 && keys[keyCodes.rightD]) 
	        {x +=1;};
	

	    if (y> -125 && keys[keyCodes.up] || y> -125 && keys[keyCodes.upW])
	        {arcadey+=1;
	    	y -=1;}
	  
	    if (y<1100 && keys[keyCodes.down]|| y<1100 && keys[keyCodes.downS]) 
	        {arcadey-=1;
	        y +=1;}

	    	    // exit 

		if (x > -100 && x < 170 && y > -200 && y < 170 && keys[keyCodes.enter]){
		window.location.href = "index.html"};

		if (x > 3400 && x < 3802 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Bookshelf.html"};

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
	    
	       // moving
	    
   		 if (x> -57 && keys[keyCodes.left] && x>=WinHalfx || x> -57 && keys[keyCodes.leftA] && x>=WinHalfx) 
	        {arcadex +=1;
	    	x -=1;
	    }else if (x> -57 && keys[keyCodes.left] || x> -57 && keys[keyCodes.leftA])
	        {x -=1;};

	    if (x<4100 && keys[keyCodes.right] && x>=WinHalfx || x<4100 && keys[keyCodes.rightD] && x>=WinHalfx) 
	    	{arcadex -=1;
	    	x +=1;
	    }else if (x<4100 && keys[keyCodes.right]|| x<4100 && keys[keyCodes.rightD]) 
	        {x +=1;};
	

	    if (y> -125 && keys[keyCodes.up] || y> -125 && keys[keyCodes.upW])
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
		window.location.href = "index.html"};

		if (x > 3400 && x < 3802 && y > 400 && y < 900 && keys[keyCodes.enter]){
		window.location.href = "Bookshelf.html"
		// console.log("working");

	};


		}, 1/30);
};

