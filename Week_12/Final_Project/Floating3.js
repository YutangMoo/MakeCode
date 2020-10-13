class Floating3 {  
  constructor(word3In){
    this.x = random(0,width);
    this.y = random(0,height);
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-0.1,0.1);
    this.word3 = word3In;
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
    textSize(26);
    textFont(MONO);
    fill(words3Color);
    let wiggle3 = 0;
    if (mouseIsPressed) {
      wiggle3 = random(-3, 3);
    }
    text(this.word3, this.x +- mouseX/80 + wiggle3, this.y +- mouseY/240 + wiggle3);
  }
}
