var R=0, G=0, B=0
var ground, groundImg
var ball, ballImg
var rock, rockImg
var tree, treeImg
var puddle, puddleImg
var obstacle
var r
function preload(){
  groundImg=loadImage("ground.png")
  ballImg=loadImage("ball.png")
  rockImg=loadImage("rock.png")
  treeImg=loadImage("tree.png")
  puddleImg=loadImage("puddle.png")
}
function setup() {
  createCanvas(windowWidth-500,windowHeight);
  ground=createSprite((windowWidth-500)/2, windowHeight+100, windowWidth-500,20);
  ground.addImage(groundImg)
  ground.scale=0.5
 ground.velocityX=-3
 
 ground.setCollider("rectangle",500,60)
 ball=createSprite(50,windowHeight-50)
 ball.addImage(ballImg)
 ball.scale=0.1
}

function draw() {
  //console.log(R)
  background(R,G,B); //FF9A00
  R=R+0.1
  G=G+0.1
  
  if(ground.x<600){
    ground.x=(windowWidth-500)/2
  }
  
  if(keyDown("space")&& ball.y>900){
    ball.velocityY=-10
  }

  ball.velocityY=ball.velocityY+.3
  ball.collide(ground)
  obstacles()
  drawSprites();
}
function obstacles(){
  if(frameCount%200===0){
    r=Math.round(random(1,3))
    console.log(r)
    obstacle=createSprite(windowWidth-300,ground.y-150)
   
    
    obstacle.velocityX=-3
    if(r===1){
      obstacle.addImage(treeImg)
      obstacle.scale=.3
    }
    else if(r===2){
      obstacle.addImage(rockImg)
      obstacle.scale=0.03
    }
  }
  else if(r===3){
    obstacle.addImage(puddleImg)
    obstacle.scale=.25
    obstacle.y=ground.y-120
  }
}