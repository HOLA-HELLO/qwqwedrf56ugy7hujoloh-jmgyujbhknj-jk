const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var plataform;
var constrainedLog;
var slingshot;
var GameState = "onSling";
var bg = ("bg.png");
var score = 0;

function preload() {
   backgroundImg = loadImage("bg.png");

getTime();

}

function setup(){
    var canvas = createCanvas(1500,400);
    engine = Engine.create();
    world = engine.world;
    constrainedLog = new Log(230,180,80,PI/2);

    plataform = new Ground(150,305,300,170);
    ground = new Ground(600,height,1550,20);
//exterior
    box9 = new Box(530,350,70,70);
    box10 = new Box (530,350,70,70);
    pig6 = new PigGod(530,320,70,70);
    box11 = new Box(1125,350,70,70);
    log6 = new Log(1125,250,300,PI/2);
    box12 = new Box(1125,210,70,70);
    log7 = new Log(1125,170,300,PI/1)
    pig8 = new PigAtp(1120,250);
    pig9 = new PigAgent(1150,250);
//nivel 1
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    log1 = new Log(830,210,300, PI/2);
//nivel 2
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,250);
    log3 =  new Log(810,300,300, PI/2);
//nivel 3
    box5 = new Box(700,170,70,70);
    box6 = new Box(920,100,70,70);
    pig3 = new Pig(810,160);
    log4 = new Log(810,150,300, PI/2);
//nivel 4
    box7 = new Box(700,100,70,70);
    box8 = new Box(920,100,70,70);
    pig4= new Pig(770, 60);
    pig5= new Pig(830, 60);
    log5 =  new Log(810,40,300, PI/2);
//nivel cinco
pig7 = new PigAgeent(810,20);

    //box55 = new Box(810,160,70,70);
    //log44 = new Log(760,120,150, PI/7);
    //log55 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    slingshot = new Slingshot(bird.body,{x:200,y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    textSize(20);
    fill("black");
    text("Score: "+score,1200,50);

    plataform.display();
//exterior
    pig6.display();
    pig6.score();
    box9.display();
    box10.display();
    box11.display();
    log6.display();
    box12.display();
    log7.display();
    pig8.display();
    pig8.score();
    pig9.display();
    pig9.score();
    //nivel 1
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
//nivel dosssssssssssss
    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log3.display();
//nivel tres
    box5.display();
    box6.display();
    pig3.display();
    pig2.score();
    log4.display();
//nivel 4
    box7.display();
    box8.display();
    pig4.display();
    pig4.score();
    pig5.display();
    pig5.score();
    log5.display();
//nivel 5
pig7.display();
pig7.score();

    //constrainedLog.display();
    bird.display();
    slingshot.display();
}

function mouseDragged(){

if(GameState!== "launched"){

    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

}

}

function mouseReleased(){

    slingshot.fly();
    GameState = "launched";

}

async function getTime(){
var response = await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
var responseJSON = await response.json();
var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);

if(hour >6 && hour <19){

bg = ("bg.png");

}else{

bg = ("bg2.jpg");

}
backgroundImg = loadImage(bg);
}

function keyPressed(){

if(keyCode == 32 && bird.body.speed <1){

    bird.trajectory = [];
    Matter.Body.setPosition(bird.body,{x:200,y:50});

    slingshot.attach(bird.body);

    GameState = "onSling";

}

}