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
