var fixedrect, movingrect

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "yellow"; 
  movingrect = createSprite(56, 55, 50, 50);
  movingrect.shapeColor = "yellow";
}

function draw() {
  background(0);
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 
  && movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 
  && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
   movingrect.shapeColor = "Red";
   fixedrect.shapeColor = "Blue";
  }
  else{
    fixedrect.shapeColor = "white";
    movingrect.shapeColor = "white";
  }
  drawSprites();
}