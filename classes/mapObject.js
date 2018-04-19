class MapObject {

  constructor(img,sizeX,sizeY) {

    this.xPos = 0;
    this.yPos = 0;

    this.image = img;
    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.imageObjectArray = [];

  }

  setupImageObjects() {

    this.imageObjectArray[0] = new ImageObject(img2,341,750,img2.width,img2.height,2);
    this.imageObjectArray[1] = new ImageObject(img6,337,999,img6.width,img6.height,6);
    this.imageObjectArray[2] = new ImageObject(img9,260,575,img9.width,img9.height,9);
    this.imageObjectArray[3] = new ImageObject(img12,482,714,img12.width,img12.height,12);
    this.imageObjectArray[4] = new ImageObject(img15,510,1216,img15.width,img15.height,15);
    this.imageObjectArray[5] = new ImageObject(img19,380,95,img19.width,img19.height,19);

  }

  display() {

    imageMode(CORNER);

    background(this.image,this.xPos,this.yPos,this.sizeX,this.sizeY);

    imageMode(CENTER);

    for(var i = 0; i < this.imageObjectArray.length; i++) {
      this.imageObjectArray[i].display();
    }
  }
}
