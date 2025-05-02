
let doorClosed, alien2, alien3, doorClosedimg, doorOpenedimg, alien1img, alien2img, floorimg, wallimg, alien3img, alien4img;

function preload(){
    doorClosedimg = loadImage('/assets/doorClosed_S.png');
    alien1img = loadImage('/assets/alienBiege_jump.png');
    alien2img = loadImage('/assets/alienBlue_stand.png');
    doorOpenedimg = loadImage('/assets/doorOpen_S.png');
    wallimg = loadImage('/assets/wall_S.png')
    alien3img = loadImage('/assets/alienGreen_climb1.png');
    alien4img = loadImage('/assets/alienGreen_front.png');
    floorimg = loadImage('/assets/floor_E.png');
}

function setup(){
    const container = document.getElementById('gameContainer');
    createCanvas(container.offsetWidth, container.offsetHeight);
    background('#dbb691ff');
    world.gravity.y = 5;

    let floor = new Sprite(220, 560);
    floor.img = floorimg;
    floor.collider = 'none';
    floor.image.scale = 3;
    floor.layer = 1;
    
    let floor2 = new Sprite(410, 465);
    floor2.img = floorimg;
    floor2.collider = 'none';
    floor2.layer = 1;
    
    let floor3 = new Sprite(25, 465);
    floor3.img = floorimg;
    floor3.collider = 'none';
    floor3.layer = 1;
    
    let floor4 = new Sprite(217, 369);
    floor4.img = floorimg;
    floor4.collider = 'none';
    floor4.layer = 1;
    
    let floor5 = new Sprite(602, 369);
    floor5.img = floorimg;
    floor5.collider = 'none';
    floor5.layer = 1;
    
    let floor6 = new Sprite(409, 273);
    floor6.img = floorimg;
    floor6.collider = 'none';
    floor6.layer = 1;
    
    
    let wall = new Sprite(200,400);
    wall.width = 0;
    wall.height = 150;
    wall.img = wallimg;
    wall.collider = 'static';
    wall.image.scale = 2;
    wall.layer = 4;

    let alien1 = new Sprite(200,465);
    alien1.img = alien1img;
    alien1.collider = 'static';
    alien1.image.scale = 1;
    alien1.layer = 5;

    alien2 = new Sprite(300,445);
    alien2.img = alien2img;
    alien2.collider = 'kinetic';
    alien2.image.scale = 1;
    alien2.layer = 3;

    alien3 = new Sprite(550,250);
    alien3.img = alien3img;
    alien3.collider = 'none';
    alien3.image.scale = 1;
    alien3.layer = 1;


    doorClosed = new Sprite(450,250);
    doorClosed.width = 100;
    doorClosed.height = 150;
    doorClosed.img = doorClosedimg;
    doorClosed.collider = 'static';
    doorClosed.image.scale = 2;
    doorClosed.layer = 2;

}

function draw(){
    background('#dbb691ff');
}


function update(){
    if (alien2.position.x === 435 && alien2.position.y === 300) {
        doorClosed.img = doorOpenedimg;
        doorClosed.image.scale = 2;
        alien2.velocity.x = 0;
        alien2.velocity.y = 0;
        alien3.img = alien4img;
        password.remove();

        alien3.moveTo(350,400,2);

        if (alien3.position.x === 350 && alien3.position.y === 400){
            const winmessage = document.getElementById('win').innerHTML = "Mission Accomplished! <br> Go to next level";
                document.getElementById('winNote').style.backgroundColor = "rgba(244, 237, 223, 0.835)";
                const nextButton = document.getElementById('nextButton').innerHTML = '<i class="fa-solid fa-caret-right"></i>';
        }
    }    

}

function checkOrder() {
    const blocksInCodingSection = Array.from(codingSection.children); // get all added block in the coding Section

    if (blocksInCodingSection.length !== ifFunction.length){
        return;
    }

    let allCorrect = true;

    blocksInCodingSection.forEach((block, index) => {
      const blockName = block.querySelector('.draggable').innerText.trim(); // get the block name

      //add correct/wrong effect:
      if (blockName !== ifFunction[index]) {
        block.classList.add('wrong'); 
       block.classList.remove('right'); 
      } else {
        block.classList.remove('wrong');
        block.classList.add('right'); 
      }
    });
    // Check if blocks are in the correct order
    const Correct = allCorrect && blocksInCodingSection.every((block, index) => block.querySelector('.draggable').innerText.trim() === ifFunction[index]);


    if (Correct) {
      //gameStart();
      gameStart();
    }else{
        gameFreeze();
    }
  }

let password;

async function gameStart(){
    alien2.moveTo (435,300,1);
    password = new Sprite();
    password.collider = 'none';
    password.w = 100;
    password.h = 50;
    password.x = 270;
    password.y = 350;
    password.text = "87537979";
    password.textSize = 20;
    password.color = color(208, 214, 179);
    password.stroke = color(247, 247, 247);
    password.strokeWeight = 2;
    password.textColor = color(20, 49, 9);
}

async function gameFreeze(){
    alien2.x = 300;
    alien2.y = 445; 
    password = new Sprite();
    password.collider = 'none';
    password.w = 100;
    password.h = 50;
    password.x = 200;
    password.y = 350;
    password.text = "...";
    password.textSize = 20;
    password.color = color(208, 214, 179);
    password.stroke = color(247, 247, 247);
    password.strokeWeight = 2;
    password.textColor = color(20, 49, 9);

    let response = new Sprite();
    response.collider = 'none';
    response.w = 220;
    response.h = 30;
    response.x = 400;
    response.y = 350;
    response.textSize = 15;
    response.color = color(102, 155, 188);
    response.textColor = 'white';
    response.stroke = color('transparent');
    response.text = "What are you waiting for?";

    let response1 = new Sprite();
    response1.collider = 'none';
    response1.w = 220;
    response1.h = 30;
    response1.x = 400;
    response1.y = 380;
    response1.textSize = 15;
    response1.color = color(102, 155, 188);
    response1.textColor = 'white';
    response1.stroke = color('transparent');
    response1.text = "I need that password—now!";

}
