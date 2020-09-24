// particle system from: p5js.org/examples/simulate-particles.html
// modified by Yutang Mu S3730557 RMIT

// this class describes the properties of a single particle.
class Particle {
  
  
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-1,1);
    this.ySpeed = random(-0.2,0.2);
  }
  

// creation of a particle.
  createParticle(counter) {
    var a = ['Your', 'health', 'will', 'one', 'day', 'disappear', 'and', 'you', 'will', 'die', 'without', 'meaning'];
    noStroke();
    fill('rgba(0,0,0)');
    textSize (16);
// below lines modified by code master Finn
    for (var i = 0; i < a.length; i++) {
      text(a[counter], this.x, this.y);
    }
  }
// above lines modified by code master Finn

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width){
      this.xSpeed*=-1;}
    if(this.y < 0 || this.y > height){
      this.ySpeed*=-1;}
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
}


// an array to add multiple particles
let particles = [];


function setup() {
  createCanvas(720, 400);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}


function draw() {
  background('#0f0f0f');
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle(i);
    particles[i].moveParticle(i);
  }
}
