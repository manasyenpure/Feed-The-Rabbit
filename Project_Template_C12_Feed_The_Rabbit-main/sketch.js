var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf,orangeleaf;
var appleImg,leafImg,orangeLeaf;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var rand = Math.round(random(1,100))
console.log(rand)
}


function draw() {
  background(220);
  
  rabbit.x=World.mouseX;

  console.log(random(1,400))

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  spawnApples()
  spawnLeafs()
  spawnOrangeLeafs()
  drawSprites();
}

function spawnApples(){
if(frameCount%80===0){
  var apple = createSprite(60,50,20,20);
  apple.velocityY = 5;
  apple.x=Math.round(random(1,80));
  apple.addImage(appleImg);
  apple.scale = 0.1;
}
}


function spawnLeafs(){
if(frameCount%60===0){
var leaf = createSprite(180,50,20,20);
leaf.velocityY = 5;
leaf.x=Math.round(random(140,300));
leaf.addImage(leafImg);
leaf.scale = 0.1;
}
}


function spawnOrangeLeafs(){
if(frameCount%100===0){
  var orangeLeaf = createSprite(100,50,20,20);
  orangeLeaf.velocityY = 5;
  orangeLeaf.x=Math.round(random(250,300))
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.1;
}
}
