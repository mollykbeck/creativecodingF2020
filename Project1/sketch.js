

function setup() {
  // create full-screen canvas
createCanvas(windowWidth,windowHeight);
}

function draw() {

  //keep background color red-orange
  background(255,83,73);
  //initial cluster of circles (3)
  fill(255,160,137);
  stroke(255,164,116);
  circle(300,200,100);

if(mouseIsPressed & dist(300,200,mouseX,mouseY <50)){
  fill(255,83,73);
  stroke(255,164,116);
  circle(300,200,100);
}
if(mouseIsPressed & dist(300,200,mouseX,mouseY <50)){
  fill(255,164,116);
  stroke(255,160,137);
  circle(350,250,75);
}
if(mouseIsPressed & dist(300,200,mouseX,mouseY <50)){
  fill(253,217,181);
  stroke(255,164,116);
  circle(350,175,45);
}
if(mouseIsPressed & dist(300,200,mouseX,mouseY <50)){
  background(0);
}

}
