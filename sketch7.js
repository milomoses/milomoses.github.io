let s=800;
let B=[];
let C;
let theta;
function setup() {
  theta=0
  let canvas=createCanvas(s, s);
  canvas.parent("game7")
  C=[random(255),random(255),random(255)]
  for (i=100;i<s-100;i++){
  	B.push(new Bubble(i))
  }
}

class Bubble {
	constructor(x) {
  this.x = x;
  this.y = s/2;
  this.sx = random(-10,10)
  this.sy = random(-10,10)
  this.r=random(50)
  this.colour=[random(255),random(255),random(255)]
  }
  make(){
  fill(this.colour);
  ellipse(this.x,this.y,2*this.r,2*this.r)
  this.x+=this.sx
  this.y+=this.sy
  }
  detect(){
  if (this.x>s-s*sin(theta)/10-this.r || this.x<this.r) {
  	this.sx=-this.sx
    if (this.x>s-s*sin(theta)/10-this.r){
    	this.x=s-s*sin(theta)/10-this.r
    }
    if (this.x<this.r){
    	this.x=this.r
    }
  }
  if (this.y>s+s*sin(theta)/10-this.r || this.y<this.r) {
  	this.sy=-this.sy
    if (this.y>s+s*sin(theta)/10-this.r){
    	this.y=s+s*sin(theta)/10-this.r
    }
    if (this.y<this.r){
    	this.y=this.r
    }
  }
  }
}

function draw() {
  theta+=1/20
  createCanvas(s-s*sin(theta)/10, s+s*sin(theta)/10);
  background(C);
	for (p=0;p<B.length;p++){
		B[p].make();
  	B[p].detect()
  }
}
