"use strict";

//Comment
/*
aljdlfj
Commentc
comment
*/

//radial-gradient(circle, hsl(" + hue + ", 100%, 100% ), hsl(" + (hue + 120) + ", 100%, 100% ), hsl(" + (hue + 260) + ", 100%, 100% ));

//document.getElementsByTagName("body")[0].style = "background-image: radial-gradient(circle, hsl(" + hue + ", 0%, 100% ), hsl(" + (hue + 120) + ", 0%, 100% ));";
				//hue++;
alert("Potential Strobe Warning");								
document.getElementsByTagName("body")[0].style = "background-color:white";
var clock = 0;
var stcX = 0;
var stcY = 0;
var magnitudeX = 1;
var magnitudeY = 1;

var starNum = 100;
var hueRange = 360;


var sat = 50;
var lit = 50;
	
var x = 0;
var y = 0;


		
		
		
var str = "The Final Project is Due Thursday December 8th at 8:00 am"
for (var i = 0; i < str.length; i++) {
  document.getElementsByClassName("textcontent")[0].innerHTML += "<div class='colorText'> " + str[i] + "</div>";
}
var hue = 0;
var hueShift = 0;
var lifetime = 1;










const stars = new Array();
for (var sI = 0; sI < starNum; sI++)
{
	stars[sI] = new Array();
	stars[sI].starX = Math.floor(Math.random() * screen.width);
	stars[sI].starY = -100;
	stars[sI].starMagnitude = Math.floor(Math.random() * 10) + 1;
	stars[sI].opacity = Math.floor(Math.random() * 100);
	stars[sI].counter = 0;
	document.getElementsByClassName("starsContainer")[0].innerHTML += "<div style='top=-10px; left=" + stars[sI].starX + "px; opacity:" + stars[sI].opacity + ";'id='star" + sI + "'>.</div>";
}

bgShift();

setInterval("bgShift()", 5);		//Runs the bgShift Function every 10 milliseconds

function starMove(star)
{
	star.starY += star.starMagnitude/10;
	if (star.opacity <= 0)
	{
		star.starX = Math.floor(Math.random() * screen.width);
		star.starY = -100;
		star.starMagnitude = Math.floor(Math.random() * 10) + 1;
		star.opacity = Math.floor(Math.random() * 100);
		star.counter = 0;
	}
	star.counter++;
	if (star.counter>=lifetime)
	{
		star.counter = 0;
		star.opacity--;
	}
}

function bgShift() {				//Creates the bgShift Function
	stars.forEach(starMove);
	console.log(stars);
	for (var sI = 0; sI < starNum; sI++)
	{
		document.getElementById("star" + sI).outerHTML = "<div style='top:" + stars[sI].starY +"px; left:" + stars[sI].starX + "px; opacity:" + stars[sI].opacity + ";'id='star" + sI + "'>.</div>";
	}
	var stops = document.getElementById("colorSlide").value;
	var magnitudeX = document.getElementById("xMag").value;
	var magnitudeY = document.getElementById("yMag").value;
	lifetime = document.getElementById("lifetime").value;
	hueRange = document.getElementById("hueRange").value;
	hueShift = document.getElementById("hueShift").value;
	//stops = 360 % hueRange + 2;
	if (stcX){
		x+=parseInt(magnitudeX);
		if (x >=screen.width)
		{
			stcX--;
		}
	}
	else {
		x-=parseInt(magnitudeX);
		if (x <=0)
		{
			stcX++;
		}
	}
	if (stcY){
		y+=parseInt(magnitudeY);
		if (y >=screen.height)
		{
			stcY--;
		}
	}
	else {
		y-=parseInt(magnitudeY);
		if (y <=0)
		{
			stcY++;
		}
	}
	//x %=100;
	//y %=100;
	clock = clock+3;
	//document.getElementById("clock").insertAdjacentHTML('afterend', '<p>HELLO</p>');
	//document.getElementById("clock").textContent = clock;
	
	var background = "background-image: radial-gradient(circle at " + x.toString() + "px " + y.toString() + "px";
	//var background = "background-image: radial-gradient(circle ";
	
	for (var z = 0; z <= stops; z++)
	{
		background += ",hsl(" + ((hue + ((360/stops) * (z+1))) % hueRange) + hueShift + ", " + sat + "%, " + lit + "% )"
	}
	
	document.getElementsByTagName("body")[0].style = background;
	hue++;
	hue %=360;
	
	/*if(stc)
	{
		hue--;
		document.getElementsByTagName("body")[0].style = "background-color: hsl(" + hue + " , 43%, 51%)";
	}
	else
	{	
		hue++;
		document.getElementsByTagName("body")[0].style = "background-color: hsl(" + hue + " , 43%, 51%)";
	}*/
	for (var i = 0; i < str.length; i++)
	{
		document.getElementsByClassName("colorText")[i].style = "color: hsl(" + ((360/str.length) * i + 1 + hue) + ", 100%, 50%);"
	}
			
}