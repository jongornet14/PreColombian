
// create a variable for A-Frame world
var world;

// Map Variables
var mapCanvas;
var imageIsON = false;

var mouseIsClicked = false;
var imageIsON = false;

// detects if camera is on or off (switch between tabs)
var scanning = false;

var markerHiro;

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

  markerHiro = world.getMarker('hiro');
  markerKanji = world.getMarker('kanji');
  markerPika = world.getMarker('pika');
  markerZb = world.getMarker('zb');

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
    if (markerHiro.isVisible() == true) {
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text("Hiro is visible", width/2, height/2);
      mapObject.imageObjectArray[0].reveal()
    }
    if (markerKanji.isVisible() == true) {
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text("Kanji is visible", width/2, height/2);
      mapObject.imageObjectArray[1].reveal()
    }
    if (markerPika.isVisible() == true) {
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text("Pika is visible", width/2, height/2);
      mapObject.imageObjectArray[2].reveal()
    }
    if (markerZb.isVisible() == true) {
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text("Zb is visible", width/2, height/2);
      mapObject.imageObjectArray[3].reveal()
    }

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
