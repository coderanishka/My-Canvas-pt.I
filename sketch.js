
var ribbon,size1;

function setup() {
  createCanvas(1500, 700);
  background(0);
 
 ribbon  = createSprite(50,350,150,700);
 ribbon.shapeColor=(255,255,55);

 color1 = createSprite(65,100,45,45);
 color1.shapeColor=("red");
 color2 = createSprite(65,160,45,45);
 color2.shapeColor=("orange");
 color3 = createSprite(65,220,45,45);
 color3.shapeColor=("yellow");
 color4 = createSprite(65,280,45,45);
 color4.shapeColor=("green");
 color5 = createSprite(65,340,45,45);
 color5.shapeColor=("blue");
 color6 = createSprite(65,400,45,45);
 color6.shapeColor=("purple");
 
 size1 = createSprite(65,500,25,25);
 size2 = createSprite(65,538,30,30);
 size3 = createSprite(65,582,40,40);
 size4 = createSprite(65,639,48,48);

 

}



function draw() {
  //background(0);
  stroke(0,200,200);
  strokeWeight(3);

  line(0,70,1500,70);

  stroke(255);
  strokeWeight(35);

  if (mouseIsPressed === true && mouseY > 100) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
 
 
  drawSprites();
  textSize(25);
  noStroke();
  fill(0,200,200);
  text("Colour",25,50);
  text("Size",38,470);
 
  fill(255)
  stroke(0,200,200);
  strokeWeight(4)
  textSize(40);
  textStyle("scboolbell")
  text("My Canvas",650,40)
}

function mousePressed(){
  // if mouse is pressed on any of the colors..
  if (mouseIsPressed(color1)){
    stroke("red");
  }
  if (mouseIsPressed(color2)){
    stroke("orange");
  }
  if (mouseIsPressed(color3)){
    stroke("yellow");
  }
  if (mouseIsPressed(color4)){
    stroke("green");
  }
  if (mouseIsPressed(color5)){
    stroke("blue");
  }
  if (mouseIsPressed(color6)){
    stroke("purple");
  }

  // if mouse is pressed on any of the size...
  if (mouseIsPressed(size1)){
    strokeWeight(5);
  }
  if (mouseIsPressed(size2)){
    strokeWeight(15);
  }
  if (mouseIsPressed(size3)){
    strokeWeight(25);
  }
  if (mouseIsPressed(size4)){
    strokeWeight(35);
  }
}


 
