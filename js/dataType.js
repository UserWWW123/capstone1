const s1 = (p) => {
    let sprite, doorOpenedimg, doorClosedimg;

    p.preload = () => {
        doorOpenedimg = p.loadImage('/assets/doorOpen_S.png');
        doorClosedimg = p.loadImage('/assets/doorClosed_S.png');
    };

    p.setup = () => {
        p.createCanvas(300, 300);
        p.background("#dfe7f4");

        sprite = new p.Sprite(150, 150, 200, 150);
        sprite.collider = "kinetic";
        sprite.img = doorOpenedimg;

        let submit1 = document.getElementById('submit13.i');
        let response = document.getElementById('response13.i');

        submit1.addEventListener('click', () => {
            let userAnswer = document.getElementById('input13.i').value.trim();
            userAnswer = userAnswer.replace(/\s+/g, '');

            if (
                userAnswer === "door.img='/assets/closedDoor.png';" ||
                userAnswer === 'door.img="/assets/closedDoor.png";' ||
                userAnswer === "door.image='/assets/closedDoor.png';" ||
                userAnswer === 'door.image="/assets/closedDoor.png";'
            ) {
                sprite.img = doorClosedimg;
                response.innerHTML = "";
            } else {
                response.innerHTML = "Try Again!";
                sprite.img = doorOpenedimg;
            }
        });
    };

    p.draw = () => {
        p.background("#dfe7f4");
    };
};

new p5(s1, 'p5image');

const s2 = (p) => {
    let sprite, doorOpenedimg, doorClosedimg;

    p.preload = () => {
        doorOpenedimg = p.loadImage('/assets/doorOpen_S.png');
        doorClosedimg = p.loadImage('/assets/doorClosed_S.png');
    };

    p.setup = () => {
        p.createCanvas(300, 300);
        p.background("#dfe7f4");

        sprite = new p.Sprite(150, 150, 200, 150);
        sprite.collider = "kinetic";
        sprite.img = doorOpenedimg;
        sprite.img.offset.y = 10;
        sprite.img.offset.x = -10;

        let submit2 = document.getElementById('submit13.x');
        let submit3 = document.getElementById('submit13.y');

        submit2.addEventListener('click', () => {
            userAnswer = document.getElementById('input13.x').value.trim();
            let numSprites = parseInt(userAnswer);

            if (!isNaN(numSprites)) {
                sprite.img.offset.x = numSprites;
            } else {
                alert("Enter a number!");
            }
        });
        submit3.addEventListener('click', () => {
            userAnswer = document.getElementById('input13.y').value.trim();
            let numSprites2 = parseInt(userAnswer);

            if (!isNaN(numSprites2)) {
                sprite.img.offset.y = numSprites2;
            } else {
                alert("Enter a number!");
            }
        });

    };

    p.draw = () => {
        p.background("#dfe7f4");
    };
};

new p5(s2, 'p5offset');

const s3 = (p) => {
    let sprite, doorOpenedimg, doorClosedimg;

    p.preload = () => {
        doorOpenedimg = p.loadImage('/assets/doorOpen_S.png');
        doorClosedimg = p.loadImage('/assets/doorClosed_S.png');
    };

    p.setup = () => {
        p.createCanvas(300, 300);
        p.background("#dfe7f4");

        sprite = new p.Sprite(150, 150, 200, 150);
        sprite.collider = "kinetic";
        sprite.img = doorOpenedimg;

        let submit1 = document.getElementById('submit13.d');
        let response = document.getElementById('response13.d');

        submit1.addEventListener('click', () => {
            let userAnswer = document.getElementById('input13.d').value.trim();
            userAnswer = userAnswer.replace(/\s+/g, '');

            if (
                userAnswer === "door.debug=true;"
            ) {
                sprite.debug = true;
                response.innerHTML = "";
            } else if (
                userAnswer === "door.debug=false;"
            ){
                sprite.debug = false;
                response.innerHTML = "";
            }else{
                response.innerHTML = "Try Again!";
                sprite.debug = false;
            }
        });
    };

    p.draw = () => {
        p.background("#dfe7f4");
    };
};

new p5(s3, 'p5debug');
