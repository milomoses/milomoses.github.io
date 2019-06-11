var s = 800
var res = 360
var r = 100
var theta = 0
var start = 0
function setup() {
  let canvas=createCanvas(s, s);
  canvas.parent("game3")
  line(0,0,100,100);
}

function wheel() {
  start +=.01;
  strokeWeight(4);
  for (i=0; i<res;i++) {
    theta = 2*i*Math.PI / res + Math.PI*sin(start);
    stroke(100*(cos(start)+1)/2,100*(2*Math.PI-theta)/Math.PI ,100*theta/Math.PI);
  	line(s/2,s/2,s/2+r*cos(theta),s/2+r*sin(theta))
  }
}
function draw() {
  Mtheta = atan((mouseY-s/2)/(mouseX-s/2))
  background(100*(cos(start)+1)/2,100*(2*Math.PI-Mtheta-Math.PI*sin(start))/Math.PI ,100*(Mtheta+Math.PI*sin(start))/Math.PI);
  wheel()
}
