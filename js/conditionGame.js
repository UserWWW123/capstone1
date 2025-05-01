let blockimg, slabimg, ladderimg, doorimg1, doorimg2, alienimg, monsterimg1, monsterimg2, monsterimg3, floorimg;
let slab, ladder, door, alien, monster ;
let floors, floor, floor2;
let spritesheet;
let doorways, ground, ground2;
let monsterLife = 10;
let alienLife = 10;
let alienLifeS, monsterLifeS;
let movingRight = true;
let collectBlock = false;
let wallimg, wallimg2, wallimg3, wall1, wall2, wall3, wall4, wall5;

let blocks, blockA;


function preload(){
    floorimg = loadImage('/assets/floor_E.png');
    slabimg = loadImage('/assets/slabAngle_N.png');
    blockimg = loadImage('/assets/block_E.png');
    doorimg1 = loadImage('/assets/doorClosed_S.png');
    doorimg2 = loadImage('/assets/doorOpen_S.png');
    wallimg = loadImage('/assets/wall_W.png');
    wallimg2 = loadImage('/assets/wall_S.png');
    wallimg3 = loadImage('/assets/wallCurve_S.png');

};

function setup(){
    const container = document.getElementById('gameContainer');
    createCanvas(container.offsetWidth, container.offsetHeight);
    background('#dbb691ff');

    world.gravity.y = 15;
    ground = new Sprite(0, 700, 2000, 50);
    ground.collider = 'static';
    ground.friction = 0.5;
    ground.color = '#dbb691ff';
    ground.stroke = '#dbb691ff';

    ground2 = new Sprite(1000, 650, 200, 10);
    ground2.collider = 'static';
    ground2.friction = 1;
    ground2.color = 'white';
    ground2.stroke = '#dbb691ff';
    ground2.rotation = -20;

    wall1 = new Sprite(-50,300,50,50, 'none');
    wall1.img = wallimg;
    wall1.scale = 5;
    wall1.layer = 1;

    wall2 = new Sprite(390,-84,50,50, 'none');
    wall2.img = wallimg3;
    wall2.scale = 5;
    wall2.layer = 0;

    wall3 = new Sprite(830,300,50,50, 'none');
    wall3.img = wallimg2;
    wall3.scale = 5;
    wall3.layer = 1;

    wall4 = new Sprite(1150,600,10, 250, 'static');
    wall4.scale = 5;
    wall4.layer = 1;
    wall4.friction = 0;

    wall5 = new Sprite(-200,600,10, 250, 'static');
    wall5.scale = 5;
    wall5.layer = 1;
    wall5.friction = 0;

    door = new Sprite(1035,545,1,100); //1035
    door.collider = 'static';
    door.img = doorimg1;
    door.scale = 2;
    door.layer = 1;
    door.debug = true;
    door.removeColliders();
    door.addCollider(20,30,50,100);
    door.friction = 0;

    door2 = new Sprite(1025, 470, 140, 1);
    door2.collider = 'static';
    door2.rotation = 27;
    door2.friction = 2;

    alien = new Sprite(90, 150, 0,0, 'dynamic');
    alien.layer = 2;
    alien.rotationLock = true;
    
    alien.addAni('walk', ['/assets/alienYellow_walk1.png', '/assets/alienYellow_walk2.png'], 2);
    alien.addAni('stand', ['/assets/alienYellow_front.png'], 1);
    alien.addAni('duck', ['/assets/alienYellow_duck.png'], 1);
    alien.ani.scale = 1.2;
    alien.addCollider(0,10,60);
    alien.addCollider(-14,40,10,20);
    alien.addCollider(14,40,10,20);
    alien.changeAni('stand');
    alien.anis.offset.y = 8;
    alien.anis.offset.x = 0;
    alien.anis.frameDelay = 20;

    monster = new Sprite(-50, 550, 30, 50, 'dynamic');
    monster.addAni('walk', ["/assets/barnacle.png"], 1);
    monster.addAni('attack', ["/assets/barnacle_attack.png"], ["/assets/barnacle.png"], 2);
    monster.addAni('dead', ["/assets/barnacle_dead.png"], 1);
    monster.anis.frameDelay = 8;
    monster.anis.offset.y = -7;
    monster.scale = 2.5;

    monster.layer = 2;
    monster.rotationLock = true;
    monster.friction = 0;

    floors = new Group();
    for(let i = 0; i<3; i++){
        floor = new floors.Sprite(i*260 +90, 300, 100,10);
        floor2 = new floors.Sprite(i*290-50, 450, 100,10);
        floor.img = floorimg;
        floor2.img = floorimg;
        floor.collider = 'static';
        floor2.collider = 'static';
        floor.layer = 1;
        floor2.layer = 1;
    };
    floors.friction = 0.5;

    slab = new Sprite(200,150,130,10);
    slab.collider = 'static';
    slab.img = slabimg;
    slab.img.scale = 2;
    slab.img.offset.y = 5;
    slab.layer = 1;
    slab.friction = 5;

    blocks = new Group();
    blockA = new blocks.Sprite(200, 80, 50,45);
    blockA.layer = 1;
    blockA.img = blockimg;
    blockA.img.scale = 0.4;
    blockA.img.offset.y = -20;
    blocks.collider = 'dynamic';

    alienLifeS = new Sprite(100,30, 170,30);
    alienLifeS.textSize = 20;
    alienLifeS.collider = 'none';
    alienLifeS.color = '#F5EE9E';
    alienLifeS.stroke = 'white';
    alienLifeS.textColor = '#AB3428';
    alienLifeS.strokeWeight = 2;
    alienLifeS.opacity = 0.7;

    monsterLifeS = new Sprite(100,70, 170,30);
    monsterLifeS.textSize = 20;
    monsterLifeS.collider = 'none';
    monsterLifeS.color = '#F5EE9E';
    monsterLifeS.stroke = 'white';
    monsterLifeS.textColor = '#AB3428';
    monsterLifeS.strokeWeight = 2;
    monsterLifeS.opacity = 0.7;

    
    enableDebugForAllSprites();

}

function draw(){
    background('#dbb691ff');

}
function drawFrame(){


    camera.on();
    camera.x = alien.x +200;
    ground.x = camera.x;   
    wall2.draw();
    wall1.draw();
    wall3.draw();
    door.draw();

    camera.off();
    alienLifeS.draw();
    monsterLifeS.draw();
    
}

function enableDebugForAllSprites() {
    for (let sprite of allSprites) {
        sprite.debug = true;
    }
}

function update(){

    alienLifeS.text = 'Alien Life: '+ alienLife;
    monsterLifeS.text = 'Monster Life: '+ monsterLife;

    //Monster's movement
    //movingRight: remember the currect direction
    if (movingRight === true) { //Default movement: move right
        monster.vel.x = 2;
        if (monster.x >= 800) { //Reached right boundary, switch direction
            movingRight = false;
        }
    } else { 
        monster.vel.x = -2; //Move left
        if (monster.x <= -50) {
            movingRight = true; //Reached left boundary, switch direction
        }
    }    

    //Lose+reset
    if (alienLife <= 0) { 
        alienLife = 10;
        monsterLife = 10;
        alien.x = 90;
        alien.y = 150;
        monster.x = -50;
        monster.y = 550;
    } 

    //Detect collision and response + monster's animation + monster's life 
    if (monsterLife <= 0) { 
        monster.changeAni('dead');
        monster.vel.x = 0;
    } 
    else if (alien.collide(monster)) {
        alienLife -= 1;
        alien.vel.y = -5;
        monster.changeAni('attack');
        blockA.x = 200;
        blockA.y = 80;
        blockA.collider = 'dynamic';
        blockA.rotation = 0;
        
        collectBlock = false;
    
        if (alien.x > monster.x) {
            alien.vel.x = 5;
        } else {
            alien.vel.x = -5;
        }
    }    
    else {
        monster.changeAni('walk');
    }

    
    
    //Count monster's life
    if (monster.collide(blockA)) {
        monsterLife -= 1;
        blockA.vel.x = 0;
        blockA.vel.y = 0;
        blockA.rotation = 0;
        blockA.x = 200;
        blockA.y = 80;
    };


    //Keyboard input + control alien's movement/animation
    if (kb.presses('up')){
        alien.vel.y = -5;
        alien.changeAni('stand');
    };

    if(kb.pressing('right')){
        alien.vel.x = 2.5;
        alien.ani.scale.x = 1;
        alien.changeAni('walk');
    }else if(kb.pressing('left')){
        alien.vel.x = -2.5;
        alien.ani.scale.x = -1;
        alien.changeAni('walk');
    }else{
        alien.changeAni('stand');
    };

    if (kb.pressing('down')&& alien.collides(blockA)) {
        alien.vel.x = 0;
        alien.changeAni('duck');
        alien.anis.offset.y = -20;
        alien.ani.scale.x = 1.2;
        alien.removeColliders(); // Remove previous
        alien.addCollider(0, 10, 60);
        alien.addCollider(-18, 40, 10, 20);
        alien.addCollider(18, 40, 10, 20);
        collectBlock = true;
    }else if (kb.pressing('down')) {
        alien.vel.x = 0;
        alien.changeAni('duck');
        alien.anis.offset.y = -20;
        alien.ani.scale.x = 1.2;
        alien.removeColliders(); // Remove previous
        alien.addCollider(0, 10, 60);
        alien.addCollider(-18, 40, 10, 20);
        alien.addCollider(18, 40, 10, 20);
    }else if (kb.presses('space')){
        if (collectBlock ===true){
        blocks.collider = 'dynamic';
        blocks.vel.x = 5;
        blocks.vel.y = -5;
        blockA.rotationLock = false;
        collectBlock = false;
        }
    }
    else{
        alien.anis.offset.y = 8;
        alien.anis.offset.x = 0;
    };

    //If the block is collected
    if (collectBlock === true) {
        blocks.collider = 'none';
        blockA.x = alien.x+50;  // Set block to start next to alien (only once)
        blockA.y = alien.y+10;  // Set block's y position relative to alien
        blockA.rotationLock = true;  // Lock rotation (only once)
        blockA.rotation = 0;
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

function gameStart(){

}
function gameFreeze(){

}