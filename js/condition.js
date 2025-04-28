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
    let alien, alienimg;
    let blocks;
    
    p.preload = () => {
        alienimg = p.loadImage('/assets/shipYellow.png');
    };
    
    p.setup = () => {
        p.createCanvas(1200, 500);
    
        alien = new p.Sprite(0, 150, 60, 85, 'kinetic'); 
        alien.img = alienimg;
        alien.img.scale = 1.5;
        alien.debug = true;
        
        blocks = new p.Group();
        blocks.x = (i) => p.random(1200);
        blocks.y = (i) => p.random(500);
        blocks.amount = 50;
        blocks.collider = 'static';
        blocks.color = '#FAF3DD';
        blocks.stroke = '#FFA69E';
        blocks.strokeWeight = 2;
        blocks.d = 10;

        createInitialBlocks();
    };
    
    p.draw = () => {
        p.background('#AED9E0');
        alien.moveTowards(p.mouse, 0.02);

        // Check if blocks are out of the camera view and create new blocks
        for (let block of blocks) {
            if (block.x < p.camera.x - p.width / 2 || block.x > p.camera.x + p.width / 2 || block.y < p.camera.y - p.height / 2 || block.y > p.camera.y + p.height / 2) {
                repositionBlock(block);
            }
        }
    };
    
    p.drawFrame = () => {
        p.camera.x = alien.x;
        p.camera.y = alien.y;
    };

    // Function to create blocks
    function createInitialBlocks() {
        for (let i = 0; i < blocks.amount; i++) {
            let block = new p.Sprite(p.random(1200), p.random(500), blocks.d, blocks.d, 'static');
            block.color = blocks.color;
            block.stroke = blocks.stroke;
            block.strokeWeight = blocks.strokeWeight;
            blocks.add(block);
        }
    }

    function repositionBlock(block) {
        // Reset the position of the block to a random position
        block.x = p.random(p.camera.x - p.width / 2, p.camera.x + p.width / 2);
        block.y = p.random(p.camera.y - p.height / 2, p.camera.y + p.height / 2);
    }
};

new p5(s4, 'camera');
