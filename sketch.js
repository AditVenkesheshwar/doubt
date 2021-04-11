var bg,backgroundIMG;

function preload() {
    //load the images here

    bg = loadImage("garden.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    backgroundIMG = createSprite(400,400,10,10);
    backgroundIMG.addImage(bg);


    


   
}

function draw() {

    background(200);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
