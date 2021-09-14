var  ironman_run, ironman;
var  bgimg, bg;
var stoneimage, stonegroup;
var diamondgroup,diamondimage,score = 0
var gamestate = true
var spikegroup, spikeimg

function preload(){
    ironman_run = loadImage("images/iron.png",);
    bgimg = loadImage("images/bg.jpg")
    stoneimage = loadImage("images/stone.png")
    diamondimage = loadImage("images/diamond.png")
    spikeimg = loadImage("images/spikes.png")


}

function setup() {
createCanvas(1000, 600);
    bg = createSprite(500,300)
    bg.addImage(bgimg)
    bg.scale = 0.8
  
    ironman = createSprite(200,510,20,50);
    ironman.addImage(ironman_run)
    ironman.scale =  0.2
    
    stonegroup = new Group()
    diamondgroup = new Group()
    spikegroup = new Group()
    
    
}

function draw() {
if(gamestate=true){
    
    

    if(keyDown("up")){
        ironman.y = ironman.y = + 5
    }
    if(keyDown("down")){
        ironman.y = ironman.y = - 5
    }
    if(keyDown("left")){
      ironman.x = ironman.x = + 5
    }
    if(keyDown("right")){
      ironman.x = ironman.x = - 5
    }

    
    
    
    stonegenerate();
    for(var i = 0 ; i < (stonegroup).length; i++){
        var temp = (stonegroup).get(i);
        if(temp.isTouching(ironman)){
            ironman.collide(temp)
        }
        
    }
    generatediamonds()
    for(var i = 0 ; i < (diamondgroup).length; i++){
        var temp = (diamondgroup).get(i);
        if(temp.isTouching(ironman)){
            score++
            temp.destroy()
            temp = null;
        }
        
        
    }
} else if(gamestate=false){

}
    drawSprites();
    textSize(20)
    text("your score is: "+score,500,50,300,30)


}
function stonegenerate(){
    if(frameCount%70 === 0){
        var stone;
        stone = createSprite(1200 ,120,40 ,10)
        stone.x = random(50,450);
        stone.addImage(stoneimage)
        stone.scale = 0.5;
        stone.velocityY = +5
        stone.lifetime = 250
        stonegroup.add(stone)

    }
}
function generatediamonds(){
    if(frameCount%50 === 0){
        var diamond;
        diamond = createSprite(1200 ,120,40 ,10)
        diamond.x = random(50,450);
        diamond.addImage(diamondimage)
        diamond.scale = 0.5;
        diamond.velocityY = -3
        diamond.lifetime = 250
        diamondgroup.add(diamond)

    }
    function spikegenerate(){
        if(frameCount%70 === 0){
            var stone;
            spike = createSprite(1200 ,120,40 ,10)
            spike.x = random(50,450);
            spike.addImage(spikeimage)
            spike.scale = 0.5;
            spike.velocityY = +5
            spike.lifetime = 250
            spikegroup.add(spike)
    
        }
    }


}