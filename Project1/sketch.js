

function setup() {
  // create full-screen canvas
createCanvas(windowWidth,windowHeight);
}

function draw() {

  //initial background color red-orange
  background(255,83,73);

  fill(255,220,199);
  stroke(255,220,199);
  ellipse(width/2,height/2,375,450);

  fill(227,177,145);
  ellipse(520,240,100,50);

  fill(255,255,255);
  ellipse(520,250,100,50);

  fill(227,177,145);
  ellipse(700,240,100,50);

  fill(255,255,255);
  ellipse(700,250,100,50);

}
