let s = 800;
let Sty = [];
let temp = 0;
function setup() {
  let canvas=createCanvas(s, s);
  canvas.parent("game6")
  for (i=0; i<50;i++) {
  	Sty.push(new Boba());
  }
  globe = [255/2,255/2,255/2]
}

class Boba {
	constructor() {
    this.rx = 50;
    this.ry = 50;
		this.x = random(s-2*this.rx)+this.rx;
    this.y = random(s-2*this.ry)+this.ry;
    this.color = [random(255),random(255),random(255)]
    this.vx = random(20)-10;
    this.vy = random(20)-10;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    temp = random(20) - 10;
    this.rx += temp;
    this.ry -= this.ry*temp/(temp + this.rx);
    fill(this.color);
    ellipse(this.x,this.y,this.rx,this.ry);
    this.color[0] += random(20) - 10
  	this.color[1] += random(20) - 10
  	globe[2] += random(20) - 10
    if (this.x > s - this.rx/2 || this.x < this.rx/2) {
      this.vx = -this.vx;
    }

    if (this.y > s - this.ry/2 || this.y < this.ry/2) {
      this.vy = -this.vy;
    }

  }
}


function draw() {
  background(globe);
	for (i=0;i<Sty.length;i++) {
  	Sty[i].move()
  }
  globe[0] += random(20) - 10
  globe[1] += random(20) - 10
  globe[2] += random(20) - 10
}
