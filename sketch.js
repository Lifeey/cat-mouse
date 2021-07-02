var cat, cat1Img, cat2Img, cat3Img, cat4Img
var mouse, mouse1Img, mouse3Img, mouse4Img, mouse2Img
function preload() {
    //load the images here
    bkgImg = loadImage("images/garden.png")
    cat1Img = loadImage("images/cat1.png")
    mouse1Img = loadAnimation("images/mouse1.png")
    mouseTeasing = loadAnimation("images/mouse2.png","images/mouse3.png")
    catmoving = loadAnimation("images/cat2.png", "images/cat3.png")
    catstop = loadAnimation("images/cat4.png")
    mouse4 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,750,20,20);
cat.addImage(cat1Img)
cat.scale=0.2
mouse = createSprite(100,750,20,20);
mouse.addAnimation("b",mouse1Img)

cat.debug = true
mouse.debug = true
cat.setCollider("circle",0,0,80)
mouse.setCollider("circle",0,0,40)
mouse.scale=0.1



}

function draw() {

    background(bkgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width + mouse.width)/2){
    cat.velocityX = 0
    cat.addAnimation("d", catstop)
    cat.changeAnimation("d")
   mouse.addAnimation("e",mouse4)
   mouse.changeAnimation("e")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode== RIGHT_ARROW ){
    mouse.addAnimation("a",mouseTeasing)
   mouse.changeAnimation("a")
}
if(keyCode== LEFT_ARROW ){
  cat.addAnimation("c", catmoving)
  cat.changeAnimation("c")
  cat.velocityX = -2

}
}
