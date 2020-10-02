let sentence1 = 'Your health will one day disappear and you will die without meaning';
let sentence2 = 'There are many men and women who dream of making love to you but you will never get to know them';
let sentence3 = 'Oblivion is the only cure for agony';
let words1=[];
let words2=[];
let words3=[];
let wordList1=[];
let wordList2=[];
let wordList3=[];

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
  background(100,100,100,30);
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
}
