console.log("Reading");


var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var ArticleSections = document.getElementById("ArticleSections");
var intro = document.getElementById("intro");



window.addEventListener("wheel", flag);

function flag() {
fromTop = window.scrollY;

y1 = parseInt(box1.style.height, 10);
y2 = parseInt(box2.style.height, 10);
y3 = parseInt(box3.style.height, 10);
y4 = parseInt(box4.style.height, 10);
y5 = parseInt(box5.style.height, 10);
y6 = parseInt(box6.style.height, 10);

if( y1>=120 && y2>=100 && y3>=100 && y4>=100 && y5>=100 && y6>=100)
	{y1 = 120; y2=100; y3=100; y4=100; y5=100; y6=100;
	intro.style.display = 'block'
	}else{
		  y1 = 17 + fromTop/15;
		  y2 = 17 + fromTop/15;
		  y3 = 17 + fromTop/15;
		  y4 = 17 + fromTop/15;
		  y5 = 17 + fromTop/15;
		  y6 = 17 + fromTop/15;

	}

box1.style.height = y1 + 'vh';
box2.style.height = y2 + 'vh';
box3.style.height = y3 + 'vh';
box4.style.height = y4 + 'vh';
box5.style.height = y5 + 'vh';
box6.style.height = y6 + 'vh';

}