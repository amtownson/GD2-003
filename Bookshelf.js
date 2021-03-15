console.log("Reading");


var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var title = document.getElementById("title");
var title2 = document.getElementById("title2");
var ArticleSections = document.getElementById("ArticleSections");
var intro = document.getElementById("intro");
var ricki = document.getElementById("ricki");



// RED INTERACTION

box1.addEventListener("mouseover", mouseOverRed);

 function mouseOverRed(){
	box1.style.animation = "grow " + 3 +"s " +"infinite";
	box1.style.animationDirection = "alternate";

};

box1.addEventListener("mouseout", mouseOutRed);

function mouseOutRed() {
	box1.style.animation = "";
};

box1.addEventListener("click", red);

function red(){
	if(intro.style.display === "none"){
	box1.style.animation = "";
	box1.removeEventListener("mouseover", mouseOverRed);
	box1.removeEventListener("mouseout", mouseOverRed);
	box1.style.height = 100 + "vh";	
	intro.style.display = "block";
	title.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "none";
	box5.style.display = "none";
	box6.style.display = "none";
}else {
	box1.addEventListener("mouseover", mouseOverRed);
	box1.addEventListener("mouseout", mouseOutRed);
	box1.style.height = 16.66 + "vh";	
	intro.style.display = "none";
	title.style.display = "block";
	box2.style.display = "block";
	box3.style.display = "block";
	box4.style.display = "block";
	box5.style.display = "block";
	box6.style.display = "block";
}
}

// ORANGE INTERACTION

box2.addEventListener("mouseover", mouseOverOrange);

 function mouseOverOrange(){
	box2.style.animation = "grow " + 3 +"s " +"infinite";
	box2.style.animationDirection = "alternate";
};

box2.addEventListener("mouseout", mouseOutOrange);

function mouseOutOrange() {
	box2.style.animation = "";
};

box2.addEventListener("click", orange);

function orange(){
	if(ricki.style.display === "none"){
	box2.style.animation = "";
	box2.removeEventListener("mouseover", mouseOverOrange);
	box2.removeEventListener("mouseout", mouseOverOrange);
	box2.style.height = 100 + "vh";	
	ricki.style.display = "block";
	title2.style.display = "none";
	box1.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "none";
	box5.style.display = "none";
	box6.style.display = "none";
}else {
	box2.addEventListener("mouseover", mouseOverOrange);
	box2.addEventListener("mouseout", mouseOutOrange);
	box2.style.height = 16.66 + "vh";	
	ricki.style.display = "none";
	title2.style.display = "block";
	box1.style.display = "block";
	box3.style.display = "block";
	box4.style.display = "block";
	box5.style.display = "block";
	box6.style.display = "block";
}
}

// YELLOW INTERACTION


box3.addEventListener("mouseover", mouseOverYellow);

 function mouseOverYellow(){
	box3.style.animation = "grow " + 3 +"s " +"infinite";
	box3.style.animationDirection = "alternate";
};

box3.addEventListener("mouseout", mouseOutYellow);

function mouseOutYellow() {
	box3.style.animation = "";
};

box3.addEventListener("click", yellow);

function yellow(){
	if(veronica.style.display === "none"){
	box3.style.animation = "";
	box3.removeEventListener("mouseover", mouseOverYellow);
	box3.removeEventListener("mouseout", mouseOverYellow);
	box3.style.height = 100 + "vh";	
	veronica.style.display = "block";
	title3.style.display = "none";
	box1.style.display = "none";
	box2.style.display = "none";
	box4.style.display = "none";
	box5.style.display = "none";
	box6.style.display = "none";
}else {
	box3.addEventListener("mouseover", mouseOverYellow);
	box3.addEventListener("mouseout", mouseOutYellow);
	box3.style.height = 16.66 + "vh";	
	veronica.style.display = "none";
	title3.style.display = "block";
	box1.style.display = "block";
	box2.style.display = "block";
	box4.style.display = "block";
	box5.style.display = "block";
	box6.style.display = "block";
}
}

// GREEN INTERACTION


box4.addEventListener("mouseover", mouseOverGreen);

 function mouseOverGreen(){
	box4.style.animation = "grow " + 3 +"s " +"infinite";
	box4.style.animationDirection = "alternate";
};

box4.addEventListener("mouseout", mouseOutGreen);

function mouseOutGreen() {
	box4.style.animation = "";
};

box4.addEventListener("click", green);

function green(){
	if(patrick.style.display === "none"){
	box4.style.animation = "";
	box4.removeEventListener("mouseover", mouseOverGreen);
	box4.removeEventListener("mouseout", mouseOverGreen);
	box4.style.height = 100 + "vh";	
	patrick.style.display = "block";
	title4.style.display = "none";
	box1.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "none";
	box5.style.display = "none";
	box6.style.display = "none";
}else {
	box4.addEventListener("mouseover", mouseOverGreen);
	box4.addEventListener("mouseout", mouseOutGreen);
	box4.style.height = 16.66 + "vh";	
	patrick.style.display = "none";
	title4.style.display = "block";
	box1.style.display = "block";
	box2.style.display = "block";
	box3.style.display = "block";
	box5.style.display = "block";
	box6.style.display = "block";
}
}

// BLUE INTERACTION


box5.addEventListener("mouseover", mouseOverBlue);

 function mouseOverBlue(){
	box5.style.animation = "grow " + 3 +"s " +"infinite";
	box5.style.animationDirection = "alternate";
};

box5.addEventListener("mouseout", mouseOutBlue);

function mouseOutBlue() {
	box5.style.animation = "";
};

box5.addEventListener("click", blue);

function blue(){
	if(florent.style.display === "none"){
	box5.style.animation = "";
	box5.removeEventListener("mouseover", mouseOverBlue);
	box5.removeEventListener("mouseout", mouseOverBlue);
	box5.style.height = 100 + "vh";	
	florent.style.display = "block";
	title5.style.display = "none";
	box1.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "none";
	box6.style.display = "none";
}else {
	box5.addEventListener("mouseover", mouseOverBlue);
	box5.addEventListener("mouseout", mouseOutBlue);
	box5.style.height = 16.66 + "vh";	
	florent.style.display = "none";
	title5.style.display = "block";
	box1.style.display = "block";
	box2.style.display = "block";
	box3.style.display = "block";
	box4.style.display = "block";
	box6.style.display = "block";
}
}


box6.addEventListener("mouseover", mouseOverViolet);

 function mouseOverViolet(){
	box6.style.animation = "grow " + 3 +"s " +"infinite";
	box6.style.animationDirection = "alternate";
};

box6.addEventListener("mouseout", mouseOutViolet);

function mouseOutViolet() {
	box6.style.animation = "";
};

box6.addEventListener("click", violet);

function violet(){
	if(chloe.style.display === "none"){
	box6.style.animation = "";
	box6.removeEventListener("mouseover", mouseOverViolet);
	box6.removeEventListener("mouseout", mouseOverViolet);
	box6.style.height = 100 + "vh";	
	chloe.style.display = "block";
	title6.style.display = "none";
	box1.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "none";
	box5.style.display = "none";
}else {
	box6.addEventListener("mouseover", mouseOverViolet);
	box6.addEventListener("mouseout", mouseOutViolet);
	box6.style.height = 16.7 + "vh";	
	chloe.style.display = "none";
	title6.style.display = "block";
	box1.style.display = "block";
	box2.style.display = "block";
	box3.style.display = "block";
	box4.style.display = "block";
	box5.style.display = "block";
}
}



// COULDN'T FIGURE IT OUT :(

// window.addEventListener("wheel", flag);

// function flag() {
// fromTop = window.scrollY;

// y1 = parseInt(box1.style.height, 10);
// y2 = parseInt(box2.style.height, 10);
// y3 = parseInt(box3.style.height, 10);
// y4 = parseInt(box4.style.height, 10);
// y5 = parseInt(box5.style.height, 10);
// y6 = parseInt(box6.style.height, 10);

// if( y1>=120 && y2>=100 && y3>=100 && y4>=100 && y5>=100 && y6>=100)
// 	{y1 = 120; y2=100; y3=100; y4=100; y5=100; y6=100;
// 	intro.style.display = 'block'
// 	}else{
// 		  y1 = 17 + fromTop/15;
// 		  y2 = 17 + fromTop/15;
// 		  y3 = 17 + fromTop/15;
// 		  y4 = 17 + fromTop/15;
// 		  y5 = 17 + fromTop/15;
// 		  y6 = 17 + fromTop/15;

// 	}

// box1.style.height = y1 + 'vh';
// box2.style.height = y2 + 'vh';
// box3.style.height = y3 + 'vh';
// box4.style.height = y4 + 'vh';
// box5.style.height = y5 + 'vh';
// box6.style.height = y6 + 'vh';

// }