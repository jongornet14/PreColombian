class ImageObject {

  constructor(img,xLoc,yLoc,sizeX,sizeY,objectCode) {

    this.image = img;

    this.xPos = xLoc;
    this.yPos = yLoc;

    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.objectCode = objectCode;
    
    this.show = false;

  }

  changeShow() {

    if(this.show) { this.show = false; }
    else { this.show = true; }

  }

  display() {

    if(this.show) {

      imageMode(CENTER);

      if(dist(this.xPos,mouseX,this.yPos,mouseY) < 30) {
        image(this.image,this.xPos,this.yPos,this.sizeX * 1.5,this.sizeY * 1.5);
      }
      else {
        image(this.image,this.xPos,this.yPos,this.sizeX,this.sizeY);
      }

    }

  }

}
