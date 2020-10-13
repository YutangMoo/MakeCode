class Floating1 {  
  constructor(word1In){
    this.x = random(0,width);
    this.y = random(0,height);
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-0.1,0.1);
    this.word1 = word1In;
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
    textSize(38);
    textFont(MONO);
    fill(words1Color);
    let wiggle1 = 0;
    if (mouseIsPressed) {
      wiggle1 = random(-3, 3);
    }
    text(this.word1, this.x +- mouseX/15 + wiggle1, this.y +- mouseY/50 + wiggle1);
  }
}
