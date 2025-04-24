
let alien1img, floorimg, stairsimg, block2img, blockimg, crateimg, slabimg, doorwayimg, alien2img;
let block1, block2, crate1, crate2, crate3, slab, slab2, doorway, doorway2, alien1;

function preload(){
    alien1img = loadImage('/assets/alienPink_hit.png');
    alien2img = loadImage('/assets/alienPink_front.png');
    floorimg = loadImage('/assets/floor_E.png');
    stairsimg = loadImage('/assets/stairsCornerInner_S.png');
    blockimg = loadImage('/assets/block_E.png');
    crateimg = loadImage('/assets/crate_E.png');
    slabimg = loadImage('/assets/slabAngle_N.png');
    block2img = loadImage('/assets/block_E2.png');
    doorwayimg = loadImage('/assets/doorwayMiddle_W.png');

}

function setup(){
    const container = document.getElementById('gameContainer');
    createCanvas(container.offsetWidth, container.offsetHeight);
    background('#dbb691ff');
    world.gravity.y = 5;

    let stairs = new Sprite(340,400);
    stairs.img = stairsimg;
    stairs.collider = 'static';
    stairs.layer = 2;
    stairs.image.scale = 3;

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
    
    alien1 = new Sprite(330,470);
    alien1.img = alien1img;
    alien1.collider = 'kinetic';
    alien1.image.scale = 1;
    alien1.layer = 3;

    block1 = new Sprite(340,255);
    block1.img = blockimg;
    block1.collider = 'static';
    block1.image.scale = 1.5;
    block1.layer = 4;
    block1.text = "3";
    block1.textSize = 30;
    block1.textColor = color(253, 240, 213);

    block2 = new Sprite(210,150);
    block2.img = block2img;
    block2.collider = 'dynamic';
    block2.img.offset.y = -28;
    block2.img.scale = 1;
    block2.layer = 5;
    block2.text = "4";
    block2.textSize = 30;
    block2.textColor = color(253, 240, 213);

    crate1 = new Sprite(210,290);
    crate1.img = crateimg;
    crate1.collider = 'static';
    crate1.image.scale = 2;
    crate1.layer = 4;
    crate1.text="7";
    crate1.textSize = 30;
    crate1.textColor = color(253, 240, 213);

    crate2 = new Sprite(470,290);
    crate2.img = crateimg;
    crate2.collider = 'static';
    crate2.layer = 4;
    crate2.text = "6";
    crate2.textSize = 30;
    crate2.textColor = color(253, 240, 213);

    crate3 = new Sprite(340,130);
    crate3.img = crateimg;
    crate3.collider = 'static';
    crate3.layer = 4;
    crate3.text = "2";
    crate3.textSize = 30;
    crate3.textColor = color(253, 240, 213);

    slab = new Sprite(280,363);
    slab.img = slabimg;
    slab.collider = 'static';
    slab.image.scale = 3;
    slab.layer = 3;
    slab.img.offset.x = 20;
    slab.img.offset.y = 10;
    slab.text = "9";
    slab.textSize = 30;
    slab.textColor = color(253, 240, 213);

    slab2 = new Sprite(340,0);
    slab2.img = slabimg;
    slab2.collider = 'dynamic';
    slab2.layer = 4;
    slab2.text = "1";
    slab2.textSize = 30;
    slab2.textColor = color(253, 240, 213);

    doorway = new Sprite(340,370);
    doorway.img = doorwayimg;
    doorway.collider = 'static';
    doorway.image.scale = 2;
    doorway.layer = 4;
    doorway.text = "8";
    doorway.textSize = 30;
    doorway.textColor = color(253, 240, 213);

    doorway2 = new Sprite(455,200);
    doorway2.img = doorwayimg;
    doorway2.collider = 'dynamic';
    doorway2.layer = 4;
    doorway2.text = "5";
    doorway2.textSize = 30;
    doorway2.textColor = color(253, 240, 213);

    enableDebugForAllSprites();
}

function draw(){
    background('#dbb691ff');
}

function enableDebugForAllSprites() {
    for (let sprite of allSprites) {
        sprite.debug = true;
    }
}

function update(){
    if (alien1.x === 330 && alien1.y === 230){
        const winmessage = document.getElementById('win').innerHTML = "Mission Accomplished! <br> Go to next level";
        document.getElementById('winNote').style.backgroundColor = "rgba(244, 237, 223, 0.835)";
        const nextButton = document.getElementById('nextButton').innerHTML = '<i class="fa-solid fa-caret-right"></i>';
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
    await delay(500);
    slab2.remove();
    await delay(500);
    crate3.remove();
    await delay(500);
    block1.remove();
    await delay(500);
    block2.remove();
    await delay(500);
    doorway2.remove();
    await delay(500);
    crate2.remove();
    await delay(500);
    crate1.remove();
    await delay(500);
    doorway.remove();
    await delay(500);
    slab.remove();    
    await delay(500);
    alien1.img = alien2img;
    alien1.moveTo(330,230, 2);
}

async function gameFreeze(){
    alien1.x = 330
    alien1.y = 470;
    alien1.img = alien1img;

    block1.x = 340;
    block1.y = 255;
    block1.img = blockimg;

    block2.x = 210;
    block2.y = 150;
    block2.img = block2img;

    crate1.x = 210;
    crate1.y = 290;
    crate1.img = crateimg;

    crate2.x = 470;
    crate2.y = 290;
    crate2.img = crateimg;

    crate3.x = 340;
    crate3.y = 130;
    crate3.img = crateimg;

    slab.x = 280;
    slab.y = 363;
    slab.img = slabimg;

    slab2.x = 340;
    slab2.y = 0;
    slab2.img = slabimg;

    doorway.x = 340;
    doorway.y = 370;
    doorway.img = doorwayimg;

    doorway2.x = 455;
    doorway2.y = 200;
    doorway2.img = doorwayimg;


}
