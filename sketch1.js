s = 800
function setup() {
  let canvas = createCanvas(s,s);
  canvas.parent("game1")
}

function mean(arr) {
  tempsum=0
  for (i=0;i<arr.length;i++) {
    tempsum += arr[i]
  }
  return tempsum/arr.len
}
class Star {
  constructor() {
    this.temp = [Math.PI / 180 * random(1,360),random(0,40),[random(-1,1),random(-1,1),random(-1,1)]]
    this.x = s/2+this.temp[1]*cos(this.temp[0]);
    this.y = s/2+this.temp[1]*sin(this.temp[0]);
    this.speed = random(1,2);
    this.radius = random(5,20);
    this.angle = Math.PI / 180 * random(1,360);
    this.colour = [random(1,255),random(1,255),random(1,255)]
  }

  move() {
  	this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
    this.radius += this.speed;
    this.colour[0]+=this.temp[2][0]
    this.colour[1]+=this.temp[2][1]
    this.colour[2]+=this.temp[2][2]
    ///stroke(this.colour);
    fill(this.colour);
    ellipse(this.x,this.y,this.radius,this.radius);
  }

}
let Stars = []
function draw(){
  background(0);
  Stars.push(new Star())
  for (let p = 0; p<Stars.length;p++ ){
    Stars[p].move()
    if (Math.abs(Stars[p].x - s/2)>s/2 +2*Stars[p].radius || Math.abs(Stars[p].y - s/2)>s/2+2*Stars[p].radius){
    	Stars.splice(p,1);
    }
  }
}
