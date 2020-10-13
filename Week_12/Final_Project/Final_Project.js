//a remix originally from: https://p5js.org/examples/simulate-particles.html
//first working version fixed by Finn Arundel: https://github.com/FinnArundel/codewordsRMIT
//second version (current) almost burn down my computer, fixed by Karen Ann Donnachie: https://github.com/karenanndonnachie
//TODO: figure out how to reform the texts into sentences.
let beep;
let bgNoise;
let rad;
let hit;
let flatline;


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

let okPrompt= 'OK';

let text1Color=[0, 0, 0];
let text1= '';
let continuePrompt1= '';

let text2Color=[0, 0, 0];
let text2= '';
let continuePrompt2= '';

let text3Color=[0, 0, 0];
let text3= '';
let continuePrompt3= '';

let hearts='♥♥♥';
let heartColor=[255,0,0];


//BUTTON COLOUR
let buttonColor=[0,0,0];
let buttonTextColor=[255,255,255];
let buttonBgColor=[255,0,0,80];

//TEXT TO POINTS
let points;
let bounds;

function preload() {
  soundFormats('mp3');
  beep = loadSound('data/Beep.mp3');
  bgNoise = loadSound('data/Static.mp3');
  rad = loadSound('data/Rad.mp3');
  hit = loadSound('data/Hit.mp3');
  flatline = loadSound('data/Flatline.mp3');
  
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
  bgNoise.play();
  bgNoise.loop();
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
  
  let blur = random(-20,20);
  
  let mild = random(-2,2);
  
  let heartShake=0;
  
  let buttonShake = 0;
  if (clicks==13 || clicks==35 || clicks==43 || mouseIsPressed) {
    buttonShake=random(-2,2);
    heartShake=random(-10,10);
    heartColor=[255,255,255];
  } else {
    heartColor=[255,0,0];
    buttonShake=0;
  }
  
  
  //HEARTS
  fill(heartColor);
  textSize(64);
  textFont(MONOBOLD);
  textAlign(CENTER);
  text (hearts, width/2 + heartShake, height/4 - 80 + heartShake);
  
  
  //CONTINUE INTERACTION BUTTON
  fill(buttonBgColor);
  rect(width/2-70 + random(-10,10), height/3*2.5-24 + random(-10,10), 140, 64, 10);
  fill(buttonColor);
  noStroke();
  rect(width/2-70 + buttonShake, height/3*2.5-24 + buttonShake, 140, 64, 10);
  
  
  //CONTINUE INTERACTION TEXT
  textSize(32);
  textAlign(CENTER);
  textFont(MONOBOLD);
  fill(buttonTextColor);
  text(okPrompt, width/2 + buttonShake, height/3*2.5+18 + buttonShake); 
  
  //GROWING TEXTS
  textSize(32);
  textFont(MONO);
  fill(255,0,0,80);
  text(text1, width/2 + blur, height/4 + blur); 
  fill(text1Color);
  textFont(MONOBOLD);
  text(text1, width/2 + shake, height/4 + shake); 
  fill(255, 0, 0);
  text(continuePrompt1, width/2 + mild, height/4+80 + mild);
  
  textFont(MONO);
  fill(255,0,0,80);
  text(text2, width/2 + blur, height/4+140 + blur);
  textFont(MONOBOLD);
  fill(text1Color);
  text(text2, width/2 + shake, height/4+140 + shake);
  fill(255, 0, 0);
  text(continuePrompt2, width/2 + mild, height/4+140+80 + mild);
  
  textFont(MONO);
  fill(255,0,0,80);
  text(text3, width/2 + blur, height/4+280 + blur);
  textFont(MONOBOLD);
  fill(text1Color);
  text(text3, width/2 + shake, height/4+280 + shake);
  fill(255, 0, 0);
  text(continuePrompt3, width/2 + mild, height/4+280+80 + mild);
  
  //WARNING
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(20, 20, 250, 140);
  textSize(16);
  fill(0);
  noStroke();
  textFont(WARNING);
  text('SEIZURE WARNING:\nFlashing Images.\n\nTechnological determinism\nwill cause you great pain.', 125+20, 55);
}


function mouseReleased() {
  if (clicks==13 || clicks==35 || clicks==43) {
    rad.play();
  }
  
  if (clicks==14 || clicks==36 || clicks==44) {
    hit.play();
  }
  
  text1Color=[0];
  if (clicks==13 || clicks==35 || clicks==43) {
    buttonColor=[255,0,0];
  } else {
    buttonColor=[0];
  }
  buttonTextColor=[255];
  bg=[220,220,220,100];
  words1Color=[255, 0, 0, 80];
  if (clicks>=14) {
    words2Color=[255, 0, 0, 80];
  }
  if (clicks>35) {
    words3Color=[255,0,0,80];
  }
  if (clicks>=44) {
    bg=[0];
    bgNoise.stop();
    okPrompt= '';
    flatline.play();
    buttonBgColor=[0];
  }
}
