//variables

var map;
var mouseIsClicked = false;
var imageIsON = false;

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
