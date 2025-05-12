const s1 = (p) => {
    let crateimg, crate;
    let floorimg, floorimg2, floor, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floorCollider;

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        floorimg = p.loadImage('/assets/floor_E.png');
        floorimg2 = p.loadImage('/assets/floor_E_half.png');
    };

    p.setup = () => {
        p.createCanvas(740, 300);
        p.world.gravity.y = 10;

        floorCollider = new p.Sprite(740/2, 250, 740, 20, 'static');
        floorCollider.layer = 3;
        floorCollider.color = 'transparent';
        floorCollider.stroke = 'transparent';

        floor = new p.Sprite(150,250,350,50);
        floor.collider = "none";
        floor.img = floorimg;
        floor.img.offset.x = 0;
        floor.img.offset.y = -10;
        floor.img.scale = 3;
        floor.layer = 2;

        floor2 = new p.Sprite(530,250,350,50);
        floor2.collider = "none";
        floor2.img = floorimg;
        floor2.layer = 2;

        floor6 = new p.Sprite(340,345,350,50);
        floor6.collider = "none";
        floor6.img = floorimg;
        floor6.layer = 1;

        floor7 = new p.Sprite(-40,345,350,50);
        floor7.collider = "none";
        floor7.img = floorimg;
        floor7.layer = 1;

        floor3 = new p.Sprite(339,172,350,50);
        floor3.collider = "none";
        floor3.img = floorimg2;
        floor3.img.scale = 3;
        floor3.layer = 1;

        floor4 = new p.Sprite(-40,172,350,50);
        floor4.collider = "none";
        floor4.img = floorimg2;
        floor4.layer = 1;

        floor5 = new p.Sprite(718,172,350,50);
        floor5.collider = "none";
        floor5.img = floorimg2;
        floor5.layer = 1;

        floor8 = new p.Sprite(700,300,350,50);
        floor8.collider = "none";
        floor8.img = floorimg;
        floor8.layer = 1;
    };

    p.draw = () => {
        p.background('#2D3142');

        let submit = document.getElementById('Submit');
        submit.addEventListener('click', () => {
            let valueX = parseFloat(document.getElementById('xInput').value); //Get Input (allow decimal numbers)
            let valueY = parseFloat(document.getElementById('yInput').value);

            let response = document.getElementById('response');
        
            if (!isNaN(valueX) && !isNaN(valueY)) {
                if (crate) {
                    crate.remove();
                }
                response.innerHTML = ''
        
                crate = new p.Sprite();
                crate.scale = 2;
                crate.img = crateimg;
                crate.x = valueX;
                crate.y = valueY;
            } else {
                response.innerHTML = 'Enter numbers!'
            }
        });
           
    };
};

new p5(s1, 'DOMexample');

const s2 = (p) => {
    let crate, crateimg;
    let crates = new p.Group();
    let base, scale, j;
    let floorimg, floorimg2, floor, floor2, floor3, floor4, floor5, floor6, floor7, floor8;
    let position;
    let resetButton;

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        floorimg = p.loadImage('/assets/floor_E.png');
        scaleimg = p.loadImage('/assets/slabAngle_N.png');
        floorimg2 = p.loadImage('/assets/floor_E_half.png');
        
    };

    p.setup = () => {
        p.createCanvas(740, 300);
        p.world.gravity.y = 10;
        p.canvas.style.border = '3px solid rgb(21, 97, 109)'

        position = new p.Sprite(100,20, 150, 30, 'none');
        position.text = 'Crate Position: (0,0);';
        position.color = '#F0DCCA';
        position.stroke = '#696D7D';
        position.textColor = '#696D7D';

        resetButton = new p.Sprite(680,20, 80, 30, 'static');
        resetButton.text = 'Reset!';
        resetButton.color = '#696D7D';
        resetButton.stroke = '#F0DCCA';
        resetButton.textColor = '#F0DCCA';

        base = new p.Sprite(740/2, 300, 700, 20, 'static');
        base.img = floorimg2;
        base.img.scale = 3;
        base.layer = 3;

        scale = new p.Sprite(740/2, 50, 100, 10);
        scale.img = scaleimg;
        scale.img.scale = 2;
        scale.layer = 3;
        scale.addCollider(90, -20, [100, -28]);
        scale.addCollider(-90, -20, [100, 28]);
        scale.friction= 10;

        j = new p.SliderJoint(base, scale);
        j.range = 320;
        j.angle = 90;
        j.layer = 3;

        floor = new p.Sprite(150,250,350,50);
        floor.collider = "none";
        floor.img = floorimg;
        floor.img.offset.x = 0;
        floor.img.offset.y = -10;
        floor.img.scale = 3;
        floor.layer = 2;

        floor2 = new p.Sprite(530,250,350,50);
        floor2.collider = "none";
        floor2.img = floorimg;
        floor2.layer = 2;

        floor6 = new p.Sprite(340,345,350,50);
        floor6.collider = "none";
        floor6.img = floorimg;
        floor6.layer = 1;

        floor7 = new p.Sprite(-40,345,350,50);
        floor7.collider = "none";
        floor7.img = floorimg;
        floor7.layer = 1;

        floor3 = new p.Sprite(339,172,350,50);
        floor3.collider = "none";
        floor3.img = floorimg2;
        floor3.img.scale = 3;
        floor3.layer = 1;

        floor4 = new p.Sprite(-40,172,350,50);
        floor4.collider = "none";
        floor4.img = floorimg2;
        floor4.layer = 1;

        floor5 = new p.Sprite(718,172,350,50);
        floor5.collider = "none";
        floor5.img = floorimg2;
        floor5.layer = 1;

        floor8 = new p.Sprite(700,300,350,50);
        floor8.collider = "none";
        floor8.img = floorimg;
        floor8.layer = 1;

        let submit = document.getElementById('Submit7');
        submit.addEventListener('click', () => {
            createSprite();
        });

    };

    p.draw = () => {
        p.background('#8D9F87');
        // p.allSprites.debug = true;
    
        if (resetButton.mouse.pressed() && resetButton.mouse.hovering()) {
            position.text = 'Crate Position: (0,0);';
            scale.y = 50;
            crates.removeAll();
        }
    };
    

    function createSprite() {
            let valueX = parseFloat(document.getElementById('xInput7').value);
            let valueY = parseFloat(document.getElementById('yInput7').value);
            let response = document.getElementById('response7');
    
            if (!isNaN(valueX) && !isNaN(valueY)) {
                response.innerHTML = '';
    
                crate = new p.Sprite(50,50);
                crate.scale = 0.5;
                crate.img = crateimg;
                crate.x = valueX;
                crate.y = valueY;
                crates.add(crate);
                positionFunction(crate.x, crate.y);
            } else {
                response.innerHTML = 'Enter numbers!';
            }
    }

    function positionFunction(x, y){
        position.text = 'Crate Position: (' + x +',' +y +');';
    }
};

new p5(s2, 'function');

const s3 = (p) => {
let alien;
    p.preload = () => {
        
    };

    p.setup = () => {
        p.createCanvas(300, 300);
        p.world.gravity.y = 10;
        p.canvas.style.border = '3px solid rgb(21, 97, 109)';
        
        //alien = p.loadAnimation('/assets/spritesheet_aliens.png', {width: 128, height: 256, frames: [1, 8, 16, 24, 32, 40, 48, 56]});
        alien = p.loadAnimation('/assets/spritesheet_aliens.png', {width: 128, height: 256, frames: 8}); //width and height of each frame
        alien.scale = 2;
        alien.frameDelay = 10;
    };
    
    p.draw = () => {
        p.background('#8D9F87');
        p.animation(alien, p.width / 2, p.height / 2);
    };
    
    
};

new p5(s3, 'sequence1');

const s4 = (p) => {
    let alien;
        p.preload = () => {
            
        };
    
        p.setup = () => {
            p.createCanvas(300, 300);
            p.world.gravity.y = 10;
            p.canvas.style.border = '3px solid rgb(21, 97, 109)';
            
            alien = p.loadAnimation('/assets/spritesheet_aliens.png', {width: 128, height: 256, frames: [1, 8, 16, 24, 32, 40, 48, 56]});
            alien.scale = 2;
            alien.frameDelay = 10;
        };
        
        p.draw = () => {
            p.background('#8D9F87');
            p.animation(alien, p.width / 2, p.height / 2);
        };
        
        
    };
    
new p5(s4, 'sequence2');

const s5 = (p) => {
    let alien;
        p.preload = () => {
            
        };
    
        p.setup = () => {
            p.createCanvas(300, 300);
            p.world.gravity.y = 10;
            p.canvas.style.border = '3px solid rgb(21, 97, 109)';
            
            alien = p.loadAnimation(
                '/assets/alienGreen_walk1.png',
                '/assets/alienGreen_walk2.png'
            );
            alien.scale = 2;
            alien.frameDelay = 30;
        };
        
        p.draw = () => {
            p.background('#8D9F87');
            p.animation(alien, p.width / 2, p.height / 2);
        };
        
        
    };
    
new p5(s5, 'list');

const s6 = (p) => {
    let alien;
    let ground, backgroundimg;
    p.preload = ()=>{
        backgroundimg = p.loadImage('/assets/uncolored_piramids.png');
    }

    p.setup = () => {
        p.createCanvas(1000, 600);
        p.world.gravity.y = 10;
        p.canvas.style.border = '3px solid rgb(21, 97, 109)';

        // Create the sprite first
        alien = new p.Sprite(p.width / 2, p.height / 2, 50,83);

        // Add animations to the sprite
        alien.addAni('walk', '/assets/alienYellow_walk1.png', '/assets/alienYellow_walk2.png');
        alien.addAni('stand', '/assets/alienYellow_front.png');

        alien.scale = 2;
        alien.frameDelay = 15;
        alien.rotationLock = true;

        ground = new p.Sprite(500,550,1000,100,'static');
        ground.color = '#A0D2DB';
        ground.stroke = 'transparent';
    };

    p.draw = () => {
        //p.allSprites.debug = true;
        p.image(backgroundimg, 0,0,p.width, p.height);

        if (p.kb.pressing('left')) {
            alien.changeAni('walk');
            alien.vel.x = -5;
            alien.scale.x = -2;
        } else if (p.kb.pressing('right')) {
            alien.changeAni('walk');
            alien.vel.x = 5;
            alien.scale.x = 2;
        } else {
            alien.changeAni('stand');
            alien.vel.x = 0;
        }
        if (p.kb.presses('up')){
            alien.vel.y = -5;
        }
    };
};

new p5(s6, 'sprite');
