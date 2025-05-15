let alien;
let crateimg, slabimg, doorimg, doorimg2;
let floor1, floor2, crate1, crate2, crate3;
let door;
let platform1Created = false;
let platform2Created = false;
let platform3Created = false;
let platform4Created = false;
let platform5Created = false;

function preload(){
  crateimg = loadImage('/assets/crate_E.png');
  slabimg = loadImage('/assets/slabAngle_N.png');
  doorimg = loadImage('/assets/doorClosed_S.png');
  doorimg2 = loadImage('/assets/doorOpen_S.png');
}

function setup(){
    new Canvas(865, 750);
    world.gravity.y = 10;

    floor1 = new Sprite(200,650,50,1,'static');
    floor1.scale = 2;
    floor1.img = slabimg;

    door = new Sprite(150,115,25,60,'static');
    door.img = doorimg;
    door.layer = 3;
    door.scale.x = -1.5;
    door.scale.y = 1.5;

    alien = new Sprite(200,600,50,80,'static');

    alien.addAni('walk',[
        '/assets/alienYellow_walk1.png',
        '/assets/alienYellow_walk2.png'], 2
    );
    alien.addAni('stand', ['/assets/alienYellow_front.png'], 1);
    alien.scale = 1;
    alien.layer = 10;
    alien.frameDelay = 20;
    alien.rotationLock = true;
}

function draw(){
    background('#dbb691ff');
    if (alien.collides(floor1) && !platform1Created) {
      floor1 = createSlab(450, 620);
      platform1Created = true; 
    }
  
    if (floor1 && alien.collides(floor1) && !platform2Created) {//if floor2 exists and crate is not created
      crate1 = createCrate(650, 500);
      platform2Created = true; 
    }

    if (crate1 && alien.collides(crate1) && !platform3Created) {
      crate2 = createCrate(450, 400);
      platform3Created = true; 
    }

    if (crate2 && alien.collides(crate2) && !platform4Created) {
      crate3 = createCrate(300, 300);
      platform4Created = true; 
    }

    if (crate3 && alien.collides(crate3) && !platform5Created) {
      floor2 = createSlab(200, 200);
      platform5Created = true; 
    }

    if (floor2 && alien.collides(door)){
      door.img = doorimg2;
    }

    if (door.img ===doorimg2){
      const winmessage = document.getElementById('win').innerHTML = "Mission Accomplished! <br> Go to next level";
        document.getElementById('winNote').style.backgroundColor = "rgba(244, 237, 223, 0.835)";
        const nextButton = document.getElementById('nextButton').innerHTML = '<i class="fa-solid fa-caret-right"></i>';
    }
}

function update(){
  alienMovement();
}

function alienMovement(){
  if (kb.pressing('left')){
    alien.vel.x = -2;
    alien.changeAni('walk');
    alien.scale.x = -1;
  }else if(kb.pressing('right')){
    alien.vel.x = 2;
    alien.changeAni('walk');
    alien.scale.x = 1;
  }else{
    alien.vel.x = 0;
    alien.changeAni('stand');
  }
  
  if (kb.presses('up')){
    alien.vel.y = -5;
  }
}

function createSlab(x, y) {
  let platform = new Sprite(x, y, 50, 1, 'static');
  platform.scale = 2;
  platform.layer = 2;
  platform.img = slabimg;
  return platform;
}

function createCrate(x, y) {
  let platform = new Sprite(x, y, 50, 1, 'static');
  platform.removeColliders();
  platform.addCollider(0,-15,60,1);
  platform.img = crateimg;
  platform.scale = 2;
  platform.layer = 2;
  return platform;
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
        alien.collider = 'dynamic';
    }else{
        alien.collider = 'static';
    }
  }
