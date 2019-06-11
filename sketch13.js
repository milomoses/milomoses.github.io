let R;
let s;
function setup() {
  background(220)
  R=[]
  s=600
  for (i=0;i<Math.floor(s/100)+1;i++) {
  for (j=0;j<Math.floor(s/100)+1;j++) {
  R.push(new sphere(100*i,100*j,random(100)))
  }
  }
  let canvas=createCanvas(s, s);
  canvas.parent("game13")
}
class sphere{
  constructor(a,b,c) {
  this.x=a
  this.y=b
  this.r=c
  this.color1=[random(255),random(255),random(255)]
  this.color2=[random(255),random(255),random(255)]
  }
  make(x,y,n) {
  if (Math.pow(x-this.x,2)+Math.pow(y-this.y,2)<2*Math.pow(this.r,2)) {
  stroke(this.color2)
  fill(this.color2)
  }
  else {
  stroke(this.color1)
  fill(this.color1)
  }
  ellipse(this.x,this.y,this.r+5*sin(n),this.r+5*sin(n))
  }
}


t=0
function draw() {
  t+=1/10
  background(220)
  for (i=0;i<R.length;i++) {
  R[i].make(mouseX,mouseY,t)
  }

}
