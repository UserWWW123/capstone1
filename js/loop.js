const s1 = (p) => {
    let floorimg, floor;
    let tiles = [];

    p.preload = () => {
        crateimg = p.loadImage('/assets/crate_E.png');
        stairsimg = p.loadImage('/assets/stairs_E.png');
        doorsimg = p.loadImage('/assets/doorClosed_S.png');
        doorwayimg = p.loadImage('/assets/doorwayMiddle_W.png');
        windowimg = p.loadImage('/assets/window_E.png');
        switchimg = p.loadImage('/assets/switchWallOff_E.png');

        floorimg = p.loadImage('/assets/floor_E.png');
    };

    p.setup = () => {
        p.createCanvas(1000, 400);
        p.world.gravity.y = 10;
        
        for (let i = 0; i < 5; i++) {
            tiles[i] = new p.Sprite(100 + i * 200, 300, 100, 10, 'static');
            tiles[i].img = floorimg;
            tiles[i].scale = 1.5;
        }        
        console.log(tiles);
        p.allSprites.debug = true;

        /*
        let submit2 = document.getElementById('submit_2');
        let response2 = document.getElementById('response_2');

        submit2.addEventListener('click', () => {
            let input2 = document.getElementById('input_2').value.trim();
            input2 = input2.replace(/\s+/g, '');
            response2.innerHTML = '';
        });
        */
        
    };

    p.draw = () => {
        p.background(21, 97, 109);
    
        // Set sequence for tile trap activation
        let tileTrapActivateSequence = [3, 1, 0, 4, 6, 5, 2];
    
        // Loop through the activation sequence and activate traps with a delay
        for (let i = 0; i < tileTrapActivateSequence.length; i++) {
            // Set the delay for each trap activation
            setTimeout(() => {
                activateTrap(tileTrapActivateSequence[i]);
            }, i * 1000+1000); // 1 second delay for each trap (multiplied by i to add a delay for each trap)
        }
    };
    
    // Function to activate the trap at the given index
    function activateTrap(index) {
        if (tiles[index]) {
            tiles[index].collider = 'dynamic'; // Activate the trap by changing the collider to 'dynamic'
        }
    }
    
};

new p5(s1, 'for1');
