let s1=900
let s2=800
let balls=[];
let numBalls=300;
let gravity=5;
let f=9/10;
function setup() {
let canvas=createCanvas(s1, s2);
canvas.parent("game2")
for (let i = 0; i < numBalls; i++) {
balls[i] = new PopcornBall (
random(width),
random(height)
);
}
}
function draw() {
background(114,214,314);
for (let i = 0; i < balls.length; i++) {
balls[i].display();
balls[i].bounce();
balls[i].move();
}
}
class PopcornBall {
constructor(x, y) { // we could add radius or r to the constructor
this.x = x;
this.y = y;
this.xspeed = random(2, 4);
this.yspeed = random(2,4);
this.r = random(30,100);

}
move() {
  this.yspeed+=gravity
  this.x+=this.xspeed
  this.y+=this.yspeed
}
bounce() {
  if (this.x<this.r){
    this.xspeed=-this.xspeed*f
    this.x=2*this.r-this.x
    this.yspeed=this.yspeed*f
  }
  if (this.x+this.r>s1){
    this.xspeed=-this.xspeed*f
    this.yspeed=this.yspeed*f
    this.x=s1-this.r
  }
  if (this.y+this.r>s2){
    this.yspeed=-this.yspeed*f
    this.xspeed=this.xspeed*f
    this.y=2*s2-2*this.r-this.y
  }
}
display() {
fill(this.x/5,this.y/5,this.r)
ellipse(this.x, this.y, this.r, this.r);
}
}
