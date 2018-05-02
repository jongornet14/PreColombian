
// create a variable for A-Frame world
var world;

// Map Variables
var mapCanvas;
var imageIsON = false;

var mouseIsClicked = false;
var imageIsON = false;

// detects if camera is on or off (switch between tabs)
var scanning = false;
function preload() {

  backgroundImage = loadImage('images/map.png');

  img1 = loadImage('images/peru1.png');
  img2 = loadImage('images/Peru.png');
  img3 = loadImage('images/Colombia Q.png');
  img6 = loadImage('images/Inca.png');
  img9 = loadImage('images/Lam.png');
  img11 = loadImage('images/I,Bolivia.png');
  img12 = loadImage('images/Bolivia.png');
  img15 = loadImage('images/Argentina.png');
  img16 = loadImage('images/costa rica.png');
  img19 = loadImage('images/Colombia.png');
  img22 = loadImage('images/Colombia Q.png');

}

function setup() {
  world = new World("ARScene");

  mapObject = new MapObject(0.5, backgroundImage, backgroundImage.width, backgroundImage.height);
  mapObject.setupImageObjects();
}

function draw() {

  console.log("X: " + mouseX);
  console.log("Y: " + mouseY);

  world.clearDrawingCanvas();

  if (scanning == false) {
    // all the map & image stuff goes here
    background(0);
    imageMode(CENTER);
    mapObject.display();
  }

  else {

    // scan code goes here

  }

}

function mouseClicked() {

  if (mouseIsClicked) { mouseIsClicked = false; }
  else { mouseIsClicked = true; }

}

function showMap() {
  scanning = false;
  console.log(scanning);
}

function showScan() {
  scanning = true;
  console.log(scanning);
}
