var po = 0
function setup() {
// create canvas
let canvas=createCanvas(800, 800);
canvas.parent("game5")
background(141,214,314)
words = ['obtain the grain', 'destroy world', 'phichadelic colours', 'experement probability']
button = createButton(words[po]);
button.position(350,400);
button.mousePressed(obtain);

textAlign(CENTER);
textSize(50);
}

function obtain() {
for (i=0;i<100;i++){
stroke(random(255),random(255),random(255));
line(0,random(800),800,random(800));
line(random(800),0,random(800),800)
if (random(100)>10){
fill(random(255),random(255),random(255));
x=random(20,100);
ellipse(random(800),random(800),x,x)
}
po = Math.floor(random(words.length));
}
button = createButton(words[po]);
button.position(350,400);
button.mousePressed(obtain);
}
