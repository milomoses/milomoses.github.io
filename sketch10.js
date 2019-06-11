let s1 = 800
let s2 = 800
var alphabet=      ["a","a","a","b","c","d","e","e","e","e","f","g","h","i","i","i","j","k","l","m","n","o","o","o","p","q","r","s","t","t","t","u","u","v","w","x","y","z"]
function setup() {
  let canvas=createCanvas(s1, s2);
  canvas.parent("game10")
  background(200,200,200)
  strokeWeight(0)
}

function makeword(alphabety) {
  LetterList=""
  for (i=0;i<Math.floor(random(3,15));i++) {
    LetterList += alphabety[Math.floor(random(0,26))]
  }

  return LetterList
}

let j=0
let k=50
function draw() {
  if (j%k==0){
  s1=Math.floor(random(0,1000))
  s2=Math.floor(random(0,1000))
  s1w=Math.floor(random(0,1000-s1))
  s2w=Math.floor(random(0,1000-s2))
  fill(random(255),random(255),random(255))
  rect(s1,s2,s1w,s2w)
  for (i=0;i<Math.floor(random(5,50));i++) {
  fill(random(255),random(255),random(255))
  textSize(32)
  text(makeword(alphabet),s1+random(s1w),s2+random(s2w))
  k+=-1
  }
  }
  j++
}
