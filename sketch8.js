let i, b, m;

function setup() {
  // create canvas
  let canvas=createCanvas(800, 800);
  canvas.parent("game8")
  background(400,100,000)

  i = createInput();
  i.position(20, 65);

  b = createButton('submit');
  b.position(i.x + i.width, 65);
  b.mousePressed(m2k);

  m = createElement('h2', 'Hand over your imperials');
  m.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function m2k() {
  const miles = i.value();
  m.html("In the better system, " + miles + "=" + 8/5*miles);
  i.value('');

}
