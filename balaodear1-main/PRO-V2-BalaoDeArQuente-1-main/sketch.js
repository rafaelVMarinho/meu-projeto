var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3


function preload(){
bgImg = loadImage('assets/bg.png')
balloonImg = loadAnimation('assets/balloon1.png','assets/balloon2.png','assets/balloon3.png')
}

function setup(){
bg = createSprite(165,485)
bg.addImage("bgImage",bgImg)
bg.scale=1.3
balloon = createSprite(50,200)
balloon.addAnimation('baloon',balloonImg)
balloon.scale = 0.2
balloon.setCollider("rectangle",0,0,balloon.width,balloon.height);
balloon. debug = false
//imagem de plano de fundo


//criando canto superior e inferior



      
//criando o balão     




}

function draw() {
  
  background("black");
        
          //fazendo o balão de ar quente pular
          

          //adicionando gravidade
          if(keyDown("space")&& balloon.y ) {
            balloon.velocityY = -8;
            //jumpSound.play();
        }
        balloon.velocityY = balloon.velocityY + 0.8
        
        if(balloon.position.y <= 10 || balloon.position.y >= 400){
balloon.velocityY = 0
 
        }
        drawSprites();
        
}
