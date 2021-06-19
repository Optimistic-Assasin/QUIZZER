var gameState = 0;
var start;
var border;
var database;
var backGround;
var form, player, game;
function setup() {
 createCanvas(1366,653);
 database = firebase.database();
 border = createSprite(683, 327, 260, 90);
    border.shapeColor = "black";
    start = createSprite(683, 327, 250, 80);
    start.shapeColor = "yellow";

    form = new Form();
}

function preload(){
  backGround = loadImage("background.jpg")
}

function draw() {
  background(backGround);
  drawSprites();
  if(gameState === 0){
    textSize(100);
    fill("black");
    text("QUIZZER", 450, 150);
    border.visible = true;
    start.visible = true;
    textSize(50);
    fill("Black");
    text("START", 605, 345);
    form.display();
    if(mousePressedOver(start)){
      gameState = 1;
    }
  }

  if(gameState === 1){
    start.visible = false;
    border.visible = false;
  }
}