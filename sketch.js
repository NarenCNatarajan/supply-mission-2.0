var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxA,boxB,boxC;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	Engine.run(engine);
	boxA = new Box(300,650,10,200,"red");
	boxB = new Box(400,700,200,20,"red");
	boxC = new Box(500,650,10,200,"red");
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  packageBody.y = helicopterSprite.y
  if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false);
  }
  boxA.display();
  boxB.display();
  boxC.display();

  drawSprites();

 
}





