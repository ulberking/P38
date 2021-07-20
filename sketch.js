var player,player_move,player_over,track
function preload(){
	track = loadImage("images/Road.png");
	player_move = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
	player_over= loadAnimation("images/mainPlayer3.png");
}
function setup(){
	createCanvas(displayWidth, displayHeight);
    
	player = createSprite(10,10)
	player.addAnimation("SahilRunning",player_move);
	player.scale=0.2
}
function draw(){
	background(0)
	image(track,-displayWidth/2,-displayHeight*0.5,displayWidth*10,displayHeight*2)
	camera.position.x=player.x+displayWidth/4
	player.y = mouseY
	drawSprites();
    player.velocityX=5
}