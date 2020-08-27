const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var engine,world;
var maxDrops = 100;
var drop = [];
var thunder1,thunder2,thunder,rand;
var array=[];

function preload(){
    thunder1 = loadImage("thunder1.png");
    thunder2 = loadImage("thunder2.png");
}

function setup(){
   canvas = createCanvas(500,600);

   engine = Engine.create();
   world = engine.world;

   array.push(thunder1);
   array.push(thunder2);

   man = new Umbrella(225,height-175);

   rand = Math.round(random(0,1));
   thunder = createSprite(200,50,1,1);
   thunder.scale = 0.55;
   thunder.addImage(array[rand]);

   for(var i=0;i<maxDrops;i++){
   drop.push(new Drops(random(0,width-50),random(0,100)));
   }
}

function draw(){
  background(0);
  Engine.update(engine);

 if(frameCount%40){
  for (var i = 0; i < drop.length; i++) {
     drop[i].display();
     drop[i].update();
  }
 }
  
  man.display();
  //spawnThunder();
  console.log(array);
  
  if(frameCount%60===0||frameCount%60===1||frameCount%60===2){
      thunder.visible = true;
  }else{
     thunder.visible = false;
}

  drawSprites();
}   



