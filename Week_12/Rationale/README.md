# **OK Texts** 

## a Brutal Interactive "Technological Determinism" Experience

Based on Mark Amerika's OK Texts, and visually inspired by the humorous yet rough-edged retro-style video game Undertale, I created this interactive digital literature experience that aimed to capture the brutality of technological determinism. The interactive experience is an experimental exploration of new media possibilities, especially considered the inevitable transformation of literature from papers to screens.

Reading OK Texts, I was impressed by how Mark Amerika can use a minimum amount of texts to achieve the uncanny, brutal and depressing nature of technological determinism. Grabbing the essences, and utilise P5.js, I tried to reproduce the human-computer interface that was mocked up in his original work. 

As a designer that focuses on user-centric experience, I put most of my effort into ensuring a comfortable and complete interactive process.

Thoroughly read the original work, and visualised the outcome by prototyping, I achieved the basic effects by remixing existing P5.js examples and added more visual layers and details towards a presentable outcome. During the coding process, because of my understanding of some functions are still rudimental, I had to abandon some of my initial visual ideas, and seek other executable solutions in exchange.

I considered this project a successful experiment in digital literature, and it laid the foundation for me to translate more literature pieces into digital format and boosted my confidence in actually take part in coding. It expanded my vision of being a graphic designer and encouraged me to explore more possibilities in communication design.



# More Technical Details to Read...

The core concept I wanted to convey is the contrast between the seemingly random and harmless metadata with the disturbing effect when computers can utilise these words to form "evil "statements. To achieve this, I remixed a skim version of the P5.js' particle example, created an interactive word cloud that contains all the words from the statements in the original texts. The font for the word cloud is Arno Pro, which is a serif typeface, in this case representing the harmlessness and the classical feature of the single words. 

My interaction piece prompt user only to use an OK button to proceed. With each button press, the statement will form in the foreground, with single words "taken" from the text cloud one by one. The statements were written in an 8-bit style typeface called "Determination", which its name and style are tributes to the video game that inspire my design - Undertale. To clarify the action in the background, I've decided to make the floating texts associated with the forming statement red. 

As the statements forming, there're also red flashing texts in red "struggling" to escape back to their floating form, enhancing the urgency and helplessness feeling of user's action. After adding this feature, I've also made the OK button's background flashing with red to encourage user action, and foreshadowing the consequences of continuing with OK.

To further connect the user with the literature, I've embedded a health meter - in classic RPG and Undertale fashion - which contains three hearts. With each statement completed, one heart will be taken. When all three hearts are drained, a "death" screen will appear, and the user will no longer give a chance to interact unless the page is reloaded.