

var back;
var mouseIsClicked = false;
var imageIsON = false;

function preload() {

  backgroundImage = loadImage('images/dummybackground.jpg');

  img1 = loadImage('images2/peru1.png');
  img2 = loadImage('images2/Peru.png');
  img3 = loadImage('images2/Colombia Q.png');
  img6 = loadImage('images2/Inca.png');
  img9 = loadImage('images2/Lam.png');
  img11 = loadImage('images2/I,Bolivia.png');
  img12 = loadImage('images2/Bolivia.png');
  img15 = loadImage('images2/Argentina.png');
  img16 = loadImage('images2/costa rica.png');
  img19 = loadImage('images2/Colombia.png');
  img22 = loadImage('images2/Colombia Q.png');
  back  = loadImage("h.jpg");

}

function setup() {

  //create Canvas
  createCanvas(backgroundImage.width,backgroundImage.height);

  background(backgroundImage,0,0,backgroundImage.width,backgroundImage.height);

  mapObject = new MapObject(backgroundImage,backgroundImage.width,backgroundImage.height);
  mapObject.setupImageObjects();

}

function draw() {

  mapObject.display();

  console.log(imageIsON);

}

function mouseClicked() {

  if (mouseIsClicked) { mouseIsClicked = false; }
  else { mouseIsClicked = true; }

}
