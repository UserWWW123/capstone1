
let alien1img, floorimg, stairsimg, block2img, blockimg, crateimg, slabimg, doorwayimg, alien2img;
let arrowimg, wallCorner_Wimg, wallCorner_Eimg, wall_Wimg, wall_Simg, plateoffimg, plateonimg;
let ball, sprite, arrowc, crates;
let ball2, alien1;
let wallCorner_W, wallCorner_E, wall_W, wall_W2, arrow;
let plates;

function preload(){
    alien1img = loadImage('/assets/alienBiege_jump.png');
    floorimg = loadImage('/assets/floor_E.png');

    stairsimg = loadImage('/assets/stairsCornerInner_S.png');
    blockimg = loadImage('/assets/block_E.png');
    crateimg = loadImage('/assets/crate_E.png');
    slabimg = loadImage('/assets/slabAngle_N.png');
    block2img = loadImage('/assets/block_E2.png');
    doorwayimg = loadImage('/assets/doorwayMiddle_W.png');

    arrowimg = loadImage('/assets/arrow_W.png');
    wallCorner_Eimg = loadImage('/assets/wallCorner_E.png');
    wallCorner_Wimg = loadImage('/assets/wallCorner_W.png');
    wall_Wimg = loadImage('/assets/wall_W.png');
    wall_Simg = loadImage('/assets/wall_S.png');
    plateoffimg = loadImage('/assets/switchFloorOff_N.png');
    plateonimg = loadImage('/assets/switchFloorOn_N.png');

}

function setup(){
    const container = document.getElementById('gameContainer');
    createCanvas(container.offsetWidth, container.offsetHeight);
    background('#dbb691ff');
    world.gravity.y = 5;

    plates = new Group();
    crates = new Group();

    let floor = new Sprite(220, 660);
    floor.img = floorimg;
    floor.collider = 'none';
    floor.image.scale = 3;
    floor.layer = 1;
    
    let floor2 = new Sprite(410, 565);
    floor2.img = floorimg;
    floor2.collider = 'none';
    floor2.layer = 1;
    
    let floor3 = new Sprite(25, 565);
    floor3.img = floorimg;
    floor3.collider = 'none';
    floor3.layer = 1;
    
    let floor4 = new Sprite(217, 469);
    floor4.img = floorimg;
    floor4.collider = 'none';
    floor4.layer = 1;
    
    let floor5 = new Sprite(602, 469);
    floor5.img = floorimg;
    floor5.collider = 'none';
    floor5.layer = 1;
    
    let floor6 = new Sprite(409, 373);
    floor6.img = floorimg;
    floor6.collider = 'none';
    floor6.layer = 1;

    ball = new Sprite(600,0);
    ball.d = 100;
    ball.color = '#6b6b6b';
    ball.stroke = 'transparent';
    ball.mass = 1;
    ball.collider = 'static';

    wallCorner_E = new Sprite(200,500);
    wallCorner_E.img = wallCorner_Eimg;
    wallCorner_E.collider = 'none';
    wallCorner_E.scale = 2;
    wallCorner_E.layer = 2;

    wall_W = new Sprite(327,412);
    wall_W.img = wall_Wimg;
    wall_W.collider = 'none';
    wall_W.scale = 2;
    wall_W.layer = 1;

    wall_W2 = new Sprite(327,540);
    wall_W2.img = wall_Wimg;
    wall_W2.collider = 'none';
    wall_W2.scale = 2;
    wall_W2.layer = 3;


    wallCorner_W = new Sprite(454,452);
    wallCorner_W.img = wallCorner_Wimg;
    wallCorner_W.collider = 'none';
    wallCorner_W.scale = 2;
    wallCorner_W.layer = 1;

    alien1 = new Sprite(330,440);
    alien1.img = alien1img;
    alien1.collider = 'none';
    alien1.scale = 1.5;
    alien1.layer = 1;
    
}

function draw(){
    background('#dbb691ff');
}


function update(){
    if (ball2 && arrowc && ball2.collides(arrowc)) {
        ball2.direction = -20;
        ball2.speed = 10;
    }    

    if (wall_W.y <= 120){
        const winmessage = document.getElementById('win').innerHTML = "Mission Accomplished! <br> Go to next level";
        document.getElementById('winNote').style.backgroundColor = "rgba(244, 237, 223, 0.835)";
        const nextButton = document.getElementById('nextButton').innerHTML = '<i class="fa-solid fa-caret-right"></i>';
        }

    if (crates && plates){
        crates.collides(plates, ()=>{
            startMove();
    });
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
      gameStart();
    }else{
      gameFreeze();
    };
  }

function gameStart() {
    stopPreviousMove();

    wallCorner_E.y =500;
    wallCorner_E.collider = 'none';

    wall_W.y = 412;
    wall_W.collider = 'none';


    wall_W2.y = 540;
    wall_W2.collider = 'none';


    wallCorner_W.y = 452;
    wallCorner_W.collider = 'none';


    // Remove previous sprites/groups if they exist

    if (plates) {
        plates.removeAll();
    }
    if (crates) {
        crates.removeAll();
    }
    if (arrow) arrow.remove();
    if (arrowc) arrowc.remove();
    if (ball2) ball2.remove();
    if (ball) ball.remove();
    
    if(arrow){
        arrow.remove();
    }

    ball = new Sprite(600,0);
    ball.d = 100;
    ball.color = '#6b6b6b';
    ball.stroke = 'transparent';
    ball.mass = 1;
    ball.collider = 'static';

    //check the wall position: they have error

    arrow = new Sprite(200,150);
    arrow.img = arrowimg;
    arrow.collider = 'none';
    arrow.img.scale = 3;

    arrowc = new Sprite(200,150, 150,10);
    arrowc.color = 'transparent';
    arrowc.collider = 'static';
    arrowc.stroke = 'transparent';
    arrowc.rotation = 27;

    ball.collider = 'dynamic';
    ball.vel.x = -5;

    ball2 = new Sprite(200,100);
    ball2.d = 50;
    ball2.mass = 20;
    ball2.color = color(57, 92, 107);
    ball2.stroke = color(73, 88, 103);

    setTimeout(()=>{
        if (plates.length > 0) {
            plates.removeAll(); 
        }

        if (crates.length > 0) {
            crates.removeAll(); 
        }

        for (let i = 0; i<6; i++){
            let plate = new Sprite();
            plate.img = plateonimg;
            plate.collider = 'static';
            plate.height = 0.1;
            plate.layer = 5;
            plates.add(plate);
        }
        plates[0].x = 151;
        plates[0].y = 421;
        plates[1].x = 375;
        plates[1].y = 310;
        plates[2].x = 500;
        plates[2].y = 375;
        plates[3].x = 280;
        plates[3].y = 485;
        plates[4].x = 80;
        plates[4].y = 600;
        plates[5].x = 580;
        plates[5].y = 500;
    
        for (let i = 0; i<6; i++){
            let crate = new Sprite();
            crate.img = crateimg;
            crate.collider = 'dynamic';
            crate.height = 40;
            crate.layer = 6;
            crates.add(crate);
        }
        crates[0].x = 151;
        crates[0].y = 421-100;
        crates[1].x = 375;
        crates[1].y = 310-100;
        crates[2].x = 500;
        crates[2].y = 375-100;
        crates[3].x = 280;
        crates[3].y = 485-100;
        crates[4].x = 80;
        crates[4].y = 600-100;
        crates[5].x = 580;
        crates[5].y = 500-100;

    },1000);
    
}
function stopPreviousMove() {
    if (crates) crates.vel.y = 0;
    if (plates) plates.vel.y = 0;
    if (arrow) arrow.vel.y = 0;

    if (wall_W) wall_W.vel.y = 0;
    if (wall_W2) wall_W2.vel.y = 0;
    if (wallCorner_W) wallCorner_W.vel.y = 0;
    if (wallCorner_E) wallCorner_E.vel.y = 0;
}

function startMove() {
    stopPreviousMove(); // cancel previous movement

    plates.collider = () => 'kinetic';

    crates.move(300, 'up', 2);
    crates.collider = () => 'kinetic';

    arrow.move(300, 'up', 2);

    wallCorner_W.move(300, 'up', 2);
    wallCorner_W.collider = 'kinetic';

    wallCorner_E.move(300, 'up', 2);
    wallCorner_E.collider = 'kinetic';

    wall_W.move(300, 'up', 2);
    wall_W.collider = 'kinetic';

    wall_W2.move(300, 'up', 2);
    wall_W2.collider = 'kinetic';
    plates.move(300, 'up', 2);

}


function gameFreeze(){
    stopPreviousMove();

    if (plates) {
        plates.removeAll();
    }
    if (crates) {
        crates.removeAll();
    }
    
    if(arrow){
        arrow.remove();
    }

    ball.x =600;
    ball.y=0;
    ball.collider = 'static';

    wallCorner_E.y =500;

    wall_W.y = 412;

    wall_W2.y = 540;

    wallCorner_W.y = 452;
}
