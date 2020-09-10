var song; //initiating our variable
var analyzer;
function preload() {
 song = loadSound ('data/Ship_Bell.mp3'); 
}

function setup() {
  //song = loadSound ('data/beat.mp3'); //associate our sound to the variable 'song'
  createCanvas (windowWidth, windowHeight); // create full window canvas
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fill(120);
  textSize(0);
  textAlign(CENTER,CENTER);
}


function draw() {
  background(0, 10);
  fill(120);
  var volume = analyzer.getLevel();
  volume*=5000;
  ellipse(width/2,height/2,volume*15,volume*15);
  fill(255);
  textSize(volume*2);
  text('DING!', width/2, height/2);
}

function mousePressed() {
  if (song.isPlaying()) {
    background(255);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  else {
    background(0);
    song.loop();
    song.play();
    
  }
}
