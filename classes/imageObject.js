

class ImageObject {

  constructor(img,xLoc,yLoc,sizeX,sizeY,objectCode, name, description, sd, xoff, yoff) {

    this.image = img;

    this.xPos = xLoc;
    this.yPos = yLoc;
    this.xoff=xoff;
    this.yoff=yoff;

    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.objectCode = objectCode;

    this.show = true;
    this.activate = false;
    this.name=name;
    this.description=description;
    this.spanish=sd;
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
        text(this.name, this.xPos, this.yPos + 70);

          if (mouseIsClicked){
            // fill(100,100,100);
            fill(161, 105, 199);
            rect(this.xPos,this.yPos,300,100);
            fill(1, 8, 2);
            textSize(12);
            var e=this.description;
            var s=this.spanish;
            text(e,this.xPos+20,this.yPos+20,250,300);
            //image(this.image,this.xPos+350,this.yPos+150,150,250);
            // text(s, this.xPos+453, this.yPos+20, 250, 300);
            //text(s,this.xPos+435,this.yPos+20,250,300);
            text(s,this.xPos+20,this.yPos+60,250,300);
          }


      }

      else if(dist(this.xPos,this.yPos,mouseX,mouseY) > 50 && this.activate) {
        mouseIsClicked = false;
        imageIsON = false;
        this.activate = false;
      }

      else {
        if(imageIsON == false) { image(this.image,this.xPos,this.yPos,this.sizeX,this.sizeY); }
      }
    }
  }
}
