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
let r1=255;
let g1=255;
let b1=100;
let a1=80;

let bg=(100,100,100,30);

let continuePrompt= 'CLICK TO CONTINUE';

let text1= '';
let ok1= '';

function preload() {
  MONO = loadFont('data/NotoMono_Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,180,255); 
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
  textSize(32);
  textFont(MONO);
  fill(255, 255, 255);
  text(continuePrompt, 20, 50); 
  
  textSize(26);
  textFont(MONO);
  fill(255, 255, 100);
  text(text1, 20, 50); 

  fill(255, 0, 0);
  text(ok1, 20, 100);
}

function mousePressed() {
  r1=0;
  b1=0;
  g1=0;
  a1=0;
  bg=(10);
  continuePrompt= '';
  text1 = 'Your health will one day disappear and you will die without meaning.';
  ok1 = '[Click to] OK';
}
