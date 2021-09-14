var  mario_run, mario;
var  bgimg, bg;
var brickimage, brickgroup;

function preload(){
    mario_run = loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png",);
    bgimg = loadImage("images/bgnew.jpg")
    brickimage = loadImage("images/brick.png")

}

function setup() {
createCanvas(1000, 600);
    bg = createSprite(500,300)
    bg.addImage(bgimg)
    bg.scale = 0.5
    bg.velocityX = -5;
    mario = createSprite(200,510,20,50);
    mario.addAnimation("running",mario_run)
    mario.scale =  0.3
    ground = createSprite(200,580,500,10)
    ground.visible = false
    brickgroup = new Group()
    
}

function draw() {
    if(bg.x <100 ){
        bg.x = bg.width/4
    }
    if(mario.x < 200){
        mario.x = 200;
    }
    if(mario.y < 50){
        mario.y = 50;
    }

    if(keyDown("up")){
        mario.velocityY = - 8
    }
    mario.velocityY += 0.5
    mario.collide(ground)
    
    brickgenerate();
    for(var i = 0 ; i < (brickgroup).length; i++){
        var temp = (brickgroup).get(i);
        if(temp.isTouching(mario)){
            mario.collide(temp)
        }
        
    }
    drawSprites();

}
function brickgenerate(){
    if(frameCount%70 === 0){
        var brick;
        brick = createSprite(1200 ,120,40 ,10)
        brick.y = random(50,450);
        brick.addImage(brickimage)
        brick.scale = 0.5;
        brick.velocityX = -5
        brick.lifetime = 250
        brickgroup.add(brick)

    }
}
