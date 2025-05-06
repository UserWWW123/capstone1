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

function preload() {
  doorimg2 = loadImage('/assets/doorOpen_S.png');
  doorimg1 = loadImage('/assets/doorClosed_S.png');
  alienimg = loadImage('/assets/alienGreen_walk1.png');
  keyBoximg = loadImage('/assets/keyBox.png');
  arrowimg = loadImage('/assets/arrow_N.png');
  hitimg = loadImage('/assets/alienGreen_hit.png')
}

function setup() {
  const container = document.getElementById('gameContainer');
  new Canvas(container.offsetWidth, container.offsetHeight);
  world.gravity.y = 10;

  doors = new Group();

  goalDoor = new Sprite(500,200,50,50,'static');
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

  targetDoorS = new Sprite(400, 30, 0, 0,'none');
  targetDoorS.textSize = 20;
  targetDoorS.layer = 2;

  resetGame();
}

function draw() {
  background('#dbb691ff');


  live.text = "Lives: " + lives;
  keys.text = "Keys: " + key;

  targetDoorS.text = "Target: " + targetDoorX;
}

function update() {
  allSprites.debug = true; 
  if (doors.mouse.hovering()) {
    mouse.cursor = 'pointer';
  } else {
    mouse.cursor = 'default';
  }  

  // Game Over
  if (lives <= 0) {
    if (!gameOverS) {
      gameOverS = new Sprite(300, 50, 0, 0, 'static');
      gameOverS.text = "Game Over!";
      gameOverS.textSize = 32;
      gameOverS.color = 'white';
  
      restartButton = new Sprite(400, 100, 100, 100, 'static');
      restartButton.text = "Restart";
      restartButton.textSize = 16;
      restartButton.color = 'lightblue';
    }
  
    if (restartButton.mouse.presses()) {
      resetGame();
      lives = 5;
      key = 0;
  
      gameOverS.remove();
      restartButton.remove();
      gameOverS = null;
      restartButton = null;
    }
  
    return;
  }
  
  if (key>=5){
    alien.moveTo(goalDoor);
    goalDoor.img = doorimg2;
        //Go to next level page
  }

  if (mouse.presses()) {
    for (let i = 0; i < doors.length; i++) {
      if ((doors[i]).mouse.hovering()) {
        if (doors[i] === targetDoor) {
            alien.moveTo(doors[i].x - 50, doors[i].y + 10, 5);

                setTimeout(() => {
                    targetDoor.img = doorimg2;
                    targetDoor.img.scale = 1.8;
                    keyBox.visible = true;
                    keyBox.life = 100;
                    key++;
                }, 1500);
            setTimeout(resetGame, 2000);
            
        } else {
          alien.moveTo(doors[i].x - 50, doors[i].y + 10, 5);
          setTimeout(() => {
            doors[i].img = doorimg2;
            doors[i].img.scale = 1.8;
            doors[i].collider = 'none';
            arrow = new Sprite(doors[i].x, doors[i].y+50, 50,50, 'dynamic');
            arrow.img = arrowimg;
            alien.img = hitimg;
            alien.x -= 50;
            alien.y += 10;
            arrow.vel.x = -10;
            arrow.vel.y = -1;
            arrow.life = 100;
            lives--;
          }, 1500);
      setTimeout(resetGame, 2000);
        }
        break; //If found the clicked door, stop
      }
    }
  };

  let allDoorsOpened = true;
  for (let i = 0; i < doors.length; i++) {
    if (doors[i].img !== doorimg2) {
      allDoorsOpened = false;
      break;
    }
  }
  
  if (allDoorsOpened) {
    setTimeout(resetGame, 1000);
    resetGame();
  }
  
}

function resetGame() {
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
  keyBox = new Sprite(targetDoor.x-15, targetDoor.y+60, 50,50, 'none');
  keyBox.layer = 2;
  keyBox.img = keyBoximg;
  keyBox.visible = false;
}
