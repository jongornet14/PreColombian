class ImageObject {

  constructor(img,xLoc,yLoc,sizeX,sizeY,objectCode) {

    this.image = img;

    this.xPos = xLoc;
    this.yPos = yLoc;

    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.objectCode = objectCode;

    this.show = true;
    this.activate = false;
  }

  changeShow() {

    if(this.show) { this.show = false; }
    else { this.show = true; }

  }

  display() {

    if(this.show) {

      imageMode(CENTER);

      if(dist(this.xPos,this.yPos,mouseX,mouseY) < 50) {
        imageIsON = true;
        this.activate = true;
        background(255,255,255,200);
        image(this.image,this.xPos,this.yPos,this.sizeX * 1.5,this.sizeY * 1.5);

        textSize(30);
        fill(0);
        textAlign(CENTER);
        text('Something pretty cool about the art', this.xPos, this.yPos + 200);

      }
      else if(dist(this.xPos,this.yPos,mouseX,mouseY) > 50 && this.activate) {
        imageIsON = false
        this.activate = false;

      }
      else {
        if(imageIsON == false) { image(this.image,this.xPos,this.yPos,this.sizeX,this.sizeY); }
      }
    }
  }
}
