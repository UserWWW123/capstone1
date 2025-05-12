let targetDoorX;
let lives = 5, key = 0;
let targetDoor;
let alien;
let doorimg2, alienimg, doorimg1;
let gameOverS;
let doors;
let live, keys;
let targetDoorS;
let keyBoximg, keyBox;
let arrow, arrowimg;
let hitimg;
let goalDoor;
let restartButton;
let gameStart = false;
let gameReset = false; 

function preload() {
  doorimg2 = loadImage('/assets/doorOpen_S.png');
  doorimg1 = loadImage('/assets/doorClosed_S.png');
  alienimg = loadImage('/assets/alienGreen_walk1.png');
  keyBoximg = loadImage('/assets/keyBox.png');
  arrowimg = loadImage('/assets/arrow_N.png');
  hitimg = loadImage('/assets/alienGreen_hit.png');
}

function setup() {
  new Canvas(865, 750);
  world.gravity.y = 10;

  doors = new Group();

  goalDoor = new Sprite(500, 200, 50, 50, 'static');
  goalDoor.img = doorimg1;

  alien = new Sprite(200, 500, 50, 50, 'kin');
  alien.img = alienimg;
  alien.layer = 2;

  live = new Sprite(70, 30, 100, 30, 'none');
  live.textSize = 20;
  live.color = 'white';
  live.opacity = 0.8;
  live.stroke = 'white';

  keys = new Sprite(200, 30, 100, 30, 'none');
  keys.textSize = 20;
  keys.color = 'white';
  keys.opacity = 0.8;
  keys.stroke = 'white';

  targetDoorS = new Sprite(400, 30, 0, 0, 'none');
  targetDoorS.textSize = 20;
  targetDoorS.layer = 2;

  gameReset = true; //create Doors
}

function draw() {
  background('#dbb691ff');

  live.text = "Lives: " + lives;
  keys.text = "Keys: " + key;

  // Debug --> need to change later
  //targetDoorS.text = "Target: " + targetDoorX;
}

function update() {
//gameReset
  if (gameReset) {
    //Remove and create new doors + target door
    doors.removeAll();
    doors.layer = 1;
    doors.img = doorimg1;
    doors.img.scale = 1.8;
    alien.img = alienimg;

    targetDoorX = floor(random(0, 4));

    for (let i = 0; i < 4; i++) {
      let door = new doors.Sprite(160 * i + 90, i * 100 + 200, 140, 100, 'kin');
      door.doorIndex = i;
      door.text = i;
    }

    targetDoor = doors[targetDoorX];
    keyBox = new Sprite(targetDoor.x - 15, targetDoor.y + 60, 50, 50, 'none');
    keyBox.layer = 2;
    keyBox.img = keyBoximg;
    keyBox.visible = false;

    gameReset = false; //Set reset to false for next reset toggle
  }

  // Mouse cursor change
  if (gameStart && doors.mouse.hovering()) {
    mouse.cursor = 'pointer';
  } else {
    mouse.cursor = 'default';
  }

  // Game Over
  if (lives <= 0) {
    if (!gameOverS) {
      alien.x = 200;
      alien.y = 500;
      gameOverS = new Sprite(865 / 2, 760 / 2 - 50, 200, 100, 'none');
      gameOverS.text = "Game Over!";
      gameOverS.textSize = 32;
      gameOverS.color = 'transparent';
      gameOverS.stroke = 'transparent';

      restartButton = new Sprite(865 / 2, 760 / 2 + 50, 200, 100, 'static');
      restartButton.text = "Restart";
      restartButton.textSize = 32;
      restartButton.color = '#2D3142';
      restartButton.stroke = 'transparent';
      restartButton.textColor = 'white';
    }

    if (restartButton.mouse.presses()) {
      // Game Restart + reset
      gameReset = true; 
      lives = 5;
      key = 0;

      gameOverS.remove();
      restartButton.remove();
      gameOverS = null;
      restartButton = null;
    }
    return;
  }

  //Win+next page
  if (key >= 5) {
    alien.moveTo(490, 200 + 30, 5);
    goalDoor.img = doorimg2;
    const winmessage = document.getElementById('win').innerHTML = "Mission Accomplished! <br> Go to next level";
        document.getElementById('winNote').style.backgroundColor = "rgba(244, 237, 223, 0.835)";
        const nextButton = document.getElementById('nextButton').innerHTML = '<i class="fa-solid fa-caret-right"></i>';
  }

  // Doors pressed --> aien movement
  if (gameStart && mouse.pressed()) {
    for (let i = 0; i < doors.length; i++) {
      if (doors[i].mouse.hovering()) {
        if (doors[i] === targetDoor) {
          alien.moveTo(doors[i].x - 50, doors[i].y + 10, 5);

          setTimeout(() => {
            targetDoor.img = doorimg2;
            targetDoor.img.scale = 1.8;
            keyBox.visible = true;
            keyBox.life = 100;
            key++;
          }, 1500);
          setTimeout(() => gameReset = true, 2000);
        } else {
          alien.moveTo(doors[i].x - 50, doors[i].y + 10, 5);
          setTimeout(() => {
            doors[i].img = doorimg2;
            doors[i].img.scale = 1.8;
            doors[i].collider = 'none';
            arrow = new Sprite(doors[i].x, doors[i].y + 50, 50, 50, 'dynamic');
            arrow.img = arrowimg;
            alien.img = hitimg;
            alien.x -= 50;
            alien.y += 10;
            arrow.vel.x = -10;
            arrow.vel.y = -1;
            arrow.life = 100;
            lives--;
          }, 1500);
          setTimeout(() => gameReset = true, 2000); //Game reset after selected door
        }
        break;
      }
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
      gameStart = true;
  }else{
      gameStart = false;
  }
}