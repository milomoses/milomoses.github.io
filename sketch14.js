let R;
let s;
let d;
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
  canvas.parent("game14")
}
class sphere{
  constructor(a,b,c) {
  this.x=a
  this.y=b
  this.r=c
  this.color1=[random(255),random(255),random(255)]
  }
  make(x,y,n) {
  d=Math.pow(Math.pow(x-this.x,2)+Math.pow(y-this.y,2),.5)
  if (d<10*this.r) {
  this.x-=3000/((x-this.x)*d)
  this.y-=3000/((y-this.y)*d)
  if (this.x>s){
  this.x=s
  }
  if (this.x<0){
  this.x=0
  }
  if (this.y>s){
  this.y=s
  }
  if (this.y<0){
  this.y=0
  }
  }
  stroke(this.color1)
  fill(this.color1)
  ellipse(this.x,this.y,this.r+5*sin(n),this.r+5*sin(n))
  }
  check(x,y,n) {
  d=Math.pow(Math.pow(x-this.x,2)+Math.pow(y-this.y,2),.5)
  if (d<this.r){
  return true
  }
  return false
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

function mousePressed(){
  for (i=0;i<R.length;i++) {
  if (R[i].check(mouseX,mouseY,t)){
  R.splice(i,1)
  }
  }
}
