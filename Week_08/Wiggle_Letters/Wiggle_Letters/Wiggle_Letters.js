// Based on the wiggly letter sketch by KARENNNNNNNNN
var xPosition, yPosition, size, rand, letter, speed;
var letterCount=0;
//var longtext;
var sentence = ["All", "Day", "Breakfast!"];
var wigglyLetters = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background (255,150,0);
  textSize(32);
  fill(255);
  textFont("Arial");
  xPosition = 100;
  yPosition = 100;
}
function draw() {
  background(255,150,0);
 fill(255);
 for (var i=0; i<wigglyLetters.length; i++){
  wigglyLetters[i].wiggle();
  wigglyLetters[i].display();
 }
}
function mousePressed(){
  size = int(random(50,200));
  letter = sentence[letterCount];
  wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter));
  if (letterCount<sentence.length){
  letterCount++;
 } else {
 letterCount =0; 
 }
}
function keyTyped() {
  wigglyLetters.push (new Wiggle (xPosition, yPosition, 54, key));
  xPosition += 54;
}
class Wiggle {  
  constructor (x, y, size, letter) {
    this.x = x;
    this.y = y;
    this.textSize = size;
    this.letter = letter;
  }
  wiggle() {
    speed = map(mouseY, 0, windowHeight, 0,10);
    this.x += random (-speed, speed);
    this.y += random (-speed, speed);
  }
  display() {
    textSize(this.textSize);
    //Added a little bit of "interactive texture"
    text(this.letter, this.x + mouseX/20, this.y + mouseY/20);
  }
}
