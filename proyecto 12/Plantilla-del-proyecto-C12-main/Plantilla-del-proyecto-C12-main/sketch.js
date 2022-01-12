var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var gamestate = "playing"
var manzanas
var hojas
var marcador = 0

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Mover el fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);
manzanas = new Group 
hojas = new Group 



//crear sprite del conejo moviéndose
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.05;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // mover al conejo en el eje X con el mouse

  
  edges= createEdgeSprites();

  
   drawSprites();
   
  
 /*var select_sprites = Math(random(1,3));

 var select_sprites = Math.random(random(1,3));

 var select_sprites = Math.round(1,3);

var select_sprites = Math.round(random(1,3));*/

  
  

   if(gamestate === "playing"){

    rabbit.x = World.mouseX;
    rabbit.collide(edges);
    createApples()
    createRed()



  
  }
if(gamestate === "gameover"){
  perder()
}

perder()


textSize(20)
fill("white")
text("Puntos: " + marcador,270,20)




   }




function createApples() {
if(frameCount%100 === 0){
  
apple = createSprite(100,10);
 apple.x = Math.round(random(350,50))
apple.addImage(appleImg);
apple.scale=0.06;
apple.velocityY = 3;
apple.lifetime = 350;
manzanas.add(apple)

}
if(manzanas.isTouching(rabbit)){
   apple.destroy()
   marcador += 5
}

}

/*function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.07;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}*/

function createRed() {
 if(frameCount%100 === 0) {

   redL = createSprite(350,50);
   redL.x = Math.round(random(350,50))
redL.addImage(redImg);
redL.scale=0.05;
  redL.velocityY = 3;
  redL.lifetime = 150;
  hojas.add(redL)

 }

}

function perder(){
  if(hojas.collide(rabbit)){
    rabbit.destroy()
    manzanas.velocityEachY(0)
    hojas.velocityEachY(0)
  }
}

