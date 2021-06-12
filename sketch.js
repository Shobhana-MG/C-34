const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box3,box2,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13, box14,box15,box16,box17;
var ground;
var ball, rope;



function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
   
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,700,1200,20);
    

    box1 = new Box(700,100,70,70);
    box2 = new Box(700,100,70,70);
    

    box3 = new Box(700,100,70,70);
    box4 = new Box(700,100,70,70);
    

    box5 = new Box(700,100,70,70);
    box6 = new Box(700,100,70,70);
    box7 = new Box(700,100,70,70);
    

    box8 = new Box(700,100,70,70);
    box9 = new Box(700,100,70,70);
    

    box10 = new Box(700,100,70,70);

    box11 = new Box(700,100,70,70);
    box12 = new Box(800,100,70,70);
    box13 = new Box(800,100,70,70);
    box14 = new Box(800,100,70,70);
    

    box15 = new Box(800,100,70,70);
    box16 = new Box(800,100,70,70);
    

    box17 = new Box(800,100,70,70);
    

ball= new Ball (200,200,80,80);   

    //log6 = new Log(230,180,80, PI/2);
    rope = new Rope(ball.body,{x:500, y:50});
}

function draw(){

   // if (backgroundImg){
    background(220);

    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
box17.display();
    
ball.display();
    
    //log6.display();
    rope.display();    

    
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}

/*
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}


// JSON  Javascript object notation - data type 

// arra y data type index:value pair 
// JSON  keyname: value pair 
// API Application Programming Interface 
// synchronous

 async function getBackgroundImage(){

var response=  await fetch (" https://worldtimeapi.org/api/timezone/America/Chicago");

var responseJSON= await response.json(); 
console.log (responseJSON);


var dateTime= responseJSON.datetime;
console.log (dateTime);


var hour = dateTime. slice(11,13);
console.log(hour)
 
if(hour>=06&&hour<=16){
bg="sprites/bg.png"
}
else{
bg="sprites/bg2.jpg"
}
backgroundImg=loadImage(bg)
}*/