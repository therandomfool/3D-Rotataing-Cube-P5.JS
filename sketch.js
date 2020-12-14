let a = 0
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {
  background(0)
  normalMaterial()
  noStroke()
  stroke('yellow')
  strokeWeight(3)
  //top
  push()
  translate(0, -220)
  rotateX(a)
  rotateY(a)
  rotateZ(a)
  box(20)
  pop()
  //bottom
  push()
  translate(0, 220)
  rotateX(a)
  rotateY(a)
  rotateZ(a)
  box(40)
  pop()
  //east
  push()
  translate(220, 0)
  rotateX(a)
  rotateY(a)
  rotateZ(a)
  box(60)
  pop()
  //west
  push()
  translate(-220, 0)
  rotateX(a)
  rotateY(a)
  rotateZ(a)
  box(80)
  pop()
  a += random(.01, .09)
}


