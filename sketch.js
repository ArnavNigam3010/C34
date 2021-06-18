const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world


function setup(){
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    b1 = new Box(700,300);
    b2 = new Box(775,300);
    b3 = new Box(850,300);
    b4 = new Box(700,300);
    b5 = new Box(775,300);
    b6 = new Box(850,300);
    b7 = new Box(700,300);
    b8 = new Box(775,300);
    b9 = new Box(850,300);
    b10 = new Box(700,300);
    b11 = new Box(775,300);
    b12 = new Box(850,300);
    b13 = new Box(700,300);
    b14 = new Box(775,300);
    b15 = new Box(850,300);
    b16 = new Box(625,300);
    b17 = new Box(550,300);
    b18 = new Box(475,300);
    b19 = new Box(625,300);
    b20 = new Box(550,300);
    b21 = new Box(475,300);
    b22 = new Box(625,300);
    b23 = new Box(550,300);
    b24 = new Box(475,300);
    b25 = new Box(625,300);
    b26 = new Box(550,300);
    b27 = new Box(475,300);
    b28 = new Box(625,300);
    b29 = new Box(550,300);
    b30 = new Box(475,300);

    ball = new Ball(270,300)

    sling = new Sling(ball.body, {x:270, y:20})

}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    b28.display();
    b29.display();
    b30.display(); 
    ball.display();
    sling.display(); 


}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}