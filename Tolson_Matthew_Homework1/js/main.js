/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

if(Modernizr.canvas){

	var canvas1 = document.getElementById("Part1");
	var ctx1 = canvas1.getContext("2d");

	ctx1.strokeStyle = "black";
	ctx1.fillStyle = "blue";
	ctx1.fillRect(0,0,50,100);
	ctx1.strokeRect(0,0,50,100);
}else{

}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
if(Modernizr.canvas){

	var canvas2 = document.getElementById("Part2");
	var ctx2 = canvas2.getContext("2d");

	canvas2.width = 100;
	canvas2.height = 100;

	ctx2.fillStyle = "rgba(255,0,0,.5)";
	ctx2.strokeStyle = "black";

	ctx2.beginPath();
	ctx2.arc(50,50,20,0,(360/180)*Math.PI);
	ctx2.fill();
	ctx2.stroke();




}else{

}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

if(Modernizr.canvas){

	var canvas3 = document.getElementById("Part3");
	var ctx3 = canvas3.getContext("2d");

	canvas3.width = 200;
	canvas3.height = 175;

	ctx3.strokeStyle = "orange";
	ctx3.fillStyle = "green";

	ctx3.beginPath();
	ctx3.moveTo(100,100);
	ctx3.lineTo(125,25);
	ctx3.lineTo(175,100);
	ctx3.lineTo(75,50);
	ctx3.lineTo(175,50);
	ctx3.closePath()
	ctx3.fill();
	ctx3.stroke();


}else{


}






/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

if(Modernizr.canvas){

	var canvas4 = document.getElementById("Part4");
	var ctx4 = canvas4.getContext("2d");

	canvas4.width = 100;
	canvas4.height = 100;

	ctx4.strokeStyle = "purple";
	ctx4.lineWidth ="5";

	ctx4.beginPath();
	ctx4.moveTo(10,50);
	ctx4.bezierCurveTo(25,25,55,25,70,50);
	ctx4.stroke();

}else{

}




/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

if(Modernizr.canvas){

	var canvas5 = document.getElementById("Part5");
	var ctx5 = canvas5.getContext("2d");

	canvas5.width = 300;
	canvas5.height = 100;

	ctx5.font ="15pt Georgia";
	ctx5.fillText('Look I wrote with Canvas!!', 20, 20)


}else{


}



/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

if(Modernizr.canvas){
	var srcImg =document.getElementById("img6");

	srcImg.onload =function(){
		var canvas6 = document.getElementById("Part6");
		var ctx6 = canvas6.getContext("2d");
		
		var img6 =document.getElementById("img6");
		
		canvas6.width = img6.width;
		canvas6.height = img6.height;

		// ctx6.drawImage(img6, 0,0);
		// ctx6.drawImage(img6, 0,0, img6.width/2, img6.height/2);
		ctx6.drawImage(img6, 30, 30, 1100, 500, 0,0, 275, 125);
	};

}else{


}




/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

if(Modernizr.canvas){

	var canvas7 = document.getElementById("Part7");
	var ctx7 = canvas7.getContext("2d");

	canvas7.width = 800;
	canvas7.height = 200;

	ctx7.strokeStyle = "purple";
	ctx7.fillStyle = 'purple';
	ctx7.lineWidth ="5";

	ctx7.beginPath();
	ctx7.moveTo(10,50);
	ctx7.bezierCurveTo(50,15,110,15,140,50);
	ctx7.closePath();
	ctx7.stroke();
	ctx7.fill();

	ctx7.moveTo(75,50);
	ctx7.lineTo(75,	100);
	ctx7.closePath();
	ctx7.stroke();

	



}else{


}












