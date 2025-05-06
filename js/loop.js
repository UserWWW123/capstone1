const s1 = (p) => {
    let floorimg, floor;
    let images = ['/assets/crate_E.png', '/assets/stairs_E.png', '/assets/doorClosed_S.png', '/assets/doorwayMiddle_W.png', '/assets/window_E.png', '/assets/switchWallOff_E.png'];
    let tiles = [];
    let imagesSprites = new p.Group();
    let runCode = false;
    let hasRun = false;

    p.preload = () => {
        floorimg = p.loadImage('/assets/floor_E.png');
    };

    p.setup = () => {
        p.createCanvas(1000, 400);
        p.world.gravity.y = 10;
        
        let submit = document.getElementById('submit');

        submit.addEventListener('click', () => {
            runCode = true;
            hasRun = false;
        
            // Remove old sprites
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].remove();
            }
            for (let i = 0; i < imagesSprites.length; i++) {
                imagesSprites[i].remove();
            }
        
            // Clear existing sprites / groups/ arrays
            tiles = [];              
            imagesSprites.removeAll(); 
        });        
        
    };

    p.draw = () => {
        p.background(21, 97, 109);
    
        if (runCode && !hasRun){
            hasRun = true;
            
            // Create floor sprites
            for (let i = 0; i < 5; i++) {
                tiles[i] = new p.Sprite(100 + i * 200, 300, 100, 10, 'static'); //Create a new sprite with different x positions (x position = 100 + i * 200)
                tiles[i].img = floorimg;
                tiles[i].scale = 1.5;
            }        
    
            // Create sprites for images
            for (let i = 0; i < images.length; i++) {
                let sprite = new p.Sprite(100 + i * 200, 100, 50, 50, 'dynamic'); // Adjust size and type as needed
                sprite.img = images[i]; // Assign image path
                sprite.scale = 1.2; 
                imagesSprites.add(sprite); // Add sprite to group imagesSprites
              }
    
            //Adjust the size of the sprites for doorway and window
            imagesSprites[3].height = 10;
            imagesSprites[4].height = 80;
            imagesSprites[2].height = 80;
            // Create a sprite group in p5play:

        // Set sequence for tile trap activation
        let tileTrapActivateSequence = [3, 1, 0, 4, 6, 5, 2];
    
        // Loop through the activation sequence and activate traps with a delay
        for (let i = 0; i < tileTrapActivateSequence.length; i++) {
            // Set the delay for each trap activation
            setTimeout(function() {
                if(tiles[tileTrapActivateSequence[i]]){ //same as tiles[3] --> tileTrapActivateSequence[0] = 3
                    tiles[tileTrapActivateSequence[i]].collider = 'dynamic'; // Activate the trap
                }
            }, i * 2000+3000); //Start after 1 second and activate each trap every second
        };
        p.allSprites.debug = true;
    };
    };
    
};

new p5(s1, 'for1');

const s2 = (p) => {
    let runCode = false;
    let hasRun = false;
    let base;
    let balls, ball;

    p.preload = () => {
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.world.gravity.y = 10;
      
        let base = new p.Sprite(300, 250, 600, 20, 'static');
        base.color = 'white';
        base.stroke = 'white';        
        base.rotation = 20;

        //console.log(balls);

        //balls[2].color = 'black';
        
        let submit = document.getElementById('submit2');

        submit.addEventListener('click', () => {
            let value = document.getElementById('input2').value.replace(/\s+/g, '');
            let response = document.getElementById('response2');
            response.innerHTML = '';
            if (value === "balls=newGroup();balls.collider='dynamic';balls.color='#C8553D';balls.stroke='#F28F3B';balls.x=50;balls.d=30;for(leti=0;i<10;i++){letball=newballs.Sprite();ball.y=i*200-1800;}" || 
                value === 'balls=newGroup();balls.collider="dynamic";balls.color="#C8553D";balls.stroke="#F28F3B";balls.x=50;balls.d=30;for(let i=0;i<10;i++){let ball=new balls.Sprite();ball.y=i*200-1800;}' ||
                value === "balls=newGroup();balls.collider='dynamic';balls.color='#C8553D';balls.stroke='#F28F3B';balls.x=50;balls.d=30;for(leti=0;i<10;i++){letball=newballs.Sprite();ball.y=i*200-1800;};" || 
                value === 'balls=newGroup();balls.collider="dynamic";balls.color="#C8553D";balls.stroke="#F28F3B";balls.x=50;balls.d=30;for(let i=0;i<10;i++){let ball=new balls.Sprite();ball.y=i*200-1800;};'
            ) {
                balls = new p.Group();
                balls.x = 20;
                balls.collider = 'dynamic';
                balls.color = '#C8553D';
                balls.stroke = '#F28F3B';
              
                for (let i = 0; i < 10; i++) {
                    ball = new balls.Sprite();
                    ball.x = 50;
                    ball.y = i * 200 -1800;
                    ball.d = 30;
                }
                response.innerHTML = 'Correct!';
                response.classList.add('correctReminder');
            }else{
                response.innerHTML = 'Incorrect! Try again.';
                response.classList.add('correctReminder');
            };

        });        
        
    };

    p.draw = () => {
        p.background('#FFD5C2');

    };
};
    
new p5(s2, 'loop');

let boxes, baseR, baseS, j;

const s3 = (p) => {
  p.setup = () => {
    p.createCanvas(600, 400);
    p.world.gravity.y = 10;
    
    createBoxes();

    let submit = document.getElementById('submit_r');
    submit.addEventListener('click', () => {
      let value = document.getElementById('input_r').value;
      let number = parseFloat(value);
      p.allSprites.removeAll();
      createBoxes();

      if (!isNaN(number) && number >= 0 && number < 10) {
        boxes[number].remove();
      } else {
        alert('Please enter a number between 0 and 9.');
      }
    });

    let submit2 = document.getElementById('submit_R');
    submit2.addEventListener('click', () => {
        let value = document.getElementById('input_R').value.replace(/\s+/g, '');
      
        p.allSprites.removeAll();
        createBoxes();
      
        if (value === 'boxes.removeAll();') {
          boxes.removeAll(); 
        };
      });

    let submit3 = document.getElementById('submit_l');
    submit3.addEventListener('click', () => {
        let value = document.getElementById('input_l').value.replace(/\s+/g, '');
        let number = parseFloat(value);
        p.allSprites.removeAll();
        createBoxes();
  
        if (!isNaN(number)) {
          boxes.life =number;
        } else {
          alert('Please enter a number');
        }
      });
      
  };

  p.draw = () => {
    p.background('#FFD5C2');
  };

  function createBoxes() {
    baseR = new p.Sprite(300, 250, 550, 20);
    baseS = new p.Sprite(300, 250, 30, 60, 'kin');
    baseS.offset.y = 20;
  
    j = new p.HingeJoint(baseR, baseS);
    j.maxPower = 0.1;
    j.lowerLimit = -20;
    j.upperLimit = 20;
  
    baseR.color = 'white';
    baseR.stroke = 'white';        
  
    boxes = new p.Group();
    boxes.color = 'white';
    boxes.stroke = 'white';       
  
    for (let i = 0; i < 10; i++) {
      let box = new boxes.Sprite(300, 250, 30, 30);
      box.x = 70 + i * 50;
      box.y = 0;
      box.text = i;
    }
  }
};

new p5(s3, 'remove');
