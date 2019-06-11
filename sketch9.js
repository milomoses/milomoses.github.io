let s=800;
let p=0;
let q=0;
function setup() {
  let canvas=createCanvas(s, s);
  canvas.parent("game9")
}

function run() {
  strokeWeight(10)
  stroke(0,0,0)
	fill(200,200,200)
  ellipse(s/2,s/2,s/4,2*s/9)
  fill(0,0,0)
  ellipse(s/2,s/2,s/15,s/15)
}

function tear(centX,centY) {
  let theta=0
  tempX2=20+centX;
  tempY2=centY;
  obj = {
  tempX1: 20*cos(theta)+centX,
  tempY1: 20*sin(theta)*Math.pow(sin(theta/2),2.5)+centY,
  tempX2: 20+centX,
  tempY2: centY,
	}
	for (i=0;i<360;i++) {
  obj.tempX1=20*cos(theta)+centX
  obj.tempY1=20*sin(theta)*Math.pow(sin(theta/2),2.5)+centY
  theta=2*PI*i/360;
  strokeWeight(1);
  line(obj.tempX2,obj.tempX2,obj.tempX1,obj.tempY1);
  obj.tempX2=obj.tempX1;
  obj.tempY2=obj.tempY1;
  }
}
function draw() {
  q++;
  p=s/2*sin(q/100)+s/2
  background(50,50,50);
  run();
  tear(s/2,p);
}
