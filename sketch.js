
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 

var paper1,paper2,paper3,paper4,paper5,roof;
var sling1,sling2,sling3,sling4,sling5;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);

	
	engine = Engine.create();
	world = engine.world;
	let canvasmouse=Mouse.create(canvas.elt);

	canvasmouse.pixelRatio=pixlDensity();

	let options={mouse: canvasmouse};

	mConstraint=MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	paper1 = new Paper(250,340,50);
	paper2 = new Paper(350,340,50);
	paper3 = new Paper(450,340,50);
	paper4 = new Paper(550,340,50);
	paper5 = new Paper(650,340,50);
	roof = new Gd(1000,100,650,50);
	sling1 = new Sling(paper1.body,{x: 250, y:100});
	sling2 = new Sling(paper2.body,{x: 350, y:100});
	sling3 = new Slin(paper3.body,{x: 450, y:100});
	sling4 = new Sling(paper4.body,{x: 550, y:100});
	sling5 = new Sling(paper5.body,{x: 650, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
paper1.display();
paper2.display();
paper3.display();
paper4.display();
paper5.display();
roof.display();
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

/*if(keyDown("space")){
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:-200, y: 300});

}
*/
}

function mouseDragged(){
	Matter.Body.setPosition(pendelum1.body, {x: mouseX, y: mouseY});
}



