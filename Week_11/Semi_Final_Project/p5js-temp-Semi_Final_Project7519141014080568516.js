//a remix originally from: https://p5js.org/examples/simulate-particles.html
//first working version fixed by Finn Arundel: https://github.com/FinnArundel/codewordsRMIT
//second version (current) almost burn down my computer, fixed by Karen Ann Donnachie: https://github.com/karenanndonnachie
//TODO: figure out how to reform the texts into sentences.

let sentence1 = 'Your health will one day disappear and you will die without meaning';
let sentence2 = 'There are many men and women who dream of making love to you but you will never get to know them';
let sentence3 = 'Oblivion is the only cure for agony';
let words1=[];
let words2=[];
let words3=[];
let wordList1=[];
let wordList2=[];
let wordList3=[];

let words1Color=[0, 0, 0, 60];
let words2Color=[0, 0, 0, 35];
let words3Color=[0, 0, 0, 20];

let bg=[220,220,220,80];

let text1Color=[0, 0, 0];
let text1= '';
let continuePrompt1= '';

let text2Color=[0, 0, 0];
let text2= '';
let continuePrompt2= '';


//BUTTON COLOUR
let buttonColor=[0,0,0];
let buttonTextColor=[255,255,255];

function preload() {
  MONO = loadFont('data/ArnoPro-Display.otf');
  MONOBOLD = loadFont('data/DTM-Mono-1.otf');
  WARNING = loadFont('data/DINPro-Medium.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  words1 = sentence1.split(' ');
  for (let i=0; i<words1.length; i++) {
    wordList1.push(new Floating1(words1[i]));
  }
  words2 = sentence2.split(' ');
  for (let i=0; i<words2.length; i++) {
    wordList2.push(new Floating2(words2[i]));
  }
  words3 = sentence3.split(' ');
  for (let i=0; i<words3.length; i++) {
    wordList3.push(new Floating3(words3[i]));
  }
}

function draw() {

  noStroke();
  
  background(bg);
  //textSize(20);
  for (let i=0; i<words1.length; i++) {
    wordList1[i].move();
    wordList1[i].display();
  }
  for (let i=0; i<words2.length; i++) {
    wordList2[i].move();
    wordList2[i].display();
  }
  for (let i=0; i<words3.length; i++) {
    wordList3[i].move();
    wordList3[i].display();
  }
  
  let shake = 0;
  if (mouseIsPressed) {
      shake = random(-10, 10);
  }
  
  //CONTINUE INTERACTION BUTTON
  fill(buttonColor);
  noStroke();
  rect(width/2-70, height/3*2.5-32, 140, 64, 10);
  
  //CONTINUE INTERACTION TEXT
  textSize(32);
  textAlign(CENTER);
  textFont(MONOBOLD);
  fill(buttonTextColor);
  text('OK', width/2, height/3*2.5+9); 
  
  //GROWING TEXTS
  textSize(32);
  textFont(MONOBOLD);
  fill(text1Color);
  text(text1, width/2 + shake, height/4 + shake); 
  fill(255, 0, 0);
  text(continuePrompt1, width/2 + shake, height/4+80 + shake);
  
  fill(text1Color);
  text(text2, width/2 + shake, height/4+140 + shake);
  fill(255, 0, 0);
  text(continuePrompt2, width/2 + shake, height/4+140+80 + shake);
  
  //WARNING
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(20, 20, 250, 80);
  textSize(16);
  fill(0);
  noStroke();
  textFont(WARNING);
  text('SEIZURE WARNING:\nFlashing Images.', 125+20, 55);
}


function mouseReleased() {
  text1Color=[0];
  buttonColor=[0];
  buttonTextColor=[255];
  bg=[220,220,220,100];
  words1Color=[255, 0, 0, 80];
  if (clicks>=14) {
    words2Color=[255, 0, 0, 80];
  }

}
