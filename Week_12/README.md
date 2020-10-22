# The Happy Ending

This is the last week of the Code+Words studio. 

After a whole week of grinding again, my final project is released:
https://yutangmoo.github.io/MakeCode/Week_12/Final_Project/

Firstly, I've completely revamped the UI, by adding an actual OK button.

Secondly, because I couldn't be bothered (and don't have enough time) to work out how classes works and how not to break them, I've decided to hard code the appearing foreground texts in one word by another:

```javascript
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
```

Because I wanted certain interactive prompt to appear at certain clicks, I made a very simple click counter:

```javascript
let clicks = 0;
function mousePressed() {
 clicks ++;
}
```

With the click counter, each click will count one into the clicks variable, which enabled me to control the exact time of certain element of my design appears.

I wanted my final project to have more interactive depth, so, inspired by the video game *Undertale*, I added three hearts on the canvas, and by finishing each statements, one heart will be taken away, which added a little video-gamey interactive quality to the design.

![1](/Users/yutang/Documents/GitHub/MakeCode/Week_12/Images/1.png)

Also inspire by the roughness and hint of cruelty of *Undertale*, I developed a set of visual effect, for example the shaking effect when user press their mouse button, and the serif typeface below the 8-bit sentences struggling to "escape" into their naive floating form.

![2](/Users/yutang/Documents/GitHub/MakeCode/Week_12/Images/2.png)

To make my design even more intriguing, I've added a background white-noise of radio static, and to acknowledge every user interaction, a beep was played with each click. Also, with each heart taken out after  a statement finishing, I've added a punch noise to enhance the sensation of getting hurt (this was achieved by using my click counter btw).

![3](/Users/yutang/Documents/GitHub/MakeCode/Week_12/Images/3.gif)

A lot of little details were added in my design, and it'll take forever to explain here, so, take a look at my final project:
https://yutangmoo.github.io/MakeCode/Week_12/Final_Project/

And the codes that actualised it:
https://github.com/YutangMoo/MakeCode/tree/master/Week_12/Final_Project