const Engine=Matter .Engine;
const World=Matter .World;
const Bodies= Matter .Bodies;
var engine, world, object;
var box1;
var box2;
function setup() {
  createCanvas(400,400);
  box1=createSprite(135,360,10,100);
  box2=createSprite(250,360,10,100);
  

  engine=Engine.create();
  world=engine.world;
  var option = {
    isStatic: true


  }
  object=Bodies.rectangle(200,390,400,20,option);
  World.add(world,object);
  var balloption = {
    restitution: 0.4
  }
  ball=Bodies.circle(200,200,50,balloption);
  World.add(world, ball);
}

function draw() {
  background(0,0,0);
  box1=("brown"); 
  Engine.update(engine);
  rectMode(CENTER); 
  fill ("brown");
  rect(object.position.x, object.position.y, 400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50, 50);
drawSprites();
}