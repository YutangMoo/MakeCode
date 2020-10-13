class Floating2 {  
  constructor(word2In){
    this.x = random(0,width);
    this.y = random(0,height);
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-0.1,0.1);
    this.word2 = word2In;
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
    textSize(30);
    textFont(MONO);
    fill(words2Color);
    let wiggle2 = 0;
    if (mouseIsPressed) {
      wiggle2 = random(-3, 3);
    }
    text(this.word2, this.x +- mouseX/40 + wiggle2, this.y +- mouseY/130 + wiggle2);
  }
}
