let angle=0
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  //Body
  fill(5);
  strokeWeight(0);
  rect(254, 125, 79, 285);
  rect(333, 158, 29, 91);
  rect(225, 158, 29, 91);
  rect(333, 272, 8, 61);
  rect(246, 272, 8, 61);
  rect(333, 355, 26, 31);
  rect(228, 355, 26, 31);
  triangle(225, 158, 254, 158, 254, 125);
  triangle(362, 158, 333, 158, 333, 125);
  triangle(359, 386, 333, 410, 333, 386);
  triangle(228, 386, 254, 410, 254, 386);
  triangle(333, 355, 333, 325, 359, 355);
  triangle(254, 355, 254, 325, 228, 355);
  triangle(333, 249, 333, 280, 362, 249);
  triangle(254, 249, 254, 280, 225, 249);
  //arms
  strokeWeight(26);
  line(352, 237, 498, 166);
  line(232, 237, 96, 166);
  line(252, 357, 115, 430);
  line(341, 357, 475, 430);

  //rotors
  strokeWeight(0);
  circle(475, 430, 44);
  circle(96, 166, 44);
  circle(115, 430, 44);
  circle(498, 166, 44);


  angleMode(DEGREES)
  push()
  translate(475,430)
  rotate(angle)
  blade()
  angle = angle + 100
  pop()

  push()
  translate(96,166)
  rotate(angle)
  blade()
  angle = angle + 100
  pop()

  push()
  translate(115,430)
  rotate(angle)
  blade()
  angle = angle + 100
  pop()

  push()
  translate(498,166)
  rotate(angle)
  blade()
  angle = angle + 100
  pop()
}

//Blades

function blade() { //Body
  fill(5);

  //Top Left
  push()
  translate(0,60)
  ellipse(0,0,25,123);
  pop()
  push()
  translate(0,-60)
  ellipse(0,0,25,123);
  pop()
}
