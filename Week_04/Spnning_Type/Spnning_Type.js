function preload() {
  JOHN = loadFont('data/BIG_JOHN.otf');
  BEND = loadFont('data/Bend-One.otf');
}
var spin=0;

function setup() {
  createCanvas(1000,1000);
  background (255);
  fill (0);
  angleMode(DEGREES);
  textSize (32);
  textAlign(CENTER);
//  textFont (font);
  frameRate(25);
}


function draw() {
  fill(0);
  translate(500,500);
  rotate(spin);
  textFont (JOHN);
  textSize (128);
  text ('LOOP', 0,0);
  spin=spin+1;
  
  
  noStroke();
  fill(255,50);
  rect (100,100,500,500);
  
  rotate(45);
  noStroke();
  fill(255,75);
  translate(0,0);
  rect(0,0,600,600);
}
