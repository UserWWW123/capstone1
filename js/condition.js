const s1 = (p) => {
    let alien1img, alien2img, alien3img, alien, mouseX, mouseY, mouseSX, mouseSY;

    p.preload = () => {
        alien1img = p.loadImage('/assets/alienBiege_front.png');
        alien2img = p.loadImage('/assets/alienBiege_jump.png');
        alien3img = p.loadImage('/assets/alienBiege_stand.png');
    };

    p.setup = () => {
        p.createCanvas(600, 300);
        alien = new p.Sprite(150, 150, 50, 80);
        alien.img = alien1img;
        alien.scale = 1.5;
        alien.debug = true;
        alien.mouse.active = true;
        alien.collider = 'kinetic';

        mouseX = new p.Sprite(500,40,150,50, 'none');
        mouseY = new p.Sprite(500,110,150,50,'none');
        mouseSX = new p.Sprite(500,180,150,50,'none');
        mouseSY = new p.Sprite(500,250,150,50,'none');
        mouseSX.color = 'white';
        mouseSY.color = 'white';
        mouseX.color = 'white';
        mouseY.color = 'white';

    };

    p.draw = () => {
        p.background(57, 92, 107);
        p.world.gravity.y = 10;

        mouseX.text = p.mouse.x;
        mouseY.text = p.mouse.y;
        mouseSX.text = alien.mouse.x;
        mouseSY.text = alien.mouse.y;

        if (alien.mouse.dragging()) {
            alien.moveTowards(
                p.mouseX + alien.mouse.x,
                p.mouseY + alien.mouse.y,
                1
            );
        }

        if (alien.mouse.hovering()) {
            alien.img = alien2img;
        } else {
            alien.img = alien1img;
        }

        if (p.mouse.x >= 500) {
            alien.collider = 'dynamic';
        }
    };
};

new p5(s1, 'spritemouse');

const s2 = (p) => { //This is the instance mode format. It allows you to create multiple canvases on a single page.
    let alien1img, alien2img, alien3img, alien, mouseX, mouseY;
    let floorimg, crateimg, crates, crate;

    p.preload = () => {
        alien1img = p.loadImage('/assets/alienBiege_front.png');
        alien2img = p.loadImage('/assets/alienBiege_jump.png');
        alien3img = p.loadImage('/assets/alienBiege_stand.png');
        floorimg = p.loadImage('/assets/floor_E.png')
        crateimg = p.loadImage('/assets/crate_E.png');
    };

    p.setup = () => {
        p.createCanvas(600, 300);
        p.world.gravity.y = 10;
        alien = new p.Sprite(150, 150, 50, 80);
        alien.img = alien1img;
        alien.scale = 1.5;
        alien.debug = true;
        alien.mouse.active = true;
        alien.collider = 'dynamic';
        alien.layer = 2;

        floor = new p.Sprite(200,250,300,10);
        floor.img = floorimg;
        floor.collider = 'static';
        floor.debug = true;
        floor.img.scale = 3;
        floor.layer = 1;

        crates = new p.Group(); // A way to group multiple sprites together, similar to how an array works.
        for (let i = 1; i < 6; i++) { //repeat the following 5 times
            crate = new p.Sprite(250, -150+60*i, 50, 39); // create a new sprite
            crate.img = crateimg;
            crate.friction = 0.5;
            crate.layer = 6-i;
            crate.debug = true;
            crates.add(crate); // then add it into the 'crates' group
        }        

        mouseX = new p.Sprite(500,110,150,50, 'none');
        mouseY = new p.Sprite(500,180,150,50,'none');
        mouseX.color = 'white';
        mouseY.color = 'white';

    };

    p.draw = () => {
        p.background(57, 92, 107);
        p.world.gravity.y = 10;

        mouseX.text = p.mouse.x;
        mouseY.text = p.mouse.y;

        if (alien.mouse.pressing()) {
            alien.vel.y = -4;
        };
        for (let crate of crates) { //Find crate inside crates group and do the following to each
            if (crate.mouse.pressing()) {
                crate.moveTowards(
                    p.mouseX + crate.mouse.x,
                    p.mouseY + crate.mouse.y,
                    1
                );

        };
        if (crate.mouse.released()) {
            crate.layer = i;
        }
        crate.text = crate.layer;
    }
    
        if (crates.mouse.hovering()||alien.mouse.hovering()) {
            p.mouse.cursor = 'grab';
        } else {
            p.mouse.cursor = 'wait';
        };      
    };
};

new p5(s2, 'mouse'); //Create the s2 and put it in the div with id 'mouse'

const s3 = (p) => { 
    let alien2, alien1;
    let backgroundimg, ground, grounds, groundS;

    p.preload = () => {
        backgroundimg = p.loadImage('/assets/colored_desert.png');
    };
    
    p.setup = () => {
        p.createCanvas(1200, 500);
        p.world.gravity.y = 20;
    
        alien2 = new p.Sprite(0, 150, 60, 85, 'dynamic'); 
        alien2.addAni('walk', ['/assets/alienYellow_walk1.png', '/assets/alienYellow_walk2.png'], 2);
        alien2.addAni('stand', ['/assets/alienYellow_front.png'], 1);
        alien2.frameDelay = 20;
        alien2.debug = true;
        alien2.rotationLock = true;
        alien2.bounciness = 0;
    
        alien1 = new p.Sprite(150, 150, 60, 95, 'dynamic'); 
        alien1.addAni('walk', ['/assets/alienGreen_walk1.png', '/assets/alienGreen_walk2.png'], 2);
        alien1.addAni('stand', ['/assets/alienGreen_front.png'], 1);
        alien1.frameDelay = 20;
        alien1.debug = true;
        alien1.rotationLock = true;
        alien1.bounciness = 0;
    
        ground = new p.Sprite(600,450,1200,100, 'static');
        ground.color = '#c7b898';
        ground.stroke = '#c7b898';
        ground.friction = 0.8;
    
        grounds = new p.Group();
        for (let i = 1; i < 30; i++) {
            groundS = new p.Sprite(100+300 * i, 400 - 80 * i, 200, 20, 'static');
            groundS.color = '#c7b898';
            groundS.stroke = '#c7b898'; 
            grounds.add(groundS);
            groundS.friction = 0.2;
        };
    };
    
    p.draw = () => {
        p.background(backgroundimg);
    
        if (p.kb.presses('W') && p.kb.pressing('D')) {
            alien2.changeAni('walk');
            alien2.vel.y = -5;
            alien2.vel.x = 2;
            alien2.scale.x = 1.5;
            alien2.scale.y = 1.5;
        }
        else if (p.kb.presses('W') && p.kb.pressing('A')) {
            alien2.changeAni('walk');
            alien2.vel.y = -5;
            alien2.vel.x = -2;
            alien2.scale.x = -1.5;
            alien2.scale.y = 1.5;
        }
        else if (p.kb.pressing('A')) {
            alien2.changeAni('walk');
            alien2.vel.x = -2;
            alien2.scale.x = -1.5;
            alien2.scale.y = 1.5;
        }
        else if (p.kb.pressing('D')) {
            alien2.changeAni('walk');
            alien2.vel.x = 2;
            alien2.scale.x = 1.5;
            alien2.scale.y = 1.5;
        }
        else if (p.kb.presses('W')) {
            alien2.changeAni('stand');
            alien2.vel.y = -5;
            alien2.scale.x = 1.5;
            alien2.scale.y = 1.5;
        }
        else {
            alien2.changeAni('stand');
            alien2.scale.x = 1.5;
            alien2.scale.y = 1.5;
        }
    
        if (p.kb.presses('arrowUp') && p.kb.pressing('arrowRight')) {
            alien1.changeAni('walk');
            alien1.vel.y = -5;
            alien1.vel.x = 2;
            alien1.scale.x = 1.5;
            alien1.scale.y = 1.5;
        }
        else if (p.kb.presses('arrowUp') && p.kb.pressing('arrowLeft')) {
            alien1.changeAni('walk');
            alien1.vel.y = -5;
            alien1.vel.x = -2;
            alien1.scale.x = -1.5;
            alien1.scale.y = 1.5;
        }
        else if (p.kb.pressing('arrowLeft')) {
            alien1.changeAni('walk');
            alien1.vel.x = -2;
            alien1.scale.x = -1.5;
            alien1.scale.y = 1.5;
        }
        else if (p.kb.pressing('arrowRight')) {
            alien1.changeAni('walk');
            alien1.vel.x = 2;
            alien1.scale.x = 1.5;
            alien1.scale.y = 1.5;
        }
        else if (p.kb.presses('arrowUp')) {
            alien1.changeAni('stand');
            alien1.vel.y = -5;
            alien1.scale.x = 1.5;
            alien1.scale.y = 1.5;
        }
        else {
            alien1.changeAni('stand');
            alien1.scale.x = 1.5;
            alien1.scale.y = 1.5;
        }
        
        if (p.kb.presses('S')){
            let block = new p.Sprite(alien2.x+10, alien2.y +20, 50,50);
            block.vel.x = 5;
            block.color = 'white';
            block.stroke = 'white';
        }
    
        if (p.kb.presses('arrowDown')){
            let block = new p.Sprite(alien1.x+10, alien1.y +20, 50,50);
            block.vel.x = 5;
            block.color = 'white';
            block.stroke = 'white';
            block.friction = 0.1;
        }

    };
    p.drawFrame = () =>{
        p.camera.x = alien1.x;
        p.camera.y = alien2.y-100;
        ground.x = p.camera.x;
    }
    
};

new p5(s3, 'keys');

const s4 = (p) => { 
    let alien, alienimg, hitT;
    let blocks, startButton, backgroundimg;
    let gameStarted = false; // To track whether the game has started
    let hit = 0; // To track the hit
    
    p.preload = () => {
        alienimg = p.loadImage('/assets/shipYellow.png');
        backgroundimg = p.loadImage('/assets/uncolored_piramids.png');
    };
    
    p.setup = () => {
        p.createCanvas(1200, 500);
        p.world.gravity.y = 10;
    
        alien = new p.Sprite(-300, 100, 60, 20, 'none'); 
        alien.addCollider(0,-20, 33); //(x-offset, y-offset, diameter)
        alien.addCollider(0,10,60,15);
        alien.addCollider(-23,20,20);//13 left from the center. 20 down from the center. 20 diameter
        alien.addCollider(23,20,20);
        alien.offset.y = -10;
        alien.img = alienimg;
        alien.scale = 1.5;
        alien.debug = true;
        alien.collider = 'dynamic';
        alien.rotationLock = true;
        alien.vel.x = 0;
        alien.friction = 0;
        alien.bounciness = 0;

        hitT = new p.Sprite(70,30,100,30, 'none');
        hitT.color = 'white';
        hitT.stroke = 'white';
        hitT.text = hit;
        
        blocks = new p.Group();
        
        for (let i = 0; i < 100; i++) {
            let gapSize = p.random(60,100); // Make gaps' height bigger/smaller
            let gapY = p.random(150,300); // Gaps location

            let topBlock = new p.Sprite(i*250+200, gapY - gapSize - 250, 100, 500, 'static');
            topBlock.color = '#FAF3DD';
            topBlock.stroke = '#FFA69E';
        
            let bottomBlock = new p.Sprite(i*250+200, gapY + gapSize + 250, 100, 500, 'static');
            bottomBlock.color = '#FAF3DD';
            bottomBlock.stroke = '#FFA69E';
            
            blocks.add(topBlock);   // Add the blocks to the group
            blocks.add(bottomBlock);
        };

        blocks.bounciness = 0;
        startButton = new p.Sprite(alien.x, 250, 200, 100, 'static');
        startButton.color = 'white';
        startButton.stroke = 'white';
        startButton.opacity = 0.5;
        startButton.text = 'Click to start';
        startButton.textSize = 20;
    };
    
    p.draw = () => {
        p.background(backgroundimg);
        if (startButton.mouse.pressed()) {
            startButton.remove();
            gameStarted = true; // Game has started
        };

        if (gameStarted) {
            alien.vel.x = 3; // Set vel.x to 3 only after the game has started
        }

        if (p.mouse.presses()) {
            alien.vel.y = -3;  
        };

        blocks.forEach(block => { // Check collisions with each block individually
            if (alien.collide(block)) {
                hit += 1;  // Increment hit for each collision with a block
            }
        });
        if (hit >=10){
            alien.x = -300;
            hit = 0;
        }
        if (alien.y>600){
            alien.y = 100;
            alien.x = -300;
            hit = 0;
            alien.vel.y = 0;
        }
    };
    
    p.drawFrame = () => {
        p.camera.on();
        p.camera.x = alien.x;  
        alien.draw();
        blocks.draw();

        p.camera.off();
        hitT.text = `Hits: ${hit}`; // Update hit display
        hitT.draw();        
    };
};

new p5(s4, 'camera');
