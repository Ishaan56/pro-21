var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor= 'yellow';

    block2 = createSprite(250,580,200,30);
    block2.shapeColor = 'blue';

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = 'green';

    block4 = createSprite(750,580,200,30);
    block4.shapeColor = 'red';

    box = createSprite(350,20,30,40);
    box.x = Math.round(random(20,750));
    box.velocityY = 5;
    box.velocityX = 3;

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(isTouching(box,block1) && box.bounceOff(block1)){

        box.shapeColor = block1.shapeColor;
        box.velocityY = 0;
        box.velocityX = 0;
    }

    if(isTouching(box,block2) && box.bounceOff(block2)){
        box.shapeColor = block2.shapeColor;
       
    }

    if(isTouching(box,block3) && box.bounceOff(block3)){
        box.shapeColor = block3.shapeColor;
       
    }
    
    if(isTouching(box,block4) && box.bounceOff(block4)){
        box.shapeColor = block4.shapeColor;
        
    }

    drawSprites();
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
