var sentence1 = ['Your', 'health', 'will', 'one', 'day', 
'disappear', 'and', 'you', 'will', 'die', 'without', 'meaning'];

class Floating {
  
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-0.1,0.1);
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
      fill('rgba(255,255,255,1)');
      for (let i=0; i<sentence1.length; i++) {
        text(sentence1[i], this.x + mouseX/30, this.y);
      }
  }
}

let words = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<sentence1.length; i++) {
    words.push(new Floating());
  }
}

function draw() {
  background(0); 
  textSize(20);
  for (let i=0; i<sentence1.length; i++) {
    words[i].move();
    words[i].display();
  }
}
