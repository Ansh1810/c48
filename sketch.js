var ground,  bg, player, playerImage, star, starImage;
var brick1, brick2,  brickImage, score = 0, levelsPassed = 0; 


function preload(){
bg = loadImage("bgg.jpg")
playerImage = loadAnimation("run 1.png", "run 2.png", "run 3.png", "run 4.png")
starImage = loadImage("starr.png")
brickImage = loadImage("brick.jpg")
leftIdleImg = loadAnimation("left idle.png")
rightIdleImg = loadAnimation("right idle.png")
doorImage = loadImage("Door1.png")
starSound = loadSound("starSnd.wav")
}
function setup(){
createCanvas(displayWidth,displayHeight- 120 )

ground = createSprite(displayWidth/2, displayHeight/2+253, displayWidth, 20);

bg1 = createSprite (displayWidth/2, displayHeight-459);
bg1.addImage("bg0", bg)
bg1.scale = 2.3;
 

player = createSprite (displayWidth/4-210, displayHeight-217);
player.addAnimation("bg0", leftIdleImg )
player.scale = 4 ;

dooor = createSprite (displayWidth/4+969, displayHeight-268);
dooor.addImage("dooor", doorImage )
dooor.scale = 1.8 ;
 
 
star = createSprite (displayWidth/2, displayHeight-509);
star.addImage("star", starImage)
star.scale = 0.05;

brick1 = createSprite (displayWidth/2 - 128, displayHeight-300);
brick1.addImage("b", brickImage)
brick1.scale = 0.27;

brick2 = createSprite (displayWidth/1.7 +50, displayHeight-350);
brick2.addImage("b2", brickImage)
brick2.scale = 0.27;

brick3 = createSprite (displayWidth/2 - 128, displayHeight-300);
brick3.addImage("b", brickImage)
brick3.scale = 0.27;

brick4 = createSprite (displayWidth/1.7 +50, displayHeight-540);
brick4.addImage("b2", brickImage)
brick4.scale = 0.27;

brick5 = createSprite (displayWidth/1.7 +50, displayHeight-350);
brick5.addImage("b2", brickImage)
brick5.scale = 0.27;

brick6 = createSprite (displayWidth/2 - 128, displayHeight-300);
brick6.addImage("b", brickImage)
brick6.scale = 0.27;

brick7 = createSprite (displayWidth/1.7 +50, displayHeight-540);
brick7.addImage("b2", brickImage)
brick7.scale = 0.27;

brick8 = createSprite (displayWidth/1.7 +50, displayHeight-350);
brick8.addImage("b2", brickImage)
brick8.scale = 0.27;

brick9 = createSprite (displayWidth/2 - 128, displayHeight-300);
brick9.addImage("b", brickImage)
brick9.scale = 0.27;

brick10 = createSprite (displayWidth/1.7 +50, displayHeight-540);
brick10.addImage("b2", brickImage)
brick10.scale = 0.27;

star2 = createSprite (displayWidth/2, displayHeight-509);
star2.addImage("star", starImage)
star2.scale = 0.05;

star3 = createSprite (displayWidth/1.3111111111111111111111111111111111111111, displayHeight-509);
star3.addImage("star", starImage)
star3.scale = 0.05;
}
function draw(){
background(0)
if(keyDown("space")){
player.y = player.y - 50;

}

player.velocityY = player.velocityY + 0.5

if(keyDown("LEFT_ARROW")){
player.x = player.x - 6
player.changeAnimation("run", playerImage)
}
if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 6
    player.changeAnimation("run", playerImage)
    }
player.collide(ground) 
player.collide(brick1) 
player.collide(brick2)

console.log(player.depth) 
console.log(dooor.depth)  
player.depth = dooor.depth+1;

if(player.isTouching(star)){
star.destroy();
score = score + 1;
starSound.play();
}

brick3.visible = false;
brick4.visible = false;
brick5.visible = false;
brick6.visible = false;
brick7.visible = false;
brick8.visible = false;
brick9.visible = false;
brick10.visible = false;
star2.visible = false;
star3.visible = false;
if(player.isTouching(dooor)){
player.x = displayWidth/4-210;
player.y = displayHeight-217;
brick1.destroy();
brick2.destroy();
star.destroy();
levelsPassed = levelsPassed + 1

}

//llevelll 11111


if(levelsPassed===1){
    player.collide(brick3) 
    player.collide(brick4)
    brick3.visible = true;
brick4.visible = true;

if(player.isTouching(star2)){
    star2.destroy();
    score = score + 1;
    starSound.play();
    }
    star2.visible = true;
    star3.visible = true;
    if(player.isTouching(star3)){
        star3.destroy();
        score = score + 1;
        starSound.play();
        }

        // nexxxxxxxxt levellllllllllllllllllllllllllll

        if(levelsPassed===2){
            player.collide(brick5) 
            player.collide(brick6)
            player.collide(brick7) 
    player.collide(brick8)
    player.collide(brick9) 
    player.collide(brick10)   
  
                }
}
drawSprites();
textSize(24);
fill(255)
text("Stars collected "+score, displayWidth/4 + 824.45695433469067221435468 , 100);
text("Levels completed "+levelsPassed, displayWidth/16 + 824.45695433469067221435468 , 100);
}

