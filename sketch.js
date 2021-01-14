const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, div1, div2, div3, div4, div5, div6, div7;
var engine, world;
var plinkos = [];
var particles = [];
var balls;

function preload(){
balls = loadImage("Different-sport-balls.jpg")

}

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,20);

  div1 = new Divisions(0, 630, 3, 300);
  div2 = new Divisions(80, 630, 3, 300);
  div3 = new Divisions(160, 630, 3, 300);
  div4 = new Divisions(240, 630, 3, 300);
  div5 = new Divisions(320, 630, 3, 300);
  div6 = new Divisions(400, 630, 3, 300);
  div7 = new Divisions(480, 630, 3, 300);

  for (var j = 40; j <= width; j = j + 50){
       plinkos.push(new Plinko(j, 75, 10));
  }

  for (var j = 20; j <= width; j = j + 50){
       plinkos.push(new Plinko(j, 175, 10))
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 275, 10))
}

for (var j = 20; j <= width; j = j + 50){
  plinkos.push(new Plinko(j, 375, 10))
}

 // if(frameCount%40 === 0){
  //  particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
  //}

  


}

function draw() {
  background(balls); 
  
  stroke("beige")
  textSize(30);
  text("Watch these balls please", 100, 50)

  Engine.update(engine);

  ground.display();

  console.log(frameCount);

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();

  drawSprites();
}