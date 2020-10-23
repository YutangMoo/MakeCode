[⟵Week 10](https://yutangmoo.github.io/MakeCode/Week_10) || [Home](https://yutangmoo.github.io/MakeCode/) > Week 11 ||  [Week 12 ⟶](https://yutangmoo.github.io/MakeCode/Week_12)



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

Long story short, after adding effects like crazy, I'm more than satisfied with the end result:

![1](https://github.com/YutangMoo/MakeCode/blob/master/Week_11/Images/1.png?raw=true)

[Check it out live](https://yutangmoo.github.io/MakeCode/Week_11/Semi_Final_Project/)

My next step is trying to make the foreground sentence appearing one word after another, and get my entire visual sorted.



[⟵Week 10](https://yutangmoo.github.io/MakeCode/Week_10) || [Home](https://yutangmoo.github.io/MakeCode/) > Week 11 ||  [Week 12 ⟶](https://yutangmoo.github.io/MakeCode/Week_12)