let R;
let s;
let timeX;
let timeY;
function setup() {
  background(220)
  R=[]
  s=600
  timeX=0
  timeY=0
  let canvas=createCanvas(s, s);
  canvas.parent("game12")
}

function bar(aList) {
  Temp=[]
  for (k=0;k<aList.length;k++){
  Temp.push(255-aList[k])
  }
  return Temp
}
class sphere{
  constructor(a,b,c,d) {
  this.x=a
  this.y=b
  this.r=(c**2+d**2)**.5
  this.color1=[random(255),random(255),random(255)]
  this.color2=[random(255),random(255),random(255)]
  }
  make() {

  if (mouseIsPressed) {
  stroke(bar(this.color1))
  fill(bar(this.color2))

  }

  else {
  stroke(this.color1)
  fill(this.color2)
  }
  ellipse(this.x,this.y,this.r,this.r)
  }

}
function draw() {
  delX=Math.abs(timeX-mouseX)
  delY=Math.abs(timeY-mouseY)
  timeX=mouseX
  timeY=mouseY
  background(220)
  R.push(new sphere(timeX,timeY,1.5*delX,1.5*delY))
  for (i=0;i<R.length;i++) {
  R[i].make()
  }

}
