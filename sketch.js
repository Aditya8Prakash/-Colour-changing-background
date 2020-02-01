
var r = 0;
var g = 0;
var b = 0;

function setup(){
  createCanvas(255*2,255*2);
}

function draw(){
  background(r,g,b);
  r=World.mouseX/2;
  g=World.mouseY/2;
  b=[(World.mouseX*World.mouseX)-(World.mouseY*World.mouseY)/2]/2;
}