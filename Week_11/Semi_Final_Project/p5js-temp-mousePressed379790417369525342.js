let clicks = 0;

function mousePressed() {
  clicks ++;
  buttonColor=[255];
  buttonTextColor=[0];
  bg=[255,0,0];
  wordList1.splice(0,1);
  words1.splice(0,1);
  
  if (words1.length<=11) {
    words1Color = [255,255,255,150];
    text1Color = [255,255,255,255];
  }
  if (words1.length==11) {
    text1 = 'Your';
  }
  if (words1.length==10) {
    text1= 'Your health';
  }
  if (words1.length==9) {
    text1= 'Your health will';
  }
  if (words1.length==8) {
    text1= 'Your health will one';
  }
  if (words1.length==7) {
    text1= 'Your health will one day';
  }
  if (words1.length==6) {
    text1= 'Your health will one day disappear';
  }
  if (words1.length==5) {
    text1= 'Your health will one day disappear \nand';
  }
  if (words1.length==4) {
    text1= 'Your health will one day disappear \nand you';
  }
  if (words1.length==3) {
    text1= 'Your health will one day disappear \nand you will';
  }
  if (words1.length==2) {
    text1= 'Your health will one day disappear \nand you will die';
  }
  if (words1.length==1) {
    text1= 'Your health will one day disappear \nand you will die without';
  }
  if (words1.length==0) {
    text1= 'Your health will one day disappear \nand you will die without meaning.';
  }
  if (clicks>=13) {
    continuePrompt1='End session?';
  }
  
  //Words2 SPLICE STARTS
  if (words2.length<=20) {
    words2Color = [255,255,255,150];
    text2Color = [255,255,255,255];
  }
  if (clicks>=14) {
    wordList2.splice(0,1);
    words2.splice(0,1);
  }
  if (words2.length==20){
    text2= 'There';
  }
  if (words2.length==19){
    text2= 'There are';
  }
  if (words2.length==18){
    text2= 'There are many';
  }
  if (words2.length==17){
    text2= 'There are many men';
  }
  if (words2.length==16){
    text2= 'There are many men and';
  }
  if (words2.length==15){
    text2= 'There are many men and women';
  }
  if (words2.length==14){
    text2= 'There are many men and women who';
  }
  if (words2.length==13){
    text2= 'There are many men and women who dream';
  }
  if (words2.length==12){
    text2= 'There are many men and women who dream of';
  }
  if (words2.length==11){
    text2= 'There are many men and women who dream of \nmaking';
  }
  if (words2.length==10){
    text2= 'There are many men and women who dream of \nmaking love';
  }
  if (words2.length==9){
    text2= 'There are many men and women who dream of \nmaking love to';
  }
  if (words2.length==8){
    text2= 'There are many men and women who dream of \nmaking love to you';
  }
  if (words2.length==7){
    text2= 'There are many men and women who dream of \nmaking love to you but';
  }
  if (words2.length==6){
    text2= 'There are many men and women who dream of \nmaking love to you but you';
  }
  if (words2.length==5){
    text2= 'There are many men and women who dream of \nmaking love to you but you will';
  }
  if (words2.length==4){
    text2= 'There are many men and women who dream of \nmaking love to you but you will never';
  }
  if (words2.length==3){
    text2= 'There are many men and women who dream of \nmaking love to you but you will never get';
  }
  if (words2.length==2){
    text2= 'There are many men and women who dream of \nmaking love to you but you will never get to';
  }
  if (words2.length==1){
    text2= 'There are many men and women who dream of \nmaking love to you but you will never get to know';
  }
  if (words2.length==0){
    text2= 'There are many men and women who dream of \nmaking love to you but you will never get to know them.';
  }
  if (clicks>=35) {
    continuePrompt2='Autodestruct?';
  }
}
