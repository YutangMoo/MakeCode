//by Yutang Mu
function setup() {
createCanvas (690,860);
strokeWeight(0);
background (255,50,80);
}

function draw() {
  //M part
  fill (255,mouseY/6,50);
  ellipse (57+96,46+96,192,192);
  ellipse (185+96,46+96,192,192);
  rect (57,142,64,254);
  rect (185,142,64,254);
  rect (313,142,64,254);
  //black part for M
  fill (255,50,80);
  ellipse (121+32,110+32,64,64);
  ellipse (249+32,110+32,64,64);
  rect (121,142,64,254);
  rect (249,142,64,245);
  
  //Y part
  //lower layer
  //white
  fill (255,mouseX/6,50);
  ellipse (441+96,362+96,192,192);
  //void
  fill (255,50,80);
  ellipse (505+32,426+32,64,64);
  rect (441,362,192,96);
  rect (441,458,96,96);
  //upper layer
  //white
  fill (255,mouseX/6,50);
  rect (441,110,64,190);
  rect (569,110,64,348);
  ellipse (441+96,204+96,192,192);
  rect (441,490,96,64);
  //void
  fill (255,50,80);
  rect (505,110,64,190);
  ellipse (505+32,265+32,64,64);
  
  //T
  fill (255,(mouseX+mouseY)/12,50);
  rect (185,460,64,254);
  rect (185,490,192,64);
  ellipse (185+96,614+96,192,192);
  fill (255,50,80);
  rect (249,614,128,100);
  ellipse (249+32,682+32,64,64);
}
