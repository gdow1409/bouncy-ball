const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,400,20);
   
    box1 = new Box(20,20,29,29);



   
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
}