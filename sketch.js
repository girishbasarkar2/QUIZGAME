var quiz;
var count=0;
var ben10Image;

function setup() {
  createCanvas(1400,800);
  quiz=new Quiz();
  result=createSprite(400,400);
  result.addImage(youarerightImage);
  result.scale = 0.2;
 result.visible=false;
}

function draw() {
  background("lightblue"); 
 quiz.display();


 
  drawSprites();
 
}

function preload (){
youarerightImage=loadImage('youareright.png');
youarewrongImage=loadImage('youarewrong.jpg');

}

