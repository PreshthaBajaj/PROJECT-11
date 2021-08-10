var path, pathRunning;
var invisibleground1, invisibleground2;
var person, personwalk;

function preload(){
  //pre-load images
  pathRunning = loadImage("path.png");
  personwalk = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite (200,200,250,400);
  path.scale = 1.33;
  path.addImage ("running",pathRunning);
  path.velocityY = 3;

  invisibleground1 = createSprite (389,200,20,399);
  invisibleground1.visible = false;

  invisibleground2 = createSprite (17,200,25,399);
  invisibleground2.visible = false;

  person = createSprite (200,320,30,25);
  person.scale = 0.1;
  person.addAnimation("walking",personwalk);
  // person.velocityY = -2;
}

function draw() {
  background("black");

  if (path.y > 400){
    path.y = path.width/2;
  }

  person.x = mouseX;

  person.collide(invisibleground1);
  person.collide(invisibleground2);

  drawSprites();
}
