/*let boximg, woodbimg, woodwimg, woodgimg;
function preload(){
    boxActivitypreload();
}

function boxActivitypreload(){
    boximg = loadImage("assets/box.png");
    woodbimg = loadImage("assets/wood-brown.png");
    woodwimg = loadImage("assets/wood-white.png");
    woodgimg = loadImage("assets/wood-green.png");    
}
function setup(){
    let canvas2 = createCanvas(windowWidth*0.5, windowHeight*0.5);
    canvas2.classList.add('smallActivityCanvas');
    canvas2.parent('box');
    background('white');
    world.gravity.y = 5;

    enableDebugForAllSprites();
}

function draw(){
    background('white');
}

function enableDebugForAllSprites() {
    for (let sprite of allSprites) {
        sprite.debug = true;
    }
}
let currentSprite = null;
function variableAnswer() {
    let correctBox = document.getElementById('callBox');
    let userAnswer = document.getElementById('inputBox').value.trim(); 
    userAnswer = userAnswer.replace(/\s+/g, '');

    if (userAnswer === 'letbox;') {
        box = new Sprite(100,270,100,100);
        box.img = boximg;
        box.image.scale = 2.5;
        box.width = 100;
        box.height = 20;
        box.collider = 'static';
        correctBox.innerHTML = "Variable 'box' is created!"
    } 

    let answer = document.getElementById('inputVariable').value.trim(); 
    answer = answer.replace(/\s+/g,'');
    let brownValue = document.getElementById('callValue');

    if (currentSprite) {
        currentSprite.remove();
        brownValue.innerHTML = "";
    }

    if (answer === "box='wood-brown';" || answer === 'box="wood-brown";') {
        currentSprite = new Sprite(100, 70, 100, 100);
        currentSprite.img = woodbimg;
        brownValue.innerHTML = "Value 'wood_brown' is added! Value of the Box is wood_brown!";
    } else if (answer === "box='wood-white';" || answer === 'box="wood-white";') {
        currentSprite = new Sprite(100, 70, 100, 100);
        currentSprite.img = woodwimg;
        brownValue.innerHTML = "Value 'wood_white' is added! Value of the Box is wood_white!";
    } else if (answer === "box='wood-green';" || answer === 'box="wood-green";') {
        currentSprite = new Sprite(100, 70, 100, 100);
        currentSprite.img = woodgimg;
        brownValue.innerHTML = "Value 'wood_green' is added! Value of the Box is wood_green!";
    }

    if (currentSprite) {
        currentSprite.image.scale = 1.5;
        currentSprite.width = 100;
        currentSprite.height = 100;
        currentSprite.collider = 'dynamic';
    }
}
*/