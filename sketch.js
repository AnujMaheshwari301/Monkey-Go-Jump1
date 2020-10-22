
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var bananaGroup, obstacleGroup;
var stone;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(800, 400);
  monkey = createSprite(100, 320, 10, 10);
  monkey.addAnimation("monkey.png", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400, 350, 400, 10);
  ground.x = ground.width/2
  bananaGroup = new Group();
  obstacleGroup = new Group();
    ground.velocityX = -2;
}


function draw() {
  background("white");
  food();
  obstacle();
  //console.log(frameCount)
  monkey.collide(ground);
  
  
  if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -20;
  }
  
  monkey.velocityY += 1;
  
  if(ground.x < 50) {
    ground.x = ground.width / 2;
  }
  
  score = frameCount;
  text("score: "+ score, 50, 50)
  
  
  drawSprites();
}


function food() {
  if(frameCount % 80 === 0) {
    banana = createSprite(200,                                 Math.round(random(100,120)), 10, 10);
    banana.addImage(bananaImage);
    banana.scale = (0.1);
    banana.velocityX = -2;
    banana.lifetime = 100;
    bananaGroup.add(banana);    
  }
}

function obstacle() {
  if(frameCount % 300 === 0) {
    stone = createSprite(200, 320, 10, 10)
    stone.addImage(obstaceImage);
    stone.velocityX = -2;
    stone.lifetime = 100;
    obstacleGroup.add(stone);
    stone.scale = 0.1;
  }
}


