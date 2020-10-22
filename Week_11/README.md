# Compromised

After once again, nights after nights working with the code, I finally gave up by finding out I don't have the physical energy and time to make the forming of the sentences animated.

So, what I've done is, by making user clicking on the OK button (in this case, clicking the canvas works as well), letters in the word cloud will disappear one by one as the sentence form itself one word after another in the foreground. 

This means I needed to work some coding magic, which I did, to delete word one by one from the array:

```javascript
function mousePressed() {
 wordList1.splice(0,1);
 words1.splice(0,1);
}
```

These simple lines of code were all about try and error, which I, once again, spent all night trying each possible combination of codes to make it work.

Couldn't be bothered with messing with the fixed classes again, I decided to manually hard-code the appearing of the sentences. Because I need some effect to happen in exact time clicked, I fashioned a click counter like so:

```javascript
let clicks = 0;
function mousePressed() {
	clicks ++;
}
```

So that with each click, the clicks variable will increase by one, which gave me control of things happening on each step of interactions. 

https://yutangmoo.github.io/MakeCode/Week_11/Semi_Final_Project/

