class Map {

  constructor(img,sizeX,sizeY) {

    this.xPos = 0;
    this.yPos = 0;

    this.image = img;
    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.imageObjectArray = [];

  }

  setupImageObjects() {

    this.imageObjectArray[0] = new ImageObject(img1,xLoc,yLoc,sizeX,sizeY,1);
    this.imageObjectArray[1] = new ImageObject(img2,xLoc,yLoc,sizeX,sizeY,2);
    this.imageObjectArray[2] = new ImageObject(img6,xLoc,yLoc,sizeX,sizeY,6);
    this.imageObjectArray[3] = new ImageObject(img9,xLoc,yLoc,sizeX,sizeY,9);
    this.imageObjectArray[4] = new ImageObject(img11,xLoc,yLoc,sizeX,sizeY,11);
    this.imageObjectArray[5] = new ImageObject(img12,xLoc,yLoc,sizeX,sizeY,12);
    this.imageObjectArray[6] = new ImageObject(img15,xLoc,yLoc,sizeX,sizeY,15);
    this.imageObjectArray[7] = new ImageObject(img16,xLoc,yLoc,sizeX,sizeY,16);
    this.imageObjectArray[8] = new ImageObject(img19,xLoc,yLoc,sizeX,sizeY,19);
    this.imageObjectArray[9] = new ImageObject(img22,xLoc,yLoc,sizeX,sizeY,22);

  }
}
