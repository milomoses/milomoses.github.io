let R=1000;
let C=[];
let s=800;
function setup() {
  for (i=0;i<R;i++){
  C.push(new Corn(s))
  }
  let canvas=createCanvas(s, s);
  canvas.parent("game4")
}

class Corn{
constructor(){
this.x=random(s)
this.y=random(s)
this.co=[random(255),random(255),random(255)]
}
move(){
fill(this.co)
ellipse(this.x,this.y,50,50)
this.x+=random(-5,5)
this.y+=random(-5,5)
}
reset(){
this.x=random(s)
this.y=random(s)
this.co=[random(255),random(255),random(255)]
}
detect(){
for (i=0;i<C.length;i++){
if (C[i]!=this){
if ((C[i].x-this.x)**2+(C[i].y-this.y)**2<50**2){
C.splice(i,1)
}
}
}
}
}
j=0
function draw() {
  j++
  background(220)
  for (b of C){
  b.move()
  b.detect()
  }
  if (j%200==0){
  for (b of C){
  b.reset()
  }
  }
}
