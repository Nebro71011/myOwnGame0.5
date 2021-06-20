const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var player,ground,block;

function setup(){
    createCanvas(400,630);
    engine = Engine.create();
    world = engine.world;

    player=new Player(200,300);
    ground=new Ground(-1,160,400,50);
    block=new Blocks(0,60,50,30);
}

function draw(){
    background("green");
    Engine.update(engine);

    player.display();
    ground.display();
    
    if(frameCount%100){
        block.display();
    }
    
}