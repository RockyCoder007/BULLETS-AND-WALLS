var bullet,wall,speed,weight,damage,thickness;

function setup() {

  createCanvas(1600,400);
  wall = createSprite(1600, 200, thickness, 200);
  bullet = createSprite(50,200,50,10);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);


}

function draw() {
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  background(255,255,255);
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    console.log("speed of car : "+ speed +" "+"weight:"+ weight);
    if (damage<10) {
      wall.shapeColor="green";
      console.log("material : good");
      
    }
    else{
      wall.shapeColor="red";
      console.log("material : bad");
    }
  }  
  drawSprites();
}
function hasCollided(object1,object2){
  var object1RightEdge=object1.x+object1.width/2;
  var object2LeftEdge=object2.x-object2.width/2;
if(object1RightEdge>object2LeftEdge){
  return true;
}
else{
  return false;
}

}