function preload() {
  JOHN = loadFont('data/BIG_JOHN.otf');
  BEND = loadFont('data/Bend-One.otf');
}

function setup() {
  createCanvas(1024,1024);
  background (255);
  fill (0);
  textSize (32);
//  textFont (font);

}


function draw() {
  textSize (64);
  textFont (JOHN);
  text ('BIG BRAIN', 300,200);
  textFont (JOHN);
  textSize (32);
  text ('hello world', 300,300);
  textFont (BEND);
  textSize (16);
  text ('not really lol', 300,400);
}
