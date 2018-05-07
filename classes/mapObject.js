// mapObject.js

class MapObject {

  constructor(scaling, img,sizeX,sizeY) {

    this.scaling = scaling;
    this.xPos = 0;
    this.yPos = 0;

    this.image = img;
    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.imageObjectArray = [];

  }

  setupImageObjects() {

    var xOffset = (img2.width/2)/4;
    var yOffset = (img2.height/2)/4;

    /*this.imageObjectArray[0] = new ImageObject(img2,348,720,img2.width/1.1,img2.height/1.1,2,"Peru",
      "This artifact was found in Moche, Peru. Settlers were those who lived  Pre-Columbian in America before the arrival of the Spaniards. Many of those communities were small cultural groups, but some were great empires, among them the Muiscas, the Moche, and the - Incas. The first inhabitants were mathematical experts, with extensive knowledge of astronomy and science.",
      "Precolombinos eran los que Los pobladores habitaban en América antes de la llegada de los españoles. Muchos de aquellos pueblos - eran pequeños grupos culturales, pero algu nos eran grandes imperios, como los muiscas, los moche, y los incas, entre otros. Los primeros habitantes eran expertos matemáticos y tenían amplios conocimientos de astronomía y ciencia.", -100, 100);
    this.imageObjectArray[1] = new ImageObject(img6,337,999,img6.width,img6.height,6,"Chile",
      "(Inca, Chile). Civilizations in South America invented very advanced cultural elements such as: calendars, anti-seismic construction systems, irrigation systems, writing systems, their own political and social systems, and an advanced technique in metallurgy, pottery and textile production.",
      "Las civilizaciones  suramericanas descubrieron e inventaron e lementos culturales muy avanzados como el calendario, sistemas - de construcción antisísmi cos, así como un dominio en el trabajo de la piedra, sistemas de riego, sistemas de escritura, sus propios sistemas políticos y sociales, una avanzada metalurgia, alfarería y producción textil.", -100, 100);
    this.imageObjectArray[2] = new ImageObject(img9,260,575,img9.width/1.2,img9.height/1.2,9,"Peru",
      "(Lambayeque, Peru). The artworks of different pre-Columbian cultures are characterized by great wealth and diversity. The pre-Columbian art is highlighted by the artwork in gold and ceramics of the indigenous cultures, which were considered the best in the continent.",
      "Las obras de las diferentes culturas precolombinas se caracterizan por una gran riqueza y diversidad. El arte precolombino es destacado por los trabajos en oro y cerámica de las culturas indígenas las cuales fueron consideradas las mejores del continente ", -100, 100);
    this.imageObjectArray[3] = new ImageObject(img12,487,714,img12.width/1.3,img12.height/1.3,12,"Bolivia",
    "(Tiwanaku, Bolivia). Among the indigenous, identity is subject to constant mutations; there is no essential identity. For indigenous societies, the world is a great process of metamorphosis in which the person changes by adopting different points of view.",
    "Entre los indígenas, la identidad es sometida a constantes mutaciones; no existe una identidad esencial. Para las sociedades indígenas el mundo es un gran proceso de metamorfosis en el cual la persona cambia al adoptar puntos de vista diferentes.", -100, 100);
    this.imageObjectArray[4] = new ImageObject(img15,510,1216,img15.width/1.2,img15.height/1.2,15,"Argentina","(Condorhuasi, Argentina). This artifact was created by a technique known as trimming.","Este artefacto fue creado por una técnica conocida como recorte.",
 -100, 100);

    this.imageObjectArray[5] = new ImageObject(img19,380,105,img19.width/1.5,img19.height/1.5,19,"Colombia","(Tairona, Colombia). South American indigenous peoples often have their bodies profusely decorated and tattooed. In some societies they paint their faces and bodies, and wear crowns, nose rings, earmuffs, pectorals and other metal ornaments. The decoration is a second skin through which the personality is defined and transformed.",
 "Los indígenas suramericanos llevan con frecuencia sus cuerpos profusamente decorados y tatuados. En algunas sociedades pintan sus caras y cuerpos, y usan coronas, narigueras, orejeras, pectorales y otros adornos de metal. La decoración es una seguda piel a través de la cual se define y transforma la personalidad." , -100, 100);

    this.imageObjectArray[6] = new ImageObject(img3,350,220,img2.width/1.5,img2.height/1.5,2,"Colombia","(Quimbaya, Colombia.) The masks that you will find in this room are conceived as elements that help transform the personality and assume a new temporality and reality. They are tools that interrupt everyday existence and penetrate the sacred world of the ancestors and the gods.", "las mascaras que encontraras en esta sala, son concebidos como elementos que ayudan transformar la personalidad y a asumir una nueva temporalidad y realidad. Es una herra mienta que interrumpe la existencia cotidiana y penetra en el mundo sagrado de los ante pasados y los dioses.", -100,100);*/

    this.imageObjectArray[0] = new ImageObject(img15,377,350,img15.width*0.1,img15.height*0.1,15,"Argentina","(Condorhuasi, Argentina). This artifact was created by a technique known as trimming.","Este artefacto fue creado por una tecnica conocida como recorte.",
 -100, 100);

    this.imageObjectArray[1] = new ImageObject(img9,328,248,img9.width*0.1,img9.height*0.1,9,"Peru",
     "(Lambayeque, Peru). The artworks of different pre-Columbian cultures are characterized by great wealth and diversity. The pre-Columbian art is highlighted by the artwork in gold and ceramics of the indigenous cultures, which were considered the best in the continent.",
     "Las obras de las diferentes culturas precolombinas se caracterizan por una gran riqueza y diversidad. El arte precolombino es destacado por los trabajos en oro y cerámica de las culturas indígenas las cuales fueron consideradas las mejores del continente ", -100, 100);
    this.imageObjectArray[2] = new ImageObject(img6,358,305,img6.width*0.1,img6.height*0.1,6,"Chile",
     "(Inca, Chile). Civilizations in South America invented very advanced cultural elements such as: calendars, anti-seismic construction systems, irrigation systems, writing systems, their own political and social systems, and an advanced technique in metallurgy, pottery and textile production.",
     "Las civilizaciones  suramericanas descubrieron e inventaron e lementos culturales muy avanzados como el calendario, sistemas - de construcción antisísmi cos, así como un dominio en el trabajo de la piedra, sistemas de riego, sistemas de escritura, sus propios sistemas políticos y sociales, una avanzada metalurgia, alfarería y producción textil.", -100, 100);
    this.imageObjectArray[3] = new ImageObject(img3,343,193,img2.width*0.1,img2.height*0.1,2,"Colombia","(Quimbaya, Colombia.) The masks that you will find in this room are conceived as elements that help transform the personality and assume a new temporality and reality. They are tools that interrupt everyday existence and penetrate the sacred world of the ancestors and the gods.", "las mascaras que encontraras en esta sala, son concebidos como elementos que ayudan transformar la personalidad y a asumir una nueva temporalidad y realidad. Es una herra mienta que interrumpe la existencia cotidiana y penetra en el mundo sagrado de los ante pasados y los dioses.", -100,100);
    
  }

  display() {

    imageMode(CENTER);
//    background(this.image, width/2, height/2, this.sizeX, this.sizeY);
    image(this.image, width/2, height/2, this.sizeX * this.scaling, this.sizeY * this.scaling);

    for(var i = 0; i < this.imageObjectArray.length; i++) {
      this.imageObjectArray[i].display();
    }

  }
}
