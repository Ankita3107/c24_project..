// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var engine, world;
var ground;
var cannonBall = [];

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,30);
    shooter = new Tanker(130,275,80,20);
}

function keyTyped() {
    // Call the shoot method for the cannon.
    if(key === 'a'){
        cannonBall.push(new CanonBall(600,200));
    }
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(0);
    Engine.update(engine);

    ellipseMode(CENTER);
    fill("brown");
    ellipse(35,350,50,50);
    ellipse(100,350,50,50);
    fill("red");
    ellipse(70,300,90,90);

    rectMode(CENTER);
    fill(0,100,0);
    rect(70,320,130,50);

    ground.display();
    shooter.display();
}


