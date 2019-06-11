let a;
function setup() {
  let canvas=createCanvas(800, 800);
  canvas.parent("game11")
  fill(random(255),random(255),random(255))
  background(random(255),random(255),random(255))
  //creating our array
  a=[1,2,3,4,5,6,7,8]
  //itterating over the length of the array
  for (i=0;i<a.length;i++) {
  textSize(32)
  // this next line gets the corresponding element of the array
  e=a[i]
  // prints the number
  text(str(e),100*e-50,100*e-50)
  }
}
