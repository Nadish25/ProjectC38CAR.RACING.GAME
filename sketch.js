var grass1;
var grass2;
var canvas;
var car,carImg;
var invisibleRoad;
var obstaclesGroup, obstacle1;
var obstacle;
var PLAY=1;
var END=0;


function preload(){

  obstacle1=loadImage("obstacle1.png")
  carImg=loadImage("car.png")
}

function setup(){
  canvas = createCanvas(1300,500);

  grass1=createSprite(10,250,200,9999999999999999)
  grass1.shapeColor="green";

  grass2=createSprite(1290,250,200,99999999999999)
  grass2.shapeColor="green";


  car= createSprite(600,200,50,50);
  car.addImage(carImg)
  car.scale=0.5
  car.setCollider("rectangle",0,0,car.width,car.height);
  car.debug = false
  
 
  obstaclesGroup=new Group();
}


function draw(){
 background(55);
 

 
  
  if(keyDown(UP_ARROW)){
    
    camera.position.y=car.position.y;
    camera.position.x=1300/2;
    gameState=PLAY;
  }

  if(PLAY){
    spawnObstacles();
    car.velocityY=-5;
    
    stroke("white");
    textSize(50);
    fill("white")
    text("PRESS UP ARROW TO START", 450,40)


  if(keyDown(LEFT_ARROW)){
    car.velocityX=-5;
    camera.position.y=car.position.y;
  camera.position.x=1300/2;
  }

  if(keyDown(RIGHT_ARROW)){
    car.velocityX=5;
    camera.position.y=car.position.y;
  camera.position.x=1300/2;
  }

  }

  if(obstaclesGroup.isTouching(car)|| car.x>1150 || car.x<200){
    
    stroke("white");
    textSize(20);
    fill("white")
    text("You Lost , Press ctrl+r to restart" +score,300,200);
    car.velocityY=0;
    car.velocityX=0;
  }

car.depth=car.depth+10;
  
 


  


  drawSprites();
}
function spawnObstacles(){

  if (frameCount % 100 === 0){
     obstacle = createSprite(Math.round(random(120,1000)),car.y-500,10,40);
   
  
      obstacle.addImage(obstacle1);
        
      obstacle.setCollider("rectangle",0,0,obstacle.width-500,obstacle.height-40);
      obstacle.debug = false
    obstacle.depth=obstacle.depth+100

     obstacle.scale = 0.5;
    
  
  obstaclesGroup.add(obstacle);
  }

  if(frameCount % 90 ==0){
    var line = createSprite(650,car.y-250,30,90)
    line.shapeColor="white"


  }

}
