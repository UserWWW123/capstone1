
const s1 = (p) => {
    let shipYellowimg, alienGreenimg, alienBiegeimg, alienYellowimg, shipYellowimg2;
    let currentSprite = null;

    p.preload = () => {
        shipYellowimg = p.loadImage("assets/ufoYellow.png");
        shipYellowimg2 = p.loadImage("assets/ufoYellow_damage2.png");
        alienBiegeimg = p.loadImage("assets/alienBiege_front.png");
        alienGreenimg = p.loadImage("assets/alienGreen_front.png");
        alienYellowimg = p.loadImage("assets/alienYellow_front.png");
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("white");
        p.world.gravity.y = 10;
        let correctUFO = document.getElementById('callUFO');
        let UFOButton = document.getElementById('submitUFOName');

        UFOButton.addEventListener("click", () =>{
                    let userAnswer = document.getElementById('inputUFO').value.trim(); 
        userAnswer = userAnswer.replace(/\s+/g, '');
        if (userAnswer === 'letufo;') {
            shipYellow = new p.Sprite(100,270);
            shipYellow.img = shipYellowimg;
            shipYellow.image.scale = 2.5;
            shipYellow.width = 100;
            shipYellow.height = 20;
            shipYellow.collider = 'static';
            shipYellow.debug = true;
            correctUFO.innerHTML = "Variable 'ufo' is created!"
        } 
        })

        let alienValue = document.getElementById('callAlien');
        let alienButton = document.getElementById('submitAlien');
        
        alienButton.addEventListener("click", () => {
            let answer = document.getElementById('inputAlien').value.trim(); 
            answer = answer.replace(/\s+/g,'');
        if (currentSprite) {
            currentSprite.remove();
            alienValue.innerHTML = "";
        }

        if (answer === "ufo='alien_Biege';" || answer === 'ufo="alien_Biege";') {
            currentSprite = new p.Sprite(100, 70);
            currentSprite.img = alienBiegeimg;
            alienValue.innerHTML = "Value 'alien_Biege' is added! Value of the ufo is alien_Biege!";
        } else if (answer ===  "ufo='alien_Yellow';" || answer ===  'ufo="alien_Yellow";') {
            currentSprite = new p.Sprite(100, 70);
            currentSprite.img = alienYellowimg;
            alienValue.innerHTML = "Value 'alien_Yellow' is added! Value of the ufo is alien_Yellow!";
        } else if (answer ===  "ufo='alien_Green';" || answer ===  'ufo="alien_Green";') {
            currentSprite = new p.Sprite(100, 70);
            currentSprite.debug = true;
            currentSprite.img = alienGreenimg;
            alienValue.innerHTML = "Value 'alien_Green' is added! Value of the ufo is alien_Green!";
        }
        if (currentSprite) {
            currentSprite.image.scale = 1.5;
            currentSprite.width = 100;
            currentSprite.height = 140;
            currentSprite.collider = 'dynamic';
        }
        })

    };

    p.draw = () => {
        p.background("white");
    };

};
new p5(s1, 'overlapVariableDeclaration');


const s2 = (p) => {
    let boximg, woodbimg, woodwimg, woodgimg;
    let currentSprite = null;

    p.preload = () => {
        boximg = p.loadImage("assets/box.png");
        woodbimg = p.loadImage("assets/wood-brown.png");
        woodwimg = p.loadImage("assets/wood-white.png");
        woodgimg = p.loadImage("assets/wood-green.png");    
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("white");
        p.world.gravity.y = 10;

        let correctBox = document.getElementById('callBox');
        let variableButton = document.getElementById('submitBoxName');

        variableButton.addEventListener("click", () =>{
                    let userAnswer = document.getElementById('inputBox').value.trim(); 
        userAnswer = userAnswer.replace(/\s+/g, '');
        if (userAnswer === 'letbox;') {
            box = new p.Sprite(100,270,100,100);
            box.img = boximg;
            box.image.scale = 2.5;
            box.width = 100;
            box.height = 20;
            box.collider = 'static';
            correctBox.innerHTML = "Variable 'box' is created!"
        } 
        })

        let brownValue = document.getElementById('callValue');
        let boxButton = document.getElementById('submitVariableName');
        
        boxButton.addEventListener("click", () => {
            let answer = document.getElementById('inputVariable').value.trim(); 
            answer = answer.replace(/\s+/g,'');
        if (currentSprite) {
            currentSprite.remove();
            brownValue.innerHTML = "";
        }

        if (answer === "box='wood-brown';" || answer === 'box="wood-brown";') {
            currentSprite = new p.Sprite(100, 70, 100, 100);
            currentSprite.img = woodbimg;
            brownValue.innerHTML = "Value 'wood_brown' is added! Value of the Box is wood_brown!";
        } else if (answer === "box='wood-white';" || answer === 'box="wood-white";') {
            currentSprite = new p.Sprite(100, 70, 100, 100);
            currentSprite.img = woodwimg;
            brownValue.innerHTML = "Value 'wood_white' is added! Value of the Box is wood_white!";
        } else if (answer === "box='wood-green';" || answer === 'box="wood-green";') {
            currentSprite = new p.Sprite(100, 70, 100, 100);
            currentSprite.img = woodgimg;
            brownValue.innerHTML = "Value 'wood_green' is added! Value of the Box is wood_green!";
        }
        if (currentSprite) {
            currentSprite.image.scale = 1.5;
            currentSprite.width = 100;
            currentSprite.height = 100;
            currentSprite.collider = 'dynamic';
        }
        })


    };

    p.draw = () => {
        p.background("white");
    };
};
new p5(s2, 'box'); 

const s3 = (p) => {
    let shipYellowimg, alienGreenimg, alienBiegeimg, alienYellowimg, shipYellowimg2;
    let currentSprite = null;
    let spriteCount = 0;

    p.preload = () => {
        shipYellowimg = p.loadImage("assets/ufoYellow.png");
        shipYellowimg2 = p.loadImage("assets/ufoYellow_damage2.png");
        alienBiegeimg = p.loadImage("assets/alienBiege_front.png");
        alienGreenimg = p.loadImage("assets/alienGreen_front.png");
        alienYellowimg = p.loadImage("assets/alienYellow_front.png");
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("white");
        p.world.gravity.y = 10;
        let correctUFO = document.getElementById('callUFO2');
        let UFOButton = document.getElementById('submitUFOName2');

        UFOButton.addEventListener("click", () =>{
                    let userAnswer = document.getElementById('inputUFO2').value.trim(); 
        userAnswer = userAnswer.replace(/\s+/g, '');
        if (userAnswer === 'constufo;') {
            shipYellow = new p.Sprite(100,270);
            shipYellow.img = shipYellowimg;
            shipYellow.image.scale = 2.5;
            shipYellow.width = 100;
            shipYellow.height = 20;
            shipYellow.collider = 'static';
            shipYellow.debug = true;
            correctUFO.innerHTML = "Variable 'ufo' is created!"
        } 
        })

        let alienValue = document.getElementById('callAlien2');
        let alienButton = document.getElementById('submitAlien2');
        
        alienButton.addEventListener("click", () => {
            let answer = document.getElementById('inputAlien2').value.trim(); 
            answer = answer.replace(/\s+/g,'');

        if (answer === "ufo='alien_Biege';" || answer === 'ufo="alien_Biege";') {
            alienBiege = new p.Sprite(100, 70);
            alienBiege.img = alienBiegeimg;
            alienValue.innerHTML = "Value 'alien_Biege' is added! Value of the ufo is alien_Biege!";
            alienBiege.image.scale = 1.5;
            alienBiege.width = 100;
            alienBiege.height = 140;
            alienBiege.collider = 'dynamic';
            spriteCount++;
        } else if (answer ===  "ufo='alien_Yellow';" || answer ===  'ufo="alien_Yellow";') {
            alienYellow = new p.Sprite(100, 70);
            alienYellow.img = alienYellowimg;
            alienValue.innerHTML = "Value 'alien_Yellow' is added! Value of the ufo is alien_Yellow!";
            alienYellow.image.scale = 1.5;
            alienYellow.width = 100;
            alienYellow.height = 140;
            alienYellow.collider = 'dynamic';
            spriteCount++;
        } else if (answer ===  "ufo='alien_Green';" || answer ===  'ufo="alien_Green";') {
            alienGreen = new p.Sprite(100, 70);
            alienGreen.debug = true;
            alienGreen.img = alienGreenimg;
            alienValue.innerHTML = "Value 'alien_Green' is added! Value of the ufo is alien_Green!";
            alienGreen.image.scale = 1.5;
            alienGreen.width = 100;
            alienGreen.height = 140;
            alienGreen.collider = 'dynamic';
            spriteCount++;
        }
        })

    };

    p.draw = () => {
        p.background("white");
        if (spriteCount>1){
            shipYellow.img = shipYellowimg2;
            shipYellow.image.scale = 2.5;
            let alienValue = document.getElementById("callAlien2");
            alienValue.innerHTML = "A 'const' variable cannot be reassigned once it is assigned a value! To assign a new value, you must delete the existing value and type your new value. Restart the page and choose a new value to try again!";
        }
    };

};
new p5(s3, 'overlapVariableDeclaration2');

const s4 = (p) => {
    let shipYellowimg, alienGreenimg, alienBiegeimg, alienYellowimg, shipYellowimg2;
    let currentSprite = null;

    p.preload = () => {
        shipYellowimg = p.loadImage("assets/ufoYellow.png");
        shipYellowimg2 = p.loadImage("assets/ufoYellow_damage2.png");
        alienBiegeimg = p.loadImage("assets/alienBiege_front.png");
        alienGreenimg = p.loadImage("assets/alienGreen_front.png");
        alienYellowimg = p.loadImage("assets/alienYellow_front.png");
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("white");
        p.world.gravity.y = 10;
        let correctUFO = document.getElementById('callUFO3');
        let UFOButton = document.getElementById('submitUFOName3');

        UFOButton.addEventListener("click", () =>{
                    let userAnswer = document.getElementById('inputUFO3').value.trim(); 
        userAnswer = userAnswer.replace(/\s+/g, '');
        if (userAnswer === 'varufo;') {
            shipYellow = new p.Sprite(100,270);
            shipYellow.img = shipYellowimg;
            shipYellow.image.scale = 2.5;
            shipYellow.width = 100;
            shipYellow.height = 20;
            shipYellow.collider = 'static';
            shipYellow.debug = true;
            correctUFO.innerHTML = "Variable 'ufo' is created!"
        } 
        })

        let alienValue = document.getElementById('callAlien3');
        let alienButton = document.getElementById('submitAlien3');
        
        alienButton.addEventListener("click", () => {
            let answer = document.getElementById('inputAlien3').value.trim(); 
            answer = answer.replace(/\s+/g,'');
        if (currentSprite) {
            currentSprite.remove();
            alienValue.innerHTML = "";
        }

        if (answer === "ufo='alien_Biege';" || answer === 'ufo="alien_Biege";') {
            currentSprite = new p.Sprite(100, 70);
            currentSprite.img = alienBiegeimg;
            alienValue.innerHTML = "Value 'alien_Biege' is added! Value of the ufo is alien_Biege!";
        } else if (answer ===  "ufo='alien_Yellow';" || answer ===  'ufo="alien_Yellow";') {
            currentSprite = new p.Sprite(100, 70);
            currentSprite.img = alienYellowimg;
            alienValue.innerHTML = "Value 'alien_Yellow' is added! Value of the ufo is alien_Yellow!";
        } else if (answer ===  "ufo='alien_Green';" || answer ===  'ufo="alien_Green";') {
            currentSprite = new p.Sprite(100, 70);
            currentSprite.debug = true;
            currentSprite.img = alienGreenimg;
            alienValue.innerHTML = "Value 'alien_Green' is added! Value of the ufo is alien_Green!";
        }
        if (currentSprite) {
            currentSprite.image.scale = 1.5;
            currentSprite.width = 100;
            currentSprite.height = 140;
            currentSprite.collider = 'dynamic';
        }
        })

    };

    p.draw = () => {
        p.background("white");
    };

};
new p5(s4, 'overlapVariableDeclaration3');