
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;

var pend1, pend2, pend3, pend4, pend5;
var sling1, sling2, sling3, slind4, sling5;
var roof;


function setup() {
	createCanvas(windowWidth/2, windowHeight/2);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	}
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	//Create the Bodies Here.

	roof = new Ground(250, 100, 400, 20);
	pend1 = new Pendulum(330, 400, 255);
	pend2 = new Pendulum(390, 400, 255);
	pend3 = new Pendulum(450, 400, 255);
	pend4 = new Pendulum(510, 400, 255);
	pend5 = new Pendulum(570, 400, 255);

	sling1 = new Sling(pend1.body, {x:330 , y:100});
	sling2 = new Sling(pend2.body, {x:390 , y:100});
	sling3 = new Sling(pend3.body, {x:450 , y:100});
	sling4 = new Sling(pend4.body, {x:510 , y:100});
	sling5 = new Sling(pend5.body, {x:570 , y:100});
	
	Engine.run(engine);
  
}

function draw() {
 
  background(0);
  Engine.update(engine);
  
  roof.display();
  pend1.display();
  pend2.display();
  pend3.display();
  pend4.display();
  pend5.display();
  
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(pend1.body, {x: mouseX, y: mouseY});
}



