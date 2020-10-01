let sentence1 = 'Your health will one day disappear and you will die without meaning';
let words=[];
let wordList=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); 
  words = sentence1.split(' ');
  for (let i=0; i<words.length; i++) {
    wordList.push(new Floating(words[i]));
  }
  textSize(20);
  fill(255,255,255,255);
}

function draw() {
  background(0,0,0);
  //textSize(20);
  for (let i=0; i<words.length; i++) {
    wordList[i].move();
    wordList[i].display();
  }
}

class Floating {  
  constructor(wordIn){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-0.1,0.1);
    this.word = wordIn;
  }
  
  move() {
    if(this.x < 0 || this.x > width){
      this.xSpeed*=-1;}
    if(this.y < 0 || this.y > height){
      this.ySpeed*=-1;}
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
  
  display() {

      text(this.word, this.x + mouseX/30, this.y);
      
  }
}
