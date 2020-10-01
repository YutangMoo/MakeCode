// particle system from: p5js.org/examples/simulate-words.html
// modified by Yutang Mu S3730557 RMIT

// this class describes the properties of a single particle.
class Words {
  
  
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-0.1,0.1);
  }
  

// creation of a particle.
  createWords(counter) {
    var a = ['Your', 'health', 'will', 'one', 'day', 'disappear', 'and', 'you', 'will', 'die', 'without', 'meaning'];
    var b = ['There', 'are', 'many', 'men', 'and', 'women', 'who', 'dream', 'of', 'making', 'love', 'to', 'you', 'but', 'you', 'will', 'never', 'get', 'to', 'know', 'them'];
    noStroke();
    textSize (16);
// below lines modified by code master Finn
    for (var i = 0; i < a.length; i++) {
      fill('rgba(255,255,255,1)');
      text(a[counter], this.x + mouseX/30, this.y);
      fill('rgba(255,255,255,0.1)');
      text(b[counter], this.x + mouseX/70 + 50, this.y+50);
    }
  }
// above lines modified by code master Finn

// setting the particle in motion.
  moveWords() {
    if(this.x < 0 || this.x > width){
      this.xSpeed*=-1;}
    if(this.y < 0 || this.y > height){
      this.ySpeed*=-1;}
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
}


// an array to add multiple words
let words = [];


function setup() {
  createCanvas(windowWidth, windowHeight); //changed to fullscreen
  for(let i = 0;i<width/10;i++){
    words.push(new Words());
  }
}


function draw() {
  background('#0f0f0f');
  for(let i = 0;i<words.length;i++) {
    words[i].createWords(i);
    words[i].moveWords(i);
  }
}
