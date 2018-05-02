// sketch.js

/*** GLOBAL VARIABLES ***/

// Map Variables
var mapCanvas;
/*var mouseIsClicked = false;*/
var imageIsON = false;

// detects if camera is on or off (switch between tabs)
var scanning = false;


// AR Variables
// create a variable for A-Frame world
var world;

// references to our markers (which are defined in the HTML document)
//var hiroMarker;


/****** FUNCTIONS ******/

function preload() {

  backgroundImage = loadImage('images/dummybackground.jpg');

  img1 = loadImage('images/americaspieces-01.jpg');
  img2 = loadImage('images/americaspieces-02.jpg');
  img6 = loadImage('images/americaspieces-06.jpg');
  img9 = loadImage('images/americaspieces-09.jpg');
  img11 = loadImage('images/americaspieces-11.jpg');
  img12 = loadImage('images/americaspieces-12.jpg');
  img15 = loadImage('images/americaspieces-15.jpg');
  img16 = loadImage('images/americaspieces-16.jpg');
  img19 = loadImage('images/americaspieces-19.jpg');
  img22 = loadImage('images/americaspieces-22.jpg');

}


function setup() {

  //make this a child of the map div?

  // Map
  mapCanvas = createCanvas(backgroundImage.width,backgroundImage.height);
  /*mapCanvas = createCanvas(mapWidth, mapHeight);*/

  //background(backgroundImage,0,0,backgroundImage.width,backgroundImage.height);

  mapObject = new MapObject(backgroundImage,backgroundImage.width,backgroundImage.height);
  mapObject.setupImageObjects();


  // AR
  world = new World("ARScene");
  /*
  // grab a reference to our marker in the HTML document
  hiroMarker = world.getMarker("hiro");
  */

}


function draw() {

  ellipse(mouseX, mouseY, 25, 25);

  if (scanning === false) {
  	mapOn();
  	//mapObject.display();
  	//console.log(imageIsON);
  }
  else {
  	scanOn();
  	/*world.clearDrawingCanvas();*/
  }

}

/*
function mouseClicked() {

  if (mouseIsClicked) {
  	mouseIsClicked = false;
  }
  else {
  	mouseIsClicked = true;
  }

}
*/



/* Button Functions */

function scanOn(){
	scanning = true;
	console.log(scanning);

	//mapCanvas.style.overflow ='hidden';
	//document.getElementsByTagName('CANVAS').style.overflow = 'hidden';
	//document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';

	//world.style.display = none;
	//document.getElementById('mapDiv').style.display = 'none';
}

function mapOn(){
	scanning = false;
	console.log(scanning);

	//mapCanvas.style.overflow = scroll');
	//document.getElementsByTagName('BODY')[0].style.overflow = 'scroll';

	//world.style.display = block';
	//document.getElementById('mapDiv').style.display = 'block';
}


// see the HTML document - this function is called when the user chooses to
//  close the window with the 'close window' button - it restarts tracking (scanning)
function p5_restartTracking() {
  scanning = true;
}


/****** OTHER CLASSES ******/
// located in separate files:
// - imageObject.js
// - mapObject.js
