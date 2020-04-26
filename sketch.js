var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
  ob1=createSprite(400,200,50,50);
  ob1.shapeColor="grey";
  ob1.velocityY = +5;
  ob2=createSprite(1000,500,70,50);
  ob2.shapeColor="pink";
  ob3=createSprite(200,200,100,100);
  ob3.shapeColor="white";
  ob4=createSprite(400,400,1000,20);
  ob4.shapeColor="brown";
}

function draw() {
  background(0,0,0);  

  if(bounceOff(movingRect,ob1)){
  movingRect.shapeColor="red";
  ob1.shapeColor="red";
  }

  else{
    movingRect.shapeColor="green";
    ob1.shpeColor="grey"; 
  }
  



 
  drawSprites();
}
function bounceOff (object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}

}