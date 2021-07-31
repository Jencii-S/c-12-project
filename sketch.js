var jaxson, jaxson_running;
var path, path_travelling;
var invisibleground1, invisibleground2;


function preload(){
  //pre-load images
  jaxson_running = loadAnimation("Runner-1.png", "Runner-2.png");
  path_travelling = loadAnimation("path.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200,10,400);
  path.addAnimation("running", path_travelling);
  path.velocityY=4;

  jaxson = createSprite(200,200,10,10);
  jaxson.addAnimation("running", jaxson_running);
  jaxson.scale=0.09;

  invisibleground1 = createSprite(0,0,100,800);  
  invisibleground1.visible = false;
  
  invisibleground2 = createSprite(345,200,10,390);
  invisibleground2.visible = false;
} 

function draw() { 
  background(180);
  jaxson.x=World.mouseX;

  jaxson.collide(invisibleground2);
  jaxson.collide(invisibleground1);




  
  if(path.y > 400){
  path.y = height/2;
  }


  jaxson.collide(invisibleground1);
  jaxson.collide(invisibleground2);
  drawSprites();
}
