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
    textSize(26);
    textFont(MONO);
    fill(r1, g1, b1, a1);
    text(this.word1, this.x +- mouseX/15, this.y +- mouseY/50);
  }
}
